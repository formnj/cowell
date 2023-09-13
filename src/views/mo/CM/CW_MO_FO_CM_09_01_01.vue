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
                            <video autoplay playsinline v-if="item.type == 'video'">
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
        <!-- //브랜드 -->

        <!-- 기획전 -->
        <section class="special">
            <swiper :options="specialOptions">
                <swiper-slide v-for="(item, index) in goods_item_special[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </section>
        <!-- //기획전 -->

        <!-- best -->
        <section class="best">
            <h3>BEST</h3>
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_best" :tabidx="tabidx" />

            <swiper :options="bestOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" :key="index">
                    <GoodsList :item="goods_item_best[0].item" />
                </swiper-slide>
            </swiper>
                
            <div class="btnSection">
                <router-link to="" class="btn_mid btn_gray02"><em>바로가기</em></router-link>
            </div>
        </section>
        <!-- //best -->

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

            <masonry :cols="2" :gutter="{default: '5px'}" class="goods_list sticky">
                <div v-for="(item, index) in goods_item_HOT" :key="index">
                    <GoodsItem :item="item" />
                </div>
            </masonry>
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
                    </a>
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
        <!-- //hot02 -->

        <!-- new -->
        <section class="new">
            <h3>NEW</h3>
            <Tabs tabClass="tab_type_default" tabType="slide" v-bind:tab_item="tab_item_new" :tabidx="tabidx" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //new -->
    </div>
</template>

<script>
    import GoodsList from "@/components/GoodsList.vue";
    import GoodsItem from "@/components/GoodsItem.vue";
    import Tabs from "@/components/Tabs.vue";

    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";
    import VueMasonry from 'vue-masonry-css'

    export default {
        name: 'App',
        components: {
            GoodsList,
            GoodsItem,
            Tabs,

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
                brand_item: [
                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), brand: "FIFA OLP"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), brand: "ADIDAS"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), brand: "NIKE"},
                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), brand: "ADIDAS"},
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
                mainOptions:{
                    loop: true,
                    speed:1000,
                    autoplay:{
                        delay:3000
                    },
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
                            for (let i = 0; i < captions.length; ++i) {
                                titles[i].classList.remove('show');
                                captions[i].classList.remove('show');
                            }
                            swiper.slides[swiper.activeIndex].querySelector('strong').classList.add('show');
                            swiper.slides[swiper.activeIndex].querySelector('p').classList.add('show');
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
                    loop:false,
                    slidesPerView: 2,
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

                pathClass: '',
            };
        },
        /* 23.04.11 메인비주얼 콘텐츠 위치 조정 */
        watch: {
            $route() {
                this.pathFinder(this.$route.path);
            }
        },
        // created() {
        //     this.pathFinder(this.$route.path)
        //     window.addEventListener('scroll', this.onScroll)
        // },
        // mounted(){
        //     window.addEventListener('scroll', this.onScroll)
        //     window.addEventListener('load', this.visualInit)
        // },
        methods:{
            // pathFinder(pathName) {
            //     if (pathName === '/cowell/mo/') {
            //         this.pathClass = 'main'
            //         this.onScroll();
            //         this.visualInit();
            //     } else if (pathName === '/cowell/mo/DP_01_01_01') {
            //         this.pathClass = 'brand'
            //         this.onScroll();
            //         this.visualInit();
            //     }
            // },
            // visualInit(){
            //     const winH = window.innerHeight,
            //         headerH = document.getElementsByTagName('header')[0].offsetHeight,
            //         visualH = document.getElementsByClassName('main_visual')[0].offsetHeight,
            //         visual_cont = document.querySelectorAll('.main_visual .cont'),
            //         actionBar = document.getElementById('action_bar'),
            //         pagination = document.getElementsByClassName('swiper-pagination')[0];

            //     if(winH < (headerH + visualH)){
            //         visual_cont.forEach((t) => {
            //             t.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) - 10)+'px';
            //             pagination.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) + 20)+'px';
            //         });
            //     } else if(actionBar.offsetTop < (headerH + visualH)) {
            //         visual_cont.forEach((t) => {
            //             t.style.bottom = ((headerH + visualH)-actionBar.offsetTop - 10)+'px';
            //             pagination.style.bottom = ((headerH + visualH)-actionBar.offsetTop + 14)+'px';
            //         });
            //     }
            // },
            // onScroll () {
            //     const winH = window.innerHeight,
            //         headerH = document.getElementsByTagName('header')[0].offsetHeight,
            //         visualH = document.getElementsByClassName('main_visual')[0].offsetHeight,
            //         visual_cont = document.querySelectorAll('.main_visual .cont'),
            //         actionBar = document.getElementById('action_bar'),
            //         pagination = document.getElementsByClassName('swiper-pagination')[0];

            //     if (window.scrollY < this.lastScrollY && window.scrollY < (actionBar.offsetHeight)) {
            //         if(winH < (headerH + visualH)){
            //             visual_cont.forEach((t) => {
            //                 t.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) - 10)+'px';
            //                 pagination.style.bottom = (visualH - (winH - headerH -actionBar.offsetHeight) + 20)+'px';
            //             });
            //         } else if(actionBar.offsetTop < (headerH + visualH)) {
            //             visual_cont.forEach((t) => {
            //                 t.style.bottom = ((headerH + visualH)-actionBar.offsetTop - 10)+'px';
            //                 pagination.style.bottom = ((headerH + visualH)-actionBar.offsetTop + 14)+'px';
            //             });
            //         }
            //     } else {
            //         visual_cont.forEach((t) => {
            //             t.style.removeProperty('bottom');
            //             pagination.style.removeProperty('bottom');
            //         });
            //     }

            //     this.lastScrollY = window.scrollY

            //     var scrollTop = window.scrollY
            //     var innerHeight = window.outerHeight;
            //     var scrollHeight = document.body.offsetHeight;
            // },
        }
        /* //23.04.11 메인비주얼 콘텐츠 위치 조정 */
    }
</script>

<style scoped>
.main_visual {transition:background-image 0.2s;}
.main_visual .swiper-slide a:after {background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.49)); content:''; content:''; position:absolute; top:0; right:0; bottom:0; z-index:1; left:0; display:block;}
.main_visual .swiper-slide a {display:block;}
.main_visual .swiper-slide .thumb {padding-top:128%; position:relative;}
.main_visual .swiper-slide .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.main_visual .swiper-slide .thumb em * {width:100%; height:100%; object-fit:cover;}
.main_visual .swiper-slide .cont {color:#fff; position:absolute; right:0; bottom:0; left:0; z-index:2; transition:bottom 0.25s;}
.main_visual .swiper-slide .cont_inner {padding:30px 80px 30px 20px;}
.main_visual .swiper-slide .cont span, .main_visual .swiper-slide .cont strong{display: block;}
.main_visual .swiper-slide .cont span{margin-bottom:4px; font-size:18px; font-weight:500;}
.main_visual .swiper-slide .cont strong{font-size:30px;}
.main_visual .swiper-slide .cont p{margin-top:14px; font-size:14px; line-height:20px;}

.main_visual::v-deep .swiper-pagination {width:auto; padding:5px 12px 4px; color:rgba(255,255,255,0.5); font-size:12px; background-color:#000; border-radius:60px; position:absolute; bottom:30px; right:20px; left:auto; z-index:1; transition:bottom 0.25s;}
.main_visual::v-deep .swiper-pagination span:first-child {color:#fff;}

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

/* .price font 14 */
section.md::v-deep .price, section.hot_item::v-deep .price, section.new::v-deep .price {font-size:14px;}

section.brand {margin-top:30px;}
section.brand .swiper-container {margin:0 -20px; padding:0 20px;}
section.brand .swiper_wrap:not([class*="swiper-container"]) .swiper-wrapper {margin-left:-5px;}
section.brand .swiper_wrap:not([class*="swiper-container"]) .swiper-wrapper > li {width:25%; margin-left:5px;}
section.brand .item a {position:relative;}
section.brand .swiper-slide a:before {background-color:rgba(0,0,0,0.5); content:''; position:absolute; top:0; right:0; bottom:0; left:0; z-index:1;}
section.brand .cont {position:absolute; top:50%; left:50%; z-index:2; transform:translate(-50%, -50%);}
section.brand .cont strong {color:#fff; font-size:14px; font-weight:600;}

/* section.special */
section.special .swiper-container {margin:0 -20px; padding:0 20px;}
section.special::v-deep .cont a {padding-bottom:28px; display:block;}
section.special::v-deep .cont strong {font-size:14px; line-height:1.428em; position:absolute; bottom:0; left:0;}
section.special::v-deep .cont span {height:auto; margin-bottom:2px; color:#222; font-size:16px; font-weight:700; line-height:1.5em; display:block;}
section.special::v-deep .cont p {height:auto; max-height:60px; margin-top:0; font-size:12px; line-height:1.6666em; overflow:hidden; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2;}

section.best::v-deep .goods_list > li {width:33.3333%;}
section.best .btnSection {margin-top:20px;}
section.best [class*="btn_"] em {color:#666; font-weight:400;}

section.md .swiper-container, section.new .swiper-container {margin:0 -20px; padding:0 20px;}
section.md::v-deep .price {font-size:14px;}

section.hot::v-deep .goods_list {margin-top:-32px;}
section.hot .goods_item {margin-top:30px;}
section.hot .cont {padding-left:60px; margin-top: 20px;}
section.hot::v-deep .cont .logo {width:16px; height:16px; padding:1px; background-color:#ddd; border-radius:50%; position:absolute; top:0; left:-20px; display:flex; align-items:center; justify-content: center;}
section.hot::v-deep .goods_list .cont {padding-left:20px;}
section.hot::v-deep .goods_list .title span {margin-top:2px;}

section.hot_item .swiper-container {margin:0 -20px; padding:0 20px;}
section.hot_item .swiper-slide {padding-bottom:39.402985%;}
section.hot_item .bg_img {padding-top:111.5%;}
section.hot_item .bg_img em {position:absolute; top:0; right:0; bottom:0; left:0;}
section.hot_item .bg_img p {position:absolute; left:50px; bottom:50px; color:#fff;}
section.hot_item .bg_img strong, section.hot_item .bg_img span{display: block;}
section.hot_item .bg_img strong{font-size: 60px;}
section.hot_item .bg_img span{margin-top:10px; font-size: 20px;}
section.hot_item div.goods_wrap {padding:10px 10px 0; background-color:#fff; position:absolute; right:20px; bottom:0; left:20px;}
section.hot_item div.goods_wrap > p * {display:block;}
section.hot_item div.goods_wrap > p strong {font-size:20px; line-height:1.4em;}
section.hot_item div.goods_wrap > p span {margin-top:2px; max-height:40px; color:#666; font-size:14px; line-height:1.428em; overflow:hidden; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2;}
section.hot_item .cont span, section.hot_item .cont .price{font-size:16px; display: block;}
section.hot_item .cont span{color:#666;}
section.hot_item .cont .price .discount{color:#00C294;}
section.hot_item::v-deep .goods_list {margin:4px 0 0 0; display:block;}
section.hot_item::v-deep .goods_list > li {margin:0; padding-top:6px;}
section.hot_item::v-deep .goods_list .goods_item {display:flex; align-items:flex-end;}
section.hot_item::v-deep .goods_list .goods_item .thumb {width:60px; height:84px; margin-right:15px; padding:0;}
section.hot_item::v-deep .goods_list .title span {height:auto; max-height:32px;}

section.banner {margin-right:0; margin-left:0;}
section.banner li + li {margin-top:20px;}
section.banner li a {display:block;}
</style>
