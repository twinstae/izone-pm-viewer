from typing import List, Dict
from fastapi import APIRouter, Depends
from constants import API_ROOT
from models.mail import BodyDictDto, MailDto
from routers.AllTagDictRouter import router as all_tag_router
from routers.MailTagRouter import router as mail_tag_router
from services.MailLoadService import MailLoadService
from pydantic import BaseModel

api_router = APIRouter(
    prefix=API_ROOT,
)


@api_router.get("/ping")
def ping():
    return {"msg": "ok"}


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


api_router.include_router(all_tag_router)
api_router.include_router(mail_tag_router)
