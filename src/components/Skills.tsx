import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Wrench,
  Binary,
  Code,
  Coffee,
  Boxes,
  Cpu,
  Layers,
  Target,
  Network,
  CheckCircle2,
  GitBranch,
  Terminal,
  Monitor,
  FileCode,
  Palette,
  Sparkles,
  Info,
} from "lucide-react";
import { skillCategoriesData, SkillItem } from "../data/skills";

const iconMap: Record<string, React.ElementType> = {
  Binary,
  Code,
  Coffee,
  Boxes,
  Cpu,
  Layers,
  Target,
  Network,
  CheckCircle2,
  GitBranch,
  Terminal,
  Monitor,
  FileCode,
  Palette,
  Sparkles,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Categories" },
    ...skillCategoriesData.map((c) => ({ id: c.id, name: c.name })),
  ];

  const displayedSkills: SkillItem[] =
    selectedCategory === "all"
      ? skillCategoriesData.flatMap((cat) => cat.skills)
      : skillCategoriesData.find((cat) => cat.id === selectedCategory)?.skills || [];

  return (
    <section
      id="skills"
      className="py-24 relative bg-[#07090F] border-t border-slate-900/80"
      aria-label="Technical Skills & Problem Solving Foundations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-[#48E6FF] uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>Curriculum & Applied Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk'] mb-4">
            My technical toolkit<span className="text-[#48E6FF]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A transparent overview of the core technologies, theoretical computer science concepts, and practical problem-solving tools I am actively developing during my B.Tech CSE degree at Kalinga University.
          </p>
        </motion.div>

        {/* Category Tabs (Functional Segmented Control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#4388FF] text-white shadow-md shadow-blue-500/20 border border-cyan-400/40"
                  : "bg-[#0B1220] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Code;

              return (
                <motion.div
                  key={`${skill.name}-${skill.category}`}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.05, 0.3),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group p-5 rounded-2xl bg-[#0B1220]/75 border border-slate-800/80 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#48E6FF] group-hover:scale-105 group-hover:border-cyan-400/30 transition-all duration-200">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    {/* Unboxed Status Text with Typographic Dot */}
                    <div className="text-[11px] font-mono text-cyan-400/90 flex items-center gap-1.5 text-right">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{skill.statusText}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk'] mb-1">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {skill.focusArea}
                  </p>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{skill.category}</span>
                    <span className="text-slate-400">Foundational · Active</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Honest Academic Note */}
        <div className="mt-10 p-4 rounded-xl bg-[#0B1220]/50 border border-slate-800/80 flex items-start sm:items-center gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-slate-300">Continuous Growth:</strong> This toolkit reflects confirmed academic and personal problem-solving foundations. No inflated mastery percentages are claimed. It will expand as coursework progresses through 2028.
          </p>
        </div>

      </div>
    </section>
  );
};
