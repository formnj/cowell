<template>
    <div>
        <Tabs tabClass="tab_type_03" :tab_item="tabs" :tabidx="tabidx" @change="change" />
        <div class="tab_content">
            <div :class="{'current': tabidx == 0}">
                <ul class="coupon_list">
                    <li v-for="(item, index) in coupon01" :key="index" :class="item.status">
                        <div class="item" :class="item.type">
                            <div>
                                <strong>{{ item.price }}</strong>
                                <p>{{ item.text }}</p>
                                <em>{{ item.period }}</em>
                                <button><em v-if="item.status == 'disabled'">조기<br/> 종료</em></button>
                            </div>
                            <p class="explain">
                                {{ item.explain }}<br/>
                                <em type="button">유의사항 : {{item.caution}}</em>
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="notice_box">
                    <span>쿠폰 총 할인금액</span>
                    <strong>250,000원</strong>
                </div>
            </div>
            <div :class="{'current': tabidx == 1}">
                <!-- 발급가능한 쿠폰 없는 경우 -->
                <p class="no_coupon">이미 쿠폰을 모두 받으셨어요.</p>
                <!-- //발급가능한 쿠폰 없는 경우 -->
                <ul class="coupon_list">
                    <li v-for="(item, index) in coupon02" :key="index" :class="item.status">
                        <div class="item" :class="item.type">
                            <div>
                                <strong>{{ item.price }}</strong>
                                <p>{{ item.text }}</p>
                                <em>{{ item.period }}</em>
                                <button><em v-if="item.status == 'disabled'">조기<br/> 종료</em></button>
                            </div>
                            <p class="explain">
                                {{ item.explain }}<br/>
                                <em type="button">유의사항 : {{item.caution}}</em>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SelectBox from '@/components/SelectBox.vue';
import Tabs from '@/components/Tabs.vue';

    export default {
        name: 'App',
        components: {
            SelectBox,
            Tabs,
        },
        data() {
            return {
                tabidx: 0,
                tabs:[
                    { item: "적용가능한 쿠폰" }, { item: "발급가능한 쿠폰" }
                ],
                coupon01:[
                    {
                        price:'150,000원',
                        text:'코트 한정 할인 쿠폰 (2)',
                        period:'D-20',
                        explain:'최대할인 50,000원, 100,000원 이상 구매 시',
                        caution:'적용가능품목',
                        type:'',
                        status:'disabled'
                    },
                    {
                        price:'무료배송',
                        text:'시크릿! 무료배송 쿠폰 (2)',
                        period:'D-30',
                        explain:'최대할인 50,000원, 100,000원 이상 구매 시',
                        caution:'일부품목 제외',
                        type:'cart',
                        status:''
                    },
                    {
                        price:'무료배송',
                        text:'시크릿! 무료배송 쿠폰 (2)',
                        period:'D-30',
                        explain:'최대할인 50,000원, 100,000원 이상 구매 시',
                        caution:'일부품목 제외',
                        type:'delivery',
                        status:''
                    }
                ],
                coupon02:[
                    {
                        price:'150,000원',
                        text:'코트 한정 할인 쿠폰 (2)',
                        period:'D-20',
                        explain:'최대할인 50,000원, 100,000원 이상 구매 시',
                        caution:'적용가능품목',
                        type:'download',
                        status:''
                    },
                    {
                        price:'무료배송',
                        text:'시크릿! 무료배송 쿠폰 (2)',
                        period:'D-30',
                        explain:'최대할인 50,000원, 100,000원 이상 구매 시',
                        caution:'일부품목 제외',
                        type:'download',
                        status:'disabled'
                    },
                    {
                        price:'무료배송',
                        text:'시크릿! 무료배송 쿠폰 (2)',
                        period:'D-30',
                        explain:'최대할인 50,000원, 100,000원 이상 구매 시',
                        caution:'일부품목 제외',
                        type:'download',
                        status:''
                    }
                ],
            };
        },
        methods: {
            change(value){
                this.tabidx = value;
            },
        }
    }
</script>

<style scoped>
::v-deep .tab_type_03 {border-bottom:1px solid #ddd;}
::v-deep .tab_type_03 > li {width:50%;}
::v-deep .tab_type_03 > li a {height:auto; padding-bottom:20px; font-size:20px; font-weight:500; line-height:inherit; text-align:center;}
::v-deep .tab_type_03 > li a:before, ::v-deep .tab_type_03 > li a:after {border-width:2px;}

dt {font-size:18px; font-weight:700;}
dd {margin-top:10px;}
dd + dd {margin-top:40px;}
dd + dt {margin-top:20px;}

.coupon_list li + li {margin-top:20px;}

.item {padding:20px 16px; border:1px solid #ddd;}
.item div {position:relative; display:block;}
.item div button {width:64px; height:64px; background-color:#999; border-radius:50%; position:absolute; top:50%; right:0; display:flex; align-items:center; justify-content:center; transform:translateY(-50%);}
.item div button:after {width:40px; height:40px; background-image:url('@/assets/images/pc/sub/icon_coupon_type.png'); background-position:0 0; background-repeat:no-repeat; background-size:40px auto;content:''; display:block;}
.item.delivery div button:after {background-position:0 -50px;}
.item.cart div button:after {background-position:0 -100px;}
.item.download div button {background-color:transparent;}
.item.download div button:after {width:24px; height:24px; background:url('@/assets/images/pc/sub/icon_down.png') 0 0 no-repeat; background-size:24px auto;}
.item div button em {color:#fff !important; font-size:14px; line-height:1.428em;}
.item strong {color:#00C294; font-size:24px; font-weight:600; line-height:1.416em;}
.item div p {margin-bottom:8px; font-size:16px; line-height:1.5em;}
.item div em {color:#666; font-size:14px; line-height:1.428em;}
.item .explain {margin-top:20px; padding-top:20px; border-top:1px solid #ddd;}
.item .explain em {margin-top:4px; color:#666; display:inline-block;}
.item .explain em:after {width:14px; height:14px; margin-top:-2px; margin-left:2px; background:url('@/assets/images/pc/common/icon_exclamation_gray.png') 0 0 no-repeat; background-size:cover; vertical-align:middle; content:''; display:inline-block;}

.disabled .item *, .item .explain em  {color:#aaa;}
.disabled .item .explain em:after {background-image:url('@/assets/images/pc/common/icon_exclamation_lightgray.png');}
.disabled .item div button {background-color:#999;}
.disabled .item div button:after {display:none;}

.no_coupon {padding:80px 0; color:#888; font-size:16px; text-align:center;}

.notice_box {margin-top:30px; padding:15px 20px; display:flex; align-items:center; justify-content:space-between;}
.notice_box span {font-size:16px;}
.notice_box strong {color:#00C294; font-size:20px;}
</style>