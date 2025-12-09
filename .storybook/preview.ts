import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Enables auto-generated documentation for all stories: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default preview;
