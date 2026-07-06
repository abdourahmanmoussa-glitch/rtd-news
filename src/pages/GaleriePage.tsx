import { useState } from 'react';
import { Image as ImageIcon, Film, Download, Maximize2, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Seo } from '@/components/shared/Seo';

const photos = Array.from({ length: 8 }).map((_, i) => ({
  id: `p${i}`,
  url: `https://picsum.photos/seed/gal-photo-${i}/600/450`,
  caption: `Reportage photo #${i + 1}`,
}));
const videos = Array.from({ length: 6 }).map((_, i) => ({
  id: `v${i}`,
  url: `https://picsum.photos/seed/gal-video-${i}/600/450`,
  caption: `Séquence vidéo #${i + 1}`,
}));

export function GaleriePage() {
  const [tab, setTab] = useState<'photos' | 'videos'>('photos');
  const items = tab === 'photos' ? photos : videos;

  return (
    <div>
      <Seo title="Galerie" description="Photos et vidéos de RTD." />
      <div className="bg-sand-100/60 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">Galerie</h1>
          <div className="inline-flex bg-white border border-line rounded-full p-1 mt-6">
            <button
              onClick={() => setTab('photos')}
              className={cn('flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors',
                tab === 'photos' ? 'bg-marine-900 text-white' : 'text-ink-600')}
            >
              <ImageIcon className="w-4 h-4" /> Photos
            </button>
            <button
              onClick={() => setTab('videos')}
              className={cn('flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors',
                tab === 'videos' ? 'bg-marine-900 text-white' : 'text-ink-600')}
            >
              <Film className="w-4 h-4" /> Vidéos
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.id} className="group relative rounded-xl overflow-hidden bg-sand-100 aspect-[4/3]">
              <img src={it.url} alt={it.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-marine-950/0 group-hover:bg-marine-950/50 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-medium truncate">{it.caption}</p>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white"><Maximize2 className="w-3.5 h-3.5" /></button>
                  <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white"><Download className="w-3.5 h-3.5" /></button>
                  <button className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white"><Share2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
