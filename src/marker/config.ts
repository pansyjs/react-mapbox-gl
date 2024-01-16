import { toLngLat } from '../utils/toLngLat';

import type { LngLatLike, Marker } from 'mapbox-gl';
import type { EventMapping, PropKey } from './types';

export const mapEventMap: EventMapping = {
  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
};

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
  'lnglat',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {
  lnglat(value: LngLatLike, marker: Marker) {
    if (!marker) return;
    const lnglat = toLngLat(value);

    lnglat && marker.setLngLat(lnglat);
  },
};

export const converterMap = {};
