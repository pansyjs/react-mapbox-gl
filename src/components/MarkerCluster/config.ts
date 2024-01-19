import type { Supercluster } from './types';

export const defaultSuperclusterOptions: Supercluster.Options<any, any> = {
  radius: 60,
  minZoom: 0,
  maxZoom: 16,
  extent: 512,
  nodeSize: 64,
  log: false,
};
