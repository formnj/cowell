"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[7388],{2071:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:"/"+t.Path+"/GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},n=[],a=s(427),o={components:{Inputs:a.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,Path:String},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),this.Path=window.location.pathname.split("/")[2],console.log("aaa:",this.Path),"pc"!=this.Path&&""!=this.Path||(this.Path="cowell/pc"),"mo"==this.Path&&(this.Path="cowell/mo")},methods:{}},r=o,l=s(1001),c=(0,l.Z)(r,i,n,!1,null,"08d04047",null),d=c.exports},427:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},n=[],a={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},o=a,r=s(1001),l=(0,r.Z)(o,i,n,!1,null,"566d6e0a",null),c=l.exports},4316:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_item"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.photo},on:{click:function(e){return e.preventDefault(),t.$openModalImage(e,"modalSkinImage")}}})])]),e("a",{staticClass:"cont",attrs:{href:"#none"}},[t.item.goods?e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.goods}})])]):t._e(),t.item.tit||t.item.price?e("div",[t.item.tit?e("p",{staticClass:"title"},[e("span",[t._v(t._s(t.item.tit))])]):t._e(),t.item.price?e("strong",{staticClass:"price"},[e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e()]):t._e(),e("ReviewScore",{attrs:{item:t.item.reivewScore}})],1)])},n=[],a=s(8306),o={components:{ReviewScore:a.Z},props:{item:"",isSwiper:!1},data(){return{}},methods:{},mounted(){}},r=o,l=s(1001),c=(0,l.Z)(r,i,n,!1,null,"894f1f22",null),d=c.exports},8306:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_score"},[e("p",t._l(Math.ceil(t.item),(function(s,i){return e("span",{key:i,class:{half:s>t.item}})})),0),e("span",[t._v("("+t._s(t.item)+")")])])},n=[],a={components:{},props:{item:""},mounted(){}},o=a,r=s(1001),l=(0,r.Z)(o,i,n,!1,null,"d06c9eac",null),c=l.exports},1136:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,i){return e("li",{key:i,class:{current:t.tabidx==i}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=i,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},n=[],a={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,i=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],n=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),a=0,o=0;o=a-i,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?a-=n+o-.1*t.closest(".tab_wrap").offsetWidth:a+=n-o+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+a+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var r=e-s.offsetWidth;a>=0&&(s.style.transform="translate(0, 0)"),a<=r&&(s.style.transform="translate("+r+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,i=0,n=0,a=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var o=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;i=e.touches[0].screenX,n=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;a=parseInt(n)+parseInt(e.touches[0].screenX-i),t.style.transform="translate("+a+"px, 0px)"})),t.addEventListener("touchend",(function(e){a>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(a)>o&&a<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},o=a,r=s(1001),l=(0,r.Z)(o,i,n,!1,null,"a9668034",null),c=l.exports},7388:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("swiper",{staticClass:"main_visual",attrs:{options:t.mainOptions}},[t._l(t.Main_slide_item,(function(s,i){return e("swiper-slide",{key:i},[e("a",{staticClass:"slide-bgimg",attrs:{href:"#none"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.img}})])]),e("div",{staticClass:"cont"},[e("div",{staticClass:"cont_inner"},[e("strong",[t._v(t._s(s.tit))]),e("p",{domProps:{innerHTML:t._s(s.txt)}})])])])])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2),e("section",{staticClass:"category"},[e("div",{staticClass:"main_category_slide_wrap"},[e("div",{ref:"mainCategorySlide",staticClass:"main_category_slide",on:{scroll:t.handleMove}},[e("ul",t._l(t.category_item[0].main_cate[0].item,(function(s,i){return e("li",{key:s.item,class:{current:t.category_item[0].main_cate[0].idx===i}},[e("button",{staticClass:"slide_button",attrs:{type:"button"}},[t._v(t._s(s))])])})),0)])]),e("dl",[e("dt",[t._v("MY BRAND")]),t._l(t.category_item[0].my_brand,(function(s){return e("dd",{key:s.my_brand},[e("ul",t._l(t.category_item[0].my_brand[0].item,(function(s){return e("li",{key:s.item,on:{mouseover:t.addActive,mouseleave:t.removeActive}},[e("router-link",{attrs:{to:""}},[t._v(t._s(s))])],1)})),0)])}))],2),e("dl",[e("dt",[t._v("HOT BRAND")]),t._l(t.category_item[0].hot_brand,(function(s){return e("dd",{key:s.hot_brand},[e("ul",t._l(t.category_item[0].hot_brand[0].item,(function(s){return e("li",{key:s.item,on:{mouseover:t.addActive,mouseleave:t.removeActive}},[e("a",{attrs:{href:"#none"}},[t._v(t._s(s))])])})),0)])}))],2)]),e("section",{staticClass:"best"},[e("h3",[t._v("BEST SELLER")]),e("Tabs",{attrs:{tabClass:"tab_type_default",tab_item:t.tab_item_best[0].tabItem,tabidx:t.tab_item_best[0].idx}}),e("swiper",{attrs:{options:t.defaultOptions}},[t._l(t.goods_item_best[0].item,(function(t,s){return e("swiper-slide",{key:s},[e("GoodsItem",{attrs:{item:t,isWish:!0}})],1)})),e("div",{staticClass:"swiper-button-next",attrs:{slot:"pagination"},slot:"pagination"}),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),e("section",{staticClass:"event"},[e("h3",[t._v("Event")]),e("swiper",{attrs:{options:t.eventOptions}},[t._l(t.event_item,(function(s,i){return e("swiper-slide",{key:i},[e("div",{staticClass:"item"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.img}})])]),e("div",{staticClass:"cont"},[e("strong",[t._v(t._s(s.brand))]),e("p",{domProps:{innerHTML:t._s(s.explain)}})])])])})),e("div",{staticClass:"swiper-button-next",attrs:{slot:"pagination"},slot:"pagination"}),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),e("section",{staticClass:"new"},[e("h3",[t._v("BEST SELLER")]),e("Tabs",{attrs:{tabClass:"tab_type_default",tab_item:t.tab_item_best[0].tabItem,tabidx:t.tab_item_best[0].idx}}),e("swiper",{attrs:{options:t.defaultOptions}},[t._l(t.goods_item_best[0].item,(function(t,s){return e("swiper-slide",{key:s},[e("GoodsItem",{attrs:{item:t,isWish:!0}})],1)})),e("div",{staticClass:"swiper-button-next",attrs:{slot:"pagination"},slot:"pagination"}),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),e("section",{staticClass:"review"},[t._m(0),e("swiper",{staticClass:"review_list",attrs:{options:t.defaultOptions}},t._l(t.review,(function(t,s){return e("swiper-slide",{key:s,class:{even:s%2!=0}},[e("ReviewItem",{attrs:{item:t}})],1)})),1)],1)],1)},n=[function(){var t=this,e=t._self._c;return e("h3",[t._v("BEST REVIEW "),e("p",{staticClass:"sub_tit"},[t._v("코웰패션 이용 고객들의 생생 리뷰")])])}],a=s(2071),o=s(1136),r=s(4316),l={name:"App",components:{GoodsItem:a.Z,Tabs:o.Z,ReviewItem:r.Z},data(){return{Main_slide_item:[{img:s(8933),tit:"2022 시즌오프!",txt:"다가오는 봄날씨<br/> 신상을 겟할 수 있는 날은 단 하루!"}],category_item:[{main_cate:[{idx:3,item:["전체","아우터","티셔츠","바지","니트웨어","스커트","셋업","액티브 웨어","홈웨어","이너웨어","하이앤드","EXCLUSIVE","아우터","티셔츠","바지","니트웨어","스커트","셋업","액티브 웨어","홈웨어","이너웨어","하이앤드"]}],my_brand:[{item:["ADIDAS","DKNY","FUMA","FILA OLP","CALVIN KLAIN","REEBOK","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}],hot_brand:[{idx:0,item:["REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE","REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}]}],tab_item_best:[{idx:2,tabItem:[{item:"언더웨어"},{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"}]}],goods_item_best:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],event_item:[{img:s(8937),brand:"adidas",explain:"올 봄 신상품 출시<br/> 맨투맨, 조거바지, 원마일웨어"},{img:s(6028),brand:"NOUTICA",explain:"2023 F/F 시즌오프<br/> 다시 없을 기회 "},{img:s(9667),brand:"FIFA OLP",explain:"마지막 추위를<br/> 따듯하게 감싸줄 푸퍼 "}],review:[{photo:s(1016),goods:s(2531),tit:"스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비",discount:"30%",price:"300,300",reivewScore:3.5},{photo:s(2364),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:5},{photo:s(2364),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:5},{photo:s(4536),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:.5},{photo:s(5432),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:4.5},{photo:s(3574),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:5}],defaultOptions:{loop:!0,slidesPerView:6,spaceBetween:20,maxBackfaceHiddenSlides:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},mainOptions:{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},loopAdditionalSlides:0,watchSlidesProgress:!0,on:{init:function(){this.autoplay.stop()},slideChange:function(){},slideChangeTransitionEnd:function(){let t=this;t.el.querySelectorAll("strong"),t.el.querySelectorAll("p")},progress:function(){let t=this;for(let e=0;e<t.slides.length;e++){let s=t.slides[e].progress,i=.5*t.width,n=s*i;t.slides[e].querySelector(".slide-bgimg").style.transform="translateX("+n+"px)"}},touchStart:function(){let t=this;for(let e=0;e<t.slides.length;e++)t.slides[e].style.transition=""},setTransition:function(t){let e=this;for(let s=0;s<e.slides.length;s++)e.slides[s].style.transition=t+"ms",e.slides[s].querySelector(".slide-bgimg").style.transition=t+"ms"}}},eventOptions:{loop:!0,slidesPerView:4,spaceBetween:20,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},categoryOptions:{slidesPerView:"auto"},mainCategoryIndex:0}},methods:{addActive:function(t){t.currentTarget.classList.add("current")},removeActive:function(t){t.currentTarget.classList.remove("current")},mainCategorySlideMoveLeft(){let t=this.$refs.mainCategorySlide.scrollLeft,e=this.$refs.mainCategorySlide.scrollWidth,s=this.$refs.mainCategorySlide.clientWidth;t+s<e-10&&this.mainCategoryIndex++,this.executeMove()},mainCategorySlideMoveRight(){let t=this.$refs.mainCategorySlide.scrollLeft;this.$refs.mainCategorySlide.scrollWidth,this.$refs.mainCategorySlide.clientWidth;t>0&&this.mainCategoryIndex>0&&this.mainCategoryIndex--,this.executeMove()},executeMove(){let t=0;for(let e=0;e<this.mainCategoryIndex;e++)t+=this.$refs.mainCategorySlide.children[0].childNodes[e].getBoundingClientRect().width;this.$refs.mainCategorySlide.scrollTo({left:t,behavior:"smooth"})}},mounted(){const t=document.querySelectorAll(".main_category_slide");let e,s,i=!1;t.forEach((function(t){t.addEventListener("mousedown",(n=>{i=!0,e=n.pageX-t.offsetLeft,s=t.scrollLeft})),t.addEventListener("mouseleave",(()=>{i=!1})),t.addEventListener("mouseup",(()=>{i=!1})),t.addEventListener("mousemove",(n=>{if(!i)return;n.preventDefault();const a=n.pageX-t.offsetLeft,o=1*(a-e);t.scrollLeft=s-o}))}))}},c=l,d=s(1001),p=(0,d.Z)(c,i,n,!1,null,"e2a3a6da",null),u=p.exports},8933:function(t,e,s){t.exports=s.p+"img/cate_bg.530da904.png"},1016:function(t,e,s){t.exports=s.p+"img/imgreview01.e16dfb1b.png"},2364:function(t,e,s){t.exports=s.p+"img/imgreview02.a876e68e.png"},4536:function(t,e,s){t.exports=s.p+"img/imgreview03.374d0587.png"},5432:function(t,e,s){t.exports=s.p+"img/imgreview04.8fb58813.png"},3574:function(t,e,s){t.exports=s.p+"img/imgreview05.3e17c3d6.png"},8937:function(t,e,s){t.exports=s.p+"img/sam_banner_01.20af3dfc.png"},6028:function(t,e,s){t.exports=s.p+"img/sam_banner_02.c21aaa2d.png"},9667:function(t,e,s){t.exports=s.p+"img/sam_banner_03.6987a560.png"},1989:function(t,e,s){t.exports=s.p+"img/sam_goods_list_01.82c4aa91.jpg"},7999:function(t,e,s){t.exports=s.p+"img/sam_goods_list_02.baf759f0.jpg"},2531:function(t,e,s){t.exports=s.p+"img/sam_hot_01.6826fbe7.png"}}]);
//# sourceMappingURL=7388.3b35c709.js.map