<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">포인트 내역</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <div class="my_summary pt0">
                <div class="count_box half">
                    <div class="cell">
                        <span class="title">보유 포인트</span>
                        <em class="count">99,999,999<span class="unit">포인트</span></em>
                    </div>
                    <div class="cell">
                        <span class="title">소멸예정 포인트</span>
                        <em class="count">99,999,999<span class="unit">포인트</span></em>
                    </div>
                </div>
            </div>

            <div class="section_group pb0">
                <div class="section pb0">
                    <Tabs tabClass="tab_type_05" :tab_item="tab_item_month" :tabidx="tabidx2" />

                    <div class="multi_form">
                        <div>
                            <label for="calendarStart" class="input_calendar" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCalendar'">
                                <input type="text" id="calendarStart" readonly="readonly" value="2023-12-14">
                            </label>
                            <span>~</span>
                            <label for="calendarEnd" class="input_calendar" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalCalendar'">
                                <input type="text" id="calendarEnd" readonly="readonly" value="2023-12-14">
                            </label>
                        </div>
                        <em>에러문구</em>
                    </div>

                    <div class="btnSection">
                        <a href="" class="btn_default btn_mid" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalPeriod'">
                            <em>조회</em>
                        </a>
                    </div>
                </div>

                <div class="section">
                    <div class="order_empty">
                        <p>포인트 내역이 없습니다.</p>
                    </div>

                    <div class="list_point_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>상세내역</th>
                                    <th class="align_right">금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="expired">
                                    <th>
                                        <strong class="title">기간만료</strong>
                                        <div class="context">
                                            <p>[주문번호] 1234567890</p>
                                            <p>[주문날짜] 2023.12.14</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p class="point">-1,000원</p>
                                    </td>
                                </tr>
                                <tr class="saved">
                                    <th>
                                        <strong class="title">구매확정</strong>
                                        <div class="context">
                                            <p>[주문번호] 1234567890</p>
                                            <p>[주문날짜] 2023.12.14</p>
                                        </div>
                                        <div class="d_day">
                                            <p>포인트 소멸 예정</p>
                                            <p>2023.12.14</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p class="point">+1,000원</p>
                                    </td>
                                </tr>
                                <tr class="spent">
                                    <th>
                                        <strong class="title">상품구매</strong>
                                        <div class="context">
                                            <p>[주문번호] 1234567890</p>
                                            <p>[주문날짜] 2023.12.14</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p class="point">-1,000원</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- 포인트 이용 안내 -->
            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">포인트 이용 안내</strong>
                    </h4>

                    <div class="list_bullet">
                        <ul>
                            <li>포인트는 상품 구매나 구매후기 작성 등을 통해 적립이 가능합니다.</li>
                            <li>1 포인트는 현금 1원과 같으며 10원 단위로 사용이 가능합니다.</li>
                            <li>포인트는 상품 구매 시 현금과 동일하게 사용이 가능하고 현금이나 다른 혜택으로의 전환은 불가능합니다.</li>
                            <li>상품 구매 시 적립된 포인트의 유효기간은 6개월이며, 유효기간이 지난 포인트는 자동 소멸됩니다.</li>
                            <li>이벤트성 포인트는 소멸기간이 다르니 해당 이벤트 페이지 내 공지된 유효기간을 꼭 확인해 주세요.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
    components: {
        Tabs,
    },
    data () {
        return {
            tabidx2: 0,
            tab_item_month: [
                { item: "1개월" },
                { item: "3개월" },
                { item: "6개월" },
                { item: "1년" },
            ],
        }
    },
}
</script>

<style scoped>
.tab_wrap{margin-bottom:15px;}
.btnSection{margin-top:15px;}
::v-deep .tab_type_05 > li a{height:38px;line-height:38px !important;padding-bottom:0;}
.order_empty{border-top:none;margin-top:0;}
</style>