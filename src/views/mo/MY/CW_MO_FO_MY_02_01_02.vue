<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">마이페이지</strong>
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

                    <div class="order_step_box bd">
                        <ol>
                            <li>
                                <em class="count">0</em>
                                <span class="title">입금<br>대기</span>
                            </li>
                            <li class="active">
                                <em class="count">1</em>
                                <span class="title">결제<br>완료</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">상품<br>준비중</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">배송<br>준비중</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">배송중</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">배송<br>완료</span>
                            </li>
                            <li class="active">
                                <em class="count">3</em>
                                <span class="title">구매<br>확정</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="section pb0">
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

                                    <span class="badge b1">입금대기</span>
                                    <!-- <span class="badge b2">결제완료</span> -->
                                    <!-- <span class="badge b3">상품준비중</span> -->
                                    <!-- <span class="badge b4">배송준비중</span> -->
                                    <!-- <span class="badge b5">배송중</span> -->
                                    <!-- <span class="badge b6">배송완료</span> -->
                                    <!-- <span class="badge b7">구매확정</span> -->
                                </div>
                            </div>
                            <div class="btnSection mt20">
                                <a href="" class="btn_cancel btn_mid">
                                    <em>주문취소</em>
                                </a>
                                <a href="" class="btn_default btn_mid">
                                    <em>주소변경</em>
                                </a>
                            </div>
                            <div class="btnSection mt20">
                                <a href="" class="btn_default btn_mid">
                                    <em>교환상세</em>
                                </a>
                            </div>
                            <div class="btnSection mt20">
                                <a href="" class="btn_confirm02 btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalPurchase'">
                                    <em>구매확정</em>
                                </a>
                                <a href="" class="btn_default btn_mid">
                                    <em>배송조회</em>
                                </a>
                            </div>
                            <div class="btnSection mt10">
                                <a href="" class="btn_cancel btn_mid">
                                    <em>반품신청</em>
                                </a>
                                <a href="" class="btn_cancel btn_mid">
                                    <em>교환신청</em>
                                </a>
                            </div>
                            <div class="btnSection mt10">
                                <a href="" class="btn_confirm btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalWriteReview'">
                                    <em>상품리뷰</em>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="linear_notice_box">
                        <p class="paragraph">상품리뷰 작성 시 포인트 지급 <em class="em">*</em></p>
                        <div class="row cells">
                            <strong>사은품</strong>
                            <p>사은품명 : 양말 / 사이즈 : Free / 수량 : 1</p>
                        </div>
                        <div class="row">
                            <p>30,000원 미만, 배송비 3,000원</p>
                        </div>
                        <div class="row">
                            <p>무료배송</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 결제정보 -->
            <div class="section_group">
                <div class="section">
                    <h4 class="pt20">
                        <strong class="title bold">결제정보</strong>
                    </h4>
                    
                    <div class="gray_box colorize">
                        <table>
                            <tfoot>
                                <tr>
                                    <th>최종 결제금액</th>
                                    <td>989,995,000원</td>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <th>총상품금액</th>
                                    <td>999,999,999원</td>
                                </tr>
                                <tr>
                                    <th>상품 할인금액</th>
                                    <td>9,999,999원</td>
                                </tr>
                                <tr>
                                    <th>배송비</th>
                                    <td>3,000원</td>
                                </tr>
                                <tr>
                                    <th>쿠폰할인금액</th>
                                    <td>300원</td>
                                </tr>
                                <tr>
                                    <th>포인트 사용금액</th>
                                    <td>700원</td>
                                </tr>
                                <tr>
                                    <th>할인코드</th>
                                    <td>1,000원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="pt20">
                        <strong class="title bold">결제상세</strong>
                        <!-- 23.04.12 네이버 결제 시 노출 -->
                        <a href="#none" class="btn_mid btn_gray02"><em>영수증 조회</em></a>
                        <!-- //23.04.12 네이버 결제 시 노출 -->
                    </h4>

                    <div class="gray_box colorize">
                        <table>
                            <tbody>
                                <!-- 입금의 경우 -->
                                <tr>
                                    <th>입금계좌</th>
                                    <td>국민은행 56569073052500 <br> 코웰패션</td>
                                </tr>
                                <tr>
                                    <th>입금예정금액</th>
                                    <td>989,995,000원</td>
                                </tr>
                                <tr>
                                    <th>입금기한</th>
                                    <td>2023.12.14 23:30</td>
                                </tr>
                                <!-- //입금의 경우 -->
                                <!-- 네이버페이의 경우 -->
                                <tr>
                                    <th>네이버페이</th>
                                    <td>30,000원</td>
                                </tr>
                                <tr>
                                    <th>결제일시</th>
                                    <td>2023.01.23 15:35</td>
                                </tr>
                                <!-- //네이버페이의 경우 -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 배송정보 -->
            <div class="section_group pb10">
                <div class="section">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">배송정보</strong>
                    </h4>

                    <div class="linear_notice_box">
                        <div class="row cells no_bd">
                            <strong>수령인</strong>
                            <p>양재원</p>
                        </div>
                        <div class="row cells">
                            <strong>휴대폰번호</strong>
                            <p>010-1234-5678</p>
                        </div>
                        <div class="row cells">
                            <strong>전화번호</strong>
                            <p>-</p>
                        </div>
                        <div class="row cells">
                            <strong>주소</strong>
                            <p>[06168] 서울특별시 강남구 삼성로 152(삼성동)삼성동빌딩, 1000호</p>
                        </div>
                        <div class="row cells">
                            <strong>배송메시지</strong>
                            <p>배송전, 연락 바랍니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 주문/배송 안내 -->
            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">주문/배송 안내</strong>
                    </h4>

                    <div class="list_bullet">
                        <strong class="title">입금대기</strong>
                        <ul>
                            <li>주문이 정상적으로 접수되었습니다.</li>
                            <li>결제방법을 가상계좌로 선택하신 경우, 정해진 기간 내에 입금이 완료되어야만 입금대기에서 결제완료 단계로 진행됩니다. 정해진 기간 경과 시, 주문은 자동 취소됩니다.</li>
                            <li>가상계좌의 경우, 입금대기 상태에서 부분취소가 불가능합니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">결제완료</strong>
                        <ul>
                            <li>주문 및 결제/입금 처리가 최종 완료 되었습니다.</li>
                            <li>주문 취소와 배송지 주소 변경이 가능합니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">상품준비중</strong>
                        <ul>
                            <li>발송 전까지만 주문 취소가 가능합니다.</li>
                            <li>주문 취소가 불가능할 경우 고객센터 (02-6390-8000, 내선번호 3번)로 연락주시기 바랍니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">배송준비중</strong>
                        <ul>
                            <li>상품의 재고 확인 후, 주문하신 상품의 택배 배송을 위해 준비하고 인계하는 단계입니다.</li>
                            <li>배송준비중 단계인 경우, 주문취소가 불가능합니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">배송중</strong>
                        <ul>
                            <li>택배사에 상품이 인계되어 고객님께 배송되는 있는 단계입니다.</li>
                            <li>도서/산간 지역을 제외한 지역의 경우, 1일~5일 정도 소요되며, 협력업체의 사정으로 배송이 지연될 경우도 있습니다.</li>
                            <li>지연될 경우에는 별도로 연락을 드리거나 상품 설명에 기재를 하고 있으니 구매 전 참고해 주세요.</li>
                        </ul>
                    </div>
                    <div class="list_bullet">
                        <strong class="title">배송완료</strong>
                        <ul>
                            <li>주문하신 상품을 고객님께 전달이 되어 배송이 완료된 상태입니다.</li>
                        </ul>
                    </div>
                    <div class="list_bullet no_bd">
                        <strong class="title">구매확정</strong>
                        <ul>
                            <li>배송완료후 7일 이후에는 구매확정으로 자동 변경됩니다.</li>
                        </ul>
                    </div>
                </div>

                <div class="section pt0">
                    <div class="gray_box opacity mt0">
                        <h4>
                            <strong class="title icon document">유의사항</strong>
                        </h4>
                        <p class="paragraph pt10">코웰패션닷컴 배송업체는 CJ택배 (1588-1255)입니다. <br><br>구매금액 30,000원 미만은 3,000원의 배송비가 부과되며, 도서산간 지역은 상품 특성에 따라 추가 배송료가 부가될 수 있습니다.</p>
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

.list_bullet{padding-bottom:14px;margin-bottom:14px;border-bottom:1px solid #eee;}
.list_bullet.no_bd{border-bottom:none;}
.list_bullet > ul{padding-top:14px;}
.list_bullet > ul > li{color:#999;}
.list_bullet > ul > li:before{background-color:#999;}
.section_group .section h4 .title.icon.document:before{width:14px;height:14px;margin-top:-2px;}
</style>