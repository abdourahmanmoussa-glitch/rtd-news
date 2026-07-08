import { Link } from 'react-router-dom';
import { useFeaturedArticles, useMostRecent } from '@/lib/queries';
import { useCategoryMap } from '@/hooks/useCategoryMap';
import { CategoryTag } from '@/components/ui/badges';
import { formatRelative } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { LoadingBlock, EmptyBlock } from '@/components/shared/QueryStates';
import type { Article } from '@/types/content';

export function Hero() {
  const { data: featured, isLoading: loadingFeatured } = useFeaturedArticles(6);
  const { data: recent, isLoading: loadingRecent } = useMostRecent(6);
  const categoryMap = useCategoryMap();

  const isLoading = loadingFeatured || loadingRecent;

  if (isLoading) {
    return (
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10">
          <LoadingBlock label="Chargement de la une…" />
        </div>
      </section>
    );
  }

  const seen = new Set<string>();
  const pool: Article[] = [...(featured ?? []), ...(recent ?? [])].filter((a) => {
    if (seen.has(a.id)) return false;
    seen.add(a.id);
    return true;
  });

  if (pool.length === 0) {
    return (
      <section className="border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10">
          <EmptyBlock message="Aucun article publié pour le moment. Ajoutez du contenu depuis le CMS." />
        </div>
      </section>
    );
  }

  const [main, ...rest] = pool;
  const secondary = rest.slice(0, 5);
  const category = categoryMap[main.categorySlug];

  return (
    <section className="border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-8 lg:py-10">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* Main story */}
          <Link to={`/article/${main.slug}`} className="group relative rounded-2xl overflow-hidden bg-marine-950">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
              <img
                src={main.imageUrl}
                alt={main.imageAlt}
                className="w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-marine-950/95 via-marine-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              {category && <CategoryTag label={category.name} tone="default" className="!bg-white/15 !text-white backdrop-blur-sm" />}
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-white mt-4 leading-[1.15] text-balance max-w-2xl">
                {main.title}
              </h1>
              <p className="text-white/70 mt-3 max-w-xl leading-relaxed hidden sm:block">
                {main.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-5 text-sm text-white/60">
                <span>{main.author.name}</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>{formatRelative(main.publishedAt)}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 mt-5 text-white text-sm font-semibold border border-white/30 rounded-full px-4 py-2 group-hover:bg-white group-hover:text-marine-900 transition-colors">
                Lire l'article
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Secondary stories */}
          <div className="flex flex-col divide-y divide-line">
            {secondary.map((a) => {
              const c = categoryMap[a.categorySlug];
              return (
                <Link
                  key={a.id}
                  to={`/article/${a.slug}`}
                  className="group flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-sand-100">
                    <img
                      src={a.imageUrl}
                      alt={a.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="min-w-0">
                    {c && (
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-marine-700 mb-1">
                        {c.name}
                      </p>
                    )}
                    <h3 className="text-sm font-medium text-ink-900 leading-snug group-hover:text-marine-800 transition-colors line-clamp-2 text-balance">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
