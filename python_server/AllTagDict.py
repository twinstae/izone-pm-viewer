import json
from typing import Dict, List
from fastapi import APIRouter
from pydantic import BaseModel

ROOT_URL = "/all-tag-dict"


class Tag(BaseModel):
    value: str
    color: str


class AllTagList(BaseModel):
    tag_list: List[Tag]


router = APIRouter(
    prefix=ROOT_URL,
    tags=["all-tag-dict"]
)
FILE_NAME: str = "all_tag_list.json"
is_test: bool = False


def get_file_name() -> str:
    if is_test:
        return "test_" + FILE_NAME
    return FILE_NAME


def get_backup() -> Dict[str, Tag]:
    try:
        with open(get_file_name(), "r") as f:
            json_str = f.read()
            raw_tag_list: List[Dict[str, str]] = json.loads(json_str)
            return {tag["value"]: Tag(**tag) for tag in raw_tag_list}
    except FileNotFoundError:
        return {}


all_tag_dict: Dict[str, Tag] = get_backup()


def save():
    tag_list: List[Dict[str, str]] = [tag.dict() for tag in all_tag_dict.values()]
    json_str = json.dumps(tag_list)
    with open(get_file_name(), "w") as f:
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


@router.delete("/tag/{tag_value}")
def delete_tag(tag_value: str):
    del all_tag_dict[tag_value]
    save()
