import { Map, Marker } from '@pansy/react-mapbox-gl';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map>
        <Marker
          lngLat={[30.5, 50.5]}
          onDragEnd={(e) => {
            console.log(e);
          }}
          onClick={(e) => {
            console.log(e);
          }}
          draggable={true}
        >
          <div style={{ background: 'red', borderRadius: '50%', padding: '3px' }}>123</div>
        </Marker>
      </Map>
    </div>
  );
};
