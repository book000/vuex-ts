(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"getters",(function(){return c})),e.d(n,"mutations",(function(){return f})),e.d(n,"actions",(function(){return d}));var r=e(57),o=function(){return{count:0}},c=Object(r.d)(o,{count:function(t){return t.count}}),f=Object(r.e)(o,{setCount:function(t,n){t.count=n}}),d=Object(r.a)({state:o,getters:c,mutations:f},{getOlder:function(t){var n=t.getters;(0,t.commit)("setCount",n.count+1)}})},154:function(t,n,e){"use strict";var r=e(212);n.a=function(t){var n=t.store;Object(r.a)({key:"vuex",paths:["counter"],storage:window.localStorage})(n)}},200:function(t,n,e){var content=e(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(85).default)("dc093880",content,!0,{sourceMap:!1})},214:function(t,n,e){"use strict";var r={name:"DefaultLayout"},o=e(82),c=e(122),f=e.n(c),d=e(304),l=e(305),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("v-main",[n("Nuxt")],1)],1)}),[],!1,null,null,null);n.a=component.exports;f()(component,{VApp:d.a,VMain:l.a})},221:function(t,n,e){e(222),t.exports=e(223)},273:function(t,n,e){"use strict";e(200)},274:function(t,n,e){var r=e(84)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},281:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return c})),e.d(n,"getters",(function(){return f})),e.d(n,"mutations",(function(){return d})),e.d(n,"actions",(function(){return l})),e.d(n,"accessorType",(function(){return v}));var r=e(57),o=e(150),c=function(){return{}},f={},d={},l={},v=Object(r.c)({state:c,getters:f,mutations:d,actions:l,modules:{counter:o}})},56:function(t,n,e){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(273),e(82)),c=e(122),f=e.n(c),d=e(304),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);n.a=component.exports;f()(component,{VApp:d.a})}},[[221,3,1,4]]]);