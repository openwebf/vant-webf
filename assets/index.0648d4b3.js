import{f as S,o as k,c as P,M as I,G as $,e as O,v as R,n as T,O as B,r as u,L as V}from"./use-translate.b9b887aa.js";import{n as z,m as C,c as p,w as H}from"./with-install.78f37d35.js";import{M,J as N,z as D,C as E,H as L,D as m,u as j,e as x}from"./vue-libs.b44bc779.js";function A(o,f){if(!S||!window.IntersectionObserver)return;const c=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),n=()=>{o.value&&c.observe(o.value)},l=()=>{o.value&&c.unobserve(o.value)};M(l),N(l),k(n)}const[F,G]=P("sticky"),J={zIndex:z,position:C("top"),container:Object,offsetTop:p(0),offsetBottom:p(0)},U=D({name:F,props:J,emits:["scroll","change"],setup(o,{emit:f,slots:c}){const n=E(),l=I(n),e=L({fixed:!1,width:0,height:0,transform:0}),i=m(()=>$(o.position==="top"?o.offsetTop:o.offsetBottom)),w=m(()=>{const{fixed:t,height:d,width:s}=e;if(t)return{width:`${s}px`,height:`${d}px`}}),b=m(()=>{if(!e.fixed)return;const t=O(R(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),g=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),h=()=>{if(!n.value||B(n))return;const{container:t,position:d}=o,s=u(n),y=V(window);if(e.width=s.width,e.height=s.height,d==="top")if(t){const r=u(t),a=r.bottom-i.value-e.height;e.fixed=i.value>s.top&&r.bottom>0,e.transform=a<0?a:0}else e.fixed=i.value>s.top;else{const{clientHeight:r}=document.documentElement;if(t){const a=u(t),v=r-a.top-i.value-e.height;e.fixed=r-i.value<s.bottom&&r>a.top,e.transform=v<0?-v:0}else e.fixed=r-i.value<s.bottom}g(y)};return j(()=>e.fixed,t=>f("change",t)),T("scroll",h,{target:l,passive:!0}),A(n,h),()=>{var t;return x("div",{ref:n,style:w.value},[x("div",{class:G({fixed:e.fixed}),style:b.value},[(t=c.default)==null?void 0:t.call(c)])])}}}),Z=H(U),Q=Z;export{Z as S,Q as V};
