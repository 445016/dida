(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pick/detail/detail"],{"1e78":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(o("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,n,o,e,i,a,r){try{var c=t[a](r),s=c.value}catch(p){return void o(p)}c.done?n(s):Promise.resolve(s).then(e,i)}function r(t){return function(){var n=this,o=arguments;return new Promise(function(e,i){var r=t.apply(n,o);function c(t){a(r,e,i,c,s,"next",t)}function s(t){a(r,e,i,c,s,"throw",t)}c(void 0)})}}var c=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/app-quick-navigation/app-quick-navigation")]).then(o.bind(null,"4d92"))},s=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/goods/app-goods-banner")]).then(o.bind(null,"12b6"))},p=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/goods/app-goods-price")]).then(o.bind(null,"e525"))},u=function(){return o.e("components/page-component/goods/app-goods-attr").then(o.bind(null,"9dc1"))},d=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/app-attr/app-attr")]).then(o.bind(null,"d3c4"))},l=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/goods/app-goods-marketing")]).then(o.bind(null,"1143"))},m=function(){return Promise.all([o.e("common/vendor"),o.e("components/basic-component/app-jump-button/app-jump-button")]).then(o.bind(null,"b362"))},f=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/app-goods-list/app-goods-list")]).then(o.bind(null,"3f73"))},h=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/goods/app-goods-service")]).then(o.bind(null,"311c"))},v=function(){return o.e("components/page-component/goods/app-goods-detail").then(o.bind(null,"5abf"))},g=function(){return o.e("components/page-component/app-goods-recommend/app-goods-recommend").then(o.bind(null,"8e97"))},b=function(){return Promise.all([o.e("common/vendor"),o.e("components/basic-component/app-iphone-x/app-iphone-x")]).then(o.bind(null,"7598"))},_=function(){return Promise.all([o.e("common/vendor"),o.e("components/basic-component/app-empty-bottom/app-empty-bottom")]).then(o.bind(null,"0c06"))},k=function(){return Promise.all([o.e("common/vendor"),o.e("components/page-component/app-vip-card/app-vip-card")]).then(o.bind(null,"19f0"))},y={name:"detail",data:function(){return{detail:{},attrShow:0,selectAttr:{},is_vip:!1,discount:null,is_vip_card_user:0,shareData:{},recommend_list:[],activity:{},shareUrl:"",activity_status:1,loading:!1}},components:{"app-quick-navigation":c,appGoodsBanner:s,appGoodsPrice:p,appGoodsAttr:u,appAttr:d,appGoodsMarketing:l,appJumpButton:m,"app-goods-list":f,"app-goods-service":h,"app-goods-detail":v,"app-goods-recommend":g,appIphoneX:b,appEmptyBottom:_,AppVipCard:k},methods:{getDetail:function(){var t=r(e.default.mark(function t(n){var o;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!1,this.$showLoading(),t.next=4,this.$request({url:this.$api.pick.goods,method:"get",data:{id:n}});case 4:o=t.sent,0===o.code&&(this.detail=o.data.detail,this.activity=o.data.activity,this.recommend_list=o.data.list,this.shareUrl="".concat(this.$api.pick.poster,"&goods_id=").concat(this.detail.id),this.activity_status=o.data.activity_status),this.loading=!0,this.$hideLoading();case 8:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),onAttr:function(t){this.selectAttr=t},quickShare:function(t){this.shareData=t},clickAttr:function(n){1===this.activity_status&&(1===n?this.attrShow=Math.random():t.navigateTo({url:"/plugins/pick/pond/pond?rule_num=".concat(this.activity.rule_num,"&pick_activity_id=").concat(this.activity.id)}))},add:function(){var n=r(e.default.mark(function n(o,i){var a;return e.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$request({url:this.$api.pick.add,data:{goods_id:o.goods_id,attr:o.id,num:i,pick_activity_id:this.activity.id}});case 2:a=n.sent,0===a.code&&t.navigateBack();case 4:case"end":return n.stop()}},n,this)}));function o(t,o){return n.apply(this,arguments)}return o}(),back:function(){t.navigateTo({url:"/plugins/pick/index/index"})},favorite:function(){var n=this.$api.user.favorite_add,o=!0;this.detail.favorite&&(n=this.$api.user.favorite_remove,o=!1),this.detail.favorite=o,this.$request({url:n,data:{goods_id:this.detail.id}}).then(function(n){0===n.code||t.showModal({title:"提示",content:n.msg,showCancel:!1})}).catch(function(t){})}},onLoad:function(t){this.getDetail(t.goods_id)}};n.default=y}).call(this,o("543d")["default"])},"31ec":function(t,n,o){},"4ab7":function(t,n,o){"use strict";o.r(n);var e=o("4e2b"),i=o("b4d6");for(var a in i)"default"!==a&&function(t){o.d(n,t,function(){return i[t]})}(a);o("98cb");var r=o("2877"),c=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"1f53d6d8",null);n["default"]=c.exports},"4e2b":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement,o=(t._self._c,Number(110));t.$mp.data=Object.assign({},{$root:{m0:o}})},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},"98cb":function(t,n,o){"use strict";var e=o("31ec"),i=o.n(e);i.a},b4d6:function(t,n,o){"use strict";o.r(n);var e=o("1e78"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=i.a}},[["5a77","common/runtime","common/vendor"]]]);