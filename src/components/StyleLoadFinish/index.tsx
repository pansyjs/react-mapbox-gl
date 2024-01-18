import React, { useRef, useEffect, useState } from 'react';
import { isFunction } from '@pansy/shared';
import { useMap } from '../../hooks/useMap';

/**
 * finish: 样式是否加载完成
 * isFirstTime: 是否是初次加载
 */
type ChildrenFun = (finish: boolean, isFirstTime: boolean) => React.ReactNode;

export interface StyleLoadFinishProps {
  /**
   * 样式加载完成子组件才可渲染，加载中卸载子组件
   * @default false 加载中不卸载子组件
   */
  isFinishRender?: boolean;
  /**
   * 子组件，如果为
   */
  children?: React.ReactNode | ChildrenFun;
}

export const StyleLoadFinish: React.FC<StyleLoadFinishProps> = (props) => {
  const { isFinishRender = false, children } = props;
  const { map } = useMap();
  const [, setStyleLoaded] = useState(0);
  const themeStatus = useRef([0, 0, 0]);
  const checkStylePassRef = useRef(0);

  const forceUpdate = () => {
    setStyleLoaded((version) => version + 1);
  };

  const checkStyle = () => {
    return ['031', '131'].includes(themeStatus.current.join(''));
  };

  const handleStyleLoading = () => {
    themeStatus.current = [1, 0, 0];
    forceUpdate();
  };

  const handleStyleData = () => {
    themeStatus.current[1] = themeStatus.current[1] + 1;

    if (themeStatus.current[1] === 3) {
      checkStylePassRef.current = checkStylePassRef.current + 1;
    }

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
    return children(checkStyle(), checkStylePassRef.current === 1);
  }

  if (!isFinishRender) {
    return checkStylePassRef.current > 0 && (props.children as React.ReactNode);
  }

  return checkStyle() && (props.children as React.ReactNode);
};
