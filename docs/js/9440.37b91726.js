"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[9440],{7339:function(t,e,o){o.r(e),o.d(e,{default:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("div",[e("h2",{ref:"header",staticClass:"sticky"},[e("button",{staticClass:"back"}),t._v(" BEST ")]),e("div",{staticClass:"content pt0"},[e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.category_item[0].sub_cate[0].item,tabidx:t.category_item[0].sub_cate[0].idx}}),e("div",{staticClass:"cate_top"},[e("div",{staticClass:"sort_box"},[e("div",[e("SelectBox",{attrs:{isChange:!0,options:t.optionsPeriod}}),e("SelectBox",{attrs:{isChange:!0,options:t.optionsCategory}}),e("button",{staticClass:"button_sort_count",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="베스트 집계 기준",t.modalContent="bestCount"}}},[t._v("베스트 상품 집계 기준")])],1)])]),e("GoodsList",{staticClass:"type_02",attrs:{isWish:!0,isCart:!0,item:t.goods_item[0].item}}),t._m(0)],1),e("ModalSkin",{attrs:{modalTitle:t.modalTitle,modalClass:"bestCount"===t.modalContent||"ModalBasket"===t.modalContent?"bottom":"full"}},["CateModal"==t.modalContent?e("CateModal"):t._e(),"FilterModal"==t.modalContent?e("FilterModal"):t._e(),"FilterModal"==t.modalContent?e("div",{staticClass:"modal_bottom btnSection",attrs:{slot:"bottom"},slot:"bottom"},[e("a",{staticClass:"btn_big btn_cancel",attrs:{href:"#none"}},[e("em",[t._v("초기화")])]),e("a",{staticClass:"btn_big btn_confirm",attrs:{href:"#none"}},[e("em",[t._v("적용")])])]):t._e(),"bestCount"===t.modalContent?e("div",{staticClass:"list_bullet"},[e("ul",[e("li",[t._v("1일 : 전일 판매 수량 기준")]),e("li",[t._v("일주일 : 최근 7일간의 판매수량 기준")]),e("li",[t._v("한달 : 최근 30일간의 판매수량 기준")]),e("li",[t._v("당일 오전 1시기준 집계 및 업데이트가 됩니다.")])])]):t._e(),"ModalBasket"===t.modalContent?e("ModalBasket"):t._e(),"ModalBasket"===t.modalContent?e("div",{staticClass:"modal_bottom btnSection",attrs:{slot:"bottom"},slot:"bottom"},[e("a",{staticClass:"btn_big btn_white",attrs:{href:"#none"}},[e("em",[t._v("장바구니")])])]):t._e()],1)],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination_box innerfill"},[e("button",{staticClass:"button_prev active",attrs:{type:"button"}},[t._v("이전")]),e("div",{staticClass:"pagination"},[e("span",[t._v("350 / 9999")])]),e("button",{staticClass:"button_next active",attrs:{type:"button"}},[t._v("다음")])])}],i=o(5068),n=o(8025),l=o(1136),c=o(3201),r=o(3542),d=o(4016),u=o(1642),p={name:"App",components:{SelectBox:i.Z,GoodsList:n.Z,Tabs:l.Z,ModalSkin:c.Z,CateModal:r.Z,FilterModal:d.Z,ModalBasket:u.Z},data(){return{optionsPeriod:[{val:"value",txt:"1일"},{val:"value",txt:"일주일"},{val:"value",txt:"한달"}],optionsCategory:[{val:"value",txt:"레포츠의류"}],goods_item:[{item:[{img:o(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:o(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:o(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:o(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:o(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"}]}},{img:o(305),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],options:{title:"SIZE",item:[{txt:"80"},{txt:"85"},{txt:"90"},{txt:"95"},{txt:"100"},{txt:"105"}]}},{img:o(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:o(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:o(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:o(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:o(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:o(305),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],filter:[{brand:[{text:"아디다스 스포츠"},{text:"켈빈 클라인"},{text:"노티카"},{text:"바나나 리퍼블릭"},{text:"푸마"}],color:[{bg:"#fff"},{bg:"#FEDCDC"},{bg:"#FCB89A"},{bg:"#D9EA71"}],size:[{item:"M"},{item:"XL"},{item:"XXL"}],price:[{item:"150,000~200,000원"},{item:"200,000원 이상"}],discount:[{item:"1~15%"},{item:"15~30%"},{item:"30~50%"},{item:"50% 이상"}]}],category_item:[{sub_cate:[{idx:1,item:[{item:"전체"},{item:"아우터"},{item:"상의"},{item:"상의"},{item:"세트웨어"},{item:"패션잡화"}]}],my_brand:[{idx:0,item:["ADIDAS","DKNY","FUMA","FILA OLP","CALVIN KLAIN","REEBOK","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}],hot_brand:[{idx:0,item:["REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE","REEBOK","LOOKAST","DKNY ","FUMA","FILA OLP","ADIDAS","UGG","NOUTICA","AMONG","LOOKAST","CITY BREEZE"]}]}],modalTitle:"",modalContent:""}},mounted(){const t=document.querySelectorAll(".btn_cart");t.forEach((t=>{t.addEventListener("click",(()=>{this.openModal("modalSkin"),this.modalTitle="장바구니 담기",this.modalContent="ModalBasket"}))})),window.addEventListener("scroll",this.onScroll)},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")},onScroll(){if(window.scrollY<this.lastScrollY){let t=document.querySelector(".tab_wrap").offsetHeight,e=document.querySelector(".cate_top").offsetHeight+30,o=t+e;document.querySelector(".tab_wrap").classList.add("fixed"),document.querySelector(".cate_top").classList.add("fixed"),document.querySelector(".content").style="padding-top:"+o+"px !important"}else document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".cate_top").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding");0==window.scrollY&&(document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".cate_top").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding")),this.lastScrollY=window.scrollY}}},b=p,m=o(1001),x=(0,m.Z)(b,s,a,!1,null,"7b5fb3d4",null),_=x.exports},1642:function(t,e,o){o.d(e,{Z:function(){return r}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"section_group"},[e("div",{staticClass:"section pt0"},[t._m(0),e("div",{staticClass:"image_slide slide_off"},[e("ul",t._l(t.colorOptionItem,(function(t,o){return e("li",{key:o},[e("button",{class:t.active?"active":"",attrs:{type:"button"}},[e("img",{attrs:{src:t.img,alt:""}})])])})),0)])]),e("div",{staticClass:"section"},[e("h4",[e("strong",{staticClass:"title"},[t._v("사이즈")]),e("button",{staticClass:"modal",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="사이즈 가이드",t.modalContent="ModalSizeGuide"}}},[t._v("사이즈 가이드")])]),t._m(1)]),e("div",{staticClass:"section pb0"},[e("div",{staticClass:"count_price_box"},[e("div",{staticClass:"order_count"},[e("button",{staticClass:"button_decrese",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.orderCount>t.orderMin?t.orderCount--:t.orderCount}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.orderCount,expression:"orderCount"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.orderCount},on:{input:function(e){e.target.composing||(t.orderCount=e.target.value)}}}),e("button",{staticClass:"button_increse",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.orderCount<t.orderMax?t.orderCount++:t.orderCount}}})]),t._m(2)])])])])},a=[function(){var t=this,e=t._self._c;return e("h4",[e("strong",{staticClass:"title"},[t._v("색상옵션 : 블랙")]),e("span",{staticClass:"count"},[t._v("5")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"select_size"},[e("button",{attrs:{type:"button"}},[t._v("250")]),e("button",{staticClass:"active",attrs:{type:"button"}},[t._v("255")]),e("button",{attrs:{type:"button"}},[t._v("260")]),e("button",{attrs:{type:"button"}},[t._v("270")]),e("button",{attrs:{type:"button"}},[t._v("275")]),e("button",{attrs:{type:"button"}},[t._v("280")]),e("button",{attrs:{type:"button"}},[t._v("285")]),e("button",{attrs:{type:"button"}},[t._v("290")]),e("button",{attrs:{type:"button"}},[t._v("300")]),e("button",{attrs:{type:"button"}},[t._v("305")]),e("button",{attrs:{type:"button"}},[t._v("310")]),e("button",{attrs:{type:"button"}},[t._v("305")]),e("button",{attrs:{type:"button"}},[t._v("310")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"price"},[e("span",[t._v("총금액")]),e("strong",[t._v("999,999,999")])])}],i={data(){return{colorOptionItem:[{img:o(6738),active:!0},{img:o(8489),active:!1},{img:o(9491),active:!1},{img:o(7469),active:!1},{img:o(9516),active:!1}],orderCount:1,orderMin:1,orderMax:10}}},n=i,l=o(1001),c=(0,l.Z)(n,s,a,!1,null,null,null),r=c.exports},6738:function(t,e,o){t.exports=o.p+"img/sam_special03_01.e13403fb.png"},8489:function(t,e,o){t.exports=o.p+"img/sam_special03_02.5a6b5b51.png"},9491:function(t,e,o){t.exports=o.p+"img/sam_special03_03.9c81365b.png"},7469:function(t,e,o){t.exports=o.p+"img/sam_special03_04.efe55f11.png"},9516:function(t,e,o){t.exports=o.p+"img/sam_special03_05.3a1f2804.png"}}]);
//# sourceMappingURL=9440.37b91726.js.map