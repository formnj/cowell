<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">1:1 문의</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <h4>
                <strong class="title bold">1:1 문의 등록</strong>
            </h4>
            <div class="gray_box pale formal">
                <p>작성시 개인정보(전화번호, 환불계좌 등)는 기입하지 마세요. 문의하시기전에 FAQ를 참고해 주세요.</p>
                <p class="subscript">1:1 문의사항을 남겨주시면 성실하게 답변 드리겠습니다.</p>
            </div>

            <ul class="form_group">
                <li>
                    <p class="form_tit">문의유형</p>
                    <SelectBox :options="inquireType" model="최신순" :isChange="true"/>
                </li>
                <li>
                    <div class="flex_box">
                        <Inputs input_type="text" :placeholder="'C123454416341'" />
                        <a href="" class="btn_default btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='주문내역'">
                            <em>주문번호 선택</em>
                        </a>
                    </div>
                </li>
                <li>
                    <p class="form_tit">제목</p>
                    <Inputs input_type="text" :placeholder="'제목을 입력 하세요.'" />
                </li>
                <li>
                    <p class="form_tit">내용</p>
                    <label class="textarea_label" for="writeReason">
                        <textarea
                            id="writeReason"
                            class="textarea"
                            placeholder="문의 내용을 작성해 주세요."
                            v-model="message"
                            @keyup="onCountMessage"
                            :maxlength="maxCount"
                        ></textarea>
                    </label>
                    <div class="text_count">
                        <span class="count"><em>{{ count }}</em>/{{ maxCount }}</span>
                    </div>
                </li>
                <li>
                    <p class="form_tit">사진 첨부</p>
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
                    <div class="list_bullet">
                        <ul>
                            <li>10MB 이하의 jpg, png, gif 파일로 최대 3장까지 첨부 가능합니다.</li>
                            <li>삼품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전동의 없이 삭제될 수 있습니다.</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <p class="form_tit">답변 알림</p>
                    <div class="flex_box pt10">
                        <Inputs input_type="checkbox" required_txt="연락처" class="flex_box align_items_center mt10 mr20 mb10" />
                        <Inputs input_type="text" :placeholder="'010-1234-5678'" />
                    </div>
                    <div class="flex_box pt10">
                        <Inputs input_type="checkbox" required_txt="이메일" class="flex_box align_items_center mt10 mr20 mb10" />
                        <Inputs input_type="text" :placeholder="'jwyang@rianag.com'" />
                    </div>
                    <p class="info_explain">마이페이지 내 1:1문의 내역에서 답변을 확인할 수 있습니다.</p>
                </li>
            </ul>

            <div class="btnSection">
                <a href="/mo/" class="btn_cancel btn_big" style="height:50px;">
                    <em>취소</em>
                </a>
                <a href="/mo/MY_04_01_01" class="btn_default btn_big" style="height:50px;">
                    <em>등록</em>
                </a>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <Tabs tabClass="tab_type_05" :tab_item="tab_item_month" :tabidx="tabidx2" />

            <template v-for="item in 2">
                <div class="cart_top">
                    <Inputs input_type="radio" text="C20230215214834" />
                    <span class="sub">(2023-12-14)</span>
                </div>

            
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

                                <span class="badge b1">입금대기</span>
                                <!-- <span class="badge b2">결제완료</span> -->
                                <!-- <span class="badge b3">상품준비중</span> -->
                                <!-- <span class="badge b4">배송준비중</span> -->
                                <!-- <span class="badge b5">배송중</span> -->
                                <!-- <span class="badge b6">배송완료</span> -->
                                <!-- <span class="badge b7">구매확정</span> -->
                            </div>
                        </div>
                    </li>
                </ul>
            </template>

            <div class="btnSection mt50">
                <a href="" class="btn_cancel btn_big">
                    <em>취소</em>
                </a>
                <a href="" class="btn_default btn_big">
                    <em>선택</em>
                </a>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'
import SelectBox from '@/components/SelectBox.vue'
import ModalSkin from "@/components/ModalSkin";
import Tabs from "@/components/Tabs.vue";

export default {
    components: {
        Inputs,
        SelectBox,
        ModalSkin,
        Tabs,
    },
    data () {
        return {
            inquireType: [
                { val: "배송지연/불만", txt: "배송지연/불만" },
                { val: "반품문의", txt: "반품문의" },
                { val: "A/S문의", txt: "A/S문의" },
                { val: "환불문의", txt: "환불문의" },
                { val: "주문결제문의", txt: "주문결제문의" },
                { val: "회원정보문의", txt: "회원정보문의" },
                { val: "취소문의", txt: "취소문의" },
                { val: "교환문의", txt: "교환문의" },
                { val: "상품정보문의", txt: "상품정보문의" },
                { val: "기타문의", txt: "기타문의" },
            ],

            message: '',
            count: 0,
            maxCount: 100,

            modalTitle: '',
            modalContent: '',

            tabidx2: 0,
            tab_item_month: [
                { item: "1개월" },
                { item: "3개월" },
                { item: "6개월" },
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
        }
    },
    methods: {
        onCountMessage () {
          this.count = this.message.length
        },
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
    },
}
</script>

<style scoped>
.flex_box .btn_default.btn_mid{height:46px;margin-left:15px;}

.tab_wrap{margin-bottom:15px;}
.btnSection{margin-top:15px;}
::v-deep .tab_type_05 > li{width:calc((100% + 2px) / 3);}
::v-deep .tab_type_05 > li a{height:38px;line-height:38px !important;padding-bottom:0;}

.cart_top {padding:20px 0; margin-top:10px; display:flex; justify-content:space-between; align-items:center;}
.cart_top button + button {margin-left:18px;}
.cart_top::v-deep .check .label{line-height:22px;font-size:14px;color:#222;}
.cart_top .sub{margin-left:10px;margin-right:auto;font-size:12px;color:#666;}
.cart_top + .cart_list{}
.cart_list{border-top:1px solid #222;border-bottom:1px solid #eee;}
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
</style>