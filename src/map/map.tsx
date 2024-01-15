import Mapbox from 'mapbox-gl';
import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MapContext } from './context';
import { useReact } from '@/hooks/useReact';
import { allProps, mapEventMap, setterMap, converterMap } from './config';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

import type { MapContextValue } from './context';
import type { MapProps, EventMapping, MapboxOptionKeys } from './types';

Mapbox.accessToken =
  'pk.eyJ1IjoienQyMDIzMTEwOSIsImEiOiJjbG9xdGgxcDMwbDAyMmpwODVrNG5seXphIn0.1xKSk8Ll-80kkEwtzfLWhw';

export const Map = forwardRef<Mapbox.Map, MapProps>((props, ref) => {
  const { loading, children } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<Mapbox.Map>();

  const { current: contextValue } = useRef<MapContextValue>({} as MapContextValue);

  const { onInstanceCreated } = useReact<MapProps, Mapbox.Map, EventMapping>(props, {
    ins: mapInstance,
    events: mapEventMap,
    setterMap,
    converterMap,
  });

  useImperativeHandle(ref, () => mapInstance as Mapbox.Map, [mapInstance]);

  useEffect(() => {
    if (!containerRef.current) return;
    createInstance().then((map) => {
      onInstanceCreated();

      contextValue.map = map;

      map.once('load', () => {
        setMapInstance(map);
      });
    });
  }, [containerRef]);

  /** 创建地图实例 */
  const createInstance = () => {
    const options = getCreateOptions(props);
    return Promise.resolve(new Mapbox.Map(options));
  };

  /** 获取创建地图的参数 */
  const getCreateOptions = (props: MapProps) => {
    const container = containerRef.current as HTMLDivElement;

    const options: Partial<Record<MapboxOptionKeys, any>> = {
      container,
    };

    allProps.forEach((key) => {
      if (key in props && key !== 'container') {
        options[key] = props[key];
      }
    });

    return options as Mapbox.MapboxOptions;
  };

  return (
    <div ref={containerRef} style={{ width: 500, height: 500 }}>
      {!mapInstance && loading}
      {mapInstance && <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>}
    </div>
  );
});
