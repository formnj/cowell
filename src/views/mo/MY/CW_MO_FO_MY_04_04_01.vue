<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">관심 상품</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content">
            <Tabs tabClass="tab_type_03" :tab_item="tab_item_menu" :tabidx="tabidx" />

            <div class="section_group no_bd">
                <div class="section pb0">
                    <div class="order_empty">
                        <p>관심 상품이 없습니다.</p>
                    </div>

                    <div class="cart_top">
                        <Inputs input_type="checkbox" text="전체선택" />
                        <p>
                            <button><em>선택삭제</em></button>
                        </p>
                    </div>

                    <ul class="cart_list">
                        <li v-for="(item, index) in cart" :key="index" class="goods_item" :class="{'disabled' : item.status == 'soldout'}">
                            <div class="inner">
                                <!-- 삭제버튼 -->
                                <button class="btn_del">삭제</button>
                                <!-- //삭제버튼 -->

                                <Inputs input_type="checkbox" id="아이디" />
                                
                                <span class="thumb">
                                    <em><img :src="item.img" /></em>
                                </span>

                                <div class="cont">
                                    <a hef="#none" class="title">
                                        <strong>{{ item.brand }}</strong>
                                        <span>{{ item.tit }}</span>
                                    </a>

                                    <strong class="price">
                                        <span>
                                            <!-- 할인율 -->
                                            <em class="discount">{{ item.discount }}</em>
                                            <!-- //할인율 -->
                                            <!-- 할인가 -->
                                            {{ item.price }}
                                            <!-- //할인가 -->
                                        </span>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
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
        return{
            tabidx: 0,
            tab_item_menu: [
                { item: "관심 상품(999)" },
                { item: "관심 브랜드(999)" },
            ],

            cart:[
                {
                    img:require("@/assets/images/pc/sample/sam_goods02.png"),
                    brand: "Nike", tit:"제품명 길이 제한 없음. 제품명 길이 제한 없음.제품명 길이 제한 없음",
                    option: ['BEIGE', '66', 'FREE'],
                    quantity: '1',
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:2,
                    status:'soldout',
                },
                {
                    img:require("@/assets/images/pc/sample/sam_goods01.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:1,
                },
                {
                    img:require("@/assets/images/pc/sample/sam_goods03.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:2,
                    status:'soldout',
                },
            ],
        }
    },
}
</script>

<style scoped>
.cart_top {padding:20px 0; display:flex; justify-content:space-between;}
.cart_top button + button {margin-left:18px;}
.cart_top::v-deep .check .label{line-height:22px;font-size:14px;color:#222;}

.cart_list {border-top:1px solid #ddd;}
.cart_list li {padding:20px 0;}
.cart_list li + li {border-top:1px solid #eee;}
.cart_list li .inner {position:relative; display:flex;}
.cart_list li .inner .btn_del {width:14px; height:14px; font-size:0; position:absolute; top:0; right:0;}
.cart_list li .inner .btn_del:before, .cart_list li .inner .btn_del:after {width:15px; margin-left:-7px; border-top:1px solid #222; content:''; position:absolute; top:50%; left:50%; display:block; transform:rotate(45deg);}
.cart_list li .inner .btn_del:after {transform:rotate(135deg);}
.cart_list .thumb {width:90px; height:120px; margin-right:18px; margin-left:2px; padding:0;}
.cart_list .cont {margin-top:0; position:relative; flex:1;}
.cart_list .cont .check.wish {top:2px; right:auto; left:0;}
.cart_list .cont .title strong {font-size:14px;}
.cart_list .cont .title span {height:auto; display:block;}
.cart_list .cont .title p {margin-top:9px; display:flex;}
.cart_list .cont .title p * {margin-top:0; margin-left:2px; color:#999; font-size:12px;}
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700; display:flex; align-items:flex-end; justify-content: flex-start;}
.cart_list .price del {margin-right:8px; color:#aaa; font-weight:400;}

.cart_list .stock {margin-top:4px; font-size:12px; display:block;}
.cart_list .stock + .price {margin-top:0;}

.order_empty{border-top:none;margin-top:0;}
</style>