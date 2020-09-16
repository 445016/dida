(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-switch/app-switch"],{"10a9":function(t,n,a){"use strict";a.r(n);var e=a("4ca9"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=i.a},"4ca9":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"app-switch",data:function(){return{x:0,switch:this.value}},props:{theme:String,value:{default:!1}},methods:{switchChange:function(){this.switch=!this.switch,this.$emit("input",this.switch)}},computed:{themeColor:function(){return 88===this.x?"".concat(this.theme,"-background"):""}},watch:{value:{handler:function(t){!1===t?this.x=0:!0===t&&(this.x=88)},immediate:!0}}};n.default=e},"61ac":function(t,n,a){"use strict";a.r(n);var e=a("aac9"),i=a("10a9");for(var c in i)"default"!==c&&function(t){a.d(n,t,function(){return i[t]})}(c);a("a3a5");var u=a("2877"),r=Object(u["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},7539:function(t,n,a){},a3a5:function(t,n,a){"use strict";var e=a("7539"),i=a.n(e);i.a},aac9:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-switch/app-switch-create-component',
    {
        'components/basic-component/app-switch/app-switch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("61ac"))
        })
    },
    [['components/basic-component/app-switch/app-switch-create-component']]
]);                
