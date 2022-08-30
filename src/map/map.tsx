import * as Mapbox from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { useBoolean } from '@pansy/react-hooks';
import { getTargetElement } from '@pansy/shared/react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
import { allProps, setterMap, converterMap } from './config';

import type { MapboxOptions } from 'mapbox-gl';
import type { MapProps } from './types';

// @ts-ignore
Mapbox.workerClass = MapboxWorker;

import { FC } from 'react';

export const Map: FC<MapProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, readyAction] = useBoolean(false);
  const [map, setMap] = useState<Mapbox.Map>();

  useEffect(() => {
    const container = getTargetElement(containerRef);

    if (!container) return;

    createInstance().then((map) => {
      map.once('load', () => {
        readyAction.setTrue();
      });

      setMap(map);
    });
  }, []);

  /** 创建地图实例 */
  const createInstance = () => {
    const options = getCreateOptions();
    return Promise.resolve(new Mapbox.Map(options));
  };

  /** 获取创建地图的参数 */
  const getCreateOptions = () => {
    const container = getTargetElement(containerRef) as HTMLDivElement;

    const options: MapboxOptions = {
      container,
    };

    allProps.forEach((key) => {
      if (key in props) {
        // @ts-ignore
        options[key] = getSetterValue(key, props);
      }
    });

    return options;
  };

  const getSetterValue = (key: string, props: MapProps) => {
    if (key in converterMap) {
      // @ts-ignore
      return converterMap[key](props[key]);
    }

    // @ts-ignore
    return props[key];
  };

  return (
    <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
      {ready && props.children}
    </div>
  );
};

Map.defaultProps = {
  attributionControl: false,
  style: 'mapbox://styles/beijingsensoro/cl5ufc8qi001j15n1vn8lmhe9',
  accessToken:
    'pk.eyJ1IjoiYmVpamluZ3NlbnNvcm8iLCJhIjoiY2wzNDhwMGU2MDAxdzNkbXB2eG5qcGJ4bSJ9.9YrZb00BwBNTsfMTdgj-oA',
};
