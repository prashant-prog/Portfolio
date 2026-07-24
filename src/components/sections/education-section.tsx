'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export function EducationSection() {
  const { degree, institution, status, expectedGraduation } = portfolioData.education;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        <GraduationCap className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
        <span>Education</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-3"
      >
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
          {degree}
        </h3>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-neutral-400" />
            <span>{institution}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            <span>
              {status}: <strong className="text-neutral-800 dark:text-neutral-200">{expectedGraduation}</strong>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
