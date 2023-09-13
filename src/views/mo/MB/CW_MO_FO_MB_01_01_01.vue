<template>
    <div>
        <h2>
            <button class="back"></button>
            로그인
        </h2>
        <div class="content join_wrap">
            <h3>코웰패션에서 즐거운 쇼핑하세요!</h3>
            <ul class="form_group">
                <li>
                    <Inputs input_type="text" id="아이디" placeholder="아이디" />
                </li>
                <li>
                    <Inputs input_type="password" id="비밀번호" placeholder="비밀번호" />
                </li>
            </ul>

            <!-- 로그인 실패 시 -->
            <div class="login_fail">
                <p>아래 이미지의 자동입력 방지 문자를 보이는 대로 입력해 주세요.</p>
                <ul class="form_group">
                    <li>
                        <div class="multi_form">
                            <div>
                                <Inputs  input_type="text" id="id_pass" placeholder="Placeholder" err_text="에러문구" value="0000" />
                                <button class="btn_mid btn_default refresh"><em>새로고침</em></button>
                            </div>
                            <em>에러문구</em>
                        </div>
                    </li>
                    <li>
                        <Inputs input_type="text" id="켑챠" placeholder="자동입력 방지문자 입력" />
                    </li>
                </ul>
            </div>
            <!-- //로그인 실패 시 -->

            <p class="remember_id">
                <Inputs input_type="checkbox" id="아이디저장" text="아이디 저장" />
                <Inputs input_type="checkbox" id="자동로그인" text="자동로그인" />
            </p>

            <div class="btnSection">
                <router-link class="btn_big btn_confirm" to="/cowell/mo/MB_01_07_01"><em>로그인</em></router-link>
            </div>

            <!-- 아이디/비밀번호 찾기 -->
            <ul class="find_idpw">
                <li>
                    <router-link to="/cowell/mo/MB_02_01_01">아이디 찾기</router-link>
                </li>
                <li>
                    <a href="#none" @click.prevent="openModal('modalSkin'), modalTitle='비밀번호 변경안내', modalContent='change_pw'">비밀번호 변경</a>
                </li>
            </ul>
            <!-- 아이디/비밀번호 찾기 -->

            <!-- sns login -->
            <ul class="sso_wrap">
                <li class="kakao">
                    <a href="#none" @click.prevent="openModal('modalSkin'), modalTitle='SNS 로그인', modalContent='sso'">카카오</a>
                </li>
                <li class="naver">
                    <a href="#none">네이버</a>
                </li>
                <li class="apple">
                    <a href="#none">애플</a>
                </li>
                <li class="google">
                    <a href="#none">구글</a>
                </li>
            </ul>
            <!-- //sns login -->

            <div class="mem_bottom_btn"><!-- 로그인 실패 시 회원가입, 비회원 주문조회 버튼 순 -->
                <a href="#none" class="btn_big btn_default"><em>비회원 주문조회</em></a>
                <router-link to="/cowell/mo/MB_08_01_01" class="btn_big btn_cancel"><em>회원가입</em></router-link>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'bottom'">
            <sso v-if="modalContent === 'sso'" />
            <changePW v-if="modalContent === 'change_pw'" />
        </ModalSkin>
    </div>
</template>

<script>
    import Inputs from "@/components/Inputs.vue";

    import sso from "@/views/pc/MB/CW_PC_FO_MB_01_03_01";
    import changePW from "@/views/pc/MB/CW_PC_FO_MB_01_08_01";
    import ModalSkin from "@/components/ModalSkin"

    export default {
        name: 'App',
        components: {
            Inputs,
            sso,
            changePW,
            ModalSkin,
        },
        data() {
            return {
                modalTitle: '',
                modalContent: '',
            };
        },
        mounted(){
            $('.content').css({
                minHeight:$(window).height() - ($('footer').height() + $('h2').outerHeight())
            });
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
    .remember_id {margin-top:20px;}
    .find_idpw {margin-top:20px; font-size:12px; display:flex;}
    .find_idpw li + li {margin-left:20px;}
    .login_fail {margin-top:20px;}
    .login_fail p {color:#00C293; font-size:12px;}

    .mem_bottom_btn {margin-top:50px;}
    .mem_bottom_btn * + * {margin-top:20px;}

    #modal.active::v-deep .form_group > li + li {padding-top:10px;}
</style>
