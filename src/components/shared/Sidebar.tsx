import { ArticleRow } from '@/components/shared/ArticleCard';
import { useMostRead, useMostRecent, useMostCommented } from '@/lib/queries';
import { CloudSun } from 'lucide-react';
import { useState } from 'react';
import { LoadingBlock, EmptyBlock } from '@/components/shared/QueryStates';

function TabbedList() {
  const [tab, setTab] = useState<'lu' | 'recent' | 'commente'>('lu');
  const mostRead = useMostRead(5);
  const mostRecent = useMostRecent(5);
  const mostCommented = useMostCommented(5);

  const queries = {
    lu: mostRead,
    recent: mostRecent,
    commente: mostCommented,
  };
  const active = queries[tab];

  const tabs: { key: typeof tab; label: string }[] = [
    { key: 'lu', label: 'Les plus lus' },
    { key: 'recent', label: 'Récents' },
    { key: 'commente', label: 'Commentés' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-line p-5">
      <div className="flex items-center gap-1 mb-1 border-b border-line">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-2 pb-3 text-xs font-semibold uppercase tracking-wide transition-colors border-b-2 -mb-px ${
              tab === t.key
                ? 'text-marine-900 border-marine-800'
                : 'text-ink-500 border-transparent hover:text-ink-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="divide-y divide-line/70">
        {active.isLoading && <LoadingBlock />}
        {active.isError && <EmptyBlock message="Impossible de charger cette liste." />}
        {active.data?.length === 0 && <EmptyBlock message="Rien à afficher pour le moment." />}
        {active.data?.map((a, i) => (
          <ArticleRow key={a.id} article={a} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

function WeatherWidget() {
  return (
    <div className="bg-marine-900 text-white rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-white/50 mb-1">Djibouti-ville</p>
        <p className="font-display text-3xl font-medium">34°C</p>
        <p className="text-xs text-white/60 mt-1">Ensoleillé · Humidité 62%</p>
      </div>
      <CloudSun className="w-12 h-12 text-white/70" strokeWidth={1.3} />
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <WeatherWidget />
      <TabbedList />
      <div className="bg-sand-100 rounded-2xl border border-dashed border-sand-300 p-6 text-center">
        <p className="text-xs uppercase tracking-wide text-ink-500 mb-1">Publicité</p>
        <p className="text-sm text-ink-500">Espace publicitaire 300×250</p>
      </div>
    </aside>
  );
}
