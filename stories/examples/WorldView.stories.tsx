import { useState } from 'react';
import { Radio } from 'antd';
import { Map, StyleLoaded, WorldView as WorldViewCom } from '../../src';
import { Language } from './components/Language';
import { Flyto } from './components/Flyto';

import type { Meta, StoryObj } from '@storybook/react';

const worldViews = [
  {
    value: 'CN',
    label: '中国',
  },
  {
    value: 'IN',
    label: '印度',
  },
  {
    value: 'JP',
    label: '日本',
  },
  {
    value: 'US',
    label: '美国',
  },
];

const meta = {
  title: '示例/WorldView',
  render: () => {
    const [worldView, setWorldView] = useState(worldViews[0].value);

    return (
      <Map
        containerStyle={{ height: '100vh' }}
        zoom={1}
        style="mapbox://styles/mapbox/light-v11"
        onClick={(e) => {
          console.log(e);
        }}
      >
        <StyleLoaded>
          <Flyto center={[85.14477595859074, 29.68859973130745]} zoom={4} />
          <WorldViewCom code={worldView as any} />
        </StyleLoaded>
        <Language />

        <div style={{ position: 'absolute', background: '#efefef', right: 0, padding: 12 }}>
          <Radio.Group
            value={worldView}
            options={worldViews}
            onChange={(e) => {
              setWorldView(e.target.value);
            }}
          />
        </div>
      </Map>
    );
  },
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorldView: Story = {
  args: {},
};
