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

        <!-- category -->
        <section class="category">
            <!-- <swiper :options="categoryOptions" class="main_category_swiper">
                <swiper-slide v-bind:class="{ current: category_item[0].main_cate[0].idx === index }" v-for="(i, index) in category_item[0].main_cate[0].item" :key="i.item">
                    <a href="/cowell/pc/DP_06_02_01">{{ i }}</a>
                </swiper-slide>
            </swiper> -->

            <!-- 23.04.20 수정 -->
            <div class="main_category_slide_wrap">
                <!-- <button type="button" class="button_slide left" @click.prevent="mainCategorySlideMoveRight">이전</button> -->
                <div class="main_category_slide" ref="mainCategorySlide" @scroll="handleMove">
                    <ul>
                        <li v-bind:class="{ current: category_item[0].main_cate[0].idx === index }" v-for="(i, index) in category_item[0].main_cate[0].item" :key="i.item">
                            <button type="button" class="slide_button">{{ i }}</button>
                        </li>
                    </ul>
                </div>
                <!-- <button type="button" class="button_slide right" @click.prevent="mainCategorySlideMoveLeft">다음</button> -->
            </div>
            <!-- 23.04.20 수정 -->

            <!--
            <ul class="main_category">
                <li v-bind:class="{ current: category_item[0].main_cate[0].idx === index }" v-for="(i, index) in category_item[0].main_cate[0].item" :key="i.item">
                    <a href="/cowell/pc/DP_06_02_01">{{ i }}</a>
                </li>
            </ul>
            -->

            <dl>
                <dt>MY BRAND</dt>
                <dd v-for="i in category_item[0].my_brand" :key="i.my_brand">
                    <ul>
                        <li v-for="i in category_item[0].my_brand[0].item" :key="i.item" @mouseover="addActive" @mouseleave="removeActive">
                            <router-link to="">{{ i }}</router-link>
                        </li>
                    </ul>
                </dd>
            </dl>

            <dl>
                <dt>HOT BRAND</dt>
                <dd v-for="i in category_item[0].hot_brand" :key="i.hot_brand">
                    <ul>
                        <li v-for="i in category_item[0].hot_brand[0].item" :key="i.item" @mouseover="addActive" @mouseleave="removeActive">
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
            <Tabs tabClass="tab_type_default" :tab_item="tab_item_best[0].tabItem" :tabidx="tab_item_best[0].idx" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" :key="index">
                    <GoodsItem :item="item" :isWish=true />
                </swiper-slide>
                <div class="swiper-button-next" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //best -->

        <!-- event -->
        <section class="event">
            <h3>Event</h3>

            <swiper :options="eventOptions">
                <swiper-slide v-for="(item, index) in event_item" :key="index">
                    <div class="item">
                        <span class="thumb">
                            <em><img :src="item.img" /></em>
                        </span>
                        <div class="cont">
                            <strong>{{ item.brand }}</strong>
                            <p v-html="item.explain"></p>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-button-next" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //event -->

        <!-- new -->
        <section class="new">
            <h3>BEST SELLER</h3>
            <Tabs tabClass="tab_type_default" :tab_item="tab_item_best[0].tabItem" :tabidx="tab_item_best[0].idx" />

            <swiper :options="defaultOptions">
                <swiper-slide v-for="(item, index) in goods_item_best[0].item" :key="index">
                    <GoodsItem :item="item" :isWish=true />
                </swiper-slide>
                <div class="swiper-button-next" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-next"></div>
            </swiper>
        </section>
        <!-- //new -->

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

    </div>
</template>

<script>
    import GoodsItem from "@/components/GoodsItem.vue";
    import Tabs from "@/components/Tabs.vue";
    import ReviewItem from "@/components/ReviewItem.vue";

    export default {
        name: 'App',
        components: {
            GoodsItem,
            Tabs,
            ReviewItem,
        },
        data() {
            return {
                /* sample data */
                Main_slide_item: [
                    {img: require("@/assets/images/pc/sample/cate_bg.png"), tit: "2022 시즌오프!", txt: "다가오는 봄날씨<br/> 신상을 겟할 수 있는 날은 단 하루!" },
                ],

                // 카테고리
                category_item: [
                    {
                        main_cate:[
                            {
                                idx: 3,
                                item: ['전체','아우터','티셔츠','바지','니트웨어','스커트','셋업','액티브 웨어','홈웨어','이너웨어','하이앤드','EXCLUSIVE','아우터','티셔츠','바지','니트웨어','스커트','셋업','액티브 웨어','홈웨어','이너웨어','하이앤드']
                            }
                        ],
                        my_brand:[
                            {
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
                    {
                        idx:2,
                        tabItem: [
                            {item:"언더웨어"},{item:"남성"},{item:"여성"},{item:"키즈"},{item:"아울렛"}
                        ],
                    }
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
                /* event */
                event_item:[
                    {
                        img:require('@/assets/images/pc/sample/sam_banner_01.png'),
                        brand:'adidas',
                        explain:'올 봄 신상품 출시<br/> 맨투맨, 조거바지, 원마일웨어'
                    },
                    {
                        img:require('@/assets/images/pc/sample/sam_banner_02.png'),
                        brand:'NOUTICA',
                        explain:'2023 F/F 시즌오프<br/> 다시 없을 기회 '
                    }
                    ,
                    {
                        img:require('@/assets/images/pc/sample/sam_banner_03.png'),
                        brand:'FIFA OLP',
                        explain:'마지막 추위를<br/> 따듯하게 감싸줄 푸퍼 '
                    }
                ],
                /* //event */
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
                eventOptions:{
                    loop:true,
                    slidesPerView: 4,
                    spaceBetween: 20,
                    centeredSlides: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                categoryOptions: {
                    slidesPerView: 'auto',
                },
                mainCategoryIndex: 0,
            };
        },
        methods: {
            addActive: function(event){
                event.currentTarget.classList.add('current')
            },
            removeActive: function(event){
                event.currentTarget.classList.remove('current')
            },
            mainCategorySlideMoveLeft () {
                let scLeft = this.$refs.mainCategorySlide.scrollLeft
                let scWidth = this.$refs.mainCategorySlide.scrollWidth
                let clWidth = this.$refs.mainCategorySlide.clientWidth

                if(scLeft + clWidth < scWidth - 10) {
                    this.mainCategoryIndex ++
                }
                this.executeMove()
            },
            mainCategorySlideMoveRight () {
                let scLeft = this.$refs.mainCategorySlide.scrollLeft
                let scWidth = this.$refs.mainCategorySlide.scrollWidth
                let clWidth = this.$refs.mainCategorySlide.clientWidth

                if (scLeft > 0 && this.mainCategoryIndex > 0) {
                    this.mainCategoryIndex --
                }
                this.executeMove()
            },
            executeMove () {
                let itemWidth = 0
                for (let i = 0; i < this.mainCategoryIndex; i++) {
                    itemWidth += this.$refs.mainCategorySlide.children[0].childNodes[i].getBoundingClientRect().width
                }

                this.$refs.mainCategorySlide.scrollTo({
                    left: itemWidth,
                    behavior: 'smooth',
                })
            },
        },
        mounted() {
            const slider = document.querySelectorAll('.main_category_slide')
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.forEach(function(t){
                t.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - t.offsetLeft;
                    scrollLeft = t.scrollLeft;
                });
                t.addEventListener('mouseleave', () => {
                    isDown = false;
                });
                t.addEventListener('mouseup', () => {
                    isDown = false;
                });
                t.addEventListener('mousemove', (e) => {
                    if(!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - t.offsetLeft;
                    const walk = (x - startX) * 1; //scroll-fast
                    t.scrollLeft = scrollLeft - walk;
                });
            })
        },
    }
</script>

<style scoped>
.main_visual {transition:background-image 0.2s;}
.main_visual .swiper-slide a {display:block;}
.main_visual .swiper-slide .thumb {padding-top:31.25%; position:relative;}
.main_visual .swiper-slide .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.main_visual .swiper-slide .thumb em * {width:100%; height:100%; object-fit:cover;}
.main_visual .swiper-slide .cont {padding:0 100px 100px 150px; color:#fff; position:absolute; display:flex; align-items:flex-end;}
.main_visual .swiper-slide-active .cont {top:0; bottom:0;}
.main_visual .swiper-slide .cont_inner {opacity:0; transition:0.35s opacity 0.75s;}
.main_visual .swiper-slide-active .cont_inner {opacity:1;}
.main_visual .swiper-slide .cont span, .main_visual .swiper-slide .cont strong{display: block;}
.main_visual .swiper-slide .cont span{margin-bottom:16px; font-size:30px; font-weight:500;}
.main_visual .swiper-slide .cont strong{font-size:60px;}
.main_visual .swiper-slide .cont p{margin-top:20px; font-size:24px; line-height:36px;}

.main_visual::v-deep .swiper-pagination {width:auto; padding:8px 20px; color:rgba(255,255,255,0.7); font-size:20px; font-weight:500; background-color:#000; border-radius:60px; position:absolute; right:110px; bottom:110px; left:auto; z-index:1;}
.main_visual::v-deep .swiper-pagination span:last-child {color:#fff;}

.swiper-button-next {right:0; transform:rotate(180deg);}
.swiper-button-prev {left:0;}

h3 {margin-bottom:40px; font-size:30px;}
h3 .sub_tit{margin-top:10px; color:#888; font-size:24px; font-weight:400; line-height:36px;}
h3 + .tab_wrap {margin-top:-20px;}

section{max-width:1619px; margin:100px auto 0;}

section.category {margin-top:0; text-align:center;}

section.category dl, section.category ul {display:flex; flex-wrap:wrap;}
section.category .main_category {margin-top:1px; margin-bottom:80px; display:inline-flex;}
section.category .main_category li {margin-top:-1px;}
section.category .main_category li + li {margin-left:-1px;}
section.category .main_category a {padding:11px 30px; font-size:16px; line-height:24px; border:1px solid #ddd; display:block;}
section.category .main_category .current a {border-color:#222;}

section.category .main_category_swiper{margin-bottom:80px;}
section.category .main_category_swiper .swiper-slide{width:auto;font-size:0;margin-left:-1px;}
section.category .main_category_swiper .swiper-slide:first-child{margin-left:0;}
section.category .main_category_swiper .swiper-slide a{display:block;line-height:24px;padding:11px 30px;font-size:16px;border:1px solid #ddd;}

section.category .main_category_slide_wrap{position:relative;padding:20px 0;margin-bottom:40px;}
section.category .main_category_slide_wrap .button_slide{position:absolute;top:28px;width:18px;height:18px;font-size:0;text-indent:-9999px;overflow:hidden;background:url("@/assets/images/pc/common/icon_link_arrow_black.png") 50% 50% / cover no-repeat;}
section.category .main_category_slide_wrap .button_slide.left{left:0;transform:rotate(180deg);}
section.category .main_category_slide_wrap .button_slide.right{right:0;}
section.category .main_category_slide{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;scrollbar-width:none;}
section.category .main_category_slide::-webkit-scrollbar{display:none;}
section.category .main_category_slide ul{width:100%;display:block;font-size:0;text-align:left;}
section.category .main_category_slide ul li{display:inline-block;padding:0 20px;text-align:center;vertical-align:top;}
section.category .main_category_slide ul li .slide_button{display:block;line-height:30px;padding:0 0 6px;font-size:20px;color:#999;border-bottom:4px solid #fff;}
section.category .main_category_slide ul li.current .slide_button{color:#222;border-color:#222;}


section.category dl + dl {margin-top:40px;}
section.category dt {width:159px; margin-top:12px; padding-right:25px; font-size:20px; font-weight:700;}
section.category dd {flex:1;}
section.category dd ul {margin-top:-10px; margin-left:-14px;}
section.category dd li {margin-top:10px; margin-left:14px;}
section.category dd a {padding:12px 26px; color:#666; font-size:16px; line-height:24px; background-color:#F8F8F8; border-radius:50px; display:block;}
section.category .current a {color:#fff; background-color:#222;}

section.best [class*='swiper-button-'], section.new [class*='swiper-button-'] {margin-top:-102px;}

section.event .swiper-container {height:490px; margin-top:-70px;}
section.event::v-deep .swiper-wrapper {align-items:flex-end;margin-left:-205px;}
section.event .swiper-slide {margin-bottom:20px; display:flex; align-items:flex-end; transition:width 0.25s;}
section.event .swiper-slide-active {width:800px !important; margin-bottom:0;}
section.event .swiper-slide .item {flex:1;}
section.event .swiper-slide .thumb {padding-top:91.025641%;}
section.event .swiper-slide-active .thumb {padding-top:61.25%;}

section.event .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
section.event .item {position:relative;}
section.event .cont {color:#fff; position:absolute; bottom:42px; left:50px;}
section.event .cont strong {font-size:24px; line-height:34px;}
section.event .cont p {margin-top:5px; font-size:18px; line-height:26px;}
</style>
