import { useMemo } from 'react';
import { useCategories } from '@/lib/queries';
import type { Category } from '@/types/content';

export function useCategoryMap(): Record<string, Category> {
  const { data: categories } = useCategories();
  return useMemo(() => {
    const map: Record<string, Category> = {};
    (categories ?? []).forEach((c) => {
      map[c.slug] = c;
    });
    return map;
  }, [categories]);
}
