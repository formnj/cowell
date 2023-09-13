<template>
    <div>
        <div class="content mypage">
            <div class="layout left">
                <div class="lnb">
                    <ul>
                        <li>
                            <a href="">나의 쇼핑</a>
                            <ul>
                                <li><a href="">주문/배송</a></li>
                                <li><a href="">반품/교환</a></li>
                                <li><a href="">취소/환불</a></li>
                                <li><a href="">선물함</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 혜택</a>
                            <ul>
                                <li><a href="">쿠폰 내역</a></li>
                                <li><a href="">포인트 내역</a></li>
                                <li><a href="">임직원 혜택</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 활동</a>
                            <ul>
                                <li><a href="">1:1 문의 </a></li>
                                <li><a href="">상품 문의</a></li>
                                <li><a href="">상품리뷰</a></li>
                                <li><a href="">관심 상품</a></li>
                                <li><a href="">관심 브랜드</a></li>
                                <li><a href="">최근 본 상품</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 정보</a>
                            <ul>
                                <li><a href="">회원정보 수정</a></li>
                                <li><a href="">간편로그인 연결</a></li>
                                <li><a href="">회원등급 안내</a></li>
                                <li><a href="">배송지 관리</a></li>
                                <li><a href="">회원탈퇴</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="layout right">
                <h2>쿠폰 내역</h2>

                <Tabs tabClass="tab_type_03 center" :tab_item="tab_item_category" class="center" :tabidx="tabidx" @change="change" />


                <div class="flex_box" style="margin-top:-80px;">
                    <a href="" class="btn_default btn_mid ml_auto">
                        <em>전체 받기</em>
                    </a>
                </div>

                <div class="list_card half pt50">
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

                <!-- 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">쿠폰 이용 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
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
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import SelectBox from '@/components/SelectBox.vue'

export default {
    components: {
        Tabs,
        SelectBox,
    },
    data () {
        return {
            tabidx: 1,
            tab_item_category: [
                { item: "보유한 쿠폰(999)" },
                { item: "발급가능한 쿠폰(999)" },
            ],
            sortCoupon: [
                { val: "최신순", txt: "최신순" },
                { val: "상품평 높은 순", txt: "상품평 높은 순" },
                { val: "상품평 낮은 순", txt: "상품평 낮은 순" },
            ],
        }
    },
}
</script>

<style scoped>
::v-deep .tab_type_03{display:flex;margin-bottom:40px;justify-content:center;}
::v-deep .tab_type_03 > li {float:none;}
::v-deep .tab_type_03 > li + li {padding-left:100px;}
::v-deep .tab_type_03 > li a{font-size:24px;height:50px;line-height:50px;}

::v-deep label.select.select_sort_review{padding:0 12px;margin-top:-10px;border:1px solid #aaa;}
::v-deep label.select.select_sort_review select{height:52px;line-height:52px;}
</style>