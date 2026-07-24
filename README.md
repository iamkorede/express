# Express + MongoDB User API

A beginner-friendly REST API built with **Express.js** and **MongoDB Atlas**, created as a learning project to understand backend fundamentals like routing, middleware, schema design, and database connections.

## Features
- RESTful API built with Express.js
- MongoDB Atlas integration via Mongoose
- User schema with validation (name, email, timestamps)
- Environment variables managed with dotenv
- POST and GET routes for creating and fetching users

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Endpoints
| Method | Endpoint       | Description         |
|--------|----------------|----------------------|
| POST   | `/api/users`   | Create a new user    |
| GET    | `/api/users`   | Get all users         |

## Setup
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with your MongoDB connection string:
