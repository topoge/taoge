import{t as l}from"./tableFlow.31edb31e.js";import{d as n}from"./datePicker.1a087a29.js";import{n as c}from"./index.621e7bf7.js";import"./vendor.c31495b0.js";var p=function(){var r=this,e=this,s=e.$createElement,t=e._self._c||s;return t("el-row",[t("el-col",{attrs:{span:24}},[t("k-search-card",{scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.getExceptionLogList()}}},[e._v("\u67E5\u8BE2")]),t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{size:"mini"},on:{click:function(a){e.resetQuery(),e.dateTime=[],e.getExceptionLogList()}}},[e._v("\u91CD\u7F6E")])]},proxy:!0}])},[t("el-form",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px"},attrs:{inline:!0,size:"small"},nativeOn:{submit:function(a){a.preventDefault()}}},[t("el-form-item",{attrs:{label:"\u9009\u62E9\u65F6\u95F4"}},[t("el-date-picker",{attrs:{type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",align:"right","value-format":"timestamp"},model:{value:e.dateTime,callback:function(a){e.dateTime=a},expression:"dateTime"}})],1)],1)],1),t("k-table",{attrs:{headers:e.headers,data:e.data,"is-pagination":"",total:e.total,loading:e.loading,toolbar:"",reload:e.getExceptionLogList},on:{changePage:e.getExceptionLogList,"row-click":e.showPayload},scopedSlots:e._u([{key:"item.type",fn:function(a){var i=a.scope;return[i.row.type==="system"?t("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v(e._s(i.row.type))]):t("el-tag",{attrs:{type:"primary",size:"mini"}},[e._v(e._s(i.row.type))])]}}])})],1),t("k-drawer",{attrs:{visible:e.drawer.visible,size:"45%","destroy-on-close":""},on:{"update:visible":function(a){return e.$set(e.drawer,"visible",a)},fullscreen:function(a){r.drawer.span=a?12:20}}},[t("pre",[e._v(e._s(e.selectItem.content))]),t("pre",[e._v(e._s(e.selectItem.request))])])],1)},d=[];const u={name:"ExceptionLog",mixins:[l,n],data(){return{headers:[{label:"\u5F02\u5E38\u7C7B\u578B",prop:"type"},{label:"\u9519\u8BEF\u4EE3\u7801",prop:"code"},{label:"\u9519\u8BEF\u4FE1\u606F",prop:"message",overflow:!0},{label:"\u8BF7\u6C42\u8DEF\u5F84",prop:"path",overflow:!0},{label:"\u8BE6\u7EC6\u8BB0\u5F55",prop:"desc",overflow:!0},{label:"\u8BF7\u6C42\u5185\u5BB9",prop:"request",overflow:!0},{label:"\u65F6\u95F4",prop:"created_at",type:"date",format:"YYYY-MM-DD HH:mm:ss"}],data:[]}},mounted(){this.getExceptionLogList()},methods:{async getExceptionLogList(r={page:1,limit:10}){this.loading=!0;try{this.dateTime.length!==0&&(this.query.start_time=this.dateTime[0]/1e3,this.query.end_time=this.dateTime[1]/1e3);let e=Object.assign(r,this.$libs.filterNullObject(this.query)),s=await this.$api.exceptionLog.batchQuery(e);this.data=s.data.data,this.total=s.data.total}catch{}finally{this.loading=!1}},showPayload(r){this.selectItem=r;try{let e=JSON.parse(r.desc),s=JSON.parse(r.request);this.selectItem.content=JSON.stringify(e,null,2),this.selectItem.request=JSON.stringify(s,null,2)}catch{this.selectItem.content=r.desc.split("-"),this.selectItem.request=r.desc.split("-")}this.drawer.visible=!0}}},o={};var m=c(u,p,d,!1,h,"80009a84",null,null);function h(r){for(let e in o)this[e]=o[e]}var y=function(){return m.exports}();export{y as default};
