import { Marker as MapboxMarker } from 'mapbox-gl';
import { useGetState, usePortal } from '@pansy/react-hooks';
import { forwardRef, useEffect, useImperativeHandle } from 'react';

import { useMap } from '@/hooks/useMap';
import { useReact } from '@/hooks/useReact';

import { allProps, setterMap, converterMap, mapEventMap } from './config';

import type { MarkerOptions } from 'mapbox-gl';
import type { MarkerProps, EventMapping } from './types';

export const Marker = forwardRef<MapboxMarker, MarkerProps>((props, ref) => {
  const map = useMap();
  const { Portal, container } = usePortal();
  const [marker, setMarker, getMarker] = useGetState<MapboxMarker | undefined>(undefined);

  const { onInstanceCreated } = useReact<MarkerProps, MapboxMarker, EventMapping>(props, {
    ins: marker,
    events: mapEventMap,
    setterMap,
    converterMap,
  });

  useImperativeHandle(ref, () => marker as MapboxMarker, [marker]);

  const handleClick = (e: MouseEvent) => {
    props.onClick?.({
      type: 'click',
      target: getMarker() as MapboxMarker,
      originalEvent: e,
    });
  };

  useEffect(() => {
    if (map) {
      createInstance().then((marker) => {
        setMarker(marker);

        marker.setLngLat(props.lngLat);
        marker.addTo(map);

        container.addEventListener('click', handleClick);

        onInstanceCreated();
      });
    }
  }, [map]);

  const createInstance = () => {
    const options = getCreateOptions();

    const marker = new MapboxMarker(container, options);
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

  return <>{marker && <Portal>{props.children}</Portal>}</>;
});
