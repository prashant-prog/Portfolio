'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Cloud } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export function AchievementSection() {
  const { title, organizer, description, rank, highlights } = portfolioData.achievement;

  return (
    <section className="py-12 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Engineering Achievement</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4 }}
          className="relative p-6 sm:p-8 rounded-xl border border-amber-500/30 dark:border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent dark:bg-neutral-900/60 overflow-hidden space-y-4"
        >
          {/* Top Rank Badge */}
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{rank} Winner</span>
            </div>
            <Cloud className="w-6 h-6 text-sky-500 opacity-80" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 font-sans">
              {title}
            </h3>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
              Organized by {organizer}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            {description}
          </p>

          {highlights && (
            <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800/80 space-y-1.5">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
