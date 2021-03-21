from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse, HTMLResponse, Response
from AllTagDict import router as all_tag_router
from MailTagRouter import router as mail_tag_router
import httpx

client = httpx.AsyncClient()
app = FastAPI()

GITHUB_URL = "https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main/deploy"

async def get_content(url: str):
    r = await client.get(url)
    return r.text


@app.get("/")
async def root():
    html: str = await get_content(GITHUB_URL + '/index.html')
    return HTMLResponse(content=html, status_code=200)
    # return FileResponse('output/index.html')


def get_media_type(file_name):
    if file_name.endswith(".js"):
        return "application/javascript"
    if file_name.endswith(".css"):
        return "text/css"
    if file_name.endswith(".map"):
        return "application/json"


@app.get("/build/{file_name}")
async def bundle(file_name: str):
    content = await get_content(GITHUB_URL+"/build/"+file_name)
    media_type = get_media_type(file_name)
    return Response(content=content, media_type=media_type)
    # return FileResponse(f'output/build/{file_name}')


app.include_router(all_tag_router)
app.include_router(mail_tag_router)
app.mount("/", StaticFiles(directory="output"), name="static")