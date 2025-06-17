import type { MapboxOptionKeys, MapboxMap } from './types';

/** 静态属性 */
export const StaticProps: MapboxOptionKeys[] = [
  'accessToken',
  'antialias',
  'attributionControl',
  'bearingSnap',
  'bounds',
  'hash',
  'interactive',
  'clickTolerance',
  'pitchWithRotate',
  'customAttribution',
  'cooperativeGestures',
  'logoPosition',
  'failIfMajorPerformanceCaveat',
  'preserveDrawingBuffer',
  'refreshExpiredTiles',
  'trackResize',
  'fitBoundsOptions',
  'maxTileCacheSize',
  'transformRequest',
  'collectResourceTiming',
  'fadeDuration',
  'crossSourceCollisions',
  // 'optimizeForTerrain',
  'locale',
  'localFontFamily',
  'localIdeographFontFamily',
  'testMode',
];

/** 动态属性 */
export const NativeDynamicProps: MapboxOptionKeys[] = [
  'center',
  'zoom',
  'minZoom',
  'maxZoom',
  'style',
  'maxBounds',
  'dragPan',
  'renderWorldCopies',
  'pitch',
  'maxPitch',
  'minPitch',
  'bearing',
  'projection',

  // 自定义
  'touchPitch',
  'boxZoom',
  'scrollZoom',
  'dragRotate',
  'dragPan',
  'keyboard',
  'touchZoomRotate',
  'doubleClickZoom',
];

export const allProps = NativeDynamicProps.concat(StaticProps);

export const setterMap = {
  touchPitch(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.touchPitch.enable();
      return;
    }

    map.touchPitch.disable();
  },
  scrollZoom(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.scrollZoom.enable();
      return;
    }

    map.scrollZoom.disable();
  },
  boxZoom(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.boxZoom.enable();
      return;
    }

    map.boxZoom.disable();
  },
  dragRotate(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.dragRotate.enable();
      return;
    }

    map.dragRotate.disable();
  },
  dragPan(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.dragPan.enable();
      return;
    }

    map.dragPan.disable();
  },
  keyboard(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.keyboard.enable();
      return;
    }

    map.keyboard.disable();
  },
  touchZoomRotate(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.touchZoomRotate.enable();
      return;
    }

    map.touchZoomRotate.disable();
  },
  doubleClickZoom(enable: boolean, map: MapboxMap) {
    if (!map) return;

    if (enable) {
      map.doubleClickZoom.enable();
      return;
    }

    map.doubleClickZoom.disable();
  },
};

export const converterMap = {};
