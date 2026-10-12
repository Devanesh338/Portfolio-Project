import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.png";
import { heroData } from "@/data/portfolioData";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Technical Grid & Ambient Lighting */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bio, Mission, CTAs, Stack */}
          <div className="lg:col-span-7 flex flex-col space-y-7 text-left">
            {/* Status Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 text-xs font-mono w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-muted-foreground">Open to AI/ML internships & engineering opportunities</span>
            </div>

            {/* Headline & Subtitle with Mobile-Aligned Portrait */}
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight text-foreground">
                  {heroData.name}
                </h1>
                <p className="font-mono text-xs sm:text-sm lg:text-base text-primary tracking-wide uppercase font-medium leading-relaxed">
                  {heroData.titles[0]} · {heroData.titles[1]}
                  <span className="hidden sm:inline"> · {heroData.titles[2]}</span>
                </p>
              </div>

              {/* Mobile-only Aligned Portrait (Side-by-side with Name) */}
              <div className="lg:hidden shrink-0">
                <div className="relative w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border border-white/20 bg-surface shadow-2xl">
                  <img
                    src={profileImg}
                    alt={heroData.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                    onError={(e) => {
                      e.target.src = "/profile.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Core Thesis / Mission Statement */}
            <div className="border-l-2 border-primary/50 pl-5 py-1">
              <p className="text-lg sm:text-xl font-display font-medium text-foreground leading-snug tracking-tight">
                {heroData.description}
              </p>
              <p className="mt-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {heroData.longDescription}
              </p>
            </div>

            {/* Primary Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-[#0F1418] font-display font-semibold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={heroData.resumeLink}
                download="Devanesh_Resume_New.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-surface border border-white/15 text-foreground font-display font-medium text-sm hover:bg-surface-subtle hover:border-primary/40 transition-all hover:-translate-y-0.5"
              >
                <Download size={16} className="text-muted-foreground" />
                <span>Download Resume</span>
              </a>

              {/* Social Icons Group */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={heroData.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-surface-subtle transition-all"
                  title="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={heroData.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-surface-subtle transition-all"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={`mailto:${heroData.email}`}
                  className="w-11 h-11 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-surface-subtle transition-all"
                  title="Email Me"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Tech Stack Pill Row */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Core Focus &amp; Tools</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {heroData.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface border border-white/10 text-xs font-mono text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Hero Portrait Showcase Card & Telemetry (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col space-y-4 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl bg-surface border border-white/15 overflow-hidden shadow-2xl group transition-all">
              {/* Ambient Teal Rim Glow */}
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              {/* Exact User Portrait Image Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-surface-subtle">
                <img
                  src={profileImg}
                  alt={heroData.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98] group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "/profile.png";
                  }}
                />

                {/* Subtle Cinematic Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none" />

                {/* Bottom Portrait Overlay Bar */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2 pointer-events-auto">
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground bg-surface/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground font-semibold text-xs">{heroData.name}</span>
                    </div>
                    <span className="text-[11px] text-muted-foreground">Tamil Nadu, India</span>
                  </div>
                  <div className="text-center py-1.5 px-3 rounded-lg bg-background/80 backdrop-blur-md border border-primary/20">
                    <p className="font-mono text-[11px] text-primary tracking-wide uppercase font-medium">
                      AI Systems Engineer · Agentic AI · Generative AI &amp; MILP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
