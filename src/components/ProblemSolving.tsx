import React, { useState } from "react";
import { motion } from "motion/react";
import { Lightbulb, CheckCircle2, ArrowRight, GitCommit, Search, Split, Compass, CheckSquare, RefreshCw } from "lucide-react";

interface StepNode {
  number: string;
  title: string;
  summary: string;
  actions: string[];
  icon: React.ElementType;
}

const steps: StepNode[] = [
  {
    number: "01",
    title: "Understand the Problem",
    summary: "Carefully analyze requirements, test inputs, boundary constraints, and implicit assumptions before writing a single line of code.",
    actions: [
      "Identify input ranges, types, and edge cases (null, negative, duplicates)",
      "Clarify the exact expected output format and invariants",
      "Restate the problem in plain mathematical or logical terms",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Break It Into Smaller Parts",
    summary: "Decompose a daunting high-level challenge into isolated sub-problems that can be solved and verified independently.",
    actions: [
      "Separate data parsing, business logic, and state presentation",
      "Map state transitions and decision branches",
      "Identify reusable sub-routines or helper functions",
    ],
    icon: Split,
  },
  {
    number: "03",
    title: "Explore Possible Solutions",
    summary: "Evaluate trade-offs between brute-force approaches, optimal algorithmic paradigms, time complexity (Big-O), and space limits.",
    actions: [
      "Compare greedy, divide-and-conquer, or two-pointer patterns",
      "Calculate theoretical time and space complexity",
      "Dry-run logic with pencil and paper against sample cases",
    ],
    icon: Compass,
  },
  {
    number: "04",
    title: "Implement and Test",
    summary: "Write clean, readable, modular code followed by rigorous testing against both normal and adversarial inputs.",
    actions: [
      "Write clean idiomatic code with self-explanatory variable naming",
      "Run unit tests covering minimum, maximum, and extreme boundaries",
      "Step through using debuggers to verify variable state",
    ],
    icon: CheckSquare,
  },
  {
    number: "05",
    title: "Learn and Improve",
    summary: "Reflect on bottlenecks, review alternative solutions, and integrate newly discovered insights into future problem solving.",
    actions: [
      "Identify memory overhead and redundant operations",
      "Document lessons learned and pattern variations",
      "Synthesize feedback and iterate for maintainability",
    ],
    icon: RefreshCw,
  },
];

export const ProblemSolving: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = steps[activeStepIndex];

  return (
    <section
      id="problem-solving"
      className="py-24 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Problem-Solving Methodology"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-[#48E6FF] uppercase">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Core Philosophy & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk'] mb-4 leading-tight">
            Every problem is an opportunity to think differently<span className="text-[#48E6FF]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Problem-solving is my primary interest. Rather than rushing into code, I follow a disciplined, five-step systematic approach to break down computational complexity.
          </p>
        </motion.div>

        {/* Step Nodes Process Ribbon (Desktop Horizontal / Mobile Vertical) */}
        <div className="relative mb-12">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-slate-800 pointer-events-none">
            {/* Animated Cyan Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-[#4388FF] to-[#48E6FF]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const Icon = step.icon;

              return (
                <motion.button
                  key={step.number}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#0B1220] border-2 border-[#48E6FF] shadow-xl shadow-cyan-500/10 -translate-y-1"
                      : "bg-[#0B1220]/60 border border-slate-800/80 hover:border-slate-700 hover:bg-[#0B1220]"
                  }`}
                >
                  <div>
                    {/* Node Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                          isActive
                            ? "bg-[#48E6FF] text-slate-950 shadow-md shadow-cyan-400/30"
                            : "bg-slate-900 text-slate-400 border border-slate-800"
                        }`}
                      >
                        {step.number}
                      </div>

                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isActive ? "text-[#48E6FF]" : "text-slate-500"
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-sm sm:text-base font-bold font-['Space_Grotesk'] leading-snug mb-2 ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <span
                    className={`text-[11px] font-mono mt-3 inline-flex items-center gap-1 ${
                      isActive ? "text-[#48E6FF]" : "text-slate-500"
                    }`}
                  >
                    {isActive ? "Active View" : "Click to Inspect"}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Detailed Breakdown Card for Active Step */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B1220] to-[#07090F] border border-cyan-500/30 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[#48E6FF]">
                  Step {currentStep.number} of 05
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-mono text-slate-400 uppercase">
                  Procedural Thought Flow
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk'] mb-3">
                {currentStep.title}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {currentStep.summary}
              </p>

              {/* Actionable Checkpoints */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Key Practices at this Phase:
                </span>
                {currentStep.actions.map((act, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#48E6FF] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mindset Quote Box */}
            <div className="md:w-72 shrink-0 p-5 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 block mb-2 uppercase">
                  Analytical Invariant
                </span>
                <p className="italic text-slate-300 leading-relaxed">
                  "Writing code is only 20% of engineering; 80% is understanding the state space and framing the right questions."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] font-mono text-slate-500">
                Ayush Kumar · Problem Solving Focus
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
