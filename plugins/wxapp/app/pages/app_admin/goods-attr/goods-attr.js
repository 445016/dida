(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/goods-attr/goods-attr"],{"2be7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{list:[],attr:[],iphone_x:!1,noDetail:!0,first:!0,index:-1}},computed:a({},(0,i.mapState)({theme:function(t){return t.mallConfig.theme}})),methods:{changeName:function(e){var n=this;if(n.attr.length>0){for(var i in n.attr)for(var o in n.attr[i].attr_list)e.attr_group_id==n.attr[i].attr_list[o].attr_group_id&&(n.attr[i].attr_list[o].attr_group_name=e.attr_group_name);t.setStorage({key:"temp_attr_info",data:n.attr,success:function(e){t.hideLoading()},fail:function(e){t.hideLoading(),t.showToast({title:e.errMsg,icon:"none",duration:1e3})}})}},pop:function(e){this.index=e,this.list[this.index].attr_group_name||0!=this.list[this.index].attr_list.length||(this.list.splice(this.index,1),this.index=-1,this.attr=[],t.removeStorage({key:"temp_attr_info",success:function(t){}}))},close:function(){this.index=-1},changeValue:function(e){t.setStorage({key:"temp_attr",data:this.list}),t.navigateTo({url:"/pages/app_admin/goods-attr-edit/goods-attr-edit?index="+e})},chooseDetail:function(){var e=this;if(0==e.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;var n=1;for(var i in e.list)n*=+e.list[i].attr_list.length;if(n>1e3)return t.showToast({title:"规格组合超出1000，请删减规格值再继续操作",icon:"none",duration:1e3}),!1;for(var o in e.list)if(!e.list[o].attr_group_name||0==e.list[o].attr_list.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;t.setStorage({key:"temp_attr",data:e.list}),t.navigateTo({url:"/pages/app_admin/goods-attr-info/goods-attr-info"})},toDelete:function(){this.list.splice(this.index,1),this.index=-1,this.attr=[],t.removeStorage({key:"temp_attr_info",success:function(t){}})},save:function(){var e=this;if(0==e.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;for(var n in e.list)if(!e.list[n].attr_group_name||0==e.list[n].attr_list.length||0==e.attr.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;t.setStorage({key:"goods_attr_groups",data:e.list}),t.showLoading({title:"保存中..."}),t.setStorage({key:"goods_attr",data:e.attr,success:function(e){t.hideLoading(),setTimeout(function(){t.navigateBack()},500)},fail:function(e){t.hideLoading(),t.showToast({title:e.errMsg,icon:"none",duration:1e3})}})},add_attr:function(){var e=this,n={attr_group_id:e.list.length+1,attr_group_name:"",attr_list:[]};e.list.push(n),e.attr=[],t.removeStorage({key:"temp_attr_info",success:function(t){}})}},onLoad:function(e){var n=this;n.$showLoading({type:"global",text:"加载中..."});t.getStorage({key:"goods_attr_groups",success:function(e){n.list=e.data,t.setStorage({key:"temp_attr",data:n.list}),!0},fail:function(e){t.getStorage({key:"temp_attr",success:function(t){n.list=t.data}}),!0}}),t.getStorage({key:"goods_attr",success:function(e){n.attr=e.data,t.setStorage({key:"temp_attr_info",data:e.data}),n.$hideLoading(),n.first=!1},fail:function(e){t.getStorage({key:"temp_attr_info",success:function(t){n.attr=t.data,n.first=!1,n.$hideLoading()},fail:function(t){n.first=!1,n.$hideLoading()}})}}),t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(n.iphone_x=!0)}})},onShow:function(){var e=this;e.first||(t.getStorage({key:"temp_attr",success:function(t){e.list=t.data},fail:function(){e.list=[]}}),t.getStorage({key:"temp_attr_info",success:function(t){e.attr=t.data},fail:function(){e.attr=[]}}))}};e.default=s}).call(this,n("543d")["default"])},3764:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},b6ac:function(t,e,n){"use strict";n.r(e);var i=n("3764"),o=n("d19c");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("e378");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"196c98df",null);e["default"]=s.exports},d19c:function(t,e,n){"use strict";n.r(e);var i=n("2be7"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},d240:function(t,e,n){},e378:function(t,e,n){"use strict";var i=n("d240"),o=n.n(i);o.a}},[["9be2","common/runtime","common/vendor"]]]);