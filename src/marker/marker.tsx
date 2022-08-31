import { Marker as MapboxMarker } from 'mapbox-gl';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';

import { useMap } from '@/hooks/useMap';
import { useReact } from '@/hooks/useReact';

import { allProps, setterMap, converterMap, mapEventMap } from './config';

import type { MarkerProps, EventMapping } from './types';
import type { MarkerOptions } from 'mapbox-gl';

export const Marker = forwardRef<MapboxMarker, MarkerProps>((props, ref) => {
  const map = useMap();
  const contentWrapper = useRef<HTMLDivElement>();
  const [marker, setMarker] = useState<MapboxMarker>();

  const { onInstanceCreated } = useReact<MarkerProps, MapboxMarker, EventMapping>(props, {
    ins: marker,
    events: mapEventMap,
    setterMap,
    converterMap,
  });

  useImperativeHandle(ref, () => marker as MapboxMarker, [marker]);

  useEffect(() => {
    if (map) {
      createInstance().then((marker) => {
        setMarker(marker);

        marker.setLngLat(props.lngLat);
        marker.addTo(map);
        onInstanceCreated();
      });
    }
  }, [map]);

  const createInstance = () => {
    const options = getCreateOptions();

    contentWrapper.current = document.createElement('div');

    const marker = new MapboxMarker(contentWrapper.current, options);

    return Promise.resolve(marker);
  };

  /** 获取创建参数 */
  const getCreateOptions = () => {
    const options: MarkerOptions = {};

    allProps.forEach((key) => {
      if (key in props) {
        // @ts-ignore
        options[key] = props[key];
      }
    });

    return options;
  };

  return <>{marker && createPortal(props.children, marker.getElement())}</>;
});
