import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";
import { skillCategoriesData as skillCategories } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // Enriched domain metadata mapping strictly matching Stitch Screen 3
  const domainMetadata = [
    {
      code: "01 // INTELLIGENCE",
      focus: "Autonomous agent loops, structured generation, dense semantic retrieval.",
      description: "Engineering resilient agentic workflows with strict schema constraints, prompt-chaining topologies, and dense retrieval architectures.",
      highlight: "Hallucination Suppression & Guardrail Ensembles",
      colSpan: "lg:col-span-2",
    },
    {
      code: "02 // ORCHESTRATION",
      focus: "Cyclic computational graphs, multi-agent buses.",
      description: "State-machine orchestration, cyclical flow graphs, and standardized tool protocols for multi-agent interoperability.",
      highlight: "Decoupled Tool Execution & Cyclic State Machines",
      colSpan: "lg:col-span-1",
    },
    {
      code: "03 // SYSTEMS",
      focus: "Asynchronous APIs, microservices, deterministic business logic.",
      description: "Low-latency async backends, validated data transfer contracts, and deterministic execution environments.",
      highlight: "Sub-50ms API Latency & Typed Schemas",
      colSpan: "lg:col-span-1",
    },
    {
      code: "04 // DATA INFRASTRUCTURE",
      focus: "High-dimensional embeddings, relational databases, data manipulation pipelines.",
      description: "High-dimensional vector indexing, hybrid retrieval mechanisms, and relational consistency for state management.",
      highlight: "Cosine & MMR Vector Indexing",
      colSpan: "lg:col-span-1",
    },
    {
      code: "05 // MODELING",
      focus: "Statistical evaluation, empirical benchmarking, feature pipelines.",
      description: "Quantitative validation metrics, rigorous feature transformation pipelines, and empirical model benchmarking.",
      highlight: "Stratified Cross-Validation & Metric Tracking",
      colSpan: "lg:col-span-1",
    },
    {
      code: "06 // MATHEMATICAL OPTIMIZATION",
      focus: "Exact mathematical solvers, constraint satisfaction, enterprise business intelligence.",
      description: "Provable Mixed-Integer Linear Programming models combining symbolic constraints with interactive analytical intelligence dashboards.",
      highlight: "Simplex / Branch-and-Bound Exact Solvers",
      colSpan: "lg:col-span-2",
    },
    {
      code: "07 // TOOLING & RUNTIMES",
      focus: "Source control, interactive prototyping, developer toolchains.",
      description: "Reproducible development environments, interactive engineering telemetry dashboards, and modern Unix command-line toolchains.",
      highlight: "Automated CI/CD & Sandboxed Tool Runtimes",
      colSpan: "lg:col-span-1",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      // 1. Header elements staggered reveal
      gsap.fromTo(
        header.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Bento cards staggered cascade entrance
      const cards = grid.querySelectorAll(".skill-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 55, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 3. Subtle parallax scroll depth across alternating columns
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(".skill-card-parallax", {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: grid,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    }, sectionRef);

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
      ref={sectionRef}
      className="py-24 border-t border-white/10 relative overflow-hidden text-left"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-4xl mb-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 text-xs font-mono tracking-widest text-primary mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Technical Taxonomy &amp; Expertise
            </span>
          </div>

          {/* Main Title */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-5">
            Specialized Capabilities Across the <span className="text-primary">Modern AI Stack</span>
          </h2>
        </div>

        {/* Skill Domain Architecture: Asymmetric Bento / Multi-column Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, idx) => {
            const meta = domainMetadata[idx] || {
              code: `0${idx + 1} // DOMAIN`,
              focus: "Specialized engineering capability.",
              description: "Production implementations and verified tooling.",
              highlight: "Production Ready Architecture",
              colSpan: "lg:col-span-1",
            };

            const IconComponent = category.icon;
            const isParallax = idx % 2 !== 0;

            return (
              <div
                key={idx}
                onMouseMove={handleCardMouseMove}
                className={`skill-card ${isParallax ? "skill-card-parallax" : ""} ${meta.colSpan} group relative p-7 rounded-2xl bg-surface/90 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
              >
                {/* Interactive cursor spotlight glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(32, 178, 166, 0.12), transparent 45%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest text-primary font-semibold">
                      {meta.code}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-subtle border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>

                  <div className="font-mono text-xs text-muted-foreground mb-4 tracking-wide font-medium">
                    {meta.focus}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-body">
                    {meta.description}
                  </p>
                </div>

                <div className="relative z-10">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-surface-subtle border border-white/10 text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Architectural Highlight */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="font-mono text-xs text-muted-foreground">Highlight:</span>
                    <span className="font-mono text-xs font-semibold text-primary truncate">
                      {meta.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
