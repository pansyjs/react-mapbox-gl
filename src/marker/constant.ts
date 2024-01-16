import type { EventMapping, KeysOfUnion } from './types';

export const MarkerEventMap: EventMapping = {
  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
};

export const MarkerEventList = Object.keys(MarkerEventMap) as KeysOfUnion<EventMapping>[];
