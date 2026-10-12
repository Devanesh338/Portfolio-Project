import { Calendar } from "lucide-react";
import { educationData as educationList } from "@/data/portfolioData";

export const Education = () => {
  return (
    <section id="education" className="py-24 border-t border-white/10 relative overflow-hidden text-left">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground font-body">
            Academic background and specialized coursework in artificial intelligence.
          </p>
        </div>

        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-surface border border-white/10 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-xl"
            >
              {/* Header Meta */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-surface-subtle text-primary border border-white/10 uppercase tracking-wider">
                      Undergraduate Degree
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

              {/* Core Specializations & Focus Disciplines */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3 font-semibold">
                  Core Disciplines &amp; Specializations
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Data Science",
                    "Agent AI",
                  ].map((field, fIdx) => (
                    <span
                      key={fIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-subtle border border-white/10 text-xs font-mono text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {field}
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

