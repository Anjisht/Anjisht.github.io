# Anjisht's Personal Portfolio

A full-stack MERN portfolio website showcasing projects, skills, experience, and more.

## 🚀 Live Demo

- **Frontend:** [https://anjisht.github.io](https://anjisht.github.io) *(update after deployment)*
- **Backend API:** *(update after deployment on Render/Railway)*

## 🛠 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React.js + Vite, React Router DOM   |
| Animations | Framer Motion / AOS                 |
| Backend    | Node.js + Express.js                |
| Database   | MongoDB + Mongoose                  |
| Deployment | Vercel (frontend), Render (backend) |

## 📁 Folder Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page-level components
│   │   ├── context/       # Theme context (dark/light mode)
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Helper utilities
│   └── public/            # Static assets (CV PDF/DOCX)
├── server/          # Express backend
│   ├── routes/            # API route definitions
│   ├── models/            # Mongoose schemas
│   ├── controllers/       # Route handler logic
│   ├── middleware/        # Custom middleware
│   └── uploads/           # CV files served for download
└── README.md
```

## ⚙️ Local Setup

### Prerequisites
- Node.js >= 18
- MongoDB Atlas URI (or local MongoDB)

### Clone & Install

```bash
git clone https://github.com/Anjisht/Anjisht.github.io.git
cd Anjisht.github.io

# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Environment Variables

Create `server/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
# Optional Nodemailer vars
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Run Locally

```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

Visit `http://localhost:5173`

## 📄 CV Download

PDF and DOCX versions of the resume are served via the Express backend at:
- `GET /api/cv/pdf`
- `GET /api/cv/docx`

Place your actual CV files in `server/uploads/` named `resume.pdf` and `resume.docx`.

## ⚠️ Security

Never push `.env` to GitHub. The `.gitignore` already excludes it.
