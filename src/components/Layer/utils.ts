import { assert } from '../../utils/assert';
import { deepEqual } from '../../utils/deepEqual';
import { isStyleLoaded } from '../../utils/isStyleLoaded';

import type { Map as MapInstance, AnyLayer } from 'mapbox-gl';
import type { LayerProps, LayerType } from './types';

export function createLayer<L extends LayerType>(
  map: MapInstance,
  id: string,
  props: LayerProps<L>,
) {
  if (isStyleLoaded(map) && (!('source' in props) || map.getSource(props.source as string))) {
    const options: LayerProps<L> = { ...props, id };
    delete options.beforeId;

    map.addLayer(options as AnyLayer, props.beforeId);
  }
}

export function updateLayer<L extends LayerType>(
  map: MapInstance,
  id: string,
  props: LayerProps<L>,
  prevProps: LayerProps<L>,
) {
  assert(props.id === prevProps.id, 'layer id changed');
  assert(props.type === prevProps.type, 'layer type changed');

  if (props.type === 'custom' || prevProps.type === 'custom') {
    return;
  }

  const { layout = {}, paint = {}, filter, minzoom, maxzoom, beforeId } = props;

  if (beforeId !== prevProps.beforeId) {
    map.moveLayer(id, beforeId);
  }

  if (layout !== prevProps.layout) {
    const prevLayout = prevProps.layout || {};
    for (const key in layout) {
      if (!deepEqual(layout[key], prevLayout[key])) {
        map.setLayoutProperty(id, key, layout[key]);
      }
    }
    for (const key in prevLayout) {
      if (!layout.hasOwnProperty(key)) {
        map.setLayoutProperty(id, key, undefined);
      }
    }
  }

  if (paint !== prevProps.paint) {
    const prevPaint = prevProps.paint || {};
    for (const key in paint) {
      if (!deepEqual(paint[key], prevPaint[key])) {
        map.setPaintProperty(id, key, paint[key]);
      }
    }
    for (const key in prevPaint) {
      if (!paint.hasOwnProperty(key)) {
        map.setPaintProperty(id, key, undefined);
      }
    }
  }

  if (!deepEqual(filter, prevProps.filter)) {
    map.setFilter(id, filter);
  }
  if (minzoom !== prevProps.minzoom || maxzoom !== prevProps.maxzoom) {
    map.setLayerZoomRange(id, minzoom!, maxzoom!);
  }
}
