from fastapi import FastAPI

app = FastAPI()  # notice that the app instance is called `app`, this is very important.


@app.get("/")
async def read_root():
    return {"Hello": "World"}
