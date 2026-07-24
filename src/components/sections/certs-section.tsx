'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export function CertsSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        <Award className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
        <span>Certifications</span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {portfolioData.certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-sans">
                  {cert.title}
                </h4>
                <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  Issuer: {cert.issuer}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
              Verified
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
