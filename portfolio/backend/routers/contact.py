from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi.responses import JSONResponse
import json
from pathlib import Path

router = APIRouter()

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

@router.post('/contact')
def post_contact(request: ContactRequest):
    if not request.name or not request.email or not request.message:
        raise HTTPException(status_code=422, detail='Please fill all contact fields.')

    # Demo note: store or forward contact messages in production.
    return JSONResponse(content={
        'status': 'success',
        'message': 'Your message has been received. I will connect with you soon.'
    })
