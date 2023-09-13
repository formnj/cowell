<template>
    <div class="content">
        <div class="tit_wrap">
            <h3></h3>

            <div class="step_wrap">
                <span>장바구니</span>
                <span>주문서 작성</span>
                <strong>주문완료</strong>
            </div>
        </div>

        <div class="order_wrap">
            <div class="list_wrap">
                <h3 class="complete order">주문완료</h3>
                <h3 class="complete gift">선물하기 완료</h3><!-- 선물하기 완료-->
                
                <!-- 주문완료 -->
                <h3>주문자 / 배송정보</h3>
                <div class="order_info">
                    <ul class="form_group">
                        <li>
                            <p class="form_tit">
                                <em>이름</em>
                            </p>
                            <span>김나나</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>휴대폰 번호</em>
                            </p>
                            <span>000-0000-0000</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송주소</em>
                            </p>
                            <span>[06168] 서울특별시 강남구 삼성로 152(삼성동) 삼성동빌딩, 1000호</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송메시지</em>
                            </p>
                            <span>수고많으십니다. 문앞에 놔주세요.</span>
                        </li>
                    </ul>
                </div>
                <!-- //주문완료 -->

                <!-- 선물하기완료 -->
                <h3>수령인 / 연락처</h3>
                <div class="order_info">
                    <ul class="form_group">
                        <li>
                            <p class="form_tit">
                                <em>주문자명</em>
                            </p>
                            <span>김나나</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>휴대폰 번호</em>
                            </p>
                            <span>000-0000-0000</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송주소</em>
                            </p>
                            <span>[06168] 서울특별시 강남구 삼성로 152(삼성동) 삼성동빌딩, 1000호</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송메시지</em>
                            </p>
                            <span>수고많으십니다. 문앞에 놔주세요.</span>
                        </li>
                    </ul>
                </div>
                <!-- //선물하기완료 -->

                <h3>주문번호</h3>
                <div class="order_info">
                    <ul>
                        <li class="number">2023012609093717645</li>
                    </ul>
                </div>

                <h3>주문상품</h3>
                <ul class="cart_list">
                    <li v-for="(item, index) in cart" :key="index" class="goods_item">
                        
                        <span class="thumb">
                            <em><img :src="item.img" /></em>
                        </span>

                        <div class="cont">            
                            <a hef="#none" class="title">
                                <strong>{{ item.brand }}</strong>
                                <span>{{ item.tit }}</span>
                                <p>{{ item.option }}</p><!-- 추가 23.02.28 -->
                            </a>

                            <div class="gift" v-if="item.gift">
                                <span>사은품 선택</span>
                                <strong>선택안함</strong>
                            </div>
                        </div>

                        <div class="price_wrap">
                            <strong class="quantity">1 건</strong>
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
            <div class="pay_wrap complete">
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

                        <dt>
                            주문금액
                            <strong>1,000,000원</strong>
                        </dt>
                        <dd>
                            <ul>
                                <li>비씨 0000-****-****-0000 일시불</li> 
                                <li>승인일시 : 2023.01.26 16.:58</li>
                            </ul>
                        </dd>
                    </dl>
                    <div class="btnSection">
                        <a href="#none" class="btn_big btn_default"><em>구매내역 보기</em></a>
                        <!-- 장바구니에서만 노출(주문서 비노출) -->
                        <a href="/cowell/" class="btn_big btn_cancel"><em>쇼핑홈 가기</em></a>
                        <!-- //장바구니에서만 노출(주문서 비노출) -->
                    </div>
                </div>
            </div>
        </div>

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
    import SelectBox from '@/components/SelectBox.vue';
    import GoodsList from '@/components/GoodsList.vue';

    import ModalSkin from "@/components/ModalSkin"
    import Optionchange from "@/views/pc/OD/CW_PC_FO_OD_01_02_02";
    import InstallmentInfo from "@/views/pc/OD/CW_PC_FO_OD_01_02_03";

    export default {
        name: 'App',
        components: {
            Inputs,
            SelectBox,
            GoodsList,

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
                        price:"350,000",
                        ori_price:'2,500,000',
                        discount:"45%",
                        input:[{
                            type:"checkbox"
                        }],
                        count:2,
                        status:'soldout',
                        gift:[
                            { val: "value", txt: "선택안함" },
                            { val: "value", txt: "gift 02" },
                            { val: "value", txt: "gift 03" },
                            { val: "value", txt: "gift 04" },
                            { val: "value", txt: "gift 05" },
                            { val: "value", txt: "gift 06" },
                        ],
                    },
                    {
                        img:require("@/assets/images/pc/sample/sam_goods01.png"),
                        brand: "Nike", tit:"나이키 에어",
                        option: 'BEIGE 66, FREE',
                        price:"150,000",
                        ori_price:'200,000',
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
                        price:"15250,000",
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

                /* coupin */
                isChange: false,
                coupon: [
                    { val: "value", txt: "text 01" },
                    { val: "value", txt: "text 02" },
                    { val: "value", txt: "text 03" },
                    { val: "value", txt: "text 04" },
                    { val: "value", txt: "text 05" },
                    { val: "value", txt: "text 06" },
                ],

                message: [
                    { val: "value", txt: "배송 전, 연락 바랍니다." },
                    { val: "value", txt: "부재 시, 연락 바랍니다." },
                    { val: "value", txt: "부재 시, 경비실에 맡겨주세요." },
                    { val: "value", txt: "부재 시, 문 앞에 놓아주세요." },
                    { val: "value", txt: "직접 입력" },
                ],

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
.tit_wrap h3 {margin-bottom:0; display:block;}

h3 {margin-bottom:20px; display:flex; align-items:center; justify-content:space-between;}
h3 div {display:flex;}

h3.complete {margin-bottom:80px; text-align:center; display:block;}
h3.complete:before {margin:-30px auto 30px; background-position:50%; background-repeat:no-repeat; background-size:contain; content:''; display:block;}
h3.complete.order:before {width:130px; height:118px; background-image:url('@/assets/images/pc/sub/icon_complete_order.png');}
h3.complete.gift:before {width:220px; height:160px; padding-left:23px; background-image:url('@/assets/images/pc/sub/icon_complete_gift.png'); background-position:23px 0;}
h3.complete.error:before {width:220px; height:160px; background-image:url('@/assets/images/pc/sub/icon_complete_error.png');}

h3 .check {min-height:0; line-height:0;}
h3::v-deep .check input[type='checkbox'] {opacity:0;}
h3::v-deep .check input[type='checkbox'] + .label:before {width:20px; height:20px; border-radius:50%;}
h3::v-deep .check input[type='checkbox']:checked + .label:after {width: 10px; height: 10px; background-color: #222; border:0; border-radius: 50%; top: 6px; left: 6px; transform:rotate(0);}
h3 button {margin-top:-5px; padding-right:15px; color:#666; font-size:16px; position:relative;}
h3 button:after {width:7px; height:7px; margin-top:-2px; margin-left:10px; border:1px solid #888; border-bottom:0; border-left:0; content:''; position:absolute; top:50%; right:0; display:inline-block; transform:rotate(45deg);}
h3 .check + button {margin-left:12px; padding-left:12px;}
h3 .check + button:before {height:20px; border-left:1px solid #ddd; content:''; position:absolute; top:50%; left:0; display:inline-block; transform:translateY(-50%);}
h3 + p {margin-top:-10px; margin-bottom:20px;}
.order_wrap {display:flex;}
.check + .order_wrap {margin-top:20px;}
.list_wrap {flex:1;}
.cart_list {border-top:1px solid #ddd; border-bottom:1px solid #ddd;}
.cart_list li {padding:30px 0;display:flex; align-items:center;}
.cart_list li + li {border-top:1px solid #eee;}
.cart_list .thumb {width:185px; height:244px; margin-right:50px; padding:0;}
.cart_list .cont {position:relative;}
.cart_list .cont .title strong {font-size:18px;}
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

.cart_list .cont .gift {margin-top:20px; display:flex; align-items:center;}
.cart_list .cont .gift span {font-size:16px; line-height:24px; margin-right:20px;}
.cart_list .cont .gift strong {font-size:16px; line-height:24px;}
.cart_list .cont .gift::v-deep select {min-width:300px;}
.count .soldout {color:#aaa; background-color:#eee; border-color:#ddd;}
.count .shortage {color:#F24F39; background-color:#fff; border-color:#F24F39;}
.count em {margin-left:12px;}
.count em strong {color:#00C294;}
.cart_list .price_wrap {padding-right:70px; text-align:right; flex:1;}
.cart_list .price_wrap .price {font-size:24px; font-weight:700; text-align:left; display:inline-block;}
.cart_list .price_wrap del {margin-bottom:6px; font-size:20px;text-align:right;}

.cart_list .quantity {margin-right:60px; font-size:18px; font-weight:700;}

.pay_wrap {width:490px; margin-left:10px;}
.pay_wrap .inner {padding:40px; background-color:#F8F8F8;}
.pay_wrap dt, .pay_wrap dd, .pay_wrap dd ul li {display:flex; flex-wrap:wrap; flex-direction:row; justify-content:space-between;}
.pay_wrap dt {font-size:20px; font-weight:700; line-height:30px;}
.pay_wrap dt strong {color:#00C294; font-size:24px;}
.pay_wrap.complete dt strong {color:#222;}
.pay_wrap dd {font-size:18px; line-height:26px;}
.pay_wrap dt + dd {margin-top:30px;}
.pay_wrap dd + dd {margin-top:20px;}
.pay_wrap dd + dt {margin-top:40px; padding-top:40px; border-top:1px solid #ddd;}

.pay_wrap dd ul {margin-top:10px;}
.pay_wrap dd ul::v-deep .label {color:#888; font-size:14px;}
.pay_wrap dd ul::v-deep .label i {color:#00C294;}
.pay_wrap dd ul::v-deep span {padding-left:44px; color:#888; font-size:14px; display:block;}
.pay_wrap dd li + li {margin-top:20px;}
.pay_wrap.complete dd ul {font-size:20px;}
.pay_wrap.complete dd li + li {margin-top:10px;}

.pay_wrap dd strong {font-weight:400;}
.pay_wrap dd p {width:100%; margin-top:4px; color:#888; font-size:14px;}
.pay_wrap dd .see_more {color:#888; font-size:12px; text-align:right; flex:1;}
.pay_wrap dd .see_more:after {width:6px; height:6px; margin-top:-2px; margin-left:4px; border:1px solid #888; border-bottom:0; border-left:0; vertical-align:middle; content:''; display:inline-block; transform:rotate(45deg);}

.pay_wrap .btnSection {display:block;}
.pay_wrap .btnSection [class*='btn_'] {margin-left:0;}
.pay_wrap .btnSection [class*='btn_'] + [class*='btn_'] {margin-top:20px;}

.order_info, .payment_info {padding-top:30px; padding-bottom:30px; border-top:1px solid #ddd; border-bottom:1px solid #ddd;}
.order_info .number {font-size:18px;}
.order_info .form_group {margin-top:-30px;}
.order_info .form_group > li {padding-top:30px; display:flex; align-items:center;}
.order_info .form_group > li.top {align-items:start;}
.order_info .form_group > li.top .form_tit {margin-top:13px;}
.order_info .form_tit {width:230px; margin-bottom:0; font-size:18px;}
.order_info .required .form_tit em:after {margin-left:5px; color:#00C294; font-size:18px; vertical-align:top; content:'*'; display:inline-block;}
.order_info .form_tit + span {font-size:18px; display:block;}

.order_info .form_tit + * {flex:1;}
.order_info .btn_mid {width:100px;}

.payment_info .check_group {margin-left:-40px; margin-bottom:30px;}
.payment_info .check_group li {padding-left:40px;}
.payment_info .label {color:#222;}

.payment_info .btn_info {display:inline-block;}
.payment_info .btn_info + .btn_info {margin-left:10px;}

::v-deep .goods_list > li {width:16.6666%;}
</style>
