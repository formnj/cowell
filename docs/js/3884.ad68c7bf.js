"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[3884],{4781:function(t,e,s){s.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:"/"+t.Path+"/GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},a=[],n=s(427),o={components:{Inputs:n.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,Path:String},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),this.Path=window.location.pathname.split("/")[2],console.log("aaa:",this.Path),"pc"!=this.Path&&""!=this.Path||(this.Path="cowell/pc")},methods:{}},r=o,l=s(1001),c=(0,l.Z)(r,i,a,!1,null,"7b9eb3f2",null),p=c.exports},427:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},a=[],n={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"566d6e0a",null),c=l.exports},1136:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,i){return e("li",{key:i,class:{current:t.tabidx==i}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=i,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},a=[],n={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,i=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],a=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),n=0,o=0;o=n-i,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?n-=a+o-.1*t.closest(".tab_wrap").offsetWidth:n+=a-o+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+n+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var r=e-s.offsetWidth;n>=0&&(s.style.transform="translate(0, 0)"),n<=r&&(s.style.transform="translate("+r+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,i=0,a=0,n=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var o=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;i=e.touches[0].screenX,a=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;n=parseInt(a)+parseInt(e.touches[0].screenX-i),t.style.transform="translate("+n+"px, 0px)"})),t.addEventListener("touchend",(function(e){n>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(n)>o&&n<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"a9668034",null),c=l.exports},3884:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"search_wrap"},[e("div",{staticClass:"search_form"},[e("Inputs",{attrs:{input_type:"text",id:"아이디",value:"",placeholder:"검색어를 입력하세요."}}),e("button",{staticClass:"btn_search"},[t._v("검색")])],1)]),e("Tabs",{attrs:{tabClass:"tab_type_03",tab_item:t.tab_item_category,tabidx:t.tabidx},on:{change:t.change}}),t._m(0),e("div",{staticClass:"content"},[e("section",{staticClass:"best"},[e("h3",[t._v("인기 추천 상품")]),e("swiper",{attrs:{options:t.defaultOptions}},[t._l(t.goods_item_best[0].item,(function(t,s){return e("swiper-slide",{key:s},[e("GoodsItem",{attrs:{item:t,isWish:!0}})],1)})),e("div",{staticClass:"swiper-button-next",attrs:{slot:"pagination"},slot:"pagination"}),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"result_none"},[e("p",[e("em",[t._v('"@@$#%^"')]),t._v("에 대한 검색결과가 없습니다.")])])}],n=s(427),o=s(1136),r=s(4781),l={name:"App",components:{Inputs:n.Z,Tabs:o.Z,GoodsItem:r.Z},data(){return{tabidx:0,tab_item_category:[{item:"상품(999)"},{item:"브랜드(999)"},{item:"기획전(999)"}],defaultOptions:{loop:!0,slidesPerView:6,spaceBetween:20,maxBackfaceHiddenSlides:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},goods_item_best:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}]}},methods:{}},c=l,p=s(1001),d=(0,p.Z)(c,i,a,!1,null,"2bbcf1bc",null),u=d.exports},1989:function(t,e,s){t.exports=s.p+"img/sam_goods_list_01.82c4aa91.jpg"},7999:function(t,e,s){t.exports=s.p+"img/sam_goods_list_02.baf759f0.jpg"}}]);
//# sourceMappingURL=3884.ad68c7bf.js.map