import type { MapboxOptions } from 'mapbox-gl';

export interface MapOptions extends MapboxOptions {}

export interface MapProps extends Omit<MapOptions, 'container'> {}
