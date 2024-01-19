import React, { useRef, useState } from 'react';
import { Avatar } from 'antd';
import { Map, Marker, StyleLoadFinish, MarkerCluster } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';
import type { Supercluster, MarkerClusterProps } from '../../src';

interface UserInfo {
  id: number;
  name: string;
}

const randomLnglat = () => [100 + Math.random() * 20, 30 + Math.random() * 20];

const getFeatures = (len = 10): MarkerClusterProps<UserInfo>['data'] =>
  Array(len)
    .fill(true)
    .map((_, index) => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: randomLnglat(),
        },
        properties: {
          id: index,
          name: `name${index}`,
        },
      };
    });

const meta = {
  title: '示例/ClusterPro',
  render: () => {
    const [features] = useState<MarkerClusterProps['data']>(getFeatures());
    const clusterRef = useRef<Supercluster>(null);

    return (
      <Map
        zoom={3}
        center={[116.36904455256712, 39.94939362625391]}
        style="mapbox://styles/mapbox/dark-v11"
        containerStyle={{ height: '100vh' }}
      >
        <StyleLoadFinish>
          <MarkerCluster<UserInfo>
            ref={clusterRef}
            data={features}
            zoomOnClick
            render={<Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>}
            renderCluster={(count) => {
              return (
                <Avatar size={54} style={{ backgroundColor: '#87d068' }}>
                  {count}
                </Avatar>
              );
            }}
            onClick={(data) => {
              console.log(data);
            }}
            onClusterClick={(count, clusterId) => {
              console.log(count);

              if (clusterRef.current) {
                console.log(clusterRef.current.getLeaves(clusterId, Infinity));
              }
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
