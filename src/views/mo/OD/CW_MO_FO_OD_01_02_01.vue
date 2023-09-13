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
                            <Inputs input_type="checkbox" class="wish" />
            
                            <a hef="#none" class="title">
                                <strong>{{ item.brand }}</strong>
                                <span>{{ item.tit }}</span>
                                <p>
                                    <span v-for="(item, index) in cart[0].option" :key="index">{{ item }},</span> <span>수량 {{ item.quantity }}</span>
                                </p>
                            </a>

                            <strong class="stock">재고부족</strong>

                            <strong class="price">
                                <!-- 정상가 -->
                                <del>{{ item.ori_price }}</del>
                                <!-- //정상가 -->
                                <!-- 할인율 -->
                                <em class="discount">{{ item.discount }}</em>
                                <!-- //할인율 -->
                                <!-- 할인가 -->
                                {{ item.price }}
                                <!-- //할인가 -->
                            </strong>
                        </div>
                    </div>

                    <p v-if="item.status != 'soldout'" class="btnSection">
                        <a href="#none" class="btn_black02" @click.prevent="openModal('modalSkin'), modalContent='optionchange'"><em>옵션변경</em></a>
                        <a href="#none" class="btn_default"><em>바로구매</em></a>
                    </p>
                    <p v-else class="btnSection">
                        <a href="#none" class="btn_disable02"><em>옵션변경</em></a>
                        <a href="#none" class="btn_disable02"><em>임시품절</em></a>
                    </p>
                </li>
            </ul>

            <!-- 결제예정금액 -->
            <div class="pay_wrap">
                <h3>결제상세</h3>
                <div class="inner">
                    <dl>
                        <dd>
                            <span>총상품금액</span>
                            <strong>400,000원</strong>
                        </dd>
                        <dd>
                            <span>상품할인</span>
                            <strong>-100,000원</strong> 
                        </dd>
                        <dd>
                            <span>배송비</span>
                            <strong>0원</strong> 
                        </dd>
                        <dd>
                            <span>쿠폰할인금액</span>
                            <strong>-100,000원</strong> 
                        </dd>
                        <dd>
                            <span>포인트 사용금액</span>
                            <strong>-100,000원</strong> 
                        </dd>
                        <dd>
                            <span>할인코드</span>
                            <strong>-100,000원</strong> 
                        </dd>

                        <dt>
                            최종 결제금액
                            <strong>1,000,000원</strong>
                        </dt>
                    </dl>
                </div>
            </div>
            <!-- //결제예정금액 -->

            <div class="installment_info">
                <p>50,000원 이상 결제시 무료배송</p>
                <button class="btn_min btn_info" @click.prevent="openModal('modalSkin'), modalContent='installment'"><em>12월 무이자 할부 안내</em></button>
            </div>

            <dl class="tip_box">
                <dd>장바구니에 담긴 상품은 90일동안 보관 되며, 90일이 지난 상품은 자동 삭제됩니다.<br/><br/>
                    장바구니에 최대 100개까지 상품 보관이 가능하며, 실제 구매 시에는 가격이나 혜택이 변동될 수 있습니다.<br/><br/>
                    장바구니에 담은 상품이 판매종료가 되었을 경우 자동 삭제 됩니다.</dd>
            </dl>

            <h3>함께 구매하면 좋은 상품</h3>
            <!-- 23.04.04 아이템 5개 초과 시 스와이프 -->
            <GoodsList :isWish="true" :item="goods_item" v-if="goods_item.length < 4" />

            <swiper :options="swiperOptions" v-if="goods_item.length > 3">
                <swiper-slide v-for="(item, index) in goods_item" :key="index">
                    <GoodsItem :isWish="true" :item="item" />
                </swiper-slide>
            </swiper>
            <!-- //23.04.04 아이템 5개 초과 시 스와이프 -->

            <div class="btnSection">
                <a href="/cowell/mo/OD_02_01_01" class="btn_big btn_confirm"><em>주문하기</em></a>
                <!-- 장바구니에서만 노출(주문서 비노출) -->
                <a href="#none" class="btn_big btn_default"><em>선물하기</em></a>
                <!-- //장바구니에서만 노출(주문서 비노출) -->
            </div>
            <!-- //content -->
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <Optionchange v-if="modalContent === 'optionchange'" />
            <!-- 카테고리 모달 버튼 -->
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'optionchange'">
                <a href="#none" class="btn_mid btn_default"><em>변경완료</em></a>
            </div>
            <InstallmentInfo v-if="modalContent === 'installment'" />
        </ModalSkin>
    </div>
</template>

<script>
    import GoodsList from "@/components/GoodsList.vue";
    import Inputs from "@/components/Inputs.vue";
    import GoodsItem from "@/components/GoodsItem.vue";
    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";

    import ModalSkin from "@/components/ModalSkin";
    import Optionchange from "@/views/mo/OD/CW_MO_FO_OD_01_02_02";
    import InstallmentInfo from "@/views/mo/OD/CW_MO_FO_OD_01_02_03";

    export default {
        name: 'App',
        components: {
            GoodsList,
            Inputs,
            GoodsItem,
            Swiper,
            SwiperSlide,

            ModalSkin,
            Optionchange,
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
                ],
                /* //goods */
                swiperOptions:{
                    loop:true,
                    slidesPerView: 3,
                    spaceBetween: 5,
                    maxBackfaceHiddenSlides:6,
                },

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
.cart_list .cont .title strong {padding-left:18px; font-size:14px;}
.cart_list .cont .title span {height:auto; display:block;}
.cart_list .cont .title p {margin-top:9px; display:flex;}
.cart_list .cont .title p * {margin-top:0; margin-left:2px; color:#999; font-size:12px;}
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700;}
.cart_list .price del {margin-right:8px; color:#aaa; font-weight:400;}

.cart_list .stock {margin-top:4px; color:#F24F39; font-size:12px; display:block;}
.cart_list .stock + .price {margin-top:0;}

/* 빈장바구니 */
.cart_list li.blank {text-align:center; justify-content:center;}
.cart_list li.blank strong {font-size:18px;}
.cart_list li.blank strong:before {width:67px; height:69px; margin:0 auto 30px; background:url('@/assets/images/mo/sub/icon_blank_cart.png') 50% no-repeat; background-size:cover; content:''; display:block;}

.cart_list .btnSection {margin-top:25px;}
.cart_list .btnSection [class*='btn_'] {height:38px;}

.pay_wrap {margin-top:30px;}
.pay_wrap h3 {margin-bottom:10px;}
.pay_wrap dl {padding:30px 20px; background-color:#F8F8F8;}
.pay_wrap dt, .pay_wrap dd, .pay_wrap dd ul li {display:flex; flex-wrap:wrap; flex-direction:row; justify-content:space-between;}
.pay_wrap dt {font-size:14px; font-weight:700; line-height:30px;}
.pay_wrap dt strong {color:#00C294; font-size:18px;}
.pay_wrap dd {color:#666; font-size:14px; line-height:20px;}
.pay_wrap dd p {width:100%; margin-top:4px; color:#888; font-size:14px;}
.pay_wrap dd strong {font-weight:400;}
.pay_wrap dt + dd {margin-top:30px;}
.pay_wrap dd + dd {margin-top:6px;}
.pay_wrap dd + dt {margin-top:30px;}

.pay_wrap ul::v-deep .label {color:#888; font-size:14px; line-height:20px;}
.pay_wrap ul li:first-child::v-deep .label {color:#222;}
.pay_wrap ul::v-deep .label i {color:#00C294;}
.pay_wrap ul::v-deep span {padding-left:44px; color:#888; font-size:14px; display:block;}
.pay_wrap li {margin-top:20px;}
.pay_wrap .see_more {color:#888; font-size:12px; text-align:right; flex:1;}
.pay_wrap .see_more:after {width:6px; height:6px; margin-top:-2px; margin-left:4px; border:1px solid #888; border-bottom:0; border-left:0; vertical-align:middle; content:''; display:inline-block; transform:rotate(45deg);}

.installment_info {margin:20px 0;}
.installment_info .btn_info {height:auto; margin-top:10px; padding:0; line-height:20px;}
.installment_info .btn_info:before {width:14px; height:14px; margin-right:6px; background:url('@/assets/images/mo/common/icon_help.png') 50% no-repeat; background-size:cover; vertical-align:middle; content:''; display:inline-block;}
.installment_info .btn_info em {font-weight:400;}

.btnSection {margin-top:60px;}

::v-deep .goods_list > li {width:33.3333%;}
</style>
