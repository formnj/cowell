<template>
    <div>
        <!-- visual -->
        <swiper class="main_visual" :options="mainOptions">
            <swiper-slide v-for="(item, index) in Main_slide_item" v-bind:key="index">
                <a href="#none" class="slide-bgimg">
                    <span class="thumb">
                        <em>
                            <!-- 23.03.21 비주얼 영상 추가 -->
                            <img v-bind:src="item.img" v-if="item.type == 'img'" />
                            <video autoplay v-if="item.type == 'video'">
                                <source :src="item.img" type="video/mp4">
                            </video>
                            <!-- //23.03.21 비주얼 영상 추가 -->
                        </em>
                    </span>
                    <div class="cont">
                        <div class="cont_inner">
                            <span>{{ item.brand }}</span>
                            <strong>{{ item.tit }}</strong>
                            <p v-html=" item.txt "></p>
                        </div>
                    </div>
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <!-- //visual --> 

        <!-- 브랜드 -->
        <section class="brand">
            <swiper :options="brandOptions">
                <swiper-slide v-for="(item, index) in brand_item" :key="index">
                    <div class="item">
                        <router-link to="/pc/DP_01_01_01">
                            <span class="thumb">
                                <em><img v-bind:src="item.img" /></em>
                            </span>
                            <p class="cont">
                                <strong>{{ item.brand }}</strong>
                            </p>
                        </router-link>
                    </div>
                </swiper-slide>
                <div class="swiper-button-next" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-next"></div>
            </swiper>            
        </section>
        <!-- //브랜드 -->

        <!-- 기획전 -->
        <section class="special">
            <swiper :options="specialOptions">
                <swiper-slide v-for="(item, index) in goods_item_special[0].item" :key="index">
                    <GoodsItem :item="item" @hover="hover" @leave="leave" />
                </swiper-slide>
                <div class="swiper-button-next" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //기획전 -->

        <!-- best -->
        <section class="best">
            <h3>BEST</h3>
            <Tabs
             tabClass="tab_type_default" :tab_item="tab_item_best" :tabidx="tabidx"  moreLink="link" moreTxt="베스트 상품 더보기" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" :key="index">
                    <GoodsItem :item="item" :isWish=true />
                </swiper-slide>
                <div class="swiper-button-next" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //best -->

        <!-- banner -->
        <section class="banner">
            <swiper :options="bannerOptions">
                <swiper-slide v-for="(item, index) in banner" :key="index">
                    <a href="#none" class="event_banner"><!-- 23.05.08 a 테그로 수정 -->
                        <div>
                            <strong>Renewal Open Event</strong>
                            <p>FIFA 1904,BBC Earth와 함께 구매 인증 시 사은품 증정!! 댓글 축하 남기고 할인 쿠폰 증정</p>
                        </div>
                        <img src="@/assets/images/pc/sub/img_event_banner.png" alt="" />
                    </a>
                </swiper-slide>
                <div class="swiper_navigation_wrap" slot="pagination">
                    <div class="inner">
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                </div>
            </swiper>
        </section>
        <!-- //banner -->

        <!-- MD -->
        <section class="md">
            <h3>집밖은 위험해
                <p class="sub_tit">겨울 행복,사랑의 진정한 가치를 담은 라운지 웨어</p>
            </h3>

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //MD -->

        <!-- hot -->
        <section class="hot">
            <h3>지금 핫한 이 상품 어떠세요? </h3>

            <masonry :cols="3" :gutter="{default: '20px'}" class="goods_list sticky">
                <div v-for="(item, index) in goods_item_HOT" :key="index">
                    <GoodsItem :item="item" />
                </div>
            </masonry>

            <!-- <GoodsItem class="sticky" v-bind:item="goods_item_HOT" /> -->
        </section>
        <!-- //hot -->

        <!-- hot02 -->
        <section class="hot_item">
            <h3>Brand Hot Item
                <p class="sub_tit">연인에게 선물로, 따듯하고 사랑스러운 아이템</p>
            </h3>

            <swiper :options="hotitemOptions">
                <swiper-slide v-for="(item, index) in goods_item_HOTItem" :key="index">
                    <a href="#none" class="bg_img thumb">
                        <em><img :src="item.img" alt="" /></em>
                        <p>
                            <strong>{{ item.brand }}</strong>
                            <span>{{ item.txt }}</span>
                        </p>
                    </a>
                    <div>
                        <GoodsList v-bind:item="goods_item_HOTItem[0].sub_item" />
                    </div>
                </swiper-slide>
            </swiper>
        </section>
        <!-- //hot02 -->

        <!-- new -->
        <section class="new">
            <h3>NEW</h3>
            <Tabs tabClass="tab_type_default" v-bind:tab_item="tab_item_best" :tabidx="tabidx" />

            <!-- <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper> -->
        </section>
        <!-- //new -->
    </div>
</template>

<script>
    import GoodsList from "@/components/GoodsList.vue";
    import GoodsItem from "@/components/GoodsItem.vue";
    // import Tabs from "@/components/Tabs.vue";

    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";
    import VueMasonry from 'vue-masonry-css'

    export default {
        name: 'App',
        components: {
            GoodsList,
            GoodsItem,
            // Tabs,

            Swiper,
            SwiperSlide,
            VueMasonry,
        },
        data() {
            return {
                /* sample data */
                Main_slide_item: [
                    {img: require("@/assets/images/pc/sample/sam_video.mp4"), type:'video', brand: "pc-Ourplace", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                    {img: require("@/assets/images/pc/sample/sam_visual02.png"), type:'img', brand: "Canada Goose", tit: "Keep Me Warm", txt: "칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템" },
                    {img: require("@/assets/images/pc/sample/sam_visual03.jpg"), type:'img', brand: "Kappa", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                ],
                brand_item: [
                    {img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"), brand: "FIFA OLP"},
                    {img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"), brand: "ADIDAS"},
                    {img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"), brand: "NIKE"},
                    {img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"), brand: "ADIDAS"},
                ],
                tabidx: 0,

                // 기획전
                goods_item_special: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/pc/sample/sam_special01.png"),
                                img2: require("@/assets/images/pc/sample/sam_visual02.png"),
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

                /* best 텝 */
                tab_item_best: [
                    { item: "언더웨어" }, { item: "남성" }, { item: "여성" }, { item: "키즈" }, { item: "아울렛" }
                ],
                /* best goods */
                goods_item_best: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"),
                                brand: "Nike", tit:"나이키 에어",
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
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                ],
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"43%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
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
                        img:require("@/assets/images/pc/sample/sam_banner01.png"),
                        tit: "Renewal Event",
                        txt: "코웰패션닷컴 리뉴얼 기념 이벤트"
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_banner02.png"),
                        tit: "Happy Holiday",
                        txt: "연말 그리고 새해"
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_banner03.png"),
                        tit: "Coupon event",
                        txt: "오늘의 쿠폰 받으로 가기"
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_banner04.png"),
                        tit: "Start Style",
                        txt: "스타일의 시작"
                    }
                ],
                /* //banner */

                /* md goods */
                goods_item_MD: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"),
                                brand: "Nike", tit:"나이키 에어",
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
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                ],
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
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
                        img:require("@/assets/images/pc/sample/sam_hot_01.png"),
                        brand: "UGG", tit:"22FW 어그 여성 클래식 슬리퍼",
                        logo:require("@/assets/images/pc/sample/logo_ugg.png"),
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_hot_02.png"),
                        brand: "NAUTICA", tit:"헤비듀티 다운자켓 라이트그레이",
                        logo:require("@/assets/images/pc/sample/logo_nautica.png"),
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_hot_04.png"),
                        brand: "Calvinklein", tit:"여성 슬림핏 웨이스트 인타르시아 로고 스웨터",
                        logo:require("@/assets/images/pc/sample/logo_fifa.png"),
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_hot_03.png"),
                        brand: "Fifa Official", tit:"스위퍼 바라클라바 헤비 다운 블루",
                        logo:require("@/assets/images/pc/sample/logo_calvinclein.png"),
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_hot_05.png"),
                        brand: "Ourplace", tit:"어스 에코백 브라운",
                        logo:require("@/assets/images/pc/sample/logo_ourplace.png"),
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_hot_06.png"),
                        brand: "UGG", tit:"22FW 어그 여성 플러프 예슬라이드_카키",
                        logo:require("@/assets/images/pc/sample/logo_ugg.png"),
                    },
                ],
                /* //HOT goods */

                /* hot item */
                goods_item_HOTItem: [
                    {
                        img:require("@/assets/images/pc/sample/hot_thumb01.png"),
                        brand: "UGG", txt:"집밖은 위험해, 따듯한 홈웨어 시리즈",
                        sub_item: [
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-1.png"),
                                tit:"어그 미니 베일리보우 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-2.png"),
                                tit:"22FW 어그 여성 플러프 예슬라이드 카키",
                                price: "159,000",
                                discount:"11%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-1.png"),
                                tit:"어그 미니 베일리보우 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-2.png"),
                                tit:"22FW 어그 여성 플러프 예슬라이드 카키",
                                price: "159,000",
                                discount:"11%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-1.png"),
                                tit:"어그 미니 베일리보우 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-2.png"),
                                tit:"22FW 어그 여성 플러프 예슬라이드 카키",
                                price: "159,000",
                                discount:"11%"
                            }
                        ],
                    },
                    {
                        img:require("@/assets/images/pc/sample/hot_thumb02.png"),
                        brand: "Ourplace", txt:"어스 에코백 시리즈어스 에코백 시리즈어스 에코백 시리즈어스 에코백 시리즈",
                        sub_item: [
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-1.png"),
                                txt:"Ourplace 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
                            {
                                img:require("@/assets/images/pc/sample/hot_thumb01-1.png"),
                                txt:"Ourplace 예슬라이드 카키",
                                price: "159,000",
                                discount:"11%"
                            }
                        ],
                    },
                ],
                /* //hot item */
                /* //sample data */

                defaultOptions:{
                    loop:true,
                    slidesPerView: 6,
                    spaceBetween: 20,
                    maxBackfaceHiddenSlides:6,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                mainOptions:{
                    speed:1000,
                    autoplay:{
                        delay:3000
                    },
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
                    loopAdditionalSlides:0,
                    watchSlidesProgress: true,
                    on: {
                        init: function(){
                            var slide_len;
                            this.autoplay.stop();
                        },
                        slideChange: function () {
                        },
                        slideChangeTransitionEnd: function(){
                            let swiper = this,
                            titles = swiper.el.querySelectorAll('strong'),
                            captions = swiper.el.querySelectorAll('p');
                        },
                        progress: function(){
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                let slideProgress = swiper.slides[i].progress,
                                innerOffset = swiper.width * 0.5,
                                innerTranslate = slideProgress * innerOffset;
                                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                "translateX(" + innerTranslate + "px)";
                            }
                        },
                        touchStart: function() {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = "";
                            }
                        },
                        setTransition: function(speed) {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = speed + "ms";
                                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                                speed + "ms";
                            }
                        }
                    }
                },
                brandOptions:{
                    loop:true,
                    slidesPerView: 4,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                specialOptions:{
                    loop:true,
                    slidesPerView: 3,
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                hotitemOptions:{
                    loop:true,
                    slidesPerView: 1,
                    spaceBetween: 20,
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
            };
        },
        mounted(){
        },
        methods:{
        },
    }
</script>

<style scoped>
.main_visual {transition:background-image 0.2s;}
.main_visual .swiper-slide a {display:block;}
.main_visual .swiper-slide .thumb {padding-top:46.875%; position:relative;}
.main_visual .swiper-slide .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.main_visual .swiper-slide .thumb em * {width:100%; height:100%; object-fit:cover;}
.main_visual .swiper-slide .cont {width:750px; padding:0 100px 0 150px; color:#fff; background-color:rgba(34,34,34,0.5); overflow:hidden; position:absolute; top:50%; bottom:50%; display:flex; align-items:flex-end; transition:0.35s all 0.5s ease-in-out;}
.main_visual .swiper-slide-active .cont {top:0; bottom:0;}
.main_visual .swiper-slide .cont_inner {margin-bottom:330px; opacity:0; transition:0.35s opacity 1.5s;}
.main_visual .swiper-slide-active .cont_inner {opacity:1;}
.main_visual .swiper-slide .cont span, .main_visual .swiper-slide .cont strong{display: block;}
.main_visual .swiper-slide .cont span{margin-bottom:16px; font-size:30px; font-weight:500;}
.main_visual .swiper-slide .cont strong{font-size:60px;}
.main_visual .swiper-slide .cont p{margin-top:30px; font-size:24px; line-height:36px;}

.main_visual::v-deep .swiper-pagination {width:auto; padding:8px 20px; color:rgba(255,255,255,0.7); font-size:20px; font-weight:500; background-color:#000; border-radius:60px; position:absolute; bottom:260px; left:150px; z-index:1;}
.main_visual::v-deep .swiper-pagination span:last-child {color:#fff;}


h3 {margin-bottom:40px; font-size:30px;}
h3 .sub_tit{margin-top:10px; color:#888; font-size:24px; font-weight:400; line-height:36px;}
h3 + .tab_wrap {margin-top:-20px;}

section{max-width:1619px; margin:100px auto 0;}

section.md [class*='swiper-button-'], section.best [class*='swiper-button-'] {margin-top:-102px;}

section.brand .swiper_wrap:not([class*="swiper-container"]) .swiper-wrapper {margin-left:-5px;}
section.brand .swiper_wrap:not([class*="swiper-container"]) .swiper-wrapper > li {width:25%; margin-left:5px;}
section.brand .item a {position:relative;}
section.brand .swiper-slide a:before {background-color:rgba(0,0,0,0.5); content:''; position:absolute; top:0; right:0; bottom:0; left:0; z-index:1;}
section.brand .cont {position:absolute; top:50%; left:50%; z-index:2; transform:translate(-50%, -50%);}
section.brand .cont strong {color:#fff; font-size:30px; font-weight:600;}

section.special::v-deep .thumb {padding-top:117.647058%;}
section.special::v-deep .cont a {margin-top:20px; padding-bottom:36px; display:block;}
section.special::v-deep .cont strong {font-size:18px; position:absolute; bottom:0; left:0;}
section.special::v-deep .cont span {height:auto; margin-bottom:2px; color:#222; font-size:24px; font-weight:700; display:block;}
section.special::v-deep .cont p {height:auto; max-height:60px; margin-top:0; font-size:18px; line-height:inherit; overflow:hidden; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2;}
section.special [class*='swiper-button-'] {margin-top:-85px;}

section.hot::v-deep .goods_list {margin-top:-170px;}
section.hot::v-deep .goods_item {margin-top:170px;}
section.hot .cont {padding-left:60px; margin-top: 20px;}
section.hot::v-deep .cont .logo {width:50px; height:50px; padding:1px; background-color:#ddd; border-radius:50%; position:absolute; top:0; left:-60px; display:flex; align-items:center; justify-content: center;}
section.hot::v-deep .goods_list .cont {padding-left:60px;}
section.hot::v-deep .goods_list .title strong{font-size: 18px;}

section.hot_item .swiper-slide{display:grid; column-gap:20px; align-items:center; grid-template-columns:49.413218% 49.351451%;}/* 23.04.13 수정 */
section.hot_item .bg_img {padding-top:111.5%;}
section.hot_item .bg_img em {position:absolute; top:0; right:0; bottom:0; left:0;}
section.hot_item .bg_img p {position:absolute; left:50px; bottom:50px; color:#fff;}
section.hot_item .bg_img strong, section.hot_item .bg_img span{display: block;}
section.hot_item .bg_img strong{font-size: 60px;}
section.hot_item .bg_img span{margin-top:10px; font-size: 20px;}
/* section.hot_item .swiper-slide > div {width:49.351451%;} */
section.hot_item .cont span, section.hot_item .cont .price{font-size:16px; display: block;}
section.hot_item .cont span{color:#666;}
section.hot_item .cont .price .discount{color:#00C294;}
section.hot_item::v-deep .goods_list {margin-top:-30px; margin-left:-20px;}
section.hot_item::v-deep .goods_list > li {width:33.3333%; padding-top:30px; padding-left:20px;}

section.banner {text-align:center;}
section.banner [class*='swiper-button-'] {display:block;}
/* section.banner a {padding:30px 0; background-color:#eee; display:flex; align-items:center; justify-content:center;} 23.05.08 제거 */
section.banner .cont{margin-left:20px;}
section.banner .cont strong, section.banner .cont span{display: block;}
section.banner .cont strong{font-size: 30px;}
section.banner .cont span{font-size: 20px;}
</style>
