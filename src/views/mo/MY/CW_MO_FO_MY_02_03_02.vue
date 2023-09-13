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

                                    <span class="badge b3">교환접수</span>
                                    <!-- <span class="badge b6">교환완료</span> -->
                                    <!-- <span class="badge b3">반품접수</span> -->
                                    <!-- <span class="badge b6">반품완료</span> -->
                                </div>
                            </div>
                        </li>
                    </ul>

                    <h4 class="pt20">
                        <strong class="title bold">취소 사유</strong>
                    </h4>
                    <p class="pt10 pb20">주문 실수</p>

                    <h4>
                        <strong class="title bold">환불 완료 금액</strong>
                    </h4>
                    <div class="gray_box colorize mt10 mb20">
                        <table>
                            <tbody>
                                <tr>
                                    <th>결제금액</th>
                                    <td>989,995,000원</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>최종 환불 금액</th>
                                    <td>989,995,000원</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div class="btnSection">
                        <a href="" class="btn_default btn_big">
                            <em>확인</em>
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

        <ModalSkin :modalTitle="modalTitle"  :modalContent="modalContent">
            <!-- 구매확정 -->
            <div v-if="modalContent == 'modalPurchase'">
                <div class="align_center">
                    구매를 확정하시겠습니까? <br><br>
                    구매를 확정하시면 구매 포인트가 지급되며, <br>환불/교환이 불가능합니다.
                </div>

                <div class="btnSection">
                    <a href="#none" class="btn_big btn_cancel"><em>취소</em></a>
                    <a href="#none" class="btn_big btn_default" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalPurchaseConfirm'"><em>확인</em></a>
                </div>
            </div>

            <div v-if="modalContent == 'modalPurchaseConfirm'">
                <div class="align_center">
                    구매가 확정되었습니다.
                </div>
                <div class="btnSection">
                    <a href="#none" class="btn_big btn_default"><em>확인</em></a>
                </div>
            </div>

            <!-- 리뷰작성 -->
            <div v-if="modalContent == 'modalWriteReview'">
                <div class="align_center">
                    상품리뷰를 작성하시겠습니까? <br><br>
                    상품리뷰를 작성하시면 <br>구매확정이 되어 구매 포인트가 지급되며, <br>환불/교환이 불가능합니다.
                </div>

                <div class="btnSection">
                    <a href="#none" class="btn_big btn_cancel"><em>취소</em></a>
                    <a href="#none" class="btn_big btn_default" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalWriteReviewConfirm'"><em>확인</em></a>
                </div>
            </div>


            <div v-if="modalContent == 'modalWriteReviewConfirm'">
                <div class="align_center">
                    상품리뷰가 등록되어 <br>구매확정과 함께 구매 포인드가 지급되었습니다.
                </div>
                <div class="btnSection">
                    <a href="#none" class="btn_big btn_default"><em>확인</em></a>
                </div>
            </div>

        </ModalSkin>
    </div>
</template>

<script>
import ModalSkin from "@/components/ModalSkin";

export default {
    components: {
        ModalSkin,
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

.list_bullet{padding-bottom:14px;margin-bottom:14px;border-bottom:1px solid #eee;}
.list_bullet.no_bd{border-bottom:none;}
.list_bullet > ul{padding-top:14px;}
.list_bullet > ul > li{color:#999;}
.list_bullet > ul > li:before{background-color:#999;}
.section_group .section h4 .title.icon.document:before{width:14px;height:14px;margin-top:-2px;}
</style>