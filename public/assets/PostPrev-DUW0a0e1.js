import{d as f,r as p,p as v,b as a,w as r,u as o,F as _,a as b,G as V,s as I,o as C,v as w,x,y as s,z as d,i as P,C as g,I as h}from"./index-BH5ZGPoz.js";import{M as y}from"./Menu-o7H61YKs.js";import{C as m}from"./confconnect-C6OWnLn_.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const M=f({__name:"PostPrev",setup(N){b();const u=V(),e=p({id:"",error:"",form:{title:"",content:""}});(()=>{try{m.get("/posts/"+u.params.id).then(t=>{t.data.error!=null?e.value.error=t.data.error:(e.value.id=t.data.data.id,e.value.form.title=t.data.data.title,e.value.form.content=t.data.data.content)})}catch(t){console.log(t)}})();const i=()=>{try{m.put("/posts/"+u.params.id,e.value.form).then(t=>{t.title="",t.content="",window.location.href="/posts"})}catch(t){e.value.error=t}};return(t,l)=>{const c=I("ion-button");return C(),v(_,null,[a(y),a(o(h),null,{default:r(()=>[w("form",{onSubmit:g(i,["prevent"])},[a(o(x),null,{default:r(()=>[a(o(s),null,{default:r(()=>[a(o(d),{required:"",label:"Title",modelValue:e.value.form.title,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value.form.title=n)},null,8,["modelValue"])]),_:1}),a(o(s),null,{default:r(()=>[a(o(d),{required:"",label:"Content",modelValue:e.value.form.content,"onUpdate:modelValue":l[1]||(l[1]=n=>e.value.form.content=n)},null,8,["modelValue"])]),_:1}),a(c,{type:"submit"},{default:r(()=>[P("Send")]),_:1})]),_:1})],32)]),_:1})],64)}}}),T=B(M,[["__scopeId","data-v-4c3a3e0b"]]);export{T as default};
