import Mapbox from 'mapbox-gl';
import { useGetState, usePortal } from '@pansy/react-hooks';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '@/hooks/useMap';
import { useReact } from '@/hooks/useReact';
import { allProps, setterMap, converterMap } from './config';

import type { Marker as MapboxMarker, MarkerOptions } from 'mapbox-gl';
import type { MarkerProps, EventMapping } from './types';

export const Marker = forwardRef<MapboxMarker, MarkerProps>((props, ref) => {
  const { map } = useMap();
  const { Portal, container } = usePortal();
  const [marker, setMarker, getMarker] = useGetState<MapboxMarker | undefined>(undefined);

  const { onInstanceCreated } = useReact<MarkerProps, MapboxMarker, EventMapping>(props, {
    ins: marker,
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

        marker.addTo(map);

        container.addEventListener('click', handleClick);

        onInstanceCreated();
      });
    }
  }, [map]);

  const createInstance = () => {
    const options = getCreateOptions(props);
    const marker = new Mapbox.Marker(container, options);

    return Promise.resolve(marker);
  };

  /** 获取创建参数 */
  const getCreateOptions = (props: MarkerProps) => {
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
