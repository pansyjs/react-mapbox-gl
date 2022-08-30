import * as Mapbox from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { useBoolean } from '@pansy/react-hooks';
import { getTargetElement } from '@pansy/shared/react';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

import { MapContext } from '@/context';
import { useEvents } from '@/hooks/useEvents';

import { allProps, mapEventMap } from './config';

import 'mapbox-gl/dist/mapbox-gl.css';

import type { FC } from 'react';
import type { MapboxOptions } from 'mapbox-gl';
import type { MapProps, EventMapping } from './types';

// @ts-ignore
Mapbox.workerClass = MapboxWorker;

export const Map: FC<MapProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, readyAction] = useBoolean(false);
  const [map, setMap] = useState<Mapbox.Map>();

  useEvents<Mapbox.Map, EventMapping>(map as Mapbox.Map, mapEventMap, props);

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
        options[key] = props[key];
      }
    });

    return options;
  };

  return (
    <MapContext.Provider value={map}>
      <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
        {ready && props.children}
      </div>
    </MapContext.Provider>
  );
};

Map.defaultProps = {
  attributionControl: false,
  style: 'mapbox://styles/mapbox/navigation-preview-night-v2',
  accessToken:
    'pk.eyJ1IjoiYmVpamluZ3NlbnNvcm8iLCJhIjoiY2wzNDhwMGU2MDAxdzNkbXB2eG5qcGJ4bSJ9.9YrZb00BwBNTsfMTdgj-oA',
};
