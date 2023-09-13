<template>
    <div>
        <h2>
            <button class="back"></button>
            BEST
        </h2>
        <div class="content pt0">
            <div class="cate_top">
                <div class="sort_box">
                    <div>
                        <SelectBox :isChange="true" :options="optionsPeriod"/>
                        <SelectBox :isChange="true" :options="optionsCategory"/>
                        <button type="button" class="button_sort_count" @click.prevent="openModal('modalSkin'), modalTitle='베스트 집계 기준', modalContent='bestCount'">베스트 상품 집계 기준</button>
                    </div>
                </div>
            </div>

            <!-- content -->
            <GoodsList class="type_02" :isWish="true" :isCart="true" :item="goods_item[0].item" />
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
                optionsPeriod: [
                    { val: "value", txt: "1일" },
                    { val: "value", txt: "일주일" },
                    { val: "value", txt: "한달" },
                ],
                optionsCategory: [
                    { val: "value", txt: "레포츠의류" },
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
.cate_top .sort_box {margin-bottom:30px; padding-top:23px;}
.cate_top .sort_box > div {display:flex; flex-wrap:wrap;}
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

.cate_top .sort_box .button_sort_count{margin-left:auto;font-size:12px;color:#999;}
.cate_top .sort_box .button_sort_count:before{content:"";display:inline-block;width:14px;height:14px;margin:-2px 4px 0 0;vertical-align:middle;background:url("@/assets/images/mo/common/icon_exclamation_lightgray.png") 50% 50% / cover no-repeat;}

::v-deep .goods_list > li {width:50%; flex:0 auto;}
::v-deep .goods_list .price {font-size:14px;}
</style>
