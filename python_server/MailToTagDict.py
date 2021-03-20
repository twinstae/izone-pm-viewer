import json
from typing import Dict, List, Tuple, Set

from constants import OUTPUT_DIR

FILE_NAME = "mail_to_tag_dict.json"
is_test = False


class MailToTagDict:
    def __init__(self):
        """{ mail_id : Set[tag_value] }"""
        self.mail_to_tag_dict: Dict[str, Set[str]] = self.get_backup()

    @staticmethod
    def get_file_name():
        if is_test:
            return OUTPUT_DIR + "test_" + FILE_NAME
        return OUTPUT_DIR + FILE_NAME

    def get_backup(self) -> Dict[str, Set[str]]:
        try:
            with open(self.get_file_name(), "r") as f:
                json_str: str = f.read()
                raw_dict: Dict[str, List[str]] = json.loads(json_str)
                return {
                    mail_id: set(tag_list)
                    for mail_id, tag_list in raw_dict.items()
                }
        except FileNotFoundError:
            return {}

    def save(self):
        raw_dict: Dict[str, List[str]] = {
            mail_id: list(tag_set)
            for mail_id, tag_set in self.mail_to_tag_dict.items()
        }
        json_str: str = json.dumps(raw_dict)
        with open(self.get_file_name(), "w") as f:
            f.write(json_str)

    def get(self, mail_id):
        return self.mail_to_tag_dict[mail_id]

    def add_tag(self, mail_id, tag_value):
        if mail_id not in self.mail_to_tag_dict:
            self.mail_to_tag_dict[mail_id] = set()
        tag_set: Set[str] = self.mail_to_tag_dict[mail_id]
        tag_set.add(tag_value)
        self.save()

    def remove_tag(self, mail_id, tag_value):
        tag_set: Set[str] = self.mail_to_tag_dict[mail_id]
        tag_set.remove(tag_value)
        if len(tag_set) == 0:
            del self.mail_to_tag_dict[mail_id]
        self.save()

    def to_list(self):
        return [(mail_id, list(tag_set))
                for mail_id, tag_set in self.mail_to_tag_dict.items()]

    def save_from_entries(self, entries: List[Tuple[str, List[str]]]):
        self.mail_to_tag_dict = {entry[0]: set(entry[1]) for entry in entries}
        self.save()


mail_to_tag_dict = MailToTagDict()
