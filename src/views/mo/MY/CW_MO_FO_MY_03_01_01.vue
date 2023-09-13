<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">쿠폰 내역</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <Tabs tabClass="tab_type_03" :tab_item="tab_item_menu" :tabidx="tabidx" />

            <div class="section_group pb0">
                <div class="section">
                    <h4 class="mb20">
                        <SelectBox :options="sortCoupon" model="최신순" class="select_sort_review ml_auto" :isChange="true"/>
                    </h4>

                    <div class="list_card">
                        <ul>
                            <li>
                                <button type="button" class="coupon_card ticket" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰 상세보기', modalContent='modalDetailTicket'">
                                <div class="text">
                                    <em class="percent">50,000원</em>
                                    <strong class="title">코트 한정 할인 쿠폰 (2)</strong>
                                    <span class="d_day">D-30</span>
                                </div>
                                <div class="condition">
                                    <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                                    <p>유의사항 : 적용가능품목 <button type="button" class="button_specific">품목보기</button></p>
                                </div>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="coupon_card delivery" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰 상세보기', modalContent='modalDetailDelivery'">
                                <div class="text">
                                    <em class="percent">무료배송</em>
                                    <strong class="title">시크릿! 무료배송 쿠폰</strong>
                                    <span class="d_day">D-30</span>
                                </div>
                                <div class="condition">
                                    <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                                    <p>유의사항 : 적용가능품목 <button type="button" class="button_specific">품목보기</button></p>
                                </div>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="coupon_card cart" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰 상세보기', modalContent='modalDetailCart'">
                                <div class="text">
                                    <em class="percent">10%</em>
                                    <strong class="title">아우터 할인 (1)</strong>
                                    <span class="d_day">D-30</span>
                                </div>
                                <div class="condition">
                                    <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                                    <p>유의사항 : 적용가능품목 <button type="button" class="button_specific">품목보기</button></p>
                                </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section_group no_bd">
                <div class="section pb0">
                    <h4 class="pt20 pb20">
                        <strong class="title bold">쿠폰 이용 안내</strong>
                    </h4>
                    <div class="list_bullet no_bd">
                        <ul>
                            <li>비회원은 쿠폰 혜택이 제공되지 않으므로 회원가입 후 이용 부탁 드립니다.</li>
                            <li>쿠폰 종류에 따라 다른 쿠폰과 동시 사용이 가능할 수 있고 포인트나 할인코드와도 동시 사용이 가능합니다.</li>
                            <li>쿠폰 사용조건에 따라, 일부 카테고리, 상품 또는 브랜드에 사용이 제한될 수 있으며, 최소구매금액이나 최대할인금액이 제한될 수 있습니다.</li>
                            <li>쿠폰은 사용기간이 만료된 경우 자동 소멸되며 만료된 쿠폰은 취소/반품 시 재발급이 불가합니다.</li>
                            <li>회원탈퇴 시 보유한 쿠폰은 자동 소멸됩니다. (재가입 시에도 복구되지 않습니다.)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin
            :modalTitle="modalTitle"
            :modalClass="
                modalContent === 'modalDetailTicket' || 
                modalContent === 'modalDetailDelivery' || 
                modalContent === 'modalDetailCart' ? 'full' : ''
            "
        >
            <div class="section_group">
                <div class="section pt0">
                    <!-- ticket -->
                    <template v-if="modalContent === 'modalDetailTicket'">
                        <div class="coupon_detail_top pb20">
                            <strong class="title icon ticket">코트 한정 할인 쿠폰</strong>
                        </div>
                        <div class="linear_notice_box">
                            <div class="row cells bd">
                                <p class="al">사용가능기간 : 2022.02.02 ~ 03.31</p>
                                <span>D-30</span>
                            </div>
                        </div>
                        <div class="list_bullet half">
                            <strong class="title bold pt30 pb10">쿠폰 적용 가능 대상</strong>
                            <ul>
                                <li v-for="(item, index) in couponBrands" :key="index">
                                    {{ item.title }}
                                </li>
                            </ul>
                        </div>
                        <div class="list_bullet half">
                            <strong class="title bold pt30 pb10">유의사항</strong>
                            <ul>
                                <li>제한없이 사용 가능</li>
                            </ul>
                        </div>
                    </template>

                    <!-- delevery -->
                    <template v-if="modalContent === 'modalDetailDelivery'">
                        <div class="coupon_detail_top pb20">
                            <strong class="title icon delivery">무료배송</strong>
                        </div>
                        <div class="linear_notice_box">
                            <div class="row cells bd">
                                <p class="al">사용가능기간 : 2022.02.02 ~ 03.31</p>
                                <span>D-30</span>
                            </div>
                        </div>
                        <div class="list_bullet half">
                            <strong class="title bold pt30 pb10">유의사항</strong>
                            <ul>
                                <li>제한없이 사용 가능</li>
                            </ul>
                        </div>
                    </template>

                    <!-- cart -->
                    <template v-if="modalContent === 'modalDetailCart'">
                        <div class="coupon_detail_top pb20">
                            <strong class="title icon cart">장바구니쿠폰</strong>
                        </div>
                        <div class="linear_notice_box">
                            <div class="row cells bd">
                                <p class="al">사용가능기간 : 2022.02.02 ~ 03.31</p>
                                <span>D-30</span>
                            </div>
                        </div>
                        <div class="list_bullet half">
                            <strong class="title bold pt30 pb10">제외 대상</strong>
                            <ul>
                                <li v-for="(item, index) in couponBrands" :key="index">
                                    {{ item.title }}
                                </li>
                            </ul>
                        </div>
                        <div class="list_bullet half">
                            <strong class="title bold pt30 pb10">유의사항</strong>
                            <ul>
                                <li>제한없이 사용 가능</li>
                            </ul>
                        </div>
                    </template>

                </div>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import ModalSkin from '@/components/ModalSkin'
import SelectBox from '@/components/SelectBox.vue'

export default {
    components: {
        Tabs,
        ModalSkin,
        SelectBox,
    },
    data () {
        return {
            tabidx: 0,
            tab_item_menu: [
                { item: "보유한 쿠폰(5)" },
                { item: "발급가능한 쿠폰(5)" },
            ],
            sortCoupon: [
                { val: "최신순", txt: "최신순" },
                { val: "상품평 높은 순", txt: "상품평 높은 순" },
                { val: "상품평 낮은 순", txt: "상품평 낮은 순" },
            ],

            modalTitle: '',
            modalContent: '',

            // Coupon Brands
            couponBrands: [
                { title: '바나나 리퍼블릭', checked: true },
                { title: '아디다스 오리지널', checked: true },
                { title: '아디다스 퍼포먼스', checked: true },
                { title: '컬럼비아 언더', checked: false },
                { title: '푸마 바디웨어', checked: false },
                { title: '노티카', checked: false },
                { title: '띵크', checked: false },
                { title: '라코스테', checked: false },
                { title: '리복', checked: false },
                { title: '리복 스포츠', checked: false },
                { title: '리복 키즈', checked: false },
                { title: '몽벨 언더웨어', checked: false },
                { title: '밀레', checked: false },
            ],
        }
    },
    methods: {
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
    },
}
</script>

<style></style>