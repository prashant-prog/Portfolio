'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <Briefcase className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          <span>Work Experience</span>
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-10">
          {portfolioData.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-400 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-950 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-colors" />

              <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 px-2.5 py-1 rounded-md w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-sans">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {exp.skillsUsed && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
