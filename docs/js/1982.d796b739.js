"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[1982],{1136:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,a){return e("li",{key:a,class:{current:t.tabidx==a}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=a,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},o=[],i={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,a=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],o=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),i=0,l=0;l=i-a,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?i-=o+l-.1*t.closest(".tab_wrap").offsetWidth:i+=o-l+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+i+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var n=e-s.offsetWidth;i>=0&&(s.style.transform="translate(0, 0)"),i<=n&&(s.style.transform="translate("+n+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,a=0,o=0,i=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var l=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;a=e.touches[0].screenX,o=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;i=parseInt(o)+parseInt(e.touches[0].screenX-a),t.style.transform="translate("+i+"px, 0px)"})),t.addEventListener("touchend",(function(e){i>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(i)>l&&i<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},l=i,n=s(1001),r=(0,n.Z)(l,a,o,!1,null,"a9668034",null),c=r.exports},9698:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var a=function(){var t=this,e=t._self._c;return e("div",[e("h2",{ref:"header",staticClass:"sticky"},[e("button",{staticClass:"back"}),t._v(" BEST ")]),e("div",{staticClass:"content pt0"},[e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.category_item[0].sub_cate[0].item,tabidx:t.category_item[0].sub_cate[0].idx}}),e("div",{staticClass:"cate_top"},[e("div",{staticClass:"cate_box"},[e("button",{on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="푸마 스포츠",t.modalContent="CateModal"}}},[t._v("여성 / 아우터")])]),e("div",{staticClass:"sort_box"},[e("div",[e("button",{staticClass:"reset"},[t._v("초기화")]),e("button",{staticClass:"filter",on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="필터",t.modalContent="FilterModal"}}},[t._v("필터")]),e("SelectBox",{attrs:{isChange:!0,options:t.options}})],1)])]),e("p",{staticClass:"select_filter"},[t._l(t.filter[0].color,(function(t,s){return e("button",{key:s,staticClass:"type_color"},[e("em",{class:{border:"#fff"==t.bg},style:{backgroundColor:t.bg}})])})),t._l(t.filter[0].brand,(function(s,a){return e("button",{key:a},[t._v(t._s(s.text))])})),t._l(t.filter[0].size,(function(s,a){return e("button",{key:a},[t._v(t._s(s.item))])})),t._l(t.filter[0].price,(function(s,a){return e("button",{key:a},[t._v(t._s(s.item))])})),t._l(t.filter[0].prdiscountice,(function(s,a){return e("button",{key:a},[t._v(t._s(s.item))])}))],2),e("GoodsList",{staticClass:"type_02 mt0",attrs:{isWish:!0,item:t.goods_item[0].item}}),t._m(0)],1),e("ModalSkin",{attrs:{modalTitle:t.modalTitle,modalClass:"bestCount"===t.modalContent?"bottom":"full"}},["CateModal"==t.modalContent?e("CateModal"):t._e(),"FilterModal"==t.modalContent?e("FilterModal"):t._e(),"FilterModal"==t.modalContent?e("div",{staticClass:"modal_bottom btnSection",attrs:{slot:"bottom"},slot:"bottom"},[e("a",{staticClass:"btn_big btn_cancel",attrs:{href:"#none"}},[e("em",[t._v("초기화")])]),e("a",{staticClass:"btn_big btn_confirm",attrs:{href:"#none"}},[e("em",[t._v("적용")])])]):t._e(),"bestCount"===t.modalContent?e("div",{staticClass:"list_bullet"},[e("ul",[e("li",[t._v("1일 : 전일 판매 수량 기준")]),e("li",[t._v("일주일 : 최근 7일간의 판매수량 기준")]),e("li",[t._v("한달 : 최근 30일간의 판매수량 기준")]),e("li",[t._v("당일 오전 1시기준 집계 및 업데이트가 됩니다.")])])]):t._e()],1)],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination_box innerfill"},[e("button",{staticClass:"button_prev active",attrs:{type:"button"}},[t._v("이전")]),e("div",{staticClass:"pagination"},[e("span",[t._v("350 / 9999")])]),e("button",{staticClass:"button_next active",attrs:{type:"button"}},[t._v("다음")])])}],i=s(5068),l=s(8025),n=s(1136),r=s(3201),c=s(3542),d=s(4016),u={name:"App",components:{SelectBox:i.Z,GoodsList:l.Z,Tabs:n.Z,ModalSkin:r.Z,CateModal:c.Z,FilterModal:d.Z},data(){return{options:[{val:"value",txt:"판매 인기순"},{val:"value",txt:"신상품순"},{val:"value",txt:"높은가격순"},{val:"value",txt:"낮은가격순"},{val:"value",txt:"평점높은순"},{val:"value",txt:"찜인기순"}],goods_item:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],filter:[{brand:[{text:"아디다스 스포츠"},{text:"켈빈 클라인"},{text:"노티카"},{text:"바나나 리퍼블릭"},{text:"푸마"}],color:[{bg:"#fff"},{bg:"#FEDCDC"},{bg:"#FCB89A"},{bg:"#D9EA71"}],size:[{item:"M"},{item:"XL"},{item:"XXL"}],price:[{item:"150,000~200,000원"},{item:"200,000원 이상"}],discount:[{item:"1~15%"},{item:"15~30%"},{item:"30~50%"},{item:"50% 이상"}]}],category_item:[{sub_cate:[{idx:1,item:[{item:"전체"},{item:"아우터"},{item:"상의"},{item:"상의"},{item:"세트웨어"},{item:"패션잡화"}]}],my_brand:[{idx:0,item:["ADIDAS","DKNY","FUMA","FILA OLP","CALVIN KLAIN","REEBOK","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}],hot_brand:[{idx:0,item:["REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE","REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}]}],mainOptions:{loop:!0,speed:1e3,autoplay:{delay:3e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},loopAdditionalSlides:0,watchSlidesProgress:!0,on:{init:function(){this.autoplay.stop()},slideChange:function(){},slideChangeTransitionEnd:function(){let t=this,e=t.el.querySelectorAll("strong"),s=t.el.querySelectorAll("p");for(let a=0;a<s.length;++a)e[a].classList.remove("show"),s[a].classList.remove("show");t.slides[t.activeIndex].querySelector("strong").classList.add("show"),t.slides[t.activeIndex].querySelector("p").classList.add("show")},progress:function(){let t=this;for(let e=0;e<t.slides.length;e++){let s=t.slides[e].progress,a=.5*t.width,o=s*a;t.slides[e].querySelector(".slide-bgimg").style.transform="translateX("+o+"px)"}},touchStart:function(){let t=this;for(let e=0;e<t.slides.length;e++)t.slides[e].style.transition=""},setTransition:function(t){let e=this;for(let s=0;s<e.slides.length;s++)e.slides[s].style.transition=t+"ms",e.slides[s].querySelector(".slide-bgimg").style.transition=t+"ms"}}},Main_slide_item:[{img:s(4659),type:"video",brand:"pc-Ourplace",tit:"Best Sweatshirt",txt:"남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!"},{img:s(2421),type:"img",brand:"Canada Goose",tit:"Keep Me Warm",txt:"칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템"},{img:s(9953),type:"img",brand:"Kappa",tit:"Best Sweatshirt",txt:"남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!"}],modalTitle:"",modalContent:""}},mounted(){window.addEventListener("scroll",this.onScroll)},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")},onScroll(){if(window.scrollY<this.lastScrollY){let t=document.querySelector(".tab_wrap").offsetHeight,e=document.querySelector(".cate_top").offsetHeight+30,s=t+e;document.querySelector(".tab_wrap").classList.add("fixed"),document.querySelector(".cate_top").classList.add("fixed"),document.querySelector(".content").style="padding-top:"+s+"px !important"}else document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".cate_top").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding");0==window.scrollY&&(document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".cate_top").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding")),this.lastScrollY=window.scrollY}}},p=u,m=s(1001),f=(0,m.Z)(p,a,o,!1,null,"fdb953f2",null),b=f.exports},2421:function(t,e,s){t.exports=s.p+"img/sam_visual02.366d58a4.png"},9953:function(t,e,s){t.exports=s.p+"img/sam_visual03.b8f89a59.jpg"},4659:function(t,e,s){t.exports=s.p+"media/sam_video.728f7fa9.mp4"}}]);
//# sourceMappingURL=1982.d796b739.js.map