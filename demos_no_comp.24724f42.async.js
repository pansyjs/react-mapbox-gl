(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"/7QA":function(e,t,o){"use strict";o.d(t,"b",(function(){return x})),o.d(t,"c",(function(){return L})),o.d(t,"d",(function(){return B})),o.d(t,"a",(function(){return U}));var n=o("iojd"),r=o("ahKI"),a=o.n(r),c=o("AUQR"),i=o("QLEt"),l=o("Pq1t"),s=o("dLyF"),u=Object(r["createContext"])(void 0),d=o("rDMZ"),v=o.n(d),b=o("6066"),m=e=>e[0].toUpperCase()+e.slice(1,e.length),f=o("G3cz"),h=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Object(r["useRef"])({});Object(r["useEffect"])((()=>{e&&(n.current=a(t,o,e))}),[e]),Object(i["b"])((()=>{e&&(n.current=c(n.current,o,e))}),[o]),Object(i["e"])((()=>{l(n.current,e),n.current={}}));var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;return Object.keys(e).reduce(((n,r)=>{var a=t[r],c=e[r];return c&&a&&(o.on(c,a),n[r]=a),n}),{})},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=Object.keys(t).filter((t=>e[t]&&"function"!==typeof o[t]||!v()(e[t],o[t])));r.forEach((o=>{e[o]&&(n.off(t[o],e[o]),delete e[o])}));var c=Object.keys(t).filter((t=>!e[t]&&"function"===typeof o[t])).reduce(((e,o)=>(e[o]=t[o],e)),{}),i=a(c,o,n);return Object(f["a"])(Object(f["a"])({},e),i)},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,n=Object.keys(t).filter((t=>e[t]));n.forEach((n=>{o.off(t[n],e[n])}))}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},o={};return Object.keys(e).forEach((n=>{var r=e[n];Object(b["b"])(r)&&/^on[A-Z]/.test(n)?t[n]=r:o[n]=r})),{eventProps:t,notEventProps:o}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,o=t.ins,n=t.events,r=t.setterMap,a=void 0===r?{}:r,c=t.converterMap,l=void 0===c?{}:c,s=t.unmount,u=g(e),d=u.eventProps,b=u.notEventProps,f=Object(i["d"])(b);h(o,n,d),Object(i["b"])((()=>{o&&p(b,!0)}),[b]),Object(i["e"])((()=>{o&&"remove"in o&&o.remove(),null===s||void 0===s||s()}));var p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(o)try{Object.keys(e).forEach((n=>{var r=!0;if(t&&(r=!v()(e[n],null===f||void 0===f?void 0:f[n])),r){var c=e[n];if(n in l&&(c=l[n](e[n])),n in a)a[n](c,o,e);else{var i="set".concat(m(n));i in o&&o[i](c)}}}))}catch(n){}},j=()=>{p(e,!1)};return{onInstanceCreated:j}},j={onError:"error",onLoad:"load",onIdle:"idle",onRemove:"remove",onRender:"render",onResize:"resize",onWebglContextLost:"webglcontextlost",onWebglContextRestored:"webglcontextrestored",onDataloading:"dataloading",onData:"data",onTileDataLoading:"tiledataloading",onSourceDataLoading:"sourcedataloading",onStyleDataLoading:"styledataloading",onSourceData:"sourcedata",onStyleData:"styledata",onBoxZoomCancel:"boxzoomcancel",onBoxZoomStart:"boxzoomstart",onBoxZoomEnd:"boxzoomend",onTouchCancel:"touchcancel",onTouchMove:"touchmove",onTouchEnd:"touchend",onTouchStart:"touchstart",onClick:"click",onContextMenu:"contextmenu",onDoubleClick:"dblclick",onMouseMove:"mousemove",onMouseUp:"mouseup",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMoveStart:"movestart",onMove:"move",onMoveEnd:"moveend",onZoomStart:"zoomstart",onZoom:"zoom",onZoomEnd:"zoomend",onRotateStart:"rotatestart",onRotate:"rotate",onRotateEnd:"rotateend",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend",onPitchStart:"pitchstart",onPitch:"pitch",onPitchEnd:"pitchend",onWheel:"wheel"},O=["hash","interactive","bearingSnap","clickTolerance","pitchWithRotate","attributionControl","customAttribution","cooperativeGestures","logoPosition","failIfMajorPerformanceCaveat","preserveDrawingBuffer","antialias","refreshExpiredTiles","trackResize","bounds","fitBoundsOptions","maxTileCacheSize","transformRequest","collectResourceTiming","fadeDuration","crossSourceCollisions","accessToken","optimizeForTerrain","locale","localFontFamily","localIdeographFontFamily","testMode"],k=["zoom","minZoom","maxZoom","style","maxBounds","scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch","renderWorldCopies","pitch","maxPitch","minPitch","bearing","center","projection"],E=k.concat(O),y={touchPitch(e,t){t&&(e?t.touchPitch.enable():t.touchPitch.disable())},scrollZoom(e,t){t&&(e?t.scrollZoom.enable():t.scrollZoom.disable())},boxZoom(e,t){t&&(e?t.boxZoom.enable():t.boxZoom.disable())},dragRotate(e,t){t&&(e?t.dragRotate.enable():t.dragRotate.disable())},dragPan(e,t){t&&(e?t.dragPan.enable():t.dragPan.disable())},keyboard(e,t){t&&(e?t.keyboard.enable():t.keyboard.disable())},touchZoomRotate(e,t){t&&(e?t.touchZoomRotate.enable():t.touchZoomRotate.disable())},doubleClickZoom(e,t){t&&(e?t.doubleClickZoom.enable():t.doubleClickZoom.disable())}},M={};o("2jrP");c["workerClass"]=s["a"];var x=Object(r["forwardRef"])(((e,t)=>{var o=Object(r["useRef"])(null),s=Object(i["a"])(),d=Object(n["a"])(s,2),v=d[0],b=d[1],m=Object(r["useState"])(),f=Object(n["a"])(m,2),h=f[0],g=f[1],O=p(e,{ins:h,events:j,setterMap:y,converterMap:M}),k=O.onInstanceCreated;Object(r["useImperativeHandle"])(t,(()=>h),[h]),Object(r["useEffect"])((()=>{var e=Object(l["a"])(o);e&&x().then((e=>{k(),e.once("load",(()=>{b.setTrue()})),g(e)}))}),[]);var x=()=>{var e=C();return Promise.resolve(new c["Map"](e))},C=()=>{var t=Object(l["a"])(o),n={container:t};return E.forEach((t=>{t in e&&(n[t]=e[t])})),n};return a.a.createElement(u.Provider,{value:h},a.a.createElement("div",{ref:o,style:{height:"100%",width:"100%"}},v&&e.children))}));x.defaultProps={attributionControl:!1,style:"mapbox://styles/mapbox/navigation-preview-night-v2",accessToken:"pk.eyJ1IjoiYmVpamluZ3NlbnNvcm8iLCJhIjoiY2wzNDhwMGU2MDAxdzNkbXB2eG5qcGJ4bSJ9.9YrZb00BwBNTsfMTdgj-oA"};var C=o("f/UK"),R=()=>{var e=Object(r["useContext"])(u);if(!e)throw new Error("The useMap must be used in the Map container");return e},Z={onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend"},w=["anchor","clickTolerance","color","onClick"],P=["draggable","offset","rotation","rotationAlignment","pitchAlignment","scale","lngLat"],D=P.concat(w),S={lngLat(e,t){t&&t.setLngLat(e)}},T={},L=Object(r["forwardRef"])(((e,t)=>{var o=R(),l=Object(r["useRef"])(),s=Object(i["c"])(void 0),u=Object(n["a"])(s,3),d=u[0],v=u[1],b=u[2],m=p(e,{ins:d,events:Z,setterMap:S,converterMap:T,unmount:()=>{l.current&&(l.current.removeEventListener("click",h),l.current=void 0)}}),f=m.onInstanceCreated;Object(r["useImperativeHandle"])(t,(()=>d),[d]);var h=t=>{var o;null===(o=e.onClick)||void 0===o||o.call(e,{type:"click",target:b(),originalEvent:t})};Object(r["useEffect"])((()=>{o&&g().then((t=>{var n;v(t),t.setLngLat(e.lngLat),t.addTo(o),null===(n=l.current)||void 0===n||n.addEventListener("click",h),f()}))}),[o]);var g=()=>{var e=j();l.current=document.createElement("div");var t=new c["Marker"](l.current,e);return Promise.resolve(t)},j=()=>{var t={};return D.forEach((o=>{o in e&&(t[o]=e[o])})),t};return a.a.createElement(a.a.Fragment,null,d&&Object(C["createPortal"])(e.children,d.getElement()))})),z=o("J9RX"),I={data(e,t){t&&t.setData(e)}},A={},q=["id"],B=Object(r["forwardRef"])(((e,t)=>{var o=e.id,a=Object(z["a"])(e,q),c=R(),i=Object(r["useState"])(),l=Object(n["a"])(i,2),s=l[0],u=l[1];Object(r["useImperativeHandle"])(t,(()=>s),[s]);var d=p(e,{ins:s,events:{},setterMap:I,converterMap:A,unmount:()=>{c&&c.style&&c.removeSource(o)}}),v=d.onInstanceCreated;return Object(r["useEffect"])((()=>{c&&(c.addSource(e.id,Object(f["a"])(Object(f["a"])({},a),{},{type:"geojson"})),u(c.getSource(o)),v())}),[c]),null})),F=(e,t,o)=>{var n=Object(r["useRef"])({});Object(r["useEffect"])((()=>{e&&(n.current=a(t,o))}),[e]),Object(i["b"])((()=>{e&&(n.current=c(n.current,o))}),[o]),Object(i["e"])((()=>{l(n.current),n.current={}}));var a=(t,o)=>Object.keys(t).reduce(((n,r)=>{var a=o[r],c=t[r];return c&&a&&(e.on(c,o.id,a),n[r]=a),n}),{}),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,c=Object.keys(t).filter((e=>n[e]&&"function"!==typeof r[e]||!v()(n[e],r[e])));c.forEach((t=>{n[t]&&(e.off(t,o.id,n[t]),delete n[t])}));var i=Object.keys(t).filter((e=>!n[e]&&"function"===typeof r[e])).reduce(((e,o)=>(e[o]=t[o],e)),{}),l=a(i,r);return Object(f["a"])(Object(f["a"])({},n),l)},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.keys(t).filter((e=>n[e]));r.forEach((t=>{e.off(t,o.id,n[t])}))}},_={onClick:"click",onDoubleClick:"dblclick",onContextMenu:"contextmenu",onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOver:"mouseover",onMouseOut:"mouseout",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchCancel:"touchcancel"},J=["before"],U=e=>{var t=e.before,o=Object(z["a"])(e,J),n=R();return F(n,_,e),Object(r["useEffect"])((()=>{n&&n.addLayer(o,t)}),[n]),null}},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},FKcP:function(e,t,o){"use strict";o.r(t);var n=o("mn0l"),r=o("ahKI"),a=o.n(r),c=o("/7QA");t["default"]=()=>{var e={id:"clusters",type:"circle",source:"earthquakes",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#51bbd6",100,"#f1f075",750,"#f28cb1"],"circle-radius":["step",["get","point_count"],20,100,30,750,40]}},t={id:"cluster-count",type:"symbol",source:"earthquakes",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}},o={id:"unclustered-point",type:"circle",source:"earthquakes",filter:["!",["has","point_count"]],paint:{"circle-color":"#11b4da","circle-radius":4,"circle-stroke-width":1,"circle-stroke-color":"#fff"}};return a.a.createElement("div",{style:{height:500}},a.a.createElement(c["b"],{zoom:2,center:[122.4,37.8],style:"mapbox://styles/mapbox/streets-v11"},a.a.createElement(c["d"],{id:"earthquakes",data:"https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:50}),a.a.createElement(c["a"],Object(n["a"])({},e,{onClick:e=>{var t=e.target,o=t.queryRenderedFeatures(e.point,{layers:["clusters"]}),n=o[0].properties.cluster_id;t.getSource("earthquakes").getClusterExpansionZoom(n,((e,n)=>{e||t.easeTo({center:o[0].geometry.coordinates,zoom:n})}))},onMouseEnter:e=>{e.target.getCanvas().style.cursor="pointer"},onMouseLeave:e=>{e.target.getCanvas().style.cursor=""}})),a.a.createElement(c["a"],t),a.a.createElement(c["a"],o)))}},e5j8:function(e,t,o){"use strict";o.r(t);var n=o("ahKI"),r=o.n(n),a=o("/7QA");t["default"]=()=>r.a.createElement("div",{style:{height:500}},r.a.createElement(a["b"],{onClick:e=>{console.log(e)}}))},ef2u:function(e,t,o){"use strict";o.r(t);var n=o("ahKI"),r=o.n(n),a=o("/7QA");t["default"]=()=>r.a.createElement("div",{style:{height:500}},r.a.createElement(a["b"],null,r.a.createElement(a["c"],{lngLat:[30.5,50.5],onDragEnd:e=>{console.log(e)},onClick:e=>{console.log(e)},draggable:!0},r.a.createElement("div",{style:{background:"red",borderRadius:"50%",padding:"3px"}},"123"))))}}]);