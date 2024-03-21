!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},l=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(n){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),u=new O(r||[]);return i(a,"_invoke",{value:z(t,n,u)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var h="suspendedStart",v="suspendedYield",m="executing",g="completed",y={};function w(){}function x(){}function b(){}var _={};f(_,l,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(B([])));L&&L!==o&&a.call(L,l)&&(_=L);var E=b.prototype=w.prototype=Object.create(_);function C(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(o,i,u,l){var c=p(e[o],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==t(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,u,l)}),(function(t){r("throw",t,u,l)})):n.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,l)}))}l(c.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}})}function z(t,e,r){var o=h;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var u=r.delegate;if(u){var l=j(u,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=p(t,e,r);if("normal"===c.type){if(o=r.done?g:v,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=g,r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function B(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},C(S.prototype),f(S.prototype,c,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new S(d(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(E),f(E,s,"Generator"),f(E,l,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=B,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:B(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(t,e,n,r,o,a,i){try{var u=t[a](i),l=u.value}catch(c){return void n(c)}u.done?e(l):Promise.resolve(l).then(r,o)}System.register(["./index-legacy-BbxJoLCD.js","./confconnect-legacy-BPCpXPMG.js"],(function(t,r){"use strict";var o,a,i,u,l,c,s,f,d,p,h,v,m,g,y,w,x,b,_,k,L,E,C,S,z,j,M,A;return{setters:[function(t){o=t.d,a=t.r,i=t.c,u=t.w,l=t.u,c=t.a,s=t.x,f=t.o,d=t.b,p=t.I,h=t.e,v=t.f,m=t.h,g=t.l,y=t.s,w=t.t,x=t.F,b=t.y,_=t.z,k=t.A,L=t.B,E=t.C,C=t.i,S=t.j,z=t.v,j=t.D,M=t.E},function(t){A=t.C}],execute:function(){var r=document.createElement("style");r.textContent="::-webkit-scrollbar{background:inherit;width:7px}.spoiler{border-radius:5px;-webkit-user-select:none;background:#3dc2ff;color:#3dc2ff;transition:all .2s}.spoiler.visible{-webkit-user-select:text;background:rgba(61,194,255,.3);color:#000}::-webkit-scrollbar-thumb{background-color:#3dc2ff;border-radius:5px}#container{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong{font-size:20px;line-height:26px}#container p{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}.forum{max-height:80%;overflow-y:auto}.message{width:50%;border-radius:5px;height:fit-content;padding-bottom:50px;margin-bottom:20px;box-shadow:0 .3em .7em #989898;margin-inline:auto;left:0;right:0;margin-top:10px}.message .user-name{width:fit-content}.message .post-data{background-color:#3dc2ff;color:#fff;border-radius:5px 5px 0 0;min-height:30px;padding:5px}form ion-list{border:#3dc2ff 2px solid;border-radius:10px;margin-bottom:100px}.message .created-time{position:inherit;width:fit-content;float:right}.add-post{width:60%;position:absolute;bottom:0;left:0;right:0;margin:auto auto 10px}.delete-post,.edit-post,.back-post,.done-post{float:right}.textarea-disabled{opacity:1;padding:10px}.edit-text{padding-block:5px;padding-inline:10px}.textarea-wrapper-inner.sc-ion-textarea-md{padding:0;display:block}.start-slot-wrapper.sc-ion-textarea-md{padding:0}.submit{float:right}#container a{text-decoration:none}\n",document.head.appendChild(r);var O={class:"forum"},B=["id"],I={class:"post-data"},P={class:"user-name"},N={key:0,class:"created-time"},T={key:1,class:"created-time"},F=["onSubmit"],G=g("b",null,"B",-1),V=g("i",null,"I",-1),H=["innerHTML"];t("default",o({__name:"Forum",setup:function(t){c();var r=a(0),o=a({success:"",message:"",list:[],formEdit:{user:"",post:""},formCreate:{user:"",post:""}}),q=function(t){return new Date(t)},D=function(t){r.value=t};function R(t,e){var n=function(t){var e=document.getElementById(t).getElementsByClassName("native-textarea")[0];return[e.selectionStart,e.selectionEnd]}(t),r=document.getElementById(t).getElementsByClassName("native-textarea")[0];r.value=r.value.slice(0,n[0])+"[".concat(e,"]").concat(r.value.slice(n[0],n[1]),"[/").concat(e,"]")+r.value.slice(n[1]),o.value.formEdit.post=r.value}var Y=function(t){return[{text:"Отмена"},{text:"Удалить",handler:function(){W(t)}}]},U=function(){var t,r=(t=e().mark((function t(n){var r,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.value.list[n],t.next=3,M.create({header:r.user,message:'Вы точно хотите удалить сообщение "'.concat(r.post,'"'),buttons:Y(n),cssClass:"alertEdit"});case 3:return a=t.sent,t.next=6,a.present();case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,l,"next",t)}function l(t){n(i,o,a,u,l,"throw",t)}u(void 0)}))});return function(t){return r.apply(this,arguments)}}(),J=[[" ","&nbsp;"],["\n","\n<br>\n"],["[spoiler]",'<span class="spoiler" onclick="this.classList.toggle(\'visible\');">'],["[/spoiler]","</span>"],["[b]","<b>"],["[/b]","</b>"],["[i]","<i>"],["[/i]","</i>"]],K=function(t){for(var e=0,n=J;e<n.length;e++){var r=n[e];t=t.replaceAll(r[0],r[1])}return t},Q=function(){try{A.post("/forum",o.value.formCreate).then((function(t){document.getElementById("addPost").reset(),document.querySelector(".post-form textarea").value="",t.post="",t.user="",o.value.list.push(t.data.data);var e=o.value.list.length-1;window.location.replace("forum#".concat(e-1))}))}catch(t){o.value.error=t}},W=function(t){A.delete("/forum/".concat(o.value.list[t].id)).then((function(e){e.post="",e.user="",o.value.list.splice(t,1)}))};return function(){try{A.get("/forum").then((function(t){null!=t.data.error?o.value.error=t.data.error:(o.value.success=t.data.success,o.value.message=t.data.message,o.value.list=t.data.list)}))}catch(t){console.log(t)}}(),function(t,e){var n=s("ion-button");return f(),i(l(S),null,{default:u((function(){return[d(l(m),{translucent:!0},{default:u((function(){return[d(l(p),null,{default:u((function(){return[d(l(h),null,{default:u((function(){return[v("Forum")]})),_:1})]})),_:1})]})),_:1}),d(l(C),{fullscreen:!0},{default:u((function(){return[d(l(m),{collapse:"condense"},{default:u((function(){return[d(l(p),null,{default:u((function(){return[d(l(h),{size:"large"},{default:u((function(){return[v("Forum")]})),_:1})]})),_:1})]})),_:1}),g("div",O,[(f(!0),y(x,null,w(o.value.list,(function(t,a){return f(),y("div",{class:"message",id:a},[g("div",I,[g("span",P,z(t.user),1),t.created_at==t.updated_at?(f(),y("span",N,z(q(t.created_at).toLocaleDateString("ru-Ru"))+" "+z(q(t.created_at).toLocaleTimeString("ru-Ru")),1)):(f(),y("span",T,"ред. "+z(q(t.updated_at).toLocaleDateString("ru-Ru"))+" "+z(q(t.updated_at).toLocaleTimeString("ru-Ru")),1))]),r.value==t.id?(f(),y("form",{key:0,onSubmit:E((function(t){return function(t){try{A.put("/forum/".concat(o.value.list[t].id),o.value.formEdit).then((function(e){e.post="",e.user="",D(0),o.value.list[t].post=e.data.data.post,o.value.list[t].updated_at=e.data.data.updated_at}))}catch(e){o.value.error=e}}(a)}),["prevent"])},[d(l(L),{id:"edit",class:"edit-text",value:t.post,required:"",rows:"5",onInput:function(t){return o.value.formEdit.post=t.target.value}},{default:u((function(){return[d(l(p),{class:"edit-text-toolbar",slot:"start"},{default:u((function(){return[d(n,{class:"bold-text",onClick:e[0]||(e[0]=function(t){return R("edit","b")})},{default:u((function(){return[G]})),_:1}),d(n,{class:"italic-text",onClick:e[1]||(e[1]=function(t){return R("edit","i")})},{default:u((function(){return[V]})),_:1}),d(n,{class:"spoiler-text",onClick:e[2]||(e[2]=function(t){return R("edit","spoiler")})},{default:u((function(){return[d(l(j),{icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>"),slot:"icon-only"},null,8,["icon"])]})),_:1})]})),_:1})]})),_:2},1032,["value","onInput"]),d(n,{class:"done-post",type:"submit",color:"secondary"},{default:u((function(){return[d(l(j),{icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284' class='ionicon-fill-none ionicon-stroke-width'/></svg>"),slot:"icon-only"},null,8,["icon"])]})),_:1}),d(n,{class:"back-post",color:"warning",onClick:function(t){D(0),o.value.formEdit.post=""}},{default:u((function(){return[d(l(j),{icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M403.13 96H156.87a44.9 44.9 0 00-33.68 15.27 15.88 15.88 0 00-1.91 2.7L32 247.75a16 16 0 000 16.5l89.15 133.57a16.24 16.24 0 002 2.88 44.89 44.89 0 0033.7 15.3h246.28A44.92 44.92 0 00448 371.13V140.87A44.92 44.92 0 00403.13 96zM348 311a16 16 0 11-22.63 22.62L271.67 280 218 333.65A16 16 0 01195.35 311L249 257.33l-53.69-53.69A16 16 0 01218 181l53.69 53.7 53.67-53.7A16 16 0 01348 203.64l-53.7 53.69z'/></svg>"),slot:"icon-only"},null,8,["icon"])]})),_:2},1032,["onClick"])],40,F)):(f(),y(x,{key:1},[g("div",{innerHTML:K(t.post),class:"textarea-disabled"},null,8,H),d(n,{class:"delete-post",color:"danger",onClick:function(t){return U(a)}},{default:u((function(){return[d(l(j),{icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z' class='ionicon-fill-none'/><path d='M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z'/></svg>"),slot:"icon-only"},null,8,["icon"])]})),_:2},1032,["onClick"]),d(n,{class:"edit-post",color:"secondary",onClick:function(e){D(t.id),o.value.formEdit.post=t.post}},{default:u((function(){return[d(l(j),{icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='44' d='M358.62 129.28L86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zM413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 000-23.34l-.75-.75a16.51 16.51 0 00-23.35 0z' class='ionicon-fill-none'/></svg>"),slot:"icon-only"},null,8,["icon"])]})),_:2},1032,["onClick"])],64))],8,B)})),256))]),g("form",{onSubmit:E(Q,["prevent"]),id:"addPost"},[d(l(b),{class:"add-post"},{default:u((function(){return[d(l(_),null,{default:u((function(){return[d(l(k),{class:"username-form",required:"",label:"",placeholder:"Пользователь",modelValue:o.value.formCreate.user,"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.value.formCreate.user=t})},null,8,["modelValue"])]})),_:1}),d(l(_),null,{default:u((function(){return[d(l(L),{id:"post-text",class:"post-form",required:"",rows:"5",onInput:e[4]||(e[4]=function(t){return o.value.formCreate.post=t.target.value})})]})),_:1}),d(n,{class:"submit",type:"submit"},{default:u((function(){return[v("Send")]})),_:1})]})),_:1})],32)]})),_:1})]})),_:1})}}}))}}}))}();
