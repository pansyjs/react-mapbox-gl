import { useRef, useEffect } from 'react';
import { useDeepCompareEffect, useUnmount } from '@pansy/react-hooks';
import { isEqual } from 'lodash-es';

import type { Map } from 'mapbox-gl';
import type { LayerProps, LayerType, LayerEvents, EventMapping, LayerEventKeys } from '../types';

/**
 * 提供事件绑定的能力
 * @param ins 地图实例
 * @param eventMapping 事件名称对应表
 * @param props
 */
export const useEvents = <T extends LayerType>(
  ins: Map,
  eventMapping: EventMapping,
  props: LayerProps<T>,
) => {
  const listeners = useRef<Partial<LayerEvents>>({});

  useEffect(() => {
    if (ins) {
      listeners.current = listenEvents(eventMapping, props);
    }
  }, [ins]);

  useDeepCompareEffect(() => {
    if (ins) {
      listeners.current = updateEvents(listeners.current, props);
    }
  }, [props]);

  useUnmount(() => {
    unlistenEvents(listeners.current);
    listeners.current = {};
  });

  const listenEvents = (eventMapping: Partial<EventMapping>, props: LayerProps<T>) =>
    (Object.keys(eventMapping) as LayerEventKeys[]).reduce((listeners, event) => {
      const eventCallback = props[event];
      const eventName = eventMapping[event];

      if (eventName && eventCallback) {
        // @ts-ignore
        ins.on(eventName, props.id, eventCallback);
        // @ts-ignore
        listeners[event] = eventCallback;
      }

      return listeners;
    }, {});

  const updateEvents = (listeners: Partial<LayerEvents> = {}, currentProps: LayerProps<T>) => {
    // 解绑旧的事件
    const toListenOff = (Object.keys(eventMapping) as LayerEventKeys[]).filter(
      (eventKey) =>
        (listeners[eventKey] && typeof currentProps[eventKey] !== 'function') ||
        !isEqual(listeners[eventKey], currentProps[eventKey]),
    );

    toListenOff.forEach((key) => {
      if (listeners[key]) {
        // @ts-ignore
        ins.off(key, props.id, listeners[key]);
        delete listeners[key];
      }
    });

    // 绑定新的事件
    const toListenOn = (Object.keys(eventMapping) as LayerEventKeys[])
      .filter((key) => !listeners[key] && typeof currentProps[key] === 'function')
      .reduce<Partial<EventMapping>>((acc, next) => ((acc[next] = eventMapping[next]), acc), {});

    const newListeners = listenEvents(toListenOn, currentProps);

    return { ...listeners, ...newListeners };
  };

  /**
   * 解除监听
   * @param listeners
   * @param ins
   */
  const unlistenEvents = (listeners: Partial<LayerEvents> = {}) => {
    const unlistenList = (Object.keys(eventMapping) as LayerEventKeys[]).filter(
      (eventKey) => listeners[eventKey],
    );

    unlistenList.forEach((key) => {
      // @ts-ignore
      ins.off(key, props.id, listeners[key]);
    });
  };
};
