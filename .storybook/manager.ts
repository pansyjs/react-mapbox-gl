import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  // Brand assets
  brandTitle: '🌍 React-MapboxGL',
  brandUrl: 'https://github.com/pansyjs/react-mapbox-gl',
});

addons.setConfig({
  theme,
  showPanel: true,
  panelPosition: 'right',
});
