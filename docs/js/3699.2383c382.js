"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[3699],{5907:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},n=[],o=s(427),a={components:{Inputs:o.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,path:"teste"},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),path=window.location.pathname.split("/")[1],"pc"!=path&&void 0!=path&&""!=path&&"Guide"!=path||(this.path="/pc/"),"mo"==path&&(this.path="/mo/")},methods:{}},r=a,c=s(1001),l=(0,c.Z)(r,i,n,!1,null,"580d0f5f",null),u=l.exports},8025:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(s,i){return e("li",{key:i,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:s}})],1)})),0)},n=[],o=s(427),a=s(5907),r=s(5068),c={components:{Inputs:o.Z,GoodsItem:a.Z,SelectBox:r.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},l=c,u=s(1001),p=(0,u.Z)(l,i,n,!1,null,"7d83d77c",null),d=p.exports},4316:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_item"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.photo},on:{click:function(e){return e.preventDefault(),t.$openModalImage(e,"modalSkinImage")}}})])]),e("a",{staticClass:"cont",attrs:{href:"#none"}},[t.item.goods?e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.goods}})])]):t._e(),t.item.tit||t.item.price?e("div",[t.item.tit?e("p",{staticClass:"title"},[e("span",[t._v(t._s(t.item.tit))])]):t._e(),t.item.price?e("strong",{staticClass:"price"},[e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e()]):t._e(),e("ReviewScore",{attrs:{item:t.item.reivewScore}})],1)])},n=[],o=s(8306),a={components:{ReviewScore:o.Z},props:{item:"",isSwiper:!1},data(){return{}},methods:{},mounted(){}},r=a,c=s(1001),l=(0,c.Z)(r,i,n,!1,null,"894f1f22",null),u=l.exports},8306:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_score"},[e("p",t._l(Math.ceil(t.item),(function(s,i){return e("span",{key:i,class:{half:s>t.item}})})),0),e("span",[t._v("("+t._s(t.item)+")")])])},n=[],o={components:{},props:{item:""},mounted(){}},a=o,r=s(1001),c=(0,r.Z)(a,i,n,!1,null,"d06c9eac",null),l=c.exports},8497:function(t,e,s){s.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"review_list"},t._l(t.item,(function(t,s){return e("li",{key:s,staticClass:"review_list_item"},[e("ReviewItem",{attrs:{item:t}})],1)})),0)},n=[],o=s(8306),a=s(4316),r={components:{ReviewScore:o.Z,ReviewItem:a.Z},props:{item:Array},data(){return{}},methods:{},mounted(){}},c=r,l=s(1001),u=(0,l.Z)(c,i,n,!1,null,"931ddbf4",null),p=u.exports},5068:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(s,i){return e("option",{key:i,domProps:{value:s.val}},[t._v(t._s(s.txt))])})),0)])])},n=[],o={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},a=o,r=s(1001),c=(0,r.Z)(a,i,n,!1,null,"20330496",null),l=c.exports},5313:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("ul",{staticClass:"guide_header"},t._l(t.menu,(function(s,i){return e("li",{key:s.item},[e("router-link",{attrs:{to:s.link},on:{click:function(e){t.tabidx=i}}},[t._v(t._s(s.item))])],1)})),0)],1)},n=[],o=s(5975),a={components:{Header:o.Z},data(){return{tabidx:0,menu:[{item:"Layout",link:"/cowell/Guide/"},{item:"Form",link:"/cowell/Guide/form"},{item:"List",link:"/cowell/Guide/list"},{item:"Element",link:"/cowell/Guide/element"},{item:"Modal",link:"/cowell/Guide/modal"}]}},mounted(){$(".guide_header li").each((function(){$(this).find("a").text().indexOf($("hgroup h2").text())>-1?$(this).addClass("current"):$(this).removeClass("current")}))}},r=a,c=s(1001),l=(0,c.Z)(r,i,n,!1,null,"da2d8f1c",null),u=l.exports},3699:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"guide_content"},[e("guide_header"),t._m(0),e("section",[e("h4",[t._v("Goods List")]),t._m(1),t._m(2),e("div",{staticClass:"design_box"},[e("GoodsList",{attrs:{item:t.goods_item[0].item}})],1),t._m(3),t._m(4)]),e("section",[e("h4",[t._v("accordion Toggle")]),t._m(5),e("div",{staticClass:"design_box"},[e("div",{staticClass:"list_goods_inquire"},[e("dl",[t._l(5,(function(s){return[e("dt",[e("button",{staticClass:"button_toggle",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.accordionToggle(e)}}},[t._m(6,!0)])]),e("dd",[t._m(7,!0)])]}))],2)])]),t._m(8),t._m(9)]),e("section",[e("h4",[t._v("Review")]),t._m(10),e("div",{staticClass:"design_box"},[e("Reviews",{attrs:{item:t.review}})],1),t._m(11),t._m(12)])],1)},n=[function(){var t=this,e=t._self._c;return e("hgroup",[e("h2",[t._v("List")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"explain"},[e("li",[t._v('Wish [♡] 노출 : [data-type="wish"] 추가')]),e("li",[t._v(':isSwiper="true" : swiper 작용 시 li에 클래스 "sliper-slide" 자동 적용')])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Design")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Code")]),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("OPEN")])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"code_box"},[e("code",[t._v('<template>\n    <div class="swiper_wrap" role-type="swiper_default">\n        <GoodsList v-bind:item="goods_item[0].item" />\n    </div>\n<template>\n\n<script>\n    import GoodsItems from "@/components/GoodsItem.vue";\n<\/script>\n\nexport default {\n    components: {\n        GoodsItem\n    },\n}')])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Design")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("strong",{staticClass:"title question"},[t._v("[포인트 및 이벤트] 구매확정 됐는데 포인트 적립은 언제 되나요?")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("div",{staticClass:"answer"},[e("p",[t._v("구매확정은 상품 수령일 기준으로 7일 경과 시, 자동으로 택배사 구매확정이 진행되어 이후 적립 진행 가능합니다. (구매확정 건은 교환,반품이 불가합니다.)")])])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Code")]),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("OPEN")])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"code_box"},[e("code",[t._v('<div class="list_goods_inquire">\n    <dl>\n        <template v-for="(item) in 5">\n            <dt>\n                <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">\n                    <div class="cont">\n                        <strong class="title question">[포인트 및 이벤트] 구매확정 됐는데 포인트 적립은 언제 되나요?</strong>\n                    </div>\n                </button>\n            </dt>\n            <dd>\n                <div class="cont">\n                    <div class="answer">\n                        <p>구매확정은 상품 수령일 기준으로 7일 경과 시, 자동으로 택배사 구매확정이 진행되어 이후 적립 진행 가능합니다. (구매확정 건은 교환,반품이 불가합니다.)</p>\n                    </div>\n                </div>\n            </dd>\n        </template>\n    </dl>\n</div>\n\n<script>\nimport Reviews from "@/components/Reviews.vue";\n\n    export default {\n        components: {\n            Reviews\n        },\n        methods: {\n            accordionToggle (event) {\n                console.log(event.currentTarget.parentNode)\n                event.currentTarget.parentNode.classList.toggle(\'active\')\n            },\n        },\n    }\n<\/script>')])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Design")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"tit_wrap"},[e("strong",{staticClass:"tit"},[t._v("Code")]),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("OPEN")])])},function(){var t=this,e=t._self._c;return e("pre",{staticClass:"code_box"},[e("code",[t._v('<template>\n    <Reviews :item="리뷰데이터" />\n</template>\n\n<script>\nimport Reviews from "@/components/Reviews.vue";\n\n    export default {\n        components: {\n            Reviews\n        },\n    }\n<\/script>')])])}],o=s(5313),a=s(8025),r=s(427),c=s(8497),l=s(8306),u={name:"App",components:{guide_header:o.Z,Inputs:r.Z,GoodsList:a.Z,Reviews:c.Z,ReviewScore:l.Z},data(){return{goods_item:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],review:[{photo:s(1016),goods:s(2531),tit:"스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비",discount:"30%",price:"300,300",reivewScore:3.5},{photo:s(2364),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:5},{photo:s(2364),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:5},{photo:s(4536),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:.5},{photo:s(5432),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:4.5},{photo:s(3574),goods:s(2531),tit:"스위퍼 더비 헤비 다운 라이트베이지",discount:"30%",price:"300,300",reivewScore:5}]}},mounted(){$(document).ready((function(){$(".tit_wrap a").click((function(){$(this).hasClass("active")?$(this).removeClass("active").parent().siblings(".code_box").slideUp():$(this).addClass("active").parent().siblings(".code_box").slideDown()}))}))},methods:{accordionToggle(t){console.log(t.currentTarget.parentNode),t.currentTarget.parentNode.classList.toggle("active")}}},p=u,d=s(1001),_=(0,d.Z)(p,i,n,!1,null,"f46c4b62",null),m=_.exports},5432:function(t,e,s){t.exports=s.p+"img/imgreview04.8fb58813.png"},3574:function(t,e,s){t.exports=s.p+"img/imgreview05.3e17c3d6.png"},2531:function(t,e,s){t.exports=s.p+"img/sam_hot_01.6826fbe7.png"}}]);
//# sourceMappingURL=3699.2383c382.js.map