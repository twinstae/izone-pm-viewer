from fastapi import APIRouter
import AllTagDict
from AllTagDict import AllTagList, Tag
from MailToTagDict import mail_to_tag_dict
from TagToMailDict import tag_to_mail_dict
ROOT_URL = "/all-tag-dict"

router = APIRouter(
    prefix=ROOT_URL,
    tags=["all-tag-dict"]
)


@router.get("/", response_model=AllTagList)
def get_all_tag_dict() -> AllTagList:
    return AllTagList(tag_list=AllTagDict.to_list())


@router.post("/")
def save_all_tag_dict(request_body: AllTagList):
    AllTagDict.save_from_list(request_body.tag_list)


@router.post("/tag")
def add_tag(tag: Tag):
    AllTagDict.add(tag)


@router.put("/tag/{old_tag_value}")
def update_tag(old_tag_value: str, tag: Tag):
    mail_set = tag_to_mail_dict.pop_mail_set_by_tag_value(old_tag_value)
    if mail_set is not None:
        for mail_id in mail_set:
            mail_to_tag_dict.remove_tag(mail_id, old_tag_value)

    AllTagDict.update(old_tag_value, tag)

    if mail_set is not None:
        tag_to_mail_dict.insert_mail_set_by_tag_value(tag.value, mail_set)
        tag_to_mail_dict.save()
        for mail_id in mail_set:
            mail_to_tag_dict.add_tag(mail_id, tag.value)
