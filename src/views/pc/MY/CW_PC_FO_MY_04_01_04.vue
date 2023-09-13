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
                <h2>1:1 문의</h2>

                <div class="gray_box">
                    <p>1:1 문의사항을 남겨주시면 성실하게 답변 드리겠습니다.</p>
                    <p class="subscript">작성시 개인정보(전화번호, 환불계좌 등)는 기입하지 마세요. 문의하시기전에 FAQ를 참고해 주세요.</p>
                </div>
                <ul class="form_group">
                    <li class="flex_box justify_start">
                        <p class="form_tit" style="width:120px;">문의 유형</p>
                        <SelectBox :options="inquireType" model="최신순" :isChange="true"/>
                    </li>
                    <li class="flex_box justify_start">
                        <p class="form_tit" style="width:120px;">&nbsp;</p>
                        <Inputs input_type="text" style="width:460px;flex:0 1 auto;" />
                    </li>
                    <li class="flex_box justify_start">
                        <p class="form_tit" style="width:120px;">제목</p>
                        <Inputs input_type="text" :placeholder="'제목을 입력 하세요.'" style="width:460px;flex:0 1 auto;" />
                        <a href="" class="btn_default btn_mid ml20" @click.prevent="openModal('modalSkin'), modalTitle='주문내역', modalContent=''">
                            <em>주문번호 선택</em>
                        </a>
                    </li>
                    <li>
                        <label class="textarea_label" for="writeInquire">
                            <div class="notice">
                                문의 내용을 작성 해 주세요. <br>
                                오후 4시까지 문의는 당일 답변이 진행 됩니다. <br>
                                (영업일 기준) <br>
                                상품명과 내용을 상세히 기재 해 주시면 신속하게 답변해 드리겠습니다.
                            </div>
                            <textarea class="textarea" id="writeInquire" v-html="writeInquireContext"></textarea>
                        </label>
                    </li>
                    <li class="pt50">
                        <p class="form_tit">사진첨부</p>
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
                                <li>10MB 이하의 jpg, png, gif 로 최대 3장까지 첨부 가능합니다.</li>
                                <li>상품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전동의없이 삭제될수 있습니다.</li>
                            </ul>
                        </div>
                    </li>
                    <li class="pt50">
                        <p class="form_tit">답변 알림</p>
                        <div class="flex_box big_label justify_start">
                            <Inputs input_type="checkbox" id="" text="연락처" style="width:100px;" />
                            <Inputs input_type="text" id="" checked="checked" placeholder="010-1234-5678" style="width:250px;flex:0 1 auto;" />
                        </div>
                        <div class="flex_box big_label justify_start mt20">
                            <Inputs input_type="checkbox" id="" text="이메일" style="width:100px;" />
                            <Inputs input_type="text" id="" checked="checked" placeholder="jwyang@rianag.com" style="width:250px;flex:0 1 auto;" />
                        </div>
                        <p class="info_explain">마이페이지 내 1:1문의 내역에서 답변을 확인할 수 있습니다.</p>
                    </li>
                </ul>
                <div class="flex_box justify_end">
                    <a href="" class="btn_big btn_cancel" style="width:165px;">
                        <em>취소</em>
                    </a>
                    <a href="" class="btn_big btn_default ml10" style="width:165px;">
                        <em>등록</em>
                    </a>
                </div>
            </div>
        </div>

        <ModalSkin
            :modalTitle="modalTitle"
            :modalContent="modalContent"
        >
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
import ModalSkin from '@/components/ModalSkin'
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
                { val: "원단/컬러/디자인 문의", txt: "원단/컬러/디자인 문의" },
                { val: "코디 상품 문의", txt: "코디 상품 문의" },
                { val: "기타 상품 문의", txt: "기타 상품 문의" },
            ],
            writeInquireContext: `상품명 (옵션) : \r\n문의 내용 : `,
            modalTitle: '',
            modalContent: '',
            modalImage: '',

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
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        }
    },
}
</script>

<style scoped>
.flex_box .btn_default.btn_mid{height:46px;margin-left:15px;}

.tab_wrap{margin-bottom:15px;}
.btnSection{margin-top:15px;}
::v-deep .tab_type_05 > li{width:calc((100% - 20px) / 3);margin-left:10px;}
::v-deep .tab_type_05 > li:first-child{margin-left:0;}
::v-deep .tab_type_05 > li a{height:52px;line-height:52px !important;padding-bottom:0;}

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