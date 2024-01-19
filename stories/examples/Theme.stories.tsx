import React, { useEffect } from 'react';
import { App, Button, Space } from 'antd';
import { Map, StyleLoadFinish } from '../../src';
import { Language } from './components/Language';
import { Theme as ThemeCom, getStyleUrl } from './components/Theme';

import type { Meta, StoryObj } from '@storybook/react';

const themes = [
  { label: 'light', value: 'light-v11' },
  { label: 'dark', value: 'dark-v11' },
  { label: 'satellite', value: 'satellite-streets-v12' },
];

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
          <ThemeCom />
          <Space>
            <StyleLoadFinish>
              <Button type="primary">初次样式加载完成</Button>;
            </StyleLoadFinish>
            <StyleLoadFinish isFinishRender>
              <Child />
            </StyleLoadFinish>
          </Space>
          <Language />
        </Map>
      </App>
    );
  },
  parameters: {},
  argTypes: {},
  args: {
    containerStyle: {
      height: '100vh',
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Theme: Story = {
  args: {},
};
