"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5552],{427:function(t,s,i){i.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?s("label",{staticClass:"check"},[s("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),s("em",{staticClass:"label"},[t.required_txt?s("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):s("div",{staticClass:"label_wrap"},[s("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?s("i",[t._v(t._s(t.placeholder))]):t._e(),s("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),s("em",[t._v(t._s(t.err_text))])])])},a=[],l={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},r=l,c=i(1001),n=(0,c.Z)(r,e,a,!1,null,"566d6e0a",null),u=n.exports},5552:function(t,s,i){i.r(s),i.d(s,{default:function(){return o}});var e=function(){var t=this,s=t._self._c;return s("div",[s("h2",{ref:"header",staticClass:"sticky"},[t._m(0),s("strong",{staticClass:"title"},[t._v("회원탈퇴")]),t._m(1)]),s("div",{staticClass:"content"},[t._m(2),s("div",{staticClass:"section_group no_bd"},[s("div",{staticClass:"section"},[s("ul",{staticClass:"form_group"},[s("li",[s("p",{staticClass:"form_tit"},[t._v("탈퇴사유")]),s("div",{staticClass:"half_column_box"},[s("div",{staticClass:"column"},[s("Inputs",{attrs:{input_type:"radio",id:"",text:"배송 주문 불만족"}})],1),s("div",{staticClass:"column"},[s("Inputs",{attrs:{input_type:"radio",id:"",text:"사이트 이용 불편"}})],1),s("div",{staticClass:"column"},[s("Inputs",{attrs:{input_type:"radio",id:"",text:"상품품질 불만족"}})],1),s("div",{staticClass:"column"},[s("Inputs",{attrs:{input_type:"radio",id:"",text:"서비스 불만족"}})],1),s("div",{staticClass:"column"},[s("Inputs",{attrs:{input_type:"radio",id:"",text:"기타"}})],1)])]),s("li",[s("p",{staticClass:"form_tit"},[t._v("탈퇴사유")]),t._m(3),s("p",{staticClass:"remember_id"},[s("Inputs",{attrs:{input_type:"checkbox",id:"",text:"회원 탈퇴 안내를 모두 확인했습니다. 탈퇴에 동의합니다."}})],1)])]),t._m(4)])])])])},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"area left"},[s("button",{staticClass:"icon backward"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"area right"},[s("button",{staticClass:"icon home"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section_group"},[s("div",{staticClass:"section pt0 pb0"},[s("p",{staticClass:"pb30"},[t._v("회원 탈퇴 시 회원님의 모든 정보가 바로 삭제됩니다.")]),s("h4",[s("strong",{staticClass:"title"},[t._v("소멸예정 내역")])]),s("div",{staticClass:"gray_box pt30 pb30 pl0 pr0 mb30"},[s("div",{staticClass:"count_box"},[s("div",{staticClass:"cell"},[s("span",{staticClass:"title"},[t._v("쿠폰")]),s("em",{staticClass:"count"},[t._v("999")])]),s("div",{staticClass:"cell"},[s("span",{staticClass:"title"},[t._v("포인트")]),s("em",{staticClass:"count"},[t._v("999,999")])]),s("div",{staticClass:"cell"},[s("span",{staticClass:"title"},[t._v("관심상품")]),s("em",{staticClass:"count"},[t._v("999,999")])])])]),s("h4",[s("strong",{staticClass:"title"},[t._v("회원탈퇴 유의사항")])]),s("div",{staticClass:"list_bullet"},[s("ul",[s("li",[t._v("탈퇴 후 고객님의 정보는 전자상거래 소비자보호법에 의거한 개인정보보호정책에 따라 관리됩니다.")]),s("li",[t._v("탈퇴 후 일정 기간 재가입 여부 판단을 목적으로 고객님의 최소정보(CI, DI)를 보존합니다.")]),s("li",[t._v("탈퇴 후 재가입 시에는 신규 가입으로 처리되며, 탈퇴 시점부터 1개월 후에 재 가입 가능합니다.")]),s("li",[t._v("탈퇴 시 고객님께서 보유하셨던 포인트· 쿠폰· 관심 상품 등 모든 기록은 삭제되며, 복구되지 않습니다. 반드시 확인하시고 신중하게 탈퇴 신청해 주시기 바랍니다.")]),s("li",[t._v("취소/반품/교환 신청 등 서비스가 진행 중인 고객님은 모든 처리가 완료된 후에 탈퇴가 가능합니다.")]),s("li",[t._v("배송 등 거래가 진행 중인 경우 모든 거래가 완료된 후에 탈퇴가 가능합니다.")])])])])])},function(){var t=this,s=t._self._c;return s("label",{staticClass:"textarea_label",attrs:{for:"writeReport"}},[s("textarea",{staticClass:"textarea",attrs:{id:"writeReport",placeholder:"내용을 입력해 주세요."}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"btnSection"},[s("a",{staticClass:"btn_big btn_cancel",attrs:{href:""}},[s("em",[t._v("취소")])]),s("a",{staticClass:"btn_big btn_default",attrs:{href:""}},[s("em",[t._v("등록")])])])}],l=i(427),r={components:{Inputs:l.Z}},c=r,n=i(1001),u=(0,n.Z)(c,e,a,!1,null,"4fd6b128",null),o=u.exports}}]);
//# sourceMappingURL=5552.b81bdf06.js.map