import type { GeoJSONSourceOptions } from 'mapbox-gl';

export type { KeysOfUnion } from '../types';
export type SourceEvents = {};

export type EventMapping = { [T in keyof SourceEvents]: string };

export interface SourceProps extends GeoJSONSourceOptions {
  id: string;
}
