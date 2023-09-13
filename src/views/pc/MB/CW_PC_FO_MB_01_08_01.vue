<template>
    <div>
        <h3>소중한 고객님의 개인정보 보호를 위해 <em>비밀번호를 변경</em>해주세요. </h3>

        <div class="explain_wrap">
            <p>고객님의 개인정보를 안전하게 보호하고, 개인정보도용으로 인한 피해를 예방하기 위해 90일 이상 비밀번호를 변경하지 않은 고객님에게 비밀번호 변경을 안내하고 있습니다.<br/> 비밀번호는 영문자 (대소문자), 숫자, 특수문자를 조합하여 사용하시는 것이 안전하며 주기적 (최소 3개월)으로 변경하시기 바랍니다.</p>
        </div>

        <dl class="tip_box">
            <dd>본인명의의 휴대폰으로 인증절차를 거친 후 새로운 비밀번호를 설정하실 수 있습니다.<br/> 본인확인을 위해 공인인증기관, 통신사 등을 통하여 이용자의 신원을 확인하는 절차에 동의합니다.<br/> (입력하신 정보는 본인확인을 위해 인증기관에 제공되며, 본인확인 용도 외에 사용되거나 저장되지 않습니다.)</dd>
        </dl>

        <div class="btnSection">
            <a href="#none" class="btn_mid btn_cancel"><em>90일 후 변경</em></a>
            <router-link to="/cowell/pc/MB_01_08_03" class="btn_mid btn_default"><em>비밀번호 변경</em></router-link>
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

.tip_box {margin-top:30px;}
</style>