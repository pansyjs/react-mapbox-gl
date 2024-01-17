import type { EventMapping, KeysOfUnion } from './types';

export const MapEventMap: EventMapping = {
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

export const MapEventList = Object.keys(MapEventMap) as KeysOfUnion<EventMapping>[];
