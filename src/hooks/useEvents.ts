import { useRef, useEffect } from 'react';
import { useDeepCompareEffect, useUnmount } from '@pansy/react-hooks';
import isEqual from 'lodash/isEqual';

export interface Instance extends Record<string, any> {
  on(type: string, handle: (...args: any[]) => void): void;
  off(type: string, handle: (...args: any[]) => void): void;
}

export type Listeners<Events extends Record<string, string>> = {
  [T in keyof Events]: (evt: any) => void;
};

export const useEvents = <Ins extends Instance, Events extends Record<string, string>>(
  ins: Ins,
  events: Events,
  props: Record<string, any> = {},
) => {
  const listeners = useRef<Partial<Listeners<Events>>>({});

  useEffect(() => {
    if (ins) {
      listeners.current = listenEvents(events, props, ins);
    }
  }, [ins]);

  useDeepCompareEffect(() => {
    if (ins) {
      listeners.current = updateEvents(listeners.current, props, ins);
    }
  }, [props]);

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
      const eventCallback = props[event];
      const eventName = partialEvents[event];

      if (eventName && eventCallback) {
        ins.on(eventName, eventCallback);
        // @ts-ignore
        listeners[event] = eventCallback;
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
