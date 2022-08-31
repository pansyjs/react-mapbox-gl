import { useState } from 'react';
import { Map, Marker } from '@pansy/react-mapbox-gl';

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
        <Marker
          lngLat={[30.5, 50.5]}
          onDragEnd={(e) => {
            //@ts-ignore
            console.log(e.target.getLngLat());
          }}
          onClick={(e) => {
            //@ts-ignore
            console.log(e.target.getLngLat());
          }}
          draggable={true}

          // render={() => {
          //   return <div style={{ background: 'red' }}>123</div>
          // }}
        >
          <div style={{ background: 'red', borderRadius: '50%', padding: '3px' }}>123</div>
        </Marker>
      </Map>
    </div>
  );
};
