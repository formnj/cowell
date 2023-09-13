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
                <h2>포인트 내역</h2>

                <div class="gray_box flex_box justify_between pt50 pb50 mb50">
                    <div class="my_summary pl30">
                        <strong class="name">양재원 님</strong>
                        <div class="info">
                            <span class="grade">포인트 내역</span>
                        </div>
                    </div>
                    <div class="count_box">
                        <div class="cell">
                            <span class="title">포인트</span>
                            <em class="count">99,999,999</em>
                        </div>
                        <div class="cell">
                            <span class="title">소멸예정 포인트</span>
                            <em class="count">99,999,999</em>
                        </div>
                    </div>
                </div>

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

                <div class="order_empty">
                    <p>포인트 내역이 없습니다.</p>
                </div>

                <div class="list_point_table">
                    <table>
                        <thead>
                            <tr>
                                <th>상세내역</th>
                                <th colspan="4" class="align_right">금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="expired">
                                <th>2023.12.14</th>
                                <td><strong class="title">기간만료</strong></td>
                                <td>
                                    <div class="context">
                                        <p>주문번호 1234567890</p>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <p class="point">-1,000원</p>
                                </td>
                            </tr>
                            <tr class="saved">
                                <th>2023.12.14</th>
                                <td><strong class="title">구매확정</strong></td>
                                <td>
                                    <div class="context">
                                        <p>주문번호 1234567890</p>
                                    </div>
                                </td>
                                <td>
                                    <div class="d_day">
                                        <p>포인트 소멸 예정</p>
                                        <p>2023.12.14</p>
                                    </div>
                                </td>
                                <td>
                                    <p class="point">+1,000원</p>
                                </td>
                            </tr>
                            <tr class="spent">
                                <th>2023.12.14</th>
                                <td><strong class="title">상품구매</strong></td>
                                <td>
                                    <div class="context">
                                        <p>주문번호 1234567890</p>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <p class="point">-1,000원</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">포인트 이용 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <ul>
                                <li>포인트는 상품 구매나 구매후기 작성 등을 통해 적립이 가능합니다.</li>
                                <li>1 포인트는 현금 1원과 같으며 10원 단위로 사용이 가능합니다.</li>
                                <li>포인트는 상품 구매 시 현금과 동일하게 사용이 가능하고 현금이나 다른 혜택으로의 전환은 불가능합니다.</li>
                                <li>상품 구매 시 적립된 포인트의 유효기간은 6개월이며, 유효기간이 지난 포인트는 자동 소멸됩니다.</li>
                                <li>이벤트성 포인트는 소멸기간이 다르니 해당 이벤트 페이지 내 공지된 유효기간을 꼭 확인해 주세요.</li>
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