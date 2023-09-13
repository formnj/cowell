<template>
    <div>
        <h2>
            <button class="back"></button>
            비밀번호 변경
        </h2>        
        <div class="content join_wrap">
            <h3>새로운 비밀번호를 설정해주세요.</h3>
            <ul class="form_group">
                <li>
                    <Inputs  input_type="password" id="id_pass" placeholder="영문+숫자+특수문자 조합 8자이상" err_text="에러문구" value="" />
                    <p class="info_explain">영문, 숫자, 특수문자 3가지 조합 8자리 이상.</p>
                </li>
                <li>
                    <Inputs class="err"  input_type="password" id="id_pass_confirm" placeholder="한번 더 입력해주십시오." err_text="비밀번호를 다시 확인해 주세요." value="" />
                </li>
            </ul>

            <div class="btnSection">
                <a href="#none" class="btn_big btn_default"><em>확인</em></a>
            </div>

            <dl class="tip_box">
                <dd>비밀번호 설정 시 아이디와 같거나 주민등록번호, 생일, 학번, 전화번호 등 개인정보와 관련된 숫자, 반복된 동일 숫자 등 다른 사람이 알기 쉬운 비밀번호는 사용하지 않도록 주의 부탁 드립니다.</dd>
            </dl>
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
