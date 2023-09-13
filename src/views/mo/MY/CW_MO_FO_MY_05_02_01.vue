<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">간편로그인 연결</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>
        <div class="content join_wrap">
            <div class="join_tit">
                <p>로그인시 연동할 SNS를 선택해주세요.</p>
            </div>
            <ul class="join_list">
                <li>
                    <router-link class="combine" to="">네이버 로그인 연동</router-link>
                </li>
                <li>
                    <router-link class="kakao" to="">카카오 로그인 연동해제</router-link>
                </li>
                <li>
                    <router-link class="apple" to="">애플 로그인 연동</router-link>
                </li>
                <li>
                    <router-link class="default" to=""><div>구글 로그인 연동</div></router-link><!-- 구글 로그인 연동 API 적용으로 :after 처리 -->
                </li>
            </ul>

            <dl class="tip_box">
                <dt>안내사항</dt>
                <dd>
                    네이버/카카오/애플/구글 계정과 연동하여 간편하게 로그인 하실 수 있는 기능을 연동하거나 연동된 계정을 해제하실 수 있습니다. <br>
                    로그인 연동/해제는 SNS 계정을 고객님의 기본 가입계정에 설정하는 것이며, 계정이 변경되거나 탈퇴가 되는 것은 아닙니다. <br>
                    SNS 로그인을 연동하였더라도 기본 가입 계정으로 로그인이 가능합니다.
                </dd>
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
.tip_box {margin-top:20px;}
</style>
