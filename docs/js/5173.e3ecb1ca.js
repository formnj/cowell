"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5173],{70:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},a=[],n=s(427),o={components:{Inputs:n.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,path:"teste"},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),path=window.location.pathname.split("/")[1],console.log("aaa:",path),"pc"!=path&&void 0!=path&&""!=path&&"Guide"!=path||(this.path="/pc/"),"mo"==path&&(this.path="/mo/")},methods:{}},r=o,c=s(1001),l=(0,c.Z)(r,i,a,!1,null,"c0dce752",null),u=l.exports},8025:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(s,i){return e("li",{key:i,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:s}})],1)})),0)},a=[],n=s(427),o=s(70),r=s(5068),c={components:{Inputs:n.Z,GoodsItem:o.Z,SelectBox:r.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},l=c,u=s(1001),p=(0,u.Z)(l,i,a,!1,null,"7d83d77c",null),d=p.exports},427:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},a=[],n={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},o=n,r=s(1001),c=(0,r.Z)(o,i,a,!1,null,"566d6e0a",null),l=c.exports},5068:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(s,i){return e("option",{key:i,domProps:{value:s.val}},[t._v(t._s(s.txt))])})),0)])])},a=[],n={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},o=n,r=s(1001),c=(0,r.Z)(o,i,a,!1,null,"20330496",null),l=c.exports},1136:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,i){return e("li",{key:i,class:{current:t.tabidx==i}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=i,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},a=[],n={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,i=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],a=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),n=0,o=0;o=n-i,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?n-=a+o-.1*t.closest(".tab_wrap").offsetWidth:n+=a-o+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+n+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var r=e-s.offsetWidth;n>=0&&(s.style.transform="translate(0, 0)"),n<=r&&(s.style.transform="translate("+r+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,i=0,a=0,n=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var o=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;i=e.touches[0].screenX,a=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;n=parseInt(a)+parseInt(e.touches[0].screenX-i),t.style.transform="translate("+n+"px, 0px)"})),t.addEventListener("touchend",(function(e){n>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(n)>o&&n<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},o=n,r=s(1001),c=(0,r.Z)(o,i,a,!1,null,"a9668034",null),l=c.exports},5173:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"search_wrap"},[e("div",{staticClass:"search_form"},[e("Inputs",{attrs:{input_type:"text",id:"아이디",value:"",placeholder:"검색어를 입력하세요."}}),e("button",{staticClass:"btn_search"},[t._v("검색")])],1)]),e("Tabs",{attrs:{tabClass:"tab_type_03",tab_item:t.tab_item_category,tabidx:t.tabidx},on:{change:t.change}}),e("div",{staticClass:"cate_wrap content"},[e("div",{staticClass:"left_frame"},[e("div",{staticClass:"filter_wrap"},[e("strong",{staticClass:"tit"},[t._v("필터")]),e("dl",[e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("카테고리")]),e("dd",{staticClass:"cate_list"},[e("div",t._l(t.cate[0].main,(function(s,i){return e("dl",{key:i},[e("dt",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:s.item}})],1),s.sub?e("dd",{class:{active:t.cate[0].idx==i}},[e("ul",t._l(s.sub,(function(s,i){return e("li",{key:i,class:{active:t.cate[0].Sidx==i}},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:s.item}}),s.sub02?e("ul",t._l(s.sub02,(function(s,i){return e("li",{key:i,class:{active:t.cate[0].Ssidx==i}},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:s.item}})],1)})),0):t._e()],1)})),0)]):t._e()])})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("브랜드")]),e("dd",[e("ul",{staticClass:"check_type"},t._l(t.filter[0].brand,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.text,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("색상 (18)")]),e("dd",[e("ul",{staticClass:"color_book"},t._l(t.filter[0].color,(function(t,s){return e("li",{key:s},[e("Inputs",{class:{border:"#fff"==t.bg},style:{backgroundColor:t.bg},attrs:{input_type:"checkbox",id:"아이디",text:t.text,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("사이즈 (5)")]),e("dd",[e("ul",{staticClass:"size_book"},t._l(t.filter[0].size,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("가격")]),e("dd",[e("div",{staticClass:"multi_form"},[e("div",[e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}}),e("span",[t._v("~")]),e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}})],1),e("em",[t._v("에러문구")])]),e("ul",{staticClass:"check_type"},t._l(t.filter[0].price,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"radio",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("할인율")]),e("dd",[e("div",{staticClass:"multi_form"},[e("div",[e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}}),e("span",[t._v("~")]),e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}})],1),e("em",[t._v("에러문구")])]),e("ul",{staticClass:"check_type"},t._l(t.filter[0].discount,(function(t,s){return e("li",{key:s},[e("Inputs",{attrs:{input_type:"radio",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0)])])])]),e("div",{staticClass:"right_frame"},[e("div",{staticClass:"tit_wrap"},[t._m(0),e("div",{staticClass:"option_wrap"},[e("SelectBox",{attrs:{isChange:!0,options:t.options}})],1)]),e("p",{staticClass:"select_filter"},[e("button",{staticClass:"reset"},[t._v("초기화")]),t._l(t.filter[0].color,(function(t,s){return e("button",{key:s,staticClass:"type_color"},[e("em",{class:{border:"#fff"==t.bg},style:{backgroundColor:t.bg}})])})),t._l(t.filter[0].brand,(function(s,i){return e("button",{key:i},[t._v(t._s(s.text))])})),t._l(t.filter[0].size,(function(s,i){return e("button",{key:i},[t._v(t._s(s.item))])})),t._l(t.filter[0].price,(function(s,i){return e("button",{key:i},[t._v(t._s(s.item))])})),t._l(t.filter[0].prdiscountice,(function(s,i){return e("button",{key:i},[t._v(t._s(s.item))])}))],2),e("GoodsList",{staticClass:"type_02",attrs:{isWish:!0,isCart:!0,item:t.goods_item[0].item}}),t._m(1)],1)])],1)},a=[function(){var t=this,e=t._self._c;return e("h3",[e("span",{staticClass:"sub_tit"},[t._v("여성 / 아우터")]),t._v(" 상의 "),e("em",[t._v("(34)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("a",{staticClass:"btn_first",attrs:{href:"#none"}},[t._v("처음으로")]),e("a",{staticClass:"btn_prev",attrs:{href:"#none"}},[t._v("이전")]),e("a",{attrs:{href:"#none"}},[t._v("1")]),e("a",{attrs:{href:"#none"}},[t._v("2")]),e("a",{attrs:{href:"#none"}},[t._v("3")]),e("a",{attrs:{href:"#none"}},[t._v("4")]),e("a",{staticClass:"btn_next",attrs:{href:"#none"}},[t._v("다음")]),e("a",{staticClass:"btn_end",attrs:{href:"#none"}},[t._v("마지막으로")])])}],n=s(427),o=s(1136),r=s(5068),c=s(8025),l={name:"App",components:{Inputs:n.Z,Tabs:o.Z,SelectBox:r.Z,GoodsList:c.Z},data(){return{tabidx:0,tab_item_category:[{item:"상품(999)"},{item:"브랜드(999)"},{item:"기획전(999)"}],options:[{val:"value",txt:"판매 인기순"},{val:"value",txt:"신상품순"},{val:"value",txt:"높은가격순"},{val:"value",txt:"낮은가격순"},{val:"value",txt:"평점높은순"},{val:"value",txt:"찜인기순"}],cate:[{idx:2,Sidx:0,Ssidx:0,main:[{item:"전체"},{item:"아우터"},{item:"상의",sub:[{item:"상의-드로즈",sub02:[{item:"드로즈-하위1"},{item:"드로즈-하위2"},{item:"드로즈-하위3"},{item:"드로즈-하위4"},{item:"드로즈-하위5"}]},{item:"상의-트렁크"},{item:"상의-세트"},{item:"상의-런닝/티"},{item:"상의-베이스 레이어"},{item:"상의-히트웨어"},{item:"상의-홈웨어"}]},{item:"하의",sub:[{item:"하의-드로즈"},{item:"하의-트렁크"},{item:"하의-세트"},{item:"하의-런닝/티"},{item:"하의-베이스 레이어"},{item:"하의-히트웨어"},{item:"하의-홈웨어"}]},{item:"세트웨어"},{item:"패션 잡화"}]}],filter:[{brand:[{text:"아디다스 스포츠",isChecked:!0},{text:"켈빈 클라인",isChecked:!1},{text:"노티카",isChecked:!1},{text:"바나나 리퍼블릭",isChecked:!0},{text:"푸마",isChecked:!1}],color:[{bg:"#fff"},{bg:"#FEDCDC"},{bg:"#FCB89A"},{bg:"#D9EA71"},{bg:"#8CDA8A"},{bg:"#A1E2DE"},{bg:"#68C7E5"},{bg:"#A2C5FB"},{bg:"#D7B6F8"}],size:[{item:"XS"},{item:"S"},{item:"M"},{item:"L"},{item:"XL"},{item:"XXL"}],price:[{item:"0~30,000원"},{item:"30,000~100,000원"},{item:"100,000~150,000원"},{item:"150,000~200,000원"},{item:"200,000원 이상"}],discount:[{item:"1~15%"},{item:"15~30%"},{item:"30~50%"},{item:"50% 이상"}]}],goods_item:[{item:[{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7999),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(7788),brand:"Nike",tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"43%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(4202),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(1989),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:s(305),brand:"Nike",tit:"나이키 에어",price:"250,000",ori_price:"2,500,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}]}},mounted(){var t=document.querySelectorAll(".cate_list .check");t.forEach((function(t,e){var s=t.querySelector("input");s.addEventListener("change",(function(){s.checked?("DT"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.parentElement.nextElementSibling.classList.add("active"),"LI"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.nextElementSibling.classList.add("active")):("DT"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.parentElement.nextElementSibling.classList.remove("active"),"LI"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.nextElementSibling.classList.remove("active"))}))}))},methods:{onToggleCheckCategory(t){t.currentTarget.nextSibling.classList.toggle("active")}}},u=l,p=s(1001),d=(0,p.Z)(u,i,a,!1,null,"486aba4d",null),_=d.exports},7788:function(t,e,s){t.exports=s.p+"img/sam_goods01.65933508.png"},4202:function(t,e,s){t.exports=s.p+"img/sam_goods02.794709c0.png"},305:function(t,e,s){t.exports=s.p+"img/sam_goods03.70b43f27.png"},1989:function(t,e,s){t.exports=s.p+"img/sam_goods_list_01.82c4aa91.jpg"},7999:function(t,e,s){t.exports=s.p+"img/sam_goods_list_02.baf759f0.jpg"}}]);
//# sourceMappingURL=5173.e3ecb1ca.js.map