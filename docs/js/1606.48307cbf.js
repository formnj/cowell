"use strict";(self["webpackChunkcowell"]=self["webpackChunkcowell"]||[]).push([[1606],{4316:function(t,i,e){e.d(i,{Z:function(){return p}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"review_item"},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:t.item.photo},on:{click:function(i){return i.preventDefault(),t.$openModalImage(i,"modalSkinImage")}}})])]),i("a",{staticClass:"cont",attrs:{href:"#none"}},[t.item.goods?i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:t.item.goods}})])]):t._e(),t.item.tit||t.item.price?i("div",[t.item.tit?i("p",{staticClass:"title"},[i("span",[t._v(t._s(t.item.tit))])]):t._e(),t.item.price?i("strong",{staticClass:"price"},[i("em",{staticClass:"discount"},[t._v(t._s(t.item.discount))]),t._v(" "+t._s(t.item.price)+" ")]):t._e()]):t._e(),i("ReviewScore",{attrs:{item:t.item.reivewScore}})],1)])},a=[],n=e(8306),o={components:{ReviewScore:n.Z},props:{item:"",isSwiper:!1},data(){return{}},methods:{},mounted(){}},r=o,l=e(1001),c=(0,l.Z)(r,s,a,!1,null,"894f1f22",null),p=c.exports},8306:function(t,i,e){e.d(i,{Z:function(){return c}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"review_score"},[i("p",t._l(Math.ceil(t.item),(function(e,s){return i("span",{key:s,class:{half:e>t.item}})})),0),i("span",[t._v("("+t._s(t.item)+")")])])},a=[],n={components:{},props:{item:""},mounted(){}},o=n,r=e(1001),l=(0,r.Z)(o,s,a,!1,null,"d06c9eac",null),c=l.exports},8497:function(t,i,e){e.d(i,{Z:function(){return m}});var s=function(){var t=this,i=t._self._c;return i("ul",{staticClass:"review_list"},t._l(t.item,(function(t,e){return i("li",{key:e,staticClass:"review_list_item"},[i("ReviewItem",{attrs:{item:t}})],1)})),0)},a=[],n=e(8306),o=e(4316),r={components:{ReviewScore:n.Z,ReviewItem:o.Z},props:{item:Array},data(){return{}},methods:{},mounted(){}},l=r,c=e(1001),p=(0,c.Z)(l,s,a,!1,null,"931ddbf4",null),m=p.exports},7866:function(t,i,e){e.r(i),e.d(i,{default:function(){return g}});var s=function(){var t=this,i=t._self._c;return i("div",[i("section",{staticClass:"card_type"},[i("h3",[t._v("card List")]),i("swiper",{staticClass:"type_over",attrs:{options:t.brandOptions}},[t._l(t.card_item,(function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/cowell/mo/DP_01_01_01"}},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:e.img}})])]),i("p",{staticClass:"cont"},[i("strong",[t._v(t._s(e.brand))])])])],1)])})),i("div",{staticClass:"swiper-button-next"}),i("div",{staticClass:"swiper-button-prev"})],2)],1),i("section",{staticClass:"card_type type_02"},[i("h3",[t._v("card List")]),t._l(t.card_item02,(function(e,s){return i("div",{key:s,staticClass:"item"},[i("router-link",{attrs:{to:"/cowell/mo/DP_01_01_01"}},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:e.img}})])]),i("p",{staticClass:"cont"},[i("strong",[t._v(t._s(e.brand))]),i("span",{domProps:{innerHTML:t._s(e.explain)}})])])],1)}))],2),i("section",{staticClass:"card_type type_03"},[i("h3",[t._v("card List")]),i("swiper",{staticClass:"type_over",attrs:{options:t.brandOptions02}},[t._l(t.card_item02,(function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/cowell/mo/DP_01_01_01"}},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:e.img}})])]),i("p",{staticClass:"cont"},[i("strong",[t._v(t._s(e.brand))]),i("span",{domProps:{innerHTML:t._s(e.explain)}})])])],1)])})),i("div",{staticClass:"swiper-button-next"}),i("div",{staticClass:"swiper-button-prev"})],2)],1),i("section",[i("h3",[t._v("default goods List")]),i("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tab_item_new,tabidx:t.tabidx}}),i("swiper",{staticClass:"type_over",attrs:{options:t.defaultOptions}},[t._l(t.goods_item_MD[0].item,(function(t,e){return i("swiper-slide",{key:e},[i("GoodsItem",{attrs:{item:t}})],1)})),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),i("section",[i("h3",[t._v("default goods List - 2Row")]),i("Tabs",{attrs:{tabClass:"tab_type_default",tabType:"slide",tab_item:t.tab_item_best,tabidx:t.tabidx}}),i("swiper",{attrs:{options:t.bestOptions}},t._l(t.goods_item_best[0].item,(function(e,s){return i("swiper-slide",{key:s},[i("GoodsList",{attrs:{item:t.goods_item_best[0].item}})],1)})),1),i("div",{staticClass:"btnSection mt20"},[i("router-link",{staticClass:"btn_mid btn_gray02",attrs:{to:""}},[i("em",[t._v("바로가기")])])],1)],1),i("section",{staticClass:"big_goods"},[i("h3",[t._v("Big goods List")]),i("swiper",{staticClass:"type_over",attrs:{options:t.specialOptions}},[t._l(t.goods_item_special[0].item,(function(t,e){return i("swiper-slide",{key:e},[i("GoodsItem",{attrs:{item:t}})],1)})),i("div",{staticClass:"swiper-button-next"}),i("div",{staticClass:"swiper-button-prev"})],2)],1),i("section",{staticClass:"big_goods type_02"},[i("h3",[t._v("Big goods List type02")]),i("swiper",{staticClass:"type_over",attrs:{options:t.specialOptions}},[t._l(t.goods_item_special02[0].item,(function(t,e){return i("swiper-slide",{key:e},[i("GoodsItem",{attrs:{item:t}})],1)})),i("div",{staticClass:"swiper-button-next"}),i("div",{staticClass:"swiper-button-prev"})],2)],1),i("section",{staticClass:"big_goods type_02"},[i("h3",[t._v("Big goods List type02")]),t._l(t.goods_item_special02[0].item,(function(t,e){return i("div",{key:e,staticClass:"mb30"},[i("GoodsItem",{attrs:{item:t}})],1)}))],2),t._m(0),i("section",{staticClass:"bigThumb_combi"},[t._m(1),i("div",{staticClass:"inner_item"},[i("div",{staticClass:"main"},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:t.goods_item_HOTItem[0].img,alt:""}})])])]),i("div",{staticClass:"goods_wrap"},[i("GoodsList",{attrs:{item:t.goods_item_HOTItem[0].sub_item_02}})],1)])]),i("section",{staticClass:"bigThumb_combi type_02"},[t._m(2),i("swiper",{staticClass:"type_over",attrs:{options:t.hotitemOptions}},t._l(t.goods_item_HOTItem,(function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"inner_item"},[i("div",{staticClass:"main"},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:t.goods_item_HOTItem[0].img,alt:""}})])])]),i("div",{staticClass:"goods_wrap"},[i("p",[i("strong",[t._v(t._s(e.brand))]),i("span",[t._v(t._s(e.txt))])]),i("GoodsList",{attrs:{item:t.goods_item_HOTItem[0].sub_item}})],1)]),i("div",{staticClass:"goods_wrap"},[i("p",[i("strong",[t._v(t._s(e.brand))]),i("span",[t._v(t._s(e.txt))])]),i("GoodsList",{attrs:{item:t.goods_item_HOTItem[0].sub_item}})],1)])})),1)],1),i("section",{staticClass:"bigThumb_combi type_03"},[t._m(3),i("div",{staticClass:"inner_item"},[i("div",{staticClass:"main"},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:t.goods_item_HOTItem[0].img,alt:""}})])])]),i("div",{staticClass:"goods_wrap"},[i("GoodsList",{attrs:{item:t.goods_item_HOTItem[0].sub_item_02}})],1)])]),i("section",{staticClass:"hot"},[i("h3",[t._v("지금 핫한 이 상품 어떠세요? ")]),i("masonry",{staticClass:"goods_list sticky",attrs:{cols:2,gutter:{default:"5px"}}},t._l(t.goods_item_HOT,(function(t,e){return i("div",{key:e},[i("GoodsItem",{attrs:{item:t}})],1)})),0)],1),i("section",{staticClass:"influencer"},[i("h3",[t._v("Fashion People Choice")]),i("swiper",{staticClass:"type_card type_over",attrs:{options:t.influencerOptions}},t._l(t.influencer_item,(function(e,s){return i("swiper-slide",{key:s},[i("a",{staticClass:"item",attrs:{href:"#none"}},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:e.img,alt:""}})])]),i("div",{staticClass:"cont"},[i("p",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:e.user[0].profile,alt:""}})]),i("strong",[t._v(t._s(e.user[0].name))])]),i("p",{staticClass:"txt_wrap"},[i("span",[t._v(t._s(e.txt))]),i("em",[t._v(t._s(e.url))])])])])])})),1)],1),i("section",{staticClass:"review"},[t._m(4),i("swiper",{attrs:{options:t.reviewOptions}},t._l(t.review,(function(e,s){return i("swiper-slide",{key:s},[i("Reviews",{attrs:{item:t.review}})],1)})),1)],1),i("section",{staticClass:"insta"},[i("h3",[t._v("Instagram")]),i("ul",t._l(t.insta,(function(t,e){return i("li",{key:e},[i("span",{staticClass:"thumb"},[i("em",[i("img",{attrs:{src:t.img,alt:""}})])])])})),0)])])},a=[function(){var t=this,i=t._self._c;return i("section",{staticClass:"banner"},[i("ul",[i("li",[i("a",{attrs:{href:"/cowell/mo/PM_06_01_01"}},[i("div",{staticClass:"event_banner type_02"},[i("div",[i("strong",[t._v("코웰 패션 리뉴얼 오픈 이벤트")]),i("p",[t._v("FIFA OLP,BBC Earth와 함께 구매 인증 시 사은품 증정!!"),i("br"),t._v(" 댓글 축하 남기고 스벅 쿠폰 증정")])])])])]),i("li",[i("a",{attrs:{href:"#none"}},[i("div",{staticClass:"event_banner"},[i("div",[i("strong",[t._v("Renewal Open Event")]),i("p",[t._v("FIFA 1904,BBC Earth와 구매 후"),i("br"),t._v(" 댓글 축하 남기고 할인 쿠폰 증정")])]),i("img",{attrs:{src:e(9894),alt:""}})])])])])])},function(){var t=this,i=t._self._c;return i("h3",[t._v("bigThumb_combi "),i("p",{staticClass:"sub_tit"},[t._v("머리 끝부터 발끝까지, 패피의 완성은 포인트")])])},function(){var t=this,i=t._self._c;return i("h3",[t._v("bigThumb_combi type_02 "),i("p",{staticClass:"sub_tit"},[t._v("연인에게 선물로, 따듯하고 사랑스러운 아이템")])])},function(){var t=this,i=t._self._c;return i("h3",[t._v("bigThumb_combi type_03 "),i("p",{staticClass:"sub_tit"},[t._v("두꺼운 패딩의 계절에도 멋내기 좋은 맨투맨 시리즈")])])},function(){var t=this,i=t._self._c;return i("h3",[t._v("REVIEW "),i("p",{staticClass:"sub_tit"},[t._v("코웰패션 이용 고객들의 생생 리뷰")])])}],n=e(8025),o=e(70),r=e(1136),l=e(8497),c=e(551),p=e(7434),m={name:"App",components:{GoodsList:n.Z,GoodsItem:o.Z,Tabs:r.Z,Reviews:l.Z,Swiper:c.Swiper,SwiperSlide:c.SwiperSlide,VueMasonry:p.Z},data(){return{Main_slide_item:[{img:e(4659),type:"video",brand:"pc-Ourplace",tit:"Best Sweatshirt",txt:"남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!"},{img:e(2421),type:"img",brand:"Canada Goose",tit:"Keep Me Warm",txt:"칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템"},{img:e(9953),type:"img",brand:"Kappa",tit:"Best Sweatshirt",txt:"남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!"}],card_item:[{img:e(3276),brand:"FIFA OLP"},{img:e(4113),brand:"ADIDAS"},{img:e(3276),brand:"NIKE"},{img:e(4113),brand:"ADIDAS"}],card_item02:[{img:e(3276),brand:"OUTER BEST UP TO 50% OFF",explain:"겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"},{img:e(4113),brand:"PRE-SPRING, NEW ITEMS!",explain:"겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"},{img:e(3276),brand:"ADIDAS KIDS 포토리뷰 이벤트",explain:"겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"},{img:e(4113),brand:"OUTER BEST UP TO 50% OFF",explain:"겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"}],tabidx:0,goods_item_special:[{item:[{img:e(5339),brand:"Nike",tit:"꿈꾸던 스피드의 시작",explain:"꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!!"},{img:e(3630),brand:"LACOSTE",tit:"컬러별로 갖고 싶은 후드",explain:"컬러마다 느낌이 다른 스타일로 코디해보세요."},{img:e(5962),brand:"FIFA OLP",tit:"단독 할인 30%",explain:"한겨울 필수 아이템 시즌오프 지금 득템!!"},{img:e(2400),brand:"Reebok",tit:"컬러별로 갖고 싶은 후드",explain:"한겨울 필수 아이템 시즌오프 단독 할인~30%"}]}],goods_item_special02:[{item:[{img:e(5339),brand:"Nike",tit:"두꺼운 패딩의 계절에도 멋내기 좋은 시리즈 멋내기 좋은 맨투맨 시리즈",explain:"꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!!",price:"250,000",discount:"45%"},{img:e(3630),brand:"LACOSTE",tit:"어그 여성 클래식 미니 짚 로고어그 여성 클래식 미니",explain:"컬러마다 느낌이 다른 스타일로 코디해보세요.",price:"250,000",discount:"45%"},{img:e(5962),brand:"FIFA OLP",tit:"어그 여성 클래식 미니 짚 로고어그 여성 클래식 미니",explain:"한겨울 필수 아이템 시즌오프 지금 득템!!",price:"250,000",discount:"45%"},{img:e(2400),brand:"Reebok",tit:"컬러별로 갖고 싶은 후드",explain:"한겨울 필수 아이템 시즌오프 단독 할인~30%",price:"250,000",discount:"45%"}]}],tab_item_best:[{item:"언더웨어"},{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"},{item:"언더웨어"},{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"}],tab_item_new:[{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"},{item:"아울렛"},{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"},{item:"아울렛"}],goods_item_best:[{item:[{img:e(4113),brand:"Nike",tit:"나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]},{img:e(3276),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}]},{img:e(3276),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:e(3276),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],banner:[{img:e(5974),tit:"Renewal Event",txt:"코웰패션닷컴 리뉴얼 기념 이벤트"},{img:e(7732),tit:"Happy Holiday",txt:"연말 그리고 새해"}],goods_item_MD:[{item:[{img:e(4113),brand:"Nike",tit:"나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어",price:"250,000",discount:"45%",input:[{type:"checkbox"}],badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}],option_icon:"사은품"},{img:e(3276),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"}],option_icon:"2줄의 경우"},{img:e(3276),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"SOLD OUT",class:"soldout"}]},{img:e(3276),brand:"Nike",tit:"나이키 에어",price:"250,000",discount:"45%",badge:[{txt:"쿠폰",class:"coupon"},{txt:"NEW",class:"new"},{txt:"BEST",class:"best"},{txt:"단독",class:"only"},{txt:"SOLD OUT",class:"soldout"}]}]}],goods_item_HOT:[{img:e(8245),brand:"UGG",tit:"22FW 어그 여성 클래식 슬리퍼",logo:e(4405)},{img:e(7656),brand:"NAUTICA",tit:"헤비듀티 다운자켓 라이트그레이",logo:e(3076)},{img:e(3584),brand:"Calvinklein",tit:"여성 슬림핏 웨이스트 인타르시아 로고 스웨터",logo:e(4649)},{img:e(1849),brand:"Fifa Official",tit:"스위퍼 바라클라바 헤비 다운 블루",logo:e(574)},{img:e(8093),brand:"Ourplace",tit:"어스 에코백 브라운",logo:e(7793)},{img:e(5149),brand:"UGG",tit:"22FW 어그 여성 플러프 예슬라이드_카키",logo:e(4405)}],goods_item_HOTItem:[{img:e(1209),brand:"UGG",txt:"집밖은 위험해, 따듯한 홈웨어 시리즈",sub_item:[{img:e(5726),tit:"어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛",price:"269,000",discount:"4%"},{img:e(1356),tit:"22FW 어그 여성 플러프 예슬라이드 카키",price:"159,000",discount:"11%"}],sub_item_02:[{img:e(5726),tit:"어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛",price:"269,000",discount:"4%"},{img:e(1356),tit:"22FW 어그 여성 플러프 예슬라이드 카키",price:"159,000",discount:"11%"},{img:e(5726),tit:"어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛",price:"269,000",discount:"4%"}]},{img:e(3054),brand:"Ourplace",txt:"어스 에코백 시리즈어스 에코백 시리즈어스 에코백 시리즈어스 에코백 시리즈",sub_item:[{img:e(5726),txt:"Ourplace 체스트넛",price:"269,000",discount:"4%"},{img:e(5726),txt:"Ourplace 예슬라이드 카키",price:"159,000",discount:"11%"}]}],influencer_item:[{user:[{profile:e(3574),name:"cowella_mas"}],img:e(3574),txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:e(6753),name:"cowella_mas"}],img:e(6753),txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:e(6753),name:"cowella_mas"}],img:e(6753),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:e(1016),name:"cowella_mas"}],img:e(1016),txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:e(5432),name:"cowella_mas"}],img:e(5432),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:e(4536),name:"cowella_mas"}],img:e(4536),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:e(2364),name:"cowella_mas"}],img:e(2364),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"},{user:[{profile:e(4536),name:"cowella_mas"}],img:e(4536),txt:"Ourplace 예슬라이드 카키",url:"ttps://www.instagram.compokemon_korea/"}],review:[{photo:e(1016),reivewScore:5},{photo:e(2364),reivewScore:4},{photo:e(4536),reivewScore:3.5},{photo:e(5432),reivewScore:2}],insta:[{img:e(5726)},{img:e(3276)},{img:e(5726)},{img:e(1356)},{img:e(5726)},{img:e(3276)},{img:e(5726)},{img:e(1356)}],defaultOptions:{loop:!1,slidesPerView:2,spaceBetween:5,maxBackfaceHiddenSlides:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},brandOptions:{loop:!1,slidesPerView:2,spaceBetween:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},brandOptions02:{loop:!1,slidesPerView:1,spaceBetween:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},specialOptions:{loop:!1,slidesPerView:1.3,spaceBetween:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},bestOptions:{loop:!1,slidesPerView:1,spaceBetween:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},hotitemOptions:{loop:!0,slidesPerView:1,spaceBetween:10,maxBackfaceHiddenSlides:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},bannerOptions:{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"}},influencerOptions:{loop:!0,slidesPerView:1.2,spaceBetween:10,centeredSlides:!0},reviewOptions:{loop:!0,slidesPerView:1,spaceBetween:5},pathClass:""}},watch:{$route(){this.pathFinder(this.$route.path)}},created(){this.pathFinder(this.$route.path),window.addEventListener("scroll",this.onScroll)},mounted(){window.addEventListener("scroll",this.onScroll),window.addEventListener("load",this.visualInit)},methods:{pathFinder(t){"/cowell/mo/"===t?(this.pathClass="main",this.onScroll(),this.visualInit()):"/cowell/mo/DP_01_01_01"===t&&(this.pathClass="brand",this.onScroll(),this.visualInit())}}},d=m,_=e(1001),u=(0,_.Z)(d,s,a,!1,null,"3168aed8",null),g=u.exports},1016:function(t,i,e){t.exports=e.p+"img/imgreview01.e16dfb1b.png"},2364:function(t,i,e){t.exports=e.p+"img/imgreview02.a876e68e.png"},4536:function(t,i,e){t.exports=e.p+"img/imgreview03.374d0587.png"},5432:function(t,i,e){t.exports=e.p+"img/imgreview04.8fb58813.png"},3574:function(t,i,e){t.exports=e.p+"img/imgreview05.3e17c3d6.png"},6753:function(t,i,e){t.exports=e.p+"img/imgreview06.9a483e6a.png"}}]);
//# sourceMappingURL=1606.48307cbf.js.map