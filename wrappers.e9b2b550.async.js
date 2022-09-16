(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"9kvl":function(e,n,t){"use strict";var r=t("FfOG");t.d(n,"a",(function(){return r["b"]}));t("bCY9")},afA6:function(e,n,t){"use strict";t.r(n);var r=t("mn0l"),a=t("ahKI"),o=t.n(a),s=t("q3YX"),c=t("DBVu"),i=t("GAyR"),l=t("f12B"),p="import { Layer, Map, Source } from '@pansy/react-mapbox-gl';\n\nexport default () => {\n  const clusterLayer = {\n    id: 'clusters',\n    type: 'circle',\n    source: 'earthquakes',\n    filter: ['has', 'point_count'],\n    paint: {\n      'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],\n      'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],\n    },\n  };\n\n  const clusterCountLayer = {\n    id: 'cluster-count',\n    type: 'symbol',\n    source: 'earthquakes',\n    filter: ['has', 'point_count'],\n    layout: {\n      'text-field': '{point_count_abbreviated}',\n      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],\n      'text-size': 12,\n    },\n  };\n\n  const unclusteredPointLayer = {\n    id: 'unclustered-point',\n    type: 'circle',\n    source: 'earthquakes',\n    filter: ['!', ['has', 'point_count']],\n    paint: {\n      'circle-color': '#11b4da',\n      'circle-radius': 4,\n      'circle-stroke-width': 1,\n      'circle-stroke-color': '#fff',\n    },\n  };\n\n  return (\n    <div style={{ height: 500 }}>\n      <Map zoom={2} center={[122.4, 37.8]} style={'mapbox://styles/mapbox/streets-v11'}>\n        <Source\n          id=\"earthquakes\"\n          data=\"https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson\"\n          cluster={true}\n          clusterMaxZoom={14}\n          clusterRadius={50}\n        />\n        <Layer\n          {...(clusterLayer as any)}\n          onClick={(e) => {\n            const map = e.target;\n\n            const features = map.queryRenderedFeatures(e.point, {\n              layers: ['clusters'],\n            });\n\n            // @ts-ignore\n            const clusterId = features[0].properties.cluster_id;\n\n            // @ts-ignore\n            map.getSource('earthquakes').getClusterExpansionZoom(clusterId, (err, zoom) => {\n              if (err) return;\n\n              map.easeTo({\n                // @ts-ignore\n                center: features[0].geometry.coordinates,\n                zoom: zoom,\n              });\n            });\n          }}\n          onMouseEnter={(e) => {\n            e.target.getCanvas().style.cursor = 'pointer';\n          }}\n          onMouseLeave={(e) => {\n            e.target.getCanvas().style.cursor = '';\n          }}\n        />\n        <Layer {...(clusterCountLayer as any)} />\n        <Layer {...(unclusteredPointLayer as any)} />\n      </Map>\n    </div>\n  );\n};",u="import { Map } from '@pansy/react-mapbox-gl';\n\nexport default () => {\n  return (\n    <div style={{ height: 500 }}>\n      <Map\n        onClick={(e) => {\n          console.log(e);\n        }}\n      />\n    </div>\n  );\n};",d="import { Map, MapProps } from '@pansy/react-mapbox-gl';\n\nexport default () => {\n  const mapSetup: MapProps = {\n    projection: { name: 'globe' },\n    zoom: 2,\n    style: 'mapbox://styles/mapbox/satellite-v9',\n  };\n\n  return (\n    <div style={{ height: 500 }}>\n      <Map\n        onClick={(e) => {\n          console.log(e);\n        }}\n        {...mapSetup}\n        onLoad={(e) => {\n          const map = e.target;\n          map.setFog({});\n        }}\n      />\n    </div>\n  );\n};",m="import { Map, Marker } from '@pansy/react-mapbox-gl';\n\nexport default () => {\n  return (\n    <div style={{ height: 500 }}>\n      <Map>\n        <Marker\n          lngLat={[30.5, 50.5]}\n          onDragEnd={(e) => {\n            console.log(e);\n          }}\n          onClick={(e) => {\n            console.log(e);\n          }}\n          draggable={true}\n        >\n          <div style={{ background: 'red', borderRadius: '50%', padding: '3px' }}>123</div>\n        </Marker>\n      </Map>\n    </div>\n  );\n};",b={"layer-basic":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(13),t.e(4)]).then(t.bind(null,"FKcP"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{"@pansy/react-mapbox-gl":{version:"1.0.0"},"mapbox-gl":{version:"^2.0.0",css:"mapbox-gl/dist/mapbox-gl.css"},react:{version:"^16.x || ^17.x || ^18.x"},"react-dom":{version:"^16.x || ^17.x || ^18.x"}},identifier:"layer-basic"}},"map-basic":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(13),t.e(4)]).then(t.bind(null,"e5j8"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:u}},dependencies:{"@pansy/react-mapbox-gl":{version:"1.0.0"},"mapbox-gl":{version:"^2.0.0",css:"mapbox-gl/dist/mapbox-gl.css"},react:{version:"^16.x || ^17.x || ^18.x"},"react-dom":{version:"^16.x || ^17.x || ^18.x"}},identifier:"map-basic"}},"map-globe":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(13),t.e(4)]).then(t.bind(null,"tm+w"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{"@pansy/react-mapbox-gl":{version:"1.0.0"},"mapbox-gl":{version:"^2.0.0",css:"mapbox-gl/dist/mapbox-gl.css"},react:{version:"^16.x || ^17.x || ^18.x"},"react-dom":{version:"^16.x || ^17.x || ^18.x"}},identifier:"map-globe"}},"marker-basic":{component:Object(l["dynamic"])({loader:function(){var e=Object(i["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(13),t.e(4)]).then(t.bind(null,"ef2u"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{"@pansy/react-mapbox-gl":{version:"1.0.0"},"mapbox-gl":{version:"^2.0.0",css:"mapbox-gl/dist/mapbox-gl.css"},react:{version:"^16.x || ^17.x || ^18.x"},"react-dom":{version:"^16.x || ^17.x || ^18.x"}},identifier:"marker-basic"}}},x=t("x2v5"),g=t("efe2"),f=t.n(g);n["default"]=e=>o.a.createElement(f.a,Object(r["a"])({},e,{config:s,demos:b,apis:x}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"\u5bb9\u5668","meta":{"order":0,"__fallback":true},"children":[{"path":"/components/map","title":"Map","meta":{"order":0}}]},{"title":"\u5730\u56fe\u7ec4\u4ef6","meta":{"order":1,"__fallback":true},"children":[{"path":"/components/marker","title":"Marker","meta":{"order":0}},{"path":"/components/layer","title":"Layer","meta":{"order":1}}]}],"/docs":[{"title":"\u6587\u6863","path":"/docs/","meta":{},"children":[{"path":"/docs/getting-started","title":"\u5feb\u901f\u5f00\u59cb","meta":{"order":2}},{"path":"/docs/faq","title":"FAQ","meta":{"order":3}}]}],"*":[{"path":"/","title":"Mapbox - \u57fa\u4e8e mapbox-gl \u5c01\u88c5\u7684 React \u7ec4\u4ef6\u5e93.","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6587\u6863","path":"/docs"},{"title":"\u7ec4\u4ef6","path":"/components"},{"title":"Mapbox GL","path":"https://docs.mapbox.com/mapbox-gl-js/api/"},{"title":"GitHub","path":"https://github.com/pansyjs/react-mapbox-gl"}]},"title":"React Mapbox GL","logo":"./logo.svg","mode":"site","repository":{"url":"https://github.com/pansyjs/react-mapbox-gl","branch":"master"},"theme":{}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);