import type { EventMapping, KeysOfUnion } from './types';

export const LayerEventMap: EventMapping = {
  onClick: 'click',
  onDoubleClick: 'dblclick',
  onContextMenu: 'contextmenu',

  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onMouseMove: 'mousemove',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseOver: 'mouseover',
  onMouseOut: 'mouseout',

  onTouchStart: 'touchstart',
  onTouchEnd: 'touchend',
  onTouchCancel: 'touchcancel',
};

export const LayerEventList = Object.keys(LayerEventMap) as KeysOfUnion<EventMapping>[];
