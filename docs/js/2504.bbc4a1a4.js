"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[2504],{2999:function(t,e,i){i.d(e,{Z:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[t._v(" "+t._s(t.path)+" "),e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(i,l){return e("li",{key:l},[e("em",{class:i.class},[t._v(t._s(i.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(i,l){return e("li",{key:l},[e("span",[t._v(t._s(i.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},n=[],s=i(427),a={components:{Inputs:s.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,device:String},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),this.path=window.location.pathname.split("/")[1],console.log("aa : "+path),"pc"!=this.path&&""!=this.path||(this.path="/pc/"),"mo"==this.path&&(this.path="/mo/")},methods:{}},o=a,c=i(1001),r=(0,c.Z)(o,l,n,!1,null,"5d734b70",null),u=r.exports},8025:function(t,e,i){i.d(e,{Z:function(){return p}});var l=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(i,l){return e("li",{key:l,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:i}})],1)})),0)},n=[],s=i(427),a=i(2999),o=i(5068),c={components:{Inputs:s.Z,GoodsItem:a.Z,SelectBox:o.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},r=c,u=i(1001),d=(0,u.Z)(r,l,n,!1,null,"7d83d77c",null),p=d.exports},427:function(t,e,i){i.d(e,{Z:function(){return r}});var l=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},n=[],s={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},a=s,o=i(1001),c=(0,o.Z)(a,l,n,!1,null,"566d6e0a",null),r=c.exports},3201:function(t,e,i){i.d(e,{Z:function(){return r}});var l=function(){var t=this,e=t._self._c;return e("modal",{class:t.modalClass,attrs:{name:"modalSkin",height:"auto"}},[e("div",{staticClass:"modal_header"},[t.modalTitle?e("h2",[t._v(t._s(t.modalTitle))]):t._e(),e("button",{staticClass:"btn_close",attrs:{type:"button"},on:{click:function(e){t.$modal.hide("modalSkin"),t.modalClose(e)}}},[t._v("닫기")])]),t._t("bottom"),e("div",{staticClass:"modal_content"},[t._t("default")],2)],2)},n=[],s={props:["modalTitle","modalClass"],mounted(){},methods:{modalClose(){document.querySelectorAll("body")[0].classList.contains("fixed")&&document.querySelectorAll("body")[0].classList.remove("fixed")}}},a=s,o=i(1001),c=(0,o.Z)(a,l,n,!1,null,null,null),r=c.exports},5068:function(t,e,i){i.d(e,{Z:function(){return r}});var l=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(i,l){return e("option",{key:l,domProps:{value:i.val}},[t._v(t._s(i.txt))])})),0)])])},n=[],s={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},a=s,o=i(1001),c=(0,o.Z)(a,l,n,!1,null,"20330496",null),r=c.exports},3542:function(t,e,i){i.d(e,{Z:function(){return r}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"gnb"},[e("ul",t._l(t.globalMenu,(function(i,l){return e("li",{key:l},[e("a",{attrs:{href:""}},[t._v(t._s(i.title))]),e("button",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("열림")]),e("ul",t._l(i.child,(function(i,l){return e("li",{key:l},[e("a",{attrs:{href:""}},[t._v(t._s(i.title))]),e("button",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("열림")]),e("ul",t._l(i.child,(function(i,l){return e("li",{key:l},[e("a",{attrs:{href:""}},[t._v(t._s(i.title))])])})),0)])})),0)])})),0)])},n=[],s={components:{},props:{},data(){return{globalMenu:[{title:"BEST",child:[{title:"UNDERWEAR",child:[{title:"남성"},{title:"여성"}]},{title:"MEN",child:[{title:"아우터"},{title:"상의"},{title:"하의"},{title:"잡화"},{title:"세트"}]},{title:"WOMEN",child:[{title:"아우터"},{title:"상의"},{title:"하의"},{title:"잡화"},{title:"세트"}]},{title:"KIDS",child:[{title:"아우터"},{title:"상의"},{title:"하의"},{title:"세트"},{title:"언더웨어"}]},{title:"OUTLET",child:[{title:"남성"},{title:"여성"},{title:"키즈"}]}]},{title:"UNDERWEAR",child:[{title:"남성",child:[{title:"드로즈"},{title:"트렁크"},{title:"세트"},{title:"런닝/티"},{title:"베이스레이어"},{title:"히트웨어"},{title:"홈웨어"}]},{title:"여성",child:[{title:"브라"},{title:"팬티"},{title:"세트"},{title:"브라탑"},{title:"레깅스"},{title:"베이스레이어"},{title:"히트웨어"},{title:"홈웨어"}]}]},{title:"MEN",child:[{title:"아우터",child:[{title:"자켓"},{title:"점퍼"},{title:"코트"},{title:"패딩"},{title:"베스트"}]},{title:"상의",child:[{title:"긴팔 티셔츠"},{title:"반팔 티셔츠"},{title:"맨투맨"},{title:"후드"},{title:"셔츠"},{title:"니트"}]},{title:"하의",child:[{title:"긴바지"},{title:"스웻팬츠"},{title:"데님"},{title:"반바지"}]},{title:"세트웨어",child:[{title:"전상품"}]},{title:"패션잡화",child:[{title:"스니커즈"},{title:"방한화"},{title:"골프화"},{title:"ETC"}]}]},{title:"WOMEN",child:[{title:"아우터",child:[{title:"자켓"},{title:"점퍼"},{title:"코트"},{title:"패딩"},{title:"베스트"}]},{title:"상의",child:[{title:"긴팔 티셔츠"},{title:"반팔 티셔츠"},{title:"맨투맨"},{title:"후드"},{title:"셔츠"},{title:"니트"}]},{title:"하의",child:[{title:"긴바지"},{title:"스웻팬츠"},{title:"데님"},{title:"반바지"},{title:"스커트"},{title:"레깅스"}]},{title:"세트웨어",child:[{title:"전상품"}]},{title:"패션잡화",child:[{title:"스니커즈"},{title:"방한화"},{title:"골프화"},{title:"ETC"}]}]},{title:"KIDS",child:[{title:"아우터",child:[{title:"자켓"},{title:"점퍼"},{title:"코트"},{title:"패딩"},{title:"베스트"}]},{title:"상의",child:[{title:"긴팔 티셔츠"},{title:"반팔 티셔츠"},{title:"맨투맨"},{title:"후드"},{title:"셔츠"},{title:"니트"}]},{title:"하의",child:[{title:"긴바지"},{title:"스웻팬츠"},{title:"반바지"},{title:"스커트"},{title:"레깅스"}]},{title:"세트웨어",child:[{title:"전상품"}]},{title:"언더웨어",child:[{title:"팬티"},{title:"히트웨어"},{title:"아우터"}]}]},{title:"OUTLET",child:[{title:"MEN",child:[{title:"아우터"},{title:"상의"},{title:"하의"},{title:"세트웨어"},{title:"패션잡화"}]},{title:"WOMEN",child:[{title:"아우터"},{title:"상의"},{title:"하의"},{title:"세트웨어"},{title:"패션잡화"}]},{title:"KIDS",child:[{title:"아우터"},{title:"상의"},{title:"하의"},{title:"세트웨어"}]}]}]}},methods:{onToggleCheckCategory(t){t.currentTarget.classList.toggle("active")},closeGlobalMenu(){const t=document.getElementById("gnb");t.classList.remove("active"),t.scrollTo(0,0)}}},a=s,o=i(1001),c=(0,o.Z)(a,l,n,!1,null,"76eeb034",null),r=c.exports},4016:function(t,e,i){i.d(e,{Z:function(){return u}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter_wrap"},[e("dl",[e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("카테고리")]),e("dd",{staticClass:"cate_list"},[e("div",t._l(t.cate[0].main,(function(i,l){return e("dl",{key:l},[e("dt",[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:i.item}})],1),i.sub?e("dd",{class:{active:t.cate[0].idx==l}},[e("ul",t._l(i.sub,(function(i,l){return e("li",{key:l,class:{active:t.cate[0].Sidx==l}},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:i.item}}),i.sub02?e("ul",t._l(i.sub02,(function(i,l){return e("li",{key:l,class:{active:t.cate[0].Ssidx==l}},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:i.item}})],1)})),0):t._e()],1)})),0)]):t._e()])})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("브랜드")]),e("dd",[e("ul",{staticClass:"check_type"},t._l(t.filter[0].brand,(function(t,i){return e("li",{key:i},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.text,checked:t.isChecked}})],1)})),0),e("button",{staticClass:"reset"},[t._v("초기화")])]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("색상 (18)")]),e("dd",[e("ul",{staticClass:"color_book"},t._l(t.filter[0].color,(function(t,i){return e("li",{key:i},[e("Inputs",{class:{border:"#fff"==t.bg},style:{backgroundColor:t.bg},attrs:{input_type:"checkbox",id:"아이디",checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("사이즈 (5)")]),e("dd",[e("ul",{staticClass:"size_book"},t._l(t.filter[0].size,(function(t,i){return e("li",{key:i},[e("Inputs",{attrs:{input_type:"checkbox",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0)]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("가격")]),e("dd",[e("div",{staticClass:"multi_form"},[e("div",[e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}}),e("span",[t._v("~")]),e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}})],1),e("em",[t._v("에러문구")])]),e("ul",{staticClass:"check_type"},t._l(t.filter[0].price,(function(t,i){return e("li",{key:i},[e("Inputs",{attrs:{input_type:"radio",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0),e("button",{staticClass:"reset"},[t._v("초기화")])]),e("dt",{on:{click:function(e){return e.preventDefault(),t.onToggleCheckCategory(e)}}},[t._v("할인율")]),e("dd",[e("div",{staticClass:"multi_form"},[e("div",[e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}}),e("span",[t._v("~")]),e("Inputs",{attrs:{input_type:"text",id:"id_text",value:""}})],1),e("em",[t._v("에러문구")])]),e("ul",{staticClass:"check_type"},t._l(t.filter[0].discount,(function(t,i){return e("li",{key:i},[e("Inputs",{attrs:{input_type:"radio",id:"아이디",text:t.item,checked:t.isChecked}})],1)})),0),e("button",{staticClass:"reset"},[t._v("초기화")])])])])},n=[],s=i(427),a={components:{Inputs:s.Z},props:{},data(){return{cate:[{idx:2,Sidx:0,Ssidx:0,main:[{item:"전체"},{item:"아우터"},{item:"상의",sub:[{item:"상의-드로즈",sub02:[{item:"드로즈-하위1"},{item:"드로즈-하위2"},{item:"드로즈-하위3"},{item:"드로즈-하위4"},{item:"드로즈-하위5"}]},{item:"상의-트렁크"},{item:"상의-세트"},{item:"상의-런닝/티"},{item:"상의-베이스 레이어"},{item:"상의-히트웨어"},{item:"상의-홈웨어"}]},{item:"하의",sub:[{item:"하의-드로즈"},{item:"하의-트렁크"},{item:"하의-세트"},{item:"하의-런닝/티"},{item:"하의-베이스 레이어"},{item:"하의-히트웨어"},{item:"하의-홈웨어"}]},{item:"세트웨어"},{item:"패션 잡화"}]}],filter:[{brand:[{text:"아디다스 스포츠",isChecked:!0},{text:"켈빈 클라인",isChecked:!1},{text:"노티카",isChecked:!1},{text:"바나나 리퍼블릭",isChecked:!0},{text:"푸마",isChecked:!1}],color:[{bg:"#fff"},{bg:"#FEDCDC"},{bg:"#FCB89A"},{bg:"#D9EA71"},{bg:"#8CDA8A"},{bg:"#A1E2DE"},{bg:"#68C7E5"},{bg:"#A2C5FB"},{bg:"#D7B6F8"}],size:[{item:"XS"},{item:"S"},{item:"M"},{item:"L"},{item:"XL"},{item:"XXL"}],price:[{item:"0~30,000원"},{item:"30,000~100,000원"},{item:"100,000~150,000원"},{item:"150,000~200,000원"},{item:"200,000원 이상"}],discount:[{item:"1~15%"},{item:"15~30%"},{item:"30~50%"},{item:"50% 이상"}]}]}},mounted(){var t=document.querySelectorAll(".cate_list .check");t.forEach((function(t,e){var i=t.querySelector("input");i.addEventListener("change",(function(){i.checked?("DT"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.parentElement.nextElementSibling.classList.add("active"),"LI"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.nextElementSibling.classList.add("active")):("DT"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.parentElement.nextElementSibling.classList.remove("active"),"LI"==t.parentNode.tagName&&null!=t.parentElement.nextElementSibling&&t.nextElementSibling.classList.remove("active"))}))}))},methods:{onToggleCheckCategory(t){t.currentTarget.classList.toggle("active")}}},o=a,c=i(1001),r=(0,c.Z)(o,l,n,!1,null,"2c8c5e4e",null),u=r.exports},7788:function(t,e,i){t.exports=i.p+"img/sam_goods01.65933508.png"},4202:function(t,e,i){t.exports=i.p+"img/sam_goods02.794709c0.png"},305:function(t,e,i){t.exports=i.p+"img/sam_goods03.70b43f27.png"},1989:function(t,e,i){t.exports=i.p+"img/sam_goods_list_01.82c4aa91.jpg"},7999:function(t,e,i){t.exports=i.p+"img/sam_goods_list_02.baf759f0.jpg"}}]);
//# sourceMappingURL=2504.bbc4a1a4.js.map