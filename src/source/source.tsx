import { forwardRef, useEffect, useState, useImperativeHandle } from 'react';

import { useMap } from '@/hooks/useMap';
import { useReact } from '@/hooks/useReact';

import { setterMap, converterMap } from './config';

import type { FC } from 'react';
import type { GeoJSONSource } from 'mapbox-gl';
import type { SourceProps, EventMapping } from './types';

export const Source: FC<SourceProps> = forwardRef<GeoJSONSource, SourceProps>((props, ref) => {
  const { id, ...rest } = props;
  const map = useMap();
  const [source, setSource] = useState<GeoJSONSource>();

  useImperativeHandle(ref, () => source as GeoJSONSource, [source]);

  const { onInstanceCreated } = useReact<SourceProps, any, EventMapping>(props, {
    ins: source,
    events: {},
    setterMap,
    converterMap,
    unmount: () => {
      map && map.removeSource(id);
    },
  });

  useEffect(() => {
    if (map) {
      map.addSource(props.id, {
        ...rest,
        type: 'geojson',
      });

      setSource(map.getSource(id) as GeoJSONSource);
      onInstanceCreated();
    }
  }, [map]);

  return null;
});
