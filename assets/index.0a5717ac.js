import{c as l,b as x,e as P,u as C}from"./use-translate.b9b887aa.js";import{t as S,w as d}from"./with-install.78f37d35.js";import{u as y}from"./use-placeholder.47058183.js";import{z as p,C as I,e as m,D as i}from"./vue-libs.b44bc779.js";import{u as V}from"./use-expose.f430d209.js";import{r as _,u as N}from"./use-route.82f2be69.js";import{B as k}from"./index.c992f1cf.js";const[B,u]=l("action-bar"),f=Symbol(B),w={placeholder:Boolean,safeAreaInsetBottom:S},z=p({name:B,props:w,setup(n,{slots:o}){const r=I(),e=y(r,u),{linkChildren:a}=x(f);a();const s=()=>{var c;return m("div",{ref:r,class:[u(),{"van-safe-area-bottom":n.safeAreaInsetBottom}]},[(c=o.default)==null?void 0:c.call(o)])};return()=>n.placeholder?e(s):s()}}),E=d(z),H=E,[R,$]=l("action-bar-button"),D=P({},_,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),F=p({name:R,props:D,setup(n,{slots:o}){const r=N(),{parent:e,index:a}=C(f),s=i(()=>{if(e){const t=e.children[a.value-1];return!(t&&"isButton"in t)}}),c=i(()=>{if(e){const t=e.children[a.value+1];return!(t&&"isButton"in t)}});return V({isButton:!0}),()=>{const{type:t,icon:b,text:A,color:h,loading:g,disabled:v}=n;return m(k,{class:$([t,{last:c.value,first:s.value}]),size:"large",type:t,icon:b,color:h,loading:g,disabled:v,onClick:r},{default:()=>[o.default?o.default():A]})}}}),K=d(F),J=K;export{f as A,H as V,J as a,K as b,E as c};
