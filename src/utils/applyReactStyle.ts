import type React from 'react';
import type { KeysOfUnion } from 'type-fest';

const unitlessNumber = /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;

// https://github.com/visgl/react-map-gl/blob/master/modules/react-mapbox/src/utils/apply-react-style.ts
export function applyReactStyle(
  element: HTMLElement,
  styles: React.CSSProperties = {}
) {
  if (!element || !styles) {
    return;
  }

  const style = element.style;

  for (const key in styles) {
    const val = styles[key as KeysOfUnion<React.CSSProperties>];

    if (Number.isFinite(val) && !unitlessNumber.test(key)) {
      // @ts-expect-error ignore error
      style[key] = `${val}px`;
    } else {
      // @ts-expect-error ignore error
      style[key] = val;
    }
  }
}
