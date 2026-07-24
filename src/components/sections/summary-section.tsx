'use client';

import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export function SummarySection() {
  return (
    <section id="summary" className="py-12 border-b border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <UserCheck className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          <span>Professional Summary</span>
        </div>

        <div className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 shadow-xs">
          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {portfolioData.personal.bioSummary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              # api-development
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              # database-design
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              # backend-development
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              # linux
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
