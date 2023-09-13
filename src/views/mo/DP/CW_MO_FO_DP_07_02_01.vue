<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon search" @click.prevent="openSearchModal"></button>
            </div>
            <strong class="title">검색결과</strong>
            <div class="area right">
                <button class="icon cart"></button>
            </div>
        </h2>

        <div class="content">
            <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" :tabidx="tabidx" @change="change" />

            <!-- category select -->
            <div class="cate_top">
                <div class="sort_box">
                    <div>
                        <!-- 선택된 필터값이 있는 경우 노출 -->
                        <button class="reset">초기화</button>
                        <!-- //선택된 필터값이 있는 경우 노출 -->
                        <button class="filter" @click.prevent="openModal('modalSkin'), modalTitle='필터', modalContent='FilterModal'">필터</button>
                        <SelectBox :isChange="true" :options="options"/>
                    </div>

                    <!-- 선택된 필터값 리스트 -->
                    <!-- <p class="select_filter">
                        !-- 색상 필터 --
                        <button class="type_color" v-for="(item, index) in filter[0].color" :key="index">
                            <em :style="{backgroundColor:item.bg}" :class="{'border': item.bg == '#fff'}"></em>
                        </button>
                        !-- 브랜드 필터 --
                        <button v-for="(item, index) in filter[0].brand" :key="index">{{ item.text }}</button>
                        !-- 사이즈 필터 --
                        <button v-for="(item, index) in filter[0].size" :key="index">{{ item.item }}</button>
                        !-- 가격 필터 --
                        <button v-for="(item, index) in filter[0].price" :key="index">{{ item.item }}</button>
                        !-- 할인 필터 --
                        <button v-for="(item, index) in filter[0].prdiscountice" :key="index">{{ item.item }}</button>
                    </p> -->
                    <!-- //선택된 필터값 리스트 -->
                </div>
            </div>
            <!-- //category select -->

            <div class="result_none">
                <p><em>"@@$#%^"</em>에 대한 검색결과가 없습니다.</p>
            </div>

            <!-- content -->
            <h3>추천 인기 상품</h3>
            <!-- 23.04.07 아이템 2개 초과 시 스와이프 -->
            <GoodsList class="type_02" :isWish="true" :isCart="true" :item="goods_item[0].item" v-if="goods_item[0].item.length < 3" />

            <swiper :options="swiperOptions" v-if="goods_item[0].item.length > 2">
                <swiper-slide v-for="(item, index) in goods_item[0].item" :key="index">
                    <GoodsItem class="type_02" :isWish="true" :isCart="true" :item="item" />
                </swiper-slide>
            </swiper>
            <!-- //23.04.07 아이템 2개 초과 시 스와이프 -->
            <!-- //content -->
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <CateModal v-if="modalContent == 'CateModal'" />
            <FilterModal v-if="modalContent == 'FilterModal'" />
            <!-- 카테고리 모달 버튼 -->
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'FilterModal'">
                <a href="#none" class="btn_big btn_cancel"><em>초기화</em></a>
                <a href="#none" class="btn_big btn_confirm"><em>적용</em></a>
            </div>
            <!-- //카테고리 모달 버튼 -->
        </ModalSkin>
    </div>
</template>

<script>
    import Tabs from "@/components/Tabs.vue";
    import SelectBox from "@/components/SelectBox.vue";
    import GoodsList from "@/components/GoodsList.vue";
    import GoodsItem from "@/components/GoodsItem.vue";

    import ModalSkin from "@/components/ModalSkin";
    import CateModal from "@/views/mo/DP/CW_MO_FO_DP_06_02_02";
    import FilterModal from "@/views/mo/DP/CW_MO_FO_DP_06_02_03";

    export default {
        name: 'App',
        components: {
            Tabs,
            SelectBox,
            GoodsList,
            GoodsItem,

            ModalSkin,
            CateModal,
            FilterModal,
        },
        data() {
            return {
                tabidx: 0,
                tab_item_category: [
                    { item: "상품(999)" },
                    { item: "브랜드(999)" },
                    { item: "기획전(999)" },
                ],

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

                swiperOptions:{
                    loop:true,
                    slidesPerView: 2,
                    spaceBetween: 5,
                    maxBackfaceHiddenSlides:6,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                modalTitle: '',
                modalContent: '',
            }
        },
        methods: {
            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },
        }
    }
</script>

<style scoped>
.cate_top {}
.cate_top .cate_box {padding:20px 0; border-bottom:1px solid #eee; display:flex; flex-wrap:wrap;}
.cate_top .cate_box button:after {width:7px; height:7px; margin-top:5px; margin-left:6px; border:1px solid #000; border-bottom:0; border-left:0; vertical-align:top; content:''; display:inline-block; transform:rotate(45deg);}
.cate_top .sort_box {margin-bottom:30px; padding-top:23px; padding-bottom:23px; border-bottom:1px solid #d9d9d9;}
.cate_top .sort_box > div {display:flex; flex-wrap:wrap; justify-content:flex-end;}
.cate_top .sort_box .reset {margin-right:10px;}
.cate_top .sort_box .reset:before {width:24px; height:24px; margin-top:-3px; margin-right:8px; background:url('@/assets/images/mo/sub/icon_reset.png') 50% no-repeat; background-size:24px auto; vertical-align:top; content:''; display:inline-block;}
.cate_top .sort_box .filter:before {width:24px; height:24px; margin-top:-3px; margin-right:8px; background:url('@/assets/images/mo/sub/icon_filter.png') 50% no-repeat; background-size:24px auto; vertical-align:top; content:''; display:inline-block;}
.cate_top .sort_box .select {display:flex;}
.cate_top .sort_box::v-deep .select select {height:auto; padding:0 33px 0 0; border:0;}
.cate_top .sort_box * + .select:before {height:15px; margin-top:2px; margin-left:10px; padding-left:10px; border-left:1px solid #d9d9d9; vertical-align:top; content:''; display:inline-block;}
.cate_top .sort_box::v-deep .select > div:after {width:7px; height:7px;}

.cate_top .sort_box .select_filter {margin-top:10px; margin-left:-14px; display:flex; flex-wrap:wrap;}
.cate_top .sort_box .select_filter button {margin-top:10px; margin-left:14px; padding:11px 56px 11px 22px; font-size:12px; background-color:#F8F8F8; border-radius:40px; position:relative;}
.cate_top .sort_box .select_filter button:before, .cate_top .sort_box .select_filter button:after {width:15px; border-top:1px solid #888; content:''; position:absolute; top:50%; right:23px; display:block;}
.cate_top .sort_box .select_filter button:before {transform:rotate(45deg);}
.cate_top .sort_box .select_filter button:after {transform:rotate(135deg);}
.cate_top .sort_box .select_filter button.type_color {padding-top:8px; padding-bottom:8px;}
.cate_top .sort_box .select_filter button.type_color em {width:22px; height:22px; border-radius:50%; display:block;}
.cate_top .sort_box .select_filter button.type_color em.border {border:1px solid #ddd;}

::v-deep .goods_list > li {width:50%; flex:0 auto;}
::v-deep .goods_list .price {font-size:14px;}

h3 {margin-top:30px; margin-bottom:20px; font-size:20px; font-weight:700; line-height:24px;}

.result_none{padding:60px 20px;text-align:center;}
.result_none > p{font-size:16px;}
.result_none > p > em{color:#00C294;}
</style>
