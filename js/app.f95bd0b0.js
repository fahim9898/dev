(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);b&&b(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var r=a[s];0!==i[r]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i={app:0},o=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-173cbe42":"8e2b97db","chunk-5e98db46":"de20c3d9","chunk-26d2dcb1":"17767762","chunk-3af8394b":"4df56cba","chunk-8b2081be":"a0ed667a","chunk-e30b7172":"3e813376"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-173cbe42":1,"chunk-5e98db46":1,"chunk-26d2dcb1":1,"chunk-3af8394b":1,"chunk-e30b7172":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-173cbe42":"f4000931","chunk-5e98db46":"0f92c67e","chunk-26d2dcb1":"86b0699c","chunk-3af8394b":"979a0562","chunk-8b2081be":"31d6cfe0","chunk-e30b7172":"f1ea6134"}[t]+".css",i=l.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[t],b.parentNode.removeChild(b),a(o)},b.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(b)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(b);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}i[t]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/dev/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var b=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("1da1"),s=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("96cf"),a("2b0e")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("input",{staticClass:"d-none",attrs:{type:"checkbox",name:"",id:"nav-toggle"}}),a("div",{attrs:{id:"nav"}},[t._m(0),a("div",{staticClass:"nav__cnt"},[a("div",{staticClass:"nav__item"},[a("i"),a("i"),a("i"),a("i"),a("p",[t._v("About")]),a("router-link",{attrs:{to:"/"}})],1),a("div",{staticClass:"nav__item"},[a("i"),a("i"),a("i"),a("i"),a("p",[t._v("Portfolio")]),a("router-link",{attrs:{to:"/portfolio"}})],1),a("div",{staticClass:"nav__item"},[a("i"),a("i"),a("i"),a("i"),a("p",[t._v("Contact")]),a("router-link",{attrs:{to:"/contact"}})],1)])]),a("div",{staticClass:"bg2"},[a("span",{staticClass:"transition-overlay",attrs:{id:"transition-id"}}),a("transition",{on:{beforeEnter:t.beforeEnter,enter:t.enter,leave:t.leave}},[a("router-view",{key:t.$route.path})],1)],1),a("div",{staticClass:"loading-animation loading-active d-none"})])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:" nav__icon hamburger hamburger--spin",attrs:{for:"nav-toggle",tabindex:"0","aria-label":"Menu",role:"button","aria-controls":"navigation"}},[a("div",{staticClass:"hamburger-box"},[a("div",{staticClass:"hamburger-inner"})])])}],r={beforeMount:function(){},mounted:function(){window.pageYOffset},methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){setTimeout((function(){t.style.opacity=1,window.$(".transition-overlay").addClass("transition-out"),setTimeout((function(){console.log("Leave Complete"),window.$(".transition-overlay").removeClass("transition-out"),e()}),1500)}),800)},leave:function(t,e){window.$(".transition-overlay").addClass("transition-enter"),setTimeout((function(){console.log("Leave Complete"),window.$(".transition-overlay").removeClass("transition-enter"),e()}),800)}}},l=r,c=(a("5c0b"),a("2877")),u=Object(c["a"])(l,i,o,!1,null,null,null),d=u.exports,b=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ABOUT__PAGE"},[a("div",{staticClass:"center",attrs:{"data-speed":"5"}},[t._v(" Fahim Sanghariyat ")]),a("div",{staticClass:"next-btn__bg"},[a("router-link",{attrs:{to:"/portfolio"}}),a("p",[t._v("portfolio")])],1),a("div",{staticClass:"contact__icons"},[t._m(0),t._m(1),a("div",{staticClass:"items nextBtn"},[a("router-link",{attrs:{to:"/portfolio"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fas fa-chevron-right"})]),a("div",{staticClass:"cst-tooltip"},[t._v("Portfolio")])])],1)]),t._m(2),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[a("defs",[a("filter",{attrs:{id:"goo"}},[a("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),a("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -9",result:"goo"}})],1)])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"items"},[a("a",{attrs:{href:"https://github.com/fahim9898",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("div",{staticClass:"cst-tooltip"},[t._v("Github")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"items"},[a("a",{attrs:{href:"https://codepen.io/fahim-sanghariyat",target:"_blank"}},[a("i",{staticClass:"fab fa-codepen"})]),a("div",{staticClass:"cst-tooltip"},[t._v("Codepen")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blobs"},[a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"blob"}),a("div",{staticClass:"center",attrs:{"data-speed":"5"}},[t._v(" Fahim Sanghariyat ")])])}],p=(a("fb6a"),a("159b"),a("99af"),{mounted:function(){var t=[].slice.call(document.querySelector(".blobs").children);t.forEach((function(t){t.style.setProperty("--position",1600*Math.random()-100+"px"),t.style.setProperty("--size",.2+2.5*Math.random()+"rem"),t.style.setProperty("--delay",-1*(2+4*Math.random())+"s"),t.setAttribute("data-speed",10*Math.random()-5)}));var e=!0;document.addEventListener("mousemove",(function(t){1==e&&(e=!1,setTimeout((function(){e=!0,document.querySelectorAll(".blob").forEach((function(e){var a=e.getAttribute("data-speed"),n=(window.innerWidth-t.pageX*a)/100,s=(window.innerHeight-t.pageY*a)/100;e.style.transform="translateX(".concat(n,"px) translateY(").concat(s,"px)")})),document.querySelectorAll(".center").forEach((function(e){var a=5,n=(window.innerWidth-t.pageX*a)/100,s=(window.innerHeight-t.pageY*a)/100;e.style.transform="translateX(calc(-50% + ".concat(n,"px)) translateY(calc(-50% + ").concat(s,"px))"),e.style.transform="translateX(calc(-50% + ".concat(n,"px)) translateY(calc(-50% + ").concat(s,"px))")}))}),5))})),window.dispatchEvent(new Event("mousemove"))}}),h=p,m=Object(c["a"])(h,v,f,!1,null,null,null),C=m.exports;s["a"].use(b["a"]);var g=[{path:"/",name:"About",component:C},{path:"/contact",name:"Contact",component:function(){return Promise.all([a.e("chunk-5e98db46"),a.e("chunk-26d2dcb1")]).then(a.bind(null,"4fe8"))}},{path:"/portfolio",name:"Portfolio",component:function(){return a.e("chunk-173cbe42").then(a.bind(null,"c9e5"))}},{path:"/portfolio/ui",name:"Project",component:function(){return Promise.all([a.e("chunk-5e98db46"),a.e("chunk-e30b7172")]).then(a.bind(null,"73e4"))}},{path:"/portfolio/animation",name:"Project",component:function(){return Promise.all([a.e("chunk-5e98db46"),a.e("chunk-3af8394b")]).then(a.bind(null,"190a"))}},{path:"/portfolio/:id",name:"Project",component:function(){return Promise.all([a.e("chunk-5e98db46"),a.e("chunk-8b2081be")]).then(a.bind(null,"07bd"))}}],_=new b["a"]({base:"/dev/",routes:g}),w=_,k=a("2f62");s["a"].use(k["a"]);var x=new k["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),P={};s["a"].prototype.$db=P,s["a"].prototype.$composePromise=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.reduce((function(t,e){return function(a){return e(a).then(t)}}))},s["a"].prototype.$compose=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return function(t){return e.reduce((function(t,e){return e(t)}),t)}},s["a"].prototype.$composeFirestore=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.reduce((function(t,e){return function(a){var n=e(a);return console.log(a),null!==n&&void 0!==n&&n.get?n.get().then(t):null!==n&&void 0!==n&&n.then?n.then(t):t(n,y)}}))},console.log("test"),s["a"].prototype.$composeFirestore2=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.reduceRight((function(t,e){return function(a,n){var s=e(a,n);return null!==s&&void 0!==s&&s.get?s.get().then((function(e){return t(e,s)})):null!==s&&void 0!==s&&s.then?s.then((function(e){return t(e,n)})):t(s)}}))},w.beforeEach(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a,n){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:null!==(s=$("#nav-toggle")[0])&&void 0!==s&&s.checked&&$(".hamburger-box").click(),console.log(e,a),e.fullPath!=a.fullPath?($(".loading-animation").removeClass("d-none"),$(".next-btn__bg").css({right:"-50%",transitionDelay:"0.2s",transition:"all 0.8s linear"}),$(".prev-btn__bg").css({left:"-50%",transitionDelay:"0.2s",transition:"all 0.8s linear"}),setTimeout((function(){$(".loading-animation").addClass("d-none"),n()}),0)):n();case 3:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}()),new s["a"]({data:function(){return{db:P}},router:w,store:x,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.f95bd0b0.js.map