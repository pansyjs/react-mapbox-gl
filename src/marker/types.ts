import React from 'react';
import type { Marker, MarkerOptions, LngLatLike } from 'mapbox-gl';
import type { KeysOfUnion } from '../types';

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

export interface CustomizeMarkerEvents {
  onClick: (e: MarkerEvent<Event | undefined>) => void;
}

export type EventMapping = { [T in keyof MarkerEvents]: string };

export interface MarkerProps
  extends MarkerOptions,
    Partial<MarkerEvents>,
    Partial<CustomizeMarkerEvents> {
  className?: string;
  /** 经纬度坐标 */
  lnglat?: LngLatLike;
  children?: React.ReactNode;
}

export type PropKey = KeysOfUnion<MarkerProps>;
