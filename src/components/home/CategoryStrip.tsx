import { Link } from 'react-router-dom';
import { categories, getArticlesByCategory } from '@/data/articles';

const featuredSlugs = ['infrastructure', 'international', 'sante', 'sports', 'culture', 'technologie'];

export function CategoryStrip() {
  const items = featuredSlugs
    .map((slug) => categories.find((c) => c.slug === slug))
    .filter(Boolean) as typeof categories;

  return (
    <section className="bg-sand-100/60 border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-marine-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marine-700">
            Explorer par rubrique
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((c) => (
            <Link
              key={c.slug}
              to={`/rubrique/${c.slug}`}
              className="group bg-white rounded-2xl border border-line p-5 hover:border-marine-700/40 hover:shadow-[0_12px_28px_-18px_rgba(11,37,69,0.3)] transition-all"
            >
              <p className="font-display text-lg font-medium text-marine-900 group-hover:text-marine-700 transition-colors">
                {c.name}
              </p>
              <p className="text-xs text-ink-500 mt-1">
                {getArticlesByCategory(c.slug).length} articles
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
