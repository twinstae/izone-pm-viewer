from starlette.responses import Response


def status_code_는_200_ok(response: Response):
    assert response.status_code == 200
