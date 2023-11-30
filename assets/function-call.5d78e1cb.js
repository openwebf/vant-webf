import{c as I,e as f,p as z,d as k,t as P,x as U,f as L}from"./use-translate.b9b887aa.js";import{n as v,u as M,m as V,t as x,w as W}from"./with-install.78f37d35.js";import{m as _,u as X}from"./mount-component.652baed3.js";import{z as $,C as j,H as q,e as o,A as T,X as G}from"./vue-libs.b44bc779.js";import{e as J,c as Q}from"./constant.80c6de18.js";import{c as Y}from"./interceptor.e861aa70.js";import{p as Z,a as ee,P as te}from"./index.afee4208.js";import{B as D}from"./index.c992f1cf.js";import{b as S,c as ne}from"./index.0a5717ac.js";const[oe,s,h]=I("dialog"),le=f({},Z,{title:String,theme:String,width:v,height:v,message:[String,Function],callback:Function,allowHtml:Boolean,className:M,transition:V("van-dialog-bounce"),messageAlign:String,closeOnPopstate:x,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:x,closeOnClickOverlay:Boolean}),ae=[...ee,"transition","closeOnPopstate"],p=$({name:oe,props:le,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:i,slots:l}){const d=j(),u=q({confirm:!1,cancel:!1}),b=t=>i("update:show",t),y=t=>{var a;b(!1),(a=e.callback)==null||a.call(e,t)},O=t=>()=>{!e.show||(i(t),e.beforeClose?(u[t]=!0,Y(e.beforeClose,{args:[t],done(){y(t),u[t]=!1},canceled(){u[t]=!1}})):y(t))},C=O("cancel"),w=O("confirm"),A=G(t=>{var r,c;if(t.target!==((c=(r=d.value)==null?void 0:r.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?w:P,Escape:e.showCancelButton?C:P})[t.key](),i("keydown",t)},["enter","esc"]),E=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:s("header",{isolated:!e.message&&!l.default})},[t])},H=t=>{const{message:a,allowHtml:r,messageAlign:c}=e,B=s("message",{"has-title":t,[c]:c}),m=U(a)?a():a;return r&&typeof m=="string"?o("div",{class:B,innerHTML:m},null):o("div",{class:B},[m])},N=()=>{if(l.default)return o("div",{class:s("content")},[l.default()]);const{title:t,message:a,allowHtml:r}=e;if(a){const c=!!(t||l.title);return o("div",{key:r?1:0,class:s("content",{isolated:!c})},[H(c)])}},R=()=>o("div",{class:[Q,s("footer")]},[e.showCancelButton&&o(D,{size:"large",text:e.cancelButtonText||h("cancel"),class:s("cancel"),style:{color:e.cancelButtonColor},loading:u.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&o(D,{size:"large",text:e.confirmButtonText||h("confirm"),class:[s("confirm"),{[J]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:u.confirm,disabled:e.confirmButtonDisabled,onClick:w},null)]),F=()=>o(ne,{class:s("footer")},{default:()=>[e.showCancelButton&&o(S,{type:"warning",text:e.cancelButtonText||h("cancel"),class:s("cancel"),color:e.cancelButtonColor,loading:u.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&o(S,{type:"danger",text:e.confirmButtonText||h("confirm"),class:s("confirm"),color:e.confirmButtonColor,loading:u.confirm,disabled:e.confirmButtonDisabled,onClick:w},null)]}),K=()=>l.footer?l.footer():e.theme==="round-button"?F():R();return()=>{const{width:t,height:a,title:r,theme:c,message:B,className:m}=e;return o(te,T({ref:d,role:"dialog",class:[s([c]),m],style:{width:k(t),height:k(a)},tabindex:0,"aria-labelledby":r||B,onKeydown:A,"onUpdate:show":b},z(e,ae)),{default:()=>[E(),N(),K()]})}}});let g;function se(){({instance:g}=_({setup(){const{state:i,toggle:l}=X();return()=>o(p,T(i,{"onUpdate:show":l}),null)}}))}function n(e){return L?new Promise((i,l)=>{g||se(),g.open(f({},n.currentOptions,e,{callback:d=>{(d==="confirm"?i:l)(d)}}))}):Promise.resolve()}n.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};n.currentOptions=f({},n.defaultOptions);n.alert=n;n.confirm=e=>n(f({showCancelButton:!0},e));n.close=()=>{g&&g.toggle(!1)};n.setDefaultOptions=e=>{f(n.currentOptions,e)};n.resetDefaultOptions=()=>{n.currentOptions=f({},n.defaultOptions)};n.Component=W(p);n.install=e=>{e.use(n.Component),e.config.globalProperties.$dialog=n};export{n as D};
