import React from 'react';
import { Map, Marker, StyleLoadFinish } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '组件/Marker',
  render: (props) => {
    return (
      <Map containerStyle={{ height: 500 }}>
        <StyleLoadFinish>
          <Marker {...props}>
            <div style={{ background: 'red', borderRadius: '50%', padding: '3px' }}>123</div>
          </Marker>
        </StyleLoadFinish>
      </Map>
    );
  },
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    lngLat: [-122.414, 37.776],
  },
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Event: Story = {
  args: {
    onClick: (e) => {
      console.log(e);
    },
  },
};
