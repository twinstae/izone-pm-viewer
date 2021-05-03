import json
from unittest import TestCase
from typing import Set, Dict
from services import AllTagDict, MailToTagDict, TagToMailDict
from routers import AllTagDictRouter, MailTagRouter
from services.MailToTagDict import mail_to_tag_dict
from TestingUtil import client, status_code_는_200_ok, 최예나, 히토미, MAIL_ID, 예나만_있는_ENTRIES, 예나_토미_ENTRIES, \
    예나_토미_TAG_LIST, 히토미_태그, status_code_는_404_not_found
from constants import OUTPUT_DIR, API_ROOT

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

        client.post(API_ROOT+AllTagDictRouter.ROOT_URL+"/", json={"tag_list": 예나_토미_TAG_LIST})
        response = client.post(API_ROOT+BASE_URL, json=예나만_있는_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)

    def test_file_name(self):
        assert mail_to_tag_dict.get_file_name() == OUTPUT_DIR + "test_mail_to_tag_dict.json"

    def test_get_backup(self):
        backup = mail_to_tag_dict.get_backup()
        tag_set: Set[AllTagDict.Tag] = backup[MAIL_ID]
        최예나_Tag = AllTagDict.get(최예나)
        assert 최예나_Tag in tag_set

    def test_get_mail_to_tag_dict(self):
        response = client.get(API_ROOT+BASE_URL)
        status_code_는_200_ok(response)
        assert response.json()["mail_to_tag_dict"] == [[MAIL_ID, [최예나]]]

    def test_mail_to_tag_dict_를_저장(self):
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)  # given

        response = client.post(API_ROOT+BASE_URL, json=예나_토미_ENTRIES)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_MAIL_TO_TAG_DICT)

    def test_메일에_태그를_추가(self):
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)  # given

        response = client.post(API_ROOT+BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_MAIL_TO_TAG_DICT)

    def test_메일에_존재하지_않는_태그를_추가(self):
        response = client.post(API_ROOT+BASE_URL+f"mail/{MAIL_ID}/tag/{'존재하지않는태그'}")

        status_code_는_404_not_found(
            response,
            f"태그 {'존재하지않는태그'}가 없습니다"
        )

    def test_메일에_달린_태그를_삭제(self):
        self.test_메일에_태그를_추가()  # given

        response = client.delete(API_ROOT+BASE_URL+f"mail/{MAIL_ID}/tag/{히토미}")
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_메일_하나인_MAIL_TO_TAG_DICT)

    def test_존재하지_않는_태그를_삭제(self):
        response = client.delete(API_ROOT+BASE_URL+f"mail/{MAIL_ID}/tag/{'존재하지않는태그'}")
        status_code_는_404_not_found(
            response,
            f"태그 {'존재하지않는태그'}가 없습니다"
        )

    def test_존재하지_않는_메일을_삭제(self):
        response = client.delete(API_ROOT+BASE_URL+f"mail/{'존재하지않는메일'}/tag/{히토미}")
        status_code_는_404_not_found(
            response,
            f"mail_id {'존재하지않는메일'} 에 해당하는 tag_set 이 없습니다"
        )

    def test_태그를_업데이트하면_mail_to_tag_dict_도_최신화(self):
        client.put(API_ROOT+AllTagDictRouter.ROOT_URL+f"/tag/{최예나}", json=히토미_태그)

        response = client.get(API_ROOT+BASE_URL)
        status_code_는_200_ok(response)
        assert response.json()["mail_to_tag_dict"] == [[MAIL_ID, [히토미]]]

    @staticmethod
    def 파일에는_저장되어있다(expected: Dict[str, Set[str]]):
        with open(mail_to_tag_dict.get_file_name(), "r", encoding="UTF-8") as f:
            raw_actual = json.loads(f.read())
            actual: Dict[str, Set[AllTagDict.Tag]] = {key: set(tag_list) for key, tag_list in raw_actual.items()}
            assert actual == expected
