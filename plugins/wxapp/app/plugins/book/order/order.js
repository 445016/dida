(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/book/order/order"],{"36c4":function(t,e,i){"use strict";var n=i("e757"),s=i.n(n);s.a},"528b":function(t,e,i){"use strict";i.r(e);var n=i("e96d"),s=i("8193");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("36c4");var r=i("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"83959f0c",null);e["default"]=o.exports},"776c":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t){return u(t)||o(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function c(t,e,i,n,s,a,r){try{var o=t[a](r),u=o.value}catch(c){return void i(c)}o.done?e(u):Promise.resolve(u).then(n,s)}function d(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var a=t.apply(e,i);function r(t){c(a,n,s,r,o,"next",t)}function o(t){c(a,n,s,r,o,"throw",t)}r(void 0)})}}var l={name:"order",data:function(){return{status:0,list:[],page:1,over:!1,model:!1,modelType:0,setItem:{},writeOffChart:""}},onLoad:function(){var t=this;this.request({status:this.status,page:this.page}).then(function(e){e&&(t.list=e.list)})},onReachBottom:function(){this.over||(this.page+=1,this.pagingRequest({status:this.status,page:this.page}))},methods:{setActiveHeader:function(t){var e=this;this.page=1,this.status=t,this.over=!1,this.list=[],this.request({status:this.status,page:this.page}).then(function(t){t&&(e.list=t.list)})},request:function(){var t=d(n.default.mark(function t(e){var i,s,a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.status,s=e.page,t.next=3,this.$request({url:this.$api.book.order_list,data:{status:i,page:s}});case 3:if(a=t.sent,0!==a.code){t.next=8;break}return t.abrupt("return",a.data);case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),operationOrder:function(e,i){var n=this;switch(this.model=!0,this.setItem=i,e){case 1:this.modelType=1;break;case 2:t.showLoading({mask:!0,title:"加载中"}),this.modelType=2,this.$request({url:this.$api.book.clerk_code,data:{id:i.id}}).then(function(e){t.hideLoading(),0===e.code?n.writeOffChart=e.data.file_path:1===e.code&&(n.model=!1,t.showModal({title:"提示",content:e.msg}))});break;case 3:this.modelType=3;break;case 4:this.modelType=4;break}},pagingRequest:function(t){var e=this,i=t.status,n=t.page;this.request({status:i,page:n}).then(function(t){t&&(t.list.length>0?e.list=[].concat(a(e.list),a(t.list)):e.over=!0)})},cancle:function(){this.modelType=0,this.model=!1},determine:function(){var e=this;switch(t.showLoading({mask:!0,title:"加载中"}),this.modelType){case 1:this.$request({url:this.$api.order.cancel,data:{id:this.setItem.id}}).then(function(i){if(0===i.code){t.hideLoading(),e.model=!1;for(var n=0;n<e.list.length;n++)e.setItem.id===e.list[n].id&&(e.list[n].cancel_status="2",2===e.status&&e.$delete(e.list,n))}});break;case 3:this.$request({url:this.$api.order.cancel,data:{id:this.setItem.id}}).then(function(i){if(0===i.code){t.hideLoading(),e.model=!1;for(var n=0;n<e.list.length;n++)e.setItem.id===e.list[n].id&&(e.list[n].cancel_status="1",e.list[n].is_pay="0",1===e.status&&e.$delete(e.list,n))}});break;case 4:this.$request({url:this.$api.order.list_pay_data,data:{id:this.setItem.id}}).then(function(i){0===i.code&&(t.hideLoading(),e.model=!1,e.$payment.pay(i.data.id).then(function(){for(var t=0;t<e.list.length;t++)e.setItem.id===e.list[t].id&&(e.list[t].is_pay="1",1===e.status&&e.$delete(e.list,t))}).catch(function(){}))});break}},jump:function(t){this.$jump({open_type:"navigate",url:"/plugins/book/orderDetails/orderDetails?id=".concat(t.id)})}}};e.default=l}).call(this,i("543d")["default"])},8193:function(t,e,i){"use strict";i.r(e);var n=i("776c"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},e757:function(t,e,i){},e96d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.model=!1},t.e1=function(e){e.stopPropagation(),t.model=!1})},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})}},[["18a7","common/runtime","common/vendor"]]]);