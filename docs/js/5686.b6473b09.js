"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5686],{5686:function(t,s,i){i.r(s),i.d(s,{default:function(){return b}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),s("div",{staticClass:"order_wrap"},[s("div",{staticClass:"list_wrap"},[s("ul",{staticClass:"cart_list"},t._l(t.cart,(function(i,e){return s("li",{key:e,staticClass:"goods_item"},[s("span",{staticClass:"thumb"},[s("em",[s("img",{attrs:{src:i.img}})])]),s("div",{staticClass:"cont"},[s("a",{staticClass:"title",attrs:{hef:"#none"}},[s("strong",[t._v(t._s(i.brand))]),s("span",[t._v(t._s(i.tit))]),s("p",[t._v(t._s(i.option))])]),i.gift?s("div",{staticClass:"gift"},[s("span",[t._v("사은품 선택")]),s("SelectBox",{attrs:{options:i.gift,model:"모델"}})],1):t._e()]),s("div",{staticClass:"price_wrap"},[s("strong",{staticClass:"quantity"},[t._v("1 건")]),s("strong",{staticClass:"price"},[s("del",[t._v(t._s(i.ori_price))]),s("em",{staticClass:"discount"},[t._v(t._s(i.discount))]),t._v(" "+t._s(i.price)+" ")])])])})),0),s("h3",[t._v("주문자 정보")]),s("div",{staticClass:"order_info"},[s("ul",{staticClass:"form_group"},[t._m(1),t._m(2),s("li",{staticClass:"required"},[t._m(3),s("Inputs",{attrs:{input_type:"text",placeholder:"이메일을 입력해주세요."}})],1)])]),s("h3",[t._v("배송지 정보 "),s("div",[s("Inputs",{attrs:{input_type:"checkbox",text:"주문자와 동일"}})],1)]),s("div",{staticClass:"order_info"},[s("ul",{staticClass:"form_group"},[s("li",{staticClass:"required"},[t._m(4),s("Inputs",{attrs:{input_type:"text",placeholder:"받는분 성함을 입력하세요."}})],1),s("li",{staticClass:"required"},[t._m(5),s("Inputs",{attrs:{input_type:"text",placeholder:"‘-’없이 숫자만 입력"}})],1),s("li",{staticClass:"top required"},[t._m(6),s("div",[s("div",{staticClass:"multi_form"},[s("div",[s("Inputs",{attrs:{input_type:"text",placeholder:"우편번호와 주소를 입력해주세요.",err_text:"에러문구"}}),s("button",{staticClass:"btn_mid btn_default",on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="주소검색",t.modalContent="address_search"}}},[s("em",[t._v("주소검색")])])],1),s("em",[t._v("에러문구")])]),s("Inputs",{attrs:{input_type:"text",placeholder:"상세 주소를 입력해주세요."}}),s("p",{staticClass:"mt10"},[t._v("결제 후 배송지 수정이 불가능하니 한번 더 확인해주세요.")])],1)]),s("li",[t._m(7),s("div",[s("SelectBox",{attrs:{options:t.message,model:"모델"}}),s("Inputs",{staticClass:"mt10",attrs:{input_type:"text",placeholder:"내용을 입력해 주세요."}})],1)])])]),s("h3",[t._v("결제 수단")]),s("div",{staticClass:"payment_info"},[s("ul",{staticClass:"check_group"},[s("li",[s("Inputs",{attrs:{input_type:"radio",text:"신용카드"}})],1),s("li",[s("Inputs",{attrs:{input_type:"radio",text:"계좌이체"}})],1),s("li",[s("Inputs",{attrs:{input_type:"radio",text:"가상계좌"}})],1),s("li",[s("Inputs",{attrs:{input_type:"radio",text:"네이버 페이"}})],1),s("li",[s("Inputs",{attrs:{input_type:"radio",text:"카카오 페이"}})],1),s("li",[s("Inputs",{attrs:{input_type:"radio",text:"PAYCO"}})],1),s("li",[s("Inputs",{attrs:{input_type:"radio",text:"toss pay"}})],1)]),s("button",{staticClass:"btn_min btn_info",on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalContent="installment"}}},[s("em",[t._v("12월 무이자 할부 안내")])]),s("button",{staticClass:"btn_min btn_info",on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalContent="installment"}}},[s("em",[t._v("카드사별 혜택안내")])]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13)]),s("h3",[t._v("환불계좌 정보")]),s("p",{staticClass:"color_gray"},[t._v("등록된 환불계좌 정보가 없습니다. 아래의 은행을 터치하여 환불계좌를 등록해 주세요.")]),s("div",{staticClass:"order_info"},[s("ul",{staticClass:"form_group"},[s("li",{staticClass:"required"},[t._m(14),s("SelectBox",{attrs:{options:t.bank,model:"모델"}})],1),s("li",{staticClass:"required"},[t._m(15),s("Inputs",{attrs:{input_type:"text",placeholder:"계좌번호를 입력하세요."}})],1),s("li",{staticClass:"required"},[t._m(16),s("Inputs",{attrs:{input_type:"text",placeholder:"예금주를 입력해주세요."}})],1)]),t._m(17)])]),s("div",{staticClass:"pay_wrap"},[s("div",{staticClass:"inner"},[s("dl",[s("dt",[t._v("결제예정금액")]),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),s("dd",[s("ul",[s("li",[s("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"비회원 개인정보 수집 및 이용 동의",required_type:"requierd",required_txt:"(필수)"}}),s("a",{staticClass:"see_more",attrs:{href:"#none"},on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="비회원구매 개인정보 수집 및 이용동의",t.modalContent="policy"}}},[t._v("더보기")])],1),s("li",[s("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의 하시겠습니까? (전자상거래법 제 8조 제 2항)",required_type:"requierd",required_txt:"(필수)"}})],1)])])]),t._m(25)])])]),s("ModalSkin",{attrs:{modalTitle:t.modalTitle}},["installment"===t.modalContent?s("InstallmentInfo"):t._e(),"address_search"===t.modalContent?s("AddressSearch"):t._e(),"address_search"==t.modalContent?s("div",{staticClass:"modal_bottom btnSection",attrs:{slot:"bottom"},slot:"bottom"},[s("a",{staticClass:"btn_mid btn_default",attrs:{href:"#none"}},[s("em",[t._v("확인")])])]):t._e(),"shippingList"===t.modalContent?s("ShippingAddress"):t._e(),"shippingList"==t.modalContent?s("div",{staticClass:"modal_bottom btnSection",attrs:{slot:"bottom"},slot:"bottom"},[s("a",{staticClass:"btn_mid btn_default",attrs:{href:"#none"}},[s("em",[t._v("선택 배송지 적용")])])]):t._e(),"CouponList"===t.modalContent?s("CouponList"):t._e(),"CouponList"==t.modalContent?s("div",{staticClass:"modal_bottom btnSection",attrs:{slot:"bottom"},slot:"bottom"},[s("a",{staticClass:"btn_mid btn_default",attrs:{href:"#none"}},[s("em",[t._v("적용")])])]):t._e(),"policy"===t.modalContent?s("Policy"):t._e()],1)],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"tit_wrap"},[s("h3",[t._v("주문서 작성 "),s("span",[t._v("(2)")])]),s("div",{staticClass:"step_wrap"},[s("span",[t._v("장바구니")]),s("strong",[t._v("주문서 작성")]),s("span",[t._v("주문완료")])])])},function(){var t=this,s=t._self._c;return s("li",[s("p",{staticClass:"form_tit"},[s("em",[t._v("이름")])]),s("span",[t._v("김나나")])])},function(){var t=this,s=t._self._c;return s("li",[s("p",{staticClass:"form_tit"},[s("em",[t._v("휴대폰 번호")])]),s("span",[t._v("000-0000-0000")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("주문자 이메일")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("수령인명")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("휴대폰 번호")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("배송지 주소")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("배송 메시지 ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"list_bullet mt30"},[s("ul",[s("li",[t._v("결제와 동시에 즉시 이체되며, 전체 주문 취소 시 당일 입금되며, 부분취소 시 익일 입금됩니다.")]),s("li",[t._v("승인 진행에 다소 시간이 소요될 수 있습니다.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"list_bullet mt30"},[s("ul",[s("li",[t._v("전용 계좌번호 발급으로 입금인 명의와 상관없이 입금 가능합니다.")]),s("li",[t._v("입금액과 결제 금액이 일치해야 정상 입금완료되니 금액을 반드시 확인바랍니다.")]),s("li",[t._v("배송은 입금완료를 기준으로 처리되며, 미입금 상태에서 주문한 상품이 품절될 경우 입금하셔도 배송이 불가합니다.")]),s("li",[t._v("입금기한은 주문완료 후 익일 23시 30분 이내이며, 미입금 시 자동 취소됩니다.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"list_bullet mt30"},[s("ul",[s("li",[t._v("별도의 앱 설치없이 네이버 ID로 신용카드 또는 계좌 정보를 등록하여, 네이버페이 비밀번호로 결제할 수 있습니다.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"list_bullet mt30"},[s("ul",[s("li",[t._v("카카오톡에 신용/체크 카드, 카카오머니를 등록한 후 비밀번호만으로 결제할 수 있습니다.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"list_bullet mt30"},[s("ul",[s("li",[t._v("PAYCO는 온/오프라인 쇼핑은 물론 송금, 멤버십 적립까지 가능한 통합 서비스입니다.")]),s("li",[t._v("휴대폰과 카드 명의자가 동일해야 결제 가능하며, 결제 금액의 제한은 없습니다.")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"list_bullet mt30"},[s("ul",[s("li",[t._v("결제 및 사용관련 문의는 Toss Pay 고객센터 (1599-4905 / 24시간 연중무휴)로 부탁드립니다.")])])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("은행")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("계좌번호")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"form_tit"},[s("em",[t._v("예금주")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"list_bullet mt30"},[s("ul",[s("li",[t._v("주문 취소나 품절 시, 환불 받으실 계좌입니다.")]),s("li",[t._v("환불계좌 정보를 번경하고 싶으신 경우, 주문완료 후 [마이페이지 > 환불계좌 관리]에서 수정이 가능합니다.")]),s("li",[t._v("환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.")])])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("총상품금액")]),s("strong",[t._v("400,000원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("상품할인")]),s("strong",[t._v("-100,000원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("배송비")]),s("strong",[t._v("0원")]),s("p",[t._v("(30,000원 이상 결제 시 무료배송)")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("쿠폰 할인금액")]),s("strong",[t._v("-36,000원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("포인트 사용금액")]),s("strong",[t._v("0원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("할인코드")]),s("strong",[t._v("0원")])])},function(){var t=this,s=t._self._c;return s("dt",[t._v(" 최종 결제금액 "),s("strong",[t._v("1,000,000원")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_big btn_confirm",attrs:{href:"/cowell/pc/OD_03_01_01"}},[s("em",[t._v("주문하기")])])])}],l=i(427),n=i(5068),o=i(8025),c=i(3201),r=i(7883),_=i(8706),u=i(7405),d=i(4051),p=i(4992),v={name:"App",components:{Inputs:l.Z,SelectBox:n.Z,GoodsList:o.Z,ModalSkin:c.Z,InstallmentInfo:r.Z,AddressSearch:_.Z,ShippingAddress:u.Z,CouponList:d.Z,Policy:p.Z},data(){return{bank:[{val:"value",txt:"은행 선택"},{val:"value",txt:"우리"},{val:"value",txt:"신한"},{val:"value",txt:"국민"},{val:"value",txt:"기업"},{val:"value",txt:"농협"}],cart:[{img:i(4202),brand:"Nike",tit:"나이키 에어",option:"BEIGE 66, FREE",price:"350,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:2,status:"soldout",gift:[{val:"value",txt:"선택안함"},{val:"value",txt:"gift 02"},{val:"value",txt:"gift 03"},{val:"value",txt:"gift 04"},{val:"value",txt:"gift 05"},{val:"value",txt:"gift 06"}]},{img:i(7788),brand:"Nike",tit:"나이키 에어",option:"BEIGE 66, FREE",price:"150,000",ori_price:"200,000",discount:"45%",input:[{type:"checkbox"}],count:1},{img:i(305),brand:"Nike",tit:"나이키 에어",option:"BEIGE 66, FREE",price:"15250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:2,status:"soldout"}],goods_item:[{img:i(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}],isChange:!1,coupon:[{val:"value",txt:"text 01"},{val:"value",txt:"text 02"},{val:"value",txt:"text 03"},{val:"value",txt:"text 04"},{val:"value",txt:"text 05"},{val:"value",txt:"text 06"}],message:[{val:"value",txt:"배송 전, 연락 바랍니다."},{val:"value",txt:"부재 시, 연락 바랍니다."},{val:"value",txt:"부재 시, 경비실에 맡겨주세요."},{val:"value",txt:"부재 시, 문 앞에 놓아주세요."},{val:"value",txt:"직접 입력"}],modalTitle:"",modalContent:""}},mounted(){this.pay_wrapOffset=document.getElementsByClassName("pay_wrap")[0].offsetTop,window.addEventListener("scroll",this.onScroll)},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")},onScroll(){var t=document.getElementsByClassName("pay_wrap"),s=this.pay_wrapOffset,i=document.getElementsByTagName("header");let e=window.pageYOffset||document.documentElement.scrollTop;e>s-i[0].offsetHeight?(t[0].classList.add("fixed"),t[0].children[0].style.top=i[0].offsetHeight+"px"):(t[0].children[0].style.removeProperty("top"),t[0].classList.remove("fixed"))}}},m=v,f=i(1001),x=(0,f.Z)(m,e,a,!1,null,"9939533a",null),b=x.exports},4992:function(t,s,i){i.d(s,{Z:function(){return r}});var e=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"policy_wrap"},[s("div",{staticClass:"explain_wrap"},[s("p",[t._v("코웰패션은 회원 고객님에게 서비스 제공을 위하여 아래와 같이 개인정보를 수집, 이용합니다.")]),s("p",[t._v("개인정보 수집 및 이용에 동의를 거부할 수 있습니다. 다만, 동의를 거부하시는 경우 회원 상품 구매 및 배송서비스를 이용하실 수 없음을 알려드립니다.")]),s("p",[t._v("코웰패션의 개인정보취급에 대한 자세한 사항은 “개인정보취급(처리)방침”을 확인하여 주시기 바랍니다.")])]),s("div",{staticClass:"table_wrap type_default type_noBorder mt30"},[s("table",[s("colgroup",[s("col",{staticStyle:{width:"85px"}}),s("col")]),s("tbody",[s("tr",[s("th",[t._v("목적")]),s("td",[s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("상품 배송 및 서비스 제공을 위한 사용자 정보 확인")]),s("li",[t._v("상품 구매에 대한 대금결제 및 취소")])])])])]),s("tr",[s("th",[t._v("항목")]),s("td",[s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("배송의뢰인 및 수령인의 성명, 전화번호, 휴대폰번호, 주소, 이메일주소")]),s("li",[t._v("신용카드정보, 은행계좌정보, 휴대폰가입정보")])])])])]),s("tr",[s("th",[t._v("보유 및 이용기간")]),s("td",[s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("5년 보관"),s("br"),t._v(" (전자상거래 등에서의 소비자보호에 관한 법률)")])])])])]),s("tr",[s("th",[t._v("목적")]),s("td",[s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("주문 및 배송서비스")])])])])]),s("tr",[s("th",[t._v("항목")]),s("td",[s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("수취인 성명, 휴대폰번호, 배송지 주소")])])])])]),s("tr",[s("th",[t._v("보유 및 이용기간")]),s("td",[s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("5년 보관"),s("br"),t._v(" (전자상거래 등에서의 소비자보호에 관한 법률)")])])])])])])])]),s("p",{staticClass:"explain02 mt30"},[t._v("위와 같이 개인정보를 수집/이용하는데 동의합니다.")])])}],l={props:{}},n=l,o=i(1001),c=(0,o.Z)(n,e,a,!1,null,"74c9d6e1",null),r=c.exports}}]);
//# sourceMappingURL=5686.b6473b09.js.map