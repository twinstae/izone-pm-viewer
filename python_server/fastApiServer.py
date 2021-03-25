from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.background import BackgroundTasks
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
    tree_info = await get_json("https://api.github.com/repos/twinstae/izone-pm-viewer/git/trees/main")
    dist_url = get_dist_url(tree_info["tree"])
    

    "https://api.github.com/repos/twinstae/izone-pm-viewer/git/trees/742961d953ad96a4b30bffcf84b841acb29b5d72"
    content = await get_content(GITHUB_URL+"/build/"+file_name)
    write_file(
        file_path='output/offline/build/' + file_name,
        content=content
    )


def get_dist_url(path_list):
    for path_obj in path_list:
        if path_obj["path"] == "dist":
            return path_obj["url"]


@app.on_event("shutdown")
async def shutdown_event():
    await client.aclose()


@app.get("/")
async def root(background_tasks: BackgroundTasks):
    if os.path.exists('output/index.html'):
        return FileResponse('output/index.html')
    raise HTTPException(status_code=404, detail=f"github 업데이트를 불러오는데 실패했습니다. 백업된 파일이 없습니다.")


async def get_content(url: str):
    r = await client.get(url)
    return r.text


async def get_json(url: str):
    json_data = await get_content(url)
    return json.loads(json_data)


def write_file(file_path: str, content: str):
    with open(file_path, mode="w", encoding="UTF-8") as f:
        f.write(content)


app.include_router(api_router)
app.mount("/", StaticFiles(directory="output"), name="static")
