Sure Bhavya! Here’s your complete README.md — polished and ready to copy-paste into your GitHub repo. I’ve included a professional structure, your deployment links, tech stack, features, API routes, and even a screenshot section.

⸻

✅ Make sure to place your screenshot image in a folder called /assets inside your project, and rename it to signup-preview.jpg.

⸻

✅ Copy This – README.md

# 🎬 StreamVerse – Netflix 2.0 Clone (Full Stack Project)

StreamVerse is a full-stack Netflix 2.0 clone application that offers user authentication, dynamic movie browsing from TMDB, responsive design, and real-time state management using modern web technologies.

---

## 🚀 Live Demo

- 🔗 **Frontend**: [https://streamverse-frontend-git-main-sonibhavya577-gmailcoms-projects.vercel.app](https://streamverse-frontend-git-main-sonibhavya577-gmailcoms-projects.vercel.app)
- 🔗 **Backend**: [https://streamverse-backend-nw9k.onrender.com](https://streamverse-backend-nw9k.onrender.com)

---

## 🖼️ Preview

> 📸 Signup Page UI

![Signup Page](./assets/signup-preview.jpg)

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js
- Redux Toolkit
- TailwindCSS
- Axios
- React Router DOM

### 🔸 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- BcryptJS
- JWT (JSON Web Tokens)
- Cookie-parser
- Dotenv

---

## 📁 Folder Structure

streamverse/
├── backend/                 # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
├── netflix/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.js
│   └── index.js

---

## ⚙️ Setup Instructions

### ✅ Backend Setup

```bash
cd backend
npm install

# Create .env file
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/

npm start


⸻

✅ Frontend Setup

cd netflix
npm install

# Update API endpoint in src/utils/constant.js
export const API_END_POINT = "https://streamverse-backend-nw9k.onrender.com/api/v1/user";

npm run dev


⸻

🔐 Auth API Routes

🔸 Register

POST /api/v1/user/register

{
  "fullName": "Bhavya Soni",
  "email": "sonibhavya577@gmail.com",
  "password": "123"
}

🔸 Login

POST /api/v1/user/login

{
  "email": "sonibhavya577@gmail.com",
  "password": "123"
}

🔸 Logout

GET /api/v1/user/logout

⸻

✨ Features
	•	✅ User Registration and Login with hashed passwords
	•	✅ JWT Authentication and cookie storage
	•	✅ Redux Toolkit for state management
	•	✅ Fetching Now Playing, Popular, Top Rated, and Upcoming movies using TMDB API
	•	✅ TMDB Search functionality
	•	✅ Protected Routes using React Router
	•	✅ Fully Responsive Design with TailwindCSS
	•	✅ Frontend hosted on Vercel, Backend on Render

⸻

📚 TMDB Movie Endpoints Used
	•	/movie/now_playing
	•	/movie/popular
	•	/movie/top_rated
	•	/movie/upcoming
	•	/search/movie?query=

Powered by: https://www.themoviedb.org/

⸻

👨‍💻 Author

Bhavya Soni
	•	🔗 LinkedIn
	•	💻 GitHub

⸻

🌟 Show Your Support

If you liked this project, feel free to ⭐ star the repo, fork it, or share it with others!

---

### ✅ What to do next:
1. Save this content into a new file named `README.md` in your frontend repo.
2. Add an `assets` folder inside your project (same level as `src`).
3. Rename the screenshot image to `signup-preview.jpg` and place it inside `/assets`.

Let me know if you also want:
- Deployment badges
- Technologies as logos
- GitHub stats section
- More screenshots

I’ll add them instantly.
