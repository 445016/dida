(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-submit-goods/app-submit-goods"],{1641:function(t,e,n){"use strict";n.r(e);var i=n("79d3"),r=n("367f");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("2f6c");var u=n("2877"),c=Object(u["a"])(r["default"],i["a"],i["b"],!1,null,"65b4b3a8",null);e["default"]=c.exports},"2f6c":function(t,e,n){"use strict";var i=n("acfe"),r=n.n(i);r.a},"367f":function(t,e,n){"use strict";n.r(e);var i=n("9af0"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"79d3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"9af0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={name:"app-submit-goods",props:{list:{type:Object},plugin:{type:String},index:{type:Number}},data:function(){return{}},created:function(){},mounted:function(){var t=this;if("composition"==t.plugin){for(var e in t.list.composition_list)t.list.composition_list[e].open=!1;t.$forceUpdate(),t.$emit("updateList",t.list,t.index)}},computed:o({},(0,i.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img}}),{theme:function(){return this.userTheme?this.userTheme:this.$store.state.mallConfig.theme}}),methods:{toggle:function(t){this.list.composition_list[t].open=!this.list.composition_list[t].open,this.$forceUpdate(),this.$emit("updateList",this.list,this.index)}}};e.default=c},acfe:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-submit-goods/app-submit-goods-create-component',
    {
        'components/basic-component/app-submit-goods/app-submit-goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1641"))
        })
    },
    [['components/basic-component/app-submit-goods/app-submit-goods-create-component']]
]);                