<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">임직원 혜택</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <h4>
                <strong class="title bold">한도 내역</strong>
            </h4>
            <div class="gray_box pale mt10">
                <table>
                    <tbody>
                        <tr>
                            <th class="al">총 한도</th>
                            <td class="align_right">999,999,999원</td>
                        </tr>
                        <tr>
                            <th class="al">잔여한도</th>
                            <td class="align_right">999,999,999원</td>
                        </tr>
                    </tbody>
                </table>
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
                                            <p>주문번호 1234567890</p>
                                            <p>2023.12.14</p>
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
                                            <p>주문번호 1234567890</p>
                                            <p>2023.12.14</p>
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
                                            <p>주문번호 1234567890</p>
                                            <p>2023.12.14</p>
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

            <!-- 임직원 혜택 이용 안내 -->
            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">임직원 혜택 이용 안내</strong>
                    </h4>

                    <div class="list_bullet">
                        <ul>
                            <li>임직원 혜택 적용 시 쿠폰은 사용하실 수 없고 포인트 적립도 불가합니다.</li>
                            <li>임직원 등급별 할인율과 총 한도가 부여되며 매년 1월 1일 한도가 초기화되어 갱신됩니다.</li>
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