"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5617],{8712:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},a=[],n=s(427),o={components:{Inputs:n.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,path:String},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),this.path=window.location.pathname.split("/")[1],"pc"!=this.path&&""!=this.path||(this.path="pc/"),"mo"==this.path&&(this.path="mo/")},methods:{}},r=o,l=s(1001),c=(0,l.Z)(r,i,a,!1,null,"0713f5d5",null),d=c.exports},8025:function(t,e,s){s.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(s,i){return e("li",{key:i,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:s}})],1)})),0)},a=[],n=s(427),o=s(8712),r=s(5068),l={components:{Inputs:n.Z,GoodsItem:o.Z,SelectBox:r.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},c=l,d=s(1001),p=(0,d.Z)(c,i,a,!1,null,"7d83d77c",null),m=p.exports},427:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},a=[],n={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"566d6e0a",null),c=l.exports},3201:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkin"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},a=[],n={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,null,null),c=l.exports},4316:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_item"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.photo},on:{click:function(e){return e.preventDefault(),t.$openModalImage(e,"modalSkinImage")}}})])]),e("a",{staticClass:"cont",attrs:{href:"#none"}},[t.item.goods?e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.goods}})])]):t._e(),t.item.tit||t.item.price?e("div",[t.item.tit?e("p",{staticClass:"title"},[e("span",[t._v(t._s(t.item.tit))])]):t._e(),t.item.price?e("strong",{staticClass:"price"},[e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e()]):t._e(),e("ReviewScore",{attrs:{item:t.item.reivewScore}})],1)])},a=[],n=s(8306),o={components:{ReviewScore:n.Z},props:{item:"",isSwiper:!1},data(){return{}},methods:{},mounted(){}},r=o,l=s(1001),c=(0,l.Z)(r,i,a,!1,null,"894f1f22",null),d=c.exports},8306:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_score"},[e("p",t._l(Math.ceil(t.item),(function(s,i){return e("span",{key:i,class:{half:s>t.item}})})),0),e("span",[t._v("("+t._s(t.item)+")")])])},a=[],n={components:{},props:{item:""},mounted(){}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"d06c9eac",null),c=l.exports},5068:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(s,i){return e("option",{key:i,domProps:{value:s.val}},[t._v(t._s(s.txt))])})),0)])])},a=[],n={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"20330496",null),c=l.exports},1136:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,i){return e("li",{key:i,class:{current:t.tabidx==i}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=i,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},a=[],n={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,i=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],a=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),n=0,o=0;o=n-i,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?n-=a+o-.1*t.closest(".tab_wrap").offsetWidth:n+=a-o+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+n+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var r=e-s.offsetWidth;n>=0&&(s.style.transform="translate(0, 0)"),n<=r&&(s.style.transform="translate("+r+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,i=0,a=0,n=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var o=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;i=e.touches[0].screenX,a=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;n=parseInt(a)+parseInt(e.touches[0].screenX-i),t.style.transform="translate("+n+"px, 0px)"})),t.addEventListener("touchend",(function(e){n>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(n)>o&&n<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"a9668034",null),c=l.exports},5617:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h2",{ref:"header",staticClass:"sticky"},[e("button",{staticClass:"back"}),t._v(" 로그인 ")]),e("swiper",{staticClass:"main_visual",attrs:{options:t.mainOptions}},[t._l(t.Main_slide_item,(function(s,i){return e("swiper-slide",{key:i},[e("a",{staticClass:"slide-bgimg",attrs:{href:"#none"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.img}})])]),e("div",{staticClass:"cont"},[e("div",{staticClass:"cont_inner"},[e("strong",[t._v(t._s(s.tit))]),e("p",{domProps:{innerHTML:t._s(s.txt)}})])])])])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),e("div",{staticClass:"content"},[e("section",{staticClass:"category"},[e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.category_item[0].sub_cate[0].item,tabidx:t.category_item[0].sub_cate[0].idx}}),e("dl",[e("dt",[t._v("MY BRAND")]),t._l(t.category_item[0].my_brand,(function(s){return e("dd",{key:s.my_brand},[e("ul",t._l(t.category_item[0].my_brand[0].item,(function(s,i){return e("li",{key:s.item,class:{current:t.category_item[0].my_brand[0].idx===i}},[e("a",{attrs:{href:"#none"}},[t._v(t._s(s))])])})),0)])}))],2),e("dl",[e("dt",[t._v("HOT BRAND")]),t._l(t.category_item[0].hot_brand,(function(s){return e("dd",{key:s.hot_brand},[e("ul",t._l(t.category_item[0].hot_brand[0].item,(function(s,i){return e("li",{key:s.item,class:{current:t.category_item[0].hot_brand[0].idx===i}},[e("a",{attrs:{href:"#none"}},[t._v(t._s(s))])])})),0)])}))],2)],1),e("section",{staticClass:"best"},[e("h3",[t._v("BEST SELLER")]),e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tab_item_best,tabidx:t.tabidx}}),e("GoodsList",{attrs:{isWish:!0,item:t.goods_item_best[0].item}}),e("div",{staticClass:"btnSection"},[e("router-link",{staticClass:"btn_mid btn_gray02",attrs:{to:""}},[e("em",[t._v("바로가기")])])],1)],1),t._m(0),e("section",{staticClass:"new"},[e("h3",[t._v("NEW")]),e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tab_item_best,tabidx:t.tabidx}}),e("GoodsList",{attrs:{isWish:!0,item:t.goods_item_NEW[0].item}})],1),e("section",{staticClass:"review"},[t._m(1),e("swiper",{attrs:{options:t.reviewOptions}},t._l(t.review,(function(s,i){return e("swiper-slide",{key:i},[e("ul",{staticClass:"review_list"},t._l(t.review,(function(s,i){return e("li",{key:i,staticClass:"review_list_item",on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="상품리뷰",t.modalContent="reviewPop"}}},[e("ReviewItem",{attrs:{item:s}})],1)})),0)])})),1)],1)]),e("ModalSkin",{attrs:{modalTitle:t.modalTitle,modalClass:"full"}},[e("reviewPop")],1)],1)},a=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"banner mt30"},[e("ul",[e("li",{staticClass:"swiper-slide"},[e("a",{attrs:{href:"#none"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s(6028),alt:""}})])]),e("p",{staticClass:"cont"},[e("strong",[t._v("NOUTICA")]),e("span",[t._v("2023 F/F 시즌오프"),e("br"),t._v(" 다시 없을 기회")])])])]),e("li",{staticClass:"swiper-slide"},[e("a",{attrs:{href:"#none"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s(8937),alt:""}})])]),e("p",{staticClass:"cont"},[e("strong",[t._v("ADIDAS")]),e("span",[t._v("올 봄 신상품 출시"),e("br"),t._v("맨투맨, 조거바지, 원마일웨어")])])])]),e("li",{staticClass:"swiper-slide"},[e("a",{attrs:{href:"#none"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s(9667),alt:""}})])]),e("p",{staticClass:"cont"},[e("strong",[t._v("FIFA OLP")]),e("span",[t._v("마지막 추위를"),e("br"),t._v(" 따듯하게 감싸줄 푸퍼")])])])])])])},function(){var t=this,e=t._self._c;return e("h3",[t._v("BEST REVIEW "),e("p",{staticClass:"sub_tit"},[t._v("코웰패션 이용 고객들의 생생 리뷰")])])}],n=s(8025),o=s(1136),r=s(4316),l=s(3201),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_wrap"},[e("GoodsItem",{staticClass:"type_ver",attrs:{item:t.goods_item[0]}}),e("div",{staticClass:"review_cont"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.reviewCont[0].img}})])]),e("div",{staticClass:"info"},[e("ReviewScore",{staticClass:"type_color",attrs:{item:t.reviewCont[0].reivewScore}}),e("span",[t._v(t._s(t.reviewCont[0].id))]),e("span",[t._v(t._s(t.reviewCont[0].date))]),e("p",[t._v(t._s(t.reviewCont[0].info))])],1),t.reviewCont[0].review?e("div",{staticClass:"review",domProps:{innerHTML:t._s(t.reviewCont[0].review)}}):t._e()])],1)},d=[],p=s(8712),m=s(8306),u={components:{GoodsItem:p.Z,ReviewScore:m.Z},props:{},data(){return{reviewCont:[{img:s(7788),review:"사이즈 잘 맞아요 색상 사진과 비슷해요.<br/>실물이 훨씬 이쁘고 핏도 좋아요.<br/>커플로 입으려고 샀는데 엄마한테도 잘어울려서 사드릴까고민중이에요.<br/>친구들이 너무 잘어울린다고 해서 기분이 좋네요.",reivewScore:2.5,id:"asdsa***",date:"2023.01",info:"신체 정보 : 키 172cm 몸무게 53kg 상의 M 하의 28inch"}],goods_item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%"}]}}},_=u,f=s(1001),v=(0,f.Z)(_,c,d,!1,null,"7a4b260e",null),b=v.exports,h={name:"App",components:{GoodsList:n.Z,Tabs:o.Z,ReviewItem:r.Z,ModalSkin:l.Z,reviewPop:b},data(){return{tabidx:0,Main_slide_item:[{img:s(6796),brand:"pc-Ourplace",tit:"Best Sweatshirt",txt:"남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!"}],category_item:[{sub_cate:[{idx:1,item:[{item:"전체111"},{item:"아우터"},{item:"상의"},{item:"상의"},{item:"세트웨어"},{item:"패션잡화"}]}],my_brand:[{idx:0,item:["ADIDAS","DKNY","FUMA","FILA OLP","CALVIN KLAIN","REEBOK","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}],hot_brand:[{idx:0,item:["REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE","REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}]}],tab_item_best:[{item:"언더웨어"},{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"},{item:"언더웨어"},{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"}],goods_item_best:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],goods_item_NEW:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"},{txt:"105"}]}},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"},{txt:"105"}]}},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"},{txt:"105"}]}},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"},{txt:"105"}]}}]}],review:[{photo:s(1016),reivewScore:3.5},{photo:s(2364),reivewScore:5},{photo:s(2364),reivewScore:5},{photo:s(4536),reivewScore:.5}],mainOptions:{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},loopAdditionalSlides:0,watchSlidesProgress:!0,on:{init:function(){this.autoplay.stop()},slideChange:function(){},slideChangeTransitionEnd:function(){let t=this,e=t.el.querySelectorAll("strong"),s=t.el.querySelectorAll("p");for(let i=0;i<s.length;++i)e[i].classList.remove("show"),s[i].classList.remove("show");t.slides[t.activeIndex].querySelector("strong").classList.add("show"),t.slides[t.activeIndex].querySelector("p").classList.add("show")},progress:function(){let t=this;for(let e=0;e<t.slides.length;e++){let s=t.slides[e].progress,i=.5*t.width,a=s*i;t.slides[e].querySelector(".slide-bgimg").style.transform="translateX("+a+"px)"}},touchStart:function(){let t=this;for(let e=0;e<t.slides.length;e++)t.slides[e].style.transition=""},setTransition:function(t){let e=this;for(let s=0;s<e.slides.length;s++)e.slides[s].style.transition=t+"ms",e.slides[s].querySelector(".slide-bgimg").style.transition=t+"ms"}}},reviewOptions:{loop:!0,slidesPerView:1,spaceBetween:5},modalTitle:"",modalContent:"",content_offset:""}},mounted(){this.content_offset=document.querySelector(".tab_wrap").offsetTop-document.querySelector(".tab_wrap").offsetHeight,window.addEventListener("scroll",this.onScroll)},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")},onScroll(){if(window.scrollY<this.lastScrollY&&this.content_offset<window.scrollY){let t=document.querySelector(".tab_wrap").offsetHeight,e=t;document.querySelector(".tab_wrap").classList.add("fixed"),document.querySelector(".content").style="padding-top:"+e+"px !important"}else document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding");0==window.scrollY&&(document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding")),this.lastScrollY=window.scrollY}}},g=h,x=(0,f.Z)(g,i,a,!1,null,"39798b67",null),y=x.exports},6796:function(t,e,s){t.exports=s.p+"img/cate_bg.f3fcc6be.png"},1016:function(t,e,s){t.exports=s.p+"img/imgreview01.e16dfb1b.png"},2364:function(t,e,s){t.exports=s.p+"img/imgreview02.a876e68e.png"},4536:function(t,e,s){t.exports=s.p+"img/imgreview03.374d0587.png"},8937:function(t,e,s){t.exports=s.p+"img/sam_banner_01.20af3dfc.png"},6028:function(t,e,s){t.exports=s.p+"img/sam_banner_02.c21aaa2d.png"},9667:function(t,e,s){t.exports=s.p+"img/sam_banner_03.6987a560.png"},7788:function(t,e,s){t.exports=s.p+"img/sam_goods01.65933508.png"},1989:function(t,e,s){t.exports=s.p+"img/sam_goods_list_01.82c4aa91.jpg"},7999:function(t,e,s){t.exports=s.p+"img/sam_goods_list_02.baf759f0.jpg"}}]);
//# sourceMappingURL=5617.1492ff31.js.map