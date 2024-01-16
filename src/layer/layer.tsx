import { useEffect } from 'react';

import { useMap } from '../hooks/useMap';
import { useEvents } from '../hooks/useEvents';

import { LayerEventList, LayerEventMap } from './constant';

import type { AnyLayer, Map } from 'mapbox-gl';
import type { LayerProps, LayerType } from './types';

export const Layer = <T extends LayerType>(props: LayerProps<T>) => {
  const { before, ...rest } = props;
  const { map } = useMap();

  useEvents<Map, LayerProps<T>>(map, props, {
    eventMap: LayerEventMap,
    eventList: LayerEventList,
  });

  useEffect(() => {
    if (map) {
      map.addLayer(rest as AnyLayer, before);
    }
  }, [map]);

  return null;
};
