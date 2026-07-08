import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCategories, useAuthors, useSearchArticles } from '@/lib/queries';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { Search as SearchIcon } from 'lucide-react';
import { LoadingBlock, ErrorBlock } from '@/components/shared/QueryStates';
import { Seo } from '@/components/shared/Seo';

export function RecherchePage() {
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState(params.get('q') ?? '');
  const [categorySlug, setCategorySlug] = useState(params.get('categorie') ?? '');
  const [journalist, setJournalist] = useState(params.get('journaliste') ?? '');
  const [sort, setSort] = useState<'recent' | 'ancien'>('recent');

  const { data: categories } = useCategories();
  const { data: authors } = useAuthors();
  const { data: results, isLoading, isError } = useSearchArticles({
    q: params.get('q') ?? undefined,
    categorySlug: params.get('categorie') ?? undefined,
    authorName: params.get('journaliste') ?? undefined,
    sort,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (q) next.q = q;
    if (categorySlug) next.categorie = categorySlug;
    if (journalist) next.journaliste = journalist;
    setParams(next);
  }

  return (
    <div>
      <Seo title="Recherche avancée" description="Retrouvez un article par mot-clé, rubrique ou journaliste." />
      <div className="bg-sand-100/60 border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">Recherche avancée</h1>
          <p className="text-ink-500 mt-3 max-w-xl">
            Retrouvez un article par mot-clé, rubrique ou journaliste.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 bg-white rounded-full border border-line px-4 py-3">
              <SearchIcon className="w-4 h-4 text-ink-500 shrink-0" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Mot-clé, titre, sujet…"
                className="flex-1 bg-transparent outline-none text-sm text-ink-900 placeholder:text-ink-500"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <select
                value={categorySlug}
                onChange={(e) => setCategorySlug(e.target.value)}
                className="bg-white border border-line rounded-xl px-4 py-2.5 text-sm text-ink-700 outline-none focus-visible:border-marine-700"
              >
                <option value="">Toutes les rubriques</option>
                {categories?.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>

              <select
                value={journalist}
                onChange={(e) => setJournalist(e.target.value)}
                className="bg-white border border-line rounded-xl px-4 py-2.5 text-sm text-ink-700 outline-none focus-visible:border-marine-700"
              >
                <option value="">Tous les journalistes</option>
                {authors?.map((a) => (
                  <option key={a.id} value={a.name}>{a.name}</option>
                ))}
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as 'recent' | 'ancien')}
                className="bg-white border border-line rounded-xl px-4 py-2.5 text-sm text-ink-700 outline-none focus-visible:border-marine-700"
              >
                <option value="recent">Plus récents d'abord</option>
                <option value="ancien">Plus anciens d'abord</option>
              </select>
            </div>

            <button
              type="submit"
              className="self-start bg-marine-900 text-white font-semibold rounded-full px-6 py-2.5 text-sm hover:bg-marine-800 transition-colors"
            >
              Rechercher
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        {isLoading && <LoadingBlock />}
        {isError && <ErrorBlock />}
        {!isLoading && !isError && (
          <>
            <p className="text-sm text-ink-500 mb-6">
              {results?.length ?? 0} résultat{(results?.length ?? 0) !== 1 && 's'}
            </p>
            {(results?.length ?? 0) === 0 ? (
              <div className="text-center py-16">
                <p className="text-ink-500">Aucun article ne correspond à votre recherche.</p>
                <Link to="/actualites" className="text-marine-700 font-medium hover:underline mt-3 inline-block">
                  Voir toutes les actualités
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {results?.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
