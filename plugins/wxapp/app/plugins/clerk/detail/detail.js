(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/clerk/detail/detail"],{"1ef3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-form-id/app-form-id")]).then(n.bind(null,"8ee9"))},d=function(){return n.e("components/page-component/app-clerk-historys/app-clerk-historys").then(n.bind(null,"0260"))},l={name:"detail",components:{"app-layout":c,"app-form-id":u,appClerkHistorys:d},data:function(){return{detail:{start_time:"",end_time:""},card_id:null,checkPay:!1,id:null,isShow:!1}},computed:a({},(0,i.mapState)({theme:function(e){return e.mallConfig.theme},clerkImg:function(e){return e.mallConfig.__wxapp_img.clerk},mall:function(e){return e.mallConfig.mall}})),onLoad:function(t){this.$showLoading({text:"加载中..."}),t.id>0?(this.id=t.id,e.setNavigationBarTitle({title:"订单详情"})):t.card_id>0&&(this.card_id=t.card_id,e.setNavigationBarTitle({title:"卡券详情"}))},onShow:function(){this.id>0?this.getDetail():this.card_id>0&&this.getCardDetail()},methods:{toClerk:function(t){e.navigateTo({url:"/pages/order/clerk/clerk?id="+t})},toClerkCard:function(t){e.navigateTo({url:"/pages/card/clerk/clerk?cardId="+t})},getDetail:function(){var t=this;t.$request({url:t.$api.clerk.detail,data:{order_id:this.id}}).then(function(n){t.$hideLoading(),0==n.code?t.detail=n.data.order:e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},getCardDetail:function(){var t=this;t.$request({url:t.$api.clerk.card_detail,data:{cardId:this.card_id}}).then(function(n){t.$hideLoading(),0==n.code?t.detail=n.data.card:e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})},clerkAffirmPay:function(){var t=this;t.$request({url:t.$api.order.clerk_affirm_pay,data:{id:t.id,action_type:1}}).then(function(n){t.$hideLoading(),0==n.code?(t.checkPay=!t.checkPay,t.getDetail()):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})}}};t.default=l}).call(this,n("543d")["default"])},"55a2":function(e,t,n){"use strict";n.r(t);var i=n("1ef3"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=r.a},"5ebf":function(e,t,n){"use strict";var i=n("b951"),r=n.n(i);r.a},a491:function(e,t,n){"use strict";n.r(t);var i=n("bbf2"),r=n("55a2");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("5ebf");var o=n("2877"),c=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"599857f1",null);t["default"]=c.exports},b951:function(e,t,n){},bbf2:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.isShow=!0},e.e1=function(t){e.checkPay=!e.checkPay},e.e2=function(t){e.checkPay=!e.checkPay})},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})}},[["bd5a","common/runtime","common/vendor"]]]);