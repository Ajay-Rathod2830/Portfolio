from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
import json
from pathlib import Path

router = APIRouter()
DATA_PATH = Path(__file__).resolve().parent.parent / 'data' / 'portfolio.json'

@router.get('/portfolio')
def get_portfolio():
    try:
        with open(DATA_PATH, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return JSONResponse(content=data)
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail='Portfolio data not found.')

@router.get('/projects')
def get_projects():
    try:
        with open(DATA_PATH, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return JSONResponse(content=data.get('projects', []))
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail='Project data not found.')

@router.get('/skills')
def get_skills():
    try:
        with open(DATA_PATH, 'r', encoding='utf-8') as file:
            data = json.load(file)
        return JSONResponse(content=data.get('skills', {}))
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail='Skills data not found.')
