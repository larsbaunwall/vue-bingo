(function(t){function e(e){for(var r,a,u=e[0],o=e[1],c=e[2],d=0,m=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,u=1;u<n.length;u++){var o=n[u];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-bingo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"0e73":function(t,e,n){},"34c2":function(t,e,n){"use strict";var r=n("0e73"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container is-fluid",attrs:{id:"mainstage"}},[n("BingoGame")],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"columns is-centered"},[r("img",{staticClass:"logo",attrs:{src:n("65ee")}})])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile is-ancestor",attrs:{id:"main-game"}},[n("div",{staticClass:"tile is-8",attrs:{id:"numbers-column"}},[n("ul",{staticClass:"numbers-container"},t._l(t.numbers,(function(e){return n("li",{key:e.number,attrs:{id:[e.number]}},[n("transition",{attrs:{name:"picked-number"}},[e.isPicked?n("div",{class:["bingo-number",{picked:e.isPicked}]},[t._v(" "+t._s(e.number)+" ")]):t._e()]),e.isPicked?t._e():n("div",{staticClass:"bingo-number"},[t._v(" "+t._s(e.number)+" ")])],1)})),0)]),n("div",{staticClass:"tile is-4 is-vertical is-parent",attrs:{id:"draw-column"}},[n("div",{staticClass:"tile is-child"},[n("last-three-numbers",{attrs:{numbers:t.lastThree}}),n("div",{staticClass:"bingo-roulette"},[n("p",{class:[{"reveal-number reveal-number-animation":t.animateTagetNum},"number-draw"]},[t._v(" "+t._s(t.targetNum)+" ")])])],1),n("div",{staticClass:"tile is-child",attrs:{id:"controls"}},[n("div",[n("b-tooltip",{attrs:{label:"eller tryk [Enter]",position:"is-bottom",type:"is-light",size:"is-small",delay:"1000"}},[n("b-button",{attrs:{type:"is-primary",size:"is-medium",disabled:t.drawingInProcess,rounded:"",outlined:"","icon-left":"reload"},on:{click:t.spin,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.spin(e)}}},[t._v(" Træk et nummer! ")])],1),n("b-button",{attrs:{type:"is-text",rounded:""},on:{click:t.reset}},[t._v(" Nulstil ")])],1)])])])},u=[],o=(n("99af"),n("4de4"),n("d81d"),n("26e9"),n("fb6a"),n("d3b7"),n("ddb0"),n("4795"),n("2909")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"component"}},[t._m(0),n("div",{staticClass:"container"},[n("transition-group",{staticClass:"numbers-container",attrs:{name:"list",tag:"ul"}},t._l(t.numbers,(function(e){return n("li",{key:e,staticClass:"bingo-number"},[t._v(" "+t._s(e)+" ")])})),0)],1)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-text-centered"},[n("h1",{staticClass:"title is-2 has-text-dark"},[t._v(" Seneste numre: ")]),n("hr")])}],d={props:{numbers:{type:Array,default:function(){return[]}}}},m=d,f=(n("b7f8"),n("2877")),p=Object(f["a"])(m,c,l,!1,null,"6cc97426",null),b=p.exports,h={components:{LastThreeNumbers:b},data:function(){return{drawingInProcess:!1,target:null,targetNum:null,animateTagetNum:!1,maxNumber:90,numbers:[],pickedNumbers:[]}},computed:{lastThree:function(){return this.pickedNumbers.slice().reverse().slice(0,3)}},watch:{numbers:{handler:function(t,e){localStorage.numbers=JSON.stringify(t)},deep:!0},pickedNumbers:{handler:function(t,e){localStorage.pickedNumbers=JSON.stringify(t)},deep:!0}},mounted:function(){localStorage.numbers&&(this.numbers=JSON.parse(localStorage.numbers)),localStorage.pickedNumbers&&(this.pickedNumbers=JSON.parse(localStorage.pickedNumbers))},created:function(){this.init();var t=this;window.addEventListener("keyup",(function(e){13==e.keyCode&&t.spin()}))},methods:{init:function(){0===this.numbers.length&&(this.numbers=Object(o["a"])(Array(this.maxNumber).keys()).map((function(t){return{number:++t,isPicked:!1}}))),0===this.pickedNumbers.length&&(this.pickedNumbers=[]),this.target=null,this.targetNum=null},spin:function(){var t=this;this.drawingInProcess=!0,this.startDrawing(),setTimeout((function(){t.stopDrawing(),t.drawingInProcess=!1}),3e3)},reset:function(){confirm("Vil du nulstille og starte forfra?")&&(this.target=null,this.targetNum=null,localStorage.removeItem("numbers"),localStorage.removeItem("pickedNumbers"),this.target=null,this.pickedNumbers=[],this.numbers=Object(o["a"])(Array(this.maxNumber).keys()).map((function(t){return{number:++t,isPicked:!1}})))},startDrawing:function(){var t=this;this.target=setInterval((function(){var e=t.numbers.filter((function(t){return!t.isPicked})),n=Math.floor(Math.random()*e.length),r=e[n];t.targetNum=r.number}),100)},stopDrawing:function(){var t=this;clearInterval(this.target),this.animateTagetNum=!0,setTimeout((function(){t.animateTagetNum=!1}),1e3),this.numbers[this.targetNum-1].isPicked=!0,this.pickedNumbers=[].concat(Object(o["a"])(this.pickedNumbers),[this.targetNum])}}},g=h,v=(n("34c2"),Object(f["a"])(g,a,u,!1,null,"ea3a943c",null)),k=v.exports,y={name:"App",components:{BingoGame:k}},_=y,N=(n("034f"),Object(f["a"])(_,i,s,!1,null,null,null)),w=N.exports,O=n("2f62");r["a"].use(O["a"]);var C=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("289d");n("f843");r["a"].config.productionTip=!1,r["a"].use(S["a"]),new r["a"]({store:C,render:function(t){return t(w)}}).$mount("#app")},"65ee":function(t,e,n){t.exports=n.p+"img/silo-banko-logo@3x.35bcaeed.png"},"85ec":function(t,e,n){},b7f8:function(t,e,n){"use strict";var r=n("dd9f"),i=n.n(r);i.a},dd9f:function(t,e,n){},f843:function(t,e,n){}});
//# sourceMappingURL=app.99573b35.js.map