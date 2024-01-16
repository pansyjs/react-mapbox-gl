import { toLngLat } from '../utils/toLngLat';

import type { EventMapping, PropKeys } from './types';

export const mapEventMap: EventMapping = {
  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
};

/** 静态属性 */
export const StaticProps: PropKeys[] = ['anchor', 'clickTolerance', 'color', 'onClick'];

/** 动态属性 */
export const NativeDynamicProps: PropKeys[] = [
  'draggable',
  'offset',
  'rotation',
  'rotationAlignment',
  'pitchAlignment',
  'scale',
  'lnglat',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {};

export const converterMap: Partial<Record<PropKeys, (...value: any[]) => any>> = {
  lnglat: toLngLat,
};
