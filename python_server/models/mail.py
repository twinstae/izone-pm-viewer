from datetime import datetime
from pydantic import BaseModel
from typing import List


class Mail:
    def __init__(self, raw_pm):
        self.id: str = raw_pm["id"]
        self.member: str = raw_pm["member"]["name"]
        self.subject: str = raw_pm["subject"]
        self.preview: str = raw_pm["content"][:45]
        self.datetime = datetime.fromisoformat(raw_pm["receive_datetime"])
        self.time = self.datetime.strftime('%Y/%m/%d %H:%M')
        self.detail_url: str = raw_pm["detail_url"]
        self.is_star: bool = raw_pm["is_star"]
        self.is_image: bool = raw_pm["is_image"]

    def to_dict(self):
        result = self.__dict__.copy()
        del result["datetime"]
        del result["detail_url"]
        del result["is_star"]
        del result["is_image"]
        return result


class MailDto(BaseModel):
    id: str
    time: str
    member: str
    subject: str
    preview: str


class BodyDictDto(BaseModel):
    body: str
    images: List[str]
