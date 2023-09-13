<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title al">공지사항</strong>
        </h2>

        <div class="content pt0">
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_customer" :tabidx="tabidx" />

            <div class="section_group pb20">
                <div class="section">
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
                    <Tabs tabClass="tab_type_05" :tab_item="tab_item_notice" :tabidx="tabidx2" />
                    
                    <div class="search_input display_block" ref="searchInput">
                        <Inputs input_type="text" :placeholder="'검색어를 입력 하세요.'" />
                        <button class="btn_search">검색</button>
                    </div>

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

                    <!-- pagination -->
                    <div class="pagination_box innerfill">
                        <button type="button" class="button_prev active">이전</button>
                        <div class="pagination">
                            <span>350 / 9999</span>
                        </div>
                        <button type="button" class="button_next active">다음</button>
                    </div>
                    <!-- //pagination -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Inputs from "@/components/Inputs.vue";

export default {
    components: {
        Tabs,
        Inputs,
    },
    data () {
        return {
            tabidx: 2,
            tab_item_customer: [
                { item: "메인" },
                { item: "자주하는질문" },
                { item: "공지사항" },
                { item: "1:1문의" },
                { item: "회원혜택" },
            ],
            tabidx2: 0,
            tab_item_notice: [
                { item: "전체" },
                { item: "공지" },
                { item: "이벤트" },
                { item: "긴급공지" },
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

<style>
</style>