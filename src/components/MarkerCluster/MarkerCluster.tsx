import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { debounce, isFunction, uuid } from '@rcuse/core'
import { LngLatBounds } from 'mapbox-gl'
import Supercluster from 'supercluster'
import bbox from '@turf/bbox'
import { featureCollection } from '@turf/helpers'
import { Marker } from '../Marker'
import { useMap } from '../../hooks/useMap'
import { defaultSuperclusterOptions } from './config'

import type { AnyObject, Feature, LngLatLike, MarkerClusterProps, RefMarkerCluster } from './types'

function InternalMarkerCluster<D extends AnyObject = AnyObject>(props: MarkerClusterProps<D>, ref: React.Ref<Supercluster>) {
  const {
    cluster,
    render,
    renderCluster,
    data = [],
    zoomOnClick,
    zoomOnClickPadding = 20,
    onClick,
    onClusterClick,
  } = props
  const { map } = useMap()
  const [list, setList] = useState<Feature<D>[]>([])

  const supercluster = useMemo(() => {
    return new Supercluster({
      ...defaultSuperclusterOptions,
      ...cluster,
    })
  }, [])

  const getMapBoundary = (): [[number, number, number, number], number] => {
    const bounds = map.getBounds()
    const zoom = map.getZoom()

    return [
      [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()],
      Math.round(zoom),
    ]
  }

  const handleChangeBoundary = useCallback(
    debounce({ delay: 500 }, () => {
      const mapBoundary = getMapBoundary()

      const result = supercluster.getClusters(...mapBoundary)

      setList(
        result.map((item) => {
          return {
            ...item,
            id: item.id || uuid(),
          }
        }),
      )
    }),
    [],
  )

  useEffect(() => {
    if (map) {
      map.on('zoom', handleChangeBoundary)
      map.on('move', handleChangeBoundary)
      map.on('resize', handleChangeBoundary)

      return () => {
        map.off('zoom', handleChangeBoundary)
        map.off('move', handleChangeBoundary)
        map.off('resize', handleChangeBoundary)
      }
    }

    return undefined
  }, [map])

  useEffect(() => {
    if (data) {
      supercluster.load(data)
      handleChangeBoundary()
    }
  }, [data])

  useImperativeHandle(ref, () => supercluster, [])

  const handleClusterMarkerClick = (data: any) => {
    const { properties } = data

    if (!properties?.cluster)
      return

    const children = supercluster.getLeaves(properties.cluster_id, Number.POSITIVE_INFINITY)
    const childrenBbox = bbox(featureCollection(children)) as [number, number, number, number]

    map.fitBounds(LngLatBounds.convert(childrenBbox), {
      padding: zoomOnClickPadding,
    })
  }

  return (
    <>
      {list.map((item) => {
        const { geometry, properties } = item
        const { point_count, cluster, cluster_id } = properties

        if (cluster) {
          return (
            <Marker
              key={item.id}
              lngLat={geometry.coordinates as LngLatLike}
              onClick={() => {
                onClusterClick?.(point_count, cluster_id)
                if (zoomOnClick)
                  handleClusterMarkerClick(item)
              }}
            >
              {isFunction(renderCluster) ? renderCluster(point_count, cluster_id) : renderCluster}
            </Marker>
          )
        }

        return (
          <Marker
            key={item.id}
            lngLat={geometry.coordinates as LngLatLike}
            onClick={() => {
              onClick?.(item)
            }}
          >
            {isFunction(render) ? render(item) : render}
          </Marker>
        )
      })}
    </>
  )
}

export const MarkerCluster = forwardRef(InternalMarkerCluster) as RefMarkerCluster
