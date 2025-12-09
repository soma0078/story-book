import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";

const meta = {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    user: {
      control: "object",
      table: {
        category: "State",
      },
    },
    onLogin: {
      action: "onLogin",
      table: {
        category: "Events",
      },
    },
    onLogout: {
      action: "onLogout",
      table: {
        category: "Events",
      },
    },
    onCreateAccount: {
      action: "onCreateAccount",
      table: {
        category: "Events",
      },
    },
  },
  args: {
    user: undefined,
    onLogin: () => {},
    onLogout: () => {},
    onCreateAccount: () => {},
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {
  args: {
    user: undefined,
  },
};
