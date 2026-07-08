import { useState } from 'react';
import { useArticles } from '@/lib/queries';
import { ArticleCard } from '@/components/shared/ArticleCard';
import { Sidebar } from '@/components/shared/Sidebar';
import { Seo } from '@/components/shared/Seo';
import { Pagination } from '@/components/shared/Pagination';
import { LoadingBlock, ErrorBlock, EmptyBlock } from '@/components/shared/QueryStates';

const PAGE_SIZE = 6;

export function ActualitesPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useArticles({ page, pageSize: PAGE_SIZE });
  const totalPages = Math.max(1, Math.ceil((data?.total ?? 0) / PAGE_SIZE));

  function handlePageChange(next: number) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <Seo title="Actualités" description="Toute l'actualité nationale et internationale de Djibouti, mise à jour en continu." />
      <div className="bg-sand-100/60 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-marine-900">Actualités</h1>
          <p className="text-ink-500 mt-3 max-w-xl">
            Toute l'actualité nationale et internationale, mise à jour en continu.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-10 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            {isLoading && <LoadingBlock />}
            {isError && <ErrorBlock />}
            {!isLoading && !isError && data?.articles.length === 0 && (
              <EmptyBlock message="Aucun article publié pour le moment." />
            )}
            {!isLoading && !isError && (data?.articles.length ?? 0) > 0 && (
              <>
                <div className="grid sm:grid-cols-2 gap-6">
                  {data?.articles.map((a) => (
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
