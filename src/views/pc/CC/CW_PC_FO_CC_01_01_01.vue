<template>
    <div class="customer">
        <h2>고객센터</h2>

        <Tabs tabClass="tab_type_03 center" :tab_item="tab_item_category" class="center" :tabidx="tabidx" @change="change" />


        <div class="section_group pb20">
            <div class="section">
                <div class="gray_box formal">
                    <h4>
                        <strong class="title large icon headset">코웰패션 고객센터</strong>
                    </h4>
                    <p class="subscript">빠르고 친절한 답변을 위해 노력하겠습니다.</p>

                    <table>
                        <tbody>
                            <tr>
                                <th width="55">연락처</th>
                                <td>02-6390-8000 (내선3번)</td>
                                <th width="70">영업시간</th>
                                <td>09:00 ~ 18:00</td>
                                <th width="70">점심시간</th>
                                <td>12:00 ~ 13:00</td>
                                <th width="55">공휴일</th>
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
                <h4 class="pb40">
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
                <h4 class="pb40">
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
</template>

<script>
import Tabs from '@/components/Tabs.vue'

export default {
    components: {
        Tabs,
    },
    data () {
        return {
            tabidx: 0,
            tab_item_category: [
                { item: "메인" },
                { item: "자주하는 질문" },
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