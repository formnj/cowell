<template>
    <div>
        <!-- 아이디 중복확인 -->
        <p>아이디는 서비스 제공을 위한 최소한의 필수 항목입니다. ‘확인’을 누르시면 제공 항목을 다시 선택 하실 수 있습니다.</p>
        <div class="btnSection">
            <button class="btn_mid btn_cancel"><em>취소</em></button>
            <button class="btn_mid btn_default"><em>확인</em></button>
        </div>
        <!-- //아이디 중복확인 -->
        <!-- 이메일 중복확인 -->
        <p>만 14세 이상 회원여부를 확인해주세요.</p>
        <div class="btnSection">
            <button class="btn_mid btn_default"><em>확인</em></button>
        </div>
        <!-- //이메일 중복확인 -->
    </div>
</template>

<script>
    export default {
        props: {
            modalCont: String
        },
    mounted(){
    }
};
</script>

<style scoped>
</style>