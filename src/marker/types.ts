import type { MarkerOptions, LngLatLike, MapEventType } from 'mapbox-gl';

export type MarkerEvents = {
  onDragStart: (e: MapEventType['dragstart']) => void;
  onDrag: (e: MapEventType['drag']) => void;
  onDragEnd: (e: MapEventType['dragend']) => void;
};

export type EventMapping = { [T in keyof MarkerEvents]: string };

export type KeysOfUnion<T> = T extends T ? keyof T : never;

export interface MarkerProps extends MarkerOptions, Partial<MarkerEvents> {
  className?: string;
  lngLat: LngLatLike;
  children: any;
  onClick?: (e: MapEventType['click']) => void;
}

export type PropKey = KeysOfUnion<MarkerProps>;
