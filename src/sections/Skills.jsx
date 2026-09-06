import { Code2, Sparkles, Brain, LineChart, Database } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    skills: [
      { name: "RAG & Semantic Search", level: 90 },
      { name: "LangGraph", level: 85 },
      { name: "Multi-Agent Systems", level: 85 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Model Context Protocol", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "Supervised Learning", level: 85 },
      { name: "Model Evaluation", level: 85 },
      { name: "Feature Engineering", level: 80 },
    ],
  },
  {
    title: "Analytics & BI",
    icon: LineChart,
    skills: [
      { name: "Power BI & DAX", level: 90 },
      { name: "Excel", level: 90 },
      { name: "Power Query", level: 85 },
      { name: "pandas & NumPy", level: 85 },
    ],
  },
  {
    title: "Development Tools",
    icon: Database,
    skills: [
      { name: "GitHub", level: 90 },
      { name: "Streamlit", level: 85 },
      { name: "Vector Databases", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, isVisible }) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-end mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] rounded-full transition-all duration-1000 ease-out animate-gradient"
          style={{ 
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: "200ms"
          }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technical{" "}
            <span className="font-serif italic font-normal text-white">
              Skills.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Technologies and tools I use to build intelligent applications, machine learning solutions, and data-driven systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-strong p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(32,178,166,0.12)] animate-fade-in flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col flex-grow justify-center">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skillIdx}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
