import React, { useEffect } from 'react';
import { Map, useMap } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';

const FlytoComponent = () => {
  const { map } = useMap();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (map) {
      map.once('style.load', () => {
        timeout = setTimeout(() => {
          map.flyTo({
            center: [8.11862, 46.58842],
            zoom: 12.5,
            duration: 12 * 1000,
            essential: true,
          });
        }, 2 * 1000);
      });
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [map]);

  return null;
};

const meta = {
  title: '示例/Flyto',
  render: () => {
    return (
      <Map containerStyle={{ height: '100vh' }} zoom={1} style="mapbox://styles/mapbox/dark-v11">
        <FlytoComponent />
      </Map>
    );
  },
  parameters: {},
  argTypes: {},
  args: {
    containerStyle: {
      height: 500,
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Flyto: Story = {
  args: {},
};
