import{S as e,i as t,s as n,e as a,h as c,b as l,c as s,d as o,j as i,k as d,f,l as r,m,t as g,a as u,o as h,p,q as b,r as w,v as x,w as $,x as j,y as T,z as v,A as y,B,C as z,D as H}from"./main.js";import{f as O}from"./index-dc01f036.js";function S(e){let t,n,r,m,g;return{c(){t=a("li"),n=a("img"),c(n,"max-height",e[2]+"px"),c(n,"max-width",e[3]+"px"),n.src!==(r=`/img/mail/${e[0].n}/${e[0].date.replace(/-/g,"")}/${e[0].name}`)&&l(n,"src",r),l(n,"alt",""),c(t,"max-height",k+"px"),c(t,"max-width",k+"px"),c(t,"overflow","hidden"),l(t,"class","m-2 shadow-lg border-white border-8 rounded")},m(a,c){s(a,t,c),o(t,n),e[4](n),g=!0},p(e,[t]){(!g||4&t)&&c(n,"max-height",e[2]+"px"),(!g||8&t)&&c(n,"max-width",e[3]+"px"),(!g||1&t&&n.src!==(r=`/img/mail/${e[0].n}/${e[0].date.replace(/-/g,"")}/${e[0].name}`))&&l(n,"src",r)},i(e){g||(i((()=>{m||(m=d(t,O,{duration:1e3},!0)),m.run(1)})),g=!0)},o(e){m||(m=d(t,O,{duration:1e3},!1)),m.run(0),g=!1},d(n){n&&f(t),e[4](null),n&&m&&m.end()}}}const k=250;function q(e,t,n){let a,{image:c}=t,l=1.25*k,s=1.25*k,o=!1;return r((()=>{setTimeout((()=>{if(a&&!o){const e=a.width>a.height;n(2,l=k*(e?1:1.25)),n(3,s=k*(e?1.25:1)),o=!0}}),200)})),e.$$set=e=>{"image"in e&&n(0,c=e.image)},[c,a,l,s,function(e){m[e?"unshift":"push"]((()=>{a=e,n(1,a)}))}]}class A extends e{constructor(e){super(),t(this,e,q,S,n,{image:0})}}const{setTimeout:C}=z;function D(e,t,n){const a=e.slice();return a[15]=t[n],a}function X(e,t,n){const a=e.slice();return a[18]=t[n],a}function Y(e){let t,n;return t=new A({props:{image:e[18]}}),{c(){b(t.$$.fragment)},m(e,a){w(t,e,a),n=!0},p(e,n){const a={};24&n&&(a.image=e[18]),t.$set(a)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function E(e){let t,n,c,i,d,r,m=e[15]+"",b=e[3][e[15]],w=[];for(let t=0;t<b.length;t+=1)w[t]=Y(X(e,b,t));const $=e=>x(w[e],1,1,(()=>{w[e]=null}));return{c(){t=a("h3"),n=g(m),c=u(),i=a("ul");for(let e=0;e<w.length;e+=1)w[e].c();d=u(),l(t,"class","bg-white p-2 text-2xl text-center"),l(i,"class","flex flex-wrap")},m(e,a){s(e,t,a),o(t,n),s(e,c,a),s(e,i,a);for(let e=0;e<w.length;e+=1)w[e].m(i,null);o(i,d),r=!0},p(e,t){if((!r||16&t)&&m!==(m=e[15]+"")&&h(n,m),24&t){let n;for(b=e[3][e[15]],n=0;n<b.length;n+=1){const a=X(e,b,n);w[n]?(w[n].p(a,t),p(w[n],1)):(w[n]=Y(a),w[n].c(),p(w[n],1),w[n].m(i,d))}for(H(),n=b.length;n<w.length;n+=1)$(n);j()}},i(e){if(!r){for(let e=0;e<b.length;e+=1)p(w[e]);r=!0}},o(e){w=w.filter(Boolean);for(let e=0;e<w.length;e+=1)x(w[e]);r=!1},d(e){e&&f(t),e&&f(c),e&&f(i),T(w,e)}}}function F(e){let t,n,c,o,d,r,m=!1,g=()=>{m=!1};i(e[8]),i(e[9]);let u=e[4],h=[];for(let t=0;t<u.length;t+=1)h[t]=E(D(e,u,t));const b=e=>x(h[e],1,1,(()=>{h[e]=null}));return{c(){n=a("div");for(let e=0;e<h.length;e+=1)h[e].c();l(n,"class","flex flex-col"),i((()=>e[10].call(n)))},m(a,l){s(a,n,l);for(let e=0;e<h.length;e+=1)h[e].m(n,null);c=v(n,e[10].bind(n)),o=!0,d||(r=[y(window,"scroll",e[5]),y(window,"scroll",(()=>{m=!0,clearTimeout(t),t=C(g,100),e[8]()})),y(window,"resize",e[9])],d=!0)},p(e,[a]){if(1&a&&!m&&(m=!0,clearTimeout(t),scrollTo(window.pageXOffset,e[0]),t=C(g,100)),24&a){let t;for(u=e[4],t=0;t<u.length;t+=1){const c=D(e,u,t);h[t]?(h[t].p(c,a),p(h[t],1)):(h[t]=E(c),h[t].c(),p(h[t],1),h[t].m(n,null))}for(H(),t=u.length;t<h.length;t+=1)b(t);j()}},i(e){if(!o){for(let e=0;e<u.length;e+=1)p(h[e]);o=!0}},o(e){h=h.filter(Boolean);for(let e=0;e<h.length;e+=1)x(h[e]);o=!1},d(e){e&&f(n),T(h,e),c(),d=!1,B(r)}}}function G(e,t,n){let a,c,l;const s=[{date:"2021-03-21",name:"b90d39624e131102cd037536ae52686a.jpeg",n:"6"},{date:"2021-03-21",name:"94cf5360320d40e1d3142cea84f99081.jpeg",n:"7"},{date:"2021-03-21",name:"90384e791c8d1adc105a4f0ea6d68d3c.jpeg",n:"8"},{date:"2021-03-21",name:"34932e3f9c24f95a5fcf0019d8231ac3.jpeg",n:"9"},{date:"2021-03-21",name:"ead6e6f71df1d2d175a97fbda10576ed.jpeg",n:"9"},{date:"2021-03-21",name:"c3281576e74db5c6933abe9df5935ab9.jpeg",n:"11"},{date:"2021-03-21",name:"3e6e3d9f314bf90df5ff422d07687322.jpeg",n:"12"},{date:"2021-03-21",name:"6b27979497b3a8efb71a90302fefad1a.jpeg",n:"12"},{date:"2021-03-21",name:"a75b6b26a62405c797a95cef04c5fe68.jpeg",n:"12"},{date:"2021-03-21",name:"b4b37951916017cda21c57f599c1ed0d.jpeg",n:"12"},{date:"2021-03-21",name:"dec6537c06b004488ca6c1b613be5b28.jpeg",n:"12"},{date:"2021-03-21",name:"e2791622abdcffa0f3f0f756c37567db.jpeg",n:"12"}];let o=s.concat(s).concat(s).concat(s).concat(s),i=1;let d,f,r=0,m=!1;return e.$$.update=()=>{64&e.$$.dirty&&n(7,a=o&&o.slice(0,6*i)),128&e.$$.dirty&&n(3,c=a.reduce(((e,t)=>(null==e[t.date]&&(e[t.date]=[]),e[t.date].push(t),e)),{}))},n(4,l=[...new Set(o.map((e=>e.date)))].sort()),[r,d,f,c,l,function(){d+r+10>f&&!m&&(m=!0,setTimeout((()=>{n(6,i+=1),m=!1}),300))},i,a,function(){n(0,r=window.pageYOffset)},function(){n(1,d=window.innerHeight)},function(){f=this.clientHeight,n(2,f)}]}export default class extends e{constructor(e){super(),t(this,e,G,F,n,{})}}
//# sourceMappingURL=index-5f7af05f.js.map