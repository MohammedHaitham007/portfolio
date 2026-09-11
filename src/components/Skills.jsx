import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? skills.items
    : skills.items.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-neutral-100/50 dark:bg-neutral-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Skills & Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 tracking-tight">
            Technologies I master & work with
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            From modern server-side architectures to robust APIs and relational database schemas.
          </p>
        </motion.div>

        {/* Filter Categories Tabs with Motion */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skills.categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/70 dark:hover:bg-neutral-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.15 } }}
                className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/70 shadow-sm hover:shadow-md transition-colors group cursor-default"
              >
                <div>
                  <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                    {skill.category}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/70 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span>{skill.level}</span>
                  <span className="font-mono text-[11px] bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-700 dark:text-neutral-300">
                    {skill.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
