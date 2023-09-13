<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">배송지 관리</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content pt10">
            <div class="section_group no_bd">
                <div class="section pt0 pb0">
                    <div class="order_empty">
                        <p>등록된 배송지가 없습니다.</p>
                    </div>
                    <div class="btnSection">
                        <a href="" class="btn_big btn_default" >
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
                    <div class="btnSection">
                        <a href="" class="btn_big btn_white">
                            <em>기본 배송지로 지정</em>
                        </a>
                        <a href="" class="btn_big btn_default" @click.prevent="openModal('modalSkin'), modalTitle='배송지 추가'">
                            <em>배송지 추가</em>
                        </a>
                    </div>
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
.order_empty{border-top:none;}
.remember_id{margin-top:20px;}
</style>