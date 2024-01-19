import React, { useEffect } from 'react';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { useMap } from '../../../src';

export const Language: React.FC = () => {
  const { map } = useMap();

  useEffect(() => {
    if (map) {
      const language = new MapboxLanguage({
        defaultLanguage: 'zh-Hans',
      });
      map.addControl(language);
    }
  }, [map]);

  return null;
};
