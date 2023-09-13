<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">1:1 문의</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <div class="section_group pb0 no_bd">
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
                        <p>등록된 1:1 문의가 없습니다.</p>
                    </div>

                    <div class="list_goods_inquire">
                        <dl>
                            <dt>
                                <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">
                                    <div class="info">
                                        <span>[상품문의]</span>
                                        <span>23.12.14</span>
                                        <span>jwy***</span>
                                        <span class="status_replay">답변완료</span>
                                    </div>
                                    <div class="cont">
                                        <strong class="title">기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.</strong>
                                    </div>
                                </button>
                            </dt>
                            <dd>
                                <div class="cont">
                                    <div class="question">
                                        <p>남녀 공용으로 입어도 되는건가요? <br>세탁 방법은 어떻게 되나요?</p>
                                        <div class="images">
                                            <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/imgreview01.png" alt=""></button>
                                            <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/imgreview02.png" alt=""></button>
                                            <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/imgreview03.png" alt=""></button>
                                        </div>
                                        <div class="buttons">
                                            <button type="button">수정</button>
                                            <button type="button">삭제</button>
                                        </div>
                                    </div>
                                    <div class="answer">
                                        <p>안녕하세요 고객님, 코웰패션에 관심 가져 주셔서 감사합니다. <br>문의 주신 상품은 남녀 공용 상품이며 첫 회는 드라이 클리닝 권장, 이후에는 울제품 전용 세제와 울코스로 세탁하셔도 됩니다.</p>
                                        <div class="images">
                                            <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/insta01.png" alt=""></button>
                                            <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/insta02.png" alt=""></button>
                                            <button type="button" @click.prevent="openModal('modalSkin', $event)"><img src="@/assets/images/mo/sample/insta03.png" alt=""></button>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>

                <div class="section">
                    <div class="btnSection">
                        <a href="/mo/MY_04_01_04" class="btn_big btn_default">
                            <em>1:1 문의하기</em>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin>
            <div class="modal_image_box">
                <img :src="modalImage" alt="">
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import ModalSkin from '@/components/ModalSkin'

export default {
    components: {
        Tabs,
        ModalSkin,
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

            modalImage: '',
        }
    },
    methods: {
        accordionToggle (event) {
            console.log(event.currentTarget.parentNode)
            event.currentTarget.parentNode.classList.toggle('active')
        },
        openModal (name, event) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')

            this.modalImage = event.currentTarget.childNodes[0].src
        },
    },
}
</script>

<style scoped>
.tab_wrap{margin-bottom:15px;}
.btnSection{margin-top:15px;}
::v-deep .tab_type_05 > li a{height:38px;line-height:38px !important;padding-bottom:0;}
</style>