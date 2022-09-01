---
title: Layer
order: 1
toc: content
group:
  title: 地图组件
  order: 1
nav:
  title: 组件
  path: /components
---

## 介绍

## 代码示例

### 基本示例

<code src="./demos/basic.tsx" />

## API

### 静态属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id | Layer 的唯一标识名称 | `string` | -- |
| type | Layer 类型 | `fill`\| `line`\| `symbol`\| `circle`\| `heatmap`\| `fill-extrusion`\| `raster`\| `hillshade`\| `background`\| `sky` | -- |
| metadata | 元数据 | `any` | -- |
| source | Layer 对应的 source | `string`\|`AnySourceData`\|`undefined` | -- |
| 'source-layer' | 在矢量瓦片中指定 layer | `string`\|`undefined` | -- |

### 动态属性

| 属性        | 说明                  | 类型                     | 默认值 |
| ----------- | --------------------- | ------------------------ | ------ |
| minzoom     | Layer 的最小层级,0-24 | `number`\|`undefined`    | --     |
| maxzoom     | Layer 的最大层级,0-24 | `number`\|`undefined`    | --     |
| interactive | 是否可交互            | `boolean`\|`undefined`   | `true` |
| filter      | Layer 的过滤的表达式  | `any[]` \| `undefined`   | --     |
| layout      | Layer 布局的样式      | `AnyLayout`\|`undefined` | --     |
| paint       | Layer 绘制的样式      | `AnyPaint`\|`undefined`  | --     |
