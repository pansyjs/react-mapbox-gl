import { createContext } from 'react';
import type { MapboxMap } from './types';

export interface MapContextValue {
  map: MapboxMap;
}

export const MapContext = createContext<MapContextValue>({} as MapContextValue);
