(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-posture_card"],{"1aa9":function(t){t.exports=JSON.parse('{"cip":[901,902,903,904,905,906],"cip2":[101,102,103,104,105,106]}')},7961:function(t,a,e){"use strict";var i=e("f1d3"),n=e.n(i);n.a},"970c":function(t,a,e){"use strict";e.r(a);var i=e("dafe"),n=e("aad1");for(var d in n)["default"].indexOf(d)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(d);e("7961");var r=e("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"2dbd8606",null,!1,i["a"],void 0);a["default"]=s.exports},"98fa":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("caad"),e("2532"),e("e25e");var i={data:function(){return{selectedOption:"不知道玩什么姿势？",isFlipped:!1,content:"选一种爱爱姿势",sign:e("1aa9"),img_url:"/static/image/game/posture/132.jpg",min:102,max:110}},methods:{flipCard:function(){if(this.isFlipped=!this.isFlipped,!0===this.isFlipped){var t=uni.getStorageSync("token"),a=this.sign["cip"];a.includes(parseInt(t))?this.max=142:this.selectedOption="会员可解锁100种姿势，非会员只有8种哦",console.log(this.max);var e=Math.floor(Math.random()*(this.max-this.min)+1+this.min);this.img_url="/static/image/game/posture/"+e+".jpg"}}}};a.default=i},aad1:function(t,a,e){"use strict";e.r(a);var i=e("98fa"),n=e.n(i);for(var d in i)["default"].indexOf(d)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(d);a["default"]=n.a},cd97:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".main[data-v-2dbd8606]{width:100%;height:%?1500?%;background-color:#f472b6;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;color:#fee2e2}.head[data-v-2dbd8606]{width:%?600?%;height:%?100?%;.head_txt{font-size:%?50?%;font-weight:700;text-align:center;align-items:center;display:block\n\t\t/* 将文本水平居中 */}}.card[data-v-2dbd8606]{width:%?680?%;height:%?500?%;-webkit-perspective:%?1000?%;perspective:%?1000?%\n\t/* 透视效果 */}.card-inner[data-v-2dbd8606]{width:100%;height:100%;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;\n\t/* 过渡效果 */-webkit-transform-style:preserve-3d;transform-style:preserve-3d\n\t/* 保留 3D 效果 */}.card-front[data-v-2dbd8606],\n.card-back[data-v-2dbd8606]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:pink;display:flex;justify-content:center;align-items:center;font-size:24px;-webkit-backface-visibility:hidden;backface-visibility:hidden;text-align:center;color:#fff\n\t/* 隐藏背面 */}.card-back[data-v-2dbd8606]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)\n\t/* 初始时背面朝上 */}.flipped .card-inner[data-v-2dbd8606]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)\n\t/* 卡牌翻转效果 */}.card-back-img[data-v-2dbd8606]{height:100%;width:100%}.explain[data-v-2dbd8606]{width:%?500?%;height:%?300?%;text-align:center;font-size:%?30?%}\n\n\n/*弹窗 */.container[data-v-2dbd8606]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.modal-mask[data-v-2dbd8606]{position:fixed;z-index:1000;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5)}.modal-content[data-v-2dbd8606]{position:fixed;z-index:1003;left:50%;top:40%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;padding:20px;border-radius:10px}.input-code[data-v-2dbd8606]{display:block;border:1px solid #ccc;\n\t/* padding: 10px; */margin:10px 0}.btn-row[data-v-2dbd8606]{display:flex;justify-content:space-around}",""]),t.exports=a},dafe:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"head"},[e("v-uni-text",{staticClass:"head_txt"},[t._v(t._s(t.selectedOption))])],1),e("v-uni-view",{staticClass:"card",class:{flipped:t.isFlipped},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.flipCard.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"card-inner"},[e("v-uni-view",{staticClass:"card-front"},[t._v(t._s(t.content))]),e("v-uni-view",{staticClass:"card-back"},[e("v-uni-image",{staticClass:"card-back-img",attrs:{mode:"aspectFill",src:t.img_url}})],1)],1)],1),e("v-uni-view",{staticClass:"explain"},[t._v("点击卡片选择姿势")]),e("v-uni-view",{staticClass:"pop"})],1)},n=[]},f1d3:function(t,a,e){var i=e("cd97");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("ad07e3dc",i,!0,{sourceMap:!1,shadowMode:!1})}}]);