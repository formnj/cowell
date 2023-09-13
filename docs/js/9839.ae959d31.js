"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[9839],{427:function(t,e,l){l.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},o=[],a={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},n=a,r=l(1001),s=(0,r.Z)(n,i,o,!1,null,"566d6e0a",null),d=s.exports},3201:function(t,e,l){l.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkin"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},o=[],a={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},n=a,r=l(1001),s=(0,r.Z)(n,i,o,!1,null,null,null),d=s.exports},9839:function(t,e,l){l.r(e),l.d(e,{default:function(){return f}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content join_wrap"},[e("h2",[t._v("회원가입")]),e("div",[e("h3",[t._v("약관동의")]),e("dl",{staticClass:"policy_check"},[e("dt",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"전체동의"}})],1),e("dd",[e("ul",[e("li",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"회원 이용약관",required_type:"required",required_txt:"(필수)"}}),e("a",{staticClass:"see_more",attrs:{href:"#none"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="회원 이용약관",t.modalContent="policy"}}},[t._v("자세히 보기")])],1),e("li",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"회원 개인정보 수집 및 이용동의",required_type:"required",required_txt:"(필수)"}}),e("a",{staticClass:"see_more",attrs:{href:"#none"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="회원 개인정보 수집 및 이용동의",t.modalContent="policy"}}},[t._v("자세히 보기")])],1),e("li",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"만 14세 이상 회원입니다",required_type:"required",required_txt:"(필수)"}}),e("a",{staticClass:"see_more",attrs:{href:"#none"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="14세 이상 회원",t.modalContent="policy"}}},[t._v("자세히 보기")])],1),e("li",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"서비스·이벤트 정보 제공을 위한 개인정보 수집 및 이용 동의",required_type:"no_required",required_txt:"(선택)"}}),e("a",{staticClass:"see_more",attrs:{href:"#none"},on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="개인정보 수집 및 이용 동의",t.modalContent="policy"}}},[t._v("자세히 보기")]),e("ul",[e("li",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"이메일"}})],1),e("li",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"SMS"}})],1),e("li",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:"APP"}})],1)]),t._m(0)],1)])])]),e("div",{staticClass:"btnSection"},[e("router-link",{staticClass:"btn_big btn_default",attrs:{to:"/cowell/pc/MB_11_01_01"}},[e("em",[t._v("다음")])])],1)]),e("ModalSkin",{attrs:{modalTitle:t.modalTitle}},[e("policy01")],1)],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"explain_wrap"},[e("p",[t._v("광고 정보 수신동의를 하시면 상품 및 이벤트 정보를 받으실 수 있습니다. (1회한정 2,000 포인트 지급)")]),e("strong",[t._v("선택 항목에 동의하지 않더라도 코웰패션 회원가입 및 기본 서비스를 이용하실 수 있습니다.")])])}],a=l(427),n=l(3201),r=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"policy_wrap"},[e("dl",[e("dt",[t._v("제1조 총칙")]),e("dd",[e("ol",[e("li",[t._v("1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.")]),e("li",[t._v("2. ㈜코웰패션은 (이하 “당사”라고 합니다) 회원의 개인정보를 매우 중요시하고, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』『개인정보보호법』 등의 관련 법률을 준수하고 있으며, 그에 의거한 개인정보처리방침을 정하여 이용자의 권익보호에 최선을 다하고 있습니다.")]),e("li",[t._v("3. 당사는 개인정보처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.")]),e("li",[t._v("4. 당사는 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 회원께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.")]),e("li",[t._v("5. 코웰패션 회원의 개인정보 보호는 코웰패션 개인정보처리방침에 의해 이루어지며, 링크된 "),e("a",{attrs:{href:"www.cowellfashion.com",target:"_blank"}},[t._v("www.cowellfashion.com")]),t._v(" 에서 확인 가능합니다.")])])]),e("dt",[t._v("제2조 개인정보 수집항목 및 이용목적")]),e("dt",[t._v("제1조 총칙")]),e("dd",[e("ol",[e("li",[t._v("1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.")]),e("li",[t._v("2. ㈜코웰패션은 (이하 “당사”라고 합니다) 회원의 개인정보를 매우 중요시하고, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』『개인정보보호법』 등의 관련 법률을 준수하고 있으며, 그에 의거한 개인정보처리방침을 정하여 이용자의 권익보호에 최선을 다하고 있습니다.")]),e("li",[t._v("3. 당사는 개인정보처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.")]),e("li",[t._v("4. 당사는 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 회원께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.")]),e("li",[t._v("5. 코웰패션 회원의 개인정보 보호는 코웰패션 개인정보처리방침에 의해 이루어지며, 링크된 "),e("a",{attrs:{href:"www.cowellfashion.com",target:"_blank"}},[t._v("www.cowellfashion.com")]),t._v(" 에서 확인 가능합니다.")])])]),e("dt",[t._v("제2조 개인정보 수집항목 및 이용목적")]),e("dt",[t._v("제1조 총칙")]),e("dd",[e("ol",[e("li",[t._v("1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.")]),e("li",[t._v("2. ㈜코웰패션은 (이하 “당사”라고 합니다) 회원의 개인정보를 매우 중요시하고, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』『개인정보보호법』 등의 관련 법률을 준수하고 있으며, 그에 의거한 개인정보처리방침을 정하여 이용자의 권익보호에 최선을 다하고 있습니다.")]),e("li",[t._v("3. 당사는 개인정보처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.")]),e("li",[t._v("4. 당사는 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 회원께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.")]),e("li",[t._v("5. 코웰패션 회원의 개인정보 보호는 코웰패션 개인정보처리방침에 의해 이루어지며, 링크된 "),e("a",{attrs:{href:"www.cowellfashion.com",target:"_blank"}},[t._v("www.cowellfashion.com")]),t._v(" 에서 확인 가능합니다.")])])]),e("dt",[t._v("제2조 개인정보 수집항목 및 이용목적")]),e("dt",[t._v("제1조 총칙")]),e("dd",[e("ol",[e("li",[t._v("1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.")]),e("li",[t._v("2. ㈜코웰패션은 (이하 “당사”라고 합니다) 회원의 개인정보를 매우 중요시하고, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』『개인정보보호법』 등의 관련 법률을 준수하고 있으며, 그에 의거한 개인정보처리방침을 정하여 이용자의 권익보호에 최선을 다하고 있습니다.")]),e("li",[t._v("3. 당사는 개인정보처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.")]),e("li",[t._v("4. 당사는 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 회원께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.")]),e("li",[t._v("5. 코웰패션 회원의 개인정보 보호는 코웰패션 개인정보처리방침에 의해 이루어지며, 링크된 "),e("a",{attrs:{href:"www.cowellfashion.com",target:"_blank"}},[t._v("www.cowellfashion.com")]),t._v(" 에서 확인 가능합니다.")])])]),e("dt",[t._v("제2조 개인정보 수집항목 및 이용목적")]),e("dt",[t._v("제1조 총칙")]),e("dd",[e("ol",[e("li",[t._v("1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.")]),e("li",[t._v("2. ㈜코웰패션은 (이하 “당사”라고 합니다) 회원의 개인정보를 매우 중요시하고, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』『개인정보보호법』 등의 관련 법률을 준수하고 있으며, 그에 의거한 개인정보처리방침을 정하여 이용자의 권익보호에 최선을 다하고 있습니다.")]),e("li",[t._v("3. 당사는 개인정보처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.")]),e("li",[t._v("4. 당사는 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 회원께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.")]),e("li",[t._v("5. 코웰패션 회원의 개인정보 보호는 코웰패션 개인정보처리방침에 의해 이루어지며, 링크된 "),e("a",{attrs:{href:"www.cowellfashion.com",target:"_blank"}},[t._v("www.cowellfashion.com")]),t._v(" 에서 확인 가능합니다.")])])]),e("dt",[t._v("제2조 개인정보 수집항목 및 이용목적")]),e("dt",[t._v("제1조 총칙")]),e("dd",[e("ol",[e("li",[t._v("1. 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.")]),e("li",[t._v("2. ㈜코웰패션은 (이하 “당사”라고 합니다) 회원의 개인정보를 매우 중요시하고, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』『개인정보보호법』 등의 관련 법률을 준수하고 있으며, 그에 의거한 개인정보처리방침을 정하여 이용자의 권익보호에 최선을 다하고 있습니다.")]),e("li",[t._v("3. 당사는 개인정보처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.")]),e("li",[t._v("4. 당사는 개인정보처리방침을 홈페이지 첫 화면에 공개함으로써 회원께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.")]),e("li",[t._v("5. 코웰패션 회원의 개인정보 보호는 코웰패션 개인정보처리방침에 의해 이루어지며, 링크된 "),e("a",{attrs:{href:"www.cowellfashion.com",target:"_blank"}},[t._v("www.cowellfashion.com")]),t._v(" 에서 확인 가능합니다.")])])]),e("dt",[t._v("끝끝끝")])])])}],d={props:{}},c=d,_=l(1001),u=(0,_.Z)(c,r,s,!1,null,"72f2fa7e",null),v=u.exports,p={name:"App",components:{Inputs:a.Z,policy01:v,ModalSkin:n.Z},data(){return{modalTitle:"",modalContent:""}},mounted(){},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},m=p,h=(0,_.Z)(m,i,o,!1,null,"08fe4734",null),f=h.exports}}]);
//# sourceMappingURL=9839.ae959d31.js.map