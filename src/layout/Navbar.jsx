import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinksData as navLinks } from "@/data/portfolioData";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ["projects", "skills", "experience", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      let current = "home";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo / Identity */}
        <a className="flex items-center gap-3 group" href="#">
          <div className="w-9 h-9 rounded-lg bg-surface border border-white/15 flex items-center justify-center font-display font-bold text-primary text-base group-hover:border-primary/50 transition-colors shadow-sm">
            DS
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-semibold tracking-tight text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
              Devanesh S M
            </span>
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              AI &amp; Data Science Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/70 border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground shadow-sm">
          {navLinks.map((link, index) => {
            const sectionTarget = link.href.replace("#", "") || "home";
            const isActive = activeSection === sectionTarget;
            return (
              <a
                key={index}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-foreground bg-surface-subtle font-semibold border border-white/10 shadow-sm"
                    : "hover:text-foreground hover:bg-surface-subtle/50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action / Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-mono font-medium text-foreground border border-white/15 bg-surface hover:bg-surface-subtle hover:border-primary/40 transition-all shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-foreground rounded-lg border border-white/10 bg-surface/60 focus:outline-none"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium font-display text-muted-foreground hover:text-foreground py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-primary/60">→</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-[#0F1418] font-display font-semibold text-sm shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#0F1418]" />
                Contact Devanesh
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
