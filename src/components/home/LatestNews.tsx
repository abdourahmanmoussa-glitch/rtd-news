import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { SectionHeading } from '@/components/ui/badges';
import { Sidebar } from '@/components/shared/Sidebar';

export function LatestNews() {
  const latest = articles.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-14 lg:py-16">
      <div className="grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <SectionHeading eyebrow="À la une" title="Dernières actualités" action={{ label: 'Toutes les actualités', to: '/actualites' }} />
          <div className="grid sm:grid-cols-2 gap-6">
            {latest.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
