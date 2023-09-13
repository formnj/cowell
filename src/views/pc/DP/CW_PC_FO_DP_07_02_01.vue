<template>
    <div>
        <div class="search_wrap">
            <div class="search_form">
                <Inputs input_type="text" id="아이디" value="" placeholder="검색어를 입력하세요." />
                <button class="btn_search">검색</button>
            </div>
        </div>
        <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" :tabidx="tabidx" @change="change" />

        <div class="result_none">
            <p><em>"@@$#%^"</em>에 대한 검색결과가 없습니다.</p>
        </div>

        <div class="content">
            <!-- best -->
            <section class="best">
                <h3>인기 추천 상품</h3>
                <swiper :options="defaultOptions">
                    <swiper-slide v-for="(item, index) in goods_item_best[0].item" :key="index">
                        <GoodsItem :item="item" :isWish=true />
                    </swiper-slide>
                    <div class="swiper-button-next" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-next"></div>
                </swiper>
            </section>
            <!-- //best -->
        </div>
    </div>
</template>

<script>
    import Inputs from "@/components/Inputs.vue";
    import Tabs from "@/components/Tabs.vue";
    import GoodsItem from "@/components/GoodsItem.vue";
    
    export default {
        name: 'App',
        components: {
            Inputs,
            Tabs,
            GoodsItem,
        },
        data() {
            return {
                tabidx: 0,
                tab_item_category: [
                    { item: "상품(999)" },
                    { item: "브랜드(999)" },
                    { item: "기획전(999)" },
                ],

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
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
.search_wrap{margin-top:120px;}
.searchModal {background-color:rgba(34,34,34,0.75); position:fixed; top:0; right:0; bottom:0; left:0; z-index:10;}
.searchModal .btn_close {width:40px; height:40px; font-size:0; position:absolute; top:40px; right:40px;}
.searchModal .btn_close:before, .searchModal .btn_close:after {width:46px; margin-top:-1px; margin-left:-4px; border-top:2px solid #222; content:''; position:absolute; top:50%; left:0; display:block; transform:rotate(45deg);}
.searchModal .btn_close:after {transform:rotate(135deg);}
.search_bg {width:100%; height:100%;}
.search_inner {width:100%; padding:105px 20px; background-color:rgba(255,255,255,0.98); position:absolute; top:0; left:0; z-index:11;}

.keyword_list {margin-top:40px; display:flex; justify-content:space-between;}
.keyword_list dl {width:390px;}
.keyword_list dl + dl {width:186px;}
.keyword_list dt {margin-bottom:20px; font-size:20px; font-weight:700; line-height:30px; display:flex; align-items:center; justify-content:space-between;}
.keyword_list dt * {color:#999; font-size:12px; font-weight:400; line-height:16px;}
.keyword_list dt em + em {margin-left:6px;}
.keyword_list dd {margin:14px 0; padding-right:38px; position:relative; display:flex; align-items:center; justify-content:space-between;}
.keyword_list dd em {color:#999;}
.keyword_list dd span {width:24px; margin-right:10px; display:inline-block;}
.keyword_list dd button {width:18px; height:18px; font-size:0; position:absolute; top:0; right:0;}
.keyword_list dd button:before, .keyword_list dd button:after {width:20px; margin-top:9px; margin-left:-1px; border-top:1px solid #999; content:''; position:absolute; top:0; left:0; display:block; transform:rotate(45deg);}
.keyword_list dd button:after {transform:rotate(135deg);}

.tab_wrap{width:800px;margin:60px auto;}
::v-deep .tab_wrap .tab_type_03{display:flex;justify-content:space-between;}
::v-deep .tab_wrap .tab_type_03:after{content:none;}
::v-deep .tab_wrap .tab_type_03 > li{float:none;}


.result_none{padding:120px 20px;text-align:center;}
.result_none > p{font-size:30px;}
.result_none > p > em{color:#00C294;}
</style>