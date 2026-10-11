import { ExternalLink, GitBranch, Layers, Cpu, Database, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData as projects } from "@/data/portfolioData";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Blueprint Grid Overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-white/10 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs font-medium tracking-wider text-primary uppercase">
              Engineering Case Studies
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight mb-6">
            Production-Grade AI Systems &amp; Decision Intelligence
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            In-depth breakdown of multi-agent architectures, mathematical solvers, and retrieval-augmented generation pipelines built for determinism, auditable states, and sub-second latencies.
          </p>
        </div>

        {/* Projects Showcase Articles */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const indexLabel = `0${idx + 1}`;
            return (
              <article
                key={idx}
                className="p-6 md:p-10 rounded-2xl bg-surface/90 border border-white/15 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden shadow-xl text-left"
              >
                {/* Ambient glow accent */}
                <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                {/* Header & Meta Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-semibold text-primary tracking-widest uppercase">
                        {indexLabel} // {project.category.split("·")[0].trim()}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="font-mono text-xs text-muted-foreground">Production Spec</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Category Badge */}
                  <div className="self-start md:self-auto px-3.5 py-1.5 rounded-lg bg-surface-subtle border border-white/10">
                    <span className="font-mono text-xs text-primary font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Problem Statement & Description */}
                <div className="mb-8">
                  <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    System Overview &amp; Problem Statement
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-5xl">
                    {project.description}
                  </p>
                </div>

                {/* Technical Architecture Blueprint Widget */}
                <div className="mb-8 bg-surface-subtle/80 rounded-xl border border-white/10 p-5 md:p-7 relative">
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      <span className="font-mono text-xs font-semibold tracking-wider text-foreground">
                        TECHNICAL ARCHITECTURE BLUEPRINT // PIPELINE FLOW
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
                      STATUS: ACTIVE
                    </span>
                  </div>

                  {/* Node Flow Diagram */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {project.architecture.flow.map((step, stepIdx) => (
                      <div
                        key={stepIdx}
                        className="p-4 rounded-lg bg-surface border border-white/10 flex flex-col justify-between relative group/node hover:border-primary/40 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[10px] text-primary font-medium">
                              NODE_0{stepIdx + 1}
                            </span>
                            {stepIdx === 0 && <Database className="w-3.5 h-3.5 text-muted-foreground" />}
                            {stepIdx === 1 && <GitBranch className="w-3.5 h-3.5 text-primary" />}
                            {stepIdx === 2 && <Cpu className="w-3.5 h-3.5 text-primary" />}
                            {stepIdx === 3 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                          </div>
                          <h5 className="font-display font-semibold text-sm text-foreground mb-1">
                            {step}
                          </h5>
                          <p className="text-[11px] font-mono text-muted-foreground leading-normal">
                            Pipeline execution phase in multi-agent runtime.
                          </p>
                        </div>
                        <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                          <span>Stage {stepIdx + 1}/4</span>
                          <span className="text-primary font-semibold">VERIFIED</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Details Explanation */}
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-2.5">
                    <span className="font-mono text-xs text-primary font-semibold shrink-0">EXECUTION:</span>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                      {project.architecture.details}
                    </p>
                  </div>
                </div>

                {/* Bottom Metric Strip + Tech Badges + Action Buttons */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                  {/* Tech Stack Badges */}
                  <div className="lg:col-span-8 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-subtle border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-surface-subtle border border-white/15 text-xs font-display font-semibold text-foreground transition-all hover:border-primary/50 shadow-sm"
                      >
                        <FaGithub size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-surface hover:bg-surface-subtle border border-white/15 text-muted-foreground hover:text-primary transition-all"
                        title="Live Demonstration"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
