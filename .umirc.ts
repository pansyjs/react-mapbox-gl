import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'React Mapbox GL',
  dynamicImport: {},
  favicon: './logo.svg',
  logo: './logo.svg',
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/react-mapbox-gl',
    },
  ],
  hash: true,
  workerLoader: {},
});
