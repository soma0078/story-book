import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@/components/Pagination";

const meta: Meta = {
  title: "Logic/Pagination",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Current Page: {currentPage} of {totalPages}
        </div>
        <Pagination
          currentPage={currentPage}
          pageCount={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;

    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Current Page: {currentPage} of {totalPages}
        </div>
        <Pagination
          currentPage={currentPage}
          pageCount={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};
