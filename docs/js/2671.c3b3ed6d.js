"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[2671],{1136:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[s("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(a,e){return s("li",{key:e,class:{current:t.tabidx==e}},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(s){t.tabidx=e,t.indChk()}}},[t._v(t._s(a.item))])])})),0),t.moreTxt?s("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},i=[],l={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,s){var a=t.closest("ul");a.offsetWidth<t.closest(".tab_wrap").offsetWidth&&a.classList.add("full"),t.addEventListener("click",(function(){if(a.offsetWidth>t.closest(".tab_wrap").offsetWidth){var s,e=a.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],i=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),l=0,n=0;n=l-e,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?l-=i+n-.1*t.closest(".tab_wrap").offsetWidth:l+=i-n+.1*t.closest(".tab_wrap").offsetWidth,a.style.transform="translate("+l+"px, 0)",s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var r=s-a.offsetWidth;l>=0&&(a.style.transform="translate(0, 0)"),l<=r&&(a.style.transform="translate("+r+"px, 0)")}t.stopPropagation}))}));const s=document.querySelectorAll(".tab_wrap.type_slide ul");s.forEach((function(t,s){var a,e=0,i=0,l=0;a="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var n=t.offsetWidth-t.parentElement.offsetWidth+a;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(s){t.preventDefault;s.originalEvent;e=s.touches[0].screenX,i=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(s){s.originalEvent;l=parseInt(i)+parseInt(s.touches[0].screenX-e),t.style.transform="translate("+l+"px, 0px)"})),t.addEventListener("touchend",(function(s){l>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(l)>n&&l<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+a)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},n=l,r=a(1001),o=(0,r.Z)(n,e,i,!1,null,"a9668034",null),c=o.exports},2671:function(t,s,a){a.r(s),a.d(s,{default:function(){return d}});var e=function(){var t=this,s=t._self._c;return s("div",[s("h2",{ref:"header",staticClass:"sticky"},[t._m(0),s("strong",{staticClass:"title"},[t._v("포인트 내역")]),t._m(1)]),s("div",{staticClass:"content"},[t._m(2),s("div",{staticClass:"section_group pb0"},[s("div",{staticClass:"section pb0"},[s("Tabs",{attrs:{tabClass:"tab_type_05",tab_item:t.tab_item_month,tabidx:t.tabidx2}}),s("div",{staticClass:"multi_form"},[s("div",[s("label",{staticClass:"input_calendar",attrs:{for:"calendarStart"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalCalendar"}}},[s("input",{attrs:{type:"text",id:"calendarStart",readonly:"readonly",value:"2023-12-14"}})]),s("span",[t._v("~")]),s("label",{staticClass:"input_calendar",attrs:{for:"calendarEnd"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalCalendar"}}},[s("input",{attrs:{type:"text",id:"calendarEnd",readonly:"readonly",value:"2023-12-14"}})])]),s("em",[t._v("에러문구")])]),s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_default btn_mid",attrs:{href:""},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalPeriod"}}},[s("em",[t._v("조회")])])])],1),t._m(3)]),t._m(4)])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"area left"},[s("button",{staticClass:"icon backward"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"area right"},[s("button",{staticClass:"icon home"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"my_summary pt0"},[s("div",{staticClass:"count_box half"},[s("div",{staticClass:"cell"},[s("span",{staticClass:"title"},[t._v("보유 포인트")]),s("em",{staticClass:"count"},[t._v("99,999,999"),s("span",{staticClass:"unit"},[t._v("포인트")])])]),s("div",{staticClass:"cell"},[s("span",{staticClass:"title"},[t._v("소멸예정 포인트")]),s("em",{staticClass:"count"},[t._v("99,999,999"),s("span",{staticClass:"unit"},[t._v("포인트")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section"},[s("div",{staticClass:"order_empty"},[s("p",[t._v("포인트 내역이 없습니다.")])]),s("div",{staticClass:"list_point_table"},[s("table",[s("thead",[s("tr",[s("th",[t._v("상세내역")]),s("th",{staticClass:"align_right"},[t._v("금액")])])]),s("tbody",[s("tr",{staticClass:"expired"},[s("th",[s("strong",{staticClass:"title"},[t._v("기간만료")]),s("div",{staticClass:"context"},[s("p",[t._v("[주문번호] 1234567890")]),s("p",[t._v("[주문날짜] 2023.12.14")])])]),s("td",[s("p",{staticClass:"point"},[t._v("-1,000원")])])]),s("tr",{staticClass:"saved"},[s("th",[s("strong",{staticClass:"title"},[t._v("구매확정")]),s("div",{staticClass:"context"},[s("p",[t._v("[주문번호] 1234567890")]),s("p",[t._v("[주문날짜] 2023.12.14")])]),s("div",{staticClass:"d_day"},[s("p",[t._v("포인트 소멸 예정")]),s("p",[t._v("2023.12.14")])])]),s("td",[s("p",{staticClass:"point"},[t._v("+1,000원")])])]),s("tr",{staticClass:"spent"},[s("th",[s("strong",{staticClass:"title"},[t._v("상품구매")]),s("div",{staticClass:"context"},[s("p",[t._v("[주문번호] 1234567890")]),s("p",[t._v("[주문날짜] 2023.12.14")])])]),s("td",[s("p",{staticClass:"point"},[t._v("-1,000원")])])])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section_group no_bd"},[s("div",{staticClass:"section pb0"},[s("h4",{staticClass:"pt20 pb20"},[s("strong",{staticClass:"title bold"},[t._v("포인트 이용 안내")])]),s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("포인트는 상품 구매나 구매후기 작성 등을 통해 적립이 가능합니다.")]),s("li",[t._v("1 포인트는 현금 1원과 같으며 10원 단위로 사용이 가능합니다.")]),s("li",[t._v("포인트는 상품 구매 시 현금과 동일하게 사용이 가능하고 현금이나 다른 혜택으로의 전환은 불가능합니다.")]),s("li",[t._v("상품 구매 시 적립된 포인트의 유효기간은 6개월이며, 유효기간이 지난 포인트는 자동 소멸됩니다.")]),s("li",[t._v("이벤트성 포인트는 소멸기간이 다르니 해당 이벤트 페이지 내 공지된 유효기간을 꼭 확인해 주세요.")])])])])])}],l=a(1136),n={components:{Tabs:l.Z},data(){return{tabidx2:0,tab_item_month:[{item:"1개월"},{item:"3개월"},{item:"6개월"},{item:"1년"}]}}},r=n,o=a(1001),c=(0,o.Z)(r,e,i,!1,null,"98354758",null),d=c.exports}}]);
//# sourceMappingURL=2671.c3b3ed6d.js.map