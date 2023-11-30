import{V as k,a as D}from"./index.6ccb1e21.js";import{W as p,c as v,X as x,a as w}from"./use-translate.b9b887aa.js";import{c as B,m as H,t as E,w as A}from"./with-install.78f37d35.js";import{u as b}from"./use-expose.f430d209.js";import{z as y,D as g,u as V,e as o,C as F,r as N,o as P,a as W,w as r,B as t,d as h,t as f,F as z}from"./vue-libs.b44bc779.js";import{T as G}from"./function-call.257c09b1.js";import"./constant.80c6de18.js";import"./use-route.82f2be69.js";import"./index.ee2eceac.js";import"./mount-component.652baed3.js";import"./index.afee4208.js";import"./interceptor.e861aa70.js";import"./use-touch.04ca7093.js";import"./use-lazy-render.f712e85e.js";import"./on-popup-reopen.138c77eb.js";import"./index.757b844f.js";import"./index.9ca1885c.js";function I(e,s){const{days:a}=s;let{hours:l,minutes:i,seconds:u,milliseconds:c}=s;if(e.includes("DD")?e=e.replace("DD",p(a)):l+=a*24,e.includes("HH")?e=e.replace("HH",p(l)):i+=l*60,e.includes("mm")?e=e.replace("mm",p(i)):u+=i*60,e.includes("ss")?e=e.replace("ss",p(u)):c+=u*1e3,e.includes("S")){const m=p(c,3);e.includes("SSS")?e=e.replace("SSS",m):e.includes("SS")?e=e.replace("SS",m.slice(0,2)):e=e.replace("S",m.charAt(0))}return e}const[M,T]=v("count-down"),U={time:B(0),format:H("HH:mm:ss"),autoStart:E,millisecond:Boolean},R=y({name:M,props:U,emits:["change","finish"],setup(e,{emit:s,slots:a}){const{start:l,pause:i,reset:u,current:c}=x({time:+e.time,millisecond:e.millisecond,onChange:C=>s("change",C),onFinish:()=>s("finish")}),m=g(()=>I(e.format,c.value)),n=()=>{u(+e.time),e.autoStart&&l()};return V(()=>e.time,n,{immediate:!0}),b({start:l,pause:i,reset:n}),()=>o("div",{role:"timer",class:T()},[a.default?a.default(c.value):m.value])}}),X=A(R),_=X,Z={class:"block"},j=h("span",{class:"colon"},":",-1),q={class:"block"},J=h("span",{class:"colon"},":",-1),K={class:"block"},de=y({__name:"index",setup(e){const s=w({"zh-CN":{reset:"\u91CD\u7F6E",pause:"\u6682\u505C",start:"\u5F00\u59CB",finished:"\u5012\u8BA1\u65F6\u7ED3\u675F",millisecond:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",formatWithDay:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),a=F(30*60*60*1e3),l=F(),i=()=>{var n;(n=l.value)==null||n.start()},u=()=>{var n;(n=l.value)==null||n.pause()},c=()=>{var n;(n=l.value)==null||n.reset()},m=()=>G(s("finished"));return(n,C)=>{const d=N("demo-block");return P(),W(z,null,[o(d,{title:t(s)("basicUsage")},{default:r(()=>[o(t(_),{time:a.value},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customFormat")},{default:r(()=>[o(t(_),{time:a.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),o(d,{title:t(s)("millisecond")},{default:r(()=>[o(t(_),{millisecond:"",time:a.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customStyle")},{default:r(()=>[o(t(_),{time:a.value},{default:r(S=>[h("span",Z,f(S.hours),1),j,h("span",q,f(S.minutes),1),J,h("span",K,f(S.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("manualControl")},{default:r(()=>[o(t(_),{ref_key:"countDown",ref:l,millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:m},null,512),o(t(k),{clickable:"","column-num":3},{default:r(()=>[o(t(D),{icon:"play-circle-o",text:t(s)("start"),onClick:i},null,8,["text"]),o(t(D),{icon:"pause-circle-o",text:t(s)("pause"),onClick:u},null,8,["text"]),o(t(D),{icon:"replay",text:t(s)("reset"),onClick:c},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{de as default};
