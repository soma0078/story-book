import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  Updater,
} from "@tanstack/react-table";
import { PaginationState } from "../hooks";

export interface UseDataTableOptions<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  pagination: PaginationState;
  onPaginationChange: (updater: Updater<PaginationState>) => void;
}

export function useDataTable<TData>({
  data,
  columns,
  pagination,
  onPaginationChange,
}: UseDataTableOptions<TData>) {
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return table;
}
