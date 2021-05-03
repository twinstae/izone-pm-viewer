import json
from typing import Dict, Optional

from httpx import AsyncClient
from starlette.requests import Request


class ClientUtil:
    def __init__(self, request: Request):
        self.client: AsyncClient = request.app.state.client

    async def get_json(self, url: str, headers: Optional[Dict[str, str]] = None):
        json_data = await self.get_content(url, headers=headers)
        return json.loads(json_data)

    async def get_content(self, url: str, headers: Optional[Dict[str, str]] = None):
        r = await self.client.get(url, headers=headers)
        return r.text
