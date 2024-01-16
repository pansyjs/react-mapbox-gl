import Mapbox from 'mapbox-gl';
import { useGetState, usePortal } from '@pansy/react-hooks';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '@/hooks/useMap';
import { useReact } from '@/hooks/useReact';
import { allProps, setterMap, converterMap } from './config';

import type { Marker as MapboxMarker, MarkerOptions } from 'mapbox-gl';
import type { MarkerProps, EventMapping, PropKeys } from './types';

export const Marker = forwardRef<MapboxMarker, MarkerProps>((props, ref) => {
  const { map } = useMap();
  const { Portal, container } = usePortal();
  const [marker, setMarker, getMarker] = useGetState<MapboxMarker | undefined>(undefined);

  // const { onInstanceCreated } = usePropsReactive(
  //   props,
  //   marker!,
  //   {
  //     setterMap,
  //     converterMap
  //   }
  // );

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

    if (options.lnglat) {
      const marker = new Mapbox.Marker(container, options);
      marker.setLngLat(options.lnglat);

      return Promise.resolve(marker);
    } else {
      return Promise.reject();
    }
  };

  /** 获取创建参数 */
  const getCreateOptions = (props: MarkerProps) => {
    const options: MarkerOptions & {
      lnglat?: MarkerProps['lnglat'];
    } = {};

    allProps.forEach((key) => {
      if (key in props) {
        // @ts-ignore
        options[key] = getSetterValue(key, props);
      }
    });

    return options;
  };

  const getSetterValue = (key: PropKeys, props: MarkerProps) => {
    let value = props[key];

    if (key in converterMap) {
      try {
        value = converterMap[key]?.(props[key]);
      } catch (error) {}
    }

    return value;
  };

  return <>{marker && <Portal>{props.children}</Portal>}</>;
});
