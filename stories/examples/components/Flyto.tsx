import React, { useEffect } from 'react';
import { useMap } from '../../../src';

interface FlytoProps {
  center?: [number, number];
  zoom?: number;
}

export const Flyto: React.FC<FlytoProps> = (props) => {
  const { center = [116.36904455256712, 39.94939362625391], zoom = 12.5 } = props;
  const { map } = useMap();

  useEffect(() => {
    if (map) {
      map.flyTo({
        center,
        zoom,
        duration: 12 * 1000,
        essential: true,
      });
    }
  }, [map]);

  return null;
};
