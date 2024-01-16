import React, { useEffect } from 'react';
import { Map, useMap } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '组件/Map',
  component: Map,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {
    containerStyle: {
      height: 500,
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Event: Story = {
  args: {
    onClick: (e) => {
      console.log(e);
    },
  },
};

const FlytoDemo = () => {
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

export const Flyto: Story = {
  render: () => {
    return (
      <Map containerStyle={{ height: 500 }} zoom={1} style="mapbox://styles/mapbox/dark-v11">
        <FlytoDemo />
      </Map>
    );
  },
};
