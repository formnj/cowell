<template>
    <div class="customer">
        <h2>자주하는 질문</h2>

        <Tabs tabClass="tab_type_03 center" :tab_item="tab_item_category" class="center" :tabidx="tabidx" @change="change" />


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
                <h4 class="pb40">
                    <strong class="title large">자주하는 질문</strong>
                </h4>

                <Tabs tabClass="tab_type_05 mb40" :tab_item="tab_item_faq" :tabidx="tabidx2" />

                <div class="search_input display_block mb20" ref="searchInput">
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
                <div class="pagination">
                    <a href="#none" class="btn_first">처음으로</a>
                    <a href="#none" class="btn_prev">이전</a>
                    <a href="#none">1</a>
                    <a href="#none">2</a>
                    <a href="#none">3</a>
                    <a href="#none">4</a>
                    <a href="#none" class="btn_next">다음</a>
                    <a href="#none" class="btn_end">마지막으로</a>
                </div>
                <!-- //pagination -->
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import Inputs from "@/components/Inputs.vue";

export default {
    components: {
        Tabs,
        Inputs,
    },
    data () {
        return {
            tabidx: 1,
            tab_item_category: [
                { item: "메인" },
                { item: "자주하는 질문" },
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

<style scoped>
::v-deep .tab_type_03{display:flex;justify-content:center;}
::v-deep .tab_type_03 > li {float:none;}
::v-deep .tab_type_03 > li + li {padding-left:40px;}
::v-deep .tab_type_03 > li a{font-size:24px;height:50px;line-height:50px;}

.gray_box{padding:30px 60px !important;}
.gray_box.formal{margin-bottom:80px;}
.gray_box.formal table{table-layout:auto;}

.subscript{padding:0 0 20px 68px;margin-top:-5px;font-size:16px;font-weight:400;color:#666;}
.list_goods_inquire > dl > dd .cont > div{padding-left:36px;}
.list_goods_inquire > dl > dd .cont > div.answer{padding-left:36px;}
.list_goods_inquire > dl > dd .cont > div.answer:before{left:10px;}
</style>