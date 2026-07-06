import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function CategoryTag({
  label,
  slug,
  tone = 'default',
  className,
}: {
  label: string;
  slug?: string;
  tone?: 'default' | 'live';
  className?: string;
}) {
  const content = (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full',
        tone === 'live'
          ? 'bg-signal-600 text-white'
          : 'bg-marine-50 text-marine-800',
        className
      )}
    >
      {tone === 'live' && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 animate-pulse-ring" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
        </span>
      )}
      {label}
    </span>
  );

  if (slug) {
    return (
      <Link to={`/rubrique/${slug}`} className="inline-block">
        {content}
      </Link>
    );
  }
  return content;
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: { label: string; to: string };
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-7">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-signal-600 mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-2xl md:text-[1.75rem] font-medium text-marine-900 text-balance">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          to={action.to}
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-marine-700 hover:text-marine-900 whitespace-nowrap transition-colors"
        >
          {action.label}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
