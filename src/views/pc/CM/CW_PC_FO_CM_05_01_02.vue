<template>
    <div class="content policy_wrap">
        <h2>비회원 약관 동의</h2>
        <ul>
            <li><strong>비회원 주문 시, 약관 동의 및 개인정보 수집,  이용동의에 모두 동의 합니다.</strong>
                <Inputs input_type="checkbox" />
            </li>
            <li>
                <strong>이용약관 동의 (필수)</strong>
                <Inputs input_type="checkbox" />
                <div>
                    <dl>
                        <dt>제1조 목적</dt>
                        <dd>제1조(목적) 이 약관은 코웰패션주식회사 (전자상거래 사업자)가 운영하는 코웰패션닷컴 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리 의무 및 책임사항을 규정함을 목적으로 합니다.※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」</dd>

                        <dt>제2조 정의</dt>
                        <dd>
                            <ul>
                                <li>① “몰”이란 코웰패션주식회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.③ ‘회원’이라 함은 “몰”에 개인정보를 제공하여 회원등록을 한 자로서, “몰”의 정보를 지속적으로 제공받</li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </li>
            <li>
                <strong>개인정보처리방침 (필수)</strong>
                <Inputs input_type="checkbox" />
                <div>
                    <p>코웰패션㈜(이하 “회사”라 함)는 회사가 운영하는 인터넷사이트(코웰패션몰, 이하 “사이트”라 함)를 이용하는 고객의 개인정보 및 권익을 보호하고 이와 관련된 고충을 원활하게 처리할 수 있도록 관계 법령에 따라 다음과 같이 개인정보처리방침을 두고 있습니다. 회사는 본 개인정보처리방침을 개정하는 경우 해당 웹사이트 공지(또는 개별공지)를 통해 공고할 예정입니다.</p>
                    <dl>
                        <dt>제1조 개인정보 수집 및 이용목적</dt>
                        <dd>회사는 개인정보를 다음 각 호의 목적을 위해 수집합니다. 수집한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
                            <ul>
                                <li>①홈페이지 회원가입 및 관리
                                    <p>회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 인증, 회원자격 유지 관리, 서비스 부정이용 방지, 만14세 미만 아동 회원가입 불가 및 주문 불가 고지, 각종 고지 통지, 고충처리, 분쟁 조정을 위한 기록 보존 등 목적</p>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'

export default {
    components: {
        Inputs,
    },
    data () {
        return {
        }
    },
    methods: {
    },
}
</script>

<style scoped>
.content.policy_wrap > ul > li:first-child {padding:30px 0; border-bottom:1px solid #ddd;}
.content.policy_wrap > ul > li > strong {display:inline-block;}
</style>