(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/refund-detail/refund-detail"],{"04f8":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.visible=!0})},s=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s})},"255e7":function(e,t,n){"use strict";n.r(t);var i=n("9d7a"),s=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=s.a},"73d2":function(e,t,n){"use strict";n.r(t);var i=n("04f8"),s=n("255e7");for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);n("f3fd");var r=n("2877"),a=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"01aadb5a",null);t["default"]=a.exports},"8c48":function(e,t,n){},"9d7a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("a34a")),s=o(n("ee50"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,i,s,o,r){try{var a=e[o](r),u=a.value}catch(d){return void n(d)}a.done?t(u):Promise.resolve(u).then(i,s)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,u,"next",e)}function u(e){r(o,i,s,a,u,"throw",e)}a(void 0)})}}var u=function(){return n.e("components/page-component/app-order-banner/app-order-banner").then(n.bind(null,"ccb8"))},d=function(){return n.e("components/page-component/app-order-goods-info/app-order-goods-info").then(n.bind(null,"1602"))},c=function(){return n.e("components/page-component/app-order-express/app-order-express").then(n.bind(null,"2338"))},f={components:{"app-order-banner":u,"app-order-goods-info":d,"app-order-express":c},data:function(){return{id:null,refundDetail:{},expressList:[],express:"",express_no:"",customer_name:"",index:0,is_show:!1,visible:!1,value:[0]}},methods:{getRefundDetail:function(){var e=this;e.$showLoading(),e.$request({url:e.$api.order.refund_detail,data:{id:e.id}}).then(function(t){e.$hideLoading(),e.is_show=!0,0===t.code&&(e.refundDetail=t.data.detail,e.expressList=t.data.express_list,e.express=t.data.express_list[0].name)}).catch(function(){e.$hideLoading()})},formSubmit:function(){var e=a(i.default.mark(function e(){var t;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,this.$subscribe(this.refundDetail.template_message_list).then(function(e){t.submitAction()}).catch(function(e){t.submitAction()});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),submitAction:function(){var t=this;try{if(!this.express)return void e.showToast({title:"请选择快递公司",icon:"none"});if(!this.express_no)return void e.showToast({title:"请填写快递单号",icon:"none"});if("京东物流"===this.express&&!this.customer_name)return void e.showToast({title:"请填写商家编码",icon:"none"});this.$showLoading({title:"提交中"}),this.$request({url:this.$api.order.refund_send,method:"post",data:{id:this.id,express:this.express,customer_name:this.customer_name,express_no:this.express_no}}).then(function(n){t.$hideLoading(),0===n.code?t.getRefundDetail():e.showModal({title:"",content:n.msg,showCancel:!1})})}catch(n){this.$hideLoading()}},copyText:function(){var e=this.refundDetail.refundAddress,t=e.name,n=e.mobile,i=e.address;s.default.copyText("".concat(t," ").concat(n," ").concat(i))},getCustomer:function(){var t=this;this.$request({url:t.$api.order.customer,data:{keyword:"京东物流"},method:"get"}).then(function(n){var i=n.code,s=n.data,o=n.msg;0===i?t.customer_name=s.customer_account:e.showModal({title:"",content:o,showCancel:!1})})},bindChange:function(e){var t=e.detail.value[0];this.index=t,"京东物流"===this.expressList[t].name&&this.getCustomer()},confirm:function(e){this.visible=!1,1==e&&(this.index>=0&&(this.express=this.expressList[this.index].name),this.express||(this.express=this.expressList[0].name))}},onLoad:function(e){this.id=e.id,this.getRefundDetail()}};t.default=f}).call(this,n("543d")["default"])},f3fd:function(e,t,n){"use strict";var i=n("8c48"),s=n.n(i);s.a}},[["8f6d","common/runtime","common/vendor"]]]);