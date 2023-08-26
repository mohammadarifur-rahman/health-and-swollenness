from fastapi import FastAPI
from routers import accounts, workouts, exercises
import chat
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
import os


app = FastAPI()
app.include_router(accounts.router)
app.include_router(workouts.router, prefix="/api/workouts")
app.include_router(exercises.router, prefix="/api/exercises")
app.include_router(chat.router)
app.include_router(authenticator.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "module": 3,
            "week": 17,
            "day": 5,
            "hour": 19,
            "min": "00"
        }
    }
