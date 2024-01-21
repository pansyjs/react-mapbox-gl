<h1 align="center">
  React Mapbox GL
</h1>

<div align="center">
🌍 基于 <a href="https://docs.mapbox.com/mapbox-gl-js">mapbox-gl</a> 封装的 React 组件库.
</div>

<br />

<p align="center">
  <a href="https://github.com/pansyjs/react-mapbox-gl/network">
    <img src="https://img.shields.io/github/forks/pansyjs/react-mapbox-gl.svg" alt="Forks">
  </a>
  <a href="https://github.com/pansyjs/react-mapbox-gl/stargazers">
    <img src="https://img.shields.io/github/stars/pansyjs/react-mapbox-gl.svg" alt="Stars">
  </a>
  <a href="https://www.npmjs.com/package/@pansy/react-mapbox-gl">
    <img src="https://img.shields.io/npm/v/@pansy/react-mapbox-gl.svg" alt="npm version">
  </a>
</p>

## 🏗 安装

```sh
# npm
$ npm install mapbox-gl @pansy/react-mapbox-gl

# yarn
$ yarn add mapbox-gl @pansy/react-mapbox-gl

# pnpm
$ pnpm i mapbox-gl @pansy/react-mapbox-gl
```

## 🔨 使用

```ts
import { Map } from '@pansy/react-mapbox-gl';

import type { MapProps } from '@pansy/react-mapbox-gl';

const config: MapProps = {
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
  style: 'mapbox://styles/mapbox/dark-v11',
};

export default () => {
  return <Map {...config} />;
};
```
