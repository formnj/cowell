"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[4024],{3201:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[s("div",{staticClass:"modal_header"},[t.modalTitle?s("h2",[t._v(t._s(t.modalTitle))]):t._e(),s("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(s){t.$modal.hide("modalSkin"),t.modalClose(s)}}},[t._v("닫기")])]),t._t("bottom"),s("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},l=[],i={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},o=i,n=a(1001),r=(0,n.Z)(o,e,l,!1,null,null,null),c=r.exports},5068:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("label",{staticClass:"select"},[s("div",[s("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(s){t.isChange=!0}}},t._l(t.options,(function(a,e){return s("option",{key:e,domProps:{value:a.val}},[t._v(t._s(a.txt))])})),0)])])},l=[],i={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},o=i,n=a(1001),r=(0,n.Z)(o,e,l,!1,null,"20330496",null),c=r.exports},1136:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[s("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(a,e){return s("li",{key:e,class:{current:t.tabidx==e}},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(s){t.tabidx=e,t.indChk()}}},[t._v(t._s(a.item))])])})),0),t.moreTxt?s("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},l=[],i={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,s){var a=t.closest("ul");a.offsetWidth<t.closest(".tab_wrap").offsetWidth&&a.classList.add("full"),t.addEventListener("click",(function(){if(a.offsetWidth>t.closest(".tab_wrap").offsetWidth){var s,e=a.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],l=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),i=0,o=0;o=i-e,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?i-=l+o-.1*t.closest(".tab_wrap").offsetWidth:i+=l-o+.1*t.closest(".tab_wrap").offsetWidth,a.style.transform="translate("+i+"px, 0)",s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var n=s-a.offsetWidth;i>=0&&(a.style.transform="translate(0, 0)"),i<=n&&(a.style.transform="translate("+n+"px, 0)")}t.stopPropagation}))}));const s=document.querySelectorAll(".tab_wrap.type_slide ul");s.forEach((function(t,s){var a,e=0,l=0,i=0;a="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var o=t.offsetWidth-t.parentElement.offsetWidth+a;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(s){t.preventDefault;s.originalEvent;e=s.touches[0].screenX,l=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(s){s.originalEvent;i=parseInt(l)+parseInt(s.touches[0].screenX-e),t.style.transform="translate("+i+"px, 0px)"})),t.addEventListener("touchend",(function(s){i>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(i)>o&&i<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+a)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},o=i,n=a(1001),r=(0,n.Z)(o,e,l,!1,null,"a9668034",null),c=r.exports},4024:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"content mypage"},[t._m(0),s("div",{staticClass:"layout right"},[s("h2",[t._v("쿠폰 내역")]),s("Tabs",{staticClass:"center",attrs:{tabClass:"tab_type_03 center",tab_item:t.tab_item_category,tabidx:t.tabidx},on:{change:t.change}}),s("div",{staticClass:"flex_box",staticStyle:{"margin-top":"-80px"}},[s("SelectBox",{staticClass:"select_sort_review ml_auto",attrs:{options:t.sortCoupon,model:"최신순",isChange:!0}})],1),s("div",{staticClass:"list_card half pt50"},[s("ul",[s("li",[s("button",{staticClass:"coupon_card ticket",attrs:{type:"button"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="쿠폰 상세보기",t.modalContent="modalDetailTicket"}}},[t._m(1),t._m(2)])]),s("li",[s("button",{staticClass:"coupon_card delivery",attrs:{type:"button"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="쿠폰 상세보기",t.modalContent="modalDetailDelivery"}}},[t._m(3),t._m(4)])]),s("li",[s("button",{staticClass:"coupon_card cart",attrs:{type:"button"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="쿠폰 상세보기",t.modalContent="modalDetailCart"}}},[t._m(5),t._m(6)])])])]),t._m(7)],1)]),s("ModalSkin",{attrs:{modalTitle:t.modalTitle,modalClass:"modalDetailTicket"===t.modalContent||"modalDetailDelivery"===t.modalContent||"modalDetailCart"===t.modalContent?"full":""}},[s("div",{staticClass:"section_group"},[s("div",{staticClass:"section pt0"},["modalDetailTicket"===t.modalContent?[s("div",{staticClass:"coupon_detail_top pb20"},[s("strong",{staticClass:"title icon ticket"},[t._v("코트 한정 할인 쿠폰")])]),s("div",{staticClass:"linear_notice_box"},[s("div",{staticClass:"row cells bd"},[s("p",{staticClass:"al"},[t._v("사용가능기간 : 2022.02.02 ~ 03.31")]),s("span",[t._v("D-30")])])]),s("div",{staticClass:"list_bullet half"},[s("strong",{staticClass:"title bold pt30 pb10"},[t._v("쿠폰 적용 가능 대상")]),s("ul",t._l(t.couponBrands,(function(a,e){return s("li",{key:e},[t._v(" "+t._s(a.title)+" ")])})),0)]),s("div",{staticClass:"list_bullet half"},[s("strong",{staticClass:"title bold pt30 pb10"},[t._v("유의사항")]),s("ul",[s("li",[t._v("제한없이 사용 가능")])])])]:t._e(),"modalDetailDelivery"===t.modalContent?[s("div",{staticClass:"coupon_detail_top pb20"},[s("strong",{staticClass:"title icon delivery"},[t._v("무료배송")])]),s("div",{staticClass:"linear_notice_box"},[s("div",{staticClass:"row cells bd"},[s("p",{staticClass:"al"},[t._v("사용가능기간 : 2022.02.02 ~ 03.31")]),s("span",[t._v("D-30")])])]),s("div",{staticClass:"list_bullet half"},[s("strong",{staticClass:"title bold pt30 pb10"},[t._v("유의사항")]),s("ul",[s("li",[t._v("제한없이 사용 가능")])])])]:t._e(),"modalDetailCart"===t.modalContent?[s("div",{staticClass:"coupon_detail_top pb20"},[s("strong",{staticClass:"title icon cart"},[t._v("장바구니쿠폰")])]),s("div",{staticClass:"linear_notice_box"},[s("div",{staticClass:"row cells bd"},[s("p",{staticClass:"al"},[t._v("사용가능기간 : 2022.02.02 ~ 03.31")]),s("span",[t._v("D-30")])])]),s("div",{staticClass:"list_bullet half"},[s("strong",{staticClass:"title bold pt30 pb10"},[t._v("제외 대상")]),s("ul",t._l(t.couponBrands,(function(a,e){return s("li",{key:e},[t._v(" "+t._s(a.title)+" ")])})),0)]),s("div",{staticClass:"list_bullet half"},[s("strong",{staticClass:"title bold pt30 pb10"},[t._v("유의사항")]),s("ul",[s("li",[t._v("제한없이 사용 가능")])])])]:t._e()],2)])])],1)},l=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"layout left"},[s("div",{staticClass:"lnb"},[s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("나의 쇼핑")]),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("주문/배송")])]),s("li",[s("a",{attrs:{href:""}},[t._v("반품/교환")])]),s("li",[s("a",{attrs:{href:""}},[t._v("취소/환불")])]),s("li",[s("a",{attrs:{href:""}},[t._v("선물함")])])])]),s("li",[s("a",{attrs:{href:""}},[t._v("나의 혜택")]),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("쿠폰 내역")])]),s("li",[s("a",{attrs:{href:""}},[t._v("포인트 내역")])]),s("li",[s("a",{attrs:{href:""}},[t._v("임직원 혜택")])])])]),s("li",[s("a",{attrs:{href:""}},[t._v("나의 활동")]),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("1:1 문의 ")])]),s("li",[s("a",{attrs:{href:""}},[t._v("상품 문의")])]),s("li",[s("a",{attrs:{href:""}},[t._v("상품리뷰")])]),s("li",[s("a",{attrs:{href:""}},[t._v("관심 상품")])]),s("li",[s("a",{attrs:{href:""}},[t._v("관심 브랜드")])]),s("li",[s("a",{attrs:{href:""}},[t._v("최근 본 상품")])])])]),s("li",[s("a",{attrs:{href:""}},[t._v("나의 정보")]),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("회원정보 수정")])]),s("li",[s("a",{attrs:{href:""}},[t._v("간편로그인 연결")])]),s("li",[s("a",{attrs:{href:""}},[t._v("회원등급 안내")])]),s("li",[s("a",{attrs:{href:""}},[t._v("배송지 관리")])]),s("li",[s("a",{attrs:{href:""}},[t._v("회원탈퇴")])])])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"text"},[s("em",{staticClass:"percent"},[t._v("50,000원")]),s("strong",{staticClass:"title"},[t._v("코트 한정 할인 쿠폰 (2)")]),s("span",{staticClass:"d_day"},[t._v("D-30")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"condition"},[s("p",[t._v("최대할인 50,000원, 100,000원 이상 구매 시")]),s("p",[t._v("유의사항 : 적용가능품목 "),s("button",{staticClass:"button_specific",attrs:{type:"button"}},[t._v("품목보기")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"text"},[s("em",{staticClass:"percent"},[t._v("무료배송")]),s("strong",{staticClass:"title"},[t._v("시크릿! 무료배송 쿠폰")]),s("span",{staticClass:"d_day"},[t._v("D-30")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"condition"},[s("p",[t._v("최대할인 50,000원, 100,000원 이상 구매 시")]),s("p",[t._v("유의사항 : 적용가능품목 "),s("button",{staticClass:"button_specific",attrs:{type:"button"}},[t._v("품목보기")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"text"},[s("em",{staticClass:"percent"},[t._v("10%")]),s("strong",{staticClass:"title"},[t._v("아우터 할인 (1)")]),s("span",{staticClass:"d_day"},[t._v("D-30")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"condition"},[s("p",[t._v("최대할인 50,000원, 100,000원 이상 구매 시")]),s("p",[t._v("유의사항 : 적용가능품목 "),s("button",{staticClass:"button_specific",attrs:{type:"button"}},[t._v("품목보기")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section_group"},[s("div",{staticClass:"section"},[s("h4",{staticClass:"pt20 pb20 mb20 bd"},[s("strong",{staticClass:"title bold"},[t._v("쿠폰 이용 안내")])]),s("div",{staticClass:"list_bullet pb30"},[s("ul",[s("li",[t._v("비회원은 쿠폰 혜택이 제공되지 않으므로 회원가입 후 이용 부탁 드립니다.")]),s("li",[t._v("쿠폰 종류에 따라 다른 쿠폰과 동시 사용이 가능할 수 있고 포인트나 할인코드와도 동시 사용이 가능합니다.")]),s("li",[t._v("쿠폰 사용조건에 따라, 일부 카테고리, 상품 또는 브랜드에 사용이 제한될 수 있으며, 최소구매금액이나 최대할인금액이 제한될 수 있습니다.")]),s("li",[t._v("쿠폰은 사용기간이 만료된 경우 자동 소멸되며 만료된 쿠폰은 취소/반품 시 재발급이 불가합니다.")]),s("li",[t._v("회원탈퇴 시 보유한 쿠폰은 자동 소멸됩니다. (재가입 시에도 복구되지 않습니다.)")])])])])])}],i=a(1136),o=a(5068),n=a(3201),r={components:{Tabs:i.Z,SelectBox:o.Z,ModalSkin:n.Z},data(){return{tabidx:0,tab_item_category:[{item:"보유한 쿠폰(999)"},{item:"발급가능한 쿠폰(999)"}],sortCoupon:[{val:"최신순",txt:"최신순"},{val:"상품평 높은 순",txt:"상품평 높은 순"},{val:"상품평 낮은 순",txt:"상품평 낮은 순"}],modalTitle:"",modalContent:"",modalClass:"",couponBrands:[{title:"바나나 리퍼블릭",checked:!0},{title:"아디다스 오리지널",checked:!0},{title:"아디다스 퍼포먼스",checked:!0},{title:"컬럼비아 언더",checked:!1},{title:"푸마 바디웨어",checked:!1},{title:"노티카",checked:!1},{title:"띵크",checked:!1},{title:"라코스테",checked:!1},{title:"리복",checked:!1},{title:"리복 스포츠",checked:!1},{title:"리복 키즈",checked:!1},{title:"몽벨 언더웨어",checked:!1},{title:"밀레",checked:!1}]}},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},c=r,d=a(1001),_=(0,d.Z)(c,e,l,!1,null,"2d93bc14",null),u=_.exports}}]);
//# sourceMappingURL=4024.fe725a29.js.map