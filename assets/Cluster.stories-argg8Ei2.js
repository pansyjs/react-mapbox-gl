import{j as r,a as M}from"./jsx-runtime-5BUNAZ9W.js";import{r as C}from"./index-4g5l5LRQ.js";import{M as j,S as v,b as E,L as a,u as P}from"./layer-sFLfFc5f.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./mapbox-gl-oa9XOBpX.js";import"./index-qTf6isfD.js";const t={id:"clusters",type:"circle",source:"earthquakes",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#51bbd6",100,"#f1f075",750,"#f28cb1"],"circle-radius":["step",["get","point_count"],20,100,30,750,40]}},s={id:"cluster-count",type:"symbol",source:"earthquakes",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}},o={id:"unclustered-point",type:"circle",source:"earthquakes",filter:["!",["has","point_count"]],paint:{"circle-color":"#11b4da","circle-radius":4,"circle-stroke-width":1,"circle-stroke-color":"#fff"}},z=()=>{const{map:e}=P();return C.useEffect(()=>{e&&e.on("click","clusters",k=>{var i;const n=e.queryRenderedFeatures(k.point,{layers:["clusters"]}),S=(i=n[0].properties)==null?void 0:i.cluster_id;e.getSource("earthquakes").getClusterExpansionZoom(S,(q,L)=>{q||e.easeTo({center:n[0].geometry.coordinates,zoom:L})})})},[e]),null},F={title:"示例/Cluster",render:()=>r(j,{zoom:3,center:[-103.5917,40.6699],style:"mapbox://styles/mapbox/dark-v11",containerStyle:{height:"100vh"},children:r(v,{children:M(E,{id:"earthquakes",type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:50,children:[r(a,{...t}),r(a,{...s}),r(a,{...o}),r(z,{})]})})}),parameters:{layout:"fullscreen"},argTypes:{},args:{lngLat:[-122.414,37.776]}},c={args:{}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  id: 'clusters',
  type: 'circle',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  paint: {
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  id: 'cluster-count',
  type: 'symbol',
  source: 'earthquakes',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,h,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  id: 'unclustered-point',
  type: 'circle',
  source: 'earthquakes',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,x,_;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(_=(x=c.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const N=["clusterLayer","clusterCountLayer","unclusteredPointLayer","Cluster"];export{c as Cluster,N as __namedExportsOrder,s as clusterCountLayer,t as clusterLayer,F as default,o as unclusteredPointLayer};
