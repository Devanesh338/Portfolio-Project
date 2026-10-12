import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategoriesData as skillCategories } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

  // Domain descriptions for each skill category
  const domainMetadata = [
    {
      description: "Engineering resilient agentic workflows with strict schema constraints, prompt-chaining topologies, and dense retrieval architectures.",
    },
    {
      description: "State-machine orchestration, cyclical flow graphs, and standardized tool protocols for multi-agent interoperability.",
    },
    {
      description: "Low-latency async backends, validated data transfer contracts, and deterministic execution environments.",
    },
    {
      description: "High-dimensional vector indexing, hybrid retrieval mechanisms, and relational consistency for state management.",
    },
    {
      description: "Quantitative validation metrics, rigorous feature transformation pipelines, and empirical model benchmarking.",
    },
    {
      description: "Provable Mixed-Integer Linear Programming models combining symbolic constraints with interactive analytical intelligence dashboards.",
    },
    {
      description: "Reproducible development environments, interactive engineering telemetry dashboards, and modern Unix command-line toolchains.",
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

        const pinAnim = gsap.fromTo(
          track,
          { x: () => -getDistance() },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              pin: true,
              scrub: 0.6,
              start: "top top",
              end: () => `+=${getDistance()}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          }
        );

        return () => {
          pinAnim.kill();
        };
      });

      // Mobile devices (< 768px)
      mm.add("(max-width: 767px)", () => {
        const getDistance = () => {
          return track.scrollWidth - window.innerWidth + 48;
        };

        const pinAnim = gsap.fromTo(
          track,
          { x: () => -getDistance() },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: trigger,
              pin: true,
              scrub: 0.5,
              start: "top top",
              end: () => `+=${getDistance()}`,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          }
        );

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
      <div className="h-screen w-full flex flex-col justify-between pt-24 pb-8 md:pt-28 md:pb-10 relative overflow-hidden">
        {/* Top Header Bar */}
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between gap-4 shrink-0 mb-3 md:mb-5">
          <div className="text-left">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
              Skills
            </h2>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="flex-1 min-h-0 flex items-center overflow-visible">
          <div
            ref={trackRef}
            className="flex flex-row flex-nowrap items-stretch gap-5 md:gap-6 px-6 sm:px-12 w-max"
          >
            {skillCategories.map((category, idx) => {
              const meta = domainMetadata[idx] || {
                description: "Production implementations and verified tooling.",
              };

              const IconComponent = category.icon;

              return (
                <article
                  key={idx}
                  onMouseMove={handleCardMouseMove}
                  className="w-[85vw] sm:w-[340px] md:w-[370px] lg:w-[400px] max-w-[90vw] rounded-2xl md:rounded-3xl bg-surface/90 backdrop-blur-xl border border-white/15 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between p-5 shadow-2xl text-left shrink-0 overflow-hidden"
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
                    <div className="flex items-center gap-3.5 mb-3.5 pb-3 border-b border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-foreground tracking-tight leading-snug">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-body mb-4">
                      {meta.description}
                    </p>
                  </div>

                  {/* Bottom Tech Badges */}
                  <div className="relative z-10 pt-3 border-t border-white/10 mt-auto">
                    <h4 className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-semibold">
                      Core Frameworks &amp; Tooling
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-xs font-medium px-2 py-0.5 rounded-md bg-surface-subtle border border-white/10 text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

