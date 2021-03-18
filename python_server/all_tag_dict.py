import json
from typing import Dict, List

from fastapi import APIRouter
from pydantic import BaseModel


class Tag(BaseModel):
    value: str
    color: str


class AllTagList(BaseModel):
    tag_list: List[Tag]


router = APIRouter(
    prefix="/all-tag-dict",
    tags=["all-tag-dict"]
)


def get_backup_all_tag_dict():
    try:
        with open("all_tag_list.json", "r") as f:
            json_str = f.read()
            raw_tag_list = json.loads(json_str)
            return {tag["value"]: Tag(**tag) for tag in raw_tag_list}
    except FileNotFoundError:
        return {}


all_tag_dict: Dict[str, Tag] = get_backup_all_tag_dict()


def save():
    tag_list = [tag.dict() for tag in all_tag_dict.values()]
    json_str = json.dumps(tag_list)
    with open("all_tag_list.json", "w") as f:
        f.write(json_str)


@router.get("/", response_model=AllTagList)
def get_all_tag_dict() -> AllTagList:
    return AllTagList(tag_list=list(all_tag_dict.values()))


@router.post("/")
def save_all_tag_dict(all_tag_list: AllTagList):
    global all_tag_dict
    all_tag_dict = {tag.value: tag for tag in all_tag_list.tag_list}
    save()


@router.post("/tag")
def add_tag(tag: Tag):
    if tag.value not in all_tag_dict:
        all_tag_dict[tag.value] = tag
    save()


def delete_tag(tag_value: str):
    del all_tag_dict[tag_value]
    save()
