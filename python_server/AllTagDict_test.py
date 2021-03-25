import json
from unittest import TestCase
import AllTagDict
import AllTagDictRouter
from TestingUtil import client, 최예나, 히토미, status_code_는_200_ok, 예나만_있는_TAG_LIST_JSON, 예나_토미_TAG_LIST, 히토미_태그, \
    예나만_있는_TAG_LIST
from constants import OUTPUT_DIR, API_ROOT

BASE_URL = AllTagDictRouter.ROOT_URL+"/"


class TestAllTagDict(TestCase):
    def setUp(self) -> None:
        AllTagDict.is_test = True
        response = client.post(API_ROOT+BASE_URL, json=예나만_있는_TAG_LIST_JSON)
        status_code_는_200_ok(response)

    def test_init(self):
        assert len(AllTagDict.all_tag_dict) == 1
        예나_태그 = AllTagDict.all_tag_dict.get("최예나")
        assert 예나_태그.value == 최예나, 예나_태그.dict()

    def test_file_name(self):
        assert AllTagDict.get_file_name() == OUTPUT_DIR + "test_all_tag_list.json"

    def test_get_backup(self):
        backup = AllTagDict.get_backup()
        예나_태그 = backup[최예나]
        assert 예나_태그.value == 최예나, 예나_태그.dict()

    def test_read_all_tags_dict(self):
        response = client.get(API_ROOT+BASE_URL)
        status_code_는_200_ok(response)
        assert response.json() == 예나만_있는_TAG_LIST_JSON, response.json()

    def test_save_all_tag_dict(self):
        self.파일에는_저장되어있다(예나만_있는_TAG_LIST)

        req_json = {
            "tag_list": 예나_토미_TAG_LIST
        }
        response = client.post(API_ROOT+BASE_URL, json=req_json)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_TAG_LIST)

    def test_add_tag(self):
        self.파일에는_저장되어있다(예나만_있는_TAG_LIST)

        response = client.post(API_ROOT+BASE_URL+"tag", json=히토미_태그)
        status_code_는_200_ok(response)
        self.파일에는_저장되어있다(예나_토미_TAG_LIST)

    def test_update_tag(self):
        assert AllTagDict.has(최예나)
        assert not AllTagDict.has(히토미)

        client.put(API_ROOT+AllTagDictRouter.ROOT_URL+f"/tag/{최예나}", json=히토미_태그)

        assert not AllTagDict.has(최예나)
        assert AllTagDict.has(히토미)

    @staticmethod
    def 파일에는_저장되어있다(expected):
        with open(AllTagDict.get_file_name(), "r", encoding="UTF-8") as f:
            json_str = f.read()
            assert json.loads(json_str) == expected
