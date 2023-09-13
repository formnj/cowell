<template>
    <div>
        <h2 class="sticky" ref="header">
            <button class="back"></button>
            BEST
        </h2>

        <div class="content pt0">
            <Tabs tabClass="tab_type_default" tabType="slide" v-bind:tab_item="category_item[0].sub_cate[0].item" :tabidx="category_item[0].sub_cate[0].idx" />

            <div class="cate_top">
                <div class="cate_box">
                    <button @click.prevent="openModal('modalSkin'), modalTitle='푸마 스포츠', modalContent='CateModal'">여성 / 아우터</button>
                </div>
                <div class="sort_box">
                    <div>
                        <!-- 선택된 필터값이 있는 경우 노출 -->
                        <button class="reset">초기화</button>
                        <!-- //선택된 필터값이 있는 경우 노출 -->
                        <button class="filter" @click.prevent="openModal('modalSkin'), modalTitle='필터', modalContent='FilterModal'">필터</button>
                        <SelectBox :isChange="true" :options="options"/>
                    </div>
                </div>
            </div>

            <!-- 선택된 필터값 리스트 23.04.19 위치 수정 -->
            <p class="select_filter">
                <!-- 색상 필터 -->
                <button class="type_color" v-for="(item, index) in filter[0].color" :key="index">
                    <em :style="{backgroundColor:item.bg}" :class="{'border': item.bg == '#fff'}"></em>
                </button>
                <!-- 브랜드 필터 -->
                <button v-for="(item, index) in filter[0].brand" :key="index">{{ item.text }}</button>
                <!-- 사이즈 필터 -->
                <button v-for="(item, index) in filter[0].size" :key="index">{{ item.item }}</button>
                <!-- 가격 필터 -->
                <button v-for="(item, index) in filter[0].price" :key="index">{{ item.item }}</button>
                <!-- 할인 필터 -->
                <button v-for="(item, index) in filter[0].prdiscountice" :key="index">{{ item.item }}</button>
            </p>
            <!-- //선택된 필터값 리스트 -->

            <!-- content -->
            <GoodsList class="type_02 mt0" :isWish="true" :item="goods_item[0].item" />
            <!-- //content -->
            <div class="pagination_box innerfill">
                <button type="button" class="button_prev active">이전</button>
                <div class="pagination">
                    <span>350 / 9999</span>
                </div>
                <button type="button" class="button_next active">다음</button>
            </div>
        </div>

        <ModalSkin
            :modalTitle="modalTitle"
            :modalClass="
                modalContent === 'bestCount' ? 'bottom' : 'full'
            "
        >
            <CateModal v-if="modalContent == 'CateModal'" />
            <FilterModal v-if="modalContent == 'FilterModal'" />
            <!-- 카테고리 모달 버튼 -->
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'FilterModal'">
                <a href="#none" class="btn_big btn_cancel"><em>초기화</em></a>
                <a href="#none" class="btn_big btn_confirm"><em>적용</em></a>
            </div>
            <!-- //카테고리 모달 버튼 -->

            <div class="list_bullet" v-if="modalContent === 'bestCount'">
                <ul>
                    <li>1일 : 전일 판매 수량 기준</li>
                    <li>일주일 : 최근 7일간의 판매수량 기준</li>
                    <li>한달 : 최근 30일간의 판매수량 기준</li>
                    <li>당일 오전 1시기준 집계 및 업데이트가 됩니다.</li>
                </ul>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
    import SelectBox from "@/components/SelectBox.vue";
    import GoodsList from "@/components/GoodsList.vue";
    import Tabs from "@/components/Tabs.vue";

    import ModalSkin from "@/components/ModalSkin";
    import CateModal from "@/views/mo/DP/CW_MO_FO_DP_06_02_02";
    import FilterModal from "@/views/mo/DP/CW_MO_FO_DP_06_02_03";

    export default {
        name: 'App',
        components: {
            SelectBox,
            GoodsList,
            Tabs,

            ModalSkin,
            CateModal,
            FilterModal,
        },
        data() {
            return {
                options: [
                    { val: "value", txt: "판매 인기순" },
                    { val: "value", txt: "신상품순" },
                    { val: "value", txt: "높은가격순" },
                    { val: "value", txt: "낮은가격순" },
                    { val: "value", txt: "평점높은순" },
                    { val: "value", txt: "찜인기순" },
                ],
                /* goods */
                goods_item: [
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
                                    ],
                                },
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods01.png"),
                                brand: "Nike", tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",
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
                                    ],
                                },
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                    ],
                                },
                            },
                            {
                                img:require("@/assets/images/pc/sample/sam_goods02.png"),
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
                            {
                                img:require("@/assets/images/pc/sample/sam_goods03.png"),
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
                                img:require("@/assets/images/pc/sample/sam_goods01.png"),
                                brand: "Nike", tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",
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
                                img:require("@/assets/images/pc/sample/sam_goods02.png"),
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
                            {
                                img:require("@/assets/images/pc/sample/sam_goods03.png"),
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
                        ]
                    }
                ],
                /* //goods */

                /* 선택한 필터 */
                filter:[
                    {
                        brand:[
                            {text:'아디다스 스포츠'},
                            {text:'켈빈 클라인'},
                            {text:'노티카'},
                            {text:'바나나 리퍼블릭'},
                            {text:'푸마'},
                        ],
                        color:[
                            {bg:'#fff'},
                            {bg:'#FEDCDC'},
                            {bg:'#FCB89A'},
                            {bg:'#D9EA71'},
                        ],
                        size:[
                            {item:'M'},
                            {item:'XL'},
                            {item:'XXL'},
                        ],
                        price:[
                            {item:'150,000~200,000원'},
                            {item:'200,000원 이상'},
                        ],
                        discount :[
                            {item:'1~15%'},
                            {item:'15~30%'},
                            {item:'30~50%'},
                            {item:'50% 이상'},
                        ]
                    }
                ],
                /* //선택한 필터 */

                // 카테고리
                category_item: [
                    {
                        sub_cate:[
                            {
                                idx: 1,
                                item: [{item:'전체'},{item:'아우터'},{item:'상의'},{item:'상의'},{item:'세트웨어'},{item:'패션잡화'}]
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
                Main_slide_item: [
                    {img: require("@/assets/images/pc/sample/sam_video.mp4"), type:'video', brand: "pc-Ourplace", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                    {img: require("@/assets/images/mo/sample/sam_visual02.png"), type:'img', brand: "Canada Goose", tit: "Keep Me Warm", txt: "칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템" },
                    {img: require("@/assets/images/mo/sample/sam_visual03.jpg"), type:'img', brand: "Kappa", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                ],

                modalTitle: '',
                modalContent: '',
                
            }
        },
        mounted(){
            /* 23.04.19 추가 탭 고정 */
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
                if (window.scrollY < this.lastScrollY) {
                    let el_01 = document.querySelector('.tab_wrap').offsetHeight,
                        el_02 = document.querySelector('.cate_top').offsetHeight + 30,
                        total_p = el_01 + el_02;
                        
                    document.querySelector('.tab_wrap').classList.add('fixed')
                    document.querySelector('.cate_top').classList.add('fixed')
                    document.querySelector('.content').style = 'padding-top:'+(total_p)+'px !important'
                } else {
                    document.querySelector('.tab_wrap').classList.remove('fixed')
                    document.querySelector('.cate_top').classList.remove('fixed')
                    document.querySelector('.content').style.removeProperty('padding')
                }

                if (window.scrollY == 0){
                    document.querySelector('.tab_wrap').classList.remove('fixed')
                    document.querySelector('.cate_top').classList.remove('fixed')
                    document.querySelector('.content').style.removeProperty('padding')                    
                }

                this.lastScrollY = window.scrollY
            },
        }
    }
</script>

<style scoped>
/* 23.04.19 추가 탭 고정 */
.cate_top.fixed {width:100%; padding:0 20px; background-color:#fff; position:fixed; top:133px; left:0; z-index:2;}
.cate_top.fixed .sort_box {margin-bottom:0;}
/* //23.04.19 추가 탭 고정 */

.cate_top {}
.cate_top .cate_box {padding:20px 0; border-bottom:1px solid #eee; display:flex; flex-wrap:wrap;}
.cate_top .cate_box button:after {width:7px; height:7px; margin-top:5px; margin-left:6px; border:1px solid #000; border-bottom:0; border-left:0; vertical-align:top; content:''; display:inline-block; transform:rotate(45deg);}
.cate_top .sort_box {margin-bottom:30px; padding:20px 0;}
.cate_top .sort_box > div {display:flex; flex-wrap:wrap;}
.cate_top .sort_box .reset {margin-right:10px;}
.cate_top .sort_box .reset:before {width:24px; height:24px; margin-top:-3px; margin-right:8px; background:url('@/assets/images/mo/sub/icon_reset.png') 50% no-repeat; background-size:24px auto; vertical-align:top; content:''; display:inline-block;}
.cate_top .sort_box .filter:before {width:24px; height:24px; margin-top:-3px; margin-right:8px; background:url('@/assets/images/mo/sub/icon_filter.png') 50% no-repeat; background-size:24px auto; vertical-align:top; content:''; display:inline-block;}
.cate_top .sort_box .select {display:flex;}
.cate_top .sort_box::v-deep .select select {height:auto; padding:0 33px 0 0; border:0;}
.cate_top .sort_box * + .select:before {height:15px; margin-top:2px; margin-left:10px; padding-left:10px; border-left:1px solid #d9d9d9; vertical-align:top; content:''; display:inline-block;}
.cate_top .sort_box::v-deep .select > div:after {width:7px; height:7px;}

.select_filter {margin-top:-30px; margin-left:-14px; display:flex; flex-wrap:wrap;}
.select_filter button {margin-top:10px; margin-left:14px; padding:11px 56px 11px 22px; font-size:12px; background-color:#F8F8F8; border-radius:40px; position:relative;}
.select_filter button:before, .select_filter button:after {width:15px; border-top:1px solid #888; content:''; position:absolute; top:50%; right:23px; display:block;}
.select_filter button:before {transform:rotate(45deg);}
.select_filter button:after {transform:rotate(135deg);}
.select_filter button.type_color {padding-top:8px; padding-bottom:8px;}
.select_filter button.type_color em {width:22px; height:22px; border-radius:50%; display:block;}
.select_filter button.type_color em.border {border:1px solid #ddd;}

.cate_top .sort_box .button_sort_count{margin-left:auto;font-size:12px;color:#999;}
.cate_top .sort_box .button_sort_count:before{content:"";display:inline-block;width:14px;height:14px;margin:-2px 4px 0 0;vertical-align:middle;background:url("@/assets/images/mo/common/icon_exclamation_lightgray.png") 50% 50% / cover no-repeat;}

::v-deep .goods_list > li {width:50%; flex:0 auto;}
::v-deep .goods_list .price {font-size:14px;}

.main_visual {transition:background-image 0.2s;}
.main_visual .swiper-slide a:after {background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.49)); content:''; content:''; position:absolute; top:0; right:0; bottom:0; z-index:1; left:0; display:block;}
.main_visual .swiper-slide a {display:block;}
.main_visual .swiper-slide .thumb {padding-top:85.4%; position:relative;}
.main_visual .swiper-slide .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.main_visual .swiper-slide .thumb em * {width:100%; height:100%; object-fit:cover;}
.main_visual .swiper-slide .cont {color:#fff; position:absolute; right:0; bottom:0; left:0; z-index:2;text-align:center;}
.main_visual .swiper-slide .cont_inner {padding:30px 20px 30px 20px;}
.main_visual .swiper-slide .cont span, .main_visual .swiper-slide .cont strong{display: block;}
.main_visual .swiper-slide .cont span{margin-bottom:4px; font-size:18px; font-weight:500;}
.main_visual .swiper-slide .cont strong{font-size:30px;}
.main_visual .swiper-slide .cont p{margin-top:14px; font-size:14px; line-height:20px;}

.main_visual::v-deep .swiper-pagination {width:auto; padding:5px 12px 4px; color:rgba(255,255,255,0.5); font-size:12px; background-color:#000; border-radius:60px; position:absolute; bottom:30px; right:20px; left:auto; z-index:1;}
.main_visual::v-deep .swiper-pagination span:first-child {color:#fff;}

/* swiper navigation style */
[class*='swiper-button-'] {width:50px; height:50px; margin-top:-25px; background-image:none; background-color:rgba(34,34,34,0.8); display:none;}
[class*='swiper-button-']:before {width:18px; height:18px; margin-top:-10px; margin-left:-6px; border:1px solid #fff; border-top:0; border-right:0; content:''; position:absolute; top:50%; left:50%; transform:rotate(45deg);}
.swiper-button-next {right:0; transform:rotate(180deg);}
.swiper-button-prev {left:0;}
</style>
