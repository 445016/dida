(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/myshop/myshop"],{5934:function(t,n,e){"use strict";e.r(n);var c=e("7085"),i=e.n(c);for(var o in c)"default"!==o&&function(t){e.d(n,t,function(){return c[t]})}(o);n["default"]=i.a},7085:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=e("2f62");function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);n&&(c=c.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,c)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(e,!0).forEach(function(n){r(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var a={name:"myshop",computed:o({},(0,c.mapState)("gConfig",{iphone:function(t){return t.iphone},iphoneHeight:function(t){return t.iphoneHeight}})),data:function(){return{show_pc_url:!1,mch_id:-1,detail:{day_order_pay_price_count:0,visit_count:0,order_pay_count:0,order_goods_count:0,form_id_count:0,template_message_list:null}}},onShow:function(){var n=this,e=t.getStorageSync("MCH2019");e?(n.mch_id=e.mch.id,n.$showLoading({title:"登陆中"}),n.$request({url:n.$api.mch.manage_index,data:{mch_id:n.mch_id}}).then(function(e){if(n.$hideLoading(),0===e.code){var c=e.data.detail;"0"===c.status&&t.showModal({title:"提示",content:"店铺已被关闭！请联系管理员",showCancel:!1,success:function(n){n.confirm&&t.redirectTo({url:"/plugins/mch/mch/login/login"})}}),n.detail=c}else t.redirectTo({url:"/plugins/mch/mch/login/login"})})):t.redirectTo({url:"/plugins/mch/mch/login/login"})},methods:{navLogin:function(){t.redirectTo({url:"/plugins/mch/mch/login/login"})},navConfig:function(){t.navigateTo({url:"/plugins/mch/mch/config/config?mch_id="+this.mch_id})},navGoods:function(){t.navigateTo({url:"/plugins/mch/mch/goods/goods?mch_id="+this.mch_id})},navOrder:function(){t.navigateTo({url:"/plugins/mch/mch/order/order?mch_id="+this.mch_id})},navData:function(){t.navigateTo({url:"/plugins/mch/mch/count/count?mch_id="+this.mch_id})},navAccount:function(){t.navigateTo({url:"/plugins/mch/mch/account/account?mch_id="+this.mch_id})},navQrcode:function(){t.navigateTo({url:"/plugins/mch/mch/qrcode/qrcode?mch_id="+this.mch_id})},setMessage:function(){var n=this;this.$subscribe(this.detail.template_message_list).then(function(e){var c=n.detail.template_message_list[0];"accept"===e[c]?t.showModal({title:"提示",content:"订阅成功",showCancel:!1}):t.showModal({title:"提示",content:"取消订阅",showCancel:!1})}).catch()},showPcUrl:function(){this.show_pc_url=!0},hidePcUrl:function(){this.show_pc_url=!1},copyPcUrl:function(){var n=this.detail.page_url;t.setClipboardData({data:n,success:function(){}})}}};n.default=a}).call(this,e("543d")["default"])},"7a22":function(t,n,e){"use strict";e.r(n);var c=e("ccdb"),i=e("5934");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("ea0f");var r=e("2877"),a=Object(r["a"])(i["default"],c["a"],c["b"],!1,null,"a4b4c3e6",null);n["default"]=a.exports},c091:function(t,n,e){},ccdb:function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return i})},ea0f:function(t,n,e){"use strict";var c=e("c091"),i=e.n(c);i.a}},[["537e","common/runtime","common/vendor"]]]);