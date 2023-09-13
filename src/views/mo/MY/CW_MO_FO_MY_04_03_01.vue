<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">상품리뷰</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <Tabs tabClass="tab_type_03" :tab_item="tab_item_menu" :tabidx="tabidx" />

            <div class="section_group no_bd">
                <div class="section pb0">
                    <Tabs tabClass="tab_type_05" :tab_item="tab_item_month" :tabidx="tabidx2" />
                    <div class="order_empty">
                        <p>작성한 상품 리뷰가 없습니다.</p>
                    </div>
                </div>

                <div class="section pb0">
                    <h4>
                        <strong class="title bold">적립 포인트 안내</strong>
                    </h4>
                    <div class="point_info mt10">
                        <p>
                            <span>상품 리뷰 + 만족도</span>
                            <span>실결제금액의 1% 적립</span>
                        </p>
                        <p>
                            <span>상품 리뷰 + 만족도 + 직접 찍은 상품이미지</span>
                            <span>실결제금액의 3% 적립</span>
                        </p>
                        <p>상품 리뷰 적립은 구매 확정일로부터 90일 이내 작성시 적립</p>
                    </div>
                    <!-- <div class="gray_box pale mt10">
                        <table>
                            <tbody>
                                <tr>
                                    <th class="al">상품 리뷰 + 만족도</th>
                                    <td class="align_right">실결제금액의 1% 적립</td>
                                </tr>
                                <tr>
                                    <th class="al">상품 리뷰 + 만족도 + 직접 찍은 상품이미지</th>
                                    <td class="align_right">실결제금액의 3% 적립</td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div> -->
                </div>
                
                <div class="section">
                    <div class="cart_name">
                        <strong class="name">2023.12.14 까지</strong>
                        <div class="ml_auto">
                            <span class="sub">적립포인트</span>
                            <span>최대<strong class="em">320</strong>원</span>
                        </div>
                    </div>

                    <ul class="cart_list">
                        <li v-for="(item, index) in cart" :key="index" class="goods_item" :class="{'disabled' : item.status == 'soldout'}">
                            <div class="inner">
                                <span class="thumb">
                                    <em><img :src="item.img" /></em>
                                </span>

                                <div class="cont">
                                    <a hef="#none" class="title">
                                        <strong class="pl0">{{ item.brand }}</strong>
                                        <span>{{ item.tit }}</span>
                                        <p>
                                            <span v-for="(item, index) in cart[0].option" :key="index">{{ item }},</span> <span>수량 {{ item.quantity }}</span>
                                        </p>
                                    </a>

                                    <strong class="price">{{ item.price }}</strong>
                                </div>
                            </div>
                            <div class="btnSection">
                                <a href="" class="btn_black02 btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='상품리뷰 작성', modalContent='modalWriteReview'">
                                    <em>상품 리뷰 작성</em>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <!-- 상품 후기 작성 -->
            <WriteReview v-if="modalContent === 'modalWriteReview'" />
        </ModalSkin>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Inputs from "@/components/Inputs.vue";
import ModalSkin from "@/components/ModalSkin.vue";
import SelectBox from '@/components/SelectBox.vue';

import WriteReview from '@/views/mo/GD/CW_MO_FO_GD_03_02_01' // 상품 리뷰 작성

export default {
    components: {
        Tabs,
        Inputs,
        ModalSkin,
        SelectBox,

        WriteReview,
    },
    data () {
        return{
            tabidx: 0,
            tab_item_menu: [
                { item: "작성가능 리뷰(999)" },
                { item: "작성한 리뷰(999)" },
            ],

            tabidx2: 0,
            tab_item_month: [
                { item: "1개월" },
                { item: "3개월" },
                { item: "6개월" },
                { item: "1년" },
            ],

            cart:[
                {
                    img:require("@/assets/images/pc/sample/sam_goods02.png"),
                    brand: "Nike", tit:"제품명 길이 제한 없음. 제품명 길이 제한 없음.제품명 길이 제한 없음",
                    option: ['BEIGE', '66', 'FREE'],
                    quantity: '1',
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:2,
                    status:'soldout',
                },
                {
                    img:require("@/assets/images/pc/sample/sam_goods01.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:1,
                },
                {
                    img:require("@/assets/images/pc/sample/sam_goods03.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:2,
                    status:'soldout',
                },
            ],

            modalTitle: '',
            modalContent: '',

            starPoint: 0,

            message: '',
            count: 0,
            maxCount: 100,

            optionsHeight: [
                { val: "value", txt: "160 이하" },
                { val: "value", txt: "161~163" },
                { val: "value", txt: "164~166" },
                { val: "value", txt: "167~169" },
                { val: "value", txt: "170~172" },
                { val: "value", txt: "173~175" },
                { val: "value", txt: "176~178" },
                { val: "value", txt: "179~180" },
                { val: "value", txt: "181 이상" },
            ],
            optionsSizeUsual: [
                { val: "value", txt: "XS" },
                { val: "value", txt: "S" },
                { val: "value", txt: "M" },
                { val: "value", txt: "L" },
                { val: "value", txt: "XL" },
                { val: "value", txt: "XXL" },
            ],
            optionsSizePurchase: [
                { val: "value", txt: "XS" },
                { val: "value", txt: "S" },
                { val: "value", txt: "M" },
                { val: "value", txt: "L" },
                { val: "value", txt: "XL" },
                { val: "value", txt: "XXL" },
            ],
        }
    },
    methods: {
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
        checkStarPoint (index) {
            for (let i=0; i<5; i++) {
                if (i < index) {
                    this.$refs.starPointBox.children[i].children[0].checked = true
                } else {
                    this.$refs.starPointBox.children[i].children[0].checked = false
                }
            }
        },
        onCountMessage () {
            this.count = this.message.length
        },
    },
}
</script>

<style scoped>
.tab_wrap{margin-bottom:15px;}
.btnSection{margin-top:15px;}
::v-deep .tab_type_05 > li a{height:38px;line-height:38px !important;padding-bottom:0;}

.cart_name{display:flex;padding:20px 0 0;justify-content:space-between;}
.cart_name .name{font-size:14px;font-weight:400;color:#222;}
.cart_name .button_detail{font-size:14px;font-weight:400;color:#222;}
.cart_name .button_detail:after{content:"";display:inline-block;width:14px;height:14px;margin:-3px 0 0 7px;vertical-align:middle;background:url("@/assets/images/mo/common/icon_link_arrow_black.png") 50% 50% / cover no-repeat;}
.cart_name .sub{margin-right:6px;color:#999;}
.cart_name .em{margin-left:3px;color:#00C294;}

.cart_name + .cart_list{border-top:none;}
.cart_list {border-top:1px solid #ddd;}
.cart_list li {padding:20px 0;}
.cart_list li + li {border-top:1px solid #eee;}
.cart_list li .inner {position:relative; display:flex;}
.cart_list li .inner .btn_del {width:14px; height:14px; font-size:0; position:absolute; top:0; right:0;}
.cart_list li .inner .btn_del:before, .cart_list li .inner .btn_del:after {width:15px; margin-left:-7px; border-top:1px solid #222; content:''; position:absolute; top:50%; left:50%; display:block; transform:rotate(45deg);}
.cart_list li .inner .btn_del:after {transform:rotate(135deg);}
.cart_list .thumb {width:90px; height:120px; margin-right:18px; margin-left:2px; padding:0;}
.cart_list .cont {margin-top:0; position:relative; flex:1;}
.cart_list .cont .check.wish {top:2px; right:auto; left:0;}
.cart_list .cont .title strong {padding-left:18px; font-size:14px;}
.cart_list .cont .title span {height:auto; display:block;}
.cart_list .cont .title p {margin-top:9px; display:flex;}
.cart_list .cont .title p * {margin-top:0; margin-left:2px; color:#999; font-size:12px;}
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700; display:flex; align-items:flex-start;}
.cart_list .price del {margin-right:8px; color:#aaa; font-weight:400;}
.cart_list .badge {position:absolute;top:0;right:0;display:block;height:20px;line-height:20px;padding:0 4px;font-size:10px;color:#aaa;border:1px solid #ddd;background:#eee;}
.cart_list .badge.b1 {color:#aaa;border-color:#ddd;background-color:#eee;}/* 입금대기 */
.cart_list .badge.b2 {color:#666;border-color:#ddd;background-color:#fff;}/* 결제완료 */
.cart_list .badge.b3 {color:#fff;border-color:#aaa;background-color:#aaa;}/* 상품준비중 */
.cart_list .badge.b4 {color:#fff;border-color:#aaa;background-color:#aaa;}/* 배송준비중 */
.cart_list .badge.b5 {color:#fff;border-color:#aaa;background-color:#aaa;}/* 배송중 */
.cart_list .badge.b6 {color:#fff;border-color:#222;background-color:#222;}/* 배송완료 */
.cart_list .badge.b7 {color:#00C294;border-color:#00C294;background-color:#fff;}/* 구매확정 */

.cart_list .stock {margin-top:4px; font-size:12px; display:block;}
.cart_list .stock + .price {margin-top:0;}
.order_empty{border-top:none;margin-top:0;}
.gray_box td{vertical-align:middle;}

.review_radio{text-align:center;padding:30px 0;border-top:1px solid #eee;}
.review_radio > p{display:block;padding-bottom:10px;font-size:14px;color:#222;}
.review_radio > span{display:block;padding-top:10px;font-size:14px;color:#888;}

::v-deep.check input[type='radio']:checked + .label:after{background-color:#00C294;}
::v-deep.check input[type='radio']:checked + .label:before{border-color:#00C294;}

.inputs_wrap{padding:10px 0;}

.flex_box{align-items:center;}
.flex_box h5{font-size:12px;font-weight:400;color:#666;}
.flex_box .select{width:56%;}
</style>