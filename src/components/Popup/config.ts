import type { PropKey } from './types';

/** 静态属性 */
export const StaticProps: PropKey[] = [
  'closeButton',
  'closeOnClick',
  'closeOnMove',
  'focusAfterOpen',
  'anchor',
  'className',
];

/** 动态属性 */
export const NativeDynamicProps: PropKey[] = [
  'offset',
  'maxWidth',
  'altitude',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {};

export const converterMap: Partial<Record<PropKey, (...value: any[]) => any>> = {

};
