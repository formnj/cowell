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
                <h2>주문/배송 내역</h2>

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
                        <p>최근 주문 내역이 없습니다.</p>
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
                                        <span class="status">결제완료</span>
                                        <div class="buttons">
                                            <button type="button">주문취소</button>
                                            <button type="button">주소변경</button>
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
                                        <span class="status">결제완료</span>
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
                                        <span class="status">결제완료</span>
                                        <div class="buttons">
                                            <button type="button">구매확정</button>
                                            <button type="button">재구매</button>
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
                    </ul>
                </div>

                <!-- 주문/배송 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">주문/배송 안내</strong>
                        </h4>

                        <div class="list_bullet pb30">
                            <strong class="title">입금대기</strong>
                            <ul>
                                <li>주문이 정상적으로 접수되었습니다.</li>
                                <li>결제방법을 가상계좌로 선택하신 경우, 정해진 기간 내에 입금이 완료되어야만 입금대기에서 결제완료 단계로 진행됩니다. 정해진 기간 경과 시, 주문은 자동 취소됩니다.</li>
                                <li>가상계좌의 경우, 입금대기 상태에서 부분취소가 불가능합니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">결제완료</strong>
                            <ul>
                                <li>주문 및 결제/입금 처리가 최종 완료 되었습니다.</li>
                                <li>주문 취소와 배송지 주소 변경이 가능합니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">상품준비중</strong>
                            <ul>
                                <li>발송 전까지만 주문 취소가 가능합니다.</li>
                                <li>주문 취소가 불가능할 경우 고객센터 (02-6390-8000, 내선번호 3번)로 연락주시기 바랍니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">배송준비중</strong>
                            <ul>
                                <li>상품의 재고 확인 후, 주문하신 상품의 택배 배송을 위해 준비하고 인계하는 단계입니다.</li>
                                <li>배송준비중 단계인 경우, 주문취소가 불가능합니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">배송중</strong>
                            <ul>
                                <li>택배사에 상품이 인계되어 고객님께 배송되는 있는 단계입니다.</li>
                                <li>도서/산간 지역을 제외한 지역의 경우, 1일~5일 정도 소요되며, 협력업체의 사정으로 배송이 지연될 경우도 있습니다.</li>
                                <li>지연될 경우에는 별도로 연락을 드리거나 상품 설명에 기재를 하고 있으니 구매 전 참고해 주세요.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">배송완료</strong>
                            <ul>
                                <li>주문하신 상품을 고객님께 전달이 되어 배송이 완료된 상태입니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">구매확정</strong>
                            <ul>
                                <li>배송완료후 7일 이후에는 구매확정으로 자동 변경됩니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="section pt0 bd">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">유의사항</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <ul>
                                <li>코웰패션닷컴 배송업체는 CJ택배 (1588-1255)입니다.</li>
                                <li>구매금액 30,000원 미만은 3,000원의 배송비가 부과되며, 도서산간 지역은 상품 특성에 따라 추가 배송료 (3,000원)가 부가될 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openStartCalendar () {
            this.$refs.calendarEndLayer.classList.remove('active')
            this.$refs.calendarStartLayer.classList.add('active')
        },
        openEndCalendar () {
            this.$refs.calendarStartLayer.classList.remove('active')
            this.$refs.calendarEndLayer.classList.add('active')
        },
    },
}
</script>

<style scoped>
</style>