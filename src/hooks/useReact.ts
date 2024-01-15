import { useDeepCompareEffect, useUnmount, usePrevious } from '@pansy/react-hooks';
import { isEqual } from 'lodash-es';
import { isFunction } from '@pansy/shared';

import { toCapitalString } from '@/utils';
import { useEvents } from './useEvents';

import type { Instance } from './useEvents';

export interface Options<Ins, Events> {
  ins?: Ins;
  events: Events;
  setterMap?: Record<string, Function>;
  converterMap?: Record<string, Function>;
  unmount?: () => void;
}

/**
 * 将参数分隔为事件和非事件两种
 * @param props
 * @returns
 */
const splitPropsByEvent = (props: Record<string, any> = {}) => {
  let eventProps: Record<string, any> = {};
  let notEventProps: Record<string, any> = {};

  Object.keys(props).forEach((key) => {
    const item = props[key];
    if (isFunction(item) && /^on[A-Z]/.test(key)) {
      eventProps[key] = item;
    } else {
      notEventProps[key] = item;
    }
  });

  return { eventProps, notEventProps };
};

/**
 * 提供实例事件监听/动态属性的设置能力
 * @param props
 * @param options
 * @returns
 */
export const useReact = <
  P extends Record<string, any>,
  Ins extends Instance,
  Events extends Record<string, string>,
>(
  props: P = {} as P,
  options: Options<Ins, Events>,
) => {
  const { ins, events, setterMap = {}, converterMap = {}, unmount } = options;
  const { eventProps, notEventProps } = splitPropsByEvent(props);
  const prevProps = usePrevious(notEventProps);

  console.log(eventProps);

  // useEvents(ins as Ins, events, eventProps);

  useDeepCompareEffect(() => {
    if (ins) {
      reactivePropChange(notEventProps as P, true);
    }
  }, [notEventProps]);

  useUnmount(() => {
    if (ins && 'remove' in ins) {
      ins.remove();
    }
    unmount?.();
  });

  const reactivePropChange = (nextProps: P, shouldDetectChange = true) => {
    if (!ins) return;

    try {
      Object.keys(nextProps).forEach((key) => {
        let willReactive = true;
        if (shouldDetectChange) {
          willReactive = !isEqual(nextProps[key], prevProps?.[key]);
        }
        if (!willReactive) return;

        // @ts-ignore
        let setterParam = nextProps[key];

        // 对值进行转换
        if (key in converterMap) {
          // @ts-ignore
          setterParam = converterMap[key](nextProps[key]);
        }

        if (key in setterMap) {
          setterMap[key](setterParam, ins, nextProps);
        } else {
          const trySetterName = `set${toCapitalString(key)}`;

          if (trySetterName in ins) {
            ins[trySetterName](setterParam);
          }
        }
      });
    } catch (err) {}
  };

  const onInstanceCreated = () => {
    reactivePropChange(props, false);
  };

  return { onInstanceCreated };
};
