import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { skillCategoriesData as skillCategories } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  // Enriched domain metadata mapping strictly matching Stitch Screen 3
  const domainMetadata = [
    {
      code: "01 // INTELLIGENCE",
      focus: "Autonomous agent loops, structured generation, dense semantic retrieval.",
      description: "Engineering resilient agentic workflows with strict schema constraints, prompt-chaining topologies, and dense retrieval architectures.",
      highlight: "Hallucination Suppression & Guardrail Ensembles",
    },
    {
      code: "02 // ORCHESTRATION",
      focus: "Cyclic computational graphs, multi-agent buses.",
      description: "State-machine orchestration, cyclical flow graphs, and standardized tool protocols for multi-agent interoperability.",
      highlight: "Decoupled Tool Execution & Cyclic State Machines",
    },
    {
      code: "03 // SYSTEMS",
      focus: "Asynchronous APIs, microservices, deterministic business logic.",
      description: "Low-latency async backends, validated data transfer contracts, and deterministic execution environments.",
      highlight: "Sub-50ms API Latency & Typed Schemas",
    },
    {
      code: "04 // DATA INFRASTRUCTURE",
      focus: "High-dimensional embeddings, relational databases, data manipulation pipelines.",
      description: "High-dimensional vector indexing, hybrid retrieval mechanisms, and relational consistency for state management.",
      highlight: "Cosine & MMR Vector Indexing",
    },
    {
      code: "05 // MODELING",
      focus: "Statistical evaluation, empirical benchmarking, feature pipelines.",
      description: "Quantitative validation metrics, rigorous feature transformation pipelines, and empirical model benchmarking.",
      highlight: "Stratified Cross-Validation & Metric Tracking",
    },
    {
      code: "06 // MATHEMATICAL OPTIMIZATION",
      focus: "Exact mathematical solvers, constraint satisfaction, enterprise business intelligence.",
      description: "Provable Mixed-Integer Linear Programming models combining symbolic constraints with interactive analytical intelligence dashboards.",
      highlight: "Simplex / Branch-and-Bound Exact Solvers",
    },
    {
      code: "07 // TOOLING & RUNTIMES",
      focus: "Source control, interactive prototyping, developer toolchains.",
      description: "Reproducible development environments, interactive engineering telemetry dashboards, and modern Unix command-line toolchains.",
      highlight: "Automated CI/CD & Sandboxed Tool Runtimes",
    },
  ];

  useEffect(() => {
    const trigger = triggerRef.current;
    const track = trackRef.current;
    if (!trigger || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop and tablets (>= 768px)
      mm.add("(min-width: 768px)", () => {
        const getDistance = () => {
          return track.scrollWidth - window.innerWidth + 96;
        };

        const pinAnim = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`;
              }
              const currentIndex = Math.min(
                skillCategories.length - 1,
                Math.floor(self.progress * skillCategories.length)
              );
              setActiveSkillIndex(currentIndex);
            },
          },
        });

        return () => {
          pinAnim.kill();
        };
      });

      // Mobile devices (< 768px)
      mm.add("(max-width: 767px)", () => {
        const getDistance = () => {
          return track.scrollWidth - window.innerWidth + 48;
        };

        const pinAnim = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            scrub: 0.8,
            start: "top top",
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`;
              }
              const currentIndex = Math.min(
                skillCategories.length - 1,
                Math.floor(self.progress * skillCategories.length)
              );
              setActiveSkillIndex(currentIndex);
            },
          },
        });

        return () => {
          pinAnim.kill();
        };
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="skills"
      ref={triggerRef}
      className="relative bg-background border-t border-white/10 overflow-hidden"
    >
      {/* Background Blueprint Grid Overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      {/* Pinned Viewport Container */}
      <div className="h-screen w-full flex flex-col justify-between pt-24 pb-6 md:pt-28 md:pb-8 relative overflow-hidden">
        {/* Top Header Bar */}
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0 mb-4 md:mb-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs font-medium tracking-wider text-primary uppercase">
                Technical Taxonomy &amp; Expertise
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
              Specialized Capabilities Across the{" "}
              <span className="text-primary">Modern AI Stack</span>
            </h2>
          </div>

          {/* Progress & Indicator Bar */}
          <div className="flex items-center gap-4 self-start sm:self-end">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary font-semibold">
                0{activeSkillIndex + 1}
              </span>
              <span>/</span>
              <span>0{skillCategories.length}</span>
            </div>

            <div className="w-24 sm:w-36 h-1.5 bg-surface-subtle border border-white/10 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-primary rounded-full transition-all duration-75"
                style={{ width: "0%" }}
              />
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-muted-foreground pl-2 border-l border-white/10">
              <span>Scroll to explore</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="flex-1 min-h-0 flex items-center overflow-visible">
          <div
            ref={trackRef}
            className="flex flex-row flex-nowrap items-stretch gap-6 md:gap-8 px-6 sm:px-12 w-max"
          >
            {skillCategories.map((category, idx) => {
              const meta = domainMetadata[idx] || {
                code: `0${idx + 1} // DOMAIN`,
                focus: "Specialized engineering capability.",
                description: "Production implementations and verified tooling.",
                highlight: "Production Ready Architecture",
              };

              const IconComponent = category.icon;

              return (
                <article
                  key={idx}
                  onMouseMove={handleCardMouseMove}
                  className="w-[85vw] sm:w-[500px] md:w-[580px] lg:w-[640px] max-w-[90vw] h-[56vh] md:h-[60vh] rounded-2xl md:rounded-3xl bg-surface/90 backdrop-blur-xl border border-white/15 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between p-5 sm:p-7 md:p-8 shadow-2xl text-left overflow-y-auto custom-scroll shrink-0"
                >
                  {/* Ambient Glow Accent */}
                  <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" />

                  {/* Interactive cursor spotlight glow */}
                  <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl"
                    style={{
                      background:
                        "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(32, 178, 166, 0.12), transparent 45%)",
                    }}
                  />

                  {/* Top Header & Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-primary tracking-widest uppercase">
                          {meta.code}
                        </span>
                        <span className="text-white/20">|</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          Domain Matrix
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-foreground tracking-tight leading-snug mb-2">
                      {category.title}
                    </h3>

                    <div className="font-mono text-xs text-primary/90 mb-4 tracking-wide font-medium bg-primary/5 border border-primary/15 rounded-lg px-3 py-1.5 inline-block">
                      {meta.focus}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-1.5 font-semibold">
                        Domain Scope &amp; Implementation Details
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-body">
                        {meta.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Tech Badges & Architectural Highlight */}
                  <div className="relative z-10 pt-4 border-t border-white/10 mt-auto">
                    <h4 className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-2.5 font-semibold">
                      Core Frameworks &amp; Tooling
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-surface-subtle border border-white/10 text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Architectural Highlight Pill */}
                    <div className="p-3 rounded-xl bg-surface-subtle/80 border border-white/10 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="font-mono text-xs text-muted-foreground shrink-0">
                          Highlight:
                        </span>
                        <span className="font-mono text-xs font-semibold text-primary truncate">
                          {meta.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Seamless Transition Card to Next Section (Experience) */}
            <div className="w-[300px] sm:w-[360px] h-[56vh] md:h-[60vh] rounded-2xl md:rounded-3xl bg-surface/50 border border-dashed border-white/20 p-8 flex flex-col justify-between items-center text-center shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mt-8">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                  Next Exploration
                </span>
                <h4 className="font-display font-bold text-2xl text-foreground">
                  Experience &amp; Milestones
                </h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Continue scrolling down to explore professional trajectory, engineering achievements, and education.
                </p>
              </div>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-subtle hover:bg-white/10 border border-white/15 text-xs font-mono text-foreground hover:text-primary transition-all mb-4"
              >
                <span>Jump to Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom subtle telemetry bar */}
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between text-[11px] font-mono text-muted-foreground/60 shrink-0 pt-2">
          <span>GSAP PINNED HORIZONTAL ORCHESTRATION</span>
          <span className="hidden sm:inline">SWIPE OR USE MOUSE WHEEL TO NAVIGATE</span>
          <span>{skillCategories.length} DOMAINS ARCHITECTED</span>
        </div>
      </div>
    </section>
  );
};
