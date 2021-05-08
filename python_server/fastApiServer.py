import os
import json

import aiofiles
from fastapi import BackgroundTasks, FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from httpx import AsyncClient
import httpx
import schedule
from starlette.responses import FileResponse

from routers.ApiRouter import api_router

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


@app.on_event("startup")
async def startup_event():
    http_client: AsyncClient = httpx.AsyncClient()
    app.state.client = http_client
    

@app.on_event("shutdown")
async def shutdown_event(bg_tasks: BackgroundTasks):
    schedule.clear()
    print("예정 중인 알림이 있습니다. CTRL - C 를 누르면 서버를 완전히 종료합니다.")
    await app.state.client.aclose()


@app.get("/")
async def root():
    if os.path.exists('output/index.html'):
        return FileResponse('output/index.html')
    raise HTTPException(status_code=404, detail="저장된 빌드 파일이 없습니다.")


@app.post("/upload/profile/{theme}/")
async def upload_profile(theme: str, file: UploadFile = File(...)):
    output_path = "./output/img/profile/" + theme + "/" + file.filename
    if not os.path.exists(os.path.dirname(output_path)):
       os.makedirs(os.path.dirname(output_path))

    async with aiofiles.open(output_path, "wb") as out_file:
        content = await file.read()
        await out_file.write(content)


app.include_router(api_router)
app.mount("/", StaticFiles(directory="output"), name="static")
