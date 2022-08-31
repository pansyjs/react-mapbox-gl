import { Marker } from 'mapbox-gl';

import type { LngLatLike } from 'mapbox-gl';

import type { EventMapping, PropKey } from './types';

export const mapEventMap: EventMapping = {
  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
};

/** 静态属性 */
export const StaticProps: PropKey[] = ['anchor', 'clickTolerance', 'color'];

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

export const setterMap = {
  lngLat(value: LngLatLike, marker: Marker) {
    if (!marker) return;

    marker.setLngLat(value);
  },
};

export const converterMap = {};
