(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/share/add/add"],{2979:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{status:null,mallName:"",name:"",phone:"",parent_name:"总店",height:0,template_message:[],read:!1,protocol:!1}},computed:i({},(0,a.mapState)({theme:function(t){return t.mallConfig.theme},mall:function(t){return t.mallConfig.mall},custom_setting:function(t){return t.mallConfig.share_setting_custom},share_setting:function(t){return t.mallConfig.share_setting}})),methods:{toRead:function(){this.read=!this.read},imageLoad:function(t){var e=t.detail.width,n=t.detail.height;this.height=n*(702/e)},subscribe:function(){var e=this,n=this,a=0;1==this.read?(a=1,n.name?n.phone?/0?(1)[0-9]{10}/.test(n.phone)?this.$subscribe(this.template_message).then(function(t){e.submit(a)}).catch(function(t){e.submit(a)}):t.showToast({title:"请输入正确的手机号码",icon:"none",duration:1e3}):t.showToast({title:"请输入手机号码",icon:"none",duration:1e3}):t.showToast({title:"请输入真实姓名",icon:"none",duration:1e3})):t.showToast({title:"请先查看分销协议并同意",icon:"none",duration:1e3})},submit:function(e){var n=this;t.showLoading({title:"加载中..."}),n.$request({url:n.$api.share.apply,data:{name:n.name,mobile:n.phone,agree:e},method:"post"}).then(function(e){n.$hideLoading(),0==e.code?(t.showToast({title:e.msg,duration:1e3}),setTimeout(function(){t.navigateBack({delta:1})},500)):t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(e){n.$hideLoading(),t.showToast({title:response,icon:"none",duration:1e3})})}},onLoad:function(e){var n=this;null!=e.parent_name&&(n.parent_name=e.parent_name),null!=e.template_message&&(n.template_message=JSON.parse(e.template_message)),t.setNavigationBarTitle({title:this.custom_setting.apply.share_apply.name?this.custom_setting.apply.share_apply.name:this.custom_setting.apply.share_apply.default})}};e.default=s}).call(this,n("543d")["default"])},"315d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.protocol=!0},t.e1=function(e){t.protocol=!1,t.read=!0})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"854e":function(t,e,n){"use strict";n.r(e);var a=n("315d"),o=n("b711");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("9dce");var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"0dd0de04",null);e["default"]=s.exports},"8ee4":function(t,e,n){},"9dce":function(t,e,n){"use strict";var a=n("8ee4"),o=n.n(a);o.a},b711:function(t,e,n){"use strict";n.r(e);var a=n("2979"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["2a71","common/runtime","common/vendor"]]]);