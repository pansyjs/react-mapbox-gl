import { useState } from 'react';
import { Map } from '@pansy/react-mapbox-gl';

export default () => {
  const [enable, setEnable] = useState(true);

  const handleClick1 = () => {
    console.log('1');
  };

  const handleClick2 = () => {
    console.log('2');
  };

  return (
    <div style={{ height: 500 }}>
      <button
        onClick={() => {
          setEnable((enable) => !enable);
        }}
      >
        测试
      </button>
      <Map onClick={enable ? handleClick1 : handleClick2}>
        <span style={{ zIndex: 100 }}>{123}</span>
      </Map>
    </div>
  );
};
