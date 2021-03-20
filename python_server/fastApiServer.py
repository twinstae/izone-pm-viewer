from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
from AllTagDict import router as all_tag_router
from MailToTagDict import router as mail_to_tag_dict_router

app = FastAPI()


@app.get("/")
async def root():
    return FileResponse('output/index.html')
    
app.include_router(all_tag_router)
app.include_router(mail_to_tag_dict_router)
app.mount("/", StaticFiles(directory="output"), name="static")
