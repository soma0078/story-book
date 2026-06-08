import { useState, useCallback } from "react";

export interface UseInfiniteScrollOptions {
  initialPageSize?: number;
}

export function useInfiniteScroll({
  initialPageSize = 10,
}: UseInfiniteScrollOptions = {}) {
  const [items, setItems] = useState<any[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(
    async (
      fetchFn: (cursor: string | null, pageSize: number) => Promise<{
        items: any[];
        nextCursor: string | null;
        hasMore: boolean;
      }>
    ) => {
      if (isLoading || !hasNextPage) return;

      setIsLoading(true);
      try {
        const result = await fetchFn(cursor, initialPageSize);
        setItems((prev) => [...prev, ...result.items]);
        setCursor(result.nextCursor);
        setHasNextPage(result.hasMore);
      } finally {
        setIsLoading(false);
      }
    },
    [cursor, hasNextPage, isLoading, initialPageSize]
  );

  const reset = useCallback(() => {
    setItems([]);
    setCursor(null);
    setHasNextPage(true);
    setIsLoading(false);
  }, []);

  return {
    items,
    cursor,
    hasNextPage,
    isLoading,
    loadMore,
    reset,
  };
}
