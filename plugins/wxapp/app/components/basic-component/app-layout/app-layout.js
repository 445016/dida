(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-layout/app-layout"],{"080e":function(t,n,e){"use strict";var o=e("d495"),r=e.n(o);r.a},"0b17":function(t,n,e){"use strict";e.r(n);var o=e("a485"),r=e("6adc");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("080e");var i=e("2877"),p=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"9a9a344c",null);n["default"]=p.exports},"6adc":function(t,n,e){"use strict";e.r(n);var o=e("a98a"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=r.a},a485:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},a98a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62"),r=a(e("ff69"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(e,!0).forEach(function(n){u(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){return e.e("components/basic-component/app-tab-bar/app-tab-bar").then(e.bind(null,"1d56"))},s=function(){return e.e("components/basic-component/app-layout/app-payment/app-payment").then(e.bind(null,"bb6d"))},l=function(){return e.e("components/basic-component/app-layout/app-user-login/app-user-login").then(e.bind(null,"ce0f"))},d=function(){return e.e("components/basic-component/app-loading/app-loading").then(e.bind(null,"2428"))},f=function(){return e.e("components/basic-component/app-report-error/app-report-error").then(e.bind(null,"10315"))},b=function(){return e.e("components/basic-component/app-prompt-box/app-prompt-box").then(e.bind(null,"387a"))},h=function(){return e.e("components/basic-component/app-layout/app-coupon-modal/app-coupon-modal").then(e.bind(null,"a3b2"))},g=function(){return Promise.all([e.e("common/vendor"),e.e("components/basic-component/app-iphone-x/app-iphone-x")]).then(e.bind(null,"7598"))},m=function(){return e.e("components/basic-component/app-layout/app-user-phone/app-user-phone").then(e.bind(null,"1063"))},_={name:"app-layout",data:function(){return{currentRoute:"",tabbarbool:!0,navigationBarTitle:"",page_count:getCurrentPages().length}},components:{"app-tab-bar":c,"app-payment":s,"app-user-login":l,"app-loading":d,"app-report-error":f,"app-prompt-box":b,"app-coupon-modal":h,"app-iphone-x":g,"app-user-phone":m},props:{haveBackground:{type:Boolean,default:function(){return!0}}},computed:p({},(0,o.mapState)("mallConfig",{tabBarNavs:function(t){return t.navbar.navs},bar_title:function(t){return t.bar_title},top_background_color:function(t){return t.navbar.top_background_color},top_text_color:function(t){return t.navbar.top_text_color},bottom_background_color:function(t){return t.navbar.bottom_background_color}}),{},(0,o.mapState)("user",{accessToken:function(t){return t.accessToken}}),{},(0,o.mapState)("gConfig",{reportAndError:function(t){return t.reportAndError},promptBox:function(t){return t.promptBox},iphone:function(t){return t.iphone}}),{isGuest:function(){return""===this.$store.state.user.accessToken||null===this.$store.state.user.accessToken}},(0,o.mapState)("loading",{loadingType:function(t){return t.type},loadingText:function(t){return t.text},loadingColor:function(t){return t.color},loadingBackgroundImage:function(t){return t.backgroundImage},loadingIsShow:function(t){return t.isShow}}),{},(0,o.mapGetters)("iPhoneX",{BotHeight:"getBotHeight"})),watch:{tabBarNavs:{handler:function(){this.setTabbar(),void 0!==this.top_background_color&&t.setNavigationBarColor({backgroundColor:this.top_background_color,frontColor:this.top_text_color})},immediate:!0}},created:function(){var t=this;this.$store.dispatch("mallConfig/actionGetConfig"),this.$nextTick(function(){var n=t.$platDiff.route();r.default.setNavigationBarTitle(t.bar_title,n).then(function(n){t.navigationBarTitle=n})}),this.$user.isLogin()&&"/pages/disabled/disabled"!=this.$platDiff.route()&&this.$store.dispatch("user/info"),this.$hideLoading()},mounted:function(){try{var n=getCurrentPages();if(n.length){var e=n[n.length-1],o=e.options,r={};"undefined"!==typeof o.custom_params&&(r=JSON.parse(decodeURIComponent(o.custom_params))),"undefined"!==typeof o.user_id?this.$store.dispatch("user/setTempParentId",o.user_id):"undefined"!==typeof r.user_id&&this.$store.dispatch("user/setTempParentId",r.user_id)}}catch(a){console.log(a)}this.currentRoute=this.$platDiff.tabBarUrl(null,this.page_count),this.setTabbar(),void 0!==this.top_background_color&&t.setNavigationBarColor({backgroundColor:this.top_background_color,frontColor:this.top_text_color})},beforeDestroy:function(){this.$hideLoading()},methods:{setTabbar:function(){var t=this.currentRoute,n=[1001,1045,1046,1058,1067,1084,1091];this.$appScene&&n.indexOf(this.$appScene)>-1&&(t.indexOf("appid")>-1||t.indexOf("appmsg_compact_url")>-1)&&(console.log("deleteUrlParam--\x3e",t),t=this.$utils.deleteUrlParam(t,["appid","appmsg_compact_url"],!0)),console.log("setTabbar $appScene--\x3e",this.$appScene),console.log("setTabbar currentRoute--\x3e",t);for(var e=0;e<this.tabBarNavs.length;e++)if(t==this.tabBarNavs[e].url)return this.tabbarbool=!0;return this.tabbarbool=!1}}};n.default=_}).call(this,e("543d")["default"])},d495:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-layout/app-layout-create-component',
    {
        'components/basic-component/app-layout/app-layout-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0b17"))
        })
    },
    [['components/basic-component/app-layout/app-layout-create-component']]
]);                
