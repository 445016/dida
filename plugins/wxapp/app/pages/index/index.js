(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{2475:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},8069:function(e,t,n){"use strict";n.r(t);var a=n("a094"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},a094:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("ac6b"),o=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){return n.e("components/page-component/index/app-index").then(n.bind(null,"6f02"))},c=function(){return n.e("components/page-component/index/app-diy-page").then(n.bind(null,"6a38"))},u=function(){return n.e("components/page-component/app-buy-prompt/app-buy-prompt").then(n.bind(null,"49f6"))},d=function(){return n.e("components/page-component/app-my-app/app-my-app").then(n.bind(null,"d7d6"))},l=0,f={name:"index",components:{"app-index":p,"app-diy-page":c,appBuyPrompt:u,appMyApp:d},data:function(){return{scrollTop:0,homePages:[],type:"",is_storage:!1,haveBackground:!0,destroy:!0,pageHide:!1}},onShow:function(t){console.log("page onShow---\x3e"),console.log(t),console.log("<---page onShow"),e.hideNavigationBarLoading(),this.pageHide=!1},onHide:function(){this.pageHide=!0},onLoad:function(e){console.log("page onLoad---\x3e"),console.log(e),console.log("<---page onLoad"),"undefined"!==typeof e.scene&&("share"===e.scene?this.share(e):this.qrcode(e)),"undefined"!==typeof e.user_id&&this.$store.dispatch("user/setTempParentId",e.user_id),l="undefined"!==typeof e.page_id?e.page_id:0;var t=(0,a.getStorageSync)("__index_data");t&&0==l&&(this.is_storage=!0,this.type=t.type,this.homePages=t.home_pages),this.loadData()},onPageScroll:function(e){this.$store.dispatch("page/actionSetScrollTop",e.scrollTop)},methods:{loadData:function(){var t=this;e.showNavigationBarLoading(),t.$request({url:t.$api.index.index,method:"get",data:{page_id:l,longitude:"",latitude:""}}).then(function(n){e.hideNavigationBarLoading();var o=n.code,i=n.data;0===o&&(t.is_storage=!1,t.$popupAd.show=null,t.homePages=i.home_pages,t.homePages.navs&&t.homePages.navs.length>0&&t.homePages.navs.forEach(function(e,n){e.template.data.forEach(function(e,n){if("background"==e.id)return t.haveBackground=!1,!1})}),t.type=i.type,0==l&&(0,a.setStorageSync)("__index_data",i))})},share:function(e){if("undefined"!==typeof e.params){var t=JSON.parse(e.params);this.$jump({url:t.path+"?"+this.$utils.objectToUrlParams(t),open_type:"navigate"})}},qrcode:function(e){var t=this;this.$request({url:this.$api.default.qrcode_parameter,data:{token:e.scene}}).then(function(e){if(0===e.code){t.$store.dispatch("page/actionSetQeury",null);var n=e.data.detail,a=n.data,o=n.path,i="/".concat(o);a&&(i+="?"+t.$utils.objectToUrlParams(a),"undefined"!==typeof a.user_id&&t.$store.dispatch("user/setTempParentId",a.user_id)),"/pages/index/index"!="/".concat(o)&&t.$jump({url:i,open_type:"navigate"})}}).catch(function(){})}},onShareAppMessage:function(){var e={path:"/pages/index/index",params:{}};return 0==l?(e.title=this.mall.setting.share_title?this.mall.setting.share_title:this.mall.name,e.imageUrl=this.mall.setting.share_pic):(e.title=this.homePages.title,e.params.page_id=l),this.$shareAppMessage(e)},computed:r({},(0,o.mapGetters)("mallConfig",{tabBarNavs:"getNavBar"}),{},(0,o.mapState)("mallConfig",{config:function(e){return e.mall.setting},mall:function(e){return e.mall}}))};t.default=f}).call(this,n("543d")["default"])},ae58:function(e,t){e.exports=require("../siteinfo.js")},f75a:function(e,t,n){"use strict";n.r(t);var a=n("2475"),o=n("8069");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports}},[["d537","common/runtime","common/vendor"]]]);