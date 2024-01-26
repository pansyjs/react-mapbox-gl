import { Map, Marker, StyleLoaded } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '组件/Marker',
  render: (props) => {
    return (
      <Map containerStyle={{ height: 500 }}>
        <StyleLoaded>
          <Marker {...props}>
            <div style={{ background: 'red', borderRadius: '50%', padding: '3px' }}>123</div>
          </Marker>
        </StyleLoaded>
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
