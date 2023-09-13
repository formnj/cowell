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

                <div class="card_product">
                    <div class="top">
                        <span class="date">2023.12.14</span>
                        <span class="order_number">
                            <span>주문번호</span>
                            <em>2023012609093717645</em>
                        </span>
                    </div>
                    <div class="order_step_box bd_top">
                        <ol>
                            <li>
                                <span class="title t4">배송준비중</span>
                                <em class="count">0</em>
                            </li>
                            <li>
                                <span class="title t5">배송중</span>
                                <em class="count">0</em>
                            </li>
                            <li>
                                <span class="title t6">배송완료</span>
                                <em class="count">0</em>
                            </li>
                            <li class="active">
                                <span class="title t7">구매확정</span>
                                <em class="count">3</em>
                            </li>
                        </ol>
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
                                <button type="button" class="dark">재전송</button>
                                <button type="button">선물취소</button>
                                <button type="button" class="dark">배송조회</button>
                                <button type="button" class="impact">수령확정</button>
                                <button type="button">반품신청</button>
                                <button type="button">교환신청</button>
                            </div>
                        </div>

                        <!-- <button type="button" class="button_delete">삭제</button> -->
                    </div>
                    <div class="bottom">
                        <span class="name">사은품</span>
                        <p class="context">양말, FREE, 1</p>
                    </div>
                    <div class="bottom">
                        <p class="context">30,000원 미만 <em>배송비 3,000원</em></p>
                    </div>
                </div>

                <div class="section_group">
                    <div class="section">
                        <h4 class="pt50 pb20">
                            <strong class="title large">결제 정보</strong>
                        </h4>
                        <div class="info_table pad">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>총 상품금액</th>
                                        <td>999,999,999원</td>
                                        <th>상품 할인금액</th>
                                        <td>9,999,999원</td>
                                        <th class="impact">최종 주문금액</th>
                                        <td class="point">989,995,000원</td>
                                    </tr>
                                    <tr>
                                        <th>배송비</th>
                                        <td>3,000원</td>
                                        <th>쿠폰 할인금액</th>
                                        <td>300원</td>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                        <th>포인트 사용금액</th>
                                        <td>700원</td>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td></td>
                                        <th>할인코드</th>
                                        <td>1,000원</td>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 class="pt50 pb20">
                            <strong class="title large">결제 상세</strong>
                            <button type="button" class="btn_white btn_min">영수증 조회</button>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tr>
                                    <th>입금계좌</th>
                                    <td>국민은행 56569073052500 코웰패션</td>
                                </tr>
                                <tr>
                                    <th>입금예정금액</th>
                                    <td>989,995,000원</td>
                                </tr>
                                <tr>
                                    <th>입금기한</th>
                                    <td>2023.03.14 23:30</td>
                                </tr>
                            </table>
                        </div>

                        <h4 class="pt50 pb20">
                            <strong class="title large">배송정보</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tr>
                                    <th>수령인</th>
                                    <td>양재원</td>
                                </tr>
                                <tr>
                                    <th>휴대폰 번호</th>
                                    <td>010-1234-5678</td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th>주소</th>
                                    <td>[06168] 서울특별시 강남구 삼성로 152(삼성동) 삼성동빌딩, 1000호</td>
                                </tr>
                                <tr>
                                    <th>배송 메시지</th>
                                    <td>배송 전, 연락 바랍니다.</td>
                                </tr>
                            </table>
                        </div>

                        <h4 class="pt50 pb20">
                            <strong class="title large">환불계좌 정보</strong>
                            <button type="button" class="btn_white btn_mid">환불계좌 변경</button>
                        </h4>
                        <p class="pb20">등록된 환불계좌 정보가 없습니다. 아래의 은행을 터치하여 환불계좌를 등록해 주세요.</p>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>은행</th>
                                        <td>한국은행</td>
                                    </tr>
                                    <tr>
                                        <th>계좌번호</th>
                                        <td>1234-56-7890</td>
                                    </tr>
                                    <tr>
                                        <th>예금주</th>
                                        <td>김나나</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="list_bullet">
                                                <ul>
                                                    <li>주문 취소나 품절 시, 환불 받으실 계좌입니다.</li>
                                                    <li>환불계좌 정보를 번경하고 싶으신 경우, [환불계좌 변경]을 통해서만 수정이 가능합니다.</li>
                                                    <li>환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.</li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        
                        <h4 class="pt50 pb20">
                            <strong class="title large">환불 예정 금액</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>결제금액</th>
                                        <td>20,000원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="flex_box justify_center pt50 pb50">
                    <a href="" class="btn_default btn_big ml10" style="width:500px;">
                        <em>취소 신청</em>
                    </a>
                </div>

                <div class="flex_box justify_end">
                    <a href="" class="btn_confirm btn_big" style="width:165px;">
                        <em>상품리뷰</em>
                    </a>
                </div>
                <p class="info_explain align_right"><span style="color:#666;">상품리뷰 작성 시 포인트 지급</span> *</p>

                <!-- 선물 취소 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">선물 취소 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <strong class="title">취소 신청</strong>
                            <ul>
                                <li>선물 취소는 수령인이 선물받기를 신청하기 전까지 가능합니다.</li>
                                <li>취소 신청을 하셨더라도 신청 등록 전, 수령인이 선물받기 신청을 완료하였을 경우 취소가 불가능합니다.</li>
                                <li>주문 상품 중 일부만 취소하실 경우, 결제 수단에 따라 재결제가 필요할 수 있으며, 재결제 완료 후 나머지 상품에 대한 주문이 완료됩니다.</li>
                                <li>주문 취소 시 사용하신 쿠폰 적용 기준에 따라 복원이 되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 배송지 입력방법 및 배송 안내 -->
                <div class="section_group">
                    <div class="section pt0">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">배송지 입력방법 및 배송 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <ul>
                                <li>주문 취소나 품절 시, 환불 받으실 계좌입니다.</li>
                                <li>수령인은 회원가입 후 선물 수락이 가능합니다.</li>
                                <li>수령인은 선물 수락과 함께 배송지를 입력할 수 있습니다. 배송지 입력 후 수정이 불가능하니 유의하시기 바랍니다.</li>
                                <li>수령인이 선물을 거절할 경우 자동으로 주문이 취소됩니다.</li>
                                <li>선물은 재고에 따라 품절될 수 있습니다.</li>
                                <li>환불계좌 정보를 번경하고 싶으신 경우, [환불계좌 변경]을 통해서만 수정이 가능합니다.</li>
                                <li>환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 선물 배송 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">선물 배송 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <ul>
                                <li>수락하신 선물은 취소/환불이 불가합니다. 수령하신 이후 반품/교환을 신청하여 주시기 바랍니다.</li>
                                <li>수령확정을 하신 선물은 반품/교환이 불가합니다.</li>
                                <li>선물은 재고에 따라 품절될 수 있습니다.</li>                                
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 선물 취소 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">선물 취소 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <ul>
                                <li>취소 완료 후 환불은 결제수단에 따라 3~7일 정도 환불처리가 소요될 수 있습니다.</li>
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