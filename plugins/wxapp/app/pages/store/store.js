(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/store"],{1186:function(t,o,e){"use strict";e.r(o);var n=e("dab9"),a=e("a114");for(var i in a)"default"!==i&&function(t){e.d(o,t,function(){return a[t]})}(i);e("e0f9");var r=e("2877"),u=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"4a2f4922",null);o["default"]=u.exports},"91e4":function(t,o,e){},a114:function(t,o,e){"use strict";e.r(o);var n=e("b4f7"),a=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,function(){return n[t]})}(i);o["default"]=a.a},b4f7:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(){return e.e("components/page-component/app-shop/app-shop").then(e.bind(null,"400c"))},a={name:"store",components:{appShop:n},data:function(){return{getFocus:!1,longitude:0,latitude:0,url:"",keyword:"",goods_id:0,list:null,args:!1,load:!1,page:1,toSearch:!1}},onLoad:function(o){var e=this;o.book_id?(e.url=e.$api.book.store_list,e.goods_id=o.book_id):(e.url=e.$api.store.list,e.goods_id=0),t.getLocation({success:function(t){e.longitude=t.longitude,e.latitude=t.latitude,e.loadData()},fail:function(t){console.error(t)}})},onPullDownRefresh:function(){var o=this;o.keyword="",o.toSearch=!1,o.page=1,t.getLocation({success:function(t){o.longitude=t.longitude,o.latitude=t.latitude,o.loadData()},complete:function(){t.stopPullDownRefresh()}})},onShareAppMessage:function(t){return this.$shareAppMessage({title:this.$children[0].navigationBarTitle,path:"/pages/store/store",params:{}})},onReachBottom:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var o=t.page+1;t.$request({url:t.url,data:{page:o,longitude:t.longitude,latitude:t.latitude,keyword:t.keyword,goods_id:t.goods_id}}).then(function(e){if(0===e.code){var n=[o,0===e.data.list.length,t.list.concat(t.forMatter(e.data.list))];t.page=n[0],t.args=n[1],t.list=n[2]}t.load=!1})}},methods:{forMatter:function(t){return t.forEach(function(t,o){t.pic_url=t.cover_url;for(var e=[],n=0;n<t.score;n++)e.push(n);t.score=e}),t},bindConfirm:function(t){this.loadData()},beSearch:function(t){0===this.keyword.length&&(this.toSearch=!this.toSearch,this.getFocus=this.toSearch)},cancelPrint:function(){this.keyword="",this.toSearch=!1,this.loadData()},bindInput:function(t){this.keyword=t.detail.value},loadData:function(){var t=this;t.$showLoading(),t.$request({url:t.url,data:{keyword:t.keyword,longitude:t.longitude,latitude:t.latitude,goods_id:t.goods_id}}).then(function(o){t.$hideLoading(),0===o.code&&(t.list=t.forMatter(o.data.list))}).catch(function(o){t.$hideLoading()})}}};o.default=a}).call(this,e("543d")["default"])},dab9:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement;t._self._c},a=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return a})},e0f9:function(t,o,e){"use strict";var n=e("91e4"),a=e.n(n);a.a}},[["6015","common/runtime","common/vendor"]]]);