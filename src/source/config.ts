import type { GeoJSONSource } from 'mapbox-gl';

export const setterMap = {
  data(data: any, source: GeoJSONSource) {
    if (!source) return;

    source.setData(data);
  },
};

export const converterMap = {};
