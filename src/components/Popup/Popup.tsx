import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import type { Popup as MapboxPopup } from 'mapbox-gl';
import type { PopupProps, PropKey } from './types';
import { usePortal, useGetState } from '@rcuse/core';
import Mapbox from 'mapbox-gl';
import { useMap } from '../../hooks/useMap';
import { useEvents } from '../../hooks/useEvents';
import { usePropsReactive } from '../../hooks/usePropsReactive';
import { applyReactStyle } from '../../utils/applyReactStyle';
import { allProps, setterMap, converterMap } from './config';
import { MarkerEventMap, MarkerEventList } from './constant';

export const Popup = forwardRef<MapboxPopup, PopupProps>(
  (props, ref) => {
    const { map } = useMap();
    const { Portal, container } = usePortal();
    const [popup, setPopup, getPopup] = useGetState<MapboxPopup>();

    const { onInstanceCreated } = usePropsReactive(props, popup!, {
      setterMap,
      converterMap,
    });

    useEvents<MapboxPopup, PopupProps>(popup!, props, {
      eventMap: MarkerEventMap,
      eventList: MarkerEventList,
    });

    useImperativeHandle(ref, () => popup as MapboxPopup, [popup]);

    useEffect(
      () => {
        if (map) {
          createInstance().then((popup) => {
            setPopup(popup);
            popup.addTo(map);

            onInstanceCreated();
          })
        }
      },
      [map]
    );

    useEffect(
      () => {
        const popupElement = popup?.getElement();

        if (popupElement) {
          applyReactStyle(popupElement, props.style);
        }
      },
      [props.style, popup]
    )

    const createInstance = () => {
      const options = getCreateOptions(props);

      const popup = new Mapbox.Popup(options);
      popup.setDOMContent(container);

      if (options.lngLat) {
        popup.setLngLat(options.lngLat);
      }

      return Promise.resolve(popup);
    }

    const getCreateOptions = (props: PopupProps) => {
      const options: PopupProps = {};

      allProps.forEach((key) => {
        if (key in props) {
          // @ts-ignore
          options[key] = getSetterValue(key, props);
        }
      });

      return options;
    }

    const getSetterValue = (key: PropKey, props: PopupProps) => {
      let value = props[key];

      if (key in converterMap) {
        try {
          value = converterMap[key]?.(props[key]);
        } catch (error) {}
      }

      return value;
    };

    return <>{popup && <Portal>{props.children}</Portal>}</>;
  }
)
