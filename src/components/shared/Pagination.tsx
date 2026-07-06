import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-1.5 mt-10" aria-label="Pagination">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Page précédente"
        className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-600 disabled:opacity-30 hover:border-marine-700/40 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          aria-current={p === page ? 'page' : undefined}
          className={cn(
            'w-9 h-9 rounded-full text-sm font-medium transition-colors',
            p === page ? 'bg-marine-900 text-white' : 'text-ink-600 hover:bg-sand-100'
          )}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Page suivante"
        className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-600 disabled:opacity-30 hover:border-marine-700/40 transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
