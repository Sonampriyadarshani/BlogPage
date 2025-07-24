# 🧠 AI-Powered Blog Generator

A full-stack web application to generate, create, and manage blog posts using **Google Gemini API**, built with **React.js**, **Node.js**, and **MongoDB**.

---

## 🚀 Features

- Generate blog content using AI
- Manually write and post blogs
- View all blog posts
- Delete a blog post

---

## 🗂️ Project Structure

```js
AI-Blog-Generator/
│
├── Backend/                     # Node.js + Express server
│   ├── controllers/            # Request handlers (Gemini & Blog logic)
│   │   ├── blogController.js
│   │   └── geminiController.js
│   ├── models/                 # Mongoose schema
│   │   └── Blog.js
│   ├── routes/                 # API routes
│   │   └── blogRoutes.js
│   ├── .env                    # Environment variables
│   ├── index.js                # App entry point
│   └── package.json            # Backend dependencies
│
├── Frontend/                   # React.js + Tailwind CSS app
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── BlogEditor.jsx
│   │   │   └── BlogList.jsx
│   │   ├── App.jsx             # Main App component
│   │   └── main.jsx            # Vite entry file
│   ├── public/
│   ├── index.html              # HTML template
│   ├── tailwind.config.js      # Tailwind CSS config
│   ├── postcss.config.js       # PostCSS config
│   └── package.json            # Frontend dependencies
│
└── README.md                   # Project documentation



```

---

## 💻 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Cloud - Atlas)
- **AI Integration**: Google Gemini API

---

## ⚙️ Setup Instructions

### Backend Setup

```js
cd Backend
npm install

```

### Frontend Setup

```js
cd ../Frontend
npm install
npm run dev

```

## How to Get Google Gemini API Key

1.Go to https://makersuite.google.com/

2.Sign in and click "Get API Key"

3.Enable Gemini API

4.Copy the key and paste it in your .env file as GEMINI_API_KEY

🚀 Live Demo
Frontend (Vercel): https://your-frontend.vercel.app

Backend (Render/Cyclic/Railway): https://your-backend-url.onrender.com