import json
from typing import Dict, List, Tuple, Set
from fastapi import APIRouter
from pydantic import BaseModel

from AllTagDict import all_tag_dict


class MailToTagDictEntries(BaseModel):
    entries: List[Tuple[str, List[str]]]


ROOT_URL = "/mail-to-tag-dict"
router = APIRouter(
    prefix=ROOT_URL,
    tags=["mail-to-tag-dict"]
)
FILE_NAME = "mail_to_tag_dict.json"
is_test = False


def get_file_name():
    if is_test:
        return "test_" + FILE_NAME
    return FILE_NAME


def get_backup() -> Dict[str, Set[str]]:
    try:
        with open(get_file_name(), "r") as f:
            json_str: str = f.read()
            raw_dict: Dict[str, List[str]] = json.loads(json_str)
            return {
                mail_id: set(tag_list)
                for mail_id, tag_list in raw_dict.items()
            }
    except FileNotFoundError:
        return {}


"{ mail_id : Set[tag_value] }"
mail_to_tag_dict: Dict[str, Set[str]] = get_backup()


def save():
    tag_list: Dict[str, List[str]] = {
        mail_id: list(tag_set)
        for mail_id, tag_set in mail_to_tag_dict.items()
    }
    json_str: str = json.dumps(tag_list)
    with open(get_file_name(), "w") as f:
        f.write(json_str)


@router.get("/")
def get_mail_to_tag_dict() -> List[Tuple[str, List[str]]]:
    return [(mail_id, list(tag_set))
            for mail_id, tag_set in mail_to_tag_dict.items()]


@router.post("/")
def save_mail_to_tag_dict(req_body: MailToTagDictEntries):
    global mail_to_tag_dict
    mail_to_tag_dict = {entry[0]: set(entry[1]) for entry in req_body.entries}
    save()


@router.post("/mail/{mail_id}/tag/{tag_value}")
def add_tag_to_mail(mail_id: str, tag_value: str):
    if mail_id not in mail_to_tag_dict:
        mail_to_tag_dict[mail_id] = set()
    tag_set: Set[str] = mail_to_tag_dict[mail_id]
    assert tag_value in all_tag_dict
    tag_set.add(tag_value)
    save()


@router.delete("/mail/{mail_id}/tag/{tag_value}")
def delete_tag_from_mail(mail_id: str, tag_value: str):
    tag_set: Set[str] = mail_to_tag_dict[mail_id]
    assert tag_value in all_tag_dict
    tag_set.remove(tag_value)
    if len(tag_set) == 0:
        del mail_to_tag_dict[mail_id]
    save()
