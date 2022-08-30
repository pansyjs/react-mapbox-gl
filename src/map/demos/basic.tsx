import { Map } from '@pansy/react-mapbox-gl';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map>
        <span style={{ zIndex: 100 }}>{123}</span>
      </Map>
    </div>
  );
};
