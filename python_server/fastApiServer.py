import asyncio
import shutil
import time
from typing import List

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
import json
import httpx
import os

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
GITHUB_URL = "https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main/dist"


@app.on_event("startup")
async def startup_event():
    print("최신 빌드를 다운로드합니다.")
    start = time.time()

    try:
        build_url = await get_build_url()
        build_info = await get_json(build_url)

        file_list = [path_obj["path"] for path_obj in build_info["tree"]]
        print(file_list)
        if not await download_latest_build(file_list):
            print("이미 최신 빌드입니다.")
        duration = time.time() - start
        print("소요시간 %s 초, 빌드 파일을 최신화했습니다." % str(int(duration * 100) / 100))
    except Exception as e:
        print("최신 빌드 로딩에 실패했습니다.")
        print(e)


async def download_latest_build(file_list: List[str]) -> bool:
    if os.path.exists("output/build") and set(file_list) == set(os.listdir("output/build")):
        return False

    if os.path.exists("output/build"):
        move_builds_to_old_dir()
        os.rmdir("output/build")

    os.mkdir("output/build")
    path_list = ["/index.html"] + ["/build/" + file_name for file_name in file_list]
    await asyncio.wait([get_and_write_file(path) for path in path_list])
    return True


async def get_build_url():
    main_data = await get_json("https://api.github.com/repos/twinstae/izone-pm-viewer/git/trees/main")
    dist_url = find_url_for_path_from_tree(main_data, "dist")
    dist_data = await get_json(dist_url)
    build_url = find_url_for_path_from_tree(dist_data, "build")
    return build_url


def move_builds_to_old_dir() -> None:
    if not os.path.exists("output/old"):
        os.mkdir("output/old")

    if os.path.exists("output/old/build"):
        shutil.rmtree("output/old/build")

    os.mkdir("output/old/build")
    for file_name in os.listdir("output/build"):
        shutil.move(f"output/build/{file_name}", f"output/old/build/{file_name}")


def find_url_for_path_from_tree(data, path):
    for obj in data["tree"]:
        if obj["path"] == path:
            return obj["url"]


async def get_and_write_file(file_name):
    file_path = GITHUB_URL + file_name
    content = await get_content(file_path)
    write_file(
        file_path='output' + file_name,
        content=content
    )


async def get_content(url: str):
    r = await client.get(url)
    return r.text


async def get_json(url: str):
    json_data = await get_content(url)
    return json.loads(json_data)


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
    raise HTTPException(status_code=404, detail=f"저장된 빌드 파일이 없습니다.")


app.include_router(api_router)
app.mount("/", StaticFiles(directory="output"), name="static")


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
