import json
from unittest import TestCase

from fastapi.testclient import TestClient

from all_tag_dict import get_backup_all_tag_dict, all_tag_dict, save, delete_tag
from fastApiServer import app

client = TestClient(app)


예나만_있는_TAG_LIST = [{"value": "최예나", "color": "yellow"}]


ONLY_YENA_TAG_LIST = {
    "tag_list": 예나만_있는_TAG_LIST
}

HITOMI_TAG = {"value": "혼다 히토미", "color": "토미베이지"}


class TestAllTagDict(TestCase):
    def setUp(self) -> None:
        # 예나 리스트로 초기화
        response = client.post("/all-tag-dict/", json=ONLY_YENA_TAG_LIST)
        assert response.status_code == 200

    def test_get_backup_all_tags_dict(self):
        backup = get_backup_all_tag_dict()
        yena_tag = backup["최예나"]
        assert yena_tag.value == "최예나", yena_tag.dict()

    def test_init(self):
        yena_tag = all_tag_dict.get("최예나")
        assert yena_tag.value == "최예나", yena_tag.dict()

    def test_read_all_tags_dict(self):
        response = client.get("/all-tag-dict/")
        assert response.status_code == 200
        assert response.json() == ONLY_YENA_TAG_LIST, response.json()

    def test_save(self):
        save()
        self.파일에_오직_예나태그만_저장되어있다()

    def test_save_all_tag_dict(self):
        response = client.post("/all-tag-dict/", json=ONLY_YENA_TAG_LIST)
        assert response.status_code == 200
        self.파일에_오직_예나태그만_저장되어있다()

    def test_add_tag(self):
        response = client.post("/all-tag-dict/tag", json=HITOMI_TAG)
        assert response.status_code == 200
        self.파일에_저장되어있는_TAG_LIST는(예나만_있는_TAG_LIST + [HITOMI_TAG])

        delete_tag(HITOMI_TAG["value"])
        self.파일에_오직_예나태그만_저장되어있다()

    @staticmethod
    def 파일에_저장되어있는_TAG_LIST는(expected):
        with open("all_tag_list.json", "r") as f:
            json_str = f.read()
            assert json.loads(json_str) == expected

    def 파일에_오직_예나태그만_저장되어있다(self):
        self.파일에_저장되어있는_TAG_LIST는(예나만_있는_TAG_LIST)
