import json
from unittest import TestCase
from typing import Set, List, Dict
import AllTagDict
import MailToTagDict
import TagToMailDict
from TagToMailDict import tag_to_mail_dict
from TestingUtil import client, status_code_는_200_ok, 최예나, 히토미, 히토미_태그, MAIL_ID, 예나만_있는_ENTRIES, 예나_토미_ENTRIES

예나_메일_하나인_TAG_TO_MAIL_DICT = {
    최예나: {MAIL_ID}
}
예나_토미_TAG_TO_MAIL_DICT = {
    최예나: {MAIL_ID},
    히토미: {MAIL_ID}
}
BASE_URL = MailToTagDict.ROOT_URL+"/"


class TestTagToMailDict(TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        # 히토미 태그 추가
        response = client.post(AllTagDict.ROOT_URL+"/tag", json=히토미_태그)
        status_code_는_200_ok(response)

    def setUp(self) -> None:
        TagToMailDict.is_test = True
        response = client.post(BASE_URL, json=예나만_있는_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_메일_하나인_TAG_TO_MAIL_DICT)

    def test_file_name(self):
        assert tag_to_mail_dict.get_file_name() == "test_tag_to_mail_dict.json"

    def test_get_backup(self):
        backup = tag_to_mail_dict.get_backup()
        mail_set: Set[str] = backup[최예나]
        assert MAIL_ID in mail_set

    def test_get_tag_to_mail_dict(self):
        response = client.get(BASE_URL)
        status_code_는_200_ok(response)
        assert response.json() == [[MAIL_ID, [최예나]]]

    def test_save_mail_tag_dict(self):
        self.파일에는_저장되어있다(예나_메일_하나인_TAG_TO_MAIL_DICT)  # given

        response = client.post(BASE_URL, json=예나_토미_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_TAG_TO_MAIL_DICT)

    def test_add_tag_to_mail(self):
        self.파일에는_저장되어있다(예나_메일_하나인_TAG_TO_MAIL_DICT)  # given

        client.post(BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        self.파일에는_저장되어있다(예나_토미_TAG_TO_MAIL_DICT)

    def test_delete_tag_from_mail(self):
        self.test_add_tag_to_mail()  # given

        client.delete(BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        self.파일에는_저장되어있다(예나_메일_하나인_TAG_TO_MAIL_DICT)

    @staticmethod
    def 파일에는_저장되어있다(expected):
        raw_dict: Dict[str, List[str]] = {
            tag_value: list(mail_set)
            for tag_value, mail_set in expected.items()
        }
        expected_str: str = json.dumps(raw_dict)
        with open(tag_to_mail_dict.get_file_name(), "r") as f:
            json_str = f.read()
            assert json_str == expected_str

