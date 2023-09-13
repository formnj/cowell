<template>
    <div>
        <h2>
            <button class="back"></button>비밀번호 찾기
        </h2>
        <div class="content join_wrap">
            <h3>아이디 확인 및 본인 인증을 통해 비밀번호를 재설정 할 수 있습니다.</h3>
            <ul class="form_group">
                <li>
                    <Inputs  input_type="text" id="아이디" placeholder="아이디 입력" err_text="에러문구" value="" />
                </li>
                <!-- 23.04.03 삭제 <li>
                    <Inputs  input_type="text" id="아이디" placeholder="이름 입력" err_text="에러문구" value="" />
                </li>
                <li>
                    <Inputs  input_type="number" id="아이디" placeholder="-없이 휴대폰번호 입력" err_text="에러문구" value="" />
                </li> -->
            </ul>

            <div class="btnSection">
                <router-link to="/cowell/mo/MB_05_01_01" class="btn_big btn_default"><em>본인 인증하기</em></router-link>
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
