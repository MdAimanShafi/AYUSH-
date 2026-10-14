import React, { useState } from "react";
import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github, ArrowRight, Sparkles, Layers } from "lucide-react";
import { projectsData, ProjectItem } from "../data/projects";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [showDrafts, setShowDrafts] = useState<boolean>(false);

  // Filter published projects vs drafts
  const visibleProjects = projectsData.filter((p) => (showDrafts ? true : !p.isDraft));

  return (
    <section
      id="projects"
      className="py-24 relative bg-[#07090F] border-t border-slate-900"
      aria-label="Projects and Interactive Computational Tools"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-[#48E6FF] uppercase">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Works & Experiments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-['Space_Grotesk'] mb-2">
              Things I've worked on<span className="text-[#48E6FF]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Selected projects, experiments, and ideas.
            </p>
          </motion.div>

          {/* Transparent Drafts Toggle for Academic Growth */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDrafts(!showDrafts)}
              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-800 bg-[#0B1220] text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {showDrafts ? "Hide Planned Slots" : "Show Planned Slots"}
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveProject(project)}
                className={`group relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${
                  project.isDraft
                    ? "bg-[#0B1220]/40 border border-dashed border-slate-800 opacity-70"
                    : "bg-[#0B1220]/75 border border-slate-800/80 hover:border-cyan-400/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10"
                }`}
              >
                {/* Pointer Light Reflection Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#48E6FF]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="text-cyan-400 font-medium">
                      {project.category}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-['Space_Grotesk'] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights or Problem Solved */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-900 mb-6 text-xs text-slate-300">
                    <span className="text-slate-400 font-mono text-[11px] block mb-1">
                      Problem Solved:
                    </span>
                    <span className="line-clamp-2">{project.problemSolved}</span>
                  </div>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Interaction */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-medium text-cyan-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
                      {project.hasInteractiveDemo ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Interactive Demo Available</span>
                        </>
                      ) : (
                        <span>View Project Details</span>
                      )}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-[#4388FF] text-slate-300 group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
