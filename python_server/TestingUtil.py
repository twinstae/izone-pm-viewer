from starlette.responses import Response
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

client = TestClient(app)


def status_code_는_200_ok(response: Response):
    assert response.status_code == 200
