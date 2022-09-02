---
title: 快速开始
order: 2
group:
  path: /
nav:
  title: 文档
  path: /docs
---

## 快速开始

`@pansy/react-mapbox-gl` 是一个基于 mapbox-gl 封装的 React 组件库 组件库，助你轻松的接入 mapbox-gl 到 React 项目中。

除了必须引用的 Map 组件外，我们目前提供了多个常用的组件，能满足大部分简单的业务场景；如果你有更复杂的需求，或者觉得默认提供的组件功能不够，你完全可以自定义一个组件，然后根据 mapbox-gl API 做 mapbox-gl 允许你做的一切事情。

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
