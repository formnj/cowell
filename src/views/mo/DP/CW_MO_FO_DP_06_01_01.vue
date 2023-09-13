<template>
    <div>
        <h2 class="sticky" ref="header">
            <button class="back"></button>
            로그인
        </h2>
        <!-- visual -->
        <swiper class="main_visual" :options="mainOptions">
            <swiper-slide v-for="(item, index) in Main_slide_item" v-bind:key="index">
                <a href="#none" class="slide-bgimg">
                    <span class="thumb">
                        <em><img v-bind:src="item.img" /></em>
                    </span>
                    <div class="cont">
                        <div class="cont_inner">
                            <strong>{{ item.tit }}</strong>
                            <p v-html=" item.txt "></p>
                        </div>
                    </div>
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- //visual -->

        <div class="content">
            <!-- category -->
            <section class="category">
                <Tabs tabClass="tab_type_default" tabType="slide" v-bind:tab_item="category_item[0].sub_cate[0].item" :tabidx="category_item[0].sub_cate[0].idx" />

                <dl>
                    <dt>MY BRAND</dt>
                    <dd v-for="i in category_item[0].my_brand" :key="i.my_brand">
                        <ul>
                            <li v-bind:class="{ current: category_item[0].my_brand[0].idx === index }" v-for="(i, index) in category_item[0].my_brand[0].item" :key="i.item">
                                <a href="#none">{{ i }}</a>
                            </li>
                        </ul>
                    </dd>
                </dl>

                <dl>
                    <dt>HOT BRAND</dt>
                    <dd v-for="i in category_item[0].hot_brand" :key="i.hot_brand">
                        <ul>
                            <li v-bind:class="{ current: category_item[0].hot_brand[0].idx === index }" v-for="(i, index) in category_item[0].hot_brand[0].item" :key="i.item">
                                <a href="#none">{{ i }}</a>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </section>
            <!-- //category -->

            <!-- best -->
            <section class="best">
                <h3>BEST SELLER</h3>
                <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_best" :tabidx="tabidx" />

                <GoodsList :isWish="true" :item="goods_item_best[0].item" />
                <div class="btnSection">
                    <router-link to="" class="btn_mid btn_gray02"><em>바로가기</em></router-link>
                </div>
            </section>
            <!-- //best -->

            <!-- banner -->
            <section class="banner mt30">
                <ul>
                    <li class="swiper-slide">
                        <a href="#none">
                            <span class="thumb">
                                <em><img src="@/assets/images/pc/sample/sam_banner_02.png" alt="" /></em>
                            </span>
                            <p class="cont">
                                <strong>NOUTICA</strong>
                                <span>2023 F/F 시즌오프<br/> 다시 없을 기회</span>
                            </p>
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="#none">
                            <span class="thumb">
                                <em><img src="@/assets/images/pc/sample/sam_banner_01.png" alt="" /></em>
                            </span>
                            <p class="cont">
                                <strong>ADIDAS</strong>
                                <span>올 봄 신상품 출시<br/>맨투맨, 조거바지, 원마일웨어</span>
                            </p>
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="#none">
                            <span class="thumb">
                                <em><img src="@/assets/images/pc/sample/sam_banner_03.png" alt="" /></em>
                            </span>
                            <p class="cont">
                                <strong>FIFA OLP</strong>
                                <span>마지막 추위를<br/> 따듯하게 감싸줄 푸퍼</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </section>
            <!-- //banner -->

            <!-- new -->
            <section class="new">
                <h3>NEW</h3>
                <Tabs tabClass="tab_type_default" tabType="slide" v-bind:tab_item="tab_item_best" :tabidx="tabidx" />

                <GoodsList :isWish="true" :item="goods_item_NEW[0].item" />
            </section>
            <!-- //new -->

            <!-- review -->
            <section class="review">
                <h3>BEST REVIEW
                    <p class="sub_tit">코웰패션 이용 고객들의 생생 리뷰</p>
                </h3>

                <swiper :options="reviewOptions">
                    <swiper-slide v-for="(item, index) in review" :key="index">
                        <ul class="review_list">
                            <li class="review_list_item" v-for="(item, index) in review" :key="index" @click.prevent="openModal('modalSkin'), modalTitle='상품리뷰', modalContent='reviewPop'">
                                <ReviewItem :item="item" />
                            </li>
                        </ul>
                    </swiper-slide>
                </swiper>
            </section>
            <!-- //review -->
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <reviewPop />
        </ModalSkin>
    </div>
</template>

<script>
    import GoodsList from "@/components/GoodsList.vue";
    import Tabs from "@/components/Tabs.vue";
    import ReviewItem from "@/components/ReviewItem.vue";
    import ModalSkin from "@/components/ModalSkin";

    import reviewPop from "@/views/mo/DP/CW_MO_FO_DP_06_01_02";

    export default {
        name: 'App',
        components: {
            GoodsList,
            Tabs,
            ReviewItem,
            ModalSkin,

            reviewPop,
        },
        data() {
            return {
                tabidx:0,
                /* sample data */
                Main_slide_item: [
                    {img: require("@/assets/images/mo/sample/cate_bg.png"), brand: "pc-Ourplace", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                ],

                // 카테고리
                category_item: [
                    {
                        sub_cate:[
                            {
                                idx: 1,
                                item: [{item:'전체111'},{item:'아우터'},{item:'상의'},{item:'상의'},{item:'세트웨어'},{item:'패션잡화'}]
                            }
                        ],
                        my_brand:[
                            {
                                idx: 0,
                                item: ['ADIDAS','DKNY','FUMA','FILA OLP','CALVIN KLAIN','REEBOK','UGG','NOUTICA','AMONG','LOOKAST','CITY BREEZE']
                            }
                        ],
                        hot_brand:[
                            {
                                idx: 0,
                                item: ['REEBOK','LOOKAST','DKNY ','FUMA','FILA OLP','ADIDAS','UGG','NOUTICA','AMONG','LOOKAST','CITY BREEZE','REEBOK','LOOKAST','DKNY ','FUMA','FILA OLP','ADIDAS','UGG','NOUTICA','AMONG','LOOKAST','CITY BREEZE']
                            }
                        ],
                    }
                ],
                /* best 텝 */
                tab_item_best: [
                    { item: "언더웨어" }, { item: "남성" }, { item: "여성" }, { item: "키즈" }, { item: "아울렛" }, { item: "언더웨어" }, { item: "남성" }, { item: "여성" }, { item: "키즈" }, { item: "아울렛" }
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
                                    {txt:"BEST", class:"best"},
                                    {txt:"단독", class:'only'},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                        ]
                    }
                ],
                /* //best goods */

                /* new goods */
                goods_item_NEW: [
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                        {txt: "105" },
                                    ],
                                },
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                        {txt: "105" },
                                    ],
                                },
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                        {txt: "105" },
                                    ],
                                },
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                        {txt: "105" },
                                    ],
                                },
                            },
                        ]
                    }
                ],
                /* //new goods */

                /* reivew */
                review: [
                    { photo: require("@/assets/images/pc/sample/imgreview01.png"), reivewScore:3.5},
                    { photo: require("@/assets/images/pc/sample/imgreview02.png"), reivewScore:5},
                    { photo: require("@/assets/images/pc/sample/imgreview02.png"), reivewScore:5},
                    { photo: require("@/assets/images/pc/sample/imgreview03.png"), reivewScore:.5},
                ],
                /* //reivews */
                /* //sample data */
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
                reviewOptions:{
                    loop:true,
                    slidesPerView: 1,
                    spaceBetween: 5,
                },

                modalTitle: '',
                modalContent: '',

                /* 23.04.19 추가 탭 고정 */
                content_offset:'',
            };
        },
        mounted(){
            /* 23.04.19 추가 탭 고정 */
            this.content_offset = document.querySelector('.tab_wrap').offsetTop - document.querySelector('.tab_wrap').offsetHeight;
            window.addEventListener('scroll', this.onScroll)
        },
        methods: {
            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },
            /* 23.04.19 추가 탭 고정 */
            onScroll () {
                if (window.scrollY < this.lastScrollY && this.content_offset < window.scrollY) {
                    let el_01 = document.querySelector('.tab_wrap').offsetHeight,
                        total_p = el_01;
                        
                    document.querySelector('.tab_wrap').classList.add('fixed')
                    document.querySelector('.content').style = 'padding-top:'+(total_p)+'px !important'
                } else {
                    document.querySelector('.tab_wrap').classList.remove('fixed')
                    document.querySelector('.content').style.removeProperty('padding')                    
                }

                if (window.scrollY == 0){
                    document.querySelector('.tab_wrap').classList.remove('fixed')
                    document.querySelector('.content').style.removeProperty('padding')                    
                }

                this.lastScrollY = window.scrollY
            },
        },
    }
</script>

<style scoped>
/* 23.04.19 추가 탭 고정 */
.cate_top.fixed {width:100%; padding:0 20px; background-color:#fff; position:fixed; top:133px; left:0; z-index:2;}
.cate_top.fixed .sort_box {margin-bottom:0;}
.cate_top.fixed .cate_box {display:none;}
/* //23.04.19 추가 탭 고정 */

.main_visual {transition:background-image 0.2s;}
.main_visual .swiper-slide a:after {background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.49)); content:''; content:''; position:absolute; top:0; right:0; bottom:0; z-index:1; left:0; display:block;}
.main_visual .swiper-slide a {display:block;}
.main_visual .swiper-slide .thumb {padding-top:74.666666%; position:relative;}
.main_visual .swiper-slide .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.main_visual .swiper-slide .cont {color:#fff; position:absolute; right:0; bottom:0; left:0; z-index:2;}
.main_visual .swiper-slide .cont_inner {padding:30px 80px 30px 20px;}
.main_visual .swiper-slide .cont span, .main_visual .swiper-slide .cont strong{display: block;}
.main_visual .swiper-slide .cont span{margin-bottom:4px; font-size:18px; font-weight:500;}
.main_visual .swiper-slide .cont strong{font-size:30px;}
.main_visual .swiper-slide .cont p{margin-top:14px; font-size:14px; line-height:20px;}

.main_visual::v-deep .swiper-pagination {width:auto; padding:5px 12px 4px; color:rgba(255,255,255,0.5); font-size:12px; background-color:#000; border-radius:60px; position:absolute; bottom:30px; right:20px; left:auto; z-index:1;}
.main_visual::v-deep .swiper-pagination span:first-child {color:#fff;}

h3 {margin-bottom:20px; font-size:20px; font-weight:700; line-height:24px;}
h3 .sub_tit {margin-top:10px; color:#888; font-size:14px; font-weight:400; line-height:20px;}
h3 + .tab_wrap {margin-top:-14px;}

section{margin:60px auto 0;}

section.category {margin-top:-20px;}
section.category ul {display:flex; flex-wrap:wrap;}
section.category dl {margin-top:30px;}
section.category dt {padding-right:25px; font-size:20px; font-weight:700;}
section.category dt + dd {margin-top:20px;}
section.category dd {flex:1;}
section.category ul {margin-top:-10px; margin-left:-10px;}
section.category li {margin-top:10px; margin-left:10px;}
section.category a {padding:12px 29px; font-size:12px; line-height:1.4em; background-color:#F8F8F8; border-radius:40px; display:block;}

section.best::v-deep .goods_list > li {width:33.3333%;}
section.best [class*="btn_"] em {color:#666; font-weight:400;}

section.banner li + li {margin-top:20px;}
section.banner li a {padding-top:41.791044%; background-color:#eee; overflow:hidden; position:relative; display:block;}
section.banner li a:before {background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)); content:''; position:absolute; top:0; right:0; bottom:0; left:0; z-index:1;}
section.banner .thumb {position:absolute; top:0; right:0; bottom:0; left:0;}
section.banner .cont {color:#fff; position:absolute; right:20px; bottom:16px; left:20px; z-index:1;}
section.banner .cont strong, section.banner .cont span{display: block;}
section.banner .cont strong{font-size: 18px;}
section.banner .cont span{margin-top:2px; font-size: 14px;}

section.new::v-deep .goods_list > li {width:50%; flex:0 auto;}
section.new::v-deep .goods_list .price {font-size:14px;}

/* section.reivew  */
section.review::v-deep .review_list {margin-top:-5px; margin-left:-5px; display:flex; flex-wrap:wrap;}
section.review::v-deep .review_list_item {width:50%; padding-top:5px; padding-left:5px;}
</style>