import type React from 'react';
import type { Popup, PopupOptions, LngLatLike } from 'mapbox-gl';
import type { KeysOfUnion } from '../../types';

export type { KeysOfUnion } from '../../types';

export type PopupEvent = {
  type: 'open' | 'close';
  target: Popup;
};

export interface PopuprEvents {
  onOpen: (e: PopupEvent) => void;
  onClose: (e: PopupEvent) => void;
}

export type EventMapping = { [T in keyof PopuprEvents]: string };

export type PopupProps = PopupOptions & {
  /** 经纬度坐标 */
  lngLat?: LngLatLike;
  onOpen?: (e: PopupEvent) => void;
  onClose?: (e: PopupEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export type {
  PopupOptions
}

export type PropKey = KeysOfUnion<PopupProps>;
