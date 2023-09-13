"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[976],{427:function(t,e,s){s.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},a=[],l={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},i=l,r=s(1001),o=(0,r.Z)(i,n,a,!1,null,"566d6e0a",null),c=o.exports},3201:function(t,e,s){s.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkin"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},a=[],l={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},i=l,r=s(1001),o=(0,r.Z)(i,n,a,!1,null,null,null),c=o.exports},976:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var n=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"content join_wrap"},[e("h3",[t._v("코웰패션에서 즐거운 쇼핑하세요!")]),e("ul",{staticClass:"form_group"},[e("li",[e("Inputs",{attrs:{input_type:"text",id:"아이디",placeholder:"아이디"}})],1),e("li",[e("Inputs",{attrs:{input_type:"password",id:"비밀번호",placeholder:"비밀번호"}})],1)]),e("div",{staticClass:"login_fail"},[e("p",[t._v("아래 이미지의 자동입력 방지 문자를 보이는 대로 입력해 주세요.")]),e("ul",{staticClass:"form_group"},[e("li",[e("div",{staticClass:"multi_form"},[e("div",[e("Inputs",{attrs:{input_type:"text",id:"id_pass",placeholder:"Placeholder",err_text:"에러문구",value:"0000"}}),t._m(1)],1),e("em",[t._v("에러문구")])])]),e("li",[e("Inputs",{attrs:{input_type:"text",id:"켑챠",placeholder:"자동입력 방지문자 입력"}})],1)])]),e("p",{staticClass:"remember_id"},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디저장",text:"아이디 저장"}}),e("Inputs",{attrs:{input_type:"checkbox",id:"자동로그인",text:"자동로그인"}})],1),e("div",{staticClass:"btnSection"},[e("router-link",{staticClass:"btn_big btn_confirm",attrs:{to:"/cowell/mo/MB_01_07_01"}},[e("em",[t._v("로그인")])])],1),e("ul",{staticClass:"find_idpw"},[e("li",[e("router-link",{attrs:{to:"/cowell/mo/MB_02_01_01"}},[t._v("아이디 찾기")])],1),e("li",[e("a",{attrs:{href:"#none"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="비밀번호 변경안내",t.modalContent="change_pw"}}},[t._v("비밀번호 변경")])])]),e("ul",{staticClass:"sso_wrap"},[e("li",{staticClass:"kakao"},[e("a",{attrs:{href:"#none"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="SNS 로그인",t.modalContent="sso"}}},[t._v("카카오")])]),t._m(2),t._m(3),t._m(4)]),e("div",{staticClass:"mem_bottom_btn"},[t._m(5),e("router-link",{staticClass:"btn_big btn_cancel",attrs:{to:"/cowell/mo/MB_08_01_01"}},[e("em",[t._v("회원가입")])])],1)]),e("ModalSkin",{attrs:{modalTitle:t.modalTitle,modalClass:"bottom"}},["sso"===t.modalContent?e("sso"):t._e(),"change_pw"===t.modalContent?e("changePW"):t._e()],1)],1)},a=[function(){var t=this,e=t._self._c;return e("h2",[e("button",{staticClass:"back"}),t._v(" 로그인 ")])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"btn_mid btn_default refresh"},[e("em",[t._v("새로고침")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"naver"},[e("a",{attrs:{href:"#none"}},[t._v("네이버")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"apple"},[e("a",{attrs:{href:"#none"}},[t._v("애플")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"google"},[e("a",{attrs:{href:"#none"}},[t._v("구글")])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn_big btn_default",attrs:{href:"#none"}},[e("em",[t._v("비회원 주문조회")])])}],l=s(427),i=s(8770),r=s(1982),o=s(3201),c={name:"App",components:{Inputs:l.Z,sso:i.Z,changePW:r.Z,ModalSkin:o.Z},data(){return{modalTitle:"",modalContent:""}},mounted(){$(".content").css({minHeight:$(window).height()-($("footer").height()+$("h2").outerHeight())})},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},_=c,u=s(1001),d=(0,u.Z)(_,n,a,!1,null,"69d7bd36",null),p=d.exports},8770:function(t,e,s){s.d(e,{Z:function(){return _}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sns_login"},[e("strong",[t._v("선택하신 SNS 계정")]),t._m(0),t._m(1),e("p",[t._v("SNS 계정 연결은 언제든지 마이페이지에서 할 수 있습니다.")]),e("ul",{staticClass:"form_group"},[e("li",[e("Inputs",{attrs:{input_type:"text",id:"아이디",placeholder:"아이디"}})],1),e("li",[e("Inputs",{attrs:{input_type:"password",id:"비밀번호",placeholder:"비밀번호"}})],1)]),t._m(2)])},a=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"sso_wrap"},[e("li",{staticClass:"naver"},[e("a",{attrs:{href:"#none"}},[t._v("네이버")])])])},function(){var t=this,e=t._self._c;return e("p",[t._v("코웰패션몰에 연결된 SNS계정이 아닙니다."),e("br"),t._v(" "),e("em",[t._v("최초 1회 연결 후 간편하게 로그인")]),t._v(" 할 수 있습니다.")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"btnSection"},[e("a",{staticClass:"btn_mid btn_cancel",attrs:{href:"#none"}},[e("em",[t._v("신규가입 후 연결")])]),e("a",{staticClass:"btn_mid btn_default",attrs:{href:"#none"}},[e("em",[t._v("아이디 로그인 후 SNS 연결")])])])}],l=s(427),i={name:"App",components:{Inputs:l.Z},data(){return{}},mounted(){}},r=i,o=s(1001),c=(0,o.Z)(r,n,a,!1,null,"08328aa2",null),_=c.exports},1982:function(t,e,s){s.d(e,{Z:function(){return _}});var n=function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._m(1),t._m(2),e("div",{staticClass:"btnSection"},[t._m(3),e("router-link",{staticClass:"btn_mid btn_default",attrs:{to:"/cowell/pc/MB_01_08_03"}},[e("em",[t._v("비밀번호 변경")])])],1)])},a=[function(){var t=this,e=t._self._c;return e("h3",[t._v("소중한 고객님의 개인정보 보호를 위해 "),e("em",[t._v("비밀번호를 변경")]),t._v("해주세요. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"explain_wrap"},[e("p",[t._v("고객님의 개인정보를 안전하게 보호하고, 개인정보도용으로 인한 피해를 예방하기 위해 90일 이상 비밀번호를 변경하지 않은 고객님에게 비밀번호 변경을 안내하고 있습니다."),e("br"),t._v(" 비밀번호는 영문자 (대소문자), 숫자, 특수문자를 조합하여 사용하시는 것이 안전하며 주기적 (최소 3개월)으로 변경하시기 바랍니다.")])])},function(){var t=this,e=t._self._c;return e("dl",{staticClass:"tip_box"},[e("dd",[t._v("본인명의의 휴대폰으로 인증절차를 거친 후 새로운 비밀번호를 설정하실 수 있습니다."),e("br"),t._v(" 본인확인을 위해 공인인증기관, 통신사 등을 통하여 이용자의 신원을 확인하는 절차에 동의합니다."),e("br"),t._v(" (입력하신 정보는 본인확인을 위해 인증기관에 제공되며, 본인확인 용도 외에 사용되거나 저장되지 않습니다.)")])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"btn_mid btn_cancel",attrs:{href:"#none"}},[e("em",[t._v("90일 후 변경")])])}],l=s(427),i={name:"App",components:{Inputs:l.Z},data(){return{}},mounted(){}},r=i,o=s(1001),c=(0,o.Z)(r,n,a,!1,null,"0195ed5e",null),_=c.exports}}]);
//# sourceMappingURL=976.d0db91d0.js.map