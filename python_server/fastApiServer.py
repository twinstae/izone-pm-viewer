from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.background import BackgroundTasks
from starlette.responses import HTMLResponse, Response, FileResponse
from AllTagDictRouter import router as all_tag_router
from MailTagRouter import router as mail_tag_router
import httpx


app = FastAPI()
client = httpx.AsyncClient()
GITHUB_URL = "https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main/deploy"


@app.on_event("shutdown")
async def shutdown_event():
    await client.aclose()
    

async def get_content(url: str):
    r = await client.get(url)
    return r.text


def write_file(file_path: str, content: str):
    with open(file_path, mode="w") as f:
        f.write(content)


@app.get("/")
async def root(background_tasks: BackgroundTasks):
    try:
        html: str = await get_content(GITHUB_URL + '/index.html')
        background_tasks.add_task(
            write_file,
            file_path='output/index.html',
            content=html
        )
        return HTMLResponse(content=html, status_code=200)
    except httpx.ConnectError:
        return FileResponse('output/index.html')


def get_media_type(file_name):
    if file_name.endswith(".js"):
        return "application/javascript"
    if file_name.endswith(".css"):
        return "text/css"
    if file_name.endswith(".map"):
        return "application/json"


@app.get("/build/{file_name}")
async def bundle(file_name: str, background_tasks: BackgroundTasks):
    try:
        content = await get_content(GITHUB_URL+"/build/"+file_name)
        background_tasks.add_task(
            write_file,
            file_path='output/build/'+file_name,
            content=content
        )
        media_type = get_media_type(file_name)
        return Response(content=content, media_type=media_type)
    except httpx.ConnectError:
        return FileResponse('output/build/'+file_name)


app.include_router(all_tag_router)
app.include_router(mail_tag_router)
app.mount("/", StaticFiles(directory="output"), name="static")