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
                <h2>선물함</h2>

                <Tabs tabClass="tab_type_03 center" :tab_item="tab_item_category" class="center" :tabidx="tabidx" @change="change" />

                <div class="sort_period pb50">
                    <div class="buttons">
                        <span class="input_radio_button">
                            <input type="radio" id="radioPeriod01" name="radioPeriod" checked>
                            <label for="radioPeriod01">1개월</label>
                        </span>
                        <span class="input_radio_button">
                            <input type="radio" id="radioPeriod02" name="radioPeriod">
                            <label for="radioPeriod02">3개월</label>
                        </span>
                        <span class="input_radio_button">
                            <input type="radio" id="radioPeriod03" name="radioPeriod">
                            <label for="radioPeriod03">6개월</label>
                        </span>
                        <span class="input_radio_button">
                            <input type="radio" id="radioPeriod04" name="radioPeriod">
                            <label for="radioPeriod04">1년</label>
                        </span>
                    </div>

                    <div class="multi_form">
                        <div>
                            <label for="calendarStart" class="input_calendar" @click.prevent="openStartCalendar">
                                <input type="text" id="calendarStart" readonly="readonly" value="2023-12-14">
                                <div class="calendar_layer" ref="calendarStartLayer">
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
                                </div>
                            </label>
                            <span>~</span>
                            <label for="calendarEnd" class="input_calendar" @click.prevent="openEndCalendar">
                                <input type="text" id="calendarEnd" readonly="readonly" value="2023-12-14">
                                <div class="calendar_layer" ref="calendarEndLayer">
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
                                </div>
                            </label>
                            <a href="" class="btn_default btn_mid" style="min-width:100px;">
                                <em>조회</em>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="list_product">
                    <div class="order_empty">
                        <p>기간 내 받으신 선물 내역이 없습니다.</p>
                    </div>

                    <ul>
                        <li>
                            <div class="card_product">
                                <div class="top">
                                    <span class="date">2023.12.14</span>
                                    <span class="order_number">
                                        <span>주문번호</span>
                                        <em>2023012609093717645</em>
                                    </span>
                                </div>
                                <div class="main">
                                    <!-- <Inputs input_type="checkbox" id="아이디" text="" checked="" /> -->
                                    <a href="" class="product">
                                        <span class="image">
                                            <img src="@/assets/images/pc/sample/imgreview01.png" alt="">
                                        </span>
                                        <div class="text">
                                            <strong class="brand">NOTICA</strong>
                                            <p class="name">이월 21 푸마 바디웨어 남성 액티브모션 바디웨어 드로즈(센라이트레드)</p>
                                            <span class="option">옵션 : BEIGE 66, FREE</span>
                                        </div>
                                    </a>
                                    <div class="info">
                                        <span class="quantity">999</span>
                                        <span class="price">999,999,999원</span>
                                        <span class="status">수령가능</span>
                                        <div class="buttons">
                                            <button type="button" class="dark" @click.prevent="openModal('modalSkin'), modalTitle='배송지 입력', modalContent='modalAccept'">선물수락</button>
                                            <button type="button" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalReject'">선물거절</button>
                                        </div>
                                    </div>

                                    <!-- <button type="button" class="button_delete">삭제</button> -->
                                </div>
                                <div class="bottom">
                                    <span class="name">사은품</span>
                                    <p class="context">양말, FREE, 1</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="card_product">
                                <div class="top">
                                    <span class="date">2023.12.14</span>
                                    <span class="order_number">
                                        <span>주문번호</span>
                                        <em>2023012609093717645</em>
                                    </span>
                                </div>
                                <div class="main">
                                    <!-- <Inputs input_type="checkbox" id="아이디" text="" checked="" /> -->
                                    <a href="" class="product">
                                        <span class="image">
                                            <img src="@/assets/images/pc/sample/imgreview02.png" alt="">
                                        </span>
                                        <div class="text">
                                            <strong class="brand">NOTICA</strong>
                                            <p class="name">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda repellendus officiis explicabo quod placeat ipsa quis debitis facilis quasi et officia repudiandae quia beatae rerum, tempora aperiam sapiente. Id, velit.</p>
                                            <span class="option">옵션 : BEIGE 66, FREE</span>
                                        </div>
                                    </a>
                                    <div class="info">
                                        <span class="quantity">999</span>
                                        <span class="price">999,999원</span>
                                        <span class="status">수령완료</span>
                                        <!-- <div class="buttons">
                                            <button type="button">주문취소</button>
                                            <button type="button">주소변경</button>
                                        </div> -->
                                    </div>

                                    <!-- <button type="button" class="button_delete">삭제</button> -->
                                </div>
                                <div class="bottom">
                                    <span class="name">사은품</span>
                                    <p class="context">양말, FREE, 1</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="card_product">
                                <div class="top">
                                    <span class="date">2023.12.14</span>
                                    <span class="order_number">
                                        <span>주문번호</span>
                                        <em>2023012609093717645</em>
                                    </span>
                                </div>
                                <div class="main">
                                    <!-- <Inputs input_type="checkbox" id="아이디" text="" checked="" /> -->
                                    <a href="" class="product">
                                        <span class="image">
                                            <img src="@/assets/images/pc/sample/imgreview03.png" alt="">
                                        </span>
                                        <div class="text">
                                            <strong class="brand">NOTICA</strong>
                                            <p class="name">이월 21 푸마 바디웨어 남성 액티브모션 바디웨어 드로즈(센라이트레드)</p>
                                            <span class="option">옵션 : BEIGE 66, FREE</span>
                                        </div>
                                    </a>
                                    <div class="info">
                                        <span class="quantity">1</span>
                                        <span class="price">99,999원</span>
                                        <span class="status">선물거절</span>
                                        <!-- <div class="buttons">
                                            <button type="button">구매확정</button>
                                            <button type="button">재구매</button>
                                        </div> -->
                                    </div>

                                    <!-- <button type="button" class="button_delete">삭제</button> -->
                                </div>
                                <div class="bottom">
                                    <span class="name">사은품</span>
                                    <p class="context">양말, FREE, 1</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <ModalSkin
            :modalTitle="modalTitle"
            :modalContent="modalContent"
            :modalClass="modalContent === 'modalAccept' ? 'wide' : ''"
        >
            <!-- 선물수락 -->
            <div v-if="modalContent == 'modalAccept'">
                <div class="order_info">
                    <ul class="form_group">
                        <li class="required">
                            <p class="form_tit">
                                <em>주소별칭</em>
                            </p>
                            <Inputs input_type="text" placeholder="주소별칭 입력" />
                        </li>
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
                        <li class="top required">
                            <p class="form_tit">
                                <em>배송지 주소</em>
                            </p>
                            <div style="flex:1;">
                                <div class="multi_form">
                                    <div>
                                        <Inputs  input_type="text" placeholder="우편번호와 주소를 입력해주세요." err_text="에러문구" />
                                        <button class="btn_mid btn_default" @click.prevent="openModal('modalSkin'), modalTitle='주소검색', modalContent='address_search'"><em>주소검색</em></button>
                                    </div>
                                    <em>에러문구</em>
                                </div>
                                <Inputs input_type="text" placeholder="상세 주소를 입력해주세요." />
                                <p class="mt10">결제 후 배송지 수정이 불가능하니 한번 더 확인해주세요.</p>
                            </div>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송 메시지 </em>
                            </p>
                            <div style="flex:1;">
                                <SelectBox :options="message" model="모델" />
                                <!-- 직접입력 -->
                                <Inputs class="mt10" input_type="text" placeholder="내용을 입력해 주세요." />
                                <!-- //직접입력 -->
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="btnSection">
                    <a href="" class="btn_big btn_default">
                        <em>등록</em>
                    </a>
                </div>
            </div>

            <div v-if="modalContent == 'modalReject'">
                <p class="align_center">
                    보내신 선물을 취소 처리하시겠습니까?
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    기입력하신 수령인의 휴대폰 번호로 <br>재전송하였습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
                
                <p class="align_center">
                    선물 수락과 배송지 입력이 <br>성공적으로 처리되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
                
                <p class="align_center">
                    보내신 선물을 취소 처리하였습니다. <br> <br>
                    결제수단에 따라 환불까지 시일이 소요되오니 <br>참고 부탁드립니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    받으신 선물을 거절하시겠습니까?
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
                
                <p class="align_center">
                    선물 거절이 처리되었습니다. <br>
                    선물하신 분에게 환불 처리가 될 예정입니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import Inputs from "@/components/Inputs";
import ModalSkin from "@/components/ModalSkin";

export default {
    components: {
        Tabs,
        Inputs,
        ModalSkin,
    },
    data () {
        return {
            tabidx: 0,
            tab_item_category: [
                { item: "받은 선물 내역(999)" },
                { item: "보낸 선물 내역(999)" },
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
::v-deep .tab_type_03{display:flex;margin-bottom:40px;justify-content:center;}
::v-deep .tab_type_03 > li {float:none;}
::v-deep .tab_type_03 > li + li {padding-left:100px;}
::v-deep .tab_type_03 > li a{font-size:24px;height:50px;line-height:50px;}

.order_info, .payment_info {padding-top:30px; padding-bottom:30px;}
.order_info .number {font-size:18px;}
.order_info .form_group {margin-top:-30px;}
.order_info .form_group > li {padding-top:30px; display:flex; align-items:center;}
.order_info .form_group > li.top {align-items:start;}
.order_info .form_group > li.top .form_tit {margin-top:13px;}
.order_info .form_tit {width:230px; margin-bottom:0; font-size:18px;}
.order_info .required .form_tit em:after {margin-left:5px; color:#00C294; font-size:18px; vertical-align:top; content:'*'; display:inline-block;}
.order_info .form_tit + span {font-size:18px; display:block;}
</style>