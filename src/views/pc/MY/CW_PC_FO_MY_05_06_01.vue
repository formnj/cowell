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
                <h2>회원탈퇴</h2>

                <h3 class="align_center" style="font-weight:400;">
                    회원 탈퇴 시 회원님의 모든 정보가 바로 삭제됩니다.
                </h3>
                <div class="gray_box flex_box justify_between pt50 pb50">
                    <div class="my_summary pl30">
                        <strong class="name">소멸예정 내역</strong>
                    </div>
                    <div class="count_box">
                        <div class="cell">
                            <span class="title">포인트</span>
                            <em class="count">99,999,999</em>
                        </div>
                        <div class="cell">
                            <span class="title">쿠폰</span>
                            <em class="count">999</em>
                        </div>
                        <div class="cell">
                            <span class="title">관심상품</span>
                            <em class="count">99,999,999</em>
                        </div>
                    </div>
                </div>

                <div class="section_group">
                    <div class="section">
                        <h4 class="pt30 pb20">
                            <strong class="title light bold">회원탈퇴 유의사항</strong>
                        </h4>
                        <div class="list_bullet">
                            <ul>
                                <li>탈퇴 후 고객님의 정보는 전자상거래 소비자보호법에 의거한 개인정보보호정책에 따라 관리됩니다.</li>
                                <li>탈퇴 후 일정 기간 재가입 여부 판단을 목적으로 고객님의 최소정보(CI, DI)를 보존합니다.</li>
                                <li>탈퇴 후 재가입 시에는 신규 가입으로 처리되며, 탈퇴 시점부터 1개월 후에 재 가입 가능합니다.</li>
                                <li>탈퇴 시 고객님께서 보유하셨던 포인트· 쿠폰· 관심 상품 등 모든 기록은 삭제되며, 복구되지 않습니다. 반드시 확인하시고 신중하게 탈퇴 신청해 주시기 바랍니다.</li>
                                <li>취소/반품/교환 신청 등 서비스가 진행 중인 고객님은 모든 처리가 완료된 후에 탈퇴가 가능합니다.</li>
                                <li>배송 등 거래가 진행 중인 경우 모든 거래가 완료된 후에 탈퇴가 가능합니다.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="section">
                        <h4 class="pt30">
                            <strong class="title light bold">탈퇴사유</strong>
                        </h4>
                        <ul class="form_group">
                            <li class="mb20">
                                <Inputs input_type="radio" id="" text="배송 주문 불만족" />
                                <Inputs input_type="radio" id="" text="사이트 이용 불편" />
                                <Inputs input_type="radio" id="" text="상품품질 불만족" />
                                <Inputs input_type="radio" id="" text="서비스 불만족" />
                                <Inputs input_type="radio" id="" text="기타" />
                            </li>
                            <li>
                                <p class="form_tit">내용</p>
                                <label class="textarea_label" for="writeReport">
                                    <textarea class="textarea" id="writeReport" placeholder="내용을 입력해 주세요."></textarea>
                                </label>
                                <p class="remember_id mt30">
                                    <Inputs input_type="checkbox" id="" text="회원 탈퇴 안내를 모두 확인했습니다. 탈퇴에 동의합니다." />
                                </p>
                            </li>
                        </ul>

                        <div class="flex_box justify_center mt50">
                            <a href="" class="btn_big btn_cancel" style="width:245px;">
                                <em>취소</em>
                            </a>
                            <a href="" class="btn_big btn_default ml10" style="width:245px;">
                                <em>등록</em>
                            </a>
                        </div>
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