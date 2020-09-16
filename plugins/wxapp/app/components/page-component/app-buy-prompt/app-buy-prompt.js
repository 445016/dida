(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-buy-prompt/app-buy-prompt"],{4897:function(t,n,a){"use strict";var e=a("bfa1"),u=a.n(e);u.a},"49f6":function(t,n,a){"use strict";a.r(n);var e=a("4e27"),u=a("905a");for(var r in u)"default"!==r&&function(t){a.d(n,t,function(){return u[t]})}(r);a("4897");var o=a("2877"),c=Object(o["a"])(u["default"],e["a"],e["b"],!1,null,"2f63e9b1",null);n["default"]=c.exports},"4e27":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},u=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return u})},"905a":function(t,n,a){"use strict";a.r(n);var e=a("92fc"),u=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,function(){return e[t]})}(r);n["default"]=u.a},"92fc":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"app-buy-prompt",data:function(){return{buy_data:null}},created:function(){var t=this;t.$request({url:t.$api.index.buy_data}).then(function(n){0===n.code&&(t.buy_data=n.data)})},methods:{catchTouchMove:function(){return!1}}};n.default=e},bfa1:function(t,n,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-buy-prompt/app-buy-prompt-create-component',
    {
        'components/page-component/app-buy-prompt/app-buy-prompt-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("49f6"))
        })
    },
    [['components/page-component/app-buy-prompt/app-buy-prompt-create-component']]
]);                
