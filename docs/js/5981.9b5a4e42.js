"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[5981],{70:function(t,e,s){s.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods_item"},[e("a",{attrs:{href:t.path+"GD_01_01_01"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.img}})]),t.item.option_icon?e("i",[t._v(t._s(t.item.option_icon))]):t._e()])]),e("div",{staticClass:"cont"},[1==t.isWish?e("Inputs",{staticClass:"check wish",attrs:{input_type:"checkbox"}}):t._e(),t.isCart?e("a",{staticClass:"btn_cart",attrs:{href:"#none"}},[t._v("장바구니 담기")]):t._e(),e("a",{staticClass:"title",attrs:{href:"#none"}},[t.item.logo?e("em",{staticClass:"logo"},[e("img",{attrs:{src:t.item.logo}})]):t._e(),t.item.brand?e("strong",[t._v(t._s(t.item.brand))]):t._e(),e("span",[t._v(t._s(t.item.tit))]),t.item.explain?e("p",[t._v(t._s(t.item.explain))]):t._e()]),t.item.price?e("strong",{staticClass:"price"},[t.item.ori_price?e("del",[t._v(t._s(t.item.ori_price))]):t._e(),e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e(),t.item.badge?e("ul",{staticClass:"flag"},t._l(t.item.badge,(function(s,i){return e("li",{key:i},[e("em",{class:s.class},[t._v(t._s(s.txt))])])})),0):t._e()],1),t.item.options?e("div",{staticClass:"option_wrap",class:{active:1==t.optionActive}},[e("button",{staticClass:"size_pop",on:{click:function(e){1==t.optionActive?t.optionActive=!1:t.optionActive=!0}}},[t._v(t._s(t.item.options.title))]),e("div",[e("ul",t._l(t.item.options.item,(function(s,i){return e("li",{key:i},[e("span",[t._v(t._s(s.txt))])])})),0),e("button",{staticClass:"btn_close",on:{click:function(e){t.optionActive=!1}}},[t._v("닫기")])])]):t._e()])},a=[],n=s(427),o={components:{Inputs:n.Z},data(){return{optionActive:this.optionActive}},props:{item:"",dataType:String,isWish:!1,isCart:!1,optionActive:!1,path:"teste"},mounted(){const t=document.querySelectorAll(".goods_item");t.forEach((function(t){var e=t.parentElement.querySelector(".option_wrap");0!=t.parentElement.getElementsByClassName("option_wrap").length&&(t.addEventListener("mouseover",(function(){e.classList.add("show"),e.style.top=t.parentElement.querySelector(".thumb").offsetHeight+4+"px"})),t.parentElement.addEventListener("mouseleave",(function(){e.classList.remove("show")})))})),path=window.location.pathname.split("/")[1],console.log("aaa:",path),"pc"!=path&&void 0!=path&&""!=path&&"Guide"!=path||(this.path="/pc/"),"mo"==path&&(this.path="/mo/")},methods:{}},r=o,l=s(1001),c=(0,l.Z)(r,i,a,!1,null,"c0dce752",null),p=c.exports},8025:function(t,e,s){s.d(e,{Z:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"goods_list",class:{"swiper-wrapper":t.isSwiper},attrs:{"data-type":t.dataType}},t._l(t.item,(function(s,i){return e("li",{key:i,class:{"swiper-slide":t.isSwiper}},[e("GoodsItem",{attrs:{isWish:t.isWish,isCart:t.isCart,item:s}})],1)})),0)},a=[],n=s(427),o=s(70),r=s(5068),l={components:{Inputs:n.Z,GoodsItem:o.Z,SelectBox:r.Z},props:{item:Array,dataType:String,isWish:!1,isCart:!1,isSwiper:!1},mounted(){}},c=l,p=s(1001),m=(0,p.Z)(c,i,a,!1,null,"7d83d77c",null),u=m.exports},427:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return"radio"==t.input_type||"checkbox"==t.input_type?e("label",{staticClass:"check"},[e("input",{attrs:{type:t.input_type,id:t.id},domProps:{value:t.value,checked:t.checked}}),e("em",{staticClass:"label"},[t.required_txt?e("i",{class:t.required_type},[t._v(t._s(t.required_txt))]):t._e(),t._v(" "+t._s(t.text)+" ")])]):e("div",{staticClass:"label_wrap"},[e("label",{staticClass:"input",class:{err:t.isError}},[t.placeholder&&!t.isDisabled?e("i",[t._v(t._s(t.placeholder))]):t._e(),e("input",{attrs:{type:t.input_type,id:t.id,readonly:t.readonly,disabled:t.isDisabled},domProps:{value:t.value},on:{focus:t.hidePlaceholder,blur:t.valueChk}}),e("em",[t._v(t._s(t.err_text))])])])},a=[],n={components:{},props:{input_type:String,checked:String,id:String,value:"",text:String,placeholder:"",err_text:String,required_type:String,required_txt:String,readonly:!1,isError:!1,isDisabled:!1},mounted(){},methods:{hidePlaceholder(t){t.currentTarget.previousSibling.style.display="none"},valueChk(t){t.currentTarget.value.length>0?t.currentTarget.previousSibling.style.display="none":t.currentTarget.previousSibling.style.removeProperty("display")}}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"566d6e0a",null),c=l.exports},4316:function(t,e,s){s.d(e,{Z:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_item"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.photo},on:{click:function(e){return e.preventDefault(),t.$openModalImage(e,"modalSkinImage")}}})])]),e("a",{staticClass:"cont",attrs:{href:"#none"}},[t.item.goods?e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.item.goods}})])]):t._e(),t.item.tit||t.item.price?e("div",[t.item.tit?e("p",{staticClass:"title"},[e("span",[t._v(t._s(t.item.tit))])]):t._e(),t.item.price?e("strong",{staticClass:"price"},[e("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e()]):t._e(),e("ReviewScore",{attrs:{item:t.item.reivewScore}})],1)])},a=[],n=s(8306),o={components:{ReviewScore:n.Z},props:{item:"",isSwiper:!1},data(){return{}},methods:{},mounted(){}},r=o,l=s(1001),c=(0,l.Z)(r,i,a,!1,null,"894f1f22",null),p=c.exports},8306:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"review_score"},[e("p",t._l(Math.ceil(t.item),(function(s,i){return e("span",{key:i,class:{half:s>t.item}})})),0),e("span",[t._v("("+t._s(t.item)+")")])])},a=[],n={components:{},props:{item:""},mounted(){}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"d06c9eac",null),c=l.exports},8497:function(t,e,s){s.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"review_list"},t._l(t.item,(function(t,s){return e("li",{key:s,staticClass:"review_list_item"},[e("ReviewItem",{attrs:{item:t}})],1)})),0)},a=[],n=s(8306),o=s(4316),r={components:{ReviewScore:n.Z,ReviewItem:o.Z},props:{item:Array},data(){return{}},methods:{},mounted(){}},l=r,c=s(1001),p=(0,c.Z)(l,i,a,!1,null,"931ddbf4",null),m=p.exports},5068:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("label",{staticClass:"select"},[e("div",[e("select",{class:{changed:t.isChange},attrs:{"v-model":t.model,disabled:t.isDisabled},on:{change:function(e){t.isChange=!0}}},t._l(t.options,(function(s,i){return e("option",{key:i,domProps:{value:s.val}},[t._v(t._s(s.txt))])})),0)])])},a=[],n={name:"SelectBox",components:{},props:{options:Array,model:String,isChange:!1,isDisabled:!1},mounted(){}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"20330496",null),c=l.exports},1136:function(t,e,s){s.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_wrap",class:{type_slide:"slide"==t.tabType}},[e("ul",{class:t.tabClass,staticStyle:{transform:"translate(0,0)"}},t._l(t.tab_item,(function(s,i){return e("li",{key:i,class:{current:t.tabidx==i}},[e("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){t.tabidx=i,t.indChk()}}},[t._v(t._s(s.item))])])})),0),t.moreTxt?e("a",{staticClass:"more",attrs:{href:t.moreLink}},[t._v(t._s(t.moreTxt))]):t._e()])},a=[],n={components:{},data(){return{}},props:{tab_item:Array,tabClass:String,tabType:String,tabidx:Number,moreLink:String,moreTxt:String},mounted(){const t=document.querySelectorAll(".tab_wrap li a");t.forEach((function(t,e){var s=t.closest("ul");s.offsetWidth<t.closest(".tab_wrap").offsetWidth&&s.classList.add("full"),t.addEventListener("click",(function(){if(s.offsetWidth>t.closest(".tab_wrap").offsetWidth){var e,i=s.style.transform.replace(/[^0-9\-.,]/g,"").split(",")[1],a=Math.abs(.5*t.closest(".tab_wrap").offsetWidth-t.offsetLeft),n=0,o=0;o=n-i,t.offsetLeft>.5*t.closest(".tab_wrap").offsetWidth?n-=a+o-.1*t.closest(".tab_wrap").offsetWidth:n+=a-o+.1*t.closest(".tab_wrap").offsetWidth,s.style.transform="translate("+n+"px, 0)",e="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?t.closest(".tab_wrap").offsetWidth:t.closest(".tab_wrap").offsetWidth-40;var r=e-s.offsetWidth;n>=0&&(s.style.transform="translate(0, 0)"),n<=r&&(s.style.transform="translate("+r+"px, 0)")}t.stopPropagation}))}));const e=document.querySelectorAll(".tab_wrap.type_slide ul");e.forEach((function(t,e){var s,i=0,a=0,n=0;s="SECTION"!=t.closest(".tab_wrap").parentElement.tagName?0:40;var o=t.offsetWidth-t.parentElement.offsetWidth+s;t.offsetWidth>window.innerWidth&&(t.addEventListener("touchstart",(function(e){t.preventDefault;e.originalEvent;i=e.touches[0].screenX,a=t.closest("ul").style.transform.replace(/[^0-9\-.,]/g,"").split(",")[0]})),t.addEventListener("touchmove",(function(e){e.originalEvent;n=parseInt(a)+parseInt(e.touches[0].screenX-i),t.style.transform="translate("+n+"px, 0px)"})),t.addEventListener("touchend",(function(e){n>0&&(t.style.transform="translate(0px, 0px)"),Math.abs(n)>o&&n<0&&(t.style.transform="translate(-"+(t.offsetWidth-t.parentElement.offsetWidth+s)+"px, 0px)")})))}))},methods:{indChk(){this.$emit("change",this.tabidx)}}},o=n,r=s(1001),l=(0,r.Z)(o,i,a,!1,null,"a9668034",null),c=l.exports},5981:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",[e("swiper",{staticClass:"main_visual",attrs:{options:t.mainOptions}},[t._l(t.Main_slide_item,(function(s,i){return e("swiper-slide",{key:i},[e("a",{staticClass:"slide-bgimg",attrs:{href:"#none"}},[e("span",{staticClass:"thumb",style:{height:t.windowHeight+"px"}},["img"==s.type?e("img",{attrs:{src:s.img}}):t._e(),"video"==s.type?e("video",{attrs:{autoplay:"",playsinline:""}},[e("source",{attrs:{src:s.img,type:"video/mp4"}})]):t._e()]),e("div",{staticClass:"cont"},[e("div",{staticClass:"cont_inner"},[e("span",[t._v(t._s(s.brand))]),e("strong",[t._v(t._s(s.tit))]),e("p",{domProps:{innerHTML:t._s(s.txt)}})])])])])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),e("section",{staticClass:"big_thumb_type"},[t._m(0),t._l(t.brand_item,(function(s,i){return e("div",{key:i},[e("div",{staticClass:"main"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.main_img,alt:""}})])])]),e("GoodsList",{attrs:{item:t.brand_item[0].sub_item}})],1)}))],2),e("section",{staticClass:"big_thumb_type_02"},[t._m(1),t._l(t.goods_item_HOTItem,(function(s,i){return e("div",{key:i},[e("div",{staticClass:"main"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.img,alt:""}})])])]),e("GoodsList",{attrs:{item:t.goods_item_HOTItem[0].sub_item}})],1)}))],2),e("section",{staticClass:"new"},[e("h3",[t._v("NEW")]),e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tab_item_best,tabidx:t.tabidx}}),e("swiper",{attrs:{options:t.defaultOptions}},t._l(t.goods_item_best[0].item,(function(t,s){return e("swiper-slide",{key:s},[e("GoodsItem",{attrs:{item:t}})],1)})),1)],1),e("section",{staticClass:"big_thumb_type"},[e("h3",[t._v("Look Book")]),t._l(t.brand_item,(function(s,i){return e("div",{key:i},[e("div",{staticClass:"main"},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.main_img,alt:""}})])])]),e("GoodsList",{attrs:{item:t.brand_item[0].sub_item}})],1)}))],2),e("section",{staticClass:"new"},[e("h3",[t._v("BEST")]),e("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tab_item_best,tabidx:t.tabidx}}),e("swiper",{attrs:{options:t.defaultOptions}},t._l(t.goods_item_best[0].item,(function(t,s){return e("swiper-slide",{key:s},[e("GoodsItem",{attrs:{item:t}})],1)})),1)],1),e("section",{staticClass:"influencer"},[e("h3",[t._v("Fashion People Choice")]),e("swiper",{staticClass:"type_card",attrs:{options:t.influencerOptions}},t._l(t.influencer_item,(function(s,i){return e("swiper-slide",{key:i},[e("a",{staticClass:"item",attrs:{href:"#none"}},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.img,alt:""}})])]),e("div",{staticClass:"cont"},[e("p",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:s.user[0].profile,alt:""}})]),e("strong",[t._v(t._s(s.user[0].name))])]),e("p",{staticClass:"txt_wrap"},[e("span",[t._v(t._s(s.txt))]),e("em",[t._v(t._s(s.url))])])])])])})),1)],1),e("section",{staticClass:"review"},[t._m(2),e("swiper",{attrs:{options:t.reviewOptions}},t._l(t.review,(function(s,i){return e("swiper-slide",{key:i},[e("Reviews",{attrs:{item:t.review}})],1)})),1)],1),e("section",{staticClass:"insta"},[e("h3",[t._v("Instagram")]),e("ul",t._l(t.insta,(function(t,s){return e("li",{key:s},[e("span",{staticClass:"thumb"},[e("em",[e("img",{attrs:{src:t.img,alt:""}})])])])})),0)])],1)},a=[function(){var t=this,e=t._self._c;return e("h3",[t._v("겨울에도 멋내기 "),e("p",{staticClass:"sub_tit"},[t._v("두꺼운 패딩의 계절에도 멋내기 좋은 맨투맨 시리즈")])])},function(){var t=this,e=t._self._c;return e("h3",[t._v("Fashion People Item "),e("p",{staticClass:"sub_tit"},[t._v("머리 끝부터 발끝까지, 패피의 완성은 포인트")])])},function(){var t=this,e=t._self._c;return e("h3",[t._v("REVIEW "),e("p",{staticClass:"sub_tit"},[t._v("코웰패션 이용 고객들의 생생 리뷰")])])}],n=s(8025),o=s(70),r=s(1136),l=s(8497),c={name:"App",components:{GoodsList:n.Z,GoodsItem:o.Z,Tabs:r.Z,Reviews:l.Z},data(){return{windowHeight:window.innerHeight,Main_slide_item:[{img:s(4659),type:"video",brand:"pc-Ourplace",tit:"Best Sweatshirt",txt:"남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!"},{img:s(2421),type:"img",brand:"Canada Goose",tit:"Keep Me Warm",txt:"칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템"},{img:s(9953),type:"img",brand:"Kappa",tit:"Best Sweatshirt",txt:"남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!"}],brand_item:[{main_img:s(3276),sub_item:[{img:s(3276),tit:"라인 바시티 자켓",price:"169,000",discount:"33%"},{img:s(4113),tit:"ADIDAS",price:"169,000",discount:"33%"},{img:s(3276),tit:"NIKE",price:"169,000",discount:"33%"}]}],tabidx:0,tab_item_best:[{item:"의류"},{item:"용품"},{item:"신발"}],goods_item_best:[{item:[{img:s(4113),tit:"라인 바시티 자켓 다크브라운라인 바시티 자켓 다크브라운라인 바시티 자켓 다크브라운라인 바시티 자켓 다크브라운",price:"250,000",discount:"45%"},{img:s(3276),tit:"나이키 에어",price:"250,000",discount:"45%"},{img:s(4113),tit:"나이키 에어",price:"250,000",discount:"45%"},{img:s(3276),tit:"나이키 에어",price:"250,000",discount:"45%"}]}],goods_item_HOTItem:[{img:s(3823),brand:"UGG",txt:"집밖은 위험해, 따듯한 홈웨어 시리즈",sub_item:[{img:s(5726),tit:"어그 미니 베일리보우 체스트넛",price:"269,000",discount:"4%"},{img:s(1356),tit:"22FW 어그 여성 플러프 예슬라이드 카키",price:"159,000",discount:"11%"},{img:s(5726),tit:"어그 미니 베일리보우 체스트넛",price:"269,000",discount:"4%"}]}],influencer_item:[{user:[{profile:s(3574),name:"cowella_mas"}],img:s(3574),txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:s(6753),name:"cowella_mas"}],img:s(6753),txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:s(6753),name:"cowella_mas"}],img:s(6753),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:s(1016),name:"cowella_mas"}],img:s(1016),txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:s(5432),name:"cowella_mas"}],img:s(5432),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:s(4536),name:"cowella_mas"}],img:s(4536),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:s(2364),name:"cowella_mas"}],img:s(2364),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:s(4536),name:"cowella_mas"}],img:s(4536),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"}],review:[{photo:s(1016),reivewScore:5},{photo:s(2364),reivewScore:4},{photo:s(4536),reivewScore:3.5},{photo:s(5432),reivewScore:2}],insta:[{img:s(5726)},{img:s(3276)},{img:s(5726)},{img:s(1356)},{img:s(5726)},{img:s(3276)},{img:s(5726)},{img:s(1356)}],defaultOptions:{slidesPerView:2,spaceBetween:5,pagination:{el:".swiper-pagination",type:"fraction"}},mainOptions:{loop:!0,slidesPerView:1,pagination:{el:".swiper-pagination",type:"fraction"},loopAdditionalSlides:0,watchSlidesProgress:!0,on:{init:function(){this.autoplay.stop()},slideChange:function(){},slideChangeTransitionEnd:function(){let t=this;t.el.querySelectorAll("strong"),t.el.querySelectorAll("p")},progress:function(){let t=this;for(let e=0;e<t.slides.length;e++){let s=t.slides[e].progress,i=.5*t.width,a=s*i;t.slides[e].querySelector(".slide-bgimg").style.transform="translateX("+a+"px)"}},touchStart:function(){let t=this;for(let e=0;e<t.slides.length;e++)t.slides[e].style.transition=""},setTransition:function(t){let e=this;for(let s=0;s<e.slides.length;s++)e.slides[s].style.transition=t+"ms",e.slides[s].querySelector(".slide-bgimg").style.transition=t+"ms"}}},influencerOptions:{loop:!0,slidesPerView:1.2,spaceBetween:10,centeredSlides:!0},reviewOptions:{loop:!0,slidesPerView:1,spaceBetween:5},pathClass:""}},watch:{$route(){this.pathFinder(this.$route.path)}},created(){this.pathFinder(this.$route.path),window.addEventListener("scroll",this.onScroll)},mounted(){window.addEventListener("scroll",this.onScroll),window.addEventListener("load",this.visualInit)},methods:{pathFinder(t){"/mo/"===t?(this.pathClass="main",this.onScroll(),this.visualInit()):"/mo/DP_01_01_01"===t&&(this.pathClass="brand",this.onScroll(),this.visualInit())},visualInit(){const t=window.innerHeight,e=document.getElementsByTagName("header")[0].offsetHeight,s=document.getElementsByClassName("main_visual")[0].offsetHeight,i=document.querySelectorAll(".main_visual .cont"),a=document.getElementById("action_bar"),n=document.getElementsByClassName("swiper-pagination")[0];t<e+s?i.forEach((e=>{e.style.bottom=t+30-a.offsetTop+"px",n.style.bottom=t+30-10-a.offsetTop+"px"})):a.offsetTop<e+s&&i.forEach((t=>{t.style.bottom=e+s-a.offsetTop+"px",n.style.bottom=e+s-a.offsetTop-14+"px"}))},onScroll(){const t=window.innerHeight,e=document.getElementsByTagName("header")[0].offsetHeight,s=document.getElementsByClassName("main_visual")[0].offsetHeight,i=document.querySelectorAll(".main_visual .cont"),a=document.getElementById("action_bar"),n=document.getElementsByClassName("swiper-pagination")[0];window.scrollY<this.lastScrollY&&window.scrollY<a.offsetHeight?t<e+s?i.forEach((e=>{e.style.bottom=t+30-(a.offsetTop+window.scrollY)+"px",n.style.bottom=t+30-10-(a.offsetTop+window.scrollY)+"px"})):a.offsetTop<e+s&&i.forEach((t=>{t.style.bottom=e+s-a.offsetTop+"px",n.style.bottom=e+s-a.offsetTop-14+"px"})):i.forEach((t=>{t.style.removeProperty("bottom"),n.style.removeProperty("bottom")})),this.lastScrollY=window.scrollY;window.scrollY,window.outerHeight,document.body.offsetHeight}}},p=c,m=s(1001),u=(0,m.Z)(p,i,a,!1,null,"4c9bdb56",null),d=u.exports},3823:function(t,e,s){t.exports=s.p+"img/hot_item_main.11ce56ac.png"},5726:function(t,e,s){t.exports=s.p+"img/hot_thumb01-1.dcb52f8e.png"},1356:function(t,e,s){t.exports=s.p+"img/hot_thumb01-2.8d9c6582.png"},3276:function(t,e,s){t.exports=s.p+"img/sam_goods_list_01.82c4aa91.jpg"},4113:function(t,e,s){t.exports=s.p+"img/sam_goods_list_02.baf759f0.jpg"},2421:function(t,e,s){t.exports=s.p+"img/sam_visual02.366d58a4.png"},9953:function(t,e,s){t.exports=s.p+"img/sam_visual03.b8f89a59.jpg"},1016:function(t,e,s){t.exports=s.p+"img/imgreview01.e16dfb1b.png"},2364:function(t,e,s){t.exports=s.p+"img/imgreview02.a876e68e.png"},4536:function(t,e,s){t.exports=s.p+"img/imgreview03.374d0587.png"},5432:function(t,e,s){t.exports=s.p+"img/imgreview04.8fb58813.png"},3574:function(t,e,s){t.exports=s.p+"img/imgreview05.3e17c3d6.png"},6753:function(t,e,s){t.exports=s.p+"img/imgreview06.9a483e6a.png"},4659:function(t,e,s){t.exports=s.p+"media/sam_video.728f7fa9.mp4"}}]);
//# sourceMappingURL=5981.9b5a4e42.js.map