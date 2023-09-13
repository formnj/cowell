<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">선물함</strong>
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
                                <a href="" class="btn_cancel btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCancel'">
                                    <em>선물취소</em>
                                </a>
                                <a href="" class="btn_default btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalReSend'">
                                    <em>재전송</em>
                                </a>
                            </div>
                        </li>
                    </ul>
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
                            <tfoot>
                                <tr>
                                    <th>최종 결제금액</th>
                                    <td>989,995,000원</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <h4 class="pt20">
                        <strong class="title bold">결제상세</strong>
                        <button type="button" class="btn_white btn_min">영수증 조회</button>
                    </h4>

                    <div class="gray_box colorize">
                        <table>
                            <tbody>
                                <tr>
                                    <th>네이버페이</th>
                                    <td>989,995,000원</td>
                                </tr>
                                <tr>
                                    <th>결제일시</th>
                                    <td>2023.12.14 23:30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <h4 class="pt20 pb20">
                        <strong class="title bold">환불계좌 정보</strong>
                        <button type="button" class="btn_white btn_min">환불계좌 변경</button>
                    </h4>

                    <div class="linear_notice_box">
                        <div class="row cells no_bd">
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

                    <div class="list_bullet no_bd">
                        <ul>
                            <li>주문 취소나 품절 시, 환불 받으실 계좌입니다.</li>
                            <li>환불계좌 정보를 변경하고 싶으신 경우, 주문완료 후 [마이페이지 > 환불계좌 관리]에서 수정이 가능합니다.</li>
                            <li>환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.</li>
                        </ul>
                    </div>

                    <h4 class="pt20">
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

                    <div class="btnSection">
                        <a href="" class="btn_default btn_big">
                            <em>취소 신청</em>
                        </a>
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

            <!-- 선물 취소 안내 -->
            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">선물 취소 안내</strong>
                    </h4>

                    <div class="list_bullet">
                        <strong class="title">취소 신청</strong>
                        <ul>
                            <li>선물 취소는 수령인이 선물받기를 신청하기 전까지 가능합니다.</li>
                            <li>취소 신청을 하셨더라도 신청 등록 전, 수령인이 선물받기 신청을 완료하였을 경우 취소가 불가능합니다.</li>
                            <li>주문 상품 중 일부만 취소하실 경우, 결제 수단에 따라 재결제가 필요할 수 있으며, 재결제 완료 후 나머지 상품에 대한 주문이 완료됩니다.</li>
                            <li>주문 취소 시 사용하신 쿠폰 적용 기준에 따라 복원이 되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle"  :modalContent="modalContent">
            <!-- 선물취소 -->
            <div v-if="modalContent == 'modalCancel'">
                <div class="align_center">
                    보내신 선물을 취소 처리하시겠습니까?
                </div>

                <div class="btnSection">
                    <a href="#none" class="btn_big btn_cancel"><em>취소</em></a>
                    <a href="#none" class="btn_big btn_default" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCancelConfirm'"><em>확인</em></a>
                </div>
            </div>

            <div v-if="modalContent == 'modalCancelConfirm'">
                <div class="align_center">
                    보내신 선물을 취소 처리하였습니다. <br><br>
                    결제수단에 따라 환불까지 <br>시일이 소요되오니 참고 부탁드립니다.
                </div>
                <div class="btnSection">
                    <a href="#none" class="btn_big btn_default"><em>확인</em></a>
                </div>
            </div>

            <!-- 재전송 -->
            <div v-if="modalContent == 'modalReSend'">
                <div class="align_center">
                    기입력하신 수령인의 휴대폰 번호로 <br>재전송하였습니다.
                </div>

                <div class="btnSection">
                    <a href="#none" class="btn_big btn_default"><em>닫기</em></a>
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

.list_bullet{padding-bottom:14px;margin-bottom:14px;border-bottom:1px solid #eee;}
.list_bullet.no_bd{border-bottom:none;}
.list_bullet > ul{padding-top:14px;}
.list_bullet > ul > li{color:#999;}
.list_bullet > ul > li:before{background-color:#999;}
.section_group .section h4 .title.icon.document:before{width:14px;height:14px;margin-top:-2px;}
</style>