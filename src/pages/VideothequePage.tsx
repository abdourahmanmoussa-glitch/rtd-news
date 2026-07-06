import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { VideoItem } from '@/types/content';
import { Seo } from '@/components/shared/Seo';

const filters: { key: VideoItem['type'] | 'tous'; label: string }[] = [
  { key: 'tous', label: 'Tous' },
  { key: 'emission', label: 'Émissions' },
  { key: 'actualite', label: 'Actualités' },
  { key: 'reportage', label: 'Reportages' },
  { key: 'interview', label: 'Interviews' },
  { key: 'documentaire', label: 'Documentaires' },
];

const videos: VideoItem[] = Array.from({ length: 9 }).map((_, i) => {
  const type = filters[(i % 5) + 1].key as VideoItem['type'];
  return {
    id: `vid-${i}`,
    slug: `video-${i}`,
    title: `${filters.find((f) => f.key === type)?.label} — épisode ${i + 1}`,
    description: 'Retrouvez ce contenu vidéo dans la vidéothèque de RTD.',
    thumbnailUrl: `https://picsum.photos/seed/video-lib-${i}/600/340`,
    durationLabel: `${8 + (i % 5) * 3} min`,
    publishedAt: new Date().toISOString(),
    type,
  };
});

export function VideothequePage() {
  const [active, setActive] = useState<VideoItem['type'] | 'tous'>('tous');
  const shown = active === 'tous' ? videos : videos.filter((v) => v.type === active);

  return (
    <div>
      <Seo title="Vidéothèque" description="La bibliothèque vidéo de RTD : émissions, actualités, reportages, interviews et documentaires." />
      <div className="bg-sand-100/60 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">Vidéothèque</h1>
          <div className="flex flex-wrap gap-2 mt-6">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                  active === f.key ? 'bg-marine-900 text-white border-marine-900' : 'bg-white text-ink-600 border-line hover:border-marine-700/40'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((v) => (
            <div key={v.id} className="group rounded-2xl overflow-hidden border border-line bg-white">
              <div className="relative aspect-video bg-sand-100">
                <img src={v.thumbnailUrl} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-marine-950/20 group-hover:bg-marine-950/40 transition-colors">
                  <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-marine-900 text-marine-900 ml-0.5" />
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 text-[11px] font-medium text-white bg-black/60 px-2 py-0.5 rounded">
                  {v.durationLabel}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-ink-900 leading-snug">{v.title}</h3>
                <p className="text-xs text-ink-500 mt-1.5 line-clamp-2">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
