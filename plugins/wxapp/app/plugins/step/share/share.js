(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/step/share/share"],{"3f5e":function(t,e,n){"use strict";n.r(e);var o=n("8ac1"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},5072:function(t,e,n){"use strict";var o=n("5e5c"),i=n.n(o);i.a},"5e5c":function(t,e,n){},"726d":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"8ac1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-layout/app-layout")]).then(n.bind(null,"0b17"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-form-id/app-form-id")]).then(n.bind(null,"8ee9"))},u={data:function(){return{todayStep:0,pic_list:[],poster:"",pic:[],page:0,currentItem:"",left:!1,right:!0}},components:{"app-layout":a,"app-form-id":s},computed:r({},(0,o.mapState)({theme:function(t){return t.mallConfig.theme}})),methods:{screen:function(){var e=this.poster;t.previewImage({urls:[e]})},chooseImg:function(t){var e=this,n=Math.floor(e.pic_list.length/4-1e-4);if(1==t){if(0==e.left)return;e.page--,e.right=!0,0==e.page&&(e.left=!1),e.pic=e.pic_list.slice(4*e.page,4*e.page+4)}else if(2==t){if(0==e.right)return;e.page++,e.left=!0,e.page==n&&(e.right=!1),e.pic=e.pic_list.slice(4*e.page,4*e.page+4)}},tagChoose:function(t){this.currentItem=t,this.getPoster()},saveImage:function(){var e=this;t.showLoading({text:"保存中..."}),t.authorize({scope:"scope.writePhotosAlbum",success:function(n){"authorize:ok"==n.errMsg&&t.getImageInfo({src:e.poster,success:function(e){t.hideLoading(),t.saveImageToPhotosAlbum({filePath:e.path,success:function(e){t.showToast({title:"保存成功！",icon:"success",duration:2e3})},fail:function(e){t.showToast({title:"保存失败！",icon:"none",duration:1e3})}})},fail:function(e){t.hideLoading(),t.showToast({title:"保存失败！",icon:"none",duration:1e3})}})},fail:function(e){t.hideLoading(),t.showModal({title:"提示",content:"保存失败，需要授权保存到相册权限",showCancel:!1,confirmText:"打开授权",success:function(e){e.confirm&&t.openSetting({})}})}})},getPoster:function(){var e=this;t.showLoading({title:"生成中..."}),e.$request({url:e.$api.step.poster,data:{pic_id:e.currentItem,num:e.todayStep}}).then(function(n){t.hideLoading(),0==n.code?e.poster=n.data.pic_url:t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.hideLoading()})},getList:function(){var e=this;e.$showLoading({type:"global",text:"步数加载中..."}),e.$request({url:e.$api.step.setting}).then(function(n){e.$hideLoading(),0==n.code?(e.pic_list=n.data.qrcode_pic,e.pic=n.data.qrcode_pic,e.qrcode_title=n.data.qrcode_title,e.currentItem=n.data.qrcode_pic[0].id,n.data.qrcode_pic.length>4?e.pic=n.data.qrcode_pic.slice(0,4):(e.left=!1,e.right=!1),e.getPoster()):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(t){e.$hideLoading()})}},onLoad:function(t){var e=this;t.step>-1&&(e.todayStep=t.step),e.getList()}};e.default=u}).call(this,n("543d")["default"])},f879:function(t,e,n){"use strict";n.r(e);var o=n("726d"),i=n("3f5e");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("5072");var c=n("2877"),a=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"6268689f",null);e["default"]=a.exports}},[["d254","common/runtime","common/vendor"]]]);