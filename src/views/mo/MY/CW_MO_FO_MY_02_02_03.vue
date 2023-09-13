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

                                        <span class="badge b3">교환접수</span>
                                        <!-- <span class="badge b6">교환완료</span> -->
                                        <!-- <span class="badge b3">반품접수</span> -->
                                        <!-- <span class="badge b6">반품완료</span> -->
                                    </div>
                                </div>
                                
                                <div class="linear_notice_box mt20">
                                    <div class="row cells">
                                        <strong>사은품 확인</strong>
                                        <p>사은품명 : 양말 / 사이즈 : Free / 수량 : 1</p>
                                    </div>
                                    <p class="paragraph pt10">반품 시 받으신 사은품도 반납하셔야 하며, 미반납시 환불 진행이 불가하니 유의하시기 바랍니다. <em class="em">*</em></p>
                                </div>
                            </li>
                        </ul>

                        <h4 class="pt20">
                            <strong class="title bold">반품 사유</strong>
                        </h4>
                        <p class="pt20 pb10">반품 수량</p>
                        <SelectBox :isChange="true" :options="optionsAmount"/>
                        <p class="pt20 pb10">반품 사유</p>
                        <SelectBox :isChange="true" :options="optionsReason"/>
                        <p class="pt20 pb10">상세 사유 입력</p>
                        <div class="text_count">
                            <span class="count"><em>{{ count }}</em>/{{ maxCount }}</span>
                        </div>
                        <label class="textarea_label" for="writeReason">
                            <textarea
                                id="writeReason"
                                class="textarea"
                                placeholder="100자 이내 입력"
                                v-model="message"
                                @keyup="onCountMessage"
                                :maxlength="maxCount"
                            ></textarea>
                        </label>
                        
                        <h4 class="pt20 pb10">
                            <strong class="title bold">사진 첨부</strong>
                        </h4>

                        <div class="image_upload_box">
                            <span class="image_upload">
                                <label for="imageUpload01" class="label">
                                <input type="file" id="imageUpload01">
                                <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image">
                                </label>
                                <button type="button" class="button_delete">삭제</button>
                            </span>
                            <span class="image_upload">
                                <label for="imageUpload02" class="label">
                                <input type="file" id="imageUpload02">
                                <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image">
                                </label>
                                <button type="button" class="button_delete">삭제</button>
                            </span>
                            <span class="image_upload">
                                <label for="imageUpload03" class="label">
                                <input type="file" id="imageUpload03">
                                <!-- <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image"> -->
                                </label>
                                <!-- <button type="button" class="button_delete">삭제</button> -->
                            </span>
                        </div>

                        <div class="list_bullet pb20">
                            <ul>
                                <li>10MB 이하의 jpg, png, gif 파일로 최대 3장까지 첨부 가능합니다.</li>
                                <li>삼품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전동의 없이 삭제될 수 있습니다.</li>
                                <li>불량배송/오배송/누락배송/변심 등 제품의 반품/교환 및 취소/환불이 필요하신 경우 제품 증빙사진을 첨부하셔야 보다 신속하게 처리가 진행됩니다.</li>
                            </ul>
                        </div>
                    </template>
                    <!-- //다수 상품 -->
                </div>
            </div>

            <div class="section_group">
                <div class="section">
                    <h4 class="pb10">
                        <strong class="title bold">무료반품쿠폰</strong>
                    </h4>
                    <SelectBox :isChange="true" :options="optionsCoupon"/>

                    <h4 class="pt20 pb10">
                        <strong class="title bold">수거지 안내</strong>
                    </h4>
                    <div class="linear_notice_box">
                        <div class="row cells no_bd">
                            <strong>수거주소</strong>
                            <p>[06168] 서울특별시 강남구 삼성로 152(삼성동)삼성동빌딩, 1000호</p>
                        </div>
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
                        </table>
                    </div>

                    <h4 class="pt20 pb10">
                        <strong class="title bold">추가 결제 예정 금액</strong>
                    </h4>
                    <div class="gray_box colorize">
                        <table>
                            <tbody>
                                <tr>
                                    <th>배송비</th>
                                    <td>4,000원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="linear_notice_box pt10 mb20">
                        <p class="paragraph">반품 시 배송비의 추가 결제가 필요한 경우 반드시 결제를 해야만 반품이 가능합니다.  <em class="em">*</em></p>
                    </div>

                    <div class="btnSection">
                        <a href="" class="btn_default btn_big">
                            <em>반품 신청</em>
                        </a>
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