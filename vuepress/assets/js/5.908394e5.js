(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(t,e,i){},145:function(t,e,i){"use strict";var n=i(143);i.n(n).a},146:function(t,e,i){"use strict";i(22),i(144),i(23),i(21);var n=[];function a(t){return n.filter(function(e){return e.id===t})[0].mapInstace}var o={name:"MineMap",provide:function(){return{getMap:this.getMap}},props:{accessToken:{type:String,required:!0},solution:{type:[String,Number],required:!0},options:{type:Object,required:!0}},data:function(){return{isMapLoaded:!1}},mounted:function(){this.initMap()},beforeDestroy:function(){this.rmMap()},methods:{initMap:function(){var t=this,e=e||window.minemap,i=this.accessToken,a=this.solution,o=this.options;e.accessToken=i,e.solution=a,this.rmMap(),this.isMapLoaded=!1,this.map=new e.Map(o),n.push({id:this.options.container,mapInstace:this.map}),this.map.on("load",function(){t.$emit("map-load",t.map),t.isMapLoaded=!0})},rmMap:function(){this.map&&(this.map.remove(),this.map=null,function(t){var e=null;n.forEach(function(i,n){i.id===t&&(e=n)}),n.splice(e,1)}(this.solution))},getMap:function(){return this.map}},watch:{solution:function(){this.initMap()}}},r=(i(145),i(0));i.d(e,"b",function(){return a});var s=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vue-minemap",attrs:{id:this.options.container}},[this._t("default")],2)},[],!1,null,"bcf1cc58",null);s.options.__file="MineMap.vue";e.a=s.exports},150:function(t,e,i){},151:function(t,e,i){},152:function(t,e,i){},157:function(t,e,i){"use strict";var n=i(150);i.n(n).a},158:function(t,e,i){"use strict";var n=i(151);i.n(n).a},161:function(t,e,i){"use strict";var n=i(152);i.n(n).a},164:function(t,e,i){"use strict";i.r(e);i(21),i(22),i(50);var n={name:"MMSource",inject:["getMap"],provide:function(){return{sourceId:this.id}},data:function(){return{isSourceLoaded:!1}},props:{id:{type:String,required:!0},options:{type:Object,required:!0},mapInstace:{type:Object}},mounted:function(){var t=this;"MineMap"===this.$parent.$options.name?(this.$parent.$on("map-load",function(e){t.map=e,t.addSource()}),this.$parent.isMapLoaded&&(this.map=this.getMap(),this.addSource())):(this.map=this.mapInstace,this.addSource())},beforeDestroy:function(){this.rmSource()},methods:{addSource:function(){var t=this.id,e=this.options,i=this.map;i&&(i.getSource(t)&&i.removeSource(t),i.addSource(t,e),this.$emit("source-load",i),this.isSourceLoaded=!0)},rmSource:function(){var t=this.id,e=this.map;e&&e.removeSource(t)}},watch:{options:{deep:!0,handler:function(){this.rmSource(),this.addSource()}}}},a=(i(157),i(0)),o=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)},[],!1,null,"9ac5276c",null);o.options.__file="MMSource.vue";var r=o.exports,s=(i(17),i(24),i(14),i(23),{name:"MMLayer",inject:["sourceId","getMap"],props:{id:{type:String,required:!0},type:{type:String,required:!0},sourceLayer:{type:String,default:""},layout:{type:Object,default:null},paint:{type:Object,default:null},filter:{type:Array,default:null}},data:function(){return{}},mounted:function(){var t=this;this.$parent.$on("source-load",function(e){setTimeout(function(){t.map=e,t.addLayer()},0)}),this.$parent.isSourceLoaded&&(this.map=this.getMap,this.addLayer())},beforeDestroy:function(){this.rmLayer()},computed:{layerOptions:function(){var t=this,e={id:this.id,source:this.sourceId,type:this.type};return["paint","layout","filter"].forEach(function(i){t[i]&&(e[i]=t[i])}),this.sourceLayer&&(e["source-layer"]=this.sourceLayer),e}},methods:{addLayer:function(){var t=this.map,e=this.id,i=this.layerOptions;t&&(t.getLayer(e)&&this.rmLayer(),t.addLayer(i))},rmLayer:function(){var t=this.map;t&&t.removeLayer(this.id)}},watch:{layout:{deep:!0,handler:function(t,e){var i=this;Object.keys(t).forEach(function(e){i.map.setLayoutProperty(i.id,e,t[e])})}},paint:{deep:!0,handler:function(t,e){var i=this;Object.keys(t).forEach(function(e){i.map.setPaintProperty(i.id,e,t[e])})}},filter:{deep:!0,handler:function(t,e){this.map.setFilter(this.id,this.filter)}}}}),c=(i(158),Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,"848ae11c",null));c.options.__file="MMLayer.vue";var u=c.exports,p=i(146),d=i(159),l=i.n(d),h={name:"MoveLayer",data:function(){return{show:!0,id:0,mapProps:{accessToken:"e919a6f32ce242f5aec22652d9dc1fdb",solution:"7185",options:{container:"map",style:"//minedata.cn/service/solu/style/id/7185",center:[116.1866179,39.992559],zoom:9,minZoom:3,maxZoom:17}},layerList:[]}},mounted:function(){},components:{MMSource:r,MMLayer:u,MineMap:p.a,Vdrag:l.a},methods:{onDelClick:function(t){this.layerList=this.layerList.filter(function(e,i){return i!==t})},onDragEnd:function(){var t=this;this.show=!1,this.$nextTick(function(){t.show=!0})},onAdd:function(){var t=function(t){return parseInt(Math.random()*t)},e="rgb(".concat(t(255),",").concat(t(255),",").concat(t(255),")"),i=t(100),n=this.id++;this.layerList.push({sourceId:n+"",sourceOp:{type:"geojson",data:{type:"Point",coordinates:[116.1866179,39.992559]}},layerOp:{id:n+"",type:"circle",paint:{"circle-radius":i,"circle-color":e}}})},onInputChange:function(t,e){this.layerList[t].layerOp.paint["circle-radius"]=parseInt(e.target.value)}}},f=(i(161),Object(a.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"demo-container"},[i("MineMap",t._b({on:{click:function(t){},onload:function(t){}}},"MineMap",t.mapProps,!1),t._l(t.layerList,function(e,n){return t.show?i("MMSource",{key:e.sourceId,attrs:{id:e.sourceId,options:e.sourceOp}},[i("MMLayer",t._b({},"MMLayer",e.layerOp,!1))],1):t._e()})),t._v(" "),i("div",{staticClass:"action-panel"},[i("Vdrag",{staticClass:"layer-list",on:{end:t.onDragEnd},model:{value:t.layerList,callback:function(e){t.layerList=e},expression:"layerList"}},t._l(t.layerList,function(e,n){return i("div",{key:e.sourceId,style:{color:e.layerOp.paint["circle-color"]}},[i("div",{staticClass:"panel-row"},[t._v("\n          "+t._s(e.sourceId)+"\n          "),i("button",{on:{click:function(e){t.onDelClick(n)}}},[t._v("X")])]),t._v(" "),i("div",{staticClass:"panel-row"},[t._v("\n          radius: "),i("input",{attrs:{type:"text"},domProps:{value:e.layerOp.paint["circle-radius"]},on:{change:function(e){t.onInputChange(n,e)}}})])])})),t._v(" "),i("button",{staticClass:"add-layer",on:{click:t.onAdd}},[t._v("添加")])],1)],1)},[],!1,null,"4b55b735",null));f.options.__file="MoveLayer.vue";e.default=f.exports}}]);