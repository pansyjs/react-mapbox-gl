import mapboxgl, { Map as Mapbox } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

// @ts-ignore
mapboxgl.workerClass = MapboxWorker;

import { FC } from 'react';

export const Map: FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Mapbox>();

  useEffect(() => {
    if (!container.current) {
      return;
    }

    console.log(container.current);

    const map = new Mapbox({
      container: container.current,
      zoom: 3,
      center: [7.5, 58],
      style: 'mapbox://styles/mapbox/light-v10',
      accessToken:
        'pk.eyJ1IjoiYmVpamluZ3NlbnNvcm8iLCJhIjoiY2wzNDhwMGU2MDAxdzNkbXB2eG5qcGJ4bSJ9.9YrZb00BwBNTsfMTdgj-oA',
    });

    setMap(map);
  }, []);

  return <div ref={container} style={{ height: '100%', width: '100%' }} />;
};
