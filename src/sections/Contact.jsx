import { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  Lock, 
  FileText, 
  Download, 
  Terminal,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { heroData } from "@/data/portfolioData";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [inquiryType, setInquiryType] = useState("Internship Opportunity");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });
  const [transmitted, setTransmitted] = useState(false);

  const emailRecipient = heroData.email || "devaneshmanikandan@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailRecipient);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const constructPayload = () => {
    const subjectLine = encodeURIComponent(
      `[${inquiryType}] ${formData.subject || 'Portfolio Inquiry for Devanesh'}`
    );
    const bodyContent = encodeURIComponent(
      `Hello Devanesh,\n\n` +
      `Name: ${formData.name || 'N/A'}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Organization: ${formData.organization || 'N/A'}\n` +
      `Category: ${inquiryType}\n\n` +
      `Message:\n${formData.message || 'I would like to discuss an opportunity / project.'}\n\n` +
      `Best regards,\n${formData.name || ''}`
    );

    return {
      subjectLine,
      bodyContent,
      gmailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${subjectLine}&body=${bodyContent}`,
      mailtoUrl: `mailto:${emailRecipient}?subject=${subjectLine}&body=${bodyContent}`,
      rawText: `To: ${emailRecipient}\nSubject: [${inquiryType}] ${formData.subject || 'Portfolio Inquiry'}\n\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`
    };
  };

  const handleDispatch = (mode = "gmail") => {
    const payload = constructPayload();
    setTransmitted(true);

    if (mode === "gmail") {
      window.open(payload.gmailUrl, "_blank", "noopener,noreferrer");
    } else {
      // Trigger native client via virtual link to avoid blank about:blank tab
      const anchor = document.createElement("a");
      anchor.href = payload.mailtoUrl;
      anchor.click();
    }
  };

  const handleCopyFormattedMessage = () => {
    const payload = constructPayload();
    navigator.clipboard.writeText(payload.rawText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const categories = [
    "Internship Opportunity",
    "Technical Collaboration",
    "Consulting & Architecture",
    "General Inquiry"
  ];

  const payload = constructPayload();

  return (
    <section id="contact" className="py-24 border-t border-white/10 relative overflow-hidden text-left">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          {/* Section Tag Capsule */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-white/10 text-muted-foreground font-mono text-xs mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(32,178,166,0.8)]" />
            <span className="tracking-widest uppercase">● Collaboration &amp; Contact</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight leading-tight max-w-4xl">
            Let's Build Something <span className="text-primary">Intelligent.</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground font-body max-w-3xl leading-relaxed">
            Open for AI/ML engineering internships, forward-deployed engineering teams, and agentic AI systems development.
          </p>

          {/* Quick Metrics Strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-surface border border-white/10 text-xs font-mono">
              <span className="text-muted-foreground">Response Latency:</span>
              <span className="text-primary font-semibold">&lt; 12 Hours</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-surface border border-white/10 text-xs font-mono">
              <span className="text-muted-foreground">Timezone:</span>
              <span className="text-foreground">IST (UTC+5:30) · Global Remote Compatible</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-surface border border-white/10 text-xs font-mono">
              <span className="text-muted-foreground">Direct Recipient:</span>
              <span className="text-primary font-semibold">{emailRecipient}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Channels & Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Availability Status Card */}
            <div className="p-5 rounded-xl bg-surface border border-white/10 relative overflow-hidden shadow-lg">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2.5 text-xs font-mono text-primary font-medium tracking-wide">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span>● CURRENT STATUS: AVAILABLE FOR INTERNSHIPS &amp; ROLES</span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-body">
                Final-year B.Tech AI &amp; Data Science · Available for immediate internship / 2025-2026 roles
              </p>
              {/* Focus Domain Micro-Tags */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-surface-subtle text-[11px] font-mono text-muted-foreground border border-white/5">
                  Agentic Workflows
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-subtle text-[11px] font-mono text-muted-foreground border border-white/5">
                  MILP Optimization
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-subtle text-[11px] font-mono text-muted-foreground border border-white/5">
                  Dense RAG Pipelines
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-subtle text-[11px] font-mono text-muted-foreground border border-white/5">
                  Production Python
                </span>
              </div>
            </div>

            {/* Channel 1: Primary Email */}
            <div className="p-5 rounded-xl bg-surface border border-white/10 hover:border-white/20 transition-colors shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-subtle border border-white/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground tracking-wider uppercase block">
                      Direct Email Protocol
                    </span>
                    <a 
                      href={`mailto:${emailRecipient}`}
                      className="text-sm font-display font-semibold text-foreground hover:text-primary transition-colors break-all"
                    >
                      {emailRecipient}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-mono font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Send via Gmail</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-subtle hover:bg-white/10 border border-white/10 text-xs font-mono text-foreground transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-primary" />
                        <span className="text-primary font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${emailRecipient}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-subtle hover:bg-white/10 border border-white/10 text-muted-foreground hover:text-foreground text-xs font-mono transition-colors"
                  >
                    <span>Mail App</span>
                  </a>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">
                  SLA: &lt;12h
                </span>
              </div>
            </div>

            {/* Channel 2: GitHub */}
            <div className="p-5 rounded-xl bg-surface border border-white/10 hover:border-white/20 transition-colors shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-subtle border border-white/10 text-primary">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground tracking-wider uppercase block">
                      Codebase &amp; Architecture
                    </span>
                    <a
                      href={heroData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-display font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      github.com/Devanesh338
                    </a>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-subtle text-[11px] font-mono text-primary border border-white/10">
                  Active Commits
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Autonomous Systems / Multi-agent repos</span>
                <a
                  href={heroData.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Channel 3: LinkedIn */}
            <div className="p-5 rounded-xl bg-surface border border-white/10 hover:border-white/20 transition-colors shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-subtle border border-white/10 text-primary">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground tracking-wider uppercase block">
                      Professional Graph
                    </span>
                    <span className="text-sm font-display font-semibold text-foreground">
                      linkedin.com/in/devanesh-s-m/
                    </span>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Open to inMail &amp; Direct Connections</span>
                <a
                  href={heroData.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-subtle hover:bg-white/10 border border-white/10 text-foreground transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Channel 4: Resume Artifact Card */}
            <div className="p-5 rounded-xl bg-surface border border-white/10 hover:border-white/20 transition-colors shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-surface-subtle border border-white/10 text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground tracking-wider uppercase block">
                      Curriculum Vitae
                    </span>
                    <span className="text-sm font-display font-semibold text-foreground">
                      Devanesh_Resume_New.pdf
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Updated 2025 · Verified
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={heroData.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-primary text-primary-foreground font-display text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href={heroData.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-subtle hover:bg-white/10 border border-white/10 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Drive Mirror</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Inquiry & Dispatch Console (7 cols) */}
          <div className="lg:col-span-7" id="inquiry-terminal">
            <div className="rounded-xl bg-surface border border-white/10 overflow-hidden shadow-2xl">
              {/* Console Terminal Header */}
              <div className="px-5 py-3.5 bg-surface-subtle border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="ml-2 font-mono text-xs font-medium text-foreground tracking-wide flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    DISPATCH_GATEWAY // TO: {emailRecipient}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface border border-white/10 text-[11px] font-mono text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Form Body */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDispatch("gmail");
                }} 
                className="p-6 sm:p-8 space-y-6"
              >
                {/* Transmission Status Feedback Banner */}
                {transmitted && (
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 flex flex-col gap-3 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-display font-semibold text-foreground">
                          Transmission Packet Prepared for {emailRecipient}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Choose your preferred dispatch method below to finalize transmission, or copy the formatted text.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-primary/20">
                      <a
                        href={payload.gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-mono font-semibold hover:bg-primary/90 transition-all shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Gmail (Web)</span>
                      </a>
                      <a
                        href={payload.mailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-foreground text-xs font-mono hover:bg-white/10 transition-all"
                      >
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        <span>Open in Local Mail Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyFormattedMessage}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-muted-foreground hover:text-foreground text-xs font-mono transition-all cursor-pointer"
                      >
                        {copiedMessage ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-primary" />
                            <span className="text-primary font-semibold">Message Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Category Chips */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2.5">
                    01 // Select Inquiry Category
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setInquiryType(cat)}
                        className={`p-2.5 text-center rounded-lg border text-xs font-display font-medium transition-all cursor-pointer ${
                          inquiryType === cat
                            ? "border-primary bg-primary/15 text-primary shadow-sm"
                            : "bg-surface-subtle border-white/10 hover:border-white/20 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Two-Column Fields: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5"
                    >
                      02 // Sender Identity / Name *
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Alex Vance / Tech Lead"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors font-body"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-email"
                      className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5"
                    >
                      03 // Your Email Address *
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.vance@engineering-lab.ai"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors font-body"
                    />
                  </div>
                </div>

                {/* Organization / Team */}
                <div>
                  <label
                    htmlFor="sender-org"
                    className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5"
                  >
                    04 // Organization / Engineering Team
                  </label>
                  <input
                    id="sender-org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Autonomous Systems Core / AI Startup / University"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors font-body"
                  />
                </div>

                {/* Subject / Focus Header */}
                <div>
                  <label
                    htmlFor="inquiry-subject"
                    className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5"
                  >
                    05 // Subject / Focus Header *
                  </label>
                  <input
                    id="inquiry-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject: Forward-Deployed AI Engineering Internship (2025-2026)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors font-body"
                  />
                </div>

                {/* Message Payload */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="message-payload"
                      className="block text-xs font-mono text-muted-foreground uppercase tracking-wider"
                    >
                      06 // Message Payload / Specifications *
                    </label>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Destination: {emailRecipient}
                    </span>
                  </div>
                  <textarea
                    id="message-payload"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe system requirements, engineering role expectations, research scope, or project parameters..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors font-body"
                  />
                </div>

                {/* Action Transmit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDispatch("gmail")}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold text-sm tracking-wide transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
                    >
                      <span>Send with Gmail</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDispatch("mailto")}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-subtle hover:bg-white/10 border border-white/10 text-foreground font-display font-semibold text-sm tracking-wide transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span>Send via Mail App</span>
                      <Send className="w-4 h-4 text-primary" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                    <Lock className="w-3.5 h-3.5 text-primary" />
                    <span>Direct to {emailRecipient}</span>
                  </div>
                </div>
              </form>

              {/* Console Telemetry Status Footer */}
              <div className="px-6 py-3 bg-surface-subtle/60 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-muted-foreground gap-2">
                <span>SECURE_PIPE: TLSv1.3 / GMAIL_DISPATCH_ENABLED</span>
                <span>DESTINATION: {emailRecipient}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
