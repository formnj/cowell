<template>
    <div>
        <ul class="form_group">
            <li class="required">
                <p class="form_tit"><em>주소별칭</em></p>
                <Inputs input_type="text" placeholder="임시용" />
            </li>
            <li class="required">
                <p class="form_tit"><em>받는 분</em></p>
                <Inputs input_type="text" placeholder="성함을 입력해주세요." />
            </li>
            <li class="required">
                <p class="form_tit"><em>휴대폰</em></p>
                <Inputs input_type="text" placeholder="‘-’없이 숫자만 입력" />
            </li>
            <li>
                <p class="form_tit"><em>전화번호 </em></p>
                <Inputs input_type="text" placeholder="전화번호를 입력해주세요." />
            </li>
            <li class="required top">
                <p class="form_tit"><em>배송주소</em></p>
                <div>
                    <div class="multi_form">
                        <div>
                            <Inputs  input_type="text" placeholder="" value="68834" err_text="에러문구" />
                            <button class="btn_mid btn_default"><em>우편번호</em></button>
                        </div>
                        <em>에러문구</em>
                    </div>
                    <p>
                        <em>도로명</em>
                        <span>서울특별시 영등포구 여의대로 108 파크원타워, 00층</span>
                    </p>
                    <p>
                        <em>지번</em>
                        <span>서울특별시 영등포구 여의도동 22 파크원타워, 00층 </span>
                    </p>
                </div>
            </li>
        </ul>

        <div class="btnSection">
            <a href="#none" class="btn_mid btn_cancel"><em>취소</em></a>
            <a href="#none" class="btn_mid btn_default"><em>초기화</em></a>
        </div>
        <div>
            <a href="#none" class="btn_mid btn_default"><em>등록</em></a>
        </div>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue';

    export default {
        name: 'App',
        components: {
            Inputs,
        },
        data() {
            return {
            };
        },
        methods: {
        }
    }
</script>

<style scoped>
.form_group {margin-top:0;}
.form_group > li {display:flex; align-items:center;}
.form_group > li + li {padding-top:30px;}
.form_group > li.top {align-items:start;}
.form_group > li.top .form_tit {margin-top:13px;}
.form_tit {width:130px;}
.form_tit + * {flex:1;}
.required .form_tit em:after {margin-left:5px; color:#00C294; font-size:18px; vertical-align:top; content:'*'; display:inline-block;}

li div p {margin-top:20px; font-size:16px; display:flex;}
li div p + p {margin-top:12px;}
li div p em {width:65px;}
li div p span {flex:1;}

.btnSection {margin-top:30px;}
.btnSection + div {margin-top:20px;}
</style>