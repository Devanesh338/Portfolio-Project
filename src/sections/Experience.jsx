import { Briefcase, Calendar, CheckCircle2, Sliders } from "lucide-react";
import { experienceData as experiences } from "@/data/portfolioData";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-white/10 relative overflow-hidden text-left">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro Hero / Telemetry Banner */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(32,178,166,0.8)]" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Career Trajectory &amp; Academic Background
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight max-w-4xl leading-tight mb-6">
            Applied Industry Experience &amp; <span className="text-primary">Academic Foundations</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-body mb-10 leading-relaxed">
            Practical data science operations alongside rigorous coursework in Artificial Intelligence &amp; Data Science.
          </p>

          {/* Quick Telemetry Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-surface border border-white/10 shadow-lg">
            <div className="p-3 md:p-4 rounded-lg bg-surface-subtle border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1 font-medium">
                Data Scale
              </span>
              <div className="text-xl md:text-2xl font-display font-bold text-foreground">1,500+ Records</div>
              <span className="text-[11px] font-mono text-muted-foreground mt-1">Harmonized Procurement Data</span>
            </div>

            <div className="p-3 md:p-4 rounded-lg bg-surface-subtle border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1 font-medium">
                Timeline Cycle
              </span>
              <div className="text-xl md:text-2xl font-display font-bold text-foreground">2024–2025</div>
              <span className="text-[11px] font-mono text-muted-foreground mt-1">Enterprise Materials Complex</span>
            </div>

            <div className="p-3 md:p-4 rounded-lg bg-surface-subtle border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1 font-medium">
                Academic Standing
              </span>
              <div className="text-xl md:text-2xl font-display font-bold text-primary">CGPA 7.81 / 10</div>
              <span className="text-[11px] font-mono text-muted-foreground mt-1">B.Tech AI &amp; Data Science</span>
            </div>

            <div className="p-3 md:p-4 rounded-lg bg-surface-subtle border border-white/5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1 font-medium">
                External Validation
              </span>
              <div className="text-xl md:text-2xl font-display font-bold text-foreground">Industry Verified</div>
              <span className="text-[11px] font-mono text-muted-foreground mt-1">Deloitte &amp; HackerRank</span>
            </div>
          </div>
        </div>

        {/* SECTION 1: PROFESSIONAL EXPERIENCE */}
        <div className="space-y-12">
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              01 // Professional Experience
            </h3>
            <div className="flex-grow h-px bg-white/10" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-surface border border-white/10 p-6 md:p-8 hover:border-primary/50 transition-all duration-300 shadow-xl"
              >
                {/* Header Meta */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-surface-subtle text-primary border border-white/10 uppercase tracking-wider">
                        Internship
                      </span>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        ID: NLC-MMC-DS-01
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex md:flex-col md:items-end justify-between items-center text-xs font-mono text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-subtle border border-white/10 text-foreground">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.period}
                    </span>
                    <span className="mt-2 text-muted-foreground text-[11px] uppercase tracking-wider">
                      Duration: 2 Months
                    </span>
                  </div>
                </div>

                {/* Practical Responsibilities */}
                <div className="mb-8">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                    Practical Responsibilities &amp; Implementation
                  </h5>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Ingested and harmonized <strong className="text-foreground font-semibold">1,500+ procurement and bidding records</strong> across organizational zones.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Developed automated data preparation pipelines, analytics dashboards, and executive reporting views.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Derived actionable supply chain insights to optimize procurement workflow transparency.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Telemetry Architecture Callout Box */}
                <div className="p-4 md:p-5 rounded-lg bg-surface-subtle border border-white/10 mb-6">
                  <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-primary" />
                      System Architecture Telemetry
                    </span>
                    <span className="text-[11px] font-mono text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                      STATUS: ACTIVE_ARCHIVE
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-muted-foreground uppercase block text-[10px]">Pipeline Mode</span>
                      <span className="text-foreground font-semibold text-xs tracking-wider">ENTERPRISE_BI_INGESTION</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground uppercase block text-[10px]">Latency / Execution</span>
                      <span className="text-foreground font-semibold text-xs tracking-wider">Automated ETL &amp; Reporting</span>
                    </div>
                  </div>
                </div>

                {/* Technologies Pill Tags */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-3 font-semibold">
                    Utilized Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 rounded-md bg-surface-subtle border border-white/10 text-xs text-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
