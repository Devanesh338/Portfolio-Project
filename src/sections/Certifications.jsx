import { Award, Database, BarChart3, ShieldCheck, ExternalLink } from "lucide-react";
import { certificationsData as certifications } from "@/data/portfolioData";

export const Certifications = () => {
  // Enhanced metadata mapping for Stitch design fidelity while preserving portfolioData source of truth
  const certDetails = {
    "HackerRank SQL Basic": {
      icon: Database,
      status: "VERIFIED",
      description: "Verified SQL query design & database manipulation certification by HackerRank.",
      domains: ["Relational Queries", "Schema Manipulation", "Data Aggregation"]
    },
    "Data Analytics Simulation": {
      icon: BarChart3,
      status: "COMPLETED",
      description: "Enterprise data analytics simulation issued by Deloitte Australia (Forage).",
      domains: ["Business Intelligence", "Executive Communication", "Data Hygiene"]
    }
  };

  return (
    <section id="certifications" className="py-24 border-t border-white/10 relative overflow-hidden text-left">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground font-body">
            Industry-recognized credentials and practical simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => {
            const details = certDetails[cert.title] || {
              icon: Award,
              status: "VERIFIED",
              description: `Professional certification verified by ${cert.issuer}.`,
              domains: ["Applied AI", "Data Systems"]
            };
            const Icon = details.icon;

            return (
              <div
                key={idx}
                className="rounded-xl bg-surface border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-subtle border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <h4 className="text-lg md:text-xl font-display font-bold text-foreground mb-1">
                    {cert.title}
                  </h4>
                  <span className="text-xs font-mono text-muted-foreground block mb-3 uppercase tracking-wider">
                    Issuer: {cert.issuer}
                  </span>
                  <p className="text-sm text-muted-foreground font-body mb-6 leading-relaxed">
                    {details.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-2 font-medium">
                      Competency Domains
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {details.domains.map((domain, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-0.5 rounded text-xs bg-surface-subtle border border-white/5 text-muted-foreground font-mono"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-subtle hover:bg-white/10 border border-white/10 text-xs font-mono text-primary hover:text-primary transition-colors shrink-0 shadow-sm"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
