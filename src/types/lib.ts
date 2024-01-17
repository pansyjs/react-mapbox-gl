import type { Map as MapInstance } from 'mapbox-gl';

export interface CustomSourceImplementation<TileDataT> {
  id: string;
  type: 'custom';
  dataType: 'raster';
  minzoom?: number;
  maxzoom?: number;
  scheme?: string;
  tileSize?: number;
  attribution?: string;
  bounds?: [number, number, number, number];
  hasTile?: (tileID: { z: number; x: number; y: number }) => boolean;
  loadTile: (
    tileID: { z: number; x: number; y: number },
    options: { signal: AbortSignal },
  ) => Promise<TileDataT>;
  prepareTile?: (tileID: { z: number; x: number; y: number }) => TileDataT | undefined;
  unloadTile?: (tileID: { z: number; x: number; y: number }) => void;
  onAdd?: (map: MapInstance) => void;
  onRemove?: (map: MapInstance) => void;
}

export interface CustomSource<TileDataT = unknown> {
  id: string;
  type: 'custom';
  scheme: string;
  minzoom: number;
  maxzoom: number;
  tileSize: number;
  attribution: string;

  _implementation: CustomSourceImplementation<TileDataT>;
}
