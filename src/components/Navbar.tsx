import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profile";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Problem Solving", href: "#problem-solving" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section intersection detection for active link indicator
      const sections = ["hero", "about", "skills", "projects", "problem-solving", "journey", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        scrolled
          ? "bg-[#07090F]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between gap-8"
          aria-label="Main Navigation"
        >
          {/* Zone 1: Clean Single Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-white font-bold tracking-tight text-lg sm:text-xl font-['Space_Grotesk']"
          >
            <span className="text-[#48E6FF] font-mono">&gt;</span>
            <span className="tracking-wider uppercase text-slate-100 group-hover:text-[#48E6FF] transition-colors">
              {profileData.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 group ${
                    isActive ? "text-[#48E6FF]" : "hover:text-white"
                  }`}
                >
                  {item.label}

                  {/* Animated Left-to-Right Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#48E6FF] transition-all duration-300 ease-out ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Zone 3: Primary Highlighted Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#4388FF] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#2563EB] rounded-lg shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-250 active:scale-98 whitespace-nowrap shrink-0 border border-cyan-400/30"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[#48E6FF] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#07090F]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3 pt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-[#48E6FF] bg-slate-800/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#4388FF] to-[#3B82F6] rounded-lg shadow-md"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
