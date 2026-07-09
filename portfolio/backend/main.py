from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.portfolio import router as portfolio_router
from routers.chat import router as chat_router
from routers.contact import router as contact_router

app = FastAPI(
    title="Ajay Rathod Portfolio API",
    description="Backend API for Ajay Rathod's AI portfolio website.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(portfolio_router, prefix="", tags=["Portfolio"])
app.include_router(chat_router, prefix="", tags=["Chat"])
app.include_router(contact_router, prefix="", tags=["Contact"])

@app.get("/")
def root():
    return {"message": "Welcome to Ajay Rathod Portfolio API"}
