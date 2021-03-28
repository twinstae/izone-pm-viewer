from typing import List
import asyncio
import time
import json
import os
import shutil
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
import httpx

from ApiRouter import api_router


app = FastAPI()

origins = [
    "http://localhost:5000",
    "http://127.0.0.1:5000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = httpx.AsyncClient()
GITHUB_URL = "https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main"


@app.on_event("startup")
async def startup_event():
    pass


async def check_and_update_build_and_server():
    try:
        print("최신 빌드를 다운로드합니다.")
        start = time.time()
        build_url, server_source_url = await get_build_url()
        build_info = await get_json(build_url)
        server_info = await get_json(server_source_url)

        file_list = [path_obj["path"] for path_obj in build_info["tree"]]
        if not await download_latest_build(file_list):
            print("이미 최신 빌드입니다.")

        server_source_list = [path_obj["path"] for path_obj in server_info["tree"]]
        if not await download_latest_server(server_source_list):
            print("이미 최신 서버입니다")
        else:
            print("최신 서버 파일을 불러왔습니다. 서버를 끌 때 업데이트 됩니다.")

        duration = time.time() - start

        print("소요시간 %s 초, 최신 버전입니다." % str(int(duration * 100) / 100))
    except Exception as e:
        print("최신 빌드 로딩에 실패했습니다.")
        print(e)


class 깃허브_서버_허용량_초과(Exception):
    message = "시간 당 깃허브 API 요청 가능 횟수를 넘었습니다. 1시간 뒤부터 다시 서버 업데이트가 가능합니다."


async def get_build_url():
    main_data = await get_json("https://api.github.com/repos/twinstae/izone-pm-viewer/git/trees/main")
    
    if "tree" not in main_data and "message" in main_data:
        print(main_data)
        raise 깃허브_서버_허용량_초과()

    dist_url = find_url_for_path_from_tree(main_data, "dist")
    server_source_url = find_url_for_path_from_tree(main_data, "python_server")

    dist_data = await get_json(dist_url)

    build_url = find_url_for_path_from_tree(dist_data, "build")
    return build_url, server_source_url


async def get_content(url: str):
    r = await client.get(url)
    return r.text


async def get_json(url: str):
    json_data = await get_content(url)
    return json.loads(json_data)


def move_to_old_dir(dir_path) -> None:
    if not os.path.exists("output/old"):
        os.mkdir("output/old")

    if os.path.exists("output/old"+dir_path):
        shutil.rmtree("output/old"+dir_path)

    os.mkdir("output/old"+dir_path)
    for file_name in os.listdir("output"+dir_path):
        shutil.move(f"output{dir_path}/{file_name}", f"output/old{dir_path}/{file_name}")


def find_url_for_path_from_tree(data, path):
    for obj in data["tree"]:
        if obj["path"] == path:
            return obj["url"]


PYTHON_SERVER_DIR = "output/python_server"


async def download_latest_server(source_list: List[str]) -> bool:
    file_list = os.listdir("output/python_server")
    old_server_version = get_server_version(file_list)
    new_server_version = get_server_version(source_list)
    print("old: ", ".".join(old_server_version))
    print("new: ", ".".join(new_server_version))
    if 이미_최신버전인가(old_server_version, new_server_version):
        return False

    if os.path.exists(PYTHON_SERVER_DIR):
        move_to_old_dir("/python_server")
        os.rmdir(PYTHON_SERVER_DIR)

    os.mkdir(PYTHON_SERVER_DIR)
    path_list = ["/python_server/" + source_name for source_name in source_list]
    await asyncio.wait([get_and_write_file(path, "") for path in path_list])
    return True


async def download_latest_build(file_list: List[str]) -> bool:
    if os.path.exists("output/build") and set(file_list) == set(os.listdir("output/build")):
        return False

    if os.path.exists("output/build"):
        move_to_old_dir("/build")
        os.rmdir("output/build")

    os.mkdir("output/build")
    path_list = ["/index.html"] + ["/build/" + file_name for file_name in file_list]
    await asyncio.wait([get_and_write_file(path, "/dist") for path in path_list])
    return True


async def get_and_write_file(file_name, prefix):
    content = await get_content(GITHUB_URL + prefix + file_name)
    file_path = 'output' + file_name
    write_file(
        file_path=file_path,
        content=content
    )
    print(file_path)


def write_file(file_path: str, content: str):
    with open(file_path, mode="w", encoding="UTF-8") as f:
        f.write(content)


@app.on_event("shutdown")
async def shutdown_event():
    await client.aclose()
    print("최신 서버 파일을 적용합니다.")
    try:
        현재_서버_파일을_지우고_새_서버를_가져온다()
    except Exception as e:
        print("서버 업데이트에 실패했습니다.", e)


def 현재_서버_파일을_지우고_새_서버를_가져온다() -> bool:
    if not os.path.exists("output/python_server"):
        return False
    old_server_version = get_server_version(os.listdir("."))

    file_list = os.listdir("output/python_server")
    new_server_version = get_server_version(file_list)

    if 이미_최신버전인가(old_server_version, new_server_version):
        print("서버가 이미 최신 버전입니다.")
        return True

    os.remove("버전"+".".join(old_server_version))

    for file_name in file_list:
        old_path = "./"+file_name
        if os.path.exists(old_path):
            os.remove(old_path)
        assert not os.path.exists(old_path)
        new_file_src = "output/python_server/"+file_name
        shutil.copy(new_file_src, old_path)
        assert os.path.exists(old_path)
        print(old_path)
    print("최신 서버 파일을 적용했습니다.")
    return True


def get_server_version(file_list):
    for file_name in file_list:
        if "버전" in file_name:
            return file_name.replace("버전", "").split(".")


def 이미_최신버전인가(old_ver, new_ver):
    for old_n, new_n in zip(old_ver, new_ver):
        if old_n != new_n:
            return old_n >= new_n
    return True

@app.get("/")
async def root():
    if os.path.exists('output/index.html'):
        return FileResponse('output/index.html')
    raise HTTPException(status_code=404, detail="저장된 빌드 파일이 없습니다.")


app.include_router(api_router)
app.mount("/", StaticFiles(directory="output"), name="static")
