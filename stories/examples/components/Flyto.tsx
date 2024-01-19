import React, { useEffect } from 'react';
import { useMap } from '../../../src';

export const Flyto: React.FC = () => {
  const { map } = useMap();

  useEffect(() => {
    if (map) {
      map.flyTo({
        center: [116.36904455256712, 39.94939362625391],
        zoom: 12.5,
        duration: 12 * 1000,
        essential: true,
      });
    }
  }, [map]);

  return null;
};
