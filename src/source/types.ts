import type { GeoJSONSourceOptions } from 'mapbox-gl';

export type SourceEvents = {};

export type EventMapping = { [T in keyof SourceEvents]: string };

export interface SourceProps extends GeoJSONSourceOptions {
  id: string;
}
