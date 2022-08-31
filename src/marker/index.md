---
title: Marker
order: 0
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
| anchor | Marker 的锚点位置 | `center` \| `top` \| `bottom` \| `left` \| `right` \| `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `center` |
| clickTolerance | 监测有效点击的最大像素值 | `number` | `0` |
| color | 默认图标的颜色，如果没有给定 Marker 的元素 | `string` | `#3FB1CE` |
| onClick | Marker 绑定的点击事件 | `function` | `null` |

### 动态属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| draggable | Marker 是否可以在地图上被拖动 | `bollean` | `false` |
| offset | PointLike 对象表示相对于元素中心偏移的像素数，左和上分别为负方向 | `PointLike` | `[0,0]` |
| rotation | Marker 顺时针旋转的角度 | `string` | `0` |
| rotationAlignment | Marker 旋转的对齐方式 | `map` \| `viewport` \| `auto` | `auto` |
| pitchAlignment | Marker 地图平面的对齐方式 | `map` \| `viewport` \| `auto` | `auto` |
| scale | 默认图标的大小，如果没有给定 Marker 的元素 | `number` | `1` |
| lngLat | Marker 的位置 | `LngLatLike` | -- |
