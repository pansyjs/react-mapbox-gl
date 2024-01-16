import Mapbox from 'mapbox-gl';
import type { Preview } from '@storybook/react';

Mapbox.accessToken =
  'pk.eyJ1IjoienQyMDIzMTEwOSIsImEiOiJjbG9xdGgxcDMwbDAyMmpwODVrNG5seXphIn0.1xKSk8Ll-80kkEwtzfLWhw';

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
