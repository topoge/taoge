import{t as r}from"./tableFlow.31edb31e.js";import{A as c,a as o}from"./Attachment.3fb88322.js";import{n as p}from"./index.621e7bf7.js";import"./datePicker.1a087a29.js";import"./vendor.c31495b0.js";var u=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("el-row",[e("el-col",{attrs:{span:24}},[e("k-search-card",[e("el-col",{staticStyle:{display:"flex","flex-flow":"row wrap",gap:"10px"},attrs:{span:24}},[e("div",{staticStyle:{display:"flex","flex-flow":"row nowrap","justify-content":"space-between","align-items":"center",width:"100%"}},[e("div",{staticStyle:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"10px"}},[e("span",[t._v("\u9009\u62E9\u6807\u7B7E")]),e("el-select",{attrs:{size:"mini",multiple:"",clearable:"",filterable:"","collapse-tags":""},on:{change:t.syncTagSelect},model:{value:t.query.tag,callback:function(a){t.$set(t.query,"tag",a)},expression:"query.tag"}},t._l(t.tagList,function(a,s){return e("el-option",{key:s,attrs:{label:a.tag_name,value:a.id}})}),1),e("el-button",{attrs:{size:"mini",plain:""},on:{click:function(a){return t.expandAllTag()}}},[t._v(t._s(t.showAllTag?"\u5173\u95ED\u5168\u90E8":"\u5C55\u5F00\u5168\u90E8"))])],1),e("div",{staticStyle:{display:"flex","flex-flow":"row nowrap","align-items":"center"}},[e("el-form",{attrs:{inline:""}},[e("el-form-item",{staticStyle:{display:"block"},attrs:{label:"\u9009\u62E9\u7C7B\u522B",size:"small"}},[e("el-select",{staticStyle:{width:"100px"},model:{value:t.query.business_type,callback:function(a){t.$set(t.query,"business_type",a)},expression:"query.business_type"}},t._l(t.$dict.pictureType,function(a,s){return e("el-option",{key:s,attrs:{label:a.label,value:a.value}})}),1)],1)],1),e("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{icon:"el-icon-search",size:"small",type:"primary",loading:t.queryLoading},on:{click:function(a){return t.getPictureList()}}},[t._v("\u67E5\u8BE2")]),e("el-button",{directives:[{name:"throttle",rawName:"v-throttle"}],attrs:{icon:"el-icon-refresh",size:"small",plain:"",type:"",loading:t.queryLoading},on:{click:function(a){t.resetQuery(),t.syncTagSelect(),t.getPictureList()}}},[t._v("\u91CD\u7F6E ")]),e("el-button",{attrs:{icon:"el-icon-plus",size:"small",type:"primary"},on:{click:function(a){t.action="add",t.drawer.visible=!0}}},[t._v("\u65B0\u589E\u56FE\u7247")])],1)]),e("transition",{attrs:{name:"fade"}},[t.showAllTag?e("div",{ref:"allTag",staticClass:"all-tag",staticStyle:{display:"flex","flex-flow":"row wrap","align-items":"center",gap:"10px","margin-top":"10px"}},t._l(t.tagList,function(a,s){return e("el-tag",{key:s,attrs:{effect:a.select?"dark":"plain"},on:{click:function(n){return t.querySelcetTag(a,s)}}},[t._v(t._s(a.tag_name)+" ")])}),1):t._e()])],1)],1),e("el-row",[e("el-col",{staticStyle:{"overflow-y":"auto"},style:{maxHeight:"calc(100vh - 292px - "+(t.showAllTag?t.expandAllTagHeight:0)+"px)"},attrs:{span:24}},[e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.data,function(a,s){return e("div",{key:s,staticClass:"item-image"},[e("el-image",{staticStyle:{width:"100%",height:"100%","margin-bottom":"5px"},attrs:{"preview-src-list":t.imageList,src:t.$config.staticUrl()+a.path,lazy:"",fit:"contain"}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e("span",[t._v("\u52A0\u8F7D\u4E2D"),e("span",{staticClass:"dot"},[t._v("...")])])])]),e("div",{staticClass:"item-image-desc"},[e("span",{staticClass:"el-icon-edit",on:{click:function(n){t.action="edit",t.selectItem=a,t.drawer.visible=!0}}}),e("span",{staticClass:"el-icon-delete",on:{click:function(n){return t.deleteImage({row:a,$index:s})}}})])],1)}),0)],1),e("el-col",{attrs:{span:24}},[e("div",{staticStyle:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end","margin-top":"19px"}},[e("el-pagination",{attrs:{background:"",layout:t.pagination.layout,total:t.total,"current-page":t.pagination.currentPage,"page-size":t.pagination.limit,"page-sizes":t.pagination.pageSizes},on:{"update:currentPage":function(a){return t.$set(t.pagination,"currentPage",a)},"update:current-page":function(a){return t.$set(t.pagination,"currentPage",a)},"update:pageSize":function(a){return t.$set(t.pagination,"limit",a)},"update:page-size":function(a){return t.$set(t.pagination,"limit",a)},"update:pageSizes":function(a){return t.$set(t.pagination,"pageSizes",a)},"update:page-sizes":function(a){return t.$set(t.pagination,"pageSizes",a)},"size-change":function(a){return t.getPictureList()},"current-change":function(a){return t.getPictureList()}}})],1)])],1)],1),e("add-edit-picture",{attrs:{type:t.action,data:t.selectItem},on:{success:t.handleAction},model:{value:t.drawer.visible,callback:function(a){t.$set(t.drawer,"visible",a)},expression:"drawer.visible"}})],1)},g=[];const d={name:"Picture",components:{Attachment:c,AddEditPicture:o},mixins:[r],data(){return{headers:[{label:"\u5E8F\u53F7",type:"index",align:"center"},{label:"id",prop:"id",align:"center"},{label:"\u7C7B\u522B",prop:"business_type"},{label:"\u56FE\u7247",prop:"path"},{label:"\u56FE\u7247\u540D\u79F0",prop:"att_name"},{label:"\u4E0A\u4F20\u65F6\u95F4",prop:"created_at",type:"date"},{label:"\u64CD\u4F5C",prop:"action"}],data:[],form:{att_name:"",type:1,tag:[],file:null},query:{business_type:null},tagList:[],inputVisible:!1,inputValue:"",showAllTag:!1,pagination:{layout:"jumper,prev, pager, next, total,sizes",limit:50,currentPage:1,pageSizes:[10,20,30,40,50,100]},imageList:[],expandAllTagHeight:0}},mounted(){this.getPictureList(),this.getTagAll()},methods:{handleAction(t,i=null){if(t==="add")this.data.unshift(i);else if(t==="edit"){let e=this.data.findIndex(a=>a.id===i.id);this.$set(this.data,e,this.$libs.getAssignKeyData(this.selectItem,i))}},async getPictureInfo(){this.queryLoading=!0;let i=(await this.$api.picture.query(this.selectItem.id)).data;this.$libs.getAssignKeyData(this.form,i),this.queryLoading=!1},async getPictureList(t={page:1,limit:10}){this.loading=!0;try{let i={page:this.pagination.currentPage?this.pagination.currentPage:1,limit:this.pagination.limit?this.pagination.limit:10},e=Object.assign(i,this.$libs.filterNullObject(this.query)),a=await this.$api.picture.batchQuery(e);this.data=a.data.data,this.total=a.data.total,this.imageList=this.data.map(s=>this.$config.staticUrl()+s.path)}catch{}finally{this.loading=!1}},async expandAllTag(){this.showAllTag=!this.showAllTag,await this.$nextTick(()=>{this.$refs.allTag&&setTimeout(()=>{this.expandAllTagHeight=this.$refs.allTag.offsetHeight,console.log(this.expandAllTagHeight)},300)})},async getTagAll(){let t=await this.$api.tag.queryAll({type:"1"});this.tagList=t.data,(async()=>{for(let i of this.form.tag){let e=this.tagList.findIndex(a=>a.id===i);this.tagList[e].select=!0}})()},async selcetTag(t,i){if(t.select=!t.select,this.$set(this.tagList,i,t),t.select)this.form.tag.push(t.id);else{let e=this.form.tag.findIndex(a=>a===t.id);this.form.tag.splice(e,1)}},async querySelcetTag(t,i){if(t.select=!t.select,this.$set(this.tagList,i,t),t.select)this.query.tag.push(t.id);else{let e=this.query.tag.findIndex(a=>a===t.id);this.query.tag.splice(e,1)}},async showInput(){this.inputVisible=!0,this.$nextTick(t=>{this.$refs.saveTagInput.$refs.input.focus()})},async addTag(){let t=this.inputValue;if(t){this.queryLoading=!0;let i={tag_name:t,type:1};try{let e=await this.$api.tag.create(i);this.tagList.push(e.data),this.$message.success(t+"\u6DFB\u52A0\u6210\u529F")}catch{}finally{this.queryLoading=!1}}this.inputVisible=!1,this.inputValue="",this.queryLoading=!1},async syncTagSelect(){for(let t of this.tagList){let i=this.query.tag.findIndex(e=>e===t.id);t.select=i>=0}},async deleteTag(t){this.$tool.confirmWarning("\u786E\u5B9A\u8981\u5220\u9664 "+t.tag_name+"\u6807\u7B7E\u5417\uFF1F").then(async()=>{this.queryLoading=!0;try{await this.$api.tag.delete({id:t.id});let i=this.tagList.findIndex(e=>e.id===t.id);this.tagList.splice(i,1),this.$message.success(t.tag_name+"\u5220\u9664\u6210\u529F")}catch{}finally{this.queryLoading=!1}}).catch(i=>{})},async upload(t){this.form.file=t,console.log(t),this.form.att_name=t.name},async createImage(){this.saveLoading=!0;let t=this.$libs.formatFormData(this.form);try{let i=await this.$api.picture.create(t);this.data.unshift(i.data),this.drawer.visible=!1,this.$message.success("\u65B0\u589E\u6210\u529F")}catch{}finally{this.saveLoading=!1}},async updateImage(){this.saveLoading=!0;let t=Object.assign({},this.form);t.id=this.selectItem.id;try{let i=await this.$api.picture.update(t),e=this.data.findIndex(a=>a.id===t.id);this.$set(this.data,e,this.$libs.getAssignKeyData(this.selectItem,t)),this.drawer.visible=!1,this.$message.success("\u66F4\u65B0\u6210\u529F")}catch{}finally{this.saveLoading=!1}},async deleteImage(t){let i=t.$index;t=t.row,this.$tool.confirmWarning("\u786E\u5B9A\u8981\u5220\u9664"+t.att_name+"\u5417\uFF1F").then(()=>{this.$api.picture.delete({id:t.id}).then(e=>{this.data.splice(i,1),this.$message.success("\u5220\u9664\u6210\u529F")})}).catch(e=>{})}}},l={};var h=p(d,u,g,!1,f,"11d9d9be",null,null);function f(t){for(let i in l)this[i]=l[i]}var _=function(){return h.exports}();export{_ as default};
