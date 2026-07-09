from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import json
from pathlib import Path

router = APIRouter()
DATA_PATH = Path(__file__).resolve().parent.parent / 'data' / 'portfolio.json'

class ChatRequest(BaseModel):
    question: str

@router.post('/chat')
def post_chat(request: ChatRequest):
    try:
        with open(DATA_PATH, 'r', encoding='utf-8') as file:
            portfolio_data = json.load(file)
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail='Portfolio data not found.')

    question = request.question.strip().lower()
    answer = _answer_question(question, portfolio_data)
    return JSONResponse(content={"question": request.question, "answer": answer})


def _answer_question(question: str, data: dict) -> str:
    if 'who are you' in question or 'about yourself' in question or 'your name' in question:
        return f"I am {data['name']}, a Computer Science Engineering student and AI enthusiast."

    if 'projects' in question or 'built' in question or 'project have you' in question:
        titles = [project['title'] for project in data.get('projects', [])]
        return f"I have built projects such as {', '.join(titles)}. Each project focuses on AI, Python, and real-world deployment."

    if 'programming language' in question or 'languages do you know' in question or 'python' in question:
        return 'I work with Python, C, Java, JavaScript, and I use modern libraries for AI and web development.'

    if 'certificate' in question or 'certificates' in question:
        names = [cert['title'] for cert in data.get('certificates', [])]
        return f"My certifications include {', '.join(names)}."

    if 'technologies' in question or 'tools' in question or 'skills' in question:
        return 'I am experienced in Python, TensorFlow, PyTorch, OpenCV, React, Tailwind, FastAPI, SQL, MongoDB, AWS and Git.'

    if 'career goals' in question or 'objective' in question:
        return data['about']['objective']

    if 'contact' in question or 'reach you' in question or 'email' in question:
        contact = data.get('contact', {})
        return f"You can contact me at {contact.get('email')} or {contact.get('phone')} in {contact.get('location')}."

    if 'hello' in question or 'hi' in question or 'hey' in question:
        return 'Hello! I am Ajay Rathod. Welcome to my portfolio.'

    return 'I am an AI portfolio assistant. Ask me about Ajay, his projects, skills, or contact details.'
