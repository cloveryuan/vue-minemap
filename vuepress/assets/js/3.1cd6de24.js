(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(t,e,n){},144:function(t,e,n){"use strict";var a=n(2),i=n(14),r=n(13),s=n(69),o=n(67),p=n(5),c=n(89).f,u=n(88).f,h=n(7).f,l=n(87).trim,f=a.Number,m=f,d=f.prototype,M="Number"==r(n(68)(d)),v="trim"in String.prototype,k=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var n,a,i,r=(e=v?e.trim():l(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var s,p=e.slice(2),c=0,u=p.length;c<u;c++)if((s=p.charCodeAt(c))<48||s>i)return NaN;return parseInt(p,a)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(M?p(function(){d.valueOf.call(n)}):"Number"!=r(n))?s(new m(k(e)),n,f):k(e)};for(var g,$=n(6)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;$.length>y;y++)i(m,g=$[y])&&!i(f,g)&&h(f,g,u(m,g));f.prototype=d,d.constructor=f,n(9)(a,"Number",f)}},145:function(t,e,n){"use strict";var a=n(143);n.n(a).a},146:function(t,e,n){"use strict";n(12),n(21),n(144),n(22),n(23);var a=[];function i(t){return a.filter(function(e){return e.id===t})[0].mapInstace}var r={name:"MineMap",provide:function(){return{getMap:this.getMap}},props:{accessToken:{type:String,required:!0},solution:{type:[String,Number],required:!0},options:{type:Object,required:!0},urls:{type:Object,required:!1}},data:function(){return{isMapLoaded:!1}},mounted:function(){this.initMap()},beforeDestroy:function(){},destroyed:function(){this.rmMap()},methods:{initMap:function(){var t=this,e=e||window.minemap,n=this.accessToken,i=this.solution,r=this.options;this.urls&&this.initParameter(e),e.accessToken=n,e.solution=i,this.rmMap(),this.isMapLoaded=!1,this.map=new e.Map(r),a.push({id:this.options.container,mapInstace:this.map}),this.map.on("load",function(){t.$emit("map-load",t.map),t.isMapLoaded=!0})},rmMap:function(){this.map&&(this.map.remove(),this.map=null,function(t){var e=null;a.forEach(function(n,a){n.id===t&&(e=a)}),a.splice(e,1)}(this.options.container))},getMap:function(){return this.map},initParameter:function(t){var e=this;["domainUrl","dataDomainUrl","spriteUrl","serviceUrl"].forEach(function(n){e.urls[n]&&(t[n]=e.urls[n])})}},watch:{solution:function(){this.initMap()}}},s=(n(145),n(0));n.d(e,"b",function(){return i});var o=Object(s.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vue-minemap",attrs:{id:this.options.container}},[this._t("default")],2)},[],!1,null,"29c88cc4",null);o.options.__file="MineMap.vue";e.a=o.exports},147:function(t,e,n){},148:function(t,e,n){"use strict";n(90)("anchor",function(t){return function(e){return t(this,"a","name",e)}})},149:function(t,e,n){},150:function(t,e,n){"use strict";var a=n(147);n.n(a).a},151:function(t,e,n){"use strict";n(148),n(21),n(50);var a={name:"MMPopup",props:{lnglat:{type:Array},mapInstace:{type:Object},offset:{type:Array},anchor:{type:String},closeButton:{type:Boolean,default:!0},closeOnClick:{type:Boolean,default:!0}},mounted:function(){var t=this;"MineMap"===this.$parent.$options.name?(this.$parent.$on("map-load",function(e){t.map=e,t.addPopup()}),this.$parent.isMapLoaded&&(this.map=this.getMap(),this.addPopup())):"MMMarker"===this.$parent.$options.name?(this.map=null,this.addPopup()):this.mapInstace&&(this.map=this.mapInstace,this.addPopup())},beforeDestroy:function(){this.rmPopup()},methods:{addPopup:function(){var t,e=e||window.minemap,n=this.map;try{t=this.$slots.content[0].elm}catch(t){throw new Error('请添加一个名为content的具名slot，使其作为popup的内容，例如：<h1 slot="content">hello world</h1>')}var a=this.lnglat,i=this.offset,r=this.anchor,s={closeButton:this.closeButton,closeOnClick:this.closeOnClick};i&&(s.offset=i),r&&(s.anchor=r),this.popup=new e.Popup(s).setDOMContent(t),a&&this.popup.setLngLat(a),n&&this.popup.addTo(n)},rmPopup:function(){this.popup&&this.popup.remove()},getPopup:function(){return this.popup}},watch:{lnglat:function(t){var e=this;"MineMap"===this.$parent.$options.name?this.$parent.isMapLoaded?this.popup.setLngLat(t):this.$parent.$once("map-load",function(n){e.popup.setLngLat(t)}):this.popup.setLngLat(t)}}},i=(n(150),n(0)),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"MMPopup-container",staticStyle:{display:"none"}},[this._t("content")],2)},[],!1,null,"305e4bcc",null);r.options.__file="MMPopup.vue";e.a=r.exports},153:function(t,e,n){"use strict";var a=n(149);n.n(a).a},154:function(t,e,n){},163:function(t,e,n){"use strict";n(12),n(22),n(148),n(21),n(50);var a={name:"MMMarker",props:{lnglat:{type:Array,required:!0},mapInstace:{type:Object},offset:{type:Array}},mounted:function(){var t=this;"MineMap"===this.$parent.$options.name?(this.$parent.$on("map-load",function(e){t.map=e,t.addMarker()}),this.$parent.isMapLoaded&&(this.map=this.getMap(),this.addMarker())):(this.map=this.mapInstace,this.addMarker())},beforeDestroy:function(){this.rmMarker()},methods:{addMarker:function(){var t,e=this,n=n||window.minemap,a=this.map;try{t=this.$slots.content[0].elm}catch(t){throw new Error('请添加一个名为content的具名slot，使其作为marker的内容，例如：<h1 slot="content">hello world</h1>')}var i=this.lnglat,r=this.offset,s=this.anchor,o={};r&&(o.offset=r),s&&(o.anchor=s),this.marker=new n.Marker(t,o).setLngLat(i).addTo(a),this.$children.forEach(function(t){if("MMPopup"===t.$options.name){var n=t.popup;e.marker.setPopup(n)}})},rmMarker:function(){this.marker&&this.marker.remove()},getMarker:function(){return this.marker}},watch:{offset:function(t){var e=this;"MineMap"===this.$parent.$options.name?this.$parent.isMapLoaded?this.marker.setOffset(t):this.$parent.$once("map-load",function(n){e.marker.setOffset(t)}):this.marker.setOffset(t)},lnglat:function(t){var e=this;"MineMap"===this.$parent.$options.name?this.$parent.isMapLoaded?this.marker.setLngLat(t):this.$parent.$once("map-load",function(n){e.marker.setLngLat(t)}):this.marker.setLngLat(t)}}},i=(n(153),n(0)),r=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"MMMarker-container",staticStyle:{display:"none"}},[this._t("default"),this._v(" "),this._t("content")],2)},[],!1,null,"52a273a0",null);r.options.__file="MMMarker.vue";e.a=r.exports},165:function(t,e,n){"use strict";var a=n(154);n.n(a).a},178:function(t,e,n){"use strict";n.r(e);var a=n(146),i=n(163),r=n(151),s={name:"AddMarker",data:function(){return{mapProps:{accessToken:"e919a6f32ce242f5aec22652d9dc1fdb",solution:"7185",options:{container:"map",style:"//minedata.cn/service/solu/style/id/7185",center:[116.1866179,39.992559],zoom:9,minZoom:3,maxZoom:17}},markerClass:[],markerOffset:[50,0],markerLngLat:[116.1866179,39.992559]}},mounted:function(){},components:{MineMap:a.a,MMMarker:i.a,MMPopup:r.a}},o=(n(165),n(0)),p=Object(o.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"demo-container"},[e("MineMap",this._b({},"MineMap",this.mapProps,!1),[e("MMMarker",{attrs:{lnglat:this.markerLngLat,offset:this.markerOffset,anchor:"top-right"}},[e("h3",{staticClass:"marker-base",attrs:{slot:"content"},slot:"content"},[this._v("vue")])])],1)],1)},[],!1,null,"d6816362",null);p.options.__file="AddMarker.vue";e.default=p.exports}}]);