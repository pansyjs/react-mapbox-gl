import * as Mapbox from 'mapbox-gl';
import { forwardRef, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { useBoolean } from '@pansy/react-hooks';
import { getTargetElement } from '@pansy/shared/react';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

import { MapContext } from '@/context';
import { useReact } from '@/hooks/useReact';

import { allProps, mapEventMap, setterMap, converterMap } from './config';

import 'mapbox-gl/dist/mapbox-gl.css';

import type { MapboxOptions } from 'mapbox-gl';
import type { MapProps, EventMapping } from './types';

// @ts-ignore
Mapbox['workerClass'] = MapboxWorker;

export const Map = forwardRef<Mapbox.Map, MapProps>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, readyAction] = useBoolean();
  const [map, setMap] = useState<Mapbox.Map>();

  const { onInstanceCreated } = useReact<MapProps, Mapbox.Map, EventMapping>(props, {
    ins: map,
    events: mapEventMap,
    setterMap,
    converterMap,
  });

  useImperativeHandle(ref, () => map as Mapbox.Map, [map]);

  useEffect(() => {
    const container = getTargetElement(containerRef);

    if (!container) return;

    createInstance().then((map) => {
      onInstanceCreated();

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
});

Map.defaultProps = {
  attributionControl: false,
  style: 'mapbox://styles/mapbox/navigation-preview-night-v2',
  accessToken:
    'pk.eyJ1IjoiYmVpamluZ3NlbnNvcm8iLCJhIjoiY2wzNDhwMGU2MDAxdzNkbXB2eG5qcGJ4bSJ9.9YrZb00BwBNTsfMTdgj-oA',
};
