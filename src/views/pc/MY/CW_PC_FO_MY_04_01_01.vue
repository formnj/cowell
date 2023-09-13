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
                <h2>1:1문의</h2>

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
                    <p>등록된 상품문의가 없습니다.</p>
                </div>

                <!-- 23.04.05 pagination 추가 및 위치 이동 -->
                <div class="list_goods_inquire_head">
                    <strong class="status">답변 여부</strong>
                    <strong class="type">유형</strong>
                    <strong class="title">제목</strong>
                    <strong class="date">작성일</strong>
                </div>
                <div class="list_goods_inquire mt20">
                    <dl>
                        <dt>
                            <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">
                                <div class="cont">
                                    <span class="status_replay">답변대기</span>
                                    <span class="type">[원단/컬러/디자인문의]</span>
                                    <strong class="title">기타 상품 문의합니다.</strong>
                                    <div class="info">
                                        <span>2023.12.14</span>
                                    </div>
                                </div>
                            </button>
                        </dt>
                        <dd>
                            <div class="cont">
                                <div class="question">
                                    <p>남녀 공용으로 입어도 되는건가요? <br>세탁 방법은 어떻게 되나요?</p>
                                    <div class="buttons">
                                        <button type="button">수정</button>
                                        <button type="button">삭제</button>
                                    </div>
                                </div>
                                <!-- <div class="answer">
                                    <p>안녕하세요 고객님, 코웰패션에 관심 가져 주셔서 감사합니다. <br>문의 주신 상품은 남녀 공용 상품이며 첫 회는 드라이 클리닝 권장, 이후에는 울제품 전용 세제와 울코스로 세탁하셔도 됩니다.</p>
                                </div> -->
                            </div>
                        </dd>
                        <dt>
                            <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">
                                <div class="cont">
                                    <span class="status_replay fin">답변완료</span>
                                    <!-- <span class="status_lock"></span> -->
                                    <span class="type">[상품문의]</span>
                                    <strong class="title">기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.</strong>
                                    <div class="info">
                                        <span>2023.12.14</span>
                                    </div>
                                </div>
                            </button>
                        </dt>
                        <dd>
                            <div class="cont">
                                <em class="name">상품명 : 23SS 푸마골프 남성 스프링 플레이 셋업 2종세트(다크네이비) PGMY2BN02 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia atque facere rem amet temporibus totam reiciendis, vel ipsa eos, quasi aperiam hic nam porro ducimus fugit magni doloremque sequi laborum!</em>
                                <div class="question">
                                    <p>남녀 공용으로 입어도 되는건가요? <br>세탁 방법은 어떻게 되나요?</p>
                                    <div class="buttons">
                                        <button type="button">수정</button>
                                        <button type="button">삭제</button>
                                    </div>
                                </div>
                                <div class="answer">
                                    <p>안녕하세요 고객님, 코웰패션에 관심 가져 주셔서 감사합니다. <br>문의 주신 상품은 남녀 공용 상품이며 첫 회는 드라이 클리닝 권장, 이후에는 울제품 전용 세제와 울코스로 세탁하셔도 됩니다.</p>
                                    <div class="images">
                                        <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/imgreview01.png" alt=""></button>
                                        <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/imgreview02.png" alt=""></button>
                                        <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/imgreview03.png" alt=""></button>
                                    </div>
                                </div>
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="pagination">
                    <a href="#none" class="btn_first">처음으로</a>
                    <a href="#none" class="btn_prev">이전</a>
                    <a href="#none">1</a>
                    <a href="#none">2</a>
                    <a href="#none">3</a>
                    <a href="#none">4</a>
                    <a href="#none" class="btn_next">다음</a>
                    <a href="#none" class="btn_end">마지막으로</a>
                </div>
                <div class="flex_box justify_end">
                    <a href="" class="btn_default btn_big">
                        <em>상품 문의하기</em>
                    </a>
                </div>
                <!-- //23.04.05 위치 이동 -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        accordionToggle (event) {
            event.currentTarget.parentNode.classList.toggle('active')
        },
    },
}
</script>
<style scoped></style>