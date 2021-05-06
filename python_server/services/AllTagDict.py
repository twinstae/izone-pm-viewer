import json
from typing import Dict, List, Optional
from pydantic import BaseModel
from constants import OUTPUT_DIR


class Tag(BaseModel):
    value: str
    color: str

    def __hash__(self):
        return hash(tuple(sorted(self.dict().items())))


class AllTagList(BaseModel):
    tag_list: List[Tag]


FILE_NAME: str = "all_tag_list.json"
is_test: bool = False
UNREAD_TAG = Tag(value="읽지 않음", color="#f06d9c")


def get_file_name() -> str:
    if is_test:
        return OUTPUT_DIR + "test_" + FILE_NAME
    return OUTPUT_DIR + FILE_NAME


def get_backup() -> Dict[str, Tag]:
    try:
        with open(get_file_name(), "r", encoding="UTF-8") as f:
            json_str = f.read()
            raw_tag_list: List[Dict[str, str]] = json.loads(json_str)
            result = {
                tag["value"]: Tag(**tag)
                for tag in raw_tag_list
            }
            if UNREAD_TAG.value not in result:
                result[UNREAD_TAG.value] = UNREAD_TAG
            return result

    except FileNotFoundError:
        return dict()


all_tag_dict: Dict[str, Tag] = get_backup()


def has(tag_value: str) -> bool:
    return tag_value in all_tag_dict


def get(tag_value: str) -> Optional[Tag]:
    return all_tag_dict.get(tag_value)


def save():
    tag_list: List[Dict[str, str]] = [tag.dict() for tag in all_tag_dict.values()]
    json_str = json.dumps(tag_list, ensure_ascii=False)
    with open(get_file_name(), "w", encoding="UTF-8") as f:
        f.write(json_str)


def save_from_list(tag_list: List[Tag]):
    global all_tag_dict
    all_tag_dict = {tag.value: tag for tag in tag_list}
    save()


def to_list():
    return list(all_tag_dict.values())


def add(tag: Tag):
    if tag.value not in all_tag_dict:
        all_tag_dict[tag.value] = tag
        save()


def delete(tag_value: str):
    if tag_value in all_tag_dict:
        del all_tag_dict[tag_value]
        save()


def update(old_tag_value: str, tag: Tag):
    if old_tag_value in all_tag_dict:
        old_tag = all_tag_dict[old_tag_value]

        old_tag.value = tag.value
        old_tag.color = tag.color

        del all_tag_dict[old_tag_value]
        all_tag_dict[tag.value] = old_tag
