import json
from typing import Dict, List, Tuple

from fastapi import APIRouter
from pydantic import BaseModel

from AllTagDict import Tag


class MailToTagDictEntries(BaseModel):
    entries: List[Tuple[str, Tag]]


router = APIRouter(
    prefix="/mail-to-tag-dict",
    tags=["mail-to-tag-dict"]
)


# mail_to_tag_dict
@router.get("/")
def get_mail_to_tag_dict():
    # mail_to_tag_dict 를 json 으로 보낸다.
    return {"Hello": "World"}


@router.post("/")
def save_mail_to_tag_dict(mail_to_tag_dict_entries: MailToTagDictEntries):
    # mail_to_tag_dict 를 통째로 백업한다.


@router.post("/mail/{mail_id}/tag/{tag_value}")
def add_tag_to_mail(mail_id: int, tag_value: str):
    # mail_to_tag_dict 의 mail_id set 에 tag_value 를 추가한다.
    # mail_to_tag_dict 를 파일로 저장한다.


@router.delete("/mail/{mail_id}/tag/{tag_value}")
def delete_tag_from_mail(mail_id: int, tag_value: str):
    # mail_to_tag_dict 의 mail_id set 에 tag_value 를 삭제한다.
    # mail_to_tag_dict 를 파일로 저장한다.
