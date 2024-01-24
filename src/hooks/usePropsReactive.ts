import { isFunction } from '@pansy/shared';
import { useDeepCompareEffect, useUnmount, usePrevious } from '@pansy/react-hooks';
import { toCapitalString } from '../utils/toCapitalString';
import { deepEqual } from '../utils/deepEqual';

interface Options {
  setterMap?: Record<string, Function>;
  converterMap?: Record<string, Function>;
}

export function usePropsReactive<
  Ins extends Record<string, any> = any,
  P extends Record<string, any> = {},
>(props: P, ins: Ins, { setterMap = {}, converterMap = {} }: Options = {}) {
  const prevProps = usePrevious(props) as P;

  useDeepCompareEffect(() => {
    if (ins) {
      reactivePropChange(props, true);
    }
  }, [props]);

  useUnmount(() => {
    if (ins && 'remove' in ins) {
      ins.remove();
    }
  });

  const onInstanceCreated = () => {
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
        /** 忽略事件 */
        if (isFunction(props[key]) && /^on[A-Z]/.test(key)) return;

        let willReactive = true;
        if (shouldDetectChange) {
          willReactive = !deepEqual(nextProps[key], prevProps?.[key]);
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
