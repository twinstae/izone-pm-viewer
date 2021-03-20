import json
from unittest import TestCase
from fastapi.testclient import TestClient

import MailToTagDict
from fastApiServer import app
from TestingUtil import status_code_는_200_ok

client = TestClient(app)


class TestMailToTagDict(TestCase):
    def setUp(self) -> None:
        MailToTagDict.is_test = True
        # 초기화한다

    def test_init(self):
        # 처음에는 테스트용만 있다
        pass

    @staticmethod
    def 파일에_저장되어있는_TAG_LIST는(expected):
        with open(MailToTagDict.get_file_name(), "r") as f:
            json_str = f.read()
            assert json.loads(json_str) == expected


"""
{ mail_id : tag_value[] }

"""
