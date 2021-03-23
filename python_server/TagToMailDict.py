import json
from typing import Dict, List, Set, Tuple

from AllTagDict import Tag
import AllTagDict
from constants import OUTPUT_DIR

FILE_NAME = "tag_to_mail_dict.json"
is_test = False


class TagToMailDict:
    def __init__(self):
        """{ tag_value : Set[mail_id] }"""
        self.tag_to_mail_dict: Dict[Tag, Set[str]] = self.get_backup()

    @staticmethod
    def get_file_name():
        if is_test:
            return OUTPUT_DIR + "test_" + FILE_NAME
        return OUTPUT_DIR + FILE_NAME

    def get_backup(self) -> Dict[Tag, Set[str]]:
        try:
            with open(self.get_file_name(), "r") as f:
                json_str: str = f.read()
                raw_dict: Dict[str, List[str]] = json.loads(json_str)
                return {
                    AllTagDict.get(tag_value): set(mail_list)
                    for tag_value, mail_list in raw_dict.items()
                }
        except FileNotFoundError:
            return {}

    def save(self):
        raw_dict: Dict[str, List[str]] = {
            tag.value: list(mail_set)
            for tag, mail_set in self.tag_to_mail_dict.items()
        }
        json_str: str = json.dumps(raw_dict)
        with open(self.get_file_name(), "w") as f:
            f.write(json_str)

    def add_mail(self, mail_id, tag_value):
        tag = AllTagDict.get(tag_value)
        if tag not in self.tag_to_mail_dict:
            self.tag_to_mail_dict[tag] = set()

        mail_set: Set[str] = self.tag_to_mail_dict[tag]
        mail_set.add(mail_id)
        self.save()

    def remove_mail(self, mail_id, tag_value):
        tag = AllTagDict.get(tag_value)
        mail_set: Set[str] = self.tag_to_mail_dict[tag]
        mail_set.remove(mail_id)
        if len(mail_set) == 0:
            del self.tag_to_mail_dict[tag]

        self.save()

    def to_list(self):
        return [(tag.value, list(mail_set))
                for tag, mail_set in self.tag_to_mail_dict.items()]

    def save_from_entries(self, entries: List[Tuple[str, List[str]]]):
        self.tag_to_mail_dict = {AllTagDict.get(entry[0]): set(entry[1]) for entry in entries}
        self.save()


tag_to_mail_dict = TagToMailDict()
