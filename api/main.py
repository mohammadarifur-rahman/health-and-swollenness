from fastapi import FastAPI
from routers import accounts, workouts, exercises
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
import os


app = FastAPI()
app.include_router(accounts.router)
app.include_router(workouts.router, prefix="/api/workouts")
app.include_router(exercises.router, prefix="/api/exercises")
app.include_router(authenticator.router)

origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "You hit the root path!"}
