import json
from typing import Dict, List, Tuple, Set
from fastapi import APIRouter
from pydantic import BaseModel
from AllTagDict import Tag


class MailToTagDictEntries(BaseModel):
    entries: List[Tuple[str, Tag]]


router = APIRouter(
    prefix="/mail-to-tag-dict",
    tags=["mail-to-tag-dict"]
)
FILE_NAME = "mail_to_tag_dict.json"
is_test = False


def get_file_name():
    if is_test:
        return "test_" + FILE_NAME
    return FILE_NAME


def get_backup():
    try:
        with open(get_file_name(), "r") as f:
            json_str: str = f.read()
    except FileNotFoundError:
        return {}


"{ mail_id : Set[tag_value] }"
mail_to_tag_dict: Dict[str: Set[str]] = get_backup()


@router.get("/")
def get_mail_to_tag_dict():
    # mail_to_tag_dict 를 json 으로 보낸다.
    return {"Hello": "World"}


@router.post("/")
def save_mail_to_tag_dict(mail_to_tag_dict_entries: MailToTagDictEntries):
    # mail_to_tag_dict 를 통째로 백업한다.
    pass


@router.post("/mail/{mail_id}/tag/{tag_value}")
def add_tag_to_mail(mail_id: int, tag_value: str):
    # mail_to_tag_dict 의 mail_id set 에 tag_value 를 추가한다.
    # mail_to_tag_dict 를 파일로 저장한다.
    pass


@router.delete("/mail/{mail_id}/tag/{tag_value}")
def delete_tag_from_mail(mail_id: int, tag_value: str):
    # mail_to_tag_dict 의 mail_id set 에 tag_value 를 삭제한다.
    # mail_to_tag_dict 를 파일로 저장한다.
    pass
