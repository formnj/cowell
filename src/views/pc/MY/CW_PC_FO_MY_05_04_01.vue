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
                <h2>배송지 관리</h2>

                <div class="order_empty">
                    <p>등록된 배송지가 없습니다.</p>
                </div>
                <div class="flex_box justify_end pt30">
                    <a href="" class="btn_big btn_default ml10" style="width:165px;" @click.prevent="openModal('modalSkin'), modalTitle='배송지 추가'">
                        <em>배송지 추가</em>
                    </a>
                </div>

                <div class="list_delivery">
                    <ul>
                        <li>
                            <div class="card_delivery">
                                <Inputs input_type="radio" id="체크" placeholder="" checked="checked" />
                                <div class="text">
                                    <div class="top">
                                        <strong class="name default">회사</strong>
                                        <div class="buttons">
                                            <button type="button">수정</button>
                                            <button type="button">삭제</button>
                                        </div>
                                    </div>
                                    <div class="info">
                                        <span>양재원</span>
                                        <span>010-1234-5678</span>
                                    </div>
                                    <p class="address">[15305] 서울특별시 영등포구 여의대로 108(파크원) 타워1 코웰패션</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="card_delivery">
                                <Inputs input_type="radio" id="체크" placeholder="" />
                                <div class="text">
                                    <div class="top">
                                        <strong class="name">우리집</strong>
                                        <div class="buttons">
                                            <button type="button">수정</button>
                                            <button type="button">삭제</button>
                                        </div>
                                    </div>
                                    <div class="info">
                                        <span>양재원</span>
                                        <span>010-1234-5678</span>
                                    </div>
                                    <p class="address">[15305] 서울특별시 영등포구 여의대로 108(파크원) 타워1 코웰패션</p>
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
                <div class="flex_box justify_end">
                    <a href="" class="btn_big btn_white" style="width:165px;padding:0;">
                        <em>기본 배송지로 지정</em>
                    </a>
                    <a href="" class="btn_big btn_default ml10" style="width:165px;" @click.prevent="openModal('modalSkin'), modalTitle='배송지 추가'">
                        <em>배송지 추가</em>
                    </a>
                </div>
            </div>
        </div>

        <ModalSkin
            :modalTitle="modalTitle"
            :modalClass="'full'"
        >
            <ul class="form_group">
                <li>
                    <p class="form_tit">별칭</p>
                    <Inputs input_type="text" id="별칭" placeholder="배송지 별칭 입력" value="" />
                </li>
                <li>
                    <p class="form_tit required">받는분</p>
                    <Inputs input_type="text" id="별칭" placeholder="이름 입력" value="" />
                </li>
                <li>
                    <p class="form_tit required">휴대폰 번호</p>
                    <div class="date_form err">
                        <SelectBox :options="opt_id_num" model=""/>
                        <Inputs input_type="text" id="휴대전화 앞자리" placeholder="" value="" />
                        <Inputs input_type="text" id="휴대전화 뒷자리" placeholder="" value="" class="mt0" />
                    </div>
                </li>
                <li>
                    <p class="form_tit required">주소</p>
                    <div class="multi_form">
                        <div>
                            <Inputs input_type="text" id="우편번호" placeholder="" err_text="에러문구" value="" isDisabled="true" />
                            <a href="#none" class="btn_mid btn_default">우편번호</a>
                        </div>
                        <em>에러문구</em>
                    </div>
                    <Inputs input_type="text" id="주소" placeholder="" err_text="에러문구" value="" isDisabled="true" />
                    <Inputs input_type="text" id="상세주소" placeholder="" err_text="에러문구" value="" />

                    <p class="remember_id">
                        <Inputs input_type="checkbox" id="" text="기본 배송지로 지정" />
                    </p>
                </li>
            </ul>

            <div class="btnSection">
                <a href="" class="btn_big btn_cancel">
                    <em>취소</em>
                </a>
                <a href="" class="btn_big btn_default">
                    <em>등록</em>
                </a>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";
import ModalSkin from "@/components/ModalSkin";
import SelectBox from "@/components/SelectBox.vue";

export default {
    components: {
        Inputs,
        ModalSkin,
        SelectBox,
    },
    data () {
        return {
            modalTitle: '',
            modalContent: '',
            opt_id_num: [
                { val: "", txt: "010" },
                { val: "", txt: "011" },
                { val: "", txt: "016" },
                { val: "", txt: "017" },
                { val: "", txt: "018" },
                { val: "", txt: "019" },
            ]
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
.remember_id{margin-top:20px;}
</style>