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

### 事件

| 属性          | 说明                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| onClick       | 当指针设备（一般为鼠标）在该图层同一点处点击并释放时触发                       |
| onDoubleClick | 当指针设备（一般为鼠标）快速双击该图层同一点时触发                             |
| onContextMenu | 点击鼠标右键或点开图层上的快捷菜单（context menu）时触发                       |
| onMouseDown   | 当指针设备（一般为鼠标）在该图层中被按压时触发                                 |
| onMouseUp     | 当指针设备（一般为鼠标）在该图层中被释放时触发                                 |
| onMouseMove   | 当指针设备（一般为鼠标）在该图层中移动时触发                                   |
| onMouseEnter  | 当指针设备（一般为鼠标）从某一图层外部或地图画布外部进入该图层的可见部分时触发 |
| onMouseLeave  | 当指针设备（一般为鼠标）离开指定图层的可见部分或离开地图画布时触发             |
| onMouseOver   | 当指针设备（一般为鼠标）在该图层中移动时触发                                   |
| onMouseOut    | 当指针设备（一般为鼠标）离开该图层画布时触发                                   |
| onTouchStart  | 当 touchstart 事件在该图层中触发时启动                                         |
| onTouchEnd    | 当 touchend 事件在该图层中触发时启动                                           |
| onTouchCancel | 当 touchcancel 事件在该图层中触发时启动                                        |
