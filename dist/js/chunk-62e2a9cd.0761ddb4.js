(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62e2a9cd"],{"7dc6":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("Navbar"),a("van-row",[a("van-col",{attrs:{span:"8"}},[a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(n){t.value1=n},expression:"value1"}})],1)],1),a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"gonggu"},[a("div",{staticClass:"img"},[a("van-icon",{attrs:{size:"18",name:"failure"}})],1),a("div",{staticClass:"ggct"},[t._v("巩固全部错题")])])]),a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"fenl"},[a("div",{staticClass:"imgs"},[a("van-icon",{attrs:{size:"18",name:"failure"}})],1),a("div",{ref:"yichu",staticClass:"cuoti",on:{click:t.onclick}},[t._v("移除错题")])])])],1),a("div",[a("van-empty",{staticClass:"div1",attrs:{description:"请稍等，试卷正在赶来的路上啦"}})],1)],1)},c=[],i=a("d178"),o={components:{Navbar:i["a"]},data:function(){return{value1:0,option1:[{text:"类型不限",value:0},{text:"全部",value:1},{text:"套卷练习",value:2},{text:"考点专练",value:3},{text:"仿真模考",value:4}]}},methods:{onclick:function(){var t=this;this.$dialog.alert({message:"是否要移除错题",showCancelButton:!0}).then((function(){console.log("确认"),t.$refs.yichu.style.color="red"})).catch((function(){console.log("取消"),t.$refs.yichu.style.color=""}))}}},s=o,l=(a("cc67"),a("c701")),r=Object(l["a"])(s,e,c,!1,null,"13d79f4e",null);n["default"]=r.exports},cc67:function(t,n,a){"use strict";a("fa4c")},d178:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("van-nav-bar",{attrs:{title:"每时每课","left-text":"返回","right-text":"按钮","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1)},c=[],i={data:function(){return{}},methods:{onClickLeft:function(){this.$router.go("-1")},onClickRight:function(){this.$router.push({path:"/about"})}}},o=i,s=a("c701"),l=Object(s["a"])(o,e,c,!1,null,null,null);n["a"]=l.exports},fa4c:function(t,n,a){}}]);
//# sourceMappingURL=chunk-62e2a9cd.0761ddb4.js.map