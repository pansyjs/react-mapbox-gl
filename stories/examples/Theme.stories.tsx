import React, { useState, useEffect } from 'react';
import { Radio, App, Button } from 'antd';
import { useMap, Map, StyleLoadFinish } from '../../src';

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

const Child: React.FC = () => {
  useEffect(() => {
    console.log('样式加载成功');

    return () => {
      console.log('切换样式');
    };
  }, []);
  return <Button type="primary">样式加载完成</Button>;
};

const meta = {
  title: '示例/Theme',
  render: () => {
    return (
      <App>
        <Map containerStyle={{ height: '100vh' }} zoom={3} style={getStyleUrl(themes[0].value)}>
          <ThemeComponent />
          <StyleLoadFinish>
            <Child />
          </StyleLoadFinish>
        </Map>
      </App>
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
