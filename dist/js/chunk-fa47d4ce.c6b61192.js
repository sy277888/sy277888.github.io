(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa47d4ce"],{"064b":function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"08ba":function(t,a,i){var s=i("d890"),e=i("064b"),o=i("3c10"),c=i("0fc1");for(var n in e){var r=s[n],l=r&&r.prototype;if(l&&l.forEach!==o)try{c(l,"forEach",o)}catch(u){l.forEach=o}}},2440:function(t,a,i){},"3c10":function(t,a,i){"use strict";var s=i("5dfd").forEach,e=i("d7e1"),o=i("ff9c"),c=e("forEach"),n=o("forEach");t.exports=c&&n?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"55b3":function(t,a,i){"use strict";i("2440")},d7e1:function(t,a,i){"use strict";var s=i("efe2");t.exports=function(t,a){var i=[][t];return!!i&&s((function(){i.call(null,a||function(){throw 1},1)}))}},d996:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"Solodata_top"},[i("div",{staticClass:"Solist_top_box"},[i("span",{staticClass:"Solodata_icon"},[i("van-icon",{attrs:{name:"arrow-left",color:"#fff",size:"1.5rem"},on:{click:t.Onback}})],1),i("span",{staticClass:"Solo_rigth_title"},[t._v("讲师详情")])])]),i("div",{staticClass:"Solodata"},[t._l(t.data,(function(a,s){return i("div",{key:s,staticClass:"Solodata_top_top"},[i("img",{attrs:{src:a.teacher_avatar,alt:""}}),i("p",[t._v(t._s(a.teacher_name))]),i("p",{staticClass:"Solodata_title"},[t._v("金牌讲师")]),i("div",{staticClass:"Solodata_but",on:{click:t.back}},[t._v("预约课程")])])})),i("div",{staticClass:"top"}),i("van-tabs",{attrs:{"title-active-color":"rgb(235, 97, 0)","title-style":"rgb(235, 97, 0)"},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[i("van-tab",{attrs:{title:"讲师介绍",name:"a"}},[i("ul",{staticClass:"Solodata_ul"},[i("li",[t._v("教学年龄 "),i("span",[t._v("8年金牌讲师")])]),i("li",[t._v("授课价格 "),i("span",[t._v("400学习币")])]),i("li",{staticClass:"Solodata_li"},[t._v(" 老师简绍 "),i("span",{staticClass:"Solodata_li_sapn"},[t._v(" 马老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。 特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。")])])])]),i("van-tab",{attrs:{title:"主讲课程",name:"b"}},t._l(t.data,(function(a,s){return i("div",{key:s,staticClass:"Solodata_Tab_A"},[i("ul",[i("li",[t._v("每时每课特级教师-自主招生冲刺讲座知识点总结————"+t._s(a.teacher_name))]),i("li",{staticClass:"Solodata_Tab_A_li"},[i("img",{attrs:{src:a.teacher_avatar,alt:"",width:"100%"}})]),i("li",[i("p",{staticClass:"Solodata_Tab_title_p"},[t._v(t._s(a.introduction)+"人已经报名"),i("span",[t._v("免费")])])])])])})),0),i("van-tab",{attrs:{title:"学员评价",name:"c"}},[i("van-empty",{attrs:{description:"暂无学员评价"}})],1)],1)],2)])},e=[],o=(i("fe59"),i("08ba"),{data:function(){return{data:[],activeName:"a"}},created:function(){var t=this,a=this.$route.query.id;console.log(a),this.$axios.get("http://localhost:8080/data.json").then((function(i){var s=i.data.data.users;s.forEach((function(i){i.id==a&&t.data.push(i)})),console.log(t.data)}))},methods:{Onback:function(){this.$router.go(-1)},back:function(){this.$router.go(-1)}}}),c=o,n=(i("55b3"),i("2c07")),r=Object(n["a"])(c,s,e,!1,null,"9bee59b4",null);a["default"]=r.exports},fe59:function(t,a,i){"use strict";var s=i("1c8b"),e=i("3c10");s({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})}}]);
//# sourceMappingURL=chunk-fa47d4ce.c6b61192.js.map