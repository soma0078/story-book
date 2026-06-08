import { ColumnDef } from "@tanstack/react-table";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "@/components/DataTable";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/lib/hooks";
import { useDataTable } from "@/lib/DataTable";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

const mockData: Product[] = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ["Electronics", "Clothing", "Books"][i % 3],
  price: Math.floor(Math.random() * 1000) + 10,
  stock: Math.floor(Math.random() * 100),
}));

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.original.price}`,
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
];

function DataTableWithPaginationCombined() {
  const { pagination, onPaginationChange } = usePagination({
    initialPageSize: 10,
  });

  const table = useDataTable({
    data: mockData,
    columns,
    pagination,
    onPaginationChange,
  });

  const pageCount = table.getPageCount();
  const { pageIndex, pageSize } = pagination;
  const start = pageIndex * pageSize;
  const end = Math.min(start + pageSize, mockData.length);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {start + 1} to {end} of {mockData.length} products
        </div>
      </div>

      <DataTable table={table} />

      <Pagination
        currentPage={pageIndex + 1}
        pageCount={pageCount}
        onPageChange={(page) =>
          onPaginationChange({
            pageIndex: page - 1,
            pageSize,
          })
        }
      />
    </div>
  );
}

const meta: Meta = {
  title: "Logic/DataTable/Combined",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const DataTableWithPagination: Story = {
  render: () => <DataTableWithPaginationCombined />,
};
