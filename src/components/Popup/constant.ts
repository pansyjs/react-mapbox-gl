import type { EventMapping, KeysOfUnion } from './types';

export const MarkerEventMap: EventMapping = {
  onOpen: 'open',
  onClose: 'close',
};

export const MarkerEventList = Object.keys(MarkerEventMap) as KeysOfUnion<EventMapping>[];
