(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"9kvl":function(e,t,l){"use strict";var n=l("FfOG");l.d(t,"a",(function(){return n["b"]}));l("bCY9")},CUj7:function(e,t,l){"use strict";var n=l("ahKI"),a=l.n(n),r=l("bIC1"),c=l.n(r);l("tkuz");function u(e,t){return i(e)||o(e,t)||E(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function o(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){u=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=u(r,2),E=m[0],d=m[1],o=Object(n["useState"])(!1),i=u(o,2),s=i[0],b=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){d(e.scrollLeft>0),b(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":E||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},Mvco:function(e,t,l){"use strict";l.r(t);var n=l("ahKI"),a=l.n(n),r=l("TwKo"),c=l("sPhZ"),u=l("CUj7"),m=a.a.memo((e=>{var t=e.demos,l=t["map-basic"].component;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u4ecb\u7ecd"},a.a.createElement(r["AnchorLink"],{to:"#\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ecb\u7ecd"),a.a.createElement("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u793a\u4f8b"),a.a.createElement("h3",{id:"\u57fa\u672c\u793a\u4f8b"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u793a\u4f8b")),a.a.createElement(c["default"],t["map-basic"].previewerProps,a.a.createElement(l,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"api"},a.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("h3",{id:"\u9759\u6001\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u9759\u6001\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u5c5e\u6027"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"hash"),a.a.createElement("td",null,"\u5f00\u542f\u5219\u5730\u56fe\u7684\u4f4d\u7f6e (\u5305\u62ec\u7f29\u653e\u5c42\u7ea7\u3001\u4e2d\u5fc3\u7eac\u5ea6\u3001\u4e2d\u5fc3\u7ecf\u5ea6\u3001\u65b9\u4f4d\u89d2\u548c\u503e\u89d2) \u5c06\u4f1a\u4e0e\u9875\u9762 URL \u7684\u54c8\u5e0c\u7247\u6bb5\u540c\u6b65"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"interactive"),a.a.createElement("td",null,"\u5982\u679c\u5173\u95ed\uff0c\u5730\u56fe\u5c06\u4e0d\u4f1a\u7ed1\u5b9a\u5bf9\u9f20\u6807\u3001\u89e6\u78b0\u3001\u952e\u76d8\u7684\u76d1\u542c\uff0c\u56e0\u6b64\u5730\u56fe\u5c06\u4e0d\u4f1a\u54cd\u5e94\u4efb\u4f55\u7528\u6237\u4ea4\u4e92\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"bearingSnap"),a.a.createElement("td",null,"\u5b9a\u4e49\u4f55\u65f6\u5730\u56fe\u7684\u65b9\u4f4d\u5c06\u81ea\u52a8\u5bf9\u9f50\u5230\u6b63\u5317\u65b9\u5411\u7684\u9608\u503c\uff08\u4ee5\u5ea6\u4e3a\u5355\u4f4d\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"7"))),a.a.createElement("tr",null,a.a.createElement("td",null,"pitchWithRotate"),a.a.createElement("td",null,"\u5b9a\u4e49\u4f55\u65f6\u5730\u56fe\u7684\u65b9\u4f4d\u5c06\u81ea\u52a8\u5bf9\u9f50\u5230\u6b63\u5317\u65b9\u5411\u7684\u9608\u503c\uff08\u4ee5\u5ea6\u4e3a\u5355\u4f4d\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"7"))),a.a.createElement("tr",null,a.a.createElement("td",null,"attributionControl"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true, AttributionControl \u5c06\u4f1a\u88ab\u6dfb\u52a0\u5230\u5730\u56fe\u4e0a\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"customAttribution"),a.a.createElement("td",null,"\u5728 AttributionControl \u4e2d\u663e\u793a\u7684\u5b57\u7b26\u4e32\u6216\u5b57\u7b26\u4e32\u6570\u7ec4\u3002\u4ec5\u5f53 options.attributionControl \u4e3a true \u65f6\u751f\u6548"),a.a.createElement("td",null,a.a.createElement("code",null,"string")," | ",a.a.createElement("code",null,"string[]")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"logoPosition"),a.a.createElement("td",null,"\u8bbe\u7f6e Mapbox \u6587\u5b57\u5546\u6807\u5728\u5730\u56fe\u4e0a\u7684\u4f4d\u7f6e"),a.a.createElement("td",null,a.a.createElement("code",null,"top-left")," | ",a.a.createElement("code",null,"top-right")," | ",a.a.createElement("code",null,"bottom-left")," | ",a.a.createElement("code",null,"bottom-right ")),a.a.createElement("td",null,a.a.createElement("code",null,"bottom-left"))),a.a.createElement("tr",null,a.a.createElement("td",null,"failIfMajorPerformanceCaveat"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true, \u5f53 Mapbox GL JS \u7684\u6027\u80fd\u8fdc\u8fdc\u4f4e\u4e8e\u9884\u671f\u7684\u65f6\u5019\uff0c\u5730\u56fe\u5c06\u521b\u5efa\u5931\u8d25\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"preserveDrawingBuffer"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true\uff0c\u5730\u56fe\u753b\u5e03\u53ef\u901a\u8fc7 map.getCanvas().toDataURL() \u8f93\u51fa PNG"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"antialias"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true \uff0cgl \u6e32\u67d3\u73af\u5883\u5728\u521b\u5efa\u65f6\u5c06\u5f00\u542f\u591a\u91cd\u91c7\u6837\u6297\u952f\u9f7f\u6a21\u5f0f\uff08 MSAA \uff09, \u8fd9\u5bf9\u81ea\u5b9a\u4e49\u56fe\u5c42\u7684\u6297\u952f\u9f7f\u5341\u5206\u6709\u6548"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"refreshExpiredTiles"),a.a.createElement("td",null,"\u5982\u679c\u4e3a false\uff0c\u4e00\u65e6\u5207\u7247\u7684 HTTP cacheControl / expires headers \u8fc7\u671f\uff0c\u5730\u56fe\u5c06\u4e0d\u4f1a\u91cd\u65b0\u8bf7\u6c42\u8fd9\u4e9b\u5207\u7247\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"trackResize"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true\uff0c\u5730\u56fe\u5c06\u81ea\u9002\u5e94\u7a97\u53e3\u5927\u5c0f\u53d8\u5316"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"bounds"),a.a.createElement("td",null,"\u5730\u56fe\u521d\u59cb\u5316\u65f6\u7684\u9650\u5236\u8303\u56f4\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"LngLatBoundsLike[]")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"fitBoundsOptions"),a.a.createElement("td",null,"\u7528\u4e8e \u521d\u59cb\u5316\u5730\u56fe\u65f6\u81ea\u9002\u5e94\u8bbe\u7f6e\u7684 bounds \u8303\u56f4\u65f6\u7684\u60c5\u51b5\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"object")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"maxTileCacheSize"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5f53\u524d\u6570\u636e\u6e90\u5b58\u50a8\u5728\u5207\u7247\u7f13\u5b58\u4e2d\u7684\u6700\u5927\u5207\u7247\u6570\u76ee"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"transformRequest"),a.a.createElement("td",null,"\u5730\u56fe\u53d1\u9001\u5916\u90e8 URL \u8bf7\u6c42\u524d\u6267\u884c\u7684\u56de\u8c03\u51fd\u6570\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"function")),a.a.createElement("td",null,a.a.createElement("code",null,"null"))),a.a.createElement("tr",null,a.a.createElement("td",null,"collectResourceTiming"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true \uff0c\u90a3\u4e48\u5c06\u4e3a GeoJSON \u548c Vector Tile web workers \u53d1\u51fa\u7684\u8bf7\u6c42\u641c\u96c6\u8d44\u6e90\u8017\u65f6 API \u4fe1\u606f"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"fadeDuration"),a.a.createElement("td",null,"\u63a7\u5236\u6807\u6ce8\u51b2\u7a81\u65f6\uff0c\u6de1\u5165\u6de1\u51fa\u7684\u52a8\u753b\u8fc7\u6e21\u65f6\u95f4, \u5355\u4f4d\u4e3a\u6beb\u79d2\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"300"))),a.a.createElement("tr",null,a.a.createElement("td",null,"crossSourceCollisions"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true\uff0c\u6765\u81ea\u4e0d\u540c\u6570\u636e\u6e90\u7684\u7b26\u53f7\u5c06\u5171\u540c\u53c2\u4e0e\u5230\u78b0\u649e\u68c0\u6d4b\u4e2d\u3002\u5982\u679c\u4e3a false\uff0c\u4ec5\u5728\u5404\u81ea\u7684\u6570\u636e\u6e90\u4e2d\u76f8\u4e92\u72ec\u7acb\u7684\u8fdb\u884c\u7b26\u53f7\u7684\u78b0\u649e\u68c0\u6d4b"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"accessToken"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5730\u56fe\u7684\u8bbf\u95ee\u4ee4\u724c"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"locale"),a.a.createElement("td",null,"\u5e94\u7528\u4e8e UI \u5b57\u7b26\u4e32\uff08\u5982\u63a7\u4ef6\u5de5\u5177\u63d0\u793a\uff09\u7684\u9ed8\u8ba4\u672c\u5730\u5316\u8868\u7684\u8865\u4e01\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))),a.a.createElement("tr",null,a.a.createElement("td",null,"localFontFamily"),a.a.createElement("td",null,"\u5b9a\u4e49\u4e00\u4e2a CSS \u5b57\u4f53\u7cfb\u5217\uff0c\u7528\u4e8e\u8986\u76d6\u672c\u90fd\u6240\u6709\u5b57\u5f62\u7684\u751f\u6210\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"localIdeographFontFamily"),a.a.createElement("td",null,"\u5b9a\u4e49\u4e00\u4e2a\u7528\u4e8e\u5728\u672c\u5730\u66ff\u4ee3\u901a\u7528\u2018\u4e2d\u65e5\u97e9\u8d8a\u7edf\u4e00\u8868\u610f\u6587\u5b57\u2019\uff0c\u2019\u5e73\u5047\u540d\u2019\uff0c\u2018\u7247\u5047\u540d\u2019\u548c\u2018\u671d\u9c9c\u6587\u97f3\u8282\u2019\u5b57\u5f62\u7684 CSS \u5b57\u4f53\u7cfb\u5217"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,a.a.createElement("code",null,"sans-serif"))),a.a.createElement("tr",null,a.a.createElement("td",null,"testMode"),a.a.createElement("td",null,"\u6d88\u9664\u65e0\u6548\u7684 accessToken \u4ea7\u751f\u7684\u9519\u8bef\u548c\u8b66\u544a"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"false"))))),a.a.createElement("h3",{id:"\u52a8\u6001\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u52a8\u6001\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u5c5e\u6027"),a.a.createElement(u["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"zoom"),a.a.createElement("td",null,"\u5730\u56fe\u521d\u59cb\u5316\u65f6\u7684\u5c42\u7ea7\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"0"))),a.a.createElement("tr",null,a.a.createElement("td",null,"minZoom"),a.a.createElement("td",null,"\u5730\u56fe\u6700\u5c0f\u7f29\u653e\u7ea7\u522b\uff0c\u8303\u56f4 ",a.a.createElement("code",null,"0~24")),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"0"))),a.a.createElement("tr",null,a.a.createElement("td",null,"maxZoom"),a.a.createElement("td",null,"\u5730\u56fe\u6700\u5927\u7f29\u653e\u7ea7\u522b\uff0c\u8303\u56f4 ",a.a.createElement("code",null,"0~24")),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"22"))),a.a.createElement("tr",null,a.a.createElement("td",null,"style"),a.a.createElement("td",null,"\u914d\u7f6e Mapbox \u7684\u6837\u5f0f"),a.a.createElement("td",null,a.a.createElement("code",null,"string")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"maxBounds"),a.a.createElement("td",null,"\u8bbe\u7f6e\u5730\u56fe\u7684\u8303\u56f4"),a.a.createElement("td",null,a.a.createElement("code",null,"LngLatLike[]")),a.a.createElement("td",null,"--")),a.a.createElement("tr",null,a.a.createElement("td",null,"scrollZoom"),a.a.createElement("td",null,'\u5982\u679c\u4e3a true\uff0c\u5c06\u5f00\u542f "\u6eda\u8f6e\u7f29\u653e\u5730\u56fe" \u4ea4\u4e92\u6a21\u5f0f\u3002'),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"boxZoom"),a.a.createElement("td",null,'\u5982\u679c\u4e3a true, \u5c06\u5f00\u542f "\u6846\u9009\u7f29\u653e\u5730\u56fe" \u4ea4\u4e92\u6a21\u5f0f'),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"dragRotate"),a.a.createElement("td",null,'\u5982\u679c\u4e3a true\uff0c\u5c06\u5f00\u542f "\u62d6\u62fd\u65cb\u8f6c\u5730\u56fe" \u4ea4\u4e92\u6a21\u5f0f\u3002'),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"dragPan"),a.a.createElement("td",null,'\u5982\u679c\u4e3a true\uff0c\u5c06\u5f00\u542f "\u62d6\u62fd\u79fb\u52a8\u5730\u56fe" \u4ea4\u4e92\u6a21\u5f0f\u3002'),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"keyboard"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true\uff0c\u5c06\u542f\u7528\u952e\u76d8\u5feb\u6377\u952e\u529f\u80fd \u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"doubleClickZoom"),a.a.createElement("td",null,'\u5982\u679c\u4e3a true\uff0c\u5c06\u5f00\u542f "\u53cc\u51fb\u7f29\u653e\u5730\u56fe" \u4ea4\u4e92\u6a21\u5f0f'),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"touchZoomRotate"),a.a.createElement("td",null,'\u5982\u679c\u4e3a true\uff0c\u5c06\u5f00\u542f "\u634f\u5408\u65cb\u8f6c\u3001\u7f29\u653e" \u4ea4\u4e92\u6a21\u5f0f\u3002'),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"touchPitch"),a.a.createElement("td",null,'\u5982\u679c true\uff0c\u5219\u542f\u7528 "\u62d6\u52a8\u5230\u4fef\u4ef0 " \u4ea4\u4e92\u6a21\u5f0f'),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")," | ",a.a.createElement("code",null,"object")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"renderWorldCopies"),a.a.createElement("td",null,"\u5982\u679c\u4e3a true\uff0c\u5730\u56fe\u7f29\u5c0f\u65f6\u5c06\u6e32\u67d3\u591a\u4e2a\u5168\u5c40\u5730\u56fe\u7684\u526f\u672c\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"boolean")),a.a.createElement("td",null,a.a.createElement("code",null,"true"))),a.a.createElement("tr",null,a.a.createElement("td",null,"pitch"),a.a.createElement("td",null,"\u5730\u56fe\u521d\u59cb\u5316\u65f6\u7684\u503e\u89d2\uff0c\u6309\u504f\u79bb\u5c4f\u5e55\u6c34\u5e73\u9762\u7684\u5ea6\u6570\u8ba1\u91cf\uff080-85\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"0"))),a.a.createElement("tr",null,a.a.createElement("td",null,"maxPitch"),a.a.createElement("td",null,"\u6700\u5927\u503e\u89d2\uff080-85\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"0"))),a.a.createElement("tr",null,a.a.createElement("td",null,"minPitch"),a.a.createElement("td",null,"\u6700\u5c0f\u503e\u89d2\uff080-85\uff09"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"0"))),a.a.createElement("tr",null,a.a.createElement("td",null,"bearing"),a.a.createElement("td",null,"\u5730\u56fe\u521d\u59cb\u5316\u65f6\u7684\u65b9\u4f4d\u89d2\uff08\u65cb\u8f6c\u89d2\u5ea6\uff09\uff0c\u4ee5\u6b63\u5317\u65b9\u7684\u9006\u65f6\u9488\u8f6c\u52a8\u5ea6\u6570\u8ba1\u91cf"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"0"))),a.a.createElement("tr",null,a.a.createElement("td",null,"center"),a.a.createElement("td",null,"\u5730\u56fe\u521d\u59cb\u5316\u65f6\u7684\u5730\u7406\u4e2d\u5fc3\u70b9\u3002"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"[0, 0]"))),a.a.createElement("tr",null,a.a.createElement("td",null,"projection"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6e32\u67d3\u5730\u56fe\u7684\u6295\u5f71"),a.a.createElement("td",null,a.a.createElement("code",null,"string")),a.a.createElement("td",null,a.a.createElement("code",null,"mercator"))))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}},tkuz:function(e,t,l){}}]);