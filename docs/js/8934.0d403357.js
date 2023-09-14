"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[8934],{427:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?a("label",{staticClass:"check"},[a("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),a("em",{staticClass:"label"},[t.required_txt?a("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):a("div",{staticClass:"label_wrap"},[a("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?a("i",[t._v(t._s(t.placeholder))]):t._e(),a("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),a("em",[t._v(t._s(t.err_text))])])])},i=[],n={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},r=n,l=s(1001),o=(0,l.Z)(r,e,i,!1,null,"566d6e0a",null),c=o.exports},3201:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[a("div",{staticClass:"modal_header"},[t.modalTitle?a("h2",[t._v(t._s(t.modalTitle))]):t._e(),a("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(a){t.$modal.hide("modalSkin"),t.modalClose(a)}}},[t._v("닫기")])]),t._t("bottom"),a("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},i=[],n={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},r=n,l=s(1001),o=(0,l.Z)(r,e,i,!1,null,null,null),c=o.exports},1136:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[a("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,e){return a("li",{key:e,class:{current:t.tabidx==e}},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){t.tabidx=e,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?a("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},i=[],n={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,a){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var a,e=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],i=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),n=0,r=0;r=n-e,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?n-=i+r-.1*t.closest(".tab_wrap").offsetWidth:n+=i-r+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+n+"px, 0)",a="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var l=a-s.offsetWidth;n>=0&&(s.style.transform="translate(0, 0)"),n<=l&&(s.style.transform="translate("+l+"px, 0)")}t.stopPropagation}))}));const a=document.querySelectorAll(".tab_wrap.type_slide ul");a.forEach((function(t,a){var s,e=0,i=0,n=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var r=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(a){t.preventDefault;a.originalEvent;e=a.touches[0].screenX,i=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(a){a.originalEvent;n=parseInt(i)+parseInt(a.touches[0].screenX-e),t.style.transform="translate("+n+"px, 0px)"})),t.addEventListener("touchend",(function(a){n>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(n)>r&&n<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},r=n,l=s(1001),o=(0,l.Z)(r,e,i,!1,null,"a9668034",null),c=o.exports},8934:function(t,a,s){s.r(a),s.d(a,{default:function(){return _}});var e=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"content mypage"},[t._m(0),a("div",{staticClass:"layout right"},[a("h2",[t._v("선물함")]),a("Tabs",{staticClass:"center",attrs:{tabClass:"tab_type_03 center",tab_item:t.tab_item_category,tabidx:t.tabidx},on:{change:t.change}}),a("div",{staticClass:"sort_period pb50"},[t._m(1),a("div",{staticClass:"multi_form"},[a("div",[a("label",{staticClass:"input_calendar",attrs:{for:"calendarStart"},on:{click:function(a){return a.preventDefault(),t.openStartCalendar.apply(null,arguments)}}},[a("input",{attrs:{type:"text",id:"calendarStart",readonly:"readonly",value:"2023-12-14"}}),a("div",{ref:"calendarStartLayer",staticClass:"calendar_layer"},[t._m(2)])]),a("span",[t._v("~")]),a("label",{staticClass:"input_calendar",attrs:{for:"calendarEnd"},on:{click:function(a){return a.preventDefault(),t.openEndCalendar.apply(null,arguments)}}},[a("input",{attrs:{type:"text",id:"calendarEnd",readonly:"readonly",value:"2023-12-14"}}),a("div",{ref:"calendarEndLayer",staticClass:"calendar_layer"},[t._m(3)])]),t._m(4)])])]),a("div",{staticClass:"list_product"},[t._m(5),a("ul",[a("li",[a("div",{staticClass:"card_product"},[t._m(6),a("div",{staticClass:"main"},[t._m(7),a("div",{staticClass:"info"},[a("span",{staticClass:"quantity"},[t._v("999")]),a("span",{staticClass:"price"},[t._v("999,999,999원")]),a("span",{staticClass:"status"},[t._v("수령가능")]),a("div",{staticClass:"buttons"},[a("button",{staticClass:"dark",attrs:{type:"button"},on:{click:function(a){a.preventDefault(),t.openModal("modalSkin"),t.modalTitle="배송지 입력",t.modalContent="modalAccept"}}},[t._v("선물수락")]),a("button",{attrs:{type:"button"},on:{click:function(a){a.preventDefault(),t.openModal("modalSkin"),t.modalTitle="",t.modalContent="modalReject"}}},[t._v("선물거절")])])])]),t._m(8)])]),t._m(9),t._m(10)])])],1)]),a("ModalSkin",{attrs:{modalTitle:t.modalTitle,modalContent:t.modalContent,modalClass:"modalAccept"===t.modalContent?"wide":""}},["modalAccept"==t.modalContent?a("div",[a("div",{staticClass:"order_info"},[a("ul",{staticClass:"form_group"},[a("li",{staticClass:"required"},[a("p",{staticClass:"form_tit"},[a("em",[t._v("주소별칭")])]),a("Inputs",{attrs:{input_type:"text",placeholder:"주소별칭 입력"}})],1),a("li",{staticClass:"required"},[a("p",{staticClass:"form_tit"},[a("em",[t._v("수령인명")])]),a("Inputs",{attrs:{input_type:"text",placeholder:"받는분 성함을 입력하세요."}})],1),a("li",{staticClass:"required"},[a("p",{staticClass:"form_tit"},[a("em",[t._v("휴대폰 번호")])]),a("Inputs",{attrs:{input_type:"text",placeholder:"‘-’없이 숫자만 입력"}})],1),a("li",{staticClass:"top required"},[a("p",{staticClass:"form_tit"},[a("em",[t._v("배송지 주소")])]),a("div",{staticStyle:{flex:"1"}},[a("div",{staticClass:"multi_form"},[a("div",[a("Inputs",{attrs:{input_type:"text",placeholder:"우편번호와 주소를 입력해주세요.",err_text:"에러문구"}}),a("button",{staticClass:"btn_mid btn_default",on:{click:function(a){a.preventDefault(),t.openModal("modalSkin"),t.modalTitle="주소검색",t.modalContent="address_search"}}},[a("em",[t._v("주소검색")])])],1),a("em",[t._v("에러문구")])]),a("Inputs",{attrs:{input_type:"text",placeholder:"상세 주소를 입력해주세요."}}),a("p",{staticClass:"mt10"},[t._v("결제 후 배송지 수정이 불가능하니 한번 더 확인해주세요.")])],1)]),a("li",[a("p",{staticClass:"form_tit"},[a("em",[t._v("배송 메시지 ")])]),a("div",{staticStyle:{flex:"1"}},[a("SelectBox",{attrs:{options:t.message,model:"모델"}}),a("Inputs",{staticClass:"mt10",attrs:{input_type:"text",placeholder:"내용을 입력해 주세요."}})],1)])])]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_big btn_default",attrs:{href:""}},[a("em",[t._v("등록")])])])]):t._e(),"modalReject"==t.modalContent?a("div",[a("p",{staticClass:"align_center"},[t._v(" 보내신 선물을 취소 처리하시겠습니까? ")]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_mid btn_cancel",attrs:{href:""}},[a("em",[t._v("취소")])]),a("a",{staticClass:"btn_mid btn_default",attrs:{href:""}},[a("em",[t._v("확인")])])]),a("p",{staticClass:"align_center"},[t._v(" 기입력하신 수령인의 휴대폰 번호로 "),a("br"),t._v("재전송하였습니다. ")]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_mid btn_default",attrs:{href:""}},[a("em",[t._v("확인")])])]),a("p",{staticClass:"align_center"},[t._v(" 선물 수락과 배송지 입력이 "),a("br"),t._v("성공적으로 처리되었습니다. ")]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_mid btn_default",attrs:{href:""}},[a("em",[t._v("확인")])])]),a("p",{staticClass:"align_center"},[t._v(" 보내신 선물을 취소 처리하였습니다. "),a("br"),t._v(" "),a("br"),t._v(" 결제수단에 따라 환불까지 시일이 소요되오니 "),a("br"),t._v("참고 부탁드립니다. ")]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_mid btn_default",attrs:{href:""}},[a("em",[t._v("확인")])])]),a("p",{staticClass:"align_center"},[t._v(" 받으신 선물을 거절하시겠습니까? ")]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_mid btn_cancel",attrs:{href:""}},[a("em",[t._v("취소")])]),a("a",{staticClass:"btn_mid btn_default",attrs:{href:""}},[a("em",[t._v("확인")])])]),a("p",{staticClass:"align_center"},[t._v(" 선물 거절이 처리되었습니다. "),a("br"),t._v(" 선물하신 분에게 환불 처리가 될 예정입니다. ")]),a("div",{staticClass:"btnSection"},[a("a",{staticClass:"btn_mid btn_default",attrs:{href:""}},[a("em",[t._v("확인")])])])]):t._e()])],1)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"layout left"},[a("div",{staticClass:"lnb"},[a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("나의 쇼핑")]),a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("주문/배송")])]),a("li",[a("a",{attrs:{href:""}},[t._v("반품/교환")])]),a("li",[a("a",{attrs:{href:""}},[t._v("취소/환불")])]),a("li",[a("a",{attrs:{href:""}},[t._v("선물함")])])])]),a("li",[a("a",{attrs:{href:""}},[t._v("나의 혜택")]),a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("쿠폰 내역")])]),a("li",[a("a",{attrs:{href:""}},[t._v("포인트 내역")])]),a("li",[a("a",{attrs:{href:""}},[t._v("임직원 혜택")])])])]),a("li",[a("a",{attrs:{href:""}},[t._v("나의 활동")]),a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("1:1 문의 ")])]),a("li",[a("a",{attrs:{href:""}},[t._v("상품 문의")])]),a("li",[a("a",{attrs:{href:""}},[t._v("상품리뷰")])]),a("li",[a("a",{attrs:{href:""}},[t._v("관심 상품")])]),a("li",[a("a",{attrs:{href:""}},[t._v("관심 브랜드")])]),a("li",[a("a",{attrs:{href:""}},[t._v("최근 본 상품")])])])]),a("li",[a("a",{attrs:{href:""}},[t._v("나의 정보")]),a("ul",[a("li",[a("a",{attrs:{href:""}},[t._v("회원정보 수정")])]),a("li",[a("a",{attrs:{href:""}},[t._v("간편로그인 연결")])]),a("li",[a("a",{attrs:{href:""}},[t._v("회원등급 안내")])]),a("li",[a("a",{attrs:{href:""}},[t._v("배송지 관리")])]),a("li",[a("a",{attrs:{href:""}},[t._v("회원탈퇴")])])])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"buttons"},[a("span",{staticClass:"input_radio_button"},[a("input",{attrs:{type:"radio",id:"radioPeriod01",name:"radioPeriod",checked:""}}),a("label",{attrs:{for:"radioPeriod01"}},[t._v("1개월")])]),a("span",{staticClass:"input_radio_button"},[a("input",{attrs:{type:"radio",id:"radioPeriod02",name:"radioPeriod"}}),a("label",{attrs:{for:"radioPeriod02"}},[t._v("3개월")])]),a("span",{staticClass:"input_radio_button"},[a("input",{attrs:{type:"radio",id:"radioPeriod03",name:"radioPeriod"}}),a("label",{attrs:{for:"radioPeriod03"}},[t._v("6개월")])]),a("span",{staticClass:"input_radio_button"},[a("input",{attrs:{type:"radio",id:"radioPeriod04",name:"radioPeriod"}}),a("label",{attrs:{for:"radioPeriod04"}},[t._v("1년")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"calendar_box"},[a("div",{staticClass:"calendar_head"},[a("button",{staticClass:"button_prev year",attrs:{type:"button"}},[t._v("이전해")]),a("button",{staticClass:"button_prev month",attrs:{type:"button"}},[t._v("이전달")]),a("strong",{staticClass:"title"},[t._v("2023.12")]),a("button",{staticClass:"button_next month",attrs:{type:"button",disabled:""}},[t._v("다음달")]),a("button",{staticClass:"button_next year",attrs:{type:"button",disabled:""}},[t._v("다음해")])]),a("div",{staticClass:"calendar_body"},[a("div",{staticClass:"row week"},[a("span",[t._v("일")]),a("span",[t._v("월")]),a("span",[t._v("화")]),a("span",[t._v("수")]),a("span",[t._v("목")]),a("span",[t._v("금")]),a("span",[t._v("토")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("1")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("2")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("3")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("4")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("5")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("6")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("7")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("8")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("9")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("10")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("11")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("12")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("13")]),a("button",{staticClass:"day today",attrs:{type:"button"}},[t._v("14")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("15")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("16")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("17")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("18")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("19")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("20")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("21")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("22")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("23")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("24")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("25")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("26")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("27")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("28")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("29")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("30")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("31")]),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}})])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"calendar_box"},[a("div",{staticClass:"calendar_head"},[a("button",{staticClass:"button_prev year",attrs:{type:"button"}},[t._v("이전해")]),a("button",{staticClass:"button_prev month",attrs:{type:"button"}},[t._v("이전달")]),a("strong",{staticClass:"title"},[t._v("2023.12")]),a("button",{staticClass:"button_next month",attrs:{type:"button",disabled:""}},[t._v("다음달")]),a("button",{staticClass:"button_next year",attrs:{type:"button",disabled:""}},[t._v("다음해")])]),a("div",{staticClass:"calendar_body"},[a("div",{staticClass:"row week"},[a("span",[t._v("일")]),a("span",[t._v("월")]),a("span",[t._v("화")]),a("span",[t._v("수")]),a("span",[t._v("목")]),a("span",[t._v("금")]),a("span",[t._v("토")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("1")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("2")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("3")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("4")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("5")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("6")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("7")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("8")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("9")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("10")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("11")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("12")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("13")]),a("button",{staticClass:"day today",attrs:{type:"button"}},[t._v("14")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("15")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("16")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("17")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("18")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("19")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("20")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("21")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("22")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("23")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("24")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("25")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("26")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("27")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("28")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("29")]),a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("30")])]),a("div",{staticClass:"row days"},[a("button",{staticClass:"day",attrs:{type:"button"}},[t._v("31")]),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}}),a("button",{staticClass:"day",attrs:{type:"button"}})])])])},function(){var t=this,a=t._self._c;return a("a",{staticClass:"btn_default btn_mid",staticStyle:{"min-width":"100px"},attrs:{href:""}},[a("em",[t._v("조회")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"order_empty"},[a("p",[t._v("기간 내 받으신 선물 내역이 없습니다.")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"top"},[a("span",{staticClass:"date"},[t._v("2023.12.14")]),a("span",{staticClass:"order_number"},[a("span",[t._v("주문번호")]),a("em",[t._v("2023012609093717645")])])])},function(){var t=this,a=t._self._c;return a("a",{staticClass:"product",attrs:{href:""}},[a("span",{staticClass:"image"},[a("img",{attrs:{src:s(1016),alt:""}})]),a("div",{staticClass:"text"},[a("strong",{staticClass:"brand"},[t._v("NOTICA")]),a("p",{staticClass:"name"},[t._v("이월 21 푸마 바디웨어 남성 액티브모션 바디웨어 드로즈(센라이트레드)")]),a("span",{staticClass:"option"},[t._v("옵션 : BEIGE 66, FREE")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"bottom"},[a("span",{staticClass:"name"},[t._v("사은품")]),a("p",{staticClass:"context"},[t._v("양말, FREE, 1")])])},function(){var t=this,a=t._self._c;return a("li",[a("div",{staticClass:"card_product"},[a("div",{staticClass:"top"},[a("span",{staticClass:"date"},[t._v("2023.12.14")]),a("span",{staticClass:"order_number"},[a("span",[t._v("주문번호")]),a("em",[t._v("2023012609093717645")])])]),a("div",{staticClass:"main"},[a("a",{staticClass:"product",attrs:{href:""}},[a("span",{staticClass:"image"},[a("img",{attrs:{src:s(2364),alt:""}})]),a("div",{staticClass:"text"},[a("strong",{staticClass:"brand"},[t._v("NOTICA")]),a("p",{staticClass:"name"},[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellendus officiis explicabo quod placeat ipsa quis debitis facilis quasi et officia repudiandae quia beatae rerum, tempora aperiam sapiente. Id, velit.")]),a("span",{staticClass:"option"},[t._v("옵션 : BEIGE 66, FREE")])])]),a("div",{staticClass:"info"},[a("span",{staticClass:"quantity"},[t._v("999")]),a("span",{staticClass:"price"},[t._v("999,999원")]),a("span",{staticClass:"status"},[t._v("수령완료")])])]),a("div",{staticClass:"bottom"},[a("span",{staticClass:"name"},[t._v("사은품")]),a("p",{staticClass:"context"},[t._v("양말, FREE, 1")])])])])},function(){var t=this,a=t._self._c;return a("li",[a("div",{staticClass:"card_product"},[a("div",{staticClass:"top"},[a("span",{staticClass:"date"},[t._v("2023.12.14")]),a("span",{staticClass:"order_number"},[a("span",[t._v("주문번호")]),a("em",[t._v("2023012609093717645")])])]),a("div",{staticClass:"main"},[a("a",{staticClass:"product",attrs:{href:""}},[a("span",{staticClass:"image"},[a("img",{attrs:{src:s(4536),alt:""}})]),a("div",{staticClass:"text"},[a("strong",{staticClass:"brand"},[t._v("NOTICA")]),a("p",{staticClass:"name"},[t._v("이월 21 푸마 바디웨어 남성 액티브모션 바디웨어 드로즈(센라이트레드)")]),a("span",{staticClass:"option"},[t._v("옵션 : BEIGE 66, FREE")])])]),a("div",{staticClass:"info"},[a("span",{staticClass:"quantity"},[t._v("1")]),a("span",{staticClass:"price"},[t._v("99,999원")]),a("span",{staticClass:"status"},[t._v("선물거절")])])]),a("div",{staticClass:"bottom"},[a("span",{staticClass:"name"},[t._v("사은품")]),a("p",{staticClass:"context"},[t._v("양말, FREE, 1")])])])])}],n=s(1136),r=s(427),l=s(3201),o={components:{Tabs:n.Z,Inputs:r.Z,ModalSkin:l.Z},data(){return{tabidx:0,tab_item_category:[{item:"받은 선물 내역(999)"},{item:"보낸 선물 내역(999)"}],modalTitle:"",modalContent:"",modalClass:""}},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},c=o,d=s(1001),u=(0,d.Z)(c,e,i,!1,null,"e944b89a",null),_=u.exports},1016:function(t,a,s){t.exports=s.p+"img/imgreview01.e16dfb1b.png"},2364:function(t,a,s){t.exports=s.p+"img/imgreview02.a876e68e.png"},4536:function(t,a,s){t.exports=s.p+"img/imgreview03.374d0587.png"}}]);
//# sourceMappingURL=8934.0d403357.js.map