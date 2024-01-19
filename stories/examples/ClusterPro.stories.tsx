import React, { useRef, useEffect, useState } from 'react';
import { Avatar } from 'antd';
import { Map, Marker, StyleLoadFinish, MarkerCluster } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';
import type { Supercluster, MarkerClusterProps } from '../../src';

const meta = {
  title: '示例/ClusterPro',
  render: () => {
    const [features, setFeatures] = useState<MarkerClusterProps['data']>([]);
    const clusterRef = useRef<Supercluster>(null);

    useEffect(() => {
      fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
        .then((res) => res.json())
        .then((data) => {
          setFeatures(data.features);
        });
    }, []);

    return (
      <Map
        zoom={3}
        center={[-103.5917, 40.6699]}
        style="mapbox://styles/mapbox/dark-v11"
        containerStyle={{ height: '100vh' }}
      >
        <StyleLoadFinish>
          <MarkerCluster
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
