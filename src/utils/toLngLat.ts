import mapbox from 'mapbox-gl';

export const toLngLat = (position: mapbox.LngLatLike): mapbox.LngLat | null => {
  if (!position) return null;

  if ('toBounds' in position) {
    return position;
  }

  let lng = 0;
  let lat = 0;
  if (Array.isArray(position)) {
    lng = position[0];
    lat = position[1];
  } else if ('lng' in position && 'lat' in position) {
    lng = position.lng;
    lat = position.lat;
  } else if ('lon' in position && 'lat' in position) {
    lng = position.lon;
    lat = position.lat;
  }

  if (lng !== 0 && lat !== 0) {
    return new mapbox.LngLat(lng, lat);
  }

  return null;
};
