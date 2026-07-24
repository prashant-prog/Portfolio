'use client';

import { Image as ImageIcon, Terminal, CheckCircle2 } from 'lucide-react';

interface ProjectGalleryProps {
  projectTitle: string;
}

export function ProjectGallery({ projectTitle }: ProjectGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-rose-500" />
          <span>System Outputs & Live Terminal Gallery</span>
        </h3>
        <span className="text-xs font-mono text-neutral-400">Visual Evidence</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Terminal Live Output Card */}
        <div className="p-4 rounded-xl border border-neutral-700 bg-neutral-950 text-neutral-200 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-neutral-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>pytest --verbose</span>
            </div>
            <span className="text-[10px] text-emerald-400">100% PASSED</span>
          </div>
          <div className="space-y-1.5 text-[11px] text-neutral-300">
            <p className="text-emerald-400">✓ tests/test_auth.py::test_jwt_login_success PASSED</p>
            <p className="text-emerald-400">✓ tests/test_crud.py::test_create_resource PASSED</p>
            <p className="text-emerald-400">✓ tests/test_crud.py::test_pydantic_validation PASSED</p>
            <p className="text-emerald-400">✓ tests/test_rate_limit.py::test_redis_throttle PASSED</p>
            <p className="text-neutral-500 mt-2">----------------------------------------</p>
            <p className="text-neutral-300">4 passed in 0.42s</p>
          </div>
        </div>

        {/* OpenAPI Interactive Swagger Preview */}
        <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800 text-neutral-500">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Swagger UI Docs Schema
            </span>
            <span className="text-[10px] bg-sky-500/10 text-sky-500 px-2 py-0.5 rounded border border-sky-500/20">
              OpenAPI 3.0.2
            </span>
          </div>

          <div className="space-y-2 font-sans text-xs text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Auto-generated Interactive OpenAPI Documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Strict Pydantic JSON Schema Export</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>CORS Configured with Rate Limiting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
