import { Brain, Network, Terminal, Database, LineChart, Code2, Wrench, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import aiTravelPlannerImg from "@/assets/projects/ai-travel-planner.jpg";
import agenticRagImg from "@/assets/projects/agentic-rag.jpg";

export const heroData = {
  name: "Devanesh S M",
  titles: [
    "AI & Data Science Engineer",
    "Agentic AI",
    "Generative AI"
  ],
  description: "Building Intelligent AI Systems That Solve Real-World Problems.",
  longDescription: "I'm a final-year Artificial Intelligence and Data Science student focused on building agentic AI systems, retrieval-augmented generation pipelines, and optimization-driven applications using modern AI engineering tools.",
  techStack: ['Python', 'LangGraph', 'RAG', 'FastAPI', 'MCP', 'PostgreSQL', 'Machine Learning', 'MILP'],
  resumeLink: "https://drive.google.com/file/d/1UlPpHLlaVroxzGodQUptUEwbXRfFKN8i/view?usp=drive_link",
  githubLink: "https://github.com/Devanesh338",
  linkedinLink: "https://www.linkedin.com/in/devanesh-s-m-23a162288/",
  email: "devaneshmanikandan@gmail.com"
};

export const navLinksData = [
  { href: "#", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
];

export const projectsData = [
  {
    title: "AEMIIF — Agentic Explainable Multi-Agent Inventory Intelligence",
    category: "Agentic AI · Decision Intelligence · Mathematical Optimization",
    description:
      "A user-driven, region-wise inventory intelligence platform designed to combine agent-based analysis with mathematical optimization to support inventory replenishment decisions. The LLM interprets requests and explains recommendations, while deterministic application logic and the optimization solver enforce business constraints.",
    image: "https://placehold.co/800x600/0f1418/20b2a6?text=AEMIIF+Architecture",
    tags: ["Python", "LangGraph", "PuLP / MILP", "PostgreSQL", "FastAPI"],
    github: "https://github.com/Devanesh338/Agentic-Inventory-Intelligence-System",
    live: "#",
    featured: true,
    architecture: {
      flow: ["Data Ingestion", "Agent Orchestration", "MILP Optimization", "Dashboard Output"],
      details: "Region-wise ingestion of sales, inventory, and supplier data (CSV) → LangGraph-based agent orchestration (parsing, demand forecasting, inventory intelligence) → PuLP-based Mixed-Integer Linear Programming (MILP) optimization → Dashboard-based presentation with Human-in-the-loop decision-making."
    }
  },
  {
    title: "Agentic RAG System",
    category: "Generative AI · Information Retrieval",
    description:
      "A retrieval-augmented generation application that uses routing logic to distinguish between direct responses and retrieval-based answers. It separates retrieval logic from direct-response handling for optimized performance.",
    image: agenticRagImg,
    tags: ["Python", "FastAPI", "LangGraph", "Groq", "Chroma", "Sentence Transformers"],
    github: "https://github.com/Devanesh338/Agentic-RAG-Project",
    live: "#",
    featured: true,
    architecture: {
      flow: ["User Query", "Query Router", "Retrieval Pipeline", "Answer Generation"],
      details: "User Query → Query Router → Direct Response or Retrieval Pipeline (Semantic search and vector retrieval via Chroma) → Retrieval-grounded Answer Generation → Response."
    }
  },
  {
    title: "Multi-Agent AI Travel Planning System",
    category: "Multi-Agent Orchestration · MCP Integration",
    description:
      "A multi-agent travel planning application designed to coordinate travel research and itinerary creation through specialized agents and external tools. Incorporates a local mock booking service using FastAPI.",
    image: aiTravelPlannerImg,
    tags: ["Python", "LangGraph", "MCP", "Groq", "Streamlit", "PostgreSQL"],
    github: "https://github.com/Devanesh338/AI-Travel-Planning-System",
    live: "#",
    featured: true,
    architecture: {
      flow: ["User Request", "LangGraph Orchestrator", "Specialized Agents", "Human Approval"],
      details: "User Request → LangGraph Orchestrator → Specialized Agents (Flight, Hotel, Weather) ↔ MCP Tools / External Data → Itinerary Generation → Human Approval (before mock booking)."
    }
  }
];

export const skillCategoriesData = [
  {
    title: "AI & LLM Engineering",
    icon: Brain,
    skills: ["Generative AI", "Agentic AI", "Retrieval-Augmented Generation", "Prompt Engineering", "Semantic Search"],
  },
  {
    title: "Frameworks & Orchestration",
    icon: Network,
    skills: ["LangGraph", "LangChain", "MCP"],
  },
  {
    title: "Backend & Programming",
    icon: Terminal,
    skills: ["Python", "FastAPI", "REST APIs", "SQL", "C"],
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["PostgreSQL", "Chroma", "pandas", "NumPy"],
  },
  {
    title: "Machine Learning",
    icon: Code2,
    skills: ["Supervised Learning", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Optimization & Analytics",
    icon: LineChart,
    skills: ["PuLP", "Mixed-Integer Linear Programming", "Power BI", "DAX", "Power Query", "Excel"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Streamlit"],
  },
];

export const experienceData = [
  {
    period: "December 2024 – January 2025",
    role: "Data Science Intern",
    company: "NLC India — Materials Management Complex, Neyveli",
    description:
      "Worked with more than 1,500 procurement and bidding records across organizational zones. Emphasized data preparation, reporting, dashboard development, and business insights.",
    technologies: ["Excel", "Power BI", "Power Query", "DAX", "Data Preparation", "Reporting"],
    current: false,
  },
];

export const educationData = [
  {
    degree: "B.Tech — Artificial Intelligence and Data Science",
    institution: "Rajalakshmi Engineering College",
    date: "Expected 2027",
    score: "CGPA: 7.81",
  }
];

export const certificationsData = [
  {
    title: "HackerRank SQL Basic",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/1d63a7497494",
  },
  {
    title: "Data Analytics Simulation",
    issuer: "Deloitte Australia (Forage)",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_7NtwR3ocXrq33P2Zh_1750935366991_completion_certificate.pdf",
  },
];

export const contactInfoData = [
  {
    icon: Mail,
    label: "Email",
    value: "devaneshmanikandan@gmail.com",
    href: "mailto:devaneshmanikandan@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Devanesh338",
    href: "https://github.com/Devanesh338",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/devanesh-s-m",
    href: "https://www.linkedin.com/in/devanesh-s-m-23a162288/",
  },
];
