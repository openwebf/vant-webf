import{c as m,n as d,e as v,v as y,i as f,l as h}from"./use-translate.b9b887aa.js";import{n as r,u as w,t as s,w as z}from"./with-install.78f37d35.js";import{z as O,C as S,e as c,T as x,j as D,v as I}from"./vue-libs.b44bc779.js";import{u as N}from"./use-lazy-render.f712e85e.js";const[P,R]=m("overlay"),k={show:Boolean,zIndex:r,duration:r,className:w,lockScroll:s,lazyRender:s,customStyle:Object},T=O({name:P,props:k,setup(e,{slots:t}){const n=S(),l=N(()=>e.show||!e.lazyRender),i=a=>{e.lockScroll&&h(a,!0)},u=l(()=>{var o;const a=v(y(e.zIndex),e.customStyle);return f(e.duration)&&(a.animationDuration=`${e.duration}s`),D(c("div",{ref:n,style:a,class:[R(),e.className]},[(o=t.default)==null?void 0:o.call(t)]),[[I,e.show]])});return d("touchmove",i,{target:n}),()=>c(x,{name:"van-fade",appear:!0},{default:u})}}),V=z(T),L=V;export{V as O,L as V};
