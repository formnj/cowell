<template>
    <div class="event_promotion">
        <h2>기획전</h2>

        <div class="detail_event">
            <div class="title_box">
                <div class="text">
                    <strong class="title">기획전 제목이 나옵니다. 기획전 제목이 나옵니다. 기획전 제목이 나옵니다.</strong>
                    <span class="period">2023. 02. 28 ~ 2023. 03. 10</span>
                </div>
                <div class="buttons">
                    <button type="button" class="button_share" @click.prevent="openModal('modalSkin'), modalTitle='공유하기', modalContent='ModalShare'">공유하기</button>
                </div>
            </div>

            <div class="content_box">
                <img src="https://m.cowellfashion.com/data/editor/7c0e7c6e2ad56bc2fe47ab230d3265671224171.jpg" alt="">
            </div>

            <Tabs tabClass="tab_type_04" :tab_item="tabItemCategory" :tabidx="tabidx" />

            <div class="section_group">
                <div class="section">
                    <h4>
                        <strong class="title">MD'S PICK</strong>
                        <SelectBox :options="sortPromotion" model="최신순" :isChange="true"/>
                    </h4>
                    <GoodsList :isWish="true" :item="goods_item[0].item" />
                </div>
            </div>

            <div class="section_group">
                <div class="section">
                    <h4>
                        <strong class="title">아우터</strong>
                        <SelectBox :options="sortPromotion" model="최신순" :isChange="true"/>
                    </h4>
                    <GoodsList :isWish="true" :item="goods_item[0].item" />
                </div>
            </div>
        </div>


        <ModalSkin :modalTitle="modalTitle">
            <!-- 공유하기 -->
            <ModalShare v-if="modalContent === 'ModalShare'"></ModalShare>
        </ModalSkin>

    </div>
</template>

<script>
import ModalSkin from '@/components/ModalSkin'
import Tabs from '@/components/Tabs.vue'
import SelectBox from '@/components/SelectBox.vue'
import GoodsList from '@/components/GoodsList.vue'

import ModalShare from '@/views/pc/PM/CW_PC_FO_PM_07_03_01' // 공유하기

export default {
    data () {
        return {
            modalTitle: '',
            modalContent: '',

            tabidx: 0,
            tabItemCategory: [
                { item: "MD'S PICK" },
                { item: "아우터" },
                { item: "니트" },
                { item: "티셔츠" },
                { item: "원피스" },
                { item: "팬츠" },
                { item: "팬츠" },
                { item: "팬츠" },
                { item: "팬츠" },
            ],

            sortPromotion: [
                { val: "value", txt: "판매 인기순" },
                { val: "value", txt: "신상품순" },
                { val: "value", txt: "높은가격순" },
                { val: "value", txt: "낮은가격순" },
                { val: "value", txt: "평점높은순" },
                { val: "value", txt: "찜인기순" },
            ],

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
        }
    },
    components: {
        ModalSkin,
        ModalShare,
        Tabs,
        SelectBox,
        GoodsList,
    },
    methods: {
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
    },
}
</script>

<style scoped>
.section_group + .section_group {margin-top:60px;}
.section_group .section h4 .title{font-size:30px;font-weight:700;}

.goods_list{margin-top:-40px;}
::v-deep .goods_list > li {width:20%; flex:0 auto;}

.tab_wrap{margin:80px 0;}
</style>