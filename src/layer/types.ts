import type {
  Layer,
  BackgroundLayout,
  BackgroundPaint,
  CircleLayout,
  CirclePaint,
  FillLayout,
  FillPaint,
  FillExtrusionLayout,
  FillExtrusionPaint,
  HeatmapLayout,
  HeatmapPaint,
  LineLayout,
  LinePaint,
  RasterLayout,
  RasterPaint,
  SkyLayout,
  SkyPaint,
  SymbolLayout,
  SymbolPaint,
  HillshadeLayout,
  HillshadePaint,
} from 'mapbox-gl';

export type LayerType =
  | 'background'
  | 'circle'
  | 'fill-extrusion'
  | 'fill'
  | 'heatmap'
  | 'hillshade'
  | 'line'
  | 'raster'
  | 'symbol'
  | 'sky';

export interface LayoutPaint {
  background: {
    layout: BackgroundLayout;
    paint: BackgroundPaint;
  };
  circle: {
    layout: CircleLayout;
    paint: CirclePaint;
  };
  'fill-extrusion': {
    layout: FillExtrusionLayout;
    paint: FillExtrusionPaint;
  };
  fill: {
    layout: FillLayout;
    paint: FillPaint;
  };
  heatmap: {
    layout: HeatmapLayout;
    paint: HeatmapPaint;
  };
  hillshade: {
    layout: HillshadeLayout;
    paint: HillshadePaint;
  };
  line: {
    layout: LineLayout;
    paint: LinePaint;
  };
  raster: {
    layout: RasterLayout;
    paint: RasterPaint;
  };
  symbol: {
    layout: SymbolLayout;
    paint: SymbolPaint;
  };
  sky: {
    layout: SkyLayout;
    paint: SkyPaint;
  };
}

export interface LayerProps<T extends LayerType> extends Omit<Layer, 'layout' | 'paint'> {
  type: T;
  before?: string;
  layout?: LayoutPaint[T]['layout'];
  paint?: LayoutPaint[T]['paint'];
}
