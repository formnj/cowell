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
                <h2>간편로그인 연결</h2>

                <div class="join_wrap">
                    <div class="join_tit align_center">
                        <p>로그인시 연동할 SNS를 선택해주세요.</p>
                    </div>
                    <ul class="join_list">
                        <li>
                            <router-link class="combine" to="">네이버 로그인 연동</router-link>
                        </li>
                        <li>
                            <router-link class="kakao" to="">카카오 로그인 연동해제</router-link>
                        </li>
                        <li>
                            <router-link class="apple" to="">애플 로그인 연동</router-link>
                        </li>
                        <li>
                            <router-link class="default" to=""><div>구글 로그인 연동</div></router-link><!-- 구글 로그인 연동 API 적용으로 :after 처리 -->
                        </li>
                    </ul>

                    <dl class="tip_box mt30">
                        <dt>안내사항</dt>
                        <dd>
                            네이버/카카오/애플/구글 계정과 연동하여 간편하게 로그인 하실 수 있는 기능을 연동하거나 연동된 계정을 해제하실 수 있습니다. <br>
                            로그인 연동/해제는 SNS 계정을 고객님의 기본 가입계정에 설정하는 것이며, 계정이 변경되거나 탈퇴가 되는 것은 아닙니다. <br>
                            SNS 로그인을 연동하였더라도 기본 가입 계정으로 로그인이 가능합니다.
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped></style>