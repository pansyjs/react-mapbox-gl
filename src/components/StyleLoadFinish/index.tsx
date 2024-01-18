import React, { useRef, useEffect, useState } from 'react';
import { isFunction } from '@pansy/shared';
import { useMap } from '../../hooks/useMap';

interface StyleLoadFinishProps {
  children?: React.ReactNode | ((finish: boolean, firstTime: boolean) => React.ReactNode);
}

export const StyleLoadFinish: React.FC<StyleLoadFinishProps> = (props) => {
  const { children } = props;
  const { map } = useMap();
  const [, setStyleLoaded] = useState(0);
  const themeStatus = useRef([0, 0, 0]);
  const checkStylePassRef = useRef(0);

  const forceUpdate = () => {
    setStyleLoaded((version) => version + 1);
  };

  const checkStyle = () => {
    const result = ['031', '131'].includes(themeStatus.current.join(''));

    if (result) {
      checkStylePassRef.current = checkStylePassRef.current + 1;
    }

    return result;
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

  if (isFunction(children)) {
    return children(checkStyle(), checkStylePassRef.current === 2);
  }

  return checkStyle() && (props.children as React.ReactNode);
};
