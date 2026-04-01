# 🏭 Panaversity Quiz Master

An interactive MCQ quiz platform for the **Panaversity Agentic AI Course** — featuring multiple books, lesson-wise practice, and an AI-powered Python tutor.

---

## 📁 Project Structure

```
quiz-folder/
├── quiz_style.css          # Shared CSS for all books
├── quiz_script.js          # Quiz logic + MCQ data (Book 1 & Book 2)
├── shared_header.js        # Unified header injected into PyMaster
│
├── book1/
│   └── index.html          # Agent Factory: Building Digital FTEs (300 MCQs)
│
├── book2/
│   └── index.html          # Chapter 12: The AI Agent Factory Paradigm (494 MCQs)
│
└── pymaster/
    ├── index.html          # PyMaster Tutor — AI-powered Python quiz

```

---

## 📚 Books

### Book 1 — Agent Factory: Building Digital FTEs
- **300 Scenario-Based MCQs**
- 3 Parts: Basic (Q1–100) · Intermediate (Q101–200) · Advanced (Q201–300)
- No server required — opens directly in browser

### Book 2 — Chapter 12: The AI Agent Factory Paradigm
- **494 MCQs across 10 Lessons**
- Each lesson has 3 levels: Basic · Conceptual · Thinking-Based
- No server required — opens directly in browser

### Book 3 — PyMaster Tutor 🐍
- **AI-Generated Python MCQs** — 50 questions per topic
- Topics: Variables, Lists, OOP, Django, Flask, FastAPI, and more
- Requires local server (Groq API)

---

## 🚀 How to Run

### Book 1 & Book 2
Simply open `book1/index.html` or `book2/index.html` in any browser.
No installation needed.

---




## 🛠️ Tech Stack

| Part | Technology |
|------|-----------|
| Frontend | HTML, CSS, JavaScript (Vanilla) |
| Fonts | Space Mono, Syne (Google Fonts) |
| Python Quiz Backend | Python, Flask, Flask-CORS |
| AI Model | Groq — llama-3.3-70b-versatile |
| Auth | localStorage (frontend only) |

---

## 👤 Login System

- Sign up / Login via the header on all pages
- Data stored in browser `localStorage`
- Same account works across Book 1, Book 2, and PyMaster

---

## 📖 Course

**Panaversity Agentic AI Course**
Built for students learning AI agent development, Digital FTEs, MCP, SDD, and enterprise AI deployment.
