import { userEvent, within } from '@storybook/test';
import { CustomButton } from '../components/CutsomButton';

export default {
  title: 'Test/CustomButton',
  component: CustomButton,
  args: {
    label: 'myButton',
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'blue',
          value: 'blue',
        },
        {
          name: 'red',
          value: 'red',
        },
      ],
    },
  },
};

export const Solid = {
  args: {
    variant: 'solid',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
  },
};

export const Small = {
  args: {
    size: 'sm',
  },
};

export const Medium = {
  args: {
    size: 'md',
  },
};

export const Large = {
  args: {
    size: 'lg',
  },
};

export const ClickTestButton = {
  args: {
    variant: 'outline',
    label: 'Click!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = await canvas.getByRole('button', {
      name: /click/i,
    });
    await userEvent.click(primaryButton);
  },
};
