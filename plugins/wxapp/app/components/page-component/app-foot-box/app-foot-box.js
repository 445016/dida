(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-foot-box/app-foot-box"],{"271e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"48c6":function(e,t,n){"use strict";n.r(t);var r=n("271e"),o=n("eba8");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("803d");var u=n("2877"),c=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"6fc702d6",null);t["default"]=c.exports},"803d":function(e,t,n){"use strict";var r=n("8a5c"),o=n.n(r);o.a},"8a5c":function(e,t,n){},c874:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={name:"app-foot-box",data:function(){return{}},computed:a({},(0,r.mapState)({theme:function(e){return e.mallConfig.theme},userInfo:function(e){return e.user.info}}),{},(0,r.mapGetters)("userCenter",{foot_bar:"foot_bar"})),created:function(){console.log(this.foot_bar)},methods:{toNext:function(t){"我的收藏"==t?e.navigateTo({url:"/pages/favorite/favorite"}):e.navigateTo({url:"/pages/foot/index/index"})}}};t.default=c}).call(this,n("543d")["default"])},eba8:function(e,t,n){"use strict";n.r(t);var r=n("c874"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-foot-box/app-foot-box-create-component',
    {
        'components/page-component/app-foot-box/app-foot-box-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("48c6"))
        })
    },
    [['components/page-component/app-foot-box/app-foot-box-create-component']]
]);                