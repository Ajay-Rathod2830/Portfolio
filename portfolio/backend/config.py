from pydantic_settings import BaseSettings
from pathlib import Path

class Settings(BaseSettings):
    PORT: int = 8000
    HOST: str = "0.0.0.0"
    DEBUG: bool = False
    FRONTEND_URL: str = "https://portfolio-xi-liart-68.vercel.app"
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
