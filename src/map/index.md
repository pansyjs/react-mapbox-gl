---
title: Map
order: 0
toc: content
group:
  title: 容器
  order: 0
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
| hash | 开启则地图的位置 (包括缩放层级、中心纬度、中心经度、方位角和倾角) 将会与页面 URL 的哈希片段同步 | `boolean` | `false` |
| interactive | 如果关闭，地图将不会绑定对鼠标、触碰、键盘的监听，因此地图将不会响应任何用户交互。 | `boolean` | `true` |
| bearingSnap | 定义何时地图的方位将自动对齐到正北方向的阈值（以度为单位） | `number` | `7` |
| pitchWithRotate | 定义何时地图的方位将自动对齐到正北方向的阈值（以度为单位） | `number` | `7` |
| attributionControl | 如果为 true, AttributionControl 将会被添加到地图上。 | `boolean` | `true` |
| customAttribution | 在 AttributionControl 中显示的字符串或字符串数组。仅当 options.attributionControl 为 true 时生效 | `string` \| `string[]` | -- |
| logoPosition | 设置 Mapbox 文字商标在地图上的位置 | `top-left` \| `top-right` \| `bottom-left` \| `bottom-right ` | `bottom-left` |
| failIfMajorPerformanceCaveat | 如果为 true, 当 Mapbox GL JS 的性能远远低于预期的时候，地图将创建失败。 | `boolean` | `false` |
| preserveDrawingBuffer | 如果为 true，地图画布可通过 map.getCanvas().toDataURL() 输出 PNG | `boolean` | `false` |
| antialias | 如果为 true ，gl 渲染环境在创建时将开启多重采样抗锯齿模式（ MSAA ）, 这对自定义图层的抗锯齿十分有效 | `boolean` | `false` |
| refreshExpiredTiles | 如果为 false，一旦切片的 HTTP cacheControl / expires headers 过期，地图将不会重新请求这些切片。 | `boolean` | `true` |
| trackResize | 如果为 true，地图将自适应窗口大小变化 | `boolean` | `true` |
| bounds | 地图初始化时的限制范围。 | `LngLatBoundsLike[]` | -- |
| fitBoundsOptions | 用于 初始化地图时自适应设置的 bounds 范围时的情况。 | `object` | -- |
| maxTileCacheSize | 设置当前数据源存储在切片缓存中的最大切片数目 | `number` | -- |
| localIdeographFontFamily | 定义一个用于在本地替代通用‘中日韩越统一表意文字’，’平假名’，‘片假名’和‘朝鲜文音节’字形的 CSS 字体系列 | `string` | `sans-serif` |
| localIdeographFontFamily | 如果为 true，地图将自适应窗口大小变化 | `boolean` | `true` |
| transformRequest | 地图发送外部 URL 请求前执行的回调函数。 | `function` | `null` |
| collectResourceTiming | 如果为 true ，那么将为 GeoJSON 和 Vector Tile web workers 发出的请求搜集资源耗时 API 信息 | `boolean` | `false` |
| fadeDuration | 控制标注冲突时，淡入淡出的动画过渡时间, 单位为毫秒。 | `number` | `300` |
| crossSourceCollisions | 如果为 true，来自不同数据源的符号将共同参与到碰撞检测中。如果为 false，仅在各自的数据源中相互独立的进行符号的碰撞检测 | `boolean` | `true` |
| accessToken | 设置地图的访问令牌 | `string` | -- |

### 动态属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| minZoom | 地图最小缩放级别，范围 `0~24` | `number` | `0` |
| maxZoom | 地图最大缩放级别，范围 `0~24` | `number` | `22` |
| style | 配置 Mapbox 的样式 | `string` \| `object` | -- |
| maxBounds | 设置地图的范围 | `LngLatLike[]` | -- |
| scrollZoom | 如果为 true，将开启 "滚轮缩放地图" 交互模式。 | `boolean` \| `object` | `true` |
| boxZoom | 如果为 true, 将开启 "框选缩放地图" 交互模式 | `boolean` \| `object` | `true` |
| dragRotate | 如果为 true，将开启 "拖拽旋转地图" 交互模式。 | `boolean` \| `object` | `true` |
| dragPan | 如果为 true，将开启 "拖拽移动地图" 交互模式。 | `boolean` \| `object` | `true` |
| keyboard | 如果为 true，将启用键盘快捷键功能 。 | `boolean` \| `object` | `true` |
| doubleClickZoom | 如果为 true，将开启 "双击缩放地图" 交互模式 | `boolean` \| `object` | `true` |
| touchZoomRotate | 如果为 true，将开启 "捏合旋转、缩放" 交互模式。 | `boolean` \| `object` | `true` |
| renderWorldCopies | 如果为 true，地图缩小时将渲染多个全局地图的副本。 | `boolean` | `true` |
| pitch | 地图初始化时的倾角，按偏离屏幕水平面的度数计量（0-60） | `number` | `0` |
| bearing | 地图初始化时的方位角（旋转角度），以正北方的逆时针转动度数计量 | `number` | `0` |
| zoom | 地图初始化时的层级。 | `number` | `0` |
| center | 地图初始化时的地理中心点。 | `number` | `[0, 0]` |
| projection | 设置渲染地图的投影 | `string` | `mercator` |
