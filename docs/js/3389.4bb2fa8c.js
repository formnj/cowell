"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[3389],{2999:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[t._v(" "+t._s(t.path)+" "),e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},n=[],a=s(427),o={components:{Inputs:a.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,device:String},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),this.path=window.location.pathname.split("/")[1],console.log("aa : "+path),"pc"!=this.path&&""!=this.path||(this.path="/pc/"),"mo"==this.path&&(this.path="/mo/")},methods:{}},l=o,c=s(1001),r=(0,c.Z)(l,i,n,!1,null,"5d734b70",null),u=r.exports},8025:function(t,e,s){s.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(s,i){return e("li",{key:i,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:s}})],1)})),0)},n=[],a=s(427),o=s(2999),l=s(5068),c={components:{Inputs:a.Z,GoodsItem:o.Z,SelectBox:l.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},r=c,u=s(1001),d=(0,u.Z)(r,i,n,!1,null,"7d83d77c",null),p=d.exports},427:function(t,e,s){s.d(e,{Z:function(){return r}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},n=[],a={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},o=a,l=s(1001),c=(0,l.Z)(o,i,n,!1,null,"566d6e0a",null),r=c.exports},3201:function(t,e,s){s.d(e,{Z:function(){return r}});var i=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkin"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},n=[],a={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},o=a,l=s(1001),c=(0,l.Z)(o,i,n,!1,null,null,null),r=c.exports},5068:function(t,e,s){s.d(e,{Z:function(){return r}});var i=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(s,i){return e("option",{key:i,domProps:{value:s.val}},[t._v(t._s(s.txt))])})),0)])])},n=[],a={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},o=a,l=s(1001),c=(0,l.Z)(o,i,n,!1,null,"20330496",null),r=c.exports},3389:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cate_wrap content"},[e("div",{staticClass:"left_frame"},[e("strong",{staticClass:"tit"},[t._v("NEW")]),e("div",{staticClass:"filter_wrap"},[e("strong",{staticClass:"tit"},[t._v("필터")]),e("dl",[e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("브랜드")]),e("dd",[e("ul",{staticClass:"check_type"},t._l(t.filter[0].brand,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.text,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("색상 (18)")]),e("dd",[e("ul",{staticClass:"color_book"},t._l(t.filter[0].color,(function(t,s){return e("li",{key:s},[e("Inputs",{class:{border:"#fff"==t.bg},style:{backgroundColor:t.bg},attrs:{input_type:"checkbox",id:"아이디",text:t.text,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("사이즈 (5)")]),e("dd",[e("ul",{staticClass:"size_book"},t._l(t.filter[0].size,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("가격")]),e("dd",[e("div",{staticClass:"multi_form"},[e("div",[e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}}),e("span",[t._v("~")]),e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}})],1),e("em",[t._v("에러문구")])]),e("ul",{staticClass:"check_type"},t._l(t.filter[0].price,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"radio",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("할인율")]),e("dd",[e("div",{staticClass:"multi_form"},[e("div",[e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}}),e("span",[t._v("~")]),e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}})],1),e("em",[t._v("에러문구")])]),e("ul",{staticClass:"check_type"},t._l(t.filter[0].discount,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"radio",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0)])])])]),e("div",{staticClass:"right_frame"},[e("div",{staticClass:"tit_wrap"},[e("h3",[t._v("패피들은 빨리 서치 할 것, 새로 나온 상품들")]),e("div",{staticClass:"option_wrap"},[e("SelectBox",{attrs:{isChange:!0,options:t.options}})],1)]),e("p",{staticClass:"select_filter"},[e("button",{staticClass:"reset"},[t._v("초기화")]),t._l(t.filter[0].color,(function(t,s){return e("button",{key:s,staticClass:"type_color"},[e("em",{class:{border:"#fff"==t.bg},style:{backgroundColor:t.bg}})])})),t._l(t.filter[0].brand,(function(s,i){return e("button",{key:i},[t._v(t._s(s.text))])})),t._l(t.filter[0].size,(function(s,i){return e("button",{key:i},[t._v(t._s(s.item))])})),t._l(t.filter[0].price,(function(s,i){return e("button",{key:i},[t._v(t._s(s.item))])})),t._l(t.filter[0].prdiscountice,(function(s,i){return e("button",{key:i},[t._v(t._s(s.item))])}))],2),e("GoodsList",{staticClass:"type_02",attrs:{isWish:!0,isCart:!0,item:t.goods_item[0].item}}),t._m(0)],1),e("ModalSkin",{attrs:{modalTitle:t.modalTitle}},[e("div",{staticClass:"list_bullet"},[e("ul",[e("li",[t._v("1일 : 전일 판매 수량 기준")]),e("li",[t._v("일주일 : 최근 7일간의 판매수량 기준")]),e("li",[t._v("한달 : 최근 30일간의 판매수량 기준")]),e("li",[t._v("당일 오전 1시기준 집계 및 업데이트가 됩니다.")])])])])],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("a",{staticClass:"btn_first",attrs:{href:"#none"}},[t._v("처음으로")]),e("a",{staticClass:"btn_prev",attrs:{href:"#none"}},[t._v("이전")]),e("a",{attrs:{href:"#none"}},[t._v("1")]),e("a",{attrs:{href:"#none"}},[t._v("2")]),e("a",{attrs:{href:"#none"}},[t._v("3")]),e("a",{attrs:{href:"#none"}},[t._v("4")]),e("a",{staticClass:"btn_next",attrs:{href:"#none"}},[t._v("다음")]),e("a",{staticClass:"btn_end",attrs:{href:"#none"}},[t._v("마지막으로")])])}],a=s(5068),o=s(8025),l=s(427),c=s(3201),r={name:"App",components:{SelectBox:a.Z,GoodsList:o.Z,Inputs:l.Z,ModalSkin:c.Z},data(){return{options:[{val:"value",txt:"판매 인기순"},{val:"value",txt:"신상품순"},{val:"value",txt:"높은가격순"},{val:"value",txt:"낮은가격순"},{val:"value",txt:"평점높은순"},{val:"value",txt:"찜인기순"}],cate:[{idx:2,Sidx:1,main:[{item:"전체"},{item:"아우터"},{item:"상의",sub:[{item:"상의-드로즈"},{item:"상의-트렁크"},{item:"상의-세트"},{item:"상의-런닝/티"},{item:"상의-베이스 레이어"},{item:"상의-히트웨어"},{item:"상의-홈웨어"}]},{item:"하의",sub:[{item:"하의-드로즈"},{item:"하의-트렁크"},{item:"하의-세트"},{item:"하의-런닝/티"},{item:"하의-베이스 레이어"},{item:"하의-히트웨어"},{item:"하의-홈웨어"}]},{item:"세트웨어"},{item:"패션 잡화"}]}],filter:[{brand:[{text:"아디다스 스포츠",isChecked:!0},{text:"켈빈 클라인",isChecked:!1},{text:"노티카",isChecked:!1},{text:"바나나 리퍼블릭",isChecked:!0},{text:"푸마",isChecked:!1}],color:[{bg:"#fff"},{bg:"#FEDCDC"},{bg:"#FCB89A"},{bg:"#D9EA71"},{bg:"#8CDA8A"},{bg:"#A1E2DE"},{bg:"#68C7E5"},{bg:"#A2C5FB"},{bg:"#D7B6F8"}],size:[{item:"XS"},{item:"S"},{item:"M"},{item:"L"},{item:"XL"},{item:"XXL"}],price:[{item:"0~30,000원"},{item:"30,000~100,000원"},{item:"100,000~150,000원"},{item:"150,000~200,000원"},{item:"200,000원 이상"}],discount:[{item:"1~15%"},{item:"15~30%"},{item:"30~50%"},{item:"50% 이상"}]}],goods_item:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],modalTitle:"",modalContent:""}},methods:{onToggleCheckCategory(t){t.currentTarget.nextSibling.classList.toggle("active")},openModal(t){this.$modal.show(t),document.querySelector("body").classList.add("fixed")}}},u=r,d=s(1001),p=(0,d.Z)(u,i,n,!1,null,"3dad04bc",null),_=p.exports},7788:function(t,e,s){t.exports=s.p+"img/sam_goods01.65933508.png"},4202:function(t,e,s){t.exports=s.p+"img/sam_goods02.794709c0.png"},305:function(t,e,s){t.exports=s.p+"img/sam_goods03.70b43f27.png"},1989:function(t,e,s){t.exports=s.p+"img/sam_goods_list_01.82c4aa91.jpg"},7999:function(t,e,s){t.exports=s.p+"img/sam_goods_list_02.baf759f0.jpg"}}]);
//# sourceMappingURL=3389.4bb2fa8c.js.map