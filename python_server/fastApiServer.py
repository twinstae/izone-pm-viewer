from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
from AllTagDict import router as all_tag_router
from MailTagRouter import router as mail_tag_router

app = FastAPI()


@app.get("/")
async def root():
    return FileResponse('output/index.html')


app.include_router(all_tag_router)
app.include_router(mail_tag_router)
app.mount("/", StaticFiles(directory="output"), name="static")
