import re
import os
import json
import aiofiles
from collections import namedtuple
from typing import Coroutine, Any, List, Optional
from fastapi import Depends, HTTPException
from httpx import Response
from models.mail import Mail, BodyDictDto
from services.ClientUtil import ClientUtil

PM_APP_VER = "1.4.5"
PM_DEVICE = "star2ltexx"
PM_OS_TYPE = "Android"
PM_OS_VERSION = "7.1.2"
PM_USER_AGENT = "Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-G965N Build/QP1A.190711.020)"
PM_TERMS_VERSION = "5"


class NoTokenException(Exception):
    pass


PmTuple = namedtuple('PM_TUPLE', ['id', 'n'])


class MailLoadService:
    def __init__(self, client_util: ClientUtil = Depends(ClientUtil)):
        self.client_util = client_util
        self.PM_USERID = ""
        self.PM_ACCESS_TOKEN = ""

    def set_id_and_token(self, user_id: str, access_token: str):
        self.PM_USERID = user_id
        self.PM_ACCESS_TOKEN = access_token

    def get_headers(self):
        return {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Application-Version": PM_APP_VER,
            "User-Id": self.PM_USERID,
            "Accept-Language": "ko-kr",
            "Accept-Encoding": "gzip, deflate, br",
            "Device-Version": PM_DEVICE,
            "Os-Type": PM_OS_TYPE,
            "Os-Version": PM_OS_VERSION,
            "Application-Language": "ko",
            "Access-Token": self.PM_ACCESS_TOKEN,
            "User-Agent": PM_USER_AGENT,
            "Connection": "keep-alive",
            "Terms-Version": PM_TERMS_VERSION,
        }

    def pm_get(self, url: str) -> Coroutine[Any, Any, Response]:
        return self.client_util.client.get(url, headers=self.get_headers())

    async def pm_get_text(self, url: str) -> str:
        response = await self.pm_get(url)
        return response.text

    async def pm_get_json(self, url: str):
        response = await self.pm_get(url)
        return json.loads(response.text)

    @staticmethod
    def check_error(data):
        if 'error' in data:
            error_data = data['error']['data']
            error_code = error_data['code']
            error_name = error_data['name']
            message = error_name
            if error_name == 'AccessTokenError':
                message = "????????? ??????????????????, ?????????????????????."

            raise HTTPException(status_code=error_code, detail=message)

    async def download_latest_pm(self):
        if self.PM_ACCESS_TOKEN == "":
            raise NoTokenException()

        pm_list = load_json("pm_list.json") or []
        mail_to_body_dict = load_json("mail_body_dict.json") or {}
        check_and_save_to_old(pm_list, mail_to_body_dict)

        print("?????? ????????? ???????????????.")

        target = "https://app-api.izone-mail.com/v1/inbox?is_star=0&is_unread=0&page=%d"
        page = 1
        flag = True

        new_pm_list = []
        new_mail_body_dict = dict()

        while flag:
            whole_data = await self.pm_get_json(target % page)

            self.check_error(whole_data)

            new_page = [Mail(data) for data in whole_data["mails"]]
            for pm in new_page:
                if pm.id in mail_to_body_dict:
                    flag = False
                    continue

            print([pm.id for pm in new_page])
            html_list = [self.fetch_mail(pm) for pm in new_page if pm.id not in mail_to_body_dict]

            for pm, raw_html_coroutine in zip(new_page, html_list):
                pm_id: str = pm.id
                if pm_id not in mail_to_body_dict:
                    raw_html = await raw_html_coroutine
                    body, images = remove_tag(raw_html)

                    new_value = {
                        "body": body,
                        "images": images
                    }

                    mail_to_body_dict[pm_id] = new_value

                    new_pm_list.append(pm.to_dict())
                    new_mail_body_dict[pm_id] = BodyDictDto(**new_value)

            write_json("pm_list.json", (new_pm_list + pm_list))
            write_json("mail_body_dict.json", mail_to_body_dict)

            if not whole_data["has_next_page"]:
                print("????????? ??????????????????")
                break

            page += 1
        print("?????? mail ????????? ??????????????????.")

        return new_pm_list, new_mail_body_dict

    async def fetch_mail(self, mail: Mail):
        if mail.id == "":
            raise Exception("PrivateMail ID cannot be null")

        url = "https://app-web.izone-mail.com/mail/%s" % mail.id
        res = await self.pm_get_text(url)

        # resolve relative path
        res = res.replace("/css/starship.css", "../static/starship.css")

        # found all image
        if mail.is_image:
            print("[*] %s ??? ????????? ??????????????? ???????????????." % mail.id)
            images = IMG_PTN.findall(res)
            print(images)
            for img in images:
                await self.fetch_image(img)

            res = res.replace("https://img.izone-mail.com/upload/", "../")

        async with aiofiles.open("output/mail/%s.html" % mail.id, "w", encoding="UTF-8") as f:
            await f.write(res)

        return res

    async def fetch_image(self, img):
        output_path = "output/" + img
        remote_path = "https://img.izone-mail.com/upload/" + img
        if not os.path.exists(os.path.dirname(output_path)):
            os.makedirs(os.path.dirname(output_path))

        async with aiofiles.open(output_path, "wb") as f:
            resp = await self.pm_get(remote_path)
            await f.write(resp.content)

    async def restore_birthday_pm(self):
        # ?????? ?????? ????????? ????????????
        birthday_pm_list: List[PmTuple] = load_birthday_pm_list()
        mail_to_body_dict = load_json("mail_body_dict.json") or {}

        # ?????? ?????? html ????????? ??????.
        for pm in birthday_pm_list:
            pm_html: Optional[str] = load_html(pm.id)
            if pm_html == None:
                print(f"id: {pm.id} ?????? ????????? html??? ?????? ???????????????")
                continue

            new_html = pm_html

            # ????????? src ??? ?????????
            birthday_img_re = re.compile('https://img.izone-mail.com/.*?\\.(?:jpeg|jpg|png|gif)')
            image_url_list = birthday_img_re.findall(pm_html)
            print(image_url_list)
            for image_url in image_url_list:
                # ?????? ???????????? ???????????? ???????????? ????????????.
                img_file_name = re.sub(".+/", "", image_url)
                image_path = "img/mail/" + str(pm.n + 1) + "/" + pm.id + "/" + img_file_name
                await self.fetch_birthday_image(image_url, image_path)

                # html ?????? src ??? ??? ?????? ?????? ????????? ????????????
                new_html = new_html.replace(image_url, "../"+image_path)
                write_html(pm.id, new_html)

                body, images = remove_tag(new_html)

                new_value = {
                    "body": body,
                    "images": images
                }

                mail_to_body_dict[pm.id] = new_value

        write_json("mail_body_dict.json", mail_to_body_dict)

    async def fetch_birthday_image(self, img_url, image_path):
        output_path = "output/" + image_path
        if not os.path.exists(os.path.dirname(output_path)):
            os.makedirs(os.path.dirname(output_path))

        async with aiofiles.open(output_path, "wb") as f:
            resp = await self.client_util.client.get(img_url)
            await f.write(resp.content)

    async def download_favorite_list(self):
        if self.PM_ACCESS_TOKEN == "":
            raise NoTokenException()
        print("?????? ????????? ?????? ????????? ???????????????.")

        target = "https://app-api.izone-mail.com/v1/inbox?is_star=1&is_unread=0&page=%d"
        page = 1
        flag = True

        favorite_list = []

        while flag:
            whole_data = await self.pm_get_json(target % page)
            self.check_error(whole_data)

            new_page = [raw_pm["id"] for raw_pm in whole_data["mails"]]

            print(new_page)
            favorite_list += new_page

            if not whole_data["has_next_page"]:
                print("????????? ??????????????????")
                flag = False
                break

            page += 1
        print("?????? ????????? ?????? ????????? ?????? ??????????????????.")
        return favorite_list

    async def download_unread_list(self):
        if self.PM_ACCESS_TOKEN == "":
            raise NoTokenException()
        print("?????? ?????? ?????? ????????? ???????????????.")

        target = "https://app-api.izone-mail.com/v1/inbox?is_star=0&is_unread=1&page=%d"
        page = 1
        flag = True

        unread_list = []

        while flag:
            whole_data = await self.pm_get_json(target % page)
            self.check_error(whole_data)

            new_page = [raw_pm["id"] for raw_pm in whole_data["mails"]]
            print(new_page)
            unread_list += new_page

            if not whole_data["has_next_page"]:
                print("????????? ??????????????????")
                flag = False
                break

            page += 1
        print("?????? ?????? ?????? ????????? ?????? ??????????????????.")
        return unread_list

def check_and_save_to_old(pm_list, mail_to_body_dict):
    pm_list_old = load_json("pm_list_old.json") or []
    mail_to_body_dict_old = load_json("mail_body_dict.json") or {}
    if {pm["id"] for pm in pm_list_old} != {pm["id"] for pm in pm_list}:
        print("?????? pm_list ??? old ??? ???????????????.")
        write_json("pm_list_old.json", pm_list)
    if set(mail_to_body_dict.keys()) != set(mail_to_body_dict_old.keys()):
        print("?????? mail_body_dict ??? old ??? ???????????????.")
        write_json("mail_body_dict_old.json", mail_to_body_dict)


def load_birthday_pm_list() -> List[PmTuple]:
    # ?????? ????????? ?????? ????????? ????????????
    pm_list = load_json("pm_list.json")
    member_name_dict = load_json("member_name.json")
    return [
        PmTuple(id=pm["id"], n=member_name_dict[pm["member"]])
        for pm in pm_list if pm["id"].startswith("b")
    ]


def load_html(mail_file_name) -> Optional[str]:
    if not os.path.exists("output/mail/" + mail_file_name+".html"):
        return None
    with open("output/mail/" + mail_file_name+".html", "r", encoding="UTF-8") as f:
        return f.read()


def write_html(mail_file_name, text: str):
    with open("output/mail/" + mail_file_name+".html", "w", encoding="UTF-8") as f:
        return f.write(text)


def load_json(file_name):
    if not os.path.exists("output/" + file_name):
        return None
    with open("output/" + file_name, "r", encoding="UTF-8") as f:
        return json.loads(f.read())


def write_json(file_name, data):
    with open("output/" + file_name, "w", encoding="UTF-8") as f:
        f.write(json.dumps(data, ensure_ascii=False))


IMG_PTN = re.compile('img/.*?\\.(?:jpeg|jpg|png|gif)')


def remove_tag(s: str):
    start = re.search("""<div class="main-contents" id="mail-detail"><html><head></head><body>""", s).end()
    end = re.search("""</body></html></div>""", s).start()

    result = s[start:end]

    images = IMG_PTN.findall(s) or []

    image_re = '<div class=\\"select-image.{100,400}data-id=\\".{1,8}\\" data-class=\\"images\\"></div>'
    result = re.sub(image_re, " {?????????} ", result)
    image_re2 = '<img [^>]+>'
    result = re.sub(image_re2, " {?????????} ", result)

    result = re.sub("""<span class=\\".{0,4}\\">""", "", result)
    result = re.sub("""<span class=\\".{10,30}\\">""", "", result)
    result = re.sub(' class=\\".{1,30}\\"', "", result)
    result = result.replace("""\n""", "")
    result = result.replace("""<div>""", "<p>")
    result = result.replace("""<div dir="ltr">""", "<p>")
    result = result.replace("""<div data-favorite="false">""", "<p>")
    result = result.replace("""<div data-favorite="true">""", "<p>")
    result = result.replace("""</div>""", "</p>")
    result = result.replace("""</span>""", "")
    result = result.replace("<p>&nbsp;</p>", "\n")
    return result, images
