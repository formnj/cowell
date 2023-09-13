<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">회원정보수정</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content join_wrap">
            <h3>고객님의 안전한 정보 관리를 위해 비밀번호를 확인합니다.</h3>
            <ul class="form_group">
                <li>
                    <p class="form_tit">아이디</p>
                    <Inputs  input_type="text" id="아이디" placeholder="아이디 입력" err_text="에러문구" value="Cowell123***" isDisabled="true" />
                </li>
                <li>
                    <p class="form_tit required">비밀번호</p>
                    <Inputs class="explain" input_type="password" id="비밀번호" placeholder="영문+숫자+특수문자 조합 8자이상" value="" />
                    <!-- 23.04.03 추가 유효성 체크 -->
                    <p class="validation_chk">
                        <span class="pass">영문포함</span><!-- 통과 시 pass 클래스 추가 -->
                        <span class="pass">숫자포함</span>
                        <span>특수문자</span>
                        <span>8~20자이내</span>
                    </p>
                    <!-- //23.04.03 추가 유효성 체크 -->
                </li>
            </ul>

            <div class="btnSection">
                <router-link to="/mo/MB_05_01_01" class="btn_big btn_default"><em>확인</em></router-link>
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
