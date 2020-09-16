(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-special-topic/app-special-topic-normal"],{"1c29":function(t,n,e){},"26a4":function(t,n,e){"use strict";e.r(n);var c=e("599a"),a=e("a70e");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("4ac9");var o=e("2877"),u=Object(o["a"])(a["default"],c["a"],c["b"],!1,null,"23e72c60",null);n["default"]=u.exports},"4ac9":function(t,n,e){"use strict";var c=e("1c29"),a=e.n(c);a.a},"599a":function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return a})},"59ca":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c={name:"app-special-topic",props:{topic_list:{type:Array,default:function(){return[]}},count:{type:Number,default:function(){return 2}},icon:String,logo_1:String,logo_2:String},computed:{newDataList:function(){if(2===this.count){for(var t=[],n=0;n<Math.ceil(this.topic_list.length/this.count);n++)t.push(this.topic_list.slice(n*this.count,(n+1)*this.count));return t}}}};n.default=c},a70e:function(t,n,e){"use strict";e.r(n);var c=e("59ca"),a=e.n(c);for(var i in c)"default"!==i&&function(t){e.d(n,t,function(){return c[t]})}(i);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-special-topic/app-special-topic-normal-create-component',
    {
        'components/page-component/app-special-topic/app-special-topic-normal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("26a4"))
        })
    },
    [['components/page-component/app-special-topic/app-special-topic-normal-create-component']]
]);                
