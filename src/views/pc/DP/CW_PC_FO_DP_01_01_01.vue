<template>
    <div>
        <!-- visual -->
        <swiper class="main_visual" :options="mainOptions">
            <swiper-slide v-for="(item, index) in Main_slide_item" v-bind:key="index">
                <a href="#none" class="slide-bgimg">
                    <span class="thumb">
                        <em><img v-bind:src="item.img" /></em>
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

        <!-- 겨울에도 멋내기 -->
        <section class="hot_item">
            <h3>겨울에도 멋내기
                <p class="sub_tit">두꺼운 패딩의 계절에도 멋내기 좋은 맨투맨 시리즈</p>
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
                <!-- 23.03.13 추가 -->
                <div class="swiper_navigation_wrap" slot="pagination">
                    <div class="inner">
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                </div>
                <!-- //23.03.13 추가 -->
            </swiper>
        </section>
        <!-- //겨울에도 멋내기 -->

        <!-- new -->
        <section class="new">
            <h3>NEW</h3>
            <Tabs tabClass="tab_type_default" v-bind:tab_item="tab_item_best" :tabidx="tabidx" moreLink="link" moreTxt="신상품 더보기" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                    <GoodsItem :item="item" :path="pc" />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //new -->

        <!-- look book-->
        <section class="look_book">
            <h3>Look Book</h3>
            <swiper :options="hotitemOptions">
                <swiper-slide v-for="(item, index) in brand_item" :key="index">
                    <div class="inner">
                        <div class="main">
                            <span class="thumb" @click="playVideo">
                                <video id="myVideo">
                                    <source :src="item.main_img" type="video/mp4">
                                </video>
                            </span>
                        </div>
                        <GoodsList v-bind:item="brand_item[0].sub_item" />
                    </div>
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
        <!-- //look book -->

        <!-- best -->
        <section class="best">
            <h3>BEST</h3>
            <Tabs
             tabClass="tab_type_default" :tab_item="tab_item_best" :tabidx="tabidx" moreLink="link" moreTxt="BEST 더보기" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" :key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
                <div class="swiper-button-next" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //best -->

        <!-- influencer -->
        <section class="influencer">
            <h3>Fashion People Choice</h3>

            <swiper class="type_card" :options="influencerOptions">
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
        <!-- //influencer -->

        <!-- review -->
        <section class="review">
            <h3>BEST REVIEW
                <p class="sub_tit">코웰패션 이용 고객들의 생생 리뷰</p>
            </h3>

            <swiper :options="defaultOptions" class="review_list">
                <swiper-slide v-for="(item, index) in review" :key="index" :class="{'even': index%2 != 0}">
                    <ReviewItem :item="item" />
                </swiper-slide>
            </swiper>
        </section>
        <!-- //review -->

        <!-- instagram -->
        <section class="instagram">
            <h3>Instargram</h3>

            <dl>
                <dt>
                    <a href="#none">
                        <span class="thumb"><img :src="instagram[0].img" /></span>
                    </a>
                </dt>
                <dd>
                    <ul>
                        <template v-for="(item, index) in instagram">
                            <li v-if="index > 0" :key="index">
                                <a href="#none">
                                    <span class="thumb"><img :src="item.img" /></span>
                                </a>
                            </li>
                        </template>
                    </ul>
                </dd>
            </dl>
        </section>
        <!-- //instagram -->

        
    </div>
</template>

<script>
    import GoodsList from "@/components/GoodsList.vue";
    import GoodsItem from "@/components/GoodsItem.vue";
    import Tabs from "@/components/Tabs.vue";
    import ReviewItem from "@/components/ReviewItem.vue";

    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";
    import VueMasonry from 'vue-masonry-css'

    export default {
        name: 'App',
        components: {
            GoodsList,
            GoodsItem,
            Tabs,
            ReviewItem,

            Swiper,
            SwiperSlide,
            VueMasonry,
        },
        data() {
            return {
                /* sample data */
                Main_slide_item: [
                    {img: require("@/assets/images/pc/sample/sam_brand_visual01.png"), brand: "pc-Ourplace", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                    {img: require("@/assets/images/pc/sample/sam_visual02.png"), brand: "Canada Goose", tit: "Keep Me Warm", txt: "칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템" },
                    {img: require("@/assets/images/pc/sample/sam_visual03.jpg"), brand: "Kappa", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                ],
                brand_item: [
                    {
                        main_img:require("@/assets/images/pc/sample/sam_video.mp4"),
                        sub_item:[
                            {img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"), tit: "라인 바시티 자켓", price:"169,000", discount:"33%"},
                            {img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"), tit: "ADIDAS"},
                            {img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"), tit: "NIKE"},
                        ]
                    }
                ],
                tabidx: 0,

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
                ],
                /* //패피초이스 */

                /* best 텝 */
                tab_item_best: [
                    { item: "의류" }, { item: "용품" }, { item: "신발" }
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
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"43%",
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                            },
                        ]
                    }
                ],
                /* //best goods */

                /* reivew */
                review: [
                    { photo: require("@/assets/images/pc/sample/imgreview01.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비", discount: "30%", price:"300,300", reivewScore:3.5},
                    { photo: require("@/assets/images/pc/sample/imgreview02.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:5},
                    { photo: require("@/assets/images/pc/sample/imgreview02.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:5},
                    { photo: require("@/assets/images/pc/sample/imgreview03.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:.5},
                    { photo: require("@/assets/images/pc/sample/imgreview04.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:4.5},
                    { photo: require("@/assets/images/pc/sample/imgreview05.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:5},
                ],
                /* //reivews */

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
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
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

                instagram : [
                    {img:require("@/assets/images/pc/sample/insta01.png")},
                    {img:require("@/assets/images/pc/sample/insta02.png")},
                    {img:require("@/assets/images/pc/sample/insta03.png")},
                    {img:require("@/assets/images/pc/sample/insta04.png")},
                    {img:require("@/assets/images/pc/sample/insta05.png")},
                    {img:require("@/assets/images/pc/sample/insta06.png")},
                    {img:require("@/assets/images/pc/sample/insta07.png")},
                    {img:require("@/assets/images/pc/sample/insta08.png")},
                    {img:require("@/assets/images/pc/sample/insta09.png")},
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
                hotitemOptions:{
                    loop:true,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    maxBackfaceHiddenSlides:6,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
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
                influencerOptions:{
                    loop:true,
                    slidesPerView: 6,
                    spaceBetween: 20,
                    centeredSlides: true,
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
                isPlay : false,
            }
        },
        mounted(){
        },
        methods:{
            playVideo: function(event){
                if (!this.isPlay) {
                    event.target.play()
                    this.isPlay = true;
                } else {
                    event.target.pause()
                    this.isPlay = false;
                }
            },
        },
    }
</script>

<style scoped>
.main_visual {transition:background-image 0.2s;}
.main_visual .swiper-slide a {display:block;}
.main_visual .swiper-slide .thumb {padding-top:59.270833%; position:relative;}
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

section.look_book {text-align:center;}
section.look_book h3 {text-align:left;}
section.look_book .swiper-slide .inner {display:flex; align-items:center;}
section.look_book [class*='swiper-button-'] {display:block;}
section.look_book .main {width:49.351451%;}
section.look_book .main .thumb {width:100%; padding-top:74.217772%; position:relative; display:block;}
section.look_book .main .thumb > * {width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0; display:block;}
section.look_book .goods_list {margin-left:0; flex:1;}
section.look_book::v-deep .goods_list > li {width:33.3333%;}
section.look_book .goods_item a {position:relative;}
section.look_book .swiper-slide a:before {background-color:rgba(0,0,0,0.5); content:''; position:absolute; top:0; right:0; bottom:0; left:0; z-index:1;}
section.look_book .cont {position:absolute; top:50%; left:50%; z-index:2; transform:translate(-50%, -50%);}
section.look_book .cont strong {color:#fff; font-size:30px; font-weight:600;}

section.hot_item .swiper-slide{display:grid; column-gap:20px; align-items:center; grid-template-columns:49.413218% 49.351451%;}/* 23.04.13 수정 */
section.hot_item [class*='swiper-button-'] {display:block;}
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

section.influencer .swiper-slide {display:flex; align-items:center; transition:width 0.25s;}
section.influencer .swiper-container {height:693px;}
section.influencer::v-deep .swiper-wrapper {align-items:center; margin-left:-136px;}
section.influencer .swiper-slide-active {width:526px !important;}
section.influencer .swiper-slide .item {flex:1;}
section.influencer .swiper-slide .item > .thumb {padding-top:131.620553%;}
section.influencer .swiper-slide .item > .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
section.influencer .swiper-slide .cont .thumb {display:none;}
section.influencer .swiper-slide-active .cont .thumb {display:flex;}

section.instagram dl {display:flex; flex-wrap:wrap;}
section.instagram dt {width:32.48919%;}
section.instagram dd {padding-left:20px; flex:1;}
section.instagram ul {margin-top:-20px; margin-left:-20px; display:flex; flex-wrap:wrap;}
section.instagram li {width:25%; padding-top:20px; padding-left:20px;}
section.instagram .thumb {padding-top:100%;}
section.instagram .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
</style>
