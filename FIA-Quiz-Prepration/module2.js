(function() {
const quizData = {
  "test_name": "FIA Computer-Based Test - Practice MCQs",
  "based_on_syllabus": {
    "General Knowledge": "45%",
    "English": "30%",
    "Mathematics": "15%",
    "Pakistan Studies": "5%",
    "Islamiat": "5%"
  },
  "total_questions": 100,
  "questions": [
    {
      "id": 1,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "Which of the following is an input device?",
      "options": {
        "A": "Monitor",
        "B": "Printer",
        "C": "Keyboard",
        "D": "Speaker"
      },
      "answer": "C",
      "correct_option": "Keyboard",
      "explanation": "A keyboard is used to enter data into a computer, making it an input device."
    },
    {
      "id": 2,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "What does CPU stand for?",
      "options": {
        "A": "Central Processing Unit",
        "B": "Central Program Utility",
        "C": "Computer Processing Unit",
        "D": "Central Power Unit"
      },
      "answer": "A",
      "correct_option": "Central Processing Unit",
      "explanation": "The CPU executes instructions and controls computer operations."
    },
    {
      "id": 3,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Medium",
      "question": "Which gas is most abundant in Earth's atmosphere?",
      "options": {
        "A": "Oxygen",
        "B": "Nitrogen",
        "C": "Carbon Dioxide",
        "D": "Hydrogen"
      },
      "answer": "B",
      "correct_option": "Nitrogen",
      "explanation": "Nitrogen makes up approximately 78% of Earth's atmosphere."
    },
    {
      "id": 4,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Easy",
      "question": "Who was the first Governor-General of Pakistan?",
      "options": {
        "A": "Liaquat Ali Khan",
        "B": "Muhammad Ali Jinnah",
        "C": "Ayub Khan",
        "D": "Iskander Mirza"
      },
      "answer": "B",
      "correct_option": "Muhammad Ali Jinnah",
      "explanation": "Quaid-e-Azam Muhammad Ali Jinnah became the first Governor-General after independence."
    },
    {
      "id": 5,
      "subject": "General Knowledge",
      "topic": "International Organizations",
      "difficulty": "Medium",
      "question": "The headquarters of the United Nations is located in:",
      "options": {
        "A": "Geneva",
        "B": "Paris",
        "C": "New York",
        "D": "London"
      },
      "answer": "C",
      "correct_option": "New York",
      "explanation": "The UN Headquarters is situated in New York City, USA."
    },
    {
      "id": 6,
      "subject": "General Knowledge",
      "topic": "Geography",
      "difficulty": "Easy",
      "question": "Which is the longest river in Pakistan?",
      "options": {
        "A": "Jhelum",
        "B": "Chenab",
        "C": "Indus",
        "D": "Ravi"
      },
      "answer": "C",
      "correct_option": "Indus",
      "explanation": "The Indus River is the longest river in Pakistan."
    },
    {
      "id": 7,
      "subject": "General Knowledge",
      "topic": "Current Affairs",
      "difficulty": "Medium",
      "question": "What is the primary purpose of FATF?",
      "options": {
        "A": "Environmental Protection",
        "B": "International Sports",
        "C": "Combating Money Laundering and Terror Financing",
        "D": "Space Research"
      },
      "answer": "C",
      "correct_option": "Combating Money Laundering and Terror Financing",
      "explanation": "The Financial Action Task Force (FATF) develops policies against money laundering and terrorist financing."
    },
    {
      "id": 8,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "Which file extension is commonly used for Microsoft Word documents (modern versions)?",
      "options": {
        "A": ".xls",
        "B": ".ppt",
        "C": ".docx",
        "D": ".pdf"
      },
      "answer": "C",
      "correct_option": ".docx",
      "explanation": "Microsoft Word documents are commonly saved with the .docx extension."
    },
    {
      "id": 9,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Medium",
      "question": "The SI unit of force is:",
      "options": {
        "A": "Joule",
        "B": "Pascal",
        "C": "Newton",
        "D": "Watt"
      },
      "answer": "C",
      "correct_option": "Newton",
      "explanation": "Force is measured in Newtons (N), named after Sir Isaac Newton."
    },
    {
      "id": 10,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "Which shortcut is used to copy selected text in Windows?",
      "options": {
        "A": "Ctrl + X",
        "B": "Ctrl + V",
        "C": "Ctrl + C",
        "D": "Ctrl + Z"
      },
      "answer": "C",
      "correct_option": "Ctrl + C",
      "explanation": "Ctrl + C copies the selected text or object."
    },
    {
      "id": 11,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Medium",
      "question": "Which of the following is system software?",
      "options": {
        "A": "MS Word",
        "B": "Windows 11",
        "C": "Google Chrome",
        "D": "Adobe Photoshop"
      },
      "answer": "B",
      "correct_option": "Windows 11",
      "explanation": "Windows is an operating system, which is system software responsible for managing computer hardware and software resources."
    },
    {
      "id": 12,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Easy",
      "question": "Which vitamin is mainly produced in the human body through sunlight?",
      "options": {
        "A": "Vitamin A",
        "B": "Vitamin B12",
        "C": "Vitamin C",
        "D": "Vitamin D"
      },
      "answer": "D",
      "correct_option": "Vitamin D",
      "explanation": "Exposure to sunlight helps the skin produce Vitamin D."
    },
    {
      "id": 13,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Easy",
      "question": "Pakistan became a nuclear power in which year?",
      "options": {
        "A": "1996",
        "B": "1997",
        "C": "1998",
        "D": "1999"
      },
      "answer": "C",
      "correct_option": "1998",
      "explanation": "Pakistan successfully conducted nuclear tests at Chagai on 28 May 1998."
    },
    {
      "id": 14,
      "subject": "General Knowledge",
      "topic": "International Organizations",
      "difficulty": "Medium",
      "question": "How many permanent members are there in the UN Security Council?",
      "options": {
        "A": "3",
        "B": "5",
        "C": "7",
        "D": "10"
      },
      "answer": "B",
      "correct_option": "5",
      "explanation": "The five permanent members are China, France, Russia, the United Kingdom, and the United States."
    },
    {
      "id": 15,
      "subject": "General Knowledge",
      "topic": "Geography",
      "difficulty": "Medium",
      "question": "Which is the highest mountain peak in Pakistan?",
      "options": {
        "A": "Nanga Parbat",
        "B": "Broad Peak",
        "C": "K2",
        "D": "Rakaposhi"
      },
      "answer": "C",
      "correct_option": "K2",
      "explanation": "K2 is the highest mountain in Pakistan and the second-highest in the world."
    },
    {
      "id": 16,
      "subject": "General Knowledge",
      "topic": "Current Affairs",
      "difficulty": "Medium",
      "question": "Which organization publishes the Human Development Index (HDI)?",
      "options": {
        "A": "World Bank",
        "B": "UNDP",
        "C": "UNESCO",
        "D": "WHO"
      },
      "answer": "B",
      "correct_option": "UNDP",
      "explanation": "The Human Development Report, including the HDI, is published by the United Nations Development Programme (UNDP)."
    },
    {
      "id": 17,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "Which of the following is NOT a web browser?",
      "options": {
        "A": "Mozilla Firefox",
        "B": "Google Chrome",
        "C": "Microsoft Excel",
        "D": "Microsoft Edge"
      },
      "answer": "C",
      "correct_option": "Microsoft Excel",
      "explanation": "Microsoft Excel is a spreadsheet application, not a web browser."
    },
    {
      "id": 18,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Medium",
      "question": "Which blood group is known as the universal donor?",
      "options": {
        "A": "A+",
        "B": "B+",
        "C": "AB+",
        "D": "O Negative"
      },
      "answer": "D",
      "correct_option": "O Negative",
      "explanation": "O Negative blood can generally be transfused to patients of any blood group in emergencies."
    },
    {
      "id": 19,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Medium",
      "question": "Which city is known as the 'City of Saints' in Pakistan?",
      "options": {
        "A": "Lahore",
        "B": "Multan",
        "C": "Peshawar",
        "D": "Hyderabad"
      },
      "answer": "B",
      "correct_option": "Multan",
      "explanation": "Multan is called the 'City of Saints' because of its many historic shrines of Sufi saints."
    },
    {
      "id": 20,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "What does RAM stand for?",
      "options": {
        "A": "Read Access Memory",
        "B": "Random Access Memory",
        "C": "Rapid Access Module",
        "D": "Random Application Memory"
      },
      "answer": "B",
      "correct_option": "Random Access Memory",
      "explanation": "RAM is temporary memory used by the computer to store data currently in use for fast access."
    },
    {
      "id": 21,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Medium",
      "question": "Which protocol is primarily used to browse websites on the Internet?",
      "options": {
        "A": "FTP",
        "B": "SMTP",
        "C": "HTTP",
        "D": "POP3"
      },
      "answer": "C",
      "correct_option": "HTTP",
      "explanation": "HTTP (HyperText Transfer Protocol) is the standard protocol used for accessing websites."
    },
    {
      "id": 22,
      "subject": "General Knowledge",
      "topic": "Current Affairs",
      "difficulty": "Medium",
      "question": "The headquarters of the International Monetary Fund (IMF) is located in:",
      "options": {
        "A": "Geneva",
        "B": "Washington D.C.",
        "C": "New York",
        "D": "London"
      },
      "answer": "B",
      "correct_option": "Washington D.C.",
      "explanation": "The IMF headquarters is located in Washington, D.C., USA."
    },
    {
      "id": 23,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Medium",
      "question": "Which is the largest province of Pakistan by area?",
      "options": {
        "A": "Punjab",
        "B": "Sindh",
        "C": "Khyber Pakhtunkhwa",
        "D": "Balochistan"
      },
      "answer": "D",
      "correct_option": "Balochistan",
      "explanation": "Balochistan is the largest province of Pakistan in terms of land area."
    },
    {
      "id": 24,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Easy",
      "question": "The chemical symbol 'Na' represents:",
      "options": {
        "A": "Nitrogen",
        "B": "Nickel",
        "C": "Sodium",
        "D": "Neon"
      },
      "answer": "C",
      "correct_option": "Sodium",
      "explanation": "Na is the chemical symbol for Sodium, derived from the Latin word 'Natrium'."
    },
    {
      "id": 25,
      "subject": "General Knowledge",
      "topic": "Geography",
      "difficulty": "Easy",
      "question": "Which desert is the largest in Pakistan?",
      "options": {
        "A": "Thal Desert",
        "B": "Cholistan Desert",
        "C": "Thar Desert",
        "D": "Kharan Desert"
      },
      "answer": "C",
      "correct_option": "Thar Desert",
      "explanation": "The Thar Desert is Pakistan's largest desert, extending into India."
    },
    {
      "id": 26,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Medium",
      "question": "Which one of the following is an example of cloud storage?",
      "options": {
        "A": "Google Drive",
        "B": "Notepad",
        "C": "Paint",
        "D": "Calculator"
      },
      "answer": "A",
      "correct_option": "Google Drive",
      "explanation": "Google Drive is a cloud storage service that stores files online."
    },
    {
      "id": 27,
      "subject": "General Knowledge",
      "topic": "International Organizations",
      "difficulty": "Medium",
      "question": "WHO stands for:",
      "options": {
        "A": "World Health Organization",
        "B": "World Human Organization",
        "C": "World Hospital Organization",
        "D": "Health World Organization"
      },
      "answer": "A",
      "correct_option": "World Health Organization",
      "explanation": "WHO is the United Nations agency responsible for international public health."
    },
    {
      "id": 28,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Easy",
      "question": "The national flower of Pakistan is:",
      "options": {
        "A": "Rose",
        "B": "Sunflower",
        "C": "Jasmine",
        "D": "Tulip"
      },
      "answer": "C",
      "correct_option": "Jasmine",
      "explanation": "Jasmine (Chambeli) is the national flower of Pakistan."
    },
    {
      "id": 29,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "Which shortcut key is used to save a document in Windows?",
      "options": {
        "A": "Ctrl + P",
        "B": "Ctrl + N",
        "C": "Ctrl + S",
        "D": "Ctrl + A"
      },
      "answer": "C",
      "correct_option": "Ctrl + S",
      "explanation": "Ctrl + S is the standard keyboard shortcut used to save files."
    },
    {
      "id": 30,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Medium",
      "question": "Which planet is known as the Red Planet?",
      "options": {
        "A": "Venus",
        "B": "Mars",
        "C": "Jupiter",
        "D": "Mercury"
      },
      "answer": "B",
      "correct_option": "Mars",
      "explanation": "Mars appears reddish because of iron oxide (rust) on its surface."
    },
    {
      "id": 31,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Medium",
      "question": "Which of the following is NOT an operating system?",
      "options": {
        "A": "Linux",
        "B": "Windows",
        "C": "MS Excel",
        "D": "macOS"
      },
      "answer": "C",
      "correct_option": "MS Excel",
      "explanation": "MS Excel is a spreadsheet application, whereas Linux, Windows, and macOS are operating systems."
    },
    {
      "id": 32,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Easy",
      "question": "Which city is the capital of Khyber Pakhtunkhwa?",
      "options": {
        "A": "Abbottabad",
        "B": "Peshawar",
        "C": "Mardan",
        "D": "Swat"
      },
      "answer": "B",
      "correct_option": "Peshawar",
      "explanation": "Peshawar is the provincial capital of Khyber Pakhtunkhwa."
    },
    {
      "id": 33,
      "subject": "General Knowledge",
      "topic": "Current Affairs",
      "difficulty": "Medium",
      "question": "Which organization is responsible for maintaining international peace and security?",
      "options": {
        "A": "UN Security Council",
        "B": "World Bank",
        "C": "IMF",
        "D": "OPEC"
      },
      "answer": "A",
      "correct_option": "UN Security Council",
      "explanation": "The UN Security Council has the primary responsibility for international peace and security."
    },
    {
      "id": 34,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Medium",
      "question": "Water boils at what temperature at sea level?",
      "options": {
        "A": "90°C",
        "B": "95°C",
        "C": "100°C",
        "D": "110°C"
      },
      "answer": "C",
      "correct_option": "100°C",
      "explanation": "At standard atmospheric pressure (sea level), water boils at 100°C."
    },
    {
      "id": 35,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Easy",
      "question": "What does USB stand for?",
      "options": {
        "A": "Universal Serial Bus",
        "B": "Universal System Bus",
        "C": "United Serial Bus",
        "D": "Universal Software Bus"
      },
      "answer": "A",
      "correct_option": "Universal Serial Bus",
      "explanation": "USB stands for Universal Serial Bus and is used to connect peripherals to computers."
    },
    {
      "id": 36,
      "subject": "General Knowledge",
      "topic": "International Organizations",
      "difficulty": "Medium",
      "question": "Which organization is known as the 'World Bank Group'?",
      "options": {
        "A": "ADB",
        "B": "IMF",
        "C": "IBRD",
        "D": "WTO"
      },
      "answer": "C",
      "correct_option": "IBRD",
      "explanation": "The International Bank for Reconstruction and Development (IBRD) is the main lending institution of the World Bank Group."
    },
    {
      "id": 37,
      "subject": "General Knowledge",
      "topic": "Geography",
      "difficulty": "Easy",
      "question": "Which ocean is the largest in the world?",
      "options": {
        "A": "Atlantic Ocean",
        "B": "Indian Ocean",
        "C": "Pacific Ocean",
        "D": "Arctic Ocean"
      },
      "answer": "C",
      "correct_option": "Pacific Ocean",
      "explanation": "The Pacific Ocean is the world's largest and deepest ocean."
    },
    {
      "id": 38,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Medium",
      "question": "Which of the following is an email service?",
      "options": {
        "A": "Gmail",
        "B": "Google Maps",
        "C": "Google Drive",
        "D": "Google Docs"
      },
      "answer": "A",
      "correct_option": "Gmail",
      "explanation": "Gmail is Google's email service used to send and receive electronic mail."
    },
    {
      "id": 39,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Medium",
      "question": "Which is the largest dam in Pakistan by storage capacity?",
      "options": {
        "A": "Warsak Dam",
        "B": "Mangla Dam",
        "C": "Hub Dam",
        "D": "Rawal Dam"
      },
      "answer": "B",
      "correct_option": "Mangla Dam",
      "explanation": "Mangla Dam is one of Pakistan's largest dams by storage capacity and plays a major role in irrigation and power generation."
    },
    {
      "id": 40,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Medium",
      "question": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
      "options": {
        "A": "Pulmonary Artery",
        "B": "Aorta",
        "C": "Pulmonary Vein",
        "D": "Superior Vena Cava"
      },
      "answer": "C",
      "correct_option": "Pulmonary Vein",
      "explanation": "The pulmonary veins carry oxygen-rich blood from the lungs to the left atrium of the heart."
    },
    {
      "id": 41,
      "subject": "General Knowledge",
      "topic": "Computer Basics",
      "difficulty": "Medium",
      "question": "Which of the following devices is primarily used to connect a computer to the Internet?",
      "options": {
        "A": "Scanner",
        "B": "Modem",
        "C": "Printer",
        "D": "Projector"
      },
      "answer": "B",
      "correct_option": "Modem",
      "explanation": "A modem converts digital and analog signals, enabling a computer to access the Internet through an ISP."
    },
    {
      "id": 42,
      "subject": "General Knowledge",
      "topic": "Current Affairs",
      "difficulty": "Medium",
      "question": "Which international organization is responsible for regulating global trade rules?",
      "options": {
        "A": "WHO",
        "B": "UNESCO",
        "C": "WTO",
        "D": "OPEC"
      },
      "answer": "C",
      "correct_option": "World Trade Organization (WTO)",
      "explanation": "The WTO regulates international trade, settles trade disputes, and promotes free trade among member countries."
    },
    {
      "id": 43,
      "subject": "General Knowledge",
      "topic": "Pakistan Affairs",
      "difficulty": "Easy",
      "question": "The national language of Pakistan is:",
      "options": {
        "A": "Punjabi",
        "B": "Urdu",
        "C": "Sindhi",
        "D": "English"
      },
      "answer": "B",
      "correct_option": "Urdu",
      "explanation": "Urdu is the national language of Pakistan, while English is widely used as an official language."
    },
    {
      "id": 44,
      "subject": "General Knowledge",
      "topic": "Everyday Science",
      "difficulty": "Medium",
      "question": "Which part of the human body produces insulin?",
      "options": {
        "A": "Liver",
        "B": "Kidney",
        "C": "Pancreas",
        "D": "Heart"
      },
      "answer": "C",
      "correct_option": "Pancreas",
      "explanation": "Insulin is produced by the beta cells of the pancreas and helps regulate blood sugar levels."
    },
    {
      "id": 45,
      "subject": "General Knowledge",
      "topic": "International Organizations",
      "difficulty": "Medium",
      "question": "SAARC was established in which year?",
      "options": {
        "A": "1980",
        "B": "1985",
        "C": "1990",
        "D": "1995"
      },
      "answer": "B",
      "correct_option": "1985",
      "explanation": "The South Asian Association for Regional Cooperation (SAARC) was established on 8 December 1985 in Dhaka, Bangladesh."
    },
    {
      "id": 46,
      "subject": "English",
      "topic": "Synonyms",
      "difficulty": "Easy",
      "question": "Choose the synonym of 'Brave'.",
      "options": {
        "A": "Coward",
        "B": "Bold",
        "C": "Weak",
        "D": "Lazy"
      },
      "answer": "B",
      "correct_option": "Bold",
      "explanation": "'Bold' has the same meaning as 'Brave'."
    },
    {
      "id": 47,
      "subject": "English",
      "topic": "Antonyms",
      "difficulty": "Easy",
      "question": "Choose the antonym of 'Ancient'.",
      "options": {
        "A": "Old",
        "B": "Historic",
        "C": "Modern",
        "D": "Traditional"
      },
      "answer": "C",
      "correct_option": "Modern",
      "explanation": "'Modern' is the opposite of 'Ancient'."
    },
    {
      "id": 48,
      "subject": "English",
      "topic": "Prepositions",
      "difficulty": "Easy",
      "question": "He is good ____ Mathematics.",
      "options": {
        "A": "at",
        "B": "in",
        "C": "on",
        "D": "for"
      },
      "answer": "A",
      "correct_option": "at",
      "explanation": "The correct preposition with 'good' is 'at'."
    },
    {
      "id": 49,
      "subject": "English",
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "question": "Choose the correctly spelled word.",
      "options": {
        "A": "Accomodation",
        "B": "Accommodation",
        "C": "Acommodation",
        "D": "Accommadation"
      },
      "answer": "B",
      "correct_option": "Accommodation",
      "explanation": "'Accommodation' is the correct spelling."
    },
    {
      "id": 50,
      "subject": "English",
      "topic": "Sentence Correction",
      "difficulty": "Medium",
      "question": "Choose the correct sentence.",
      "options": {
        "A": "She don't like tea.",
        "B": "She doesn't likes tea.",
        "C": "She doesn't like tea.",
        "D": "She not like tea."
      },
      "answer": "C",
      "correct_option": "She doesn't like tea.",
      "explanation": "After 'doesn't', the main verb remains in its base form."
    },
    {
      "id": 51,
      "subject": "English",
      "topic": "Articles",
      "difficulty": "Easy",
      "question": "He bought ____ umbrella.",
      "options": {
        "A": "a",
        "B": "an",
        "C": "the",
        "D": "no article"
      },
      "answer": "B",
      "correct_option": "an",
      "explanation": "'Umbrella' begins with a vowel sound, so 'an' is used."
    },
    {
      "id": 52,
      "subject": "English",
      "topic": "Tenses",
      "difficulty": "Medium",
      "question": "They ____ cricket every Sunday.",
      "options": {
        "A": "plays",
        "B": "play",
        "C": "playing",
        "D": "played"
      },
      "answer": "B",
      "correct_option": "play",
      "explanation": "The Present Simple tense uses the base form with plural subjects."
    },
    {
      "id": 53,
      "subject": "English",
      "topic": "Active Passive Voice",
      "difficulty": "Medium",
      "question": "Passive voice of 'Ali wrote a letter.'",
      "options": {
        "A": "A letter was wrote by Ali.",
        "B": "A letter has been written by Ali.",
        "C": "A letter was written by Ali.",
        "D": "Ali was written a letter."
      },
      "answer": "C",
      "correct_option": "A letter was written by Ali.",
      "explanation": "The Simple Past passive structure is 'was/were + past participle'."
    },
    {
      "id": 54,
      "subject": "English",
      "topic": "Idioms",
      "difficulty": "Medium",
      "question": "The idiom 'Break the ice' means:",
      "options": {
        "A": "Break something",
        "B": "Start a conversation",
        "C": "Fight someone",
        "D": "Feel cold"
      },
      "answer": "B",
      "correct_option": "Start a conversation",
      "explanation": "'Break the ice' means to begin a friendly conversation in a social situation."
    },
    {
      "id": 55,
      "subject": "English",
      "topic": "Error Detection",
      "difficulty": "Medium",
      "question": "Identify the incorrect part: 'Each of the boys have a book.'",
      "options": {
        "A": "Each",
        "B": "of the boys",
        "C": "have",
        "D": "a book"
      },
      "answer": "C",
      "correct_option": "have",
      "explanation": "'Each' is singular, so the correct verb is 'has'."
    },
    {
      "id": 56,
      "subject": "English",
      "topic": "Synonyms",
      "difficulty": "Easy",
      "question": "Choose the synonym of 'Rapid'.",
      "options": {
        "A": "Slow",
        "B": "Fast",
        "C": "Weak",
        "D": "Heavy"
      },
      "answer": "B",
      "correct_option": "Fast",
      "explanation": "'Rapid' means fast or quick."
    },
    {
      "id": 57,
      "subject": "English",
      "topic": "Antonyms",
      "difficulty": "Easy",
      "question": "Choose the antonym of 'Expand'.",
      "options": {
        "A": "Increase",
        "B": "Stretch",
        "C": "Contract",
        "D": "Develop"
      },
      "answer": "C",
      "correct_option": "Contract",
      "explanation": "'Contract' means to become smaller, the opposite of 'Expand'."
    },
    {
      "id": 58,
      "subject": "English",
      "topic": "Prepositions",
      "difficulty": "Easy",
      "question": "She arrived ____ the airport on time.",
      "options": {
        "A": "at",
        "B": "in",
        "C": "on",
        "D": "into"
      },
      "answer": "A",
      "correct_option": "at",
      "explanation": "We use 'at' for specific places such as airports, stations, and bus stops."
    },
    {
      "id": 59,
      "subject": "English",
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "question": "Choose the correctly spelled word.",
      "options": {
        "A": "Enviroment",
        "B": "Environment",
        "C": "Environmant",
        "D": "Enviornment"
      },
      "answer": "B",
      "correct_option": "Environment",
      "explanation": "'Environment' is the correct spelling."
    },
    {
      "id": 60,
      "subject": "English",
      "topic": "Sentence Correction",
      "difficulty": "Medium",
      "question": "Choose the correct sentence.",
      "options": {
        "A": "He go to school every day.",
        "B": "He goes to school every day.",
        "C": "He going to school every day.",
        "D": "He gone to school every day."
      },
      "answer": "B",
      "correct_option": "He goes to school every day.",
      "explanation": "In the Present Simple tense, third-person singular subjects take the verb with 's/es'."
    },
    {
      "id": 61,
      "subject": "English",
      "topic": "Articles",
      "difficulty": "Easy",
      "question": "I saw ____ elephant in the zoo.",
      "options": {
        "A": "a",
        "B": "an",
        "C": "the",
        "D": "no article"
      },
      "answer": "B",
      "correct_option": "an",
      "explanation": "'Elephant' begins with a vowel sound, so 'an' is used."
    },
    {
      "id": 62,
      "subject": "English",
      "topic": "Tenses",
      "difficulty": "Medium",
      "question": "By next year, she ____ her degree.",
      "options": {
        "A": "completes",
        "B": "completed",
        "C": "will have completed",
        "D": "has completed"
      },
      "answer": "C",
      "correct_option": "will have completed",
      "explanation": "Future Perfect is used for an action that will be completed before a future time."
    },
    {
      "id": 63,
      "subject": "English",
      "topic": "Active & Passive Voice",
      "difficulty": "Medium",
      "question": "Passive voice of 'The police arrested the thief.'",
      "options": {
        "A": "The thief arrested by the police.",
        "B": "The thief was arrested by the police.",
        "C": "The thief is arrested by the police.",
        "D": "The thief had arrested by the police."
      },
      "answer": "B",
      "correct_option": "The thief was arrested by the police.",
      "explanation": "The Simple Past passive voice is formed using 'was/were + past participle'."
    },
    {
      "id": 64,
      "subject": "English",
      "topic": "Idioms",
      "difficulty": "Medium",
      "question": "The idiom 'Hit the nail on the head' means:",
      "options": {
        "A": "Hit someone",
        "B": "Be exactly correct",
        "C": "Miss the point",
        "D": "Repair something"
      },
      "answer": "B",
      "correct_option": "Be exactly correct",
      "explanation": "The idiom means to describe exactly what is causing a situation or to be precisely right."
    },
    {
      "id": 65,
      "subject": "English",
      "topic": "Error Detection",
      "difficulty": "Medium",
      "question": "Identify the incorrect part: 'Neither Ali nor his friends was present.'",
      "options": {
        "A": "Neither Ali",
        "B": "nor",
        "C": "his friends",
        "D": "was"
      },
      "answer": "D",
      "correct_option": "was",
      "explanation": "When subjects are joined by 'neither...nor', the verb agrees with the nearest subject. Since 'friends' is plural, the correct verb is 'were'."
    },
    {
      "id": 66,
      "subject": "English",
      "topic": "One Word Substitution",
      "difficulty": "Medium",
      "question": "A person who cannot read or write is called:",
      "options": {
        "A": "Scholar",
        "B": "Literate",
        "C": "Illiterate",
        "D": "Graduate"
      },
      "answer": "C",
      "correct_option": "Illiterate",
      "explanation": "An illiterate person is someone who cannot read or write."
    },
    {
      "id": 67,
      "subject": "English",
      "topic": "Phrasal Verbs",
      "difficulty": "Medium",
      "question": "The phrasal verb 'Carry on' means:",
      "options": {
        "A": "Stop",
        "B": "Continue",
        "C": "Delay",
        "D": "Return"
      },
      "answer": "B",
      "correct_option": "Continue",
      "explanation": "'Carry on' means to continue doing something."
    },
    {
      "id": 68,
      "subject": "English",
      "topic": "Direct and Indirect Speech",
      "difficulty": "Medium",
      "question": "Choose the correct indirect speech: Ali said, 'I am busy.'",
      "options": {
        "A": "Ali said that I am busy.",
        "B": "Ali said that he was busy.",
        "C": "Ali said that he is busy.",
        "D": "Ali said he busy."
      },
      "answer": "B",
      "correct_option": "Ali said that he was busy.",
      "explanation": "In reported speech, the present tense changes to the past tense when the reporting verb is in the past."
    },
    {
      "id": 69,
      "subject": "English",
      "topic": "Sentence Improvement",
      "difficulty": "Medium",
      "question": "Choose the best replacement: 'He is senior than me.'",
      "options": {
        "A": "He is senior to me.",
        "B": "He is more senior than me.",
        "C": "He is senior from me.",
        "D": "No improvement."
      },
      "answer": "A",
      "correct_option": "He is senior to me.",
      "explanation": "The adjective 'senior' is followed by the preposition 'to', not 'than'."
    },
    {
      "id": 70,
      "subject": "English",
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "question": "Choose the word closest in meaning to 'Generous'.",
      "options": {
        "A": "Kind",
        "B": "Greedy",
        "C": "Cruel",
        "D": "Selfish"
      },
      "answer": "A",
      "correct_option": "Kind",
      "explanation": "'Generous' means willing to give or share freely and is closest in meaning to 'Kind'."
    },
    {
      "id": 71,
      "subject": "English",
      "topic": "Reading Comprehension",
      "difficulty": "Easy",
      "question": "Read the sentence: 'The sun rises in the east and sets in the west.' Where does the sun rise?",
      "options": {
        "A": "North",
        "B": "South",
        "C": "East",
        "D": "West"
      },
      "answer": "C",
      "correct_option": "East",
      "explanation": "The sentence clearly states that the sun rises in the east."
    },
    {
      "id": 72,
      "subject": "English",
      "topic": "Error Detection",
      "difficulty": "Medium",
      "question": "Identify the incorrect part: 'One of my friends are a doctor.'",
      "options": {
        "A": "One",
        "B": "of my friends",
        "C": "are",
        "D": "a doctor"
      },
      "answer": "C",
      "correct_option": "are",
      "explanation": "'One' is singular, so the correct verb is 'is'."
    },
    {
      "id": 73,
      "subject": "English",
      "topic": "Analogies",
      "difficulty": "Easy",
      "question": "Bird : Fly :: Fish : ?",
      "options": {
        "A": "Run",
        "B": "Walk",
        "C": "Swim",
        "D": "Jump"
      },
      "answer": "C",
      "correct_option": "Swim",
      "explanation": "A bird flies, just as a fish swims."
    },
    {
      "id": 74,
      "subject": "English",
      "topic": "Prepositions",
      "difficulty": "Easy",
      "question": "The meeting will start ____ 9:00 AM.",
      "options": {
        "A": "in",
        "B": "at",
        "C": "on",
        "D": "by"
      },
      "answer": "B",
      "correct_option": "at",
      "explanation": "We use 'at' for specific times."
    },
    {
      "id": 75,
      "subject": "English",
      "topic": "Sentence Completion",
      "difficulty": "Medium",
      "question": "If I ____ enough money, I would buy a new laptop.",
      "options": {
        "A": "have",
        "B": "had",
        "C": "will have",
        "D": "has"
      },
      "answer": "B",
      "correct_option": "had",
      "explanation": "This is the second conditional, which uses 'If + past simple' followed by 'would + base verb'."
    },
    {
      "id": 76,
      "subject": "Mathematics",
      "topic": "Percentages",
      "difficulty": "Easy",
      "question": "What is 25% of 320?",
      "options": {
        "A": "60",
        "B": "70",
        "C": "80",
        "D": "90"
      },
      "answer": "C",
      "correct_option": "80",
      "explanation": "25% = 25/100. (25/100) × 320 = 80."
    },
    {
      "id": 77,
      "subject": "Mathematics",
      "topic": "Ratio and Proportion",
      "difficulty": "Easy",
      "question": "The ratio of boys to girls is 3:5. If there are 24 boys, how many girls are there?",
      "options": {
        "A": "30",
        "B": "35",
        "C": "40",
        "D": "45"
      },
      "answer": "C",
      "correct_option": "40",
      "explanation": "3x = 24 ⇒ x = 8. Therefore, girls = 5 × 8 = 40."
    },
    {
      "id": 78,
      "subject": "Mathematics",
      "topic": "Average",
      "difficulty": "Easy",
      "question": "Find the average of 12, 18, 20, and 30.",
      "options": {
        "A": "18",
        "B": "19",
        "C": "20",
        "D": "21"
      },
      "answer": "C",
      "correct_option": "20",
      "explanation": "Average = (12 + 18 + 20 + 30) ÷ 4 = 80 ÷ 4 = 20."
    },
    {
      "id": 79,
      "subject": "Mathematics",
      "topic": "Profit and Loss",
      "difficulty": "Medium",
      "question": "An item is bought for Rs. 800 and sold for Rs. 920. What is the profit percentage?",
      "options": {
        "A": "10%",
        "B": "12%",
        "C": "15%",
        "D": "20%"
      },
      "answer": "C",
      "correct_option": "15%",
      "explanation": "Profit = 920 − 800 = 120. Profit % = (120 ÷ 800) × 100 = 15%."
    },
    {
      "id": 80,
      "subject": "Mathematics",
      "topic": "Simple Interest",
      "difficulty": "Medium",
      "question": "Find the simple interest on Rs. 5000 at 10% per annum for 2 years.",
      "options": {
        "A": "Rs. 500",
        "B": "Rs. 750",
        "C": "Rs. 1000",
        "D": "Rs. 1200"
      },
      "answer": "C",
      "correct_option": "Rs. 1000",
      "explanation": "SI = (P × R × T) ÷ 100 = (5000 × 10 × 2) ÷ 100 = Rs.1000."
    },
    {
      "id": 81,
      "subject": "Mathematics",
      "topic": "Time and Work",
      "difficulty": "Medium",
      "question": "If A can complete a job in 12 days, how many days will A take to complete half of the job?",
      "options": {
        "A": "4",
        "B": "5",
        "C": "6",
        "D": "8"
      },
      "answer": "C",
      "correct_option": "6",
      "explanation": "Half of the work requires half the time. 12 ÷ 2 = 6 days."
    },
    {
      "id": 82,
      "subject": "Mathematics",
      "topic": "Age Problems",
      "difficulty": "Medium",
      "question": "Ali is 20 years old. His brother is 5 years younger. What will be the age of his brother after 10 years?",
      "options": {
        "A": "20",
        "B": "25",
        "C": "30",
        "D": "35"
      },
      "answer": "B",
      "correct_option": "25",
      "explanation": "Brother's current age = 20 − 5 = 15. After 10 years = 25."
    },
    {
      "id": 83,
      "subject": "Mathematics",
      "topic": "Algebra",
      "difficulty": "Easy",
      "question": "Solve: 3x + 7 = 22",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "answer": "C",
      "correct_option": "5",
      "explanation": "3x = 22 − 7 = 15. Therefore, x = 5."
    },
    {
      "id": 84,
      "subject": "Mathematics",
      "topic": "Simplification",
      "difficulty": "Easy",
      "question": "Evaluate: (18 ÷ 3) + (5 × 4)",
      "options": {
        "A": "24",
        "B": "25",
        "C": "26",
        "D": "28"
      },
      "answer": "C",
      "correct_option": "26",
      "explanation": "18 ÷ 3 = 6 and 5 × 4 = 20. Total = 26."
    },
    {
      "id": 85,
      "subject": "Mathematics",
      "topic": "Number Series",
      "difficulty": "Medium",
      "question": "Find the next number: 3, 6, 12, 24, ?",
      "options": {
        "A": "36",
        "B": "42",
        "C": "48",
        "D": "54"
      },
      "answer": "C",
      "correct_option": "48",
      "explanation": "Each number is multiplied by 2."
    },
    {
      "id": 86,
      "subject": "Mathematics",
      "topic": "Speed, Time and Distance",
      "difficulty": "Medium",
      "question": "A car travels at 60 km/h. How far will it travel in 2.5 hours?",
      "options": {
        "A": "120 km",
        "B": "130 km",
        "C": "150 km",
        "D": "180 km"
      },
      "answer": "C",
      "correct_option": "150 km",
      "explanation": "Distance = Speed × Time = 60 × 2.5 = 150 km."
    },
    {
      "id": 87,
      "subject": "Mathematics",
      "topic": "Fractions",
      "difficulty": "Easy",
      "question": "What is 3/4 + 1/8?",
      "options": {
        "A": "5/8",
        "B": "7/8",
        "C": "1",
        "D": "9/8"
      },
      "answer": "B",
      "correct_option": "7/8",
      "explanation": "3/4 = 6/8. Therefore, 6/8 + 1/8 = 7/8."
    },
    {
      "id": 88,
      "subject": "Mathematics",
      "topic": "HCF and LCM",
      "difficulty": "Medium",
      "question": "Find the LCM of 12 and 18.",
      "options": {
        "A": "24",
        "B": "30",
        "C": "36",
        "D": "72"
      },
      "answer": "C",
      "correct_option": "36",
      "explanation": "Prime factors: 12 = 2² × 3, 18 = 2 × 3². LCM = 2² × 3² = 36."
    },
    {
      "id": 89,
      "subject": "Mathematics",
      "topic": "Probability",
      "difficulty": "Medium",
      "question": "A fair die is rolled once. What is the probability of getting an even number?",
      "options": {
        "A": "1/6",
        "B": "1/3",
        "C": "1/2",
        "D": "2/3"
      },
      "answer": "C",
      "correct_option": "1/2",
      "explanation": "Even numbers are 2, 4, and 6. Probability = 3/6 = 1/2."
    },
    {
      "id": 90,
      "subject": "Mathematics",
      "topic": "Percentage",
      "difficulty": "Medium",
      "question": "The price of a mobile phone increased from Rs. 20,000 to Rs. 23,000. What is the percentage increase?",
      "options": {
        "A": "10%",
        "B": "12%",
        "C": "15%",
        "D": "20%"
      },
      "answer": "C",
      "correct_option": "15%",
      "explanation": "Increase = 23,000 − 20,000 = 3,000. Percentage Increase = (3000/20000) × 100 = 15%."
    },
    {
      "id": 91,
      "subject": "Pakistan Studies",
      "topic": "History",
      "difficulty": "Easy",
      "question": "Pakistan came into existence on:",
      "options": {
        "A": "14 August 1947",
        "B": "15 August 1947",
        "C": "23 March 1940",
        "D": "11 September 1948"
      },
      "answer": "A",
      "correct_option": "14 August 1947",
      "explanation": "Pakistan gained independence on 14 August 1947."
    },
    {
      "id": 92,
      "subject": "Pakistan Studies",
      "topic": "National Symbols",
      "difficulty": "Easy",
      "question": "What is the national animal of Pakistan?",
      "options": {
        "A": "Snow Leopard",
        "B": "Markhor",
        "C": "Lion",
        "D": "Chinkara"
      },
      "answer": "B",
      "correct_option": "Markhor",
      "explanation": "The Markhor is the national animal of Pakistan."
    },
    {
      "id": 93,
      "subject": "Pakistan Studies",
      "topic": "Geography",
      "difficulty": "Easy",
      "question": "Which is the largest city of Pakistan by population?",
      "options": {
        "A": "Lahore",
        "B": "Islamabad",
        "C": "Karachi",
        "D": "Faisalabad"
      },
      "answer": "C",
      "correct_option": "Karachi",
      "explanation": "Karachi is the most populous city in Pakistan."
    },
    {
      "id": 94,
      "subject": "Pakistan Studies",
      "topic": "Constitution",
      "difficulty": "Medium",
      "question": "The Constitution of Pakistan was enforced in:",
      "options": {
        "A": "1956",
        "B": "1962",
        "C": "1973",
        "D": "1985"
      },
      "answer": "C",
      "correct_option": "1973",
      "explanation": "The Constitution of 1973 came into force on 14 August 1973."
    },
    {
      "id": 95,
      "subject": "Pakistan Studies",
      "topic": "Geography",
      "difficulty": "Easy",
      "question": "The capital city of Pakistan is:",
      "options": {
        "A": "Lahore",
        "B": "Karachi",
        "C": "Islamabad",
        "D": "Peshawar"
      },
      "answer": "C",
      "correct_option": "Islamabad",
      "explanation": "Islamabad has been the capital of Pakistan since the 1960s."
    },
    {
      "id": 96,
      "subject": "Islamiat",
      "topic": "Basic Knowledge",
      "difficulty": "Easy",
      "question": "How many pillars of Islam are there?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "answer": "C",
      "correct_option": "5",
      "explanation": "Islam is based on five fundamental pillars."
    },
    {
      "id": 97,
      "subject": "Islamiat",
      "topic": "Holy Quran",
      "difficulty": "Easy",
      "question": "How many Surahs are there in the Holy Quran?",
      "options": {
        "A": "110",
        "B": "112",
        "C": "114",
        "D": "116"
      },
      "answer": "C",
      "correct_option": "114",
      "explanation": "The Holy Quran contains 114 Surahs."
    },
    {
      "id": 98,
      "subject": "Islamiat",
      "topic": "Prophets",
      "difficulty": "Easy",
      "question": "Who was the last Prophet of Islam?",
      "options": {
        "A": "Hazrat Musa (A.S.)",
        "B": "Hazrat Isa (A.S.)",
        "C": "Hazrat Muhammad (ﷺ)",
        "D": "Hazrat Ibrahim (A.S.)"
      },
      "answer": "C",
      "correct_option": "Hazrat Muhammad (ﷺ)",
      "explanation": "Hazrat Muhammad (ﷺ) is the final Prophet in Islam."
    },
    {
      "id": 99,
      "subject": "Islamiat",
      "topic": "Prayer",
      "difficulty": "Easy",
      "question": "How many obligatory (Farz) prayers are offered daily?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "answer": "C",
      "correct_option": "5",
      "explanation": "Muslims offer five obligatory prayers every day."
    },
    {
      "id": 100,
      "subject": "Islamiat",
      "topic": "Hajj",
      "difficulty": "Easy",
      "question": "Hajj is performed in which Islamic month?",
      "options": {
        "A": "Ramadan",
        "B": "Muharram",
        "C": "Dhul-Hijjah",
        "D": "Safar"
      },
      "answer": "C",
      "correct_option": "Dhul-Hijjah",
      "explanation": "Hajj is performed during the month of Dhul-Hijjah, the 12th month of the Islamic calendar."
    }
  ]
};

// Expose as Module 2 data
window.MODULE_2 = quizData;
})();