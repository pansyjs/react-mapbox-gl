import { createContext } from 'react';

import type { Map } from 'mapbox-gl';

export const MapContext = createContext(undefined) as React.Context<Map | undefined>;
