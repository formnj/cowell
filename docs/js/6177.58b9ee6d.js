"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[6177],{7647:function(t,s,i){i.r(s),i.d(s,{default:function(){return v}});var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),s("div",{staticClass:"order_wrap"},[s("div",{staticClass:"list_wrap"},[s("ul",{staticClass:"cart_list"},[t._m(1),t._l(t.cart,(function(i,n){return s("li",{key:n,staticClass:"goods_item",class:{disabled:"soldout"==i.status}},[s("Inputs",{attrs:{input_type:"checkbox",id:"아이디"}}),s("span",{staticClass:"thumb",staticStyle:{width:"185px",height:"244px",padding:"0"}},[s("em",[s("img",{attrs:{src:i.img}})])]),s("div",{staticClass:"cont"},[s("Inputs",{staticClass:"wish",attrs:{input_type:"checkbox"}}),s("a",{staticClass:"title",attrs:{hef:"#none"}},[s("strong",[t._v(t._s(i.brand))]),s("span",[t._v(t._s(i.tit))]),s("p",[t._v(t._s(i.option))])]),s("p",{staticClass:"count"},[s("button",{staticClass:"btn_minus",on:{click:function(s){return s.preventDefault(),t.decrease(s,n)}}},[t._v("감소")]),s("Inputs",{attrs:{input_type:"number",value:i.count}}),s("button",{staticClass:"btn_plus",on:{click:function(s){return s.preventDefault(),t.increase(s,n)}}},[t._v("추가")]),s("button",{staticClass:"optionChanger",on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalTitle="옵션변경",t.modalContent="optionchange"}}},[t._v("옵션변경")]),"soldout"==i.status?s("span",{staticClass:"soldout"},[t._v("일시품절")]):t._e(),"soldout"==i.status?s("span",{staticClass:"shortage"},[t._v("재고부족")]):t._e(),t._m(2,!0)],1)],1),s("div",{staticClass:"price_wrap"},[s("strong",{staticClass:"price"},[s("del",[t._v(t._s(i.ori_price))]),s("em",{staticClass:"discount"},[t._v(t._s(i.discount))]),t._v(" "+t._s(i.price)+" ")])])],1)}))],2)]),s("div",{staticClass:"pay_wrap"},[s("div",{staticClass:"inner"},[s("dl",[s("dt",[t._v("결제예정금액")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("dd",[s("ul",[s("li",[s("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"(비회원 개인정)보 수집 및 이용 동의",required_type:"requierd",required_txt:"(필수)"}}),s("a",{staticClass:"see_more",attrs:{href:"#none"}},[t._v("더보기")])],1),s("li",[s("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의 하시겠습니까? (전자상거래법 제 8조 제 2항)",required_type:"requierd",required_txt:"(필수)"}})],1)])])]),t._m(10)])])]),s("div",{staticClass:"cart_explain"},[t._m(11),s("div",{staticClass:"installment_info"},[s("p",[t._v("50,000원 이상 결제시 무료배송")]),s("button",{staticClass:"btn_min btn_info",on:{click:function(s){s.preventDefault(),t.openModal("modalSkin"),t.modalContent="installment"}}},[s("em",[t._v("12월 무이자 할부 안내")])])])]),s("h3",[t._v("함께 구매하면 좋은 상품")]),t.goods_item.length<6?s("GoodsList",{staticClass:"type_02",attrs:{isWish:!0,isCart:!0,item:t.goods_item}}):t._e(),t.goods_item.length>5?s("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.goods_item,(function(t,i){return s("swiper-slide",{key:i},[s("GoodsItem",{staticClass:"type_02",attrs:{isWish:!0,isCart:!0,item:t}})],1)})),s("div",{staticClass:"swiper-button-next",attrs:{slot:"pagination"},slot:"pagination"}),s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-next"},slot:"button-next"})],2):t._e(),s("ModalSkin",{attrs:{modalTitle:t.modalTitle}},["optionchange"===t.modalContent?s("Optionchange"):t._e(),"optionchange"==t.modalContent?s("div",{staticClass:"modal_bottom btnSection",attrs:{slot:"bottom"},slot:"bottom"},[s("a",{staticClass:"btn_mid btn_cancel",attrs:{href:"#none"}},[s("em",[t._v("취소")])]),s("a",{staticClass:"btn_mid btn_default",attrs:{href:"#none"}},[s("em",[t._v("변경완료")])])]):t._e(),"installment"===t.modalContent?s("InstallmentInfo"):t._e()],1)],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"tit_wrap"},[s("h3",[t._v("장바구니")]),s("div",{staticClass:"step_wrap"},[s("strong",[t._v("장바구니")]),s("span",[t._v("주문서 작성")]),s("span",[t._v("주문완료")])])])},function(){var t=this,s=t._self._c;return s("li",{staticClass:"blank"},[s("strong",[t._v("장바구니에 담긴 상품이 없습니다.")])])},function(){var t=this,s=t._self._c;return s("em",[t._v("주문가능 "),s("strong",[t._v("8")]),t._v("개")])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("총상품금액")]),s("strong",[t._v("400,000원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("상품할인")]),s("strong",[t._v("-100,000원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("배송비")]),s("strong",[t._v("0원")]),s("p",[t._v("(30,000원 이상 결제 시 무료배송)")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("쿠폰 할인금액")]),s("strong",[t._v("-36,000원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("포인트 사용금액")]),s("strong",[t._v("0원")])])},function(){var t=this,s=t._self._c;return s("dd",[s("span",[t._v("할인코드")]),s("strong",[t._v("0원")])])},function(){var t=this,s=t._self._c;return s("dt",[t._v(" 최종 결제금액 "),s("strong",[t._v("1,000,000원")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_big btn_confirm",attrs:{href:"/cowell/pc/OD_02_01_01"}},[s("em",[t._v("주문하기")])]),s("a",{staticClass:"btn_big btn_default",attrs:{href:"#none"}},[s("em",[t._v("선물하기")])])])},function(){var t=this,s=t._self._c;return s("div",[s("button",{staticClass:"btn_min btn_default"},[s("em",[t._v("전체선택")])]),s("button",{staticClass:"btn_min btn_cancel"},[s("em",[t._v("선택삭제")])]),s("button",{staticClass:"btn_min btn_info"},[s("em",[t._v("품절삭제")])]),s("ul",{staticClass:"explain_wrap"},[s("li",[t._v("장바구니에 담긴 상품은 90일동안 보관 되며, 90일이 지난 상품은 자동 삭제됩니다.")]),s("li",[t._v("장바구니에 최대 100개까지 상품 보관이 가능하며, 실제 구매 시에는 가격이나 혜택이 변동될 수 있습니다.")]),s("li",[t._v("장바구니에 담은 상품이 판매종료가 되었을 경우 자동 삭제 됩니다.")])])])}],a=i(427),o=i(8025),c=i(1389),l=i(551),r=i(3201),u=i(9036),d=i(7883),_={name:"App",components:{Inputs:a.Z,GoodsList:o.Z,GoodsItem:c.Z,Swiper:l.Swiper,SwiperSlide:l.SwiperSlide,ModalSkin:r.Z,Optionchange:u.Z,InstallmentInfo:d.Z},data(){return{cart:[{img:i(4202),brand:"Nike",tit:"나이키 에어",option:"BEIGE 66, FREE",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:2,status:"soldout"},{img:i(7788),brand:"Nike",tit:"나이키 에어",option:"BEIGE 66, FREE",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:1},{img:i(305),brand:"Nike",tit:"나이키 에어",option:"BEIGE 66, FREE",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:2,status:"soldout"}],goods_item:[{img:i(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:i(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}],swiperOptions:{loop:!0,slidesPerView:5,spaceBetween:20,maxBackfaceHiddenSlides:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},modalTitle:"",modalContent:""}},methods:{increase(t,s){"soldout"!=this.cart[s].status&&(this.cart[s].count+=1)},decrease(t,s){this.cart[s].count>1&&"soldout"!=this.cart[s].status&&(this.cart[s].count-=1)},openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},p=_,b=i(1001),m=(0,b.Z)(p,n,e,!1,null,"2b0c86a6",null),v=m.exports}}]);
//# sourceMappingURL=6177.58b9ee6d.js.map