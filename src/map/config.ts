import type { Map } from 'mapbox-gl';
import type { PropKey } from './types';

/** 静态属性 */
export const StaticProps: PropKey[] = [
  'hash',
  'interactive',
  'bearingSnap',
  'pitchWithRotate',
  'attributionControl',
  'customAttribution',
  'logoPosition',
  'failIfMajorPerformanceCaveat',
  'preserveDrawingBuffer',
  'antialias',
  'refreshExpiredTiles',
  'trackResize',
  'bounds',
  'fitBoundsOptions',
  'maxTileCacheSize',
  'localIdeographFontFamily',
  'transformRequest',
  'collectResourceTiming',
  'fadeDuration',
  'crossSourceCollisions',
  'accessToken',
];

/** 动态属性 */
export const NativeDynamicProps: PropKey[] = [
  'minZoom',
  'maxZoom',
  'style',
  'maxBounds',
  'scrollZoom',
  'boxZoom',
  'dragRotate',
  'dragPan',
  'keyboard',
  'doubleClickZoom',
  'touchZoomRotate',
  'renderWorldCopies',
  'pitch',
  'bearing',
  'zoom',
  'center',
  'projection',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {
  scrollZoom(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.scrollZoom.enable();
      return;
    }

    map.scrollZoom.disable();
  },
  boxZoom(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.boxZoom.enable();
      return;
    }

    map.boxZoom.disable();
  },
  dragRotate(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.dragRotate.enable();
      return;
    }

    map.dragRotate.disable();
  },
  dragPan(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.dragPan.enable();
      return;
    }

    map.dragPan.disable();
  },
  keyboard(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.keyboard.enable();
      return;
    }

    map.keyboard.disable();
  },
  touchZoomRotate(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.touchZoomRotate.enable();
      return;
    }

    map.touchZoomRotate.disable();
  },
  doubleClickZoom(enable: boolean, map: Map) {
    if (!map) return;

    if (enable) {
      map.doubleClickZoom.enable();
      return;
    }

    map.doubleClickZoom.disable();
  },
};

export const converterMap = {};
