import { forwardRef, useEffect, useState, useImperativeHandle } from 'react';

import { useMap } from '../hooks/useMap';
import { usePropsReactive } from '../hooks/usePropsReactive';
import { setterMap, converterMap } from './config';

import type { GeoJSONSource } from 'mapbox-gl';
import type { SourceProps } from './types';

export const Source = forwardRef<GeoJSONSource, SourceProps>((props, ref) => {
  const { id, ...rest } = props;
  const { map } = useMap();
  const [source, setSource] = useState<GeoJSONSource>();

  useImperativeHandle(ref, () => source as GeoJSONSource, [source]);

  const { onInstanceCreated } = usePropsReactive(props, source!, {
    setterMap,
    converterMap,
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
