import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CustomButton } from "../components/CustomButton";

const meta = {
  title: "Test/CustomButton",
  component: CustomButton,
  args: {
    label: "myButton",
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: "blue",
          value: "blue",
        },
        {
          name: "red",
          value: "red",
        },
      ],
    },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const ClickTestButton: Story = {
  args: {
    variant: "outline",
    label: "Click!",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = await canvas.getByRole("button", {
      name: /click/i,
    });
    await userEvent.click(primaryButton);
  },
};
