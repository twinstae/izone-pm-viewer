import json
from typing import Dict, List, Tuple, Set, Optional

from services.AllTagDict import Tag
from services import AllTagDict
from constants import OUTPUT_DIR

FILE_NAME = "mail_to_tag_dict.json"
is_test = False


class MailToTagDict:
    def __init__(self):
        """{ mail_id : Set[tag_value] }"""
        self.mail_to_tag_dict: Dict[str, Set[Tag]] = self.get_backup()

    @staticmethod
    def get_file_name():
        if is_test:
            return OUTPUT_DIR + "test_" + FILE_NAME
        return OUTPUT_DIR + FILE_NAME

    def get_backup(self) -> Dict[str, Set[Tag]]:
        try:
            with open(self.get_file_name(), "r", encoding="UTF-8") as f:
                json_str: str = f.read()
                raw_dict: Dict[str, List[str]] = json.loads(json_str)
                return {
                    mail_id: set([
                            AllTagDict.get(tag_value)
                            for tag_value in tag_value_list
                            if AllTagDict.has(tag_value)
                        ])
                    for mail_id, tag_value_list in raw_dict.items()
                }
        except FileNotFoundError:
            return {}

    def save(self):
        raw_dict: Dict[str, List[str]] = {
            mail_id: [tag.value for tag in list(tag_set)]
            for mail_id, tag_set in self.mail_to_tag_dict.items()
        }
        json_str: str = json.dumps(raw_dict, ensure_ascii=False)
        with open(self.get_file_name(), "w", encoding="UTF-8") as f:
            f.write(json_str)

    def has(self, mail_id: str) -> bool:
        return mail_id in self.mail_to_tag_dict

    def get(self, mail_id: str) -> Optional[Set[Tag]]:
        return self.mail_to_tag_dict.get(mail_id)

    def add_tag(self, mail_id: str, tag_value: str):
        if tag_value == "💖":
            return None

        if mail_id not in self.mail_to_tag_dict:
            self.mail_to_tag_dict[mail_id] = set()

        tag_set: Set[Tag] = self.mail_to_tag_dict[mail_id]
        tag = AllTagDict.get(tag_value)
        tag_set.add(tag)
        self.save()

    def remove_tag(self, mail_id: str, tag_value: str):
        if tag_value == "💖":
            return None

        tag_set: Set[Tag] = self.mail_to_tag_dict.get(mail_id)
        tag = AllTagDict.get(tag_value)
        tag_set.remove(tag)
        if len(tag_set) == 0:
            del self.mail_to_tag_dict[mail_id]
        self.save()

    def to_list(self):
        return [(mail_id, [tag.value for tag in list(tag_set)])
                for mail_id, tag_set in self.mail_to_tag_dict.items()]

    def save_from_entries(self, entries: List[Tuple[str, List[str]]]):
        def tag_list_to_tag_set(tag_value_list: List[str]) -> Set[Tag]:
            return {
                AllTagDict.get(tag_value)
                for tag_value in tag_value_list
                if AllTagDict.has(tag_value)
            }

        self.mail_to_tag_dict = {
            mail_id:  tag_list_to_tag_set(tag_value_list)
            for mail_id, tag_value_list in entries
        }
        self.save()


mail_to_tag_dict = MailToTagDict()
