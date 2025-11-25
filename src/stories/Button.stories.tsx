import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

// Storybook을 위한 간단한 플레이스홀더 아이콘
const PlaceholderIcon = ({
  width = 20,
  height = 20,
}: {
  width?: number;
  height?: number;
}): React.ReactNode => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
      fill="currentColor"
    />
  </svg>
);

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "gray"],
    },
    variant: {
      control: { type: "radio" },
      options: ["filled", "lined"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "full"],
    },
    children: {
      control: "text",
    },
    onClick: { action: "clicked" },
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
  // Set default args for all stories
  args: {
    color: "primary",
    variant: "filled",
    size: "md",
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base story for controls
export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const AllSizes: Story = {
  render: () => (
    <>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(4, auto)",
          marginBottom: 10,
        }}
      >
        <Button size="xs">Button XS</Button>
        <Button size="sm">Button SM</Button>
        <Button size="md">Button MD</Button>
        <Button size="lg">Button LG</Button>
      </div>
      <Button size="full">Button XL</Button>
    </>
  ),
};

export const PrimaryFilled: Story = {
  args: {
    color: "primary",
    variant: "filled",
  },
};

export const PrimaryLined: Story = {
  args: {
    color: "primary",
    variant: "lined",
  },
};

export const SecondaryFilled: Story = {
  args: {
    color: "secondary",
    variant: "filled",
  },
};

export const GrayLined: Story = {
  args: {
    color: "gray",
    variant: "lined",
  },
};

export const GrayFilled: Story = {
  args: {
    color: "gray",
    variant: "filled",
  },
};

export const WithStartIcon: Story = {
  args: {
    startIcon: <PlaceholderIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <PlaceholderIcon />,
  },
};

export const IconOnly: Story = {
  args: {
    children: <PlaceholderIcon />,
    size: "md",
  },
};
