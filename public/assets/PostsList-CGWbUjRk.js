import{d as v,r as h,c as _,w as t,u as e,a as w,o as d,b as a,I as i,e as m,f as l,h as p,g as r,m as B,n as C,q as n,s as P,t as x,F as T,i as D,j as E,v as I}from"./index-DHP3V8Il.js";import{C as g}from"./confconnect-DyJNFkJf.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b=v({__name:"PostsList",setup(y){const c=w(),u=h({success:"",message:"",list:[]});(()=>{try{g.get("/posts").then(s=>{s.data.error!=null?u.value.error=s.data.error:(u.value.success=s.data.success,u.value.message=s.data.message,u.value.list=s.data.list)})}catch(s){console.log(s)}})();const k=s=>{g.delete("/posts/"+s),window.location.href="/posts"};return(s,f)=>(d(),_(e(E),null,{default:t(()=>[a(e(p),{translucent:!0},{default:t(()=>[a(e(i),null,{default:t(()=>[a(e(m),null,{default:t(()=>[l("Blank")]),_:1})]),_:1})]),_:1}),a(e(D),{fullscreen:!0},{default:t(()=>[a(e(p),{collapse:"condense"},{default:t(()=>[a(e(i),null,{default:t(()=>[a(e(m),{size:"large"},{default:t(()=>[l("Blank")]),_:1})]),_:1})]),_:1}),a(e(r),{onClick:f[0]||(f[0]=()=>e(c).push({name:"Post_add"}))},{default:t(()=>[l("Post add")]),_:1}),a(e(B),null,{default:t(()=>[a(e(C),null,{default:t(()=>[a(e(n),null,{default:t(()=>[l("Title")]),_:1}),a(e(n),null,{default:t(()=>[l("Content")]),_:1}),a(e(n),null,{default:t(()=>[l("Edit")]),_:1}),a(e(n),null,{default:t(()=>[l("Delete")]),_:1})]),_:1}),(d(!0),P(T,null,x(u.value.list,o=>(d(),_(e(C),null,{default:t(()=>[a(e(n),null,{default:t(()=>[l(I(o.title),1)]),_:2},1024),a(e(n),null,{default:t(()=>[l(I(o.content),1)]),_:2},1024),a(e(n),null,{default:t(()=>[a(e(r),{onClick:()=>e(c).push({name:"Post_prev",params:{id:o.id}})},{default:t(()=>[l("Edit")]),_:2},1032,["onClick"])]),_:2},1024),a(e(n),null,{default:t(()=>[a(e(r),{onClick:N=>k(o.id)},{default:t(()=>[l("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1}))}}),q=L(b,[["__scopeId","data-v-c58c56e1"]]);export{q as default};
