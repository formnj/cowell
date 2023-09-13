<template>
    <div>
        <h2>
            <button class="back"></button>아이디 찾기
        </h2>

        <div class="content join_wrap">
            <div class="id_info">
                <span class="thumb">
                    <em><img src="@/assets/images/mo/common/img_mem_default.png" /></em>
                </span>
                <p>김나나님의 아이디는<br/> <em>whh123****</em> 입니다.</p>
            </div>

            <div>
                <div class="mem_bottom_btn"><!-- 로그인 실패 시 회원가입, 비회원 주문조회 버튼 순 -->
                    <router-link to="/cowell/mo/MB_01_01_01" class="btn_big btn_default"><em>로그인</em></router-link>
                    <router-link to="/cowell/mo/MB_04_01_01" class="btn_big btn_cancel"><em>비밀번호 변경</em></router-link>
                </div>
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
.id_info {margin-top:30px; text-align:center;}
.id_info .thumb {width:107px; height:107px; margin:0 auto 30px; background-color:#D9D9D9; border-radius:50%; position:relative; overflow:hidden; display:block;}
.id_info p {font-size:16px; font-weight:700; line-height:30px;}
.id_info p em {color:#00C293;}
.mem_bottom_btn {margin-top:40px;}
.mem_bottom_btn * + * {margin-top:10px;}
</style>
