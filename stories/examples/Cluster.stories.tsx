import React, { useEffect } from 'react';
import { Language } from './components/Language';
import { useMap, Map, Marker, Source, StyleLoadFinish, Layer } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';
import type { LayerProps } from '../../src';

const clusterLayer: LayerProps = {
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
  },
};

const clusterCountLayer: LayerProps = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12,
  },
};

const unclusteredPointLayer: LayerProps = {
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
};

const MarkerCluster = () => {
  const { map } = useMap();

  useEffect(() => {
    if (map) {
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
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
            <MarkerCluster />
          </Source>
        </StyleLoadFinish>
        <Language />
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
