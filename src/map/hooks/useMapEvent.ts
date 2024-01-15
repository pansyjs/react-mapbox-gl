import { useUnmount } from '@pansy/react-hooks';
import { useTrackedEffect } from '../../hooks/useTrackedEffect';

import type { Map } from 'mapbox-gl';
import type { Instance } from '../../types';

export const useMapEvent = <Ins extends Instance, Props extends Record<string, any>>(
  map: Ins,
  props: Props,
  options: {
    eventMap: Record<string, any>;
    eventList: string[];
  },
) => {
  const { eventMap = {}, eventList = [] } = options;

  useTrackedEffect<any>(
    (changeIndexList = [], previousDeps: [Map, ...any[]], currentDeps: [Map, ...any[]]) => {
      if (!map) {
        return;
      }
      // 需要更新的事件对应到 deps 的数组下标，但是不包含 scene 实例的更新
      let eventIndexList = changeIndexList.filter((index) => !!index).map((index) => index - 1);

      // 如果本次变化为实例化则无差别遍历所有事件类型
      if (changeIndexList.includes(0)) {
        eventIndexList = eventList.map((_, index) => index);
      }

      eventIndexList.forEach((index) => {
        const eventName = eventMap[eventList[index]] as string;
        const previousCallback = previousDeps[index + 1] as any;
        const currentCallback = currentDeps[index + 1] as any;
        // 分别注销旧的事件回调并绑定新的事件
        if (previousCallback) {
          map.off(eventName, previousCallback);
        }
        if (currentCallback) {
          map.on(eventName, currentCallback);
        }
      });
    },
    [map, ...eventList.map((eventName) => props[eventName])],
  );

  useUnmount(() => {
    if (!map) {
      return;
    }
    eventList.forEach((key) => {
      const eventName = eventMap[key];
      const callback = props[key];
      if (eventName && callback) {
        map.off(eventName, callback);
      }
    });
  });
};
