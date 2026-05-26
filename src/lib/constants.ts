export const TECH_STACK = [
  {
    domain: "Backend Systems",
    philosophy: "Designing APIs, managing data integrity, and optimizing latency.",
    tools: ["Javascript", "Node.js", "Express.js", "Python", "Flask", "Redis", "PostgreSQL", "MongoDB"],
  },
  {
    domain: "AI & Applied ML",
    philosophy: "Building intelligent retrieval systems and predictable models.",
    tools: ["RAG Systems", "Groq", "Cohere", "Pinecone", "LangChain", "LangGraph", "Classical ML", "SHAP"],
  },
  {
    domain: "Frontend",
    philosophy: "Architecting clean, responsive, and type-safe user interfaces.",
    tools: ["React", "TypeScript", "TailwindCSS", "Next.js", "Vite"],
  },
  {
    domain: "Dev & Tooling",
    philosophy: "Ensuring consistent environments and efficient delivery.",
    tools: ["Microservices", "Docker", "Git", "AWS Basics", "Postman", "Bash"],
  },
];

export const PROJECTS = [
  {
    id: "farmtrack",
    title: "FarmTrack",
    image: "/farmtrack.png",
    subtitle: "Multi-Role RFID Farm Operations Platform",
    description: "A comprehensive farm management system handling animal tracking, yield analytics, and operational workflows across multiple roles.",
    longDescription: "FarmTrack handles multi-role RBAC for Admins, Workers, and Doctors. It simulates RFID tracking and provides yield analytics, medication schedules, and checkup tracking. Built with a focus on real-time data and secure access.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "SMTP", "Typescript", "React"],
    features: [
      "JWT-based role access control (Admin, Worker, Doctor)",
      "Redis-backed OTP and caching workflows",
      "Yield analytics & reporting",
      "Modular Express controllers and structured models",
      "API-driven RFID scan simulation"
    ],
    metrics: [
      { label: "Access Control", value: "JWT + RBAC" },
      { label: "State Caching", value: "Redis-backed" },
      { label: "Scan Engine", value: "API-simulated" },
      { label: "Operational Roles", value: "Admin/Worker/Doctor" }
    ],
    github: "https://github.com/satyyam01/FarmTrack",
    demo: "#",
    problem: "Farmers struggle with fragmented data and lack of real-time monitoring for livestock health and productivity.",
  },
  {
    id: "lumora",
    title: "Lumora",
    image: "/lumora.png",
    subtitle: "AI Journaling Assistant",
    description: "An AI-powered journaling platform that tracks mental well-being and provides context-aware insights.",
    longDescription: "Lumora uses LLMs to provide feedback on journal entries, tracking streaks and awarding badges. It features complex logic for streak calculations based on entry date vs createdAt to maintain consistency across timezones.",
    tech: ["Node.js", "Express", "LangGraph", "Groq", "Cohere", "Pinecone", "PostgreSQL", "Typescript", "React"],
    features: [
      "Context-aware AI feedback",
      "Streak tracking logic",
      "Interactive chat interface",
      "History persistence & retrieval",
    ],
    metrics: [
      { label: "AI Engine", value: "Groq + Cohere" },
      { label: "Graph Orchestration", value: "LangGraph" },
      { label: "Vector Search", value: "Pinecone DB" },
      { label: "Streak Verification", value: "Timezone-aware" }
    ],
    github: "https://github.com/satyyam01/lumora",
    demo: "#",
    problem: "Generic journaling apps lack engagement and fails to provide actionable insights from personal reflections.",
  },
  {
    id: "finsage",
    title: "FinSage",
    image: "/finsage.png",
    subtitle: "Explainable AI (XAI) loan advisory system.",
    description: "Machine learning driven loan approval and advisory system with model explainability.",
    longDescription: "FinSage leverages LightGBM for prediction and SHAP for explainability, ensuring transparent AI decisions. Integrated with Groq API for personalized financial advice based on model output.",
    tech: ["Python", "Flask", "LightGBM", "SHAP", "LangGraph", "Groq", "Cohere", "Pinecone","PostgreSQL", "Streamlit"],
    features: [
      "LightGBM prediction model",
      "SHAP-based explainability dashboard",
      "Flask backend with modular service layers",
      "Secure authentication with Bcrypt",
    ],
    metrics: [
      { label: "Model Architecture", value: "LightGBM Classifier" },
      { label: "Explainability Loop", value: "SHAP Values" },
      { label: "Advisory Pipeline", value: "Groq + LangGraph" },
      { label: "Service Layer", value: "Modular Flask" }
    ],
    github: "https://github.com/satyyam01/finsage",
    demo: "#",
    problem: "Loan processing is often opaque and lacks personalized guidance for rejected applicants.",
  },
];

export const MINI_PROJECTS = [
  {
    id: "resumetailor",
    title: "ResumeTailor",
    subtitle: "Multi-Agent AI Resume Optimization Machine",
    description: "A production-grade, multi-agent AI system that scrapes job postings, extracts structured semantic intelligence, and tailors master resumes via a self-correcting LangGraph state machine.",
    tech: ["LangGraph", "Groq", "Cohere", "Firecrawl", "Node.js", "TypeScript", "Telegram API"],
    features: [
      "LangGraph-driven self-correcting state machine for iterative optimization loops",
      "Firecrawl API-powered automated web scraping and markdown parsing",
      "Vector validation loop utilizing Cohere embeddings to evaluate semantic preservation",
      "Hallucination guardrails via a secondary critic LLM to enforce skill authenticity"
    ],
    metrics: [
      { label: "Semantic Retention", value: ">92%" },
      { label: "Tailoring Latency", value: "<4.5s" },
      { label: "ATS Alignment", value: "95%" }
    ],
    github: "https://github.com/satyyam01/job-bot",
    demo: "#"
  },
  {
    id: "hwtrackbot",
    title: "Blinkit HW Tracker",
    subtitle: "Self-Healing Geofenced E-Commerce Sniper",
    description: "A high-resilience inventory scraper that bypasses geofences via browser coordinate spoofing and intercepts live AJAX APIs to alert drops via Telegram and Twilio calls.",
    tech: ["Playwright", "Python", "Docker", "Twilio API", "AWS Polly", "PowerShell", "Render"],
    features: [
      "Multi-location coordinates spoofing within a single Chromium instance context",
      "Dynamic response sniffing (watcher2.py) intercepting AJAX JSON payloads directly",
      "Precision DOM partitioning to bypass recommendation cards and prevent false positives",
      "Thread-safe HTTP watchdog thread tracking loop times to auto-recycle deadlocks",
      "Resource intercept blocker shutting down media / analytic downloads by 80%",
      "AWS Polly voice synthesis integrated with automated Twilio outbound phone calls"
    ],
    metrics: [
      { label: "Bandwidth Saved", value: "80%" },
      { label: "Alert Latency", value: "<2.0s" },
      { label: "Uptime Watchdog", value: "24/7" }
    ],
    github: "https://github.com/satyyam01/HW_Track_Bot",
    demo: "#"
  }
];
