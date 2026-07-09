// ╔═══════════════════════════════════════════════════════════╗
// ║  MODULE 2 — FIA Quiz Preparation                        ║
// ║  Paste your MCQs below in the questions array            ║
// ╚═══════════════════════════════════════════════════════════╝
//
// FORMAT: Each question must follow this structure:
// {"id": 1, "subject": "General Knowledge", "question": "Your question?", "options": {"A": "Option A", "B": "Option B", "C": "Option C", "D": "Option D"}, "answer": "B"}
//
// SUBJECTS: "General Knowledge", "English", "Mathematics", "Pakistan Studies", "Islamiat"
// (You can use any subject name — the quiz will auto-detect them)

const module2Data = {
  "test_name": "FIA Computer-Based Test - Module 2",
  "total_questions": 100,
  "questions": [
    // ──── PASTE YOUR MCQs HERE ────
    // Example:
    // {"id": 1, "subject": "General Knowledge", "question": "What is the capital of Pakistan?", "options": {"A": "Lahore", "B": "Karachi", "C": "Islamabad", "D": "Peshawar"}, "answer": "C"},
    // {"id": 2, "subject": "English", "question": "Choose the correct spelling:", "options": {"A": "Recieve", "B": "Receive", "C": "Receve", "D": "Receeve"}, "answer": "B"},
  ]
};

// Expose as Module 2 data
window.MODULE_2 = module2Data;
