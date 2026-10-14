import React, { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Brain, Compass, BookOpen } from "lucide-react";
import { profileData } from "../data/profile";

export const About: React.FC = () => {
  const [tiltCardIndex, setTiltCardIndex] = useState<number | null>(null);
  const [tiltStyle, setTiltStyle] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max 4 degrees tilt
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setTiltCardIndex(index);
    setTiltStyle({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTiltCardIndex(null);
    setTiltStyle({ x: 0, y: 0 });
  };

  const cards = [
    {
      icon: GraduationCap,
      label: "Education",
      headline: "B.Tech CSE, Kalinga University",
      detail: "Enrolled in the 2024–2028 undergraduate program at Raipur, Chhattisgarh, building a strong core in computational mathematics, programming, and system principles.",
    },
    {
      icon: Brain,
      label: "Interests",
      headline: "Problem-Solving & Computer Science",
      detail: "Passionate about decomposing logic challenges, studying algorithmic efficiency, and analyzing how software bridges abstract theory to real-world impact.",
    },
    {
      icon: Compass,
      label: "Current Focus",
      headline: "Learning, Practice, & Building Projects",
      detail: "Actively engaging with foundational data structures, modern software tooling, writing clean modular code, and crafting interactive tools.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative bg-[#07090F] overflow-hidden"
      aria-label="About Ayush Kumar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-[#48E6FF] uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Profile & Orientation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk']">
            A little about me<span className="text-[#48E6FF]">.</span>
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Illustration & Orbital Elements */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-[360px] aspect-square rounded-3xl p-3 bg-gradient-to-b from-[#4388FF]/20 via-[#0B1220] to-[#07090F] border border-slate-800 shadow-2xl">
              
              {/* Decorative Subtle Orbital Ring */}
              <div className="absolute -inset-4 rounded-full border border-cyan-400/15 animate-[spin_40s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-7 rounded-full border border-blue-500/10 pointer-events-none" />

              {/* Portrait Container */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#0B1220]">
                <img
                  src="/src/assets/images/abstract_coder_portrait_1791959542982.jpg"
                  alt="Abstract digital coder illustration representing Ayush Kumar"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090F]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Label: "Always Learning" */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0B1220] border border-cyan-400/40 shadow-lg shadow-cyan-500/10 flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#48E6FF]" />
                <span className="text-xs font-mono font-medium text-slate-200">
                  Always Learning
                </span>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-slate-400 font-mono">
              Raipur, Chhattisgarh · India
            </div>
          </motion.div>

          {/* Right Column: Narrative Introduction & 3 Tilt Cards */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Primary Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-normal"
            >
              I'm <strong className="text-white font-semibold">Ayush Kumar</strong>, a B.Tech Computer Science and Engineering student at Kalinga University, Raipur. I'm interested in problem-solving, understanding how technology works, and continuously improving my technical abilities. I'm building my foundation in computer science and exploring opportunities to turn ideas into useful digital solutions.
            </motion.p>

            {/* Three Information Cards with 3D Tilt on Hover */}
            <div className="space-y-4">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                const isTilted = tiltCardIndex === idx;

                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseMove={(e) => handleMouseMove(e, idx)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      transform: isTilted
                        ? `perspective(800px) rotateX(${tiltStyle.x}deg) rotateY(${tiltStyle.y}deg)`
                        : "perspective(800px) rotateX(0deg) rotateY(0deg)",
                      transition: isTilted
                        ? "transform 0.08s ease-out"
                        : "transform 0.35s ease-out",
                    }}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0B1220]/70 border border-slate-800/80 hover:border-cyan-400/30 backdrop-blur-md transition-colors shadow-lg shadow-black/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-[#4388FF]/10 border border-cyan-400/20 text-[#48E6FF] shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                            {card.label}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight font-['Space_Grotesk'] mb-1">
                          {card.headline}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {card.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
