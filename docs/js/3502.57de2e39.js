"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[3502],{3201:function(t,e,n){n.d(e,{Z:function(){return c}});var l=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkin"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},o=[],a={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},i=a,s=n(1001),d=(0,s.Z)(i,l,o,!1,null,null,null),c=d.exports},5313:function(t,e,n){n.d(e,{Z:function(){return r}});var l=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("ul",{staticClass:"guide_header"},t._l(t.menu,(function(n,l){return e("li",{key:n.item},[e("router-link",{attrs:{to:n.link},on:{click:function(e){t.tabidx=l}}},[t._v(t._s(n.item))])],1)})),0)],1)},o=[],a=n(597),i={components:{Header:a.Z},data(){return{tabidx:0,menu:[{item:"Layout",link:"/cowell/Guide/"},{item:"Form",link:"/cowell/Guide/form"},{item:"List",link:"/cowell/Guide/list"},{item:"Element",link:"/cowell/Guide/element"},{item:"Modal",link:"/cowell/Guide/modal"}]}},mounted(){$(".guide_header li").each((function(){$(this).find("a").text().indexOf($("hgroup h2").text())>-1?$(this).addClass("current"):$(this).removeClass("current")}))}},s=i,d=n(1001),c=(0,d.Z)(s,l,o,!1,null,"da2d8f1c",null),r=c.exports},3502:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"guide_content"},[e("guide_header"),t._m(0),e("section",[e("h4",[t._v("Modal")]),t._m(1),t._m(2),e("div",{staticClass:"design_box"},[e("button",{on:{click:function(e){e.preventDefault(),t.openModal("modalSkin"),t.modalTitle="모달 제목",t.modalContent="콘텐츠 구분 값"}}},[t._v("레이어팝업")]),e("ModalSkin",{attrs:{modalTitle:t.modalTitle,modalClass:"bottom"}},[e("div",[t._v("Modal sample content")])])],1),t._m(3),t._m(4)])],1)},o=[function(){var t=this,e=t._self._c;return e("hgroup",[e("h2",[t._v("Modal")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"explain"},[e("li",[t._v("Type : 전체팝업 = modalType='full'")]),e("li",[t._v("modal_title : Modal 헤더 h2에 노출될 문구")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Design")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Code")]),e("a",{attrs:{href:"#none"}},[t._v("OPEN")])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"code_box"},[e("code",[t._v("<button @click=\"isModalViewed = true, modalType='타입지정'\">버튼</button>\n\x3c!-- modal --\x3e\n<ModalSkin :modalTitle=\"모달 제목\" :modalClass=\"'모달 클래스'>\n    <Content msg=\"Hello Vue in CodeSandbox!\" />\n</ModalSkin>\n\x3c!-- //modal --\x3e\n\n<script>\nimport ModalSkin from \"@/components/ModalSkin\"\n\nexport default {\n    components: {\n        ModalSkin,\n    },\n    data() {\n        return {\n            modalTitle: '',\n            modalContent: '',\n        };\n    },\n    methods:{\n        openModal (name) {\n            this.$modal.show(name)\n            /* 23.03.27 팝업 활성화 시 body 고정 */\n            document.querySelector('body').classList.add('fixed')\n        },\n    },\n}\n<\/script>")])])}],a=n(5313),i=n(3201),s={name:"App",components:{guide_header:a.Z,ModalSkin:i.Z},data(){return{modalTitle:"",modalContent:""}},mounted(){$(document).ready((function(){$(".tit_wrap a").click((function(){$(this).hasClass("active")?$(this).removeClass("active").parent().siblings(".code_box").slideUp():$(this).addClass("active").parent().siblings(".code_box").slideDown()}))}))},methods:{openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},d=s,c=n(1001),r=(0,c.Z)(d,l,o,!1,null,"225e1016",null),u=r.exports}}]);
//# sourceMappingURL=3502.57de2e39.js.map