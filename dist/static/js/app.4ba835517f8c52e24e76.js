webpackJsonp([1],{"0rgy":function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},o=[],i={render:r,staticRenderFns:o};t.a=i},"8Loh":function(n,t){},HZ6N:function(n,t,e){"use strict";var r=e("EFqf"),o=e.n(r);t.a={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e4},goTop:function(){this.$refs.container.scrollTop=0}}}},M93x:function(n,t,e){"use strict";function r(n){e("y2k6")}var o=e("xJD8"),i=e("0rgy"),s=e("VU/8"),a=r,u=s(o.a,i.a,!1,a,"data-v-b05f3372",null);t.a=u.exports},MGGx:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"styleEditor"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},o=[],i={render:r,staticRenderFns:o};t.a=i},MPzD:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("/5sW"),o=e("M93x");r.a.config.productionTip=!1,new r.a({el:"#app",render:function(n){return n(o.a)}})},UW6n:function(n,t){},f35Q:function(n,t,e){"use strict";var r=e("OEdS"),o=e.n(r);t.a={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e4}}}},iWpO:function(n,t,e){"use strict";function r(n){e("UW6n")}var o=e("f35Q"),i=e("MGGx"),s=e("VU/8"),a=r,u=s(o.a,i.a,!1,a,"data-v-26375c0f",null);t.a=u.exports},nfn1:function(n,t,e){"use strict";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},o=[],i={render:r,staticRenderFns:o};t.a=i},rRep:function(n,t,e){"use strict";function r(n){e("8Loh")}var o=e("HZ6N"),i=e("nfn1"),s=e("VU/8"),a=r,u=s(o.a,i.a,!1,a,"data-v-fa2d228e",null);t.a=u.exports},xJD8:function(n,t,e){"use strict";var r=e("//Fk"),o=e.n(r),i=e("Xxa5"),s=e.n(i),a=e("exGp"),u=e.n(a),c=e("iWpO"),l=e("rRep"),d=e("MPzD");e.n(d);t.a={name:"app",components:{StyleEditor:c.a,ResumeEditor:l.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* Hi, 我是肖鸿舰\n* 这是我模仿的一个简历\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); \n  background: rgb(0,43,54);\n}\n\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n\n/* 代码高亮 */\n.token.selector { color: rgb(133,153,0); }\n.token.property { color: rgb(187,137,0); }\n.token.punctuation { color: yellow; }\n.token.function { color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml {\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  left: 0; \n  top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; \n  right: 0; top: 0;\n  padding: .5em;  \n  margin: .5em;\n  width: 48vw; \n  height: 90vh;\n  border: 1px solid;\n  background: white; \n  color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor {\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol {\n  list-style: none;\n}\n.resumeEditor ul> li::before {\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"肖鸿舰 \n----\n\n前端工程师\n\n技能\n----\n\n* 前端开发\n* css js node\n* php\n\n工作经历\n----\n\n1. 四川易家科技有限公司\n2. 杭州边锋网络科技有限公司功夫熊猫项目部\n3. 绵阳红蜘蛛科技有限公司\n\n链接\n----\n\n* [GitHub](https://xiaohongjian1989.github.io/waterfall/)\n* [GitHub](https://xiaohongjian1989.github.io/mutong/)\n* [GitHub](https://xiaohongjian1989.github.io/resumer/dist)\n\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(s.a.mark(function t(){var r,a,u,c,l,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=a-r.length,this.currentStyle.length<a?(c=this.currentStyle.length-u,l=r.substring(c,c+1)||" ",this.currentStyle+=l,"\n"===r.substring(c-1,c)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},y2k6:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.4ba835517f8c52e24e76.js.map