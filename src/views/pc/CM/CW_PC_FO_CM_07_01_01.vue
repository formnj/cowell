<template>
    <div class="content policy_wrap" style="width:500px;">
        <h2>제휴안내</h2>
        <ul>
            <li>
                <p>독창적인 아이디어나 사업모델을 가지고 계신 분은 언제든지 제안을 주세요.</p>
            </li>
            <li>
                <strong>제안 절차</strong>
                <ul>
                    <li>1. 제휴 및 제안 접수 : 메일로 제안(연락처와 성함 필수)</li>
                    <li>2. 담당자 검토 : 2~3일 정도 소요 됩니다.</li>
                    <li>3. 연락 : 좋은 제안에 대해 연락을 드립니다.</li>
                    <li>4. 채택 및 실행 : 채택이 되면 계약을 체결하고 실행을 합니다.</li>
                </ul>
            </li>
            <li>
                <strong>접수 방법</strong>
                <ul>
                    <li><p>아래의 이메일로 제휴 문의 바랍니다.<br/> jss@cowellfashion.co.kr</p></li>
                    <li>
                        <p>COWELLFASHION KAKAO FRIEND</p>
                        <p>코웰패션닷컴 카카오 플러스 친구가 되시면 다양한 쇼핑정보 및 혜택을 받아보실 수 있습니다.</p>
                    </li>
                </ul>
            </li>
            <li>
                <dl>
                    <dt>고객센터</dt>
                    <dd>02-6390-8000 (내선 3번)</dd>
                </dl>
                <dl>
                    <dt>영업시간</dt>
                    <dd>09:00 AM ~ 18:00 PM</dd>
                </dl>
                <dl>
                    <dt>점심시간</dt>
                    <dd>12:00 PM ~ 13:00 PM</dd>
                </dl>
                <dl>
                    <dt>공휴일</dt>
                    <dd>SATURDAY / SUNDAY / HOLIDAY</dd>
                </dl>
            </li>
        </ul>

        <div class="btnSection">
            <a href="#none" class="btn_big btn_default"><em>등록하기</em></a>
        </div>
    </div>
</template>

<script>
import SelectBox from '@/components/SelectBox.vue'

export default {
    components: {
        SelectBox,
    },
    data () {
        return {
            options: [
                { val: "value", txt: "이전 이용약관 보기" },
                { val: "value", txt: "2022-12-30" },
            ],
        }
    },
    methods: {
    },
}
</script>

<style scoped>
    dl {font-size:16px; display:flex;}
    dl + dl {margin-top:10px;}
    dt {width:90px;}
    dd {margin-top:0 !important;}
</style>