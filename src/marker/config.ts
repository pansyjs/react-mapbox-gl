import { toLngLat } from '../utils/toLngLat';

import type { PropKey } from './types';

/** 静态属性 */
export const StaticProps: PropKey[] = ['anchor', 'clickTolerance', 'color', 'onClick'];

/** 动态属性 */
export const NativeDynamicProps: PropKey[] = [
  'draggable',
  'offset',
  'rotation',
  'rotationAlignment',
  'pitchAlignment',
  'scale',
  'lngLat',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {};

export const converterMap: Partial<Record<PropKey, (...value: any[]) => any>> = {
  lngLat: toLngLat,
};
