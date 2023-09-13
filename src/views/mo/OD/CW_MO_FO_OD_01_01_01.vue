<template>
    <div>
        <h2>
            <button class="back"></button>
            장바구니
        </h2>
        <div class="content">
            <!-- category select -->
            <div class="cart_top">
                <Inputs input_type="checkbox" text="전체선택" />
                <p>
                    <button><em>선택삭제</em></button>
                    <button><em>품절삭제</em></button>
                </p>
            </div>
            <!-- //category select -->
            <!-- content -->
            <ul class="cart_list">
                <li class="blank">
                    <strong>장바구니에 담긴 상품이 없습니다.</strong>
                </li>
            </ul>

            <dl class="tip_box">
                <dd>장바구니에 담긴 상품은 90일동안 보관 되며, 90일이 지난 상품은 자동 삭제됩니다.<br/><br/>
                    장바구니에 최대 100개까지 상품 보관이 가능하며, 실제 구매 시에는 가격이나 혜택이 변동될 수 있습니다.<br/><br/>
                    장바구니에 담은 상품이 판매종료가 되었을 경우 자동 삭제 됩니다.</dd>
            </dl>

            <div class="installment_info">
                <p>50,000원 이상 결제시 무료배송</p>
                <button class="btn_min btn_info" @click.prevent="openModal('modalSkin'), modalContent='installment'"><em>12월 무이자 할부 안내</em></button>
            </div>

            <h3>함께 구매하면 좋은 상품</h3>
            <!-- goods list -->
            <GoodsList :isWish="true" :item="goods_item" />
            <!-- //goods list -->

            <div class="btnSection">
                <a href="#none" class="btn_big btn_confirm"><em>주문하기</em></a>
                <!-- 장바구니에서만 노출(주문서 비노출) -->
                <a href="#none" class="btn_big btn_default"><em>선물하기</em></a>
                <!-- //장바구니에서만 노출(주문서 비노출) -->
            </div>
            <!-- //content -->
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <InstallmentInfo />
        </ModalSkin>
    </div>
</template>

<script>
    import GoodsList from "@/components/GoodsList.vue";
    import Inputs from "@/components/Inputs.vue";

    import ModalSkin from "@/components/ModalSkin";
    import InstallmentInfo from "@/views/mo/OD/CW_MO_FO_OD_01_02_03";

    export default {
        name: 'App',
        components: {
            GoodsList,
            Inputs,

            ModalSkin,
            InstallmentInfo,
        },
        data() {
            return {
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
                /* goods */
                goods_item: [
                    {
                        img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        discount:"45%",
                        input:[{
                            type:"checkbox"
                        }],
                        badge:[
                            {txt:"쿠폰", class:"coupon"},
                            {txt:"NEW", class:"new"},
                            {txt:"BEST", class:"best"},
                            {txt:"단독", class:'only'},
                            {txt:"SOLD OUT", class:'soldout'}
                        ],
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_goods01.png"),
                        brand: "Nike", tit:"여성 모던 코튼 내츄럴 레이서백 브라렛여성 모던 코튼 내츄럴 레이서백 브라렛",
                        price:"250,000",
                        discount:"45%",
                        badge:[
                            {txt:"쿠폰", class:"coupon"},
                            {txt:"NEW", class:"new"},
                        ],
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        discount:"43%",
                        badge:[
                            {txt:"쿠폰", class:"coupon"},
                            {txt:"SOLD OUT", class:'soldout'}
                        ],
                    },
                ],
                /* //goods */

                modalTitle: '',
                modalContent: '',
            }
        },
        methods: {
            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },
        }
    }
</script>

<style scoped>
.content * + h3 {margin-top:60px; font-size:20px;}
.installment_info + h3 {margin-top:30px; padding-top:60px; border-top:1px solid #ddd; content:''; display:block;}

.cart_top {margin-top:-30px; padding:20px 0; display:flex; justify-content:space-between;}
.cart_top button + button {margin-left:18px;}

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
.cart_list .cont .title strong {padding-left:18px; font-size:14px;}
.cart_list .cont .title span {height:auto; margin-top:9px; color:#222; font-size:14px; line-height:20px; display:block;}
.cart_list .cont .title p {margin-top:9px; display:flex;}
.cart_list .cont .title p * {margin-top:0; margin-left:2px; color:#999; font-size:12px;}
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700; display:flex; align-items:flex-end; justify-content:flex-end;}
.cart_list .price del {margin-right:8px; color:#aaa; font-weight:400;}

.cart_list .stock {margin-top:4px; color:#F24F39; font-size:12px; display:block;}
.cart_list .stock + .price {margin-top:0;}

/* 빈장바구니 */
.cart_list li.blank {text-align:center; justify-content:center;}
.cart_list li.blank strong {font-size:18px;}
.cart_list li.blank strong:before {width:67px; height:69px; margin:0 auto 30px; background:url('@/assets/images/mo/sub/icon_blank_cart.png') 50% no-repeat; background-size:cover; content:''; display:block;}

.cart_list .btnSection {margin-top:25px;}
.cart_list .btnSection [class*='btn_'] {height:38px;}


.pay_wrap {margin:0 -20px; padding:30px 20px; background-color:#F8F8F8;}
.pay_wrap dt, .pay_wrap dd, .pay_wrap dd ul li {display:flex; flex-wrap:wrap; flex-direction:row; justify-content:space-between;}
.pay_wrap dt {font-size:16px; font-weight:700; line-height:24px;}
.pay_wrap dt strong {color:#00C294; font-size:16px;}
.pay_wrap dd {color:#666; font-size:16px; line-height:24px;}
.pay_wrap dt + dd {margin-top:26px;}
.pay_wrap dd + dd {margin-top:6px;}
.pay_wrap dd + dt {margin-top:26px;}

.pay_wrap dd ul {margin-top:10px;}
.pay_wrap dd ul::v-deep .label {color:#888; font-size:14px;}
.pay_wrap dd ul::v-deep .label i {color:#00C294;}
.pay_wrap dd ul::v-deep span {padding-left:44px; color:#888; font-size:14px; display:block;}
.pay_wrap dd li + li {margin-top:20px;}

.pay_wrap dd strong {font-weight:400;}
.pay_wrap dd p {width:100%; margin-top:4px; color:#888; font-size:14px;}
.pay_wrap dd .see_more {color:#888; font-size:12px; text-align:right; flex:1;}
.pay_wrap dd .see_more:after {width:6px; height:6px; margin-top:-2px; margin-left:4px; border:1px solid #888; border-bottom:0; border-left:0; vertical-align:middle; content:''; display:inline-block; transform:rotate(45deg);}

.installment_info {margin:20px 0;}
.installment_info .btn_info {height:auto; margin-top:10px; padding:0; line-height:20px;}
.installment_info .btn_info:before {width:14px; height:14px; margin-right:6px; background:url('@/assets/images/mo/common/icon_help.png') 50% no-repeat; background-size:cover; vertical-align:middle; content:''; display:inline-block;}
.installment_info .btn_info em {font-weight:400;}

.cart_list + .tip_box {margin-top:10px;}

.btnSection {margin-top:60px;}

::v-deep .goods_list > li {width:33.3333%;}
</style>
