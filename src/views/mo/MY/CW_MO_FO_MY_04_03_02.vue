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
                </div>

                <div class="section">
                    <template v-for="item in 2">
                        <h4 class="pb10">
                            <strong class="title">2023.12.14</strong>
                        </h4>
    
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

                                <div class="gray_box pale formal">
                                    <div class="flex_box pb10">
                                        <ReviewScore :item="'1'" class="type_color" />
                                        <div class="buttons">
                                            <button type="button" @click.prevent="openModal('modalSkin'), modalTitle='상품리뷰 작성'">수정</button>
                                            <button type="button">삭제</button>
                                        </div>
                                    </div>
                                    <p class="subscript pb20">키 : 125cm, 평소 사이즈 : 130, 구매 사이즈 : 130</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th width="25%">사이즈</th>
                                                <td>잘 맞아요</td>
                                            </tr>
                                            <tr>
                                                <th>색상</th>
                                                <td>화면과 같아요</td>
                                            </tr>
                                            <tr>
                                                <th>착용감</th>
                                                <td>편해요</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p class="pt20">가격도 싸고, 디자인도 너무 이쁘네요. 이번 봄에 자주 입고 다닐거 같아요. 다음에 추가로 더 살께요. 수고하세요~</p>

                                <div class="images">
                                    <button type="button"><img src="@/assets/images/mo/sample/imgreview01.png" alt=""></button>
                                    <button type="button"><img src="@/assets/images/mo/sample/imgreview02.png" alt=""></button>
                                    <button type="button"><img src="@/assets/images/mo/sample/imgreview03.png" alt=""></button>
                                </div>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <WriteReview />
        </ModalSkin>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import ReviewScore from "@/components/ReviewScore.vue";
import Inputs from "@/components/Inputs.vue";
import ModalSkin from "@/components/ModalSkin.vue";
import SelectBox from '@/components/SelectBox.vue';

import WriteReview from '@/views/mo/GD/CW_MO_FO_GD_03_02_01' // 상품 리뷰 작성
export default {
    components: {
        Tabs,
        ReviewScore,
        Inputs,
        ModalSkin,
        SelectBox,

        WriteReview,
    },
    data () {
        return{
            tabidx: 1,
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
    },
}
</script>

<style scoped>
.tab_wrap{margin-bottom:15px;}
.btnSection{margin-top:15px;}
::v-deep .tab_type_05 > li a{height:38px;line-height:38px !important;padding-bottom:0;}

.cart_list{border-top:1px solid #222;}
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

.cart_list .images{padding-top:20px;font-size:0;}
.cart_list .images button{display:inline-block;width:calc((100% - 6px) / 3);margin:0 3px 3px 0;}
.cart_list .images button:nth-child(3n){margin-right:0;}
.cart_list .images button img{display:block;width:100%;height:108px;object-fit:cover;}

.flex_box .buttons{}
.flex_box .buttons button{margin-left:20px;font-size:14px;color:#222;text-decoration:underline;}

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