from requests import Response
from starlette.testclient import TestClient
from fastApiServer import app

최예나 = "최예나"
히토미 = "혼다 히토미"
MAIL_ID = "m1201"
예나만_있는_TAG_LIST = [{"value": 최예나, "color": "yellow"}]
예나만_있는_TAG_LIST_JSON = {
    "tag_list": 예나만_있는_TAG_LIST
}
히토미_태그 = {"value": 히토미, "color": "토미베이지"}
예나_토미_TAG_LIST = 예나만_있는_TAG_LIST + [히토미_태그]

예나만_있는_ENTRIES = {
    "tag_to_mail_dict": [
        (최예나, [MAIL_ID])
    ],
    "mail_to_tag_dict": [
        (MAIL_ID, [최예나])
    ]
}
예나_토미_ENTRIES = {
    "tag_to_mail_dict": [
        (최예나, [MAIL_ID]),
        (히토미, [MAIL_ID])
    ],
    "mail_to_tag_dict": [
        (MAIL_ID, [최예나, 히토미])
    ]
}

client = TestClient(app)


def status_code_는_200_ok(response: Response):
    assert response.status_code == 200


def status_code_는_404_not_found(response: Response, expected_message):
    assert response.status_code == 404
    assert expected_message in response.text
