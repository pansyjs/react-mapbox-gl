import type { Map } from 'mapbox-gl';

export const isStyleLoaded = (map: Map): boolean => {
  // @ts-ignore
  return map.style && map.style._loaded;
};
