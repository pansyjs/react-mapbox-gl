import { useEffect, useState } from 'react';

import { useMap } from '@/hooks/useMap';

import type { AnyLayer } from 'mapbox-gl';
import type { LayerProps, LayerType } from './types';

export const Layer = <T extends LayerType>(props: LayerProps<T>) => {
  const { before, ...rest } = props;
  const map = useMap();
  const [layer, setLayer] = useState<AnyLayer>();

  useEffect(() => {
    if (map) {
      map.addLayer(rest as AnyLayer, before);

      // setLayer(map.getLayer(props.id));
    }
  }, [map]);

  return null;
};
