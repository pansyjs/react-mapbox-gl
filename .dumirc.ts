import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['./logo.svg'],
  themeConfig: {
    name: 'MapboxGL',
    logo: './logo.svg',
    navs: [
      {
        title: 'Mapbox GL',
        path: 'https://docs.mapbox.com/mapbox-gl-js/api/',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/pansyjs/react-mapbox-gl',
      },
    ],
  },
});
