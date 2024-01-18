import{a as nt,j as Z,F as rt}from"./jsx-runtime-5BUNAZ9W.js";import{M as ae}from"./mapbox-gl-oa9XOBpX.js";import{r as c,R as at}from"./index-4g5l5LRQ.js";import{r as le}from"./index-jmm5gWkb.js";const Ve=c.createContext({});function ot(e){var t=c.useRef(e);return t.current=e,t}var ut=!!(typeof window<"u"&&window.document&&window.document.createElement),W,G;ut&&(!((W=window)===null||W===void 0||(G=W.navigator)===null||G===void 0)&&G.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);var it=function(t){return typeof t=="function"};function B(e){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(e)}function lt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function o(a,u){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=r.has(a);if(s)return!1;if(a===u)return!0;if(n&&l>1)return!1;r.add(a);var i=l+1;if(Array.isArray(a)){if(!Array.isArray(u)||a.length!==u.length)return!1;for(var f=0;f<a.length;f++)if(!o(a[f],u[f],i))return!1;return!0}if(a&&u&&B(a)==="object"&&B(u)==="object"){var m=Object.keys(a);return m.length!==Object.keys(u).length?!1:m.every(function(p){return o(a[p],u[p],i)})}return!1}return o(e,t)}var st=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return lt(t,n)},ct=function(t){return function(n,r){var o=c.useRef(),a=c.useRef(0);(r===void 0||!st(r,o.current))&&(o.current=r,a.current+=1),t(n,[a.current])}};function Y(e){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(e)}function Ie(e){typeof e!="function"&&console.error("useUnmount expected parameter is a function, got ".concat(Y(e)));var t=ot(e);c.useEffect(function(){return function(){t.current()}},[])}var dt=ct(c.useEffect);function ft(e,t){return typeof e=="function"?e.length?e(t):e():e}function pt(e,t){return gt(e)||yt(e,t)||mt(e,t)||vt()}function vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mt(e,t){if(e){if(typeof e=="string")return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(e,t)}}function se(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yt(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,u,l=[],s=!0,i=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(f){i=!0,o=f}finally{try{if(!s&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(i)throw o}}return l}}function gt(e){if(Array.isArray(e))return e}function ht(e){var t=c.useState(e),n=pt(t,2),r=n[0],o=n[1],a=c.useRef(r);a.current=r;var u=c.useCallback(function(s){a.current=ft(s,a.current),o(a.current)},[]),l=c.useCallback(function(){return a.current},[]);return[r,u,l]}var bt=function(t,n){return t!==n};function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:bt,n=c.useRef(),r=c.useRef();return t(r.current,e)&&(n.current=r.current,r.current=e),n.current}function ce(e,t){return Tt(e)||St(e,t)||_t(e,t)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(e,t){if(e){if(typeof e=="string")return de(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(e,t)}}function de(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function St(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,a=!1,u,l;try{for(n=n.call(e);!(o=(u=n.next()).done)&&(r.push(u.value),!(t&&r.length===t));o=!0);}catch(s){a=!0,l=s}finally{try{!o&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function Tt(e){if(Array.isArray(e))return e}var Ct=function(){var t=c.useState(function(){return document.createElement("div")}),n=ce(t,1),r=n[0],o=c.useState({render:function(){return null},remove:function(){return null}}),a=ce(o,2),u=a[0],l=a[1],s=c.useCallback(function(i){var f=function(d){var v=d.children;return v?le.createPortal(v,i):null},m=function(d){d&&le.unmountComponentAtNode(d)};return{render:f,remove:m}},[]);return c.useEffect(function(){r&&u.remove();var i=s(r);return l(i),function(){i.remove(r)}},[r]),{Portal:u.render,container:r}};const wt=(e,t)=>e?e.map((n,r)=>Object.is(e[r],t==null?void 0:t[r])?-1:r).filter(n=>n>=0):t?t.map((n,r)=>r):[],At=(e,t)=>{const n=c.useRef();c.useEffect(()=>{const r=wt(n.current,t),o=n.current;return n.current=t,e(r,o,t)},t)},oe=(e,t,n)=>{const{eventMap:r={},eventList:o=[]}=n;At((a=[],u,l)=>{if(!e)return;let s=a.filter(i=>!!i).map(i=>i-1);a.includes(0)&&(s=o.map((i,f)=>f)),s.forEach(i=>{const f=r[o[i]],m=u==null?void 0:u[i+1],p=l==null?void 0:l[i+1];m&&e.off(f,m),p&&e.on(f,p)})},[e,...o.map(a=>t[a])]),Ie(()=>{e&&o.forEach(a=>{const u=r[a],l=t[a];u&&l&&e.off(u,l)})})};var Fe=typeof global=="object"&&global&&global.Object===Object&&global,xt=typeof self=="object"&&self&&self.Object===Object&&self,M=Fe||xt||Function("return this")(),x=M.Symbol,Ze=Object.prototype,Lt=Ze.hasOwnProperty,Pt=Ze.toString,P=x?x.toStringTag:void 0;function Ot(e){var t=Lt.call(e,P),n=e[P];try{e[P]=void 0;var r=!0}catch{}var o=Pt.call(e);return r&&(t?e[P]=n:delete e[P]),o}var Dt=Object.prototype,qt=Dt.toString;function $t(e){return qt.call(e)}var jt="[object Null]",Rt="[object Undefined]",fe=x?x.toStringTag:void 0;function R(e){return e==null?e===void 0?Rt:jt:fe&&fe in Object(e)?Ot(e):$t(e)}function q(e){return e!=null&&typeof e=="object"}var N=Array.isArray;function Be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Vt="[object AsyncFunction]",It="[object Function]",Ft="[object GeneratorFunction]",Zt="[object Proxy]";function Ne(e){if(!Be(e))return!1;var t=R(e);return t==It||t==Ft||t==Vt||t==Zt}var k=M["__core-js_shared__"],pe=function(){var e=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Bt(e){return!!pe&&pe in e}var Nt=Function.prototype,zt=Nt.toString;function w(e){if(e!=null){try{return zt.call(e)}catch{}try{return e+""}catch{}}return""}var Ut=/[\\^$.*+?()[\]{}|]/g,Ht=/^\[object .+?Constructor\]$/,Wt=Function.prototype,Gt=Object.prototype,kt=Wt.toString,Kt=Gt.hasOwnProperty,Xt=RegExp("^"+kt.call(Kt).replace(Ut,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yt(e){if(!Be(e)||Bt(e))return!1;var t=Ne(e)?Xt:Ht;return t.test(w(e))}function Jt(e,t){return e==null?void 0:e[t]}function L(e,t){var n=Jt(e,t);return Yt(n)?n:void 0}var J=L(M,"WeakMap"),Qt=9007199254740991,en=/^(?:0|[1-9]\d*)$/;function tn(e,t){var n=typeof e;return t=t??Qt,!!t&&(n=="number"||n!="symbol"&&en.test(e))&&e>-1&&e%1==0&&e<t}function ze(e,t){return e===t||e!==e&&t!==t}var nn=9007199254740991;function Ue(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=nn}function rn(e){return e!=null&&Ue(e.length)&&!Ne(e)}var an=Object.prototype;function on(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||an;return e===n}function un(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var ln="[object Arguments]";function ve(e){return q(e)&&R(e)==ln}var He=Object.prototype,sn=He.hasOwnProperty,cn=He.propertyIsEnumerable,dn=ve(function(){return arguments}())?ve:function(e){return q(e)&&sn.call(e,"callee")&&!cn.call(e,"callee")};function fn(){return!1}var We=typeof exports=="object"&&exports&&!exports.nodeType&&exports,me=We&&typeof module=="object"&&module&&!module.nodeType&&module,pn=me&&me.exports===We,ye=pn?M.Buffer:void 0,vn=ye?ye.isBuffer:void 0,Q=vn||fn,mn="[object Arguments]",yn="[object Array]",gn="[object Boolean]",hn="[object Date]",bn="[object Error]",En="[object Function]",Mn="[object Map]",_n="[object Number]",Sn="[object Object]",Tn="[object RegExp]",Cn="[object Set]",wn="[object String]",An="[object WeakMap]",xn="[object ArrayBuffer]",Ln="[object DataView]",Pn="[object Float32Array]",On="[object Float64Array]",Dn="[object Int8Array]",qn="[object Int16Array]",$n="[object Int32Array]",jn="[object Uint8Array]",Rn="[object Uint8ClampedArray]",Vn="[object Uint16Array]",In="[object Uint32Array]",g={};g[Pn]=g[On]=g[Dn]=g[qn]=g[$n]=g[jn]=g[Rn]=g[Vn]=g[In]=!0;g[mn]=g[yn]=g[xn]=g[gn]=g[Ln]=g[hn]=g[bn]=g[En]=g[Mn]=g[_n]=g[Sn]=g[Tn]=g[Cn]=g[wn]=g[An]=!1;function Fn(e){return q(e)&&Ue(e.length)&&!!g[R(e)]}function Zn(e){return function(t){return e(t)}}var Ge=typeof exports=="object"&&exports&&!exports.nodeType&&exports,D=Ge&&typeof module=="object"&&module&&!module.nodeType&&module,Bn=D&&D.exports===Ge,K=Bn&&Fe.process,ge=function(){try{var e=D&&D.require&&D.require("util").types;return e||K&&K.binding&&K.binding("util")}catch{}}(),he=ge&&ge.isTypedArray,ke=he?Zn(he):Fn,Nn=Object.prototype,zn=Nn.hasOwnProperty;function Un(e,t){var n=N(e),r=!n&&dn(e),o=!n&&!r&&Q(e),a=!n&&!r&&!o&&ke(e),u=n||r||o||a,l=u?un(e.length,String):[],s=l.length;for(var i in e)(t||zn.call(e,i))&&!(u&&(i=="length"||o&&(i=="offset"||i=="parent")||a&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||tn(i,s)))&&l.push(i);return l}function Hn(e,t){return function(n){return e(t(n))}}var Wn=Hn(Object.keys,Object),Gn=Object.prototype,kn=Gn.hasOwnProperty;function Kn(e){if(!on(e))return Wn(e);var t=[];for(var n in Object(e))kn.call(e,n)&&n!="constructor"&&t.push(n);return t}function Xn(e){return rn(e)?Un(e):Kn(e)}var $=L(Object,"create");function Yn(){this.__data__=$?$(null):{},this.size=0}function Jn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Qn="__lodash_hash_undefined__",er=Object.prototype,tr=er.hasOwnProperty;function nr(e){var t=this.__data__;if($){var n=t[e];return n===Qn?void 0:n}return tr.call(t,e)?t[e]:void 0}var rr=Object.prototype,ar=rr.hasOwnProperty;function or(e){var t=this.__data__;return $?t[e]!==void 0:ar.call(t,e)}var ur="__lodash_hash_undefined__";function ir(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=$&&t===void 0?ur:t,this}function C(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}C.prototype.clear=Yn;C.prototype.delete=Jn;C.prototype.get=nr;C.prototype.has=or;C.prototype.set=ir;function lr(){this.__data__=[],this.size=0}function U(e,t){for(var n=e.length;n--;)if(ze(e[n][0],t))return n;return-1}var sr=Array.prototype,cr=sr.splice;function dr(e){var t=this.__data__,n=U(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():cr.call(t,n,1),--this.size,!0}function fr(e){var t=this.__data__,n=U(t,e);return n<0?void 0:t[n][1]}function pr(e){return U(this.__data__,e)>-1}function vr(e,t){var n=this.__data__,r=U(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function _(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_.prototype.clear=lr;_.prototype.delete=dr;_.prototype.get=fr;_.prototype.has=pr;_.prototype.set=vr;var j=L(M,"Map");function mr(){this.size=0,this.__data__={hash:new C,map:new(j||_),string:new C}}function yr(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function H(e,t){var n=e.__data__;return yr(t)?n[typeof t=="string"?"string":"hash"]:n.map}function gr(e){var t=H(this,e).delete(e);return this.size-=t?1:0,t}function hr(e){return H(this,e).get(e)}function br(e){return H(this,e).has(e)}function Er(e,t){var n=H(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function A(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}A.prototype.clear=mr;A.prototype.delete=gr;A.prototype.get=hr;A.prototype.has=br;A.prototype.set=Er;function Mr(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function _r(){this.__data__=new _,this.size=0}function Sr(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Tr(e){return this.__data__.get(e)}function Cr(e){return this.__data__.has(e)}var wr=200;function Ar(e,t){var n=this.__data__;if(n instanceof _){var r=n.__data__;if(!j||r.length<wr-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new A(r)}return n.set(e,t),this.size=n.size,this}function S(e){var t=this.__data__=new _(e);this.size=t.size}S.prototype.clear=_r;S.prototype.delete=Sr;S.prototype.get=Tr;S.prototype.has=Cr;S.prototype.set=Ar;function xr(e,t){for(var n=-1,r=e==null?0:e.length,o=0,a=[];++n<r;){var u=e[n];t(u,n,e)&&(a[o++]=u)}return a}function Lr(){return[]}var Pr=Object.prototype,Or=Pr.propertyIsEnumerable,be=Object.getOwnPropertySymbols,Dr=be?function(e){return e==null?[]:(e=Object(e),xr(be(e),function(t){return Or.call(e,t)}))}:Lr;const qr=Dr;function $r(e,t,n){var r=t(e);return N(e)?r:Mr(r,n(e))}function Ee(e){return $r(e,Xn,qr)}var ee=L(M,"DataView"),te=L(M,"Promise"),ne=L(M,"Set"),Me="[object Map]",jr="[object Object]",_e="[object Promise]",Se="[object Set]",Te="[object WeakMap]",Ce="[object DataView]",Rr=w(ee),Vr=w(j),Ir=w(te),Fr=w(ne),Zr=w(J),T=R;(ee&&T(new ee(new ArrayBuffer(1)))!=Ce||j&&T(new j)!=Me||te&&T(te.resolve())!=_e||ne&&T(new ne)!=Se||J&&T(new J)!=Te)&&(T=function(e){var t=R(e),n=t==jr?e.constructor:void 0,r=n?w(n):"";if(r)switch(r){case Rr:return Ce;case Vr:return Me;case Ir:return _e;case Fr:return Se;case Zr:return Te}return t});const we=T;var Br=M.Uint8Array;const Ae=Br;var Nr="__lodash_hash_undefined__";function zr(e){return this.__data__.set(e,Nr),this}function Ur(e){return this.__data__.has(e)}function z(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new A;++t<n;)this.add(e[t])}z.prototype.add=z.prototype.push=zr;z.prototype.has=Ur;function Hr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function Wr(e,t){return e.has(t)}var Gr=1,kr=2;function Ke(e,t,n,r,o,a){var u=n&Gr,l=e.length,s=t.length;if(l!=s&&!(u&&s>l))return!1;var i=a.get(e),f=a.get(t);if(i&&f)return i==t&&f==e;var m=-1,p=!0,d=n&kr?new z:void 0;for(a.set(e,t),a.set(t,e);++m<l;){var v=e[m],y=t[m];if(r)var h=u?r(y,v,m,t,e,a):r(v,y,m,e,t,a);if(h!==void 0){if(h)continue;p=!1;break}if(d){if(!Hr(t,function(E,b){if(!Wr(d,b)&&(v===E||o(v,E,n,r,a)))return d.push(b)})){p=!1;break}}else if(!(v===y||o(v,y,n,r,a))){p=!1;break}}return a.delete(e),a.delete(t),p}function Kr(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function Xr(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Yr=1,Jr=2,Qr="[object Boolean]",ea="[object Date]",ta="[object Error]",na="[object Map]",ra="[object Number]",aa="[object RegExp]",oa="[object Set]",ua="[object String]",ia="[object Symbol]",la="[object ArrayBuffer]",sa="[object DataView]",xe=x?x.prototype:void 0,X=xe?xe.valueOf:void 0;function ca(e,t,n,r,o,a,u){switch(n){case sa:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case la:return!(e.byteLength!=t.byteLength||!a(new Ae(e),new Ae(t)));case Qr:case ea:case ra:return ze(+e,+t);case ta:return e.name==t.name&&e.message==t.message;case aa:case ua:return e==t+"";case na:var l=Kr;case oa:var s=r&Yr;if(l||(l=Xr),e.size!=t.size&&!s)return!1;var i=u.get(e);if(i)return i==t;r|=Jr,u.set(e,t);var f=Ke(l(e),l(t),r,o,a,u);return u.delete(e),f;case ia:if(X)return X.call(e)==X.call(t)}return!1}var da=1,fa=Object.prototype,pa=fa.hasOwnProperty;function va(e,t,n,r,o,a){var u=n&da,l=Ee(e),s=l.length,i=Ee(t),f=i.length;if(s!=f&&!u)return!1;for(var m=s;m--;){var p=l[m];if(!(u?p in t:pa.call(t,p)))return!1}var d=a.get(e),v=a.get(t);if(d&&v)return d==t&&v==e;var y=!0;a.set(e,t),a.set(t,e);for(var h=u;++m<s;){p=l[m];var E=e[p],b=t[p];if(r)var ie=u?r(b,E,p,t,e,a):r(E,b,p,e,t,a);if(!(ie===void 0?E===b||o(E,b,n,r,a):ie)){y=!1;break}h||(h=p=="constructor")}if(y&&!h){var V=e.constructor,I=t.constructor;V!=I&&"constructor"in e&&"constructor"in t&&!(typeof V=="function"&&V instanceof V&&typeof I=="function"&&I instanceof I)&&(y=!1)}return a.delete(e),a.delete(t),y}var ma=1,Le="[object Arguments]",Pe="[object Array]",F="[object Object]",ya=Object.prototype,Oe=ya.hasOwnProperty;function ga(e,t,n,r,o,a){var u=N(e),l=N(t),s=u?Pe:we(e),i=l?Pe:we(t);s=s==Le?F:s,i=i==Le?F:i;var f=s==F,m=i==F,p=s==i;if(p&&Q(e)){if(!Q(t))return!1;u=!0,f=!1}if(p&&!f)return a||(a=new S),u||ke(e)?Ke(e,t,n,r,o,a):ca(e,t,s,n,r,o,a);if(!(n&ma)){var d=f&&Oe.call(e,"__wrapped__"),v=m&&Oe.call(t,"__wrapped__");if(d||v){var y=d?e.value():e,h=v?t.value():t;return a||(a=new S),o(y,h,n,r,a)}}return p?(a||(a=new S),va(e,t,n,r,o,a)):!1}function Xe(e,t,n,r,o){return e===t?!0:e==null||t==null||!q(e)&&!q(t)?e!==e&&t!==t:ga(e,t,n,r,Xe,o)}function ha(e,t){return Xe(e,t)}const ba=e=>e[0].toUpperCase()+e.slice(1,e.length);function Ye(e,t,{setterMap:n={},converterMap:r={}}={}){const o=Et(e);dt(()=>{t&&u(e,!0)},[e]),Ie(()=>{t&&"remove"in t&&t.remove()});const a=()=>{u(e,!1)},u=(l,s=!0)=>{if(t)try{Object.keys(l).forEach(i=>{if(it(e[i])&&/^on[A-Z]/.test(i))return;let f=!0;if(s&&(f=!ha(l[i],o==null?void 0:o[i])),!f)return;let m=l[i];if(i in r&&(m=r[i](l[i])),i in n)n[i](m,t);else{const p=`set${ba(i)}`;p in t&&t[p](m)}})}catch(i){console.error(i)}};return{onInstanceCreated:a}}const Ea=["accessToken","antialias","attributionControl","bearingSnap","bounds","hash","interactive","clickTolerance","pitchWithRotate","customAttribution","cooperativeGestures","logoPosition","failIfMajorPerformanceCaveat","preserveDrawingBuffer","refreshExpiredTiles","trackResize","fitBoundsOptions","maxTileCacheSize","transformRequest","collectResourceTiming","fadeDuration","crossSourceCollisions","optimizeForTerrain","locale","localFontFamily","localIdeographFontFamily","testMode"],Ma=["center","zoom","minZoom","maxZoom","style","maxBounds","dragPan","renderWorldCopies","pitch","maxPitch","minPitch","bearing","projection","touchPitch","boxZoom","scrollZoom","dragRotate","dragPan","keyboard","touchZoomRotate","doubleClickZoom"],_a=Ma.concat(Ea),Sa={touchPitch(e,t){if(t){if(e){t.touchPitch.enable();return}t.touchPitch.disable()}},scrollZoom(e,t){if(t){if(e){t.scrollZoom.enable();return}t.scrollZoom.disable()}},boxZoom(e,t){if(t){if(e){t.boxZoom.enable();return}t.boxZoom.disable()}},dragRotate(e,t){if(t){if(e){t.dragRotate.enable();return}t.dragRotate.disable()}},dragPan(e,t){if(t){if(e){t.dragPan.enable();return}t.dragPan.disable()}},keyboard(e,t){if(t){if(e){t.keyboard.enable();return}t.keyboard.disable()}},touchZoomRotate(e,t){if(t){if(e){t.touchZoomRotate.enable();return}t.touchZoomRotate.disable()}},doubleClickZoom(e,t){if(t){if(e){t.doubleClickZoom.enable();return}t.doubleClickZoom.disable()}}},Ta={},Je={onError:"error",onLoad:"load",onIdle:"idle",onRemove:"remove",onRender:"render",onResize:"resize",onWebglContextLost:"webglcontextlost",onWebglContextRestored:"webglcontextrestored",onDataloading:"dataloading",onData:"data",onTileDataLoading:"tiledataloading",onSourceDataLoading:"sourcedataloading",onStyleDataLoading:"styledataloading",onStyleLoad:"style.load",onStyleImportLoad:"style.import.load",onSourceData:"sourcedata",onStyleData:"styledata",onBoxZoomCancel:"boxzoomcancel",onBoxZoomStart:"boxzoomstart",onBoxZoomEnd:"boxzoomend",onTouchCancel:"touchcancel",onTouchMove:"touchmove",onTouchEnd:"touchend",onTouchStart:"touchstart",onClick:"click",onContextMenu:"contextmenu",onDoubleClick:"dblclick",onMouseMove:"mousemove",onMouseUp:"mouseup",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMoveStart:"movestart",onMove:"move",onMoveEnd:"moveend",onZoomStart:"zoomstart",onZoom:"zoom",onZoomEnd:"zoomend",onRotateStart:"rotatestart",onRotate:"rotate",onRotateEnd:"rotateend",onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend",onPitchStart:"pitchstart",onPitch:"pitch",onPitchEnd:"pitchend",onWheel:"wheel"},Ca=Object.keys(Je),De=c.forwardRef((e,t)=>{const{className:n,loading:r,containerStyle:o,children:a}=e,u=c.useRef(null),[l,s]=c.useState(),i=c.useMemo(()=>({position:"relative",width:"100%",height:"100%",...e.containerStyle}),[e.style]),{current:f}=c.useRef({}),{onInstanceCreated:m}=Ye(e,l,{setterMap:Sa,converterMap:Ta});oe(l,e,{eventMap:Je,eventList:Ca}),c.useImperativeHandle(t,()=>l,[l]),c.useEffect(()=>{u.current&&p().then(y=>{m(),f.map=y,s(y)})},[u]);const p=()=>{const y=d(e);return Promise.resolve(new ae.Map(y))},d=y=>{const E={container:u.current};return _a.forEach(b=>{b in y&&b!=="container"&&(E[b]=y[b])}),E},v={height:"100%"};return nt("div",{ref:u,style:i,className:n,children:[!l&&r,l&&Z(Ve.Provider,{value:f,children:Z("div",{"mapboxgl-children":"",style:v,children:a})})]})});try{De.displayName="Map",De.__docgenInfo={description:"",displayName:"Map",props:{loading:{defaultValue:null,description:"地图加载前的加载效果",name:"loading",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"额外的样式类",name:"className",required:!1,type:{name:"string"}},containerStyle:{defaultValue:null,description:"地图挂载节点样式",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((e: ErrorEvent) => void)"}},onLoad:{defaultValue:null,description:`下载所有必要的资源并且第一次视觉上完整渲染发生后触发
@param e
@returns`,name:"onLoad",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onIdle:{defaultValue:null,description:"",name:"onIdle",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onRender:{defaultValue:null,description:"",name:"onRender",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"((e: MapboxEvent<undefined>) => void)"}},onWebglContextLost:{defaultValue:null,description:"",name:"onWebglContextLost",required:!1,type:{name:"((e: MapContextEvent) => void)"}},onWebglContextRestored:{defaultValue:null,description:"",name:"onWebglContextRestored",required:!1,type:{name:"((e: MapContextEvent) => void)"}},onDataloading:{defaultValue:null,description:"",name:"onDataloading",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onData:{defaultValue:null,description:"",name:"onData",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onTileDataLoading:{defaultValue:null,description:"",name:"onTileDataLoading",required:!1,type:{name:"((e: MapDataEvent) => void)"}},onSourceDataLoading:{defaultValue:null,description:"",name:"onSourceDataLoading",required:!1,type:{name:"((e: MapSourceDataEvent) => void)"}},onStyleDataLoading:{defaultValue:null,description:"",name:"onStyleDataLoading",required:!1,type:{name:"((e: MapStyleDataEvent) => void)"}},onStyleLoad:{defaultValue:null,description:"",name:"onStyleLoad",required:!1,type:{name:'((e: Omit<MapStyleDataEvent, "dataType"> & { type: "style.load"; }) => void)'}},onStyleImportLoad:{defaultValue:null,description:"",name:"onStyleImportLoad",required:!1,type:{name:'((e: Omit<MapStyleDataEvent, "dataType"> & { type: "style.import.load"; }) => void)'}},onSourceData:{defaultValue:null,description:"",name:"onSourceData",required:!1,type:{name:"((e: MapSourceDataEvent) => void)"}},onStyleData:{defaultValue:null,description:"",name:"onStyleData",required:!1,type:{name:"((e: MapStyleDataEvent) => void)"}},onBoxZoomCancel:{defaultValue:null,description:"",name:"onBoxZoomCancel",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onBoxZoomStart:{defaultValue:null,description:"",name:"onBoxZoomStart",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onBoxZoomEnd:{defaultValue:null,description:"",name:"onBoxZoomEnd",required:!1,type:{name:"((e: MapBoxZoomEvent) => void)"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"((e: MapTouchEvent) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((e: MapMouseEvent) => void)"}},onMoveStart:{defaultValue:null,description:"",name:"onMoveStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onMoveEnd:{defaultValue:null,description:"",name:"onMoveEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoomStart:{defaultValue:null,description:"",name:"onZoomStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoom:{defaultValue:null,description:"",name:"onZoom",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onZoomEnd:{defaultValue:null,description:"",name:"onZoomEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent | WheelEvent>) => void)"}},onRotateStart:{defaultValue:null,description:"",name:"onRotateStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onRotate:{defaultValue:null,description:"",name:"onRotate",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onRotateEnd:{defaultValue:null,description:"",name:"onRotateEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitchStart:{defaultValue:null,description:"",name:"onPitchStart",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitch:{defaultValue:null,description:"",name:"onPitch",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onPitchEnd:{defaultValue:null,description:"",name:"onPitchEnd",required:!1,type:{name:"((e: MapboxEvent<MouseEvent | TouchEvent>) => void)"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"((e: MapWheelEvent) => void)"}}}}}catch{}const ue=()=>{const e=c.useContext(Ve);if(!e)throw new Error("The useMap must be used in the Map container");return e},wa=e=>{if(!e)return null;if("toBounds"in e)return e;let t=0,n=0;return Array.isArray(e)?(t=e[0],n=e[1]):"lng"in e&&"lat"in e?(t=e.lng,n=e.lat):"lon"in e&&"lat"in e&&(t=e.lon,n=e.lat),t!==0&&n!==0?new ae.LngLat(t,n):null},Aa=["anchor","clickTolerance","color","scale"],xa=["offset","draggable","rotation","rotationAlignment","pitchAlignment","occludedOpacity","lngLat"],La=xa.concat(Aa),Pa={},O={lngLat:wa},Qe={onDragStart:"dragstart",onDrag:"drag",onDragEnd:"dragend"},Oa=Object.keys(Qe),qe=c.forwardRef((e,t)=>{const{map:n}=ue(),{Portal:r,container:o}=Ct(),[a,u,l]=ht(),{onInstanceCreated:s}=Ye(e,a,{setterMap:Pa,converterMap:O});oe(a,e,{eventMap:Qe,eventList:Oa}),c.useImperativeHandle(t,()=>a,[a]);const i=d=>{var v;(v=e.onClick)==null||v.call(e,{type:"click",target:l(),originalEvent:d})};c.useEffect(()=>(n&&f().then(d=>{u(d),d.addTo(n),o.addEventListener("click",i),s()}),()=>{o&&o.removeEventListener("click",i)}),[n]);const f=()=>{const d=m(e);if(d.lngLat){const v=new ae.Marker(o,d);return v.setLngLat(d.lngLat),Promise.resolve(v)}else return Promise.reject()},m=d=>{const v={};return La.forEach(y=>{y in d&&(v[y]=p(y,d))}),v},p=(d,v)=>{var h;let y=v[d];if(d in O)try{y=(h=O[d])==null?void 0:h.call(O,v[d])}catch{}return y};return Z(rt,{children:a&&Z(r,{children:e.children})})});try{qe.displayName="Marker",qe.__docgenInfo={description:"",displayName:"Marker",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},lngLat:{defaultValue:null,description:"经纬度坐标",name:"lngLat",required:!1,type:{name:"LngLatLike"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"((e: MarkerEvent<MouseEvent | TouchEvent>) => void)"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"((e: MarkerEvent<MouseEvent | TouchEvent>) => void)"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"((e: MarkerEvent<MouseEvent | TouchEvent>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MarkerEvent<Event>) => void)"}}}}}catch{}const et=e=>e.style&&e.style._loaded;function $e(e,t){if(!e)throw new Error(t)}function re(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!re(e[n],t[n]))return!1;return!0}else if(Array.isArray(t))return!1;if(typeof e=="object"&&typeof t=="object"){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!t.hasOwnProperty(o)||!re(e[o],t[o]))return!1;return!0}return!1}function Da(e,t,n){if(et(e)){const r={...n};return delete r.id,delete r.children,e.addSource(t,r),e.getSource(t)}}function qa(e,t,n){$e(t.id===n.id,"source id changed"),$e(t.type===n.type,"source type changed");let r="",o=0;for(const u in t)u!=="children"&&u!=="id"&&!re(n[u],t[u])&&(r=u,o++);if(!o)return;const a=t.type;if(a==="geojson")e.setData(t.data);else if(a==="image")e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&o===1&&r==="coordinates")e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(r){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles);break}else console.warn(`Unable to update <Source> prop: ${r}`)}let $a=0;function je(e){const{map:t}=ue(),n=c.useRef(e),[,r]=c.useState(0),o=c.useMemo(()=>e.id||`jsx-source-${$a++}`,[]);c.useEffect(()=>{if(t){const u=()=>setTimeout(()=>r(l=>l+1),0);return t.on("styledata",u),u(),()=>{var l;if(t.off("styledata",u),t.getStyle()&&et(t)&&t.getSource(o)){const s=(l=t.getStyle())==null?void 0:l.layers;if(s)for(const i of s)i.source===o&&t.removeLayer(i.id);t.removeSource(o)}}}},[t]);let a=t&&t.getStyle()&&t.getSource(o);return a?qa(a,e,n.current):a=Da(t,o,e),n.current=e,a&&at.Children.map(e.children,u=>u&&c.cloneElement(u,{source:o}))||null}try{je.displayName="Source",je.__docgenInfo={description:"",displayName:"Source",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"raster"'},{value:'"custom"'},{value:'"geojson"'},{value:'"video"'},{value:'"image"'},{value:'"canvas"'},{value:'"vector"'},{value:'"raster-dem"'}]}},scheme:{defaultValue:null,description:"",name:"scheme",required:!1,type:{name:"string"}},minzoom:{defaultValue:null,description:"",name:"minzoom",required:!1,type:{name:"number"}},maxzoom:{defaultValue:null,description:"",name:"maxzoom",required:!1,type:{name:"number"}},tileSize:{defaultValue:null,description:"",name:"tileSize",required:!1,type:{name:"number"}},attribution:{defaultValue:null,description:"",name:"attribution",required:!1,type:{name:"string"}},_implementation:{defaultValue:null,description:"",name:"_implementation",required:!0,type:{name:"CustomSourceImplementation<unknown>"}}}}}catch{}const tt={onClick:"click",onDoubleClick:"dblclick",onContextMenu:"contextmenu",onMouseDown:"mousedown",onMouseUp:"mouseup",onMouseMove:"mousemove",onMouseEnter:"mouseenter",onMouseLeave:"mouseleave",onMouseOver:"mouseover",onMouseOut:"mouseout",onTouchStart:"touchstart",onTouchEnd:"touchend",onTouchCancel:"touchcancel"},ja=Object.keys(tt),Re=e=>{const{before:t,...n}=e,{map:r}=ue();return oe(r,e,{eventMap:tt,eventList:ja}),c.useEffect(()=>{r&&r.addLayer(n,t)},[r]),null};try{Re.displayName="Layer",Re.__docgenInfo={description:"",displayName:"Layer",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"symbol"'},{value:'"background"'},{value:'"circle"'},{value:'"fill-extrusion"'},{value:'"fill"'},{value:'"heatmap"'},{value:'"hillshade"'},{value:'"line"'},{value:'"raster"'},{value:'"sky"'}]}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"SymbolLayout | BackgroundLayout | CircleLayout | FillExtrusionLayout | FillLayout | HeatmapLayout | ... 4 more ..."}},paint:{defaultValue:null,description:"",name:"paint",required:!1,type:{name:"SymbolPaint | BackgroundPaint | CirclePaint | FillExtrusionPaint | FillPaint | HeatmapPaint | ... 4 more ..."}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"((e: MapLayerMouseEvent) => void)"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"((e: MapLayerTouchEvent) => void)"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"((e: MapLayerTouchEvent) => void)"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"((e: MapLayerTouchEvent) => void)"}}}}}catch{}export{De as M,qe as a,ue as u};
