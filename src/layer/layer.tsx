import { useEffect } from 'react';

import { useMap } from '@/hooks/useMap';
import { useEvents } from './hooks/useEvents';

import { eventMapping } from './config';

import type { AnyLayer } from 'mapbox-gl';
import type { LayerProps, LayerType } from './types';

export const Layer = <T extends LayerType>(props: LayerProps<T>) => {
  const { before, ...rest } = props;
  const map = useMap();

  useEvents<T>(map, eventMapping, props);

  useEffect(() => {
    if (map) {
      map.addLayer(rest as AnyLayer, before);
    }
  }, [map]);

  return null;
};
