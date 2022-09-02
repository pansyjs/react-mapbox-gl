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

### 地球模式

<code src="./demos/globe.tsx" />

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
| transformRequest | 地图发送外部 URL 请求前执行的回调函数。 | `function` | `null` |
| collectResourceTiming | 如果为 true ，那么将为 GeoJSON 和 Vector Tile web workers 发出的请求搜集资源耗时 API 信息 | `boolean` | `false` |
| fadeDuration | 控制标注冲突时，淡入淡出的动画过渡时间, 单位为毫秒。 | `number` | `300` |
| crossSourceCollisions | 如果为 true，来自不同数据源的符号将共同参与到碰撞检测中。如果为 false，仅在各自的数据源中相互独立的进行符号的碰撞检测 | `boolean` | `true` |
| accessToken | 设置地图的访问令牌 | `string` | -- |
| locale | 应用于 UI 字符串（如控件工具提示）的默认本地化表的补丁。 | `boolean` | `false` |
| localFontFamily | 定义一个 CSS 字体系列，用于覆盖本都所有字形的生成。 | `string` | -- |
| localIdeographFontFamily | 定义一个用于在本地替代通用‘中日韩越统一表意文字’，’平假名’，‘片假名’和‘朝鲜文音节’字形的 CSS 字体系列 | `string` | `sans-serif` |
| testMode | 消除无效的 accessToken 产生的错误和警告 | `boolean` | `false` |

### 动态属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| zoom | 地图初始化时的层级。 | `number` | `0` |
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
| touchPitch | 如果 true，则启用 "拖动到俯仰 " 交互模式 | `boolean` \| `object` | `true` |
| renderWorldCopies | 如果为 true，地图缩小时将渲染多个全局地图的副本。 | `boolean` | `true` |
| pitch | 地图初始化时的倾角，按偏离屏幕水平面的度数计量（0-85） | `number` | `0` |
| maxPitch | 最大倾角（0-85） | `number` | `0` |
| minPitch | 最小倾角（0-85） | `number` | `0` |
| bearing | 地图初始化时的方位角（旋转角度），以正北方的逆时针转动度数计量 | `number` | `0` |
| center | 地图初始化时的地理中心点。 | `number` | `[0, 0]` |
| projection | 设置渲染地图的投影 | `string` | `mercator` |

### 事件

##### 窗口

| 属性     | 说明                       |
| -------- | -------------------------- |
| onResize | 在地图被调整大小后立即触发 |
| onRemove | 在地图被移除后立即触发     |

##### 地图交互

| 属性          | 说明                                                     |
| ------------- | -------------------------------------------------------- |
| onMouseDown   | 当指针设备（一般为鼠标）在地图中被按压时触发             |
| onMouseUp     | 当指针设备（一般为鼠标）在地图中被释放时触发             |
| onMouseOver   | 当指针设备（一般为鼠标）在地图中移动时触发               |
| onMouseMove   | 当指针设备（一般为鼠标）在地图中移动时触发               |
| onMouseOut    | 当指针设备（一般为鼠标）离开地图画布时触发               |
| onClick       | 当指针设备（一般为鼠标）在地图同一点处点击并释放时触发   |
| onDoubleClick | 当指针设备（一般为鼠标）快速双击地图同一点时触发         |
| onTouchCancel | 当 touchcancel 事件在地图中触发时启动                    |
| onTouchMove   | 当 touchmove 事件在地图中触发时启动                      |
| onTouchEnd    | 当 touchend 事件在地图中触发时启动                       |
| onTouchStart  | 当 touchstart 事件在地图中触发时启动                     |
| onContextMenu | 点击鼠标右键或点开地图上的快捷菜单（context menu）时触发 |
| onWheel       | 当滚轮事件(wheel) 在地图中触发时启动                     |

##### 地图移动

| 属性            | 说明                                               |
| --------------- | -------------------------------------------------- |
| onMoveStart     | 在地图开始改变视角之前触发                         |
| onMove          | 在地图视角改变动画期间重复触发                     |
| onMoveEnd       | 在地图视角改变完成后触发                           |
| onDragStart     | 在拖动地图平移开始时触发                           |
| onDrag          | 在拖动地图平移时重复触发                           |
| onDragEnd       | 在拖动地图平移结束时触发                           |
| onZoomStart     | 在地图缩放层级变化开始时触发                       |
| onZoom          | 在地图缩放层级变化期间重复触发                     |
| onZoomEnd       | 在地图缩放层级结束时触发                           |
| onRotateStart   | 在地图视角水平旋转开始时触发                       |
| onRotate        | 在地图视角水平旋转期间重复触发                     |
| onRotateEnd     | 在地图视角水平旋转结束时触发                       |
| onPitchStart    | 在地图视角的俯仰角变化开始时触发                   |
| onPitch         | 在地图视角的俯仰角变化期间重复触发                 |
| onPitchEnd      | 在地图视角的俯仰角变化结束时触发                   |
| onBoxZoomStart  | 在框选缩放开始时触发                               |
| onBoxZoomEnd    | 在框选缩放结束时触发                               |
| onBoxZoomCancel | 在框选缩放取消时或者框选区域小于最小触发阈值时触发 |

##### 地图生命周期

| 属性 | 说明 |
| --- | --- |
| onLoad | 在所有必要数据源下载完毕、且首个可见的地图渲染完毕后立即触发 |
| onRender | 改变地图位置、缩放级别、倾斜度和方位角，改变地图样式，改变 GeoJSON 数据源，载入矢量切片、GeoJSON 文件、glyph 或 sprite 时触发 |
| onIdle | 在渲染完地图最后一帧并进入“空闲(idle)”状态之后触发,“空闲(idle)”状态有:无运行中的相机转换、所有即时请求的切片已加载完毕、所有淡入淡出/过渡动画都已完成 |
| onError | 出现错误时触发 |
| onWebglContextLost | 当 WebGL context 丢失时触发 |
| onWebglContextRestored | 当 WebGL context 恢复时触发 |

##### 地图数据加载

| 属性                | 说明                                                                   |
| ------------------- | ---------------------------------------------------------------------- |
| onData              | 地图数据加载或改变时触发                                               |
| onStyleData         | 地图样式加载或改变时触发                                               |
| onSourceData        | 加载或改变地图数据源时触发，包括加载或改变属于该数据源的一个切片的情况 |
| onDataloading       | 任意地图数据（样式、数据源、切片等）开始异步加载或改变时触发           |
| onStyleDataLoading  | 地图样式开始异步加载或改变时触发                                       |
| onSourceDataLoading | 当一个地图数据源开始异步加载或改变时触发                               |
