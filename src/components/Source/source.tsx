import React, { useEffect, useState, useRef, useMemo, cloneElement } from 'react';
import { useMap } from '../../hooks/useMap';
import { isStyleLoaded } from '../../utils/isStyleLoaded';
import { updateSource, createSource } from './utils';

import type { SourceProps } from './types';

let sourceCounter = 0;

export function Source(props: SourceProps) {
  const { map } = useMap();
  const propsRef = useRef(props);
  const [, setStyleLoaded] = useState(0);

  const id = useMemo(() => props.id || `jsx-source-${sourceCounter++}`, []);

  useEffect(() => {
    if (map) {
      const forceUpdate = () => setTimeout(() => setStyleLoaded((version) => version + 1), 0);
      map.on('styledata', forceUpdate);
      forceUpdate();

      return () => {
        map.off('styledata', forceUpdate);

        if (map.getStyle() && isStyleLoaded(map) && map.getSource(id)) {
          const allLayers = map.getStyle()?.layers;

          if (allLayers) {
            for (const layer of allLayers) {
              // @ts-ignore (2339) source does not exist on all layer types
              if (layer.source === id) {
                map.removeLayer(layer.id);
              }
            }
          }

          map.removeSource(id);
        }
      };
    }

    return undefined;
  }, [map]);

  let source = map && map.getStyle() && map.getSource(id);
  if (source) {
    updateSource(source, props, propsRef.current);
  } else {
    source = createSource(map, id, props)!;
  }
  propsRef.current = props;

  return (
    (source &&
      React.Children.map(
        props.children,
        (child) =>
          child &&
          cloneElement(child as any, {
            source: id,
          }),
      )) ||
    null
  );
}
