"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[9140],{5177:function(t,e,a){a.d(e,{Z:function(){return i}});var n=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkinImage",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkinImage"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},c=[],r={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},o=r,l=a(1001),s=(0,l.Z)(o,n,c,!1,null,null,null),i=s.exports},9140:function(t,e,a){a.r(e),a.d(e,{default:function(){return A}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body_wrap"},[e("Header"),e("div",{attrs:{id:"container"}},[e("router-view")],1),e("Footer"),e("BrandsLayer")],1)},c=[],r=a(4595),o=function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"footer_wrap"},[e("div",[e("dl",{staticClass:"about"},[e("dt",[t._v("ABOUT US")]),e("dd",[e("ul",t._l(t.About,(function(a,n){return e("li",{key:n},[e("strong",[t._v(t._s(a.tit)+" : ")]),t._v(t._s(a.cont)+" "),e("span",{domProps:{innerHTML:t._s(a.cont_link)}})])})),0)])]),e("dl",[e("dt",{on:{click:function(e){return t.onClickRedirect("/pc/CC_02_01_01")}}},[t._v("NOTICE")]),e("dd",[e("ul",t._l(t.Notice,(function(a,n){return e("li",{key:n},[e("router-link",{attrs:{to:""}},[t._v(t._s(a))])],1)})),0)])]),e("dl",[e("dt",[t._v("Service")]),e("dd",[e("ul",t._l(t.Service,(function(a,n){return e("li",{key:n,domProps:{innerHTML:t._s(a)}})})),0)])]),e("dl",[e("dt",[t._v("Help")]),e("dd",[e("ul",t._l(t.Help,(function(a,n){return e("li",{key:n,domProps:{innerHTML:t._s(a)}})})),0)])])]),e("div",{staticClass:"bottom"},[e("ul",{staticClass:"quick"},t._l(t.Quick,(function(a,n){return e("li",{key:n,domProps:{innerHTML:t._s(a)}})})),0),t._m(0)])]),e("button",{staticClass:"top",attrs:{id:"go_top"},on:{click:function(e){return e.preventDefault(),t.go_top.apply(null,arguments)}}},[t._v("Top")]),e("ModalSkinImage",[e("img",{staticClass:"imageEnlarge",attrs:{src:"",alt:"",id:"imageEnlarge"}})])],1)},l=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"sns"},[e("li",{staticClass:"facebook"},[e("a",{attrs:{href:"https://www.facebook.com/cowellfashion/",target:"_sns"}},[t._v("facebook")])]),e("li",{staticClass:"instagram"},[e("a",{attrs:{href:"https://instagram.com/cowellfashion",target:"_sns"}},[t._v("instagram")])]),e("li",{staticClass:"kakao"},[e("a",{attrs:{href:"#none",target:"_sns"}},[t._v("kakao")])])])}],s=a(5177),i={components:{ModalSkinImage:s.Z},data(){return{About:[{tit:"회사명",cont:"코웰패션 주식회사"},{tit:"대표",cont:"임종민"},{tit:"주소",cont:"서울 영등포구 여의대로 108 파크원 파크원타워1 42층"},{tit:"고객센터",cont:"02-6390-8000 > 내선 3번"},{tit:"영업시간",cont:"10:00 AM - 17:00 PM (점심시간 : 12:00PM  - 13:00PM)"},{tit:"휴무",cont:"토요일 / 일요일 / 공휴일"},{tit:"사업자 등록번호",cont:"553-85-00059",cont_link:'<a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=5538500059&amp;apv_perm_no=" target="_blank" class="btn square-text">[사업자정보확인]</a>'},{tit:"통신판매신고번호",cont:"제2022-서울영등포-0363호"},{tit:"상표등록번호",cont:"2006-0064011호"},{tit:"개인정보관리 책임자",cont:"신현창 shc@cowellfashion.co.kr"}],Notice:["2023년 2월 카드사 무이자 할부","2023년 1월 카드사 무이자 할부","2022년 12월 카드사 무이자 할부","코웰패션닷컴에서 고객님들께 알립니다."],Service:['<a href="/cowell/pc/CC_03_01_01">FAQ</a>','<a href="/cowell/pc/MY_02_01_01">배송조회</a>','<a href="/cowell/pc/MY_02_02_01">교환 & 반품</a>','<a href="/cowell/pc/CC_01_01_01">고객센터</a>'],Help:['<a href="/cowell/pc/CM_05_01_01">이용약관</a>','<a href="/cowell/pc/CM_06_01_01"><strong>개인정보취급방침</strong></a>','<a href="/cowell/pc/CM_07_01_01">제휴안내</a>','<a href="/cowell/pc/MY_04_01_04">1:1문의하기</a>'],Quick:['<a href="#none">사업자정보확인</a>','<a href="#none">에스크로가입사실확인</a>','<a href="#none">SSL 인증서 정보</a>']}},mounted(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll(){window.scrollY<10?document.getElementById("go_top").classList.add("top"):document.getElementById("go_top").classList.remove("top")},go_top(){window.scrollTo({top:0,behavior:"smooth"})},onClickRedirect(t){window.location.href=t}}},d=i,u=a(1001),_=(0,u.Z)(d,o,l,!1,null,"3bcbc001",null),m=_.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"brand_layer"},[e("div",{staticClass:"brand_thumb"},[e("ul",t._l(t.brand_thumb,(function(t,a){return e("li",{key:a},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.img}})])]),e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.brand,checked:t.checked}})],1)})),0)]),e("div",{staticClass:"brand_cate"},[e("ul",t._l(t.brand_cate,(function(a,n){return e("li",{key:a.item,class:{current:t.cateidx===n}},[e("a",{attrs:{hre:"#none"},on:{click:function(e){t.cateidx=n}}},[t._v(t._s(a.cate))])])})),0)]),e("div",{staticClass:"brand_list"},[e("ul",t._l(t.brand_list,(function(t,a){return e("li",{key:a},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.brand,checked:t.checked}})],1)})),0)])])])},h=[],k=a(427),p={components:{Inputs:k.Z},data(){return{brand_thumb:[{img:a(6692),brand:"FIFA OLP"},{img:a(6692),brand:"Ourplace"},{img:a(6692),brand:"NASA"},{img:a(6692),brand:"BBC"},{img:a(6692),brand:"FIFA OLP"},{img:a(6692),brand:"Ourplace"},{img:a(6692),brand:"NASA"},{img:a(6692),brand:"BBC"},{img:a(6692),brand:"FIFA OLP"},{img:a(6692),brand:"Ourplace"},{img:a(6692),brand:"NASA"},{img:a(6692),brand:"BBC"}],cateidx:0,brand_cate:[{cate:"전체"},{cate:"언더웨어"},{cate:"스포츠웨어"},{cate:"골프웨어"},{cate:"키즈"}],brand_list:[{brand:"아디다스 퍼포먼스",checked:"checked"},{brand:"아디다스 오리지널",checked:""},{brand:"푸마 바디웨어",checked:""},{brand:"컬럼비아 언더",checked:""},{brand:"노티카",checked:""},{brand:"띵크",checked:""},{brand:"라코스테",checked:""},{brand:"리복 키즈",checked:""},{brand:"리복 스포츠",checked:""},{brand:"밀레골프",checked:""},{brand:"아디다스 퍼포먼스",checked:""},{brand:"아디다스 오리지널",checked:""},{brand:"푸마 바디웨어",checked:""},{brand:"컬럼비아 언더",checked:""},{brand:"노티카",checked:""},{brand:"띵크",checked:""},{brand:"라코스테",checked:""},{brand:"리복 키즈",checked:""},{brand:"리복 스포츠",checked:""},{brand:"밀레골프",checked:""}]}},mounted(){}},f=p,v=(0,u.Z)(f,b,h,!1,null,"10ed0045",null),g=v.exports,C={name:"App",components:{Header:r.Z,Footer:m,BrandsLayer:g},data(){return{}},mounted(){}},w=C,y=(0,u.Z)(w,n,c,!1,null,"610392c4",null),A=y.exports}}]);
//# sourceMappingURL=9140.460ed88e.js.map