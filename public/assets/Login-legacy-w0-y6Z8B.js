System.register(["./index-legacy-BWAujlBQ.js","./confconnect-legacy-DWwSX6yU.js","./_plugin-vue_export-helper-legacy-DKqiQNGd.js"],(function(e,n){"use strict";var t,u,r,o,l,a,c,i,f,d,s,m,p,_,g,v,h,b,x,y,w,V;return{setters:[function(e){t=e.d,u=e.r,r=e.c,o=e.w,l=e.u,a=e.a,c=e.x,i=e.o,f=e.b,d=e.I,s=e.e,m=e.f,p=e.h,_=e.l,g=e.y,v=e.z,h=e.A,b=e.B,x=e.i,y=e.j},function(e){w=e.C},function(e){V=e._}],execute:function(){var n=document.createElement("style");n.textContent="#container[data-v-97b4161c]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong[data-v-97b4161c]{font-size:20px;line-height:26px}#container p[data-v-97b4161c]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-97b4161c]{text-decoration:none}\n",document.head.appendChild(n),e("default",V(t({__name:"Login",setup:function(e){var n=a(),t=u({error:"",form:{username:"",password:""}}),V=function(){try{w.post("/login",t.value.form).then((function(e){localStorage.setItem("user",JSON.stringify(e.data)),window.location.replace("/reestrs")}))}catch(e){console.log(77777777777),t.value.error=e}};return function(e,u){var a=c("ion-button");return i(),r(l(y),null,{default:o((function(){return[f(l(p),{translucent:!0},{default:o((function(){return[f(l(d),null,{default:o((function(){return[f(l(s),null,{default:o((function(){return[m("Blank")]})),_:1})]})),_:1})]})),_:1}),f(l(x),{fullscreen:!0},{default:o((function(){return[f(l(p),{collapse:"condense"},{default:o((function(){return[f(l(d),null,{default:o((function(){return[f(l(s),{size:"large"},{default:o((function(){return[m("Blank")]})),_:1})]})),_:1})]})),_:1}),f(a,{onClick:u[0]||(u[0]=function(){return l(n).push({name:"Reestrs"})})},{default:o((function(){return[m("Back")]})),_:1}),_("form",{onSubmit:b(V,["prevent"])},[f(l(g),null,{default:o((function(){return[f(l(v),null,{default:o((function(){return[f(l(h),{required:"",label:"Email",modelValue:t.value.form.username,"onUpdate:modelValue":u[1]||(u[1]=function(e){return t.value.form.username=e})},null,8,["modelValue"])]})),_:1}),f(l(v),null,{default:o((function(){return[f(l(h),{type:"password",required:"",label:"Пароль",modelValue:t.value.form.password,"onUpdate:modelValue":u[2]||(u[2]=function(e){return t.value.form.password=e})},null,8,["modelValue"])]})),_:1}),f(a,{type:"submit"},{default:o((function(){return[m("Send")]})),_:1})]})),_:1})],32)]})),_:1})]})),_:1})}}}),[["__scopeId","data-v-97b4161c"]]))}}}));
