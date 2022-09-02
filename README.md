<h1 align="center">
  React Mapbox GL
</h1>

<div align="center">
🌍 基于 <a href="https://docs.mapbox.com/mapbox-gl-js">mapbox-gl</a> 封装的 React 组件库.
</div>

## 📦 安装

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

const config = {
  accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
  style: 'mapbox://styles/mapbox/streets-v11',
};

export default () => {
  return <Map {...config} />;
};
```
