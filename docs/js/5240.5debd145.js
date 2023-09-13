"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5240],{427:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?s("label",{staticClass:"check"},[s("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),s("em",{staticClass:"label"},[t.required_txt?s("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):s("div",{staticClass:"label_wrap"},[s("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?s("i",[t._v(t._s(t.placeholder))]):t._e(),s("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),s("em",[t._v(t._s(t.err_text))])])])},i=[],n={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},l=n,o=a(1001),r=(0,o.Z)(l,e,i,!1,null,"566d6e0a",null),c=r.exports},3201:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[s("div",{staticClass:"modal_header"},[t.modalTitle?s("h2",[t._v(t._s(t.modalTitle))]):t._e(),s("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(s){t.$modal.hide("modalSkin"),t.modalClose(s)}}},[t._v("닫기")])]),t._t("bottom"),s("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},i=[],n={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},l=n,o=a(1001),r=(0,o.Z)(l,e,i,!1,null,null,null),c=r.exports},1136:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[s("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(a,e){return s("li",{key:e,class:{current:t.tabidx==e}},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(s){t.tabidx=e,t.indChk()}}},[t._v(t._s(a.item))])])})),0),t.moreTxt?s("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},i=[],n={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,s){var a=t.closest("ul");a.offsetWidth<t.closest(".tab_wrap").offsetWidth&&a.classList.add("full"),t.addEventListener("click",(function(){if(a.offsetWidth>t.closest(".tab_wrap").offsetWidth){var s,e=a.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],i=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),n=0,l=0;l=n-e,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?n-=i+l-.1*t.closest(".tab_wrap").offsetWidth:n+=i-l+.1*t.closest(".tab_wrap").offsetWidth,a.style.transform="translate("+n+"px, 0)",s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var o=s-a.offsetWidth;n>=0&&(a.style.transform="translate(0, 0)"),n<=o&&(a.style.transform="translate("+o+"px, 0)")}t.stopPropagation}))}));const s=document.querySelectorAll(".tab_wrap.type_slide ul");s.forEach((function(t,s){var a,e=0,i=0,n=0;a="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var l=t.offsetWidth-t.parentElement.offsetWidth+a;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(s){t.preventDefault;s.originalEvent;e=s.touches[0].screenX,i=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(s){s.originalEvent;n=parseInt(i)+parseInt(s.touches[0].screenX-e),t.style.transform="translate("+n+"px, 0px)"})),t.addEventListener("touchend",(function(s){n>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(n)>l&&n<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+a)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},l=n,o=a(1001),r=(0,o.Z)(l,e,i,!1,null,"a9668034",null),c=r.exports},5240:function(t,s,a){a.r(s),a.d(s,{default:function(){return _}});var e=function(){var t=this,s=t._self._c;return s("div",[s("h2",{ref:"header",staticClass:"sticky"},[t._m(0),s("strong",{staticClass:"title"},[t._v("주문/배송")]),t._m(1)]),s("div",{staticClass:"content pt0"},[s("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tab_item_menu,tabidx:t.tabidx}}),s("div",{staticClass:"section_group"},[s("div",{staticClass:"section pb0"},[s("Tabs",{attrs:{tabClass:"tab_type_05",tab_item:t.tab_item_month,tabidx:t.tabidx2}}),s("div",{staticClass:"multi_form"},[s("div",[s("label",{staticClass:"input_calendar",attrs:{for:"calendarStart"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalCalendar"}}},[s("input",{attrs:{type:"text",id:"calendarStart",readonly:"readonly",value:"2023-12-14"}})]),s("span",[t._v("~")]),s("label",{staticClass:"input_calendar",attrs:{for:"calendarEnd"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalCalendar"}}},[s("input",{attrs:{type:"text",id:"calendarEnd",readonly:"readonly",value:"2023-12-14"}})])]),s("em",[t._v("에러문구")])]),s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_default btn_mid",attrs:{href:""},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalPeriod"}}},[s("em",[t._v("조회")])])])],1),s("div",{staticClass:"section"},[t._m(2),t._m(3),s("ul",{staticClass:"cart_list"},t._l(t.cart,(function(a,e){return s("li",{key:e,staticClass:"goods_item",class:{disabled:"soldout"==a.status}},[s("div",{staticClass:"inner"},[s("span",{staticClass:"thumb"},[s("em",[s("img",{attrs:{src:a.img}})])]),s("div",{staticClass:"cont"},[s("a",{staticClass:"title",attrs:{hef:"#none"}},[s("strong",{staticClass:"pl0"},[t._v(t._s(a.brand))]),s("span",[t._v(t._s(a.tit))]),s("p",[t._l(t.cart[0].option,(function(a,e){return s("span",{key:e},[t._v(t._s(a)+",")])})),t._v(" "),s("span",[t._v("수량 "+t._s(a.quantity))])],2)]),s("strong",{staticClass:"price"},[t._v(t._s(a.price))]),s("span",{staticClass:"badge b1"},[t._v("입금대기")])])]),t._m(4,!0),t._m(5,!0)])})),0)])]),t._m(6)],1),s("ModalSkin",{attrs:{modalTitle:t.modalTitle}},["modalCalendar"===t.modalContent?s("div",[s("div",{staticClass:"calendar_box"},[s("div",{staticClass:"calendar_head"},[s("button",{staticClass:"button_prev year",attrs:{type:"button"}},[t._v("이전해")]),s("button",{staticClass:"button_prev month",attrs:{type:"button"}},[t._v("이전달")]),s("strong",{staticClass:"title"},[t._v("2023.12")]),s("button",{staticClass:"button_next month",attrs:{type:"button",disabled:""}},[t._v("다음달")]),s("button",{staticClass:"button_next year",attrs:{type:"button",disabled:""}},[t._v("다음해")])]),s("div",{staticClass:"calendar_body"},[s("div",{staticClass:"row week"},[s("span",[t._v("일")]),s("span",[t._v("월")]),s("span",[t._v("화")]),s("span",[t._v("수")]),s("span",[t._v("목")]),s("span",[t._v("금")]),s("span",[t._v("토")])]),s("div",{staticClass:"row days"},[s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("1")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("2")])]),s("div",{staticClass:"row days"},[s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("3")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("4")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("5")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("6")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("7")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("8")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("9")])]),s("div",{staticClass:"row days"},[s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("10")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("11")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("12")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("13")]),s("button",{staticClass:"day today",attrs:{type:"button"}},[t._v("14")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("15")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("16")])]),s("div",{staticClass:"row days"},[s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("17")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("18")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("19")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("20")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("21")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("22")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("23")])]),s("div",{staticClass:"row days"},[s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("24")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("25")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("26")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("27")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("28")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("29")]),s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("30")])]),s("div",{staticClass:"row days"},[s("button",{staticClass:"day",attrs:{type:"button"}},[t._v("31")]),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}}),s("button",{staticClass:"day",attrs:{type:"button"}})])])]),s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_default btn_big",attrs:{"data-v-79af41a1":"",href:""}},[s("em",{attrs:{"data-v-79af41a1":""}},[t._v("확인")])])])]):t._e(),"modalPeriod"===t.modalContent?s("div",[s("p",{staticClass:"align_center pt20 pb20"},[t._v("조회 가능 기간이 아닙니다. "),s("br"),t._v("다시 확인 부탁드립니다.")]),s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_default btn_big",attrs:{"data-v-79af41a1":"",href:""}},[s("em",{attrs:{"data-v-79af41a1":""}},[t._v("확인")])])])]):t._e()])],1)},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"area left"},[s("button",{staticClass:"icon backward"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"area right"},[s("button",{staticClass:"icon home"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"order_empty"},[s("p",[t._v("기간 내 주문하신 상품 내역이 없습니다.")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart_name"},[s("strong",{staticClass:"name"},[t._v("2023.12.14")]),s("button",{staticClass:"button_detail",attrs:{type:"button"}},[t._v("상세보기")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_black02 btn_mid",attrs:{href:""}},[s("em",[t._v("구매확정")])]),s("a",{staticClass:"btn_default btn_mid",attrs:{href:""}},[s("em",[t._v("배송조회")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_black02 btn_mid",attrs:{href:""}},[s("em",[t._v("재구매")])]),s("a",{staticClass:"btn_confirm btn_mid",attrs:{href:""}},[s("em",[t._v("상품리뷰")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section_group no_bd"},[s("div",{staticClass:"section pb0"},[s("h4",{staticClass:"pt20 pb20"},[s("strong",{staticClass:"title bold"},[t._v("주문/배송 안내")])]),s("div",{staticClass:"list_bullet"},[s("strong",{staticClass:"title"},[t._v("입금대기")]),s("ul",[s("li",[t._v("주문이 정상적으로 접수되었습니다.")]),s("li",[t._v("결제방법을 가상계좌로 선택하신 경우, 정해진 기간 내에 입금이 완료되어야만 입금대기에서 결제완료 단계로 진행됩니다. 정해진 기간 경과 시, 주문은 자동 취소됩니다.")]),s("li",[t._v("가상계좌의 경우, 입금대기 상태에서 부분취소가 불가능합니다.")])])]),s("div",{staticClass:"list_bullet"},[s("strong",{staticClass:"title"},[t._v("결제완료")]),s("ul",[s("li",[t._v("주문 및 결제/입금 처리가 최종 완료 되었습니다.")]),s("li",[t._v("주문 취소와 배송지 주소 변경이 가능합니다.")])])]),s("div",{staticClass:"list_bullet"},[s("strong",{staticClass:"title"},[t._v("상품준비중")]),s("ul",[s("li",[t._v("발송 전까지만 주문 취소가 가능합니다.")]),s("li",[t._v("주문 취소가 불가능할 경우 고객센터 (02-6390-8000, 내선번호 3번)로 연락주시기 바랍니다.")])])]),s("div",{staticClass:"list_bullet"},[s("strong",{staticClass:"title"},[t._v("배송준비중")]),s("ul",[s("li",[t._v("상품의 재고 확인 후, 주문하신 상품의 택배 배송을 위해 준비하고 인계하는 단계입니다.")]),s("li",[t._v("배송준비중 단계인 경우, 주문취소가 불가능합니다.")])])]),s("div",{staticClass:"list_bullet"},[s("strong",{staticClass:"title"},[t._v("배송중")]),s("ul",[s("li",[t._v("택배사에 상품이 인계되어 고객님께 배송되는 있는 단계입니다.")]),s("li",[t._v("도서/산간 지역을 제외한 지역의 경우, 1일~5일 정도 소요되며, 협력업체의 사정으로 배송이 지연될 경우도 있습니다.")]),s("li",[t._v("지연될 경우에는 별도로 연락을 드리거나 상품 설명에 기재를 하고 있으니 구매 전 참고해 주세요.")])])]),s("div",{staticClass:"list_bullet"},[s("strong",{staticClass:"title"},[t._v("배송완료")]),s("ul",[s("li",[t._v("주문하신 상품을 고객님께 전달이 되어 배송이 완료된 상태입니다.")])])]),s("div",{staticClass:"list_bullet no_bd"},[s("strong",{staticClass:"title"},[t._v("구매확정")]),s("ul",[s("li",[t._v("배송완료후 7일 이후에는 구매확정으로 자동 변경됩니다.")])])])]),s("div",{staticClass:"section pt0"},[s("div",{staticClass:"gray_box opacity mt0"},[s("h4",[s("strong",{staticClass:"title icon document"},[t._v("유의사항")])]),s("p",{staticClass:"paragraph pt10"},[t._v("코웰패션닷컴 배송업체는 CJ택배 (1588-1255)입니다. "),s("br"),s("br"),t._v("구매금액 30,000원 미만은 3,000원의 배송비가 부과되며, 도서산간 지역은 상품 특성에 따라 추가 배송료가 부가될 수 있습니다.")])])])])}],n=a(1136),l=a(427),o=a(3201),r={components:{Tabs:n.Z,Inputs:l.Z,ModalSkin:o.Z},data(){return{tabidx:1,tab_item_menu:[{item:"마이페이지"},{item:"주문/배송"},{item:"반품/교환"},{item:"취소/환불"},{item:"선물함"},{item:"1:1문의"},{item:"상품문의"},{item:"구매후기"}],tabidx2:0,tab_item_month:[{item:"1개월"},{item:"3개월"},{item:"6개월"},{item:"1년"}],cart:[{img:a(4202),brand:"Nike",tit:"제품명 길이 제한 없음. 제품명 길이 제한 없음.제품명 길이 제한 없음",option:["BEIGE","66","FREE"],quantity:"1",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:2,status:"soldout"},{img:a(7788),brand:"Nike",tit:"나이키 에어",option:["BEIGE","66","FREE"],price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:1},{img:a(305),brand:"Nike",tit:"나이키 에어",option:["BEIGE","66","FREE"],price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:2,status:"soldout"}],modalTitle:"",modalContent:""}},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},c=r,d=a(1001),u=(0,d.Z)(c,e,i,!1,null,"3d22e248",null),_=u.exports},7788:function(t,s,a){t.exports=a.p+"img/sam_goods01.65933508.png"},4202:function(t,s,a){t.exports=a.p+"img/sam_goods02.794709c0.png"},305:function(t,s,a){t.exports=a.p+"img/sam_goods03.70b43f27.png"}}]);
//# sourceMappingURL=5240.5debd145.js.map