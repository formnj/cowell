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
                <h2>취소/환불 상세</h2>

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
                    <div class="info_table">
                        <table>
                            <tbody>
                                <tr>
                                    <th>교환 사유</th>
                                    <td>제품 불량</td>
                                </tr>
                                <tr>
                                    <th>상세 사유</th>
                                    <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, molestias. Velit ullam doloremque, delectus voluptatibus tenetur rem voluptate deleniti commodi illo ab impedit fugiat rerum dolorum obcaecati recusandae saepe fuga?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="section_group">
                    <div class="section">
                        <h4 class="pt50 pb20">
                            <strong class="title large">환불 예정 금액</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>결제금액</th>
                                        <td>40,000원</td>
                                    </tr>
                                    <tr>
                                        <th class="impact">최종 환불 금액</th>
                                        <td class="point">40,000원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="flex_box justify_end">
                    <a href="" class="btn_cancel btn_big" style="width:165px;">
                        <em>반품철회</em>
                    </a>
                    <a href="" class="btn_default btn_big ml10" style="width:165px;">
                        <em>확인</em>
                    </a>
                </div>

                <!-- 취소/환불 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">취소/환불 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <strong class="title">취소/환불 신청</strong>
                            <ul>
                                <li>주문 취소는 상품 준비중 단계까지만 가능합니다. (가능 단계 : 입금 대기, 결제 완료, 상품 준비중 단계)</li>
                                <li>배송 준비중 단계부터는 주문취소가 불가능하니 상품을 수령 후 반품으로 접수해 주시기 바랍니다.</li>
                                <li>주문 상품 중 일부만 취소하실 경우, 결제 수단에 따라 재결제가 필요할 수 있으며, 재결제 완료 후 나머지 상품에 대한 주문이 완료됩니다.</li>
                                <li>주문 취소 시 사용하신 쿠폰 적용 기준에 따라 복원이 되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.</li>
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