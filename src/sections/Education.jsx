import { GraduationCap, Calendar, Layers } from "lucide-react";
import { educationData as educationList } from "@/data/portfolioData";

export const Education = () => {
  return (
    <section id="education" className="py-24 border-t border-white/10 relative overflow-hidden text-left">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="w-5 h-5 text-primary" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
            02 // Academic Foundations
          </h3>
          <div className="flex-grow h-px bg-white/10" />
        </div>

        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-surface border border-white/10 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-xl"
            >
              {/* Header Meta */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-surface-subtle text-primary border border-white/10 uppercase tracking-wider">
                      Undergraduate Degree
                    </span>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      REC · AUTONOMOUS
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex md:flex-col md:items-end justify-between items-center text-xs font-mono text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-subtle border border-white/10 text-foreground">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {edu.date}
                  </span>
                  <span className="mt-2 text-primary font-semibold text-xs tracking-wider">
                    {edu.score} / 10
                  </span>
                </div>
              </div>

              {/* Coursework & Academic Rigor */}
              <div className="mb-8">
                <h5 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                  Coursework &amp; Academic Rigor
                </h5>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Neuro-symbolic AI systems, Machine Learning foundations, Algorithmic optimization, Relational &amp; Distributed Databases.
                </p>

                <div className="p-4 rounded-lg bg-surface-subtle border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
                    <Layers className="w-3.5 h-3.5 text-primary" />
                    <span className="font-semibold text-foreground uppercase">Core Concepts &amp; System Architecture</span>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground leading-normal">
                    Focused study in state estimation, vector databases, statistical modeling, algorithmic complexity analysis, and scalable database query evaluation.
                  </p>
                </div>
              </div>

              {/* Core Competencies */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3 font-semibold">
                  Core Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-surface-subtle border border-white/10 text-xs text-foreground font-mono">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-subtle border border-white/10 text-xs text-foreground font-mono">
                    Optimization Solvers
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-subtle border border-white/10 text-xs text-foreground font-mono">
                    Data Structures
                  </span>
                  <span className="px-3 py-1 rounded-md bg-surface-subtle border border-white/10 text-xs text-foreground font-mono">
                    Relational SQL
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
