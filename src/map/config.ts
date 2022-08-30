import type { Map } from 'mapbox-gl';
import type { PropKey, EventMapping } from './types';

export const mapEventMap: EventMapping = {
  onError: 'error',

  onLoad: 'load',
  onIdle: 'idle',
  onRemove: 'remove',
  onRender: 'render',
  onResize: 'resize',

  onWebglContextLost: 'webglcontextlost',
  onWebglContextRestored: 'webglcontextrestored',

  onDataloading: 'dataloading',
  onData: 'data',
  onTileDataLoading: 'tiledataloading',
  onSourceDataLoading: 'sourcedataloading',
  onStyleDataLoading: 'styledataloading',
  onSourceData: 'sourcedata',
  onStyleData: 'styledata',

  onBoxZoomCancel: 'boxzoomcancel',
  onBoxZoomStart: 'boxzoomstart',
  onBoxZoomEnd: 'boxzoomend',

  onTouchCancel: 'touchcancel',
  onTouchMove: 'touchmove',
  onTouchEnd: 'touchend',
  onTouchStart: 'touchstart',

  onClick: 'click',
  onContextMenu: 'contextmenu',
  onDoubleClick: 'dblclick',
  onMouseMove: 'mousemove',
  onMouseUp: 'mouseup',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',

  onMoveStart: 'movestart',
  onMove: 'move',
  onMoveEnd: 'moveend',

  onZoomStart: 'zoomstart',
  onZoom: 'zoom',
  onZoomEnd: 'zoomend',

  onRotateStart: 'rotatestart',
  onRotate: 'rotate',
  onRotateEnd: 'rotateend',

  onDragStart: 'dragstart',
  onDrag: 'drag',
  onDragEnd: 'dragend',

  onPitchStart: 'pitchstart',
  onPitch: 'pitch',
  onPitchEnd: 'pitchend',

  onWheel: 'wheel',
};

/** 静态属性 */
export const StaticProps: PropKey[] = [
  'hash',
  'interactive',
  'bearingSnap',
  'clickTolerance',
  'pitchWithRotate',
  'attributionControl',
  'customAttribution',
  'cooperativeGestures',
  'logoPosition',
  'failIfMajorPerformanceCaveat',
  'preserveDrawingBuffer',
  'antialias',
  'refreshExpiredTiles',
  'trackResize',
  'bounds',
  'fitBoundsOptions',
  'maxTileCacheSize',
  'transformRequest',
  'collectResourceTiming',
  'fadeDuration',
  'crossSourceCollisions',
  'accessToken',
  'optimizeForTerrain',
  'locale',
  'localFontFamily',
  'localIdeographFontFamily',
  'testMode',
];

/** 动态属性 */
export const NativeDynamicProps: PropKey[] = [
  'zoom',
  'minZoom',
  'maxZoom',
  'style',
  'maxBounds',
  'scrollZoom',
  'boxZoom',
  'dragRotate',
  'dragPan',
  'keyboard',
  'doubleClickZoom',
  'touchZoomRotate',
  'touchPitch',
  'renderWorldCopies',
  'pitch',
  'maxPitch',
  'minPitch',
  'bearing',
  'center',
  'projection',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {
  touchPitch(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.touchPitch.enable();
      return;
    }

    map.touchPitch.disable();
  },
  scrollZoom(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.scrollZoom.enable();
      return;
    }

    map.scrollZoom.disable();
  },
  boxZoom(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.boxZoom.enable();
      return;
    }

    map.boxZoom.disable();
  },
  dragRotate(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.dragRotate.enable();
      return;
    }

    map.dragRotate.disable();
  },
  dragPan(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.dragPan.enable();
      return;
    }

    map.dragPan.disable();
  },
  keyboard(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.keyboard.enable();
      return;
    }

    map.keyboard.disable();
  },
  touchZoomRotate(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.touchZoomRotate.enable();
      return;
    }

    map.touchZoomRotate.disable();
  },
  doubleClickZoom(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.doubleClickZoom.enable();
      return;
    }

    map.doubleClickZoom.disable();
  },
};

export const converterMap = {};
