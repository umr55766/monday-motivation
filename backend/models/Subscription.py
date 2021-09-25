from pydantic import BaseModel


class Subscription(BaseModel):
    email: str

    def as_json(self):
        return {"email": self.email}
