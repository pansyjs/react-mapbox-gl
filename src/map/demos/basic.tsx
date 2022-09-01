import { Map } from '@pansy/react-mapbox-gl';

export default () => {
  return (
    <div style={{ height: 500 }}>
      <Map
        onClick={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};
