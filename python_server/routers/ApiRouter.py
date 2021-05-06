import asyncio
from typing import Dict, List
import webbrowser

from fastapi import APIRouter, BackgroundTasks, Depends
from notifypy import Notify
from pydantic import BaseModel
import schedule

from constants import API_ROOT
from models.mail import BodyDictDto, MailDto
from routers.AllTagDictRouter import router as all_tag_router
from routers.MailTagRouter import router as mail_tag_router
from services.MailLoadService import MailLoadService
from services.TagToMailDict import tag_to_mail_dict

api_router = APIRouter(
    prefix=API_ROOT,
)


async def pend_notification(mail: MailDto, profile: str):
    end = False

    def send_notification():
        nonlocal end
        notification = Notify()
        notification.title = f"{mail.member} {mail.subject}"
        notification.message = f"[{mail.time}] {mail.preview}"
        notification.icon = f"./output/img/profile/{profile}/{mail.member}.jpg"
        notification.application_name = "IZ*ONE Private Mail Viewer"
        notification.audio = "./output/audio/notification_simple-02.wav"
        notification.url = f"http://127.0.0.1:8000/?now_pm={mail.id}"
        notification.send()

        end = True
        return schedule.CancelJob

    schedule.every().day.at(mail.time[-5:]).do(send_notification)
    while not end:
        await asyncio.sleep(10)
        schedule.run_pending()

    print(mail.member, mail.time, mail.subject)


@api_router.post("/notification/{profile}")
async def notify(mail: MailDto, profile: str, bg_tasks: BackgroundTasks):
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


@api_router.post("/private-mail/favorite-list")
async def load_favorite_list(
        service: MailLoadService = Depends(MailLoadService)
):
    favorite_list = await service.download_favorite_list()
    for mail_id in favorite_list:
        tag_to_mail_dict.add_mail(mail_id=mail_id, tag_value="💖")
  

api_router.include_router(all_tag_router)
api_router.include_router(mail_tag_router)
