"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5284],{7429:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[t._v(" device : "+t._s(t.device)+" "),e("a",{attrs:{href:"/"+t.device+"/GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,a){return e("li",{key:a},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,a){return e("li",{key:a},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},i=[],c=s(427),r={components:{Inputs:c.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,device:String},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),this.device=device},methods:{}},n=r,l=s(1001),o=(0,l.Z)(n,a,i,!1,null,"14551647",null),d=o.exports},427:function(t,e,s){s.d(e,{Z:function(){return o}});var a=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},i=[],c={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},r=c,n=s(1001),l=(0,n.Z)(r,a,i,!1,null,"566d6e0a",null),o=l.exports},1136:function(t,e,s){s.d(e,{Z:function(){return o}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,a){return e("li",{key:a,class:{current:t.tabidx==a}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=a,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},i=[],c={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,a=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],i=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),c=0,r=0;r=c-a,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?c-=i+r-.1*t.closest(".tab_wrap").offsetWidth:c+=i-r+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+c+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var n=e-s.offsetWidth;c>=0&&(s.style.transform="translate(0, 0)"),c<=n&&(s.style.transform="translate("+n+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,a=0,i=0,c=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var r=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;a=e.touches[0].screenX,i=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;c=parseInt(i)+parseInt(e.touches[0].screenX-a),t.style.transform="translate("+c+"px, 0px)"})),t.addEventListener("touchend",(function(e){c>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(c)>r&&c<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},r=c,n=s(1001),l=(0,n.Z)(r,a,i,!1,null,"a9668034",null),o=l.exports},5284:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"search_wrap"},[e("div",{staticClass:"search_form"},[e("Inputs",{attrs:{input_type:"text",id:"아이디",value:"",placeholder:"검색어를 입력하세요."}}),e("button",{staticClass:"btn_search"},[t._v("검색")])],1)]),e("Tabs",{attrs:{tabClass:"tab_type_03",tab_item:t.tab_item_category,tabidx:t.tabidx},on:{change:t.change}}),e("div",{staticClass:"content"},[e("div",{ref:"brandCollection",staticClass:"brand_collection"},[t._m(0),e("div",{staticClass:"list_total"},[t._l(t.wishBrands,(function(s,a){return[s.checked?e("div",{key:a,staticClass:"wish_item",class:s.new?"new":""},[e("span",{staticClass:"wish_label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.checked,expression:"item.checked"}],staticClass:"input",attrs:{type:"checkbox",id:"wishBrand"+a},domProps:{checked:Array.isArray(s.checked)?t._i(s.checked,null)>-1:s.checked},on:{change:function(e){var a=s.checked,i=e.target,c=!!i.checked;if(Array.isArray(a)){var r=null,n=t._i(a,r);i.checked?n<0&&t.$set(s,"checked",a.concat([r])):n>-1&&t.$set(s,"checked",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(s,"checked",c)}}}),e("label",{staticClass:"label",attrs:{for:"wishBrand"+a}}),e("a",{staticClass:"link pl0",attrs:{href:""}},[t._v(t._s(s.title))])])]):t._e()]})),t._l(t.wishBrands,(function(s,a){return[s.checked?t._e():e("div",{key:a,staticClass:"wish_item",class:s.new?"new":""},[e("span",{staticClass:"wish_label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.checked,expression:"item.checked"}],staticClass:"input",attrs:{type:"checkbox",id:"wishBrand"+a},domProps:{checked:Array.isArray(s.checked)?t._i(s.checked,null)>-1:s.checked},on:{change:function(e){var a=s.checked,i=e.target,c=!!i.checked;if(Array.isArray(a)){var r=null,n=t._i(a,r);i.checked?n<0&&t.$set(s,"checked",a.concat([r])):n>-1&&t.$set(s,"checked",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(s,"checked",c)}}}),e("label",{staticClass:"label",attrs:{for:"wishBrand"+a}}),e("a",{staticClass:"link pl0",attrs:{href:""}},[t._v(t._s(s.title))])])])]}))],2)])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"list_official"},[e("div",{staticClass:"wish_item"},[e("span",{staticClass:"image"},[e("img",{attrs:{src:s(2531),alt:""}})]),e("span",{staticClass:"wish_label"},[e("input",{staticClass:"input",attrs:{type:"checkbox",id:"special01"}}),e("label",{staticClass:"label",attrs:{for:"special01"}}),e("a",{staticClass:"link pl0",attrs:{href:""}},[t._v("FIFA Official Licensed Product")])])]),e("div",{staticClass:"wish_item"},[e("span",{staticClass:"image"},[e("img",{attrs:{src:s(6953),alt:""}})]),e("span",{staticClass:"wish_label"},[e("input",{staticClass:"input",attrs:{type:"checkbox",id:"special02"}}),e("label",{staticClass:"label",attrs:{for:"special02"}}),e("a",{staticClass:"link pl0",attrs:{href:""}},[t._v("BBC earth")])])])])}],c=s(427),r=s(1136),n=s(7429),l={name:"App",components:{Inputs:c.Z,Tabs:r.Z,GoodsItem:n.Z},data(){return{tabidx:0,tab_item_category:[{item:"상품(999)"},{item:"브랜드(999)"},{item:"기획전(999)"}],wishBrands:[{title:"바나나 리퍼블릭",checked:!0},{title:"아디다스 오리지널",checked:!0},{title:"아디다스 퍼포먼스",checked:!0},{title:"컬럼비아 언더",checked:!1},{title:"푸마 바디웨어",checked:!1},{title:"노티카",checked:!1},{title:"띵크",checked:!1},{title:"라코스테",checked:!1},{title:"리복",checked:!1},{title:"리복 스포츠",checked:!1},{title:"리복 키즈",checked:!1},{title:"몽벨 언더웨어",checked:!1},{title:"밀레",checked:!1}]}},methods:{}},o=l,d=s(1001),p=(0,d.Z)(o,a,i,!1,null,"2af87e9b",null),u=p.exports},2531:function(t,e,s){t.exports=s.p+"img/sam_hot_01.6826fbe7.png"},6953:function(t,e,s){t.exports=s.p+"img/sam_hot_02.480d7016.png"}}]);
//# sourceMappingURL=5284.9eafe8d8.js.map