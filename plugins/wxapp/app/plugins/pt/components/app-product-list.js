(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pt/components/app-product-list"],{"0680":function(e,t,n){"use strict";var o=n("8102"),r=n.n(o);r.a},"0a88":function(e,t,n){"use strict";n.r(t);var o=n("7ce3"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},1821:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"7ce3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){return n.e("components/page-component/app-member-mark/app-member-price").then(n.bind(null,"dd88"))},c=function(){return n.e("components/page-component/app-sup-vip/app-sup-vip").then(n.bind(null,"348c"))},u=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},l={name:"app-product-list",components:{"app-member-price":a,"app-sup-vip":c,"app-no-goods":u},computed:i({},(0,o.mapState)({appSetting:function(e){return e.mallConfig.mall.setting},appImg:function(e){return e.mallConfig.__wxapp_img.mall}}),{},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),props:{list:{type:Array,default:function(){return[]}},sign:String},methods:{route_go:function(t){console.log(t),t.video_url&&1==this.getVideo?e.navigateTo({url:"/pages/goods/video?goods_id=".concat(t.id,"&sign=").concat(this.sign)}):e.navigateTo({url:"/plugins/pt/goods/goods?goods_id=".concat(t.id)})}}};t.default=l}).call(this,n("543d")["default"])},8102:function(e,t,n){},bbb8:function(e,t,n){"use strict";n.r(t);var o=n("1821"),r=n("0a88");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("0680");var p=n("2877"),a=Object(p["a"])(r["default"],o["a"],o["b"],!1,null,"1290dc1c",null);t["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/pt/components/app-product-list-create-component',
    {
        'plugins/pt/components/app-product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bbb8"))
        })
    },
    [['plugins/pt/components/app-product-list-create-component']]
]);                