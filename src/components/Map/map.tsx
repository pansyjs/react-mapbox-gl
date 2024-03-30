import Mapbox from 'mapbox-gl'
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { useEvents } from '../../hooks/useEvents'
import { usePropsReactive } from '../../hooks/usePropsReactive'
import { MapContext } from './context'
import { allProps, converterMap, setterMap } from './config'
import { MapEventList, MapEventMap } from './constant'

import type { MapContextValue } from './context'
import type { MapProps, MapboxOptionKeys } from './types'

export const Map = forwardRef<Mapbox.Map, MapProps>((props, ref) => {
  const { className, loading, containerStyle, children } = props
  const containerRef = useRef<HTMLDivElement>(null)
  const [mapInstance, setMapInstance] = useState<Mapbox.Map>()

  const style: React.CSSProperties = useMemo(
    () => ({
      position: 'relative',
      width: '100%',
      height: '100%',
      ...containerStyle,
    }),
    [containerStyle],
  )

  /** 获取创建地图的参数 */
  const getCreateOptions = (props: MapProps) => {
    const container = containerRef.current as HTMLDivElement

    const options: Partial<Record<MapboxOptionKeys, any>> = {
      container,
    }

    allProps.forEach((key) => {
      if (key in props && key !== 'container')
        options[key] = props[key]
    })

    return options as Mapbox.MapboxOptions
  }

  /** 创建地图实例 */
  const createInstance = () => {
    const options = getCreateOptions(props)
    return Promise.resolve(new Mapbox.Map(options))
  }

  const { current: contextValue } = useRef<MapContextValue>({} as MapContextValue)

  const { onInstanceCreated } = usePropsReactive(props, mapInstance!, {
    setterMap,
    converterMap,
  })

  useEvents<Mapbox.Map, MapProps>(mapInstance!, props, {
    eventMap: MapEventMap,
    eventList: MapEventList,
  })

  useImperativeHandle(ref, () => mapInstance as Mapbox.Map, [mapInstance])

  useEffect(() => {
    if (!containerRef.current)
      return
    createInstance().then((map) => {
      onInstanceCreated()

      contextValue.map = map
      setMapInstance(map)
    })
  }, [containerRef])

  const CHILD_CONTAINER_STYLE = {
    height: '100%',
  }

  return (
    <div ref={containerRef} style={style} className={className}>
      {!mapInstance && loading}
      {mapInstance && (
        <MapContext.Provider value={contextValue}>
          <div style={CHILD_CONTAINER_STYLE}>
            {children}
          </div>
        </MapContext.Provider>
      )}
    </div>
  )
})

Map.displayName = 'Map'
