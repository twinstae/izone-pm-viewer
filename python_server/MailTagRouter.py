from typing import List, Tuple
from fastapi import APIRouter
from pydantic import BaseModel

from AllTagDict import all_tag_dict
from TagToMailDict import tag_to_mail_dict
from MailToTagDict import mail_to_tag_dict


class MailTagDictEntries(BaseModel):
    mail_to_tag_dict: List[Tuple[str, List[str]]]
    tag_to_mail_dict: List[Tuple[str, List[str]]]


ROOT_URL = "/mail-tag-dict"
router = APIRouter(
    prefix=ROOT_URL,
    tags=["mail-tag-dict"]
)


@router.get("/")
def get_mail_to_tag_dict() -> List[Tuple[str, List[str]]]:
    return mail_to_tag_dict.to_list()


@router.post("/")
def save_mail_tag_dict(req_body: MailTagDictEntries):
    mail_to_tag_dict.save_from_entries(req_body.mail_to_tag_dict)
    tag_to_mail_dict.save_from_entries(req_body.tag_to_mail_dict)


@router.post("/mail/{mail_id}/tag/{tag_value}")
def add_tag_to_mail(mail_id: str, tag_value: str):
    assert tag_value in all_tag_dict
    mail_to_tag_dict.add_tag(mail_id=mail_id, tag_value=tag_value)
    tag_to_mail_dict.add_mail(mail_id=mail_id, tag_value=tag_value)


@router.delete("/mail/{mail_id}/tag/{tag_value}")
def delete_tag_from_mail(mail_id: str, tag_value: str):
    assert tag_value in all_tag_dict
    mail_to_tag_dict.remove_tag(mail_id=mail_id, tag_value=tag_value)
    tag_to_mail_dict.remove_mail(mail_id=mail_id, tag_value=tag_value)
