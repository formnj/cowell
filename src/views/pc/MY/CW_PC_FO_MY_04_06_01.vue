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
                <h2>최근 본 상품</h2>

                <div class="order_empty">
                    <p>최근 본 상품이 없습니다.</p>
                </div>

                <div class="sorting_box">
                    <Inputs input_type="checkbox" id="" text="전체선택"/>
                    <div class="buttons ml_auto">
                        <button type="button" class="active">선택삭제</button>
                    </div>
                </div>

                <div class="list_product">
                    <ul>
                        <li v-for="item in 3">
                            <div class="card_product">
                                <div class="main">
                                    <Inputs input_type="checkbox" id="아이디" text="" checked="" />
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
                                        <span class="percent">10%</span>
                                        <span class="price">999,999,999원</span>
                                    </div>

                                    <button type="button" class="button_delete">삭제</button>
                                </div>
                            </div>
                        </li>
                    </ul>
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
            </div>
        </div>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'

export default {
    components: {
        Inputs,
    },
}
</script>

<style scoped></style>