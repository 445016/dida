(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/clerk/clerk"],{2444:function(e,t,r){"use strict";r.r(t);var n=r("62d6"),o=r("ef5d");for(var i in o)"default"!==i&&function(e){r.d(t,e,function(){return o[e]})}(i);r("5b07");var c=r("2877"),a=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"e04600f2",null);t["default"]=a.exports},"5b07":function(e,t,r){"use strict";var n=r("9b570"),o=r.n(n);o.a},"62d6":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o})},"9b570":function(e,t,r){},df65:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("2f62");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=function(){return r.e("components/page-component/app-order-goods-info/app-order-goods-info").then(r.bind(null,"1602"))},s={components:{"app-order-goods-info":a},data:function(){return{id:null,orderDetail:{},clerk_remark:"",is_show:!1,msg:!1}},computed:i({},(0,n.mapState)({userInfo:function(e){return e.user.info}})),methods:{toIndex:function(){e.redirectTo({url:"/pages/index/index"})},getOrderDetail:function(){var e=this;this.$request({url:this.$api.order.detail,data:{id:this.id,action_type:1}}).then(function(t){e.$hideLoading(),e.is_show=!0,0===t.code&&(e.orderDetail=t.data.detail)}).catch(function(){e.$hideLoading()})},IsClerk:function(){var e=this;this.$showLoading(),this.$request({url:this.$api.user.is_clerk,data:{clerk_id:this.userInfo.options.user_id}}).then(function(t){0===t.code&&(1==t.data.is_clerk_user?e.getOrderDetail():(e.$hideLoading(),e.msg=!0))}).catch(function(){e.$hideLoading()})},clerkAffirmPay:function(){var t=this;e.showModal({title:"提示",content:"确认已进行线下收款?",success:function(r){var n=this;r.confirm&&(e.showLoading({title:"加载中"}),t.$request({url:t.$api.order.clerk_affirm_pay,data:{id:t.id,action_type:1}}).then(function(r){e.hideLoading(),0===r.code?t.getOrderDetail():e.showToast({title:r.msg,icon:"none"}),n.msg=r.data.msg}).catch(function(){e.hideLoading()}))}})},orderClerk:function(){var t=this;e.showModal({content:"是否核销订单？",success:function(r){r.confirm&&(t.$showLoading(),t.$request({url:t.$api.order.order_clerk,data:{id:t.id,action_type:1,clerk_remark:t.clerk_remark}}).then(function(r){t.$hideLoading(),e.showToast({title:r.msg,icon:"none",duration:2e3,success:function(){0===r.code&&setTimeout(function(){e.redirectTo({url:"/plugins/clerk/order/order?status=1&type=1"})},2e3)}})}).catch(function(){t.$hideLoading()}))}})},closeDialog:function(){if("核销成功"==this.msg)if(this.msg="",this.is_clerk){var t,r=getCurrentPages();r.forEach(function(e,n){"plugins/clerk/order/order"===r[n].route&&(t=n)}),t>-1?(r[t]._num=1,e.navigateBack({delta:r.length-1-t})):e.redirectTo({url:"/plugins/clerk/order/order?status=1&type=1"})}else e.redirectTo({url:"/pages/index/index"});else this.msg=""}},onLoad:function(e){var t=this;t.id=e.id;var r=setInterval(function(){t.userInfo&&(t.IsClerk(),clearInterval(r))},500)}};t.default=s}).call(this,r("543d")["default"])},ef5d:function(e,t,r){"use strict";r.r(t);var n=r("df65"),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);t["default"]=o.a}},[["b461","common/runtime","common/vendor"]]]);