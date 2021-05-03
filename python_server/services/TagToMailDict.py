import json
from typing import Dict, List, Set, Tuple, Optional
from services.AllTagDict import Tag, all_tag_dict
from services import AllTagDict
from constants import OUTPUT_DIR, BASE_TAGS

FILE_NAME = "tag_to_mail_dict.json"
is_test = False


class TagToMailDict:
    def __init__(self):
        """{ tag_value : Set[mail_id] }"""
        self.tag_to_mail_dict: Dict[Tag, Set[str]] = self.get_backup()

    @staticmethod
    def get_file_name() -> str:
        if is_test:
            return OUTPUT_DIR + "test_" + FILE_NAME
        return OUTPUT_DIR + FILE_NAME

    def get_backup(self) -> Dict[Tag, Set[str]]:
        try:
            with open(self.get_file_name(), "r", encoding="UTF-8") as f:
                json_str: str = f.read()
                raw_dict: Dict[str, List[str]] = json.loads(json_str)
                return {
                    all_tag_dict[tag_value]: set(mail_list)
                    for tag_value, mail_list in raw_dict.items()
                    if AllTagDict.has(tag_value)
                }
        except FileNotFoundError:
            return {}

    def has(self, tag_value: str) -> bool:
        tag = AllTagDict.get(tag_value)
        return tag in self.tag_to_mail_dict

    def save(self) -> None:
        raw_dict: Dict[str, List[str]] = {
            tag.value: list(mail_set)
            for tag, mail_set in self.tag_to_mail_dict.items()
        }
        json_str: str = json.dumps(raw_dict, ensure_ascii=False)
        with open(self.get_file_name(), "w", encoding="UTF-8") as f:
            f.write(json_str)

    def add_mail(self, mail_id: str, tag_value: str) -> None:
        tag = all_tag_dict[tag_value]
        if tag not in self.tag_to_mail_dict:
            self.tag_to_mail_dict[tag] = set()

        mail_set: Set[str] = self.tag_to_mail_dict[tag]
        mail_set.add(mail_id)
        self.save()

    def remove_mail(self, mail_id: str, tag_value: str) -> None:
        tag = all_tag_dict[tag_value]
        mail_set: Set[str] = self.tag_to_mail_dict[tag]
        mail_set.remove(mail_id)
        if len(mail_set) == 0 and tag_value not in BASE_TAGS:
            del self.tag_to_mail_dict[tag]
            AllTagDict.delete(tag_value)

        self.save()

    def to_list(self) -> List[Tuple[str, List[str]]]:
        return [(tag.value, list(mail_set))
                for tag, mail_set in self.tag_to_mail_dict.items()]

    def save_from_entries(self, entries: List[Tuple[str, List[str]]]):
        self.tag_to_mail_dict = {
                all_tag_dict[tag_value]: set(mail_list)
            for tag_value, mail_list in entries
        }
        self.save()
        
    def pop_mail_set_by_tag_value(self, tag_value: str) -> Optional[Set[str]]:
        tag = all_tag_dict[tag_value]
        mail_set = self.tag_to_mail_dict.get(tag)
        if mail_set:
            del self.tag_to_mail_dict[tag]
            return mail_set
        return None
        
    def insert_mail_set_by_tag_value(self, tag_value: str, mail_set: Set[str]) -> None:
        tag = all_tag_dict[tag_value]
        self.tag_to_mail_dict[tag] = mail_set


tag_to_mail_dict = TagToMailDict()
