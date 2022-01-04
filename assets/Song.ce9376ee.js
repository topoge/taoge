import{t as m}from"./tableFlow.31edb31e.js";import{A as f}from"./AttachmentDialog.c144c957.js";import{d as h}from"./datePicker.1a087a29.js";import{T as g}from"./TreeSelect.ebdd8ea4.js";import{n as o,o as n,s as y}from"./index.621e7bf7.js";import{d as v}from"./Attachment.3fb88322.js";import"./vendor.c31495b0.js";var _=function(){var a=this,e=this,i=e.$createElement,t=e._self._c||i;return t("k-drawer",{attrs:{visible:e.visible,title:e.title,size:"35%","destroy-on-close":""},on:{"update:visible":function(s){e.visible=s},fullscreen:function(s){a.span=s?12:20},closed:e.resetForm},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{attrs:{size:"mini"},on:{click:function(s){e.visible=!1}}},[e._v("\u53D6 \u6D88")]),t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{size:"mini",type:"primary",loading:e.saveLoading},on:{click:function(s){e.type==="edit"?e.updateCategory():e.createCategory()}}},[e._v("\u4FDD \u5B58")])]},proxy:!0}])},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:e.span}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"small"}},[t("el-form-item",{attrs:{label:"\u7236\u7EA7\u5206\u7C7B"}},[t("el-select",{attrs:{disabled:""},model:{value:e.form.parent_id,callback:function(s){e.$set(e.form,"parent_id",s)},expression:"form.parent_id"}},[t("el-option",{attrs:{label:"\u9876\u7EA7\u5206\u7C7B",value:0}}),t("el-option",{attrs:{label:e.type!=="edit"?e.data.cate_name:e.parentNode.cate_name,value:e.type!=="edit"?e.data.id:e.parentNode.id}})],1)],1),t("el-form-item",{attrs:{label:"\u5206\u7C7B\u7EA7\u522B"}},[t("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9",disabled:""},model:{value:e.form.level,callback:function(s){e.$set(e.form,"level",s)},expression:"form.level"}},[t("el-option",{attrs:{label:"\u9876\u7EA7\u6743\u9650",value:1}})],1)],1),t("el-form-item",{attrs:{label:"\u6392\u5E8F"}},[t("el-input-number",{attrs:{min:0,max:255,label:"\u6392\u5E8F",size:"mini"},model:{value:e.form.sort,callback:function(s){e.$set(e.form,"sort",s)},expression:"form.sort"}})],1),t("el-form-item",{attrs:{label:"\u7F6E\u9876\u663E\u793A"}},[t("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.is_top,callback:function(s){e.$set(e.form,"is_top",s)},expression:"form.is_top"}})],1),t("el-form-item",{attrs:{label:"\u5206\u7C7B\u540D\u79F0",required:""}},[t("el-input",{model:{value:e.form.cate_name,callback:function(s){e.$set(e.form,"cate_name",s)},expression:"form.cate_name"}})],1),t("el-form-item",{attrs:{label:"\u63CF\u8FF0"}},[t("el-input",{model:{value:e.form.desc,callback:function(s){e.$set(e.form,"desc",s)},expression:"form.desc"}})],1),t("el-form-item",{attrs:{label:"\u662F\u5426\u542F\u7528"}},[t("el-radio-group",{model:{value:e.form.status,callback:function(s){e.$set(e.form,"status",s)},expression:"form.status"}},[t("el-radio",{attrs:{label:1}},[e._v("\u542F\u7528")]),t("el-radio",{attrs:{label:0}},[e._v("\u7981\u7528")])],1)],1)],1)],1)],1)],1)},b=[];const w={name:"AddEditSongCategory",mixins:[v],props:{categoryList:{type:Array,default:[]}},data(){return{form:{type:1,cate_name:"",desc:"",parent_id:"",level:1,sort:0,is_top:0,status:1},parentNode:{}}},watch:{async value(a,e){if(a){if(this.type==="add")this.title="\u65B0\u589E\u6B4C\u66F2\u5206\u7C7B",this.form.parent_id=0,this.form.level=1;else if(this.type==="addChild")this.title="\u65B0\u589E\u6B4C\u66F2\u5B50\u5206\u7C7B",this.form.parent_id=this.data.id,this.form.level=this.data.level+1;else if(this.type==="edit"){this.title="\u7F16\u8F91\u6B4C\u66F2\u5206\u7C7B";let i=this.categoryList.findIndex(t=>this.data.parent_id===t.id);this.parentNode=i!==-1?this.categoryList[i]:{},this.form=this.$libs.getAssignKeyData(this.form,this.data)}}else this.resetForm()}},methods:{async createCategory(){this.saveLoading=!0;try{let a=await this.$api.category.create(this.form);this.categoryList.push(a.data),this.$emit("success",this.type,a.data),this.visible=!1,this.$message.success("\u521B\u5EFA\u6210\u529F")}catch(a){console.log(a)}finally{this.saveLoading=!1}},async updateCategory(){this.saveLoading=!0;let a=Object.assign({},this.form);a.id=this.data.id;try{let e=await this.$api.category.update(a);this.$emit("success",this.type,a),this.visible=!1,this.$message.success("\u66F4\u65B0\u6210\u529F")}catch{}finally{this.saveLoading=!1}}}},c={};var $=o(w,_,b,!1,x,"16dc1db6",null,null);function x(a){for(let e in c)this[e]=c[e]}var d=function(){return $.exports}(),k=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("el-card",{attrs:{shadow:"never"}},[i("div",{staticClass:"flex-row",staticStyle:{"align-items":"center","justify-content":"space-between"}},[i("span",[a._v("\u6B4C\u66F2\u5206\u7C7B")]),i("div",[i("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"text"},on:{click:function(t){a.action="add",a.drawer=!0}}},[a._v("\u589E\u52A0\u9876\u7EA7\u5206\u7C7B")]),i("el-button",{attrs:{icon:"el-icon-delete",size:"mini",type:"text"},on:{click:a.batchDeleteCategory}})],1)]),i("el-tree",{ref:"tree",attrs:{props:{label:"cate_name"},data:a.treeCategoryList,"node-key":"id","highlight-current":"","default-expand-all":"","show-checkbox":""},scopedSlots:a._u([{key:"default",fn:function(t){var s=t.node,r=t.data;return i("div",{staticClass:"flex-row",staticStyle:{"align-items":"center","justify-content":"space-between",width:"100%"}},[i("span",[a._v(a._s(s.label))]),i("div",[i("el-button",{attrs:{icon:"el-icon-plus",type:"text",size:"mini"},on:{click:function(l){l.stopPropagation(),a.action="addChild",a.selectItem=r,a.drawer=!0}}}),i("el-button",{attrs:{icon:"el-icon-edit",type:"text",size:"mini"},on:{click:function(l){l.stopPropagation(),a.action="edit",a.selectItem=r,a.drawer=!0}}}),i("el-button",{attrs:{icon:"el-icon-delete",type:"text",size:"mini",disabled:a.deleteLoading,loading:a.deleteLoading},on:{click:function(l){l.stopPropagation(),a.action="delete",a.selectItem=r,a.deleteCategory(r)}}})],1)])}}])}),a.categoryList?a._e():i("span",{staticStyle:{display:"inline-block",width:"100%","text-align":"center"}},[a._v("\u6682\u65E0\u5206\u7C7B")]),i("add-edit-song-category",{attrs:{type:a.action,data:a.selectItem,"category-list":a.categoryList},on:{success:a.handleAction},model:{value:a.drawer,callback:function(t){a.drawer=t},expression:"drawer"}})],1)},L=[];const S={name:"Category",components:{AddEditSongCategory:d},data(){return{action:"add",drawer:!1,deleteLoading:!1,selectItem:{},categoryList:[],treeCategoryList:[]}},mounted(){this.getCategoryList()},methods:{handleAction(a,e=null){a==="add"?this.$refs.tree.append(e,0):a==="addChild"?this.$refs.tree.append(e,this.selectItem.id):a==="edit"&&(console.log("edit"),this.selectItem=this.$libs.getAssignKeyData(this.selectItem,e))},async getCategoryList(){this.queryLoading=!0;try{let a=await this.$api.category.queryAll({type:1});this.categoryList=a.data,this.treeCategoryList=this.$libs.formatTreeData(JSON.parse(JSON.stringify(this.categoryList)),0,"title","cate_name")}catch{}finally{this.queryLoading=!1}},async deleteCategory(a){this.$tool.confirmWarning("\u786E\u5B9A\u8981\u5220\u9664"+a.cate_name+"\u5417\uFF1F\u5C06\u4F1A\u8FDE\u540C\u5B50\u5206\u7C7B\u4E00\u8D77\u5220\u9664\uFF01").then(()=>{this.deleteLoading=!0,this.$api.category.delete({id:a.id}).then(e=>{this.$refs.tree.remove(a.id),this.$message.success("\u5220\u9664\u6210\u529F"),this.deleteLoading=!1})}).catch(e=>{})},async batchDeleteCategory(){try{await this.$tool.confirmWarning("\u786E\u5B9A\u8981\u6279\u91CF\u5220\u9664\u591A\u9879\u5417\uFF1F\u5C06\u4F1A\u8FDE\u540C\u5B50\u5206\u7C7B\u4E00\u8D77\u5220\u9664\uFF01"),this.deleteLoading=!0;let a=this.$refs.tree.getCheckedKeys();await this.$api.category.batchDelete({ids:a}),a.map(e=>{this.$refs.tree.remove(e)}),this.$message.success("\u5220\u9664\u6210\u529F")}catch{}finally{this.deleteLoading=!1}}}},u={};var q=o(S,k,L,!1,C,"78557362",null,null);function C(a){for(let e in u)this[e]=u[e]}var z=function(){return q.exports}(),I=function(){var a=this,e=this,i=e.$createElement,t=e._self._c||i;return t("el-row",[t("el-col",{attrs:{span:24}},[t("k-search-card",{scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{size:"mini",type:"primary"},on:{click:function(s){return e.getSongList()}}},[e._v("\u67E5\u8BE2")]),t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{size:"mini"},on:{click:function(s){e.resetQuery(),e.dateTime=[],e.getSongList()}}},[e._v("\u91CD\u7F6E")])]},proxy:!0}])},[t("el-form",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px"},attrs:{inline:!0,size:"small"},nativeOn:{submit:function(s){s.preventDefault()}}},[t("el-form-item",{attrs:{label:"\u662F\u5426\u5DF2\u552E"}},[t("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"\u8BF7\u9009\u62E9",size:"small"},model:{value:e.query.is_buy,callback:function(s){e.$set(e.query,"is_buy",s)},expression:"query.is_buy"}},[t("el-option",{attrs:{label:"\u672A\u552E",value:0}}),t("el-option",{attrs:{label:"\u5DF2\u552E",value:1}})],1)],1),t("el-form-item",{attrs:{label:"\u9009\u62E9\u65F6\u95F4"}},[t("el-date-picker",{attrs:{type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",align:"right","value-format":"timestamp"},model:{value:e.dateTime,callback:function(s){e.dateTime=s},expression:"dateTime"}})],1),t("el-form-item",{attrs:{label:"\u6B4C\u66F2\u540D\u79F0"}},[t("el-input",{attrs:{maxlength:"32"},model:{value:e.query.song_name,callback:function(s){e.$set(e.query,"song_name",s)},expression:"query.song_name"}})],1),t("el-form-item",{attrs:{label:"\u4EF7\u683C\u533A\u95F4"}},[t("div",{staticStyle:{display:"flex","flex-flow":"row nowrap",gap:"10px"}},[t("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:e.query.start_price,callback:function(s){e.$set(e.query,"start_price",e._n(typeof s=="string"?s.trim():s))},expression:"query.start_price"}}),e._v(" \u2014 "),t("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:e.query.end_price,callback:function(s){e.$set(e.query,"end_price",e._n(typeof s=="string"?s.trim():s))},expression:"query.end_price"}})],1)])],1)],1),t("el-row",{attrs:{type:"flex",gutter:10}},[t("el-col",{staticClass:"tree-list",staticStyle:{"min-width":"300px"},attrs:{span:4}},[t("category",{ref:"showTree"})],1),t("el-col",{staticStyle:{"min-width":"500px"},attrs:{span:20}},[t("k-table",{attrs:{"table-name":"\u6B4C\u66F2\u6570\u636E",headers:e.headers,data:e.data,"is-pagination":"",total:e.total,"zoom-height":96,loading:e.loading,toolbar:"",reload:e.getSongList},on:{changePage:function(s){a.page=s,a.getSongList()},"selection-change":function(s){a.multipleSelection=s},"sort-change":function(s){a.sortHandle(s),a.getSongList()}},scopedSlots:e._u([{key:"header",fn:function(){return[t("el-row",{attrs:{type:"flex"}},[t("el-col",[t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(s){return e.handleAction("create")}}},[e._v("\u65B0\u589E\u6B4C\u66F2")]),t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{type:"danger",size:"small",plain:"",disabled:e.deleteLoading,loading:e.deleteLoading},on:{click:e.batchDelete}},[e._v("\u6279\u91CF\u5220\u9664 ")])],1)],1)]},proxy:!0},{key:"item.select",fn:function(s){var r=s.scope;return[t("el-button",{staticClass:"smini-btn",attrs:{size:"mini",type:"primary"},on:{click:function(l){e.$emit("select",Object.assign({},r.row))}}},[e._v("\u9009\u62E9")])]}},{key:"item.song_cover",fn:function(s){var r=s.scope;return[r.row.song_cover?t("el-image",{staticClass:"table-logo",attrs:{src:e.$config.staticUrl()+r.row.song_cover,fit:"contain",previewSrcList:[e.$config.staticUrl()+r.row.song_cover]}}):e._e()]}},{key:"item.file",fn:function(s){var r=s.scope;return[t("span",{staticClass:"material-icons",on:{click:function(l){e.selectItem=r.row,e.preview.visible=!0}}},[e._v("play_circle_outline")])]}},{key:"item.price",fn:function(s){var r=s.scope;return[t("el-tag",{attrs:{type:"warning",size:"mini"}},[e._v(e._s(r.row.price))])]}},{key:"item.is_buy",fn:function(s){var r=s.scope;return[r.row.is_buy===0?t("el-tag",{attrs:{type:"success",size:"mini"}},[e._v("\u672A\u552E")]):e._e(),r.row.is_buy===1?t("el-tag",{attrs:{type:"danger",size:"mini"}},[e._v("\u5DF2\u552E")]):e._e()]}},{key:"item.status",fn:function(s){var r=s.scope;return[t("el-switch",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{"active-value":1,"inactive-value":0},on:{change:function(l){return e.switchStatus("status",l,r.row)}},model:{value:r.row.status,callback:function(l){e.$set(r.row,"status",l)},expression:"scope.row.status"}})]}},{key:"item.action",fn:function(s){var r=s.scope;return[t("el-button",{attrs:{icon:"el-icon-edit",circle:"",size:"mini",type:"primary",plain:""},on:{click:function(l){return e.handleAction("update",r.row)}}}),t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{icon:"el-icon-delete",circle:"",size:"mini",type:"danger",plain:""},on:{click:function(l){return e.deleteSong(r)}}})]}}])})],1)],1)],1),t("k-preview",{attrs:{show:e.preview.visible,title:e.selectItem.song_name,type:"audio",src:e.selectItem.file},on:{"update:show":function(s){return e.$set(e.preview,"visible",s)}}}),t("AttachmentDialog",{attrs:{visible:e.attachment.visible},on:{"update:visible":function(s){return e.$set(e.attachment,"visible",s)},select:e.selcetImage}}),t("k-drawer",{attrs:{visible:e.drawer.visible,title:e.drawer.title,size:"45%","destroy-on-close":""},on:{"update:visible":function(s){return e.$set(e.drawer,"visible",s)},fullscreen:function(s){a.drawer.span=s?12:20},closed:e.resetForm},scopedSlots:e._u([{key:"footer",fn:function(){return[t("el-button",{attrs:{size:"small"},on:{click:function(s){e.drawer.visible=!1}}},[e._v("\u53D6\u6D88")]),t("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{size:"small",type:"primary",loading:e.saveLoading},on:{click:function(s){e.drawer.type==="update"?e.updateSong():e.createSong()}}},[e._v("\u4FDD\u5B58")])]},proxy:!0}])},[t("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.queryLoading,expression:"queryLoading"}],attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:e.drawer.span}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px",size:"small"}},[t("el-form-item",{attrs:{label:"\u6B4C\u66F2\u7C7B\u522B",prop:"category"}},[t("div",{staticStyle:{"max-height":"200px",overflow:"auto","line-height":"1"}},[t("el-tree",{ref:"tree",attrs:{"default-checked-keys":e.form.category,props:{label:"cate_name"},data:e.categoryList,"node-key":"id","show-checkbox":""}})],1)]),t("el-form-item",{attrs:{label:"\u6B4C\u66F2\u5C01\u9762",prop:"song_cover"},on:{click:function(s){s.stopPropagation()}}},[t("k-upload-image",{ref:"upload",attrs:{upload:function(){},disabled:!0},on:{delete:function(s){e.form.song_cover=""},click:e.uploadCover}})],1),e.drawer.type==="create"?t("el-form-item",{attrs:{label:"\u6B4C\u66F2\u6587\u4EF6",prop:"file"}},[t("el-upload",{attrs:{action:"#","auto-upload":!1,"show-file-list":"","on-change":e.uploadFile,"on-remove":e.removeFile,accept:"audio/mpeg","file-list":e.fileList}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("\u70B9\u51FB\u4E0A\u4F20")]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\u53EA\u80FD\u4E0A\u4F20mp3\u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC710M")])],1)],1):e._e(),t("el-form-item",{attrs:{label:"\u6B4C\u66F2\u540D\u79F0",prop:"song_name"}},[t("el-input",{model:{value:e.form.song_name,callback:function(s){e.$set(e.form,"song_name",s)},expression:"form.song_name"}})],1),t("el-form-item",{attrs:{label:"\u6B4C\u66F2\u4ECB\u7ECD"}},[t("el-input",{model:{value:e.form.desc,callback:function(s){e.$set(e.form,"desc",s)},expression:"form.desc"}})],1),t("el-form-item",{attrs:{label:"\u6F14\u5531"}},[t("el-input",{model:{value:e.form.singer,callback:function(s){e.$set(e.form,"singer",s)},expression:"form.singer"}})],1),t("el-form-item",{attrs:{label:"\u4F5C\u8BCD"}},[t("el-input",{model:{value:e.form.lyricist,callback:function(s){e.$set(e.form,"lyricist",s)},expression:"form.lyricist"}})],1),t("el-form-item",{attrs:{label:"\u4F5C\u66F2"}},[t("el-input",{model:{value:e.form.composer,callback:function(s){e.$set(e.form,"composer",s)},expression:"form.composer"}})],1),t("el-form-item",{attrs:{label:"\u4EF7\u683C",prop:"price"}},[t("el-input",{attrs:{type:"number"},model:{value:e.form.price,callback:function(s){e.$set(e.form,"price",e._n(s))},expression:"form.price"}})],1),t("el-form-item",{attrs:{label:"\u6B4C\u8BCD"}},[t("el-input",{attrs:{type:"textarea",maxlength:"2048","show-word-limit":"",rows:5},model:{value:e.form.lyrics,callback:function(s){e.$set(e.form,"lyrics",s)},expression:"form.lyrics"}})],1),t("el-form-item",{attrs:{label:"\u662F\u5426\u4E0A\u67B6"}},[t("el-radio-group",{model:{value:e.form.status,callback:function(s){e.$set(e.form,"status",s)},expression:"form.status"}},[t("el-radio",{attrs:{label:1}},[e._v("\u4E0A\u67B6")]),t("el-radio",{attrs:{label:0}},[e._v("\u4E0B\u67B6")])],1)],1)],1)],1)],1)],1)],1)},A=[];const j={name:"Song",components:{Category:z,AddEditSongCategory:d,TreeSelect:g,AttachmentDialog:f},mixins:[m,h],props:{isComponent:{type:Boolean,default:!1},buyId:{type:Number}},data(){return{headers:[{label:"\u9009\u62E9",type:"selection",export:!1},{label:"id",prop:"id",width:50},{label:"\u6B4C\u66F2",prop:"song_name",tooltip:!0},{label:"\u5C01\u9762",prop:"song_cover",width:50},{label:"\u97F3\u4E50",prop:"file",width:50},{label:"\u6F14\u5531",prop:"singer"},{label:"\u4F5C\u8BCD",prop:"lyricist"},{label:"\u4F5C\u66F2",prop:"composer"},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"created_at",type:"date"},{label:"\u4EF7\u683C",prop:"price",sortable:"custom"},{label:"\u662F\u5426\u5DF2\u552E",prop:"is_buy",func:a=>a.is_buy===1?"\u662F":"\u5426"},{label:"\u662F\u5426\u4E0A\u67B6",prop:"status",func:a=>a.status===1?"\u662F":"\u5426"},{label:"\u64CD\u4F5C",prop:"action",hidden:this.isComponent}],data:[],query:{is_buy:null,start_time:null,end_time:null,song_name:null,start_price:null,end_price:null,category:null},form:{song_name:"",song_cover:"",singer:"",lyricist:"",composer:"",lyrics:"",price:null,status:1,desc:"",category:[],file:null},rules:{song_name:[{required:!0,message:"\u8BF7\u586B\u5199\u6B4C\u66F2\u540D\u79F0",trigger:"blur"}],category:[{required:!0,message:"\u8BF7\u9009\u62E9\u6B4C\u66F2\u5206\u7C7B",trigger:"blur"}],file:[{required:!0,message:"\u8BF7\u9009\u62E9\u6B4C\u66F2\u6587\u4EF6",trigger:"blur"}],song_cover:[{required:!0,message:"\u8BF7\u9009\u62E9\u6B4C\u66F2\u5C01\u9762",trigger:"blur"}],price:[{required:!0,message:"\u8BF7\u8BBE\u7F6E\u6B4C\u66F2\u4EF7\u683C",trigger:"blur"}]},preview:{visible:!1},attachment:{visible:!1},categoryList:[],fileList:[],multipleSelection:[],categoryDrawer:{visible:!1}}},async mounted(){this.isComponent,await this.getCategoryList(),this.getSongList()},methods:{handleAction(a,e=null){this.drawer.type=a,a==="create"?this.drawer.title="\u65B0\u589E\u6B4C\u66F2":a==="update"&&(this.selectItem=e,this.getSongInfo(),this.drawer.title="\u66F4\u65B0\u6B4C\u66F2"),this.getCategoryList(),this.drawer.visible=!0},async getCategoryList(){this.queryLoading=!0;try{let a=await this.$api.category.queryAll({type:1});this.categoryList=this.$libs.formatTreeData(JSON.parse(JSON.stringify(a.data)),0,"title","cate_name")}catch{}finally{this.queryLoading=!1}},async getSongInfo(){this.queryLoading=!0;let e=(await this.$api.song.query(this.selectItem.id)).data;this.$libs.getAssignKeyData(this.form,e),this.$refs.upload.cropPreview=e.song_cover?this.$config.staticUrl()+e.song_cover:"",this.queryLoading=!1},async getSongList(){this.loading=!0,this.query.category=this.$refs.showTree.$refs.tree.getCheckedKeys(),this.query.category=this.query.category?this.query.category:null;try{if(this.dateTime.length!==0&&(this.query.start_time=this.dateTime[0]/1e3,this.query.end_time=this.dateTime[1]/1e3),this.query.end_price>this.query.start_price){let i=this.query.start_price;this.query.start_price=this.query.end_price,this.query.end_price=i}let a=this.queryMerge(),e=await this.$api.song.batchQuery(a);this.data=e.data.data,this.total=e.data.total}catch{}finally{this.loading=!1}},async createSong(){this.form.category=this.$refs.tree.getCheckedKeys();let a;if(this.$refs.form.validate(t=>{a=t}),!a)return;this.saveLoading=!0;let e=Object.assign({},this.form),i="";try{const t=new Blob([e.file],{type:e.file.type});new FormData().append("file",t,e.file.name);let r=await n.songPutSignedUrl(),l=r.data.url;await n.putObject(l,t,{headers:{"Content-Type":e.file.type}}),i=r.data.path}catch{this.$message.error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25");return}finally{this.saveLoading=!1}try{e.file=i;let t=this.$libs.formatFormData(e),r=(await this.$api.song.create(t)).data;r.status=Number(r.status),e.is_buy=0,this.data.unshift(Object.assign(e,r)),this.drawer.visible=!1,this.$message.success("\u65B0\u589E\u6210\u529F")}catch{}finally{this.saveLoading=!1}},async updateSong(){this.saveLoading=!0;let a=Object.assign({},this.form);a.id=this.selectItem.id,a.category=this.$refs.tree.getCheckedKeys();try{let e=await this.$api.song.update(a),i=this.data.findIndex(t=>t.id===a.id);this.$set(this.data,i,this.$libs.getAssignKeyData(this.selectItem,a)),this.drawer.visible=!1,this.$message.success("\u66F4\u65B0\u6210\u529F")}catch{}finally{this.saveLoading=!1}},async deleteSong(a){let e=a.$index;a=a.row,this.$tool.confirmWarning("\u786E\u5B9A\u8981\u5220\u9664"+a.song_name+"\u5417\uFF1F").then(()=>{this.$api.song.delete({id:a.id}).then(i=>{this.data.splice(e,1),this.$message.success("\u5220\u9664\u6210\u529F")})}).catch(i=>{})},async uploadCover(){this.attachment.visible=!0},async selcetImage(a){this.form.song_cover=a.path,this.$refs.upload.cropPreview=this.$config.staticUrl()+a.path},async switchStatus(a,e,i){let t={id:i.id};t[a]=e,this.$api.song.update(t).then(s=>{this.$message.success("\u66F4\u65B0\u6210\u529F")}).catch(s=>{i.status=e===0?1:0})},async uploadFile(a){if(a.raw.size/1024/1024>10){this.$message.warning("\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC710M");return}this.form.file=a.raw},async removeFile(a){this.form.song_name="",this.form.file={}},async batchDelete(){if(this.multipleSelection.length<=0){this.$message.warning("\u8BF7\u5148\u9009\u62E9\u6B4C\u66F2");return}this.$tool.confirmWarning("\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u6B4C\u66F2\u5417\uFF1F").then(async()=>{this.deleteLoading=!0;try{let a=this.multipleSelection.map(i=>i.id),e=await y.batchDelete({ids:a});this.data=this.data.filter(i=>a.indexOf(i.id)===-1),this.$message.success("\u6279\u91CF\u5220\u9664\u6210\u529F")}catch{}finally{this.deleteLoading=!1}}).catch(()=>{})}}},p={};var D=o(j,I,A,!1,N,"7970eb81",null,null);function N(a){for(let e in p)this[e]=p[e]}var U=function(){return D.exports}();export{U as default};
