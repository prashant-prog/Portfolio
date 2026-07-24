'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons';
import { portfolioData } from '@/data/portfolioData';
import { CopyButton } from '../copy-button';

export function ContactSection() {
  const { email, phone, linkedin, github } = portfolioData.personal;

  return (
    <section id="contact" className="py-12 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          <MessageSquare className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          <span>Get In Touch</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-6"
        >
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              Let's connect & build reliable systems
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-sans">
              I am actively looking for Backend Software Engineer roles, internships, and engineering opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-neutral-400">Email</div>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:underline truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>
              <CopyButton textToCopy={email} />
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/60 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-neutral-400">Phone</div>
                  <a
                    href={`tel:${phone}`}
                    className="text-xs sm:text-sm font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:underline truncate block"
                  >
                    {phone}
                  </a>
                </div>
              </div>
              <CopyButton textToCopy={phone} />
            </div>
          </div>

          {/* Social Links Row */}
          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <a
              href={`mailto:${email}?subject=Backend%20Engineering%20Opportunity`}
              className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Send direct email</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
