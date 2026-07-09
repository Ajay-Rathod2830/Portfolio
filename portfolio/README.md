# Ajay Rathod Portfolio

A premium AI-powered portfolio website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and FastAPI.

## Folder Structure

- `portfolio/frontend` - React frontend
- `portfolio/backend` - FastAPI backend

## Frontend Setup

```bash
cd "d:\AI Bankrupt project\portfolio\frontend"
npm install
npm run dev
```

## Backend Setup

```bash
cd "d:\AI Bankrupt project\portfolio\backend"
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Features

- Dark / Light mode
- Animated hero and smooth scroll transitions
- AI voice assistant with speech synthesis
- AI chat assistant backed by structured JSON data
- Project cards with modal details
- Skills progress bars
- Resume preview and download
- Certificate cards
- GitHub stats integration
- Contact form API
- Command palette, scroll progress, back-to-top button
- Mobile responsive design

## Deployment

- Frontend: Vercel
- Backend: Render

## Notes

The backend exposes:
- `GET /portfolio`
- `GET /projects`
- `GET /skills`
- `POST /chat`
- `POST /contact`

Adjust the API base URL in `frontend/vite.config.ts` or use `VITE_API_BASE_URL` environment variable when deploying.
