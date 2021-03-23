from fastapi import APIRouter
import AllTagDict
from AllTagDict import AllTagList, Tag

ROOT_URL = "/all-tag-dict"

router = APIRouter(
    prefix=ROOT_URL,
    tags=["all-tag-dict"]
)


@router.get("/", response_model=AllTagList)
def get_all_tag_dict() -> AllTagList:
    return AllTagList(tag_list=AllTagDict.to_list())


@router.post("/")
def save_all_tag_dict(all_tag_list: AllTagList):
    AllTagDict.all_tag_dict = {tag.value: tag for tag in all_tag_list.tag_list}
    AllTagDict.save()


@router.post("/tag")
def add_tag(tag: Tag):
    AllTagDict.add(tag)


@router.delete("/tag/{tag_value}")
def delete_tag(tag_value: str):
    AllTagDict.delete(tag_value)


@router.put("/tag/{old_tag_value}")
def update_tag(old_tag_value: str, tag: Tag):
    AllTagDict.update(old_tag_value, tag)
