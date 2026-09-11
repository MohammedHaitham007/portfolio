import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { personalInfo, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Floating Decorative Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20],
          y: [-10, 15, -10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 animate-pulse" />
          <span>{personalInfo.statusBadge}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-6"
        >
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300 bg-clip-text text-transparent">{personalInfo.name}</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-700 dark:text-neutral-300 block mt-3">
            {personalInfo.role}
          </span>
        </motion.h1>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-9 leading-relaxed font-normal"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 text-neutral-900 dark:text-white font-medium text-sm transition-colors shadow-sm cursor-pointer"
          >
            <Mail className="w-4 h-4 text-indigo-500" />
            <span>Contact Me</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium text-sm transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Quick Stats Grid with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 rounded-2xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
