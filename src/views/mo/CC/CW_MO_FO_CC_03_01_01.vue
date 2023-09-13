<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title al">자주하는질문</strong>
        </h2>

        <Tabs tabClass="tab_type_default" :tab_item="tab_item_customer" :tabidx="tabidx" />

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
                <Tabs tabClass="tab_type_05" :tab_item="tab_item_faq" :tabidx="tabidx2" />
                
                <div class="search_input display_block" ref="searchInput">
                    <Inputs input_type="text" :placeholder="'검색어를 입력 하세요.'" />
                    <button class="btn_search">검색</button>
                </div>

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
            tabidx: 1,
            tab_item_customer: [
                { item: "메인" },
                { item: "자주하는질문" },
                { item: "공지사항" },
                { item: "1:1문의" },
                { item: "회원혜택" },
            ],
            tabidx2: 0,
            tab_item_faq: [
                { item: "전체" },
                { item: "회원정보" },
                { item: "주문결제" },
                { item: "배송안내" },
                { item: "취소/환불" },
                { item: "상품관련" },
                { item: "포인트" },
                { item: "기타" },
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