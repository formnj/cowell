<template>
    <div class="content">
        <div class="tit_wrap">
            <h3>장바구니</h3>

            <div class="step_wrap">
                <strong>장바구니</strong>
                <span>주문서 작성</span>
                <span>주문완료</span>
            </div>
        </div>

        <div class="order_wrap">
            <div class="list_wrap">
                <ul class="cart_list">
                    <!-- 빈 장바구니 -->
                    <li class="blank">
                        <strong>장바구니에 담긴 상품이 없습니다.</strong>
                    </li>
                    <!-- //빈 장바구니 -->
                    <li v-for="(item, index) in cart" :key="index" class="goods_item" :class="{'disabled' : item.status == 'soldout'}">
                        <Inputs input_type="checkbox" id="아이디" />
                        
                        <span class="thumb" style="width:185px; height:244px; padding:0;">
                            <em><img :src="item.img" /></em>
                        </span>

                        <div class="cont">
                            <Inputs input_type="checkbox" class="wish" />
            
                            <a hef="#none" class="title">
                                <strong>{{ item.brand }}</strong>
                                <span>{{ item.tit }}</span>
                                <p>{{ item.option }}</p><!-- 추가 23.02.28 -->
                            </a>

                            <p class="count">
                                <button class="btn_minus" @click.prevent="decrease($event, index)">감소</button>
                                <Inputs input_type="number" :value="item.count" />
                                <button class="btn_plus" @click.prevent="increase($event, index)">추가</button>
                                <button class="optionChanger" @click.prevent="openModal('modalSkin'), modalTitle='옵션변경', modalContent='optionchange'">옵션변경</button>
                                <span v-if="item.status == 'soldout'" class="soldout">일시품절</span>
                                <span v-if="item.status == 'soldout'" class="shortage">재고부족</span>
                                <em>주문가능 <strong>8</strong>개</em>
                            </p>
                        </div>

                        <div class="price_wrap">
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
                    </li>
                </ul>
            </div>
            <div class="pay_wrap">
                <div class="inner">
                    <dl>
                        <dt>결제예정금액</dt>
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
                            <p>(30,000원 이상 결제 시 무료배송)</p>
                        </dd>
                        <!-- 주문서에서만 노출 -->
                        <dd>
                            <span>쿠폰 할인금액</span>
                            <strong>-36,000원</strong> 
                        </dd>
                        <dd>
                            <span>포인트 사용금액</span>
                            <strong>0원</strong> 
                        </dd>
                        <dd>
                            <span>할인코드</span>
                            <strong>0원</strong> 
                        </dd>
                        <!-- //주문서에서만 노출 -->

                        <dt>
                            최종 결제금액
                            <strong>1,000,000원</strong>
                        </dt>
                        <!-- 주문서에서만 노출 -->
                        <dd>
                            <ul>
                                <li>
                                    <Inputs input_type="checkbox" id="아이디" text="(비회원 개인정)보 수집 및 이용 동의" required_type="requierd" required_txt="(필수)" />
                                    <a href="#none" class="see_more">더보기</a>
                                </li> 
                                <li>
                                    <Inputs input_type="checkbox" id="아이디" text="주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의 하시겠습니까? (전자상거래법 제 8조 제 2항)" required_type="requierd" required_txt="(필수)" />
                                </li>
                            </ul>
                        </dd>
                        <!-- //주문서에서만 노출 -->
                    </dl>
                    <div class="btnSection">
                        <a href="/cowell/pc/OD_02_01_01" class="btn_big btn_confirm"><em>주문하기</em></a>
                        <!-- 장바구니에서만 노출(주문서 비노출) -->
                        <a href="#none" class="btn_big btn_default"><em>선물하기</em></a>
                        <!-- //장바구니에서만 노출(주문서 비노출) -->
                    </div>
                </div>
            </div>
        </div>

        <div class="cart_explain">
            <div>
                <!-- 23.04.19 btn_mid → btn_min 수정 -->
                <button class="btn_min btn_default"><em>전체선택</em></button>
                <button class="btn_min btn_cancel"><em>선택삭제</em></button>
                <button class="btn_min btn_info"><em>품절삭제</em></button>
                <!-- //23.04.19 btn_mid → btn_min 수정 -->

                <ul class="explain_wrap">
                    <li>장바구니에 담긴 상품은 90일동안 보관 되며, 90일이 지난 상품은 자동 삭제됩니다.</li>
                    <li>장바구니에 최대 100개까지 상품 보관이 가능하며, 실제 구매 시에는 가격이나 혜택이 변동될 수 있습니다.</li>
                    <li>장바구니에 담은 상품이 판매종료가 되었을 경우 자동 삭제 됩니다.</li>
                </ul>
            </div>

            <div class="installment_info">
                <p>50,000원 이상 결제시 무료배송</p>
                <button class="btn_min btn_info" @click.prevent="openModal('modalSkin'), modalContent='installment'"><em>12월 무이자 할부 안내</em></button>
            </div>
        </div>

        <h3>함께 구매하면 좋은 상품</h3>
        <!-- 23.04.04 아이템 5개 초과 시 스와이프 -->
        <GoodsList class="type_02" :isWish="true" :isCart="true" :item="goods_item" v-if="goods_item.length < 6" />

        <swiper :options="swiperOptions" v-if="goods_item.length > 5">
            <swiper-slide v-for="(item, index) in goods_item" :key="index">
                <GoodsItem class="type_02" :isWish="true" :isCart="true" :item="item" />
            </swiper-slide>
            <div class="swiper-button-next" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-next"></div>
        </swiper>
        <!-- //23.04.04 아이템 5개 초과 시 스와이프 -->

        <ModalSkin :modalTitle="modalTitle">
            <Optionchange v-if="modalContent === 'optionchange'" />
            <!-- 카테고리 모달 버튼 -->
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'optionchange'">
                <a href="#none" class="btn_mid btn_cancel"><em>취소</em></a>
                <a href="#none" class="btn_mid btn_default"><em>변경완료</em></a>
            </div>
            <InstallmentInfo v-if="modalContent === 'installment'" />
        </ModalSkin>
    </div>
</template>

<script>
    import Inputs from '@/components/Inputs.vue';
    import GoodsList from '@/components/GoodsList.vue';
    import GoodsItem from "@/components/GoodsItem.vue";
    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import "swiper/css/swiper.css";

    import ModalSkin from "@/components/ModalSkin"
    import Optionchange from "@/views/pc/OD/CW_PC_FO_OD_01_02_02";
    import InstallmentInfo from "@/views/pc/OD/CW_PC_FO_OD_01_02_03";

    export default {
        name: 'App',
        components: {
            Inputs,
            GoodsList,
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
                        brand: "Nike", tit:"나이키 에어",
                        option: 'BEIGE 66, FREE',
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
                        option: 'BEIGE 66, FREE',
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
                        option: 'BEIGE 66, FREE',
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
                        ori_price:'2,500,000',
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
                        img:require("@/assets/images/pc/sample/sam_goods02.png"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        ori_price:'2,500,000',
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
                        img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        discount:"45%",
                        badge:[
                            {txt:"쿠폰", class:"coupon"},
                            {txt:"NEW", class:"new"},
                            {txt:"BEST", class:"best"},
                            {txt:"단독", class:'only'},
                            {txt:"SOLD OUT", class:'soldout'}
                        ],
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_goods03.png"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        ori_price:'2,500,000',
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
                        img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        ori_price:'2,500,000',
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
                        img:require("@/assets/images/pc/sample/sam_goods02.png"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        ori_price:'2,500,000',
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
                        img:require("@/assets/images/pc/sample/sam_goods_list_01.jpg"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        discount:"45%",
                        badge:[
                            {txt:"쿠폰", class:"coupon"},
                            {txt:"NEW", class:"new"},
                            {txt:"BEST", class:"best"},
                            {txt:"단독", class:'only'},
                            {txt:"SOLD OUT", class:'soldout'}
                        ],
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_goods03.png"),
                        brand: "Nike", tit:"나이키 에어",
                        price:"250,000",
                        ori_price:'2,500,000',
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
                    slidesPerView: 5,
                    spaceBetween: 20,
                    maxBackfaceHiddenSlides:6,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                modalTitle: '',
                modalContent: '',
            }
        },
        methods: {
            increase (event, index){
                if(this.cart[index].status != 'soldout'){
                    this.cart[index].count += 1
                }
            },
            decrease (event, index){
                if(this.cart[index].count > 1 && this.cart[index].status != 'soldout'){
                    this.cart[index].count -= 1
                }
            },

            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },
        }
    }
</script>

<style scoped>
.order_wrap {display:flex;}
.check + .order_wrap {margin-top:20px;}
.list_wrap {flex:1;}
.cart_list {border-top:1px solid #ddd; border-bottom:1px solid #ddd;}
.cart_list li {padding:30px 0;display:flex; align-items:center;}
.cart_list li + li {border-top:1px solid #eee;}
.cart_list .thumb {width:185px; height:244px; margin-right:50px; margin-left:22px; padding:0;}
.cart_list .cont {position:relative;}
.cart_list .cont .check.wish {right:auto; left:0;}
.cart_list .cont .title strong {padding-left:26px; font-size:18px;}
.cart_list .cont .title span {height:auto; margin-top:7px; font-size:18px;}
.cart_list .cont .title p {margin-top:7px; color:#999; font-size:14px;}
.cart_list .count {margin-top:40px; display:flex; align-items:center;}
.cart_list .count button, .cart_list .count::v-deep input, .count .soldout, .count .shortage {border:1px solid #ddd; padding:0; text-align:center; display:block;}
.cart_list .count [class*='btn'], .cart_list .count::v-deep input {width:38px !important; height:38px;}
.cart_list .count [class*='btn'] {font-size:0; position:relative;}
.cart_list .count .btn_minus {border-right:0;}
.cart_list .count .btn_plus {border-left:0;}
.cart_list .count [class*='btn']:before, .cart_list .count [class*='btn']:after {content:''; position:absolute; top:50%; left:50%; display:block; transform:translate(-50%, -50%)}
.cart_list .count [class*='btn']:before {width:10px; border-top:2px solid #222;}
.cart_list .count .btn_plus:after {height:10px; border-left:2px solid #222;}
.cart_list .count .optionChanger, .count .soldout, .count .shortage {width:auto !important; margin-left:12px; padding:0 20px; line-height:36px;}
.count .soldout {color:#aaa; background-color:#eee; border-color:#ddd;}
.count .shortage {color:#F24F39; background-color:#fff; border-color:#F24F39;}
.count em {margin-left:12px;}
.count em strong {color:#00C294;}
.cart_list .price_wrap {padding-right:70px; text-align:right; flex:1;}
.cart_list .price_wrap .price {font-size:24px; font-weight:700; text-align:left; display:inline-block;}
.cart_list .price_wrap del {margin-bottom:6px; font-size:20px;text-align:right;}

/* 빈장바구니 */
.cart_list li.blank {text-align:center; justify-content:center;}
.cart_list li.blank strong {font-size:20px;}
.cart_list li.blank strong:before {width:123px; height:128px; margin:0 auto 40px; background:url('@/assets/images/pc/sub/icon_blank_cart.png') 50% no-repeat; background-size:cover; content:''; display:block;}

.cart_explain {margin-bottom:100px; padding-top:30px; padding-bottom:30px; border-bottom:1px solid #ddd; display:flex; justify-content:space-between;}
.cart_explain [class*='btn_'] {display:inline-block;}
.cart_explain [class*='btn_'] + [class*='btn_'] {margin-left:10px;}
.cart_explain ul {margin-top:20px;}

.pay_wrap {width:490px; margin-left:10px;}
.pay_wrap .inner {padding:40px; background-color:#F8F8F8;}
.pay_wrap dt, .pay_wrap dd, .pay_wrap dd ul li {display:flex; flex-wrap:wrap; flex-direction:row; justify-content:space-between;}
.pay_wrap dt {font-size:20px; font-weight:700; line-height:30px;}
.pay_wrap dt strong {color:#00C294; font-size:24px;}
.pay_wrap dd {font-size:18px; line-height:26px;}
.pay_wrap dt + dd {margin-top:30px;}
.pay_wrap dd + dd {margin-top:20px;}
.pay_wrap dd + dt {margin-top:40px; padding-top:40px; border-top:1px solid #ddd;}

.pay_wrap dd ul {margin-top:10px;}
.pay_wrap dd ul::v-deep .label {color:#888; font-size:14px;}
.pay_wrap dd ul::v-deep .label i {color:#00C294;}
.pay_wrap dd ul::v-deep span {padding-left:44px; color:#888; font-size:14px; display:block;}
.pay_wrap dd li + li {margin-top:20px;}

.pay_wrap dd strong {font-weight:400;}
.pay_wrap dd p {width:100%; margin-top:4px; color:#888; font-size:14px;}
.pay_wrap dd .see_more {color:#888; font-size:12px; text-align:right; flex:1;}
.pay_wrap dd .see_more:after {width:6px; height:6px; margin-top:-2px; margin-left:4px; border:1px solid #888; border-bottom:0; border-left:0; vertical-align:middle; content:''; display:inline-block; transform:rotate(45deg);}

.installment_info {text-align:right;}
.installment_info p {font-size:16px; font-weight:700;}
.installment_info [class*='btn_'] {margin-top:14px; display:inline-block;}
.installment_info [class*='btn_'] em {font-weight:400;}

.pay_wrap .btnSection {display:block;}
.pay_wrap .btnSection [class*='btn_'] {margin-left:0;}
.pay_wrap .btnSection [class*='btn_'] + [class*='btn_'] {margin-top:20px;}


::v-deep .goods_list > li {width:16.6666%;}
</style>
