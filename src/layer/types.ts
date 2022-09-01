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
  MapLayerEventType,
} from 'mapbox-gl';
import type { KeysOfUnion } from '@pansy/shared/types';

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

export type LayerEvents = {
  onClick: (e: MapLayerEventType['click']) => void;
  onDoubleClick: (e: MapLayerEventType['dblclick']) => void;
  onContextMenu: (e: MapLayerEventType['contextmenu']) => void;

  onMouseDown: (e: MapLayerEventType['mousedown']) => void;
  onMouseUp: (e: MapLayerEventType['mouseup']) => void;
  onMouseMove: (e: MapLayerEventType['mousemove']) => void;
  onMouseEnter: (e: MapLayerEventType['mouseenter']) => void;
  onMouseLeave: (e: MapLayerEventType['mouseleave']) => void;
  onMouseOver: (e: MapLayerEventType['mouseover']) => void;
  onMouseOut: (e: MapLayerEventType['mouseout']) => void;

  onTouchStart: (e: MapLayerEventType['touchstart']) => void;
  onTouchEnd: (e: MapLayerEventType['touchend']) => void;
  onTouchCancel: (e: MapLayerEventType['touchcancel']) => void;
};

export type LayerEventKeys = KeysOfUnion<LayerEvents>;

export type EventMapping = { [T in keyof LayerEvents]: string };

export interface LayerProps<T extends LayerType>
  extends Omit<Layer, 'layout' | 'paint'>,
    Partial<LayerEvents> {
  type: T;
  before?: string;
  layout?: LayoutPaint[T]['layout'];
  paint?: LayoutPaint[T]['paint'];
}
