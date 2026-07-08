import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Article, Category, Author } from '@/types/content';

// Colonnes communes sélectionnées pour un article, avec ses relations.
// category est en jointure "!inner" (category_id est NOT NULL en base,
// donc ça ne filtre rien par défaut, mais ça permet de filtrer sur
// category.slug plus bas).
const ARTICLE_SELECT = `
  id, slug, title, excerpt, body, image_url, image_alt, status, featured, breaking,
  tags, reading_time_minutes, views, published_at,
  category:categories!inner(id, slug, name, "group", description),
  author:authors(id, name, role, avatar_url),
  comments(count)
`;

interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[] | null;
  image_url: string | null;
  image_alt: string | null;
  status: string;
  featured: boolean;
  breaking: boolean;
  tags: string[] | null;
  reading_time_minutes: number;
  views: number;
  published_at: string;
  category: { id: string; slug: string; name: string; group: Category['group']; description: string } | null;
  author: { id: string; name: string; role: string; avatar_url: string | null } | null;
  comments: { count: number }[] | null;
}

function mapArticle(row: ArticleRow): Article {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? '',
    body: Array.isArray(row.body) ? row.body : [],
    categorySlug: row.category?.slug ?? '',
    author: {
      id: row.author?.id ?? '',
      name: row.author?.name ?? 'Rédaction RTD',
      role: row.author?.role ?? '',
      avatarUrl: row.author?.avatar_url ?? undefined,
    },
    publishedAt: row.published_at,
    readingTimeMinutes: row.reading_time_minutes ?? 3,
    imageUrl: row.image_url ?? '',
    imageAlt: row.image_alt ?? '',
    featured: row.featured,
    breaking: row.breaking,
    tags: row.tags ?? [],
    views: row.views ?? 0,
    commentsCount: row.comments?.[0]?.count ?? 0,
  };
}

function mapCategory(row: {
  id: string;
  slug: string;
  name: string;
  group: Category['group'];
  description: string;
}): Category {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    group: row.group,
    description: row.description ?? '',
  };
}

// --- Catégories -----------------------------------------------------------

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      const { data, error } = await supabase.from('categories').select('*').order('name');
      if (error) throw error;
      return (data ?? []).map(mapCategory);
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: ['category', slug],
    queryFn: async (): Promise<Category | null> => {
      const { data, error } = await supabase.from('categories').select('*').eq('slug', slug).maybeSingle();
      if (error) throw error;
      return data ? mapCategory(data) : null;
    },
    enabled: Boolean(slug),
    staleTime: 5 * 60 * 1000,
  });
}

// --- Articles ---------------------------------------------------------------

export function useArticles(opts: { categorySlug?: string; page?: number; pageSize?: number } = {}) {
  const { categorySlug, page = 1, pageSize = 6 } = opts;

  return useQuery({
    queryKey: ['articles', categorySlug ?? null, page, pageSize],
    queryFn: async (): Promise<{ articles: Article[]; total: number }> => {
      let query = supabase
        .from('articles')
        .select(ARTICLE_SELECT, { count: 'exact' })
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (categorySlug) {
        query = query.eq('category.slug', categorySlug);
      }

      const from = (page - 1) * pageSize;
      query = query.range(from, from + pageSize - 1);

      const { data, error, count } = await query;
      if (error) throw error;
      return { articles: (data ?? []).map((r) => mapArticle(r as unknown as ArticleRow)), total: count ?? 0 };
    },
    staleTime: 60 * 1000,
  });
}

export function useFeaturedArticles(limit = 6) {
  return useQuery({
    queryKey: ['articles', 'featured', limit],
    queryFn: async (): Promise<Article[]> => {
      const { data, error } = await supabase
        .from('articles')
        .select(ARTICLE_SELECT)
        .eq('status', 'published')
        .eq('featured', true)
        .order('published_at', { ascending: false })
        .limit(limit);
      if (error) throw error;
      return (data ?? []).map((r) => mapArticle(r as unknown as ArticleRow));
    },
    staleTime: 60 * 1000,
  });
}

export function useArticleBySlug(slug: string) {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async (): Promise<Article | null> => {
      const { data, error } = await supabase
        .from('articles')
        .select(ARTICLE_SELECT)
        .eq('status', 'published')
        .eq('slug', slug)
        .maybeSingle();
      if (error) throw error;
      return data ? mapArticle(data as unknown as ArticleRow) : null;
    },
    enabled: Boolean(slug),
    staleTime: 60 * 1000,
  });
}

export function useRelatedArticles(article: Article | null | undefined, count = 3) {
  return useQuery({
    queryKey: ['articles', 'related', article?.id, article?.categorySlug],
    queryFn: async (): Promise<Article[]> => {
      if (!article) return [];
      const { data, error } = await supabase
        .from('articles')
        .select(ARTICLE_SELECT)
        .eq('status', 'published')
        .eq('category.slug', article.categorySlug)
        .neq('id', article.id)
        .order('published_at', { ascending: false })
        .limit(count);
      if (error) throw error;
      return (data ?? []).map((r) => mapArticle(r as unknown as ArticleRow));
    },
    enabled: Boolean(article),
    staleTime: 60 * 1000,
  });
}

export function useMostRead(limit = 5) {
  return useQuery({
    queryKey: ['articles', 'most-read', limit],
    queryFn: async (): Promise<Article[]> => {
      const { data, error } = await supabase
        .from('articles')
        .select(ARTICLE_SELECT)
        .eq('status', 'published')
        .order('views', { ascending: false })
        .limit(limit);
      if (error) throw error;
      return (data ?? []).map((r) => mapArticle(r as unknown as ArticleRow));
    },
    staleTime: 60 * 1000,
  });
}

export function useMostRecent(limit = 5) {
  return useQuery({
    queryKey: ['articles', 'most-recent', limit],
    queryFn: async (): Promise<Article[]> => {
      const { data, error } = await supabase
        .from('articles')
        .select(ARTICLE_SELECT)
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(limit);
      if (error) throw error;
      return (data ?? []).map((r) => mapArticle(r as unknown as ArticleRow));
    },
    staleTime: 60 * 1000,
  });
}

// PostgREST ne permet pas de trier directement sur un count agrégé ;
// on récupère un lot récent et on trie côté client par nombre de commentaires.
export function useMostCommented(limit = 5) {
  return useQuery({
    queryKey: ['articles', 'most-commented', limit],
    queryFn: async (): Promise<Article[]> => {
      const { data, error } = await supabase
        .from('articles')
        .select(ARTICLE_SELECT)
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(30);
      if (error) throw error;
      return (data ?? [])
        .map((r) => mapArticle(r as unknown as ArticleRow))
        .sort((a, b) => b.commentsCount - a.commentsCount)
        .slice(0, limit);
    },
    staleTime: 60 * 1000,
  });
}

export function useBreakingHeadlines() {
  return useQuery({
    queryKey: ['articles', 'breaking'],
    queryFn: async (): Promise<string[]> => {
      const { data, error } = await supabase
        .from('articles')
        .select('title')
        .eq('status', 'published')
        .eq('breaking', true)
        .order('published_at', { ascending: false })
        .limit(10);
      if (error) throw error;
      return (data ?? []).map((r) => r.title as string);
    },
    staleTime: 30 * 1000,
  });
}

// --- Recherche ---------------------------------------------------------------

export function useSearchArticles(opts: {
  q?: string;
  categorySlug?: string;
  authorName?: string;
  sort?: 'recent' | 'ancien';
}) {
  const { q, categorySlug, authorName, sort = 'recent' } = opts;

  return useQuery({
    queryKey: ['search', q ?? '', categorySlug ?? '', authorName ?? '', sort],
    queryFn: async (): Promise<Article[]> => {
      let query = supabase
        .from('articles')
        .select(ARTICLE_SELECT)
        .eq('status', 'published')
        .order('published_at', { ascending: sort === 'ancien' });

      if (categorySlug) query = query.eq('category.slug', categorySlug);
      if (authorName) query = query.eq('author.name', authorName);
      if (q && q.trim()) query = query.ilike('title', `%${q.trim()}%`);

      const { data, error } = await query.limit(50);
      if (error) throw error;
      return (data ?? []).map((r) => mapArticle(r as unknown as ArticleRow));
    },
    staleTime: 30 * 1000,
  });
}

export function useAuthors() {
  return useQuery({
    queryKey: ['authors'],
    queryFn: async (): Promise<Author[]> => {
      const { data, error } = await supabase.from('authors').select('id, name, role, avatar_url').order('name');
      if (error) throw error;
      return (data ?? []).map((a) => ({ id: a.id, name: a.name, role: a.role, avatarUrl: a.avatar_url ?? undefined }));
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useCategoryArticleCounts(slugs: string[]) {
  return useQuery({
    queryKey: ['category-article-counts', slugs],
    queryFn: async (): Promise<Record<string, number>> => {
      const entries = await Promise.all(
        slugs.map(async (slug) => {
          const { count, error } = await supabase
            .from('articles')
            .select('id, category:categories!inner(slug)', { count: 'exact', head: true })
            .eq('status', 'published')
            .eq('category.slug', slug);
          if (error) throw error;
          return [slug, count ?? 0] as const;
        })
      );
      return Object.fromEntries(entries);
    },
    enabled: slugs.length > 0,
    staleTime: 60 * 1000,
  });
}
