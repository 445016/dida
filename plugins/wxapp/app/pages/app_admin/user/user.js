(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/user/user"],{2362:function(t,e,s){"use strict";var r=s("ab48"),i=s.n(r);i.a},"3d02":function(t,e,s){"use strict";s.r(e);var r=s("4d33"),i=s("5548");for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);s("2362");var o=s("2877"),n=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,"7fdf8e5c",null);e["default"]=n.exports},"4d33":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.getFocus=!0},t.e1=function(e){e.stopPropagation(),t.modifyStoreBool=!1},t.e2=function(e){t.modifyStoreBool=!1})},i=[];s.d(e,"a",function(){return r}),s.d(e,"b",function(){return i})},5548:function(t,e,s){"use strict";s.r(e);var r=s("b0f3"),i=s.n(r);for(var a in r)"default"!==a&&function(t){s.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},ab48:function(t,e,s){},b0f3:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(s("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return h(t)||n(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}function u(t,e,s,r,i,a,o){try{var n=t[a](o),h=n.value}catch(u){return void s(u)}n.done?e(h):Promise.resolve(h).then(r,i)}function c(t){return function(){var e=this,s=arguments;return new Promise(function(r,i){var a=t.apply(e,s);function o(t){u(a,r,i,o,n,"next",t)}function n(t){u(a,r,i,o,n,"throw",t)}o(void 0)})}}var l={name:"user-admin",data:function(){return{getFocus:!1,active:0,search:!0,error:!1,keyword:"",status:"",page:1,over:!1,list:[],memberLevel:null,storeList:[],rechargeBool:!1,placeholder:"积分",rechargeStatus:0,num:null,remark_name:null,remark:null,rechargeItem:{},rechargeDeduction:0,modifyStoreBool:!1,storeItem:{},storeIndex:-1,storeUser:{},sort:0,dialog:!1,dialogChoose:!0,changeRemark:!1,changeMember:!1,releaseBool:!1,member:[],deleteObject:{}}},onLoad:function(){var t=this;this.$request({url:this.$api.app_admin.user,data:{page:this.page,status:this.status,keyword:this.keyword}}).then(function(e){0===e.code&&(t.list=e.data.list,t.member=e.data.mall_members)})},onReachBottom:function(){this.over||(this.page++,this.threeRequest(this.active))},methods:{request:function(){var t=c(r.default.mark(function t(e){var s,i,a;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.url,i=e.data,t.next=3,this.$request({url:s,data:i});case 3:if(a=t.sent,0!==a.code){t.next=11;break}if(!(a.data.list.length>0)){t.next=9;break}return t.abrupt("return",a.data);case 9:return this.over=!0,t.abrupt("return",!1);case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),clearSearch:function(){console.log(2),this.keyword="",this.keywordSearch()},chooseMember:function(t){this.memberLevel=t},toChangeInfo:function(t){this.dialog=!this.dialog,this.changeRemark=!1,this.dialogChoose=!0,this.changeMember=!1,this.remark_name=null,this.rechargeItem=t||{}},toChangeRemark:function(){this.dialogChoose=!1,this.changeRemark=!0,this.remark_name=this.rechargeItem.remark_name},toChangeMember:function(){this.dialogChoose=!1,this.member.length>0?(this.changeMember=!0,this.memberLevel=this.rechargeItem.member_level):this.error=!0},close:function(){this.error=!1,this.dialog=!1},toLevel:function(){var e=this;this.$request({url:this.$api.app_admin.level,method:"post",data:{id:this.rechargeItem.user_id,member_level:this.memberLevel}}).then(function(s){0==s.code?(e.toChangeInfo(),e.setActive(0)):t.showToast({title:s.msg,icon:"none",duration:1e3})})},toRemark:function(){var e=this;this.$request({url:this.$api.app_admin.remarkName,method:"post",data:{id:this.rechargeItem.user_id,remark_name:this.remark_name}}).then(function(s){0==s.code?(e.rechargeItem.remark_name=e.remark_name,e.toChangeInfo()):t.showToast({title:s.msg,icon:"none",duration:1e3})})},setSearch:function(){this.search=!1},setActive:function(t){console.log(t),this.list=[],this.page=1,this.over=!1,this.keyword="",this.sort=0,this.threeRequest(t),this.active=t,this.search=!0},threeRequest:function(t){var e=this;0===t?this.request({url:this.$api.app_admin.user,data:{page:this.page,status:"",keyword:this.keyword}}).then(function(t){!1!==t&&(e.list=[].concat(a(e.list),a(t.list)))}):1===t?this.request({url:this.$api.app_admin.share,data:{page:this.page,status:1,keyword:this.keyword,sort:this.sort}}).then(function(t){!1!==t&&(e.list=[].concat(a(e.list),a(t.list)))}):2===t&&this.request({url:this.$api.app_admin.clerk,data:{page:this.page,status:"",keyword:this.keyword,sort:this.sort}}).then(function(t){!1!==t&&(e.list=[].concat(a(e.list),a(t.list)),e.storeList=t.store_list)})},inputBlur:function(){var t=this;setTimeout(function(e){t.getFocus=!1,""===t.keyword&&(t.search=!0)},300)},setRechargeDeduction:function(t,e){this.rechargeItem=t,this.rechargeBool=!0,this.rechargeDeduction=e},activeRecharge:function(t){this.rechargeStatus=t,this.placeholder=0===t?"积分":"余额"},clearStatus:function(){this.rechargeStatus=0,this.rechargeItem={},this.rechargeBool=!1,this.rechargeDeduction=0,this.num=null,this.remark=null},cancelRecharge:function(){this.rechargeBool=!1,this.clearStatus()},intergral:function(e,s){var r=this;this.$request({url:this.$api.app_admin.integral,method:"post",data:{user_id:this.rechargeItem.user_id,num:e,remark:this.remark,type:s}}).then(function(s){0===s.code?(1===r.rechargeDeduction?r.setList("integral",e,1):r.setList("integral",e,0),r.clearStatus()):1===s.code&&t.showToast({title:s.msg,image:"../image/mark.png"})})},balance:function(e,s){var r=this;this.$request({url:this.$api.app_admin.balance,method:"post",data:{user_id:this.rechargeItem.user_id,price:e,remark:this.remark,type:s}}).then(function(s){0===s.code?(1===r.rechargeDeduction?r.setList("balance",e,1):r.setList("balance",e,0),r.clearStatus()):1===s.code&&t.showToast({title:s.msg,image:"../image/mark.png"})})},setList:function(t,e,s){var r=this;this.list.map(function(i){i.user_id===r.rechargeItem.user_id&&(i[t]=0===s?Number(i[t])-e:Number(i[t])+e)})},confirmRecharge:function(){isNaN(this.num)||(1===this.rechargeDeduction&&0===this.rechargeStatus?this.intergral(Number(this.num),1):1===this.rechargeDeduction&&1===this.rechargeStatus?this.balance(Number(this.num),1):0===this.rechargeDeduction&&0===this.rechargeStatus?this.intergral(Number(this.num),0):0===this.rechargeDeduction&&1===this.rechargeStatus&&this.balance(Number(this.num),0))},modifyStore:function(t){this.storeUser=t,this.storeItem=t.store[0];for(var e=0;e<this.storeList.length;e++)this.storeItem.id===this.storeList[e].id&&(this.storeIndex=e);this.modifyStoreBool=!0},pickerChange:function(t){this.storeIndex=t.detail.value[0],console.log(t)},dismissal:function(t){this.deleteObject=t,this.releaseBool=!0},determineStore:function(){var t=this;this.$request({url:this.$api.app_admin.clerk_edit,method:"post",data:{user_id:this.storeUser.user_id,store_id:this.storeList[this.storeIndex].id,id:this.storeUser.id}}).then(function(e){0===e.code&&t.$nextTick().then(function(){for(var e=0;e<t.list.length;e++)t.list[e].user.id===t.storeUser.user_id&&(t.list[e].store[0]=t.storeList[t.storeIndex],t.storeIndex=-1,t.storeUser={},t.modifyStoreBool=!1,t.storeItem={})})})},allSort:function(e){var s,r=this;this.over=!1,this.page=1,t.pageScrollTo({scrollTop:0}),0===e?1===this.sort?this.sort=2:this.sort=1:1===e&&(3===this.sort?this.sort=4:this.sort=3),2==this.sort?s="price_count_desc":1==this.sort?s="price_count_asc":4==this.sort?s="order_count_desc":3==this.sort&&(s="order_count_asc"),this.$request({url:this.$api.app_admin.user,data:{page:1,keyword:this.keyword,status:"",sort:s}}).then(function(t){0===t.code&&(r.list=t.data.list)})},setSort:function(e){var s=this;this.over=!1,this.page=1,t.pageScrollTo({scrollTop:0}),0===e?1===this.sort?this.sort=2:this.sort=1:1===e?3===this.sort?this.sort=4:this.sort=3:2===e&&(5===this.sort?this.sort=6:this.sort=5),this.$request({url:this.$api.app_admin.clerk,data:{page:1,keyword:this.keyword,status:"",sort:this.sort}}).then(function(t){0===t.code&&(s.list=t.data.list)})},cancelUndelete:function(){this.releaseBool=!1,this.deleteObject={}},sureDeletion:function(){var t=this;this.$request({url:this.$api.app_admin.clerk_destroy,method:"post",data:{id:this.deleteObject.id}}).then(function(e){0===e.code&&(t.list.map(function(e,s){e.id===t.deleteObject.id&&t.$delete(t.list,s)}),t.deleteObject={},t.releaseBool=!1)})},keywordSearch:function(){var t=this;this.page=1,this.over=!1,0===this.active?this.request({url:this.$api.app_admin.user,data:{page:this.page,status:"",keyword:this.keyword}}).then(function(e){if(!1===e)return t.list=[];t.list=e.list}):1===this.active?this.request({url:this.$api.app_admin.share,data:{page:this.page,status:1,keyword:this.keyword}}).then(function(e){if(!1===e)return t.list=[];t.list=e.list}):2===this.active&&this.request({url:this.$api.app_admin.clerk,data:{page:this.page,status:"",keyword:this.keyword,sort:this.sort}}).then(function(e){if(!1===e)return t.list=[];t.list=e.list})},distributorSort:function(e){var s=this;this.over=!1,this.page=1,t.pageScrollTo({scrollTop:0}),0===e?1===this.sort?this.sort=2:this.sort=1:3===this.sort?this.sort=4:this.sort=3,this.$request({url:this.$api.app_admin.share,data:{page:1,keyword:this.keyword,status:1,sort:this.sort}}).then(function(t){0===t.code&&(s.list=t.data.list)})}}};e.default=l}).call(this,s("543d")["default"])}},[["d1b8","common/runtime","common/vendor"]]]);