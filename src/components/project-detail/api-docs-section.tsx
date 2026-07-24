'use client';

import { useState } from 'react';
import { Terminal, Code, Play } from 'lucide-react';
import { ApiEndpoint } from '@/types/portfolio';
import { CopyButton } from '../copy-button';

interface ApiDocsSectionProps {
  endpoints?: ApiEndpoint[];
}

export function ApiDocsSection({ endpoints }: ApiDocsSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  if (!endpoints || endpoints.length === 0) return null;

  const current = endpoints[selectedIdx];

  const methodColors: Record<string, string> = {
    GET: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    POST: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30',
    PUT: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    DELETE: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
    PATCH: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-sky-500" />
          <span>API Documentation & cURL Playground</span>
        </h3>
        <span className="text-xs font-mono text-neutral-400">OpenAPI Spec</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-4 sm:p-6">
        {/* Left endpoint selector list */}
        <div className="lg:col-span-5 space-y-2 border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800 pb-4 lg:pb-0 lg:pr-6">
          <div className="text-xs font-mono text-neutral-400 mb-3 uppercase tracking-wider">
            Endpoints ({endpoints.length})
          </div>

          <div className="space-y-2">
            {endpoints.map((ep, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedIdx === idx
                    ? 'border-neutral-400 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800/80 shadow-xs'
                    : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      methodColors[ep.method] || 'bg-neutral-500/10 text-neutral-400 border-neutral-500/30'
                    }`}
                  >
                    {ep.method}
                  </span>
                  <span className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                    {ep.path}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 font-sans">
                  {ep.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Right detail view with Request & Response JSON */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded text-xs font-mono font-bold border ${
                  methodColors[current.method]
                }`}
              >
                {current.method}
              </span>
              <span className="text-sm font-mono font-bold text-neutral-900 dark:text-neutral-100">
                {current.path}
              </span>
            </div>
            <CopyButton textToCopy={current.requestCurl} label="Copy cURL" />
          </div>

          <p className="text-xs text-neutral-600 dark:text-neutral-300 font-sans">
            {current.description}
          </p>

          {/* cURL Block */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
              <Play className="w-3.5 h-3.5 text-emerald-500" />
              <span>cURL Request</span>
            </div>
            <pre className="p-3 rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-200 text-xs font-mono overflow-x-auto whitespace-pre-wrap">
              {current.requestCurl}
            </pre>
          </div>

          {/* JSON Response Block */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-sky-500" />
                <span>Response (200 OK - JSON)</span>
              </div>
              <CopyButton textToCopy={current.responseJson} label="Copy JSON" />
            </div>
            <pre className="p-3 rounded-lg border border-neutral-700 bg-neutral-950 text-emerald-400 text-xs font-mono overflow-x-auto whitespace-pre-wrap max-h-64">
              {current.responseJson}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
