(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-ad/app-ad"],{"2fdf0":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},9584:function(t,e,n){"use strict";var o=n("9b6b"),i=n.n(o);i.a},"9b6b":function(t,e,n){},ba36:function(t,e,n){"use strict";n.r(e);var o=n("2fdf0"),i=n("bcb4");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("9584");var d=n("2877"),a=Object(d["a"])(i["default"],o["a"],o["b"],!1,null,"5787d2b0",null);e["default"]=a.exports},bcb4:function(t,e,n){"use strict";n.r(e);var o=n("d462"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},d462:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"app-ad",props:{type:String,unitId:String,picUrl:String,videoUrl:String,theme:{type:String,default:function(){return"white"}},couponUrl:String,couponParams:Object},data:function(){return{rewardedVideoAd:null,createInterstitialAd:null}},created:function(){this.init()},methods:{onAdLoad:function(t){console.log(t)},onAdPlay:function(t){console.log(t)},onAdClose:function(t){console.log(t)},onAdError:function(t){console.error(t)},init:function(){var t=this;switch(this.type){case"":break;case"rewarded-video":t.initRewardedVideoAd();break;case"interstitial":t.initInterstitialAd();break;case"video":break;case"before-video":break;case"grid":break}},initRewardedVideoAd:function(){var t=this;wx.createRewardedVideoAd&&(this.rewardedVideoAd=wx.createRewardedVideoAd({adUnitId:this.unitId}),this.rewardedVideoAd.onLoad(function(){console.log("rewardedVideoAd load")}),this.rewardedVideoAd.onError(function(t){console.error("rewardedVideoAd error",t)}),this.rewardedVideoAd.onClose(function(e){e&&e.isEnded?(console.log("领取"),t.getUserCoupon()):console.log("rewardedVideoAd emit",e)}))},initInterstitialAd:function(){wx.createInterstitialAd&&(this.interstitialAd=wx.createInterstitialAd({adUnitId:this.unitId}),this.interstitialAd.onLoad(function(){console.log("interstitialAd load")}),this.interstitialAd.onError(function(t){console.error("interstitialAd error",t)}),this.interstitialAd.onClose(function(t){console.log("interstitialAd close",t)}))},showRewardedVideoAd:function(){var e=this;this.rewardedVideoAd.show().catch(function(n){e.rewardedVideoAd.load().then(function(){return e.rewardedVideoAd.show()}).catch(function(e){t.showToast({title:e.errMsg,icon:"none"})})})},showInterstitialAd:function(){this.interstitialAd.show().catch(function(e){t.showToast({title:e.errMsg,icon:"none"})})},getUserCoupon:function(){console.log(Object.assign({},this.couponParams));var e=this;e.$request({url:e.couponUrl,method:"POST",data:Object.assign({},this.couponParams)}).then(function(n){0===n.code?e.$store.dispatch("page/actionSetCoupon",{list:n.data.list,type:"award"}):t.showToast({title:n.msg,icon:"none"})})}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-ad/app-ad-create-component',
    {
        'components/page-component/app-ad/app-ad-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ba36"))
        })
    },
    [['components/page-component/app-ad/app-ad-create-component']]
]);                