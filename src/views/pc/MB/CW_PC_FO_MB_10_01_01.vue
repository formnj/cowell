<template>
    <div class="content join_wrap">
        <h2>회원가입</h2>
        <div>
            <h3>약관동의</h3>

            <dl class="policy_check">
                <dt>
                    <Inputs input_type="checkbox" id="아이디" text="전체동의" />
                </dt>
                <dd>
                    <ul>
                        <li>
                            <Inputs input_type="checkbox" id="아이디" text="회원 이용약관" required_type="required" required_txt="(필수)" />
                            <a href="#none" class="see_more" @click.prevent="openModal('modalSkin'), modalTitle='회원 이용약관', modalContent='policy'">자세히 보기</a>
                        </li>
                        <li>
                            <Inputs input_type="checkbox" id="아이디" text="회원 개인정보 수집 및 이용동의" required_type="required" required_txt="(필수)" />
                            <a href="#none" class="see_more" @click.prevent="openModal('modalSkin'), modalTitle='회원 개인정보 수집 및 이용동의', modalContent='policy'">자세히 보기</a>
                        </li>
                        <li>
                            <Inputs input_type="checkbox" id="아이디" text="만 14세 이상 회원입니다" required_type="required" required_txt="(필수)" />
                            <a href="#none" class="see_more" @click.prevent="openModal('modalSkin'), modalTitle='14세 이상 회원', modalContent='policy'">자세히 보기</a>
                        </li>
                        <li>
                            <Inputs input_type="checkbox" id="아이디" text="서비스·이벤트 정보 제공을 위한 개인정보 수집 및 이용 동의" required_type="no_required" required_txt="(선택)" />
                            <a href="#none" class="see_more" @click.prevent="openModal('modalSkin'), modalTitle='개인정보 수집 및 이용 동의', modalContent='policy'">자세히 보기</a>
                            <ul>
                                <li><Inputs input_type="checkbox" id="아이디" text="이메일" /></li>
                                <li><Inputs input_type="checkbox" id="아이디" text="SMS" /></li>
                                <li><Inputs input_type="checkbox" id="아이디" text="APP" /></li>
                            </ul>
                            <div class="explain_wrap">
                                <p>광고 정보 수신동의를 하시면 상품 및 이벤트 정보를 받으실 수 있습니다. (1회한정 2,000 포인트 지급)</p>
                                <strong>선택 항목에 동의하지 않더라도 코웰패션 회원가입 및 기본 서비스를 이용하실 수 있습니다.</strong>
                            </div>
                        </li>
                    </ul>
                </dd>
            </dl>

            <div class="btnSection">
                <router-link class="btn_big btn_default" to="/cowell/pc/MB_11_01_01"><em>다음</em></router-link>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle">
            <policy01></policy01>
        </ModalSkin>
    </div>
</template>

<script>
    import Inputs from "@/components/Inputs.vue";
    import ModalSkin from "@/components/ModalSkin"
    import policy01 from "@/views/mo/MB/CW_MO_FO_MB_10_02_01";

    export default {
        name: 'App',
        components: {
            Inputs,
            policy01,
            ModalSkin,
        },
        data() {
            return {
                modalTitle: '',
                modalContent: '',
            };
        },
        mounted(){
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
.explain_wrap {margin-top:30px;}
.policy_check .explain_wrap {margin-top:30px; margin-left:35px;}
</style>
