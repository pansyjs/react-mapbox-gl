import type { SourceSpecification } from 'mapbox-gl';
import type { CustomSource } from '../../types/lib';

export interface Source {
  type: string;
}

export type SourceProps<SourceT = SourceSpecification> = (SourceT | CustomSource) & {
  id?: string;
  children?: React.ReactNode;
};
