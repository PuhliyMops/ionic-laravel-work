System.register([],(function(e,t){"use strict";return{execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
var t="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"];e("startFocusVisible",(function(e){var o=[],s=!0,r=e?e.shadowRoot:document,i=e||document.body,c=function(e){o.forEach((function(e){return e.classList.remove(t)})),e.forEach((function(e){return e.classList.add(t)})),o=e},u=function(){s=!1,c([])},a=function(e){(s=n.includes(e.key))||c([])},d=function(e){if(s&&void 0!==e.composedPath){var t=e.composedPath().filter((function(e){return!!e.classList&&e.classList.contains("ion-focusable")}));c(t)}},f=function(){r.activeElement===i&&c([])};return r.addEventListener("keydown",a),r.addEventListener("focusin",d),r.addEventListener("focusout",f),r.addEventListener("touchstart",u,{passive:!0}),r.addEventListener("mousedown",u),{destroy:function(){r.removeEventListener("keydown",a),r.removeEventListener("focusin",d),r.removeEventListener("focusout",f),r.removeEventListener("touchstart",u),r.removeEventListener("mousedown",u)},setFocus:c}}))}}}));
