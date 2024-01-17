import { Map } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '组件/Map',
  component: Map,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    containerStyle: {
      height: 500,
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Event: Story = {
  args: {
    onClick: (e) => {
      console.log(e);
    },
  },
};
