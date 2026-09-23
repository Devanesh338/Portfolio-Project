import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.png";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-primary/20 text-primary mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in animation-delay-100">
              Hi, I'm <span className="text-primary">Devanesh</span>
              <br />
              <span className="text-4xl md:text-5xl text-foreground font-serif italic font-normal">
                AI & Data Science Engineer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              AI and Data Science student with hands-on experience in Generative AI, multi-agent systems, and RAG pipelines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in animation-delay-300">
              <a href="#projects">
                <AnimatedBorderButton className="w-full sm:w-auto flex items-center gap-2">
                  View Projects <ArrowRight size={18} />
                </AnimatedBorderButton>
              </a>

              <a 
                href="https://drive.google.com/uc?export=download&id=1GnotLjGxGvwW9IOVeNmbh-6Md8b2zJCr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary border border-primary/30 bg-surface/50 text-foreground hover:bg-surface shadow-lg px-6 py-3 text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-12 animate-fade-in animation-delay-400">
              <a
                href="https://github.com/Devanesh338"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/devanesh-s-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:devaneshmanikandan@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Email Devanesh"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative animate-fade-in animation-delay-300">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-spin-slow opacity-20 blur-xl" />
              <div className="absolute inset-2 bg-background rounded-full" />
              <img
                src={profileImg}
                alt="Devanesh"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-surface shadow-2xl"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x400?text=Profile+Photo";
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-2xl border border-primary/20 shadow-xl animate-float">
                <p className="text-3xl font-bold text-primary">AI</p>
                <p className="text-sm text-muted-foreground font-medium">
                  & Data Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
