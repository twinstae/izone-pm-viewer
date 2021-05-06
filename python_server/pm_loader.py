import re
import os
import json
from datetime import datetime
import requests
from fastapi import APIRouter
from pydantic import BaseModel

PM_USERID = "4s7x2av597c0"
PM_ACCESS_TOKEN = "kmrsayyf000q7c7c750nz4ty"

PM_APP_VER = "1.4.5"
PM_DEVICE = "star2ltexx"
PM_OS_TYPE = "Android"
PM_OS_VERSION = "7.1.2"
PM_USER_AGENT = "Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-G965N Build/QP1A.190711.020)"


router = APIRouter(
    prefix="/private-mail",
    tags=["private-mail"]
)


class PmRequest(BaseModel):
    user_id: str
    token: str


@router.post("/")
def download_latest_pm_with_token(auth: PmRequest):
    global PM_USERID, PM_ACCESS_TOKEN
    PM_USERID = auth.user_id
    PM_ACCESS_TOKEN = auth.token

    pm_list, mail_to_body_dict = download_latest_pm()
    return {
        "pm_list": pm_list,
        "mail_to_body_dict": mail_to_body_dict
    }


def pm_get(url):
    pm_headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Application-Version": PM_APP_VER,
        "User-Id": PM_USERID,
        "Accept-Language": "ko-kr",
        "Accept-Encoding": "gzip, deflate, br",
        "Device-Version": PM_DEVICE,
        "Os-Type": PM_OS_TYPE,
        "Os-Version": PM_OS_VERSION,
        "Application-Language": "ko",
        "Access-Token": PM_ACCESS_TOKEN,
        "User-Agent": PM_USER_AGENT,
        "Connection": "keep-alive",
        "Terms-Version": "5",
    }
    return requests.get(url, headers=pm_headers)


def download_latest_pm():
    pm_list = load_json("pm_list.json") or []
    mail_to_body_dict = load_json("mail_body_dict.json") or {}
    write_json("pm_list_old.json", pm_list)
    write_json("mail_body_dict_old.json", mail_to_body_dict)

    print("최신 메일을 로딩합니다.")

    target = "https://app-api.izone-mail.com/v1/inbox?is_star=0&is_unread=0&page=%d"
    page = 1
    flag = True

    while flag:
        whole_data = json.loads(pm_get(target % page).text)
        
        print(whole_data)

        new_page = [Mail(data) for data in whole_data["mails"]]
        for pm in new_page:
            if pm.id in mail_to_body_dict:
                flag = False
                continue

        html_list = [pm.fetch() for pm in new_page]

        for pm, raw_html in zip(new_page, html_list):
            if pm.id not in mail_to_body_dict:
                body, images = remove_tag(raw_html)

                mail_to_body_dict[pm.id] = {
                    "body": body,
                    "images": images
                }
                pm_list.append(pm.to_dict())

        write_json("pm_list.json", pm_list)
        write_json("mail_body_dict.json", mail_to_body_dict)

        if not whole_data["has_next_page"]:
            break

        page += 1
    print("최신 mail 로딩을 완료했습니다.")

    return pm_list, mail_to_body_dict


def load_json(file_name):
    if not os.path.exists("output/" + file_name):
        return None
    with open("output/" + file_name, "r", encoding="UTF-8") as f:
        return json.loads(f.read())


def write_json(file_name, data):
    with open("output/" + file_name, "w", encoding="UTF-8") as f:
        f.write(json.dumps(data, ensure_ascii=False))


IMG_PTN = re.compile('img/.*?\\.(?:jpeg|jpg|png|gif)')


class Mail:
    def __init__(self, raw_pm):
        self.id = raw_pm["id"]
        self.member = raw_pm["member"]["name"]
        self.subject = raw_pm["subject"]
        self.preview = raw_pm["content"][:45]
        self.datetime = datetime.fromisoformat(raw_pm["receive_datetime"])
        self.time = self.datetime.strftime('%Y/%m/%d %H:%M')
        self.detail_url = raw_pm["detail_url"]
        self.is_star = raw_pm["is_star"]
        self.is_image = raw_pm["is_image"]

    def to_dict(self):
        result = self.__dict__.copy()
        del result["detail_url"]
        del result["datetime"]
        del result["is_star"]
        del result["is_image"]
        return result

    def fetch(self):
        if self.id == "":
            raise Exception("PrivateMail ID cannot be null")

        url = "https://app-web.izone-mail.com/mail/%s" % self.id
        res = pm_get(url).text

        # resolve relative path
        res = res.replace("/css/starship.css", "../static/starship.css")

        # found all image
        if self.is_image:
            print("[*] %s 번 메일의 이미지들을 처리합니다." % self.id)

            images = IMG_PTN.findall(res)
            print(images)
            for img in images:
                output_path = "output/" + img
                remote_path = "https://img.izone-mail.com/upload/" + img
                if not os.path.exists(os.path.dirname(output_path)):
                    os.makedirs(os.path.dirname(output_path))

                with open(output_path, "wb") as f:
                    resp = pm_get(remote_path)
                    f.write(resp.content)

            res = res.replace("https://img.izone-mail.com/upload/", "../")

        with open("output/mail/%s.html" % self.id, "w", encoding="UTF-8") as f:
            f.write(res)

        return res


def remove_tag(s):
    start = re.search("""<div class="main-contents" id="mail-detail"><html><head></head><body>""", s).end()

    end = re.search("""</body></html></div>""", s).start()

    result = s[start:end]

    images = IMG_PTN.findall(s) or []

    image_re = '<div class=\\"select-image.{100,400}data-id=\\".{1,8}\\" data-class=\\"images\\"></div>'
    result = re.sub(image_re, " {이미지} ", result)
    image_re2 = '<img [^>]+>'
    result = re.sub(image_re2, " {이미지} ", result)

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
