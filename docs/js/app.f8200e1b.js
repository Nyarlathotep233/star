(function(){"use strict";var n={5620:function(n,e,t){var r=t(6848),o=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("StarRating"),e("FullScreenToggle")],1)},i=[],a=function(){var n=this,e=n._self._c;return e("div",{staticClass:"container text-center mt-5",staticStyle:{"margin-top":"0 !important"}},[e("h2",{staticStyle:{"margin-bottom":"25px","font-weight":"bolder"}},[n._v(" “小芦意”夏令营暨“小候鸟”爱心托班学员签到板 ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},n._l(n.names,(function(t,r){return e("div",{key:r,staticClass:"star-container",on:{click:function(e){return n.toggleStar(r)}}},[e("i",{staticClass:"fa fa-star star",class:{active:n.activeStars[r]}}),e("span",{staticClass:"name"},[n._v(n._s(t))])])})),0)])])},l=[];const s=["陈芷晗","邓星彤","邓雅婷","李金诚","窦坤坤","段易娜","段易姗","段奕帆","郭俊义","韩旭","洪梓辰","黄欣妍","林梓晨","吕恩希","吕金希","木子恒","王梓萱","王梓萱","尹子涵","张博文","徐君浩","徐天昊","纪一诺","张艺婷","张君浩","樊梦瑶","金语彤","黄清蕾","黄晨俊","朱清妍","蒋书言","黄芸熙","汤佳棋","汤佳程","李奕洋","丁梦燕","王致远","乔双","牟梓萱","刘梦娴 ","刘梦妍","杨娜雅","孙翊晴","谭俊宇","刘蒙伟","侯超阳","杨浩男","郑皓轩","兰兆宇"];var c={data(){return{names:s,activeStars:[!1,!1,!1,!1,!1]}},methods:{toggleStar(n){this.$set(this.activeStars,n,!this.activeStars[n])}}},u=c,f=t(845),d=(0,f.A)(u,a,l,!1,null,"5e6e2a69",null),g=d.exports,p=function(){var n=this,e=n._self._c;return e("button",{staticClass:"fullscreen-toggle",on:{click:n.toggleFullScreen}},[e("i",{class:n.isFullScreen?"fas fa-compress":"fas fa-expand"})])},v=[],h=t(9020),y={data(){return{isFullScreen:!1}},mounted(){h.A.isEnabled&&h.A.on("change",this.onFullScreenChange),window.addEventListener("keydown",this.onKeyDown)},beforeDestroy(){h.A.isEnabled&&h.A.off("change",this.onFullScreenChange),window.removeEventListener("keydown",this.onKeyDown)},methods:{toggleFullScreen(){h.A.isEnabled&&(h.A.toggle(),this.onFullScreenChange())},onFullScreenChange(){this.isFullScreen=h.A.isFullscreen},onKeyDown(n){"F11"===n.key&&(n.preventDefault(),this.toggleFullScreen())}}},S=y,b=(0,f.A)(S,p,v,!1,null,"9054868a",null),m=b.exports,w={name:"App",components:{StarRating:g,FullScreenToggle:m}},_=w,F=(0,f.A)(_,o,i,!1,null,"58bd7147",null),A=F.exports;t(8077);r.Ay.config.productionTip=!1,new r.Ay({render:n=>n(A)}).$mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return n[r].call(i.exports,i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,i){if(!r){var a=1/0;for(u=0;u<n.length;u++){r=n[u][0],o=n[u][1],i=n[u][2];for(var l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[s])}))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){n.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[r,o,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,i,a=r[0],l=r[1],s=r[2],c=0;if(a.some((function(e){return 0!==n[e]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(s)var u=s(t)}for(e&&e(r);c<a.length;c++)i=a[c],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(u)},r=self["webpackChunkmy_single_file_app"]=self["webpackChunkmy_single_file_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(5620)}));r=t.O(r)})();
//# sourceMappingURL=app.f8200e1b.js.map