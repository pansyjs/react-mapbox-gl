import React from 'react';
import type { Marker, MarkerOptions, LngLatLike } from 'mapbox-gl';
import type { KeysOfUnion } from '../types';

export type { KeysOfUnion } from '../types';
export type { Marker as MapboxMarker, MarkerOptions } from 'mapbox-gl';

export interface MarkerEvent<TOrig = undefined> {
  type: string;
  target: Marker;
  originalEvent: TOrig;
}

export interface MarkerEvents {
  onDragStart: (e: MarkerEvent<MouseEvent | TouchEvent | undefined>) => void;
  onDrag: (e: MarkerEvent<MouseEvent | TouchEvent | undefined>) => void;
  onDragEnd: (e: MarkerEvent<MouseEvent | TouchEvent | undefined>) => void;
}

export interface CustomizeEvents {
  onClick: (e: MarkerEvent<Event | undefined>) => void;
}

export type EventMapping = { [T in keyof MarkerEvents]: string };

export interface MarkerProps
  extends Omit<MarkerOptions, 'element' | 'className'>,
    Partial<MarkerEvents>,
    Partial<CustomizeEvents> {
  className?: string;
  /** 经纬度坐标 */
  lngLat?: LngLatLike;
  children?: React.ReactNode;
}

export type PropKey = KeysOfUnion<MarkerProps>;
