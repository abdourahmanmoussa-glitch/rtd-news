import { Link } from 'react-router-dom';
import type { Article } from '@/types/content';
import { useCategoryMap } from '@/hooks/useCategoryMap';
import { CategoryTag } from '@/components/ui/badges';
import { formatRelative } from '@/lib/utils';
import { Clock } from 'lucide-react';

export function ArticleCard({ article, size = 'md' }: { article: Article; size?: 'sm' | 'md' | 'lg' }) {
  const categoryMap = useCategoryMap();
  const category = categoryMap[article.categorySlug];
  const imgH = size === 'lg' ? 'h-64' : size === 'sm' ? 'h-36' : 'h-48';

  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-line/80 overflow-hidden hover:shadow-[0_12px_32px_-16px_rgba(11,37,69,0.25)] transition-shadow duration-300">
      <Link to={`/article/${article.slug}`} className={`block overflow-hidden ${imgH} bg-sand-100`}>
        <img
          src={article.imageUrl}
          alt={article.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </Link>
      <div className="flex flex-col gap-2.5 p-4 sm:p-5 grow">
        <div className="flex items-center gap-2 flex-wrap">
          {category && <CategoryTag label={category.name} slug={category.slug} />}
        </div>
        <Link to={`/article/${article.slug}`}>
          <h3 className="font-display text-lg leading-snug font-medium text-ink-900 group-hover:text-marine-800 transition-colors text-balance">
            {article.title}
          </h3>
        </Link>
        {size !== 'sm' && (
          <p className="text-sm text-ink-500 leading-relaxed line-clamp-2">{article.excerpt}</p>
        )}
        <div className="mt-auto pt-2 flex items-center gap-3 text-xs text-ink-500">
          <span>{formatRelative(article.publishedAt)}</span>
          <span className="w-1 h-1 rounded-full bg-ink-500/40" />
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readingTimeMinutes} min
          </span>
        </div>
      </div>
    </article>
  );
}

export function ArticleRow({ article, index }: { article: Article; index?: number }) {
  return (
    <Link
      to={`/article/${article.slug}`}
      className="group flex items-start gap-4 py-4 first:pt-0"
    >
      {typeof index === 'number' && (
        <span className="font-display text-2xl text-sand-300 leading-none mt-0.5 w-6 shrink-0">
          {String(index).padStart(2, '0')}
        </span>
      )}
      <div className="min-w-0">
        <h4 className="text-sm font-medium text-ink-900 group-hover:text-marine-800 transition-colors leading-snug text-balance">
          {article.title}
        </h4>
        <p className="text-xs text-ink-500 mt-1.5">{formatRelative(article.publishedAt)}</p>
      </div>
    </Link>
  );
}
