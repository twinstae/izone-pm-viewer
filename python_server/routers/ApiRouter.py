import os
import asyncio
import json

import aiofiles
from services.AllTagDict import UNREAD_TAG
from typing import Dict, List, Set

from fastapi import APIRouter, BackgroundTasks, Depends
from pydantic import BaseModel
import schedule

from constants import API_ROOT
from models.mail import BodyDictDto, MailDto
from routers.AllTagDictRouter import router as all_tag_router
from routers.MailTagRouter import router as mail_tag_router
from services.MailLoadService import MailLoadService
from services.TagToMailDict import tag_to_mail_dict
from services import AllTagDict
from notifypy.notify import Notify

api_router = APIRouter(
    prefix=API_ROOT,
)


def send_notification(mail: MailDto, profile: str):
    notification = Notify()
    notification.title = f"{mail.member} {mail.subject}"
    notification.message = f"[{mail.time}] {mail.preview}"
    notification.icon = f"./output/img/profile/{profile}/{mail.member}.jpg"
    notification.application_name = "IZ*ONE Private Mail Viewer"
    notification.audio = "./output/audio/notification_simple-02.wav"
    notification.url = f"http://127.0.0.1:8000/?now_pm={mail.id}"
    notification.send()

async def pend_notification(mail: MailDto, profile: str):
    end = False

    def invoke():
        nonlocal end
        send_notification(mail, profile)
        end = True
        return schedule.CancelJob

    schedule.every().day.at(mail.time[-5:]).do(invoke)
    while not end:
        await asyncio.sleep(10)
        schedule.run_pending()

    print(mail.member, mail.time, mail.subject)


notification_set: Set[str] = set()


@api_router.post("/notification/{profile}")
async def notify(mail: MailDto, profile: str, bg_tasks: BackgroundTasks):
    if mail.id in notification_set:
        print("이미 설정된 알림입니다.")
        return None

    notification_set.add(mail.id)
    bg_tasks.add_task(pend_notification, mail=mail, profile=profile)


class MailBackupRequest(BaseModel):
    user_id: str
    token: str


class MailBackupResponse(BaseModel):
    pm_list: List[MailDto]
    mail_body_dict: Dict[str, BodyDictDto]


@api_router.post("/private-mail/", response_model=MailBackupResponse)
async def download_latest_pm(
        req: MailBackupRequest,
        service: MailLoadService = Depends(MailLoadService)
):
    service.set_id_and_token(user_id=req.user_id, access_token=req.token)
    pm_list, mail_body_dict = await service.download_latest_pm()
    return MailBackupResponse(
        pm_list=pm_list,
        mail_body_dict=mail_body_dict
    )


@api_router.post("/private-mail/restore-birthday-images")
async def restore_birthday_pm(
        service: MailLoadService = Depends(MailLoadService)
):
    await service.restore_birthday_pm()
    return {"msg": "birthday images are restored without error"}


@api_router.post("/private-mail/favorite")
async def load_favorite_list(
        req: MailBackupRequest,
        service: MailLoadService = Depends(MailLoadService)
):
    service.set_id_and_token(user_id=req.user_id, access_token=req.token)
    favorite_list = await service.download_favorite_list()
    for mail_id in favorite_list:
        tag_to_mail_dict.add_mail(mail_id=mail_id, tag_value="💖")

    return favorite_list
 

@api_router.post("/private-mail/unread")
async def load_unread_list(
        req: MailBackupRequest,
        service: MailLoadService = Depends(MailLoadService)
):
    assert AllTagDict.has(UNREAD_TAG.value)
    service.set_id_and_token(user_id=req.user_id, access_token=req.token)
    unread_list = await service.download_unread_list()
    for mail_id in unread_list:
        tag_to_mail_dict.add_mail(mail_id=mail_id, tag_value=UNREAD_TAG.value)

    return unread_list


@api_router.post("/profile/{theme}/name/{name}")
async def add_profile_theme(theme: str, name: str):
    프로필_사진_목록 = [
        {"path": "la-vie-en-rose", "name":"라비앙 로즈"},
        {"path": "violeta", "name":"비올레타"},
        {"path": "fiesta", "name":"피에스타"},
        {"path": "the-secret-story-of-swan", "name":"환상동화"},
        {"path": "panorama", "name":"파노라마"},
        {"path": "one-the-story", "name":"One The Story 포스터"},
        {"path": "one-the-story-appreciation", "name":"One The Story 소감"},
        {"path": "eating-trip-3", "name":"잇힝 트립 3"},
        {"path": "birthday", "name":"생일 축하해"},
        {"path": "latest", "name":"최신 프메"}
    ]

    if os.path.exists("./output/프로필_사진_목록.json"):
        async with aiofiles.open("./output/프로필_사진_목록.json", "r", encoding="UTF-8")as f:
            old_content = await f.read()
            프로필_사진_목록 = json.loads(old_content)

    프로필_사진_목록.append({"path": theme, "name": name})

    async with aiofiles.open("./output/프로필_사진_목록.json", "w", encoding="UTF-8")as f:
        new_content = json.dumps(프로필_사진_목록)
        await f.write(new_content)


api_router.include_router(all_tag_router)
api_router.include_router(mail_tag_router)
