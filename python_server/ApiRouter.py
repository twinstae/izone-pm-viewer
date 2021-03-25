from fastapi import APIRouter
from constants import API_ROOT
from AllTagDictRouter import router as all_tag_router
from MailTagRouter import router as mail_tag_router

api_router = APIRouter(
    prefix=API_ROOT,
)


@api_router.get("/ping")
def ping():
    return {"msg": "ok"}


api_router.include_router(all_tag_router)
api_router.include_router(mail_tag_router)
