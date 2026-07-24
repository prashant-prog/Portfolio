'use client';

import { useState } from 'react';
import { Network, Server, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { ArchitectureNode } from '@/types/portfolio';

interface ArchitectureDiagramProps {
  nodes?: ArchitectureNode[];
  dataFlow?: string[];
}

export function ArchitectureDiagram({ nodes, dataFlow }: ArchitectureDiagramProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
          <Network className="w-4 h-4 text-emerald-500" />
          <span>Backend System Architecture Diagram</span>
        </h3>
        <span className="text-xs font-mono text-neutral-400">Interactive Blueprint</span>
      </div>

      {/* Nodes Flowchart Box */}
      <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-100 overflow-x-auto shadow-inner">
        <div className="min-w-[640px] flex items-center justify-between gap-3">
          {nodes.map((node, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                onClick={() => setActiveNode(activeNode === i ? null : i)}
                className={`cursor-pointer p-4 rounded-lg border transition-all duration-200 w-44 flex flex-col justify-between h-28 ${
                  activeNode === i
                    ? 'border-emerald-500 bg-neutral-800 ring-2 ring-emerald-500/30'
                    : 'border-neutral-700 bg-neutral-800/80 hover:border-neutral-500'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Layer 0{i + 1}</span>
                  <Server className="w-3.5 h-3.5 text-neutral-400" />
                </div>

                <div>
                  <div className="text-xs font-bold text-neutral-100 font-sans truncate">
                    {node.title}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate mt-0.5">
                    {node.role}
                  </div>
                </div>

                <div className="inline-block w-fit px-1.5 py-0.5 rounded text-[10px] font-mono bg-neutral-900 text-emerald-400 border border-neutral-700">
                  {node.tech}
                </div>
              </div>

              {i < nodes.length - 1 && (
                <div className="flex items-center justify-center text-neutral-600">
                  <ArrowRight className="w-4 h-4 text-neutral-500 shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step-by-Step Data Pipeline execution flow */}
      {dataFlow && (
        <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-3">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Execution & Data Lifecycle Flow</span>
          </h4>
          <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans">
            {dataFlow.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2 rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-mono text-xs text-neutral-800 dark:text-neutral-200">{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
