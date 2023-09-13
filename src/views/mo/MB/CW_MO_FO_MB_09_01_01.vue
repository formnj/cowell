<template>
    <div>
        <h2>
            <button class="back"></button>
            회원가입
        </h2>
        <div class="content">
            <h3>코웰패션 회원가입을 환영합니다.</h3>
            <dl class="tip_box">
                <dd>본인인증을 통해 회원가입후 제품구매시 즉시 사용 가능한 포인트를 최대 5,000 포인트를 드리며, 20%할인쿠폰, 배송비 무료쿠폰 등이 제공됩니다.</dd>
            </dl>

            <router-link class="btn_certifi" to="/cowell/mo/MB_10_01_01"><em>휴대폰 인증</em></router-link>

            <div class="explain_wrap">
                <p>본인인증을 위해 입력한 정보는 본인인증 용도 외 다른 용도로 이용되지 않습니다.</p>
                <p>정보통신망법(2012.08.18 시행) 제 23조 2(주민번호 사용제한) 규정에 따라 온라인 상 주민번호의 수집/이용을 제한합니다.</p>
                <p>법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</p>
                <strong>만14세 미만은 회원가입을 제한합니다.</strong>
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
            $('.content').css({
                minHeight:$(window).height() - ($('footer').height() + $('h2').outerHeight())
            });
        }
    }
</script>

<style scoped>
.explain_wrap {margin-top:30px;}
</style>
