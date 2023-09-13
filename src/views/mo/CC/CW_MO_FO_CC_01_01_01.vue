<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title al">고객센터</strong>
        </h2>

        <div class="content pt0">
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_customer" :tabidx="tabidx" />

            <div class="section_group pb20">
                <div class="section">
                    <h4>
                        <strong class="title large icon headset">코웰패션 고객센터</strong>
                    </h4>

                    <div class="gray_box formal mb30">
                        <table>
                            <tbody>
                                <tr>
                                    <th width="70">연락처</th>
                                    <td>02-6390-8000 (내선3번)</td>
                                </tr>
                                <tr>
                                    <th>영업시간</th>
                                    <td>09:00 ~ 18:00</td>
                                </tr>
                                <tr>
                                    <th>점심시간</th>
                                    <td>12:00 ~ 13:00</td>
                                </tr>
                                <tr>
                                    <th>공휴일</th>
                                    <td>SATURDAY / SUNDAY / HOLIDAY</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="shortcut_customer">
                        <ul>
                            <li><a href=""><span class="icon delivery"></span>주문/배송조회</a></li>
                            <li><a href=""><span class="icon refund"></span>반품/교환/취소</a></li>
                            <li><a href=""><span class="icon inquire"></span>상품문의</a></li>
                            <li><a href=""><span class="icon oneonone"></span>1:1문의</a></li>
                            <li><a href=""><span class="icon point"></span>포인트내역</a></li>
                            <li><a href=""><span class="icon faq"></span>자주하는질문</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section_group pb20 no_bd">
                <div class="section">
                    <h4 class="pb10">
                        <strong class="title large">자주하는 질문</strong>
                        <a href="" class="link">더보기</a>
                    </h4>
                    <div class="list_goods_inquire">
                        <dl>
                            <template v-for="(item) in 5">
                                <dt>
                                    <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">
                                        <div class="cont">
                                            <strong class="title question">[포인트 및 이벤트] 구매확정 됐는데 포인트 적립은 언제 되나요?</strong>
                                        </div>
                                    </button>
                                </dt>
                                <dd>
                                    <div class="cont">
                                        <div class="answer">
                                            <p>구매확정은 상품 수령일 기준으로 7일 경과 시, 자동으로 택배사 구매확정이 진행되어 이후 적립 진행 가능합니다. (구매확정 건은 교환,반품이 불가합니다.)</p>
                                        </div>
                                    </div>
                                </dd>
                            </template>
                        </dl>
                    </div>
                </div>
            </div>

            <div class="section_group pb20 no_bd">
                <div class="section">
                    <h4 class="pb10">
                        <strong class="title large">공지사항</strong>
                        <a href="" class="link">더보기</a>
                    </h4>
                    <div class="list_goods_inquire">
                        <dl>
                            <template v-for="(item) in 5">
                                <dt>
                                    <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">
                                        <div class="info"><span>23.12.14</span></div>
                                        <div class="cont">
                                            <strong class="title">[이벤트] 리뉴얼 3주년 기념 생일축하 이벤트 당첨자 안내</strong>
                                        </div>
                                    </button>
                                </dt>
                                <dd>
                                    <div class="cont">
                                        <div class="pl10">
                                            <p>안녕하세요 코웰패션주식회사 입니다. <br> 저희 코웰패션주식회사는 푸마, 아디다스, 아디다스 오리지널, 캘빈클라인 등 글로벌 브랜드사와 정식으로 계약을 체결하여 브랜드 상품을 수입 및 제조/판매하고 있는 파트너사 입니다.</p>
                                        </div>
                                    </div>
                                </dd>
                            </template>
                        </dl>
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
            tabidx: 0,
            tab_item_customer: [
                { item: "메인" },
                { item: "자주하는질문" },
                { item: "공지사항" },
                { item: "1:1문의" },
                { item: "회원혜택" },
            ],
        }
    },
    methods: {
        accordionToggle (event) {
            console.log(event.currentTarget.parentNode)
            event.currentTarget.parentNode.classList.toggle('active')
        },
    },
}
</script>

<style scoped>
</style>