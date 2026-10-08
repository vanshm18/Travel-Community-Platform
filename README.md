# Travelsick

Travelsick is a travel community platform designed for wanderers to discover, share, and plan trips.

## Features

* Explore travel listings
* View detailed information about destinations
* Search and filter trips
* Create and browse travel listings
* User registration and sign-in
* Responsive React frontend
* REST API backend
* MongoDB database integration

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

```text
TCP/
├── backend/
│   ├── database/
│   ├── schemas/
│   ├── app.js
│   ├── init.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/TCP.git
cd TCP
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
node app.js
```

### 3. Set up the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at the local URL provided by Vite.

## Environment Variables

Do not commit your `.env` file to GitHub.

Example:

```env
MONGO_URI=your_mongodb_connection_string
```

## Status

🚧 **Currently under development**

More features, authentication, communities, trip planning, and AI-powered functionality are planned.

## License

This project is currently for educational and development purposes.
