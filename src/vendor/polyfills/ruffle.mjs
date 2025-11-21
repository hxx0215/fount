/* esm.sh - @ruffle-rs/ruffle@0.2.0-nightly.2025.11.20 */
var $0=Object.create;var Ue=Object.defineProperty;var T0=Object.getOwnPropertyDescriptor;var I0=Object.getOwnPropertyNames;var W0=Object.getPrototypeOf,L0=Object.prototype.hasOwnProperty;var N0=(E,P)=>()=>(P||E((P={exports:{}}).exports,P),P.exports);var U0=(E,P,U,ru)=>{if(P&&typeof P=="object"||typeof P=="function")for(let b of I0(P))!L0.call(E,b)&&b!==U&&Ue(E,b,{get:()=>P[b],enumerable:!(ru=T0(P,b))||ru.enumerable});return E};var _0=(E,P,U)=>(U=E!=null?$0(W0(E)):{},U0(P||!E||!E.__esModule?Ue(U,"default",{value:E,enumerable:!0}):U,E));var _e=N0(()=>{(()=>{"use strict";var E,P,U={29:function(a,u,e){var n=this&&this.__createBinding||(Object.create?function(r,o,i,c){c===void 0&&(c=i);var s=Object.getOwnPropertyDescriptor(o,i);s&&!("get"in s?!o.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,c,s)}:function(r,o,i,c){c===void 0&&(c=i),r[c]=o[i]}),t=this&&this.__exportStar||function(r,o){for(var i in r)i==="default"||Object.prototype.hasOwnProperty.call(o,i)||n(o,r,i)};Object.defineProperty(u,"__esModule",{value:!0}),t(e(53),u),t(e(325),u),t(e(553),u),t(e(836),u)},48:(a,u)=>{Object.defineProperty(u,"__esModule",{value:!0})},53:(a,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.createRef=u.h=void 0,u.createElement=r;let n=e(136),t=e(56);function r(o,i,...c){if(typeof o=="function")return o({...i,children:c});let{finalTag:s,finalAttrs:f}=(0,t.applyTsxTag)(o,i),h=(0,t.createDomElement)(s,f);return f&&(0,n.setAttributes)(h,f),(0,t.applyChildren)(h,c),h}u.h=r,u.createRef=()=>({current:null})},56:(a,u)=>{function e(n,t){t instanceof Element?n.appendChild(t):typeof t=="string"||typeof t=="number"?n.appendChild(document.createTextNode(t.toString())):console.warn("Unknown type to append: ",t)}Object.defineProperty(u,"__esModule",{value:!0}),u.applyChildren=function n(t,r){for(let o of r)(o||o===0)&&(Array.isArray(o)?n(t,o):e(t,o))},u.createDomElement=function(n,t){let r=t?.is?{is:t.is}:void 0;return t?.xmlns?document.createElementNS(t.xmlns,n,r):document.createElement(n,r)},u.applyTsxTag=function(n,t){let r=n,o=t;return o&&"tsxTag"in o&&(r=o.tsxTag,!o.is&&n.includes("-")&&(o={...o,is:n})),{finalTag:r,finalAttrs:o}}},65:(a,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.classnames=function(i){let c=o(i).filter(t);return c.length>0?c.join(" "):void 0};let e=i=>Object.entries(i).map((([c,s])=>s&&c)),n=i=>!!i,t=(i,c,s)=>s.indexOf(i)===c,r=[];function o(i){return i?typeof i=="string"?[i]:Array.isArray(i)?i.flatMap(o).filter(n):e(i).filter(n):r}},124:(a,u,e)=>{a.exports=e.p+"3533de64680b971bc8e5.wasm"},125:(a,u)=>{Object.defineProperty(u,"__esModule",{value:!0})},136:(a,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.setAttributes=function(o,i){for(let c of Object.keys(i)){if(c==="__source"||c==="__self"||c==="tsxTag")continue;let s=i[c];if(c==="class"){let f=(0,n.classnames)(s);f&&o.setAttribute(c,f)}else if(c==="ref")s.current=o;else if(r.test(c)){let f=c.replace(/Capture$/,""),h=c!==f,p=f.toLowerCase().substring(2);o.addEventListener(p,s,h)}else c==="style"&&typeof s!="string"?t(s,o.style):c==="dangerouslySetInnerHTML"?o.innerHTML=s:s===!0?o.setAttribute(c,c):(s||s===0||s==="")&&o.setAttribute(c,s.toString())}};let n=e(665);function t(o,i){for(let c of Object.keys(o))c in i&&(i[c]=o[c])}let r=/^on\p{Lu}/u},269:(a,u)=>{Object.defineProperty(u,"__esModule",{value:!0})},325:(a,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.defineCustomElement=function(t,r,o){return customElements.define(t,r,o),i=>(0,n.jsx)(t,i)};let n=e(553)},460:(a,u)=>{Object.defineProperty(u,"__esModule",{value:!0})},553:(a,u,e)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.jsx=r,u.jsxs=r,u.jsxDEV=r;let n=e(136),t=e(56);function r(o,i){if(typeof o=="function")return o(i);let{children:c,...s}=i,{finalTag:f,finalAttrs:h}=(0,t.applyTsxTag)(o,s),p=(0,t.createDomElement)(f,h);return(0,n.setAttributes)(p,h),(0,t.applyChildren)(p,[c]),p}},665:function(a,u,e){var n=this&&this.__createBinding||(Object.create?function(r,o,i,c){c===void 0&&(c=i);var s=Object.getOwnPropertyDescriptor(o,i);s&&!("get"in s?!o.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,c,s)}:function(r,o,i,c){c===void 0&&(c=i),r[c]=o[i]}),t=this&&this.__exportStar||function(r,o){for(var i in r)i==="default"||Object.prototype.hasOwnProperty.call(o,i)||n(o,r,i)};Object.defineProperty(u,"__esModule",{value:!0}),t(e(48),u),t(e(269),u),t(e(125),u),t(e(778),u),t(e(460),u),t(e(65),u)},778:(a,u)=>{Object.defineProperty(u,"__esModule",{value:!0})},797:(a,u,e)=>{a.exports=e.p+"af23b51a379e936a19ee.wasm"},836:(a,u)=>{Object.defineProperty(u,"__esModule",{value:!0})}},ru={};function b(a){var u=ru[a];if(u!==void 0)return u.exports;var e=ru[a]={exports:{}};return U[a].call(e.exports,e,e.exports,b),e.exports}b.m=U,b.d=(a,u)=>{for(var e in u)b.o(u,e)&&!b.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:u[e]})},b.f={},b.e=a=>Promise.all(Object.keys(b.f).reduce(((u,e)=>(b.f[e](a,u),u)),[])),b.u=a=>"core.ruffle."+{482:"4c8811fcde37352092b9",655:"39eafca3596f0a5752c6"}[a]+".js",b.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),b.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),E={},P="ruffle-selfhosted:",b.l=(a,u,e,n)=>{if(E[a])E[a].push(u);else{var t,r;if(e!==void 0)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var c=o[i];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==P+e){t=c;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",b.nc&&t.setAttribute("nonce",b.nc),t.setAttribute("data-webpack",P+e),t.src=a),E[a]=[u];var s=(h,p)=>{t.onerror=t.onload=null,clearTimeout(f);var v=E[a];if(delete E[a],t.parentNode&&t.parentNode.removeChild(t),v&&v.forEach((R=>R(p))),h)return h(p)},f=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},b.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.p="",(()=>{b.b=typeof document<"u"&&document.baseURI||self.location.href;var a={792:0};b.f.j=(n,t)=>{var r=b.o(a,n)?a[n]:void 0;if(r!==0)if(r)t.push(r[2]);else{var o=new Promise(((s,f)=>r=a[n]=[s,f]));t.push(r[2]=o);var i=b.p+b.u(n),c=new Error;b.l(i,(s=>{if(b.o(a,n)&&((r=a[n])!==0&&(a[n]=void 0),r)){var f=s&&(s.type==="load"?"missing":s.type),h=s&&s.target&&s.target.src;c.message="Loading chunk "+n+` failed.
(`+f+": "+h+")",c.name="ChunkLoadError",c.type=f,c.request=h,r[1](c)}}),"chunk-"+n,n)}};var u=(n,t)=>{var r,o,[i,c,s]=t,f=0;if(i.some((h=>a[h]!==0))){for(r in c)b.o(c,r)&&(b.m[r]=c[r]);s&&s(b)}for(n&&n(t);f<i.length;f++)o=i[f],b.o(a,o)&&a[o]&&a[o][0](),a[o]=0},e=self.webpackChunkruffle_selfhosted=self.webpackChunkruffle_selfhosted||[];e.forEach(u.bind(null,0)),e.push=u.bind(null,e.push.bind(e))})();class Q{constructor(u,e,n,t,r){this.major=u,this.minor=e,this.patch=n,this.prIdent=t,this.buildIdent=r}static fromSemver(u){let e=u.split("+"),n=e[0].split("-"),t=n[0].split("."),r=parseInt(t[0],10),o=0,i=0,c=null,s=null;return t[1]!==void 0&&(o=parseInt(t[1],10)),t[2]!==void 0&&(i=parseInt(t[2],10)),n[1]!==void 0&&(c=n[1].split(".")),e[1]!==void 0&&(s=e[1].split(".")),new Q(r,o,i,c,s)}isCompatibleWith(u){return this.major!==0&&this.major===u.major||this.major===0&&u.major===0&&this.minor!==0&&this.minor===u.minor||this.major===0&&u.major===0&&this.minor===0&&u.minor===0&&this.patch!==0&&this.patch===u.patch}hasPrecedenceOver(u){if(this.major>u.major)return!0;if(this.major<u.major)return!1;if(this.minor>u.minor)return!0;if(this.minor<u.minor)return!1;if(this.patch>u.patch)return!0;if(this.patch<u.patch)return!1;if(this.prIdent===null&&u.prIdent!==null)return!0;if(this.prIdent!==null&&u.prIdent===null)return!1;if(this.prIdent!==null&&u.prIdent!==null){let e=/^[0-9]*$/;for(let n=0;n<this.prIdent.length&&n<u.prIdent.length;n+=1){let t=e.test(u.prIdent[n]),r=e.test(this.prIdent[n]);if(!r&&t)return!0;if(r&&t){let o=parseInt(this.prIdent[n],10),i=parseInt(u.prIdent[n],10);if(o>i)return!0;if(o<i)return!1}else{if(r&&!t)return!1;if(!r&&!t){if(this.prIdent[n]>u.prIdent[n])return!0;if(this.prIdent[n]<u.prIdent[n])return!1}}}if(this.prIdent.length>u.prIdent.length)return!0;if(this.prIdent.length<u.prIdent.length)return!1}if(this.buildIdent!==null&&u.buildIdent===null)return!0;if(this.buildIdent===null&&u.buildIdent!==null)return!1;if(this.buildIdent!==null&&u.buildIdent!==null){let e=/^[0-9]*$/;for(let n=0;n<this.buildIdent.length&&n<u.buildIdent.length;n+=1){let t=e.test(this.buildIdent[n]),r=e.test(u.buildIdent[n]);if(!t&&r)return!0;if(t&&r){let o=parseInt(this.buildIdent[n],10),i=parseInt(u.buildIdent[n],10);if(o>i)return!0;if(o<i)return!1}else{if(t&&!r)return!1;if(!t&&!r){if(this.buildIdent[n]>u.buildIdent[n])return!0;if(this.buildIdent[n]<u.buildIdent[n])return!1}}}return this.buildIdent.length>u.buildIdent.length}return!1}isEqual(u){return this.major===u.major&&this.minor===u.minor&&this.patch===u.patch}isStableOrCompatiblePrerelease(u){return u.prIdent===null||this.major===u.major&&this.minor===u.minor&&this.patch===u.patch}}class Ru{constructor(u){this.requirements=u}satisfiedBy(u){for(let e of this.requirements){let n=!0;for(let{comparator:t,version:r}of e)n=n&&r.isStableOrCompatiblePrerelease(u),t===""||t==="="?n=n&&r.isEqual(u):t===">"?n=n&&u.hasPrecedenceOver(r):t===">="?n=n&&(u.hasPrecedenceOver(r)||r.isEqual(u)):t==="<"?n=n&&r.hasPrecedenceOver(u):t==="<="?n=n&&(r.hasPrecedenceOver(u)||r.isEqual(u)):t==="^"&&(n=n&&r.isCompatibleWith(u));if(n)return!0}return!1}static fromRequirementString(u){let e=u.split(" "),n=[],t=[];for(let r of e)if(r==="||")n.length>0&&(t.push(n),n=[]);else if(r.length>0){let o=/[0-9]/.exec(r);if(o){let i=r.slice(0,o.index).trim(),c=Q.fromSemver(r.slice(o.index).trim());n.push({comparator:i,version:c})}}return n.length>0&&t.push(n),new Ru(t)}}class ne{constructor(u){this.sources=u?.sources||{},this.config=u?.config||{},this.invoked=u?.invoked||!1,this.newestName=u?.newestName||null,u?.superseded?.(),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}newestSourceName(){let u=null,e=Q.fromSemver("0.0.0");for(let n in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,n)){let t=Q.fromSemver(this.sources[n].version);t.hasPrecedenceOver(e)&&(u=n,e=t)}return u}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");(!("polyfills"in this.config)||this.config.polyfills)!==!1&&this.sources[this.newestName].polyfill()}}newest(){let u=this.newestSourceName();return u!==null?this.sources[u]:null}satisfying(u){let e=Ru.fromRequirementString(u),n=null;for(let t in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,t)){let r=Q.fromSemver(this.sources[t].version);e.satisfiedBy(r)&&(n=this.sources[t])}return n}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}}let M={versionNumber:"0.2.0-nightly.2025.11.20",versionName:"0.2.0-nightly.2025.11.20",versionChannel:"nightly",buildDate:"2025-11-20T00:07:44.126Z",commitHash:"e2bef0fac5fbf53517d7d4a24c60f8a14e44ee74"};var G;(function(a){a[a.HaveNothing=0]="HaveNothing",a[a.Loading=1]="Loading",a[a.Loaded=2]="Loaded"})(G||(G={}));var ou,zu,mu,ju,pu,xu,Y,Su,Cu,Au,Eu,ae,d=b(553);(function(a){a.On="on",a.Off="off",a.Auto="auto"})(ou||(ou={})),(function(a){a.Off="off",a.Fullscreen="fullscreen",a.On="on"})(zu||(zu={})),(function(a){a.Visible="visible",a.Hidden="hidden"})(mu||(mu={})),(function(a){a.Error="error",a.Warn="warn",a.Info="info",a.Debug="debug",a.Trace="trace"})(ju||(ju={})),(function(a){a.Window="window",a.Opaque="opaque",a.Transparent="transparent",a.Direct="direct",a.Gpu="gpu"})(pu||(pu={})),(function(a){a.WebGpu="webgpu",a.WgpuWebgl="wgpu-webgl",a.Webgl="webgl",a.Canvas="canvas"})(xu||(xu={})),(function(a){a.On="on",a.RightClickOnly="rightClickOnly",a.Off="off"})(Y||(Y={})),(function(a){a.AIR="air",a.FlashPlayer="flashPlayer"})(Su||(Su={})),(function(a){a.Allow="allow",a.Confirm="confirm",a.Deny="deny"})(Cu||(Cu={})),(function(a){a.All="all",a.Internal="internal",a.None="none"})(Au||(Au={})),(function(a){a.Always="always",a.Never="never",a.Smart="smart"})(Eu||(Eu={})),(function(a){a.South="south",a.East="east",a.North="north",a.West="west",a.LeftTrigger="left-trigger",a.LeftTrigger2="left-trigger-2",a.RightTrigger="right-trigger",a.RightTrigger2="right-trigger-2",a.Select="select",a.Start="start",a.DPadUp="dpad-up",a.DPadDown="dpad-down",a.DPadLeft="dpad-left",a.DPadRight="dpad-right"})(ae||(ae={}));let Be={allowScriptAccess:!1,parameters:{},autoplay:ou.Auto,backgroundColor:null,letterbox:zu.Fullscreen,unmuteOverlay:mu.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:ju.Error,showSwfDownload:!1,contextMenu:Y.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",fullScreenAspectRatio:"",forceAlign:!1,quality:null,scale:"showAll",forceScale:!1,frameRate:null,wmode:pu.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:Cu.Allow,allowNetworking:Au.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:Su.FlashPlayer,gamepadButtonMapping:{},urlRewriteRules:[],scrollingBehavior:Eu.Smart};class X{constructor(u){this.value=u}valueOf(){return this.value}}class A extends X{constructor(u="???"){super(u)}toString(u){return`{${this.value}}`}}class W extends X{constructor(u,e={}){super(u),this.opts=e}toString(u){if(u)try{return u.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(e){u.reportError(e)}return this.value.toString(10)}}class _ extends X{static supportsValue(u){if(typeof u=="number"||u instanceof Date)return!0;if(u instanceof X)return _.supportsValue(u.valueOf());if("Temporal"in globalThis){let e=globalThis.Temporal;if(u instanceof e.Instant||u instanceof e.PlainDateTime||u instanceof e.PlainDate||u instanceof e.PlainMonthDay||u instanceof e.PlainTime||u instanceof e.PlainYearMonth)return!0}return!1}constructor(u,e={}){u instanceof _?(e={...u.opts,...e},u=u.value):u instanceof X&&(u=u.valueOf()),typeof u=="object"&&"calendarId"in u&&e.calendar===void 0&&(e={...e,calendar:u.calendarId}),super(u),this.opts=e}[Symbol.toPrimitive](u){return u==="string"?this.toString():this.toNumber()}toNumber(){let u=this.value;if(typeof u=="number")return u;if(u instanceof Date)return u.getTime();if("epochMilliseconds"in u)return u.epochMilliseconds;if("toZonedDateTime"in u)return u.toZonedDateTime("UTC").epochMilliseconds;throw new TypeError("Unwrapping a non-number value as a number")}toString(u){if(u)try{return u.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(e){u.reportError(e)}return typeof this.value=="number"||this.value instanceof Date?new Date(this.value).toISOString():this.value.toString()}}function Ve(a,u,e){return e===u||e instanceof W&&u instanceof W&&e.value===u.value||u instanceof W&&typeof e=="string"&&e===a.memoizeIntlObject(Intl.PluralRules,u.opts).select(u.value)}function te(a,u,e){return u[e]?uu(a,u[e].value):(a.reportError(new RangeError("No default")),new A)}function Fu(a,u){let e=[],n=Object.create(null);for(let t of u)t.type==="narg"?n[t.name]=iu(a,t.value):e.push(iu(a,t));return{positional:e,named:n}}function iu(a,u){switch(u.type){case"str":return u.value;case"num":return new W(u.value,{minimumFractionDigits:u.precision});case"var":return(function(e,{name:n}){let t;if(e.params){if(!Object.prototype.hasOwnProperty.call(e.params,n))return new A(`$${n}`);t=e.params[n]}else{if(!e.args||!Object.prototype.hasOwnProperty.call(e.args,n))return e.reportError(new ReferenceError(`Unknown variable: $${n}`)),new A(`$${n}`);t=e.args[n]}if(t instanceof X)return t;switch(typeof t){case"string":return t;case"number":return new W(t);case"object":if(_.supportsValue(t))return new _(t);default:return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)),new A(`$${n}`)}})(a,u);case"mesg":return(function(e,{name:n,attr:t}){let r=e.bundle._messages.get(n);if(!r)return e.reportError(new ReferenceError(`Unknown message: ${n}`)),new A(n);if(t){let o=r.attributes[t];return o?uu(e,o):(e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new A(`${n}.${t}`))}return r.value?uu(e,r.value):(e.reportError(new ReferenceError(`No value: ${n}`)),new A(n))})(a,u);case"term":return(function(e,{name:n,attr:t,args:r}){let o=`-${n}`,i=e.bundle._terms.get(o);if(!i)return e.reportError(new ReferenceError(`Unknown term: ${o}`)),new A(o);if(t){let s=i.attributes[t];if(s){e.params=Fu(e,r).named;let f=uu(e,s);return e.params=null,f}return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new A(`${o}.${t}`)}e.params=Fu(e,r).named;let c=uu(e,i.value);return e.params=null,c})(a,u);case"func":return(function(e,{name:n,args:t}){let r=e.bundle._functions[n];if(!r)return e.reportError(new ReferenceError(`Unknown function: ${n}()`)),new A(`${n}()`);if(typeof r!="function")return e.reportError(new TypeError(`Function ${n}() is not callable`)),new A(`${n}()`);try{let o=Fu(e,t);return r(o.positional,o.named)}catch(o){return e.reportError(o),new A(`${n}()`)}})(a,u);case"select":return(function(e,{selector:n,variants:t,star:r}){let o=iu(e,n);if(o instanceof A)return te(e,t,r);for(let i of t)if(Ve(e,o,iu(e,i.key)))return uu(e,i.value);return te(e,t,r)})(a,u);default:return new A}}function re(a,u){if(a.dirty.has(u))return a.reportError(new RangeError("Cyclic reference")),new A;a.dirty.add(u);let e=[],n=a.bundle._useIsolating&&u.length>1;for(let t of u)if(typeof t!="string"){if(a.placeables++,a.placeables>100)throw a.dirty.delete(u),new RangeError(`Too many placeables expanded: ${a.placeables}, max allowed is 100`);n&&e.push("\u2068"),e.push(iu(a,t).toString(a)),n&&e.push("\u2069")}else e.push(a.bundle._transform(t));return a.dirty.delete(u),e.join("")}function uu(a,u){return typeof u=="string"?a.bundle._transform(u):re(a,u)}class He{constructor(u,e,n){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=u,this.errors=e,this.args=n}reportError(u){if(!(this.errors&&u instanceof Error))throw u;this.errors.push(u)}memoizeIntlObject(u,e){let n=this.bundle._intls.get(u);n||(n={},this.bundle._intls.set(u,n));let t=JSON.stringify(e);return n[t]||(n[t]=new u(this.bundle.locales,e)),n[t]}}function qu(a,u){let e=Object.create(null);for(let[n,t]of Object.entries(a))u.includes(n)&&(e[n]=t.valueOf());return e}let oe=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Je(a,u){let e=a[0];if(e instanceof A)return new A(`NUMBER(${e.valueOf()})`);if(e instanceof W)return new W(e.valueOf(),{...e.opts,...qu(u,oe)});if(e instanceof _)return new W(e.toNumber(),{...qu(u,oe)});throw new TypeError("Invalid argument to NUMBER")}let Ke=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Ze(a,u){let e=a[0];if(e instanceof A)return new A(`DATETIME(${e.valueOf()})`);if(e instanceof _||e instanceof W)return new _(e,qu(u,Ke));throw new TypeError("Invalid argument to DATETIME")}let ie=new Map;class Qe{constructor(u,{functions:e,useIsolating:n=!0,transform:t=r=>r}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(u)?u:[u],this._functions={NUMBER:Je,DATETIME:Ze,...e},this._useIsolating=n,this._transform=t,this._intls=(function(r){let o=Array.isArray(r)?r.join(" "):r,i=ie.get(o);return i===void 0&&(i=new Map,ie.set(o,i)),i})(u)}hasMessage(u){return this._messages.has(u)}getMessage(u){return this._messages.get(u)}addResource(u,{allowOverrides:e=!1}={}){let n=[];for(let t=0;t<u.body.length;t++){let r=u.body[t];if(r.id.startsWith("-")){if(e===!1&&this._terms.has(r.id)){n.push(new Error(`Attempt to override an existing term: "${r.id}"`));continue}this._terms.set(r.id,r)}else{if(e===!1&&this._messages.has(r.id)){n.push(new Error(`Attempt to override an existing message: "${r.id}"`));continue}this._messages.set(r.id,r)}}return n}formatPattern(u,e=null,n=null){if(typeof u=="string")return this._transform(u);let t=new He(this,n,e);try{return re(t,u).toString(t)}catch(r){if(t.errors&&r instanceof Error)return t.errors.push(r),new A().toString(t);throw r}}}let Pu=/^(-?[a-zA-Z][\w-]*) *= */gm,de=/\.([a-zA-Z][\w-]*) *= */y,Ge=/\*?\[/y,Du=/(-?[0-9]+(?:\.([0-9]+))?)/y,Ye=/([a-zA-Z][\w-]*)/y,ce=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Xe=/^[A-Z][A-Z0-9_-]*$/,hu=/([^{}\n\r]+)/y,u0=/([^\\"\n\r]*)/y,se=/\\([\\"])/y,le=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,e0=/^\n+/,fe=/ +$/,n0=/ *\r?\n/g,a0=/( *)$/,t0=/{\s*/y,be=/\s*}/y,r0=/\[\s*/y,o0=/\s*] */y,i0=/\s*\(\s*/y,d0=/\s*->\s*/y,c0=/\s*:\s*/y,s0=/\s*,?\s*/y,l0=/\s+/y;class f0{constructor(u){this.body=[],Pu.lastIndex=0;let e=0;for(;;){let l=Pu.exec(u);if(l===null)break;e=Pu.lastIndex;try{this.body.push(c(l[1]))}catch(m){if(m instanceof SyntaxError)continue;throw m}}function n(l){return l.lastIndex=e,l.test(u)}function t(l,m){if(u[e]===l)return e++,!0;if(m)throw new m(`Expected ${l}`);return!1}function r(l,m){if(n(l))return e=l.lastIndex,!0;if(m)throw new m(`Expected ${l.toString()}`);return!1}function o(l){l.lastIndex=e;let m=l.exec(u);if(m===null)throw new SyntaxError(`Expected ${l.toString()}`);return e=l.lastIndex,m}function i(l){return o(l)[1]}function c(l){let m=s(),C=(function(){let T=Object.create(null);for(;n(de);){let I=i(de),D=s();if(D===null)throw new SyntaxError("Expected attribute value");T[I]=D}return T})();if(m===null&&Object.keys(C).length===0)throw new SyntaxError("Expected message value or attributes");return{id:l,value:m,attributes:C}}function s(){let l;if(n(hu)&&(l=i(hu)),u[e]==="{"||u[e]==="}")return f(l?[l]:[],1/0);let m=We();return m?l?f([l,m],m.length):(m.value=ue(m.value,e0),f([m],m.length)):l?ue(l,fe):null}function f(l=[],m){for(;;){if(n(hu)){l.push(i(hu));continue}if(u[e]==="{"){l.push(h());continue}if(u[e]==="}")throw new SyntaxError("Unbalanced closing brace");let D=We();if(!D)break;l.push(D),m=Math.min(m,D.length)}let C=l.length-1,T=l[C];typeof T=="string"&&(l[C]=ue(T,fe));let I=[];for(let D of l)D instanceof me&&(D=D.value.slice(0,D.value.length-m)),D&&I.push(D);return I}function h(){r(t0,SyntaxError);let l=p();if(r(be))return l;if(r(d0)){let m=(function(){let C,T=[],I=0;for(;n(Ge);){t("*")&&(C=I);let D=R(),Ne=s();if(Ne===null)throw new SyntaxError("Expected variant value");T[I++]={key:D,value:Ne}}if(I===0)return null;if(C===void 0)throw new SyntaxError("Expected default variant");return{variants:T,star:C}})();return r(be,SyntaxError),{type:"select",selector:l,...m}}throw new SyntaxError("Unclosed placeable")}function p(){if(u[e]==="{")return h();if(n(ce)){let[,l,m,C=null]=o(ce);if(l==="$")return{type:"var",name:m};if(r(i0)){let T=(function(){let I=[];for(;;){switch(u[e]){case")":return e++,I;case void 0:throw new SyntaxError("Unclosed argument list")}I.push(v()),r(s0)}})();if(l==="-")return{type:"term",name:m,attr:C,args:T};if(Xe.test(m))return{type:"func",name:m,args:T};throw new SyntaxError("Function names must be all upper-case")}return l==="-"?{type:"term",name:m,attr:C,args:[]}:{type:"mesg",name:m,attr:C}}return q()}function v(){let l=p();return l.type!=="mesg"?l:r(c0)?{type:"narg",name:l.name,value:q()}:l}function R(){let l;return r(r0,SyntaxError),l=n(Du)?O():{type:"str",value:i(Ye)},r(o0,SyntaxError),l}function q(){if(n(Du))return O();if(u[e]==='"')return(function(){t('"',SyntaxError);let l="";for(;;){if(l+=i(u0),u[e]!=="\\"){if(t('"'))return{type:"str",value:l};throw new SyntaxError("Unclosed string literal")}l+=N()}})();throw new SyntaxError("Invalid expression")}function O(){let[,l,m=""]=o(Du),C=m.length;return{type:"num",value:parseFloat(l),precision:C}}function N(){if(n(se))return i(se);if(n(le)){let[,l,m]=o(le),C=parseInt(l||m,16);return C<=55295||57344<=C?String.fromCodePoint(C):"\uFFFD"}throw new SyntaxError("Unknown escape sequence")}function We(){let l=e;switch(r(l0),u[e]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return Le(u.slice(l,e))}return u[e-1]===" "&&Le(u.slice(l,e))}function ue(l,m){return l.replace(m,"")}function Le(l){let m=l.replace(n0,`
`),C=a0.exec(l)[1].length;return new me(m,C)}}}class me{constructor(u,e){this.value=u,this.length=e}}let b0=new RegExp("^([a-z]{2,3}|\\*)(?:-([a-z]{4}|\\*))?(?:-([a-z]{2}|\\*))?(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))?$","i");class eu{constructor(u){let e=b0.exec(u.replace(/_/g,"-"));if(!e)return void(this.isWellFormed=!1);let[,n,t,r,o]=e;n&&(this.language=n.toLowerCase()),t&&(this.script=t[0].toUpperCase()+t.slice(1)),r&&(this.region=r.toUpperCase()),this.variant=o,this.isWellFormed=!0}isEqual(u){return this.language===u.language&&this.script===u.script&&this.region===u.region&&this.variant===u.variant}matches(u,e=!1,n=!1){return(this.language===u.language||e&&this.language===void 0||n&&u.language===void 0)&&(this.script===u.script||e&&this.script===void 0||n&&u.script===void 0)&&(this.region===u.region||e&&this.region===void 0||n&&u.region===void 0)&&(this.variant===u.variant||e&&this.variant===void 0||n&&u.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter((u=>u!==void 0)).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){let u=(function(e){if(Object.prototype.hasOwnProperty.call(pe,e))return new eu(pe[e]);let n=new eu(e);return n.language&&m0.includes(n.language)?(n.region=n.language.toUpperCase(),n):null})(this.toString().toLowerCase());return!!u&&(this.language=u.language,this.script=u.script,this.region=u.region,this.variant=u.variant,!0)}}let pe={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},m0=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function p0(a,u,{strategy:e="filtering",defaultLocale:n}={}){let t=(function(r,o,i){let c=new Set,s=new Map;for(let f of o)new eu(f).isWellFormed&&s.set(f,new eu(f));u:for(let f of r){let h=f.toLowerCase(),p=new eu(h);if(p.language!==void 0){for(let v of s.keys())if(h===v.toLowerCase()){if(c.add(v),s.delete(v),i==="lookup")return Array.from(c);if(i==="filtering")continue;continue u}for(let[v,R]of s.entries())if(R.matches(p,!0,!1)){if(c.add(v),s.delete(v),i==="lookup")return Array.from(c);if(i==="filtering")continue;continue u}if(p.addLikelySubtags()){for(let[v,R]of s.entries())if(R.matches(p,!0,!1)){if(c.add(v),s.delete(v),i==="lookup")return Array.from(c);if(i==="filtering")continue;continue u}}p.clearVariants();for(let[v,R]of s.entries())if(R.matches(p,!0,!0)){if(c.add(v),s.delete(v),i==="lookup")return Array.from(c);if(i==="filtering")continue;continue u}if(p.clearRegion(),p.addLikelySubtags()){for(let[v,R]of s.entries())if(R.matches(p,!0,!1)){if(c.add(v),s.delete(v),i==="lookup")return Array.from(c);if(i==="filtering")continue;continue u}}p.clearRegion();for(let[v,R]of s.entries())if(R.matches(p,!0,!0)){if(c.add(v),s.delete(v),i==="lookup")return Array.from(c);if(i==="filtering")continue;continue u}}}return Array.from(c)})(Array.from(a??[]).map(String),Array.from(u??[]).map(String),e);if(e==="lookup"){if(n===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");t.length===0&&t.push(n)}else n&&!t.includes(n)&&t.push(n);return t}function xe(){if(typeof Map.prototype.set!="function"){let a=Map,u=document.createElement("iframe");return u.style.display="none",document.documentElement.append(u),Map=u.contentWindow.Map,u.remove(),a}}function he(a){a&&(Map=a)}function Mu(a){let u=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof u=="string"&&u.indexOf("[native code]")>=0&&Function.prototype.toString.call(a).indexOf("[native code]")>=0}function x0(){typeof Array.prototype.reduce=="function"&&Mu(Array.prototype.reduce)||Object.defineProperty(Array.prototype,"reduce",{value(...a){if(a.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];let u=a[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof u!="function")throw new TypeError(`${u} is not a function`);let e=Object(this),n=e.length>>>0,t,r=0;if(a.length>=2)t=a[1];else{for(;r<n&&!(r in e);)r++;if(r>=n)throw new TypeError("Reduce of empty array with no initial value");t=e[r++]}for(;r<n;)r in e&&(t=u(t,e[r],r,e)),r++;return t}}),typeof Window=="function"&&Mu(Window)||typeof window.constructor=="function"&&Mu(window.constructor)&&(window.Window=window.constructor),window.Reflect!==void 0&&window.Reflect!==null||(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value:(a,u)=>a[u]}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(a,u,e){a[u]=e}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value:(a,u)=>u in a}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value:a=>[...Object.getOwnPropertyNames(a),...Object.getOwnPropertySymbols(a)]})}let h0={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = \u062D\u0645\u0651\u0650\u0644 .swf
context-menu-copy-debug-info = \u0627\u0646\u0633\u062E \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0646\u0642\u064A\u062D
context-menu-open-save-manager = \u0627\u0641\u062A\u062D \u0645\u062F\u064A\u0631 \u0627\u0644\u062D\u0641\u0638
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u0639\u0646 \u0645\u0644\u062D\u0642 \u0631\u064E\u0641\u0644 ({ $version })
       *[other] \u0639\u0646 \u0631\u064E\u0641\u0644 ({ $version })
    }
context-menu-hide = \u0623\u062E\u0641\u0650 \u0647\u0630\u0647 \u0627\u0644\u0642\u0627\u0626\u0645\u0629
context-menu-exit-fullscreen = \u0627\u062E\u0631\u062C \u0645\u0646 \u0648\u0636\u0639\u064A\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629
context-menu-enter-fullscreen = \u0627\u062F\u062E\u0644 \u0648\u0636\u0639\u064A\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629
context-menu-volume-controls = \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u0627\u0644\u0635\u0648\u062A
`,"messages.ftl":`message-cant-embed =
    \u0644\u0645 \u064A\u0643\u0646 \u0631\u0641\u0644 \u0642\u0627\u062F\u0631\u064B\u0627 \u0639\u0644\u0649 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0641\u0644\u0627\u0634 \u0627\u0644\u0645\u0636\u0645\u0646\u0629 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629.
    \u064A\u0645\u0643\u0646\u0643 \u0645\u062D\u0627\u0648\u0644\u0629 \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u0645\u0646\u0641\u0635\u0644\u0629 \u0644\u062A\u062C\u0627\u0648\u0632 \u0647\u0630\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629.
message-restored-from-bfcache =
    \u0627\u0633\u062A\u0639\u0627\u062F \u0645\u062A\u0635\u0641\u062D\u0643 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0641\u0644\u0627\u0634 \u0647\u0630\u0627 \u0645\u0646 \u062C\u0644\u0633\u0629 \u0633\u0627\u0628\u0642\u0629.
    \u0644\u0644\u0628\u062F\u0621 \u0645\u0646 \u062C\u062F\u064A\u062F\u060C \u0623\u0639\u062F \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629.
panic-title = \u0644\u0642\u062F \u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627 :(
more-info = \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0623\u0643\u062B\u0631
run-anyway = \u0634\u063A\u0651\u0650\u0644 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644
continue = \u0627\u0633\u062A\u0645\u0631
report-bug = \u0628\u0644\u0651\u0650\u063A \u0639\u0646 \u0639\u0644\u0629
update-ruffle = \u062A\u062D\u062F\u064A\u062B \u0631\u0641\u0644
ruffle-demo = \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A
ruffle-desktop = \u0628\u0631\u0646\u0627\u0645\u062C \u0633\u0637\u062D \u0627\u0644\u0645\u0643\u062A\u0628
ruffle-wiki = \u0627\u0639\u0631\u0636 \u0648\u064A\u0643\u064A \u0631\u0641\u0644
enable-hardware-acceleration = \u064A\u0628\u062F\u0648 \u0623\u0646 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u062C\u0647\u0627\u0632 \u0645\u0639\u0637\u0644. \u0639\u0644\u0649 \u0627\u0644\u0631\u063A\u0645 \u0645\u0646 \u0623\u0646 \u0631\u0641\u0644 \u0642\u062F \u064A\u0639\u0645\u0644\u060C \u0625\u0644\u0627 \u0623\u0646\u0647 \u0642\u062F \u064A\u0643\u0648\u0646 \u0628\u0637\u064A\u0626\u064B\u0627 \u062C\u062F\u064B\u0627. \u064A\u0645\u0643\u0646\u0643 \u0645\u0639\u0631\u0641\u0629 \u0643\u064A\u0641\u064A\u0629 \u062A\u0645\u0643\u064A\u0646 \u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0623\u062C\u0647\u0632\u0629 \u0628\u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647:
enable-hardware-acceleration-link = \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 - \u062A\u0633\u0631\u064A\u0639 \u0623\u062C\u0647\u0632\u0629 \u0643\u0631\u0648\u0645
view-error-details = \u0625\u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u0637\u0623
open-in-new-tab = \u0625\u0641\u062A\u062D \u0641\u064A \u0639\u0644\u0627\u0645\u0629 \u062A\u0628\u0648\u064A\u0628 \u062C\u062F\u064A\u062F\u0629
click-to-unmute = \u0625\u0646\u0642\u0631 \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0643\u062A\u0645
clipboard-message-title = \u0627\u0644\u0646\u0633\u062E \u0648\u0627\u0644\u0644\u0635\u0642 \u0641\u064A \u0631\u0641\u0644
clipboard-message-description =
    {$variant ->
       *[unsupported] \u0645\u062A\u0635\u0641\u062D\u0643 \u0644\u0627 \u064A\u062F\u0639\u0645 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u062D\u0627\u0641\u0638\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629\u060C
        [access-denied] \u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u062D\u0627\u0641\u0638\u0629\u060C
    } \u0644\u0643\u0646 \u064A\u0645\u0643\u0646\u0643 \u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0647\u0630\u0647 \u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A \u062F\u0627\u0626\u0645\u064B\u0627:
clipboard-message-copy = { " " } \u0644\u0644\u0646\u0633\u062E
clipboard-message-cut = { " " } \u0644\u0644\u0642\u0635
clipboard-message-paste = { " " } \u0644\u0644\u0635\u0642
error-canvas-reload = \u062A\u0639\u0630\u0631 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0645\u0639 \u0645\u064F\u0635\u064E\u064A\u0631 \u0627\u0644\u0644\u0648\u062D\u0629 \u0639\u0646\u062F\u0645\u0627 \u0627\u0633\u062A\u064F\u062E\u062F\u0650\u0645 \u0645\u064F\u0635\u064E\u064A\u0631 \u0627\u0644\u0644\u0648\u062D\u0629 \u0645\u0633\u0628\u0642\u064B\u0627.
error-file-protocol =
    \u064A\u0628\u062F\u0648 \u0623\u0646\u0643 \u062A\u0634\u063A\u0651\u0650\u0644 \u0631\u0641\u0644 \u0639\u0644\u0649 \u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 "file:".
    \u0644\u0627 \u064A\u0639\u0645\u0644 \u0647\u0630\u0627 \u0625\u0630 \u062A\u0645\u0646\u0639 \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u0646 \u0627\u0644\u0639\u0645\u0644 \u0644\u0623\u0633\u0628\u0627\u0628 \u0623\u0645\u0646\u064A\u0629.
    \u0628\u062F\u0644\u064B\u0627 \u0645\u0646 \u0630\u0644\u0643\u060C \u0646\u062F\u0639\u0648\u0643 \u0625\u0644\u0649 \u0625\u0639\u062F\u0627\u062F \u062E\u0627\u062F\u0648\u0645 \u0645\u062D\u0644\u064A \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0627\u0631\u0636 \u0627\u0644\u0648\u064A\u0628 \u0623\u0648 \u062A\u0637\u0628\u064A\u0642 \u0633\u0637\u062D \u0627\u0644\u0645\u0643\u062A\u0628.
error-javascript-config =
    \u062A\u0639\u0631\u0636 \u0631\u0641\u0644 \u0625\u0644\u0649 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0628\u0633\u0628\u0628 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u0627\u0637\u0626\u0629 \u0644\u062C\u0627\u0641\u0627 \u0633\u0643\u0631\u0650\u0628\u062A.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0648\u0645\u060C \u0646\u062D\u0646 \u0646\u062F\u0639\u0648\u0643 \u0625\u0644\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062E\u0637\u0623 \u0644\u0645\u0639\u0631\u0641\u0629 \u0633\u0628\u0628 \u0627\u0644\u0645\u0634\u0643\u0644\u0629.
    \u064A\u0645\u0643\u0646\u0643 \u0623\u064A\u0636\u064B\u0627 \u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-not-found =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0648\u0645\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0642\u062F \u0631\u064F\u0641\u0650\u0639 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D.
    \u0625\u0630\u0627 \u0627\u0633\u062A\u0645\u0631\u062A \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060C \u0642\u062F \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0625\u0639\u062F\u0627\u062F "publicPath": \u0631\u062C\u0627\u0621\u064B \u0631\u0627\u062C\u0639 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-mime-type =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u062E\u0627\u062F\u0648\u0645 \u0627\u0644\u0648\u064A\u0628 \u0647\u0630\u0627 \u0644\u0627 \u064A\u062E\u062F\u0645 \u0645\u0644\u0641\u0627\u062A ". wasm" \u0645\u0639 \u0646\u0648\u0639 MIME \u0627\u0644\u0635\u062D\u064A\u062D.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-invalid-swf =
    \u0644\u0627 \u064A\u0645\u0643\u0646 \u0644\u0631\u0641\u0644 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0627\u0644\u0633\u0628\u0628 \u0627\u0644\u0623\u0643\u062B\u0631 \u0625\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u0647\u0648 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0644\u064A\u0633 \u0635\u0627\u0644\u062D\u064B\u0627.
error-swf-fetch =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0641\u0644\u0627\u0634 SWF.
    \u0627\u0644\u0633\u0628\u0628 \u0627\u0644\u0623\u0643\u062B\u0631 \u0627\u062D\u062A\u0645\u0627\u0644\u064B\u0627 \u0647\u0648 \u0623\u0646 \u0627\u0644\u0645\u0644\u0641 \u0644\u0645 \u064A\u0639\u062F \u0645\u0648\u062C\u0648\u062F\u064B\u0627\u060C \u0644\u0630\u0644\u0643 \u0644\u0627 \u064A\u0648\u062C\u062F \u0634\u064A\u0621 \u0644\u064A\u062D\u0645\u0644\u0647 \u0631\u0641\u0644.
    \u062D\u0627\u0648\u0644 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-swf-cors =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 \u0641\u0644\u0627\u0634 SWF.
    \u0645\u0646 \u0627\u0644\u0645\u062D\u062A\u0645\u0644 \u0623\u0646 \u0625\u062D\u0636\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0642\u062F \u062D\u064F\u0638\u0650\u0631 \u0628\u0648\u0627\u0633\u0637\u0629 \u0633\u064A\u0627\u0633\u0629 CORS.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0631\u0641\u0644 \u0648\u064A\u0643\u064A \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-cors =
    \u0641\u0634\u0644 \u0631\u0641\u0644 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u0648\u0646 \u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0645\u0646 \u0627\u0644\u0645\u062D\u062A\u0645\u0644 \u0623\u0646 \u0625\u062D\u0636\u0627\u0631 \u0627\u0644\u0645\u0644\u0641 \u0642\u062F \u062D\u064F\u0638\u0650\u0631 \u0628\u0648\u0627\u0633\u0637\u0629 \u0633\u064A\u0627\u0633\u0629 CORS.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0631\u0641\u0644 \u0648\u064A\u0643\u064A \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-invalid =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u064A\u0628\u062F\u0648 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0644\u0641\u0627\u062A \u0645\u0641\u0642\u0648\u062F\u0629 \u0623\u0648 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629 \u0644\u062A\u0634\u063A\u064A\u0644 \u0631\u0641\u0644.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0648\u064A\u0643\u064A \u0631\u0641\u0644 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-wasm-download =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u062A\u0647\u0627 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u0647\u0630\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u062D\u0644 \u0646\u0641\u0633\u0647 \u0641\u064A \u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0623\u062D\u064A\u0627\u0646\u060C \u0644\u0630\u0644\u0643 \u064A\u0645\u0643\u0646\u0643 \u0645\u062D\u0627\u0648\u0644\u0629 \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629.
    \u0648\u0625\u0644\u0627 \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0645\u062F\u064A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639.
error-wasm-disabled-on-edge =
    \u0641\u0634\u0644 Ruffle \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0645\u0643\u0648\u0646 \u0627\u0644\u0645\u0644\u0641 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0644\u0625\u0635\u0644\u0627\u062D \u0647\u0630\u0647 \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060C \u062D\u0627\u0648\u0644 \u0641\u062A\u062D \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0645\u062A\u0635\u0641\u062D\u0643\u060C \u062B\u0645 \u0625\u0646\u0642\u0631 \u0641\u0648\u0642 "\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629\u060C \u0627\u0644\u0628\u062D\u062B\u060C \u0627\u0644\u062E\u062F\u0645\u0627\u062A"\u060C \u0648\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0644\u0623\u0633\u0641\u0644\u060C \u0648\u0625\u064A\u0642\u0627\u0641 "\u062A\u0639\u0632\u064A\u0632 \u0623\u0645\u0627\u0646\u0643 \u0639\u0644\u0649 \u0627\u0644\u0648\u064A\u0628".
    \u0647\u0630\u0627 \u0633\u064A\u0633\u0645\u062D \u0644\u0645\u062A\u0635\u0641\u062D\u0643 \u0628\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.
    \u0625\u0630\u0627 \u0625\u0633\u062A\u0645\u0631\u062A \u0627\u0644\u0645\u0634\u0643\u0644\u0629\u060C \u0642\u062F \u062A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0625\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u062A\u0635\u0641\u062D \u0623\u062E\u0631.
error-wasm-unsupported-browser =
    \u0644\u0627 \u064A\u062F\u0639\u0645 \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0630\u064A \u062A\u0633\u062A\u062E\u062F\u0645\u0647 \u0627\u0645\u062A\u062F\u0627\u062F\u0627\u062A WebAssembly \u0627\u0644\u0630\u064A \u064A\u062A\u0637\u0644\u0628\u0647 \u0631\u0641\u0644 \u0644\u062A\u0634\u063A\u064A\u0644\u0647.
    \u0631\u062C\u0627\u0621\u064B \u0627\u0646\u062A\u0642\u0644 \u0644\u0645\u062A\u0635\u0641\u062D \u062F\u0627\u0639\u0645.
    \u064A\u0645\u0643\u0646\u0643 \u0625\u064A\u062C\u0627\u062F \u0644\u0627\u0626\u062D\u0629 \u0644\u0644\u0645\u062A\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u062F\u0627\u0639\u0645\u0629 \u0641\u064A \u0627\u0644\u0648\u064A\u0643\u064A.
error-javascript-conflict =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u064A\u0628\u062F\u0648 \u0623\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u062A\u0633\u062A\u062E\u062F\u0645 \u0643\u0648\u062F \u062C\u0627\u0641\u0627 \u0633\u0643\u0631\u064A\u0628\u062A \u0627\u0644\u0630\u064A \u064A\u062A\u0639\u0627\u0631\u0636 \u0645\u0639 \u0631\u0641\u0644.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u0641\u0625\u0646\u0646\u0627 \u0646\u062F\u0639\u0648\u0643 \u0625\u0644\u0649 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0639\u0644\u0649 \u0635\u0641\u062D\u0629 \u0641\u0627\u0631\u063A\u0629.
error-javascript-conflict-outdated = \u064A\u0645\u0643\u0646\u0643 \u0623\u064A\u0636\u064B\u0627 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u062D\u0645\u064A\u0644 \u0646\u0633\u062E\u0629 \u0623\u062D\u062F\u062B \u0645\u0646 \u0631\u0641\u0644 \u0627\u0644\u062A\u064A \u0642\u062F \u062A\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0642\u062F\u064A\u0645\u0629: { $buildDate }).
error-csp-conflict =
    \u0648\u0627\u062C\u0647 Ruffle \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062A\u0647\u064A\u0626\u0629.
    \u0644\u0627 \u062A\u0633\u0645\u062D \u0633\u064A\u0627\u0633\u0629 \u0623\u0645\u0627\u0646 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0644\u062E\u0627\u062F\u0645 \u0627\u0644\u0648\u064A\u0628 \u0647\u0630\u0627 \u0628\u062A\u0634\u063A\u064A\u0644 \u0645\u0643\u0648\u0646 ".wasm" \u0627\u0644\u0645\u0637\u0644\u0648\u0628.
    \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0648\u064A\u0643\u064A Ruffle \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.
error-unknown =
    \u0648\u0627\u062C\u0647 \u0631\u0641\u0644 \u0645\u0634\u0643\u0644\u0629 \u0643\u0628\u064A\u0631\u0629 \u0623\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0639\u0631\u0636 \u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0641\u0644\u0627\u0634 \u0647\u0630\u0627.
    { $outdated ->
        [true] \u0625\u0630\u0627 \u0643\u0646\u062A \u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u062D\u0645\u064A\u0644 \u0625\u0635\u062F\u0627\u0631 \u0623\u062D\u062F\u062B \u0645\u0646 \u0631\u0641\u0644 (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0642\u062F\u064A\u0645\u0629: { $buildDate }).
       *[false] \u0644\u064A\u0633 \u0645\u0646 \u0627\u0644\u0645\u0641\u062A\u0631\u0636 \u0623\u0646 \u064A\u062D\u062F\u062B \u0647\u0630\u0627\u060C \u0644\u0630\u0644\u0643 \u0646\u062D\u0646 \u0646\u0642\u062F\u0631 \u062D\u0642\u064B\u0627 \u0625\u0630\u0627 \u0628\u0644\u063A\u062A \u0639\u0646 \u0627\u0644\u062E\u0637\u0623!
    }
`,"save-manager.ftl":`save-delete-prompt = \u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0645\u0644\u0641 \u0627\u0644\u062D\u0641\u0638 \u0647\u0630\u0627\u061F
save-reload-prompt =
    \u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0648\u062D\u064A\u062F\u0629 \u0644\u0640 { $action ->
        [delete] \u062D\u0630\u0641
       *[replace] \u0625\u0633\u062A\u0628\u062F\u0627\u0644
    } \u0645\u0644\u0641 \u0627\u0644\u062D\u0641\u0638 \u0647\u0630\u0627 \u062F\u0648\u0646 \u062A\u0639\u0627\u0631\u0636 \u0645\u062D\u062A\u0645\u0644 \u0647\u064A \u0625\u0639\u0627\u062F\u0629 \u062A\u062D\u0645\u064A\u0644 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629. \u0647\u0644 \u062A\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644\u061F
save-download = \u062D\u0645\u0651\u0644
save-replace = \u0625\u0633\u062A\u0628\u062F\u0644
save-delete = \u0625\u062D\u0630\u0641
save-backup-all = \u062D\u0645\u0651\u0644 \u062C\u0645\u064A\u0639 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062D\u0641\u0638
`,"volume-controls.ftl":`volume-controls-mute = \u0625\u0643\u062A\u0645
volume-controls-unmute = \u0623\u0644\u063A\u0650 \u0627\u0644\u0643\u062A\u0645
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer .swf
context-menu-copy-debug-info = Copia la informaci\xF3 de depuraci\xF3
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensi\xF3 de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest men\xFA
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta p\xE0gina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = M\xE9s informaci\xF3
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostraci\xF3 web
ruffle-desktop = Aplicaci\xF3 d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Aix\xF2 no funcionar\xE0 perqu\xE8 els navegadors bloquegen moltes caracter\xEDstiques per raons de seguretat. En comptes d'aix\xF2, us suggerim que configureu un servidor local o b\xE9 utilitzeu la demostraci\xF3 web o l'aplicaci\xF3 d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuraci\xF3 JavaScript err\xF2nia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el par\xE0metre culpable.
    Tamb\xE9 podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, \xE9s possible que h\xE0giu d'utilitzar el par\xE1metre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no est\xE0 servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-invalid-swf =
    Ruffle no ha pogut llegir el fitxer sol\xB7licitat.
    La ra\xF3 m\xE9s probable \xE9s que no sigui un fitxer SWF v\xE0lid.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La ra\xF3 m\xE9s probable \xE9s que el fitxer ja no existeixi, aix\xED que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    \xC9s probable que l'acc\xE9s a la c\xE0rrega hagi estat denegat per una pol\xEDtica CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    \xC9s probable que l'acc\xE9s a la c\xE0rrega hagi estat denegat per una pol\xEDtica CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no s\xF3n v\xE0lids per a l'execuci\xF3 de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aix\xF2 sovint aix\xF2 pot resoldre's sol, aix\xED que podeu provar de recarregar la p\xE0gina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els par\xE0metres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenci\xF3 de seguiment".
    Aix\xF2 permetr\xE0 que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = Tamb\xE9 podeu provar de carregar una versi\xF3 m\xE9s recent de Ruffle que podria resoldre el problema (la compilaci\xF3 actual est\xE0 desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La pol\xEDtica de seguretat del contingut (CSP) no permet l'execuci\xF3 del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versi\xF3 m\xE9s recent de Ruffle (la compilaci\xF3 actual est\xE0 desactualitzada: { $buildDate }).
       *[false] Aix\xF2 no hauria d'haver passat, aix\xED que us agrair\xEDem molt que n'inform\xE9ssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'\xFAnica forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte \xE9s recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls-mute = Silenci
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = St\xE1hnout .swf
context-menu-copy-debug-info = Zkop\xEDrovat debug info
context-menu-open-save-manager = Otev\u0159\xEDt spr\xE1vce ulo\u017Een\xED
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle roz\u0161\xED\u0159en\xED ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skr\xFDt menu
context-menu-exit-fullscreen = Ukon\u010Dit re\u017Eim cel\xE9 obrazovky
context-menu-enter-fullscreen = P\u0159ej\xEDt do re\u017Eimu cel\xE9 obrazovky
context-menu-volume-controls = Ovl\xE1d\xE1n\xED hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vlo\u017Een\xFD na t\xE9to str\xE1nce.
    M\u016F\u017Eete se pokusit otev\u0159\xEDt soubor na samostatn\xE9 kart\u011B, abyste se vyhnuli tomuto probl\xE9mu.
message-restored-from-bfcache =
    V\xE1\u0161 prohl\xED\u017Ee\u010D obnovil tento Flash obsah z p\u0159edchoz\xED relace.
    Chcete-li za\u010D\xEDt znovu, znovu na\u010Dt\u011Bte str\xE1nku.
panic-title = N\u011Bco se pokazilo :(
more-info = Dal\u0161\xED informace
run-anyway = P\u0159esto spustit
continue = Pokra\u010Dovat
report-bug = Nahl\xE1sit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopov\xE1 aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
enable-hardware-acceleration = Zd\xE1 se, \u017Ee hardwarov\xE1 akcelerace je vypnut\xE1. I kdy\u017E Ruffle funguje spr\xE1vn\u011B, m\u016F\u017Ee b\xFDt nep\u0159im\u011B\u0159en\u011B pomal\xFD. Jak povolit hardwarovou akceleraci zjist\xEDte na tomto odkazu:
enable-hardware-acceleration-link = \u010Cast\xE9 dotazy - Hardwarov\xE1 akcelerace Chrome
view-error-details = Zobrazit podrobnosti o chyb\u011B
open-in-new-tab = Otev\u0159\xEDt na nov\xE9 kart\u011B
click-to-unmute = Kliknut\xEDm zru\u0161\xEDte ztlumen\xED
clipboard-message-title = Kop\xEDrov\xE1n\xED a vkl\xE1d\xE1n\xED v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] V\xE1\u0161 prohl\xED\u017Ee\u010D nepodporuje pln\xFD p\u0159\xEDstup ke schr\xE1nce,
        [access-denied] P\u0159\xEDstup ke schr\xE1nce byl odep\u0159en,
    } ale m\xEDsto toho m\u016F\u017Eete v\u017Edy pou\u017E\xEDt tyto zkratky:
clipboard-message-copy = { " " } pro kop\xEDrov\xE1n\xED
clipboard-message-cut = { " " } pro vyst\u0159ihov\xE1n\xED
clipboard-message-paste = { " " } pro vkl\xE1d\xE1n\xED
error-canvas-reload = Nelze znovu na\u010D\xEDst pomoc\xED vykreslova\u010De pl\xE1tna, pokud je vykreslova\u010D pl\xE1tna ji\u017E pou\u017E\xEDv\xE1n.
error-file-protocol =
    Zd\xE1 se, \u017Ee pou\u017E\xEDv\xE1te Ruffle na protokolu "file:".
    To nen\xED mo\u017En\xE9, proto\u017Ee prohl\xED\u017Ee\u010De blokuj\xED fungov\xE1n\xED mnoha funkc\xED z bezpe\u010Dnostn\xEDch d\u016Fvod\u016F.
    Nam\xEDsto toho v\xE1m doporu\u010Dujeme nastavit lok\xE1ln\xED server nebo pou\u017E\xEDt web demo \u010Di desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na probl\xE9m v d\u016Fsledku nespr\xE1vn\xE9 konfigurace JavaScriptu.
    Pokud jste spr\xE1vcem serveru, doporu\u010Dujeme v\xE1m zkontrolovat podrobnosti o chyb\u011B, abyste zjistili, kter\xFD parametr je vadn\xFD.
    Pomoc m\u016F\u017Eete z\xEDskat tak\xE9 na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst po\u017Eadovanou komponentu souboru \u201E.wasm\u201C.
    Pokud jste spr\xE1vcem serveru, zkontrolujte, zda byl soubor spr\xE1vn\u011B nahr\xE1n.
    Pokud probl\xE9m p\u0159etrv\xE1v\xE1, mo\u017En\xE1 budete muset pou\u017E\xEDt nastaven\xED \u201EpublicPath\u201C: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Tento webov\xFD server neposkytuje soubory \u201E.wasm\u201C se spr\xE1vn\xFDm typem MIME.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nem\u016F\u017Ee zpracovat po\u017Eadovan\xFD soubor.
    Nejpravd\u011Bpodobn\u011Bj\u0161\xEDm d\u016Fvodem je, \u017Ee po\u017Eadovan\xFD soubor nen\xED platn\xFDm souborem SWF.
error-swf-fetch =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst SWF soubor Flash.
    Nejpravd\u011Bpodobn\u011Bj\u0161\xEDm d\u016Fvodem je, \u017Ee soubor ji\u017E neexistuje, tak\u017Ee Ruffle nem\xE1 co na\u010D\xEDst.
    Zkuste po\u017E\xE1dat o pomoc spr\xE1vce webu.
error-swf-cors =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst SWF soubor Flash.
    P\u0159\xEDstup k na\u010D\xEDt\xE1n\xED byl pravd\u011Bpodobn\u011B zablokov\xE1n politikou CORS.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst po\u017Eadovanou komponentu souboru \u201E.wasm\u201C.
    P\u0159\xEDstup k na\u010D\xEDt\xE1n\xED byl pravd\u011Bpodobn\u011B zablokov\xE1n politikou CORS.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Zd\xE1 se, \u017Ee na t\xE9to str\xE1nce chyb\xED nebo jsou neplatn\xE9 soubory ke spu\u0161t\u011Bn\xED Ruffle.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Probl\xE9m se m\u016F\u017Ee vy\u0159e\u0161it i s\xE1m, tak\u017Ee m\u016F\u017Eete zkusit str\xE1nku na\u010D\xEDst znovu.
    V opa\u010Dn\xE9m p\u0159\xEDpad\u011B kontaktujte administr\xE1tora str\xE1nky.
error-wasm-disabled-on-edge =
    Ruffle se nepoda\u0159ilo na\u010D\xEDst po\u017Eadovanou komponentu souboru \u201E.wasm\u201C.
    Chcete-li tento probl\xE9m vy\u0159e\u0161it, zkuste otev\u0159\xEDt nastaven\xED prohl\xED\u017Ee\u010De, klikn\u011Bte na polo\u017Eku \u201EOchrana osobn\xEDch \xFAdaj\u016F, vyhled\xE1v\xE1n\xED a slu\u017Eby\u201C, p\u0159ejd\u011Bte dol\u016F a vypn\u011Bte mo\u017Enost \u201EZvy\u0161te svou bezpe\u010Dnost na webu\u201C.
    Va\u0161emu prohl\xED\u017Ee\u010Di to umo\u017En\xED na\u010D\xEDst po\u017Eadovan\xE9 soubory \u201E.wasm\u201C.
    Pokud probl\xE9m p\u0159etrv\xE1v\xE1, budete mo\u017En\xE1 muset pou\u017E\xEDt jin\xFD prohl\xED\u017Ee\u010D.
error-wasm-unsupported-browser =
    Prohl\xED\u017Ee\u010D, kter\xFD pou\u017E\xEDv\xE1te, nepodporuje roz\u0161\xED\u0159en\xED WebAssembly, kter\xE9 Ruffle vy\u017Eaduje ke spu\u0161t\u011Bn\xED.
    P\u0159ejd\u011Bte na podporovan\xFD prohl\xED\u017Ee\u010D.
    Seznam podporovan\xFDch prohl\xED\u017Ee\u010D\u016F naleznete na Wiki.
error-javascript-conflict =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Zd\xE1 se, \u017Ee tato str\xE1nka pou\u017E\xEDv\xE1 k\xF3d JavaScript, kter\xFD je v konfliktu s Ruffle.
    Pokud jste spr\xE1vcem serveru, doporu\u010Dujeme v\xE1m zkusit na\u010D\xEDst soubor na pr\xE1zdnou str\xE1nku.
error-javascript-conflict-outdated = M\u016F\u017Eete se tak\xE9 pokusit nahr\xE1t nov\u011Bj\u0161\xED verzi Ruffle, kter\xE1 m\u016F\u017Ee dan\xFD probl\xE9m vy\u0159e\u0161it (aktu\xE1ln\xED build je zastaral\xFD: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na probl\xE9m p\u0159i pokusu o inicializaci.
    Z\xE1sady zabezpe\u010Den\xED obsahu tohoto webov\xE9ho serveru nepovoluj\xED spu\u0161t\u011Bn\xED po\u017Eadovan\xE9 komponenty \u201E.wasm\u201C.
    Pokud jste spr\xE1vcem serveru, n\xE1pov\u011Bdu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na probl\xE9m p\u0159i pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste spr\xE1vcem serveru, zkuste nahr\xE1t nov\u011Bj\u0161\xED verzi Ruffle (aktu\xE1ln\xED build je zastaral\xFD: { $buildDate }).
         *[false] Toto by se nem\u011Blo st\xE1t, tak\u017Ee bychom opravdu ocenili, kdybyste mohli nahl\xE1sit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s ulo\u017Een\xFDmi pozicemi?
save-reload-prompt =
    Jedin\xFD zp\u016Fsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s ulo\u017Een\xFDmi pozicemi bez potenci\xE1ln\xEDho konfliktu je op\u011Btovn\xE9 na\u010Dten\xED tohoto obsahu. Chcete p\u0159esto pokra\u010Dovat?
save-download = St\xE1hnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = St\xE1hnout v\u0161echny soubory s ulo\u017Een\xFDmi pozicemi
`,"volume-controls.ftl":`volume-controls-mute = Ztlumit
volume-controls-unmute = Zru\u0161it ztlumen\xED
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = .swf herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager \xF6ffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] \xDCber Ruffle Erweiterung ({ $version })
       *[other] \xDCber Ruffle ({ $version })
    }
context-menu-hide = Men\xFC ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautst\xE4rke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte den Flash in dieser Seite nicht ausf\xFChren.
    Du kannst versuchen, die Datei in einem separaten Tab zu \xF6ffnen, um dieses Problem zu umgehen.
message-restored-from-bfcache = Dein Browser hat den Flash-Inhalt aus einer vorherigen Sitzung wiederhergestellt. Um von neuem zu beginnen, lade die Seite neu.
panic-title = Etwas ist schief gelaufen
more-info = Weitere Informationen
run-anyway = Trotzdem ausf\xFChren
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktuallisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
enable-hardware-acceleration = Es sieht so aus, als ob die Hardwarebeschleunigung deaktiviert ist. Ruffle kann zwar funktionieren, k\xF6nnte aber sehr langsam sein. Wie Sie die Hardwarebeschleunigung aktivieren k\xF6nnen, erfahren Sie unter dem folgenden Link:
enable-hardware-acceleration-link = FAQ - Chrome Hardwarebeschleunigung
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab \xF6ffnen
click-to-unmute = Klicke zum Entmuten
clipboard-message-title = Kopieren und Einf\xFCgen in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Dein Browser unterst\xFCtzt keinen vollst\xE4ndigen Zugriff auf die Zwischenablage,
        [access-denied] Zugriff auf die Zwischenablage wurde verweigert,
    } aber du kannst stattdessen auch diese Tastenkombinationen verwenden:
clipboard-message-copy = { " " } zum Kopieren
clipboard-message-cut = { " " } zum Ausschneiden
clipboard-message-paste = { " " } zum Einf\xFCgen
error-canvas-reload = Canvas Renderer kann nicht neu geladen werden, w\xE4hrend er in Verwendung ist.
error-file-protocol =
    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausf\xFChren.
    Jedoch werden aus Sicherheitsgr\xFCnden viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.
    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.
error-javascript-config =
    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gesto\xDFen.
    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu \xFCberpr\xFCfen, um herauszufinden, welcher Parameter fehlerhaft ist.
    Sie k\xF6nnen auch das Ruffle-Wiki f\xFCr Hilfe konsultieren.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, m\xFCssen Sie unter Umst\xE4nden die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki f\xFCr Hilfe.
error-wasm-mime-type =
    Ruffle ist auf ein Fehler beim Initialisieren gesto\xDFen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xFCr Hilfe.
error-invalid-swf =
    Ruffle konnte die angegebene Datei nicht lesen.
    Am wahrscheinlichsten ist die angegebene Datei keine g\xFCltige SWF.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.
    Kontaktieren Sie den Website-Administrator f\xFCr Hilfe.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xFCr Hilfe.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xFCr Hilfe.
error-wasm-invalid =
    Ruffle ist auf ein Fehler beim Initialisieren gesto\xDFen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xFCr Hilfe.
error-wasm-download =
    Ruffle ist auf ein Fehler beim Initialisieren gesto\xDFen.
    Dies kann sich oft selbst beheben, so dass Sie versuchen k\xF6nnen, die Seite neu zu laden.
    Andernfalls kontaktieren Sie bitte den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Um dies zu beheben, versuche die Einstellungen deines Browsers zu \xF6ffnen, klicke auf "Privatsph\xE4re, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.
    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.
    Wenn das Problem weiterhin besteht, m\xFCssen Sie m\xF6glicherweise einen anderen Browser verwenden.
error-wasm-unsupported-browser =
    Der verwendete Browser unterst\xFCtzt die WebAssembly Erweiterungen nicht welche Ruffle zur Ausf\xFChrung ben\xF6tigt.
    Bitte verwende einen unterst\xFCtzen Browser.
    Du kannst eine Liste der unterst\xFCtzten Browser in der Wiki finden.
error-javascript-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gesto\xDFen.
    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.
    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen k\xF6nnte (aktuelle Version ist veraltet: { $buildDate }).
error-csp-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gesto\xDFen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki f\xFCr Hilfe.
error-unknown =
    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein gro\xDFes Problem gesto\xDFen.
    { $outdated ->
        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).
       *[false] Dies soll nicht passieren, deshalb w\xFCrden wir uns sehr dar\xFCber freuen, wenn Sie einen Fehler melden k\xF6nnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei l\xF6schen m\xF6chten?
save-reload-prompt =
    Der einzige Weg zu { $action ->
        [delete] l\xF6schen
       *[replace] ersetzen
    } diese Speicherdatei ohne m\xF6glichen Konflikt ist das erneute Laden dieses Inhalts. M\xF6chten Sie trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = L\xF6schen
save-backup-all = Alle gespeicherten Dateien herunterladen
`,"volume-controls.ftl":`volume-controls-mute = Stummschalten
volume-controls-unmute = Stummschaltung aufheben
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download .swf
context-menu-copy-debug-info = Copy Debug Info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide This Menu
context-menu-exit-fullscreen = Exit Full Screen
context-menu-enter-fullscreen = Enter Full Screen
context-menu-volume-controls = Volume Controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
message-restored-from-bfcache =
    Your browser restored this Flash content from a previous session.
    To start fresh, reload the page.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is disabled. While Ruffle may work, it could be very slow. You can find out how to enable hardware acceleration by following the link below:
enable-hardware-acceleration-link = FAQ - Chrome Hardware Acceleration
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
clipboard-message-title = Copying and pasting in Ruffle
clipboard-message-description =
    { $variant ->
        *[unsupported] Your browser does not support full clipboard access,
        [access-denied] Access to the clipboard has been denied,
    } but you can always use these shortcuts instead:
clipboard-message-copy = { " " } for copy
clipboard-message-cut = { " " } for cut
clipboard-message-paste = { " " } for paste
error-canvas-reload = Cannot reload with the canvas renderer when the canvas renderer is already in use.
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-invalid-swf =
    Ruffle cannot parse the requested file.
    The most likely reason is that the requested file is not a valid SWF.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-wasm-unsupported-browser =
    The browser you are using does not support the WebAssembly extensions Ruffle requires to run.
    Please switch to a supported browser.
    You can find a list of supported browsers on the Wiki.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files
`,"volume-controls.ftl":`volume-controls-mute = Mute
volume-controls-unmute = Unmute
`},"eo-UY":{"context_menu.ftl":"","messages.ftl":"","save-manager.ftl":"","volume-controls.ftl":""},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
context-menu-copy-debug-info = Copiar Informaci\xF3n de depuraci\xF3n
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensi\xF3n de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este men\xFA
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta p\xE1gina.
    Puedes intentar abrir el archivo en una pesta\xF1a aparte, para evitar este problema.
message-restored-from-bfcache =
    Su navegador ha recuperado este contenido Flash de una sesi\xF3n anterior.
    Para empezar de cero, refresque la p\xE1gina.
panic-title = Algo sali\xF3 mal :(
more-info = M\xE1s info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un Error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostraci\xF3n de web
ruffle-desktop = Aplicaci\xF3n de Desktop
ruffle-wiki = Ver la p\xE1gina wiki
enable-hardware-acceleration = Al parecer, la aceleraci\xF3n de hardware est\xE1 deshabilitada. Puede que Ruffle funcione, pero este podr\xEDa funcionar muy lentamente. Puedes averiguar como habilitar aceleraci\xF3n de hardware presionando el enlace:
enable-hardware-acceleration-link = Preguntas frecuentes sobre la aceleraci\xF3n de hardware en Chrome
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pesta\xF1a nueva
click-to-unmute = Haz clic para dejar de silenciar
clipboard-message-title = Para copiar y pegar en Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Este navegador no apoya acceso completo al portapapeles,
        [access-denied] Se ha denegado el acceso al portapapeles,
    } pero siempre se puede utilizar estos atajos:
clipboard-message-copy = Para copiar
clipboard-message-cut = Para cortar
clipboard-message-paste = Para pegar
error-canvas-reload = No se puede recargar con el renderizado de lienzo cuando este ya est\xE1 en uso.
error-file-protocol =
    Parece que est\xE1 ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas caracter\xEDsticas funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostraci\xF3n web o la aplicaci\xF3n de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema cr\xEDtico debido a una configuraci\xF3n JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qu\xE9 par\xE1metro est\xE1 en falta.
    Tambi\xE9n puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, aseg\xFArese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuraci\xF3n "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema cr\xEDtico al intentar inicializar.
    Este servidor web no est\xE1 sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-invalid-swf = Ruffle no puede analizar el archivo solicitado. La raz\xF3n m\xE1s probable es que no es un archivo v\xE1lido SWF.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La raz\xF3n m\xE1s probable es que el archivo ya no existe, as\xED que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la b\xFAsqueda haya sido bloqueado por la pol\xEDtica CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la b\xFAsqueda o la llamada a la funci\xF3n fetch haya sido bloqueado por la pol\xEDtica CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema cr\xEDtico al intentar inicializar.
    Este servidor web no est\xE1 sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema cr\xEDtico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por s\xED mismo, as\xED que puede intentar recargar la p\xE1gina.
    De lo contrario, p\xF3ngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuraci\xF3n de tu navegador, haciendo clic en "Privacidad, b\xFAsqueda y servicios", desplaz\xE1ndote y apagando "Mejore su seguridad en la web".
    Esto permitir\xE1 a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-wasm-unsupported-browser =
    Este navegador no apoya las extensiones de WebAssembly que Ruffle requiere para ejecutar.
    Por favor, cambia a un navegador apoyado.
    Se puede ver una lista de navegadores apoyados en el Wiki.
error-javascript-conflict =
    Ruffle ha encontrado un problema cr\xEDtico mientras intentaba inicializarse.
    Parece que esta p\xE1gina utiliza c\xF3digo JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una p\xE1gina en blanco.
error-javascript-conflict-outdated = Tambi\xE9n puedes intentar subir una versi\xF3n m\xE1s reciente de Ruffle que puede eludir el problema (la versi\xF3n actual est\xE1 desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontr\xF3 un problema al intentar inicializarse.
    La Pol\xEDtica de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm".
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version m\xE1s reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = \xBFEst\xE1 seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La \xFAnica forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. \xBFDesea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Desmutear
`},"fi-FI":{"context_menu.ftl":`context-menu-download-swf = Lataa .swf
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tietoja \u2013 Ruffle-laajennus ({ $version })
       *[other] Tietoja \u2013 Ruffle ({ $version })
    }
context-menu-hide = Piilota t\xE4m\xE4 valikko
context-menu-exit-fullscreen = Poistu koko n\xE4yt\xF6n tilasta
context-menu-enter-fullscreen = Siirry koko n\xE4yt\xF6n tilaan
context-menu-volume-controls = \xC4\xE4nenvoimakkuuden s\xE4\xE4t\xF6
`,"messages.ftl":`message-restored-from-bfcache =
    Selaimesi palautti t\xE4m\xE4n Flash-sis\xE4ll\xF6n aiemmasta istunnosta.
    Aloita alusta lataamalla sivu uudelleen.
panic-title = Jokin meni pieleen :(
more-info = Lis\xE4tietoja
run-anyway = Suorita silti
continue = Jatka
report-bug = Ilmoita ongelmasta
update-ruffle = P\xE4ivit\xE4 Ruffle
ruffle-desktop = Ty\xF6p\xF6yt\xE4sovellus
ruffle-wiki = N\xE4yt\xE4 Rufflen wiki
enable-hardware-acceleration = Vaikuttaa silt\xE4, ett\xE4 laitteistokiihdytys on pois k\xE4yt\xF6st\xE4. Ruffle saattaa silti toimia, mutta hitaasti. Lis\xE4tietoja laitteistokiihdytyksen ottamisesta k\xE4ytt\xF6\xF6n on saatavilla alla olevan linkin kautta:
view-error-details = N\xE4yt\xE4 virheen tiedot
open-in-new-tab = Avaa uudessa v\xE4lilehdess\xE4
click-to-unmute = Napsauta palauttaaksesi \xE4\xE4net
clipboard-message-title = Kopiointi ja liitt\xE4minen Rufflessa
clipboard-message-copy = { " " } kopioi
clipboard-message-cut = { " " } leikkaa
clipboard-message-paste = { " " } liitt\xE4\xE4
error-wasm-unsupported-browser =
    K\xE4ytt\xE4m\xE4si selain ei tue Rufflen vaatimia WebAssembly-laajennuksia.
    Vaihda tuettuun selaimeen.
    Lista tuetuista selaimista on koottu wikiin.
`,"save-manager.ftl":`save-download = Lataa
save-replace = Korvaa
save-delete = Poista
`,"volume-controls.ftl":`volume-controls-mute = Mykist\xE4
volume-controls-unmute = Poista mykistys
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = T\xE9l\xE9charger en tant que .swf
context-menu-copy-debug-info = Copier les infos de d\xE9bogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] \xC0 propos de l'Extension Ruffle ({ $version })
       *[other] \xC0 propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein \xE9cran
context-menu-enter-fullscreen = Afficher en plein \xE9cran
context-menu-volume-controls = Contr\xF4les du volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas \xE9t\xE9 en mesure de lire le fichier Flash int\xE9gr\xE9 dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isol\xE9, pour contourner le probl\xE8me.
message-restored-from-bfcache =
    Votre navigateur a restaur\xE9 ce contenu Flash d'une session ant\xE9rieure.
    Rechargez la page pour repartir de z\xE9ro.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Ex\xE9cuter quand m\xEAme
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre \xE0 jour Ruffle
ruffle-demo = D\xE9mo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
enable-hardware-acceleration = Il semblerait que l'acc\xE9l\xE9ration mat\xE9rielle soit d\xE9sactiv\xE9e. Cela n'emp\xEAche g\xE9n\xE9ralement pas Ruffle de fonctionner, mais il peut \xEAtre beaucoup plus lent. Vous pouvez trouver comment activer l'acc\xE9l\xE9ration mat\xE9rielle en suivant le lien ci-dessous :
enable-hardware-acceleration-link = FAQ - Acc\xE9l\xE9ration mat\xE9rielle dans Chrome
view-error-details = D\xE9tails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
clipboard-message-title = Copier et coller dans Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Votre navigateur ne prend pas en charge l'acc\xE8s au presse-papiers,
        [access-denied] L'acc\xE8s au presse-papiers a \xE9t\xE9 refus\xE9,
    } mais vous pouvez toujours utiliser ces raccourcis clavier \xE0 la place :
clipboard-message-copy = { " " } pour copier
clipboard-message-cut = { " " } pour couper
clipboard-message-paste = { " " } pour coller
error-canvas-reload = Impossible de recharger avec le moteur de rendu canvas lorsque celui-ci est d\xE9j\xE0 en cours d'utilisation.
error-file-protocol =
    Il semblerait que vous ex\xE9cutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalit\xE9s pour des raisons de s\xE9curit\xE9.
    Nous vous invitons soit \xE0 configurer un serveur local, soit \xE0 utiliser la d\xE9mo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontr\xE9 un probl\xE8me majeur en raison d'une configuration JavaScript incorrecte.
    Si vous \xEAtes l'administrateur du serveur, nous vous invitons \xE0 v\xE9rifier les d\xE9tails de l'erreur pour savoir quel est le param\xE8tre en cause.
    Vous pouvez \xE9galement consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas r\xE9ussi \xE0 charger son fichier ".wasm".
    Si vous \xEAtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien \xE9t\xE9 mis en ligne.
    Si le probl\xE8me persiste, il vous faudra peut-\xEAtre utiliser le param\xE8tre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-invalid-swf =
    Ruffle n'a pas \xE9t\xE9 en mesure de lire le fichier demand\xE9.
    La raison la plus probable est que ce fichier n'est pas un SWF valide.
error-swf-fetch =
    Ruffle n'a pas r\xE9ussi \xE0 charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas r\xE9ussi \xE0 charger le fichier Flash.
    La requ\xEAte a probablement \xE9t\xE9 rejet\xE9e en raison de la configuration du CORS.
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas r\xE9ussi \xE0 charger son fichier ".wasm".
    La requ\xEAte a probablement \xE9t\xE9 rejet\xE9e en raison de la configuration du CORS.
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour ex\xE9cuter Ruffle.
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Le probl\xE8me d\xE9tect\xE9 peut souvent se r\xE9soudre de lui-m\xEAme, donc vous pouvez essayer de recharger la page.
    Si le probl\xE8me persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas r\xE9ussi \xE0 charger son fichier ".wasm".
    Pour r\xE9soudre ce probl\xE8me, essayez d'ouvrir les param\xE8tres de votre navigateur et de cliquer sur "Confidentialit\xE9, recherche et services". Puis, vers le bas de la page, d\xE9sactivez l'option "Am\xE9liorez votre s\xE9curit\xE9 sur le web".
    Cela permettra \xE0 votre navigateur de charger les fichiers ".wasm".
    Si le probl\xE8me persiste, vous devrez peut-\xEAtre utiliser un autre navigateur.
error-wasm-unsupported-browser =
    Votre navigateur ne prend pas en charge les extensions WebAssembly n\xE9cessaires au fonctionnement de Ruffle.
    Veuillez utiliser un navigateur les prenant en charge.
    Vous pouvez trouver une liste de navigateurs fonctionnant avec Ruffle sur le wiki.
error-javascript-conflict =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous \xEAtes l'administrateur du serveur, nous vous invitons \xE0 essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez \xE9galement essayer de mettre en ligne une version plus r\xE9cente de Ruffle qui pourrait avoir corrig\xE9 le probl\xE8me (la version que vous utilisez est obsol\xE8te : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant sa phase d'initialisation.
    La strat\xE9gie de s\xE9curit\xE9 du contenu (CSP) de ce serveur web n'autorise pas l'ex\xE9cution de fichiers ".wasm".
    Si vous \xEAtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontr\xE9 un probl\xE8me majeur durant l'ex\xE9cution de ce contenu Flash.
    { $outdated ->
        [true] Si vous \xEAtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus r\xE9cente de Ruffle (la version que vous utilisez est obsol\xE8te : { $buildDate }).
       *[false] Cela n'est pas cens\xE9 se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule fa\xE7on de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand m\xEAme continuer ?
save-download = T\xE9l\xE9charger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = T\xE9l\xE9charger tous les fichiers de sauvegarde
`,"volume-controls.ftl":`volume-controls-mute = Rendre muet
volume-controls-unmute = Rendre audible
`},"he-IL":{"context_menu.ftl":`context-menu-download-swf = \u05D4\u05D5\u05E8\u05D3\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4swf.
context-menu-copy-debug-info = \u05D4\u05E2\u05EA\u05E7\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05E0\u05D9\u05E4\u05D5\u05D9 \u05E9\u05D2\u05D9\u05D0\u05D5\u05EA
context-menu-open-save-manager = \u05E4\u05EA\u05D7 \u05D0\u05EA \u05DE\u05E0\u05D4\u05DC \u05D4\u05E9\u05DE\u05D9\u05E8\u05D5\u05EA
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05EA\u05D5\u05E1\u05E3 Ruffle ({ $version })
       *[other] \u05D0\u05D5\u05D3\u05D5\u05EA Ruffle ({ $version })
    }
context-menu-hide = \u05D4\u05E1\u05EA\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05D6\u05D4
context-menu-exit-fullscreen = \u05D9\u05E6\u05D9\u05D0\u05D4 \u05DE\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0
context-menu-enter-fullscreen = \u05DE\u05E1\u05DA \u05DE\u05DC\u05D0
context-menu-volume-controls = \u05D1\u05E7\u05E8\u05EA \u05E2\u05D5\u05E6\u05DE\u05EA \u05E7\u05D5\u05DC
`,"messages.ftl":`message-cant-embed =
    Ruffle \u05DC\u05D0 \u05D4\u05E6\u05DC\u05D9\u05D7 \u05DC\u05D4\u05E8\u05D9\u05E5 \u05D0\u05EA \u05EA\u05D5\u05DB\u05DF \u05D4\u05E4\u05DC\u05D0\u05E9 \u05D4\u05DE\u05D5\u05D8\u05DE\u05E2 \u05D1\u05D3\u05E3 \u05D6\u05D4.
    \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D1\u05DC\u05E9\u05D5\u05E0\u05D9\u05EA \u05E0\u05E4\u05E8\u05D3\u05EA, \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E2\u05E7\u05D5\u05E3 \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5.
panic-title = \u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9 :(
more-info = \u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3
run-anyway = \u05D4\u05E4\u05E2\u05DC \u05D1\u05DB\u05DC \u05D6\u05D0\u05EA
continue = \u05D4\u05DE\u05E9\u05DA
report-bug = \u05D3\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D4
update-ruffle = \u05E2\u05D3\u05DB\u05DF \u05D0\u05EA Ruffle
ruffle-demo = \u05D4\u05D3\u05D2\u05DE\u05D4
ruffle-desktop = \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF \u05E2\u05D1\u05D5\u05D3\u05D4
ruffle-wiki = \u05E8\u05D0\u05D4 \u05D0\u05EA Ruffle wiki
enable-hardware-acceleration = \u05E0\u05E8\u05D0\u05D4 \u05E9\u05D4\u05D0\u05E6\u05EA \u05D4\u05D7\u05D5\u05DE\u05E8\u05D4 \u05E9\u05DC\u05DA \u05DC\u05D0 \u05DE\u05D5\u05E4\u05E2\u05DC\u05EA. \u05D1\u05E2\u05D5\u05D3 \u05E9Ruffle \u05E2\u05E9\u05D5\u05D9 \u05DC\u05E2\u05D1\u05D5\u05D3, \u05D4\u05D5\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05D4\u05D9\u05D5\u05EA \u05D0\u05D9\u05D8\u05D9. \u05EA\u05D5\u05DB\u05DC \u05DC\u05E8\u05D0\u05D5\u05EA \u05DB\u05D9\u05E6\u05D3 \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05EA\u05DB\u05D5\u05E0\u05D4 \u05D6\u05D5 \u05D1\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05D4\u05DC\u05D9\u05E0\u05E7 \u05D4\u05D6\u05D4:
enable-hardware-acceleration-link = \u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA - \u05D4\u05D0\u05E6\u05EA \u05D4\u05D7\u05D5\u05DE\u05E8\u05D4 \u05E9\u05DC Chrome
view-error-details = \u05E8\u05D0\u05D4 \u05E4\u05E8\u05D8\u05D9 \u05E9\u05D2\u05D9\u05D0\u05D4
open-in-new-tab = \u05E4\u05EA\u05D7 \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4
click-to-unmute = \u05DC\u05D7\u05E5 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05D1\u05D8\u05DC \u05D4\u05E9\u05EA\u05E7\u05D4
clipboard-message-title = \u05D4\u05E2\u05EA\u05E7\u05D4 \u05D5\u05D4\u05D3\u05D1\u05E7\u05D4 \u05D1Ruffle
clipboard-message-copy = { " " } \u05E2\u05D1\u05D5\u05E8 \u05D4\u05E2\u05EA\u05E7\u05D4
clipboard-message-cut = { " " } \u05E2\u05D1\u05D5\u05E8 \u05D2\u05D6\u05D9\u05E8\u05D4
clipboard-message-paste = { " " } \u05E2\u05D1\u05D5\u05E8 \u05D4\u05D3\u05D1\u05E7\u05D4
error-canvas-reload = \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05D8\u05E2\u05D5\u05DF \u05DE\u05D7\u05D3\u05E9 \u05E2\u05DD \u05DE\u05E2\u05D1\u05D3 \u05D4\u05E7\u05E0\u05D1\u05E1 \u05DB\u05D0\u05E9\u05E8 \u05DE\u05E2\u05D1\u05D3 \u05D4\u05E7\u05E0\u05D1\u05E1 \u05DB\u05D1\u05E8 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9.
error-file-protocol =
    \u05E0\u05D3\u05DE\u05D4 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05E8\u05D9\u05E5 \u05D0\u05EA Ruffle \u05EA\u05D7\u05EA \u05E4\u05E8\u05D5\u05D8\u05D5\u05E7\u05D5\u05DC "file:".
    \u05D6\u05D4 \u05DC\u05D0 \u05D9\u05E2\u05D1\u05D5\u05D3 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05E9\u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05D7\u05D5\u05E1\u05DE\u05D9\u05DD \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05E8\u05D1\u05D5\u05EA \u05DE\u05DC\u05E2\u05D1\u05D5\u05D3 \u05E2\u05E7\u05D1 \u05E1\u05D9\u05D1\u05D5\u05EA \u05D0\u05D1\u05D8\u05D7\u05D4.
    \u05D1\u05DE\u05E7\u05D5\u05DD \u05D6\u05D4, \u05D0\u05E0\u05D5 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA \u05DC\u05D0\u05D7\u05E1\u05DF \u05D0\u05EA\u05E8 \u05D6\u05D4 \u05EA\u05D7\u05EA \u05E9\u05E8\u05EA \u05DE\u05E7\u05D5\u05DE\u05D9 \u05D0\u05D5 \u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05E8\u05E9\u05EA \u05D0\u05D5 \u05D3\u05E8\u05DA \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4.
error-javascript-config =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05EA\u05E7\u05DC\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05E2\u05E7\u05D1 \u05D4\u05D2\u05D3\u05E8\u05EA JavaScript \u05E9\u05D2\u05D5\u05D9\u05D4.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D5 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05E9\u05D2\u05D9\u05D0\u05D4 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05D9\u05D6\u05D4 \u05E4\u05E8\u05DE\u05D8\u05E8 \u05D4\u05D5\u05D0 \u05E9\u05D2\u05D5\u05D9.
    \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E2\u05D9\u05D9\u05DF \u05D5\u05DC\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-not-found =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4"wasm." \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05D5\u05D5\u05D3\u05D0 \u05DB\u05D9 \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05D5\u05E2\u05DC\u05D4 \u05DB\u05E9\u05D5\u05E8\u05D4.
    \u05D0\u05DD \u05D4\u05D1\u05E2\u05D9\u05D4 \u05DE\u05DE\u05E9\u05D9\u05DB\u05D4, \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05EA\u05E6\u05D8\u05E8\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05EA "publicPath": \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-mime-type =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05E9\u05E8\u05EA\u05D5 \u05E9\u05DC \u05D0\u05EA\u05E8 \u05D6\u05D4 \u05DC\u05D0 \u05DE\u05E9\u05D9\u05D9\u05DA \u05E7\u05D1\u05E6\u05D9 ".wasm" \u05E2\u05DD \u05E1\u05D5\u05D2 \u05D4MIME \u05D4\u05E0\u05DB\u05D5\u05DF.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-invalid-swf =
    Ruffle \u05DC\u05D0 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E0\u05EA\u05D7 \u05D0\u05EA \u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9.
    \u05D4\u05E1\u05D9\u05D1\u05D4 \u05D4\u05E1\u05D1\u05D9\u05E8\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5 \u05D4\u05D9\u05D0 \u05D1\u05D2\u05DC\u05DC \u05E9\u05D4\u05E7\u05D5\u05D1\u05E5 \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9 \u05D0\u05D9\u05E0\u05D5 SWF \u05D7\u05D5\u05E7\u05D9.
error-swf-fetch =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4\u05E4\u05DC\u05D0\u05E9/swf. .
    \u05D6\u05D4 \u05E0\u05D5\u05D1\u05E2 \u05DB\u05DB\u05DC \u05D4\u05E0\u05E8\u05D0\u05D4 \u05DE\u05DB\u05D9\u05D5\u05D5\u05DF \u05D5\u05D4\u05E7\u05D5\u05D1\u05E5 \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD \u05D9\u05D5\u05EA\u05E8, \u05D0\u05D6 \u05D0\u05D9\u05DF \u05DCRuffle \u05DE\u05D4 \u05DC\u05D8\u05E2\u05D5\u05DF.
    \u05E0\u05E1\u05D4 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-swf-cors =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4\u05E4\u05DC\u05D0\u05E9/swf. .
    \u05D2\u05D9\u05E9\u05D4 \u05DCfetch \u05DB\u05DB\u05DC \u05D4\u05E0\u05E8\u05D0\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA CORS.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-cors =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4".wasm" \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05D2\u05D9\u05E9\u05D4 \u05DCfetch \u05DB\u05DB\u05DC \u05D4\u05E0\u05E8\u05D0\u05D4 \u05E0\u05D7\u05E1\u05DE\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA CORS.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-invalid =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05E0\u05D3\u05DE\u05D4 \u05DB\u05D9 \u05D1\u05D3\u05E3 \u05D6\u05D4 \u05D7\u05E1\u05E8\u05D9\u05DD \u05D0\u05D5 \u05DC\u05D0 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05DB\u05E8\u05D0\u05D5\u05D9 \u05E7\u05D1\u05E6\u05D9\u05DD \u05D0\u05E9\u05E8 \u05DE\u05E9\u05DE\u05E9\u05D9\u05DD \u05D0\u05EA Ruffle \u05DB\u05D3\u05D9 \u05DC\u05E4\u05E2\u05D5\u05DC
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-wasm-download =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05DC\u05E2\u05D9\u05EA\u05D9\u05DD \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5 \u05D9\u05DB\u05D5\u05DC\u05D4 \u05DC\u05E4\u05EA\u05D5\u05E8 \u05D0\u05EA \u05E2\u05E6\u05DE\u05D4, \u05D0\u05D6 \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E0\u05E1\u05D5\u05EA \u05DC\u05D8\u05E2\u05D5\u05DF \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05D4\u05D3\u05E3 \u05D6\u05D4.
    \u05D0\u05DD \u05DC\u05D0, \u05D0\u05E0\u05D0 \u05E4\u05E0\u05D4 \u05DC\u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8.
error-wasm-disabled-on-edge =
    Ruffle \u05E0\u05DB\u05E9\u05DC \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4".wasm" \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05EA\u05E7\u05DF \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5, \u05E0\u05E1\u05D4 \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA, \u05DC\u05D7\u05E5 \u05E2\u05DC "\u05D0\u05D1\u05D8\u05D7\u05D4, \u05D7\u05D9\u05E4\u05D5\u05E9 \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA",
    \u05D2\u05DC\u05D5\u05DC \u05DE\u05D8\u05D4, \u05D5\u05DB\u05D1\u05D4 \u05D0\u05EA "\u05D4\u05D2\u05D1\u05E8 \u05D0\u05EA \u05D4\u05D0\u05D1\u05D8\u05D7\u05D4 \u05E9\u05DC\u05DA \u05D1\u05E8\u05E9\u05EA".
    \u05D6\u05D4 \u05D9\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4".wasm" \u05D4\u05D3\u05E8\u05D5\u05E9.
    \u05D0\u05DD \u05D4\u05D1\u05E2\u05D9\u05D4 \u05DE\u05DE\u05E9\u05D9\u05DB\u05D4, \u05D9\u05D9\u05EA\u05DB\u05DF \u05D5\u05E2\u05DC\u05D9\u05DA \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D7\u05E8.
error-wasm-unsupported-browser =
    \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05D1\u05D5 \u05D0\u05EA\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D0\u05D9\u05E0\u05D5 \u05EA\u05D5\u05DE\u05DA \u05D1\u05EA\u05D5\u05E1\u05E4\u05D9 WebAssembly \u05E9-Ruffle \u05D3\u05D5\u05E8\u05E9 \u05DB\u05D3\u05D9 \u05DC\u05E4\u05E2\u05D5\u05DC.
    \u05D0\u05E0\u05D0 \u05E2\u05D1\u05D5\u05E8 \u05DC\u05D3\u05E4\u05D3\u05E4\u05DF \u05E0\u05EA\u05DE\u05DA.
    \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05DE\u05E6\u05D5\u05D0 \u05E8\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC \u05D3\u05E4\u05D3\u05E4\u05E0\u05D9\u05DD \u05E0\u05EA\u05DE\u05DB\u05D9\u05DD \u05D1-Wiki \u05E9\u05DC\u05E0\u05D5.
error-javascript-conflict =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05E0\u05D3\u05DE\u05D4 \u05DB\u05D9 \u05D3\u05E3 \u05D6\u05D4 \u05DE\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E7\u05D5\u05D3 JavaScript \u05D0\u05E9\u05E8 \u05DE\u05EA\u05E0\u05D2\u05E9 \u05E2\u05DD Ruffle.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D5 \u05DE\u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D0\u05D5\u05EA\u05DA \u05DC\u05E0\u05E1\u05D5\u05EA \u05DC\u05D8\u05E2\u05D5\u05DF \u05D0\u05EA \u05D4\u05D3\u05E3 \u05EA\u05D7\u05EA \u05E2\u05DE\u05D5\u05D3 \u05E8\u05D9\u05E7.
error-javascript-conflict-outdated = \u05D1\u05E0\u05D5\u05E1\u05E3, \u05D0\u05EA\u05D4 \u05D9\u05DB\u05D5\u05DC \u05DC\u05E0\u05E1\u05D5\u05EA \u05D5\u05DC\u05D4\u05E2\u05DC\u05D5\u05EA \u05D2\u05E8\u05E1\u05D0\u05D5\u05EA \u05E2\u05D3\u05DB\u05E0\u05D9\u05D5\u05EA \u05E9\u05DC Ruffle \u05D0\u05E9\u05E8 \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05E2\u05E7\u05D5\u05E3 \u05D1\u05E2\u05D9\u05D4 \u05D6\u05D5 (\u05D2\u05E8\u05E1\u05D4 \u05D6\u05D5 \u05D4\u05D9\u05E0\u05D4 \u05DE\u05D9\u05D5\u05E9\u05E0\u05EA : { $buildDate }).
error-csp-conflict =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D0\u05EA\u05D7\u05DC.
    \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D0\u05D1\u05D8\u05D7\u05EA \u05D4\u05EA\u05D5\u05DB\u05DF \u05E9\u05DC \u05E9\u05E8\u05EA\u05D5 \u05E9\u05DC \u05D0\u05EA\u05E8 \u05D6\u05D4 \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05E7\u05D5\u05D1\u05E5 \u05D4"wasm." \u05D4\u05D3\u05E8\u05D5\u05E9 \u05DC\u05E4\u05E2\u05D5\u05DC.
    \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E2\u05D9\u05D9\u05DF \u05D5\u05D4\u05D5\u05E2\u05E5 \u05D1wiki \u05E9\u05DC Ruffle \u05E2\u05DC \u05DE\u05E0\u05EA \u05DC\u05E7\u05D1\u05DC \u05E2\u05D6\u05E8\u05D4.
error-unknown =
    Ruffle \u05E0\u05EA\u05E7\u05DC \u05D1\u05D1\u05E2\u05D9\u05D4 \u05D7\u05DE\u05D5\u05E8\u05D4 \u05D1\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05DC\u05D4\u05E6\u05D9\u05D2 \u05D0\u05EA \u05EA\u05D5\u05DB\u05DF \u05E4\u05DC\u05D0\u05E9 \u05D6\u05D4.
    { $outdated ->
        [true] \u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05E0\u05D4\u05DC \u05D4\u05D0\u05EA\u05E8, \u05D0\u05E0\u05D0 \u05E0\u05E1\u05D4 \u05DC\u05D4\u05E2\u05DC\u05D5\u05EA \u05D2\u05E8\u05E1\u05D4 \u05E2\u05D3\u05DB\u05E0\u05D9\u05EA \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC Ruffle (\u05D2\u05E8\u05E1\u05D4 \u05D6\u05D5 \u05D4\u05D9\u05E0\u05D4 \u05DE\u05D9\u05D5\u05E9\u05E0\u05EA:  { $buildDate }).
       *[false] \u05D6\u05D4 \u05DC\u05D0 \u05D0\u05DE\u05D5\u05E8 \u05DC\u05E7\u05E8\u05D5\u05EA, \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05EA\u05D5\u05DB\u05DC \u05DC\u05E9\u05EA\u05E3 \u05EA\u05E7\u05DC\u05D4 \u05D6\u05D5!
    }
`,"save-manager.ftl":`save-delete-prompt = \u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7 \u05E9\u05D1\u05E8\u05E6\u05D5\u05E0\u05DA \u05DC\u05DE\u05D7\u05D5\u05E7 \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05E9\u05DE\u05D9\u05E8\u05D4 \u05D6\u05D4?
save-reload-prompt =
    \u05D4\u05D3\u05E8\u05DA \u05D4\u05D9\u05D7\u05D9\u05D3\u05D4 { $action ->
        [delete] \u05DC\u05DE\u05D7\u05D5\u05E7
       *[replace] \u05DC\u05D4\u05D7\u05DC\u05D9\u05E3
    } \u05D0\u05EA \u05E7\u05D5\u05D1\u05E5 \u05D4\u05E9\u05DE\u05D9\u05E8\u05D4 \u05D4\u05D6\u05D4 \u05DE\u05D1\u05DC\u05D9 \u05DC\u05D2\u05E8\u05D5\u05DD \u05DC\u05D5 \u05DC\u05D4\u05EA\u05E0\u05D2\u05E9 \u05D4\u05D9\u05D0 \u05DC\u05D8\u05E2\u05D5\u05DF \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05EA\u05D5\u05DB\u05DF \u05D6\u05D4. \u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA \u05D1\u05DB\u05DC \u05D6\u05D0\u05EA?
save-download = \u05D4\u05D5\u05E8\u05D3\u05D4
save-replace = \u05D4\u05D7\u05DC\u05E4\u05D4
save-delete = \u05DE\u05D7\u05D9\u05E7\u05D4
save-backup-all = \u05D4\u05D5\u05E8\u05D3\u05EA \u05DB\u05DC \u05E7\u05D1\u05E6\u05D9 \u05D4\u05E9\u05DE\u05D9\u05E8\u05D4
`,"volume-controls.ftl":`volume-controls-mute = \u05D4\u05E9\u05EA\u05E7
volume-controls-unmute = \u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05E9\u05EA\u05E7\u05D4
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = .swf f\xE1jl let\xF6lt\xE9se
context-menu-copy-debug-info = Hibakeres\xE9si inform\xE1ci\xF3k m\xE1sol\xE1sa
context-menu-open-save-manager = Ment\xE9skezel\u0151 megnyit\xE1sa
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kieg\xE9sz\xEDt\u0151 ({ $version }) n\xE9vjegye
       *[other] A Ruffle ({ $version }) n\xE9vjegye
    }
context-menu-hide = Ezen men\xFC elrejt\xE9se
context-menu-exit-fullscreen = Kil\xE9p\xE9s a teljes k\xE9perny\u0151b\u0151l
context-menu-enter-fullscreen = V\xE1lt\xE1s teljes k\xE9perny\u0151re
context-menu-volume-controls = Hanger\u0151szab\xE1lyz\xF3
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba \xE1gyazott Flash tartalmat.
    A probl\xE9ma kiker\xFCl\xE9s\xE9hez megpr\xF3b\xE1lhatod megnyitni a f\xE1jlt egy k\xFCl\xF6n lapon.
panic-title = Valami baj t\xF6rt\xE9nt :(
more-info = Tov\xE1bbi inform\xE1ci\xF3
run-anyway = Futtat\xE1s m\xE9gis
continue = Folytat\xE1s
report-bug = Hiba jelent\xE9se
update-ruffle = Ruffle friss\xEDt\xE9se
ruffle-demo = Webes dem\xF3
ruffle-desktop = Asztali alkalmaz\xE1s
ruffle-wiki = Ruffle Wiki megnyit\xE1sa
enable-hardware-acceleration = \xDAgy t\u0171nik, a hardveres gyors\xEDt\xE1s ki van kapcsolva. B\xE1r a Ruffle m\u0171k\xF6dhet, nagyon lass\xFA lehet. Az al\xE1bbi hivatkoz\xE1st k\xF6vetve megtudhatod, hogyan enged\xE9lyezd a hardveres gyors\xEDt\xE1st:
enable-hardware-acceleration-link = GYIK - Chrome hardveres gyors\xEDt\xE1s
view-error-details = Hiba r\xE9szletei
open-in-new-tab = Megnyit\xE1s \xFAj lapon
click-to-unmute = Kattints a n\xE9m\xEDt\xE1s felold\xE1s\xE1hoz
clipboard-message-title = M\xE1sol\xE1s \xE9s be\xEDlleszt\xE9s a Ruffle-ben
clipboard-message-description =
    { $variant ->
       *[unsupported] A b\xF6ng\xE9sz\u0151d nem t\xE1mogatja a v\xE1g\xF3laphoz val\xF3 teljes hozz\xE1f\xE9r\xE9st,
        [access-denied] A v\xE1g\xF3laphoz val\xF3 hozz\xE1f\xE9r\xE9s el lett utas\xEDtva,
    } de mindig haszn\xE1lhatod ezeket a gyorsbillenty\u0171ket helyette:
clipboard-message-copy = { " " } m\xE1sol\xE1shoz
clipboard-message-cut = { " " } kiv\xE1g\xE1shoz
clipboard-message-paste = { " " } beilleszt\xE9shez
error-canvas-reload = \xDAjrat\xF6lt\xE9s a canvas megjelen\xEDt\u0151vel nem lehets\xE9ges, ha m\xE1r az van haszn\xE1latban.
error-file-protocol =
    \xDAgy t\u0171nik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem m\u0171k\xF6dik, mivel \xEDgy a b\xF6ng\xE9sz\u0151k biztons\xE1gi okokb\xF3l sz\xE1mos funkci\xF3 m\u0171k\xF6d\xE9s\xE9t letiltj\xE1k.
    Ehelyett azt aj\xE1nljuk hogy ind\xEDts egy helyi kiszolg\xE1l\xF3t, vagy haszn\xE1ld a webes dem\xF3t vagy az asztali alkalmaz\xE1st.
error-javascript-config =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt egy helytelen JavaScript-konfigur\xE1ci\xF3 miatt.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, ellen\u0151rizd a hiba r\xE9szleteit, hogy megtudd, melyik param\xE9ter a hib\xE1s.
    A Ruffle wikiben is tal\xE1lhatsz ehhez seg\xEDts\xE9get.
error-wasm-not-found =
    A Ruffle nem tudta bet\xF6lteni a sz\xFCks\xE9ges ".wasm" \xF6sszetev\u0151t.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk ellen\u0151rizd, hogy a f\xE1jl megfelel\u0151en lett-e felt\xF6ltve.
    Ha a probl\xE9ma tov\xE1bbra is fenn\xE1ll, el\u0151fordulhat, hogy a "publicPath" be\xE1ll\xEDt\xE1st kell haszn\xE1lnod: seg\xEDts\xE9g\xE9rt keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    Ez a webszerver a ".wasm" f\xE1jlokat nem a megfelel\u0151 MIME-t\xEDpussal szolg\xE1lja ki.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-invalid-swf =
    A Ruffle nem tudta \xE9rtelmezni a k\xE9rt f\xE1jlt.
    Ennek a legval\xF3sz\xEDn\u0171bb oka az, hogy a k\xE9rt f\xE1jl nem \xE9rv\xE9nyes SWF.
error-swf-fetch =
    A Ruffle nem tudta bet\xF6lteni a Flash SWF f\xE1jlt.
    A legval\xF3sz\xEDn\u0171bb ok az, hogy a f\xE1jl m\xE1r nem l\xE9tezik, \xEDgy a Ruffle sz\xE1m\xE1ra nincs mit bet\xF6lteni.
    Pr\xF3b\xE1ld meg felvenni a kapcsolatot a webhely rendszergazd\xE1j\xE1val seg\xEDts\xE9g\xE9rt.
error-swf-cors =
    A Ruffle nem tudta bet\xF6lteni a Flash SWF f\xE1jlt.
    A lek\xE9r\xE9shez val\xF3 hozz\xE1f\xE9r\xE9st val\xF3sz\xEDn\u0171leg letiltotta a CORS-h\xE1zirend.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-wasm-cors =
    A Ruffle nem tudta bet\xF6lteni a sz\xFCks\xE9ges ".wasm" \xF6sszetev\u0151t.
    A lek\xE9r\xE9shez val\xF3 hozz\xE1f\xE9r\xE9st val\xF3sz\xEDn\u0171leg letiltotta a CORS-h\xE1zirend.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-wasm-invalid =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    \xDAgy t\u0171nik, hogy ezen az oldalon hi\xE1nyoznak vagy hib\xE1sak a Ruffle futtat\xE1s\xE1hoz sz\xFCks\xE9ges f\xE1jlok.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-wasm-download =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    Ez gyakran mag\xE1t\xF3l megold\xF3dik, ez\xE9rt megpr\xF3b\xE1lhatod \xFAjrat\xF6lteni az oldalt.
    Ellenkez\u0151 esetben fordulj a webhely rendszergazd\xE1j\xE1hoz.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta bet\xF6lteni a sz\xFCks\xE9ges ".wasm" \xF6sszetev\u0151t.
    A probl\xE9ma megold\xE1s\xE1hoz nyisd meg a b\xF6ng\xE9sz\u0151 be\xE1ll\xEDt\xE1sait, kattints az \u201EAdatv\xE9delem, keres\xE9s \xE9s szolg\xE1ltat\xE1sok\u201D elemre, g\xF6rgess le, \xE9s kapcsold ki a \u201EFokozott biztons\xE1g a weben\u201D opci\xF3t.
    Ez lehet\u0151v\xE9 teszi a b\xF6ng\xE9sz\u0151 sz\xE1m\xE1ra, hogy bet\xF6ltse a sz\xFCks\xE9ges ".wasm" f\xE1jlokat.
    Ha a probl\xE9ma tov\xE1bbra is fenn\xE1ll, lehet, hogy m\xE1sik b\xF6ng\xE9sz\u0151t kell haszn\xE1lnod.
error-wasm-unsupported-browser =
    Az \xE1ltalad haszn\xE1lt b\xF6ng\xE9sz\u0151 nem t\xE1mogatja a Ruffle futtat\xE1s\xE1hoz sz\xFCks\xE9ges WebAssembly kieg\xE9sz\xEDt\xE9seket.
    K\xE9rlek, v\xE1lts egy t\xE1mogatott b\xF6ng\xE9sz\u0151re.
    A t\xE1mogatott b\xF6ng\xE9sz\u0151k list\xE1j\xE1t a Wikin tal\xE1lod.
error-javascript-conflict =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    \xDAgy t\u0171nik, ez az oldal olyan JavaScript-k\xF3dot haszn\xE1l, amely \xFCtk\xF6zik a Ruffle-lel.
    Ha a kiszolg\xE1l\xF3 rendszergazd\xE1ja vagy, k\xE9rj\xFCk, pr\xF3b\xE1ld meg a f\xE1jlt egy \xFCres oldalon bet\xF6lteni.
error-javascript-conflict-outdated = Megpr\xF3b\xE1lhatod tov\xE1bb\xE1 felt\xF6lteni a Ruffle egy \xFAjabb verzi\xF3j\xE1t is, amely megker\xFClheti a probl\xE9m\xE1t (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt az inicializ\xE1l\xE1s sor\xE1n.
    A kiszolg\xE1l\xF3 tartalombiztons\xE1gi h\xE1zirendje nem teszi lehet\u0151v\xE9 a sz\xFCks\xE9ges \u201E.wasm\u201D \xF6sszetev\u0151k futtat\xE1s\xE1t.
    Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, keresd fel a Ruffle wikit seg\xEDts\xE9g\xE9rt.
error-unknown =
    A Ruffle komoly probl\xE9m\xE1ba \xFCtk\xF6z\xF6tt, mik\xF6zben megpr\xF3b\xE1lta megjelen\xEDteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazd\xE1ja vagy, k\xE9rj\xFCk, pr\xF3b\xE1ld meg felt\xF6lteni a Ruffle egy \xFAjabb verzi\xF3j\xE1t (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megt\xF6rt\xE9nnie, ez\xE9rt nagyon h\xE1l\xE1sak lenn\xE9nk, ha jelezn\xE9d a hib\xE1t!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan t\xF6r\xF6lni akarod ezt a ment\xE9st?
save-reload-prompt =
    Ennek a ment\xE9snek az esetleges konfliktus n\xE9lk\xFCli { $action ->
        [delete] t\xF6rl\xE9s\xE9hez
       *[replace] cser\xE9j\xE9hez
    } \xFAjra kell t\xF6lteni a tartalmat. M\xE9gis szeretn\xE9d folytatni?
save-download = Let\xF6lt\xE9s
save-replace = Csere
save-delete = T\xF6rl\xE9s
save-backup-all = Az \xF6sszes f\xE1jl let\xF6lt\xE9se
`,"volume-controls.ftl":`volume-controls-mute = N\xE9m\xEDt\xE1s
volume-controls-unmute = N\xE9m\xEDt\xE1s felold\xE1sa
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh .swf
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:".
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-swf-fetch =
    Ruffle gagal memuat file SWF Flash.
    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat file SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls-mute = Bisukan
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica .swf
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri Gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non \xE8 stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
panic-title = Qualcosa \xE8 andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala Un Bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Applicazione Desktop
ruffle-wiki = Visualizza Ruffle Wiki
enable-hardware-acceleration = Sembra che l'accelerazione hardware sia disabilitata. Sebbene Ruffle possa funzionare, potrebbe essere molto lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo il link seguente:
view-error-details = Visualizza Dettagli Errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalit\xE0 di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro \xE8 in errore.
    Puoi anche consultare il wiki Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non \xE8 riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare il wiki Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ". asm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.
error-swf-fetch =
    Ruffle non \xE8 riuscito a caricare il file Flash SWF.
    La ragione pi\xF9 probabile \xE8 che il file non esiste pi\xF9, quindi non c'\xE8 nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non \xE8 riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente \xE8 stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non \xE8 riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente \xE8 stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo pu\xF2 spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, search, and services", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetter\xE0 al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che \xE8 in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione pi\xF9 recente di Ruffle che potrebbe aggirare il problema (l'attuale build \xE8 obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione pi\xF9 recente di Ruffle (la versione attuale \xE8 obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti \xE8 quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls-mute = Silenzia
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swf\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
context-menu-copy-debug-info = \u30C7\u30D0\u30C3\u30B0\u60C5\u5831\u3092\u30B3\u30D4\u30FC
context-menu-open-save-manager = \u30BB\u30FC\u30D6\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u3092\u958B\u304F
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle\u62E1\u5F35\u6A5F\u80FD\u306B\u3064\u3044\u3066 ({ $version })
       *[other] Ruffle\u306B\u3064\u3044\u3066 ({ $version })
    }
context-menu-hide = \u30E1\u30CB\u30E5\u30FC\u3092\u96A0\u3059
context-menu-exit-fullscreen = \u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u7D42\u4E86
context-menu-enter-fullscreen = \u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3059\u308B
context-menu-volume-controls = \u97F3\u91CF\u8ABF\u7BC0
`,"messages.ftl":`message-cant-embed =
    Ruffle\u306F\u3053\u306E\u30DA\u30FC\u30B8\u306B\u57CB\u3081\u8FBC\u307E\u308C\u305F Flash \u3092\u5B9F\u884C\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002
    \u5225\u306E\u30BF\u30D6\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u304F\u3053\u3068\u3067\u3001\u3053\u306E\u554F\u984C\u3092\u89E3\u6C7A\u3067\u304D\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
message-restored-from-bfcache =
    \u30D6\u30E9\u30A6\u30B6\u306F\u3001\u524D\u56DE\u306E\u30BB\u30C3\u30B7\u30E7\u30F3\u304B\u3089Flash\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5FA9\u5143\u3057\u307E\u3057\u305F\u3002
    \u6700\u521D\u304B\u3089\u958B\u59CB\u3059\u308B\u306B\u306F\u3001\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002
panic-title = \u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F :(
more-info = \u8A73\u7D30\u60C5\u5831
run-anyway = \u3068\u306B\u304B\u304F\u5B9F\u884C\u3059\u308B
continue = \u7D9A\u884C
report-bug = \u30D0\u30B0\u3092\u5831\u544A
update-ruffle = Ruffle\u3092\u66F4\u65B0
ruffle-demo = Web\u30C7\u30E2
ruffle-desktop = \u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA
ruffle-wiki = Ruffle Wiki\u3092\u95B2\u89A7
enable-hardware-acceleration = \u30CF\u30FC\u30C9\u30A6\u30A7\u30A2 \u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u3088\u3046\u3067\u3059\u3002Ruffle \u306F\u52D5\u4F5C\u3059\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u304C\u3001\u975E\u5E38\u306B\u9045\u304F\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2 \u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u4EE5\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
enable-hardware-acceleration-link = \u3088\u304F\u3042\u308B\u8CEA\u554F - Chrome\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2 \u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3
view-error-details = \u30A8\u30E9\u30FC\u306E\u8A73\u7D30\u3092\u8868\u793A
open-in-new-tab = \u65B0\u3057\u3044\u30BF\u30D6\u3067\u958B\u304F
click-to-unmute = \u30AF\u30EA\u30C3\u30AF\u3067\u30DF\u30E5\u30FC\u30C8\u3092\u89E3\u9664
clipboard-message-title = Ruffle\u3067\u306E\u30B3\u30D4\u30FC\u3068\u8CBC\u308A\u4ED8\u3051
clipboard-message-description =
    { $variant ->
       *[unsupported] \u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3078\u306E\u30D5\u30EB\u30A2\u30AF\u30BB\u30B9\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002
        [access-denied] \u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u62D2\u5426\u3055\u308C\u307E\u3057\u305F\u3002
    } \u4EE3\u308F\u308A\u306B\u3001\u4EE5\u4E0B\u306E\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u5229\u7528\u3067\u304D\u307E\u3059:
clipboard-message-copy = { " " } : \u30B3\u30D4\u30FC
clipboard-message-cut = { " " } : \u5207\u308A\u53D6\u308A
clipboard-message-paste = { " " } : \u8CBC\u308A\u4ED8\u3051
error-canvas-reload = canvas\u30EC\u30F3\u30C0\u30E9\u4F7F\u7528\u4E2D\u306E\u305F\u3081\u3001canvas\u30EC\u30F3\u30C0\u30E9\u306B\u3088\u308B\u518D\u8AAD\u307F\u8FBC\u307F\u306F\u3067\u304D\u307E\u305B\u3093\u3002
error-file-protocol =
    Ruffle\u3092"file:"\u30D7\u30ED\u30C8\u30B3\u30EB\u3067\u4F7F\u7528\u3057\u3066\u3044\u308B\u3088\u3046\u3067\u3059\u3002
    \u30D6\u30E9\u30A6\u30B6\u306F\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u4E0A\u306E\u7406\u7531\u304B\u3089\u591A\u304F\u306E\u6A5F\u80FD\u3092\u5236\u9650\u3057\u3066\u3044\u308B\u305F\u3081\u3001\u6B63\u3057\u304F\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002
    \u30ED\u30FC\u30AB\u30EB\u30B5\u30FC\u30D0\u30FC\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3059\u308B\u304B\u3001\u30A6\u30A7\u30D6\u30C7\u30E2\u307E\u305F\u306F\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u30A2\u30D7\u30EA\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002
error-javascript-config =
    JavaScript\u306E\u8A2D\u5B9A\u304C\u6B63\u3057\u304F\u306A\u3044\u305F\u3081\u3001Ruffle\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u8005\u306E\u65B9\u306F\u3001\u30A8\u30E9\u30FC\u306E\u8A73\u7D30\u304B\u3089\u3001\u3069\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u554F\u984C\u304C\u3042\u308B\u306E\u304B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002
    Ruffle\u306Ewiki\u3092\u53C2\u7167\u3059\u308B\u3053\u3068\u3067\u3001\u89E3\u6C7A\u65B9\u6CD5\u304C\u898B\u3064\u304B\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
error-wasm-not-found =
    Ruffle\u306F\u3001\u5FC5\u8981\u306A\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6B63\u3057\u304F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3092\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u554F\u984C\u304C\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u306F\u3001\u300CpublicPath\u300D\u306E\u8A2D\u5B9A\u304C\u5FC5\u8981\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-mime-type =
    Ruffle\u306E\u521D\u671F\u5316\u4E2D\u306B\u5927\u304D\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306EWeb\u30B5\u30FC\u30D0\u30FC\u306F\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u3092\u6B63\u3057\u3044MIME\u30BF\u30A4\u30D7\u3067\u63D0\u4F9B\u3057\u3066\u3044\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-invalid-swf =
    Ruffle \u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30FC\u30B9\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u6700\u3082\u8003\u3048\u3089\u308C\u308B\u539F\u56E0\u306F\u3001\u30D5\u30A1\u30A4\u30EB\u304C\u6709\u52B9\u306A SWF \u3067\u306A\u3044\u3053\u3068\u3067\u3059\u3002
error-swf-fetch =
    Ruffle\u304CFlash SWF\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u8AAD\u307F\u8FBC\u3080\u3079\u304D\u30D5\u30A1\u30A4\u30EB\u304C\u65E2\u306B\u5B58\u5728\u3057\u3066\u3044\u306A\u3044\u3053\u3068\u304C\u539F\u56E0\u3067\u3042\u308B\u53EF\u80FD\u6027\u304C\u9AD8\u3044\u3067\u3059\u3002
    Web\u30B5\u30A4\u30C8\u306E\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002
error-swf-cors =
    Ruffle\u306FSWF\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    CORS\u30DD\u30EA\u30B7\u30FC\u306E\u8A2D\u5B9A\u306B\u3088\u308A\u3001fetch\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002
    \u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u8005\u306E\u65B9\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-cors =
    Ruffle\u306B\u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    CORS\u30DD\u30EA\u30B7\u30FC\u306B\u3088\u3063\u3066fetch\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle wiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-invalid =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306E\u30DA\u30FC\u30B8\u306B\u306FRuffle\u3092\u5B9F\u884C\u3059\u308B\u305F\u3081\u306E\u30D5\u30A1\u30A4\u30EB\u304C\u5B58\u5728\u3057\u306A\u3044\u304B\u3001\u7121\u52B9\u306A\u30D5\u30A1\u30A4\u30EB\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-wasm-download =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306E\u554F\u984C\u306F\u81EA\u7136\u306B\u89E3\u6C7A\u3059\u308B\u5834\u5408\u304C\u3042\u308B\u305F\u3081\u3001\u30DA\u30FC\u30B8\u306E\u518D\u8AAD\u307F\u8FBC\u307F\u3092\u8A66\u3057\u3066\u304F\u3060\u3055\u3044\u3002
    \u305D\u308C\u3067\u3082\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u306F\u3001Web\u30B5\u30A4\u30C8\u306E\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002
error-wasm-disabled-on-edge =
    Ruffle\u306B\u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002
    \u554F\u984C\u89E3\u6C7A\u306E\u305F\u3081\u3001\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u8A2D\u5B9A\u753B\u9762\u304B\u3089\u3001\u300C\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u3001\u691C\u7D22\u3001\u30B5\u30FC\u30D3\u30B9\u300D\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3001\u4E0B\u306B\u30B9\u30AF\u30ED\u30FC\u30EB\u3057\u3066\u300CWeb\u4E0A\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u5F37\u5316\u3059\u308B\u300D\u3092\u30AA\u30D5\u306B\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002
    \u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30D5\u30A1\u30A4\u30EB\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u8A31\u53EF\u3055\u308C\u307E\u3059\u3002
    \u305D\u308C\u3067\u3082\u554F\u984C\u304C\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u3001\u5225\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
error-wasm-unsupported-browser =
    \u73FE\u5728\u4F7F\u7528\u4E2D\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u3001Ruffle\u306E\u52D5\u4F5C\u306B\u5FC5\u8981\u306AWebAssembly\u62E1\u5F35\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002
    \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D6\u30E9\u30A6\u30B6\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002
    \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u30D6\u30E9\u30A6\u30B6\u4E00\u89A7\u306F\u3001Wiki\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002
error-javascript-conflict =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306E\u30DA\u30FC\u30B8\u3067\u306FRuffle\u3068\u7AF6\u5408\u3059\u308BJavaScript\u30B3\u30FC\u30C9\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001\u7A7A\u767D\u306E\u30DA\u30FC\u30B8\u3067\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u3057\u76F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002
error-javascript-conflict-outdated = \u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u306ERuffle\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u3067\u3001\u3053\u306E\u554F\u984C\u3092\u56DE\u907F\u3067\u304D\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002(\u73FE\u5728\u306E\u30D3\u30EB\u30C9\u306F\u53E4\u3044\u7269\u3067\u3059:{ $buildDate })
error-csp-conflict =
    Ruffle\u306E\u521D\u671F\u5316\u6642\u306B\u91CD\u5927\u306A\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    \u3053\u306EWeb\u30B5\u30FC\u30D0\u30FC\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30DD\u30EA\u30B7\u30FC\u304C\u5B9F\u884C\u306B\u5FC5\u8981\u3068\u306A\u308B\u300C.wasm\u300D\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306E\u5B9F\u884C\u3092\u8A31\u53EF\u3057\u3066\u3044\u307E\u305B\u3093\u3002
    \u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u306F\u3001Ruffle\u306Ewiki\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002
error-unknown =
    Flash\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A\u3059\u308B\u969B\u306BRuffle\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002
    { $outdated ->
        [true] \u73FE\u5728\u4F7F\u7528\u3057\u3066\u3044\u308B\u30D3\u30EB\u30C9\u306F\u6700\u65B0\u3067\u306F\u306A\u3044\u305F\u3081\u3001\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u8005\u306E\u65B9\u306F\u3001\u6700\u65B0\u7248\u306ERuffle\u306B\u66F4\u65B0\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044(\u73FE\u5728\u5229\u7528\u4E2D\u306E\u30D3\u30EB\u30C9: { $buildDate })\u3002
       *[false] \u60F3\u5B9A\u5916\u306E\u554F\u984C\u306A\u306E\u3067\u3001\u30D0\u30B0\u3068\u3057\u3066\u5831\u544A\u3057\u3066\u3044\u305F\u3060\u3051\u308B\u3068\u5B09\u3057\u3044\u3067\u3059!
    }
`,"save-manager.ftl":`save-delete-prompt = \u3053\u306E\u30BB\u30FC\u30D6\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B?
save-reload-prompt =
    \u30BB\u30FC\u30D6\u30D5\u30A1\u30A4\u30EB\u3092\u7AF6\u5408\u306E\u53EF\u80FD\u6027\u306A\u304F { $action ->
        [delete] \u524A\u9664\u3059\u308B
       *[replace] \u7F6E\u304D\u63DB\u3048\u308B
    } \u305F\u3081\u306B\u3001\u3053\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002\u7D9A\u884C\u3057\u307E\u3059\u304B\uFF1F
save-download = \u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
save-replace = \u7F6E\u304D\u63DB\u3048
save-delete = \u524A\u9664
save-backup-all = \u3059\u3079\u3066\u306E\u30BB\u30FC\u30D6\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9
`,"volume-controls.ftl":`volume-controls-mute = \u30DF\u30E5\u30FC\u30C8
volume-controls-unmute = \u30DF\u30E5\u30FC\u30C8\u89E3\u9664
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = .swf \uB2E4\uC6B4\uB85C\uB4DC
context-menu-copy-debug-info = \uB514\uBC84\uADF8 \uC815\uBCF4 \uBCF5\uC0AC
context-menu-open-save-manager = \uC800\uC7A5 \uAD00\uB9AC\uC790 \uC5F4\uAE30
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle \uD655\uC7A5 \uD504\uB85C\uADF8\uB7A8 \uC815\uBCF4 ({ $version })
       *[other] Ruffle \uC815\uBCF4 ({ $version })
    }
context-menu-hide = \uC774 \uBA54\uB274 \uC228\uAE30\uAE30
context-menu-exit-fullscreen = \uC804\uCCB4\uD654\uBA74 \uB098\uAC00\uAE30
context-menu-enter-fullscreen = \uC804\uCCB4\uD654\uBA74\uC73C\uB85C \uC5F4\uAE30
context-menu-volume-controls = \uC74C\uB7C9 \uC870\uC808
`,"messages.ftl":`message-cant-embed = Ruffle\uC774 \uC774 \uD398\uC774\uC9C0\uC5D0 \uD3EC\uD568\uB41C \uD50C\uB798\uC2DC\uB97C \uC2E4\uD589\uD560 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4. \uBCC4\uB3C4\uC758 \uD0ED\uC5D0\uC11C \uD30C\uC77C\uC744 \uC5F4\uC5B4\uBD04\uC73C\uB85C\uC11C \uC774 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
message-restored-from-bfcache =
    \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC774\uC804 \uC138\uC158\uC5D0\uC11C \uD50C\uB798\uC2DC \uCF58\uD150\uCE20\uB97C \uBCF5\uC6D0\uD588\uC2B5\uB2C8\uB2E4.
    \uC0C8\uB85C \uC2DC\uC791\uD558\uB824\uBA74 \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C \uACE0\uCE68\uD558\uC138\uC694.
panic-title = \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4 :(
more-info = \uCD94\uAC00 \uC815\uBCF4
run-anyway = \uADF8\uB798\uB3C4 \uC2E4\uD589\uD558\uAE30
continue = \uACC4\uC18D\uD558\uAE30
report-bug = \uBC84\uADF8 \uC81C\uBCF4
update-ruffle = Ruffle \uC5C5\uB370\uC774\uD2B8
ruffle-demo = \uC6F9 \uB370\uBAA8
ruffle-desktop = \uB370\uC2A4\uD06C\uD1B1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158
ruffle-wiki = Ruffle \uC704\uD0A4 \uBCF4\uAE30
enable-hardware-acceleration = \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC774 \uBE44\uD65C\uC131\uD654\uB418\uC5B4 \uC788\uB294 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. Ruffle\uC740 \uACC4\uC18D \uC791\uB3D9\uD558\uC9C0\uB9CC \uB9E4\uC6B0 \uB290\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uB9C1\uD06C\uB97C \uCC38\uACE0\uD558\uC5EC \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC744 \uD65C\uC131\uD654\uD558\uB294 \uBC29\uBC95\uC744 \uCC3E\uC544\uBCF4\uC138\uC694:
enable-hardware-acceleration-link = FAQ - \uD06C\uB86C \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D
view-error-details = \uC624\uB958 \uC138\uBD80 \uC815\uBCF4 \uBCF4\uAE30
open-in-new-tab = \uC0C8 \uD0ED\uC5D0\uC11C \uC5F4\uAE30
click-to-unmute = \uD074\uB9AD\uD558\uC5EC \uC74C\uC18C\uAC70 \uD574\uC81C
clipboard-message-title = Ruffle\uC5D0\uC11C \uBCF5\uC0AC\uD558\uACE0 \uBD99\uC5EC\uB123\uAE30
clipboard-message-description =
    { $variant ->
       *[unsupported] \uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uD074\uB9BD\uBCF4\uB4DC \uC561\uC138\uC2A4\uB97C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4,
        [access-denied] \uD074\uB9BD\uBCF4\uB4DC \uC561\uC138\uC2A4\uAC00 \uAC70\uC808\uB418\uC5C8\uC2B5\uB2C8\uB2E4,
    } \uD558\uC9C0\uB9CC \uB2E4\uC74C \uB2E8\uCD95\uD0A4\uB97C \uB300\uC2E0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:
clipboard-message-copy = { " " } \uBCF5\uC0AC
clipboard-message-cut = { " " } \uC798\uB77C\uB0B4\uAE30
clipboard-message-paste = { " " } \uBD99\uC5EC\uB123\uAE30
error-canvas-reload = \uCE94\uBC84\uC2A4 \uB80C\uB354\uB7EC\uAC00 \uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC778 \uACBD\uC6B0 \uCE94\uBC84\uC2A4 \uB80C\uB354\uB7EC\uB85C \uB2E4\uC2DC \uB85C\uB4DC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.
error-file-protocol =
    Ruffle\uC744 "file:" \uD504\uB85C\uD1A0\uCF5C\uC5D0\uC11C \uC2E4\uD589\uD558\uACE0 \uC788\uB294 \uAC83\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4.
    \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC774 \uD504\uB85C\uD1A0\uCF5C\uC744 \uBCF4\uC548\uC0C1\uC758 \uC774\uC720\uB85C \uB9CE\uC740 \uAE30\uB2A5\uC744 \uC791\uB3D9\uD558\uC9C0 \uC54A\uAC8C \uCC28\uB2E8\uD558\uBBC0\uB85C \uC774 \uBC29\uBC95\uC740 \uC791\uB3D9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uB300\uC2E0, \uB85C\uCEEC \uC11C\uBC84\uB97C \uC9C1\uC811 \uC5F4\uC5B4\uC11C \uC124\uC815\uD558\uAC70\uB098 \uC6F9 \uB370\uBAA8 \uB610\uB294 \uB370\uC2A4\uD06C\uD1B1 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0AC\uC6A9\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.
error-javascript-config =
    \uC798\uBABB\uB41C \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC124\uC815\uC73C\uB85C \uC778\uD574 Ruffle\uC5D0\uC11C \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uC778 \uACBD\uC6B0, \uC624\uB958 \uC138\uBD80\uC0AC\uD56D\uC744 \uD655\uC778\uD558\uC5EC \uC5B4\uB5A4 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uC798\uBABB\uB418\uC5C8\uB294\uC9C0 \uC54C\uC544\uBCF4\uC138\uC694.
    \uB610\uB294 Ruffle \uC704\uD0A4\uB97C \uD1B5\uD574 \uB3C4\uC6C0\uC744 \uBC1B\uC544 \uBCFC \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-not-found =
    Ruffle\uC774 ".wasm" \uD544\uC218 \uD30C\uC77C \uAD6C\uC131\uC694\uC18C\uB97C \uB85C\uB4DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 \uD30C\uC77C\uC774 \uC62C\uBC14\uB974\uAC8C \uC5C5\uB85C\uB4DC\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.
    \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB41C\uB2E4\uBA74 "publicPath" \uC635\uC158\uC744 \uC0AC\uC6A9\uD574\uC57C \uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4: Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC73C\uC138\uC694.
error-wasm-mime-type =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uC6F9 \uC11C\uBC84\uB294 \uC62C\uBC14\uB978 MIME \uC720\uD615\uC758 ".wasm" \uD30C\uC77C\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uD1B5\uD574 \uB3C4\uC6C0\uC744 \uBC1B\uC73C\uC138\uC694.
error-invalid-swf =
    Ruffle\uC774 \uC694\uCCAD\uD55C \uD30C\uC77C\uC744 \uBD84\uC11D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    \uC694\uCCAD\uD55C \uD30C\uC77C\uC774 \uC720\uD6A8\uD55C SWF \uD30C\uC77C\uC774 \uC544\uB2D0 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4.
error-swf-fetch =
    Ruffle\uC774 \uD50C\uB798\uC2DC SWF \uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uB294 \uB370 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.
    \uC774\uB294 \uC8FC\uB85C \uD30C\uC77C\uC774 \uB354 \uC774\uC0C1 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC544 Ruffle\uC774 \uB85C\uB4DC\uD560 \uC218 \uC788\uB294 \uAC83\uC774 \uC5C6\uC744 \uAC00\uB2A5\uC131\uC774 \uB192\uC2B5\uB2C8\uB2E4.
    \uC6F9\uC0AC\uC774\uD2B8 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCF4\uC138\uC694.
error-swf-cors =
    Ruffle\uC774 \uD50C\uB798\uC2DC SWF \uD30C\uC77C\uC744 \uB85C\uB4DC\uD558\uB294 \uB370 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.
    CORS \uC815\uCC45\uC5D0 \uC758\uD574 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uAC00 \uCC28\uB2E8\uB418\uC5C8\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-cors =
    Ruffle\uC774 ".wasm" \uD544\uC218 \uD30C\uC77C \uAD6C\uC131\uC694\uC18C\uB97C \uB85C\uB4DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    CORS \uC815\uCC45\uC5D0 \uC758\uD574 \uB370\uC774\uD130 \uAC00\uC838\uC624\uAE30\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uAC00 \uCC28\uB2E8\uB418\uC5C8\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-invalid =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uD398\uC774\uC9C0\uC5D0 Ruffle\uC744 \uC2E4\uD589\uD558\uAE30 \uC704\uD55C \uD30C\uC77C\uC774 \uB204\uB77D\uB418\uC5C8\uAC70\uB098 \uC798\uBABB\uB41C \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-download =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uBB38\uC81C\uB294 \uB54C\uB54C\uB85C \uBC14\uB85C \uD574\uACB0\uB420 \uC218 \uC788\uC73C\uBBC0\uB85C \uD398\uC774\uC9C0\uB97C \uC0C8\uB85C\uACE0\uCE68\uD558\uC5EC \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uBCF4\uC138\uC694.
    \uADF8\uB798\uB3C4 \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB41C\uB2E4\uBA74, \uC6F9\uC0AC\uC774\uD2B8 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD574\uC8FC\uC138\uC694.
error-wasm-disabled-on-edge =
    Ruffle\uC774 ".wasm" \uD544\uC218 \uD30C\uC77C \uAD6C\uC131\uC694\uC18C\uB97C \uB85C\uB4DC\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.
    \uC774\uB97C \uD574\uACB0\uD558\uB824\uBA74 \uBE0C\uB77C\uC6B0\uC800 \uC124\uC815\uC5D0\uC11C "\uAC1C\uC778 \uC815\uBCF4, \uAC80\uC0C9 \uBC0F \uC11C\uBE44\uC2A4"\uB97C \uD074\uB9AD\uD55C \uD6C4, \uD558\uB2E8\uC73C\uB85C \uC2A4\uD06C\uB864\uD558\uC5EC "\uC6F9\uC5D0\uC11C \uBCF4\uC548 \uAC15\uD654" \uAE30\uB2A5\uC744 \uAEBC\uC57C \uD569\uB2C8\uB2E4.
    \uC774\uB294 \uD544\uC694\uD55C ".wasm" \uD30C\uC77C\uC744 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB85C\uB4DC\uD560 \uC218 \uC788\uB3C4\uB85D \uD5C8\uC6A9\uD569\uB2C8\uB2E4.
    \uC774 \uBB38\uC81C\uAC00 \uC9C0\uC18D\uB420 \uACBD\uC6B0 \uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC0AC\uC6A9\uD574\uC57C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-wasm-unsupported-browser =
    \uC0AC\uC6A9 \uC911\uC778 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C Ruffle\uC774 \uD544\uC694\uD55C \uC6F9 \uC5B4\uC148\uBE14\uB9AC \uD655\uC7A5\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uC9C0\uC6D0\uB418\uB294 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC804\uD658\uD558\uC138\uC694. \uC9C0\uC6D0\uB418\uB294 \uBE0C\uB77C\uC6B0\uC800 \uBAA9\uB85D\uC740 \uC704\uD0A4\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-javascript-conflict =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uCF54\uB4DC\uAC00 Ruffle\uACFC \uCDA9\uB3CC\uD558\uB294 \uAC83\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 \uBE48 \uD398\uC774\uC9C0\uC5D0\uC11C \uD30C\uC77C\uC744 \uB85C\uB4DC\uD574\uBCF4\uC138\uC694.
error-javascript-conflict-outdated = \uB610\uD55C Ruffle\uC758 \uCD5C\uC2E0 \uBC84\uC804\uC744 \uC5C5\uB85C\uB4DC\uD558\uB294 \uAC83\uC744 \uC2DC\uB3C4\uD558\uC5EC \uBB38\uC81C\uB97C \uC6B0\uD68C\uD574\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uD604\uC7AC \uBE4C\uB4DC\uAC00 \uC624\uB798\uB418\uC5C8\uC2B5\uB2C8\uB2E4: { $buildDate }).
error-csp-conflict =
    Ruffle\uC774 \uCD08\uAE30\uD654\uB97C \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    \uC774 \uC6F9 \uC11C\uBC84\uC758 CSP(Content Security Policy) \uC815\uCC45\uC774 ".wasm" \uD544\uC218 \uAD6C\uC131\uC694\uC18C\uB97C \uC2E4\uD589\uD558\uB294 \uAC83\uC744 \uD5C8\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.
    \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74 Ruffle \uC704\uD0A4\uB97C \uCC38\uC870\uD558\uC5EC \uB3C4\uC6C0\uC744 \uBC1B\uC544\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.
error-unknown =
    Ruffle\uC774 \uD50C\uB798\uC2DC \uCF58\uD150\uCE20\uB97C \uD45C\uC2DC\uD558\uB824\uACE0 \uC2DC\uB3C4\uD558\uB294 \uB3D9\uC548 \uC911\uB300\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.
    { $outdated ->
        [true] \uB9CC\uC57D \uB2F9\uC2E0\uC774 \uC11C\uBC84 \uAD00\uB9AC\uC790\uB77C\uBA74, Ruffle\uC758 \uCD5C\uC2E0 \uBC84\uC804\uC744 \uC5C5\uB85C\uB4DC\uD558\uC5EC \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uBCF4\uC138\uC694. (\uD604\uC7AC \uBE4C\uB4DC\uAC00 \uC624\uB798\uB418\uC5C8\uC2B5\uB2C8\uB2E4: { $buildDate }).
       *[false] \uC774\uB7F0 \uD604\uC0C1\uC774 \uBC1C\uC0DD\uD574\uC11C\uB294 \uC548\uB418\uBBC0\uB85C, \uBC84\uADF8\uB97C \uC81C\uBCF4\uD574\uC8FC\uC2E0\uB2E4\uBA74 \uAC10\uC0AC\uD558\uACA0\uC2B5\uB2C8\uB2E4!
    }
`,"save-manager.ftl":`save-delete-prompt = \uC815\uB9D0\uB85C \uC774 \uC138\uC774\uBE0C \uD30C\uC77C\uC744 \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
save-reload-prompt =
    \b\uC774 \uD30C\uC77C\uC744 \uC7A0\uC7AC\uC801\uC778 \uCDA9\uB3CC \uC5C6\uC774 { $action ->
        [delete] \uC0AD\uC81C
       *[replace] \uAD50\uCCB4
    }\uD558\uB824\uBA74 \uCF58\uD150\uCE20\uB97C \uB2E4\uC2DC \uB85C\uB4DC\uD574\uC57C \uD569\uB2C8\uB2E4. \uADF8\uB798\uB3C4 \uACC4\uC18D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?
save-download = \uB2E4\uC6B4\uB85C\uB4DC
save-replace = \uAD50\uCCB4
save-delete = \uC0AD\uC81C
save-backup-all = \uBAA8\uB4E0 \uC800\uC7A5 \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC
`,"volume-controls.ftl":`volume-controls-mute = \uC74C\uC18C\uAC70
volume-controls-unmute = \uC74C\uC18C\uAC70 \uD574\uC81C
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = .swf downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Volumeregelaars
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
message-restored-from-bfcache =
    Je browser heeft deze Flash-inhoud uit een eerdere sessie hersteld.
    Herlaad de pagina voor een frisse start.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
enable-hardware-acceleration = Het lijkt erop dat hardwareversnelling is uitgeschakeld. Ruffle zou hierdoor erg traag kunnen zijn. In de link hieronder wordt uitgelegd hoe je hardwareversnelling kunt inschakelen:
enable-hardware-acceleration-link = FAQ - Chrome Hardwareversnelling
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
clipboard-message-title = Kopi\xEBren en plakken in Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Je browser heeft geen ondersteuning voor volledige toegang tot het klembord,
        [access-denied] Toegang tot het klembord werd geweigerd,
    } maar je kunt altijd nog de volgende sneltoetsen gebruiken:
clipboard-message-copy = { " " } om te kopi\xEBren
clipboard-message-cut = { " " } om te knippen
clipboard-message-paste = { " " } om te plakken
error-canvas-reload = De canvas renderer kan niet herladen worden wanneer deze al in gebruik is.
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is ge\xFCpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-invalid-swf =
    Ruffle kon het gevraagde bestand niet verwerken.
    Waarschijnlijk is het geen geldig SWF bestand.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-wasm-unsupported-browser =
    De browser die je gebruikt ondersteunt de WebAssembly extensies die Ruffle nodig heeft niet.
    Gebruik alsjeblieft een ondersteunde browser.
    Je kunt een lijst aan ondersteunde browsers vinden op de Wiki.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potenti\xEBle problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls-mute = Dempen
volume-controls-unmute = Dempen opheffen
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otw\xF3rz menad\u017Cer zapis\xF3w
context-menu-about-ruffle =
    { $flavor ->
        [extension] O rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Opu\u015B\u0107 tryb pe\u0142noekranowy
context-menu-enter-fullscreen = Tryb pe\u0142noekranowy
context-menu-volume-controls = Sterowanie g\u0142o\u015Bno\u015Bci\u0105
`,"messages.ftl":`message-cant-embed =
    Ruffle nie by\u0142o w stanie uruchomi\u0107 zawarto\u015Bci Flash w tej stronie.
    Mo\u017Cesz spr\xF3bowa\u0107 otworzy\u0107 plik w nowej karcie, aby unikn\u0105\u0107 tego problemu.
message-restored-from-bfcache =
    Twoja przegl\u0105darka przywr\xF3ci\u0142a t\u0119 zawarto\u015B\u0107 Flash z poprzedniej sesji.
    Aby zacz\u0105\u0107 od nowa, od\u015Bwie\u017C stron\u0119.
panic-title = Co\u015B posz\u0142o nie tak :(
more-info = Wi\u0119cej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zg\u0142o\u015B b\u0142\u0105d
update-ruffle = Zaktualizuj Ruffle
ruffle-demo = Webowe demo
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
enable-hardware-acceleration = Wygl\u0105da na to, \u017Ce akceleracja grafiki jest wy\u0142\u0105czona. Chocia\u017C Ruffle mo\u017Ce dzia\u0142a\u0107, mo\u017Ce by\u0107 bardzo powolny. Mo\u017Cesz dowiedzie\u0107 si\u0119, jak w\u0142\u0105czy\u0107 akceleracj\u0119 grafiki, klikaj\u0105c poni\u017Cszy link:
enable-hardware-acceleration-link = FAQ \u2014 Akceleracja Grafiki Chrome
view-error-details = Zobacz szczeg\xF3\u0142y b\u0142\u0119du
open-in-new-tab = Otw\xF3rz w nowej karcie
click-to-unmute = Kliknij aby wy\u0142\u0105czy\u0107 wyciszenie
clipboard-message-title = Kopiowanie i wklejanie w Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Twoja przegl\u0105darka nie obs\u0142uguje pe\u0142nego dost\u0119pu do schowka,
        [access-denied] Odm\xF3wiono dost\u0119pu do schowka,
    } ale zawsze mo\u017Cesz stosowa\u0107 te skr\xF3ty klawiszowe:
clipboard-message-copy = { " " } w celu skopiowania
clipboard-message-cut = { " " } w celu wyci\u0119cia
clipboard-message-paste = { " " } w celu wklejenia
error-canvas-reload = Nie mo\u017Cna ponownie za\u0142adowa\u0107 renderera canvas, gdy jest ju\u017C on u\u017Cywany.
error-file-protocol =
    Wygl\u0105da na to, \u017Ce u\u017Cywasz Ruffle z protoko\u0142em "file:".
    To nie dzia\u0142a, poniewa\u017C przegl\u0105darka blokuje wiele funkcji przed dzia\u0142aniem ze wzgl\u0119d\xF3w bezpiecze\u0144stwa.
    Zamiast tego zach\u0119camy do konfiguracji lokalnego serwera lub u\u017Cycia webowego demo lub aplikacji desktopowej.
error-javascript-config =
    Ruffle napotka\u0142 powa\u017Cny problem z powodu nieprawid\u0142owej konfiguracji JavaScript.
    Je\u015Bli jeste\u015B administratorem serwera, prosimy o sprawdzenie szczeg\xF3\u0142\xF3w b\u0142\u0119du, aby dowiedzie\u0107 si\u0119, kt\xF3ry parametr jest b\u0142\u0119dny.
    Mo\u017Cesz r\xF3wnie\u017C zapozna\u0107 si\u0119 z wiki Ruffle, aby uzyska\u0107 pomoc.
error-wasm-not-found =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".
    Je\u015Bli jeste\u015B administratorem serwera, upewnij si\u0119, \u017Ce plik zosta\u0142 poprawnie przes\u0142any.
    Je\u015Bli problem b\u0119dzie si\u0119 powtarza\u0142, by\u0107 mo\u017Ce b\u0119dziesz musia\u0142 u\u017Cy\u0107 ustawienia "publicPath": zapoznaj si\u0119 z wiki Ruffle, aby uzyska\u0107 pomoc.
error-wasm-mime-type =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Ten serwer nie serwuje plik\xF3w ".wasm" z poprawnym typem MIME.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-invalid-swf =
    Ruffle nie mo\u017Ce przetworzy\u0107 \u017C\u0105danego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, \u017Ce plik ju\u017C nie istnieje, wi\u0119c Ruffle nie ma co za\u0142adowa\u0107.
    Spr\xF3buj skontaktowa\u0107 si\u0119 z administratorem witryny, aby uzyska\u0107 pomoc.
error-swf-cors =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 pliku Flash SWF.
    Pobieranie zosta\u0142o prawdopodobnie zablokowane przez polityk\u0119 CORS.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-wasm-cors =
    Nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".
    Pobieranie zosta\u0142o prawdopodobnie zablokowane przez polityk\u0119 CORS.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-wasm-invalid =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Wygl\u0105da na to, \u017Ce ta strona ma brakuj\u0105ce lub nieprawid\u0142owe pliki niezb\u0119dne do uruchomienia Ruffle.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-wasm-download =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Ten problem cz\u0119sto sam si\u0119 rozwi\u0105zuje, wi\u0119c mo\u017Cesz spr\xF3bowa\u0107 od\u015Bwie\u017Cy\u0107 stron\u0119.
    W przeciwnym razie skontaktuj si\u0119 z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie uda\u0142o si\u0119 za\u0142adowa\u0107 wymaganego komponentu pliku ".wasm".
    Aby to naprawi\u0107, spr\xF3buj otworzy\u0107 ustawienia przegl\u0105darki, klikaj\u0105c "Prywatno\u015B\u0107, wyszukiwanie i us\u0142ugi", przewijaj\u0105c w d\xF3\u0142 i wy\u0142\u0105czaj\u0105c "Zwi\u0119ksz bezpiecze\u0144stwo w sieci".
    Pozwoli to przegl\u0105darce za\u0142adowa\u0107 wymagane pliki ".wasm".
    Je\u015Bli problem b\u0119dzie si\u0119 powtarza\u0142, by\u0107 mo\u017Ce b\u0119dziesz musia\u0142 u\u017Cy\u0107 innej przegl\u0105darki.
error-wasm-unsupported-browser =
    Przegl\u0105darka, kt\xF3rej u\u017Cywasz, nie obs\u0142uguje rozszerze\u0144 WebAssembly wymaganych do dzia\u0142ania Ruffle.
    Prosz\u0119 u\u017Cy\u0107 obs\u0142ugiwanej przegl\u0105darki.
    List\u0119 obs\u0142ugiwanych przegl\u0105darek znajdziesz na Wiki.
error-javascript-conflict =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Wygl\u0105da na to, \u017Ce ta strona u\u017Cywa kodu JavaScript, kt\xF3ry koliduje z Ruffle.
    Je\u015Bli jeste\u015B administratorem serwera, zapraszamy Ci\u0119 do \u0142adowania pliku na pustej stronie.
error-javascript-conflict-outdated = Mo\u017Cesz r\xF3wnie\u017C spr\xF3bowa\u0107 przes\u0142a\u0107 nowsz\u0105 wersj\u0119 Ruffle, kt\xF3ra mo\u017Ce omin\u0105\u0107 problem (obecna wersja jest przestarza\u0142a: { $buildDate }).
error-csp-conflict =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by zainicjowania.
    Polityka bezpiecze\u0144stwa zawarto\u015Bci tego serwera (CSP) nie zezwala na komponent ".wasm" wymagany do uruchomienia.
    Je\u015Bli jeste\u015B administratorem serwera, zasi\u0119gnij pomocy na wiki Ruffle.
error-unknown =
    Ruffle napotka\u0142 powa\u017Cny problem podczas pr\xF3by wy\u015Bwietlenia tej zawarto\u015Bci Flash.
    { $outdated ->
        [true] Je\u015Bli jeste\u015B administratorem serwera, spr\xF3buj zaktualizowa\u0107 Ruffle (obecna wersja jest przestarza\u0142a: { $buildDate }).
       *[false] To nie powinno si\u0119 wydarzy\u0107, wi\u0119c byliby\u015Bmy wdzi\u0119czni, gdyby\u015B zg\u0142osi\u0142 b\u0142\u0105d!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasowa\u0107 ten plik zapisu?
save-reload-prompt =
    Jedyn\u0105 opcj\u0105, aby { $action ->
        [delete] usun\u0105\u0107
       *[replace] zamieni\u0107
    } ten plik zapisu bez potencjalnych konflikt\xF3w jest prze\u0142adowanie zawarto\u015Bci. Czy chcesz kontynuowa\u0107?
save-download = Pobierz
save-replace = Zamie\u0144
save-delete = Usu\u0144
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls-mute = Wycisz
volume-controls-unmute = Wy\u0142\u0105cz wyciszenie
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
context-menu-copy-debug-info = Copiar informa\xE7\xE3o de depura\xE7\xE3o
context-menu-open-save-manager = Abrir o Gerenciador de Salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extens\xE3o do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
context-menu-volume-controls = Controles de volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n\xE3o conseguiu executar o Flash incorporado nesta p\xE1gina.
    Voc\xEA pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
message-restored-from-bfcache =
    Seu navegador restaurou este conte\xFAdo Flash de uma sess\xE3o anterior.
    Para come\xE7ar do zero, recarregue a p\xE1gina.
panic-title = Algo deu errado :(
more-info = Mais informa\xE7\xE3o
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar Bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de Desktop
ruffle-wiki = Ver Wiki do Ruffle
enable-hardware-acceleration = Parece que a acelera\xE7\xE3o de hardware est\xE1 desabilitada. Embora o Ruffle possa funcionar, ele pode ser muito lento. Voc\xEA pode descobrir como habilitar a acelera\xE7\xE3o de hardware seguindo o link abaixo:
enable-hardware-acceleration-link = FAQ - Acelera\xE7\xE3o de hardware do Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiando e colando no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Seu navegador n\xE3o suporta acesso total \xE0 \xE1rea de transfer\xEAncia,
        [access-denied] O acesso \xE0 \xE1rea de transfer\xEAncia foi negado,
    } mas voc\xEA sempre pode usar estes atalhos:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para recortar
clipboard-message-paste = { " " } para colar
error-canvas-reload = N\xE3o \xE9 poss\xEDvel recarregar com o renderizador canvas enquanto ele j\xE1 est\xE1 em uso.
error-file-protocol =
    Parece que voc\xEA est\xE1 executando o Ruffle no protocolo "file:".
    Isto n\xE3o funciona como navegadores bloqueiam muitos recursos de funcionar por raz\xF5es de seguran\xE7a.
    Ao inv\xE9s disso, convidamos voc\xEA a configurar um servidor local ou a usar a demonstra\xE7\xE3o da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configura\xE7\xE3o incorreta do JavaScript.
    Se voc\xEA for o administrador do servidor, convidamos voc\xEA a verificar os detalhes do erro para descobrir qual par\xE2metro est\xE1 com falha.
    Voc\xEA tamb\xE9m pode consultar o wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xE1rio.
    Se voc\xEA \xE9 o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, voc\xEA pode precisar usar a configura\xE7\xE3o "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web n\xE3o est\xE1 servindo ".wasm" arquivos com o tipo MIME correto.
    Se voc\xEA \xE9 o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle n\xE3o pode analisar o arquivo solicitado.
    O motivo prov\xE1vel \xE9 que o arquivo solicitado n\xE3o seja um SWF v\xE1lido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A raz\xE3o prov\xE1vel \xE9 que o arquivo n\xE3o existe mais, ent\xE3o n\xE3o h\xE1 nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    O acesso para fetch provavelmente foi bloqueado pela pol\xEDtica CORS.
    Se voc\xEA for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-cors =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xE1rio.
    O acesso para fetch foi provavelmente bloqueado pela pol\xEDtica CORS.
    Se voc\xEA \xE9 o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta p\xE1gina tem arquivos ausentes ou inv\xE1lidos para executar o Ruffle.
    Se voc\xEA for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, ent\xE3o voc\xEA pode tentar recarregar a p\xE1gina.
    Caso contr\xE1rio, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necess\xE1rio.
    Para corrigir isso, tente abrir configura\xE7\xF5es do seu navegador, clicando em "Privacidade, pesquisa e servi\xE7os", rolando para baixo e desativando "Melhore sua seguran\xE7a na web".
    Isso permitir\xE1 que seu navegador carregue os arquivos ".wasm" necess\xE1rios.
    Se o problema persistir, talvez seja necess\xE1rio usar um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que voc\xEA est\xE1 usando n\xE3o suporta as extens\xF5es WebAssembly necess\xE1rias para o Ruffle.
    Por favor, utilize um navegador compat\xEDvel.
    Voc\xEA pode encontrar uma lista de navegadores suportados no wiki.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta p\xE1gina usa c\xF3digo JavaScript que entra em conflito com o Ruffle.
    Se voc\xEA for o administrador do servidor, convidamos voc\xEA a tentar carregar o arquivo em uma p\xE1gina em branco.
error-javascript-conflict-outdated = Voc\xEA tamb\xE9m pode tentar fazer o upload de uma vers\xE3o mais recente do Ruffle que pode contornar o problema (a compila\xE7\xE3o atual est\xE1 desatualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    A pol\xEDtica de seguran\xE7a de conte\xFAdo deste servidor da web n\xE3o permite a execu\xE7\xE3o do componente ".wasm" necess\xE1rio.
    Se voc\xEA for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conte\xFAdo em Flash.
    { $outdated ->
        [true] Se voc\xEA \xE9 o administrador do servidor, por favor tente fazer o upload de uma vers\xE3o mais recente do Ruffle (a compila\xE7\xE3o atual est\xE1 desatualizada: { $buildDate }).
       *[false] Isso n\xE3o deveria acontecer, ent\xE3o apreciar\xEDamos muito se voc\xEA pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A \xFAnica maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito \xE9 recarregar este conte\xFAdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar som
`},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informa\xE7\xF5es de depura\xE7\xE3o
context-menu-open-save-manager = Abrir Gestor de Grava\xE7\xF5es
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extens\xE3o do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar Ecr\xE3 Inteiro
context-menu-enter-fullscreen = Abrir Ecr\xE3 Inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle n\xE3o conseguiu abrir o Flash integrado nesta p\xE1gina.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
message-restored-from-bfcache =
    O seu navegador restaurou este conte\xFAdo Flash de uma sess\xE3o anterior.
    Para come\xE7ar do zero, recarregue a p\xE1gina.
panic-title = Algo correu mal :(
more-info = Mais informa\xE7\xF5es
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstra\xE7\xE3o web
ruffle-desktop = Aplica\xE7\xE3o para computador
ruffle-wiki = Ver a wiki do Ruffle
enable-hardware-acceleration = Parece que a acelera\xE7\xE3o de hardware est\xE1 desativada. Mesmo que o Ruffle funcione, pode estar demasiado lento. Descubra como ativar a acelera\xE7\xE3o de hardware seguindo este link:
enable-hardware-acceleration-link = Perguntas Frequentes - Acelera\xE7\xE3o de Hardware no Chrome
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
clipboard-message-title = Copiar e colar no Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] O seu navegador n\xE3o suporta acesso total \xE0 \xE1rea de transfer\xEAncia,
        [access-denied] O acesso \xE0 \xE1rea de transfer\xEAncia foi negado,
    } mas pode sempre usar estes atalhos em alternativa:
clipboard-message-copy = { " " } para copiar
clipboard-message-cut = { " " } para cortar
clipboard-message-paste = { " " } para colar
error-canvas-reload = N\xE3o \xE9 poss\xEDvel recarregar com o renderizador canvas quando este j\xE1 est\xE1 em uso.
error-file-protocol =
    Parece que executou o Ruffle no protocolo "file:".
    Isto n\xE3o funciona porque os navegadores bloqueiam muitas funcionalidades por seguran\xE7a.
    Em vez disto, experimente configurar um servidor local, ou ent\xE3o a usar a demonstra\xE7\xE3o web ou a aplica\xE7\xE3o para computador.
error-javascript-config =
    O Ruffle encontrou um problema grave devido a uma configura\xE7\xE3o de JavaScript incorreta.
    Se \xE9 o administrador do servidor, experimente verificar os detalhes do erro para identificar o par\xE2metro em falha.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xE1rio.
    Se \xE9 o administrador do servidor, certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, talvez queira usar a configura\xE7\xE3o "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Este servidor web n\xE3o est\xE1 a servir ficheiros \u201C.wasm\u201D com o tipo MIME correto.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-invalid-swf =
    O Ruffle n\xE3o consegue analisar o ficheiro solicitado.
    O mais prov\xE1vel \xE9 que o ficheiro solicitado n\xE3o seja um SWF v\xE1lido.
error-swf-fetch =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    O mais prov\xE1vel \xE9 que o ficheiro j\xE1 n\xE3o exista, da\xED n\xE3o haver nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela pol\xEDtica CORS.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xE1rio.
    Obter o ficheiro (fetch) foi provavelmente bloqueado pela pol\xEDtica CORS.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta p\xE1gina tem ficheiros inv\xE1lidos ou em falta para executar o Ruffle.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Isto costuma resolver-se sozinho, por isso experimente recarregar a p\xE1gina.
    Se n\xE3o acontecer, contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necess\xE1rio.
    Tente corrigir isto nas defini\xE7\xF5es do navegador; clique em "Privacidade, pesquisa e servi\xE7os", deslize para baixo e desative "Melhore a sua seguran\xE7a na Web".
    Isto permitir\xE1 ao navegador carregar os ficheiros ".wasm" necess\xE1rios.
    Se o problema persistir, talvez precise de um navegador diferente.
error-wasm-unsupported-browser =
    O navegador que usa n\xE3o suporta as extens\xF5es WebAssembly de que o Ruffle necessita para executar.
    Deve mudar para um navegador suportado.
    Pode encontrar uma lista de navegadores suportados na Wiki.
error-javascript-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    Parece que esta p\xE1gina usa c\xF3digo JavaScript que entra em conflito com o Ruffle.
    Se \xE9 o administrador do servidor, experimente carregar o ficheiro numa p\xE1gina em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma vers\xE3o mais recente do Ruffle que talvez contorne o problema (a compila\xE7\xE3o atual est\xE1 desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema grave ao tentar inicializar.
    A Pol\xEDtica de Seguran\xE7a de Conte\xFAdos deste servidor web n\xE3o permite executar o componente ".wasm" necess\xE1rio.
    Se \xE9 o administrador do servidor, consulte a wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema grave ao tentar apresentar este conte\xFAdo Flash.
    { $outdated ->
        [true] Se \xE9 o administrador do servidor, tente carregar uma vers\xE3o mais recente do Ruffle (a vers\xE3o atual est\xE1 desatualizada: { $buildDate }).
       *[false] N\xE3o era suposto ter acontecido, por isso agradec\xEDamos imenso se reportasse a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer eliminar esta grava\xE7\xE3o?
save-reload-prompt =
    A \xFAnica forma de { $action ->
        [delete] eliminar
       *[replace] substituir
    } esta grava\xE7\xE3o sem risco de conflito \xE9 recarregando este conte\xFAdo. Deseja continuar na mesma?
save-download = Descarregar
save-replace = Substituir
save-delete = Eliminar
save-backup-all = Descarregar todas as grava\xE7\xF5es
`,"volume-controls.ftl":`volume-controls-mute = Silenciar
volume-controls-unmute = Ativar o som
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarc\u0103 .swf
context-menu-copy-debug-info = Copiaz\u0103 informa\u021Biile de depanare
context-menu-open-save-manager = Deschide managerul de salv\u0103ri
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ie\u0219i din ecranul complet
context-menu-enter-fullscreen = Intr\u0103 \xEEn ecran complet
context-menu-volume-controls = Comenzi pentru volum
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut s\u0103 ruleze Flash \xEEncorporat \xEEn aceast\u0103 pagin\u0103.
    Po\u021Bi \xEEncerca s\u0103 deschizi fi\u0219ierul \xEEntr-o fil\u0103 separat\u0103, pentru a evita aceast\u0103 problem\u0103.
message-restored-from-bfcache =
    Browserul dvs. a restaurat acest con\u021Binut Flash dintr-o sesiune anterioar\u0103.
    Pentru a \xEEncepe de la zero, re\xEEnc\u0103rca\u021Bi pagina.
panic-title = Ceva a mers prost :(
more-info = Mai multe informa\u021Bii
run-anyway = Ruleaz\u0103 oricum
continue = Continu\u0103
report-bug = Raporteaz\u0103 un bug
update-ruffle = Actualizeaz\u0103 Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplica\u021Bie desktop
ruffle-wiki = Vezi wikiul Ruffle
enable-hardware-acceleration = Se pare c\u0103 accelerarea hardware este dezactivat\u0103. De\u0219i Ruffle ar putea func\u021Biona, va fi foarte lent. Pute\u021Bi afla cum s\u0103 activa\u021Bi accelerarea hardware acces\xE2nd linkul de mai jos:
enable-hardware-acceleration-link = \xCEntreb\u0103ri frecvente - Accelerarea hardware Chrome
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide \xEEntr-o fil\u0103 nou\u0103
click-to-unmute = D\u0103 click pentru a dezmu\u021Bi
clipboard-message-title = Copierea \u0219i lipirea \xEEn Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Browserul dvs. nu accept\u0103 accesul complet c\u0103tre clipboard,
        [access-denied] Accesul la clipboard a fost refuzat,
    } dar pute\u021Bi oric\xE2nd s\u0103 utiliza\u021Bi aceste scurt\u0103turi:
clipboard-message-copy = { " " } pentru copiere
clipboard-message-cut = { " " } pentru decupare
clipboard-message-paste = { " " } pentru lipire
error-canvas-reload = Nu se poate re\xEEnc\u0103rca utiliz\xE2nd rendererul canvas atunci c\xE2nd acesta este deja folosit.
error-file-protocol =
    Se pare c\u0103 rulezi Ruffle pe protocolul \u201Efile:\u201D.
    Acesta nu func\u021Bioneaz\u0103, deoarece browserele blocheaz\u0103 func\u021Bionarea multor func\u021Bii din motive de securitate.
    \xCEn schimb, te invit\u0103m s\u0103 configurezi un server local sau s\u0103 folose\u0219ti fie demoul web, fie aplica\u021Bia desktop.
error-javascript-config =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 din cauza unei configur\u0103ri incorecte a JavaScript.
    Dac\u0103 e\u0219ti administratorul serverului, te invit\u0103m s\u0103 verifici detaliile erorii pentru a afla care parametru este defect.
    De asemenea, po\u021Bi consulta wikiul Ruffle pentru ajutor.
error-wasm-not-found =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea componentei de fi\u0219ier \u201E.wasm\u201D.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 te asiguri c\u0103 fi\u0219ierul a fost \xEEnc\u0103rcat corect.
    Dac\u0103 problema persist\u0103, poate fi necesar s\u0103 folose\u0219ti setarea \u201EpublicPath\u201D: te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-mime-type =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Acest server web nu serve\u0219te fi\u0219iere \u201E.wasm\u201D cu tipul MIME corect.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-invalid-swf =
    Ruffle nu poate analiza fi\u0219ierul solicitat.
    Cel mai probabil motiv este c\u0103 fi\u0219ierul solicitat nu este un SWF valid.
error-swf-fetch =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea fi\u0219ierului SWF.
    Motivul cel mai probabil este c\u0103 fi\u0219ierul nu mai exist\u0103, deci Ruffle nu mai are ce s\u0103 \xEEncarce.
    \xCEncearc\u0103 s\u0103 contactezi administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea fi\u0219ierului SWF.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-cors =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea componentei de fi\u0219ier \u201E.wasm\u201D.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-invalid =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Se pare c\u0103 aceast\u0103 pagin\u0103 are fi\u0219iere lips\u0103 sau nevalide pentru a rula Ruffle.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-wasm-download =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 ini\u021Bializeze.
    Acest lucru se poate rezolva adesea de la sine, a\u0219a c\u0103 po\u021Bi \xEEncerca s\u0103 re\xEEncarci pagina.
    \xCEn caz contrar, te rug\u0103m s\u0103 contactezi administratorul site-ului web.
error-wasm-disabled-on-edge =
    Ruffle a e\u0219uat la \xEEnc\u0103rcarea componentei de fi\u0219ier \u201E.wasm\u201D.
    Pentru a remedia acest lucru, \xEEncearc\u0103 s\u0103 deschizi set\u0103rile browserului, s\u0103 faci clic pe \u201EConfiden\u021Bialitate, c\u0103utare \u0219i servicii\u201D, s\u0103 derulezi \xEEn jos \u0219i s\u0103 dezactivezi \u201E\xCEmbun\u0103t\u0103\u021Bi\u021Bi-v\u0103 securitatea pe web\u201D.
    Acest lucru va permite browserului s\u0103 \xEEncarce fi\u0219ierele \u201E.wasm\u201D necesare.
    Dac\u0103 problema persist\u0103, este posibil s\u0103 trebuiasc\u0103 s\u0103 folose\u0219ti un alt browser.
error-wasm-unsupported-browser =
    Browserul pe care \xEEl utiliza\u021Bi nu suport\u0103 extensiile WebAssembly pe care Ruffle le solicit\u0103 pentru a rula.
    V\u0103 rug\u0103m s\u0103 folosi\u021Bi un browser compatibil.
    Pute\u021Bi g\u0103si o list\u0103 de browsere compatibile pe Wiki.
error-javascript-conflict =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Se pare c\u0103 aceast\u0103 pagin\u0103 folose\u0219te cod JavaScript care intr\u0103 \xEEn conflict cu Ruffle.
    Dac\u0103 e\u0219ti administratorul serverului, te invit\u0103m s\u0103 \xEEncerci \xEEnc\u0103rcarea fi\u0219ierului pe o pagin\u0103 goal\u0103.
error-javascript-conflict-outdated = De asemenea, po\u021Bi \xEEncerca s\u0103 \xEEncarci o versiune mai recent\u0103 de Ruffle care ar putea ocoli problema (versiunea actual\u0103 este \xEEnvechit\u0103: { $buildDate }).
error-csp-conflict =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 se ini\u021Bializeze.
    Politica de securitate a con\u021Binutului a acestui server web nu permite rularea componentei \u201E.wasm\u201D necesare.
    Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 consul\u021Bi wikiul Ruffle pentru ajutor.
error-unknown =
    Ruffle a \xEEnt\xE2mpinat o problem\u0103 major\u0103 \xEEn timp ce \xEEncerca s\u0103 afi\u0219eze acest con\u021Binut Flash.
    { $outdated ->
        [true] Dac\u0103 e\u0219ti administratorul serverului, te rug\u0103m s\u0103 \xEEncerci s\u0103 \xEEncarci o versiune mai recent\u0103 de Ruffle (versiunea actual\u0103 este \xEEnvechit\u0103: { $buildDate }).
       *[false] Acest lucru nu ar trebui s\u0103 se \xEEnt\xE2mple, a\u0219a c\u0103 am aprecia foarte mult dac\u0103 ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei s\u0103 \u0219tergi acest fi\u0219ier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] \u0219terge
       *[replace] \xEEnlocui
    } acest fi\u0219ier de salvare f\u0103r\u0103 un conflict poten\u021Bial este de a re\xEEnc\u0103rca acest con\u021Binut. Dore\u0219ti s\u0103 continui oricum?
save-download = Descarc\u0103
save-replace = \xCEnlocuie\u0219te
save-delete = \u0218terge
save-backup-all = Descarc\u0103 toate fi\u0219ierele de salvare
`,"volume-controls.ftl":`volume-controls-mute = Mut
volume-controls-unmute = Activare sunet
`},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = \u0421\u043A\u0430\u0447\u0430\u0442\u044C .swf
context-menu-copy-debug-info = \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E
context-menu-open-save-manager = \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0439
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u041E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0438 Ruffle ({ $version })
       *[other] \u041E Ruffle ({ $version })
    }
context-menu-hide = \u0421\u043A\u0440\u044B\u0442\u044C \u044D\u0442\u043E \u043C\u0435\u043D\u044E
context-menu-exit-fullscreen = \u041E\u043A\u043E\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C
context-menu-enter-fullscreen = \u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C
context-menu-volume-controls = \u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C
`,"messages.ftl":`message-cant-embed =
    Ruffle \u043D\u0435 \u0441\u043C\u043E\u0433 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C Flash, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.
    \u0427\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0439\u0442\u0438 \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0444\u0430\u0439\u043B \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435.
message-restored-from-bfcache =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B \u044D\u0442\u043E\u0442 Flash-\u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438.
    \u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E, \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.
panic-title = \u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A :(
more-info = \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435
run-anyway = \u0412\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C
continue = \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C
report-bug = \u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435
update-ruffle = \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C Ruffle
ruffle-demo = \u0412\u0435\u0431-\u0434\u0435\u043C\u043E
ruffle-desktop = \u041D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435
ruffle-wiki = \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0438\u043A\u0438 Ruffle
enable-hardware-acceleration = \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E. \u0425\u043E\u0442\u044F Ruffle \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C, \u043D\u043E \u043E\u043D \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0447\u0435\u043D\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u043C. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C, \u043A\u0430\u043A \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435, \u043F\u0435\u0440\u0435\u0439\u0434\u044F \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0438\u0436\u0435:
enable-hardware-acceleration-link = FAQ - \u0410\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 Chrome
view-error-details = \u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435
open-in-new-tab = \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435
click-to-unmute = \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A
clipboard-message-title = \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u043A\u0430 \u0432 Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0443\u0444\u0435\u0440\u0443 \u043E\u0431\u043C\u0435\u043D\u0430.
        [access-denied]  \u0414\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u0443\u0444\u0435\u0440\u0443 \u043E\u0431\u043C\u0435\u043D\u0430 \u0431\u044B\u043B \u043E\u0442\u043A\u043B\u043E\u043D\u0451\u043D.
    } \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448 \u0434\u043B\u044F \u0432\u044B\u0440\u0435\u0437\u0430\u043D\u0438\u044F, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0432\u0441\u0442\u0430\u0432\u043A\u0438:
clipboard-message-copy = { " " } \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C
clipboard-message-cut = { " " } \u0432\u044B\u0440\u0435\u0437\u0430\u0442\u044C
clipboard-message-paste = { " " } \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C
error-canvas-reload = \u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440\u043E\u043C canvas, \u043A\u043E\u0433\u0434\u0430 \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440 canvas \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F.
error-file-protocol =
    \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u0432\u044B \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0435 Ruffle \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 "file:".
    \u042D\u0442\u043E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044B \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u043C\u043D\u043E\u0433\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u043F\u043E \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F\u043C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438.
    \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432\u0435\u0431-\u0434\u0435\u043C\u043E \u0438\u043B\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440.
error-javascript-config =
    \u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437-\u0437\u0430 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 JavaScript.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u044F\u0441\u043D\u0438\u0442\u044C, \u043A\u0430\u043A\u043E\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0434\u0430\u043B \u0441\u0431\u043E\u0439.
    \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-not-found =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0444\u0430\u0439\u043B\u0430 ".wasm".
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0444\u0430\u0439\u043B \u0431\u044B\u043B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.
    \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043D\u0435 \u0443\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F, \u0432\u0430\u043C \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 "publicPath": \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-mime-type =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u042D\u0442\u043E\u0442 \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0444\u0430\u0439\u043B\u044B ".wasm" \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u043C \u0442\u0438\u043F\u043E\u043C MIME.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-invalid-swf =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0444\u0430\u0439\u043B.
    \u0412\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0434\u0430\u043D\u043D\u044B\u0439 SWF \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0451\u043D \u0438\u043B\u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u0430\u043A\u043E\u0432\u044B\u043C.
error-swf-fetch =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C SWF-\u0444\u0430\u0439\u043B Flash.
    \u0412\u0435\u0440\u043E\u044F\u0442\u043D\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0444\u0430\u0439\u043B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 Ruffle \u043D\u0435\u0447\u0435\u0433\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C.
    \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043C\u043E\u0449\u0438.
error-swf-cors =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C SWF-\u0444\u0430\u0439\u043B Flash.
    \u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0444\u0430\u0439\u043B\u0443 \u0431\u044B\u043B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 CORS.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-cors =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0444\u0430\u0439\u043B\u0430 ".wasm".
    \u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0444\u0430\u0439\u043B\u0443 \u0431\u044B\u043B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 CORS.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-invalid =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u043D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0444\u0430\u0439\u043B\u044B \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 Ruffle \u0438\u043B\u0438 \u043E\u043D\u0438 \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-wasm-download =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u044D\u0442\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0443\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u0430 \u0441\u043E\u0431\u043E\u044E, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.
    \u0415\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442 \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0430\u0439\u0442\u0430.
error-wasm-disabled-on-edge =
    Ruffle \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0444\u0430\u0439\u043B\u0430 ".wasm".
    \u0427\u0442\u043E\u0431\u044B \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u0443 \u043E\u0448\u0438\u0431\u043A\u0443, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 WASM-\u0444\u0430\u0439\u043B\u044B.
    \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C, \u0432\u0430\u043C \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.
error-wasm-unsupported-browser =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u044F WebAssembly, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 Ruffle.
    \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.
    \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u0432 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u0432 \u0412\u0438\u043A\u0438.
error-javascript-conflict =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u044D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0443\u044E\u0449\u0438\u0439 \u0441 Ruffle \u043A\u043E\u0434 JavaScript.
    \u0415\u0441\u043B\u0438 \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u044B \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u0430\u043C \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043F\u0443\u0441\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435.
error-javascript-conflict-outdated = \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E Ruffle, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043E\u0439\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 (\u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430: { $buildDate }).
error-csp-conflict =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438.
    \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0433\u043E \u044D\u0442\u043E\u0433\u043E \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0442\u0440\u0435\u0431\u0443\u0435\u043C\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 ".wasm".
    \u0415\u0441\u043B\u0438 \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A \u0432\u0438\u043A\u0438 Ruffle.
error-unknown =
    Ruffle \u0441\u0442\u043E\u043B\u043A\u043D\u0443\u043B\u0441\u044F \u0441 \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u0439 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u044D\u0442\u043E\u0442 Flash-\u043A\u043E\u043D\u0442\u0435\u043D\u0442.
    { $outdated ->
        [true] \u0415\u0441\u043B\u0438 \u0432\u044B \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E Ruffle (\u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430: { $buildDate }).
       *[false] \u042D\u0442\u043E\u0433\u043E \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442\u044C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u0431\u0443\u0434\u0435\u043C \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u0438\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u044B, \u0435\u0441\u043B\u0438 \u0432\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u043D\u0430\u043C \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435!
    }
`,"save-manager.ftl":`save-delete-prompt = \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F?
save-reload-prompt =
    \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 { $action ->
        [delete] \u0443\u0434\u0430\u043B\u0438\u0442\u044C
       *[replace] \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C
    } \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430 \u2013 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442. \u0412\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?
save-download = \u0421\u043A\u0430\u0447\u0430\u0442\u044C
save-replace = \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C
save-delete = \u0423\u0434\u0430\u043B\u0438\u0442\u044C
save-backup-all = \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F
`,"volume-controls.ftl":`volume-controls-mute = \u0411\u0435\u0437 \u0437\u0432\u0443\u043A\u0430
volume-controls-unmute = \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnu\u0165 .swf
context-menu-copy-debug-info = Skop\xEDrova\u0165 debug info
context-menu-open-save-manager = Otvori\u0165 spr\xE1vcu ulo\u017Een\xED
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle roz\u0161\xEDren\xED ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skry\u0165 menu
context-menu-exit-fullscreen = Ukon\u010Di\u0165 re\u017Eim celej obrazovky
context-menu-enter-fullscreen = Prejs\u0165 do re\u017Eimu celej obrazovky
context-menu-volume-controls = Ovl\xE1danie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spusti\u0165 Flash vlo\u017Een\xFD na tejto str\xE1nke.
    M\xF4\u017Eete sa pok\xFAsi\u0165 otvori\u0165 s\xFAbor na samostatnej karte, aby ste sa vyhli tomuto probl\xE9mu.
message-restored-from-bfcache =
    V\xE1\u0161 prehliada\u010D obnovil tento Flash obsah z predch\xE1dzaj\xFAcej rel\xE1cie.
    Ak chcete za\u010Da\u0165 znovu, op\xE4tovne na\u010D\xEDtajte str\xE1nku.
panic-title = Nie\u010Do sa pokazilo :(
more-info = Viac inform\xE1ci\xED
run-anyway = Spusti\u0165 aj tak
continue = Pokra\u010Dova\u0165
report-bug = Nahl\xE1si\u0165 chybu
update-ruffle = Aktualizova\u0165 Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopov\xE1 aplik\xE1cia
ruffle-wiki = Zobrazi\u0165 Ruffle Wiki
enable-hardware-acceleration = Zd\xE1 sa, \u017Ee hardv\xE9rov\xE1 akceler\xE1cia je vypnut\xE1. Aj ke\u010F Ruffle funguje spr\xE1vne, m\xF4\u017Ee by\u0165 neprimerane pomal\xFD. Ako povoli\u0165 hardv\xE9rov\xFA akceler\xE1ciu zist\xEDte na tomto odkaze:
enable-hardware-acceleration-link = \u010Cast\xE9 ot\xE1zky - Hardv\xE9rov\xE1 akceler\xE1cia Chrome
view-error-details = Zobrazi\u0165 podrobnosti o chybe
open-in-new-tab = Otvori\u0165 na novej karte
click-to-unmute = Kliknut\xEDm zapnete zvuk
clipboard-message-title = Kop\xEDrovanie a vkladanie v Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] V\xE1\u0161 prehliada\u010D nepodporuje pln\xFD pr\xEDstup k schr\xE1nke,
        [access-denied] Pr\xEDstup k schr\xE1nke bol odmietnut\xFD,
    } ale namiesto toho m\xF4\u017Eete v\u017Edy pou\u017Ei\u0165 tieto skratky:
clipboard-message-copy = { " " } pre kop\xEDrovanie
clipboard-message-cut = { " " } pre vystrihovanie
clipboard-message-paste = { " " } pre vlo\u017Eenie
error-canvas-reload = Nie je mo\u017En\xE9 znova na\u010D\xEDta\u0165 pomocou vykres\u013Eova\u010Da pl\xE1tna, ke\u010F sa vykres\u013Eovanie pl\xE1tna u\u017E pou\u017E\xEDva.
error-file-protocol =
    Zd\xE1 sa, \u017Ee pou\u017E\xEDvate Ruffle na protokole "file:".
    To nie je mo\u017En\xE9, preto\u017Ee prehliada\u010De blokuj\xFA fungovanie mnoh\xFDch funkci\xED z bezpe\u010Dnostn\xFDch d\xF4vodov.
    Namiesto toho v\xE1m odpor\xFA\u010Dame nastavi\u0165 lok\xE1lny server alebo pou\u017Ei\u0165 web demo \u010Di desktopov\xFA aplik\xE1ciu.
error-javascript-config =
    Ruffle narazil na probl\xE9m v d\xF4sledku nespr\xE1vnej konfigur\xE1cie JavaScriptu.
    Ak ste spr\xE1vcom servera, odpor\xFA\u010Dame v\xE1m skontrolova\u0165 podrobnosti o chybe, aby ste zistili, ktor\xFD parameter je chybn\xFD.
    Pomoc m\xF4\u017Eete z\xEDska\u0165 aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 po\u017Eadovan\xFD komponent s\xFAboru \u201E.wasm\u201C.
    Ak ste spr\xE1vcom servera, skontrolujte, \u010Di bol s\xFAbor spr\xE1vne nahran\xFD.
    Ak probl\xE9m pretrv\xE1va, mo\u017Eno budete musie\u0165 pou\u017Ei\u0165 nastavenie \u201EpublicPath\u201C: pomoc n\xE1jdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Tento webov\xFD server neposkytuje s\xFAbory \u201E.wasm\u201C so spr\xE1vnym typom MIME.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nem\xF4\u017Ee spracova\u0165 po\u017Eadovan\xFD s\xFAbor.
    Najpravdepodobnej\u0161\xEDm d\xF4vodom je, \u017Ee po\u017Eadovan\xFD s\xFAbor nie je platn\xFDm s\xFAborom SWF.
error-swf-fetch =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 SWF s\xFAbor Flash.
    Najpravdepodobnej\u0161\xEDm d\xF4vodom je, \u017Ee s\xFAbor u\u017E neexistuje, tak\u017Ee Ruffle nem\xE1 \u010Do na\u010D\xEDta\u0165.
    Sk\xFAste po\u017Eiada\u0165 o pomoc spr\xE1vcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 SWF s\xFAbor Flash.
    Pr\xEDstup k na\u010D\xEDtaniu bol pravdepodobne zablokovan\xFD politikou CORS.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 po\u017Eadovan\xFD komponent s\xFAboru \u201E.wasm\u201C.
    Pr\xEDstup k na\u010D\xEDtaniu bol pravdepodobne zablokovan\xFD politikou CORS.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Zd\xE1 sa, \u017Ee na tejto str\xE1nke ch\xFDbaj\xFA alebo s\xFA neplatn\xE9 s\xFAbory na spustenie Ruffle.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Probl\xE9m sa m\xF4\u017Ee vyrie\u0161i\u0165 aj s\xE1m, tak\u017Ee m\xF4\u017Eete sk\xFAsi\u0165 str\xE1nku na\u010D\xEDta\u0165 znova.
    V opa\u010Dnom pr\xEDpade kontaktujte administr\xE1tora str\xE1nky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo na\u010D\xEDta\u0165 po\u017Eadovan\xFD komponent s\xFAboru \u201E.wasm\u201C.
    Ak chcete tento probl\xE9m vyrie\u0161i\u0165, sk\xFAste otvori\u0165 nastavenia prehliada\u010Da, kliknite na polo\u017Eku \u201EOchrana osobn\xFDch \xFAdajov, vyh\u013Ead\xE1vanie a slu\u017Eby\u201C, prejdite nadol a vypnite mo\u017Enos\u0165 \u201EZv\xFD\u0161te svoju bezpe\u010Dnos\u0165 na webe\u201C.
    V\xE1\u0161mu prehliada\u010Du to umo\u017En\xED na\u010D\xEDta\u0165 po\u017Eadovan\xE9 s\xFAbory \u201E.wasm\u201C.
    Ak probl\xE9m pretrv\xE1va, mo\u017Eno budete musie\u0165 pou\u017Ei\u0165 in\xFD prehliada\u010D.
error-wasm-unsupported-browser =
    Prehliada\u010D, ktor\xFD pou\u017E\xEDvate, nepodporuje roz\u0161\xEDrenie WebAssembly, ktor\xE9 Ruffle vy\u017Eaduje na spustenie.
    Prejdite na podporovan\xFD prehliada\u010D.
    Zoznam podporovan\xFDch prehliada\u010Dov n\xE1jdete na Wiki.
error-javascript-conflict =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Zd\xE1 sa, \u017Ee t\xE1to str\xE1nka pou\u017E\xEDva k\xF3d JavaScript, ktor\xFD je v konflikte s Ruffle.
    Ak ste spr\xE1vcom servera, odpor\xFA\u010Dame v\xE1m sk\xFAsi\u0165 na\u010D\xEDta\u0165 s\xFAbor na pr\xE1zdnu str\xE1nku.
error-javascript-conflict-outdated = M\xF4\u017Eete sa tie\u017E pok\xFAsi\u0165 nahra\u0165 nov\u0161iu verziu Ruffle, ktor\xE1 m\xF4\u017Ee dan\xFD probl\xE9m vyrie\u0161i\u0165 (aktu\xE1lny build je zastaran\xFD: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na probl\xE9m pri pokuse o inicializ\xE1ciu.
    Z\xE1sady zabezpe\u010Denia obsahu tohto webov\xE9ho servera nepovo\u013Euj\xFA spustenie po\u017Eadovan\xE9ho komponentu \u201E.wasm\u201C.
    Ak ste spr\xE1vcom servera, pomoc n\xE1jdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na probl\xE9m pri pokuse zobrazi\u0165 tento Flash obsah.
    { $outdated ->
         [true] Ak ste spr\xE1vcom servera, sk\xFAste nahra\u0165 nov\u0161iu verziu Ruffle (aktu\xE1lny build je zastaran\xFD: { $buildDate }).
        *[false] Toto by sa nemalo sta\u0165, tak\u017Ee by sme naozaj ocenili, keby ste mohli nahl\xE1si\u0165 chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstr\xE1ni\u0165 tento s\xFAbor s ulo\u017Een\xFDmi poz\xEDciami?
save-reload-prompt =
    Jedin\xFD sp\xF4sob, ako { $action ->
         [delete] vymaza\u0165
        *[replace] nahradi\u0165
    } tento s\xFAbor s ulo\u017Een\xFDmi poz\xEDciami bez potenci\xE1lneho konfliktu je op\xE4tovn\xE9 na\u010D\xEDtanie tohto obsahu. Chcete napriek tomu pokra\u010Dova\u0165?
save-download = Stiahnu\u0165
save-replace = Nahradi\u0165
save-delete = Vymaza\u0165
save-backup-all = Stiahnu\u0165 v\u0161etky s\xFAbory s ulo\u017Een\xFDmi poz\xEDciami
`,"volume-controls.ftl":`volume-controls-mute = Stlmi\u0165
volume-controls-unmute = Zru\u0161i\u0165 stlmenie
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner .swf
context-menu-copy-debug-info = Kopiera fels\xF6kningsinfo
context-menu-open-save-manager = \xD6ppna Sparhanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-till\xE4gget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = D\xF6lj denna meny
context-menu-exit-fullscreen = Avsluta helsk\xE4rm
context-menu-enter-fullscreen = Helsk\xE4rm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte k\xF6ra det inb\xE4ddade Flashinneh\xE5llet p\xE5 denna sida.
    Du kan f\xF6rs\xF6ka \xF6ppna filen i en separat flik f\xF6r att kringg\xE5 problemet.
panic-title = N\xE5got gick fel :(
more-info = Mer info
run-anyway = K\xF6r \xE4nd\xE5
continue = Forts\xE4tt
report-bug = Rapportera Bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
enable-hardware-acceleration = Det ser ut som att h\xE5rdvaruacceleration \xE4r avst\xE4ngt. P\xE5 grund av det kan Ruffle fungera l\xE5ngsamt. Du kan ta reda p\xE5 hur man s\xE4tter p\xE5 h\xE5rdvaruacceleration genom l\xE4nken nedan:
enable-hardware-acceleration-link = FAQ - Chrome H\xE5rdvaruacceleration
view-error-details = Visa Felinformation
open-in-new-tab = \xD6ppna i en ny flik
click-to-unmute = Klicka f\xF6r ljud
clipboard-message-title = Kopierar och klistrar in i Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Din webbl\xE4sare har inte fullst\xE4ndig \xE5tkomst till urklipp,
        [access-denied] Urklipps\xE5tkomst har nekats,
    } men du kan anv\xE4nda dom h\xE4r kortkommandon ist\xE4llet:
clipboard-message-copy = { " " } f\xF6r att kopiera
clipboard-message-cut = { " " } f\xF6r att klippa
clipboard-message-paste = { " " } f\xF6r att klistra in
error-canvas-reload = Kan inte ladda om med canvas render:aren n\xE4r den redan anv\xE4nds.
error-file-protocol =
    Det verkar som att du k\xF6r Ruffle p\xE5 "fil:"-protokollet.
    Detta fungerar inte eftersom webbl\xE4sare blockerar m\xE5nga funktioner fr\xE5n att fungera av s\xE4kerhetssk\xE4l.
    Ist\xE4llet bjuder vi in dig att s\xE4tta upp en lokal server eller antingen anv\xE4nda webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har st\xF6tt p\xE5 ett stort fel p\xE5 grund av en felaktig JavaScript-konfiguration.
    Om du \xE4r serveradministrat\xF6ren bjuder vi in dig att kontrollera feldetaljerna f\xF6r att ta reda p\xE5 vilken parameter som \xE4r felaktig.
    Du kan ocks\xE5 konsultera Ruffle-wikin f\xF6r hj\xE4lp.
error-wasm-not-found =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Om du \xE4r serveradministrat\xF6ren se till att filen har laddats upp korrekt.
    Om problemet kvarst\xE5r kan du beh\xF6va anv\xE4nda inst\xE4llningen "publicPath": konsultera v\xE4nligen Ruffle-wikin f\xF6r hj\xE4lp.
error-wasm-mime-type =
    Ruffle har st\xF6tt p\xE5 ett stort fel under initialiseringen.
    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.
    Om du \xE4r serveradministrat\xF6ren konsultera v\xE4nligen Ruffle-wikin f\xF6r hj\xE4lp.
error-invalid-swf =
    Ruffle kan inte l\xE4sa den beg\xE4rda filen.
    Det mest sannolika sk\xE4let \xE4r att den beg\xE4rda filen inte \xE4r en giltig SWF.
error-swf-fetch =
    Ruffle misslyckades ladda SWF-filen.
    Det mest sannolika sk\xE4let \xE4r att filen inte l\xE4ngre existerar, s\xE5 det finns inget f\xF6r Ruffle att k\xF6ra.
    F\xF6rs\xF6k att kontakta webbplatsadministrat\xF6ren f\xF6r hj\xE4lp.
error-swf-cors =
    Ruffle misslyckades ladda SWF-filen.
    \xC5tkomst att h\xE4mta har sannolikt blockerats av CORS-policy.
    Om du \xE4r serveradministrat\xF6ren konsultera v\xE4nligen Ruffle-wikin f\xF6r hj\xE4lp.
error-wasm-cors =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    \xC5tkomst att h\xE4mta har sannolikt blockerats av CORS-policy.
    Om du \xE4r serveradministrat\xF6ren konsultera v\xE4nligen Ruffle-wikin f\xF6r hj\xE4lp.
error-wasm-invalid =
    Ruffle har st\xF6tt p\xE5 ett stort fel under initialiseringen.
    Det verkar som att den h\xE4r sidan har saknade eller ogiltiga filer f\xF6r att k\xF6ra Ruffle.
    Om du \xE4r serveradministrat\xF6ren konsultera v\xE4nligen Ruffle-wikin f\xF6r hj\xE4lp.
error-wasm-download =
    Ruffle har st\xF6tt p\xE5 ett stort fel under initialiseringen.
    Detta kan ofta l\xF6sas av sig sj\xE4lv s\xE5 du kan prova att ladda om sidan.
    Kontakta annars v\xE4nligen webbplatsens administrat\xF6r.
error-wasm-disabled-on-edge =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    F\xF6r att \xE5tg\xE4rda detta f\xF6rs\xF6k att \xF6ppna webbl\xE4sarens inst\xE4llningar, klicka p\xE5 "Sekretess, s\xF6kning och tj\xE4nster", bl\xE4ddra ner och st\xE4ng av "F\xF6rb\xE4ttra s\xE4kerheten p\xE5 webben".
    Detta till\xE5ter din webbl\xE4sare att ladda ".wasm"-filerna.
    Om problemet kvarst\xE5r kan du beh\xF6va anv\xE4nda en annan webbl\xE4sare.
error-wasm-unsupported-browser =
    Webbl\xE4saren du anv\xE4nder st\xF6der inte de WebAssembly till\xE4ggen som Ruffle beh\xF6ver f\xF6r att k\xF6ra.
    V\xE4nligen byt till en webbl\xE4sare som st\xF6ds.
    Du kan hitta en lista \xF6ver webbl\xE4sare som st\xF6ds p\xE5 Wikin.
error-javascript-conflict =
    Ruffle har st\xF6tt p\xE5 ett stort fel under initialiseringen.
    Det verkar som att den h\xE4r sidan anv\xE4nder JavaScript-kod som st\xF6r Ruffle.
    Om du \xE4r serveradministrat\xF6ren bjuder vi in dig att f\xF6rs\xF6ka k\xF6ra filen p\xE5 en blank sida.
error-javascript-conflict-outdated = Du kan ocks\xE5 f\xF6rs\xF6ka ladda upp en nyare version av Ruffle, vilket kan kringg\xE5 problemet (nuvarande version \xE4r utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har st\xF6tt p\xE5 ett stort fel under initialiseringen.
    Webbserverns Content Security Policy till\xE5ter inte ".wasm"-komponenten att k\xF6ra.
    Om du \xE4r serveradministrat\xF6ren konsultera v\xE4nligen Ruffle-wikin f\xF6r hj\xE4lp.
error-unknown =
    Ruffle har st\xF6tt p\xE5 ett stort fel medan den f\xF6rs\xF6kte visa Flashinneh\xE5llet.
    { $outdated ->
        [true] Om du \xE4r serveradministrat\xF6ren f\xF6rs\xF6k att ladda upp en nyare version av Ruffle (nuvarande version \xE4r utdaterad: { $buildDate }).
       *[false] Detta \xE4r inte t\xE4nkt att h\xE4nda s\xE5 vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = \xC4r du s\xE4ker p\xE5 att du vill radera sparfilen?
save-reload-prompt =
    Det enda s\xE4ttet att { $action ->
        [delete] radera
       *[replace] ers\xE4tta
    } denna sparfil utan potentiell konflikt \xE4r att ladda om inneh\xE5llet. Vill du forts\xE4tta \xE4nd\xE5?
save-download = Ladda ner
save-replace = Ers\xE4tt
save-delete = Radera
save-backup-all = Ladda ner alla sparfiler
`,"volume-controls.ftl":`volume-controls-mute = St\xE4ng av ljud
`},"th-TH":{"context_menu.ftl":`context-menu-volume-controls = \u0E1B\u0E38\u0E48\u0E21\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E40\u0E2A\u0E35\u0E22\u0E07
`,"messages.ftl":`ruffle-demo = \u0E40\u0E27\u0E47\u0E1A\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07
ruffle-wiki = \u0E14\u0E39\u0E27\u0E34\u0E01\u0E34 Ruffle
`,"save-manager.ftl":`save-delete-prompt = \u0E04\u0E38\u0E13\u0E41\u0E19\u0E48\u0E43\u0E08\u0E2B\u0E23\u0E37\u0E2D\u0E27\u0E48\u0E32\u0E08\u0E30\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49?
`,"volume-controls.ftl":`volume-controls-mute = \u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07
volume-controls-unmute = \u0E43\u0E0A\u0E49\u0E40\u0E2A\u0E35\u0E22\u0E07
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = .swf'i indir
context-menu-copy-debug-info = Hata ay\u0131klama bilgisini kopyala
context-menu-open-save-manager = Kay\u0131t Y\xF6neticisini A\xE7
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzant\u0131s\u0131 Hakk\u0131nda ({ $version })
       *[other] Ruffle Hakk\u0131nda ({ $version })
    }
context-menu-hide = Bu men\xFCy\xFC gizle
context-menu-exit-fullscreen = Tam ekrandan \xE7\u0131k
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya g\xF6m\xFCl\xFC Flash'\u0131 \xE7al\u0131\u015Ft\u0131ramad\u0131.
    Bu sorunu ortadan kald\u0131rmak i\xE7in dosyay\u0131 ayr\u0131 bir sekmede a\xE7may\u0131 deneyebilirsiniz.
message-restored-from-bfcache =
    Taray\u0131c\u0131n\u0131z bu Flash i\xE7eri\u011Fini \xF6nceki bir oturumdan geri y\xFCkledi.
    S\u0131f\u0131rdan ba\u015Flamak i\xE7in sayfay\u0131 yeniden y\xFCkleyin.
panic-title = Bir \u015Feyler yanl\u0131\u015F gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de \xE7al\u0131\u015Ft\u0131r
continue = Devam et
report-bug = Hata Bildir
update-ruffle = Ruffle'\u0131 G\xFCncelle
ruffle-demo = A\u011F Demosu
ruffle-desktop = Masa\xFCst\xFC Uygulamas\u0131
ruffle-wiki = Ruffle Wiki'yi G\xF6r\xFCnt\xFCle
enable-hardware-acceleration = Donan\u0131m h\u0131zland\u0131rmas\u0131 etkin de\u011Fil gibi g\xF6r\xFCn\xFCyor. Ruffle \xE7al\u0131\u015Fabilir ancak \xE7ok yava\u015F olabilir. Donan\u0131m h\u0131zland\u0131rmas\u0131n\u0131 nas\u0131l etkinle\u015Ftirebilece\u011Finizi bu linkten \xF6\u011Frenebilirsiniz:
enable-hardware-acceleration-link = SSS - Chrome Donan\u0131m H\u0131zland\u0131rmas\u0131
view-error-details = Hata Ayr\u0131nt\u0131lar\u0131n\u0131 G\xF6r\xFCnt\xFCle
open-in-new-tab = Yeni sekmede a\xE7
click-to-unmute = Sesi a\xE7mak i\xE7in t\u0131klay\u0131n
clipboard-message-title = Ruffle'da kopyalama ve yap\u0131\u015Ft\u0131rma
clipboard-message-description =
    { $variant ->
    *[unsupported] Taray\u0131c\u0131n\u0131z tam panoya eri\u015Fimi desteklemiyor,
    [access-denied] Pano eri\u015Fimi reddedildi,
    } ancak pano yerine her zaman bu k\u0131sayollar\u0131 kullanabilirsiniz:
clipboard-message-copy = { " " } kopyalamak i\xE7in
clipboard-message-cut = { " " } kesmek i\xE7in
clipboard-message-paste = { " " } yap\u0131\u015Ft\u0131rmak i\xE7in
error-file-protocol =
    G\xF6r\xFCn\xFC\u015Fe g\xF6re Ruffle'\u0131 "dosya:" protokol\xFCnde \xE7al\u0131\u015Ft\u0131r\u0131yorsunuz.
    Taray\u0131c\u0131lar g\xFCvenlik nedenleriyle bir\xE7ok \xF6zelli\u011Fin \xE7al\u0131\u015Fmas\u0131n\u0131 engelledi\u011Finden bu i\u015Fe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya a\u011F\u0131n demosunu ya da masa\xFCst\xFC uygulamas\u0131n\u0131 kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanl\u0131\u015F bir JavaScript yap\u0131land\u0131rmas\u0131 nedeniyle \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Sunucu y\xF6neticisiyseniz, hangi parametrenin hatal\u0131 oldu\u011Funu bulmak i\xE7in sizi hata ayr\u0131nt\u0131lar\u0131n\u0131 kontrol etmeye davet ediyoruz.
    Yard\u0131m i\xE7in Ruffle wiki'sine de ba\u015Fvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bile\u015Fenini y\xFCkleyemedi.
    Sunucu y\xF6neticisi iseniz, l\xFCtfen dosyan\u0131n do\u011Fru bir \u015Fekilde y\xFCklendi\u011Finden emin olun.
    Sorun devam ederse, "publicPath" ayar\u0131n\u0131 kullanman\u0131z gerekebilir: yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-mime-type =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Bu web sunucusu, do\u011Fru MIME tipinde ".wasm" dosyalar\u0131 sunmuyor.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-invalid-swf =
    Ruffle istenen dosyay\u0131 ayr\u0131\u015Ft\u0131ram\u0131yor.
    Bunun en olas\u0131 nedeni, istenen dosyan\u0131n ge\xE7erli bir SWF olmamas\u0131d\u0131r.
error-swf-fetch =
    Ruffle, Flash SWF dosyas\u0131n\u0131 y\xFCkleyemedi.
    Bunun en olas\u0131 nedeni, dosyan\u0131n art\u0131k mevcut olmamas\u0131 ve bu nedenle Ruffle'\u0131n y\xFCkleyece\u011Fi hi\xE7bir \u015Feyin olmamas\u0131d\u0131r.
    Yard\u0131m i\xE7in web sitesi y\xF6neticisiyle ileti\u015Fime ge\xE7meyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyas\u0131n\u0131 y\xFCkleyemedi.
    Getirme eri\u015Fimi muhtemelen CORS politikas\u0131 taraf\u0131ndan engellenmi\u015Ftir.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bile\u015Fenini y\xFCkleyemedi.
    Getirme eri\u015Fimi muhtemelen CORS politikas\u0131 taraf\u0131ndan engellenmi\u015Ftir.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-invalid =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    G\xF6r\xFCn\xFC\u015Fe g\xF6re bu sayfada Ruffle'\u0131 \xE7al\u0131\u015Ft\u0131rmak i\xE7in eksik veya ge\xE7ersiz dosyalar var.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine ba\u015Fvurun.
error-wasm-download =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Bu genellikle kendi kendine \xE7\xF6z\xFClebilir, bu nedenle sayfay\u0131 yeniden y\xFCklemeyi deneyebilirsiniz.
    Aksi takdirde, l\xFCtfen site y\xF6neticisiyle ileti\u015Fime ge\xE7in.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bile\u015Fenini y\xFCkleyemedi.
    Bunu d\xFCzeltmek i\xE7in taray\u0131c\u0131n\u0131z\u0131n ayarlar\u0131n\u0131 a\xE7\u0131n, "Gizlilik, arama ve hizmetler"i t\u0131klay\u0131n, a\u015Fa\u011F\u0131 kayd\u0131r\u0131n ve "Web'de g\xFCvenli\u011Finizi art\u0131r\u0131n"\u0131 kapatmay\u0131 deneyin.
    Bu, taray\u0131c\u0131n\u0131z\u0131n gerekli ".wasm" dosyalar\u0131n\u0131 y\xFCklemesine izin verecektir.
    Sorun devam ederse, farkl\u0131 bir taray\u0131c\u0131 kullanman\u0131z gerekebilir.
error-wasm-unsupported-browser =
    Kulland\u0131\u011F\u0131n\u0131z taray\u0131c\u0131, Ruffle'\u0131n \xE7al\u0131\u015Fmas\u0131 i\xE7in gereken WebAssembly uzant\u0131lar\u0131n\u0131 desteklemiyor.
    L\xFCtfen desteklenen bir taray\u0131c\u0131ya ge\xE7in.
    Wiki'de desteklenen taray\u0131c\u0131lar\u0131n bir listesini bulabilirsiniz.
error-javascript-conflict =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    G\xF6r\xFCn\xFC\u015Fe g\xF6re bu sayfa, Ruffle ile \xE7ak\u0131\u015Fan JavaScript kodu kullan\u0131yor.
    Sunucu y\xF6neticisiyseniz, sizi dosyay\u0131 bo\u015F bir sayfaya y\xFCklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayr\u0131ca sorunu giderebilecek daha yeni bir Ruffle s\xFCr\xFCm\xFC y\xFCklemeyi de deneyebilirsiniz (mevcut yap\u0131m eskimi\u015F: { $buildDate }).
error-csp-conflict =
    Ruffle, ba\u015Flatmaya \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    Bu web sunucusunun \u0130\xE7erik G\xFCvenli\u011Fi Politikas\u0131, gerekli ".wasm" bile\u015Feninin \xE7al\u0131\u015Fmas\u0131na izin vermiyor.
    Sunucu y\xF6neticisiyseniz, yard\u0131m i\xE7in l\xFCtfen Ruffle wiki'sine bak\u0131n.
error-unknown =
    Ruffle, bu Flash i\xE7eri\u011Fini g\xF6r\xFCnt\xFClemeye \xE7al\u0131\u015F\u0131rken \xF6nemli bir sorunla kar\u015F\u0131la\u015Ft\u0131.
    { $outdated ->
        [true] Sunucu y\xF6neticisiyseniz, l\xFCtfen Ruffle'\u0131n daha yeni bir s\xFCr\xFCm\xFCn\xFC y\xFCklemeyi deneyin (mevcut yap\u0131m eskimi\u015F: { $buildDate }).
       *[false] Bunun olmamas\u0131 gerekiyor, bu y\xFCzden bir hata bildirebilirseniz \xE7ok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kay\u0131t dosyas\u0131n\u0131 silmek istedi\u011Finize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyas\u0131n\u0131 potansiyel \xE7ak\u0131\u015Fma olmadan { $action ->
        [delete] silmenin
       *[replace] de\u011Fi\u015Ftirmenin
    } tek yolu, bu i\xE7eri\u011Fi yeniden y\xFCklemektir. Yine de devam etmek istiyor musunuz?
save-download = \u0130ndir
save-replace = De\u011Fi\u015Ftir
save-delete = Sil
save-backup-all = T\xFCm kay\u0131t dosyalar\u0131n\u0131 indir
`,"volume-controls.ftl":`volume-controls-mute = Sustur
volume-controls-unmute = Susturmay\u0131 kald\u0131r
`},"uk-UA":{"context_menu.ftl":`context-menu-download-swf = \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 .swf
context-menu-copy-debug-info = \u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u043E \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F
context-menu-open-save-manager = \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u041F\u0440\u043E \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F Ruffle ({ $version })
       *[other] \u041F\u0440\u043E Ruffle ({ $version })
    }
context-menu-hide = \u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0446\u0435 \u043C\u0435\u043D\u044E
context-menu-exit-fullscreen = \u0412\u0438\u0439\u0442\u0438 \u0437 \u043F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443
context-menu-enter-fullscreen = \u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C
context-menu-volume-controls = \u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u043A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0443\u0447\u043D\u0456\u0441\u0442\u044E
`,"messages.ftl":`message-cant-embed = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 Flash, \u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0443 \u0446\u044E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0444\u0430\u0439\u043B \u0432 \u043E\u043A\u0440\u0435\u043C\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456, \u0449\u043E\u0431 \u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u0446\u0456\u0454\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438.
message-restored-from-bfcache =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0432 \u0446\u0435\u0439 Flash-\u0432\u043C\u0456\u0441\u0442 \u0456\u0437 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0457 \u0441\u0435\u0441\u0456\u0457.
    \u0429\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E, \u043E\u043D\u043E\u0432\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443.
panic-title = \u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A :(
more-info = \u0411\u0456\u043B\u044C\u0448\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457
run-anyway = \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0435 \u043E\u0434\u043D\u043E
continue = \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438
report-bug = \u041F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438 \u043F\u0440\u043E \u043F\u043E\u043C\u0438\u043B\u043A\u0443
update-ruffle = \u041E\u043D\u043E\u0432\u0438\u0442\u0438 Ruffle
ruffle-demo = \u0412\u0435\u0431\u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u044F
ruffle-desktop = \u0417\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0443
ruffle-wiki = \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 Ruffle Wiki
enable-hardware-acceleration = \u0421\u0445\u043E\u0436\u0435, \u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E. \u0425\u043E\u0447\u0430 Ruffle \u043C\u043E\u0436\u0435 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438, \u0446\u0435 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0434\u0443\u0436\u0435 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0438\u043C. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F, \u044F\u043A \u0443\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0430\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F, \u043F\u0435\u0440\u0435\u0439\u0448\u043E\u0432\u0448\u0438 \u0437\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C \u043D\u0438\u0436\u0447\u0435:
enable-hardware-acceleration-link = FAQ - \u0410\u043F\u0430\u0440\u0430\u0442\u043D\u0435 \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044F Chrome
view-error-details = \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438
open-in-new-tab = \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 \u043D\u043E\u0432\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456
click-to-unmute = \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0443\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0432\u0443\u043A
clipboard-message-title = \u041A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0432 Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u043F\u043E\u0432\u043D\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0456\u043D\u0443,
        [access-denied] \u0423 \u0434\u043E\u0441\u0442\u0443\u043F\u0456 \u0434\u043E \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u0435\u043D\u043E,
    } \u0430\u043B\u0435 \u0432\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0446\u0438\u043C\u0438 \u044F\u0440\u043B\u0438\u043A\u0430\u043C\u0438:
clipboard-message-copy = { " " } \u0434\u043B\u044F \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F
clipboard-message-cut = { " " } \u0434\u043B\u044F \u0432\u0438\u0440\u0456\u0437\u0430\u043D\u043D\u044F
clipboard-message-paste = { " " } \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F
error-canvas-reload = \u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0437 Canvas \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440\u043E\u043C, \u043A\u043E\u043B\u0438 Canvas \u0440\u0435\u043D\u0434\u0435\u0440\u0435\u0440 \u0432\u0436\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F.
error-file-protocol = \u0417\u0434\u0430\u0454\u0442\u044C\u0441\u044F, \u0432\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0454\u0442\u0435 Ruffle \u0437\u0430 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u043C "file:". \u0426\u0435 \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0454, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0438 \u0431\u043B\u043E\u043A\u0443\u044E\u0442\u044C \u0440\u043E\u0431\u043E\u0442\u0443 \u0431\u0430\u0433\u0430\u0442\u044C\u043E\u0445 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0437 \u043C\u0456\u0440\u043A\u0443\u0432\u0430\u043D\u044C \u0431\u0435\u0437\u043F\u0435\u043A\u0438. \u0417\u0430\u043C\u0456\u0441\u0442\u044C \u0446\u044C\u043E\u0433\u043E \u043C\u0438 \u0437\u0430\u043F\u0440\u043E\u0448\u0443\u0454\u043C\u043E \u0432\u0430\u0441 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0430\u0431\u043E \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0432\u0435\u0431\u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0456\u0454\u044E \u0447\u0438 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043A\u043E\u043C \u0440\u043E\u0431\u043E\u0447\u043E\u0433\u043E \u0441\u0442\u043E\u043B\u0443.
error-javascript-config = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443 \u043A\u043E\u043D\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044E JavaScript. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u0438 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438, \u0449\u043E\u0431 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F, \u044F\u043A\u0438\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u0454 \u043D\u0435\u0441\u043F\u0440\u0430\u0432\u043D\u0438\u043C. \u0412\u0438 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0434\u043E Ruffle Wiki.
error-wasm-not-found = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0444\u0430\u0439\u043B\u043E\u0432\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u0444\u0430\u0439\u043B \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E. \u042F\u043A\u0449\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043D\u0435 \u0437\u043D\u0438\u043A\u0430\u0454, \u043C\u043E\u0436\u043B\u0438\u0432\u043E, \u0432\u0430\u043C \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u043C "publicPath": \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-mime-type = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0426\u0435\u0439 \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 ".wasm" \u0456\u0437 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u043C \u0442\u0438\u043F\u043E\u043C MIME. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-invalid-swf = Ruffle \u043D\u0435 \u043C\u043E\u0436\u0435 \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0444\u0430\u0439\u043B \u0437\u0430\u043F\u0438\u0442\u0443. \u041D\u0430\u0439\u0456\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0448\u0430 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0444\u0430\u0439\u043B \u0437\u0430\u043F\u0438\u0442\u0443 \u043D\u0435 \u0454 \u0434\u0456\u0439\u0441\u043D\u0438\u043C SWF.
error-swf-fetch = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B Flash SWF. \u041D\u0430\u0439\u0456\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0448\u0430 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E \u0444\u0430\u0439\u043B \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454, \u0442\u043E\u043C\u0443 Ruffle \u043D\u0435\u043C\u0430 \u0447\u043E\u0433\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043F\u043E \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443 \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0430\u0439\u0442\u0443.
error-swf-cors = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B Flash SWF. \u041C\u043E\u0436\u043B\u0438\u0432\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0431\u0443\u043B\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u043E \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E CORS. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-cors = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0444\u0430\u0439\u043B\u043E\u0432\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u041C\u043E\u0436\u043B\u0438\u0432\u043E, \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0431\u0443\u043B\u043E \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u043E \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E CORS. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-invalid = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0417\u0434\u0430\u0454\u0442\u044C\u0441\u044F, \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456 \u0430\u0431\u043E \u043D\u0435\u0434\u0456\u0439\u0441\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0443 Ruffle. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-wasm-download = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0427\u0430\u0441\u0442\u043E \u0446\u0435 \u043C\u043E\u0436\u0435 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438\u0441\u044F \u0441\u0430\u043C\u043E \u0441\u043E\u0431\u043E\u044E, \u0442\u043E\u043C\u0443 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443. \u0412 \u0456\u043D\u0448\u043E\u043C\u0443 \u0432\u0438\u043F\u0430\u0434\u043A\u0443 \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0430\u0439\u0442\u0443.
error-wasm-disabled-on-edge = Ruffle \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u0444\u0430\u0439\u043B\u043E\u0432\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u0429\u043E\u0431 \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0446\u0435, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u043D\u0430\u0442\u0438\u0441\u043D\u0443\u0442\u0438 \xAB\u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C, \u043F\u043E\u0448\u0443\u043A \u0456 \u0441\u043B\u0443\u0436\u0431\u0438\xBB, \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0438 \u0432\u043D\u0438\u0437 \u0456 \u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \xAB\u041F\u0456\u0434\u0432\u0438\u0449\u0438\u0442\u0438 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u0432 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0456\xBB. \u0426\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u0432\u0430\u0448\u043E\u043C\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0444\u0430\u0439\u043B\u0438 \xAB.wasm\xBB. \u042F\u043A\u0449\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043D\u0435 \u0437\u043D\u0438\u043A\u0430\u0454, \u043C\u043E\u0436\u043B\u0438\u0432\u043E, \u0432\u0430\u043C \u0434\u043E\u0432\u0435\u0434\u0435\u0442\u044C\u0441\u044F \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0456\u043D\u0448\u0438\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u043C.
error-wasm-unsupported-browser =
    \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F WebAssembly, \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0434\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0438 Ruffle.
    \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u043D\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.
    \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u043D\u0438\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456\u0432 \u043C\u043E\u0436\u043D\u0430 \u0437\u043D\u0430\u0439\u0442\u0438 \u0443 \u0412\u0456\u043A\u0456.
error-javascript-conflict = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u0421\u0445\u043E\u0436\u0435, \u0449\u043E \u0446\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u043A\u043E\u0434 JavaScript, \u044F\u043A\u0438\u0439 \u043A\u043E\u043D\u0444\u043B\u0456\u043A\u0442\u0443\u0454 \u0437 Ruffle. \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043C\u0438 \u0437\u0430\u043F\u0440\u043E\u0448\u0443\u0454\u043C\u043E \u0432\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B \u043D\u0430 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456.
error-javascript-conflict-outdated = \u0412\u0438 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u043E\u0432\u0456\u0448\u0443 \u0432\u0435\u0440\u0441\u0456\u044E Ruffle, \u044F\u043A\u0430 \u043C\u043E\u0436\u0435 \u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 (\u043F\u043E\u0442\u043E\u0447\u043D\u0430 \u0437\u0431\u0456\u0440\u043A\u0430 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430: { $buildDate }).
error-csp-conflict = Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0456\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457. \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u0431\u0435\u0437\u043F\u0435\u043A\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443 \u0446\u044C\u043E\u0433\u043E \u0432\u0435\u0431\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0435 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0442\u0438 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ".wasm". \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E Ruffle Wiki, \u0449\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443.
error-unknown =
    Ruffle \u0437\u0456\u0442\u043A\u043D\u0443\u0432\u0441\u044F \u0437 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043F\u0440\u043E\u0431\u0438 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u0446\u0435\u0439 Flash \u043A\u043E\u043D\u0442\u0435\u043D\u0442.
    { $outdated ->
        [true] \u042F\u043A\u0449\u043E \u0432\u0438 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043D\u043E\u0432\u0456\u0448\u0443 \u0432\u0435\u0440\u0441\u0456\u044E Ruffle (\u043F\u043E\u0442\u043E\u0447\u043D\u0430 \u0437\u0431\u0456\u0440\u043A\u0430 \u0437\u0430\u0441\u0442\u0430\u0440\u0456\u043B\u0430: { $buildDate }).
       *[false] \u0426\u044C\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0442\u0438\u0441\u044F, \u0442\u043E\u043C\u0443 \u043C\u0438 \u0431\u0443\u0434\u0435\u043C\u043E \u0434\u0443\u0436\u0435 \u0432\u0434\u044F\u0447\u043D\u0456, \u044F\u043A\u0449\u043E \u0432\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0435 \u043F\u0440\u043E \u043F\u043E\u043C\u0438\u043B\u043A\u0443!
    }
`,"save-manager.ftl":`save-delete-prompt = \u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u0444\u0430\u0439\u043B \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F?
save-reload-prompt =
    \u0404\u0434\u0438\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 { $action ->
        [delete] \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438
       *[replace] \u0437\u0430\u043C\u0456\u043D\u0438\u0442\u0438
    } \u0446\u0435\u0439 \u0444\u0430\u0439\u043B \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0444\u043B\u0456\u043A\u0442\u0443 \u0454 \u043F\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0446\u044C\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443. \u0412\u0438 \u0432\u0441\u0435 \u043E\u0434\u043D\u043E \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438?
save-download = \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438
save-replace = \u0417\u0430\u043C\u0456\u043D\u0438\u0442\u0438
save-delete = \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438
save-backup-all = \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0432\u0441\u0456 \u0444\u0430\u0439\u043B\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F
`,"volume-controls.ftl":`volume-controls-mute = \u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0432\u0443\u043A
volume-controls-unmute = \u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0437\u0432\u0443\u043A
`},"vi-VN":{"context_menu.ftl":`context-menu-download-swf = T\u1EA3i v\u1EC1 file .swf
context-menu-copy-debug-info = Sao ch\xE9p th\xF4ng tin g\u1EE1 l\u1ED7i
context-menu-open-save-manager = M\u1EDF tr\xECnh qu\u1EA3n l\xFD l\u01B0u file
context-menu-about-ruffle =
    { $flavor ->
        [extension] Gi\u1EDBi thi\u1EC7u v\u1EC1 ph\u1EA7n m\u1EDF r\u1ED9ng Ruffle ({ $version })
       *[other] Gi\u1EDBi thi\u1EC7u v\u1EC1 Ruffle ({ $version })
    }
context-menu-hide = \u1EA8n menu n\xE0y
context-menu-exit-fullscreen = Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh
context-menu-enter-fullscreen = Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh
context-menu-volume-controls = Tu\u1EF3 ch\u1EC9nh \xE2m l\u01B0\u1EE3ng
`,"messages.ftl":`message-cant-embed =
    Ruffle kh\xF4ng th\u1EC3 ch\u1EA1y n\u1ED9i dung Flash \u0111\u01B0\u1EE3c nh\xFAng trong trang n\xE0y.
    B\u1EA1n c\xF3 th\u1EC3 th\u1EED m\u1EDF t\u1EC7p \u1EDF m\u1ED9t tab ri\xEAng bi\u1EC7t \u0111\u1EC3 tr\xE1nh s\u1EF1 c\u1ED1 n\xE0y.
message-restored-from-bfcache = Tr\xECnh duy\u1EC7t \u0111\xE3 kh\xF4i ph\u1EE5c l\u1EA1i n\u1ED9i dung Flash t\u1EEB phi\xEAn g\u1EA7n nh\u1EA5t. T\u1EA3i l\u1EA1i trang n\u1EBFu mu\u1ED1n b\u1EAFt \u0111\u1EA7u l\u1EA1i t\u1EEB \u0111\u1EA7u.
panic-title = C\xF3 l\u1ED7i x\u1EA3y ra :(
more-info = Th\xF4ng tin th\xEAm
run-anyway = V\u1EABn kh\u1EDFi ch\u1EA1y
continue = Ti\u1EBFp t\u1EE5c
report-bug = B\xE1o c\xE1o l\u1ED7i
update-ruffle = C\u1EADp nh\u1EADt Ruffle
ruffle-demo = Trang demo
ruffle-desktop = \u1EE8ng d\u1EE5ng desktop
ruffle-wiki = Truy c\u1EADp Ruffle Wiki
enable-hardware-acceleration = C\xF3 v\u1EBB nh\u01B0 t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng \u0111\xE3 b\u1ECB v\xF4 hi\u1EC7u ho\xE1. M\u1EB7c d\xF9 Ruffle v\u1EABn c\xF3 th\u1EC3 ho\u1EA1t \u0111\u1ED9ng, nh\u01B0ng n\xF3 c\xF3 th\u1EC3 r\u1EA5t ch\u1EADm. B\u1EA1n c\xF3 th\u1EC3 t\xECm c\xE1ch b\u1EADt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng b\u1EB1ng c\xE1ch l\xE0m theo h\u01B0\u1EDBng d\u1EABn trong \u0111\u01B0\u1EDDng d\u1EABn b\xEAn d\u01B0\u1EDBi:
enable-hardware-acceleration-link = C\xE1c c\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p - T\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng cho Chrome
view-error-details = Xem chi ti\u1EBFt l\u1ED7i
open-in-new-tab = M\u1EDF trong th\u1EBB m\u1EDBi
click-to-unmute = B\u1EA5m \u0111\u1EC3 b\u1EADt ti\u1EBFng
clipboard-message-title = Sao ch\xE9p v\xE0 d\xE1n b\xEAn trong Ruffle
clipboard-message-description =
    { $variant ->
       *[unsupported] Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 \u0111\u1EA7y \u0111\u1EE7 truy xu\u1EA5t b\u1ED9 nh\u1EDB t\u1EA1m,
        [access-denied] Truy xu\u1EA5t b\u1ED9 nh\u1EDB t\u1EA1m b\u1ECB t\u1EEB ch\u1ED1i,
    } nh\u01B0ng b\u1EA1n lu\xF4n c\xF3 th\u1EC3 s\u1EED d\u1EE5ng ph\xEDm t\u1EAFt \u0111\u1EC3 l\xE0m \u0111i\u1EC1u \u0111\xF3:
clipboard-message-copy = { " " } \u0111\u1EC3 sao ch\xE9p
clipboard-message-cut = { " " } \u0111\u1EC3 c\u1EAFt
clipboard-message-paste = { " " } \u0111\u1EC3 d\xE1n
error-canvas-reload = Tr\xECnh k\u1EBFt xu\u1EA5t \u0111\u1ED3 ho\u1EA1 canvas renderer \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng n\xEAn kh\xF4ng th\u1EC3 l\xE0m m\u1EDBi.
error-file-protocol =
    C\xF3 v\u1EBB nh\u01B0 b\u1EA1n \u0111ang ch\u1EA1y Ruffle tr\xEAn giao th\u1EE9c "file:".
    \u0110i\u1EC1u n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c ph\xE9p v\xEC tr\xECnh duy\u1EC7t ch\u1EB7n nhi\u1EC1u t\xEDnh n\u0103ng ho\u1EA1t \u0111\u1ED9ng v\xEC l\xFD do b\u1EA3o m\u1EADt.
    Thay v\xE0o \u0111\xF3, ch\xFAng t\xF4i m\u1EDDi b\u1EA1n thi\u1EBFt l\u1EADp m\u1ED9t m\xE1y ch\u1EE7 c\u1EE5c b\u1ED9 ho\u1EB7c s\u1EED d\u1EE5ng trang demo ho\u1EB7c \u1EE9ng d\u1EE5ng desktop.
error-javascript-config =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i s\u1EF1 c\u1ED1 l\u1EDBn do c\u1EA5u h\xECnh JavaScript kh\xF4ng ch\xEDnh x\xE1c.
    N\u1EBFu b\u1EA1n l\xE0 ng\u01B0\u1EDDi qu\u1EA3n tr\u1ECB m\xE1y ch\u1EE7, ch\xFAng t\xF4i m\u1EDDi b\u1EA1n ki\u1EC3m tra chi ti\u1EBFt l\u1ED7i \u0111\u1EC3 t\xECm ra tham s\u1ED1 n\xE0o kh\xF4ng \u0111\xFAng.
    B\u1EA1n c\u0169ng c\xF3 th\u1EC3 tham kh\u1EA3o th\xF4ng tin tr\u1EE3 gi\xFAp t\u1EEB Ruffle Wiki.
error-wasm-not-found =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    N\u1EBFu b\u1EA1n l\xE0 ng\u01B0\u1EDDi qu\u1EA3n tr\u1ECB m\xE1y ch\u1EE7, vui l\xF2ng \u0111\u1EA3m b\u1EA3o t\u1EC7p \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn \u0111\xFAng c\xE1ch.
    N\u1EBFu s\u1EF1 c\u1ED1 v\u1EABn ti\u1EBFp di\u1EC5n, b\u1EA1n c\xF3 th\u1EC3 c\u1EA7n ph\u1EA3i s\u1EED d\u1EE5ng thi\u1EBFt l\u1EADp "publicPath": vui l\xF2ng tham kh\u1EA3o th\xF4ng tin tr\u1EE3 gi\xFAp t\u1EEB Ruffle Wiki.
error-wasm-mime-type =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    M\xE1y ch\u1EE7 web kh\xF4ng cung c\u1EA5p t\u1EC7p ".wasm" v\u1EDBi \u0111\xFAng lo\u1EA1i MIME.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o wiki Ruffle \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-invalid-swf =
    Ruffle kh\xF4ng th\u1EC3 ph\xE2n t\xEDch t\u1EC7p \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u.
    Kh\u1EA3 n\u0103ng l\u1EDBn nh\u1EA5t l\xE0 do t\u1EC7p \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u kh\xF4ng ph\u1EA3i l\xE0 m\u1ED9t t\u1EC7p SWF h\u1EE3p l\u1EC7.
error-swf-fetch =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p Flash SWF.
    Kh\u1EA3 n\u0103ng l\u1EDBn nh\u1EA5t l\xE0 do t\u1EC7p kh\xF4ng c\xF2n t\u1ED3n t\u1EA1i n\u1EEFa, v\xEC v\u1EADy kh\xF4ng c\xF3 g\xEC \u0111\u1EC3 Ruffle t\u1EA3i.
    H\xE3y th\u1EED li\xEAn h\u1EC7 v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn trang web \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-swf-cors =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p Flash SWF.
    Quy\u1EC1n truy c\u1EADp \u0111\u1EC3 l\u1EA5y d\u1EEF li\u1EC7u c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB ch\xEDnh s\xE1ch CORS ch\u1EB7n.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o Ruffle Wiki \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-wasm-cors =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    Quy\u1EC1n truy c\u1EADp \u0111\u1EC3 l\u1EA5y d\u1EEF li\u1EC7u c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB ch\xEDnh s\xE1ch CORS ch\u1EB7n.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o wiki Ruffle \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-wasm-invalid =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    C\xF3 v\u1EBB nh\u01B0 trang n\xE0y c\xF3 c\xE1c t\u1EC7p b\u1ECB thi\u1EBFu ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7 \u0111\u1EC3 ch\u1EA1y Ruffle.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o Ruffle Wiki \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-wasm-download =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    V\u1EA5n \u0111\u1EC1 n\xE0y th\u01B0\u1EDDng c\xF3 th\u1EC3 t\u1EF1 gi\u1EA3i quy\u1EBFt, v\xEC v\u1EADy b\u1EA1n c\xF3 th\u1EC3 th\u1EED t\u1EA3i l\u1EA1i trang.
    N\u1EBFu kh\xF4ng, vui l\xF2ng li\xEAn h\u1EC7 v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn trang web.
error-wasm-disabled-on-edge =
    Ruffle kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c th\xE0nh ph\u1EA7n t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    \u0110\u1EC3 kh\u1EAFc ph\u1EE5c s\u1EF1 c\u1ED1 n\xE0y, h\xE3y th\u1EED m\u1EDF c\xE0i \u0111\u1EB7t c\u1EE7a tr\xECnh duy\u1EC7t, nh\u1EA5p v\xE0o "Quy\u1EC1n ri\xEAng t\u01B0, t\xECm ki\u1EBFm v\xE0 d\u1ECBch v\u1EE5", cu\u1ED9n xu\u1ED1ng v\xE0 t\u1EAFt "N\xE2ng cao b\u1EA3o m\u1EADt tr\xEAn web".
    Thao t\xE1c n\xE0y s\u1EBD cho ph\xE9p tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n t\u1EA3i c\xE1c t\u1EC7p ".wasm" c\u1EA7n thi\u1EBFt.
    N\u1EBFu s\u1EF1 c\u1ED1 v\u1EABn ti\u1EBFp di\u1EC5n, b\u1EA1n c\xF3 th\u1EC3 ph\u1EA3i s\u1EED d\u1EE5ng tr\xECnh duy\u1EC7t kh\xE1c.
error-wasm-unsupported-browser =
    Tr\xECnh duy\u1EC7t b\u1EA1n \u0111ang s\u1EED d\u1EE5ng kh\xF4ng h\u1ED7 tr\u1EE3 ti\u1EC7n \xEDch m\u1EDF r\u1ED9ng WebAssembly c\u1EA7n thi\u1EBFt \u0111\u1EC3 ch\u1EA1y Ruffle.
    Vui l\xF2ng chuy\u1EC3n sang tr\xECnh duy\u1EC7t \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.
    B\u1EA1n c\xF3 th\u1EC3 xem danh s\xE1ch c\xE1c tr\xECnh duy\u1EC7t \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 tr\xEAn Ruffle Wiki.
error-javascript-conflict =
    Ruffle g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    C\xF3 v\u1EBB trang n\xE0y s\u1EED d\u1EE5ng m\xE3 JavaScript xung \u0111\u1ED9t v\u1EDBi Ruffle.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, ch\xFAng t\xF4i m\u1EDDi b\u1EA1n th\u1EED t\u1EA3i t\u1EC7p tr\xEAn m\u1ED9t trang tr\u1EAFng.
error-javascript-conflict-outdated = B\u1EA1n c\u0169ng c\xF3 th\u1EC3 th\u1EED t\u1EA3i l\xEAn phi\xEAn b\u1EA3n Ruffle m\u1EDBi h\u01A1n \u0111\u1EC3 xem s\u1EF1 c\u1ED1 c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c kh\u1EAFc ph\u1EE5c (b\u1EA3n d\u1EF1ng hi\u1EC7n t\u1EA1i \u0111\xE3 c\u0169: { $buildDate }).
error-csp-conflict =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng kh\u1EDFi t\u1EA1o.
    Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt n\u1ED9i dung c\u1EE7a m\xE1y ch\u1EE7 web n\xE0y kh\xF4ng cho ph\xE9p ch\u1EA1y th\xE0nh ph\u1EA7n t\u1EC7p ".wasm" b\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 \u0111\u1EC3 ho\u1EA1t \u0111\u1ED9ng.
    N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng tham kh\u1EA3o Ruffle Wiki \u0111\u1EC3 \u0111\u01B0\u1EE3c tr\u1EE3 gi\xFAp.
error-unknown =
    Ruffle \u0111\xE3 g\u1EB7p ph\u1EA3i m\u1ED9t v\u1EA5n \u0111\u1EC1 l\u1EDBn khi c\u1ED1 g\u1EAFng hi\u1EC3n th\u1ECB n\u1ED9i dung Flash n\xE0y.
    { $outdated ->
        [true] N\u1EBFu b\u1EA1n l\xE0 qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7, vui l\xF2ng th\u1EED t\u1EA3i l\xEAn phi\xEAn b\u1EA3n Ruffle m\u1EDBi h\u01A1n (b\u1EA3n d\u1EF1ng hi\u1EC7n t\u1EA1i \u0111\xE3 c\u0169: { $buildDate }).
       *[false] V\u1EA5n \u0111\u1EC1 n\xE0y \u0111\xE1ng l\u1EBD kh\xF4ng n\xEAn x\u1EA3y ra, v\xEC v\u1EADy ch\xFAng t\xF4i th\u1EF1c s\u1EF1 bi\u1EBFt \u01A1n n\u1EBFu b\u1EA1n c\xF3 th\u1EC3 b\xE1o c\xE1o l\u1ED7i!
    }
`,"save-manager.ftl":`save-delete-prompt = B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n xo\xE1 t\u1EC7p \u0111\xE3 l\u01B0u n\xE0y kh\xF4ng?
save-reload-prompt =
    C\xE1ch duy nh\u1EA5t \u0111\u1EC3 { $action ->
        [delete] xo\xE1
       *[replace] thay th\u1EBF
    } t\u1EC7p \u0111\xE3 l\u01B0u n\xE0y m\xE0 kh\xF4ng c\xF3 nguy c\u01A1 xung \u0111\u1ED9t l\xE0 t\u1EA3i l\u1EA1i n\u1ED9i dung n\xE0y. B\u1EA1n c\xF3 mu\u1ED1n ti\u1EBFp t\u1EE5c kh\xF4ng?
save-download = T\u1EA3i v\u1EC1
save-replace = Thay th\u1EBF
save-delete = Xo\xE1
save-backup-all = T\u1EA3i xu\u1ED1ng t\u1EA5t c\u1EA3 t\u1EC7p \u0111\xE3 l\u01B0u
`,"volume-controls.ftl":`volume-controls-mute = T\u1EAFt ti\u1EBFng
volume-controls-unmute = B\u1EADt ti\u1EBFng
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = \u4E0B\u8F7D .swf
context-menu-copy-debug-info = \u590D\u5236\u8C03\u8BD5\u4FE1\u606F
context-menu-open-save-manager = \u6253\u5F00\u5B58\u6863\u7BA1\u7406\u5668
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u5173\u4E8E Ruffle \u6269\u5C55 ({ $version })
       *[other] \u5173\u4E8E Ruffle ({ $version })
    }
context-menu-hide = \u9690\u85CF\u6B64\u83DC\u5355
context-menu-exit-fullscreen = \u9000\u51FA\u5168\u5C4F
context-menu-enter-fullscreen = \u8FDB\u5165\u5168\u5C4F
context-menu-volume-controls = \u97F3\u91CF\u63A7\u5236
`,"messages.ftl":`message-cant-embed =
    Ruffle \u65E0\u6CD5\u8FD0\u884C\u5D4C\u5165\u5728\u6B64\u9875\u9762\u4E2D\u7684 Flash\u3002
    \u60A8\u53EF\u4EE5\u5C1D\u8BD5\u5728\u5355\u72EC\u7684\u6807\u7B7E\u9875\u4E2D\u6253\u5F00\u8BE5\u6587\u4EF6\uFF0C\u4EE5\u56DE\u907F\u6B64\u95EE\u9898\u3002
message-restored-from-bfcache =
    \u60A8\u7684\u6D4F\u89C8\u5668\u4ECE\u4E4B\u524D\u7684\u4F1A\u8BDD\u4E2D\u6062\u590D\u4E86\u8FD9\u4E2AFlash\u5185\u5BB9\u3002
    \u82E5\u8981\u4ECE\u5934\u5F00\u59CB\u64AD\u653E\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002
panic-title = \u51FA\u4E86\u4E9B\u95EE\u9898 :(
more-info = \u66F4\u591A\u4FE1\u606F
run-anyway = \u4ECD\u7136\u8FD0\u884C
continue = \u7EE7\u7EED
report-bug = \u53CD\u9988\u95EE\u9898
update-ruffle = \u66F4\u65B0 Ruffle
ruffle-demo = \u7F51\u9875\u6F14\u793A
ruffle-desktop = \u684C\u9762\u5E94\u7528\u7A0B\u5E8F
ruffle-wiki = \u67E5\u770B Ruffle Wiki
enable-hardware-acceleration = \u770B\u8D77\u6765\u786C\u4EF6\u52A0\u901F\u5DF2\u88AB\u7981\u7528\u3002\u867D\u7136Ruffle\u53EF\u80FD\u53EF\u4EE5\u8FD0\u884C\uFF0C\u4F46\u901F\u5EA6\u53EF\u80FD\u4F1A\u975E\u5E38\u6162\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u94FE\u63A5\u4E86\u89E3\u5982\u4F55\u542F\u7528\u786C\u4EF6\u52A0\u901F\uFF1A
enable-hardware-acceleration-link = \u5E38\u89C1\u95EE\u9898 - Chrome \u786C\u4EF6\u52A0\u901F
view-error-details = \u67E5\u770B\u9519\u8BEF\u8BE6\u60C5
open-in-new-tab = \u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00
click-to-unmute = \u70B9\u51FB\u53D6\u6D88\u9759\u97F3
clipboard-message-title = \u5728Ruffle\u4E2D\u590D\u5236\u7C98\u8D34
clipboard-message-description =
    { $variant ->
       *[unsupported] \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5B8C\u5168\u526A\u8D34\u677F\u8BBF\u95EE,
        [access-denied] \u5BF9\u526A\u8D34\u677F\u7684\u8BBF\u95EE\u5DF2\u88AB\u62D2\u7EDD,
    } \u4F46\u60A8\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u5FEB\u6377\u952E:
clipboard-message-copy = { " " } \u590D\u5236
clipboard-message-cut = { " " } \u526A\u5207
clipboard-message-paste = { " " } \u7C98\u8D34
error-canvas-reload = Canvas \u6E32\u67D3\u5668\u5DF2\u5728\u4F7F\u7528\u4E2D\u65F6\uFF0C\u65E0\u6CD5\u4F7F\u7528 Canvas \u6E32\u67D3\u5668\u91CD\u65B0\u52A0\u8F7D\u3002
error-file-protocol =
    \u770B\u6765\u60A8\u6B63\u5728 "file:" \u534F\u8BAE\u4E0A\u4F7F\u7528 Ruffle\u3002
    \u7531\u4E8E\u6D4F\u89C8\u5668\u4EE5\u5B89\u5168\u539F\u56E0\u963B\u6B62\u8BB8\u591A\u529F\u80FD\uFF0C\u56E0\u6B64\u8FD9\u4E0D\u8D77\u4F5C\u7528\u3002
    \u76F8\u53CD\u6211\u4EEC\u9080\u8BF7\u60A8\u8BBE\u7F6E\u672C\u5730\u670D\u52A1\u5668\u6216\u4F7F\u7528\u7F51\u9875\u6F14\u793A\u6216\u684C\u9762\u5E94\u7528\u7A0B\u5E8F\u3002
error-javascript-config =
    \u7531\u4E8E\u9519\u8BEF\u7684 JavaScript \u914D\u7F6E\uFF0CRuffle \u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u6211\u4EEC\u9080\u8BF7\u60A8\u68C0\u67E5\u9519\u8BEF\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5\u627E\u51FA\u54EA\u4E2A\u53C2\u6570\u6709\u6545\u969C\u3002
    \u60A8\u4E5F\u53EF\u4EE5\u67E5\u9605 Ruffle \u7684 Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-not-found =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D\u6240\u9700\u7684 \u201C.wasm\u201D \u6587\u4EF6\u7EC4\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u786E\u4FDD\u6587\u4EF6\u5DF2\u6B63\u786E\u4E0A\u4F20\u3002
    \u5982\u679C\u95EE\u9898\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4F7F\u7528 \u201CpublicPath\u201D \u8BBE\u7F6E\uFF1A\u8BF7\u67E5\u770B Ruffle \u7684 Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-mime-type =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8BE5\u7F51\u7AD9\u670D\u52A1\u5668\u6CA1\u6709\u63D0\u4F9B ".asm\u201D \u6587\u4EF6\u6B63\u786E\u7684 MIME \u7C7B\u578B\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-invalid-swf =
    Ruffle\u65E0\u6CD5\u89E3\u6790\u8BF7\u6C42\u7684\u6587\u4EF6\u3002
    \u6700\u6709\u53EF\u80FD\u7684\u539F\u56E0\u662F\u8BE5\u8BF7\u6C42\u6587\u4EF6\u4E0D\u662F\u4E00\u4E2A\u5408\u6CD5\u7684SWF\u6587\u4EF6\u3002
error-swf-fetch =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D Flash SWF \u6587\u4EF6\u3002
    \u6700\u53EF\u80FD\u7684\u539F\u56E0\u662F\u6587\u4EF6\u4E0D\u518D\u5B58\u5728\u6240\u4EE5 Ruffle \u6CA1\u6709\u8981\u52A0\u8F7D\u7684\u5185\u5BB9\u3002
    \u8BF7\u5C1D\u8BD5\u8054\u7CFB\u7F51\u7AD9\u7BA1\u7406\u5458\u5BFB\u6C42\u5E2E\u52A9\u3002
error-swf-cors =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D Flash SWF \u6587\u4EF6\u3002
    \u83B7\u53D6\u6743\u9650\u53EF\u80FD\u88AB CORS \u7B56\u7565\u963B\u6B62\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u53C2\u8003 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-cors =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D\u6240\u9700\u7684\u201C.wasm\u201D\u6587\u4EF6\u7EC4\u4EF6\u3002
    \u83B7\u53D6\u6743\u9650\u53EF\u80FD\u88AB CORS \u7B56\u7565\u963B\u6B62\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-invalid =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8FD9\u4E2A\u9875\u9762\u4F3C\u4E4E\u7F3A\u5C11\u6587\u4EF6\u6765\u8FD0\u884C Curl\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-wasm-download =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8FD9\u901A\u5E38\u53EF\u4EE5\u81EA\u884C\u89E3\u51B3\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002
    \u5426\u5219\u8BF7\u8054\u7CFB\u7F51\u7AD9\u7BA1\u7406\u5458\u3002
error-wasm-disabled-on-edge =
    Ruffle \u65E0\u6CD5\u52A0\u8F7D\u6240\u9700\u7684 \u201C.wasm\u201D \u6587\u4EF6\u7EC4\u4EF6\u3002
    \u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BF7\u5C1D\u8BD5\u6253\u5F00\u60A8\u7684\u6D4F\u89C8\u5668\u8BBE\u7F6E\uFF0C\u5355\u51FB"\u9690\u79C1\u3001\u641C\u7D22\u548C\u670D\u52A1"\uFF0C\u5411\u4E0B\u6EDA\u52A8\u5E76\u5173\u95ED"\u589E\u5F3A Web \u5B89\u5168\u6027"\u3002
    \u8FD9\u5C06\u5141\u8BB8\u60A8\u7684\u6D4F\u89C8\u5668\u52A0\u8F7D\u6240\u9700\u7684 \u201C.wasm\u201D \u6587\u4EF6\u3002
    \u5982\u679C\u95EE\u9898\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u5FC5\u987B\u4F7F\u7528\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u3002
error-wasm-unsupported-browser =
    \u60A8\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Ruffle \u8FD0\u884C\u6240\u9700\u7684 WebAssembly \u6269\u5C55\u3002
    \u8BF7\u5207\u6362\u5230\u652F\u6301\u7684\u6D4F\u89C8\u5668\u3002
    \u60A8\u53EF\u4EE5\u5728 Wiki \u4E0A\u627E\u5230\u652F\u6301\u7684\u6D4F\u89C8\u5668\u5217\u8868\u3002
error-javascript-conflict =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8FD9\u4E2A\u9875\u9762\u4F3C\u4E4E\u4F7F\u7528\u4E86\u4E0E Ruffle \u51B2\u7A81\u7684 JavaScript \u4EE3\u7801\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u60A8\u5C1D\u8BD5\u5728\u7A7A\u767D\u9875\u9762\u4E0A\u52A0\u8F7D\u6587\u4EF6\u3002
error-javascript-conflict-outdated = \u60A8\u8FD8\u53EF\u4EE5\u5C1D\u8BD5\u4E0A\u4F20\u53EF\u80FD\u89C4\u907F\u8BE5\u95EE\u9898\u7684\u6700\u65B0\u7248\u672C\u7684 (\u5F53\u524D\u6784\u5EFA\u5DF2\u8FC7\u65F6: { $buildDate })\u3002
error-csp-conflict =
    Ruffle \u5728\u8BD5\u56FE\u521D\u59CB\u5316\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    \u8BE5\u7F51\u7AD9\u670D\u52A1\u5668\u7684\u5185\u5BB9\u5B89\u5168\u7B56\u7565\u4E0D\u5141\u8BB8\u8FD0\u884C\u6240\u9700\u7684 \u201C.wasm\u201D \u7EC4\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u67E5\u9605 Ruffle Wiki \u83B7\u53D6\u5E2E\u52A9\u3002
error-unknown =
    Ruffle \u5728\u8BD5\u56FE\u663E\u793A\u6B64 Flash \u5185\u5BB9\u65F6\u9047\u5230\u4E86\u4E00\u4E2A\u91CD\u5927\u95EE\u9898\u3002
    { $outdated ->
        [true] \u5982\u679C\u60A8\u662F\u670D\u52A1\u5668\u7BA1\u7406\u5458\uFF0C\u8BF7\u5C1D\u8BD5\u4E0A\u4F20\u66F4\u65B0\u7684 Ruffle \u7248\u672C (\u5F53\u524D\u7248\u672C\u5DF2\u8FC7\u65F6: { $buildDate }).
       *[false] \u8FD9\u4E0D\u5E94\u8BE5\u53D1\u751F\uFF0C\u56E0\u6B64\u5982\u679C\u60A8\u53EF\u4EE5\u62A5\u544A\u9519\u8BEF\uFF0C\u6211\u4EEC\u5C06\u975E\u5E38\u611F\u8C22\uFF01
    }
`,"save-manager.ftl":`save-delete-prompt = \u786E\u5B9A\u8981\u5220\u9664\u6B64\u5B58\u6863\u5417\uFF1F
save-reload-prompt =
    \u4E3A\u4E86\u907F\u514D\u6F5C\u5728\u7684\u51B2\u7A81\uFF0C{ $action ->
        [delete] \u5220\u9664
       *[replace] \u66FF\u6362
    } \u6B64\u5B58\u6863\u6587\u4EF6\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u5185\u5BB9\u3002\u662F\u5426\u4ECD\u7136\u7EE7\u7EED\uFF1F
save-download = \u4E0B\u8F7D
save-replace = \u66FF\u6362
save-delete = \u5220\u9664
save-backup-all = \u4E0B\u8F7D\u6240\u6709\u5B58\u6863\u6587\u4EF6
`,"volume-controls.ftl":`volume-controls-mute = \u9759\u97F3
volume-controls-unmute = \u53D6\u6D88\u9759\u97F3
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = \u4E0B\u8F09SWF\u6A94\u6848
context-menu-copy-debug-info = \u8907\u88FD\u9664\u932F\u8CC7\u8A0A
context-menu-open-save-manager = \u958B\u555F\u5B58\u6A94\u7BA1\u7406\u5668
context-menu-about-ruffle =
    { $flavor ->
        [extension] \u95DC\u65BCRuffle\u64F4\u5145\u529F\u80FD ({ $version })
       *[other] \u95DC\u65BCRuffle ({ $version })
    }
context-menu-hide = \u96B1\u85CF\u83DC\u55AE
context-menu-exit-fullscreen = \u9000\u51FA\u5168\u87A2\u5E55
context-menu-enter-fullscreen = \u9032\u5165\u5168\u87A2\u5E55
context-menu-volume-controls = \u97F3\u91CF\u63A7\u5236
`,"messages.ftl":`message-cant-embed =
    Ruffle \u7121\u6CD5\u57F7\u884C\u672C\u9801\u9762\u5167\u5D4C\u7684 Flash\u3002
    \u60A8\u53EF\u4EE5\u5617\u8A66\u5728\u55AE\u7368\u7684\u6A19\u7C64\u9801\u4E2D\u958B\u555F\u6A94\u6848\uFF0C\u4EE5\u907F\u514D\u6B64\u554F\u984C\u3002
message-restored-from-bfcache =
    \u60A8\u7684\u700F\u89BD\u5668\u5F9E\u4E4B\u524D\u7684\u6703\u8A71\u4E2D\u9084\u539F\u4E86\u6B64 Flash \u5167\u5BB9\u3002
    \u82E5\u8981\u91CD\u65B0\u958B\u59CB\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u9801\u9762\u3002
panic-title = \u767C\u751F\u4E86\u67D0\u4E9B\u932F\u8AA4 :(
more-info = \u66F4\u591A\u8CC7\u8A0A
run-anyway = \u76F4\u63A5\u57F7\u884C
continue = \u7E7C\u7E8C
report-bug = \u56DE\u5831BUG
update-ruffle = \u66F4\u65B0Ruffle
ruffle-demo = \u7DB2\u9801\u5C55\u793A
ruffle-desktop = \u684C\u9762\u61C9\u7528\u7A0B\u5F0F
ruffle-wiki = \u67E5\u770BRuffle Wiki
enable-hardware-acceleration = \u770B\u8D77\u4F86\u786C\u9AD4\u52A0\u901F\u5DF2\u505C\u7528\u3002\u96D6\u7136 Ruffle \u53EF\u4EE5\u904B\u4F5C\uFF0C\u4F46\u901F\u5EA6\u53EF\u80FD\u5F88\u6162\u3002\u60A8\u53EF\u4EE5\u900F\u904E\u4EE5\u4E0B\u9023\u7D50\u77AD\u89E3\u5982\u4F55\u555F\u7528\u786C\u9AD4\u52A0\u901F\uFF1A
enable-hardware-acceleration-link = FAQ - Chrome\u786C\u9AD4\u52A0\u901F
view-error-details = \u6AA2\u8996\u932F\u8AA4\u8A73\u7D30\u8CC7\u6599
open-in-new-tab = \u958B\u555F\u65B0\u589E\u5206\u9801
click-to-unmute = \u9EDE\u64CA\u4EE5\u53D6\u6D88\u975C\u97F3
clipboard-message-title = \u5728 Ruffle \u4E2D\u8907\u88FD\u548C\u8CBC\u4E0A
clipboard-message-description =
    { $variant ->
       *[unsupported] \u60A8\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u5B8C\u6574\u7684\u526A\u8CBC\u677F\u5B58\u53D6\u3001
        [access-denied] \u5DF2\u62D2\u7D55\u5B58\u53D6\u526A\u8CBC\u7C3F\u3001
    } \u4F46\u60A8\u53EF\u4EE5\u4F7F\u7528\u9019\u4E9B\u6377\u5F91\u4F86\u4EE3\u66FF\uFF1A
clipboard-message-copy = { " " } \u8907\u88FD
clipboard-message-cut = { " " } \u526A\u4E0B
clipboard-message-paste = { " " } \u8CBC\u4E0A
error-canvas-reload = \u7576\u756B\u5E03\u6E32\u67D3\u5668\u5DF2\u5728\u4F7F\u7528\u4E2D\u6642\uFF0C\u7121\u6CD5\u4F7F\u7528\u756B\u5E03\u6E32\u67D3\u5668\u91CD\u65B0\u8F09\u5165\u3002
error-file-protocol =
    \u60A8\u4F3C\u4E4E\u662F\u5728 \u300Cfile: \u300D\u5354\u5B9A\u4E0A\u57F7\u884C Ruffle\u3002
    \u9019\u4E26\u4E0D\u53EF\u884C\uFF0C\u56E0\u70BA\u700F\u89BD\u5668\u57FA\u65BC\u5B89\u5168\u7406\u7531\u6703\u963B\u64CB\u8A31\u591A\u529F\u80FD\u7684\u904B\u4F5C\u3002
    \u76F8\u53CD\uFF0C\u6211\u5011\u9080\u8ACB\u60A8\u8A2D\u5B9A\u672C\u6A5F\u4F3A\u670D\u5668\uFF0C\u6216\u4F7F\u7528\u7DB2\u9801\u793A\u7BC4\u6216\u684C\u9762\u61C9\u7528\u7A0B\u5F0F\u3002
error-javascript-config =
    \u7531\u65BC JavaScript \u8A2D\u5B9A\u4E0D\u6B63\u78BA\uFF0CRuffle \u9047\u5230\u4E86\u91CD\u5927\u554F\u984C\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u6211\u5011\u9080\u8ACB\u60A8\u6AA2\u67E5\u932F\u8AA4\u7D30\u7BC0\uFF0C\u627E\u51FA\u662F\u54EA\u500B\u53C3\u6578\u51FA\u4E86\u554F\u984C\u3002
    \u60A8\u4E5F\u53EF\u4EE5\u53C3\u8003 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-not-found =
    Ruffle \u672A\u80FD\u8F09\u5165\u6240\u9700\u7684 \u300C.wasm\u300D \u6A94\u6848\u5143\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u78BA\u8A8D\u6A94\u6848\u5DF2\u6B63\u78BA\u4E0A\u50B3\u3002
    \u5982\u679C\u554F\u984C\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u300CpublicPath\u300D\u8A2D\u5B9A\uFF1A\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-mime-type =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u6B64 Web \u4F3A\u670D\u5668\u7121\u6CD5\u63D0\u4F9B MIME \u985E\u578B\u6B63\u78BA\u7684 \u300C.wasm \u300D\u6A94\u6848\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-invalid-swf =
    Ruffle \u7121\u6CD5\u89E3\u6790\u8ACB\u6C42\u7684\u6A94\u6848\u3002
    \u6700\u53EF\u80FD\u7684\u539F\u56E0\u662F\u8ACB\u6C42\u7684\u6A94\u6848\u4E0D\u662F\u6709\u6548\u7684 SWF\u3002
error-swf-fetch =
    Ruffle \u672A\u80FD\u8F09\u5165 Flash SWF \u6A94\u6848\u3002
    \u6700\u53EF\u80FD\u7684\u539F\u56E0\u662F\u8A72\u6A94\u6848\u5DF2\u4E0D\u5B58\u5728\uFF0C\u56E0\u6B64 Ruffle \u7121\u6CD5\u8F09\u5165\u4EFB\u4F55\u5167\u5BB9\u3002
    \u8ACB\u5617\u8A66\u806F\u7D61\u7DB2\u7AD9\u7BA1\u7406\u54E1\u5C0B\u6C42\u5354\u52A9\u3002
error-swf-cors =
    Ruffle \u672A\u80FD\u8F09\u5165 Flash SWF \u6A94\u6848\u3002
    \u8A2A\u554F fetch \u53EF\u80FD\u5DF2\u88AB CORS \u7B56\u7565\u5C01\u9396\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-cors =
    Ruffle \u672A\u80FD\u8F09\u5165\u6240\u9700\u7684 \u300C.wasm\u300D \u6A94\u6848\u5143\u4EF6\u3002
    \u8A2A\u554F fetch \u53EF\u80FD\u5DF2\u88AB CORS \u7B56\u7565\u5C01\u9396\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-invalid =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u6B64\u9801\u9762\u4F3C\u4E4E\u6709\u907A\u5931\u6216\u7121\u6548\u7684\u6A94\u6848\uFF0C\u7121\u6CD5\u57F7\u884C Ruffle\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u7372\u5F97\u5354\u52A9\u3002
error-wasm-download =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u9019\u901A\u5E38\u53EF\u4EE5\u81EA\u884C\u89E3\u6C7A\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5617\u8A66\u91CD\u65B0\u8F09\u5165\u9801\u9762\u3002
    \u5426\u5247\uFF0C\u8ACB\u806F\u7D61\u7DB2\u7AD9\u7BA1\u7406\u54E1\u3002
error-wasm-disabled-on-edge =
    Ruffle \u672A\u80FD\u8F09\u5165\u6240\u9700\u7684\u300C.wasm \u300D\u6A94\u6848\u5143\u4EF6\u3002
    \u8981\u89E3\u6C7A\u9019\u500B\u554F\u984C\uFF0C\u8ACB\u5617\u8A66\u6253\u958B\u700F\u89BD\u5668\u7684\u8A2D\u5B9A\uFF0C\u6309\u4E00\u4E0B\u300C\u96B1\u79C1\u3001\u641C\u5C0B\u548C\u670D\u52D9\u300D\uFF0C\u5411\u4E0B\u6372\u52D5\uFF0C\u7136\u5F8C\u95DC\u9589\u300C\u52A0\u5F37\u60A8\u5728\u7DB2\u8DEF\u4E0A\u7684\u5B89\u5168\u6027\u300D\u3002
    \u9019\u5C07\u5141\u8A31\u60A8\u7684\u700F\u89BD\u5668\u8F09\u5165\u6240\u9700\u7684\u300C.wasm \u300D\u6A94\u6848\u3002
    \u5982\u679C\u554F\u984C\u4ECD\u7136\u5B58\u5728\uFF0C\u60A8\u53EF\u80FD\u5FC5\u9808\u4F7F\u7528\u5176\u4ED6\u700F\u89BD\u5668\u3002
error-wasm-unsupported-browser =
    \u60A8\u4F7F\u7528\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4 Ruffle \u57F7\u884C\u6240\u9700\u7684 WebAssembly \u64F4\u5145\u5957\u4EF6\u3002
    \u8ACB\u5207\u63DB\u5230\u652F\u63F4\u7684\u700F\u89BD\u5668\u3002
    \u60A8\u53EF\u4EE5\u5728 Wiki \u4E0A\u627E\u5230\u652F\u63F4\u7684\u700F\u89BD\u5668\u6E05\u55AE\u3002
error-javascript-conflict =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u9019\u500B\u9801\u9762\u4F3C\u4E4E\u4F7F\u7528\u4E86\u8207 Ruffle \u76F8\u885D\u7A81\u7684 JavaScript \u7A0B\u5F0F\u78BC\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u5617\u8A66\u5728\u7A7A\u767D\u9801\u9762\u4E0A\u8F09\u5165\u6A94\u6848\u3002
error-javascript-conflict-outdated = \u60A8\u4E5F\u53EF\u4EE5\u5617\u8A66\u4E0A\u50B3\u8F03\u65B0\u7248\u672C\u7684 Ruffle\uFF0C\u53EF\u80FD\u6703\u907F\u514D\u6B64\u554F\u984C (\u76EE\u524D\u7684\u7248\u672C\u5DF2\u904E\u6642\uFF1A{ $buildDate })\u3002
error-csp-conflict =
    Ruffle \u5728\u5617\u8A66\u521D\u59CB\u5316\u6642\u9047\u5230\u91CD\u5927\u554F\u984C\u3002
    \u6B64\u7DB2\u9801\u4F3A\u670D\u5668\u7684\u5167\u5BB9\u5B89\u5168\u653F\u7B56\u4E0D\u5141\u8A31\u57F7\u884C\u6240\u9700\u7684 \u300C.wasm \u300D\u5143\u4EF6\u3002
    \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u53C3\u95B1 Ruffle wiki \u4EE5\u53D6\u5F97\u5354\u52A9\u3002
error-unknown =
    Ruffle \u5728\u5617\u8A66\u986F\u793A\u6B64 Flash \u5167\u5BB9\u6642\u9047\u5230\u4E86\u91CD\u5927\u554F\u984C\u3002
    { $outdated ->
        [true]  \u5982\u679C\u60A8\u662F\u4F3A\u670D\u5668\u7BA1\u7406\u54E1\uFF0C\u8ACB\u5617\u8A66\u4E0A\u50B3\u8F03\u65B0\u7248\u672C\u7684 Ruffle (\u76EE\u524D\u7684\u7248\u672C\u5DF2\u7D93\u904E\u6642 { $buildDate })\u3002
       *[false] \u9019\u4E0D\u61C9\u8A72\u767C\u751F\uFF0C\u6240\u4EE5\u5982\u679C\u60A8\u80FD\u63D0\u51FA\u932F\u8AA4\uFF0C\u6211\u5011\u6703\u975E\u5E38\u611F\u6FC0\uFF01
    }
`,"save-manager.ftl":`save-delete-prompt = \u4F60\u78BA\u5B9A\u8981\u522A\u9664\u9019\u500B\u5B58\u6A94\u55CE\uFF1F
save-reload-prompt =
    \u552F\u4E00\u65B9\u6CD5\u53EA\u6709 { $action ->
        [delete] \u522A\u9664
       *[replace] \u53D6\u4EE3
    } \u9019\u500B\u5B58\u6A94\u4E0D\u6703\u5B8C\u5168\u53D6\u4EE3\u76F4\u5230\u91CD\u65B0\u555F\u52D5\u3002 \u4F60\u9700\u8981\u7E7C\u7E8C\u55CE?
save-download = \u4E0B\u8F09
save-replace = \u53D6\u4EE3
save-delete = \u522A\u9664
save-backup-all = \u4E0B\u8F09\u6240\u6709\u5B58\u6A94\u6A94\u6848\u3002
`,"volume-controls.ftl":`volume-controls-mute = \u975C\u97F3
volume-controls-unmute = \u53D6\u6D88\u975C\u97F3
`}},Ou={};for(let[a,u]of Object.entries(h0)){let e=new Qe(a);if(u){let n;for(let[t,r]of Object.entries(u))if(r){n??=xe();for(let o of e.addResource(new f0(r)))console.error(`Error in text for ${a} ${t}: ${o}`)}he(n)}Ou[a]=e}function v0(a,u,e){let n=Ou[a];if(n!==void 0){let t=n.getMessage(u);if(t!==void 0&&t.value)return n.formatPattern(t.value,e)}return null}function x(a,u){let e=xe(),n=p0(navigator.languages,Object.keys(Ou),{defaultLocale:"en-US"});for(let t in n){let r=v0(n[t],a,u);if(r)return r}return console.error(`Unknown text key '${a}'`),he(e),a}function F(a,u){let e=document.createElement("div");return x(a,u).split(`
`).forEach((n=>{let t=document.createElement("p");t.innerText=n,e.appendChild(t)})),e}let $u=navigator.userAgent.includes("Mac OS X")?"Command":"Ctrl",$=document.createElement("template");$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("style",{children:`:host{all:initial;pointer-events:inherit;--ruffle-blue:#37528c;--ruffle-orange:#ffad33;display:inline-block;font-family:Arial,sans-serif;height:400px;letter-spacing:.4px;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:550px;-webkit-tap-highlight-color:transparent}:host(:-webkit-full-screen){display:block;height:100%!important;width:100%!important}.hidden{display:none!important}#container,#message-overlay,#panic,#play-button,#splash-screen,#unmute-overlay,#unmute-overlay .background{inset:0;position:absolute}#container{outline:none;overflow:hidden}#container canvas{height:100%;width:100%}#play-button,#unmute-overlay{cursor:pointer;display:none}#unmute-overlay .background{background:#000;opacity:.7}#play-button .icon,#unmute-overlay .icon{height:50%;left:50%;max-height:384px;max-width:384px;opacity:.8;position:absolute;top:50%;transform:translate(-50%,-50%);width:50%}#play-button:hover .icon,#unmute-overlay:hover .icon{opacity:1}#unmute-overlay-svg{scale:.8}#panic{background:linear-gradient(180deg,#fd3a40,#fda138);color:#fff;display:flex;flex-flow:column;font-size:20px;justify-content:space-around;overflow:auto;text-align:center}#panic a{color:var(--ruffle-blue);font-weight:700}#panic-title{font-size:xxx-large;font-weight:700}#panic-body.details{flex:0.9;margin:0 10px}#panic-body textarea{height:100%;resize:none;width:100%}#panic ul{display:flex;justify-content:space-evenly;list-style-type:none;padding:0}#message-overlay{align-items:center;background:var(--ruffle-blue);color:var(--ruffle-orange);display:flex;justify-content:center;opacity:1;overflow:auto;position:absolute;z-index:2}#message-overlay .message{font-size:20px;max-height:100%;max-width:100%;padding:5%;text-align:center}#message-overlay p{margin:.5em 0}#message-overlay .message div{-moz-column-gap:1em;column-gap:1em;display:flex;flex-wrap:wrap;justify-content:center}#message-overlay a,#message-overlay button{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:.6em;color:var(--ruffle-orange);cursor:pointer;font-size:1.25em;font-weight:700;margin:2% 0;padding:10px;text-decoration:none}#message-overlay a:hover,#message-overlay button:hover{background:#ffffff4c}#continue-btn{background:var(--ruffle-blue);border:2px solid var(--ruffle-orange);border-radius:20px;color:var(--ruffle-orange);cursor:pointer;font-size:20px;font-weight:700;padding:10px}#continue-btn:hover{background:#ffffff4c}#context-menu-overlay,.modal{height:100%;position:absolute;width:100%;z-index:1}#context-menu{background-color:var(--modal-background);border:1px solid gray;box-shadow:0 5px 10px -5px #000;color:rgb(var(--modal-foreground-rgb));font-size:14px;list-style:none;margin:0;padding:3px 0;position:absolute;text-align:start;white-space:nowrap}#context-menu .menu-item{color:rgb(var(--modal-foreground-rgb));padding:5px 10px}#context-menu .menu-item.disabled{color:rgb(var(--modal-foreground-rgb),.5);cursor:default}#context-menu .menu-item:not(.disabled):hover{background-color:rgb(var(--modal-foreground-rgb),.15)}#context-menu .menu-separator hr{border:none;border-bottom:1px solid rgb(var(--modal-foreground-rgb),.2);margin:3px}#splash-screen{align-items:center;background:var(
        --splash-screen-background,var(--preloader-background,var(--ruffle-blue))
    );display:flex;flex-direction:column;justify-content:center}.loadbar{background:#253559;height:20%;max-height:10px;max-width:316px;width:100%}.loadbar-inner{background:var(--ruffle-orange);height:100%;max-width:100%;width:0}.logo{display:var(--logo-display,block);max-height:150px;max-width:380px}.loading-animation{aspect-ratio:1;margin-bottom:2%;max-height:28px;max-width:28px;width:10%}.spinner{stroke-dasharray:180;stroke-dashoffset:135;stroke:var(--ruffle-orange);animation:a 1.5s linear infinite;transform-origin:50% 50%}@keyframes a{to{transform:rotate(1turn)}}#virtual-keyboard{height:1px;opacity:0;position:absolute;top:-100px;width:1px}.modal{background-color:#0008}.modal-area{background-color:var(--modal-background);border-radius:12px;box-shadow:0 2px 6px 0 #0008;color:rgb(var(--modal-foreground-rgb));left:50%;padding:8px 12px;position:relative;transform:translateX(-50%);width:-moz-fit-content;width:fit-content}#modal-area{height:300px;width:450px}.close-modal{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 -960 960 960'%3E%3Cpath d='M480-392 300-212q-18 18-44 18t-44-18-18-44 18-44l180-180-180-180q-18-18-18-44t18-44 44-18 44 18l180 180 180-180q18-18 44-18t44 18 18 44-18 44L568-480l180 180q18 18 18 44t-18 44-44 18-44-18z'/%3E%3C/svg%3E");cursor:pointer;filter:var(--modal-foreground-filter);height:16px;width:16px}.modal-button{background-color:rgb(var(--modal-foreground-rgb),.2);border-radius:6px;color:rgb(var(--modal-foreground-rgb));cursor:pointer;display:inline-block;padding:4px 8px;text-decoration:none}:not(#volume-controls)>.close-modal{position:absolute;right:16px;top:14px}.general-save-options{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.3);padding-bottom:8px;text-align:center}#local-saves{border-collapse:collapse;color:inherit;display:block;height:calc(100% - 45px);min-height:30px;overflow-y:auto}#local-saves td{border-bottom:2px solid rgb(var(--modal-foreground-rgb),.15);height:30px}#local-saves td:first-child{width:100%;word-break:break-all}.save-option{cursor:pointer;display:inline-block;filter:var(--modal-foreground-filter);height:24px;opacity:.4;vertical-align:middle;width:24px}#local-saves>tr:hover .save-option{opacity:1}#download-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800t28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360t28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360t28.5 11.5T800-320v80q0 33-23.5 56.5T720-160z'/%3E%3C/svg%3E")}#replace-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1080 960 1200'%3E%3Cpath d='M440-367v127q0 17 11.5 28.5T480-200t28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5T599-323t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5-15 2.5-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5zM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80zm280-560q0 17 11.5 28.5T560-600h160L520-800z'/%3E%3C/svg%3E")}#delete-save{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -1020 960 1080'%3E%3Cpath d='M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760t11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760t-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640t-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280m160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640t-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280'/%3E%3C/svg%3E")}.replace-save{display:none}#video-modal .modal-area{box-sizing:border-box;height:95%;width:95%}#video-holder{box-sizing:border-box;height:100%;padding:36px 4px 6px}#video-holder video{background-color:#000;height:100%;width:100%}#volume-controls{align-items:center;display:flex;gap:6px}#mute-checkbox{display:none}label[for=mute-checkbox]{cursor:pointer;filter:var(--modal-foreground-filter);height:24px;line-height:0;width:24px}#volume-mute{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 -960 960 960'%3E%3Cpath d='m719.13-419.35-71.67 71.68Q634.78-335 617.13-335t-30.33-12.67q-12.67-12.68-12.67-30.33t12.67-30.33L658.48-480l-71.68-71.67q-12.67-12.68-12.67-30.33t12.67-30.33Q599.48-625 617.13-625t30.33 12.67l71.67 71.68 71.67-71.68Q803.48-625 821.13-625t30.33 12.67q12.67 12.68 12.67 30.33t-12.67 30.33L779.78-480l71.68 71.67q12.67 12.68 12.67 30.33t-12.67 30.33Q838.78-335 821.13-335t-30.33-12.67zM278-357.87H161.22q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67H278l130.15-129.91q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-min{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='161 -960 960 960'%3E%3Cpath d='M438.65-357.87H321.87q-17.65 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.68-12.67 30.33-12.67h116.78L568.8-732.04q20.63-20.63 46.98-9.45 26.35 11.19 26.35 39.77v443.44q0 28.58-26.35 39.77-26.35 11.18-46.98-9.45z'/%3E%3C/svg%3E")}#volume-mid{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='80 -960 960 960'%3E%3Cpath d='M357.98-357.87H241.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L487.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM741.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q741.8-522.48 741.8-480'/%3E%3C/svg%3E")}#volume-max{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='9 -960 960 960'%3E%3Cpath d='M754.22-480.5q0-78.52-41.88-143.9t-111.91-98.62q-14.47-6.74-20.47-20.96t-.53-28.93q5.74-15.72 20.34-22.46t29.58 0q92.48 42.46 147.97 127.05 55.48 84.6 55.48 187.82t-55.48 187.82q-55.49 84.59-147.97 127.05-14.98 6.74-29.58 0t-20.34-22.46q-5.47-14.71.53-28.93t20.47-20.96q70.03-33.24 111.91-98.62t41.88-143.9M286.98-357.87H170.2q-17.66 0-30.33-12.67-12.67-12.68-12.67-30.33v-158.26q0-17.65 12.67-30.33 12.67-12.67 30.33-12.67h116.78L416.65-731.8q20.63-20.64 47.1-9.57t26.47 39.65v443.44q0 28.58-26.47 39.65t-47.1-9.57zM670.8-480q0 42.48-20.47 80.09-20.48 37.61-54.94 60.82-10.22 5.98-20.19.25-9.98-5.73-9.98-17.44v-248.44q0-11.71 9.98-17.32 9.97-5.61 20.19.37 34.46 23.71 54.94 61.45Q670.8-522.48 670.8-480'/%3E%3C/svg%3E")}#volume-slider-text{text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:4.8ch}#hardware-acceleration-modal .modal-area{box-sizing:border-box;padding:16px 48px;text-align:center;width:95%}#acceleration-text{display:block;margin-bottom:8px}#clipboard-modal h2{margin-right:36px;margin-top:4px}#clipboard-modal p:last-child{margin-bottom:2px}@media (prefers-color-scheme:light){:host{--modal-background:#fafafa;--modal-foreground-rgb:0,0,0;--modal-foreground-filter:none}}@media (prefers-color-scheme:dark){:host{--modal-background:#282828;--modal-foreground-rgb:221,221,221;--modal-foreground-filter:invert(90%)}}`})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("style",{id:"dynamic-styles"})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsxs)("div",{id:"container",children:[(0,d.jsx)("div",{id:"play-button",children:(0,d.jsx)("div",{class:"icon",children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%",children:[(0,d.jsxs)("defs",{xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsxs)("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"a",gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad",children:[(0,d.jsx)("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"0%","stop-color":"#FDA138"}),(0,d.jsx)("stop",{xmlns:"http://www.w3.org/2000/svg",offset:"100%","stop-color":"#FD3A40"})]}),(0,d.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",id:"b",children:[(0,d.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"}),(0,d.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",d:"M87 55v140l100-70L87 55z"})]})]}),(0,d.jsx)("use",{xmlns:"http://www.w3.org/2000/svg",href:"#b"})]})})}),(0,d.jsxs)("div",{id:"unmute-overlay",children:[(0,d.jsx)("div",{class:"background"}),(0,d.jsx)("div",{class:"icon",children:(0,d.jsxs)("svg",{id:"unmute-overlay-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",children:[(0,d.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"}),(0,d.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"}),(0,d.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"}),(0,d.jsx)("text",{xmlns:"http://www.w3.org/2000/svg",id:"unmute-text",x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF",children:"Click to unmute"})]})})]}),(0,d.jsx)("input",{"aria-hidden":"true",id:"virtual-keyboard",type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"none"})]})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsxs)("div",{id:"splash-screen",class:"hidden",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"logo",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150",children:(0,d.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"}),(0,d.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"})]})}),(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"loading-animation",viewBox:"0 0 66 66",children:(0,d.jsx)("circle",{xmlns:"http://www.w3.org/2000/svg",class:"spinner",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"})}),(0,d.jsx)("div",{class:"loadbar",children:(0,d.jsx)("div",{class:"loadbar-inner"})})]})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("div",{id:"save-manager",class:"modal hidden",children:(0,d.jsxs)("div",{id:"modal-area",class:"modal-area",children:[(0,d.jsx)("span",{class:"close-modal"}),(0,d.jsx)("div",{class:"general-save-options",children:(0,d.jsx)("span",{class:"modal-button"})}),(0,d.jsx)("table",{id:"local-saves"})]})})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("div",{id:"volume-controls-modal",class:"modal hidden",children:(0,d.jsx)("div",{class:"modal-area",children:(0,d.jsxs)("div",{id:"volume-controls",children:[(0,d.jsx)("input",{id:"mute-checkbox",type:"checkbox"}),(0,d.jsx)("label",{id:"volume-mute",for:"mute-checkbox",title:x("volume-controls-unmute")}),(0,d.jsx)("label",{id:"volume-min",for:"mute-checkbox",title:x("volume-controls-mute")}),(0,d.jsx)("label",{id:"volume-mid",for:"mute-checkbox",title:x("volume-controls-mute")}),(0,d.jsx)("label",{id:"volume-max",for:"mute-checkbox",title:x("volume-controls-mute")}),(0,d.jsx)("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1"}),(0,d.jsx)("span",{id:"volume-slider-text"}),(0,d.jsx)("span",{class:"close-modal"})]})})})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("div",{id:"video-modal",class:"modal hidden",children:(0,d.jsxs)("div",{class:"modal-area",children:[(0,d.jsx)("span",{class:"close-modal"}),(0,d.jsx)("div",{id:"video-holder"})]})})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("div",{id:"hardware-acceleration-modal",class:"modal hidden",children:(0,d.jsxs)("div",{class:"modal-area",children:[(0,d.jsx)("span",{class:"close-modal"}),(0,d.jsx)("span",{id:"acceleration-text",children:x("enable-hardware-acceleration")}),(0,d.jsx)("a",{href:"https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration",target:"_blank",class:"modal-button",children:x("enable-hardware-acceleration-link")})]})})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("div",{id:"clipboard-modal",class:"modal hidden",children:(0,d.jsxs)("div",{class:"modal-area",children:[(0,d.jsx)("span",{class:"close-modal"}),(0,d.jsx)("h2",{children:x("clipboard-message-title")}),(0,d.jsx)("p",{id:"clipboard-modal-description"}),(0,d.jsxs)("p",{children:[(0,d.jsxs)("b",{children:[$u,"+C"]}),(0,d.jsx)("span",{children:x("clipboard-message-copy")})]}),(0,d.jsxs)("p",{children:[(0,d.jsxs)("b",{children:[$u,"+X"]}),(0,d.jsx)("span",{children:x("clipboard-message-cut")})]}),(0,d.jsxs)("p",{children:[(0,d.jsxs)("b",{children:[$u,"+V"]}),(0,d.jsx)("span",{children:x("clipboard-message-paste")})]})]})})}),{})),$.content.appendChild((0,d.jsx)((function(){return(0,d.jsx)("div",{id:"context-menu-overlay",class:"hidden",children:(0,d.jsx)("ul",{id:"context-menu"})})}),{}));let ve="application/x-shockwave-flash",ge="application/futuresplash",we="application/x-shockwave-flash2-preview",ke="application/vnd.adobe.flash.movie";function ye(a,u){let e=(function(n){let t="";try{t=new URL(n,"https://example.com").pathname}catch{}if(t&&t.length>=4){let r=t.slice(-4).toLowerCase();if(r===".swf"||r===".spl")return!0}return!1})(a);return u?(function(n,t){switch(n=n.toLowerCase()){case ve.toLowerCase():case ge.toLowerCase():case we.toLowerCase():case ke.toLowerCase():return!0;default:if(t)switch(n){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1})(u,e):e}let Tu=null,B=!1;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==""){let a=document.currentScript.src;a.endsWith(".js")||a.endsWith("/")||(a+="/"),Tu=new URL(".",a),B=Tu.protocol.includes("extension")}}catch(a){console.warn("Unable to get currentScript URL",a)}let du="https://ruffle.rs";class Re extends Error{constructor(u,e){super(`Failed to fetch ${u}`),this.swfUrl=u,this.statusNotOk=e,this.swfUrl=u,this.statusNotOk=e}}class ze extends Error{constructor(u){super(`Not a valid swf: ${u}`)}}class Iu extends Error{constructor(u){super("Failed to load Ruffle WASM"),this.cause=u}}class je extends Error{constructor(u){super(`Invalid options: ${u}`)}}var g0=b(29);function Wu(){let a=new Date(M.buildDate),u=new Date;return u.setMonth(u.getMonth()-6),u>a}let w={OpenDemo:{type:"open_link",url:du+"/demo",label:x("ruffle-demo")},DownloadDesktop:{type:"open_link",url:du+"/downloads#desktop-app",label:x("ruffle-desktop")},UpdateRuffle:{type:"open_link",url:du+"/downloads",label:x("update-ruffle")},CreateReport:{type:"create_report"},ShowDetails:{type:"show_details"},createReportOrUpdate(){return Wu()?this.UpdateRuffle:this.CreateReport},openWiki:(a,u)=>({type:"open_link",url:`https://github.com/ruffle-rs/ruffle/wiki/${a}`,label:u??x("ruffle-wiki")})};function w0(a,u,e,n){let t=e.join(""),{body:r,actions:o}=(function(s){if(s instanceof Re)return s.swfUrl&&!s.swfUrl.protocol.includes("http")?{body:F("error-file-protocol"),actions:[w.OpenDemo,w.DownloadDesktop]}:window.location.origin===s.swfUrl?.origin||s.statusNotOk||window.location.protocol.includes("extension")?{body:F("error-swf-fetch"),actions:[w.ShowDetails]}:{body:F("error-swf-cors"),actions:[w.openWiki("Using-Ruffle#configure-cors-header"),w.ShowDetails]};if(s instanceof ze)return{body:F("error-invalid-swf"),actions:[w.ShowDetails]};if(s instanceof Iu){if(window.location.protocol==="file:")return{body:F("error-file-protocol"),actions:[w.OpenDemo,w.DownloadDesktop]};let f=String(s.cause.message).toLowerCase();if(f.includes("mime"))return{body:F("error-wasm-mime-type"),actions:[w.openWiki("Using-Ruffle#configure-webassembly-mime-type"),w.ShowDetails]};if(f.includes("networkerror")||f.includes("failed to fetch")||f.includes("load failed"))return{body:F("error-wasm-cors"),actions:[w.openWiki("Using-Ruffle#configure-cors-header"),w.ShowDetails]};if(f.includes("disallowed by embedder"))return{body:F("error-csp-conflict"),actions:[w.openWiki("Using-Ruffle#configure-wasm-csp"),w.ShowDetails]};if(s.cause.name==="CompileError"&&f.includes("bad type"))return{body:F("error-wasm-unsupported-browser"),actions:[w.openWiki("#web"),w.ShowDetails]};if(s.cause.name==="CompileError")return{body:F("error-wasm-invalid"),actions:[w.openWiki("Using-Ruffle#addressing-a-compileerror"),w.ShowDetails]};if((f.includes("could not download wasm module")||f.includes("webassembly compilation aborted"))&&s.cause.name==="TypeError")return{body:F("error-wasm-download"),actions:[w.ShowDetails]};if(s.cause.name==="TypeError"){let h=F("error-javascript-conflict");return Wu()&&h.appendChild(F("error-javascript-conflict-outdated",{buildDate:M.buildDate})),{body:h,actions:[w.createReportOrUpdate(),w.ShowDetails]}}return navigator.userAgent.includes("Edg")&&f.includes("webassembly is not defined")?{body:F("error-wasm-disabled-on-edge"),actions:[w.openWiki("Frequently-Asked-Questions-For-Users#edge-webassembly-error",x("more-info")),w.ShowDetails]}:{body:F("error-wasm-not-found"),actions:[w.openWiki("Using-Ruffle#configuration-options"),w.ShowDetails]}}return s instanceof je?{body:F("error-javascript-config"),actions:[w.openWiki("Using-Ruffle#javascript-api"),w.ShowDetails]}:{body:F("error-unknown",{buildDate:M.buildDate,outdated:String(Wu)}),actions:[w.createReportOrUpdate(),w.ShowDetails]}})(u),i=(0,g0.createRef)(),c=()=>{i.current.classList.add("details"),i.current.replaceChildren((0,d.jsx)("textarea",{readOnly:!0,children:t}))};a.textContent="",a.appendChild((0,d.jsxs)("div",{id:"panic",children:[(0,d.jsx)("div",{id:"panic-title",children:x("panic-title")}),(0,d.jsx)("div",{id:"panic-body",ref:i,children:r}),(0,d.jsx)("div",{id:"panic-footer",children:(0,d.jsx)("ul",{children:o.map((s=>(function({action:f,showDetails:h,errorArray:p,errorText:v,swfUrl:R}){if(f.type==="show_details"){let q=()=>(h(),!1);return(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"#",id:"panic-view-details",onClick:q,children:x("view-error-details")})})}if(f.type==="open_link")return(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:f.url,target:"_top",children:f.label})});{let q;q=document.location.protocol.includes("extension")&&R?R.href:document.location.href,q=q.split(/[?#]/,1)[0];let O=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${q}`)}&template=error_report.md&labels=error-report&body=`,N=encodeURIComponent(v);return p.stackIndex>-1&&String(O+N).length>8195&&(p[p.stackIndex]=null,p.avmStackIndex>-1&&(p[p.avmStackIndex]=null),N=encodeURIComponent(p.join(""))),O+=N,(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:O,target:"_top",children:x("report-bug")})})}})({action:s,showDetails:c,errorText:t,errorArray:e,swfUrl:n})))})})]}))}let k0=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),y0=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),R0=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),z0=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),j0=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),Lu=null;async function S0(a){Lu===null&&(Lu=(async function(e){x0();let n=(await Promise.all([k0(),j0(),R0(),z0(),y0()])).every(Boolean);n||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"),bu.options.onFirstLoad?.(),bu.options.onFirstLoad=()=>{};let{default:t,RuffleInstanceBuilder:r,ZipWriter:o}=await(n?b.e(655).then(b.bind(b,655)):b.e(482).then(b.bind(b,482))),i,c=n?new URL(b(797),b.b):new URL(b(124),b.b),s=await fetch(c);if(e&&typeof ReadableStreamDefaultController=="function"){let h=s?.headers?.get("content-length")||"",p=0,v=parseInt(h);i=new Response(new ReadableStream({async start(R){let q=s.body?.getReader();if(!q)throw"Response had no body";for(e(p,v);;){let{done:O,value:N}=await q.read();if(O)break;N?.byteLength&&(p+=N?.byteLength),R.enqueue(N),e(p,v)}R.close()}}),s)}else i=s;return await t({module_or_path:i}),[r,o]})(a));let u=await Lu;return[new u[0],()=>new u[1]]}let Nu={};function Uu(a,u){let e=Nu[a];if(e!==void 0){if(e.class!==u)throw new Error("Internal naming conflict on "+a);return e.name}let n=0;if(window.customElements!==void 0)for(;n<999;){let t=a;if(n>0&&(t=t+"-"+n),window.customElements.get(t)===void 0)return window.customElements.define(t,u),Nu[a]={class:u,name:t,internalName:a},t;n+=1}throw new Error("Failed to assign custom element "+a)}function y(a){return a!=null}function C0(a,u){if(y(u.allowScriptAccess)&&a.setAllowScriptAccess(u.allowScriptAccess),y(u.backgroundColor)&&a.setBackgroundColor((function(e){if(e.startsWith("#")&&(e=e.substring(1)),e.length<6)return;let n=0;for(let t=0;t<6;t++){let r=parseInt(e[t],16);isNaN(r)?n<<=4:n=n<<4|r}return n})(u.backgroundColor)),y(u.upgradeToHttps)&&a.setUpgradeToHttps(u.upgradeToHttps),y(u.compatibilityRules)&&a.setCompatibilityRules(u.compatibilityRules),y(u.letterbox)&&a.setLetterbox(u.letterbox.toLowerCase()),y(u.base)&&a.setBaseUrl(u.base),y(u.menu)&&a.setShowMenu(u.menu),y(u.allowFullscreen)&&a.setAllowFullscreen(u.allowFullscreen),y(u.salign)&&a.setStageAlign(u.salign.toLowerCase()),y(u.forceAlign)&&a.setForceAlign(u.forceAlign),y(u.quality)?a.setQuality(u.quality.toLowerCase()):window.orientation!==void 0&&(console.log("Running on a mobile device; defaulting to low quality"),a.setQuality("low")),y(u.scale)&&a.setScale(u.scale.toLowerCase()),y(u.forceScale)&&a.setForceScale(u.forceScale),y(u.frameRate)&&a.setFrameRate(u.frameRate),y(u.wmode)&&a.setWmode(u.wmode),y(u.logLevel)&&a.setLogLevel(u.logLevel),y(u.maxExecutionDuration)&&a.setMaxExecutionDuration((function(e){return typeof e=="number"?e:e.secs})(u.maxExecutionDuration)),y(u.playerVersion)&&a.setPlayerVersion(u.playerVersion),y(u.preferredRenderer)&&a.setPreferredRenderer(u.preferredRenderer),y(u.openUrlMode)&&a.setOpenUrlMode(u.openUrlMode.toLowerCase()),y(u.allowNetworking)&&a.setAllowNetworking(u.allowNetworking.toLowerCase()),y(u.credentialAllowList)&&a.setCredentialAllowList(u.credentialAllowList),y(u.playerRuntime)&&a.setPlayerRuntime(u.playerRuntime),y(u.socketProxy))for(let e of u.socketProxy)a.addSocketProxy(e.host,e.port,e.proxyUrl);if(y(u.gamepadButtonMapping))for(let[e,n]of Object.entries(u.gamepadButtonMapping))a.addGamepadButtonMapping(e,n);if(y(u.urlRewriteRules))for(let[e,n]of u.urlRewriteRules)if(e instanceof RegExp)a.addUrlRewriteRule(e,n);else{let t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),r=new RegExp(`^${t}$`),o=n.replace(/\$/g,"$$$$");a.addUrlRewriteRule(r,o)}y(u.scrollingBehavior)&&a.setScrollingBehavior(u.scrollingBehavior)}let A0=/^\s*(\d+(\.\d+)?(%)?)/,vu=!1;function _u(a){if(a==null)return{};a instanceof URLSearchParams||(a=new URLSearchParams(a));let u={};for(let[e,n]of a)u[e]=n.toString();return u}class Se{constructor(u,e){this.x=u,this.y=e}distanceTo(u){let e=u.x-this.x,n=u.y-this.y;return Math.sqrt(e*e+n*n)}}class V{constructor(u,e,n){this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this._suppressContextMenu=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.onFSCommand=[],this.config={},this.SaveRow=({rowKey:i,solName:c,solData:s})=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{title:i,children:c}),(0,d.jsx)("td",{children:(0,d.jsx)("span",{class:"save-option",id:"download-save",title:x("save-download"),onClick:()=>Ku((function(f,h){let p=Ce(f);return new Blob([p],{type:h})})(s,"application/octet-stream"),c+".sol")})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("input",{type:"file",accept:".sol",class:"replace-save",id:"replace-save-"+i,onChange:f=>this.replaceSOL(f,i)}),(0,d.jsx)("label",{for:"replace-save-"+i,class:"save-option",id:"replace-save",title:x("save-replace")})]}),(0,d.jsx)("td",{children:(0,d.jsx)("span",{class:"save-option",id:"delete-save",title:x("save-delete"),onClick:()=>this.deleteSave(i)})})]}),this.element=u,this.debugPlayerInfo=e,this.onCallbackAvailable=n,this.shadow=this.element.attachShadow({mode:"open",delegatesFocus:!0}),this.shadow.appendChild($.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",(()=>this.play())),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.clipboardModal=this.shadow.getElementById("clipboard-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.addModalJavaScript(this.clipboardModal),this.volumeSettings=new E0(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);let t=this.saveManager.querySelector(".modal-button");t&&(t.addEventListener("click",this.backupSaves.bind(this)),t.innerText=x("save-backup-all"));let r=this.unmuteOverlay.querySelector("#unmute-overlay-svg");r&&(r.querySelector("#unmute-text").textContent=x("click-to-unmute")),this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu");let o=i=>{i.preventDefault(),i.stopPropagation()};this.contextMenuElement.addEventListener("contextmenu",o),this.contextMenuElement.addEventListener("click",o),this.contextMenuElement.dir=(function(){let i=new Intl.Locale(navigator.language),c=null;if("getTextInfo"in i&&typeof i.getTextInfo=="function")c=i.getTextInfo();else{if(!("textInfo"in i)||typeof i.textInfo!="object")return"ltr";c=i.textInfo}return typeof c=="object"&&"direction"in c&&typeof c.direction=="string"&&c.direction||"ltr"})(),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.element.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.element.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.element.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this._readyState=G.HaveNothing,this.metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addFSCommandHandler(u){this.onFSCommand.push(u)}callFSCommand(u,e){if(this.onFSCommand.length===0)return!1;for(let n of this.onFSCommand)n(u,e);return!0}addModalJavaScript(u){let e=u.querySelector("#video-holder"),n=()=>{u.classList.add("hidden"),e&&(e.textContent="")};u.parentNode.addEventListener("click",n);let t=u.querySelector(".modal-area");t&&t.addEventListener("click",(o=>o.stopPropagation()));let r=u.querySelector(".close-modal");r&&r.addEventListener("click",n)}addVolumeControlsJavaScript(u){let e=u.querySelector("#mute-checkbox"),n=u.querySelector("#volume-mute"),t=[u.querySelector("#volume-min"),u.querySelector("#volume-mid"),u.querySelector("#volume-max")],r=u.querySelector("#volume-slider"),o=u.querySelector("#volume-slider-text"),i=()=>{if(this.volumeSettings.isMuted)n.style.display="inline",t.forEach((c=>{c.style.display="none"}));else{n.style.display="none";let c=Math.round(this.volumeSettings.volume/50);t.forEach(((s,f)=>{s.style.display=f===c?"inline":"none"}))}};e.checked=this.volumeSettings.isMuted,r.disabled=e.checked,r.valueAsNumber=this.volumeSettings.volume,o.textContent=r.value+"%",i(),e.addEventListener("change",(()=>{r.disabled=e.checked,this.volumeSettings.isMuted=e.checked,this.instance?.set_volume(this.volumeSettings.get_volume()),i()})),r.addEventListener("input",(()=>{o.textContent=r.value+"%",this.volumeSettings.volume=r.valueAsNumber,this.instance?.set_volume(this.volumeSettings.get_volume()),i()}))}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",(()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),document.hidden||this.lastActivePlayingState!==!0||this.instance.play())}),!1)}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let t=this.dynamicStyles.sheet.cssRules.length-1;t>=0;t--)this.dynamicStyles.sheet.deleteRule(t);let u=this.element.attributes.getNamedItem("align");if(u!=null){let t=u.value.toLowerCase(),r=(()=>{switch(t){case"right":return"vertical-align: top; float: right;";case"left":return"vertical-align: top; float: left;";case"bottom":return"vertical-align: baseline;";case"top":return"vertical-align: top;";case"center":return"vertical-align: middle; vertical-align: -moz-middle-with-baseline;";case"middle":return"vertical-align: middle; vertical-align: -webkit-baseline-middle; vertical-align: -moz-middle-with-baseline;";case"absbottom":return"vertical-align: bottom;";case"absmiddle":case"abscenter":return"vertical-align: middle;";case"texttop":return"vertical-align: text-top;";default:return""}})();r&&this.dynamicStyles.sheet.insertRule(`:host { ${r} }`)}let e=this.element.attributes.getNamedItem("width");if(e!=null){let t=V.htmlDimensionToCssDimension(e.value);t!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`)}let n=this.element.attributes.getNamedItem("height");if(n!=null){let t=V.htmlDimensionToCssDimension(n.value);t!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${t}; }`)}}}isUnusedFallbackObject(){let u=(function(e){let n=Nu[e];return n!==void 0?{internalName:e,name:n.name,class:n.class}:null})("ruffle-object");if(u!==null){let e=this.element.parentNode;for(;e!==document&&e!==null;){if(e.nodeName===u.name)return!0;e=e.parentNode}}return!1}async ensureFreshInstance(){this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');let[u,e]=await S0(this.onRuffleDownloadProgress.bind(this)).catch((r=>{console.error(`Serious error loading Ruffle: ${r}`);let o=new Iu(r);throw this.panic(o),o}));if(this.newZipWriter=e,C0(u,this.loadedConfig||{}),u.setVolume(this.volumeSettings.get_volume()),this.loadedConfig?.fontSources)for(let r of this.loadedConfig.fontSources)try{let o=await fetch(r);u.addFont(r,new Uint8Array(await o.arrayBuffer()))}catch(o){console.warn(`Couldn't download font source from ${r}`,o)}for(let r in this.loadedConfig?.defaultFonts){let o=this.loadedConfig.defaultFonts[r];o&&u.setDefaultFont(r,o)}this.instance=await u.build(this.container,this).catch((r=>{throw console.error(`Serious error loading Ruffle: ${r}`),this.panic(r),r})),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});let n=this.instance.renderer_name(),t=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+M.versionName+" | WebAssembly extensions: "+(t.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(n??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise((r=>{window.setTimeout((()=>{r()}),200)})),this.container.style.visibility=""),this.unmuteAudioContext(),!this.loadedConfig||this.loadedConfig.autoplay===ou.On||this.loadedConfig.autoplay!==ou.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){this.loadedConfig&&this.loadedConfig.unmuteOverlay===mu.Hidden||(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});let r=this.instance?.audio_context();r&&(r.onstatechange=()=>{r.state==="running"&&this.unmuteOverlayClicked(),r.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(u,e){let n=this.splashScreen.querySelector(".loadbar-inner"),t=this.splashScreen.querySelector(".loadbar");Number.isNaN(e)?t&&(t.style.display="none"):n.style.width=u/e*100+"%"}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this.metadata=null,this._readyState=G.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(u){if(typeof u=="string")return{url:u};let e=(n,t)=>{if(!n){let r=new je(t);throw this.panic(r),r}};return e(u!==null&&typeof u=="object","Argument 0 must be a string or object"),e("url"in u||"data"in u,"Argument 0 must contain a `url` or `data` key"),e(!("url"in u)||typeof u.url=="string","`url` must be a string"),u}async reload(){if(!this.loadedConfig)throw new Error("Cannot reload if load wasn't first called");await this.load(this.loadedConfig)}async reloadWithCanvasRenderer(){if(this.loadedConfig&&this.loadedConfig.preferredRenderer!==xu.Canvas){let u={...this.loadedConfig,preferredRenderer:xu.Canvas};await this.load(u)}else{if(!this.loadedConfig)throw new Error("Cannot reload if load wasn't first called");this.panic(new Error(x("error-canvas-reload")))}}async load(u,e=!1){if(u=this.checkOptions(u),this.element.isConnected&&!this.isUnusedFallbackObject()){if(!Ju(this.element))try{this.loadedConfig={...Be,...e&&"url"in u?{allowScriptAccess:Ee("samedomain",u.url)}:{},...window.RufflePlayer?.config??{},...this.config,...u},this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==pu.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in u?(console.log(`Loading SWF file ${u.url}`),this.swfUrl=new URL(u.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,_u(u.parameters))):"data"in u&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(u.data),_u(u.parameters),u.swfFileName||"movie.swf"))}catch(n){console.error(`Serious error occurred loading SWF file: ${n}`);let t=new Error(n);throw this.panic(t),t}}else console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return!!this.instance&&this.instance.is_playing()}get volume(){return this.instance?this.instance.volume():1}set volume(u){this.instance&&this.instance.set_volume(u)}get fullscreenEnabled(){return!(!document.fullscreenEnabled&&!document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this.element}setFullscreen(u){this.fullscreenEnabled&&u!==this.isFullscreen&&(u?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){let u={navigationUI:"hide"};this.element.requestFullscreen?this.element.requestFullscreen(u):this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen(u):this.element.webkitRequestFullScreen&&this.element.webkitRequestFullScreen(u)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){if(this.isFullscreen&&screen.orientation&&typeof screen.orientation.lock=="function"){let u=this.loadedConfig?.fullScreenAspectRatio?.toLowerCase()??"";["portrait","landscape","any"].includes(u)&&screen.orientation.lock(u).catch((()=>{}))}else try{screen.orientation.unlock()}catch{}this.instance?.set_fullscreen(this.isFullscreen)}checkIfTouch(u){this.isTouch=u.pointerType==="touch"||u.pointerType==="pen"}confirmReloadSave(u,e,n){if(gu(e)&&localStorage[u]){if(!n&&!confirm(x("save-delete-prompt")))return;let t=this.swfUrl?this.swfUrl.pathname:"",r=this.swfUrl?this.swfUrl.hostname:document.location.hostname,o=u.split("/").slice(1,-1).join("/");if(t.includes(o)&&u.startsWith(r))return void(confirm(x("save-reload-prompt",{action:n?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),n?localStorage.setItem(u,e):localStorage.removeItem(u),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden")));n?localStorage.setItem(u,e):localStorage.removeItem(u),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(u,e){let n=u.target,t=new FileReader;t.addEventListener("load",(()=>{if(t.result&&typeof t.result=="string"){let r=new RegExp("data:.*;base64,"),o=t.result.replace(r,"");this.confirmReloadSave(e,o,!0)}})),n&&n.files&&n.files.length>0&&n.files[0]&&t.readAsDataURL(n.files[0])}checkSaves(){if(!this.saveManager.querySelector("#local-saves"))return!1;try{if(localStorage===null)return!1}catch{return!1}return Object.keys(localStorage).some((u=>{let e=u.split("/").pop(),n=localStorage.getItem(u);return e&&n&&gu(n)}))}deleteSave(u){let e=localStorage.getItem(u);e&&this.confirmReloadSave(u,e,!1)}populateSaves(){if(!this.checkSaves())return;let u=this.saveManager.querySelector("#local-saves");u.textContent="",Object.keys(localStorage).forEach((e=>{let n=e.split("/").pop(),t=localStorage.getItem(e);n&&t&&gu(t)&&u.appendChild((0,d.jsx)(this.SaveRow,{rowKey:e,solName:n,solData:t}))}))}async backupSaves(){let u=this.newZipWriter(),e=[];Object.keys(localStorage).forEach((n=>{let t=String(n.split("/").pop()),r=localStorage.getItem(n);if(r&&gu(r)){let o=Ce(r),i=e.filter((c=>c===t)).length;e.push(t),i>0&&(t+=` (${i+1})`),u.addFile(t+".sol",o)}})),Ku(new Blob([u.save()],{type:"application/zip"}),"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}async openSaveManager(){this.populateSaves(),this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);let u=await fetch(this.swfUrl.href);if(!u.ok)return void console.error("SWF download failed");Ku(await u.blob(),(function(e){let n=e.pathname;return n.substring(n.lastIndexOf("/")+1)})(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){let u=this.virtualKeyboard,e=u.value;for(let n of e)for(let t of["keydown","keyup"])this.element.dispatchEvent(new KeyboardEvent(t,{key:n,bubbles:!0}));u.value=""}openVirtualKeyboard(){this.instance?.has_focus()?this.virtualKeyboard.focus({preventScroll:!0}):setTimeout((()=>{this.virtualKeyboard.focus({preventScroll:!0})}),0)}closeVirtualKeyboard(){this.isVirtualKeyboardFocused()&&this.container.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){let e=[],n=()=>{e.length>0&&e[e.length-1]!==null&&e.push(null)};return this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach(((t,r)=>{t.separatorBefore&&n(),e.push({text:t.caption+(t.checked?" (\u2713)":""),onClick:async()=>this.instance?.run_context_menu_callback(r),enabled:t.enabled})})),n()),this.fullscreenEnabled&&(this.isFullscreen?e.push({text:x("context-menu-exit-fullscreen"),onClick:async()=>this.setFullscreen(!1)}):e.push({text:x("context-menu-enter-fullscreen"),onClick:async()=>this.setFullscreen(!0)})),e.push({text:x("context-menu-volume-controls"),onClick:async()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(n(),e.push({text:x("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&e.push({text:x("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.checkSaves()&&e.push({text:x("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),n(),e.push({text:x("context-menu-about-ruffle",{flavor:B?"extension":"",version:M.versionName}),async onClick(){window.open(du,"_blank")}}),this.isTouch&&(n(),e.push({text:x("context-menu-hide"),onClick:async()=>{this.contextMenuForceDisabled=!0}})),e}pointerDown(u){this.pointerDownPosition=new Se(u.pageX,u.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout((()=>this.clearLongPressTimer()),800)}checkLongPressMovement(u){if(this.pointerDownPosition!==null){let e=new Se(u.pageX,u.pageY),n=this.pointerDownPosition.distanceTo(e);n>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=n)}}checkLongPress(u){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&u.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(u)}suppressContextMenu(){this._suppressContextMenu=!0}showContextMenu(u){if(this.panicked)return;if(u.preventDefault(),this._suppressContextMenu)return void(this._suppressContextMenu=!1);if(this.shadow.querySelectorAll(".modal:not(.hidden)").length!==0||(u.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),u.stopPropagation()),[!1,Y.Off].includes(this.loadedConfig?.contextMenu??Y.On)||this.isTouch&&this.loadedConfig?.contextMenu===Y.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(let f of this.contextMenuItems())if(f===null)this.contextMenuElement.appendChild((0,d.jsx)("li",{class:"menu-separator",children:(0,d.jsx)("hr",{})}));else{let{text:h,onClick:p,enabled:v}=f,R=(0,d.jsx)("li",{class:{"menu-item":!0,disabled:v===!1},"data-text":h,children:h});if(this.contextMenuElement.appendChild(R),v!==!1){let q=async O=>{O.preventDefault(),O.stopPropagation(),await p(O),this.hideContextMenu()};this.contextMenuSupported?(R.addEventListener("click",q),R.addEventListener("contextmenu",q)):R.addEventListener("pointerup",q)}}this.contextMenuOverlay.classList.remove("hidden");let e=this.element.getBoundingClientRect(),n=this.contextMenuElement.getBoundingClientRect(),t=document.scrollingElement||document.body,r=Math.max(0,u.clientX+n.width-t.clientWidth),o=Math.max(0,u.clientY+n.height-t.clientHeight),i=u.clientX-e.x-r,c=u.clientY-e.y-o,s=getComputedStyle(this.contextMenuElement).direction==="rtl";this.contextMenuElement.style.top=`${c}px`,s?(this.contextMenuElement.style.right=e.width-i+"px",this.contextMenuElement.style.left=""):(this.contextMenuElement.style.right="",this.contextMenuElement.style.left=`${i}px`)}hideContextMenu(){this.instance?.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){let u=this.instance.audio_context();return u&&u.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){let u=this.instance.audio_context();u&&u.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){vu||(navigator.maxTouchPoints<1?vu=!0:"audioSession"in navigator?navigator.audioSession.type="playback":this.container.addEventListener("click",(()=>{if(vu)return;let u=this.instance?.audio_context();if(!u)return;let e=new Audio;e.src=(()=>{let n=new ArrayBuffer(10),t=new DataView(n),r=u.sampleRate;return t.setUint32(0,r,!0),t.setUint32(4,r,!0),t.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(n))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),e.load(),e.play().then((()=>{vu=!0})).catch((n=>{console.warn(`Failed to play dummy sound: ${n}`)}))}),{once:!0}))}static htmlDimensionToCssDimension(u){if(u){let e=u.match(A0);if(e){let n=e[1];return e[3]||(n+="px"),n}}return null}callExternalInterface(u,e){return this.instance?.call_exposed_callback(u,e)}getObjectId(){return this.element.getAttribute("name")}set traceObserver(u){this.instance?.set_trace_observer(u)}getPanicData(){let u=`
# Player Info
`;if(u+=`Allows script access: ${!!this.loadedConfig&&this.loadedConfig.allowScriptAccess}
`,u+=`${this.rendererDebugInfo}
`,u+=this.debugPlayerInfo(),u+=`
# Page Info
`,u+=`Page URL: ${document.location.href}
`,this.swfUrl&&(u+=`SWF URL: ${this.swfUrl}
`),u+=`
# Browser Info
`,u+=`User Agent: ${window.navigator.userAgent}
`,u+=`Platform: ${window.navigator.platform}
`,u+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,u+=`
# Ruffle Info
`,u+=`Version: ${M.versionNumber}
`,u+=`Name: ${M.versionName}
`,u+=`Channel: ${M.versionChannel}
`,u+=`Built: ${M.buildDate}
`,u+=`Commit: ${M.commitHash}
`,u+=`Is extension: ${B}
`,u+=`
# Metadata
`,this.metadata)for(let[e,n]of Object.entries(this.metadata))u+=`${e}: ${n}
`;return u}panic(u){if(this.panicked)return;this.panicked=!0,this.hideSplashScreen();let e=u;if(u instanceof Error&&(u.name==="AbortError"||u.message.includes("AbortError")))return;if(u instanceof Iu){let t=this.loadedConfig?.openInNewTab,r=this.loadedConfig&&"url"in this.loadedConfig?new URL(this.loadedConfig.url,document.baseURI):void 0;if(t&&r)return void this.addOpenInNewTabMessage(t,r);u=u.cause}let n=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(n.push(`# Error Info
`),u instanceof Error){if(n.push(`Error name: ${u.name}
`),n.push(`Error message: ${u.message}
`),u.stack){let t=n.push(`Error stack:
\`\`\`
${u.stack}
\`\`\`
`)-1;if(u.avmStack){let r=n.push(`AVM2 stack:
\`\`\`
    ${u.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;n.avmStackIndex=r}n.stackIndex=t}}else n.push(`Error: ${u}
`);n.push(this.getPanicData()),w0(this.container,e,n,this.swfUrl),this.destroy()}addOpenInNewTabMessage(u,e){let n=new URL(e);if(this.loadedConfig?.parameters){let r=_u(this.loadedConfig?.parameters);Object.entries(r).forEach((([o,i])=>{n.searchParams.set(o,i)}))}this.hideSplashScreen();let t=(0,d.jsxs)("div",{children:[F("message-cant-embed"),(0,d.jsx)("div",{children:(0,d.jsx)("a",{href:"#",onClick:()=>u(n),children:x("open-in-new-tab")})})]});this.displayMessageOrElement(t,!0)}displayRootMovieDownloadFailedMessage(u,e){let n=this.loadedConfig?.openInNewTab;if(n&&this.swfUrl&&window.location.origin!==this.swfUrl.origin)this.addOpenInNewTabMessage(n,this.swfUrl);else{let t=e.includes("HTTP Status is not OK:"),r=u?new ze(this.swfUrl):new Re(this.swfUrl,t);this.panic(r)}}displayMessageOrElement(u,e){let n=u instanceof HTMLDivElement?u:(0,d.jsx)("p",{children:u}),t=e?null:(0,d.jsx)("div",{children:(0,d.jsx)("button",{id:"continue-btn",children:x("continue")})}),r=(0,d.jsx)("div",{id:"message-overlay",children:(0,d.jsxs)("div",{class:"message",children:[n,t]})});this.container.prepend(r),!e&&(this.container.querySelector("#continue-btn").onclick=()=>{r.parentNode.removeChild(r)})}displayMessage(u){this.displayMessageOrElement(u)}displayRestoredFromBfcacheMessage(){if(this.container.querySelector("#message-overlay")!==null)return;let u=F("message-restored-from-bfcache");this.displayMessageOrElement(u);let e=this.container.querySelector("#message-overlay");(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight)&&e.parentNode.removeChild(e)}displayUnsupportedVideo(u){let e=this.videoModal.querySelector("#video-holder");if(e){let n=(0,d.jsx)("video",{src:u,autoplay:!0,controls:!0,onContextMenu:t=>t.stopPropagation()});e.textContent="",e.appendChild(n),this.videoModal.classList.remove("hidden")}}displayClipboardModal(u){let e=this.clipboardModal.querySelector("#clipboard-modal-description");e&&(e.textContent=x("clipboard-message-description",{variant:u?"access-denied":"unsupported"}),this.clipboardModal.classList.remove("hidden"))}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(u){this.metadata=u,this._readyState=G.Loaded,this.hideSplashScreen(),this.element.dispatchEvent(new CustomEvent(V.LOADED_METADATA)),this.element.dispatchEvent(new CustomEvent(V.LOADED_DATA))}}V.LOADED_METADATA="loadedmetadata",V.LOADED_DATA="loadeddata";class E0{constructor(u,e){this.isMuted=u,this.volume=e}get_volume(){return this.isMuted?0:this.volume/100}}function Bu(a,u){let e={url:a},n=u("allowNetworking");n!==null&&(e.allowNetworking=n);let t=Ee(u("allowScriptAccess"),a);t!==null&&(e.allowScriptAccess=t);let r=u("bgcolor");r!==null&&(e.backgroundColor=r);let o=u("base");if(o!==null)if(o==="."){let q=new URL(a,document.baseURI);e.base=new URL(o,q).href}else e.base=o;let i=Ae(u("menu"));i!==null&&(e.menu=i);let c=Ae(u("allowFullScreen"));c!==null&&(e.allowFullscreen=c);let s=u("flashvars");s!==null&&(e.parameters=s);let f=u("quality");f!==null&&(e.quality=f);let h=u("salign");h!==null&&(e.salign=h);let p=u("scale");p!==null&&(e.scale=p);let v=u("wmode");v!==null&&(e.wmode=v);let R=u("fullScreenAspectRatio");return R!==null&&(e.fullScreenAspectRatio=R),e}function Vu(a){if(a){let u="",e="";try{let n=new URL(a,du);u=n.pathname,e=n.hostname}catch{}if(u.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(e))return!0}return!1}function Hu(a,u){let e=a.getAttribute(u),n=window.RufflePlayer?.config??{};if(e)try{let t=new URL(e);t.protocol!=="http:"||window.location.protocol!=="https:"||"upgradeToHttps"in n&&n.upgradeToHttps===!1||(t.protocol="https:",a.setAttribute(u,t.toString()))}catch{}}function Ju(a){let u=a.parentElement;for(;u!==null;){switch(u.tagName){case"AUDIO":case"VIDEO":return!0}u=u.parentElement}return!1}function Ku(a,u){let e=URL.createObjectURL(a),n=document.createElement("a");n.href=e,n.download=u,n.click(),URL.revokeObjectURL(e)}function Ce(a){let u=atob(a);return Uint8Array.from(u,(e=>e.charCodeAt(0)))}function gu(a){try{return(u=atob(a)).charCodeAt(0)===0&&u.charCodeAt(1)===191&&u.slice(6,10)==="TCSO"&&[0,4,0,0,0,0].every(((n,t)=>u.charCodeAt(10+t)===n))}catch{return!1}var u}function Ae(a){switch(a?.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function Ee(a,u){switch(a?.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(u,window.location.href).origin}catch{return!1}default:return null}}var z,F0=function(a,u,e,n,t){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!t)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?a!==u||!t:!u.has(a))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?t.call(a,e):t?t.value=e:u.set(a,e),e},j=function(a,u,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?a!==u||!n:!u.has(a))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(a):n?n.value:u.get(a)};class q0{constructor(u){z.set(this,void 0),F0(this,z,u,"f")}addFSCommandHandler(u){j(this,z,"f").addFSCommandHandler(u)}get readyState(){return j(this,z,"f")._readyState}get metadata(){return j(this,z,"f").metadata}get loadedConfig(){return j(this,z,"f").loadedConfig??null}async reload(){await j(this,z,"f").reload()}async load(u,e=!1){await j(this,z,"f").load(u,e)}resume(){j(this,z,"f").play()}get isPlaying(){return j(this,z,"f").isPlaying}get volume(){return j(this,z,"f").volume}set volume(u){j(this,z,"f").volume=u}get fullscreenEnabled(){return j(this,z,"f").fullscreenEnabled}get isFullscreen(){return j(this,z,"f").isFullscreen}setFullscreen(u){j(this,z,"f").setFullscreen(u)}requestFullscreen(){j(this,z,"f").enterFullscreen()}exitFullscreen(){j(this,z,"f").exitFullscreen()}async downloadSwf(){await j(this,z,"f").downloadSwf()}displayMessage(u){j(this,z,"f").displayMessage(u)}suspend(){j(this,z,"f").pause()}get suspended(){return!j(this,z,"f").isPlaying}set traceObserver(u){j(this,z,"f").traceObserver=u}get config(){return j(this,z,"f").config}set config(u){j(this,z,"f").config=u}callExternalInterface(u,...e){return j(this,z,"f").callExternalInterface(u,e)}}z=new WeakMap;var g,cu,k=function(a,u,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?a!==u||!n:!u.has(a))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(a):n?n.value:u.get(a)},Fe=function(a,u,e,n,t){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!t)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?a!==u||!t:!u.has(a))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?t.call(a,e):t?t.value=e:u.set(a,e),e};class nu extends HTMLElement{get onFSCommand(){return k(this,cu,"f")}set onFSCommand(u){Fe(this,cu,u,"f")}get readyState(){return k(this,g,"f")._readyState}get metadata(){return k(this,g,"f").metadata}constructor(){super(),g.set(this,void 0),cu.set(this,null),Fe(this,g,new V(this,(()=>this.debugPlayerInfo()),(u=>{try{Object.defineProperty(this,u,{value:(...e)=>k(this,g,"f").callExternalInterface(u,e),configurable:!0})}catch(e){console.warn(`Error setting ExternalInterface legacy callback for ${u}`,e)}})),"f"),k(this,g,"f").addFSCommandHandler(((u,e)=>{k(this,cu,"f")?.call(this,u,e)}))}ruffle(u){if((u??1)===1)return new q0(k(this,g,"f"));throw new Error(`Version ${u} not supported.`)}get loadedConfig(){return k(this,g,"f").loadedConfig??null}connectedCallback(){k(this,g,"f").updateStyles()}static get observedAttributes(){return["width","height","align"]}attributeChangedCallback(u,e,n){nu.observedAttributes.includes(u)&&k(this,g,"f").updateStyles()}disconnectedCallback(){k(this,g,"f").destroy()}async reload(){await k(this,g,"f").reload()}async load(u,e=!1){await k(this,g,"f").load(u,e)}play(){k(this,g,"f").play()}get isPlaying(){return k(this,g,"f").isPlaying}get volume(){return k(this,g,"f").volume}set volume(u){k(this,g,"f").volume=u}get fullscreenEnabled(){return k(this,g,"f").fullscreenEnabled}get isFullscreen(){return k(this,g,"f").isFullscreen}setFullscreen(u){k(this,g,"f").setFullscreen(u)}enterFullscreen(){k(this,g,"f").enterFullscreen()}exitFullscreen(){k(this,g,"f").exitFullscreen()}async downloadSwf(){await k(this,g,"f").downloadSwf()}pause(){k(this,g,"f").pause()}set traceObserver(u){k(this,g,"f").traceObserver=u}debugPlayerInfo(){return""}PercentLoaded(){return k(this,g,"f")._readyState===G.Loaded?100:0}get config(){return k(this,g,"f").config}set config(u){k(this,g,"f").config=u}displayMessage(u){k(this,g,"f").displayMessage(u)}}function qe(a,u){if(a){for(let e of a.attributes)if(e.specified){if(e.name==="title"&&e.value==="Adobe Flash Player")continue;try{u.setAttribute(e.name,e.value)}catch{console.warn(`Unable to set attribute ${e.name} on Ruffle instance`)}}for(let e of Array.from(a.children))u.appendChild(e)}}g=new WeakMap,cu=new WeakMap;class au extends nu{connectedCallback(){super.connectedCallback();let u=this.attributes.getNamedItem("src");if(u){let e=t=>this.attributes.getNamedItem(t)?.value??null,n=Bu(u.value,e);this.load(n,!0)}}get nodeName(){return"EMBED"}get src(){return this.attributes.getNamedItem("src")?.value}set src(u){if(u){let e=document.createAttribute("src");e.value=u,this.attributes.setNamedItem(e)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return[...nu.observedAttributes,"src"]}attributeChangedCallback(u,e,n){if(super.attributeChangedCallback(u,e,n),this.isConnected&&u==="src"){let t=this.attributes.getNamedItem("src");if(t){let r=i=>this.attributes.getNamedItem(i)?.value??null,o=Bu(t.value,r);this.load(o,!0)}}}static isInterdictable(u){let e=u.getAttribute("src"),n=u.getAttribute("type");return!!e&&!Ju(u)&&(Vu(e)?(Hu(u,"src"),!1):ye(e,n))}static fromNativeEmbedElement(u){let e=Uu("ruffle-embed",au),n=document.createElement(e);return qe(u,n),n}get height(){return this.getAttribute("height")||""}set height(u){this.setAttribute("height",u)}get width(){return this.getAttribute("width")||""}set width(u){this.setAttribute("width",u)}get type(){return this.getAttribute("type")||""}set type(u){this.setAttribute("type",u)}}function Pe(a){let u={};for(let e of a.children)if(e instanceof HTMLParamElement){let n=e.attributes.getNamedItem("name")?.value,t=e.attributes.getNamedItem("value")?.value;n&&t&&(u[n]=t)}return u}class tu extends nu{constructor(){super(...arguments),this.params={}}connectedCallback(){super.connectedCallback(),this.params=Pe(this);let u=null;if(this.attributes.getNamedItem("data")?u=this.attributes.getNamedItem("data")?.value:this.params.movie&&(u=this.params.movie),u){let e=["allowNetworking","base","bgcolor","flashvars"],n=Bu(u,(t=>(function(r,o,i){o=o.toLowerCase();for(let[c,s]of Object.entries(r))if(c.toLowerCase()===o)return s;return i})(this.params,t,e.includes(t)?this.getAttribute(t):null)));this.load(n,!0)}}debugPlayerInfo(){let u=`Player type: Object
`,e=null;return this.attributes.getNamedItem("data")?e=this.attributes.getNamedItem("data")?.value:this.params.movie&&(e=this.params.movie),u+=`SWF URL: ${e}
`,Object.keys(this.params).forEach((n=>{u+=`Param ${n}: ${this.params[n]}
`})),Object.keys(this.attributes).forEach((n=>{u+=`Attribute ${n}: ${this.attributes.getNamedItem(n)?.value}
`})),u}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(u){if(u){let e=document.createAttribute("data");e.value=u,this.attributes.setNamedItem(e)}else this.attributes.removeNamedItem("data")}static isInterdictable(u){if(Ju(u)||u.getElementsByTagName("ruffle-object").length>0||u.getElementsByTagName("ruffle-embed").length>0)return!1;let e=u.attributes.getNamedItem("data")?.value.toLowerCase(),n=u.attributes.getNamedItem("type")?.value??null,t=Pe(u),r;if(e){if(Vu(e))return Hu(u,"data"),!1;r=e}else{if(!t||!t.movie)return!1;if(Vu(t.movie)){let i=u.querySelector("param[name='movie']");if(i){Hu(i,"value");let c=i.getAttribute("value");c&&u.setAttribute("data",c)}return!1}r=t.movie}let o=u.attributes.getNamedItem("classid")?.value.toLowerCase();return o==="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase()?!Array.from(u.getElementsByTagName("object")).some(tu.isInterdictable)&&!Array.from(u.getElementsByTagName("embed")).some(au.isInterdictable):!o&&ye(r,n)}static fromNativeObjectElement(u){let e=Uu("ruffle-object",tu),n=document.createElement(e);for(let t of Array.from(u.getElementsByTagName("embed")))au.isInterdictable(t)&&t.remove();for(let t of Array.from(u.getElementsByTagName("object")))tu.isInterdictable(t)&&t.remove();return qe(u,n),n}get height(){return this.getAttribute("height")||""}set height(u){this.setAttribute("height",u)}get width(){return this.getAttribute("width")||""}set width(u){this.setAttribute("width",u)}get type(){return this.getAttribute("type")||""}set type(u){this.setAttribute("type",u)}}var H,su,Z,wu,ku,yu,J,lu,K=function(a,u,e,n,t){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!t)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?a!==u||!t:!u.has(a))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?t.call(a,e):t?t.value=e:u.set(a,e),e},S=function(a,u,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?a!==u||!n:!u.has(a))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(a):n?n.value:u.get(a)};class Zu{constructor(u){if(H.set(this,void 0),su.set(this,void 0),K(this,H,[],"f"),K(this,su,{},"f"),u)for(let e=0;e<u.length;e++)this.install(u[e])}install(u){let e=new De(u),n=S(this,H,"f").length;S(this,H,"f").push(e),S(this,su,"f")[u.type]=e,Object.defineProperty(this,e.type,{configurable:!0,enumerable:!1,value:e}),this[n]=e}item(u){return S(this,H,"f")[u>>>0]}namedItem(u){return S(this,su,"f")[u]}get length(){return S(this,H,"f").length}[(H=new WeakMap,su=new WeakMap,Symbol.iterator)](){return S(this,H,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"MimeTypeArray"}}class De{constructor(u){Z.set(this,void 0),K(this,Z,u,"f")}get type(){return S(this,Z,"f").type}get description(){return S(this,Z,"f").description}get suffixes(){return S(this,Z,"f").suffixes}get enabledPlugin(){return S(this,Z,"f").enabledPlugin}get[(Z=new WeakMap,Symbol.toStringTag)](){return"MimeType"}}class P0 extends Zu{constructor(u,e,n){super(),wu.set(this,void 0),ku.set(this,void 0),yu.set(this,void 0),K(this,wu,u,"f"),K(this,ku,e,"f"),K(this,yu,n,"f")}get name(){return S(this,wu,"f")}get description(){return S(this,ku,"f")}get filename(){return S(this,yu,"f")}get[(wu=new WeakMap,ku=new WeakMap,yu=new WeakMap,Symbol.toStringTag)](){return"Plugin"}}class Me{constructor(u){J.set(this,void 0),lu.set(this,void 0),K(this,J,[],"f"),K(this,lu,{},"f");for(let e=0;e<u.length;e++)this.install(u[e])}install(u){let e=S(this,J,"f").length;S(this,J,"f").push(u),S(this,lu,"f")[u.name]=u,Object.defineProperty(this,u.name,{configurable:!0,enumerable:!1,value:u}),this[e]=u}item(u){return S(this,J,"f")[u>>>0]}namedItem(u){return S(this,lu,"f")[u]}refresh(){}[(J=new WeakMap,lu=new WeakMap,Symbol.iterator)](){return S(this,J,"f")[Symbol.iterator]()}get[Symbol.toStringTag](){return"PluginArray"}get length(){return S(this,J,"f").length}}let L=new P0("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");L.install({type:ge,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:L}),L.install({type:ve,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:L}),L.install({type:we,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:L}),L.install({type:ke,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:L});let fu=window.RufflePlayer?.config??{},D0=(function(a){let u=Tu?.href??"";return!B&&"publicPath"in a&&a.publicPath!==null&&a.publicPath!==void 0&&(u=a.publicPath),u===""||u.endsWith("/")||(u+="/"),u})(fu)+"ruffle.js",Qu,Gu,Yu,Xu;function Oe(){try{Qu=Qu??document.getElementsByTagName("object"),Gu=Gu??document.getElementsByTagName("embed");for(let a of Array.from(Qu))if(tu.isInterdictable(a)){let u=tu.fromNativeObjectElement(a);a.replaceWith(u)}for(let a of Array.from(Gu))if(au.isInterdictable(a)){let u=au.fromNativeEmbedElement(a);a.replaceWith(u)}}catch(a){console.error(`Serious error encountered when polyfilling native Flash elements: ${a}`)}}function $e(){Yu=Yu??document.getElementsByTagName("iframe"),Xu=Xu??document.getElementsByTagName("frame"),[Yu,Xu].forEach((a=>{for(let u of a){if(u.dataset.rufflePolyfilled!==void 0)continue;u.dataset.rufflePolyfilled="";let e=u.contentWindow,n=`Couldn't load Ruffle into ${u.tagName}[${u.src}]: `;try{e.document.readyState==="complete"&&Te(e,n)}catch(t){B||console.warn(n+t)}u.addEventListener("load",(()=>{Te(e,n)}),!1)}}))}async function Te(a,u){let e;await new Promise((n=>{window.setTimeout((()=>{n()}),100)}));try{if(e=a.document,!e)return}catch(n){return void(B||console.warn(u+n))}if(B||e.documentElement.dataset.ruffleOptout===void 0){if(B)a.RufflePlayer||(a.RufflePlayer={}),a.RufflePlayer.config={...fu,...a.RufflePlayer.config??{}};else if(!a.RufflePlayer){let n=e.createElement("script");n.setAttribute("src",D0),n.onload=()=>{a.RufflePlayer={},a.RufflePlayer.config=fu},e.head.appendChild(n)}}}function M0(){(function(a){if(navigator.plugins.namedItem("Shockwave Flash"))return;"install"in navigator.plugins&&navigator.plugins.install||(Object.defineProperty(window,"PluginArray",{value:Me}),Object.defineProperty(navigator,"plugins",{value:new Me(navigator.plugins),writable:!1})),navigator.plugins.install(a),!(a.length>0)||"install"in navigator.mimeTypes&&navigator.mimeTypes.install||(Object.defineProperty(window,"MimeTypeArray",{value:Zu}),Object.defineProperty(window,"MimeType",{value:De}),Object.defineProperty(navigator,"mimeTypes",{value:new Zu(navigator.mimeTypes),writable:!1}));let u=navigator.mimeTypes;for(let e=0;e<a.length;e+=1)u.install(a[e])})(L)}function O0(){("favorFlash"in fu&&fu.favorFlash===!1||(navigator.plugins.namedItem("Shockwave Flash")?.filename??"ruffle.js")==="ruffle.js")&&(Oe(),$e(),new MutationObserver((function(a){a.some((u=>Array.from(u.addedNodes).some((e=>["EMBED","OBJECT"].includes(e.nodeName)||e instanceof Element&&e.querySelector("embed, object")!==null))))&&(Oe(),$e())})).observe(document,{childList:!0,subtree:!0}))}let bu={version:M.versionNumber+"+"+M.buildDate.substring(0,10),polyfill(){O0()},pluginPolyfill(){M0()},createPlayer(){let a=Uu("ruffle-player",nu);return document.createElement(a)},options:{}},Ie=null;try{if(document.currentScript instanceof HTMLScriptElement&&document.currentScript.src!==""){let a=document.currentScript.src;a.endsWith(".js")||a.endsWith("/")||(a+="/"),Ie=new URL(".",a)}}catch(a){console.warn("Unable to get currentScript URL",a)}(function(a,u={}){let e;window.RufflePlayer instanceof ne?e=window.RufflePlayer:(e=new ne(window.RufflePlayer),window.RufflePlayer=e),e.sources[a]=bu,bu.options=u,(!("polyfills"in e.config)||e.config.polyfills)!==!1&&bu.pluginPolyfill()})("local",{onFirstLoad:()=>{b.p=(function(a){let u=Ie?.href??"";return"publicPath"in a&&a.publicPath!==null&&a.publicPath!==void 0&&(u=a.publicPath),u===""||u.endsWith("/")||(u+="/"),u})(window.RufflePlayer?.config)}})})()});var ee=_0(_e()),J0=ee.default??ee;export{J0 as default};
//# sourceMappingURL=ruffle.bundle.mjs.map