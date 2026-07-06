import type { Show } from '@/types/content';
import { Seo } from '@/components/shared/Seo';

const shows: Show[] = [
  {
    id: 's1', slug: 'journal-20h', title: 'Le Journal de 20h',
    description: "Le rendez-vous quotidien d'information avec l'actualité nationale et internationale.",
    host: 'Amina Houssein', schedule: 'Tous les jours · 20h00',
    imageUrl: 'https://picsum.photos/seed/journal20h/800/600',
  },
  {
    id: 's2', slug: 'debat-economique', title: 'Débat Économique',
    description: 'Un plateau hebdomadaire consacré aux enjeux économiques du pays.',
    host: 'Fatouma Ali', schedule: 'Mercredi · 19h00',
    imageUrl: 'https://picsum.photos/seed/debateco/800/600',
  },
  {
    id: 's3', slug: 'horizons-culturels', title: 'Horizons Culturels',
    description: 'Musique, patrimoine et rencontres avec les artistes de la région.',
    host: 'Sagal Robleh', schedule: 'Vendredi · 18h30',
    imageUrl: 'https://picsum.photos/seed/horizons/800/600',
  },
  {
    id: 's4', slug: 'sport-hebdo', title: 'Sport Hebdo',
    description: "Le résumé de l'actualité sportive nationale et continentale.",
    host: 'Omar Farah', schedule: 'Dimanche · 21h00',
    imageUrl: 'https://picsum.photos/seed/sporthebdo/800/600',
  },
];

export function EmissionsPage() {
  return (
    <div>
      <Seo title="Émissions" description="Découvrez les programmes réguliers de RTD." />
      <div className="bg-sand-100/60 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">Émissions</h1>
          <p className="text-ink-500 mt-3 max-w-xl">Découvrez les programmes réguliers de RTD.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {shows.map((s) => (
            <article key={s.id} className="flex gap-5 bg-white rounded-2xl border border-line p-5">
              <img src={s.imageUrl} alt={s.title} className="w-28 h-28 rounded-xl object-cover shrink-0" />
              <div>
                <h3 className="font-display text-lg font-medium text-marine-900">{s.title}</h3>
                <p className="text-sm text-ink-500 mt-1.5 leading-relaxed">{s.description}</p>
                <p className="text-xs text-ink-500 mt-3">
                  Avec <span className="font-medium text-ink-700">{s.host}</span> · {s.schedule}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
