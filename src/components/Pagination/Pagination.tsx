import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
  siblingCount?: number;
}

export function Pagination({
  currentPage,
  pageCount,
  onPageChange,
  isLoading = false,
  siblingCount = 1,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const leftSibling = Math.max(1, currentPage - siblingCount);
    const rightSibling = Math.min(pageCount, currentPage + siblingCount);

    // Always show first page
    if (leftSibling > 1) {
      pages.push(1);
      if (leftSibling > 2) {
        pages.push("...");
      }
    }

    // Show sibling pages around current page
    for (let i = leftSibling; i <= rightSibling; i++) {
      pages.push(i);
    }

    // Always show last page
    if (rightSibling < pageCount) {
      if (rightSibling < pageCount - 1) {
        pages.push("...");
      }
      pages.push(pageCount);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              if (currentPage !== 1 && !isLoading) onPageChange(1);
            }}
            className={
              currentPage === 1 || isLoading
                ? "pointer-events-none opacity-50"
                : ""
            }
            aria-label="Go to first page"
          >
            ⟨⟨
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className={
              currentPage === 1 || isLoading
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>

        {pages.map((page, index) =>
          page === "..." ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => onPageChange(page as number)}
                isActive={currentPage === page}
                className={isLoading ? "pointer-events-none" : ""}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}
            className={
              currentPage === pageCount || isLoading
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            onClick={() => {
              if (currentPage !== pageCount && !isLoading)
                onPageChange(pageCount);
            }}
            className={
              currentPage === pageCount || isLoading
                ? "pointer-events-none opacity-50"
                : ""
            }
            aria-label="Go to last page"
          >
            ⟩⟩
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
}
