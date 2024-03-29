import React, { useEffect, useImperativeHandle } from 'react';
import Mapbox from 'mapbox-gl';
import { useGetState, usePortal } from '@rcuse/core';
import { useMap } from '../../hooks/useMap';
import { usePropsReactive } from '../../hooks/usePropsReactive';
import { useEvents } from '../../hooks/useEvents';
import { allProps, setterMap, converterMap } from './config';
import { MarkerEventMap, MarkerEventList } from './constant';

import type { MarkerProps, PropKey, MapboxMarker, MarkerOptions } from './types';

export const Marker = React.forwardRef<MapboxMarker, MarkerProps>((props, ref) => {
  const { map } = useMap();
  const { Portal, container } = usePortal();
  const [marker, setMarker, getMarker] = useGetState<MapboxMarker>();

  const { onInstanceCreated } = usePropsReactive(props, marker!, {
    setterMap,
    converterMap,
  });

  useEvents<MapboxMarker, MarkerProps>(marker!, props, {
    eventMap: MarkerEventMap,
    eventList: MarkerEventList,
  });

  useImperativeHandle(ref, () => marker as MapboxMarker, [marker]);

  const handleClick = (e: MouseEvent) => {
    props.onClick?.({
      type: 'click',
      target: getMarker() as MapboxMarker,
      originalEvent: e,
    });
  };

  const handleDoubleClick = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    if (map) {
      createInstance().then((marker) => {
        setMarker(marker);

        marker.addTo(map);

        container.addEventListener('click', handleClick);
        // Marker 应阻止双击事件冒泡
        container.addEventListener('dblclick', handleDoubleClick);

        onInstanceCreated();
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleClick);
        container.removeEventListener('dblclick', handleClick);
      }
    };
  }, [map]);

  const createInstance = () => {
    const options = getCreateOptions(props);

    if (options.lngLat) {
      const marker = new Mapbox.Marker(container, options);
      marker.setLngLat(options.lngLat);

      return Promise.resolve(marker);
    } else {
      return Promise.reject();
    }
  };

  /** 获取创建参数 */
  const getCreateOptions = (props: MarkerProps) => {
    const options: MarkerOptions & {
      lngLat?: MarkerProps['lngLat'];
    } = {};

    allProps.forEach((key) => {
      if (key in props) {
        // @ts-ignore
        options[key] = getSetterValue(key, props);
      }
    });

    return options;
  };

  const getSetterValue = (key: PropKey, props: MarkerProps) => {
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
