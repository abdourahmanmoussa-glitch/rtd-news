import { useBreakingHeadlines } from '@/lib/queries';

export function BreakingTicker() {
  const { data } = useBreakingHeadlines();
  const headlines = data ?? [];

  // Pas d'actualité urgente en base : on masque la bande plutôt que
  // d'afficher un bandeau "À la une" vide.
  if (headlines.length === 0) return null;

  const items = [...headlines, ...headlines];

  return (
    <div className="bg-marine-900 text-white overflow-hidden">
      <div className="flex items-stretch">
        <div className="flex items-center gap-2 bg-signal-600 px-4 py-2 shrink-0 z-10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white/70 animate-pulse-ring" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.1em] whitespace-nowrap">
            À la une
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex whitespace-nowrap animate-ticker py-2">
            {items.map((headline, i) => (
              <span key={i} className="text-sm text-white/90 px-6 flex items-center gap-6 shrink-0">
                {headline}
                <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
