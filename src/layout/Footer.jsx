import { heroData } from "@/data/portfolioData";

export const Footer = () => {
  return (
    <footer className="w-full bg-surface-subtle/50 border-t border-white/10 text-xs font-body text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Identity & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-display font-bold text-sm text-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Devanesh S M
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Devanesh S M. Autonomous Systems &amp; AI Architecture.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href={heroData.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={heroData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href={heroData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
