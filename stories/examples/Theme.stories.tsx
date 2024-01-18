import React, { useState, useRef } from 'react';
import { Radio } from 'antd';
import { Map, useMap } from '../../src';

import type { Meta, StoryObj } from '@storybook/react';

const themes = [
  { label: 'light', value: 'light-v11' },
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
    <div style={{ position: 'absolute', background: '#efefef', padding: 12 }}>
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

const meta = {
  title: '示例/Theme',
  render: () => {
    const themeStatus = useRef([0, 0, 0]);

    return (
      <Map
        containerStyle={{ height: '100vh' }}
        zoom={3}
        style={getStyleUrl(themes[0].value)}
        onStyleDataLoading={(e) => {
          console.log('styledataloading', e);
          themeStatus.current = [1, 0, 0];
        }}
        onStyleData={(e) => {
          console.log('styledata', e);
          themeStatus.current[1] = themeStatus.current[1] + 1;
          if (['131', '031'].includes(themeStatus.current.join(''))) {
            console.log('样式加载完成');
          }
        }}
        onStyleLoad={(e) => {
          themeStatus.current[2] = 1;
          console.log('style.load', e);
        }}
      >
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

export const Theme: Story = {
  args: {},
};
