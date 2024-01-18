import { createContext } from 'react';

import type { Map } from 'mapbox-gl';

export interface MapContextValue {
  map: Map;
}

export const MapContext = createContext<MapContextValue>({} as MapContextValue);
