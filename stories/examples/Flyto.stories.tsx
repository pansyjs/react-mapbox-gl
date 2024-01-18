import React, { useEffect, useState } from 'react';
import { Radio } from 'antd';
import { Map, useMap, StyleLoadFinish } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';

const themes = [
  { label: 'dark', value: 'dark-v11' },
  { label: 'satellite', value: 'satellite-streets-v12' },
];

const getStyleUrl = (value: string) => {
  return `mapbox://styles/mapbox/${value}`;
};

const ThemeComponent = () => {
  const { map } = useMap();
  const [theme, setTheme] = useState(themes[0].value);

  return (
    <div style={{ position: 'absolute', background: '#efefef', right: 0, padding: 12 }}>
      <Radio.Group
        value={theme}
        options={themes}
        onChange={(e) => {
          const value = e.target.value;
          if (map) {
            setTheme(value);
            map.setStyle(getStyleUrl(value));
          }
        }}
      />
    </div>
  );
};

const FlytoComponent = () => {
  const { map } = useMap();

  useEffect(() => {
    if (map) {
      map.flyTo({
        center: [8.11862, 46.58842],
        zoom: 12.5,
        duration: 12 * 1000,
        essential: true,
      });
    }
  }, [map]);

  return null;
};

const meta = {
  title: '示例/Flyto',
  render: () => {
    return (
      <Map containerStyle={{ height: '100vh' }} zoom={1} style={getStyleUrl(themes[0].value)}>
        <StyleLoadFinish>
          {(status, firstTime) => {
            if (firstTime && status) {
              return <FlytoComponent />;
            }
            return null;
          }}
        </StyleLoadFinish>

        <ThemeComponent />
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
