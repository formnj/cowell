<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">반품/교환</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <div class="section_group pt0 pb0">
                <div class="section pt0 pb0">
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
                        <strong class="title bold">반품 사유</strong>
                    </h4>
                    <p class="pt10 pb20">주문 실수</p>

                    <h4>
                        <strong class="title bold">상세 사유 입력</strong>
                    </h4>
                    <p class="pt10 pb20">주문 실수 상세 사유입니다 작아요 커요 재주문 예정이예요 컬러가 맘에 안 들어요</p>

                    <h4>
                        <strong class="title bold">첨부 사진</strong>
                    </h4>
                    <div class="pt10 pb20">
                        <div class="image_attatch_box">
                            <span class="image">
                                <img src="@/assets/images/mo/sample/hot_thumb01-1.png" alt="">
                            </span>
                            <span class="image">
                                <img src="@/assets/images/mo/sample/hot_thumb01-2.png" alt="">
                            </span>
                            <span class="image">
                                <img src="@/assets/images/mo/sample/hot_thumb01.png" alt="">
                            </span>
                        </div>
                    </div>

                    <h4>
                        <strong class="title bold">환불 예정 금액</strong>
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

                    <h4>
                        <strong class="title bold">추가 결제 예정 금액</strong>
                    </h4>
                    <div class="gray_box colorize mt10">
                        <table>
                            <tbody>
                                <tr>
                                    <th>최종 환불 금액</th>
                                    <td>989,995,000원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="linear_notice_box pt10 mb20">
                        <p class="paragraph">반품 시 배송비의 추가 결제가 필요한 경우 반드시 결제를 해야만 반품이 가능합니다.  <em class="em">*</em></p>
                    </div>


                    <h4>
                        <strong class="title bold">총 환불 예정 금액</strong>
                    </h4>
                    <div class="gray_box colorize mt10 mb20">
                        <table>
                            <tfoot>
                                <tr>
                                    <th class="pt0">결제 금액</th>
                                    <td class="pt0">989,995,000원</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div class="btnSection">
                        <a href="" class="btn_cancel btn_big">
                            <em>반품철회</em>
                        </a>
                        <a href="" class="btn_default btn_big">
                            <em>확인</em>
                        </a>
                    </div>

                    <div class="linear_notice_box pt10">
                        <p class="paragraph">반품접수 전 반품철회가 가능합니다. <em class="em">*</em></p>
                    </div>
                </div>
            </div>

            <!-- 반품/교환 안내 -->
            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">반품/교환 안내</strong>
                    </h4>

                    <div class="list_bullet">
                        <strong class="title">반품/교환신청</strong>
                        <ul>
                            <li>반품/교환 신청이 접수되었습니다. 수거를 위해 택배기사님이 방문합니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">반품/교환접수</strong>
                        <ul>
                            <li>반품/교환 접수된 상품을 수거하여 물류센터로 이동 중입니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">반품확인중</strong>
                        <ul>
                            <li>반품 상품이 물류센터로 도착 후 상품 검수 진행 중입니다.</li>
                            <li>반품 사유가 상이하거나 부분 환불 시 재결제 비용이 발생할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">교환회수완료</strong>
                        <ul>
                            <li>교환 상품이 물류센터로 도착 후 상품 검수 진행 중입니다.</li>
                            <li>교환 상품 준비가 완료되어 곧 배송될 예정입니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">교환배송중</strong>
                        <ul>
                            <li>교환 상품의 배송이 시작되었습니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">반품/교환완료</strong>
                        <ul>
                            <li>반품/교환 처리가 완료되었습니다. 결제수단별 절차에 따라 반품 처리가 진행됩니다.</li>
                            <li>반품완료 후 결제수단에 따라 3~7일 정도 환불처리가 소요될 수 있습니다.</li>
                            <li>교환 상품의 배송이 완료되었습니다.</li>
                        </ul>
                    </div>
                </div>

                <div class="section pt0">
                    <div class="gray_box opacity mt0">
                        <h4>
                            <strong class="title icon document">반품/교환 유의사항 안내</strong>
                        </h4>
                        <p class="pt10">유의사항</p>
                        <p class="paragraph pt10">
                            반송지 주소는 [54334] 전라북도 김제시 용지면 부교리 57-4 코웰패션 물류센터입니다. <br> <br>
                            반품/교환은 상품 수령일로부터 7일 이내에서만 가능합니다. 단, 구매확정을 하셨을 경우에는 불가합니다. <br> <br>
                            교환 및 반품 시 코웰패션닷컴 홈페이지를 통해 접수하지 않은 상태에서 임의 발송을 하실 경우, 분실 발생 시 코웰패션닷컴에서는 책임을 지지 않습니다. <br> <br>
                            고객 변심/주문 실수에 의한 반품/교환은 고객님께서 반품비/교환비를 부담하셔야 합니다. <br> <br>
                            제품 하자 및 배송 문제의 경우 코웰패션닷컴에서 동일 제품으로 교환 또는 반품을 원하실 경우 확인 후 교환 및 환불을 해드립니다. <br> <br>
                            교환 배송비 6,000원, 반품 배송비 3,000원입니다. (단, 무료배송인 경우 반품 배송비 6,000원 발생) 제품 하자가 아닐 시에 배송비는 고객님께서 모두 부담합니다. <br> <br>
                            교환 상품 재고 소진 시 교환 배송비의 경우 반품 배송비로 전환되오니 참고 부탁드립니다. <br> <br>
                            부분 반품 시 반품 후 결제금액 중 사용하신 쿠폰 적용 기준에 해당되지 않을 경우에는 추가 금액이 발생할 수 있습니다. 결제수단에 따라 추가 금액을 차감한 후 환불 처리가 되거나 재결제가 필요할 수 있습니다. <br> <br>
                            주문 시 사용하신 쿠폰은 반품 후 적용 기준에 따라 복원되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다. <br> <br>
                        </p>
                        <p class="pt10">반품/교환 불가</p>
                        <p class="paragraph pt10">
                            구매확정 시 반품/교환은 불가합니다. <br> <br>
                            세트상품은 부분적으로 교환/반품이 불가합니다. <br> <br>
                            제품이 훼손되거나 상품의 가치가 상실된 경우에는 반품/교환이 불가능합니다. <br> <br>
                            제품의 택(Tag)이 훼손되거나 제거된 경우에는 반품/교환이 불가능합니다. <br> <br>
                            하자가 없는 새제품일 경우에도 세탁 및 수선을 하신 경우 반품/교환이 불가능합니다. <br> <br>
                            제품의 사이즈는 측정방법에 따라 약간의 오차가 발생될 수 있으며, 제품의 색상은 사용자 모니터의 설정과 사양에 따라 차이가 있을 수 있습니다. 이는 불량이 아니므로 반품/교환이 불가능합니다. <br> <br>
                            세탁 부주의로 인한 제품 손상은 반품/교환이 불가능하며 코웰패션닷컴에서는 어떠한 보상과 책임도 지지않으니, 구매 전 세탁방법을 반드시 확인하신 후 구매하여 주시기 바랍니다. <br> <br>
                        </p>
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