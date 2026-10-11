import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ExternalLink, 
  GitBranch, 
  Layers, 
  Cpu, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData as projects } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

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
                projects.length - 1,
                Math.floor(self.progress * projects.length)
              );
              setActiveProjectIndex(currentIndex);
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
                projects.length - 1,
                Math.floor(self.progress * projects.length)
              );
              setActiveProjectIndex(currentIndex);
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

  return (
    <section
      id="projects"
      ref={triggerRef}
      className="relative bg-background border-t border-white/10 overflow-hidden"
    >
      {/* Background Blueprint Grid Overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      {/* Pinned Viewport Container */}
      <div className="h-screen w-full flex flex-col justify-between py-6 md:py-10 relative overflow-hidden">
        {/* Top Header Bar */}
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0 mb-4 md:mb-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs font-medium tracking-wider text-primary uppercase">
                Engineering Case Studies
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
              Featured Systems &amp; <span className="text-primary">Architecture</span>
            </h2>
          </div>

          {/* Progress & Indicator Bar */}
          <div className="flex items-center gap-4 self-start sm:self-end">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary font-semibold">
                0{activeProjectIndex + 1}
              </span>
              <span>/</span>
              <span>0{projects.length}</span>
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
            {projects.map((project, idx) => {
              const indexLabel = `0${idx + 1}`;
              return (
                <article
                  key={idx}
                  className="w-[85vw] sm:w-[600px] md:w-[720px] lg:w-[840px] max-w-[90vw] h-[64vh] md:h-[68vh] rounded-2xl md:rounded-3xl bg-surface/90 backdrop-blur-xl border border-white/15 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between p-5 sm:p-7 md:p-8 shadow-2xl text-left overflow-y-auto custom-scroll shrink-0"
                >
                  {/* Ambient Glow Accent */}
                  <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" />

                  {/* Top Header & Meta */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="font-mono text-xs font-semibold text-primary tracking-widest uppercase">
                            {indexLabel} // {project.category.split("·")[0].trim()}
                          </span>
                          <span className="text-white/20">|</span>
                          <span className="font-mono text-xs text-muted-foreground">Production Spec</span>
                        </div>
                        <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-foreground tracking-tight leading-snug">
                          {project.title}
                        </h3>
                      </div>

                      <div className="self-start sm:self-auto px-3 py-1 rounded-lg bg-surface-subtle border border-white/10 shrink-0">
                        <span className="font-mono text-xs text-primary font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Overview & Problem Statement */}
                    <div className="mb-5">
                      <h4 className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mb-1.5 font-semibold">
                        System Overview &amp; Problem Statement
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical Architecture Blueprint Widget */}
                    <div className="mb-5 bg-surface-subtle/80 rounded-xl border border-white/10 p-4 md:p-5 relative">
                      <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-primary" />
                          <span className="font-mono text-xs font-semibold tracking-wider text-foreground">
                            TECHNICAL ARCHITECTURE BLUEPRINT
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                          STATUS: ACTIVE
                        </span>
                      </div>

                      {/* Node Flow Diagram */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 relative">
                        {project.architecture.flow.map((step, stepIdx) => (
                          <div
                            key={stepIdx}
                            className="p-3 rounded-lg bg-surface border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-colors"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="font-mono text-[10px] text-primary font-medium">
                                  NODE_0{stepIdx + 1}
                                </span>
                                {stepIdx === 0 && <Database className="w-3 h-3 text-muted-foreground" />}
                                {stepIdx === 1 && <GitBranch className="w-3 h-3 text-primary" />}
                                {stepIdx === 2 && <Cpu className="w-3 h-3 text-primary" />}
                                {stepIdx === 3 && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                              </div>
                              <h5 className="font-display font-semibold text-xs text-foreground mb-0.5 truncate">
                                {step}
                              </h5>
                              <p className="text-[10px] font-mono text-muted-foreground">
                                Pipeline Stage
                              </p>
                            </div>
                            <div className="mt-2.5 pt-1.5 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-muted-foreground">
                              <span>Stage {stepIdx + 1}/4</span>
                              <span className="text-primary font-semibold">VERIFIED</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Architecture Details Explanation */}
                      <div className="mt-3.5 pt-3 border-t border-white/10 flex items-start gap-2">
                        <span className="font-mono text-[11px] text-primary font-semibold shrink-0">
                          FLOW:
                        </span>
                        <p className="font-mono text-[11px] text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                          {project.architecture.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech Badges & Action Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-white/10 mt-auto">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 max-w-xl">
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
                    <div className="flex items-center gap-3 shrink-0">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/15 text-xs font-display font-semibold text-foreground hover:border-primary/50 transition-all shadow-sm"
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
                          className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/15 text-muted-foreground hover:text-primary transition-all"
                          title="Live Spec"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Seamless Transition Card to Next Section */}
            <div className="w-[300px] sm:w-[360px] h-[64vh] md:h-[68vh] rounded-2xl md:rounded-3xl bg-surface/50 border border-dashed border-white/20 p-8 flex flex-col justify-between items-center text-center shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mt-8">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                  Next Exploration
                </span>
                <h4 className="font-display font-bold text-2xl text-foreground">
                  Technical Taxonomy &amp; Expertise
                </h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  Continue scrolling down to explore core domains across AI, backend architectures, and tooling.
                </p>
              </div>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-subtle hover:bg-white/10 border border-white/15 text-xs font-mono text-foreground hover:text-primary transition-all mb-4"
              >
                <span>Jump to Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom subtle indicator */}
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between text-[11px] font-mono text-muted-foreground/60 shrink-0 pt-2">
          <span>GSAP PINNED HORIZONTAL ORCHESTRATION</span>
          <span className="hidden sm:inline">SWIPE OR USE MOUSE WHEEL TO NAVIGATE</span>
          <span>{projects.length} CASE STUDIES LOADED</span>
        </div>
      </div>
    </section>
  );
};
