<template>
    <div class="content join_wrap">
        <h2>아이디 찾기</h2>
        <div>
            <h3>회원정보로 찾기
                <p class="explain">회원가입시 등록한 이름과 휴대폰번호를 입력하세요.</p>
            </h3>
            <ul class="form_group">
                <li>
                    <Inputs input_type="text" id="아이디" placeholder="아이디" />
                </li>
                <li>
                    <Inputs input_type="number" id="아이디" placeholder="-없이 휴대폰번호 입력" />
                </li>
            </ul>

            <div class="btnSection">
                <router-link class="btn_big btn_default" to="/cowell/pc/MB_03_01_01"><em>아이디 찾기</em></router-link>
            </div>

            <h3>본인인증으로 찾기
                <p class="explain">본인인증시 아이디 전체를 확인하실 수 있습니다.<br/> 본인명의의 휴대폰이어야 합니다.</p>
            </h3>
            <router-link class="btn_certifi" to="/cowell/mo/MB_10_01_01"><em>휴대폰 인증</em></router-link>

            <div class="btnSection">
                <router-link class="btn_big btn_cancel" to="/cowell/pc/MB_08_01_01"><em>회원가입</em></router-link>
                <router-link class="btn_big btn_confirm" to="/cowell/pc/MB_04_01_01"><em>비밀번호 변경</em></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Inputs from "@/components/Inputs.vue";

    export default {
        name: 'App',
        components: {
            Inputs,
        },
        data() {
            return {
            };
        },
        mounted(){
        }
    }
</script>

<style scoped>
</style>
