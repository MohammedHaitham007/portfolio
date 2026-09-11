import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, Server } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';

export const Projects = () => {
  const { projects } = portfolioData;
  const project = projects[0];

  if (!project) return null;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 tracking-tight">
            Backend Engineering Showcase
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            An in-depth look at a featured backend application engineered with clean architecture and modern cloud deployment.
          </p>
        </motion.div>

        {/* Featured Project Showcase Card with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xl shadow-neutral-500/5 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Project Media (5 cols) */}
            <div className="lg:col-span-5 relative aspect-video lg:aspect-auto overflow-hidden bg-neutral-900 min-h-[260px] lg:min-h-full group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
              
              {/* Category & Status Overlay Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </span>
                <span className="bg-emerald-500/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
                  Live on Railway
                </span>
              </div>
            </div>

            {/* Project Details (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                  <Server className="w-4 h-4" />
                  <span>Production Web Application</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                {project.features && (
                  <div className="mb-6 space-y-2.5 bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                    <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider block mb-1">
                      Key Capabilities & Architecture:
                    </span>
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-indigo-500/20 cursor-pointer"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
