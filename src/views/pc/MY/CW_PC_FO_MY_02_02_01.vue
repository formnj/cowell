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
                <h2>반품/교환 내역</h2>

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
                        <p>기간 내 반품/교환 내역이 없습니다.</p>
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
                                        <span class="status">반품접수</span>
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
                                        <span class="status">교환접수</span>
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
                                        <span class="status">교환완료</span>
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

                <!-- 반품/교환 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">반품/교환 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환신청</strong>
                            <ul>
                                <li>반품/교환 신청이 접수되었습니다. 수거를 위해 택배기사님이 방문합니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환접수</strong>
                            <ul>
                                <li>반품/교환 접수된 상품을 수거하여 물류센터로 이동 중입니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품확인중</strong>
                            <ul>
                                <li>반품 상품이 물류센터로 도착 후 상품 검수 진행 중입니다.</li>
                                <li>반품 사유가 상이하거나 부분 환불 시 재결제 비용이 발생할 수 있습니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">교환회수완료</strong>
                            <ul>
                                <li>교환 상품이 물류센터로 도착 후 상품 검수 진행 중입니다.</li>
                                <li>교환 상품 준비가 완료되어 곧 배송될 예정입니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">교환배송중</strong>
                            <ul>
                                <li>교환 상품의 배송이 시작되었습니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환완료</strong>
                            <ul>
                                <li>반품/교환 처리가 완료되었습니다. 결제수단별 절차에 따라 반품 처리가 진행됩니다.</li>
                                <li>반품완료 후 결제수단에 따라 3~7일 정도 환불처리가 소요될 수 있습니다.</li>
                                <li>교환 상품의 배송이 완료되었습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="section pt0 bd">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">반품/교환 유의사항 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <strong class="title">유의사항</strong>
                            <ul>
                                <li>반송지 주소는 [54334] 전라북도 김제시 용지면 부교리 57-4 코웰패션 물류센터입니다.</li>
                                <li>반품/교환은 상품 수령일로부터 7일 이내에서만 가능합니다. 단, 구매확정을 하셨을 경우에는 불가합니다.</li>
                                <li>교환 및 반품 시 코웰패션닷컴 홈페이지를 통해 접수하지 않은 상태에서 임의 발송을 하실 경우, 분실 발생 시 코웰패션닷컴에서는 책임을 지지 않습니다.</li>
                                <li>고객 변심/주문 실수에 의한 반품/교환은 고객님께서 반품비/교환비를 부담하셔야 합니다.</li>
                                <li>제품 하자 및 배송 문제의 경우 코웰패션닷컴에서 동일 제품으로 교환 또는 반품을 원하실 경우 확인 후 교환 및 환불을 해드립니다.</li>
                                <li>교환 배송비 6,000원, 반품 배송비 3,000원입니다. (단, 무료배송인 경우 반품 배송비 6,000원 발생) 제품 하자가 아닐 시에 배송비는 고객님께서 모두 부담합니다.</li>
                                <li>교환 상품 재고 소진 시 교환 배송비의 경우 반품 배송비로 전환되오니 참고 부탁드립니다.</li>
                                <li>부분 반품 시 반품 후 결제금액 중 사용하신 쿠폰 적용 기준에 해당되지 않을 경우에는 추가 금액이 발생할 수 있습니다. 결제수단에 따라 추가 금액을 차감한 후 환불 처리가 되거나 재결제가 필요할 수 있습니다.</li>
                                <li>주문 시 사용하신 쿠폰은 반품 후 적용 기준에 따라 복원되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환 불가</strong>
                            <ul>
                                <li>구매확정 시 반품/교환은 불가합니다.</li>
                                <li>세트상품은 부분적으로 교환/반품이 불가합니다.</li>
                                <li>제품이 훼손되거나 상품의 가치가 상실된 경우에는 반품/교환이 불가능합니다.</li>
                                <li>제품의 택(Tag)이 훼손되거나 제거된 경우에는 반품/교환이 불가능합니다.</li>
                                <li>하자가 없는 새제품일 경우에도 세탁 및 수선을 하신 경우 반품/교환이 불가능합니다.</li>
                                <li>제품의 사이즈는 측정방법에 따라 약간의 오차가 발생될 수 있으며, 제품의 색상은 사용자 모니터의 설정과 사양에 따라 차이가 있을 수 있습니다. 이는 불량이 아니므로 반품/교환이 불가능합니다.</li>
                                <li>세탁 부주의로 인한 제품 손상은 반품/교환이 불가능하며 코웰패션닷컴에서는 어떠한 보상과 책임도 지지않으니, 구매 전 세탁방법을 반드시 확인하신 후 구매하여 주시기 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped></style>