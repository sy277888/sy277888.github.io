(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c7d45d5"],{"5d54":function(t,e,n){"use strict";n("8149")},"7d4e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"waw_subject_container"},[n("NavTitle",{on:{onClickRight:t.onClickRight}}),n("div",{staticClass:"waw_sub_box"},[n("div",{staticClass:"waw_sub"},[n("van-checkbox-group",{on:{change:t.onChangeCheck},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},[n("van-checkbox",{attrs:{shape:"square",name:"语文"}},[t._v("语文")]),n("van-checkbox",{attrs:{shape:"square",name:"数学"}},[t._v("数学")]),n("van-checkbox",{attrs:{shape:"square",name:"英语"}},[t._v("英语")]),n("van-checkbox",{attrs:{shape:"square",name:"物理"}},[t._v("物理")]),n("van-checkbox",{attrs:{shape:"square",name:"化学"}},[t._v("化学")]),n("van-checkbox",{attrs:{shape:"square",name:"政治"}},[t._v("政治")]),n("van-checkbox",{attrs:{shape:"square",name:"信息技术"}},[t._v("信息技术")])],1)],1)])],1)},s=[],c=n("7f44"),o={components:{NavTitle:c["a"]},data:function(){return{result:JSON.parse(localStorage.getItem("result"))||["语文"],checked:!1}},mounted:function(){this.$Net.kx().then((function(t){console.log(t)}))},methods:{onChangeCheck:function(t){this.result=t},onClickRight:function(){localStorage.setItem("result",JSON.stringify(this.result)),this.$Net.user({user_attr:this.result}).then((function(t){console.log(t)})),this.$router.go(-1)}}},i=o,r=(n("5d54"),n("c701")),u=Object(r["a"])(i,a,s,!1,null,"590c3f6e",null);e["default"]=u.exports},"7f44":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"修改个人信息"},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight},scopedSlots:t._u([{key:"left",fn:function(){return[n("div",[n("van-icon",{attrs:{name:"arrow-left",color:"black"}})],1)]},proxy:!0},{key:"right",fn:function(){return[n("small",[t._v("保存")])]},proxy:!0}])})],1)},s=[],c={methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$emit("onClickRight"),this.$emit("onClickChangeSex"),this.$router.push({path:"/mime"})}}},o=c,i=n("c701"),r=Object(i["a"])(o,a,s,!1,null,"7d2a1011",null);e["a"]=r.exports},8149:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0c7d45d5.7749c5c6.js.map