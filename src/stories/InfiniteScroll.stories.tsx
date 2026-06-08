import { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useInfiniteScroll } from "@/lib/hooks";

interface Item {
  id: number;
  title: string;
  description: string;
}

const mockAllData: Item[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));

function InfiniteScrollDemo() {
  const { items, hasNextPage, isLoading, loadMore, reset } = useInfiniteScroll({
    initialPageSize: 10,
  });

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isLoading) {
          loadMore(async (cursor, pageSize) => {
            await new Promise((resolve) => setTimeout(resolve, 500));

            const start = cursor ? parseInt(cursor, 10) : 0;
            const end = start + pageSize;
            const newItems = mockAllData.slice(start, end);
            const nextCursor = end < mockAllData.length ? String(end) : null;

            return {
              items: newItems,
              nextCursor,
              hasMore: nextCursor !== null,
            };
          });
        }
      },
      { threshold: 0.1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isLoading, loadMore]);

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        Loaded: {items.length} items
        {isLoading && " (Loading...)"}
      </div>

      <div className="space-y-2 max-h-[500px] overflow-y-auto border rounded-lg p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-3 border rounded bg-white hover:bg-gray-50"
          >
            <div className="font-medium">{item.title}</div>
            <div className="text-sm text-gray-600">{item.description}</div>
          </div>
        ))}

        <div
          ref={observerTarget}
          className="flex items-center justify-center py-8"
        >
          {isLoading && (
            <div className="text-sm text-gray-600">Loading more...</div>
          )}
          {!hasNextPage && items.length > 0 && (
            <div className="text-sm text-gray-600">No more items</div>
          )}
        </div>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Logic/InfiniteScroll",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <InfiniteScrollDemo />,
};
