import{a as s,j as r}from"./jsx-runtime-5BUNAZ9W.js";import{r as m}from"./index-4g5l5LRQ.js";import{M as y,S as f,u as p}from"./index-UembuRRy.js";import{R as g}from"./index-B1PXJxFU.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./mapbox-gl-oa9XOBpX.js";import"./index-qTf6isfD.js";import"./assertThisInitialized-VoLh22lz.js";const o=[{label:"dark",value:"dark-v11"},{label:"satellite",value:"satellite-streets-v12"}],c=e=>`mapbox://styles/mapbox/${e}`,v=()=>{const{map:e}=p(),[u,d]=m.useState(o[0].value);return r("div",{style:{position:"absolute",background:"#efefef",right:0,padding:12},children:r(g.Group,{value:u,options:o,onChange:h=>{const a=h.target.value;e&&(d(a),e.setStyle(c(a)))}})})},S=()=>{const{map:e}=p();return m.useEffect(()=>{e&&e.flyTo({center:[8.11862,46.58842],zoom:12.5,duration:12*1e3,essential:!0})},[e]),null},M={title:"示例/Flyto",render:()=>s(y,{containerStyle:{height:"100vh"},zoom:1,style:c(o[0].value),children:[s(f,{children:[r(S,{}),";"]}),r(v,{})]}),parameters:{},argTypes:{},args:{containerStyle:{height:500}}},t={args:{}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const z=["Flyto"];export{t as Flyto,z as __namedExportsOrder,M as default};