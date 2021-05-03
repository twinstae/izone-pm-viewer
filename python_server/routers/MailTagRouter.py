from typing import List, Tuple
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services import AllTagDict
from services.TagToMailDict import tag_to_mail_dict
from services.MailToTagDict import mail_to_tag_dict


class MailTagDictEntries(BaseModel):
    mail_to_tag_dict: List[Tuple[str, List[str]]]
    tag_to_mail_dict: List[Tuple[str, List[str]]]


ROOT_URL = "/mail-tag-dict"
router = APIRouter(
    prefix=ROOT_URL,
    tags=["mail-tag-dict"]
)


@router.get("/", response_model=MailTagDictEntries)
def get_mail_tag_dict() -> MailTagDictEntries:
    return MailTagDictEntries(
        mail_to_tag_dict=mail_to_tag_dict.to_list(),
        tag_to_mail_dict=tag_to_mail_dict.to_list()
    )


@router.post("/")
def save_mail_tag_dict(req_body: MailTagDictEntries):
    mail_to_tag_dict.save_from_entries(req_body.mail_to_tag_dict)
    tag_to_mail_dict.save_from_entries(req_body.tag_to_mail_dict)


@router.post("/mail/{mail_id}/tag/{tag_value}")
def add_tag_to_mail(mail_id: str, tag_value: str):
    tag_value_가_all_tag_dict_에_있는지_체크(tag_value)

    if tag_value != "💖":
        mail_to_tag_dict.add_tag(mail_id=mail_id, tag_value=tag_value)
    tag_to_mail_dict.add_mail(mail_id=mail_id, tag_value=tag_value)


@router.delete("/mail/{mail_id}/tag/{tag_value}")
def delete_tag_from_mail(mail_id: str, tag_value: str):
    tag_value_가_all_tag_dict_에_있는지_체크(tag_value)

    if tag_value != "💖":
        mail_tag_dict_에_mail_id_가_있는지_체크(mail_id)
        mail_to_tag_dict.remove_tag(mail_id=mail_id, tag_value=tag_value)
    tag_가_tag_to_mail_dict에_있는지_체크(tag_value)
    tag_to_mail_dict.remove_mail(mail_id=mail_id, tag_value=tag_value)


def tag_value_가_all_tag_dict_에_있는지_체크(tag_value):
    if not AllTagDict.has(tag_value):
        raise HTTPException(status_code=404, detail=f"태그 {tag_value}가 없습니다")


def tag_가_tag_to_mail_dict에_있는지_체크(tag_value):
    if not tag_to_mail_dict.has(tag_value):
        raise HTTPException(status_code=404, detail=f"tag_value {tag_value} 에 해당하는 mail_set 이 없습니다")


def mail_tag_dict_에_mail_id_가_있는지_체크(mail_id):
    if not mail_to_tag_dict.has(mail_id):
        raise HTTPException(status_code=404, detail=f"mail_id {mail_id} 에 해당하는 tag_set 이 없습니다")
