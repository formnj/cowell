<template>
    <div class="section_group">
        <div class="section">
            <h4>무이자 할부 안내</h4>
            <div class="table_wrap type_default type_noBorder">
                <table>
                    <colgroup>
                        <col style="width:30%;" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>롯데카드<br/> 삼성카드<br/> 신한카드<br/> KB국민카드<br/> BC카드</th>
                            <td>
                                <em>5만원 이상 결제시</em><br/> 2~3개월 무이자 할부
                            </td>
                        </tr>
                        <tr>
                            <th>NH농협카드</th>
                            <td>
                                <em>5만원 이상 결제시</em><br/> 2~4개월 무이자 할부
                            </td>
                        </tr>
                        <tr>
                            <th>하나카드</th>
                            <td>
                                <em>5만원 이상 결제시</em><br/> 2~8개월 무이자 할부
                            </td>
                        </tr>
                        <tr>
                            <th>현대카드</th>
                            <td>
                                <em>1만원 이상 결제시</em><br/> 2~3개월 무이자 할부
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="section">
            <h4>부분 무이자 할부 안내</h4>
            <div class="table_wrap type_default type_noBorder">
                <table>
                    <colgroup>
                        <col style="width:30%;" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>현대카드</th>
                            <td>
                                <em>잔여 회사 해당 카드사 부담</em><br/> 6개월 1~3회차 수수료 고객 부담<br/> 10개월 1~4회차 수수료 고객 부담<br/> 12개월 1~5회차 수수료 고객 부담
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {
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
em {color:#888;}
.section .table_wrap {margin-top:30px;}
.section + .section table th {font-size:14px;}
</style>