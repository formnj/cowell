<template>
    <div>
        <h2>
            <button class="back"></button>
            비회원 주문조회
        </h2>        
        <div class="content join_wrap">
            <h3>주문시 입력한 이름과 휴대폰번호, 주문번호를 정확히 입력해주세요.</h3>
            <ul class="form_group">
                <li>
                    <Inputs  input_type="text" id="" placeholder="주문자 이름" err_text="에러문구" value="" />
                </li>
                <li>
                    <Inputs class="err"  input_type="number" id="" placeholder="-없이 휴대폰번호 입력" err_text="에러문구" value="" />
                </li>
                <li>
                    <Inputs class="err"  input_type="number" id="" placeholder="주문번호" err_text="에러문구" value="" />
                </li>
            </ul>

            <div class="btnSection">
                <a href="#none" class="btn_big btn_cancel"><em>회원가입</em></a>
                <a href="#none" class="btn_big btn_default"><em>주문조회</em></a>
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
