import { Brain, Code2, Database, LineChart } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Building intelligent systems using Machine Learning, Deep Learning, and NLP.",
  },
  {
    icon: Code2,
    title: "Generative AI",
    description:
      "Developing advanced RAG, Agentic AI, and LLM-powered applications.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing efficient data pipelines and utilizing vector databases.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Deriving actionable insights using Power BI, DAX, and Data Analysis techniques.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Bridging the gap between,
              <span className="font-serif italic font-normal text-white">
                {" "}
                data and intelligence.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a final-year AI & Data Science student with a strong focus on Artificial Intelligence, 
                Machine Learning, Generative AI, Agentic AI, and Data Analytics. 
              </p>
              <p>
                My technical expertise spans across Python and SQL, enabling me to build end-to-end 
                data-driven solutions. I have hands-on experience developing RAG-based architectures, 
                working with frameworks like LangChain and LangGraph, and deploying models to production.
              </p>
              <p>
                Beyond model development, I am passionate about visualizing complex data to drive 
                business decisions using tools like Power BI and Excel. I am constantly exploring 
                new advancements in AI to build practical, intelligent applications.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create intelligent applications that solve real-world problems 
                by leveraging the power of data and state-of-art AI technologies."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-3xl border border-primary/20 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(32,178,166,0.12)] transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
