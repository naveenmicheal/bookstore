(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{201:function(t,n,e){var content=e(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("62c190cb",content,!0,{sourceMap:!1})},202:function(t,n,e){"use strict";var r=e(201);e.n(r).a},203:function(t,n,e){(n=e(29)(!1)).push([t.i,"#navbar[data-v-72afbcc2]{padding:10px}",""]),t.exports=n},204:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{bar:!1}},computed:{cartproducts:function(){return this.$store.getters["data/getcart"]}}},o=(e(202),e(12)),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{},[this.cartproducts.length>0?n("b-navbar",{attrs:{id:"navbar",shadow:"","fixed-bottom":"","mobile-burger":this.bar}},[n("template",{slot:"brand"},[n("b-button",{staticStyle:{"border-radius":"0"},attrs:{tag:"nuxt-link",to:"/cart",type:"is-link is-light",size:"is-    ","icon-right":"cart",expanded:""},on:{click:function(t){}}},[this._v("\n                Go to Cart\n            ")])],1)],2):this._e()],1)}),[],!1,null,"72afbcc2",null);n.default=component.exports},208:function(t,n,e){var content=e(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("3459de75",content,!0,{sourceMap:!1})},225:function(t,n,e){"use strict";var r=e(208);e.n(r).a},226:function(t,n,e){(n=e(29)(!1)).push([t.i,"#bbar[data-v-2304aa2a]{display:none}@media only screen and (max-width:768px){#bbar[data-v-2304aa2a]{display:block}}",""]),t.exports=n},242:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{hello:"World"}},computed:{products:function(){return this.$store.getters["data/products"]},length:function(){return this.$store.getters["data/getcart"].length}},methods:{},mounted:function(){console.log("mounted TRIGGERED"),setTimeout((function(){}),100)}},o=(e(225),e(12)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{},[e("div",{staticClass:"columns is-multiline is-8 mx-3 my-2"},t._l(t.products,(function(n){return e("div",{key:n.id,staticClass:" column is-4"},[e("div",{staticClass:"card",staticStyle:{padding:"20px"}},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:n.img,alt:"Placeholder image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4"},[t._v(t._s(n.name))])])]),t._v(" "),e("div",{staticClass:"content"},[t._v("\t\n\t\t\t\t\t\t"+t._s(n.info)+"\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"card-actions"},[e("b-button",{attrs:{type:"is-primary",expanded:"",outlined:"",tag:"nuxt-link",to:"/product/"+n.id}},[t._v("View Product")])],1)])])})),0),t._v(" "),t.length>0?e("bottombar",{attrs:{id:"bbar"}}):t._e()],1)}),[],!1,null,"2304aa2a",null);n.default=component.exports;installComponents(component,{Bottombar:e(204).default})}}]);