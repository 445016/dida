(global.webpackJsonp=global.webpackJsonp||[]).push([["plugins/advance/detail/detail"],{3510:function(t,e,n){(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"detail",data:function(){return{detail:{},active:!0,attr_deposit:"0",attr_swell_deposit:"0",attr_stock:0,attr_price:"0",attr_price_member:0,url:"",level_show:0,loading:!1,select_attr_group:[],zhe:!1,list:[],num:1,shareShow:!1,attr_pic_url:"",goods_id:-1,d:0,h:0,m:0,s:0,end_time:-1}},onShow:function(){var e=this;this.request_detail({id:this.goods_id}),this.$request({url:this.$api.advance.goods_list,data:{goods_id:this.goods_id}}).then(function(n){0===n.code?e.list=n.data.list:1===n.code&&t.showModal({title:"提示",content:n.msg})})},onLoad:function(t){this.goods_id=t.id},onHide:function(){console.log("页面隐藏"),clearInterval(this.end_time)},onUnload:function(){console.log("页面卸载"),clearInterval(this.end_time)},methods:{request_detail:function(e){var n=this;this.$request({url:this.$api.advance.detail,data:{id:e.id},method:"get"}).then(function(e){0===e.code?(n.detail=e.data.detail,n.detail.num=1,n.loading=!0,n.url="".concat(n.$api.advance.poster,"&goods_id=").concat(n.detail.id),n.getTime(n.detail.advanceGoods.end_prepayment_at),n.set_attr_active()):1===e.code&&t.showModal({title:"提示",content:e.msg})})},open_share:function(){this.shareShow=!0},change_num:function(t){this.num+=t},change_num_data:function(t){this.num=t},favorite:function(t){this.detail.favorite=t},select_attr:function(t,e){for(var n=this.detail.attr_groups,i=":",a=0,o=0;o<n.length;o++)for(var r=this.detail.attr_groups[o].attr_list,s=0;s<r.length;s++)n[o].attr_group_id===t&&r[s].attr_id===e?this.$set(this.detail.attr_groups[o].attr_list[s],"active",!0):n[o].attr_group_id===t&&r[s].attr_id!==e&&this.$set(this.detail.attr_groups[o].attr_list[s],"active",!1),this.detail.attr_groups[o].attr_list[s].active&&(a=this.detail.attr_groups[o].attr_list[s].attr_id,i+=":".concat(a));var d=i.substr(2);this.get_price_stock(d)},set_attr_active:function(){for(var t=0,e=":",n=0;n<this.detail.attr_groups.length;n++)for(var i=0;i<this.detail.attr_groups[n].attr_list.length;i++)0!==i?this.$set(this.detail.attr_groups[n].attr_list[i],"active",!1):0===i&&(t=this.detail.attr_groups[n].attr_list[i].attr_id,e+=":".concat(t),this.$set(this.detail.attr_groups[n].attr_list[i],"active",!0));this.get_price_stock(e.substr(2))},get_price_stock:function(t){for(var e=this.detail.attr,n=0;n<e.length;n++)if(e[n].sign_id===t){this.select_attr_group=e[n].attr_list;var i=e[n],a=i.deposit,o=i.swell_deposit,r=i.stock,s=i.price,d=i.price_member,l=i.pic_url;this.attr_deposit=a,this.attr_swell_deposit=o,this.attr_stock=r,this.attr_price=s,this.attr_price_member=d,this.attr_pic_url=l}},close_attr:function(t){this.active=t},getTime:function(t){var e=this,n=new Date(t.replace(/-/g,"/")).getTime()-(new Date).getTime();this.d=parseInt(n/1e3/60/60/24%30),this.h=parseInt(n/1e3/60/60%24),this.m=parseInt(n/1e3/60%60),this.s=parseInt(n/1e3%60),this.end_time=setInterval(function(){var n=(new Date).getTime(),i=new Date(t.replace(/-/g,"/")).getTime()-n;if(i>0){var a=parseInt(i/1e3/60/60/24%30),o=parseInt(i/1e3/60/60%24),r=parseInt(i/1e3/60%60),s=parseInt(i/1e3%60);e.d=a,e.h=o,e.m=r,e.s=s}else clearInterval(e.end_time)},1e3)}},components:{"app-goods-banner":function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/app-goods-banner")]).then(n.bind(null,"12b6"))},"detail-ad":function(){return n.e("plugins/advance/components/detail-ad").then(n.bind(null,"e0a5"))},"app-iphone-x":function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-iphone-x/app-iphone-x")]).then(n.bind(null,"7598"))},"app-goods-detail":function(){return n.e("components/page-component/goods/app-goods-detail").then(n.bind(null,"5abf"))},"detail-price-share":function(){return n.e("plugins/advance/components/detail-price-share").then(n.bind(null,"fe3c"))},"detail-bottom-button":function(){return Promise.all([n.e("common/vendor"),n.e("plugins/advance/components/detail-bottom-button")]).then(n.bind(null,"5c91"))},"app-empty-bottom":function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-empty-bottom/app-empty-bottom")]).then(n.bind(null,"0c06"))},"detail-attr":function(){return n.e("plugins/advance/components/detail-attr").then(n.bind(null,"f471"))},"app-join-member":function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-join-member/app-join-member")]).then(n.bind(null,"40f4"))},"app-goods-service":function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/app-goods-service")]).then(n.bind(null,"311c"))},"app-related-suggestion-product":function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product")]).then(n.bind(null,"1ce4"))},"detail-discount":function(){return n.e("plugins/advance/components/detail-discount").then(n.bind(null,"c54f"))}},onShareAppMessage:function(){return this.$shareAppMessage({path:"/plugins/advance/detail/detail",title:this.detail.app_share_title?this.detail.app_share_title:this.detail.name,imageUrl:this.detail.app_share_pic?this.detail.app_share_pic:"",params:{id:this.detail.id}})}};e.default=i}).call(this,n("543d").default)},"3ab6":function(t,e,n){n.r(e);var i=n("9d08"),a=n("e0cd");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("da0e");var r=n("2877"),s=Object(r.a)(a.default,i.a,i.b,!1,null,"4ffcceb0",null);e.default=s.exports},"7b92":function(t,e,n){},"9d08":function(t,e,n){var i=function(){var t=this,e=(t.$createElement,t._self._c,Number(110)),n=Number(110);t._isMounted||(t.e0=function(e){t.active=!1}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:n}})},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},da0e:function(t,e,n){var i=n("7b92");n.n(i).a},e0cd:function(t,e,n){n.r(e);var i=n("3510"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e.default=a.a}},[["ba56","common/runtime","common/vendor"]]]); 