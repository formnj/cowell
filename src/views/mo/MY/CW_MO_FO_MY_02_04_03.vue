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

                                    <!-- <span class="badge b1">입금대기</span> -->
                                    <!-- <span class="badge b2">결제완료</span> -->
                                    <!-- <span class="badge b3">상품준비중</span> -->
                                    <span class="badge b4">배송준비중</span>
                                    <!-- <span class="badge b5">배송중</span> -->
                                    <!-- <span class="badge b6">배송완료</span> -->
                                    <!-- <span class="badge b7">구매확정</span> -->
                                </div>
                            </div>

                            <div class="btnSection mt20">
                                <a href="" class="btn_cancel btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCancel'">
                                    <em>선물거절</em>
                                </a>
                                <a href="" class="btn_default btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='배송지 입력', modalContent='modalAccept'">
                                    <em>선물수락</em>
                                </a>
                            </div>

                            <div class="btnSection mt20">
                                <a href="" class="btn_confirm02 btn_mid">
                                    <em>수령확정</em>
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
                </div>
            </div>

            <!-- 선물 배송 안내 -->
            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">선물 배송 안내</strong>
                    </h4>
                    <div class="list_bullet no_bd">
                        <ul>
                            <li>수락하신 선물은 취소/환불이 불가합니다.</li>
                            <li>수령하신 이후 반품/교환을 신청하여 주시기 바랍니다.</li>
                            <li>선물은 재고에 따라 품절될 수 있습니다.</li>
                        </ul>
                    </div>

                    <h4 class="pt20 pb20">
                        <strong class="title bold">선물 취소 안내</strong>
                    </h4>
                    <div class="list_bullet no_bd">
                        <ul>
                            <li>취소 완료 후 환불은 결제수단에 따라 3~7일 정도 환불처리가 소요될 수 있습니다.</li>
                        </ul>
                    </div>

                    <h4 class="pt20 pb20">
                        <strong class="title bold">선물 반려 안내</strong>
                    </h4>
                    <div class="list_bullet no_bd">
                        <ul>
                            <li>반려된 선물은 자동 취소되며, 결제수단에 따라 3~7일 정도 환불처리가 소요될 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin
            :modalTitle="modalTitle"
            :modalContent="modalContent"
            :modalClass="modalContent === 'modalAccept' ? 'full' : ''"
        >
            <!-- 선물거절 -->
            <div v-if="modalContent == 'modalCancel'">
                <div class="align_center">
                    받으신 선물을 거절하시겠습니까?
                </div>

                <div class="btnSection">
                    <a href="#none" class="btn_big btn_cancel"><em>취소</em></a>
                    <a href="#none" class="btn_big btn_default" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCancelConfirm'"><em>확인</em></a>
                </div>
            </div>

            <div v-if="modalContent == 'modalCancelConfirm'">
                <div class="align_center">
                    선물 거절이 처리되었습니다. <br><br>
                    선물하신 분에게 <br>
                    환불 처리가 될 예정입니다.
                </div>
                <div class="btnSection">
                    <a href="#none" class="btn_big btn_default"><em>확인</em></a>
                </div>
            </div>

            <!-- 선물수락 -->
            <div v-if="modalContent == 'modalAccept'">

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

            <!-- 선물수락 -->
            <div v-if="modalContent == 'modalAccept'">
                <div class="list_wrap">
                    <dt>배송지 정보</dt>
                    <dd class="order_info">
                        <ul class="form_group">
                            <li class="required">
                                <p class="form_tit">
                                    <em>수령인명</em>
                                </p>
                                <Inputs input_type="text" placeholder="받는분 성함을 입력하세요." />
                            </li>
                            <li class="required">
                                <p class="form_tit">
                                    <em>휴대폰 번호</em>
                                </p>
                                <Inputs input_type="text" placeholder="‘-’없이 숫자만 입력" />
                            </li>
                            <li class="required">
                                <p class="form_tit">
                                    <em>배송지 주소</em>
                                </p>
                                <div>
                                    <div class="multi_form">
                                        <div>
                                            <Inputs  input_type="text" placeholder="우편번호" err_text="에러문구" />
                                            <button class="btn_mid btn_default" @click.prevent="openModal('modalSkin'), modalTitle='주소검색', modalContent='address_search'"><em>주소검색</em></button>
                                        </div>
                                        <em>에러문구</em>
                                    </div>
                                    <Inputs input_type="text" placeholder="주소" />
                                    <Inputs input_type="text" placeholder="상세 주소를 입력해주세요." />
                                    <p class="notice_box">결제 후 배송지 수정이 불가능하니 한번 더 확인해주세요.</p>
                                </div>
                            </li>
                            <li>
                                <p class="form_tit">
                                    <em>배송 메시지 </em>
                                </p>
                                <div>
                                    <SelectBox :options="message" model="모델" />
                                    <!-- 직접입력 -->
                                    <Inputs class="mt10" input_type="text" placeholder="내용을 입력해 주세요." />
                                    <!-- //직접입력 -->
                                </div>
                            </li>
                        </ul>
                    </dd>
                </div>


                
                <div class="modal_bottom btnSection">
                    <a href="#none" class="btn_big btn_default"><em>확인</em></a>
                </div>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import ModalSkin from "@/components/ModalSkin";
import Inputs from "@/components/Inputs";

export default {
    components: {
        ModalSkin,
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
            modalTitle: '',
            modalContent: '',
            modalClass: '',
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


.order_info .txt_wrap + .txt_wrap {padding-top:10px;}
.order_info .number {font-size:18px;}
.order_info .required .form_tit em:after {margin-left:5px; color:#00C294; font-size:18px; vertical-align:top; content:'*'; display:inline-block;}
.order_info .form_tit + span {font-size:18px; display:block;}
.order_info .form_tit em span {color:#00C294;}

.order_info .form_tit + * {flex:1;}
.order_info .btn_mid {width:80px; padding:0 5px;}
.order_info .notice_box {margin-top:20px; background-color:#F8F8F8;}
.order_info .explain.ar {color:#888;}


.list_wrap {flex:1;}
.list_wrap dt {margin-bottom:10px; font-size:16px; font-weight:700; position:relative; display:flex; align-items:center; justify-content:space-between;}
.list_wrap dd + dt {margin-top:30px; padding-top:30px;}
.list_wrap dd + dt:before {border-top:4px solid #eee; content:''; position:absolute; top:0; right:-20px; left:-20px; display:block;}
.list_wrap dd + dt.refund {padding-top:0;}
.list_wrap dd + dt.refund:before {display:none;}
.list_wrap dt div {display:flex;}
.list_wrap dt .check {min-height:0; line-height:0;}
.list_wrap dt::v-deep .check .label {font-size:14px;}
/* .list_wrap dt::v-deep .check input[type='checkbox'] {opacity:0;} */
/* .list_wrap dt::v-deep .check input[type='checkbox'] + .label:before {width:20px; height:20px; border-radius:50%;} */
/* .list_wrap dt::v-deep .check input[type='checkbox']:checked + .label:after {width: 10px; height: 10px; background-color: #222; border:0; border-radius: 50%; top: 6px; left: 6px; transform:rotate(0);} */
.list_wrap dt button {height:38px; padding:0 20px; font-size:14px; border:1px solid #dddd;}
.list_wrap dt button + button {margin-left:12px;}
.list_wrap dt button.refresh {height:auto; padding:0; font-size:12px; border:0; position:relative; display:flex; align-items:center;}
.list_wrap dt button.refresh:before {width:22px; height:22px; border:1px solid #222; content:''; position:absolute; top:50%; right:0; transform:translateY(-50%);}
.list_wrap dt button.refresh:after {width:24px; height:24px; margin-left:6px; background:url('@/assets/images/mo/sub/icon_reset.png') 50% no-repeat; background-size:24px auto; content:''; display:inline-block;}
/* .list_wrap dt + p {margin-top:-10px; margin-bottom:20px;} */

</style>