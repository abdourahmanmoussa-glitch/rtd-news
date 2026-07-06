import { useSearchParams } from 'react-router-dom';
import { Tv, Radio as RadioIcon, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Seo } from '@/components/shared/Seo';

const radioChannels = ['RTD Radio', 'Somali FM', 'Afar FM', 'Coranique'];
const tvChannels = ['RTD1', 'RTD2', 'RTD3', 'RTD4'];

export function LivePage() {
  const [params, setParams] = useSearchParams();
  const media = params.get('media') === 'radio' ? 'radio' : 'tv';

  return (
    <div className="bg-marine-950 min-h-[calc(100vh-8rem)]">
      <Seo title="RTD en direct" description="Suivez RTD Télévision et Radio en direct, en continu." />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-signal-600 px-2.5 py-1 rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 animate-pulse-ring" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            Direct
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-medium text-white">RTD en direct</h1>
        </div>

        <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 mb-8">
          <button
            onClick={() => setParams({ media: 'tv' })}
            className={cn(
              'flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors',
              media === 'tv' ? 'bg-white text-marine-900' : 'text-white/60 hover:text-white'
            )}
          >
            <Tv className="w-4 h-4" /> Télévision
          </button>
          <button
            onClick={() => setParams({ media: 'radio' })}
            className={cn(
              'flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors',
              media === 'radio' ? 'bg-white text-marine-900' : 'text-white/60 hover:text-white'
            )}
          >
            <RadioIcon className="w-4 h-4" /> Radio
          </button>
        </div>

        {media === 'tv' ? (
          <div className="grid lg:grid-cols-[1fr_260px] gap-6">
            <div className="aspect-video rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center">
              <p className="text-white/40 text-sm">Lecteur vidéo — flux HLS RTD1</p>
            </div>
            <div className="flex flex-col gap-2">
              {tvChannels.map((c, i) => (
                <button
                  key={c}
                  className={cn(
                    'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors border',
                    i === 0
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'border-white/5 text-white/60 hover:bg-white/5'
                  )}
                >
                  {c}
                  {i === 0 && <span className="text-[10px] font-bold text-signal-500">● LIVE</span>}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_260px] gap-6">
            <div className="rounded-2xl bg-black/40 border border-white/10 p-8 flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-signal-600 flex items-center justify-center shrink-0">
                <Volume2 className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">RTD Radio — en direct</p>
                <p className="text-white/50 text-sm mt-1">Flux audio en continu</p>
                <div className="h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                  <div className="h-full w-1/3 bg-signal-500 rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {radioChannels.map((c, i) => (
                <button
                  key={c}
                  className={cn(
                    'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors border',
                    i === 0
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'border-white/5 text-white/60 hover:bg-white/5'
                  )}
                >
                  {c}
                  {i === 0 && <span className="text-[10px] font-bold text-signal-500">● LIVE</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
