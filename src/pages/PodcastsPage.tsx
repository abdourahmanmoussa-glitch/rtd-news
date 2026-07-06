import { Play, Headphones } from 'lucide-react';
import type { PodcastEpisode } from '@/types/content';
import { Seo } from '@/components/shared/Seo';

const episodes: PodcastEpisode[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `ep-${i}`,
  title: `Épisode ${i + 1} — Regards sur Djibouti`,
  show: 'Regards sur Djibouti',
  description: "Un format audio consacré aux grands enjeux économiques, sociaux et culturels du pays.",
  durationLabel: `${18 + i * 2} min`,
  publishedAt: new Date().toISOString(),
  coverUrl: `https://picsum.photos/seed/podcast-${i}/300/300`,
}));

export function PodcastsPage() {
  return (
    <div>
      <Seo title="Podcasts" description="Réécoutez les émissions et formats audio de RTD." />
      <div className="bg-sand-100/60 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
          <div className="flex items-center gap-3">
            <Headphones className="w-6 h-6 text-marine-800" />
            <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">Podcasts</h1>
          </div>
          <p className="text-ink-500 mt-3 max-w-xl">Réécoutez les émissions et formats audio de RTD, où que vous soyez.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        <div className="flex flex-col divide-y divide-line">
          {episodes.map((e) => (
            <div key={e.id} className="flex items-center gap-4 py-5">
              <img src={e.coverUrl} alt={e.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-medium text-ink-900 truncate">{e.title}</h3>
                <p className="text-xs text-ink-500 mt-1">{e.show} · {e.durationLabel}</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-marine-900 text-white flex items-center justify-center shrink-0 hover:bg-marine-800 transition-colors">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
