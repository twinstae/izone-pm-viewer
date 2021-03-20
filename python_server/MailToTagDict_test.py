import json
from unittest import TestCase
from typing import Set, List, Dict
import AllTagDict
import MailTagRouter
import MailToTagDict
import TagToMailDict
from MailToTagDict import mail_to_tag_dict
from TestingUtil import client, status_code_는_200_ok, 최예나, 히토미, MAIL_ID, 예나만_있는_ENTRIES, 예나_토미_ENTRIES, \
    예나_토미_TAG_LIST
from constants import OUTPUT_DIR

예나_메일_하나인_MAIL_TO_TAG_DICT = {
    MAIL_ID: {최예나}
}
예나_토미_MAIL_TO_TAG_DICT = {
    MAIL_ID: {최예나, 히토미}
}
BASE_URL = MailTagRouter.ROOT_URL+"/"


class TestMailToTagDict(TestCase):
    def setUp(self) -> None:
        AllTagDict.is_test = True
        TagToMailDict.is_test = True
        MailToTagDict.is_test = True

        client.post(AllTagDict.ROOT_URL+"/", json={"tag_list": 예나_토미_TAG_LIST})
        response = client.post(BASE_URL, json=예나만_있는_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)

    def test_file_name(self):
        assert mail_to_tag_dict.get_file_name() == OUTPUT_DIR + "test_mail_to_tag_dict.json"

    def test_get_backup(self):
        backup = mail_to_tag_dict.get_backup()
        tag_set: Set[str] = backup[MAIL_ID]
        assert 최예나 in tag_set

    def test_get_mail_to_tag_dict(self):
        response = client.get(BASE_URL)
        status_code_는_200_ok(response)
        assert response.json()["mail_to_tag_dict"] == [[MAIL_ID, [최예나]]]

    def test_save_mail_to_tag_dict(self):
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)  # given

        response = client.post(BASE_URL, json=예나_토미_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_MAIL_TO_TAG_DICT)

    def test_add_tag_to_mail(self):
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)  # given

        client.post(BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        self.파일에는_저장되어있다(예나_토미_MAIL_TO_TAG_DICT)

    def test_delete_tag_from_mail(self):
        self.test_add_tag_to_mail()  # given

        client.delete(BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)

    @staticmethod
    def 파일에는_저장되어있다(expected):
        tag_list: Dict[str, List[str]] = {
            mail_id: list(tag_set)
            for mail_id, tag_set in expected.items()
        }
        expected_str: str = json.dumps(tag_list)
        with open(mail_to_tag_dict.get_file_name(), "r") as f:
            json_str = f.read()
            assert json_str == expected_str
