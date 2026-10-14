import React from "react";
import { motion } from "motion/react";
import { Scene3D } from "./Scene3D";
import { ArrowDown, Code2, Sparkles, ChevronRight } from "lucide-react";
import { profileData } from "../data/profile";

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headlineWords = profileData.headline.split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-[92svh] lg:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#07090F]"
      aria-label="Hero Introduction"
    >
      {/* 200ms Ambient Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4388FF]/10 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-[#48E6FF]/8 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 400ms: Introductory Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B1220] border border-cyan-500/20 text-[11px] sm:text-xs font-mono font-medium tracking-wider text-[#48E6FF] uppercase">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.role}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {profileData.education.university}
              </span>
            </motion.div>

            {/* 650ms: Main Headline with Staggered Word Animation */}
            <div className="overflow-hidden mb-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                {headlineWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.65 + idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-2.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Second Line */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient-cyan mb-5 tracking-tight font-['Space_Grotesk']"
            >
              {profileData.tagline}
            </motion.p>

            {/* 1,100ms: Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              {profileData.bio}
            </motion.p>

            {/* 1,350ms: Both CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4388FF] to-[#2563EB] hover:from-[#3B82F6] hover:to-[#1D4ED8] rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-98 cursor-pointer border border-cyan-400/30"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-[#0B1220]/80 hover:bg-[#1E293B] hover:text-white rounded-xl border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>Let's Connect</span>
                <Sparkles className="w-4 h-4 text-[#48E6FF]" />
              </button>
            </motion.div>

            {/* Trust Context Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400"
            >
              <div>
                <span className="text-slate-500">Degree:</span>{" "}
                <span className="text-slate-300 font-medium">B.Tech CSE (2024–2028)</span>
              </div>
              <div>
                <span className="text-slate-500">University:</span>{" "}
                <span className="text-slate-300 font-medium">Kalinga University, Raipur</span>
              </div>
              <div>
                <span className="text-slate-500">Interest:</span>{" "}
                <span className="text-cyan-400 font-medium">Problem-Solving</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Universe (Reveals from 500ms onward) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-[400px] sm:h-[480px] lg:h-[580px] w-full flex items-center justify-center"
          >
            <Scene3D className="w-full h-full" />
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <motion.button
        onClick={() => handleScrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-[#48E6FF] transition-colors cursor-pointer group"
        aria-label="Scroll to About Section"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
};
