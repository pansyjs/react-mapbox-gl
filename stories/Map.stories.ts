import type { Meta, StoryObj } from '@storybook/react';

import { Map } from '../src';

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

export const Primary: Story = {
  args: {},
};
