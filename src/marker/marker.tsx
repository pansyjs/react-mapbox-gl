import { Marker as MapboxMarker } from 'mapbox-gl';
import { useGetState } from '@pansy/react-hooks';
import { createPortal } from 'react-dom';
import { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';

import { useMap } from '@/hooks/useMap';
import { useReact } from '@/hooks/useReact';

import { allProps, setterMap, converterMap, mapEventMap } from './config';

import type { MarkerOptions } from 'mapbox-gl';
import type { MarkerProps, EventMapping } from './types';

export const Marker = forwardRef<MapboxMarker, MarkerProps>((props, ref) => {
  const map = useMap();
  const contentWrapper = useRef<HTMLDivElement>();
  const [marker, setMarker, getMarker] = useGetState<MapboxMarker | undefined>(undefined);

  const { onInstanceCreated } = useReact<MarkerProps, MapboxMarker, EventMapping>(props, {
    ins: marker,
    events: mapEventMap,
    setterMap,
    converterMap,
    unmount: () => {
      if (contentWrapper.current) {
        contentWrapper.current.removeEventListener('click', handleClick);
        contentWrapper.current = undefined;
      }
    },
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

        contentWrapper.current?.addEventListener('click', handleClick);

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
