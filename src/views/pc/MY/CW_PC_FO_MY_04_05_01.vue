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
                <h2>관심 브랜드</h2>

                <Tabs tabClass="tab_type_03 center" :tab_item="tab_item_category" class="center" :tabidx="tabidx" @change="change" />

                <div class="order_empty">
                    <p>관심 브랜드가 없습니다.</p>
                </div>

                <div class="sorting_box">
                    <Inputs input_type="checkbox" id="" text="전체선택"/>
                    <div class="buttons ml_auto">
                        <button type="button" class="active">선택삭제</button>
                    </div>
                </div>

                <div class="goods_item_list">
                    <ul>
                        <li v-for="item in 6">
                            <div class="goods_item">
                                <a href="#none">
                                    <span class="thumb"><em><img src="/img/sam_goods_list_02.baf759f0.jpg"></em></span>
                                </a>
                                <div class="cont">
                                    <a href="#none" class="title">
                                        <Inputs input_type="checkbox" id="" class="input_select"/>
                                        <strong>Nike</strong>
                                    </a>
                                </div>
                                <button type="button" class="button_delete">삭제</button>
                            </div>
                        </li>
                    </ul>
                </div>

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
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue'
import Inputs from '@/components/Inputs.vue'

export default {
    components: {
        Tabs,
        Inputs,
    },
    data () {
        return {
            tabidx: 1,
            tab_item_category: [
                { item: "관심 상품(999)" },
                { item: "관심 브랜드(999)" },
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

.goods_item_list > ul > li{display:inline-block;width:calc((100% - 80px) / 3);margin-right:20px;margin-bottom:60px;vertical-align:top;}
.goods_item_list > ul > li:nth-child(3n){margin-right:0;}
.goods_item .input_select{display:inline-block;}
.goods_item .input_select + strong{display:inline-block;vertical-align:bottom;}
.goods_item .thumb{padding-top:63%;}
</style>