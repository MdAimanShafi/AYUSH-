import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, Play, RotateCcw, Check, Sparkles } from "lucide-react";
import { ProjectItem } from "../data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scrolling when modal is open
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Interactive Sorting Demo State
  const [array, setArray] = useState<number[]>([35, 12, 68, 45, 90, 24, 73, 50]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [sortComplete, setSortComplete] = useState<boolean>(false);

  // Computational Logic Demo State
  const [testNumber, setTestNumber] = useState<number>(42);
  const [primeFactors, setPrimeFactors] = useState<number[]>([]);
  const [binaryRep, setBinaryRep] = useState<string>("");

  useEffect(() => {
    if (!project) return;
    if (project.interactiveDemoType === "logic") {
      calculateLogic(testNumber);
    }
  }, [project, testNumber]);

  const resetArray = () => {
    setArray([35, 12, 68, 45, 90, 24, 73, 50].map(() => Math.floor(Math.random() * 85) + 10));
    setComparing([]);
    setIsSorting(false);
    setSortComplete(false);
  };

  const runBubbleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    setSortComplete(false);
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setComparing([j, j + 1]);
        await new Promise((r) => setTimeout(r, 220));

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await new Promise((r) => setTimeout(r, 180));
        }
      }
    }

    setComparing([]);
    setIsSorting(false);
    setSortComplete(true);
  };

  const calculateLogic = (num: number) => {
    const n = Math.abs(Math.floor(num));
    setBinaryRep(n.toString(2).padStart(8, "0"));

    // Prime factors
    const factors: number[] = [];
    let d = 2;
    let temp = n;
    while (temp >= 2) {
      if (temp % d === 0) {
        factors.push(d);
        temp /= d;
      } else {
        d++;
        if (d * d > temp) {
          if (temp > 1) factors.push(temp);
          break;
        }
      }
    }
    setPrimeFactors(factors);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B1220] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 z-10 custom-scrollbar"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">{project.status}</span>
              </div>
              <h2
                id="modal-title"
                className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']"
              >
                {project.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Core Content Body */}
          <div className="space-y-6 text-sm text-slate-300">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Overview
              </h3>
              <p className="leading-relaxed">{project.description}</p>
            </div>

            {/* Problem & Approach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  The Problem Solved
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                  Approach & Implementation
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Live Interactive In-Modal Experiment if Supported */}
            {project.hasInteractiveDemo && project.interactiveDemoType === "sorting" && (
              <div className="p-5 rounded-2xl bg-[#07090F] border border-cyan-500/20 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                      Interactive Sorting Sandbox
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={resetArray}
                      disabled={isSorting}
                      className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer disabled:opacity-50"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Shuffle</span>
                    </button>
                    <button
                      onClick={runBubbleSort}
                      disabled={isSorting || sortComplete}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-[#4388FF] text-white hover:bg-blue-600 flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      {sortComplete ? <Check className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      <span>{sortComplete ? "Sorted!" : isSorting ? "Sorting..." : "Run Step"}</span>
                    </button>
                  </div>
                </div>

                {/* Array Bar Visualization */}
                <div className="h-32 flex items-end justify-center gap-2 pt-4 px-2 bg-slate-950/60 rounded-xl border border-slate-900">
                  {array.map((val, idx) => {
                    const isComp = comparing.includes(idx);
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-[10px] font-mono text-slate-500">{val}</span>
                        <div
                          style={{ height: `${(val / 100) * 80 + 10}px` }}
                          className={`w-full rounded-t-md transition-all duration-150 ${
                            isComp
                              ? "bg-amber-400 shadow-md shadow-amber-400/30"
                              : sortComplete
                              ? "bg-emerald-400"
                              : "bg-[#48E6FF]"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
                <p className="text-[11px] text-slate-500 text-center font-mono">
                  Visualizing comparison passes and pairwise element swaps in real time.
                </p>
              </div>
            )}

            {project.hasInteractiveDemo && project.interactiveDemoType === "logic" && (
              <div className="p-5 rounded-2xl bg-[#07090F] border border-cyan-500/20 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                      Live Number Theory Inspector
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-slate-400">Input Integer:</label>
                    <input
                      type="number"
                      value={testNumber}
                      onChange={(e) => setTestNumber(Number(e.target.value) || 0)}
                      className="w-20 px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Binary Bitwise Form (8-bit):</span>
                    <span className="text-cyan-400 text-sm font-bold tracking-widest">
                      {binaryRep}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Prime Factors Decomposition:</span>
                    <span className="text-emerald-400 text-sm font-bold">
                      {primeFactors.length > 0 ? primeFactors.join(" × ") : "None (≤ 1)"}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <a
                href={project.githubUrl || "https://github.com"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
