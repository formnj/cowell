"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[4963],{1136:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[a("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,e){return a("li",{key:e,class:{current:t.tabidx==e}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){t.tabidx=e,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?a("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},i=[],n={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,a){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var a,e=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],i=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),n=0,l=0;l=n-e,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?n-=i+l-.1*t.closest(".tab_wrap").offsetWidth:n+=i-l+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+n+"px, 0)",a="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var r=a-s.offsetWidth;n>=0&&(s.style.transform="translate(0, 0)"),n<=r&&(s.style.transform="translate("+r+"px, 0)")}t.stopPropagation}))}));const a=document.querySelectorAll(".tab_wrap.type_slide ul");a.forEach((function(t,a){var s,e=0,i=0,n=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var l=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(a){t.preventDefault;a.originalEvent;e=a.touches[0].screenX,i=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(a){a.originalEvent;n=parseInt(i)+parseInt(a.touches[0].screenX-e),t.style.transform="translate("+n+"px, 0px)"})),t.addEventListener("touchend",(function(a){n>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(n)>l&&n<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},l=n,r=s(1001),o=(0,r.Z)(l,e,i,!1,null,"a9668034",null),c=o.exports},4963:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",[a("h2",{ref:"header",staticClass:"sticky"},[t._m(0),a("strong",{staticClass:"title"},[t._v("임직원 혜택")]),t._m(1)]),a("div",{staticClass:"content"},[t._m(2),t._m(3),a("div",{staticClass:"section_group pb0"},[a("div",{staticClass:"section pb0"},[a("Tabs",{attrs:{tabClass:"tab_type_05",tab_item:t.tab_item_month,tabidx:t.tabidx2}}),a("div",{staticClass:"multi_form"},[a("div",[a("label",{staticClass:"input_calendar",attrs:{for:"calendarStart"},on:{click:function(a){a.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalCalendar"}}},[a("input",{attrs:{type:"text",id:"calendarStart",readonly:"readonly",value:"2023-12-14"}})]),a("span",[t._v("~")]),a("label",{staticClass:"input_calendar",attrs:{for:"calendarEnd"},on:{click:function(a){a.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalCalendar"}}},[a("input",{attrs:{type:"text",id:"calendarEnd",readonly:"readonly",value:"2023-12-14"}})])]),a("em",[t._v("에러문구")])]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_default btn_mid",attrs:{href:""},on:{click:function(a){a.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalPeriod"}}},[a("em",[t._v("조회")])])])],1),t._m(4)]),t._m(5)])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"area left"},[a("button",{staticClass:"icon backward"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"area right"},[a("button",{staticClass:"icon home"})])},function(){var t=this,a=t._self._c;return a("h4",[a("strong",{staticClass:"title bold"},[t._v("한도 내역")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"gray_box pale mt10"},[a("table",[a("tbody",[a("tr",[a("th",{staticClass:"al"},[t._v("총 한도")]),a("td",{staticClass:"align_right"},[t._v("999,999,999원")])]),a("tr",[a("th",{staticClass:"al"},[t._v("잔여한도")]),a("td",{staticClass:"align_right"},[t._v("999,999,999원")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"section"},[a("div",{staticClass:"order_empty"},[a("p",[t._v("포인트 내역이 없습니다.")])]),a("div",{staticClass:"list_point_table"},[a("table",[a("thead",[a("tr",[a("th",[t._v("상세내역")]),a("th",{staticClass:"align_right"},[t._v("금액")])])]),a("tbody",[a("tr",{staticClass:"expired"},[a("th",[a("strong",{staticClass:"title"},[t._v("기간만료")]),a("div",{staticClass:"context"},[a("p",[t._v("주문번호 1234567890")]),a("p",[t._v("2023.12.14")])])]),a("td",[a("p",{staticClass:"point"},[t._v("-1,000원")])])]),a("tr",{staticClass:"saved"},[a("th",[a("strong",{staticClass:"title"},[t._v("구매확정")]),a("div",{staticClass:"context"},[a("p",[t._v("주문번호 1234567890")]),a("p",[t._v("2023.12.14")])]),a("div",{staticClass:"d_day"},[a("p",[t._v("포인트 소멸 예정")]),a("p",[t._v("2023.12.14")])])]),a("td",[a("p",{staticClass:"point"},[t._v("+1,000원")])])]),a("tr",{staticClass:"spent"},[a("th",[a("strong",{staticClass:"title"},[t._v("상품구매")]),a("div",{staticClass:"context"},[a("p",[t._v("주문번호 1234567890")]),a("p",[t._v("2023.12.14")])])]),a("td",[a("p",{staticClass:"point"},[t._v("-1,000원")])])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"section_group no_bd"},[a("div",{staticClass:"section pb0"},[a("h4",{staticClass:"pt20 pb20"},[a("strong",{staticClass:"title bold"},[t._v("임직원 혜택 이용 안내")])]),a("div",{staticClass:"list_bullet"},[a("ul",[a("li",[t._v("임직원 혜택 적용 시 쿠폰은 사용하실 수 없고 포인트 적립도 불가합니다.")]),a("li",[t._v("임직원 등급별 할인율과 총 한도가 부여되며 매년 1월 1일 한도가 초기화되어 갱신됩니다.")])])])])])}],n=s(1136),l={components:{Tabs:n.Z},data(){return{tabidx2:0,tab_item_month:[{item:"1개월"},{item:"3개월"},{item:"6개월"},{item:"1년"}]}}},r=l,o=s(1001),c=(0,o.Z)(r,e,i,!1,null,"4558cdbd",null),d=c.exports}}]);
//# sourceMappingURL=4963.67ecd056.js.map