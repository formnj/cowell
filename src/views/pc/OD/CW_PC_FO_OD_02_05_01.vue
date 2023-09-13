<template>
    <div class="policy_wrap">
        <div class="explain_wrap">
            <p>코웰패션은 회원 고객님에게 서비스 제공을 위하여 아래와 같이 개인정보를 수집, 이용합니다.</p>
            <p>개인정보 수집 및 이용에 동의를 거부할 수 있습니다. 다만, 동의를 거부하시는 경우 회원 상품 구매 및 배송서비스를 이용하실 수 없음을 알려드립니다.</p>
            <p>코웰패션의 개인정보취급에 대한 자세한 사항은 “개인정보취급(처리)방침”을 확인하여 주시기 바랍니다.</p>
        </div>

        <div class="table_wrap type_default type_noBorder mt30">
            <table>
                <colgroup>
                    <col style="width:85px;" />
                    <col />
                </colgroup>
                <tbody>
                    <!-- 비회원 -->
                    <tr>
                        <th>목적</th>
                        <td>
                            <div class="list_bullet">
                                <ul>
                                    <li>상품 배송 및 서비스 제공을 위한 사용자 정보 확인</li>
                                    <li>상품 구매에 대한 대금결제 및 취소</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>항목</th>
                        <td>
                            <div class="list_bullet">
                                <ul>
                                    <li>배송의뢰인 및 수령인의 성명, 전화번호, 휴대폰번호, 주소, 이메일주소</li>
                                    <li>신용카드정보, 은행계좌정보, 휴대폰가입정보</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>보유 및 이용기간</th>
                        <td>
                            <div class="list_bullet">
                                <ul>
                                    <li>5년 보관<br/> (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <!-- //비회원 -->
                    <!-- 회원 -->
                    <tr>
                        <th>목적</th>
                        <td>
                            <div class="list_bullet">
                                <ul>
                                    <li>주문 및 배송서비스</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>항목</th>
                        <td>
                            <div class="list_bullet">
                                <ul>
                                    <li>수취인 성명, 휴대폰번호, 배송지 주소</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>보유 및 이용기간</th>
                        <td>
                            <div class="list_bullet">
                                <ul>
                                    <li>5년 보관<br/> (전자상거래 등에서의 소비자보호에 관한 법률)</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <!-- //회원 -->
                </tbody>
            </table>
        </div>
        <p class="explain02 mt30">위와 같이 개인정보를 수집/이용하는데 동의합니다.</p>
    </div>
</template>

<script>
export default {
  props: {
  },
};
</script>

<style scoped>
.policy_wrap {font-size:12px; line-height:16px;}
.list_bullet > ul > li {padding-bottom:5px;}
.explain02 {font-size:14px;}
</style>