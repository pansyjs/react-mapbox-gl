import React, { useEffect } from 'react';
import { useMap, Map, Marker, Source, StyleLoadFinish } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';

const MarkerCluster = () => {
  const { map } = useMap();

  useEffect(() => {
    if (map) {
      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6',
            100,
            '#f1f075',
            750,
            '#f28cb1',
          ],
          'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
        },
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'earthquakes',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
      });

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'earthquakes',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#11b4da',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      });

      map.on('click', 'clusters', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });
        const clusterId = features[0].properties?.cluster_id;
        // @ts-ignore
        map.getSource('earthquakes').getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;

          map.easeTo({
            // @ts-ignore
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
      });
    }
  }, [map]);

  return null;
};

const meta = {
  title: '示例/Cluster',
  render: () => {
    return (
      <Map
        zoom={3}
        center={[-103.5917, 40.6699]}
        style="mapbox://styles/mapbox/dark-v11"
        containerStyle={{ height: '100vh' }}
      >
        <StyleLoadFinish>
          <Source
            id="earthquakes"
            type="geojson"
            data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
            cluster
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <MarkerCluster />
          </Source>
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

export const Cluster: Story = {
  args: {},
};
