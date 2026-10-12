import { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Download, 
  ArrowUpRight 
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { heroData } from "@/data/portfolioData";

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailRecipient = heroData.email || "devaneshmanikandan@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailRecipient);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/10 relative overflow-hidden text-left">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight leading-tight max-w-4xl">
            Get in <span className="text-primary">Touch.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground font-body max-w-3xl leading-relaxed">
            Open for AI/ML engineering internships, data science opportunities, and forward-deployed engineering teams. Feel free to connect directly via any channel below.
          </p>
        </div>

        {/* Availability Status Banner */}
        <div className="mb-8 p-6 rounded-2xl bg-surface border border-white/10 relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <span className="font-display font-semibold text-sm sm:text-base text-foreground block">
                  Available for Internships &amp; Engineering Roles
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Final-year B.Tech in AI &amp; Data Science · Ready for 2025–2026 opportunities
                </span>
              </div>
            </div>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-xs hover:bg-primary/90 transition-colors shadow-sm shrink-0 self-start sm:self-auto"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Reach Out</span>
            </a>
          </div>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Channel 1: Primary Email */}
          <div className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-xl bg-surface-subtle border border-white/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                    Email
                  </span>
                  <a
                    href={`mailto:${emailRecipient}`}
                    className="text-base font-display font-semibold text-foreground hover:text-primary transition-colors break-all"
                  >
                    {emailRecipient}
                  </a>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mb-6">
                Direct communication for internships, project inquiries, and collaboration.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-mono font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Send via Gmail</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/10 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Channel 2: LinkedIn */}
          <div className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-xl bg-surface-subtle border border-white/10 text-primary">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                    LinkedIn
                  </span>
                  <span className="text-base font-display font-semibold text-foreground">
                    Devanesh S M
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mb-6">
                Professional network, background details, recommendations, and direct messaging.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-end">
              <a
                href={heroData.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/10 text-xs font-mono text-foreground hover:text-primary transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Channel 3: GitHub */}
          <div className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-xl bg-surface-subtle border border-white/10 text-primary">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                    GitHub
                  </span>
                  <span className="text-base font-display font-semibold text-foreground">
                    github.com/Devanesh338
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mb-6">
                Explore open-source repositories, agentic workflow implementations, and active codebase commits.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-end">
              <a
                href={heroData.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/10 text-xs font-mono text-foreground hover:text-primary transition-colors"
              >
                <span>View Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Channel 4: Resume */}
          <div className="p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-3 rounded-xl bg-surface-subtle border border-white/10 text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                    Curriculum Vitae
                  </span>
                  <span className="text-base font-display font-semibold text-foreground">
                    Devanesh_Resume_New.pdf
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mb-6">
                Comprehensive overview of technical skillsets, project architectures, and internship experience.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-end">
              <a
                href={heroData.resumeLink}
                download="Devanesh_Resume_New.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-display text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
