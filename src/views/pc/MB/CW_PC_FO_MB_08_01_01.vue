<template>
    <div class="content join_wrap">
        <h2>회원가입</h2>
        <div>
            <div class="join_tit">
                <p>회원가입 만 해도 <em>20% 할인쿠폰</em>과<br/> 최대 <em>5,000포인트</em> 즉시 지급</p>
            </div>
            <ul class="join_list">
                <!-- 23.04.20 순서 수정 -->
                <li>
                    <router-link class="default" to="/cowell/pc/MB_09_01_01">회원가입</router-link>
                </li>
                <li>
                    <router-link class="kakao" to="">카카오로 가입</router-link>
                </li>
                <li>
                    <router-link class="combine" to="">통합회원 전환</router-link>
                </li>
                <!-- //23.04.20 순서 수정 -->
            </ul>

            <dl class="tip_box">
                <dt>안내사항</dt>
                <dd>기존회원은 통합회원 전환 으로 가입하세요.<br/> 회원가입 문의 : 02-6390-8000 (내선3번)</dd>
            </dl>
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
.tip_box {margin-top:30px;}
</style>
