from typing import List
import asyncio
import shutil
import time
import json
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
import httpx

from ApiRouter import api_router


app = FastAPI()

origins = [
    "http://localhost:5000",
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
    print("최신 빌드를 다운로드합니다.")
    start = time.time()

    try:
        build_url, server_source_url = await get_build_url()
        build_info = await get_json(build_url)
        server_info = await get_json(server_source_url)

        file_list = [path_obj["path"] for path_obj in build_info["tree"]]
        if not await download_latest_build(file_list):
            print("이미 최신 빌드입니다.")

        server_source_list = [path_obj["path"] for path_obj in server_info["tree"]]
        if not await download_latest_server(server_source_list):
            print("이미 최신 서버입니다")

        duration = time.time() - start
        print("소요시간 %s 초, 최신 버전입니다." % str(int(duration * 100) / 100))
    except Exception as e:
        print("최신 빌드 로딩에 실패했습니다.")
        print(e)


async def get_build_url():
    main_data = await get_json("https://api.github.com/repos/twinstae/izone-pm-viewer/git/trees/main")
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
    if os.path.exists(PYTHON_SERVER_DIR) and set(source_list) == set(os.listdir(PYTHON_SERVER_DIR)):
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


@app.get("/")
async def root():
    if os.path.exists('output/index.html'):
        return FileResponse('output/index.html')
    raise HTTPException(status_code=404, detail="저장된 빌드 파일이 없습니다.")


app.include_router(api_router)
app.mount("/", StaticFiles(directory="output"), name="static")
