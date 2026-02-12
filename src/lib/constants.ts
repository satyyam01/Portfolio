export const TECH_STACK = [
  {
    domain: "Backend Systems",
    philosophy: "Designing APIs, managing data integrity, and optimizing latency.",
    tools: ["Node.js", "Express.js", "Redis", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    domain: "AI & Applied ML",
    philosophy: "Building intelligent retrieval systems and predictable models.",
    tools: ["RAG Systems", "Pinecone", "Cohere", "LangChain", "LangGraph", "Classical ML", "SHAP"],
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
    subtitle: "Multi-Role RFID Farm Operations Platform",
    description: "A comprehensive farm management system handling animal tracking, yield analytics, and operational workflows across multiple roles.",
    longDescription: "FarmTrack handles multi-role RBAC for Admins, Workers, and Doctors. It simulates RFID tracking and provides yield analytics, medication schedules, and checkup tracking. Built with a focus on real-time data and secure access.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "React", "Typescript"],
    features: [
      "JWT-based role access control (Admin, Worker, Doctor)",
      "Redis-backed OTP and caching workflows",
      "Yield analytics & reporting",
      "Modular Express controllers and structured models",
      "API-driven RFID scan simulation"
    ],
    github: "https://github.com/satyyam01/FarmTrack",
    demo: "#",
    problem: "Farmers struggle with fragmented data and lack of real-time monitoring for livestock health and productivity.",
  },
  {
    id: "lumora",
    title: "Lumora",
    subtitle: "AI Journaling Assistant",
    description: "An AI-powered journaling platform that tracks mental well-being and provides context-aware insights.",
    longDescription: "Lumora uses LLMs to provide feedback on journal entries, tracking streaks and awarding badges. It features complex logic for streak calculations based on entry date vs createdAt to maintain consistency across timezones.",
    tech: ["Next.js", "LangChain", "OpenAI", "MongoDB", "TailwindCSS"],
    features: [
      "Context-aware AI feedback",
      "Streak tracking logic",
      "Interactive chat interface",
      "History persistence & retrieval",
    ],
    github: "https://github.com/satyyam01/lumora",
    demo: "#",
    problem: "Generic journaling apps lack engagement and fails to provide actionable insights from personal reflections.",
  },
  {
    id: "finsage",
    title: "FinSage",
    subtitle: "Explainable AI (XAI) loan advisory system.",
    description: "Machine learning driven loan approval and advisory system with model explainability.",
    longDescription: "FinSage leverages LightGBM for prediction and SHAP for explainability, ensuring transparent AI decisions. Integrated with Groq API for personalized financial advice based on model output.",
    tech: ["Python", "LightGBM", "SHAP", "Groq", "Flask", "React"],
    features: [
      "LightGBM prediction model",
      "SHAP-based explainability dashboard",
      "Flask backend with modular service layers",
      "Secure authentication with Bcrypt",
    ],
    github: "https://github.com/satyyam01/finsage",
    demo: "#",
    problem: "Loan processing is often opaque and lacks personalized guidance for rejected applicants.",
  },
];

export const TIMELINE = [
  {
    year: "2022",
    title: "Started BTech CSE",
    description: "Began journey at university, focusing on computer science fundamentals.",
  },
  {
    year: "2023",
    title: "Full Stack Exploration",
    description: "Explored web technologies and built initial projects like FarmTrack.",
  },
  {
    year: "2023",
    title: "AI & Systems Focus",
    description: "Shifted focus towards Backend systems, Redis, and Generative AI integration.",
  },
  {
    year: "2024",
    title: "Building Scalable Systems",
    description: "Completed Lumora and FinSage, focusing on RAG and model explainability.",
  },
  {
    year: "Present",
    title: "SDE Aspirant",
    description: "Seeking opportunities to build resilient and intelligent backend systems.",
  },
];
