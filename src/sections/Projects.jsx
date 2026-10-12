import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData as projects } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

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
            scrub: 0.6,
            start: "top top",
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
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
            scrub: 0.5,
            start: "top top",
            end: () => `+=${getDistance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
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
      <div className="h-screen w-full flex flex-col justify-between pt-24 pb-8 md:pt-28 md:pb-10 relative overflow-hidden">
        {/* Top Header Bar */}
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between gap-4 shrink-0 mb-3 md:mb-5">
          <div className="text-left">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
              Projects
            </h2>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="flex-1 min-h-0 flex items-center overflow-visible">
          <div
            ref={trackRef}
            className="flex flex-row flex-nowrap items-stretch gap-6 md:gap-8 px-6 sm:px-12 w-max"
          >
            {projects.map((project, idx) => {
              return (
                <article
                  key={idx}
                  className="w-[85vw] sm:w-[500px] md:w-[560px] lg:w-[620px] max-w-[90vw] rounded-2xl md:rounded-3xl bg-surface/90 backdrop-blur-xl border border-white/15 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between p-5 sm:p-6 shadow-2xl text-left shrink-0 overflow-hidden"
                >
                  {/* Ambient Glow Accent */}
                  <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors" />

                  {/* Top Header & Meta */}
                  <div className="relative z-10">
                    <div className="border-b border-white/10 pb-3 mb-3">
                      <div className="inline-block px-2.5 py-0.5 rounded-lg bg-surface-subtle border border-white/10 mb-2">
                        <span className="font-mono text-xs text-primary font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground tracking-tight leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Overview & Problem Statement */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3.5 line-clamp-3 font-body">
                      {project.description}
                    </p>

                    {/* Technical Architecture Blueprint Widget */}
                    <div className="mb-4 bg-surface-subtle/80 rounded-xl border border-white/10 p-3 sm:p-3.5 relative">
                      <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/10">
                        <Layers className="w-3.5 h-3.5 text-primary" />
                        <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-foreground">
                          ARCHITECTURE PIPELINE
                        </span>
                      </div>

                      {/* Compact Node Flow Steps */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {project.architecture.flow.map((step, stepIdx) => (
                          <div key={stepIdx} className="flex items-center gap-1.5">
                            <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-surface border border-white/10 text-foreground font-medium">
                              {step}
                            </span>
                            {stepIdx < project.architecture.flow.length - 1 && (
                              <span className="text-primary text-[10px]">→</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Architecture Details Explanation */}
                      <p className="font-mono text-[10px] sm:text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                        <span className="text-primary font-semibold mr-1">FLOW:</span>
                        {project.architecture.details}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Tech Badges & Action Buttons */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/10 mt-auto">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 max-w-sm sm:max-w-md">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-surface-subtle border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/15 text-xs font-display font-semibold text-foreground hover:border-primary/50 transition-all shadow-sm"
                        >
                          <FaGithub size={13} />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/15 text-muted-foreground hover:text-primary transition-all"
                          title="Live Spec"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
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

