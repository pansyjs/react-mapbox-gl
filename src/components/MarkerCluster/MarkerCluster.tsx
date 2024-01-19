import { useState, useMemo, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import { isFunction } from '@pansy/shared';
import { LngLatBounds } from 'mapbox-gl';
import Supercluster from 'supercluster';
import { debounce } from 'lodash-es';
import bbox from '@turf/bbox';
import { featureCollection } from '@turf/helpers';
import { defaultSuperclusterOptions } from './config';
import { Marker } from '../Marker';
import { useMap } from '../../hooks/useMap';

import type { MarkerClusterProps } from './types';

export const MarkerCluster = forwardRef<Supercluster, MarkerClusterProps>((props, ref) => {
  const { cluster, render, renderCluster, zoomOnClickPadding = 20 } = props;
  const { map } = useMap();
  const [list, setList] = useState<any[]>([]);

  const supercluster = useMemo(() => {
    return new Supercluster({
      ...defaultSuperclusterOptions,
      ...cluster,
    });
  }, []);

  useEffect(() => {
    if (map) {
      map.on('zoom', handleChangeBoundary);
      map.on('move', handleChangeBoundary);
      map.on('resize', handleChangeBoundary);

      return () => {
        map.off('zoom', handleChangeBoundary);
        map.off('move', handleChangeBoundary);
        map.off('resize', handleChangeBoundary);
      };
    }

    return undefined;
  }, [map]);

  useImperativeHandle(ref, () => supercluster, []);

  useEffect(() => {
    fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
      .then((res) => res.json())
      .then((data) => {
        supercluster.load(data.features);
        handleChangeBoundary();
      });
  }, []);

  const handleChangeBoundary = useCallback(
    debounce(() => {
      const mapBoundary = getMapBoundary();

      const result = supercluster.getClusters(...mapBoundary);

      setList(result);
    }, 500),
    [],
  );

  const getMapBoundary = (): [[number, number, number, number], number] => {
    const bounds = map.getBounds();
    const zoom = map.getZoom();

    return [
      [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()],
      Math.round(zoom),
    ];
  };

  const handleClusterMarkerClick = (data: any) => {
    const { properties } = data;

    if (!properties?.cluster) return;

    const children = supercluster.getLeaves(properties.cluster_id, Infinity);
    const childrenBbox = bbox(featureCollection(children));

    map.fitBounds(LngLatBounds.convert(childrenBbox as any), {
      padding: zoomOnClickPadding,
    });
  };

  return (
    <>
      {list.map((item, index) => {
        const { geometry, properties } = item;
        const { point_count, cluster, cluster_id } = properties;

        const key = item.id || index;

        if (cluster) {
          return (
            <Marker
              key={key}
              lngLat={geometry.coordinates}
              onClick={(e) => {
                handleClusterMarkerClick(JSON.parse(JSON.stringify(item)));
              }}
            >
              {isFunction(renderCluster) ? renderCluster(point_count, cluster_id) : renderCluster}
            </Marker>
          );
        }

        return (
          <Marker key={key} lngLat={geometry.coordinates}>
            {isFunction(render) ? render(item) : render}
          </Marker>
        );
      })}
    </>
  );
});
