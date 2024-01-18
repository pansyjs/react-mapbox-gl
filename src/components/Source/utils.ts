import { assert } from '../../utils/assert';
import { isStyleLoaded } from '../../utils/isStyleLoaded';
import { deepEqual } from '../../utils/deepEqual';

import type {
  Map as MapInstance,
  AnySourceData,
  AnySourceImpl,
  GeoJSONSource,
  ImageSource,
  ImageSourceRaw,
  VectorSource,
} from 'mapbox-gl';
import type { Source, SourceProps } from './types';

export function createSource<SourceT extends Source>(
  map: MapInstance,
  id: string,
  props: SourceProps<SourceT>,
) {
  if (isStyleLoaded(map)) {
    const options = { ...props };
    delete options.id;
    delete options.children;

    map.addSource(id, options as AnySourceData);

    return map.getSource(id);
  }
}

export function updateSource<SourceT extends Source>(
  source: AnySourceImpl,
  props: SourceProps<SourceT>,
  prevProps: SourceProps<SourceT>,
) {
  assert(props.id === prevProps.id, 'source id changed');
  assert(props.type === prevProps.type, 'source type changed');

  let changedKey = '';
  let changedKeyCount = 0;

  for (const key in props) {
    if (
      key !== 'children' &&
      key !== 'id' &&
      // @ts-ignore
      !deepEqual(prevProps[key], props[key])
    ) {
      changedKey = key;
      changedKeyCount++;
    }
  }

  if (!changedKeyCount) {
    return;
  }

  const type = props.type;

  if (type === 'geojson') {
    (source as GeoJSONSource).setData((props as any).data);
  } else if (type === 'image') {
    (source as ImageSource).updateImage({
      url: (props as unknown as ImageSourceRaw).url,
      coordinates: (props as unknown as ImageSourceRaw).coordinates,
    });
  } else if ('setCoordinates' in source && changedKeyCount === 1 && changedKey === 'coordinates') {
    source.setCoordinates((props as ImageSourceRaw).coordinates!);
  } else if ('setUrl' in source) {
    switch (changedKey) {
      case 'url':
        source.setUrl((props as VectorSource).url!);
        break;
      case 'tiles':
        source.setTiles((props as VectorSource).tiles!);
        break;
      default:
    }
  } else {
    // eslint-disable-next-line
    console.warn(`Unable to update <Source> prop: ${changedKey}`);
  }
}
