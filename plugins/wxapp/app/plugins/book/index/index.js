(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/book/index/index"],{"2a04":function(t,n,e){"use strict";var i=e("528e"),o=e.n(i);o.a},"3f34":function(t,n,e){"use strict";e.r(n);var i=e("c1c4"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"528e":function(t,n,e){},c1c4:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,o,a,r){try{var s=t[a](r),u=s.value}catch(c){return void e(c)}s.done?n(u):Promise.resolve(u).then(i,o)}function r(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var r=t.apply(n,e);function s(t){a(r,i,o,s,u,"next",t)}function u(t){a(r,i,o,s,u,"throw",t)}s(void 0)})}}function s(t){return d(t)||c(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var l=function(){return e.e("plugins/book/components/app-head-nav-list").then(e.bind(null,"33ff"))},p=function(){return Promise.all([e.e("common/vendor"),e.e("plugins/book/components/app-product-list")]).then(e.bind(null,"7fc4"))},f=function(){return Promise.all([e.e("common/vendor"),e.e("components/page-component/app-quick-navigation/app-quick-navigation")]).then(e.bind(null,"4d92"))},h=function(){return e.e("components/page-component/app-no-goods/app-no-goods").then(e.bind(null,"8112"))},g={name:"index",data:function(){return{catList:[{name:"全部",id:0}],cat_id:0,page:1,goods_list:[],page_count:1}},onLoad:function(n){var e=this;t.showLoading({title:"加载中"}),n.cat_id?this.cat_id=n.cat_id:this.cat_id=this.catList[0].id,this.request(),this.$request({url:this.$api.book.cats}).then(function(n){t.hideLoading(),0===n.code&&(e.catList=[].concat(s(e.catList),s(n.data.cat)))})},methods:{changeStatus:function(t){this.page=1,this.cat_id=t,this.goods_list=[],this.request()},request:function(){var n=r(i.default.mark(function n(){var e;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return t.showLoading({title:"加载中"}),n.next=3,this.$request({url:this.$api.book.list,data:{page:this.page,cat_id:this.cat_id}});case 3:e=n.sent,t.hideLoading(),0===e.code&&this.dataProcessing(e.data);case 6:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),dataProcessing:function(t){for(var n=0;n<t.list.length;n+=2)n+1!==t.list.length?this.goods_list.push([t.list[n],t.list[n+1]]):this.goods_list.push([t.list[n]]);this.page_count=t.pagination.page_count}},onReachBottom:function(){this.page<this.page_count&&(this.page++,this.request())},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/book/index/index",title:this.$children[0].navigationBarTitle})},components:{"app-head-nav-list":l,"app-product-list":p,"app-quick-navigation":f,"app-no-goods":h}};n.default=g}).call(this,e("543d")["default"])},c4db:function(t,n,e){"use strict";e.r(n);var i=e("e135"),o=e("3f34");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("2a04");var r=e("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"c4e9af86",null);n["default"]=s.exports},e135:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}},[["67b9","common/runtime","common/vendor"]]]);