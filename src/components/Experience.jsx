import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 bg-neutral-100/50 dark:bg-neutral-900/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Professional track record building software, delivering client projects, and continuous learning.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-neutral-200 dark:before:bg-neutral-800">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex flex-col md:flex-row items-start md:items-center group"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border-4 border-indigo-500 z-10 flex items-center justify-center shadow-md">
                <Briefcase className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
              </div>

              {/* Content Card */}
              <div className={`w-full pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} md:w-1/2`}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-indigo-400 dark:hover:border-indigo-500/70 transition-colors shadow-sm"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/70 px-2.5 py-1 rounded-full mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </span>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {item.company}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1 mb-3 md:justify-start">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Card with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-neutral-200/80 dark:border-neutral-800/80"
        >
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 flex items-start gap-4 shadow-sm"
          >
            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Education
              </span>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white mt-1">
                {education[0].degree}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                {education[0].institution} • <span className="text-neutral-500 dark:text-neutral-400">{education[0].period}</span>
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                {education[0].details}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
