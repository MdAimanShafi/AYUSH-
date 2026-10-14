import React from "react";
import { ArrowUp, Heart, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profileData } from "../data/profile";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Problem Solving", href: "#problem-solving" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#05070C] border-t border-slate-900 py-14 text-sm text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-900">
          <div>
            <div className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk'] mb-1">
              AYUSH KUMAR
            </div>
            <p className="text-xs text-slate-400">
              Designed with curiosity and built with code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              aria-label="Ayush Kumar LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              aria-label="Ayush Kumar Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
              aria-label="Ayush Kumar Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Ayush Kumar · B.Tech CSE (2024–2028), Kalinga University, Raipur.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
            <span>Built with React, TypeScript & Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
