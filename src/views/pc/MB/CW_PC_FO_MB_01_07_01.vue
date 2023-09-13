<template>
    <div class="content join_wrap">
        <h2>회원님의 계정은 현재 휴면 상태입니다.</h2>
        <div>
            <dl class="tip_box">
                <dd>휴대폰 본인인증이 불가한 회원님께서는 02-6390-8000(내선3번) 를 통해 문의해주세요.<br/> 휴면계정 회원은 로그인, 포인트 적립 및 사용 등 서비스 이용이 제한될 수 있습니다.</dd>
            </dl>

            <router-link class="btn_certifi" to="/cowell/pc/MB_01_07_02"><em>휴대폰 인증</em></router-link>

            <div class="explain_wrap">
                <p>개인정보 보호법 제39조 6(개인정보의 파기에 대한 특례)에 의거하여 코웰패션에서는 회원님의 정보를 안전하게 보호하기 위해 전 1년간 로그인, 구매 등 이용이 없는 회원님의 정보를 휴면 회원계정으로 전환하여 별도 분리 저장하는 정책을 실시하고 있습니다.<br/> (기존에 등록하신 회원정보가 불명확하여 복원이 불가한 경우 신규가입을 해주시기 바랍니다.)</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {
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
.explain_wrap {margin-top:30px;}
</style>
