import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getCategoryBySlug, getRelatedArticles } from '@/data/articles';
import { CategoryTag } from '@/components/ui/badges';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { Sidebar } from '@/components/shared/Sidebar';
import { formatDate } from '@/lib/utils';
import { Globe, AtSign, Link2, MessageSquare } from 'lucide-react';
import { Seo } from '@/components/shared/Seo';

export function ArticlePage() {
  const { slug = '' } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <Seo title="Article introuvable" />
        <p className="text-sm text-ink-500 mb-2">Article introuvable</p>
        <h1 className="font-display text-2xl text-marine-900 mb-6">
          Cet article n'existe pas ou a été retiré.
        </h1>
        <Link to="/" className="text-marine-700 font-medium hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  const category = getCategoryBySlug(article.categorySlug);
  const related = getRelatedArticles(article);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-10">
      <Seo title={article.title} description={article.excerpt} image={article.imageUrl} type="article" />
      <div className="grid lg:grid-cols-[1fr_320px] gap-10">
        <article>
          <nav className="text-xs text-ink-500 mb-4">
            <Link to="/" className="hover:text-marine-800">Accueil</Link>
            <span className="mx-2">/</span>
            {category && (
              <>
                <Link to={`/rubrique/${category.slug}`} className="hover:text-marine-800">{category.name}</Link>
                <span className="mx-2">/</span>
              </>
            )}
          </nav>

          {category && <CategoryTag label={category.name} slug={category.slug} />}
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900 mt-4 leading-tight text-balance">
            {article.title}
          </h1>
          <p className="text-lg text-ink-500 mt-4 leading-relaxed">{article.excerpt}</p>

          <div className="flex items-center justify-between flex-wrap gap-4 mt-6 pb-6 border-b border-line">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-marine-100 flex items-center justify-center font-display text-marine-800 font-medium">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-ink-900">{article.author.name}</p>
                <p className="text-xs text-ink-500">
                  {article.author.role} · {formatDate(article.publishedAt)} · {article.readingTimeMinutes} min de lecture
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {[Globe, AtSign, Link2].map((Icon, i) => (
                <button
                  key={i}
                  aria-label="Partager"
                  className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-500 hover:text-marine-800 hover:border-marine-700/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mt-8 bg-sand-100">
            <img src={article.imageUrl} alt={article.imageAlt} className="w-full h-auto object-cover" />
          </div>

          <div className="prose prose-slate max-w-none mt-8 [&>p]:text-ink-700 [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-[1.05rem]">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {article.tags.map((t) => (
              <span key={t} className="text-xs font-medium text-marine-800 bg-marine-50 px-3 py-1.5 rounded-full">
                #{t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-8 text-sm text-ink-500">
            <MessageSquare className="w-4 h-4" />
            {article.commentsCount} commentaires
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-xl font-medium text-marine-900 mb-6">Articles similaires</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((a) => (
                  <ArticleCard key={a.id} article={a} size="sm" />
                ))}
              </div>
            </div>
          )}
        </article>
        <Sidebar />
      </div>
    </div>
  );
}
