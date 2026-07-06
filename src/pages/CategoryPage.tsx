import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategoryBySlug, getArticlesByCategory } from '@/data/articles';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { Sidebar } from '@/components/shared/Sidebar';
import { Seo } from '@/components/shared/Seo';
import { Pagination } from '@/components/shared/Pagination';

const PAGE_SIZE = 6;

export function CategoryPage() {
  const { slug = '' } = useParams();
  const category = getCategoryBySlug(slug);
  const items = getArticlesByCategory(slug);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [slug]);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const shown = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handlePageChange(next: number) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <Seo title="Rubrique introuvable" />
        <p className="text-sm text-ink-500 mb-2">Rubrique introuvable</p>
        <h1 className="font-display text-2xl text-marine-900 mb-6">
          Cette rubrique n'existe pas ou plus.
        </h1>
        <Link to="/" className="text-marine-700 font-medium hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div>
      <Seo title={category.name} description={category.description} />
      <div className="bg-marine-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
          <nav className="text-xs text-white/50 mb-3">
            <Link to="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl font-medium">{category.name}</h1>
          <p className="text-white/60 mt-3 max-w-xl">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            {items.length === 0 ? (
              <p className="text-ink-500">Aucun article disponible pour le moment dans cette rubrique.</p>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-6">
                  {shown.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
                <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
              </>
            )}
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
