import { Link } from 'react-router-dom';
import { Tv, Radio as RadioIcon, Play, Headphones } from 'lucide-react';

function SignalWaves() {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-1/2 opacity-[0.15] pointer-events-none"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      {[60, 110, 160, 210].map((r, i) => (
        <circle
          key={i}
          cx="400"
          cy="200"
          r={r}
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

function LiveCard({
  icon: Icon,
  kicker,
  title,
  subtitle,
  cta,
  to,
}: {
  icon: typeof Tv;
  kicker: string;
  title: string;
  subtitle: string;
  cta: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-between bg-white/[0.06] border border-white/10 rounded-2xl p-7 sm:p-8 hover:bg-white/[0.09] transition-colors overflow-hidden"
    >
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-signal-600 px-2.5 py-1 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 animate-pulse-ring" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
          </span>
          Direct
        </span>
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50 mb-2">{kicker}</p>
        <h3 className="font-display text-2xl font-medium text-white">{title}</h3>
        <p className="text-sm text-white/60 mt-2 max-w-sm">{subtitle}</p>
      </div>

      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
        <span className="w-9 h-9 rounded-full bg-white text-marine-900 flex items-center justify-center group-hover:scale-105 transition-transform">
          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
        </span>
        {cta}
      </div>
    </Link>
  );
}

export function LiveSection() {
  return (
    <section className="relative bg-marine-950 overflow-hidden">
      <SignalWaves />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-16 lg:py-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-8 bg-signal-500" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            En ce moment sur RTD
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <LiveCard
            icon={Tv}
            kicker="Télévision"
            title="RTD en direct"
            subtitle="Suivez le journal télévisé, les magazines et les émissions en continu."
            cta="Regarder"
            to="/direct?media=tv"
          />
          <LiveCard
            icon={RadioIcon}
            kicker="Radio"
            title="Radio Djibouti en direct"
            subtitle="Musique, débats et information en continu, en français et en langues nationales."
            cta="Écouter"
            to="/direct?media=radio"
          />
        </div>
        <div className="flex items-center gap-2 mt-8 text-white/40 text-xs">
          <Headphones className="w-3.5 h-3.5" />
          Disponible également sur l'application mobile RTD Connect
        </div>
      </div>
    </section>
  );
}
