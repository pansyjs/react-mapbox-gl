import { isEqual } from 'lodash-es';
import { isFunction } from '@pansy/shared';
import { useDeepCompareEffect, useUnmount, usePrevious } from '@pansy/react-hooks';
import { toCapitalString } from '@/utils';

interface Options {
  setterMap?: Record<string, Function>;
  converterMap?: Record<string, Function>;
}

export function usePropsReactive<
  Ins extends Record<string, any> = any,
  P extends Record<string, any> = {},
>(props: P, ins: Ins, { setterMap = {}, converterMap = {} }: Options = {}) {
  const prevProps = usePrevious(props) as P;

  const onInstanceCreated = (instance: Ins) => {
    reactivePropChange(props, false);
  };

  /**
   * 对参数变化进行处理
   * @param nextProps
   * @param shouldDetectChange
   * @returns
   */
  const reactivePropChange = (nextProps: P, shouldDetectChange: boolean = true) => {
    if (!ins) return;

    try {
      Object.keys(nextProps).forEach((key) => {
        /** 忽略事件绑定处理 */
        if (isFunction(props[key]) && /^on[A-Z]/.test(key)) return;

        let willReactive = true;
        if (shouldDetectChange) {
          willReactive = !isEqual(nextProps[key], prevProps?.[key]);
        }
        if (!willReactive) return;

        let setterParam = nextProps[key];
        // 对值进行转换
        if (key in converterMap) {
          setterParam = converterMap[key](nextProps[key]);
        }

        // 设置值
        if (key in setterMap) {
          setterMap[key](setterParam, ins);
        } else {
          const trySetterName = `set${toCapitalString(key)}`;

          if (trySetterName in ins) {
            ins[trySetterName](setterParam);
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onInstanceCreated,
  };
}
