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
                <h2>회원정보수정</h2>

                <div class="join_wrap">
                    <h3>고객님의 안전한 정보 관리를 위해 비밀번호를 확인합니다.</h3>
                    <ul class="form_group">
                        <li>
                            <p class="form_tit">아이디</p>
                            <Inputs  input_type="text" id="아이디" placeholder="아이디 입력" err_text="에러문구" value="Cowell123***" isDisabled="true" />
                        </li>
                        <li>
                            <p class="form_tit required">비밀번호</p>
                            <Inputs class="explain" input_type="password" id="비밀번호" placeholder="영문+숫자+특수문자 조합 8자이상" value="" />
                            <!-- 23.04.03 추가 유효성 체크 -->
                            <p class="validation_chk">
                                <span class="pass">영문포함</span><!-- 통과 시 pass 클래스 추가 -->
                                <span class="pass">숫자포함</span>
                                <span>특수문자</span>
                                <span>8~20자이내</span>
                            </p>
                            <!-- //23.04.03 추가 유효성 체크 -->
                        </li>
                    </ul>
    
                    <div class="btnSection">
                        <router-link to="/cowell/pc/MY_05_01_02" class="btn_big btn_default"><em>확인</em></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";

export default {
    components: {
        Inputs,
    },
}
</script>

<style scoped></style>