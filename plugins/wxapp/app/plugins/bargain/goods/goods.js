(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/bargain/goods/goods"],{"1aec":function(n,e,i){"use strict";i.r(e);var t=i("b426"),a=i("bf15");for(var o in a)"default"!==o&&function(n){i.d(e,n,function(){return a[n]})}(o);i("28f7");var r=i("2877"),s=Object(r["a"])(a["default"],t["a"],t["b"],!1,null,"3d304b17",null);e["default"]=s.exports},"28f7":function(n,e,i){"use strict";var t=i("f682"),a=i.n(t);a.a},ad61:function(n,i,t){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=t("2f62");function o(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,t)}return i}function r(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(i,!0).forEach(function(e){s(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):o(i).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function s(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}var c=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-quick-navigation/app-quick-navigation")]).then(t.bind(null,"4d92"))},u=function(){return Promise.all([t.e("common/vendor"),t.e("components/basic-component/app-rich/parse")]).then(t.bind(null,"cb0e"))},g=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/goods/app-goods-banner")]).then(t.bind(null,"12b6"))},p=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/goods/app-goods-service")]).then(t.bind(null,"311c"))},d=function(){return t.e("components/page-component/app-iphonex-bottom/app-iphonex-bottom").then(t.bind(null,"bc3b"))},l=function(){return t.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(t.bind(null,"409e"))},b=function(){return Promise.all([t.e("common/vendor"),t.e("components/basic-component/app-iphone-x/app-iphone-x")]).then(t.bind(null,"7598"))},m=function(){return Promise.all([t.e("common/vendor"),t.e("components/basic-component/app-empty-bottom/app-empty-bottom")]).then(t.bind(null,"0c06"))},f=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/goods/app-goods-marketing")]).then(t.bind(null,"1143"))},h={name:"goods",components:{appQuickNavigation:c,appRichText:u,appGoodsBanner:g,appService:p,appShareQrCode:l,appIphonexBottom:d,appEmptyBottom:m,appIphoneX:b,appGoodsMarketing:f},computed:r({},(0,a.mapState)({appImg:function(n){return n.mallConfig.plugin.bargain.app_image},userInfo:function(n){return n.user.info},isUnderlinePrice:function(n){return n.mallConfig.mall.setting.is_underline_price}}),{},(0,a.mapState)("gConfig",{iphone:function(n){return n.iphone},iphoneHeight:function(n){return n.iphoneHeight}})),data:function(){return{timeIntegral:null,goods_id:"",bargain:null,finish_list:null,begin_list:null,end_list:null,shareShow:!1,title:"砍价",page:1,circuit:[{name:"点击砍价",url:"./../image/bargain-click.png"},{name:"",url:"./../image/bargain-jiantou.png"},{name:"找人砍价",url:"./../image/bargain-help.png"},{name:"",url:"./../image/bargain-jiantou.png"},{name:"价格合适",url:"./../image/bargain-price.png"},{name:"",url:"./../image/bargain-jiantou.png"},{name:"优惠购买",url:"./../image/bargain-buy.png"}],poster:this.$api.bargain.poster}},onLoad:function(e){var i=this;i.$store.dispatch("user/info"),i.goods_id=e.goods_id,i.$showLoading(),i.$request({url:i.$api.bargain.goods_detail,data:{goods_id:i.goods_id}}).then(function(e){if(i.$hideLoading(),0===e.code){if(i.bargain=e.data.bargain,i.bargain.bargain_info){var t=function(){if(i.bargain.bargain_info){var n=[i.setTimeStart(i.bargain.bargain_info.finish_at),i.setTimeStart(i.bargain.begin_time),i.setTimeStart(i.bargain.end_time)];i.finish_list=n[0],i.begin_list=n[1],i.end_list=n[2]}else clearInterval(i.timeIntegral)};t(),i.timeIntegral=setInterval(function(){t()},1e3)}}else n.showToast({icon:"none",title:e.msg})}).catch(function(n){i.$hideLoading()})},onUnload:function(){clearInterval(this.timeIntegral)},onShareAppMessage:function(){return this.$shareAppMessage({title:this.bargain.goods.app_share_title?this.bargain.goods.app_share_title:this.bargain.name,path:"/plugins/bargain/goods/goods",imageUrl:this.bargain.goods.app_share_pic?this.bargain.goods.app_share_pic:this.bargain.cover_pic,params:{goods_id:this.bargain.goods_id}})},methods:{bargainFriend:function(){n.navigateTo({url:"/plugins/bargain/activity/activity?id="+this.bargain.bargain_info.bargain_order_id})},userList:function(){var n=this,i=this;i.$request({url:i.$api.bargain.goods_detail,data:{goods_id:i.goods_id}}).then(function(t){if(0===t.code&&t.data.bargain.bargain_info){var a=e.data.bargain.bargain_info.list;i.setData({user_list:a}),n.finishTime&&setTimeout(function(){n.userList()},5e3)}})},setTimeStart:function(n){var e=n.replace(/-/g,"/"),i=parseInt((new Date(e).getTime()-(new Date).getTime())/1e3),t=0,a=0,o=0,r=0;return i>0?(t=Math.floor(i/86400),a=Math.floor(i/3600)-24*t,o=Math.floor(i/60)-24*t*60-60*a,r=Math.floor(i)-24*t*60*60-60*a*60-60*o,{d:t,h:a<10?"0"+a:a,m:o<10?"0"+o:o,s:r<10?"0"+r:r}):null},subscribe:function(){var e=this;this.$subscribe(this.bargain.template_message).then(function(i){var t=e.bargain.template_message[0];"accept"==i[t]?n.showModal({title:"提示",content:"订阅成功",showCancel:!1,success:function(n){e.save()}}):n.showModal({title:"提示",content:"取消订阅",showCancel:!1,success:function(n){e.save()}})}).catch(function(n){e.save()})},save:function(){var e=this;e.$showLoading(),e.$request({url:e.$api.bargain.bargain_submit,data:{goods_id:e.bargain.goods_id}}).then(function(i){e.$hideLoading(),0==i.code?e.bargainResult(i):n.showToast({icon:"none",title:i.msg})}).catch(function(n){e.$hideLoading()})},bargainResult:function(e){var i=this;i.$showLoading(),i.$request({url:i.$api.bargain.bargain_result,data:{queueId:e.data.queueId,token:e.data.token}}).then(function(t){if(0===t.code){if(t.data.retry)return void setTimeout(function(){i.bargainResult(e)},1e3);i.$hideLoading(),n.redirectTo({url:"/plugins/bargain/activity/activity?order_id="+t.data.bargain_order_id})}else i.$hideLoading(),n.showToast({icon:"none",title:t.msg})}).catch(function(n){i.$hideLoading()})},submit:function(){var e=this.bargain,i=[{mch_id:0,bargain_order_id:e.bargain_info.bargain_order_id,goods_list:[{id:e.goods_id,attr:[],num:1,cart_id:0,goods_attr_id:e.goods_attr_id}]}];n.navigateTo({url:"/pages/order-submit/order-submit?mch_list="+JSON.stringify(i)+"&preview_url="+encodeURIComponent(this.$api.bargain.order_preview)+"&submit_url="+encodeURIComponent(this.$api.bargain.order_submit)})},shareClick:function(){this.shareShow=!0}}};i.default=h}).call(this,t("543d")["default"])},b426:function(n,e,i){"use strict";var t=function(){var n=this,e=n.$createElement,i=(n._self._c,Number(120));n.$mp.data=Object.assign({},{$root:{m0:i}})},a=[];i.d(e,"a",function(){return t}),i.d(e,"b",function(){return a})},bf15:function(n,e,i){"use strict";i.r(e);var t=i("ad61"),a=i.n(t);for(var o in t)"default"!==o&&function(n){i.d(e,n,function(){return t[n]})}(o);e["default"]=a.a},f682:function(n,e,i){}},[["4f83","common/runtime","common/vendor"]]]);