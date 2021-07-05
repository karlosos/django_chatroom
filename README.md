<p align="center">
    <img src="https://www.saaspegasus.com/static/images/web/modern-javascript/django-react-header.png" width="600px" alt="logo"/>
</p>

***

<h4 align="center">Chat Application with Django and React</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#what-i-have-learned">What I Have Learned</a> •
  <a href="#development">Development</a> •
  <a href="#technical-decisions">Technical Decisions</a>
</p>

## About

This is simple chat application that uses Django (with Channels) as a backend and React as a frontend.

## What I Have Learned

This project was created because I wanted to learn basics of the websockets (and Channels module).

## Development

### Running backend

Backend was implemented in Python (Django) with Channels for websockets connections.

1. Change directory to `backend` with `cd backend`
1. Create virtual environment with `virtualenv .venv`.
1. Activate venv with `.venv\Scripts\activate.bat`.
1. Install requirements with `pip install -r requirements.txt`
1. Performs django migrations with `python manage.py migrate`
1. Run server with `python manage.py runserver`.

Server should be running on [127.0.0.1:8000](http://127.0.0.1:8000/). Go to [/chat/<yourchatname>/](http://127.0.0.1:8000/chat/default/) to access Django view (basic frontend).

### Running frontend

Frontend application was written in React.

1. Change directory to `frontend` with `cd frontend`.
1. Install requirements with `npm install`.
1. Run frontend application with `npm run start`.

Frontend application should be available on [127.0.0.1:3000]( http://127.0.0.1:3000/) if you configured `.env` properly.

#### Environmental variables

Currently `.env` file in `frontend` directory is used to defining host and port for frontend application. I've changed it to [127.0.0.1](127.0.0.1) for more consistency with backend app.

## Technical Decisions

1. **One repository two projects**:
    There is option for... TODO.
1. **No docker**: TODO