import { Map, MapProps } from '@pansy/react-mapbox-gl';

export default () => {
  const mapSetup: MapProps = {
    projection: { name: 'globe' },
    zoom: 2,
    style: 'mapbox://styles/mapbox/satellite-v9',
  };

  return (
    <div style={{ height: 500 }}>
      <Map
        onClick={(e) => {
          console.log(e);
        }}
        {...mapSetup}
        onLoad={(e) => {
          const map = e.target;
          map.setFog({});
        }}
      />
    </div>
  );
};
