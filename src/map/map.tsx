import mapbox from 'mapbox-gl';
import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MapContext } from './context';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

import type { MapContextValue } from './context';

export interface MapProps {
  /** 地图加载前的加载效果 */
  loading?: React.ReactNode;
  children?: React.ReactNode;
}

export const Map: React.FC<MapProps> = (props) => {
  const { loading, children } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<mapbox.Map>();

  const { current: contextValue } = useRef<MapContextValue>({} as MapContextValue);

  useEffect(() => {
    if (!containerRef.current) return;
    let instance: mapbox.Map;

    mapbox.accessToken =
      'pk.eyJ1IjoienQyMDIzMTEwOSIsImEiOiJjbG9xdGgxcDMwbDAyMmpwODVrNG5seXphIn0.1xKSk8Ll-80kkEwtzfLWhw';
    instance = new mapbox.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 0,
    });

    contextValue.map = instance;

    instance.once('load', () => {
      setMapInstance(instance);
    });
  }, [containerRef]);

  return (
    <div ref={containerRef} style={{ width: 500, height: 500 }}>
      {!mapInstance && loading}
      {mapInstance && <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>}
    </div>
  );
};
