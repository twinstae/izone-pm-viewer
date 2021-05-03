#-*- coding: utf-8 -*-
import os
import re
import json
import requests

#Private Mail Credentials
PM_USERID = "4s7x2av597c0"
PM_ACCESS_TOKEN = "kmrsayyf000q7c7c750nz4ty"

PM_APPVER = "1.4.5"
PM_DEVICE = "star2ltexx"
PM_OSTYPE = "Android"
PM_OSVERSION = "7.1.2"
PM_USERAGENT = "Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-G965N Build/QP1A.190711.020)"
pm_headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Application-Version": PM_APPVER,
    "User-Id": PM_USERID,
    "Accept-Language": "ko-kr",
    "Accept-Encoding": "gzip, deflate, br",
    "Device-Version": PM_DEVICE,
    "Os-Type": PM_OSTYPE,
    "Os-Version": PM_OSVERSION,
    "Application-Language": "ko",
    "Access-Token": PM_ACCESS_TOKEN,
    "User-Agent": PM_USERAGENT,
    "Connection": "keep-alive",
    "Terms-Version": "5",
}

def pmGet(url):
    return requests.get(url, headers=pm_headers)

img_ptn = re.compile('img/.*?\\.(?:jpeg|jpg|png|gif)')
pm_db   = dict()
pm_meta = dict()

class PrivateMail:
    def __init__(self, id="", member = "", image = False, time = "", subject = "", body = "", preview = ""):
        self.id = id

        self.member = member
        self.image = image
        self.time = time
        self.subject = subject
        self.body = body
        self.preview = preview

    def __getitem__(self,key):
        return getattr(self,key)

    def fetch(self):
        if self.id == "":
            raise Exception("PrivateMail ID cannot be null")

        url = "https://app-web.izone-mail.com/mail/%s" % self.id
        res = pmGet(url).text

        # resolve relative path
        res = res.replace("/css/starship.css", "../static/starship.css")

        #found all image
        if self.image:
            print("[*] Processing image of mail %s" % self.id)
            imgs = img_ptn.findall(res)
            print(imgs)
            for img in imgs:
                output_path = "output/" + img
                remote_path = "https://img.izone-mail.com/upload/" + img
                if not os.path.exists(os.path.dirname(output_path)):
                    os.makedirs(os.path.dirname(output_path))

                with open(output_path, "wb") as f:
                    resp = pmGet(remote_path)
                    f.write(resp.content)

            res = res.replace("https://img.izone-mail.com/upload/", "../")

        self.body = res

    def writeOut(self):
        if self.body == "":
            self.fetch()

        with open("output/mail/%s.html" % self.id, "w", encoding="UTF-8") as f:
            f.write(self.body)
        tempWrite(self)

def getPMList():
    pm_list = []
    raw_pm_list = []
    skipped = 0
    idx = 1
    target = "https://app-api.izone-mail.com/v1/inbox?is_star=0&is_unread=0&page=%d"
    while True:
        whole_data = json.loads(pmGet(target % idx).text)
        print("[+] Fetching page %d" % idx)
        for i, pm_data in enumerate(whole_data["mails"]):
            if i < 10:
                print(pm_data)
            if pm_data["id"] in pm_db:
                skipped += 1
                continue

            pm = PrivateMail()

            pm.id = pm_data["id"]

            pm.member = pm_data["member"]["name"]
            pm.image = pm_data["is_image"]
            pm.time = pm_data["receive_datetime"]
            pm.subject = pm_data["subject"]
            pm.preview = pm_data["content"][:45]

            pm_list.append(pm)
            
            raw_pm_list.append(pm_data)

        if not whole_data["has_next_page"]:
            break
        idx += 1
    print("[*] Fetching done - %d mails loaded" % len(pm_list))
    print("  [-] %d mails will be skipped (already in DB)" % skipped)
    
    with open("raw_pm_list.json", "w", encoding="UTF-8") as f:
        f.write(json.dumps(raw_pm_list))
    
    return pm_list

def readPrevDB(dbfile = "output/pm_list.json"):
    if not os.path.isfile(dbfile):
        return dict()

    dt = dict()
    with open(dbfile, "r", encoding="UTF-8") as f:
        d = f.read()
        t = json.loads(d)
        for o in t:
            dt[o["id"]] = PrivateMail(o["id"], o["member"], False, o["time"], o["subject"], "", o["preview"])
    return dt

def mergeTwoPMList(listX, listY):
    # We can assume each of both is already sorted with respect to time
    res = list()
    i, j = 0, 0
    while True:
        while i < len(listX) and listX[i]["time"] >= listY[j]["time"]:
            res.append(listX[i])
            i += 1
        if i == len(listX):
            res += listY[j:]
            break
        while j < len(listY) and listX[i]["time"] < listY[j]["time"]:
            res.append(listY[j])
            j += 1
        if j == len(listY):
            res += listX[i:]
            break
    return res


def tempWrite(pm):
    f = open("save.tmp", "a", encoding="UTF-8")
    f.write('\ntemp_v.append(PrivateMail("%s", "%s", False, "%s", "%s", "", "%s"))' % (pm.id, pm.member, pm.time, pm.subject.replace("\"", "\\\""), pm.preview.replace("\"", "\\\"")))


def writeBack(pmlist):
    with open("output/pm.js", "w", encoding="UTF-8") as f:
        f.write("let pm_list = %s" % json.dumps([o.__dict__ for o in pmlist]))


def downloadViewer():
    h = requests.get("https://raw.githubusercontent.com/mdsnins/IZPM-Backup/master/user/viewer.html").text
    j = requests.get("https://raw.githubusercontent.com/mdsnins/IZPM-Backup/master/user/loader.js").text
    f1 = open("output/viewer.html", "w", encoding="UTF-8")
    f2 = open("output/loader.js", "w", encoding="UTF-8")
    f1.write(h)
    f2.write(j)
    f1.close()
    f2.close()
    print("[*] Downlaoded Viewer & Loader script")

def processMetadata():
    global pm_headers

    md = json.loads(pmGet("https://app-api.izone-mail.com/v1/menu").text)
    

if __name__ == "__main__":
    if not os.path.exists("output/mail/"):
        os.makedirs("output/mail/")
    # Check previous temporary save first, if it exists, repair it first.
    temp_v = None
    if os.path.isfile("save.tmp"):
        f = open("save.tmp", "r", encoding="UTF-8")
        exec(f.read())
        f.close()

    pm_db = readPrevDB()
    print("[*] Loaded %d mails in previous DB" % len(pm_db))
    pm_list = getPMList()

    input("\nPress Enter to continue...")

    with open("save.tmp", "w", encoding="UTF-8") as f:
        f.write("temp_v = []")
    for x in pm_list:
        x.writeOut()

    print("[*] Writing local database")
    writeBack(mergeTwoPMList(list(pm_db.values()), pm_list))
    os.unlink("save.tmp")
    print("[*] Writing done")