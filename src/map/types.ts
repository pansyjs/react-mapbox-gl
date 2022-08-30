import type { ReactElement, CSSProperties } from 'react';
import type { MapboxOptions } from 'mapbox-gl';

export interface MapOptions extends MapboxOptions {}

export interface MapProps extends Omit<MapOptions, 'container'> {
  className?: string;
  children?: ReactElement;
}

export type KeysOfUnion<T> = T extends T ? keyof T : never;

export type PropKey = KeysOfUnion<MapboxOptions>;
