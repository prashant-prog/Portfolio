'use client';

import { motion } from 'framer-motion';
import { Code2, Terminal, Database, Server, Wrench, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 className="w-4 h-4 text-emerald-500" />,
  Backend: <Server className="w-4 h-4 text-sky-500" />,
  Databases: <Database className="w-4 h-4 text-amber-500" />,
  'Operating Systems': <Terminal className="w-4 h-4 text-indigo-500" />,
  'Developer Tools': <Wrench className="w-4 h-4 text-rose-500" />,
  'Core CS': <BookOpen className="w-4 h-4 text-teal-500" />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            <Code2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <span>Technical Skills</span>
          </div>
          <span className="text-xs font-mono text-neutral-400">6 Core Categories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-neutral-100 dark:border-neutral-800/80">
                {categoryIcons[category.title] || <Code2 className="w-4 h-4 text-neutral-400" />}
                <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-mono">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
