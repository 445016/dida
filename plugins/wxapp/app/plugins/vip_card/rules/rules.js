(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/vip_card/rules/rules"],{"006d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(n.bind(null,"cb0e"))},u={data:function(){return{rules:" "}},name:"rules",components:{"app-rich-text":a},computed:c({},(0,r.mapState)({theme:function(e){return e.mallConfig.theme}})),methods:{getList:function(t){var n=this;n.$showLoading({text:"加载中..."}),n.$request({url:n.$api.vip_card.setting}).then(function(t){n.$hideLoading(),0===t.code&&(n.loading=!1,e.setNavigationBarTitle({title:t.data.agreement_title?t.data.agreement_title:"超级会员卡使用说明"}),n.rules=t.data.agreement_content)}).catch(function(e){n.$hideLoading()})}},onLoad:function(){this.getList(),e.setStorage({key:"vip_card_is_read",data:!0,success:function(){console.log("success")}})}};t.default=u}).call(this,n("543d")["default"])},"0842":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"09cc":function(e,t,n){"use strict";n.r(t);var r=n("006d"),o=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t["default"]=o.a},"1e70":function(e,t,n){"use strict";var r=n("6413"),o=n.n(r);o.a},6413:function(e,t,n){},"88ce":function(e,t,n){"use strict";n.r(t);var r=n("0842"),o=n("09cc");for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);n("1e70");var i=n("2877"),a=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"7934f381",null);t["default"]=a.exports}},[["a45e","common/runtime","common/vendor"]]]);