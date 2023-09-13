<template>
    <div>
        <h2>
            <button class="back"></button>비밀번호 변경
        </h2>
        <div class="content join_wrap">
            <h3>회원정보가 확인되었습니다.<br/> 비밀번호를 다시 설정해 주시기 바랍니다.</h3>
            <ul class="form_group">
                <li>
                    <p class="form_tit required">새비밀번호</p>
                    <Inputs  input_type="password" id="id_pass" placeholder="영문+숫자+특수문자 조합 8자이상" err_text="에러문구" value="" />
                    <p class="info_explain">영문, 숫자, 특수문자 3가지 조합 8자리 이상.</p>
                </li>
                <li>
                    <p class="form_tit required">새비밀번호 확인</p>
                    <Inputs class="err"  input_type="password" id="id_pass_confirm" placeholder="한번 더 입력해주십시오." err_text="비밀번호를 다시 확인해 주세요." value="" />
                </li>
            </ul>

            <div class="btnSection">
                <a href="#none" class="btn_big btn_default"><em>비밀번호 변경</em></a>
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
.tip_box {margin-top:30px;}
.form_group li + li {padding-top:10px;}
</style>
