<template>
    <div class="content join_wrap">
        <h2>휴면계정 회원 복구가 완료되었습니다.</h2>
        <!-- 23.04.03 삭제
        <div>
            <div class="explain_wrap">
                <p>원활한 서비스 이용을 위해 비밀번호를 재설정 해주세요.</p>
            </div>

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
        </div> -->
        
        <div class="btnSection">
            <a href="#none" class="btn_big btn_cancel"><em>메인페이지 이동</em></a>
            <a href="#none" class="btn_big btn_default"><em>로그인</em></a>
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
h2 {margin-top:100px;}
.explain_wrap {margin-bottom:30px;}
.btnSection {margin-top:100px;}
</style>
