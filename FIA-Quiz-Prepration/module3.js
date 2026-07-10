(function () {
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
      "sub_category": "Advanced Computer",
      "question_number": 1,
      "difficulty": "Easy",
      "question": "In a computer network, what does the 'Subnet Mask' primarily determine?",
      "options": {
        "A": "The MAC address of the router",
        "B": "The external IP address assigned by the ISP",
        "C": "Which part of an IP address belongs to the network and which belongs to the host",
        "D": "The maximum data transfer speed of the LAN"
      },
      "correct_answer": "C",
      "explanation": "A subnet mask splits an IP address into network and host addresses, allowing the system to identify if a destination is on the local network or a remote one.",
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 2,
      "question": "Which layer of the OSI (Open Systems Interconnection) model is responsible for routing packets across different networks?",
      "options": {
        "A": "Transport Layer",
        "B": "Network Layer",
        "C": "Data Link Layer",
        "D": "Physical Layer"
      },
      "correct_answer": "B",
      "explanation": "The Network Layer (Layer 3) handles packet routing, logical addressing (IP), and path determination.",
      "id": 2,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 3,
      "question": "What type of malware is specifically designed to lock a user's files and demand payment to restore access?",
      "options": {
        "A": "Spyware",
        "B": "Trojan Horse",
        "C": "Ransomware",
        "D": "Logic Bomb"
      },
      "correct_answer": "C",
      "explanation": "Ransomware encrypts the victim's data and demands a ransom (usually in cryptocurrency) for the decryption key.",
      "id": 3,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 4,
      "question": "In Microsoft Excel, which absolute cell referencing format locks both the row and the column when copying a formula?",
      "options": {
        "A": "A1",
        "B": "$A1",
        "C": "A$1",
        "D": "$A$1"
      },
      "correct_answer": "D",
      "explanation": "The dollar sign ($) before both the column letter and row number locks the reference completely, preventing it from changing when dragged.",
      "id": 4,
      "answer": "D"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 5,
      "question": "What is the primary purpose of a Reverse Proxy server in web infrastructure?",
      "options": {
        "A": "To cache user web histories on a local area network",
        "B": "To protect web servers by intercepting incoming client requests and balancing loads",
        "C": "To bypass government firewalls using encryption",
        "D": "To assign dynamic IP addresses to client computers"
      },
      "correct_answer": "B",
      "explanation": "A reverse proxy sits in front of web servers, directing client requests to optimize performance, increase security, and handle load balancing.",
      "id": 5,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 6,
      "question": "Which of the following non-volatile storage technologies has no moving parts and uses flash memory?",
      "options": {
        "A": "HDD",
        "B": "SSD",
        "C": "Magnetic Tape",
        "D": "Optical Disc"
      },
      "correct_answer": "B",
      "explanation": "Solid-State Drives (SSDs) use NAND-based flash memory, making them significantly faster and more durable than traditional Hard Disk Drives (HDDs) with spinning platters.",
      "id": 6,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 7,
      "question": "Which protocol automatically assigns temporary IP addresses to devices when they connect to a network?",
      "options": {
        "A": "DHCP",
        "B": "DNS",
        "C": "FTP",
        "D": "SSH"
      },
      "correct_answer": "A",
      "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically configures IP addresses and network parameters for devices.",
      "id": 7,
      "answer": "A"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 8,
      "question": "What does the 's' stand for in HTTPS?",
      "options": {
        "A": "Standard",
        "B": "System",
        "C": "Secure",
        "D": "Speed"
      },
      "correct_answer": "C",
      "explanation": "HTTPS stands for HyperText Transfer Protocol Secure. It encrypts communication using SSL/TLS.",
      "id": 8,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 9,
      "question": "In operating systems, what is a 'kernel'?",
      "options": {
        "A": "The user interface of the software",
        "B": "The core component that manages system resources and hardware communication",
        "C": "A security tool used to scan viruses",
        "D": "The bootloader screen"
      },
      "correct_answer": "B",
      "explanation": "The kernel is the central, essential part of an operating system that bridges applications and the actual hardware processing.",
      "id": 9,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Computer & IT Literacy",
      "question_number": 10,
      "question": "Which database language is universally used to manage and manipulate relational databases?",
      "options": {
        "A": "HTML",
        "B": "Python",
        "C": "SQL",
        "D": "XML"
      },
      "correct_answer": "C",
      "explanation": "SQL (Structured Query Language) is the standard language designed for managing data held in relational database management systems (RDBMS).",
      "id": 10,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 11,
      "question": "What is the main component of natural gas used in Pakistan (Sui Gas)?",
      "options": {
        "A": "Methane",
        "B": "Ethane",
        "C": "Propane",
        "D": "Butane"
      },
      "correct_answer": "A",
      "explanation": "Methane (CH4) makes up roughly 85-95% of natural gas.",
      "id": 11,
      "answer": "A"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 12,
      "question": "Deficiency of Vitamin B1 (Thiamine) leads to which of the following diseases?",
      "options": {
        "A": "Scurvy",
        "B": "Rickets",
        "C": "Beriberi",
        "D": "Pellagra"
      },
      "correct_answer": "C",
      "explanation": "Thiamine deficiency causes Beriberi, affecting the cardiovascular or nervous system.",
      "id": 12,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 13,
      "question": "Which fundamental force keeps the planets in orbit around the sun?",
      "options": {
        "A": "Electromagnetic Force",
        "B": "Strong Nuclear Force",
        "C": "Gravitational Force",
        "D": "Weak Nuclear Force"
      },
      "correct_answer": "C",
      "explanation": "Gravity is the long-range attractive force that governs the motion of celestial bodies.",
      "id": 13,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 14,
      "question": "Sound waves travel fastest through which of the following mediums?",
      "options": {
        "A": "Vacuum",
        "B": "Air",
        "C": "Water",
        "D": "Steel"
      },
      "correct_answer": "D",
      "explanation": "Sound requires a medium and travels fastest in solids because particles are packed closer together to transmit vibrations rapidly.",
      "id": 14,
      "answer": "D"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 15,
      "question": "What is the chemical name of common baking soda?",
      "options": {
        "A": "Sodium Carbonate",
        "B": "Sodium Bicarbonate",
        "C": "Calcium Carbonate",
        "D": "Sodium Chloride"
      },
      "correct_answer": "B",
      "explanation": "Baking soda is Sodium Bicarbonate (NaHCO3).",
      "id": 15,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 16,
      "question": "Which layer of the Earth's atmosphere contains the ozone layer that protects us from UV rays?",
      "options": {
        "A": "Troposphere",
        "B": "Stratosphere",
        "C": "Mesosphere",
        "D": "Thermosphere"
      },
      "correct_answer": "B",
      "explanation": "The ozone layer is located in the lower stratosphere, absorbing harmful ultraviolet radiation.",
      "id": 16,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 17,
      "question": "The escape velocity required for a spacecraft to break free from Earth's gravitational pull is approximately:",
      "options": {
        "A": "5.2 km/s",
        "B": "9.8 km/s",
        "C": "11.2 km/s",
        "D": "15.6 km/s"
      },
      "correct_answer": "C",
      "explanation": "Escape velocity from Earth's surface is roughly 11.2 km/s (40,320 km/h).",
      "id": 17,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 18,
      "question": "Which human gland is often referred to as the 'Master Gland' because it regulates other endocrine glands?",
      "options": {
        "A": "Thyroid Gland",
        "B": "Adrenal Gland",
        "C": "Pituitary Gland",
        "D": "Pancreas"
      },
      "correct_answer": "C",
      "explanation": "The pituitary gland, located at the base of the brain, secretes hormones controlling growth and other glands.",
      "id": 18,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 19,
      "question": "What is the main reason why oil floats on water?",
      "options": {
        "A": "Oil is more viscous than water",
        "B": "Oil has a lower density than water",
        "C": "Oil contains hydrophobic polymers",
        "D": "Water has a higher boiling point"
      },
      "correct_answer": "B",
      "explanation": "Materials with lower density float on fluids with higher density; oil's density is less than water.",
      "id": 19,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "Advanced Everyday Science",
      "question_number": 20,
      "question": "Absolute Zero, the theoretical temperature where all molecular motion stops, is equal to:",
      "options": {
        "A": "0°C",
        "B": "-100°C",
        "C": "-273.15°C",
        "D": "-459°C"
      },
      "correct_answer": "C",
      "explanation": "Absolute zero is 0 Kelvin, which scales exactly to -273.15°C.",
      "id": 20,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 21,
      "question": "The 'Bab-el-Mandeb' strait connects which two bodies of water?",
      "options": {
        "A": "Red Sea and Gulf of Aden",
        "B": "Persian Gulf and Gulf of Oman",
        "C": "Mediterranean Sea and Atlantic Ocean",
        "D": "Black Sea and Aegean Sea"
      },
      "correct_answer": "A",
      "explanation": "Bab-el-Mandeb is a strategic strait located between Yemen and Djibouti, connecting the Red Sea to the Gulf of Aden/Arabian Point.",
      "id": 21,
      "answer": "A"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 22,
      "question": "Which country is known as the 'Land of the Midnight Sun'?",
      "options": {
        "A": "Japan",
        "B": "Canada",
        "C": "Norway",
        "D": "Iceland"
      },
      "correct_answer": "C",
      "explanation": "Due to its high latitude, parts of Norway experience continuous daylight during summer months.",
      "id": 22,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 23,
      "question": "The headquarters of the International Court of Justice (ICJ) is located in:",
      "options": {
        "A": "Geneva, Switzerland",
        "B": "The Hague, Netherlands",
        "C": "New York, USA",
        "D": "Vienna, Austria"
      },
      "correct_answer": "B",
      "explanation": "While most UN organs are in New York, the ICJ is uniquely situated at the Peace Palace in The Hague.",
      "id": 23,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 24,
      "question": "Which is the deepest trench in the world's oceans?",
      "options": {
        "A": "Java Trench",
        "B": "Puerto Rico Trench",
        "C": "Mariana Trench",
        "D": "Sunda Trench"
      },
      "correct_answer": "C",
      "explanation": "The Challenger Deep in the Mariana Trench (Pacific Ocean) is the deepest point on Earth.",
      "id": 24,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 25,
      "question": "Which international organization uses the 'Special Drawing Rights' (SDR) as its supplementary foreign exchange reserve asset?",
      "options": {
        "A": "World Bank",
        "B": "International Monetary Fund (IMF)",
        "C": "World Trade Organization (WTO)",
        "D": "Asian Development Bank (ADB)"
      },
      "correct_answer": "B",
      "explanation": "The SDR is an international reserve asset created by the IMF to supplement its member countries' official reserves.",
      "id": 25,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 26,
      "question": "The term 'Gerrymandering' is associated with which political process?",
      "options": {
        "A": "Financial auditing",
        "B": "Manipulation of electoral constituency boundaries",
        "C": "Judicial review",
        "D": "Civil service recruitment"
      },
      "correct_answer": "B",
      "explanation": "Gerrymandering is the practice of redrawing district lines to give an unfair political advantage to a specific party.",
      "id": 26,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 27,
      "question": "Landlocked countries have no direct access to an ocean. Which of the following is a landlocked country in Asia?",
      "options": {
        "A": "Vietnam",
        "B": "Afghanistan",
        "C": "Pakistan",
        "D": "Iran"
      },
      "correct_answer": "B",
      "explanation": "Afghanistan is completely surrounded by land, relying on transit trade through neighbors like Pakistan.",
      "id": 27,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 28,
      "question": "What is the total number of member states in the European Union (EU) currently?",
      "options": {
        "A": "25",
        "B": "27",
        "C": "28",
        "D": "30"
      },
      "correct_answer": "B",
      "explanation": "Following the exit of the United Kingdom (Brexit), the number of EU members dropped to 27.",
      "id": 28,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 29,
      "question": "The 'Equator' does NOT pass through which of the following continents?",
      "options": {
        "A": "Africa",
        "B": "South America",
        "C": "Europe",
        "D": "Asia"
      },
      "correct_answer": "C",
      "explanation": "The equator passes through South America, Africa, and Asia, but lies far south of Europe.",
      "id": 29,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "World Geography & International Relations",
      "question_number": 30,
      "question": "Which mountain range separates Europe from Asia?",
      "options": {
        "A": "Ural Mountains",
        "B": "Alps",
        "C": "Andes",
        "D": "Himalayas"
      },
      "correct_answer": "A",
      "explanation": "The Ural Mountains in Russia form part of the conventional boundary between Europe and Asia.",
      "id": 30,
      "answer": "A"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 31,
      "question": "Who is the current Secretary-General of the United Nations?",
      "options": {
        "A": "Ban Ki-moon",
        "B": "António Guterres",
        "C": "Kofi Annan",
        "D": "Jens Stoltenberg"
      },
      "correct_answer": "B",
      "explanation": "António Guterres of Portugal assumed office in 2017 and continues to serve as the UN chief.",
      "id": 31,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 32,
      "question": "The 'COP' conferences (e.g., COP28, COP29) held annually are primarily focused on which global issue?",
      "options": {
        "A": "Cyber Security",
        "B": "Maritime Trade",
        "C": "Climate Change",
        "D": "Nuclear Non-Proliferation"
      },
      "correct_answer": "C",
      "explanation": "COP (Conference of the Parties) is the supreme decision-making body of the UN Framework Convention on Climate Change (UNFCCC).",
      "id": 32,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 33,
      "question": "Which country hosted the 2024 Summer Olympic Games?",
      "options": {
        "A": "Tokyo, Japan",
        "B": "Paris, France",
        "C": "Los Angeles, USA",
        "D": "Brisbane, Australia"
      },
      "correct_answer": "B",
      "explanation": "The 2024 Olympic Games were held gloriously in Paris, France.",
      "id": 33,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 34,
      "question": "What is the main focus of the international grouping known as BRICS?",
      "options": {
        "A": "Military alliance against terrorism",
        "B": "Fostering economic cooperation among major emerging economies",
        "C": "Enforcing global maritime boundaries",
        "D": "Managing global healthcare responses"
      },
      "correct_answer": "B",
      "explanation": "BRICS focuses on geopolitical and economic alignment among rapidly growing developing nations.",
      "id": 34,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 35,
      "question": "The Financial Action Task Force (FATF) is headquartered in which city?",
      "options": {
        "A": "Geneva",
        "B": "London",
        "C": "Paris",
        "D": "Washington D.C."
      },
      "correct_answer": "C",
      "explanation": "FATF is headquartered at the OECD secretariat building in Paris, France.",
      "id": 35,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 36,
      "question": "INTERPOL, the international criminal police organization, has its headquarters in:",
      "options": {
        "A": "Vienna, Austria",
        "B": "Lyon, France",
        "C": "Berlin, Germany",
        "D": "Rome, Italy"
      },
      "correct_answer": "B",
      "explanation": "INTERPOL's General Secretariat is located in Lyon, France.",
      "id": 36,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 37,
      "question": "Which country became the 32nd member of NATO in early 2024?",
      "options": {
        "A": "Finland",
        "B": "Sweden",
        "C": "Ukraine",
        "D": "Austria"
      },
      "correct_answer": "B",
      "explanation": "Sweden officially joined NATO as its 32nd member in March 2024 following the accession of Finland.",
      "id": 37,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 38,
      "question": "The Nobel Peace Prize is explicitly awarded in which city?",
      "options": {
        "A": "Stockholm, Sweden",
        "B": "Oslo, Norway",
        "C": "Geneva, Switzerland",
        "D": "Copenhagen, Denmark"
      },
      "correct_answer": "B",
      "explanation": "While other Nobel Prizes are awarded in Stockholm, the Peace Prize is presented in Oslo, Norway.",
      "id": 38,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 39,
      "question": "What is the name of the central bank of the United States?",
      "options": {
        "A": "Bank of America",
        "B": "US Central Reserve",
        "C": "Federal Reserve System",
        "D": "Department of Treasury"
      },
      "correct_answer": "C",
      "explanation": "The Federal Reserve (often called 'The Fed') is the central banking system of the US.",
      "id": 39,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 40,
      "question": "Which country currently holds the veto power in the UN Security Council alongside USA, UK, China, and France?",
      "options": {
        "A": "India",
        "B": "Germany",
        "C": "Russia",
        "D": "Japan"
      },
      "correct_answer": "C",
      "explanation": "The Russian Federation holds the permanent seat and veto power originally held by the Soviet Union.",
      "id": 40,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 41,
      "question": "The regional alliance 'ASEAN' stands for:",
      "options": {
        "A": "Association of Southeast Asian Nations",
        "B": "Alliance of Southern Asian Economic Nations",
        "C": "Associated Security of East Asian Networks",
        "D": "Afro-Asian Security and Economic Network"
      },
      "correct_answer": "A",
      "explanation": "ASEAN accelerates economic growth, social progress, and cultural development in Southeast Asia.",
      "id": 41,
      "answer": "A"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 42,
      "question": "Which space agency successfully executed the 'Artemis' program aimed at landing humans back on the Moon?",
      "options": {
        "A": "ESA",
        "B": "NASA",
        "C": "Roscosmos",
        "D": "ISRO"
      },
      "correct_answer": "B",
      "explanation": "NASA's Artemis program intends to establish sustainable exploration on the Moon.",
      "id": 42,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 43,
      "question": "The 'Nord Stream' pipelines, which became a focal point of geopolitical tensions, run under which sea?",
      "options": {
        "A": "Black Sea",
        "B": "Mediterranean Sea",
        "C": "Baltic Sea",
        "D": "Caspian Sea"
      },
      "correct_answer": "C",
      "explanation": "The Nord Stream natural gas pipelines run beneath the Baltic Sea from Russia to Germany.",
      "id": 43,
      "answer": "C"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 44,
      "question": "What does the global economic forum 'G20' represent?",
      "options": {
        "A": "20 smallest developing states",
        "B": "19 individual countries plus the European Union and African Union",
        "C": "The 20 absolute richest monarchs",
        "D": "20 nations with the highest population densities"
      },
      "correct_answer": "B",
      "explanation": "G20 comprises the world's major economies, recently expanded to integrate the African Union.",
      "id": 44,
      "answer": "B"
    },
    {
      "subject": "General Knowledge",
      "sub_category": "International Current Affairs & Bodies",
      "question_number": 45,
      "question": "The 'Suez Canal,' a major artery for world trade, is under the territorial control of which country?",
      "options": {
        "A": "Saudi Arabia",
        "B": "Egypt",
        "C": "Turkey",
        "D": "Israel"
      },
      "correct_answer": "B",
      "explanation": "The Suez Canal is an artificial sea-level waterway running through Egypt, connecting the Mediterranean Sea to the Red Sea.",
      "id": 45,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 46,
      "question": "Identify the grammatically correct sentence.",
      "options": {
        "A": "Scarcely had I arrived at the station than the train left.",
        "B": "Scarcely had I arrived at the station when the train left.",
        "C": "Scarcely I had arrived at the station when the train left.",
        "D": "Scarcely had I arrived at the station then the train left."
      },
      "correct_answer": "B",
      "explanation": "Adverbs like 'scarcely' and 'hardly' are paired with 'when', while 'no sooner' is paired with 'than'. Subject-verb inversion occurs after 'scarcely'.",
      "id": 46,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 47,
      "question": "Fill in the blank: The committee ________ unable to agree on a final decision and split into opposing factions.",
      "options": {
        "A": "is",
        "B": "was",
        "C": "were",
        "D": "has"
      },
      "correct_answer": "C",
      "explanation": "When a collective noun (committee) acts not as a single unit but as individuals with differing actions/opinions, it takes a plural verb.",
      "id": 47,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 48,
      "question": "Find the error in this sentence: 'Between you and I, the director's plan seems highly impractical.'",
      "options": {
        "A": "Between",
        "B": "you and I",
        "C": "director's plan",
        "D": "highly impractical"
      },
      "correct_answer": "B",
      "explanation": "'Between' is a standard preposition and must be followed by objective pronouns. It should be 'Between you and me'.",
      "id": 48,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 49,
      "question": "Fill in the blank: If he ________ more meticulously during the initial stages, the project would not have collapsed.",
      "options": {
        "A": "planned",
        "B": "would plan",
        "C": "had planned",
        "D": "has planned"
      },
      "correct_answer": "C",
      "explanation": "This is a Third Conditional sentence describing a past regret. Structure: If + Past Perfect, would have + V3.",
      "id": 49,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 50,
      "question": "Choose the correct option: Neither the supervisor nor the security guards ________ present at the crime scene last night.",
      "options": {
        "A": "was",
        "B": "were",
        "C": "is",
        "D": "has been"
      },
      "correct_answer": "B",
      "explanation": "For subjects joined by 'neither... nor', the verb agrees with the closer subject ('security guards' is plural).",
      "id": 50,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 51,
      "question": "Fill in the blank: It is high time we ________ acting responsibly regarding environmental conservation.",
      "options": {
        "A": "start",
        "B": "started",
        "C": "should start",
        "D": "have started"
      },
      "correct_answer": "B",
      "explanation": "The phrase 'It is high time / It is time' is followed by a past simple verb to denote an action that should have already been taken.",
      "id": 51,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 52,
      "question": "Identify the incorrect part: 'The information provided by the investigation officers were misleading.'",
      "options": {
        "A": "The information",
        "B": "provided by",
        "C": "were",
        "D": "misleading"
      },
      "correct_answer": "C",
      "explanation": "'Information' is an uncountable noun and always singular; hence it takes the singular verb 'was'.",
      "id": 52,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 53,
      "question": "Choose the correct alternative: He behaves as if he ________ the director of the federal agency.",
      "options": {
        "A": "is",
        "B": "was",
        "C": "were",
        "D": "is being"
      },
      "correct_answer": "C",
      "explanation": "'As if' expresses an unreal or hypothetical condition, which requires the subjunctive mood form 'were' regardless of the singular subject.",
      "id": 53,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 54,
      "question": "Complete the sentence: Not only did she clear the physical endurance test, ________ the highest marks in the academic assessment.",
      "options": {
        "A": "but she also scored",
        "B": "but she also obtained",
        "C": "and she scored",
        "D": "but as well scored"
      },
      "correct_answer": "B",
      "explanation": "The correlative conjunction 'Not only' must be strictly balanced with 'but also'.",
      "id": 54,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Advanced Grammar & Error Detection",
      "question_number": 55,
      "question": "Find the error: 'He is one of those men who always succeeds in whatever he undertakes.'",
      "options": {
        "A": "one of those",
        "B": "who always succeeds",
        "C": "whatever",
        "D": "he undertakes"
      },
      "correct_answer": "B",
      "explanation": "The relative pronoun 'who' refers back to the plural noun 'men'. Therefore, the relative clause verb must be plural ('who always succeed').",
      "id": 55,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 56,
      "question": "What is the closest synonym for the word 'Epistemic'?",
      "options": {
        "A": "Relating to external skin layers",
        "B": "Relating to knowledge or the validation of truth",
        "C": "Relating to structural architecture",
        "D": "Relating to an unexpected tragedy"
      },
      "correct_answer": "B",
      "explanation": "'Epistemic' means relating to knowledge or the degree of its validation.",
      "id": 56,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 57,
      "question": "Choose the correct synonym of 'Capitulate'.",
      "options": {
        "A": "To capture completely",
        "B": "To summarize a text",
        "C": "To surrender under agreed conditions",
        "D": "To execute by decapitation"
      },
      "correct_answer": "C",
      "explanation": "To capitulate means to cease resisting an opponent; to yield or surrender.",
      "id": 57,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 58,
      "question": "What is the antonym of the word 'Paucity'?",
      "options": {
        "A": "Scarcity",
        "B": "Hardship",
        "C": "Abundance",
        "D": "Timidity"
      },
      "correct_answer": "C",
      "explanation": "'Paucity' means the presence of something in small or insufficient quantities; its exact opposite is abundance.",
      "id": 58,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 59,
      "question": "Select the word that is closest in meaning to 'Obfuscate'.",
      "options": {
        "A": "Confuse / Obscure",
        "B": "Clarify / Explain",
        "C": "Challenge / Oppose",
        "D": "Remove / Erase"
      },
      "correct_answer": "A",
      "explanation": "To obfuscate means to render obscure, unclear, or unintelligible.",
      "id": 59,
      "answer": "A"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 60,
      "question": "Choose the proper antonym for 'Ephemeral'.",
      "options": {
        "A": "Transient",
        "B": "Beautiful",
        "C": "Perpetual / Permanent",
        "D": "Weak"
      },
      "correct_answer": "C",
      "explanation": "'Ephemeral' means lasting for a very short time; 'perpetual' means everlasting.",
      "id": 60,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 61,
      "question": "A person who acts as an official fixer or investigator to look into citizen complaints against public administration is an:",
      "options": {
        "A": "Arbitrator",
        "B": "Advocate",
        "C": "Ombudsman",
        "D": "Expatriate"
      },
      "correct_answer": "C",
      "explanation": "An ombudsman (e.g., Wafaqi Mohtasib) is a public official appointed to investigate citizens' complaints against administration.",
      "id": 61,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 62,
      "question": "Choose the correct spelling:",
      "options": {
        "A": "Conoisseur",
        "B": "Connoisseur",
        "C": "Conosure",
        "D": "Connoiseur"
      },
      "correct_answer": "B",
      "explanation": "'Connoisseur' (an expert judge in matters of taste) is spelled with double 'n' and double 's'.",
      "id": 62,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 63,
      "question": "What is the meaning of the word 'Punctilious'?",
      "options": {
        "A": "Always arriving late",
        "B": "Showing great attention to detail or correct behavior",
        "C": "Aggressive in debate",
        "D": "Untrustworthy in asset handling"
      },
      "correct_answer": "B",
      "explanation": "A punctilious person is extremely attentive to fine details of etiquette and duty.",
      "id": 63,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 64,
      "question": "Choose the synonym for 'Perfunctory'.",
      "options": {
        "A": "Done with deep enthusiasm",
        "B": "Carried out with a minimum of effort or reflection",
        "C": "Highly accurate",
        "D": "Legally binding"
      },
      "correct_answer": "B",
      "explanation": "Perfunctory means an action done quickly, carelessly, and merely as a routine duty.",
      "id": 64,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "High-Level Vocabulary & Synonyms/Antonyms",
      "question_number": 65,
      "question": "What is the antonym of 'Meticulous'?",
      "options": {
        "A": "Careful",
        "B": "Organized",
        "C": "Careless / Negligent",
        "D": "Sullen"
      },
      "correct_answer": "C",
      "explanation": "Meticulous means showing great attention to detail; its opposite is careless.",
      "id": 65,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 66,
      "question": "Fill in the blank: The investigative team was forced to comply ________ the rules laid down by the Supreme Court.",
      "options": {
        "A": "to",
        "B": "with",
        "C": "by",
        "D": "of"
      },
      "correct_answer": "B",
      "explanation": "The verb 'comply' always takes the fixed preposition 'with'.",
      "id": 66,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 67,
      "question": "Fill in the blank: The suspect was absolved ________ all charges after forensic evidence was verified.",
      "options": {
        "A": "from",
        "B": "of",
        "C": "with",
        "D": "off"
      },
      "correct_answer": "B",
      "explanation": "A person is 'absolved of' a crime or responsibility.",
      "id": 67,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 68,
      "question": "What does the idiom 'To burn the midnight oil' mean?",
      "options": {
        "A": "To waste resources unnecessarily",
        "B": "To work or study late into the night",
        "C": "To provoke an argument",
        "D": "To engage in corrupt deals"
      },
      "correct_answer": "B",
      "explanation": "It originates from using oil lamps to read or work late into the night.",
      "id": 68,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 69,
      "question": "Choose the correct passive voice: 'The inspector was investigating the fraud case.'",
      "options": {
        "A": "The fraud case was investigated by the inspector.",
        "B": "The fraud case was being investigated by the inspector.",
        "C": "The fraud case had been investigated by the inspector.",
        "D": "The fraud case is being investigated by the inspector."
      },
      "correct_answer": "B",
      "explanation": "Past Continuous tense in passive voice uses the structure: 'was/were + being + past participle (V3)'.",
      "id": 69,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 70,
      "question": "Convert to indirect speech: The officer said, 'Where did you find this weapon?'",
      "options": {
        "A": "The officer asked where I had found that weapon.",
        "B": "The officer asked where did I find this weapon.",
        "C": "The officer enquired that where I found that weapon.",
        "D": "The officer ordered where I have found this weapon."
      },
      "correct_answer": "A",
      "explanation": "Simple Past changes to Past Perfect in indirect speech, 'this' changes to 'that', and the question structure becomes a statement.",
      "id": 70,
      "answer": "A"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 71,
      "question": "Fill in the blank with the appropriate preposition: He is fastidious ________ his choice of words during interrogations.",
      "options": {
        "A": "with",
        "B": "about",
        "C": "in",
        "D": "for"
      },
      "correct_answer": "B",
      "explanation": "'Fastidious about' means being excessively particular or demanding about something.",
      "id": 71,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 72,
      "question": "What is the meaning of the idiom 'A sacred cow'?",
      "options": {
        "A": "A holy ritual",
        "B": "A custom or institution immune from criticism or modification",
        "C": "A rare livestock breed",
        "D": "An ancient myth"
      },
      "correct_answer": "B",
      "explanation": "An idiom referring to something held in such high regard that people refuse to question or criticize it.",
      "id": 72,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 73,
      "question": "Identify the figure of speech used in: 'The digital camera lens stared at me like an unblinking eye.'",
      "options": {
        "A": "Metaphor",
        "B": "Simile",
        "C": "Alliteration",
        "D": "Hyperbole"
      },
      "correct_answer": "B",
      "explanation": "A comparison made using explicit connecting words such as 'like' or 'as' is a Simile.",
      "id": 73,
      "answer": "B"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 74,
      "question": "Complete the sentence: No sooner had the suspect entered the building ________ the alarm triggered.",
      "options": {
        "A": "when",
        "B": "then",
        "C": "than",
        "D": "before"
      },
      "correct_answer": "C",
      "explanation": "'No sooner' strictly requires 'than' to link the chronological clauses.",
      "id": 74,
      "answer": "C"
    },
    {
      "subject": "English",
      "sub_category": "Idioms, Prepositions & Sentence Structure",
      "question_number": 75,
      "question": "What does the idiom 'To clear the air' mean?",
      "options": {
        "A": "To clean a polluted room",
        "B": "To defuse tension or eliminate misunderstanding by discussion",
        "C": "To declare an area free of suspects",
        "D": "To travel via aviation"
      },
      "correct_answer": "B",
      "explanation": "To clear the air means to address doubts openly to resolve hidden negative feelings.",
      "id": 75,
      "answer": "B"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 76,
      "question": "A car increases its speed from 60 km/h to 75 km/h. What is the percentage increase in speed?",
      "options": {
        "A": "15%",
        "B": "20%",
        "C": "25%",
        "D": "30%"
      },
      "correct_answer": "C",
      "explanation": "Increase = 75 - 60 = 15. Percentage Increase = (15/60) * 100 = 25%.",
      "id": 76,
      "answer": "C"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 77,
      "question": "If 12 men can construct a wall in 8 days, how many days will it take 6 men to construct the same wall under identical conditions?",
      "options": {
        "A": "4 days",
        "B": "12 days",
        "C": "16 days",
        "D": "24 days"
      },
      "correct_answer": "C",
      "explanation": "Inverse proportion: M1 * D1 = M2 * D2. 12 * 8 = 6 * D2 => 96 = 6D2 => D2 = 16 days.",
      "id": 77,
      "answer": "C"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 78,
      "question": "The ratio of two numbers is 3:4. If their Least Common Multiple (LCM) is 180, find the value of the smaller number.",
      "options": {
        "A": "30",
        "B": "45",
        "C": "60",
        "D": "75"
      },
      "correct_answer": "B",
      "explanation": "Let numbers be 3x and 4x. LCM = 12x. 12x = 180 => x = 15. Smaller number = 3 * 15 = 45.",
      "id": 78,
      "answer": "B"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 79,
      "question": "The average age of a group of 5 judicial officers is 42 years. If a new member joins the group, the average age drops to 40 years. What is the age of the new member?",
      "options": {
        "A": "25 years",
        "B": "30 years",
        "C": "32 years",
        "D": "35 years"
      },
      "correct_answer": "B",
      "explanation": "Total age of 5 = 5 * 42 = 210. Total age of 6 = 6 * 40 = 240. New member = 240 - 210 = 30 years.",
      "id": 79,
      "answer": "B"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 80,
      "question": "A shopkeeper sells an electronic item for Rs. 11,500, making a net profit of 15%. What was the original cost price of the item?",
      "options": {
        "A": "Rs. 9,500",
        "B": "Rs. 10,000",
        "C": "Rs. 10,200",
        "D": "Rs. 10,500"
      },
      "correct_answer": "B",
      "explanation": "Selling Price = 115% of Cost Price. 11,500 = 1.15 * CP => CP = 11,500 / 1.15 = Rs. 10,000.",
      "id": 80,
      "answer": "B"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 81,
      "question": "Calculate the compound interest earned on an investment of Rs. 20,000 at an annual interest rate of 10% compounded annually for a duration of 2 years.",
      "options": {
        "A": "Rs. 4,000",
        "B": "Rs. 4,200",
        "C": "Rs. 4,400",
        "D": "Rs. 4,500"
      },
      "correct_answer": "B",
      "explanation": "Amount after 1st year = 20,000 * 1.10 = 22,000. Amount after 2nd year = 22,000 * 1.10 = 24,200. Interest = 24,200 - 20,000 = Rs. 4,200.",
      "id": 81,
      "answer": "B"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 82,
      "question": "A and B together can finish a piece of work in 6 days. If A alone can complete the entire job in 10 days, how many days will B take to complete it working entirely alone?",
      "options": {
        "A": "12 days",
        "B": "15 days",
        "C": "18 days",
        "D": "20 days"
      },
      "correct_answer": "B",
      "explanation": "1/A + 1/B = 1/6 => 1/10 + 1/B = 1/6 => 1/B = 1/6 - 1/10 = 2/30 = 1/15 => B = 15 days.",
      "id": 82,
      "answer": "B"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 83,
      "question": "Find the value of x that satisfies the linear equation: 5(x - 3) = 3x + 9.",
      "options": {
        "A": "6",
        "B": "9",
        "C": "12",
        "D": "15"
      },
      "correct_answer": "C",
      "explanation": "5x - 15 = 3x + 9 => 5x - 3x = 9 + 15 => 2x = 24 => x = 12.",
      "id": 83,
      "answer": "C"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 84,
      "question": "A bag contains 4 red balls, 5 blue balls, and 6 green balls. If one ball is drawn completely at random, what is the mathematical probability that it is NOT a blue ball?",
      "options": {
        "A": "1/3",
        "B": "2/5",
        "C": "2/3",
        "D": "3/5"
      },
      "correct_answer": "C",
      "explanation": "Total balls = 4 + 5 + 6 = 15. Non-blue balls = 4 + 6 = 10. Probability = 10/15 = 2/3.",
      "id": 84,
      "answer": "C"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 85,
      "question": "Find the missing term in the sequence: 2, 5, 11, 23, 47, ?",
      "options": {
        "A": "75",
        "B": "90",
        "C": "95",
        "D": "99"
      },
      "correct_answer": "C",
      "explanation": "The pattern is (n * 2) + 1. (2 * 2)+1=5, (5 * 2)+1=11 ... (47 * 2)+1 = 95.",
      "id": 85,
      "answer": "C"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 86,
      "question": "A train traveling at a uniform speed of 90 km/h crosses a static signal post in exactly 12 seconds. What is the length of the train in meters?",
      "options": {
        "A": "250 meters",
        "B": "300 meters",
        "C": "350 meters",
        "D": "400 meters"
      },
      "correct_answer": "B",
      "explanation": "Speed in m/s = 90 * (5/18) = 25 m/s. Length (Distance) = Speed * Time = 25 * 12 = 300 meters.",
      "id": 86,
      "answer": "B"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 87,
      "question": "Simplify the arithmetic expression using BODMAS: 48 ÷ 6 * (4 + 2) - 8.",
      "options": {
        "A": "0",
        "B": "16",
        "C": "40",
        "D": "44"
      },
      "correct_answer": "C",
      "explanation": "48 ÷ 6 * (6) - 8 => 8 * 6 - 8 => 48 - 8 = 40.",
      "id": 87,
      "answer": "C"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 88,
      "question": "The sum of the ages of a father and his son is 60 years. Six years ago, the father's age was five times the age of the son. What is the son's current age?",
      "options": {
        "A": "14 years",
        "B": "16 years",
        "C": "18 years",
        "D": "20 years"
      },
      "correct_answer": "A",
      "explanation": "F + S = 60 => F = 60 - S. Six years ago: (F - 6) = 5(S - 6) => (60 - S - 6) = 5S - 30 => 54 - S = 5S - 30 => 84 = 6S => S = 14.",
      "id": 88,
      "answer": "A"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 89,
      "question": "If a square's perimeter is increased by 20%, by what percentage does its total surface area increase?",
      "options": {
        "A": "20%",
        "B": "40%",
        "C": "44%",
        "D": "50%"
      },
      "correct_answer": "C",
      "explanation": "Perimeter increase by 20% means side length increases by 20% (multiplier 1.2). Area increase = 1.2 * 1.2 = 1.44 => 44% increase.",
      "id": 89,
      "answer": "C"
    },
    {
      "subject": "Mathematics",
      "sub_category": "Arithmetic & Algebra",
      "question_number": 90,
      "question": "Find the Highest Common Factor (HCF) of 42, 63, and 105.",
      "options": {
        "A": "7",
        "B": "14",
        "C": "21",
        "D": "42"
      },
      "correct_answer": "C",
      "explanation": "42 = 2 * 3 * 7; 63 = 3 * 3 * 7; 105 = 3 * 5 * 7. Common factors = 3 * 7 = 21.",
      "id": 90,
      "answer": "C"
    },
    {
      "subject": "Pakistan Studies",
      "sub_category": "History & Constitution",
      "question_number": 91,
      "question": "Who was the prime minister of Pakistan when the first constitution of 1956 was framed and implemented?",
      "options": {
        "A": "Liaquat Ali Khan",
        "B": "Khwaja Nazimuddin",
        "C": "Chaudhary Muhammad Ali",
        "D": "Feroz Khan Noon"
      },
      "correct_answer": "C",
      "explanation": "Chaudhary Muhammad Ali was the Prime Minister when Pakistan's first constituent assembly passed the 1956 Constitution.",
      "id": 91,
      "answer": "C"
    },
    {
      "subject": "Pakistan Studies",
      "sub_category": "History & Constitution",
      "question_number": 92,
      "question": "The strategic 'Wakhan Corridor' separates Pakistan from which Central Asian republic?",
      "options": {
        "A": "Uzbekistan",
        "B": "Tajikistan",
        "C": "Turkmenistan",
        "D": "Kyrgyzstan"
      },
      "correct_answer": "B",
      "explanation": "The narrow Wakhan Corridor, which belongs to Afghanistan, acts as a buffer strip separating Pakistan's northern borders from Tajikistan.",
      "id": 92,
      "answer": "B"
    },
    {
      "subject": "Pakistan Studies",
      "sub_category": "History & Constitution",
      "question_number": 93,
      "question": "In which year did the famous 'Lahore Resolution' (Pakistan Resolution) get officially translated into Urdu by Maulana Zafar Ali Khan?",
      "options": {
        "A": "1940",
        "B": "1942",
        "C": "1945",
        "D": "1947"
      },
      "correct_answer": "A",
      "explanation": "It was presented originally in English on 23 March 1940 and translated into Urdu concurrently for the general public.",
      "id": 93,
      "answer": "A"
    },
    {
      "subject": "Pakistan Studies",
      "sub_category": "History & Constitution",
      "question_number": 94,
      "question": "Which is the highest civil award given in Pakistan for outstanding merit and service to the country?",
      "options": {
        "A": "Nishan-e-Haider",
        "B": "Nishan-e-Pakistan",
        "C": "Sitara-e-Imtiaz",
        "D": "Tamgha-e-Basalat"
      },
      "correct_answer": "B",
      "explanation": "Nishan-e-Haider is the highest military gallantry award, while Nishan-e-Pakistan is the highest civilian honor.",
      "id": 94,
      "answer": "B"
    },
    {
      "subject": "Pakistan Studies",
      "sub_category": "History & Constitution",
      "question_number": 95,
      "question": "The historical 'Simla Deputation' of Muslim leaders met Viceroy Lord Minto in which year to demand separate electorates?",
      "options": {
        "A": "1905",
        "B": "1906",
        "C": "1909",
        "D": "1911"
      },
      "correct_answer": "B",
      "explanation": "Led by Sir Aga Khan, the delegation met Lord Minto in October 1906, paving the way for the creation of the All India Muslim League.",
      "id": 95,
      "answer": "B"
    },
    {
      "subject": "Islamiat",
      "sub_category": "Quranic Facts & Islamic History",
      "question_number": 96,
      "question": "What is the total number of verses (Ayats) contained in the longest Surah of the Holy Quran (Surah Al-Baqarah)?",
      "options": {
        "A": "186",
        "B": "226",
        "C": "286",
        "D": "316"
      },
      "correct_answer": "C",
      "explanation": "Surah Al-Baqarah is the longest Surah and contains exactly 286 verses.",
      "id": 96,
      "answer": "C"
    },
    {
      "subject": "Islamiat",
      "sub_category": "Quranic Facts & Islamic History",
      "question_number": 97,
      "question": "In which Islamic year (Hijri) did the historical event of the Conquest of Makkah (Fath-e-Makkah) take place?",
      "options": {
        "A": "6 A.H.",
        "B": "8 A.H.",
        "C": "9 A.H.",
        "D": "10 A.H."
      },
      "correct_answer": "B",
      "explanation": "Ramadan, 8 A.H. was the time the Holy Prophet (ﷺ) entered Makkah peacefully with the Muslim army.",
      "id": 97,
      "answer": "B"
    },
    {
      "subject": "Islamiat",
      "sub_category": "Quranic Facts & Islamic History",
      "question_number": 98,
      "question": "Which wife of the Holy Prophet (ﷺ) was given the title of 'Umm-ul-Masakeen' (Mother of the Poor) due to her excessive charity?",
      "options": {
        "A": "Hazrat Khadija (R.A)",
        "B": "Hazrat Aisha (R.A)",
        "C": "Hazrat Zainab bint Khuzaimah (R.A)",
        "D": "Hazrat Hafsah (R.A)"
      },
      "correct_answer": "C",
      "explanation": "She was renowned for her extreme generosity and kindness toward the impoverished even before Islam.",
      "id": 98,
      "answer": "C"
    },
    {
      "subject": "Islamiat",
      "sub_category": "Quranic Facts & Islamic History",
      "question_number": 99,
      "question": "The collection and compilation of the Holy Quran into a standardized written book form (Mushaf) was first initiated under the command of which Caliph?",
      "options": {
        "A": "Hazrat Abu Bakr Al-Siddiq (R.A)",
        "B": "Hazrat Umar ibn Al-Khattab (R.A)",
        "C": "Hazrat Uthman ibn Affan (R.A)",
        "D": "Hazrat Ali ibn Abi Talib (R.A)"
      },
      "correct_answer": "A",
      "explanation": "Following the Battle of Yamama where many Huffaz died, Hazrat Abu Bakr ordered the first unified compiled version upon Hazrat Umar's advice.",
      "id": 99,
      "answer": "A"
    },
    {
      "subject": "Islamiat",
      "sub_category": "Quranic Facts & Islamic History",
      "question_number": 100,
      "question": "What is the name of the angel who is responsible for blowing the trumpet (Soor) on the Day of Judgment?",
      "options": {
        "A": "Hazrat Jibrail (A.S)",
        "B": "Hazrat Mikail (A.S)",
        "C": "Hazrat Israfil (A.S)",
        "D": "Hazrat Izrail (A.S)"
      },
      "correct_answer": "C",
      "explanation": "Hazrat Israfil (A.S) is tasked with blowing the trumpet to signal the end of the world and resurrection.",
      "id": 100,
      "answer": "C"
    }
  ]
};

  // Expose as Module 3 data
  window.MODULE_3 = quizData;
})();
