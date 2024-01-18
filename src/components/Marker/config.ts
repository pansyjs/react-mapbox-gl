import { toLngLat } from '../../utils/toLngLat';

import type { PropKey } from './types';

/** 静态属性 */
export const StaticProps: PropKey[] = ['anchor', 'clickTolerance', 'color', 'scale'];

/** 动态属性 */
export const NativeDynamicProps: PropKey[] = [
  'offset',
  'draggable',
  'rotation',
  'rotationAlignment',
  'pitchAlignment',
  'occludedOpacity',

  /** 自定义 */
  'lngLat',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {};

export const converterMap: Partial<Record<PropKey, (...value: any[]) => any>> = {
  lngLat: toLngLat,
};
