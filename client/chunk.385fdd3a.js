function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){const o=n.subscribe(e);t.$$.on_destroy.push(o.unsubscribe?()=>o.unsubscribe():o)}function a(t,n,e){if(t){const o=i(t,n,e);return t[0](o)}}function i(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function f(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function l(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function d(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function b(){return g(" ")}function y(){return g("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function v(t,n){for(const e in n)"style"===e?t.style.cssText=n[e]:e in t?t[e]=n[e]:_(t,e,n[e])}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):m(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return g(n)}function A(t,n){n=""+n,t.data!==n&&(t.data=n)}function N(t,n,e){t.classList[e?"add":"remove"](n)}let S;function j(t){S=t}function C(){if(!S)throw new Error("Function called outside component initialization");return S}function L(t,n){C().$$.context.set(t,n)}function T(t){return C().$$.context.get(t)}function q(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}const z=[],B=[],F=[],O=[],D=Promise.resolve();let G=!1;function H(t){F.push(t)}function I(){const t=new Set;do{for(;z.length;){const t=z.shift();j(t),J(t.$$)}for(;B.length;)B.pop()();for(let n=0;n<F.length;n+=1){const e=F[n];t.has(e)||(e(),t.add(e))}F.length=0}while(z.length);for(;O.length;)O.pop()();G=!1}function J(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(H))}const M=new Set;let P;function K(){P={r:0,c:[],p:P}}function Q(){P.r||r(P.c),P=P.p}function R(t,n){t&&t.i&&(M.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),P.c.push(()=>{M.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function V(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function W(t,n,o){const{fragment:s,on_mount:u,on_destroy:a,after_update:i}=t.$$;s.m(n,o),H(()=>{const n=u.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(H)}function X(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function Y(t,n){t.$$.dirty||(z.push(t),G||(G=!0,D.then(I)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function Z(n,e,c,s,u,a){const i=S;j(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=c?c(n,f,(t,e)=>{l.ctx&&u(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&Y(n,t))}):f,l.update(),d=!0,r(l.before_update),l.fragment=s(l.ctx),e.target&&(e.hydrate?l.fragment.l(w(e.target)):l.fragment.c(),e.intro&&R(n.$$.fragment),W(n,e.target,e.anchor),I()),j(i)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{S as A,A as B,n as C,V as D,L as E,T as F,x as G,q as H,v as I,l as J,tt as S,b as a,w as b,E as c,k as d,m as e,p as f,_ as g,$ as h,Z as i,d as j,N as k,h as l,a as m,t as n,W as o,f as p,i as q,R as r,s,g as t,U as u,X as v,u as w,K as x,Q as y,y as z};
