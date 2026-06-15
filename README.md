# TravelMate AI

TravelMate AI is an AI-powered travel planner that generates personalized itineraries, budget estimates, and travel recommendations based on your destination, budget, trip duration, and number of travelers.

Built with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Google OAuth, and OpenRouter AI.


## Demo Link

[Live Demo](https://travelmate-ai-app.vercel.app)

---
## Features

* 🔐 Google Authentication
* 🤖 AI-powered trip generation
* 🗺️ Personalized travel itineraries
* 💰 Budget planning and cost estimation
* 📅 Day-wise travel schedule
* ☁️ Save trips for future reference
* 🌙 Modern responsive UI
* 🔒 Protected routes and secure authentication

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Hot Toast
* Shadcn/ui
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### AI Integration

* OpenRouter API
* Gemma Model

---

##  Quick Start

```
git clone https://github.com/ankitsahucodes/travelMate_ai-app.git
cd travelMate_ai-app
npm install
npm run dev
```
---


## Environment Variables

### Client (.env)
```
VITE_API_URL=http://localhost:5000/api
```
### Server (.env)

```env
MONGODB_URI=your_mongodb_connection_string 

GOOGLE_CLIENT_ID=your_google_client_id 

GOOGLE_CLIENT_SECRET=your_google_client_secret 

JWT_SECRET=your_session_secret 

OPENROUTER_API_KEY=your_openrouter_api_key
```


## 📡 API Reference

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | `/auth/google` | Login with Google |
| GET | `/auth/google/callback` | Google OAuth callback |
| GET | `/auth/logout` | Logout user |

### Trips

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/trips/create` | Generate a new AI-powered trip itinerary |
| POST | `/trips/save` | Save a generated trip |
| GET | `/trips` | Get all saved trips for the logged-in user |
| GET | `/trips/:id` | Get a specific saved trip |
| DELETE | `/trips/:id` | Delete a saved trip |

### Request Example

```json
{
  "destination": "Tokyo",
  "days": 5,
  "budget": 100000,
  "persons": 2
}
```

## Contact

For bugs or feature requests, please reach out to ankitsahu2829@gmail.com
