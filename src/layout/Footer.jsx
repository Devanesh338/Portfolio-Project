import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight whitespace-nowrap flex-shrink-0 pr-2 hover:text-primary transition-colors"
            >
              Devanesh<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building intelligent applications with AI, Machine Learning, Generative AI and Data.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Devanesh338"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/devanesh-s-m/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:devaneshmanikandan@gmail.com"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Devanesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
