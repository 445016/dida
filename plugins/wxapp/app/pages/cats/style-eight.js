(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cats/style-eight"],{"5d08":function(e,t,n){"use strict";n.r(t);var o=n("b5e0"),r=n("c478");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("c59c");var i=n("2877"),c=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"4ffff5b2",null);t["default"]=c.exports},"9da6":function(e,t,n){},"9eae":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){return n.e("components/page-component/app-head-navigation/app-head-navigation").then(n.bind(null,"fa14"))},u=function(){return n.e("components/page-component/app-product-list/app-product-list").then(n.bind(null,"75cc"))},p=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},s={name:"style-eight",components:{"app-head-navigation":c,"app-product-list":u,"app-no-goods":p},props:["goods_list","list"],computed:a({},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),methods:{route_go:function(t){t.video_url&&1==this.getVideo?e.navigateTo({url:"/pages/goods/video?goods_id=".concat(t.id,"&sign=").concat(t.sign)}):e.navigateTo({url:t.page_url})},active:function(e){this.$emit("active",e)}}};t.default=s}).call(this,n("543d")["default"])},b5e0:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},c478:function(e,t,n){"use strict";n.r(t);var o=n("9eae"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},c59c:function(e,t,n){"use strict";var o=n("9da6"),r=n.n(o);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/cats/style-eight-create-component',
    {
        'pages/cats/style-eight-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5d08"))
        })
    },
    [['pages/cats/style-eight-create-component']]
]);                
