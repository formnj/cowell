<template>
    <div>

        <!-- module : card List -->
        <section class="card_type">
            <h3>card List</h3>
            <swiper :options="brandOptions" class="type_over"><!-- swiper 화면 걸침 : class="type_over" 추가 -->
                <swiper-slide v-for="(item, index) in card_item" :key="index">
                    <div class="item">
                        <router-link to="/cowell/mo/DP_01_01_01">
                            <span class="thumb">
                                <em><img v-bind:src="item.img" /></em>
                            </span>
                            <p class="cont">
                                <strong>{{ item.brand }}</strong>
                            </p>
                        </router-link>
                    </div>
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </section>
        <!-- //module : card List -->

        <!-- module : card List type_02 -->
        <section class="card_type type_02">
            <h3>card List</h3>
            <div class="item" v-for="(item, index) in card_item02" :key="index">
                <router-link to="/cowell/mo/DP_01_01_01">
                    <span class="thumb">
                        <em><img v-bind:src="item.img" /></em>
                    </span>
                    <p class="cont">
                        <strong>{{ item.brand }}</strong>
                        <span v-html="item.explain"></span>
                    </p>
                </router-link>
            </div>
        </section>
        <!-- //module : card List -->

        <!-- module : card List type_02 -->
        <section class="card_type type_03">
            <h3>card List</h3>
            <swiper :options="brandOptions02" class="type_over">
                <swiper-slide v-for="(item, index) in card_item02" :key="index">
                    <div class="item">
                        <router-link to="/cowell/mo/DP_01_01_01">
                            <span class="thumb">
                                <em><img v-bind:src="item.img" /></em>
                            </span>
                            <p class="cont">
                                <strong>{{ item.brand }}</strong>
                                <span v-html="item.explain"></span>
                            </p>
                        </router-link>
                    </div>
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>      
        </section>
        <!-- //module : card List -->

        <!-- //module : default goods List -->
        <section>
            <h3>default goods List</h3>
            <Tabs tabClass="tab_type_default" tabType="slide" v-bind:tab_item="tab_item_new" :tabidx="tabidx" />

            <swiper :options="defaultOptions" class="type_over">
                <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //module : default goods List -->

        <!-- //module : default goods List -->
        <section>
            <h3>default goods List - 2Row</h3>
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_best" :tabidx="tabidx" />

            <swiper :options="bestOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" :key="index">
                    <GoodsList :item="goods_item_best[0].item" />
                </swiper-slide>
            </swiper>
                
            <div class="btnSection mt20">
                <router-link to="" class="btn_mid btn_gray02"><em>바로가기</em></router-link>
            </div>
        </section>
        <!-- //module : default goods List -->

        <!-- //module : big goods List -->
        <section class="big_goods">
            <h3>Big goods List</h3>

            <swiper :options="specialOptions" class="type_over">
                <swiper-slide v-for="(item, index) in goods_item_special[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </section>
        <!-- //module : big goods List -->

        <!-- //module : big goods List type_02 -->
        <section class="big_goods type_02">
            <h3>Big goods List type02</h3>

            <swiper :options="specialOptions" class="type_over">
                <swiper-slide v-for="(item, index) in goods_item_special02[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </section>
        <!-- //module : big goods List type_02 -->

        <section class="big_goods type_02">
            <h3>Big goods List type02</h3>
            <div class="mb30" v-for="(item, index) in goods_item_special02[0].item" :key="index">
                <GoodsItem :item="item" />
            </div>
        </section>

        <!-- banner -->
        <section class="banner">
            <ul>
                <li>
                    <a href="/cowell/mo/PM_06_01_01">
                        <div class="event_banner type_02">
                            <div>
                                <strong>코웰 패션 리뉴얼 오픈 이벤트</strong>
                                <p>FIFA OLP,BBC Earth와 함께 구매 인증 시 사은품 증정!!<br/> 댓글 축하 남기고 스벅 쿠폰 증정</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#none">
                        <div class="event_banner">
                            <div>
                                <strong>Renewal Open Event</strong>
                                <p>FIFA 1904,BBC Earth와 구매 후<br/> 댓글 축하 남기고 할인 쿠폰 증정</p>
                            </div>
                            <img src="@/assets/images/mo/sub/img_event_banner.png" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <!-- //banner -->

        <!-- module : bigThumb + goodsList [class = bigThumb_combi] -->
        <section class="bigThumb_combi">
            <h3>bigThumb_combi
                <p class="sub_tit">머리 끝부터 발끝까지, 패피의 완성은 포인트</p>
            </h3>

            <div class="inner_item">
                <div class="main">
                    <span class="thumb">
                        <em><img :src="goods_item_HOTItem[0].img" alt="" /></em>
                    </span>
                </div>
                <div class="goods_wrap">
                    <GoodsList :item="goods_item_HOTItem[0].sub_item_02" />
                </div>
            </div>
        </section>
        <!-- //module : bigThumb + goodsList -->

        <!-- module : bigThumb + goodsList [class = bigThumb_combi type_02] (차이점 : 상품노출 방향) -->
        <section class="bigThumb_combi type_02">
            <h3>bigThumb_combi type_02
                <p class="sub_tit">연인에게 선물로, 따듯하고 사랑스러운 아이템</p>
            </h3>

            <swiper :options="hotitemOptions" class="type_over">
                <swiper-slide v-for="(item, index) in goods_item_HOTItem" :key="index">
                    <div class="inner_item">
                        <div class="main">
                            <span class="thumb">
                                <em><img :src="goods_item_HOTItem[0].img" alt="" /></em>
                            </span>
                        </div>
                        <div class="goods_wrap">
                            <p>
                                <strong>{{ item.brand }}</strong>
                                <span>{{ item.txt }}</span>
                            </p>
                            <GoodsList v-bind:item="goods_item_HOTItem[0].sub_item" />
                        </div>
                    </div>
                    <!-- <a href="#none" class="bg_img thumb">
                        <em><img :src="item.img" alt="" /></em>
                    </a> -->
                    <div class="goods_wrap">
                        <p>
                            <strong>{{ item.brand }}</strong>
                            <span>{{ item.txt }}</span>
                        </p>
                        <GoodsList v-bind:item="goods_item_HOTItem[0].sub_item" />
                    </div>
                </swiper-slide>
            </swiper>
        </section>
        <!-- module : bigThumb + goodsList [class = bigThumb_combi] -->

        <!-- module : bigThumb + goodsList [class = bigThumb_combi] -->
        <section class="bigThumb_combi type_03">
            <h3>bigThumb_combi type_03
                <p class="sub_tit">두꺼운 패딩의 계절에도 멋내기 좋은 맨투맨 시리즈</p>
            </h3>

            <div class="inner_item">
                <div class="main">
                    <span class="thumb">
                        <em><img :src="goods_item_HOTItem[0].img" alt="" /></em>
                    </span>
                </div>
                <div class="goods_wrap">
                    <GoodsList :item="goods_item_HOTItem[0].sub_item_02" />
                </div>
            </div>
        </section>
        <!-- //module : bigThumb + goodsList -->

        <!-- hot -->
        <section class="hot">
            <h3>지금 핫한 이 상품 어떠세요? </h3>

            <masonry :cols="2" :gutter="{default: '5px'}" class="goods_list sticky">
                <div v-for="(item, index) in goods_item_HOT" :key="index">
                    <GoodsItem :item="item" />
                </div>
            </masonry>
        </section>
        <!-- //hot -->

        <!-- MD -->
        <section class="influencer">
            <h3>Fashion People Choice</h3>

            <!-- 스와이프 적용 []:isSwiper="true"] 추가 필요 -->
            <swiper class="type_card type_over" :options="influencerOptions">
                <swiper-slide v-for="(item, index) in influencer_item" :key="index">
                    <a href="#none" class="item"><!-- 23.05.08 a 테그로 수정 -->
                        <span class="thumb">
                            <em><img :src="item.img" alt="" /></em>
                        </span>
                        <div class="cont">
                            <!-- <p class="thumb" v-for="(item, index) in influencer_item[0].user" :key="index"> -->
                            <p class="thumb">
                                <em><img :src="item.user[0].profile" alt="" /></em>
                                <strong>{{ item.user[0].name }}</strong>
                            </p>
                            <p class="txt_wrap">                            
                                <span>{{ item.txt }}</span>
                                <em>{{ item.url }}</em>
                            </p>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
            <!-- //스와이프 적용 -->
        </section>
        <!-- //MD -->

        <!-- review -->
        <section class="review">
            <h3>REVIEW
                <p class="sub_tit">코웰패션 이용 고객들의 생생 리뷰</p>
            </h3>
            
            <swiper :options="reviewOptions">
                <swiper-slide v-for="(item, index) in review" :key="index">
                    <Reviews :item="review" />
                </swiper-slide>
            </swiper>
        </section>
        <!-- //review -->

        <!-- instagram -->
        <section class="insta">
            <h3>Instagram</h3>
            <ul>
                <li v-for="(item, index) in insta" :key="index">
                    <span class="thumb">
                        <em><img :src="item.img" alt="" /></em>
                    </span>
                </li>
            </ul>
        </section>
        <!-- //instagram -->
    </div>
</template>

<script>
    import GoodsList from "@/components/GoodsList.vue";
    import GoodsItem from "@/components/GoodsItem.vue";
    import Tabs from "@/components/Tabs.vue";
    import Reviews from "@/components/Reviews.vue";

    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";
    import VueMasonry from 'vue-masonry-css'

    export default {
        name: 'App',
        components: {
            GoodsList,
            GoodsItem,
            Tabs,
            Reviews,

            Swiper,
            SwiperSlide,
            VueMasonry,
        },
        data() {
            return {
                /* sample data */
                Main_slide_item: [
                    {img: require("@/assets/images/pc/sample/sam_video.mp4"), type:'video', brand: "pc-Ourplace", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                    {img: require("@/assets/images/mo/sample/sam_visual02.png"), type:'img', brand: "Canada Goose", tit: "Keep Me Warm", txt: "칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템" },
                    {img: require("@/assets/images/mo/sample/sam_visual03.jpg"), type:'img', brand: "Kappa", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                ],
                card_item: [
                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), brand: "FIFA OLP"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), brand: "ADIDAS"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), brand: "NIKE"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), brand: "ADIDAS"},
                ],
                card_item02: [
                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), brand: "OUTER BEST UP TO 50% OFF", explain: "겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), brand: "PRE-SPRING, NEW ITEMS!", explain: "겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), brand: "ADIDAS KIDS 포토리뷰 이벤트", explain: "겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), brand: "OUTER BEST UP TO 50% OFF", explain: "겨울상품 아우터에서 경량패딩까지 특가 판매<br/> 상품을 득템할 수 있는 날은 단 하루!"},
                ],
                tabidx: 0,

                // 기획전
                goods_item_special: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/pc/sample/sam_special01.png"),
                                brand: "Nike", tit:"꿈꾸던 스피드의 시작", explain:"꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!!",
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_special02.png"),
                                brand: "LACOSTE", tit:"컬러별로 갖고 싶은 후드", explain:"컬러마다 느낌이 다른 스타일로 코디해보세요.",
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_special03.png"),
                                brand: "FIFA OLP", tit:"단독 할인 30%", explain:"한겨울 필수 아이템 시즌오프 지금 득템!!",
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_special04.png"),
                                brand: "Reebok", tit:"컬러별로 갖고 싶은 후드", explain:"한겨울 필수 아이템 시즌오프 단독 할인~30%",
                            },
                        ]
                    }
                ],

                goods_item_special02: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/pc/sample/sam_special01.png"),
                                brand: "Nike", tit:"두꺼운 패딩의 계절에도 멋내기 좋은 시리즈 멋내기 좋은 맨투맨 시리즈", explain:"꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!! 꿈꾸던 스피드의 시작 구매 고객 금액권 증정!!", price:"250,000",
                                discount:"45%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_special02.png"),
                                brand: "LACOSTE", tit:"어그 여성 클래식 미니 짚 로고어그 여성 클래식 미니", explain:"컬러마다 느낌이 다른 스타일로 코디해보세요.", price:"250,000",
                                discount:"45%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_special03.png"),
                                brand: "FIFA OLP", tit:"어그 여성 클래식 미니 짚 로고어그 여성 클래식 미니", explain:"한겨울 필수 아이템 시즌오프 지금 득템!!", price:"250,000",
                                discount:"45%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_special04.png"),
                                brand: "Reebok", tit:"컬러별로 갖고 싶은 후드", explain:"한겨울 필수 아이템 시즌오프 단독 할인~30%", price:"250,000",
                                discount:"45%",
                            },
                        ]
                    }
                ],

                /* best 텝 */
                tab_item_best: [
                    { item: "언더웨어" }, { item: "남성" }, { item: "여성" }, { item: "키즈" }, { item: "아울렛" },
                    { item: "언더웨어" }, { item: "남성" }, { item: "여성" }, { item: "키즈" }, { item: "아울렛" },
                ],
                tab_item_new: [
                    { item: "남성" }, { item: "여성" }, { item: "키즈" }, { item: "아울렛" }, { item: "아울렛" },{ item: "남성" }, { item: "여성" }, { item: "키즈" }, { item: "아울렛" }, { item: "아울렛" },
                ],
                /* best goods */
                goods_item_best: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"),
                                brand: "Nike", tit:"나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                input:[{
                                    type:"checkbox"
                                }],
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                    {txt:"BEST", class:"best"},
                                    {txt:"단독", class:'only'},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                ],
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                    {txt:"BEST", class:"best"},
                                    {txt:"단독", class:'only'},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                        ]
                    }
                ],
                /* //best goods */

                /* banner */
                banner: [
                    {
                        img:require("@/assets/images/mo/sample/sam_banner01.png"),
                        tit: "Renewal Event",
                        txt: "코웰패션닷컴 리뉴얼 기념 이벤트"
                    },
                    {
                        img:require("@/assets/images/mo/sample/sam_banner02.png"),
                        tit: "Happy Holiday",
                        txt: "연말 그리고 새해"
                    },
                ],                
                /* //banner */

                /* md goods */
                goods_item_MD: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"),
                                brand: "Nike", tit:"나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                input:[{
                                    type:"checkbox"
                                }],
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                    {txt:"BEST", class:"best"},
                                    {txt:"단독", class:'only'},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                                option_icon:"사은품"
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                ],
                                option_icon:"2줄의 경우"
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                    {txt:"BEST", class:"best"},
                                    {txt:"단독", class:'only'},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                        ]
                    }
                ],
                /* //md goods */

                /* HOT goods */
                goods_item_HOT: [
                    {
                        img:require("@/assets/images/mo/sample/sam_hot_01.png"),
                        brand: "UGG", tit:"22FW 어그 여성 클래식 슬리퍼",
                        logo:require("@/assets/images/mo/sample/logo_ugg.png"),
                    },
                    {
                        img:require("@/assets/images/mo/sample/sam_hot_02.png"),
                        brand: "NAUTICA", tit:"헤비듀티 다운자켓 라이트그레이",
                        logo:require("@/assets/images/mo/sample/logo_nautica.png"),
                    },
                    {
                        img:require("@/assets/images/mo/sample/sam_hot_04.png"),
                        brand: "Calvinklein", tit:"여성 슬림핏 웨이스트 인타르시아 로고 스웨터",
                        logo:require("@/assets/images/mo/sample/logo_fifa.png"),
                    },
                    {
                        img:require("@/assets/images/mo/sample/sam_hot_03.png"),
                        brand: "Fifa Official", tit:"스위퍼 바라클라바 헤비 다운 블루",
                        logo:require("@/assets/images/mo/sample/logo_calvinclein.png"),
                    },
                    {
                        img:require("@/assets/images/mo/sample/sam_hot_05.png"),
                        brand: "Ourplace", tit:"어스 에코백 브라운",
                        logo:require("@/assets/images/mo/sample/logo_ourplace.png"),
                    },
                    {
                        img:require("@/assets/images/mo/sample/sam_hot_06.png"),
                        brand: "UGG", tit:"22FW 어그 여성 플러프 예슬라이드_카키",
                        logo:require("@/assets/images/mo/sample/logo_ugg.png"),
                    },
                ],
                /* //HOT goods */

                /* hot item */
                goods_item_HOTItem: [
                    {
                        img:require("@/assets/images/mo/sample/hot_thumb01.png"),
                        brand: "UGG", txt:"집밖은 위험해, 따듯한 홈웨어 시리즈",
                        sub_item: [
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                                tit:"어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-2.png"),
                                tit:"22FW 어그 여성 플러프 예슬라이드 카키",
                                price: "159,000",
                                discount:"11%"
                            },
                        ],
                        sub_item_02: [
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                                tit:"어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-2.png"),
                                tit:"22FW 어그 여성 플러프 예슬라이드 카키",
                                price: "159,000",
                                discount:"11%"
                            },
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                                tit:"어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛어그 미니 베일리보우 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                        ],                        
                    },
                    {
                        img:require("@/assets/images/mo/sample/hot_thumb02.png"),
                        brand: "Ourplace", txt:"어스 에코백 시리즈어스 에코백 시리즈어스 에코백 시리즈어스 에코백 시리즈",
                        sub_item: [
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                                txt:"Ourplace 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                                txt:"Ourplace 예슬라이드 카키",
                                price: "159,000",
                                discount:"11%"
                            }
                        ],
                    },
                ],
                /* //hot item */
                /* 패피초이스 */
                influencer_item: [
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview05.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview05.png"),
                        txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    },
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview06.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview06.png"),
                        txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    },
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview06.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview06.png"),
                        txt:"Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    },
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview01.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview01.png"),
                        txt:"Ourplace 예슬라이드 카키Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    },
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview04.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview04.png"),
                        txt:"Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    },
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview03.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview03.png"),
                        txt:"Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    },
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview02.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview02.png"),
                        txt:"Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    },
                    {
                        user:[{
                            profile:require("@/assets/images/pc/sample/imgreview03.png"),
                            name:"cowella_mas"
                        }],
                        img:require("@/assets/images/pc/sample/imgreview03.png"),
                        txt:"Ourplace 예슬라이드 카키",
                        url:"ttps://www.instagram.compokemon_korea/"
                    }
                ],
                /* //패피초이스 */

                /* review */
                review: [
                        { photo: require("@/assets/images/pc/sample/imgreview01.png"), reivewScore:5},
                        { photo: require("@/assets/images/pc/sample/imgreview02.png"), reivewScore:4},
                        { photo: require("@/assets/images/pc/sample/imgreview03.png"), reivewScore:3.5},
                        { photo: require("@/assets/images/pc/sample/imgreview04.png"), reivewScore:2},
                ],
                /* //review */

                insta: [
                    {
                       img: require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                    },
                    {
                       img: require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                    },
                    {
                       img: require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                    },
                    {
                       img: require("@/assets/images/mo/sample/hot_thumb01-2.png"),
                    },
                    {
                       img: require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                    },
                    {
                       img: require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                    },
                    {
                       img: require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                    },
                    {
                       img: require("@/assets/images/mo/sample/hot_thumb01-2.png"),
                    }
                ],

                /* //sample data */

                defaultOptions:{
                    loop:false,
                    slidesPerView: 2,
                    spaceBetween: 5,
                    maxBackfaceHiddenSlides:6,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                brandOptions:{
                    loop:false,
                    slidesPerView: 2,
                    spaceBetween: 5,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                brandOptions02:{
                    loop:false,
                    slidesPerView: 1,
                    spaceBetween: 5,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                specialOptions:{
                    loop:false,
                    slidesPerView: 1.3,
                    spaceBetween: 5,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                bestOptions:{
                    loop:false,
                    slidesPerView: 1,
                    spaceBetween: 5,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                hotitemOptions:{
                    loop:true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    maxBackfaceHiddenSlides:6,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                bannerOptions:{
                    loop:true,
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
                },
                influencerOptions:{
                    loop:true,
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    centeredSlides: true,
                },
                reviewOptions:{
                    loop:true,
                    slidesPerView: 1,
                    spaceBetween: 5,
                },

                pathClass: '',
            };
        },
        /* 23.04.11 메인비주얼 콘텐츠 위치 조정 */
        watch: {
            $route() {
                this.pathFinder(this.$route.path);
            }
        },
        created() {
            this.pathFinder(this.$route.path)
            window.addEventListener('scroll', this.onScroll)
        },
        mounted(){
            window.addEventListener('scroll', this.onScroll)
            window.addEventListener('load', this.visualInit)
        },
        methods:{
            pathFinder(pathName) {
                if (pathName === '/mo/') {
                    this.pathClass = 'main'
                    this.onScroll();
                    this.visualInit();
                } else if (pathName === '/mo/DP_01_01_01') {
                    this.pathClass = 'brand'
                    this.onScroll();
                    this.visualInit();
                }
            },
            visualInit(){
                const winH = window.innerHeight,
                    headerH = document.getElementsByTagName('header')[0].offsetHeight,
                    visualH = document.getElementsByClassName('main_visual')[0].offsetHeight,
                    visual_cont = document.querySelectorAll('.main_visual .cont'),
                    actionBar = document.getElementById('action_bar'),
                    pagination = document.getElementsByClassName('swiper-pagination')[0];

                if(winH < (headerH + visualH)){
                    visual_cont.forEach((t) => {
                        t.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) - 10)+'px';
                        pagination.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) + 20)+'px';
                    });
                } else if(actionBar.offsetTop < (headerH + visualH)) {
                    visual_cont.forEach((t) => {
                        t.style.bottom = ((headerH + visualH)-actionBar.offsetTop - 10)+'px';
                        pagination.style.bottom = ((headerH + visualH)-actionBar.offsetTop + 14)+'px';
                    });
                }
            },
            onScroll () {
                const winH = window.innerHeight,
                    headerH = document.getElementsByTagName('header')[0].offsetHeight,
                    visualH = document.getElementsByClassName('main_visual')[0].offsetHeight,
                    visual_cont = document.querySelectorAll('.main_visual .cont'),
                    actionBar = document.getElementById('action_bar'),
                    pagination = document.getElementsByClassName('swiper-pagination')[0];

                if (window.scrollY < this.lastScrollY && window.scrollY < (actionBar.offsetHeight)) {
                    if(winH < (headerH + visualH)){
                        visual_cont.forEach((t) => {
                            t.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) - 10)+'px';
                            pagination.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) + 20)+'px';
                        });
                    } else if(actionBar.offsetTop < (headerH + visualH)) {
                        visual_cont.forEach((t) => {
                            t.style.bottom = ((headerH + visualH)-actionBar.offsetTop - 10)+'px';
                            pagination.style.bottom = ((headerH + visualH)-actionBar.offsetTop + 14)+'px';
                        });
                    }
                } else {
                    visual_cont.forEach((t) => {
                        t.style.removeProperty('bottom');
                        pagination.style.removeProperty('bottom');
                    });
                }

                this.lastScrollY = window.scrollY

                var scrollTop = window.scrollY
                var innerHeight = window.outerHeight;
                var scrollHeight = document.body.offsetHeight;
            },
        }
        /* //23.04.11 메인비주얼 콘텐츠 위치 조정 */
    }
</script>

<style scoped>
.swiper-container.type_over {margin:0 -20px; padding:0 20px;}
.swiper-container.type_over::v-deep .price {font-size:14px;}
/* swiper navigation style */
[class*='swiper-button-'] {width:50px; height:50px; margin-top:-25px; background-image:none; background-color:rgba(34,34,34,0.8); display:none;}
[class*='swiper-button-']:before {width:18px; height:18px; margin-top:-10px; margin-left:-6px; border:1px solid #fff; border-top:0; border-right:0; content:''; position:absolute; top:50%; left:50%; transform:rotate(45deg);}
.swiper-button-next {right:0; transform:rotate(180deg);}
.swiper-button-prev {left:0;}

h3 {margin-bottom:20px; font-size:20px;}
h3 .sub_tit{margin-top:6px; color:#888; font-size:14px; font-weight:400; line-height:1.428em;}
h3 + .tab_wrap.type_slide {margin-top:-20px; padding-left:20px;}
h3 + .tab_wrap.type_slide::v-deep .tab_type_default {padding:0}
h3 + .tab_wrap.type_slide::v-deep .tab_type_default li a {padding:6px 0;}

section {margin:60px 20px 0;}

section.card_type {margin-top:30px;}
section.card_type .swiper_wrap:not([class*="swiper-container"]) .swiper-wrapper {margin-left:-5px;}
section.card_type .swiper_wrap:not([class*="swiper-container"]) .swiper-wrapper > li {width:25%; margin-left:5px;}
section.card_type .item + .item {margin-top:10px;}
section.card_type .item a {position:relative;}
section.card_type .item a:before {background-color:rgba(0,0,0,0.5); content:''; position:absolute; top:0; right:0; bottom:0; left:0; z-index:1;}
section.card_type .cont {color:#fff; position:absolute; top:50%; left:50%; z-index:2; transform:translate(-50%, -50%);}section.card_type .cont strong {font-size:14px; font-weight:600;}
section.card_type .cont strong {display:block;}

section.card_type.type_02 a:before {background:linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%); top:56.272401%;}
section.card_type.type_02 .cont {line-height:1.429em; top:auto; right:20px; bottom:20px; left:20px; transform:inherit;}
section.card_type.type_02 .cont strong {margin-bottom:2px; font-size:18px; font-weight:700; line-height:1.4444em;}

section.card_type.type_03 a:before {display:none;}
section.card_type.type_03 .cont {margin-top:14px; color:#222; line-height:1.429em; position:static; transform:inherit;}
section.card_type.type_03 .cont strong {margin-bottom:2px; color:#222; font-size:18px; font-weight:700; line-height:1.4444em;}

/* section.special */
section.big_goods::v-deep .cont a {padding-bottom:28px; display:block;}
section.big_goods::v-deep .cont .title strong {font-size:14px; line-height:1.428em; position:absolute; bottom:0; left:0;}
section.big_goods::v-deep .cont .title span {height:auto; margin-bottom:2px; color:#222; font-size:16px; font-weight:700; line-height:1.5em; display:block;}
section.big_goods::v-deep .cont p {height:auto; max-height:60px; margin-top:0; font-size:12px; line-height:1.6666em; overflow:hidden; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2;}

section.big_goods.type_02::v-deep .goods_item {padding-top:100px; position:relative;}
section.big_goods.type_02::v-deep .cont, section.big_goods.type_02::v-deep .cont .title {position:static;}
section.big_goods.type_02::v-deep .cont .title {padding-bottom:0;}
section.big_goods.type_02::v-deep .cont .title strong {font-size:20px; line-height:1.5em; top:0; bottom:auto;}
section.big_goods.type_02::v-deep .cont .title span {margin-bottom:0; padding-right:25px; color:#666; font-size:14px; font-weight:400; line-height:1.4444em; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
section.big_goods.type_02::v-deep .cont p {max-height:67px; color:#888; font-size:14px; line-height:1.4286em; position:absolute; top:36px;}
section.big_goods.type_02::v-deep .price {margin-top:4px; font-size:16px; line-height:1.5em;}
section.big_goods.type_02::v-deep .price em {margin-right:5px;}
section.big_goods.type_02::v-deep .check.wish {top:auto; bottom:45px;}
section.big_goods.type_02 [class*='swiper-button-'] {margin-top:-5px;}

section.hot::v-deep .goods_list {margin-top:-32px;}
section.hot .goods_item {margin-top:30px;}
section.hot .cont {padding-left:60px; margin-top: 20px;}
section.hot::v-deep .cont .logo {width:16px; height:16px; padding:1px; background-color:#ddd; border-radius:50%; position:absolute; top:0; left:-20px; display:flex; align-items:center; justify-content: center;}
section.hot::v-deep .goods_list .cont {padding-left:20px;}
section.hot::v-deep .goods_list .title span {margin-top:2px;}

section.bigThumb_combi .inner_item {padding-bottom:75px; position:relative;}
section.bigThumb_combi .main .thumb {padding-top:88.358208%; overflow:hidden; position:relative; display:block;}
section.bigThumb_combi .main em {width:100%; height:100%; position:absolute; top:0; left:0;}
section.bigThumb_combi .goods_wrap {padding:10px 10px 0; background-color:#fff; position:absolute; right:20px; bottom:0; left:20px;}

section.bigThumb_combi .goods_wrap > p * {display:block;}
section.bigThumb_combi .goods_wrap > p strong {font-size:20px; line-height:1.4em;}
section.bigThumb_combi .goods_wrap > p span {margin-top:2px; max-height:40px; color:#666; font-size:14px; line-height:1.428em; overflow:hidden; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2;}

section.bigThumb_combi .goods_wrap > ul {margin-top:0;}
section.bigThumb_combi::v-deep li {width:33.3333%; padding-top:0; padding-left:5px;}
section.bigThumb_combi::v-deep .cont span {height:auto !important; white-space:nowrap; text-overflow:ellipsis; display:block;}
section.bigThumb_combi::v-deep .cont .price {margin-top:4px;}

section.bigThumb_combi.type_02 .inner_item {padding-bottom:39.402985%;}
section.bigThumb_combi.type_02 .main .thumb {padding-top:111.5%;}
section.bigThumb_combi.type_02::v-deep .goods_list {margin-top:4px; display:block;}
section.bigThumb_combi.type_02::v-deep .goods_list > li {width:100%; margin:0; padding-top:6px;}
section.bigThumb_combi.type_02::v-deep .goods_list .goods_item {display:flex; align-items:flex-end;}
section.bigThumb_combi.type_02::v-deep .goods_list .goods_item .thumb {width:60px; height:84px; margin-right:15px; padding:0;}
section.bigThumb_combi.type_02::v-deep .goods_list .title span {max-height:32px; max-height:32px; white-space:inherit; display:-webkit-box;}
section.bigThumb_combi.type_02::v-deep .cont .price {margin-top:10px;}

section.bigThumb_combi.type_03 .inner_item {padding:0;}
section.bigThumb_combi.type_03 .main .thumb {margin-bottom:5px; padding-top:50.746268%; position:relative; display:block;}
section.bigThumb_combi.type_03 .goods_wrap {padding:0; position:static;}

section.banner {margin-right:0; margin-left:0;}
section.banner li + li {margin-top:20px;}
section.banner li a {display:block;}

section.influencer::v-deep .swiper-wrapper { align-items:center;}
section.influencer .item > .thumb {padding-top:116.078431%;}
section.influencer .item > .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
section.influencer .cont {padding:0; background-color:transparent; position:static;}
section.influencer .cont .thumb {width:100%; padding:10px; background:linear-gradient(rgba(0,0,0,0.59), rgba(0,0,0,0)); position:absolute; top:0; left:0;}
section.influencer .cont .txt_wrap {padding:10px; background-color:rgba(0,0,0,0.7); position:absolute; right:0; bottom:0; left:0; display:none;}
section.influencer .swiper-slide-active .item > .thumb {padding-top:131.764705%;}
section.influencer .swiper-slide-active .cont .txt_wrap {display:block;}

/* section.reivew  */
section.review::v-deep .review_list {margin-top:-5px; margin-left:-5px;}
section.review::v-deep .review_list_item {width:50%; padding-top:5px; padding-left:5px;}

section.insta ul {margin-top:-5px; margin-left:-5px; display:flex; flex-wrap:wrap;}
section.insta li {width:33.3333%; padding-top:5px; padding-left:5px;}
section.insta .thumb {padding-top:100%; position:relative; display:block;}
section.insta .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
</style>
