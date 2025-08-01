# 🎬 StreamVerse Backend

[![Node.js](https://img.shields.io/badge/Node.js-16.x-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-orange)](https://jwt.io/)
[![Live Render](https://img.shields.io/badge/Live%20Server-Render-blue)](https://streamverse-backend-nw9k.onrender.com)

This is the **backend service** for **StreamVerse** – a Netflix 2.0 Clone built with Express.js, MongoDB, and JWT Auth.

---

## 🔗 Live URL

🟢 **API Base URL**:  
[https://streamverse-backend-nw9k.onrender.com](https://streamverse-backend-nw9k.onrender.com)

---

## ⚙️ Features

- 🧑 User Registration & Login
- 🔐 JWT-based Auth with Cookies
- 🗄️ MongoDB (Mongoose ORM)
- 🔁 Modular REST APIs

---

## 🧪 API Endpoints

| Method | Route                         | Description          |
|--------|-------------------------------|----------------------|
| POST   | `/api/v1/user/register`       | Register new user    |
| POST   | `/api/v1/user/login`          | Login existing user  |
| GET    | `/api/v1/user/logout`         | Logout user (cookie) |

---

## 🧠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **JWT + bcrypt**
- **Cookie-parser**
- **Render for Deployment**

---

## 🏗️ Project Structure

streamverse-backend/
│
├── controllers/
│   └── user.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoute.js
├── utils/
│   └── database.js
├── .env
├── index.js
└── package.json


---

Ah, I see what’s happening — the issue is that you’re mixing raw text with code blocks incorrectly. You need to wrap command-line commands and code inside triple backticks (```), and markdown sections should not be inside a code block unless it’s actual code or terminal commands.

Here’s a fully clean, copy-paste ready Markdown version of your README.md section that will render exactly the way you want on GitHub:

⸻


## 🔧 Run Locally

```bash
git clone https://github.com/1Bhavyasoni/streamverse-backend.git
cd streamverse-backend
npm install
npm start


⸻

⚙️ Update Frontend API Endpoint

In /src/utils/constant.js file of your frontend, replace the line with:

export const API_END_POINT = "https://streamverse-backend-nw9k.onrender.com/api/v1/user";


⸻

🛠️ Environment Variables

Create a .env file in your backend folder and add:

PORT=8080
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret


⸻

👤 Developer

Bhavya Soni
🔗 LinkedIn

---



