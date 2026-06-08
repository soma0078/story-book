import { useState } from "react";

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface UsePaginationOptions {
  initialPageSize?: number;
}

export function usePagination({
  initialPageSize = 10,
}: UsePaginationOptions = {}) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const pagination = { pageIndex, pageSize };

  const onPaginationChange = (
    updater: PaginationState | ((old: PaginationState) => PaginationState)
  ) => {
    const newState =
      typeof updater === "function"
        ? updater({ pageIndex, pageSize })
        : updater;

    setPageIndex(newState.pageIndex);
    setPageSize(newState.pageSize);
  };

  return {
    pagination,
    onPaginationChange,
    pageIndex,
    pageSize,
    setPageIndex,
    setPageSize,
  };
}
