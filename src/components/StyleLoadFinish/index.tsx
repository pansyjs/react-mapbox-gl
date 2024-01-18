import React, { useRef, useEffect, useState } from 'react';
import { useMap } from '../../hooks/useMap';

interface StyleLoadFinishProps {
  children?: React.ReactNode;
}

export const StyleLoadFinish: React.FC<StyleLoadFinishProps> = (props) => {
  const { map } = useMap();
  const [, setStyleLoaded] = useState(0);
  const themeStatus = useRef([0, 0, 0]);

  const forceUpdate = () => {
    setStyleLoaded((version) => version + 1);
  };

  const checkStyle = () => {
    return ['131', '031'].includes(themeStatus.current.join(''));
  };

  const handleStyleLoading = () => {
    themeStatus.current = [1, 0, 0];
    forceUpdate();
  };

  const handleStyleData = () => {
    themeStatus.current[1] = themeStatus.current[1] + 1;

    if (checkStyle()) {
      forceUpdate();
    }
  };

  const handleStyleLoad = () => {
    themeStatus.current[2] = 1;
  };

  useEffect(() => {
    if (map) {
      map.on('styledataloading', handleStyleLoading);
      map.on('styledata', handleStyleData);
      map.on('style.load', handleStyleLoad);

      return () => {
        map.off('styledataloading', handleStyleLoading);
        map.off('styledata', handleStyleData);
        map.off('style.load', handleStyleLoad);
      };
    }

    return undefined;
  }, [map]);

  return checkStyle() && props.children;
};
