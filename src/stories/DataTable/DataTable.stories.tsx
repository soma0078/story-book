import { ColumnDef } from "@tanstack/react-table";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "@/components/DataTable";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/lib/hooks";
import { useDataTable } from "@/lib/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const mockData: User[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ["Admin", "User", "Viewer"][i % 3],
}));

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

function DataTableDemo() {
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Page {pageIndex + 1} of {pageCount}
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
  title: "Logic/DataTable/DataTable",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <DataTableDemo />,
};
