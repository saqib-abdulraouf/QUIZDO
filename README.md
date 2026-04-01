<div align="center">

# 🎯 Panaversity Quiz Master

### Interactive MCQ Platform for the Panaversity Agentic AI Course

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Groq AI](https://img.shields.io/badge/Groq_AI-FF6B35?style=for-the-badge&logo=ai&logoColor=white)](https://groq.com/)

<br />

**1000+ MCQs** · **AI-Powered Python Tutor** · **Progress Tracking** · **Instant Feedback**

---

</div>

## 📖 Overview

Panaversity Quiz Master is an interactive, browser-based MCQ quiz platform designed for students of the **Panaversity Agentic AI Course**. It covers multiple books with lesson-wise practice, real-time scoring, and an AI-powered Python tutor that generates custom questions on demand.

---

## 🗂️ Project Structure

```
panaversity-quiz-master/
│
├── index.html                  # Landing page
├── .env.example                # Environment variable template
├── .gitignore                  # Git ignore rules
│
├── book1/
│   ├── book_index.html         # Book 1 quiz interface
│   ├── quiz_script.js          # Quiz logic + 300 MCQs
│   └── quiz_style.css          # Styling
│
├── book2/
│   ├── book_index.html         # Book 2 quiz interface
│   ├── quiz_script.js          # Quiz logic + 494 MCQs
│   └── quiz_style.css          # Styling
│
└── pymaster/
    ├── index.html              # AI-powered Python quiz
    ├── config.example.js       # API config template
    └── quiz_style.css          # Styling
```

---

## 📚 Books & Content

### 📘 Book 1 — Agent Factory: Building Digital FTEs
| Feature | Details |
|---------|---------|
| Total MCQs | **300 Scenario-Based Questions** |
| Parts | Basic (Q1–100) · Intermediate (Q101–200) · Advanced (Q201–300) |
| Requirements | None — opens directly in browser |

### 📗 Book 2 — Chapter 12: The AI Agent Factory Paradigm
| Feature | Details |
|---------|---------|
| Total MCQs | **494 Questions across 10 Lessons** |
| Levels | Basic · Conceptual · Thinking-Based |
| Requirements | None — opens directly in browser |

### 🐍 PyMaster — AI-Powered Python Tutor
| Feature | Details |
|---------|---------|
| Total MCQs | **50 AI-generated questions per topic** |
| Topics | Variables, Lists, OOP, Django, Flask, FastAPI & more |
| AI Model | Groq — LLaMA 3.3 70B Versatile |
| Requirements | Groq API Key (free at [console.groq.com](https://console.groq.com/keys)) |

---

## 🚀 Getting Started

### Book 1 & Book 2
Simply open the HTML file in any browser — no setup needed:
```bash
# Open Book 1
open book1/book_index.html

# Open Book 2
open book2/book_index.html
```

### PyMaster (AI Quiz)
1. Get a free API key from [Groq Console](https://console.groq.com/keys)
2. Open `pymaster/index.html` in your browser
3. Enter your API key when prompted (stored in session only — never saved permanently)

> **💡 Tip:** Optionally, copy `pymaster/config.example.js` to `pymaster/config.js` and add your key there for convenience.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Typography** | Space Mono, Syne (Google Fonts) |
| **AI Engine** | Groq API — LLaMA 3.3 70B Versatile |
| **Authentication** | Browser `localStorage` (frontend-only) |
| **Password Security** | SHA-256 Hashing |

---

## 🔐 Security

| Feature | Implementation |
|---------|---------------|
| API Keys | Never hardcoded — entered via secure UI prompt |
| Key Storage | `sessionStorage` — cleared when browser tab closes |
| Passwords | SHA-256 hashed before storage |
| Sensitive Files | `.env`, `config.js` excluded via `.gitignore` |

---

## 👤 User System

- **Sign up / Login** via the header on all pages
- Progress and scores saved in browser `localStorage`
- Same account works across Book 1, Book 2, and PyMaster

---

## 📄 License

This project is built for educational purposes as part of the **Panaversity Agentic AI Course**.

---

<div align="center">

**Built with ❤️ for Panaversity Students**

*Learning AI, one question at a time.*

</div>
