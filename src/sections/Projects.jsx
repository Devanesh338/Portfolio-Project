import { ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import aiTravelPlannerImg from "@/assets/projects/ai-travel-planner.jpg";
import agenticRagImg from "@/assets/projects/agentic-rag.jpg";
import salesTerritoryImg from "@/assets/projects/sales-territory.jpg";
import blinkitDashboardImg from "@/assets/projects/blinkit-dashboard.jpg";

const projects = [
  {
    title: "AI Travel Planning System",
    description:
      "A multi-agent AI system built using LangGraph with specialized agents for flights, hotels, and itinerary planning through a shared state graph. Integrates MCP servers for standardized external tool calls and PostgreSQL checkpointing to persist user preferences across sessions.",
    image: aiTravelPlannerImg,
    tags: ["Python", "LangGraph", "Groq API", "PostgreSQL", "MCP", "Streamlit"],
    github: "https://github.com/Devanesh338/AI-Travel-Planning-System",
    live: "#",
    featured: true,
  },
  {
    title: "Agentic RAG System",
    description:
      "A RAG-based chatbot that retrieves relevant information from uploaded documents to generate context-grounded answers. Built with LangGraph to intelligently route queries between the RAG pipeline and direct LLM responses. Uses ChromaDB for semantic search and Groq LLMs.",
    image: agenticRagImg,
    tags: ["Python", "Generative AI", "LangGraph", "ChromaDB", "Groq"],
    github: "https://github.com/Devanesh338/Agentic-RAG-Project",
    live: "#",
    featured: false,
  },
  {
    title: "Project Insights Dashboard",
    description:
      "Centralized project data management system built by importing and structuring data from Excel into SQL Server. Features cleaned data using Power Query, calculated DAX measures for automated tracking, and an interactive Power BI dashboard.",
    image: blinkitDashboardImg,
    tags: ["SQL", "Excel", "Power BI", "Power Query", "DAX"],
    github: "https://github.com/Devanesh338/Project-Overview-Dashboard",
    live: "#",
    featured: false,
  },
  {
    title: "Sales Territory Optimization",
    description:
      "An optimization-based solution for balancing sales territories using factors such as HCP potential, workload, geography and travel efficiency. The project explores clustering and optimization techniques to create better assignments.",
    image: salesTerritoryImg,
    tags: ["Python", "Machine Learning", "Optimization", "Data Analysis"],
    github: "https://github.com/Devanesh338/Agentic-Sales-Territory-And-Opimization-",
    live: "#",
    featured: false,
  },
  {
    title: "Blinkit Sales Dashboard",
    description:
      "An interactive Power BI dashboard designed to analyze sales performance, product categories, outlet characteristics and key business metrics.",
    image: blinkitDashboardImg,
    tags: ["Power BI", "DAX", "Power Query", "Data Analysis"],
    github: "https://github.com/Devanesh338/Blinkit-Grocery-data-dashboard-using-power-bi-",
    live: "#",
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work in AI, Machine Learning, and Data Analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group glass rounded-3xl overflow-hidden transition-all duration-500 flex flex-col animate-fade-in ${
                project.featured 
                  ? "border border-primary/50 shadow-[0_0_30px_rgba(32,178,166,0.15)] md:col-span-2 lg:col-span-3 lg:flex-row hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(32,178,166,0.25)]" 
                  : "border border-primary/20 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(32,178,166,0.12)]"
              }`}
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className={`relative overflow-hidden ${project.featured ? "lg:w-1/2 aspect-video lg:aspect-auto" : "aspect-video"}`}>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-primary/30">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-xs font-semibold text-primary">Featured Project</span>
                  </div>
                )}
              </div>

              <div className={`p-6 flex flex-col flex-grow ${project.featured ? "lg:w-1/2 lg:p-10 lg:justify-center" : ""}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`${project.featured ? "text-2xl lg:text-3xl" : "text-xl"} font-bold`}>{project.title}</h3>
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaGithub size={project.featured ? 24 : 20} />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={project.featured ? 24 : 20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className={`text-muted-foreground mb-6 flex-grow ${project.featured ? "text-base lg:text-lg" : "text-sm"}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
