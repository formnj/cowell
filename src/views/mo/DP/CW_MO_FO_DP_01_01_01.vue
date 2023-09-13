<template>
    <div>
        <!-- visual -->
        <swiper class="main_visual" :options="mainOptions">
            <swiper-slide v-for="(item, index) in Main_slide_item" v-bind:key="index">
                <a href="#none" class="slide-bgimg">
                    <span class="thumb" :style="{height : windowHeight+'px'}">
                        <!-- 23.03.21 비주얼 영상 추가 -->
                        <img v-bind:src="item.img" v-if="item.type == 'img'" />
                        <video autoplay playsinline v-if="item.type == 'video'">
                            <source :src="item.img" type="video/mp4">
                        </video>
                        <!-- //23.03.21 비주얼 영상 추가 -->
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
        </swiper>
        <!-- //visual --> 

        <!-- 겨울에도 멋내기 -->
        <section class="big_thumb_type">
            <h3>겨울에도 멋내기
                <p class="sub_tit">두꺼운 패딩의 계절에도 멋내기 좋은 맨투맨 시리즈</p>
            </h3>
            <div v-for="(item, index) in brand_item" :key="index">
                <div class="main">
                    <span class="thumb">
                        <em><img :src="item.main_img" alt="" /></em>
                    </span>
                </div>
                <GoodsList :item="brand_item[0].sub_item" />
            </div>
            
        </section>
        <!-- //겨울에도 멋내기 -->

        <!-- Fashion People Item -->
        <section class="big_thumb_type_02">
            <h3>Fashion People Item
                <p class="sub_tit">머리 끝부터 발끝까지, 패피의 완성은 포인트</p>
            </h3>

            <div v-for="(item, index) in goods_item_HOTItem" :key="index">
                <div class="main">
                    <span class="thumb">
                        <em><img :src="item.img" alt="" /></em>
                    </span>
                </div>
                <GoodsList :item="goods_item_HOTItem[0].sub_item" />
            </div>
        </section>
        <!-- //hot02 -->

        <!-- new -->
        <section class="new">
            <h3>NEW</h3>
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_best" :tabidx="tabidx" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" v-bind:key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
            </swiper>
        </section>
        <!-- //new -->

        <!-- look book -->
        <section class="big_thumb_type">
            <h3>Look Book</h3>
            <div v-for="(item, index) in brand_item" :key="index">
                <div class="main">
                    <span class="thumb">
                        <em><img :src="item.main_img" alt="" /></em>
                    </span>
                </div>
                <GoodsList :item="brand_item[0].sub_item" />
            </div>
            
        </section>
        <!-- //look book -->

        <!-- best -->
        <section class="new">
            <h3>BEST</h3>
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_best" :tabidx="tabidx" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" v-bind:key="index">
                    <GoodsItem :item="item" />
                </swiper-slide>
            </swiper>
        </section>
        <!-- //best -->

        <!-- MD -->
        <section class="influencer">
            <h3>Fashion People Choice</h3>

            <!-- 스와이프 적용 []:isSwiper="true"] 추가 필요 -->
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

    export default {
        name: 'App',
        components: {
            GoodsList,
            GoodsItem,
            Tabs,
            Reviews,
        },
        data() {
            return {
                /* visual 높이 */
                windowHeight:window.innerHeight,

                /* sample data */
                Main_slide_item: [
                {img: require("@/assets/images/pc/sample/sam_video.mp4"), type:'video', brand: "pc-Ourplace", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                    {img: require("@/assets/images/mo/sample/sam_visual02.png"), type:'img', brand: "Canada Goose", tit: "Keep Me Warm", txt: "칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템" },
                    {img: require("@/assets/images/mo/sample/sam_visual03.jpg"), type:'img', brand: "Kappa", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                ],
                brand_item: [
                    {
                        main_img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                        sub_item:[
                            {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), tit: "라인 바시티 자켓", price:"169,000", discount:"33%"},
                            {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), tit: "ADIDAS", price:"169,000", discount:"33%"},
                            {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), tit: "NIKE", price:"169,000", discount:"33%"},
                        ]
                    }
                ],
                tabidx: 0,

                /* best 텝 */
                tab_item_best: [
                    { item: "의류" }, { item: "용품" }, { item: "신발" }
                ],
                /* best goods */
                goods_item_best: [
                    {
                        item :[
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"),
                                tit:"라인 바시티 자켓 다크브라운라인 바시티 자켓 다크브라운라인 바시티 자켓 다크브라운라인 바시티 자켓 다크브라운",
                                price:"250,000",
                                discount:"45%",
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"),
                                tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                            },
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                                tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                            },
                        ]
                    }
                ],
                /* //best goods */

                /* hot item */
                goods_item_HOTItem: [
                    {
                        img:require("@/assets/images/mo/sample/hot_item_main.png"),
                        brand: "UGG", txt:"집밖은 위험해, 따듯한 홈웨어 시리즈",
                        sub_item: [
                            {
                                img:require("@/assets/images/mo/sample/hot_thumb01-1.png"),
                                tit:"어그 미니 베일리보우 체스트넛",
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
                                tit:"어그 미니 베일리보우 체스트넛",
                                price: "269,000",
                                discount:"4%"
                            },
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
                    slidesPerView: 2,
                    spaceBetween: 5,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
                },
                mainOptions:{
                    loop:true,
                    slidesPerView: 1,
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
                        t.style.bottom = ((winH + 30)-actionBar.offsetTop)+'px';
                        pagination.style.bottom = ((winH + 30 - 10)-actionBar.offsetTop)+'px';
                    });
                } else if(actionBar.offsetTop < (headerH + visualH)) {
                    visual_cont.forEach((t) => {
                        t.style.bottom = ((headerH + visualH)-actionBar.offsetTop)+'px';
                        pagination.style.bottom = ((headerH + visualH)-actionBar.offsetTop - 14)+'px';
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
                            t.style.bottom = ((winH + 30)-(actionBar.offsetTop + window.scrollY))+'px';
                            pagination.style.bottom = ((winH + 30 - 10)-(actionBar.offsetTop + window.scrollY))+'px';
                        });
                    } else if(actionBar.offsetTop < (headerH + visualH)) {
                        visual_cont.forEach((t) => {
                            t.style.bottom = ((headerH + visualH)-actionBar.offsetTop)+'px';
                            pagination.style.bottom = ((headerH + visualH)-actionBar.offsetTop - 14)+'px';
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
.main_visual {transition:background-image 0.2s;}
.main_visual::v-deep .swiper-slide a {max-width:1240px; margin:0 auto; position:relative; display:block;}
.main_visual::v-deep .swiper-slide .thumb {height:100%;}
.main_visual::v-deep .swiper-slide .thumb em {height:100%; position:relative;}
.main_visual::v-deep .swiper-slide .thumb em:before {background-color:rgba(0,0,0,0.2); content:''; position:absolute; top:0; right:0; bottom:0; left:0;}
.main_visual .swiper-slide .cont {color:#fff; position:absolute; right:0; bottom:43px; left:0; z-index:2; transition:bottom 0.25s;}
.main_visual .swiper-slide .cont_inner {padding:30px 80px 30px 20px;}
.main_visual .swiper-slide .cont span, .main_visual .swiper-slide .cont strong{display: block;}
.main_visual .swiper-slide .cont span{margin-bottom:4px; font-size:18px; font-weight:500;}
.main_visual .swiper-slide .cont strong{font-size:30px;}
.main_visual .swiper-slide .cont p{margin-top:14px; font-size:14px; line-height:20px;}
.main_visual::v-deep .swiper-pagination {width:auto; padding:4px 12px; color:#aaa; font-size:12px; font-weight:500; background-color:#000; border-radius:60px; position:absolute; bottom:30px; left:20px; z-index:1; transition:bottom 0.25s;}
.main_visual::v-deep .swiper-pagination span:last-child {color:#fff;}

/* swiper navigation style */
[class*='swiper-button-'] {width:50px; height:50px; margin-top:-25px; background-image:none; background-color:rgba(34,34,34,0.8);}
[class*='swiper-button-']:after {width:18px; height:18px; margin-top:-10px; margin-left:-6px; border:1px solid #fff; border-top:0; border-right:0; content:''; position:absolute; top:50%; left:50%; transform:rotate(45deg);}
.swiper-button-next {right:0; transform:rotate(180deg);}
.swiper-button-prev {left:0;}

.main_visual.init .swiper-slide .cont {margin-bottom:62px;}
.main_visual.init::v-deep .swiper-pagination {bottom:95px;}

section {margin-top:60px; padding:0 20px;}
section:last-child {margin-bottom:80px;}

h3 {margin-bottom:20px; font-size:20px; font-weight:700; line-height:24px;}
h3 .sub_tit{margin-top:6px; color:#888; font-size:14px; font-weight:400; line-height:1.428em;}
h3 + .tab_wrap.type_slide {margin-top:-20px; padding-left:20px;}
h3 + .tab_wrap.type_slide::v-deep .tab_type_default {padding:0}
h3 + .tab_wrap.type_slide::v-deep .tab_type_default li a {padding:6px 0;}

/* .price font 14 */
section.new::v-deep .price, section.hot_item::v-deep .price, section.new::v-deep .price {font-size:14px;}

/* 겨울에도 멋내기 */
section.big_thumb_type {margin-top:30px;}
section.big_thumb_type .main .thumb {margin-bottom:5px; padding-top:50.746268%; position:relative; display:block;}
section.big_thumb_type .main .thumb em {width:100%; height:100%; overflow:hidden; position:absolute; top:0;}
section.big_thumb_type ul {display:flex;}
section.big_thumb_type::v-deep li {width:33.3333%}
section.big_thumb_type::v-deep .cont span {height:auto !important; white-space:nowrap; text-overflow:ellipsis; display:block;}
section.big_thumb_type::v-deep .goods_item .price {margin-top:6px;}

section.big_thumb_type_02 > div {padding-bottom:75px; position:relative;}
section.big_thumb_type_02 .main {padding-top:88.358208%; overflow:hidden; position:relative; display:block;}
section.big_thumb_type_02 .main em {width:100%; height:100%; position:absolute; top:0; left:0;}
section.big_thumb_type_02 ul {padding:10px 10px 0 5px; background-color:#fff; position:absolute;right:20px; bottom:0; left:20px;}
section.big_thumb_type_02::v-deep li {width:33.3333%; padding-top:0; padding-left:5px;}
section.big_thumb_type_02::v-deep .cont span {height:auto !important; white-space:nowrap; text-overflow:ellipsis; display:block;}
section.big_thumb_type_02::v-deep .cont .price {margin-top:4px;}

section.new .swiper-container, section.influencer::v-deep .swiper-container {margin:0 -20px; padding:0 20px;}

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
