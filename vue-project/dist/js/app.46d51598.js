(function(t){function e(e){for(var a,r,s=e[0],i=e[1],c=e[2],l=0,f=[];l<s.length;l++)r=s[l],o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);h&&h(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o={app:0},u=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-35897624":"3f9aa150","chunk-5b543ba2":"963349c4","chunk-5d8a21f0":"64212ebb","chunk-61ec58c6":"d10664be","chunk-e9402422":"397fa42e"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-35897624":1,"chunk-5b543ba2":1,"chunk-5d8a21f0":1,"chunk-e9402422":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-35897624":"f846c692","chunk-5b543ba2":"62182b55","chunk-5d8a21f0":"3fe8941b","chunk-61ec58c6":"31d6cfe0","chunk-e9402422":"09892d78"}[t]+".css",o=i.p+a,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[t],h.parentNode.removeChild(h),n(u)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,u=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");u.type=a,u.request=r,n[1](u)}o[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var h=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar has-shadow",attrs:{id:"nav"}},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"navbar-menu",attrs:{id:"navMenu"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t.usuario?n("router-link",{staticClass:"navbar-item",attrs:{to:"/Estoque"}},[t._v("Estoque")]):t._e(),t.usuario?n("router-link",{staticClass:"navbar-item",attrs:{to:"/Produto"}},[t._v("Produto")]):t._e(),t.usuario?n("router-link",{staticClass:"navbar-item",attrs:{to:"/Estoque"}},[t._v("Estoque")]):t._e(),t.usuario?n("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("Logout")]):t._e(),n("router-link",{staticClass:"navbar-item",attrs:{to:"/Admin"}},[t._v("Gerenciar")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/Usuario"}},[t._v("Usuarios")]),t.usuario?t._e():n("router-link",{staticClass:"navbar-item",attrs:{to:"/login"}},[t._v("Login")]),t.usuario?n("a",{staticClass:"navbar-item",staticStyle:{color:"red"},on:{click:t.logout}},[n("b",[t._v("Logout")])]):t._e()],1)])])]),n("router-view")],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item brand-text",attrs:{href:"/"}},[t._v(" GPP ALPHA BETA ")]),n("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navMenu"}},[n("span"),n("span"),n("span")])])}],s=n("cebc"),i=n("2f62"),c={name:"app",computed:Object(s["a"])({},Object(i["c"])(["usuario"])),methods:Object(s["a"])({},Object(i["b"])(["logout"]))},l=c,f=n("2877"),h=Object(f["a"])(l,o,u,!1,null,null,null),p=h.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Home")},v=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{staticStyle:{"padding-top":"140px"},attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("cf05"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Gerenciador de Produtos Perecíveis\n      ")]),a("h2",{staticStyle:{"font-size":"20px"}},[t._v(" Faça login para continuar ")]),a("br"),a("v-btn",{staticStyle:{"background-color":"#23D160",color:"white"},attrs:{href:"/login"}},[a("b",[t._v("Login")])])],1)],1)],1)},g=[],y={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},k=y,_=n("6544"),x=n.n(_),w=n("8336"),j=n("a523"),C=n("0e8f"),E=n("adda"),O=n("a722"),P=Object(f["a"])(k,b,g,!1,null,null,null),S=P.exports;x()(P,{VBtn:w["a"],VContainer:j["a"],VFlex:C["a"],VImg:E["a"],VLayout:O["a"]});var T={components:{Home:S}},A=T,L=Object(f["a"])(A,m,v,!1,null,null,null),q=L.exports,U=n("bfa9");a["a"].use(i["a"]);var M=new U["a"]({key:"my-sec-app",storage:localStorage}),N=new i["a"].Store({plugins:[M.plugin],state:{usuario:null,token:null,temToken:!1},mutations:{setUsuario:function(t,e){t.usuario=e},setToken:function(t,e){t.token=e,t.temToken=!0},logout:function(t){t.token=null,t.usuario=null,t.temToken=!1}},actions:{temAcesso:function(){localStorage.getItem("temToken")}}});a["a"].use(d["a"]);var V=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/Admin",name:"admin",component:function(){return n.e("chunk-35897624").then(n.bind(null,"3530"))}},{path:"/Login",name:"login",component:function(){return n.e("chunk-61ec58c6").then(n.bind(null,"a55b"))}},{path:"/User",name:"user",component:function(){return n.e("chunk-5b543ba2").then(n.bind(null,"1511"))}},{path:"/Usuario",name:"usuario",component:function(){return n.e("chunk-e9402422").then(n.bind(null,"9c1c"))}},{path:"/Estoque",name:"estoque",component:function(){return n.e("chunk-5d8a21f0").then(n.bind(null,"8961"))}}]});V.beforeEach(function(t,e,n){"/User"===t.fullPath&&(N.state.temToken||n("/login")),n()});var B=V,H=n("bc3a"),$=n.n(H);$.a.defaults.baseURL="http://localhost:8082",$.a.interceptors.request.use(function(t){return N.state.token&&(t.headers.Authorization=N.state.token),t}),a["a"].config.productionTip=!1,new a["a"]({router:B,store:N,render:function(t){return t(p)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.46d51598.js.map