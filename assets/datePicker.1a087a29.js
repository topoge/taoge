var i={data(){return{timeRange:[],dateTime:[],pickerOptions:{shortcuts:[{text:"\u6700\u8FD1\u4E00\u5468",onClick(t){const n=new Date,e=new Date;e.setTime(e.getTime()-3600*1e3*24*7),t.$emit("pick",[e,n])}},{text:"\u6700\u8FD1\u4E00\u4E2A\u6708",onClick(t){const n=new Date,e=new Date;e.setTime(e.getTime()-3600*1e3*24*30),t.$emit("pick",[e,n])}},{text:"\u6700\u8FD1\u4E09\u4E2A\u6708",onClick(t){const n=new Date,e=new Date;e.setTime(e.getTime()-3600*1e3*24*90),t.$emit("pick",[e,n])}}]}}}};export{i as d};
