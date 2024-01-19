import React, { useRef } from 'react';
import { Avatar } from 'antd';
import { Map, Marker, StyleLoadFinish, MarkerCluster } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';
import type { Supercluster } from '../../src';

const meta = {
  title: '示例/ClusterPro',
  render: () => {
    const clusterRef = useRef<Supercluster>(null);

    return (
      <Map
        zoom={3}
        center={[-103.5917, 40.6699]}
        style="mapbox://styles/mapbox/dark-v11"
        containerStyle={{ height: '100vh' }}
      >
        <StyleLoadFinish>
          <MarkerCluster
            cluster={{ radius: 50 }}
            ref={clusterRef}
            render={<Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>}
            renderCluster={(count) => {
              return (
                <Avatar size={54} style={{ backgroundColor: '#87d068' }}>
                  {count}
                </Avatar>
              );
            }}
          />
        </StyleLoadFinish>
      </Map>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {
    lngLat: [-122.414, 37.776],
  },
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClusterPro: Story = {
  args: {},
};
