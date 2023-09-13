<template>
    <div>
        <div class="content mypage">
            <div class="layout left">
                <div class="lnb">
                    <ul>
                        <!-- 비회원일 경우 노출 -->
                        <li>
                            <a href="">주문/배송 상세</a>
                        </li>
                        <!-- //비회원일 경우 노출 -->
                        <!-- 회원일 경우 노출 -->
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
                        <!-- //회원일 경우 노출 -->
                    </ul>
                </div>
            </div>
            <div class="layout right">
                <h2>주문/배송</h2>

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
                                <span class="title t1">입금대기</span>
                                <em class="count">0</em>
                            </li>
                            <li class="active">
                                <span class="title t2">결제완료</span>
                                <em class="count">1</em>
                            </li>
                            <li>
                                <span class="title t3">상품준비중</span>
                                <em class="count">0</em>
                            </li>
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
                                <button type="button" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent=''">주문취소</button>
                                <button type="button">주소변경</button>
                                <button type="button" class="impact">구매확정</button>
                                <button type="button" class="dark">배송조회</button>
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
                    </div>
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

        <ModalSkin :modalTitle="modalTitle"  :modalContent="modalContent">
            <div>
                <p class="align_center">
                    구매를 확정하시겠습니까? <br> <br>
                    구매를 확정하시면 구매 포인트가 지급되며, <br>환불/교환이 불가능합니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    구매가 확정되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
                <p class="align_center">
                    상품리뷰를 작성하시겠습니까? <br> <br>
                    상품리뷰를 작성하시면 구매확정이 되어 <br>구매 포인트가 지급되며, <br>환불/교환이 불가능합니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
                <p class="align_center">
                    상품리뷰가 등록되어 <br>구매확정과 함께 <br>구매 포인트가 지급되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import ModalSkin from "@/components/ModalSkin";

export default {
    components: {
        ModalSkin,
    },
    data () {
        return {
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
    },
}
</script>

<style scoped>
</style>