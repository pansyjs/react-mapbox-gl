import { useEffect, useState } from 'react';
import { Map, Marker, StyleLoaded } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

const TestCom = () => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRender(true);
    }, 5 * 1000);

    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  return (
    isRender && (
      <StyleLoaded>
        <Marker lngLat={[-110.414, 37.776]}>
          <div style={{ background: 'green', borderRadius: '50%', padding: '3px' }}>124</div>
        </Marker>
      </StyleLoaded>
    )
  );
};

const meta = {
  title: '组件/StyleLoaded',
  render: (props) => {
    return (
      <Map
        zoom={1}
        style="mapbox://styles/mapbox/satellite-streets-v12"
        containerStyle={{ height: 500 }}
      >
        <StyleLoaded>
          <Marker lngLat={[-122.414, 37.776]}>
            <div style={{ background: 'red', borderRadius: '50%', padding: '3px' }}>123</div>
          </Marker>
        </StyleLoaded>
        <div>
          <TestCom />
        </div>
      </Map>
    );
  },
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof StyleLoaded>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Event: Story = {
  args: {},
};
