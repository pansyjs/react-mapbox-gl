import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',

  // Brand assets
  brandTitle: 'ReactMaoboxGl',
  brandUrl: 'https://github.com/pansyjs/react-mapbox-gl',
});

addons.setConfig({
  theme,
  showPanel: true, // show addons panel by default
  panelPosition: 'right', // position addons panel on the right by default
});
