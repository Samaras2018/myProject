(function(e){function t(t){for(var s,o,c=t[0],i=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],a[o]&&f.push(a[o][0]),a[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"39a3":function(e,t,n){"use strict";var s=n("b1e7"),a=n.n(s);a.a},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=n("f23d"),r=(n("202f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[n("a-layout-header",[n("h1",[e._v("All todos")])]),n("a-layout-content",[n("a-row",{attrs:{type:"flex",justify:"center"}},[n("a-col",{attrs:{span:12}},[n("addTodo"),n("todos")],1)],1)],1),n("a-layout-footer",{staticStyle:{"text-align":"center"}},[e._v("\n      Ant Design ©2018 Created by Ant UED\n  ")])],1)}),o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-layout",[n("a-card",{attrs:{title:"Card Title"}},[n("a-list",{attrs:{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:e.allTodos},scopedSlots:e._u([{key:"renderItem",fn:function(t,s){return n("a-list-item",{},[n("a-card",{class:[t.completed?e.green:e.coral,e.coral],attrs:{title:t.id}},[e._v(e._s(t.title)+"\n                      "),n("template",{staticClass:"ant-card-actions",slot:"actions"},[n("a-icon",{attrs:{type:"setting"},on:{click:function(t){return e.deleteTodo(s)}}})],1)],2)],1)}}])})],1)],1)],1)},i=[],d=n("cebc"),l=n("2f62"),u={data:function(){return{collapsed:!1,green:green,coral:coral}},methods:Object(d["a"])({},Object(l["b"])(["fetchTodos","deleteTodo"])),created:function(){this.fetchTodos()},computed:Object(d["a"])({},Object(l["c"])(["allTodos"]))},f=u,j=(n("39a3"),n("2877")),b=Object(j["a"])(f,c,i,!1,null,null,null),p=b.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-layout",[n("a-card",{attrs:{title:"Add Section"}},[n("a-form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("a-form-item",{attrs:{label:"Note","label-col":{span:5},"wrapper-col":{span:12}}},[n("a-input",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),n("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[n("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n      Submit\n    ")])],1),n("a-form-item",[n("a-select",{staticStyle:{width:"120px"},attrs:{defaultValue:"200"},on:{change:e.handleChange}},[n("a-select-option",{attrs:{value:"200"}},[e._v("200")]),n("a-select-option",{attrs:{value:"100"}},[e._v("100")]),n("a-select-option",{attrs:{value:"50"}},[e._v("50")]),n("a-select-option",{attrs:{value:"20"}},[e._v("20")]),n("a-select-option",{attrs:{value:"10"}},[e._v("10")]),n("a-select-option",{attrs:{value:"5"}},[e._v("5")])],1)],1)],1)],1)],1)},h=[],v=(n("96cf"),n("3b8d")),y={data:function(){return{title:""}},methods:Object(d["a"])({},Object(l["b"])(["addTodo","limit","fetchTodos"]),{handleSubmit:function(){this.addTodo(this.title)},handleChange:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchTodos();case 2:return e.next=4,this.limit(t);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()})},g=y,k=Object(j["a"])(g,m,h,!1,null,"1dd9c6a7",null),w=k.exports,x={name:"app",components:{Todos:p,addTodo:w}},O=x,T=(n("034f"),Object(j["a"])(O,r,o,!1,null,null,null)),_=T.exports,z=n("bc3a"),S=n.n(z),R={todos:[]},C={allTodos:function(e){return e.todos}},E={fetchTodos:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("https://jsonplaceholder.typicode.com/todos").then(function(e){return e.json()});case 3:s=e.sent,n("setTodos",s);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),addTodo:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t,n){var s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,e.next=3,S.a.post("https://jsonplaceholder.typicode.com/todos",{title:n,completed:!1});case 3:a=e.sent,s("newTodo",a.data);case 5:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),deleteTodo:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t,n){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,e.next=3,S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(n));case 3:s("remove",n);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),limit:function(e,t){var n=e.commit;n("limitIt",t)}},P={setTodos:function(e,t){e.todos=t},newTodo:function(e,t){e.todos.unshift(t)},remove:function(e,t){e.todos.splice(t,1)},limitIt:function(e,t){return e.todos=e.todos.filter(function(e,n,s){return s.length=s.length-(s.length-t)}),e.todos}},D={state:R,getters:C,actions:E,mutations:P};s["a"].use(l["a"]);var M=new l["a"].Store({modules:{todos:D},state:{},mutations:{},actions:{}});s["a"].use(a["a"]),s["a"].config.productionTip=!1,new s["a"]({store:M,render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,t,n){},b1e7:function(e,t,n){}});
//# sourceMappingURL=app.816e190e.js.map