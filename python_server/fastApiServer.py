import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from httpx import AsyncClient
from starlette.responses import FileResponse
from routers.ApiRouter import api_router
import httpx

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
async def shutdown_event():
    await app.state.client.aclose()


@app.get("/")
async def root():
    if os.path.exists('output/index.html'):
        return FileResponse('output/index.html')
    raise HTTPException(status_code=404, detail="저장된 빌드 파일이 없습니다.")


app.include_router(api_router)
app.mount("/", StaticFiles(directory="output"), name="static")
