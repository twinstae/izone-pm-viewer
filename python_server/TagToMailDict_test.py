import json
from unittest import TestCase
from typing import Set, List, Dict
import AllTagDict
import AllTagDictRouter
import MailTagRouter
import MailToTagDict
import TagToMailDict
from TagToMailDict import tag_to_mail_dict
from TestingUtil import client, status_code_는_200_ok, 최예나, 히토미, MAIL_ID, 예나만_있는_ENTRIES, 예나_토미_ENTRIES, \
    예나_토미_TAG_LIST, 히토미_태그, status_code_는_404_not_found
from constants import OUTPUT_DIR, API_ROOT

예나_메일_하나인_TAG_TO_MAIL_DICT = {
    최예나: {MAIL_ID}
}
예나_토미_TAG_TO_MAIL_DICT = {
    최예나: {MAIL_ID},
    히토미: {MAIL_ID}
}
BASE_URL = MailTagRouter.ROOT_URL+"/"


class TestTagToMailDict(TestCase):
    def setUp(self) -> None:
        AllTagDict.is_test = True
        TagToMailDict.is_test = True
        MailToTagDict.is_test = True

        client.post(API_ROOT+AllTagDictRouter.ROOT_URL + "/", json={"tag_list": 예나_토미_TAG_LIST})
        response = client.post(API_ROOT+BASE_URL, json=예나만_있는_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_메일_하나인_TAG_TO_MAIL_DICT)

    def test_file_name(self):
        assert tag_to_mail_dict.get_file_name() == OUTPUT_DIR + "test_tag_to_mail_dict.json"

    def test_get_backup(self):
        backup = tag_to_mail_dict.get_backup()
        최예나_Tag = AllTagDict.get(최예나)
        mail_set: Set[str] = backup[최예나_Tag]
        assert MAIL_ID in mail_set

    def test_get_tag_to_mail_dict(self):
        response = client.get(API_ROOT+BASE_URL)
        status_code_는_200_ok(response)
        assert response.json()["tag_to_mail_dict"] == [[최예나, [MAIL_ID]]]

    def test_save_mail_tag_dict(self):
        self.파일에는_저장되어있다(예나_메일_하나인_TAG_TO_MAIL_DICT)  # given

        response = client.post(API_ROOT+BASE_URL, json=예나_토미_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_TAG_TO_MAIL_DICT)

    def test_add_tag_to_mail(self):
        self.파일에는_저장되어있다(예나_메일_하나인_TAG_TO_MAIL_DICT)  # given

        response = client.post(API_ROOT+BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_TAG_TO_MAIL_DICT)

    def test_메일에서_태그를_삭제(self):
        self.test_add_tag_to_mail()  # given

        response = client.delete(API_ROOT+BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다({"최예나": ["m1201"], "혼다 히토미": []})

    def test_메일이_없는_태그를_삭제(self):
        response = client.delete(API_ROOT+BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")

        status_code_는_404_not_found(
            response,
            f"tag_value {히토미} 에 해당하는 mail_set 이 없습니다"
        )

    def test_태그를_수정하면_tag_to_mail_dict_에도_반영(self):
        client.put(API_ROOT + AllTagDictRouter.ROOT_URL+f"/tag/{최예나}", json=히토미_태그)

        response = client.get(API_ROOT + BASE_URL)
        status_code_는_200_ok(response)
        assert response.json()["tag_to_mail_dict"] == [[히토미, [MAIL_ID]]]

    def test_메일에서_수정한_태그를_삭제(self):
        self.test_태그를_수정하면_tag_to_mail_dict_에도_반영()

        response = client.delete(API_ROOT + BASE_URL + f"mail/{MAIL_ID}/tag/{히토미}")
        status_code_는_200_ok(response)

    @staticmethod
    def 파일에는_저장되어있다(expected):
        raw_dict: Dict[str, List[str]] = {
            tag_value: list(mail_set)
            for tag_value, mail_set in expected.items()
        }
        expected_str: str = json.dumps(raw_dict, ensure_ascii=False)
        with open(tag_to_mail_dict.get_file_name(), "r", encoding="UTF-8") as f:
            json_str = f.read()
            assert json_str == expected_str
