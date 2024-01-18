import { useRef, useState, useMemo, useEffect } from 'react';
import { createLayer, updateLayer } from './utils';

import { useMap } from '../../hooks/useMap';
import { isStyleLoaded } from '../../utils/isStyleLoaded';

import type { LayerProps, LayerType } from './types';

let layerCounter = 0;

export const Layer = <T extends LayerType>(props: LayerProps<T>) => {
  const { map } = useMap();
  const propsRef = useRef(props);
  const [, setStyleLoaded] = useState(0);

  const id = useMemo(() => props.id || `jsx-layer-${layerCounter++}`, []);

  useEffect(() => {
    if (map) {
      const forceUpdate = () => setStyleLoaded((version) => version + 1);
      map.on('styledata', forceUpdate);
      forceUpdate();

      return () => {
        map.off('styledata', forceUpdate);

        if (isStyleLoaded(map) && map.getLayer(id)) {
          map.removeLayer(id);
        }
      };
    }
    return undefined;
  }, [map]);

  const layer = isStyleLoaded(map) && map.getLayer(id);

  if (layer) {
    try {
      updateLayer(map, id, props, propsRef.current);
    } catch (error) {
      console.warn(error);
    }
  } else {
    createLayer(map, id, props);
  }

  propsRef.current = props;

  return null;
};
