import { Map } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '组件/Map',
  component: Map,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
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
