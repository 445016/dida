(global.webpackJsonp=global.webpackJsonp||[]).push([["plugins/advance/components/detail-bottom-button"],{"27a9":function(t,e,n){},"5c91":function(t,e,n){n.r(e);var o=n("b20b"),a=n("e6c3");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("d2f9");var r=n("2877"),c=Object(r.a)(a.default,o.a,o.b,!1,null,"1cfcf94c",null);e.default=c.exports},b20b:function(t,e,n){var o=function(){var t=this,e=(t.$createElement,t._self._c,t.getDate(t.end_prepayment_at)),n=t.getDate(t.end_prepayment_at);t.$mp.data=Object.assign({},{$root:{m0:e,m1:n}})},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},c259:function(t,e,n){(function(t){function o(t,e,n,o,a,i,r){try{var c=t[i](r),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(o,a)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){function r(t){o(s,a,i,r,c,"next",t)}function c(t){o(s,a,i,r,c,"throw",t)}var s=t.apply(e,n);r(void 0)})}}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(t){return t&&t.__esModule?t:{default:t}}(n("a34a")),u={name:"detail-bottom-button",data:function(){return{request_time:!1,once_pay:!1}},props:{end_prepayment_at:String,active:Boolean,favorite:Boolean,goods_id:Number,detail:Object,num:Number},methods:{set_active:function(){this.$user.isLogin()&&!this.once_pay?this.$emit("close_attr",!1):this.$user.isLogin()||this.$user.getInfo().then(function(){}).catch(function(){})},set_favorite:function(e){var n=this;e?this.$request({url:this.$api.user.favorite_remove,data:{goods_id:this.goods_id}}).then(function(e){0===e.code?n.$emit("favorite",!n.favorite):t.showModal({title:"提示",content:e.msg})}):this.$request({url:this.$api.user.favorite_add,data:{goods_id:this.goods_id}}).then(function(e){0===e.code?n.$emit("favorite",!n.favorite):t.showModal({title:"提示",content:e.msg})})},route_jump:function(){t.navigateTo({url:"/pages/index/index"})},pay:function(){var e=this;this.once_pay=!0,t.showLoading({title:"生成订单中...",mask:!0}),this.$emit("close_attr",!0);for(var n={goods_id:this.detail.id,goods_attr_id:0,goods_num:"".concat(this.num),advance_goods_id:this.detail.advanceGoods.id},o="",a=this.detail.attr_groups,i=0;i<a.length;i++)for(var r=a[i],c=0;c<r.attr_list.length;c++)r.attr_list[c].active&&(o+=":".concat(r.attr_list[c].attr_id));for(var s=0;s<this.detail.attr.length;s++)this.detail.attr[s].sign_id===o.substring(1)&&(n.goods_attr_id=this.detail.attr[s].id);this.get_submit(n).then(function(t){e.get_token(t.data)})},get_token:function(e){var n=this;this.$request({url:this.$api.advance.pay_data,method:"post",data:r({},e)}).then(function(o){0===o.code?o.data.hasOwnProperty("id")?(t.hideLoading(),n.$payment.pay(o.data.id).then(function(){n.once_pay=!1,t.navigateTo({url:"/plugins/advance/order/order"})}).catch(function(){n.once_pay=!1,t.navigateTo({url:"/plugins/advance/order/order"})})):setTimeout(function(){n.get_token(e)},1e3):(t.hideLoading(),t.showModal({title:"提示",content:o.msg}))})},get_submit:function(){var e=a(s.default.mark(function e(n){var o;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$request({url:this.$api.advance.order_submit,method:"post",data:r({},n)});case 2:if(0!==(o=e.sent).code){e.next=7;break}return e.abrupt("return",o);case 7:1===o.code&&t.showModal({title:"提示",content:o.msg,success:function(e){e.cancel?this.$emit("request",this.goods_id):e.confirm&&t.navigateBack()}});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getDate:function(t){var e=new Date(t.replace(/-/g,"/"));e.setDate(e.getDate());var n=e.getMonth()+1,o=e.getDate(),a="'"+o+"'";3==("'"+n+"'").length&&(n="0"+n),3==a.length&&(o="0"+o);var i=e.getHours(),r=e.getMinutes(),c=e.getSeconds();return c="".concat(c),r="".concat(r),1===(i="".concat(i)).length&&(i="0".concat(i)),1===r.length&&(r="0".concat(r)),1===c.length&&(c="0".concat(c)),e.getFullYear()+"."+n+"."+o+" "+i+":"+r+":"+c}}};e.default=u}).call(this,n("543d").default)},d2f9:function(t,e,n){var o=n("27a9");n.n(o).a},e6c3:function(t,e,n){n.r(e);var o=n("c259"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=a.a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["plugins/advance/components/detail-bottom-button-create-component",{"plugins/advance/components/detail-bottom-button-create-component":function(t,e,n){n("543d").createComponent(n("5c91"))}},[["plugins/advance/components/detail-bottom-button-create-component"]]]); 