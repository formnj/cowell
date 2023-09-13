<template>
    <div class="sns_login">
        <strong>선택하신 SNS 계정</strong>
        <ul class="sso_wrap">
            <li class="naver"><!-- li에 naver, kakao, apple, google 클래스로 아이콘 변경 -->
                <a href="#none">네이버</a>
            </li>
        </ul>
        <p>코웰패션몰에 연결된 SNS계정이 아닙니다.<br/> <em>최초 1회 연결 후 간편하게 로그인</em> 할 수 있습니다.</p>
        <p>SNS 계정 연결은 언제든지 마이페이지에서 할 수 있습니다.</p>

        <ul class="form_group">
            <li>
                <Inputs input_type="text" id="아이디" placeholder="아이디" />
            </li>
            <li>
                <Inputs input_type="password" id="비밀번호" placeholder="비밀번호" />
            </li>
        </ul>

        <div class="btnSection">
            <a href="#none" class="btn_mid btn_cancel"><em>신규가입 후 연결</em></a>
            <a href="#none" class="btn_mid btn_default"><em>아이디 로그인 후 SNS 연결</em></a>
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
.sns_login {text-align:center;}
.sns_login strong {font-size:20px; line-height:30px;}
.sns_login p {margin-top:30px; font-size:16px; line-height:24px;}
.sns_login p + p {margin-top:20px;}
.sns_login p em {color:#00C293;}
.sso_wrap {margin-top:40px;}

@media screen and (max-width:1023px) {
    .sns_login p {margin-top:40px;}
    .form_group {margin-top:40px;}
    .btnSection {flex-direction: column-reverse;}
    .btn_mid {margin-top:10px; padding:19px 10px; font-size:18px;}
}
</style>