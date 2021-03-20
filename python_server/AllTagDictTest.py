import json
from unittest import TestCase
from fastapi.testclient import TestClient
import AllTagDict
from AllTagDict import get_backup_all_tag_dict, all_tag_dict, save, get_file_name
from fastApiServer import app
from TestingUtil import status_code_는_200_ok

예나만_있는_TAG_LIST = [{"value": "최예나", "color": "yellow"}]
예나만_있는_TAG_LIST_JSON = {
    "tag_list": 예나만_있는_TAG_LIST
}
히토미_태그 = {"value": "혼다 히토미", "color": "토미베이지"}

client = TestClient(app)


class TestAllTagDict(TestCase):
    def setUp(self) -> None:
        AllTagDict.is_test = True
        response = client.post("/all-tag-dict/", json=예나만_있는_TAG_LIST_JSON)
        status_code_는_200_ok(response)

    def test_init(self):
        assert len(all_tag_dict) == 1
        예나_태그 = all_tag_dict.get("최예나")
        assert 예나_태그.value == "최예나", 예나_태그.dict()

    def test_file_name(self):
        assert get_file_name() == "test_all_tag_list.json"

    def test_get_backup_all_tags_dict(self):
        backup = get_backup_all_tag_dict()
        예나_태그 = backup["최예나"]
        assert 예나_태그.value == "최예나", 예나_태그.dict()

    def test_read_all_tags_dict(self):
        response = client.get("/all-tag-dict/")
        status_code_는_200_ok(response)
        assert response.json() == 예나만_있는_TAG_LIST_JSON, response.json()

    def test_save(self):
        save()
        self.파일에_오직_예나태그만_저장되어있다()

    def test_save_all_tag_dict(self):
        response = client.post("/all-tag-dict/", json=예나만_있는_TAG_LIST_JSON)
        status_code_는_200_ok(response)
        self.파일에_오직_예나태그만_저장되어있다()

    def test_add_tag(self):
        response = client.post("/all-tag-dict/tag", json=히토미_태그)
        status_code_는_200_ok(response)
        self.파일에_저장되어있는_TAG_LIST는(예나만_있는_TAG_LIST + [히토미_태그])

    def test_delete_tag(self):
        self.test_add_tag()
        client.delete(f"/all-tag-dict/tag/{히토미_태그['value']}")
        self.파일에_오직_예나태그만_저장되어있다()

    @staticmethod
    def 파일에_저장되어있는_TAG_LIST는(expected):
        with open(get_file_name(), "r") as f:
            json_str = f.read()
            assert json.loads(json_str) == expected

    def 파일에_오직_예나태그만_저장되어있다(self):
        self.파일에_저장되어있는_TAG_LIST는(예나만_있는_TAG_LIST)
