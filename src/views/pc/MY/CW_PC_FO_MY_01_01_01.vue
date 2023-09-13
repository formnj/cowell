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
                <h2>마이페이지</h2>
                <div class="gray_box flex_box justify_between pt50 pb50">
                    <div class="my_summary pl30">
                        <strong class="name">양재원 님</strong>
                        <div class="info">
                            <span class="grade">welcome 등급</span>
                            <button type="button" class="button_benefit">회원 등급 혜택 보기</button>
                        </div>
                    </div>
                    <div class="count_box">
                        <div class="cell">
                            <span class="title">쿠폰</span>
                            <em class="count">999</em>
                        </div>
                        <div class="cell">
                            <span class="title">포인트</span>
                            <em class="count">99,999,999</em>
                        </div>
                        <div class="cell">
                            <span class="title">관심상품</span>
                            <em class="count">99,999,999</em>
                        </div>
                    </div>
                </div>

                <div class="gray_box flex_box justify_between pt50 pb50">
                    <div class="my_summary pl30">
                        <strong class="name">양재원 님</strong>
                        <div class="info">
                            <span class="grade">직원</span>
                            <button type="button" class="button_benefit">회원 등급 혜택 보기</button>
                        </div>
                    </div>
                    <div class="count_box">
                        <div class="cell">
                            <span class="title">총 구매한도</span>
                            <em class="count">99,999,999</em>
                        </div>
                        <div class="cell">
                            <span class="title">잔여 구매한도</span>
                            <em class="count">99,999,999</em>
                        </div>
                    </div>
                </div>

                <div class="order_step_box">
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

                <div class="head_title">
                    <strong class="title">최근 주문/배송 내역</strong>
                    <span class="unit">(최근 1개월 기준)</span>
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
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";

export default {
    components: {
        Inputs
    },
    data () {
        return {
        }
    },
}
</script>

<style scoped>
</style>