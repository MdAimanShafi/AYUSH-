import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, ExternalLink, Milestone, CheckCircle2 } from "lucide-react";
import { journeyData } from "../data/journey";

export const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-24 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Education and Learning Journey Timeline"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-[#48E6FF] uppercase">
            <Milestone className="w-3.5 h-3.5" />
            <span>Academic Pathway & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk'] mb-3">
            My learning journey<span className="text-[#48E6FF]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A chronological timeline of my educational milestones, coursework, and focused development in computer science.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-800 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-[#48E6FF] via-[#4388FF] to-transparent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07090F] border-2 border-[#48E6FF] flex items-center justify-center z-10 shadow-lg shadow-cyan-500/20">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#48E6FF]" />
                  </div>

                  {/* Spacer for Alternate Desktop Placement */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    } w-full`}
                  >
                    <div className="p-6 rounded-3xl bg-[#0B1220]/80 border border-slate-800 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 shadow-xl shadow-black/30">
                      
                      {/* Badge / Year */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60">
                          {item.year}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk'] mb-1">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-slate-300 mb-3 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#4388FF]" />
                        <span>{item.institution}</span>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#48E6FF] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Verified Link if Present */}
                      {item.link && (
                        <div className="pt-3 border-t border-slate-800/80">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <span>{item.linkText || "View Verification"}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
