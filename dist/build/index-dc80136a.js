import{E as t}from"./main.js";function n(t){const n=t-1;return n*n*n+1}function a(n,{delay:a=0,duration:o=400,easing:e=t}={}){const r=+getComputedStyle(n).opacity;return{delay:a,duration:o,easing:e,css:t=>"opacity: "+t*r}}function o(t,{delay:a=0,duration:o=400,easing:e=n,x:r=0,y:s=0,opacity:i=0}={}){const c=getComputedStyle(t),u=+c.opacity,y="none"===c.transform?"":c.transform,p=u*(1-i);return{delay:a,duration:o,easing:e,css:(t,n)=>`\n\t\t\ttransform: ${y} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${u-p*n}`}}export{o as a,a as f};
//# sourceMappingURL=index-dc80136a.js.map
