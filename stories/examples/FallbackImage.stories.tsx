import { Language } from './components/Language';
import { Map, Marker, Source, StyleLoaded, Layer } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';
import type { LayerProps } from '../../src';

const pointsLayer: LayerProps = {
  id: 'points',
  type: 'symbol',
  source: 'points',
  layout: {
    // These icons are a part of the Mapbox Light style.
    // To view all images available in a Mapbox style, open
    // the style in Mapbox Studio and click the "Images" tab.
    // To add a new image to the style at runtime see
    // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
    'icon-image': [
      'coalesce',
      ['image', ['get', 'icon']],
      // If no image with the name above exists, show the
      // "rocket" image instead.
      ['image', 'rocket'],
    ],
    'text-field': ['get', 'title'],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
  },
};

const meta = {
  title: '示例/FallbackImage',
  render: () => {
    return (
      <Map zoom={5} center={[-77, 38.75]} containerStyle={{ height: '100vh' }}>
        <StyleLoaded>
          <Source
            id="points"
            type="geojson"
            data={{
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-77.03238901390978, 38.913188059745586],
                  },
                  properties: {
                    title: 'Washington DC',
                    icon: 'monument',
                  },
                },
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-79.9959, 40.4406],
                  },
                  properties: {
                    title: 'Pittsburgh',
                    // The Mapbox Light style's sprite does not
                    // contain an image with the name "bridges"
                    // but we can display a fallback image.
                    icon: 'bridges',
                  },
                },
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-76.2859, 36.8508],
                  },
                  properties: {
                    title: 'Norfolk',
                    icon: 'harbor',
                  },
                },
              ],
            }}
            cluster
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...pointsLayer} />
          </Source>
        </StyleLoaded>
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

export const FallbackImage: Story = {
  args: {},
};
