function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(t){let e;return c(t,(t=>e=t))(),e}function u(t,e,n){t.$$.on_destroy.push(c(e,n))}function p(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,e,n,o,r,s,i){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(a){const r=f(e,n,o,i);t.p(r,a)}}function h(t,e,n=e){return t.set(n),e}const m="undefined"!=typeof window;let g=m?()=>window.performance.now():()=>Date.now(),y=m?t=>requestAnimationFrame(t):t;const $=new Set;function b(t){$.forEach((e=>{e.c(t)||($.delete(e),e.f())})),0!==$.size&&y(b)}function w(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function P(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function E(){return k(" ")}function O(){return k("")}function j(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t){return""===t?null:+t}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e){t.value=null==e?"":e}function A(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let F;function M(){if(void 0===F){F=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){F=!0}}return F}function N(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=P("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=M();let r;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=j(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=j(n.contentWindow,"resize",e)}),w(t,n),()=>{(o||r&&n.contentWindow)&&r(),v(n)}}function T(t,e,n){t.classList[n?"add":"remove"](e)}function C(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const q=new Set;let B,U=0;function z(t,e,n,o,r,s,i,a=0){const c=16.666/o;let l="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);l+=100*t+`%{${i(o,1-o)}}\n`}const u=l+`100% {${i(n,1-n)}}\n}`,p=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,f=t.ownerDocument;q.add(f);const d=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(P("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[p]||(h[p]=!0,d.insertRule(`@keyframes ${p} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${p} ${o}ms linear ${r}ms 1 both`,U+=1,p}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),U-=r,U||y((()=>{U||(q.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),q.clear())})))}function H(t){B=t}function K(){if(!B)throw new Error("Function called outside component initialization");return B}function W(t){K().$$.after_update.push(t)}function J(){const t=K();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=C(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function G(t,e){K().$$.context.set(t,e)}function Q(t){return K().$$.context.get(t)}const V=[],Z=[],X=[],Y=[],tt=Promise.resolve();let et=!1;function nt(){et||(et=!0,tt.then(at))}function ot(){return nt(),tt}function rt(t){X.push(t)}let st=!1;const it=new Set;function at(){if(!st){st=!0;do{for(let t=0;t<V.length;t+=1){const e=V[t];H(e),ct(e.$$)}for(H(null),V.length=0;Z.length;)Z.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];it.has(e)||(it.add(e),e())}X.length=0}while(V.length);for(;Y.length;)Y.pop()();et=!1,st=!1,it.clear()}}function ct(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(rt)}}let lt;function ut(t,e,n){t.dispatchEvent(C(`${e?"intro":"outro"}${n}`))}const pt=new Set;let ft;function dt(){ft={r:0,c:[],p:ft}}function ht(){ft.r||s(ft.c),ft=ft.p}function mt(t,e){t&&t.i&&(pt.delete(t),t.i(e))}function gt(t,e,n,o){if(t&&t.o){if(pt.has(t))return;pt.add(t),ft.c.push((()=>{pt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const yt={duration:0};function $t(n,o,r,a){let c=o(n,r),l=a?0:1,u=null,p=null,f=null;function d(){f&&D(n,f)}function h(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function m(o){const{delay:r=0,duration:i=300,easing:a=e,tick:m=t,css:w}=c||yt,_={start:g()+r,b:o};o||(_.group=ft,ft.r+=1),u||p?p=_:(w&&(d(),f=z(n,l,o,i,r,a,w)),o&&m(0,1),u=h(_,i),rt((()=>ut(n,o,"start"))),function(t){let e;0===$.size&&y(b),new Promise((n=>{$.add(e={c:t,f:n})}))}((t=>{if(p&&t>p.start&&(u=h(p,i),p=null,ut(n,u.b,"start"),w&&(d(),f=z(n,l,u.b,u.duration,0,a,c.css))),u)if(t>=u.end)m(l=u.b,1-l),ut(n,u.b,"end"),p||(u.b?d():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*a(e/u.duration),m(l,1-l)}return!(!u&&!p)})))}return{run(t){i(c)?(lt||(lt=Promise.resolve(),lt.then((()=>{lt=null}))),lt).then((()=>{c=c(),m(t)})):m(t)},end(){d(),u=p=null}}}function bt(t,e){t.d(1),e.delete(t.key)}function wt(t,e){gt(t,1,1,(()=>{e.delete(t.key)}))}function _t(t,e,n,o,r,s,i,a,c,l,u,p){let f=t.length,d=s.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=d;h--;){const t=p(r,s,h),a=n(t);let c=i.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,g[h]=c),a in m&&$.set(a,Math.abs(h-m[a]))}const b=new Set,w=new Set;function _(t){mt(t,1),t.m(a,u),i.set(t.key,t),u=t.first,d--}for(;f&&d;){const e=g[d-1],n=t[f-1],o=e.key,r=n.key;e===n?(u=e.first,f--,d--):y.has(r)?!i.has(o)||b.has(o)?_(e):w.has(r)?f--:$.get(o)>$.get(r)?(w.add(o),_(e)):(b.add(r),f--):(c(n,i),f--)}for(;f--;){const e=t[f];y.has(e.key)||c(e,i)}for(;d;)_(g[d-1]);return g}function vt(t){t&&t.c()}function xt(t,e,n){const{fragment:r,on_mount:a,on_destroy:c,after_update:l}=t.$$;r&&r.m(e,n),rt((()=>{const e=a.map(o).filter(i);c?c.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(rt)}function Pt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function kt(e,n,o,i,a,c,l=[-1]){const u=B;H(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let f=!1;if(p.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),f&&function(t,e){-1===t.$$.dirty[0]&&(V.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),f=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(v)}else p.fragment&&p.fragment.c();n.intro&&mt(e.$$.fragment),xt(e,n.target,n.anchor),at()}H(u)}class Et{$destroy(){Pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Ot={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce(((t,[e,n])=>(t[e]=n,t)),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const jt=RegExp(/\:([^/()]+)/g);function St(t){if(navigator.userAgent.includes("jsdom"))return!1;Rt(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}function Rt(t){t&&t.scrollTo&&"scroll-lock"!==t.dataset.routify&&"lock"!==t.dataset["routify-scroll"]&&(t.style["scroll-behavior"]="auto",t.scrollTo({top:0,behavior:"auto"}),t.style["scroll-behavior"]="",Rt(t.parentElement))}const Lt=t=>{const e=[];let n;for(;n=jt.exec(t);)e.push(n[1]);return e};function It(t,e){It._console=It._console||{log:console.log,warn:console.warn};const{_console:n}=It,o=t.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,t.component.shortPath.split("/").pop()).replace(/^./,(t=>t.toUpperCase())).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const t of["log","warn"])console[t]=(...e)=>{r.includes(e[0])||n[t](...e)},e().then((()=>{console[t]=n[t]}))}function At(){let t=window.location.pathname+window.location.search+window.location.hash;const{url:e,options:n}=function(t){const[e,n]=t.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:e,options:o}}(t);return{...Ft(e),options:n}}function Ft(t){Ot.useHash&&(t=t.replace(/.*#(.+)/,"$1"));const e=t.startsWith("/")?window.location.origin:void 0,n=new URL(t,e);return{url:n,fullpath:n.pathname+n.search+n.hash}}function Mt(t,e,n){const o=Ot.useHash?"#":"";let r;return r=function(t,e,n){const o=Object.assign({},n,e),r=function(t,e){if(!Ot.queryHandler)return"";const n=Lt(t),o={};e&&Object.entries(e).forEach((([t,e])=>{n.includes(t)||(o[t]=e)}));return Ot.queryHandler.stringify(o).replace(/\?$/,"")}(t,e);for(const[e,n]of Object.entries(o))t=t.replace(`:${e}`,n);return`${t}${r}`}(t,e,n),r=Ot.urlTransform.apply(r),r=o+r,r}function Nt(t){let e;const n=t[2].default,o=p(n,t,t[1],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[e]){o&&o.p&&2&e&&d(o,n,t,t[1],e,null,null)},i(t){e||(mt(o,t),e=!0)},o(t){gt(o,t),e=!1},d(t){o&&o.d(t)}}}function Tt(t,e,n){let{$$slots:o={},$$scope:r}=e,{scoped:s={}}=e;return t.$$set=t=>{"scoped"in t&&n(0,s=t.scoped),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class Ct extends Et{constructor(t){super(),kt(this,t,Tt,Nt,a,{scoped:0})}}const qt=[];function Bt(e,n=t){let o;const r=[];function s(t){if(a(e,t)&&(e=t,o)){const t=!qt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),qt.push(n,e)}if(t){for(let t=0;t<qt.length;t+=2)qt[t][0](qt[t+1]);qt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.push(c),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function Ut(e,n,o){const r=!Array.isArray(e),a=r?[e]:e,l=n.length<2;return{subscribe:Bt(o,(e=>{let o=!1;const u=[];let p=0,f=t;const d=()=>{if(p)return;f();const o=n(r?u[0]:u,e);l?e(o):f=i(o)?o:t},h=a.map(((t,e)=>c(t,(t=>{u[e]=t,p&=~(1<<e),o&&d()}),(()=>{p|=1<<e}))));return o=!0,d(),function(){s(h),f()}})).subscribe}}window.routify=window.routify||{};const zt=Bt(null),Dt=Bt([]);Dt.subscribe((t=>window.routify.routes=t));let Ht=Bt({component:{params:{}}});const Kt=Bt(null),Wt=Bt(!0);function Jt(t,e=!1){t=Ot.urlTransform.remove(t);let{pathname:n,search:o}=Ft(t).url;const r=l(Dt),s=r.find((t=>n===t.meta.name))||r.find((t=>n.match(t.regex)));if(!s)throw new Error(`Route could not be found for "${n}".`);const i=e?Object.create(s):s,{route:a,redirectPath:c,rewritePath:u}=Gt(i,r);return u&&(({pathname:n,search:o}=Ft(Mt(u,a.params)).url),c&&(a.redirectTo=Mt(c,a.params||{}))),Ot.queryHandler&&(a.params=Object.assign({},a.params,Ot.queryHandler.parse(o))),function(t,e){if(t.paramKeys){const n=function(t){const e=[];return t.forEach((t=>{e[t.path.split("/").filter(Boolean).length-1]=t})),e}(t.layouts),o=e.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map((t=>t.match(/\:(.+)/))).map((t=>t&&t[1]))})(t.path).forEach(((e,r)=>{e&&(t.params[e]=o[r],n[r]?n[r].param={[e]:o[r]}:t.param={[e]:o[r]})}))}}(a,n),a.leftover=t.replace(new RegExp(a.regex),""),a}function Gt(t,e,n,o){const{redirect:r,rewrite:s}=t.meta;if(r||s){n=r?r.path||r:n,o=s?s.path||s:n;const i=r&&r.params,a=s&&s.params,c=e.find((t=>t.path===o));return c===t&&console.error(`${o} is redirecting to itself`),c||console.error(`${t.path} is redirecting to non-existent path: ${o}`),(i||a)&&(c.params=Object.assign({},c.params,i,a)),Gt(c,e,n,o)}return{route:t,redirectPath:n,rewritePath:o}}function Qt(t,e,n){const o=t.slice();return o[1]=e[n],o}function Vt(t,e){let n,o;return{key:t,first:null,c(){n=P("iframe"),n.src!==(o=e[1].url)&&S(n,"src",o),S(n,"frameborder","0"),S(n,"title","routify prefetcher"),this.first=n},m(t,e){_(t,n,e)},p(t,r){e=t,1&r&&n.src!==(o=e[1].url)&&S(n,"src",o)},d(t){t&&v(n)}}}function Zt(e){let n,o=[],r=new Map,s=e[0];const i=t=>t[1].options.prefetch;for(let t=0;t<s.length;t+=1){let n=Qt(e,s,t),a=i(n);r.set(a,o[t]=Vt(a,n))}return{c(){n=P("div");for(let t=0;t<o.length;t+=1)o[t].c();S(n,"id","__routify_iframes"),A(n,"display","none")},m(t,e){_(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){1&e&&(s=t[0],o=_t(o,e,i,1,t,s,r,n,bt,Vt,null,Qt))},i:t,o:t,d(t){t&&v(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const Xt=Bt([]),Yt=Ut(Xt,(t=>t.slice(0,2)));function te(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=l(Xt).find((t=>t&&t.options.prefetch==e));if(n){const{gracePeriod:t}=n.options,o=new Promise((e=>setTimeout(e,t))),r=new Promise((e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)}));Promise.all([o,r]).then((()=>{Xt.update((t=>t.filter((t=>t.options.prefetch!=e))))}))}}function ee(t,e,n){let o;return u(t,Yt,(t=>n(0,o=t))),[o]}Yt.subscribe((t=>t.forEach((({options:t})=>{setTimeout((()=>te(t.prefetch)),t.timeout)})))),addEventListener("message",te,!1);class ne extends Et{constructor(t){super(),kt(this,t,ee,Zt,a,{})}}function oe(){return Q("routify")||Ht}const re={_hooks:[t=>Wt.set(!1)],subscribe:ie},se={_hooks:[],subscribe:ie};function ie(t){const e=this._hooks,n=e.length;return t((t=>{e[n]=t})),()=>delete e[n]}const ae={subscribe:t=>Ut(oe(),(t=>t.route.params)).subscribe(t)},ce={subscribe:t=>Ut([oe(),zt,Dt],(t=>function(t,e,n){return function(o,r={},s){const{component:i}=t,a=Object.assign({},e.params,i.params);let c=o&&o.nodeType&&o;c&&(o=o.getAttribute("href")),o=o?p(o):i.shortPath;const l=n.find((t=>[t.shortPath||"/",t.path].includes(o)));if(l&&"proximity"===l.meta.preload&&window.requestIdleCallback){const t=routify.appLoaded?0:1500;setTimeout((()=>{window.requestIdleCallback((()=>l.api.preload()))}),t)}s&&!1!==s.strict||(o=o.replace(/index$/,""));let u=Mt(o,r,a);return c?(c.href=u,{update(t){c.href=Mt(o,t,a)}}):u;function p(t){if(t.match(/^\.\.?\//)){let[,e,n]=t.match(/^([\.\/]+)(.*)/),o=i.path.replace(/\/$/,"");const r=e.match(/\.\.\//g)||[];i.isPage&&r.push(null),r.forEach((()=>o=o.replace(/\/[^\/]+\/?$/,""))),t=(t=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(t.match(/^\//));else{const e=n.find((e=>e.meta.name===t));e&&(t=e.shortPath)}return t}}}(...t))).subscribe(t)};const le={subscribe(t){const e=Q("routifyupdatepage");return Ut(ce,(t=>function(n,o,r,s){const i=t(n,o);r?e(i,s):history.pushState({},null,i)})).subscribe(t)}},ue={subscribe(t){const e=Q("routifyupdatepage");return Ut(ce,(t=>function(n,o,r,s){const i=t(n,o);r?e(i,s):history.replaceState({},null,i)})).subscribe(t)}},pe={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(pe.getLongest(pe.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){pe.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){pe.writeMeta(`og:${t}`,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=l(zt).path;return n[Object.keys(t[e]).filter((t=>o.includes(t))).sort(((t,e)=>e.length-t.length))[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:s,valueField:i}=fe.services[r]||fe.services.plain,a=document.querySelector(`meta[${s}='${t}']`);a&&a.remove();const c=document.createElement("meta");c.setAttribute(s,t),c.setAttribute(i,e),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(t,e){pe.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=pe.getOrigin();pe.templates[t]=pe.templates[t]||{},pe.templates[t][n]=e},update(){Object.keys(pe.props).forEach((t=>{let e=pe.getLongest(pe.props,t);pe.plugins.forEach((n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])}))}))},batchedUpdate(){pe._pendingUpdate||(pe._pendingUpdate=!0,setTimeout((()=>{pe._pendingUpdate=!1,this.update()})))},_updateQueued:!1,getOrigin(){const t=oe();return t&&l(t).path||"/"},_pendingUpdate:!1},fe=new Proxy(pe,{set(t,e,n,o){const{props:r,getOrigin:s}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][s()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});function de(t,e,n){const o=t.slice();return o[18]=e[n].component,o[19]=e[n].componentFile,o[2]=e[n].decorator,o[1]=e[n].nodes,o}function he(t){let e,n,o=[],r=new Map,s=[t[4]];const i=t=>function({meta:t,path:e,param:n,params:o}){return JSON.stringify({path:e,param:(t["param-is-page"]||t["slug-is-page"])&&n,queryParams:t["query-params-is-page"]&&o})}(t[18]);for(let e=0;e<1;e+=1){let n=de(t,s,e),a=i(n);r.set(a,o[e]=$e(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=O()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);_(t,e,r),n=!0},p(t,n){4194365&n&&(s=[t[4]],dt(),o=_t(o,n,i,1,t,s,r,e.parentNode,wt,$e,e,de),ht())},i(t){if(!n){for(let t=0;t<1;t+=1)mt(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)gt(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&v(e)}}}function me(t){let e,n;return e=new _e({props:{decorator:t[2],nodes:[...t[1]],scoped:{...t[0],...t[22]}}}),{c(){vt(e.$$.fragment)},m(t,o){xt(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.decorator=t[2]),16&n&&(o.nodes=[...t[1]]),4194305&n&&(o.scoped={...t[0],...t[22]}),e.$set(o)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){Pt(e,t)}}}function ge(t){let e,n,o=t[18]&&t[1].length&&me(t);return{c(){o&&o.c(),e=O()},m(t,r){o&&o.m(t,r),_(t,e,r),n=!0},p(t,n){t[18]&&t[1].length?o?(o.p(t,n),16&n&&mt(o,1)):(o=me(t),o.c(),mt(o,1),o.m(e.parentNode,e)):o&&(dt(),gt(o,1,1,(()=>{o=null})),ht())},i(t){n||(mt(o),n=!0)},o(t){gt(o),n=!1},d(t){o&&o.d(t),t&&v(e)}}}function ye(t){let e,o,r;const s=[{scoped:t[0]},{scopedSync:t[5]},t[3].param||{}];var i=t[19];function a(t){let e={$$slots:{default:[ge,({scoped:t,decorator:e})=>({22:t,2:e}),({scoped:t,decorator:e})=>(t?4194304:0)|(e?4:0)]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(a(t))),{c(){e&&vt(e.$$.fragment),o=E()},m(t,n){e&&xt(e,t,n),_(t,o,n),r=!0},p(t,n){const r=41&n?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[1&n&&{scoped:t[0]},32&n&&{scopedSync:t[5]},8&n&&(c=t[3].param||{},"object"==typeof c&&null!==c?c:{})]):{};var c;if(12582933&n&&(r.$$scope={dirty:n,ctx:t}),i!==(i=t[19])){if(e){dt();const t=e;gt(t.$$.fragment,1,0,(()=>{Pt(t,1)})),ht()}i?(e=new i(a(t)),vt(e.$$.fragment),mt(e.$$.fragment,1),xt(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&mt(e.$$.fragment,t),r=!0)},o(t){e&&gt(e.$$.fragment,t),r=!1},d(t){e&&Pt(e,t),t&&v(o)}}}function $e(t,e){let n,o,r,s;var i=e[2];function a(t){return{props:{scoped:t[0],$$slots:{default:[ye]},$$scope:{ctx:t}}}}return i&&(o=new i(a(e))),{key:t,first:null,c(){n=O(),o&&vt(o.$$.fragment),r=O(),this.first=n},m(t,e){_(t,n,e),o&&xt(o,t,e),_(t,r,e),s=!0},p(t,n){e=t;const s={};if(1&n&&(s.scoped=e[0]),8388669&n&&(s.$$scope={dirty:n,ctx:e}),i!==(i=e[2])){if(o){dt();const t=o;gt(t.$$.fragment,1,0,(()=>{Pt(t,1)})),ht()}i?(o=new i(a(e)),vt(o.$$.fragment),mt(o.$$.fragment,1),xt(o,r.parentNode,r)):o=null}else i&&o.$set(s)},i(t){s||(o&&mt(o.$$.fragment,t),s=!0)},o(t){o&&gt(o.$$.fragment,t),s=!1},d(t){t&&v(n),t&&v(r),o&&Pt(o,t)}}}function be(e){let n,o,r,s,a,c=e[4]&&he(e);return{c(){c&&c.c(),n=E(),o=P("span")},m(l,u){var p;c&&c.m(l,u),_(l,n,u),_(l,o,u),r=!0,s||(p=e[8].call(null,o),a=p&&i(p.destroy)?p.destroy:t,s=!0)},p(t,[e]){t[4]?c?(c.p(t,e),16&e&&mt(c,1)):(c=he(t),c.c(),mt(c,1),c.m(n.parentNode,n)):c&&(dt(),gt(c,1,1,(()=>{c=null})),ht())},i(t){r||(mt(c),r=!0)},o(t){gt(c),r=!1},d(t){c&&c.d(t),t&&v(n),t&&v(o),s=!1,a()}}}function we(t,e,n){let o,r,s,i;u(t,zt,(t=>n(14,s=t)));let a,{nodes:c=[]}=e,{scoped:l={}}=e,{isRoot:p=!1}=e,{decorator:f}=e,d=null,h=null,m={};const g=Bt(null);u(t,g,(t=>n(4,i=t)));const y=Q("routify");u(t,y,(t=>n(10,r=t)));function $(t){n(5,m={...l}),0===h.length&&async function(){await ot(),St(a);const t=i.component.path===s.path;!window.routify.stopAutoReady&&t&&async function({page:t,metatags:e,afterPageLoad:n}){const{path:o}=t,{options:r}=At(),s=r.prefetch;for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:o,prefetchId:s},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:i.component,metatags:fe,afterPageLoad:re})}();const e={nodes:h,decorator:f||Ct,layout:d.isLayout?d:o&&o.layout,component:d,route:s,componentFile:t,parentNode:a||o&&o.parentNode};g.set(e),p&&Ht.set(e)}return G("routify",g),t.$$set=t=>{"nodes"in t&&n(1,c=t.nodes),"scoped"in t&&n(0,l=t.scoped),"isRoot"in t&&n(9,p=t.isRoot),"decorator"in t&&n(2,f=t.decorator)},t.$$.update=()=>{1024&t.$$.dirty&&(o=r),2&t.$$.dirty&&n(3,[d,...h]=c,d),8&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then($):$(e)}(d),16&t.$$.dirty&&i&&It(i,ot)},[l,c,f,d,i,m,g,y,t=>a=t.parentNode,p,r]}class _e extends Et{constructor(t){super(),kt(this,t,we,be,a,{nodes:1,scoped:0,isRoot:9,decorator:2})}}function ve(t,e){let n=!1;function o(o,r){const s=Jt(o||At().fullpath);s.redirectTo&&(history.replaceStateNative({},null,s.redirectTo),delete s.redirectTo);const i=[...(r&&Jt(At().fullpath,t)||s).layouts,s];n&&delete n.last,s.last=n,n=s,o||Kt.set(s),zt.set(s),s.api.preload().then((()=>{Wt.set(!0),e(i)}))}const r=function(t){["pushState","replaceState"].forEach((t=>{history[t+"Native"]=history[t],history[t]=async function(e={},n,o){if(o===location.pathname+location.search+location.hash)return!1;const{id:r,path:s,params:i}=l(zt);e={id:r,path:s,params:i,...e};const a=new Event(t.toLowerCase());Object.assign(a,{state:e,title:n,url:o});return await Pe(a,o)?(history[t+"Native"].apply(this,[e,n,o]),dispatchEvent(a)):void 0}}));let e=!1;const n={click:xe,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Pe(n,At().fullpath)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach((t=>addEventListener(...t)));return()=>{Object.entries(n).forEach((t=>removeEventListener(...t)))}}(o);return{updatePage:o,destroy:r}}function xe(t){const e=t.target.closest("a"),n=e&&e.href;if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented)return;if(!n||e.target||e.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;t.preventDefault(),history.pushState({},"",r)}async function Pe(t,e){const n=Jt(e).api;for(const o of se._hooks.filter(Boolean)){if(!await o(t,n,{url:e}))return!1}return!0}function ke(t){let e,n;return e=new _e({props:{nodes:t[0],isRoot:!0}}),{c(){vt(e.$$.fragment)},m(t,o){xt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.nodes=t[0]),e.$set(o)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){Pt(e,t)}}}function Ee(t){let e,n,o,r=t[0]&&null!==t[1]&&ke(t);return n=new ne({}),{c(){r&&r.c(),e=E(),vt(n.$$.fragment)},m(t,s){r&&r.m(t,s),_(t,e,s),xt(n,t,s),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&mt(r,1)):(r=ke(t),r.c(),mt(r,1),r.m(e.parentNode,e)):r&&(dt(),gt(r,1,1,(()=>{r=null})),ht())},i(t){o||(mt(r),mt(n.$$.fragment,t),o=!0)},o(t){gt(r),gt(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&v(e),Pt(n,t)}}}function Oe(t,e,n){let o;u(t,zt,(t=>n(1,o=t)));let r,s,{routes:i}=e,{config:a={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(Ot,a);G("routifyupdatepage",((...t)=>s&&s.updatePage(...t)));const c=t=>n(0,r=t),l=()=>{s&&(s.destroy(),s=null)};let p=null;var f;return f=l,K().$$.on_destroy.push(f),t.$$set=t=>{"routes"in t&&n(2,i=t.routes),"config"in t&&n(3,a=t.config)},t.$$.update=()=>{4&t.$$.dirty&&i&&(clearTimeout(p),p=setTimeout((()=>{l(),s=ve(i,c),Dt.set(i),s.updatePage()})))},[r,o,i,a]}class je extends Et{constructor(t){super(),kt(this,t,Oe,Ee,a,{routes:2,config:3})}}function Se(t){const e=async function(e){return await Re(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return Le(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}async function Re(t,e){const n=await t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=await Promise.all(o.children.map((async n=>Re(t,{state:e.state,scope:Ie(e.scope||{}),parent:e.file,file:await n}))));o.children=n.filter(Boolean)}return o}function Le(t,e){const n=t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=o.children.map((n=>Le(t,{state:e.state,scope:Ie(e.scope||{}),parent:e.file,file:n})));o.children=n.filter(Boolean)}return o}function Ie(t){return JSON.parse(JSON.stringify(t))}const Ae=Se((({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return`^${t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(jt,"([^/]+)")+n}`})(t.path,t.isFallback))})),Fe=Se((({file:t})=>{t.paramKeys=Lt(t.path)})),Me=Se((({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path})),Ne=Se((({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map((t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C")).join(""))(t)})),Te=Se((({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map((t=>({isMeta:!0,...t,meta:t})))))})),Ce=Se((t=>{const{file:e}=t,{isFallback:n,meta:o}=e,r=e.path.match("/:"),s=e.path.endsWith("/index"),i=o.index||0===o.index,a=!1===o.index;e.isIndexable=i||!n&&!r&&!s&&!a,e.isNonIndexable=!e.isIndexable})),qe=Se((({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>Ue(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>Ue(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>Be(e)})}));function Be(t,e=[]){return t&&(e.unshift(t),Be(t.parent,e)),e}function Ue(t,e){if(!t.root){const n=t.parent.children.filter((t=>t.isIndexable)),o=n.indexOf(t);return n[o+e]}}const ze=Se((({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})})),De=Se((({file:t,scope:e})=>{function n(t){const{parent:e}=t,o=e&&e.component&&e,r=o&&o.isReset,s=e&&!r&&n(e)||[];return o&&s.push(o),s}Object.defineProperty(t,"layouts",{get:()=>n(t)})})),He=Se((({file:t})=>{const e=t.root?function(){}:t.children?(t.isPage,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)}));var Ke=Object.freeze({__proto__:null,setRegex:Ae,setParamKeys:Fe,setShortPath:Me,setRank:Ne,addMetaChildren:Te,setIsIndexable:Ce,assignRelations:qe,assignIndex:ze,assignLayout:De,createFlatList:t=>{Se((t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)})).sync(t),t.routes.sort(((t,e)=>t.ranking>=e.ranking?-1:1))},setPrototype:He});const We={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function Je(t){return Object.entries(We).forEach((([e,n])=>{void 0===t[e]&&(t[e]=n)})),t.children&&(t.children=t.children.map(Je)),t}const Ge=Se((({file:t})=>{t.api=new Qe(t)}));class Qe{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter((t=>!t.isNonIndexable)).sort(((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})))).map((({api:t})=>t))}get next(){return Ve(this,1)}get prev(){return Ve(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file].map((t=>t.component()));await Promise.all(t)}get component(){return this.__file.component?this.__file.component():!!this.__file.index&&this.__file.index.component()}}function Ve(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const Ze={...Ke,restoreDefaults:({tree:t})=>Je(t),assignAPI:Ge};const Xe={root:!0,ownMeta:{preload:"proximity"},children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/_fallback",component:()=>import("./_fallback-6e92d963.js").then((t=>t.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/index",id:"_index",component:()=>import("./index-8b4a4faa.js").then((t=>t.default))}],isLayout:!0,meta:{preload:"proximity",recursive:!0,prerender:!0},path:"/",id:"__layout",component:()=>import("./_layout-2c1ce2e1.js").then((t=>t.default))},{tree:Ye,routes:tn}=function(t){const e=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(Ze[t].sync||Ze[t])(n)}return n}(Xe);function en(e){let n,o;return n=new je({props:{routes:tn}}),{c(){vt(n.$$.fragment)},m(t,e){xt(n,t,e),o=!0},p:t,i(t){o||(mt(n.$$.fragment,t),o=!0)},o(t){gt(n.$$.fragment,t),o=!1},d(t){Pt(n,t)}}}!function(t,e={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),s=document.createElement("div");function i(){r&&r.remove(),s.style.visibility=null,s.setAttribute("id",n)}s.style.visibility="hidden",e.target.appendChild(s),r?addEventListener(o,i):i(),new t({...e,target:s})}(class extends Et{constructor(t){super(),kt(this,t,null,en,a,{})}},{target:document.body},"routify-app");export{mt as A,gt as B,Pt as C,x as D,Q as E,e as F,rt as G,$t as H,N as I,dt as J,ht as K,T as L,p as M,d as N,R as O,ue as P,W as Q,J as R,Et as S,Z as T,G as U,fe as V,E as a,S as b,_ as c,w as d,P as e,v as f,u as g,Ut as h,kt as i,A as j,i as k,j as l,O as m,t as n,le as o,ae as p,h as q,L as r,a as s,k as t,ce as u,I as v,Bt as w,s as x,vt as y,xt as z};
//# sourceMappingURL=main.js.map
