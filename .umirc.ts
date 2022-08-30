import { defineConfig } from 'dumi';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

export default defineConfig({
  mode: 'site',
  title: 'Mapbox',
  dynamicImport: {},
  favicon: logo,
  logo,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/react-mapbox',
    },
  ],
  hash: true,
});
