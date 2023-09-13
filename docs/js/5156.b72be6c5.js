"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5156],{427:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?s("label",{staticClass:"check"},[s("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),s("em",{staticClass:"label"},[t.required_txt?s("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):s("div",{staticClass:"label_wrap"},[s("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?s("i",[t._v(t._s(t.placeholder))]):t._e(),s("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),s("em",[t._v(t._s(t.err_text))])])])},i=[],l={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},n=l,r=a(1001),o=(0,r.Z)(n,e,i,!1,null,"566d6e0a",null),c=o.exports},5068:function(t,s,a){a.d(s,{Z:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("label",{staticClass:"select"},[s("div",[s("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(s){t.isChange=!0}}},t._l(t.options,(function(a,e){return s("option",{key:e,domProps:{value:a.val}},[t._v(t._s(a.txt))])})),0)])])},i=[],l={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},n=l,r=a(1001),o=(0,r.Z)(n,e,i,!1,null,"20330496",null),c=o.exports},5156:function(t,s,a){a.r(s),a.d(s,{default:function(){return v}});var e=function(){var t=this,s=t._self._c;return s("div",[s("h2",{ref:"header",staticClass:"sticky"},[t._m(0),s("strong",{staticClass:"title"},[t._v("취소/환불")]),t._m(1)]),s("div",{staticClass:"content"},[s("div",{staticClass:"section_group pt0 pb0"},[s("div",{staticClass:"section pt0"},[t._m(2),s("div",{staticClass:"cart_top"},[s("Inputs",{attrs:{input_type:"checkbox",text:"전체선택"}})],1),t._l(2,(function(a){return[s("ul",{staticClass:"cart_list"},t._l(t.cart,(function(a,e){return s("li",{key:e,staticClass:"goods_item",class:{disabled:"soldout"==a.status}},[s("div",{staticClass:"inner"},[s("Inputs",{attrs:{input_type:"checkbox",id:"아이디"}}),s("span",{staticClass:"thumb"},[s("em",[s("img",{attrs:{src:a.img}})])]),s("div",{staticClass:"cont"},[s("a",{staticClass:"title",attrs:{hef:"#none"}},[s("strong",{staticClass:"pl0"},[t._v(t._s(a.brand))]),s("span",[t._v(t._s(a.tit))]),s("p",[t._l(t.cart[0].option,(function(a,e){return s("span",{key:e},[t._v(t._s(a)+",")])})),t._v(" "),s("span",[t._v("수량 "+t._s(a.quantity))])],2)]),s("strong",{staticClass:"price"},[t._v(t._s(a.price))]),s("span",{staticClass:"badge b2"},[t._v("결제완료")])])],1)])})),0),s("p",{staticClass:"pt20 pb10"},[t._v("취소 사유")]),s("SelectBox",{attrs:{isChange:!0,options:t.optionsReason}}),s("div",{staticClass:"pb30"})]}))],2)]),t._m(3),t._m(4)])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"area left"},[s("button",{staticClass:"icon backward"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"area right"},[s("button",{staticClass:"icon home"})])},function(){var t=this,s=t._self._c;return s("h4",{staticClass:"pb10"},[s("strong",{staticClass:"title bold"},[t._v("2023.12.14 "),s("span",{staticClass:"sub"},[t._v("/ 주문번호 2023012609093717645")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section_group"},[s("div",{staticClass:"section"},[s("h4",{staticClass:"pt20 pb10"},[s("strong",{staticClass:"title bold"},[t._v("환불 계좌 정보")])]),s("div",{staticClass:"linear_notice_box"},[s("div",{staticClass:"row cells"},[s("strong",[t._v("은행")]),s("p",[t._v("한국은행")])]),s("div",{staticClass:"row cells"},[s("strong",[t._v("계좌번호")]),s("p",[t._v("123-45-67890")])]),s("div",{staticClass:"row cells"},[s("strong",[t._v("예금주")]),s("p",[t._v("양재원")])])]),s("div",{staticClass:"list_bullet pt10 pb20"},[s("ul",[s("li",[t._v("주문 취소나 품절 시, 환불 받으실 계좌입니다.")]),s("li",[t._v("환불계좌 정보를 변경하고 싶으신 경우, 주문완료 후 [마이페이지 > 환불계좌 관리]에서 수정이 가능합니다.")]),s("li",[t._v("환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.")])])]),s("h4",{staticClass:"pt20 pb10"},[s("strong",{staticClass:"title bold"},[t._v("환불 예정 금액")])]),s("div",{staticClass:"gray_box colorize"},[s("table",[s("tbody",[s("tr",[s("th",[t._v("결제금액")]),s("td",[t._v("999,999,999원")])])]),s("tfoot",[s("tr",[s("th",[t._v("최종 환불 금액")]),s("td",[t._v("999,999,999원")])])])])]),s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_default btn_big",attrs:{href:""}},[s("em",[t._v("취소 신청")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section_group no_bd"},[s("div",{staticClass:"section pb0"},[s("h4",{staticClass:"pt20 pb20"},[s("strong",{staticClass:"title bold"},[t._v("취소/환불 안내")])]),s("div",{staticClass:"list_bullet no_bd"},[s("strong",{staticClass:"title"},[t._v("반품/교환신청")]),s("ul",[s("li",[t._v("주문 취소는 상품 준비중 단계까지만 가능합니다. "),s("br"),t._v("(가능 단계 : 입금 대기, 결제 완료, 상품 준비중 단계)")]),s("li",[t._v("배송 준비중 단계부터는 주문취소가 불가능하니 상품을 수령 후 반품으로 접수해 주시기 바랍니다.")]),s("li",[t._v("주문 상품 중 일부만 취소하실 경우, 결제 수단에 따라 재결제가 필요할 수 있으며, 재결제 완료 후 나머지 상품에 대한 주문이 완료됩니다.")]),s("li",[t._v("주문 취소 시 사용하신 쿠폰 적용 기준에 따라 복원이 되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.")])])])])])}],l=a(5068),n=a(427),r={components:{SelectBox:l.Z,Inputs:n.Z},data(){return{cart:[{img:a(4202),brand:"Nike",tit:"제품명 길이 제한 없음. 제품명 길이 제한 없음.제품명 길이 제한 없음",option:["BEIGE","66","FREE"],quantity:"1",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],count:2,status:"soldout"}],optionsAmount:[{val:"value",txt:"1"},{val:"value",txt:"2"},{val:"value",txt:"3"}],optionsReason:[{val:"value",txt:"단순 변심"},{val:"value",txt:"주문 실수"},{val:"value",txt:"제품 불량"},{val:"value",txt:"배송 문제"}],optionsCoupon:[{val:"value",txt:"없음"},{val:"value",txt:"무료배송쿠폰 (D-7)"},{val:"value",txt:"무료배송쿠폰 (D-14)"}],message:"",count:0,maxCount:100}},methods:{onCountMessage(){this.count=this.message.length}}},o=r,c=a(1001),u=(0,c.Z)(o,e,i,!1,null,"018cc81b",null),v=u.exports},4202:function(t,s,a){t.exports=a.p+"img/sam_goods02.794709c0.png"}}]);
//# sourceMappingURL=5156.b72be6c5.js.map