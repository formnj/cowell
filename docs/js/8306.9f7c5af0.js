"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[8306],{70:function(t,e,s){s.d(e,{Z:function(){return _}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},o=[],l=s(427),r={components:{Inputs:l.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,path:"teste"},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),path=window.location.pathname.split("/")[1],console.log("aaa:",path),"pc"!=path&&void 0!=path&&""!=path&&"Guide"!=path||(this.path="/pc/"),"mo"==path&&(this.path="/mo/")},methods:{}},a=r,n=s(1001),c=(0,n.Z)(a,i,o,!1,null,"c0dce752",null),_=c.exports},8025:function(t,e,s){s.d(e,{Z:function(){return v}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(s,i){return e("li",{key:i,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:s}})],1)})),0)},o=[],l=s(427),r=s(70),a=s(5068),n={components:{Inputs:l.Z,GoodsItem:r.Z,SelectBox:a.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},c=n,_=s(1001),p=(0,_.Z)(c,i,o,!1,null,"7d83d77c",null),v=p.exports},427:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},o=[],l={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},r=l,a=s(1001),n=(0,a.Z)(r,i,o,!1,null,"566d6e0a",null),c=n.exports},5068:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(s,i){return e("option",{key:i,domProps:{value:s.val}},[t._v(t._s(s.txt))])})),0)])])},o=[],l={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},r=l,a=s(1001),n=(0,a.Z)(r,i,o,!1,null,"20330496",null),c=n.exports},1136:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,i){return e("li",{key:i,class:{current:t.tabidx==i}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=i,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},o=[],l={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,i=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],o=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),l=0,r=0;r=l-i,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?l-=o+r-.1*t.closest(".tab_wrap").offsetWidth:l+=o-r+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+l+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var a=e-s.offsetWidth;l>=0&&(s.style.transform="translate(0, 0)"),l<=a&&(s.style.transform="translate("+a+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,i=0,o=0,l=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var r=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;i=e.touches[0].screenX,o=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;l=parseInt(o)+parseInt(e.touches[0].screenX-i),t.style.transform="translate("+l+"px, 0px)"})),t.addEventListener("touchend",(function(e){l>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(l)>r&&l<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},r=l,a=s(1001),n=(0,a.Z)(r,i,o,!1,null,"a9668034",null),c=n.exports},5337:function(t,e,s){s.r(e),s.d(e,{default:function(){return v}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h2",{ref:"header",staticClass:"sticky"},[e("button",{staticClass:"back"}),t._v(" COWELL FASHION ")]),e("div",{staticClass:"content pt0 policy_wrap"},[e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.category_item[0].sub_cate[0].item,tabidx:t.category_item[0].sub_cate[0].idx}}),e("h4",[t._v("개인정보처리방침")]),t._m(0),e("div",{staticClass:"bottom"},[e("SelectBox",{attrs:{isChange:!0,options:t.options}})],1)],1)])},o=[function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("strong",[t._v("코웰패션주식회사 개인정보 처리방침")]),e("p",[t._v("코웰패션주식회사(이하 ‘회사’라 한다)는 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.")])]),e("li",[e("strong",[t._v("1.개인정보의 처리목적")]),e("p",[t._v("회사는 다음의 목적을 위하여 개인정보를 처리합니다."),e("br"),t._v(" 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.")]),e("ul",[e("li",[e("strong",[t._v("1. 홈페이지 회원 가입 및 관리")]),e("p",[t._v("회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 인증, 회원자격 유지/관리, 제한적 본인 확인제 시행에 따른 본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정대리인의 동의 여부 확인, 각종 고지,통지, 고충처리 등을 목적으로 개인정보를 처리합니다.")])]),e("li",[e("strong",[t._v("2. 재화 또는 서비스 제공")]),e("p",[t._v("물품배송, 서비스 제공, 계약서/청구서 발송, 콘텐츠 제공, 맞춤 서비스 제공, 본인인증, 연령인증, 요금결제/정산, 채권추심 등을 목적으로 개인정보를 처리합니다.")])]),e("li",[e("strong",[t._v("3. 고충처리")]),e("p",[t._v("민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락,통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.")])])])]),e("li",[e("strong",[t._v("2.처리하는 개인정보 항목")]),e("p",[t._v("회사는 다음의 개인정보 항목을 처리하고 있습니다.")]),e("ul",[e("li",[e("strong",[t._v("1. 홈페이지 회원 가입 및 관리")]),e("p",[t._v("필수항목 : 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 성별, 이메일주소, 중복가입확인정보(DI)")])]),e("li",[e("strong",[t._v("2. 재화 또는 서비스 제공")]),e("p",[t._v("필수항목 : 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 이메일주소, 아이핀번호, 신용카드번호")])]),e("li",[e("strong",[t._v("3. SNS(페이스북, 네이버, 카카오, Apple)를 통한 간편 로그인 서비스 이용 시 제공 받은 정보")]),e("p",[t._v("필수항목 : 각 SNS 채널별 고육식별 ID(일련번호)")])])])]),e("li",[e("strong",[t._v("3.개인정보 수집 방법")]),e("ul",[e("li",[t._v("1. 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우, 해당 개인정보를 수집합니다.")]),e("li",[t._v("2. 고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스, 전화 등을 통해 이용자의 개인정보가 수집될 수 있습니다.")]),e("li",[t._v("3. 오프라인 이벤트 등에서 서면을 통해 개인정보가 수집될 수 있습니다.")]),e("li",[t._v("4. 회사와 제휴한 외부 기업이나 단체로부터 개인정보를 제공받을 수 있으며, 이러한 경우에는 제휴사에서 이용자에게 개인정보 제공 동의를 받아야 합니다.")]),e("li",[t._v("5. 14세 미만의 회원에 대해서는 법정대리인으로부터 동의를 받아야 이용이 가능합니다.")])])]),e("li",[e("strong",[t._v("4.개인정보의 처리 및 보유기간")]),e("ul",[e("li",[t._v("① 회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.")]),e("li",[t._v("② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. "),e("ul",[e("li",[t._v("1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시 까지"),e("br"),t._v(" 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시 까지 "),e("ul",[e("li",[t._v("1) 관계 법령 위반에 따른 수사,조사 등이 진행 중인 경우에는 해당 수사,조사 종료 시 까지")]),e("li",[t._v("2) 홈페이지 이용에 따른 채권,채무관계 잔존 시에는 해당 채권·채무관계 정산 시 까지")])])]),e("li",[t._v("2. 재화 또는 서비스 제공 : 재화·서비스 공급완료 및 요금결제,정산 완료시까지"),e("br"),t._v(" 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시 까지 "),e("ul",[e("li",[t._v("1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록 "),e("p",[t._v("- 표시·광고에 관한 기록 : 6월")]),e("p",[t._v("- 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년")]),e("p",[t._v("- 소비자 불만 또는 분쟁처리에 관한 기록 : 3년")])]),e("li",[t._v("2)「통신비밀보호법」제41조에 따른 통신사실확인자료 보관 "),e("p",[t._v("- 가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호, 사용도수 : 1년")]),e("p",[t._v("- 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월")])])])])])])])]),e("li",[e("strong",[t._v("5.개인정보의 파기")]),e("ul",[e("li",[t._v("① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 5일 이내 해당 개인정보를 파기합니다.")]),e("li",[t._v("② 이용자로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.")]),e("li",[t._v("③ 개인정보 파기의 절차 및 방법은 다음과 같습니다. "),e("ul",[e("li",[e("strong",[t._v("1. 파기절차")]),e("p",[t._v("회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.")])]),e("li",[e("strong",[t._v("2. 파기방법")]),e("p",[t._v("회사는 전자적 파일 형태로 기록,저장 된 개인정보는 기록을 재생할 수 없도록 로우 레벨 포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록,저장 된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.")])])])])])]),e("li",[e("strong",[t._v("6.개인정보처리의 위탁")]),e("ul",[e("li",[t._v("① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다. "),e("ul",[e("li",[t._v("수탁업체 "),e("p",[t._v("- CJ대한통운 : 구매상품 배송")]),e("p",[t._v("- 엔에이치엔페이코(주)/KCP : 결제대행사")]),e("p",[t._v("- 윌앤비전(주) : 고객센터 대행사")])])])]),e("li",[t._v("② 회사는 위탁계약 체결시 정보통신망법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적/관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리/감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.")]),e("li",[t._v("③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.")])])]),e("li",[e("strong",[t._v("7.이용자 및 법정대리인의 권리·의무 및 행사방법")]),e("ul",[e("li",[t._v("① 이용자는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다. "),e("ul",[e("li",[t._v("1. 개인정보 열람요구")]),e("li",[t._v("2. 오류 등이 있을 경우 정정 요구")]),e("li",[t._v("3. 삭제요구")]),e("li",[t._v("4. 처리정지 요구")])])]),e("li",[t._v("② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.")]),e("li",[t._v("③ 이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.")]),e("li",[t._v("④ 만 14세 미만 아동의 경우, 제1항에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우, 법정대리인은 이용자의 모든 권리를 가집니다.")]),e("li",[t._v("⑤ 이용자는 정보통신망법, 개인정보보호법 등 관계법령을 위반하여 회사가 처리하고 있는 이용자 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.")])])]),e("li",[e("strong",[t._v("8.개인정보 자동 수집 장치의 설치·운영 및 거부")]),e("p",[t._v("회사는 이용자 개개인에게 개인화되고 맞춤화된 서비스를 제공하기 위해 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.")]),e("ul",[e("li",[e("strong",[t._v("1. 쿠키의 사용 목적")]),e("p",[t._v("회원과 비회원의 접속 빈도나 방문 시간 등의 분석, 이용자의 취향과 관심분야의 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공")])]),e("li",[e("strong",[t._v("2. 쿠키 설정 거부 방법")]),e("p",[t._v("이용자는 쿠키 설치에 대해 거부할 수 있습니다. 단, 쿠키 설치를 거부하였을 경우 로그인이 필요한 일부 서비스의 이용이 어려울 수 있습니다."),e("br"),t._v(" (설정방법, IE 기준)웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 > 사이트 차단")])]),e("li",[e("strong",[t._v("3. 서비스 이용 또는 업무 처리 과정에서 자동으로 생성되어 수집 되는 정보")]),e("p",[t._v("항목 : 접속 ID 정보, 쿠키(Cookie), 서비스 이용 기록, 접속 로그, 결제 기록, 이용 정지 기록, OS명, OS버전, 디바이스명")])])])]),e("li",[e("strong",[t._v("9.개인정보의 안전성 확보조치")]),e("p",[t._v("회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.")]),e("ul",[e("li",[t._v("1. 관리적 조치 : 내부관리계획 수립/시행, 정기적 직원 교육 등")]),e("li",[t._v("2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치")]),e("li",[t._v("3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제")])])]),e("li",[e("strong",[t._v("10.개인정보 보호책임자")]),e("ul",[e("li",[t._v("① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자 및 담당부서를 지정·운영하고 있습니다. "),e("ul",[e("li",[e("strong",[t._v("▶ 개인정보 보호책임자 : 신현창")]),e("p",[t._v("연락처 : 02-6390-8000")]),e("p",[t._v("이메일 : shc@cowellfashion.co.kr")])]),e("li",[e("strong",[t._v("▶ 개인정보 보호 담당부서")]),e("p",[t._v("담당자 : 김창환")]),e("p",[t._v("연락처 : 02-6390-8000")]),e("p",[t._v("이메일 : shc@cowellfashion.co.kr")])])])]),e("li",[t._v("② 이용자는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 답변 및 처리해드릴 것입니다.")])])]),e("li",[e("strong",[t._v("11.권익침해 구제방법")]),e("p",[t._v("이용자는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.")]),e("p",[t._v("<아래의 기관은 회사와는 별개의 기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다>")]),e("ul",[e("li",[e("strong",[t._v("▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)")]),e("p",[t._v("- 소관업무 : 개인정보 침해사실 신고, 상담 신청")]),e("p",[t._v("- 홈페이지 : privacy.kisa.or.kr")]),e("p",[t._v("- 전화 : (국번없이) 118")]),e("p",[t._v("- 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터")])]),e("li",[e("strong",[t._v("▶ 개인정보 분쟁조정위원회")]),e("p",[t._v("- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)")]),e("p",[t._v("- 홈페이지 : www.kopico.go.kr")]),e("p",[t._v("- 전화 : (국번없이) 1833-6972")]),e("p",[t._v("- 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층")])]),e("li",[e("strong",[t._v("▶ 대검찰청 사이버범죄수사단 : 02-3480-3573")])]),e("li",[e("strong",[t._v("▶ 경찰청 사이버테러대응센터 : 1566-0112")])])])]),e("li",[e("strong",[t._v("12.개인정보 처리방침 변경")]),e("p",[t._v("이 개인정보처리방침은 2022년 12월 27일에 개정되었으며 정부의 정책 및 정보보호 유관법령 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 홈페이지를 통해 고지할 것입니다.")])])])}],l=s(5068),r=s(8025),a=s(1136),n={name:"App",components:{SelectBox:l.Z,GoodsList:r.Z,Tabs:a.Z},data(){return{options:[{val:"value",txt:"이전 개인정보 취급 방침 보기"},{val:"value",txt:"2022-12-30"}],category_item:[{sub_cate:[{idx:1,item:[{item:"전체"},{item:"아우터"},{item:"상의"},{item:"상의"},{item:"세트웨어"},{item:"패션잡화"}]}]}]}},mounted(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll(){if(window.scrollY<this.lastScrollY){let t=document.querySelector(".tab_wrap").offsetHeight,e=t;document.querySelector(".tab_wrap").classList.add("fixed"),document.querySelector(".content").style="padding-top:"+e+"px !important"}else document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding");0==window.scrollY&&(document.querySelector(".tab_wrap").classList.remove("fixed"),document.querySelector(".content").style.removeProperty("padding")),this.lastScrollY=window.scrollY}}},c=n,_=s(1001),p=(0,_.Z)(c,i,o,!1,null,"41f06d22",null),v=p.exports}}]);
//# sourceMappingURL=8306.9f7c5af0.js.map