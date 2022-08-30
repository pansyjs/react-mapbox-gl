import { useRef, useEffect } from 'react';
import reduce from 'lodash/reduce';
import { useDeepCompareEffect, useUnmount } from '@pansy/react-hooks';
import isEqual from 'lodash/isEqual';
import { isFunction } from '@pansy/shared';

import type { SyntheticEvent } from 'react';

export type Instance = {
  on(type: string, handle: (...args: any[]) => void): void;
  off(type: string, handle: (...args: any[]) => void): void;
};

export type Listeners<Events extends Record<string, string>> = {
  [T in keyof Events]: (evt: SyntheticEvent<any>) => void;
};

const getPropsEvents = (props: Record<string, any> = {}) => {
  return reduce(
    props,
    (result, value, key) => {
      if (isFunction(value) && /^on[A-Z]/.test(key)) {
        // @ts-ignore
        result[key] = value;
      }

      return result;
    },
    {},
  );
};

export const useEvents = <Ins extends Instance, Events extends Record<string, string>>(
  ins: Ins,
  events: Events,
  props: Record<string, any> = {},
) => {
  const listeners = useRef<Partial<Listeners<Events>>>({});

  const propsEvents = getPropsEvents(props);

  useEffect(() => {
    if (ins) {
      listeners.current = listenEvents(events, props, ins);
    }
  }, [ins]);

  useDeepCompareEffect(() => {
    if (ins) {
      listeners.current = updateEvents(listeners.current, propsEvents, ins);
    }
  }, [propsEvents]);

  useUnmount(() => {
    unlistenEvents(listeners.current, ins);
    listeners.current = {};
  });

  const listenEvents = (
    partialEvents: Record<string, string> = {},
    props: Record<string, any> = {},
    ins: Ins,
  ) =>
    Object.keys(partialEvents).reduce((listeners, event) => {
      const propEvent = props[event];

      if (propEvent) {
        ins.on(partialEvents[event], propEvent);
      }

      return listeners;
    }, {});

  const updateEvents = (
    listeners: Partial<Listeners<Events>> = {},
    currentProps: Record<string, any> = {},
    ins: Ins,
  ) => {
    const toListenOff = Object.keys(events).filter(
      (eventKey) =>
        (listeners[eventKey] && typeof currentProps[eventKey] !== 'function') ||
        !isEqual(listeners[eventKey], currentProps[eventKey]),
    );

    toListenOff.forEach((key) => {
      if (listeners[key]) {
        ins.off(events[key], listeners[key] as any);
        delete listeners[key];
      }
    });

    const toListenOn = Object.keys(events)
      .filter((key) => !listeners[key] && typeof currentProps[key] === 'function')
      // @ts-ignore
      .reduce((acc, next) => ((acc[next] = events[next]), acc), {});

    const newListeners = listenEvents(toListenOn, currentProps, ins);

    return { ...listeners, ...newListeners };
  };

  const unlistenEvents = (listeners: Partial<Listeners<Events>> = {}, ins: Ins) => {
    const toListenOff = Object.keys(events).filter((eventKey) => listeners[eventKey]);

    toListenOff.forEach((key) => {
      // @ts-ignore
      ins.off(events[key], listeners[key]);
    });
  };
};
