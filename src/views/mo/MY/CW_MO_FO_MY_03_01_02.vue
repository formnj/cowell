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
                    <div class="list_card">
                        <ul>
                            <li>
                                <button type="button" class="coupon_card download" @click.prevent="openModal('modalSkin')">
                                <div class="text">
                                    <em class="percent">10%</em>
                                    <strong class="title">생일축하 쿠폰</strong>
                                    <span class="d_day">D-7</span>
                                </div>
                                <div class="condition">
                                    <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                                    <p>유의사항 : 적용가능품목 <button type="button" class="button_specific">품목보기</button></p>
                                </div>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="coupon_card expired">
                                <div class="text">
                                    <em class="percent">12%</em>
                                    <strong class="title">WELCOME등급 쿠폰</strong>
                                    <span class="d_day">D-20</span>
                                </div>
                                <div class="condition">
                                    <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                                    <p>유의사항 : 적용가능품목 <button type="button" class="button_specific">품목보기</button></p>
                                </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="btnSection">
                        <a href="" class="btn_default btn_big">
                            <em>쿠폰 전체 받기</em>
                        </a>
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

        <ModalSkin>
            <p class="align_center">쿠폰 다운로드가 완료 되었습니다. <br>받으신 쿠폰은 <span class="underline">마이페이지 > 쿠폰내역</span>에서 확인 하실 수 있습니다.</p>
            <div class="btnSection">
                <button class="btn_mid btn_default"><em>확인</em></button>
            </div>
            
            <p class="align_center">쿠폰은 회원만 받을 수 있습니다.</p>
            <div class="btnSection">
                <button class="btn_mid btn_default"><em>로그인</em></button>
            </div>
            <p class="align_center pt20">
                아직 회원이 아니세요? <br>
                <a href="" class="underline">회원가입</a>
            </p>
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
            tabidx: 1,
            tab_item_menu: [
                { item: "보유한 쿠폰(5)" },
                { item: "발급가능한 쿠폰(5)" },
            ],
            sortCoupon: [
                { val: "최신순", txt: "최신순" },
                { val: "상품평 높은 순", txt: "상품평 높은 순" },
                { val: "상품평 낮은 순", txt: "상품평 낮은 순" },
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