"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[3486],{5907:function(t,e,s){s.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,a){return e("li",{key:a},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,a){return e("li",{key:a},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},i=[],o=s(427),n={components:{Inputs:o.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,path:"teste"},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),path=window.location.pathname.split("/")[1],"pc"!=path&&void 0!=path&&""!=path&&"Guide"!=path||(this.path="/pc/"),"mo"==path&&(this.path="/mo/")},methods:{}},l=n,r=s(1001),c=(0,r.Z)(l,a,i,!1,null,"580d0f5f",null),d=c.exports},8025:function(t,e,s){s.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(s,a){return e("li",{key:a,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:s}})],1)})),0)},i=[],o=s(427),n=s(5907),l=s(5068),r={components:{Inputs:o.Z,GoodsItem:n.Z,SelectBox:l.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},c=r,d=s(1001),u=(0,d.Z)(c,a,i,!1,null,"7d83d77c",null),p=u.exports},427:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},i=[],o={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},n=o,l=s(1001),r=(0,l.Z)(n,a,i,!1,null,"566d6e0a",null),c=r.exports},3201:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkin"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},i=[],o={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},n=o,l=s(1001),r=(0,l.Z)(n,a,i,!1,null,null,null),c=r.exports},5068:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(s,a){return e("option",{key:a,domProps:{value:s.val}},[t._v(t._s(s.txt))])})),0)])])},i=[],o={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},n=o,l=s(1001),r=(0,l.Z)(n,a,i,!1,null,"20330496",null),c=r.exports},1136:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,a){return e("li",{key:a,class:{current:t.tabidx==a}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=a,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},i=[],o={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,a=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],i=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),o=0,n=0;n=o-a,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?o-=i+n-.1*t.closest(".tab_wrap").offsetWidth:o+=i-n+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+o+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var l=e-s.offsetWidth;o>=0&&(s.style.transform="translate(0, 0)"),o<=l&&(s.style.transform="translate("+l+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,a=0,i=0,o=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var n=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;a=e.touches[0].screenX,i=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;o=parseInt(i)+parseInt(e.touches[0].screenX-a),t.style.transform="translate("+o+"px, 0px)"})),t.addEventListener("touchend",(function(e){o>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(o)>n&&o<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},n=o,l=s(1001),r=(0,l.Z)(n,a,i,!1,null,"a9668034",null),c=r.exports},3486:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return e("div",[e("h2",{ref:"header",staticClass:"sticky"},[t._m(0),e("strong",{staticClass:"title al"},[t._v("기획전")])]),e("div",{staticClass:"detail_event"},[e("div",{staticClass:"title_box"},[t._m(1),e("div",{staticClass:"buttons"},[e("button",{staticClass:"button_share",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="공유하기",t.modalContent="ModalShare"}}},[t._v("공유하기")])])]),t._m(2),e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tabItemCategory,tabidx:t.tabidx}}),e("div",{staticClass:"section_group no_bd"},[e("div",{staticClass:"section"},[e("h4",[e("SelectBox",{staticClass:"select_sort_review ml_auto",attrs:{options:t.sortPromotion,model:"최신순",isChange:!0}})],1),e("GoodsList",{staticClass:"type_02",attrs:{isWish:!0,item:t.goods_item[0].item}})],1)])],1),e("ModalSkin",{attrs:{modalTitle:t.modalTitle}},["ModalShare"===t.modalContent?e("ModalShare"):t._e()],1)],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"area left"},[e("button",{staticClass:"icon backward"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text"},[e("strong",{staticClass:"title"},[t._v("기획전 제목이 나옵니다. 기획전 제목이 나옵니다. 기획전 제목이 나옵니다.")]),e("span",{staticClass:"period"},[t._v("2023. 02. 28 ~ 2023. 03. 10")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content_box"},[e("img",{attrs:{src:"https://m.cowellfashion.com/data/editor/7c0e7c6e2ad56bc2fe47ab230d3265671224171.jpg",alt:""}})])}],o=s(3201),n=s(1136),l=s(5068),r=s(8025),c=s(9183),d={data(){return{modalTitle:"",modalContent:"",tabidx:0,tabItemCategory:[{item:"MD'S PICK"},{item:"아우터"},{item:"니트"},{item:"티셔츠"},{item:"원피스"},{item:"팬츠"},{item:"팬츠"},{item:"팬츠"},{item:"팬츠"}],sortPromotion:[{val:"value",txt:"판매 인기순"},{val:"value",txt:"신상품순"},{val:"value",txt:"높은가격순"},{val:"value",txt:"낮은가격순"},{val:"value",txt:"평점높은순"},{val:"value",txt:"찜인기순"}],goods_item:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],content_offset:""}},components:{ModalSkin:o.Z,ModalShare:c.Z,Tabs:n.Z,SelectBox:l.Z,GoodsList:r.Z},mounted(){this.content_offset=document.querySelector(".tab_wrap").offsetTop-document.querySelector(".tab_wrap").offsetHeight,window.addEventListener("scroll",this.onScroll)},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")},onScroll(){if(window.scrollY<this.lastScrollY&&this.content_offset<window.scrollY){let t=document.querySelector(".tab_wrap").offsetHeight,e=t;document.querySelector(".tab_wrap").classList.add("fixed"),document.querySelector(".detail_event").style="padding-top:"+e+"px !important"}else document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".detail_event").style.removeProperty("padding");0==window.scrollY&&(document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".detail_event").style.removeProperty("padding")),this.lastScrollY=window.scrollY}}},u=d,p=s(1001),m=(0,p.Z)(u,a,i,!1,null,"622e76d7",null),_=m.exports},9183:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"sso_wrap mt0"},[e("li",{staticClass:"kakao"},[e("a",{attrs:{href:"#none"}},[t._v("카카오")])]),e("li",{staticClass:"facebook"},[e("a",{attrs:{href:"#none"}},[t._v("facebook")])]),e("li",{staticClass:"url"},[e("a",{attrs:{href:"#none"}},[t._v("url")])])])])}],o={},n=o,l=s(1001),r=(0,l.Z)(n,a,i,!1,null,"a3209ef8",null),c=r.exports},7788:function(t,e,s){t.exports=s.p+"img/sam_goods01.65933508.png"},4202:function(t,e,s){t.exports=s.p+"img/sam_goods02.794709c0.png"},305:function(t,e,s){t.exports=s.p+"img/sam_goods03.70b43f27.png"},1989:function(t,e,s){t.exports=s.p+"img/sam_goods_list_01.82c4aa91.jpg"},7999:function(t,e,s){t.exports=s.p+"img/sam_goods_list_02.baf759f0.jpg"}}]);
//# sourceMappingURL=3486.36968c94.js.map