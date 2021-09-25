import os

from deta import Deta
from fastapi import FastAPI, status

from models.Subscription import Subscription

app = FastAPI()


@app.post("/subscribe", status_code=status.HTTP_201_CREATED)
async def subscribe(request: Subscription):
    deta = Deta(os.getenv('DETA_PROJECT_KEY'))
    db = deta.Base(os.getenv('SUBSCRIPTION_DB_NAME'))
    response = db.put(request.as_json())
    return response
