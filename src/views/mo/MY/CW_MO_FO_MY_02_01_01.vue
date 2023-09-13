<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">주문/배송</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>
        
        <div class="content pt0">
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_menu" :tabidx="tabidx" />

            <div class="section_group">
                <div class="section pb0">
                    <Tabs tabClass="tab_type_05" :tab_item="tab_item_month" :tabidx="tabidx2" />

                    <div class="multi_form">
                        <div>
                            <label for="calendarStart" class="input_calendar" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCalendar'">
                                <input type="text" id="calendarStart" readonly="readonly" value="2023-12-14">
                            </label>
                            <span>~</span>
                            <label for="calendarEnd" class="input_calendar" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCalendar'">
                                <input type="text" id="calendarEnd" readonly="readonly" value="2023-12-14">
                            </label>
                        </div>
                        <em>에러문구</em>
                    </div>

                    <div class="btnSection">
                        <a href="" class="btn_default btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalPeriod'">
                            <em>조회</em>
                        </a>
                    </div>
                </div>

                <div class="section">
                    <div class="order_empty">
                        <p>기간 내 주문하신 상품 내역이 없습니다.</p>
                    </div>

                    <div class="cart_name">
                        <strong class="name">2023.12.14</strong>
                        <button type="button" class="button_detail">상세보기</button>
                    </div>

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
                            <div class="btnSection">
                                <a href="" class="btn_black02 btn_mid">
                                    <em>구매확정</em>
                                </a>
                                <a href="" class="btn_default btn_mid">
                                    <em>배송조회</em>
                                </a>
                            </div>
                            <div class="btnSection">
                                <a href="" class="btn_black02 btn_mid">
                                    <em>재구매</em>
                                </a>
                                <a href="" class="btn_confirm btn_mid">
                                    <em>상품리뷰</em>
                                </a>
                            </div>
                        </li>
                    </ul>
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
        
        <ModalSkin :modalTitle="modalTitle">
            <div v-if="modalContent === 'modalCalendar'">
                <div class="calendar_box">
                    <div class="calendar_head">
                        <button type="button" class="button_prev year">이전해</button>
                        <button type="button" class="button_prev month">이전달</button>
                        <strong class="title">2023.12</strong>
                        <button type="button" class="button_next month" disabled>다음달</button>
                        <button type="button" class="button_next year" disabled>다음해</button>
                    </div>
                    <div class="calendar_body">
                        <div class="row week">
                            <span>일</span>
                            <span>월</span>
                            <span>화</span>
                            <span>수</span>
                            <span>목</span>
                            <span>금</span>
                            <span>토</span>
                        </div>
                        <div class="row days">
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day">1</button>
                            <button type="button" class="day">2</button>
                        </div>
                        <div class="row days">
                            <button type="button" class="day">3</button>
                            <button type="button" class="day">4</button>
                            <button type="button" class="day">5</button>
                            <button type="button" class="day">6</button>
                            <button type="button" class="day">7</button>
                            <button type="button" class="day">8</button>
                            <button type="button" class="day">9</button>
                        </div>
                        <div class="row days">
                            <button type="button" class="day">10</button>
                            <button type="button" class="day">11</button>
                            <button type="button" class="day">12</button>
                            <button type="button" class="day">13</button>
                            <button type="button" class="day today">14</button>
                            <button type="button" class="day">15</button>
                            <button type="button" class="day">16</button>
                        </div>
                        <div class="row days">
                            <button type="button" class="day">17</button>
                            <button type="button" class="day">18</button>
                            <button type="button" class="day">19</button>
                            <button type="button" class="day">20</button>
                            <button type="button" class="day">21</button>
                            <button type="button" class="day">22</button>
                            <button type="button" class="day">23</button>
                        </div>
                        <div class="row days">
                            <button type="button" class="day">24</button>
                            <button type="button" class="day">25</button>
                            <button type="button" class="day">26</button>
                            <button type="button" class="day">27</button>
                            <button type="button" class="day">28</button>
                            <button type="button" class="day">29</button>
                            <button type="button" class="day">30</button>
                        </div>
                        <div class="row days">
                            <button type="button" class="day">31</button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                            <button type="button" class="day"></button>
                        </div>
                    </div>
                </div>
                <div class="btnSection">
                    <a data-v-79af41a1="" href="" class="btn_default btn_big"><em data-v-79af41a1="">확인</em></a>
                </div>
            </div>
            <div v-if="modalContent === 'modalPeriod'">
                <p class="align_center pt20 pb20">조회 가능 기간이 아닙니다. <br>다시 확인 부탁드립니다.</p>
                <div class="btnSection">
                    <a data-v-79af41a1="" href="" class="btn_default btn_big"><em data-v-79af41a1="">확인</em></a>
                </div>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Inputs from "@/components/Inputs.vue";
import ModalSkin from "@/components/ModalSkin";

export default {
    components: {
        Tabs,
        Inputs,
        ModalSkin,
    },
    data () {
        return {
            /* 카테고리 텝 */
            tabidx: 1,
            tab_item_menu: [
                { item: "마이페이지" },
                { item: "주문/배송" },
                { item: "반품/교환" },
                { item: "취소/환불" },
                { item: "선물함" },
                { item: "1:1문의" },
                { item: "상품문의" },
                { item: "구매후기" },
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
                {
                    img:require("@/assets/images/pc/sample/sam_goods01.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:1,
                },
                {
                    img:require("@/assets/images/pc/sample/sam_goods03.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
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
    }
}
</script>

<style scoped>
.tab_wrap{margin-bottom:15px;}
.btnSection{margin-top:15px;}
::v-deep .tab_type_05 > li a{height:38px;line-height:38px !important;padding-bottom:0;}

.cart_name{display:flex;padding:20px 0 14px;border-bottom:1px solid #222;justify-content:space-between;}
.cart_name .name{font-size:14px;font-weight:400;color:#222;}
.cart_name .button_detail{font-size:14px;font-weight:400;color:#222;}
.cart_name .button_detail:after{content:"";display:inline-block;width:14px;height:14px;margin:-3px 0 0 7px;vertical-align:middle;background:url("@/assets/images/mo/common/icon_link_arrow_black.png") 50% 50% / cover no-repeat;}

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

.order_empty{border-top:none;margin-top:0;}

.list_bullet{padding-bottom:14px;margin-bottom:14px;border-bottom:1px solid #eee;}
.list_bullet.no_bd{border-bottom:none;}
.list_bullet > ul{padding-top:14px;}
.list_bullet > ul > li{color:#999;}
.list_bullet > ul > li:before{background-color:#999;}
.section_group .section h4 .title.icon.document:before{width:14px;height:14px;margin-top:-2px;}
</style>