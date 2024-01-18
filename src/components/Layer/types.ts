import type { AnyLayer } from 'mapbox-gl';
import type { OptionalId, OptionalSource } from '../../types';

export interface LayerType {
  id: string;
  type: string;

  metadata?: any;
  source?: unknown;

  minzoom?: number;
  maxzoom?: number;

  filter?: any;
  layout?: {
    [property: string]: any;
  };
  paint?: {
    [property: string]: any;
  };
}

export type LayerProps<L = AnyLayer> = OptionalSource<OptionalId<L>> & {
  beforeId?: string;
};
