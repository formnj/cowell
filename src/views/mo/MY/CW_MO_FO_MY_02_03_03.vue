<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">취소/환불</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <div class="section_group pt0 pb0">
                <div class="section pt0">
                    <h4 class="pb10">
                        <strong class="title bold">2023.12.14 <span class="sub">/ 주문번호 2023012609093717645</span></strong>
                    </h4>

                    <div class="cart_top">
                        <Inputs input_type="checkbox" text="전체선택" />
                    </div>

                    <!-- 다수 상품 -->
                    <template v-for="item in 2">
                        <ul class="cart_list">
                            <li v-for="(item, index) in cart" :key="index" class="goods_item" :class="{'disabled' : item.status == 'soldout'}">
                                <div class="inner">
                                    <Inputs input_type="checkbox" id="아이디" />

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

                                        <span class="badge b2">결제완료</span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <p class="pt20 pb10">취소 사유</p>
                        <SelectBox :isChange="true" :options="optionsReason"/>
                        <div class="pb30"></div>
                    </template>
                    <!-- //다수 상품 -->
                </div>
            </div>

            <div class="section_group">
                <div class="section">
                    <h4 class="pt20 pb10">
                        <strong class="title bold">환불 계좌 정보</strong>
                    </h4>
                    <div class="linear_notice_box">
                        <div class="row cells">
                            <strong>은행</strong>
                            <p>한국은행</p>
                        </div>
                        <div class="row cells">
                            <strong>계좌번호</strong>
                            <p>123-45-67890</p>
                        </div>
                        <div class="row cells">
                            <strong>예금주</strong>
                            <p>양재원</p>
                        </div>
                    </div>

                    <div class="list_bullet pt10 pb20">
                        <ul>
                            <li>주문 취소나 품절 시, 환불 받으실 계좌입니다.</li>
                            <li>환불계좌 정보를 변경하고 싶으신 경우, 주문완료 후 [마이페이지 > 환불계좌 관리]에서 수정이 가능합니다.</li>
                            <li>환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.</li>
                        </ul>
                    </div>

                    <h4 class="pt20 pb10">
                        <strong class="title bold">환불 예정 금액</strong>
                    </h4>
                    <div class="gray_box colorize">
                        <table>
                            <tbody>
                                <tr>
                                    <th>결제금액</th>
                                    <td>999,999,999원</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>최종 환불 금액</th>
                                    <td>999,999,999원</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div class="btnSection">
                        <a href="" class="btn_default btn_big">
                            <em>취소 신청</em>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 취소/환불 안내 -->
            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">취소/환불 안내</strong>
                    </h4>

                    <div class="list_bullet no_bd">
                        <strong class="title">반품/교환신청</strong>
                        <ul>
                            <li>주문 취소는 상품 준비중 단계까지만 가능합니다. <br>(가능 단계 : 입금 대기, 결제 완료, 상품 준비중 단계)</li>
                            <li>배송 준비중 단계부터는 주문취소가 불가능하니 상품을 수령 후 반품으로 접수해 주시기 바랍니다.</li>
                            <li>주문 상품 중 일부만 취소하실 경우, 결제 수단에 따라 재결제가 필요할 수 있으며, 재결제 완료 후 나머지 상품에 대한 주문이 완료됩니다.</li>
                            <li>주문 취소 시 사용하신 쿠폰 적용 기준에 따라 복원이 되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SelectBox from "@/components/SelectBox.vue";
import Inputs from "@/components/Inputs.vue";

export default {
    components: {
        SelectBox,
        Inputs,
    },
    data () {
        return {
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
            optionsAmount: [
                { val: "value", txt: "1" },
                { val: "value", txt: "2" },
                { val: "value", txt: "3" },
            ],
            optionsReason: [
                { val: "value", txt: "단순 변심" },
                { val: "value", txt: "주문 실수" },
                { val: "value", txt: "제품 불량" },
                { val: "value", txt: "배송 문제" },
            ],
            optionsCoupon: [
                { val: "value", txt: "없음" },
                { val: "value", txt: "무료배송쿠폰 (D-7)" },
                { val: "value", txt: "무료배송쿠폰 (D-14)" },
            ],

            message: '',
            count: 0,
            maxCount: 100,
        }
    },
    methods: {
        onCountMessage () {
          this.count = this.message.length
        },
    },
}
</script>

<style scoped>

.cart_top {padding:20px 0; display:flex; justify-content:space-between;border-top:1px solid #222;}
.cart_top button + button {margin-left:18px;}
.cart_top::v-deep .check .label{line-height:22px;font-size:14px;color:#222;}
.cart_top + .cart_list{border-top:1px solid #ddd;;}
.cart_list{border-top:1px solid #222;border-bottom:1px solid #222;}
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

.linear_notice_box .row.cells{border-bottom:1px solid #eee;}

.text_count{margin-top:-35px;margin-bottom:15px;}

.textarea_label .textarea{min-height:50px;}
</style>