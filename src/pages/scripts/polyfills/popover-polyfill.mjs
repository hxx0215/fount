/* esm.sh - @oddbird/popover-polyfill@0.6.1 */
var ue=Object.create;var Q=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var se=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,fe=Object.prototype.hasOwnProperty;var de=(p,s)=>()=>(s||p((s={exports:{}}).exports,s),s.exports);var he=(p,s,h,b)=>{if(s&&typeof s=="object"||typeof s=="function")for(let g of se(s))!fe.call(p,g)&&g!==h&&Q(p,g,{get:()=>s[g],enumerable:!(b=pe(s,g))||b.enumerable});return p};var ge=(p,s,h)=>(h=p!=null?ue(ce(p)):{},he(s||!p||!p.__esModule?Q(h,"default",{value:p,enumerable:!0}):h,p));var U=de(()=>{"use strict";(()=>{var p=class extends Event{oldState;newState;constructor(e,{oldState:t="",newState:o="",...r}={}){super(e,r),this.oldState=String(t||""),this.newState=String(o||"")}},s=new WeakMap;function h(e,t,o){s.set(e,setTimeout(()=>{s.has(e)&&e.dispatchEvent(new p("toggle",{cancelable:!1,oldState:t,newState:o}))},0))}var b=globalThis.ShadowRoot||function(){},g=globalThis.HTMLDialogElement||function(){},A=new WeakMap,d=new WeakMap,f=new WeakMap,E=new WeakMap;function k(e){return E.get(e)||"hidden"}var D=new WeakMap;function M(e){return[...e].pop()}function V(e){let t=e.popoverTargetElement;if(!(t instanceof HTMLElement))return;let o=k(t);e.popoverTargetAction==="show"&&o==="showing"||e.popoverTargetAction==="hide"&&o==="hidden"||(o==="showing"?S(t,!0,!0):m(t,!1)&&(D.set(t,e),P(t)))}function m(e,t){return!(e.popover!=="auto"&&e.popover!=="manual"&&e.popover!=="hint"||!e.isConnected||t&&k(e)!=="showing"||!t&&k(e)!=="hidden"||e instanceof g&&e.hasAttribute("open")||document.fullscreenElement===e)}function j(e){if(!e)return 0;let t=d.get(document)||new Set,o=f.get(document)||new Set;return o.has(e)?[...o].indexOf(e)+t.size+1:t.has(e)?[...t].indexOf(e)+1:0}function X(e){let t=z(e),o=Y(e);return j(t)>j(o)?t:o}function L(e){let t,o=f.get(e)||new Set,r=d.get(e)||new Set,i=o.size>0?o:r.size>0?r:null;return i?(t=M(i),t.isConnected?t:(i.delete(t),L(e))):null}function q(e){for(let t of e||[])if(!t.isConnected)e.delete(t);else return t;return null}function y(e){return typeof e.getRootNode=="function"?e.getRootNode():e.parentNode?y(e.parentNode):e}function z(e){for(;e;){if(e instanceof HTMLElement&&e.popover==="auto"&&E.get(e)==="showing")return e;if(e=e instanceof Element&&e.assignedSlot||e.parentElement||y(e),e instanceof b&&(e=e.host),e instanceof Document)return}}function Y(e){for(;e;){let t=e.popoverTargetElement;if(t instanceof HTMLElement)return t;if(e=e.parentElement||y(e),e instanceof b&&(e=e.host),e instanceof Document)return}}function I(e,t){let o=new Map,r=0;for(let u of t||[])o.set(u,r),r+=1;o.set(e,r),r+=1;let i=null;function a(u){if(!u)return;let n=!1,l=null,c=null;for(;!n;){if(l=z(u)||null,l===null||!o.has(l))return;(e.popover==="hint"||l.popover==="auto")&&(n=!0),n||(u=l.parentElement)}c=o.get(l),(i===null||o.get(i)<c)&&(i=l)}return a(e.parentElement||y(e)),i}function Z(e){return e.hidden||e instanceof b||(e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLOptGroupElement||e instanceof HTMLOptionElement||e instanceof HTMLFieldSetElement)&&e.disabled||e instanceof HTMLInputElement&&e.type==="hidden"||e instanceof HTMLAnchorElement&&e.href===""?!1:typeof e.tabIndex=="number"&&e.tabIndex!==-1}function ee(e){if(e.shadowRoot&&e.shadowRoot.delegatesFocus!==!0)return null;let t=e;t.shadowRoot&&(t=t.shadowRoot);let o=t.querySelector("[autofocus]");if(o)return o;{let a=t.querySelectorAll("slot");for(let u of a){let n=u.assignedElements({flatten:!0});for(let l of n){if(l.hasAttribute("autofocus"))return l;if(o=l.querySelector("[autofocus]"),o)return o}}}let r=e.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){if(Z(i))return i;i=r.nextNode()}}function te(e){var t;(t=ee(e))==null||t.focus()}var x=new WeakMap;function P(e){if(!m(e,!1))return;let t=e.ownerDocument;if(!e.dispatchEvent(new p("beforetoggle",{cancelable:!0,oldState:"closed",newState:"open"}))||!m(e,!1))return;let o=!1,r=e.popover,i=null,a=I(e,d.get(t)||new Set),u=I(e,f.get(t)||new Set);if(r==="auto"&&(R(f.get(t)||new Set,o,!0),v(a||t,o,!0),i="auto"),r==="hint"&&(u?(v(u,o,!0),i="hint"):(R(f.get(t)||new Set,o,!0),a?(v(a,o,!0),i="auto"):i="hint")),r==="auto"||r==="hint"){if(r!==e.popover||!m(e,!1))return;L(t)||(o=!0),i==="auto"?(d.has(t)||d.set(t,new Set),d.get(t).add(e)):i==="hint"&&(f.has(t)||f.set(t,new Set),f.get(t).add(e))}x.delete(e);let n=t.activeElement;e.classList.add(":popover-open"),E.set(e,"showing"),A.has(t)||A.set(t,new Set),A.get(t).add(e),$(D.get(e),!0),te(e),o&&n&&e.popover==="auto"&&x.set(e,n),h(e,"closed","open")}function S(e,t=!1,o=!1){var r,i;if(!m(e,!0))return;let a=e.ownerDocument;if(["auto","hint"].includes(e.popover)&&(v(e,t,o),!m(e,!0)))return;let u=d.get(a)||new Set,n=u.has(e)&&M(u)===e;if($(D.get(e),!1),D.delete(e),o&&(e.dispatchEvent(new p("beforetoggle",{oldState:"open",newState:"closed"})),n&&M(u)!==e&&v(e,t,o),!m(e,!0)))return;(r=A.get(a))==null||r.delete(e),u.delete(e),(i=f.get(a))==null||i.delete(e),e.classList.remove(":popover-open"),E.set(e,"hidden"),o&&h(e,"open","closed");let l=x.get(e);l&&(x.delete(e),t&&l.focus())}function oe(e,t=!1,o=!1){let r=L(e);for(;r;)S(r,t,o),r=L(e)}function R(e,t=!1,o=!1){let r=q(e);for(;r;)S(r,t,o),r=q(e)}function B(e,t,o,r){let i=!1,a=!1;for(;i||!a;){a=!0;let u=null,n=!1;for(let l of t)if(l===e)n=!0;else if(n){u=l;break}if(!u)return;for(;k(u)==="showing"&&t.size;)S(M(t),o,r);t.has(e)&&M(t)!==e&&(i=!0),i&&(r=!1)}}function v(e,t,o){var r,i;let a=e.ownerDocument||e;if(e instanceof Document)return oe(a,t,o);if((r=f.get(a))!=null&&r.has(e)){B(e,f.get(a),t,o);return}R(f.get(a)||new Set,t,o),(i=d.get(a))!=null&&i.has(e)&&B(e,d.get(a),t,o)}var W=new WeakMap;function F(e){if(!e.isTrusted)return;let t=e.composedPath()[0];if(!t)return;let o=t.ownerDocument;if(!L(o))return;let r=X(t);if(r&&e.type==="pointerdown")W.set(o,r);else if(e.type==="pointerup"){let i=W.get(o)===r;W.delete(o),i&&v(r||o,!1,!0)}}var N=new WeakMap;function $(e,t=!1){if(!e)return;N.has(e)||N.set(e,e.getAttribute("aria-expanded"));let o=e.popoverTargetElement;if(o instanceof HTMLElement&&o.popover==="auto")e.setAttribute("aria-expanded",String(t));else{let r=N.get(e);r?e.setAttribute("aria-expanded",r):e.removeAttribute("aria-expanded")}}var G=globalThis.ShadowRoot||function(){};function ne(){return typeof HTMLElement<"u"&&typeof HTMLElement.prototype=="object"&&"popover"in HTMLElement.prototype}function w(e,t,o){let r=e[t];Object.defineProperty(e,t,{value(i){return r.call(this,o(i))}})}var re=/(^|[^\\]):popover-open\b/g;function le(){return typeof globalThis.CSSLayerBlockRule=="function"}function ie(){let e=le();return`
${e?"@layer popover-polyfill {":""}
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }

  :where(dialog[popover].\\:popover-open) {
    display: block;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
${e?"}":""}
`}var T=null;function C(e){let t=ie();if(T===null)try{T=new CSSStyleSheet,T.replaceSync(t)}catch{T=!1}if(T===!1){let o=document.createElement("style");o.textContent=t,e instanceof Document?e.head.prepend(o):e.prepend(o)}else e.adoptedStyleSheets=[T,...e.adoptedStyleSheets]}function ae(){if(typeof window>"u")return;window.ToggleEvent=window.ToggleEvent||p;function e(n){return n!=null&&n.includes(":popover-open")&&(n=n.replace(re,"$1.\\:popover-open")),n}w(Document.prototype,"querySelector",e),w(Document.prototype,"querySelectorAll",e),w(Element.prototype,"querySelector",e),w(Element.prototype,"querySelectorAll",e),w(Element.prototype,"matches",e),w(Element.prototype,"closest",e),w(DocumentFragment.prototype,"querySelectorAll",e),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute("popover"))return null;let n=(this.getAttribute("popover")||"").toLowerCase();return n===""||n=="auto"?"auto":n=="hint"?"hint":"manual"},set(n){n===null?this.removeAttribute("popover"):this.setAttribute("popover",n)}},showPopover:{enumerable:!0,configurable:!0,value(n={}){P(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){S(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(n={}){return typeof n=="boolean"&&(n={force:n}),E.get(this)==="showing"&&n.force===void 0||n.force===!1?S(this,!0,!0):(n.force===void 0||n.force===!0)&&P(this),E.get(this)==="showing"}}});let t=Element.prototype.attachShadow;t&&Object.defineProperties(Element.prototype,{attachShadow:{enumerable:!0,configurable:!0,writable:!0,value(n){let l=t.call(this,n);return C(l),l}}});let o=HTMLElement.prototype.attachInternals;o&&Object.defineProperties(HTMLElement.prototype,{attachInternals:{enumerable:!0,configurable:!0,writable:!0,value(){let n=o.call(this);return n.shadowRoot&&C(n.shadowRoot),n}}});let r=new WeakMap;function i(n){Object.defineProperties(n.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(l){if(l===null)this.removeAttribute("popovertarget"),r.delete(this);else if(l instanceof Element)this.setAttribute("popovertarget",""),r.set(this,l);else throw new TypeError("popoverTargetElement must be an element or null")},get(){if(this.localName!=="button"&&this.localName!=="input"||this.localName==="input"&&this.type!=="reset"&&this.type!=="image"&&this.type!=="button"||this.disabled||this.form&&this.type==="submit")return null;let l=r.get(this);if(l&&l.isConnected)return l;if(l&&!l.isConnected)return r.delete(this),null;let c=y(this),H=this.getAttribute("popovertarget");return(c instanceof Document||c instanceof G)&&H&&c.getElementById(H)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){let l=(this.getAttribute("popovertargetaction")||"").toLowerCase();return l==="show"||l==="hide"?l:"toggle"},set(l){this.setAttribute("popovertargetaction",l)}}})}i(HTMLButtonElement),i(HTMLInputElement);let a=n=>{if(n.defaultPrevented)return;let l=n.composedPath(),c=l[0];if(!(c instanceof Element)||c!=null&&c.shadowRoot)return;let H=y(c);if(!(H instanceof G||H instanceof Document))return;let _=l.find(J=>{var K;return(K=J.matches)==null?void 0:K.call(J,"[popovertargetaction],[popovertarget]")});if(_){V(_),n.preventDefault();return}},u=n=>{let l=n.key,c=n.target;!n.defaultPrevented&&c&&(l==="Escape"||l==="Esc")&&v(c.ownerDocument,!0,!0)};(n=>{n.addEventListener("click",a),n.addEventListener("keydown",u),n.addEventListener("pointerdown",F),n.addEventListener("pointerup",F)})(document),C(document)}ne()||ae()})()});var O=ge(U()),Ee=O.default??O;export{Ee as default};
//# sourceMappingURL=popover-polyfill.bundle.mjs.map