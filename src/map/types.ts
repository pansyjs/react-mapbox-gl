import React from 'react';
import type { MapboxOptions, MapEventType } from 'mapbox-gl';
import type { KeysOfUnion } from '../types';

export interface MapOptions extends MapboxOptions {}

export type MapEvents = {
  onError: (e: MapEventType['error']) => void;

  /**
   * 下载所有必要的资源并且第一次视觉上完整渲染发生后触发
   * @param e
   * @returns
   */
  onLoad: (e: MapEventType['load']) => void;
  onIdle: (e: MapEventType['idle']) => void;
  onRemove: (e: MapEventType['remove']) => void;
  onRender: (e: MapEventType['render']) => void;
  onResize: (e: MapEventType['resize']) => void;

  onWebglContextLost: (e: MapEventType['webglcontextlost']) => void;
  onWebglContextRestored: (e: MapEventType['webglcontextrestored']) => void;

  onDataloading: (e: MapEventType['dataloading']) => void;
  onData: (e: MapEventType['data']) => void;
  onTileDataLoading: (e: MapEventType['tiledataloading']) => void;
  onSourceDataLoading: (e: MapEventType['sourcedataloading']) => void;
  onStyleDataLoading: (e: MapEventType['styledataloading']) => void;
  onSourceData: (e: MapEventType['sourcedata']) => void;
  onStyleData: (e: MapEventType['styledata']) => void;

  onBoxZoomCancel: (e: MapEventType['boxzoomcancel']) => void;
  onBoxZoomStart: (e: MapEventType['boxzoomstart']) => void;
  onBoxZoomEnd: (e: MapEventType['boxzoomend']) => void;

  onTouchCancel: (e: MapEventType['touchcancel']) => void;
  onTouchMove: (e: MapEventType['touchmove']) => void;
  onTouchEnd: (e: MapEventType['touchend']) => void;
  onTouchStart: (e: MapEventType['touchstart']) => void;

  onClick: (e: MapEventType['click']) => void;
  onContextMenu: (e: MapEventType['contextmenu']) => void;
  onDoubleClick: (e: MapEventType['dblclick']) => void;
  onMouseMove: (e: MapEventType['mousemove']) => void;
  onMouseUp: (e: MapEventType['mouseup']) => void;
  onMouseDown: (e: MapEventType['mousedown']) => void;
  onMouseOut: (e: MapEventType['mouseout']) => void;
  onMouseOver: (e: MapEventType['mouseover']) => void;

  onMoveStart: (e: MapEventType['movestart']) => void;
  onMove: (e: MapEventType['move']) => void;
  onMoveEnd: (e: MapEventType['moveend']) => void;

  onZoomStart: (e: MapEventType['zoomstart']) => void;
  onZoom: (e: MapEventType['zoom']) => void;
  onZoomEnd: (e: MapEventType['zoomend']) => void;

  onRotateStart: (e: MapEventType['rotatestart']) => void;
  onRotate: (e: MapEventType['rotate']) => void;
  onRotateEnd: (e: MapEventType['rotateend']) => void;

  onDragStart: (e: MapEventType['dragstart']) => void;
  onDrag: (e: MapEventType['drag']) => void;
  onDragEnd: (e: MapEventType['dragend']) => void;

  onPitchStart: (e: MapEventType['pitchstart']) => void;
  onPitch: (e: MapEventType['pitch']) => void;
  onPitchEnd: (e: MapEventType['pitchend']) => void;

  onWheel: (e: MapEventType['wheel']) => void;
};

export type EventMapping = { [T in keyof MapEvents]: string };

export type MapboxOptionKeys = KeysOfUnion<MapboxOptions>;

export interface MapProps extends Omit<MapOptions, 'container'>, Partial<MapEvents> {
  /** 地图加载前的加载效果 */
  loading?: React.ReactNode;
  /** 额外的样式类 */
  className?: string;
  /** 地图挂载节点样式 */
  containerStyle?: React.CSSProperties;
  children?: React.ReactNode;
}
