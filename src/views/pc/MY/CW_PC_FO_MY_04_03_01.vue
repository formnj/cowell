<template>
    <div>
        <div class="content mypage">
            <div class="layout left">
                <div class="lnb">
                    <ul>
                        <li>
                            <a href="">나의 쇼핑</a>
                            <ul>
                                <li><a href="">주문/배송</a></li>
                                <li><a href="">반품/교환</a></li>
                                <li><a href="">취소/환불</a></li>
                                <li><a href="">선물함</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 혜택</a>
                            <ul>
                                <li><a href="">쿠폰 내역</a></li>
                                <li><a href="">포인트 내역</a></li>
                                <li><a href="">임직원 혜택</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 활동</a>
                            <ul>
                                <li><a href="">1:1 문의 </a></li>
                                <li><a href="">상품 문의</a></li>
                                <li><a href="">상품리뷰</a></li>
                                <li><a href="">관심 상품</a></li>
                                <li><a href="">관심 브랜드</a></li>
                                <li><a href="">최근 본 상품</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 정보</a>
                            <ul>
                                <li><a href="">회원정보 수정</a></li>
                                <li><a href="">간편로그인 연결</a></li>
                                <li><a href="">회원등급 안내</a></li>
                                <li><a href="">배송지 관리</a></li>
                                <li><a href="">회원탈퇴</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="layout right">
                <h2>상품리뷰</h2>

                <Tabs tabClass="tab_type_03 center" :tab_item="tab_item_category" class="center" :tabidx="tabidx" @change="change" />

                <div class="order_empty">
                    <p>작성가능한 상품리뷰가 없습니다.</p>
                </div>

                <div class="gray_box flex_box justify_between pt50 pb50 mb50">
                    <div class="my_summary pl30">
                        <strong class="name">적립 포인트 안내</strong>
                        <p class="pt10">상품 리뷰 적립은 구매 확정일로부터 90일 이내 작성시 적립</p>
                    </div>
                    <div class="count_box">
                        <div class="cell">
                            <span class="title">상품리뷰 + 만족도</span>
                            <em class="count">실결제금액의 1%</em>
                        </div>
                        <div class="cell">
                            <span class="title">상품리뷰 + 만족도 + 직접 찍은 상품이미지</span>
                            <em class="count">실결제금액의 3%</em>
                        </div>
                    </div>
                </div>

                <div class="list_product">
                    <ul>
                        <li>
                            <div class="card_product">
                                <div class="main">
                                    <a href="" class="product small">
                                        <span class="image">
                                            <img src="@/assets/images/pc/sample/imgreview01.png" alt="">
                                        </span>
                                        <div class="text">
                                            <strong class="brand">NOTICA</strong>
                                            <p class="name">이월 21 푸마 바디웨어 남성 액티브모션 바디웨어 드로즈(센라이트레드)</p>
                                            <span class="option">옵션 : BEIGE 66, FREE</span>
                                        </div>
                                    </a>
                                    <p>2023.04.14 까지</p>
                                    <div>
                                        <div class="point_explain">
                                            <span>적립포인트</span>
                                            최대 <strong>999</strong>원
                                        </div>
                                        
                                        <a href="" class="btn_confirm btn_big" style="width:165px;" @click.prevent="openModal('modalSkin'), modalTitle='상품리뷰 작성', modalContent='modalWriteReview'">
                                            <em>상품리뷰</em>
                                        </a>
                                    </div>
                                </div>
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

import WriteReview from '@/views/pc/GD/CW_PC_FO_GD_03_02_01' // 상품 리뷰 작성

export default {
    components: {
        Tabs,
        Inputs,
        ModalSkin,
        SelectBox,

        WriteReview,
    },
    data () {
        return {
            tabidx: 0,
            tab_item_category: [
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
::v-deep .tab_type_03{display:flex;margin-bottom:40px;justify-content:center;}
::v-deep .tab_type_03 > li {float:none;}
::v-deep .tab_type_03 > li + li {padding-left:100px;}
::v-deep .tab_type_03 > li a{font-size:24px;height:50px;line-height:50px;}

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