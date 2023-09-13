<template>
    <div>
        <h2>
            <button class="back"></button>
            주문서 작성
        </h2>
        <div class="content">
            <div class="order_wrap">
            <div class="list_wrap">
                <h3 class="complete order">주문완료</h3>
                <h3 class="complete gift">선물하기 완료</h3><!-- 선물하기 완료-->
                
                <!-- 주문완료 -->
                <div class="order_info">
                    <ul class="form_group mt0">
                        <li>
                            <p class="form_tit">
                                <em>주문자 /<br/> 배송정보</em>
                            </p>
                            <div>
                                <span>김나나 000-0000-0000</span><br/>
                                <span>[06168] 서울특별시 강남구 삼성로 152(삼성동) 삼성동빌딩, 1000호</span>
                            </div>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송메시지</em>
                            </p>
                            <span>수고많으십니다. 문앞에 놔주세요.</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>주문번호</em>
                            </p>
                            <span>012948394758353</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>결제상세</em>
                            </p>
                            <div>
                                <span>비씨 0000-****-****-0000 일시불</span><br/>
                                <span>승인일시 : 2023.01.26 16.:58</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- //주문완료 -->

                <!-- 선물하기완료 -->
                <div class="order_info">
                    <ul class="form_group">
                        <li>
                            <p class="form_tit">
                                <em>수령인 /<br/> 연락처</em>
                            </p>
                            <span>김나나 000-0000-0000</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송주소</em>
                            </p>
                            <span>[06168] 서울특별시 강남구 삼성로 152(삼성동) 삼성동빌딩, 1000호</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>선물메시지</em>
                            </p>
                            <span>생일축하해</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>주문번호</em>
                            </p>
                            <span>012948394758353</span>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>결제상세</em>
                            </p>
                            <div>
                                <span>비씨 0000-****-****-0000 일시불</span><br/>
                                <span>승인일시 : 2023.01.26 16.:58</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- //선물하기완료 -->

                <h3>주문상품</h3>
                <ul class="cart_list">
                    <li v-for="(item, index) in cart" :key="index">
                        <div class="goods_item type_ver">
                            <span class="thumb">
                                <em><img :src="item.img" /></em>
                            </span>

                            <div class="cont">            
                                <a hef="#none" class="title">
                                    <strong>{{ item.brand }}</strong>
                                    <span>{{ item.tit }}</span>
                                    <p>{{ item.option }}</p><!-- 추가 23.02.28 -->
                                </a>

                                <strong class="price">
                                    <!-- 정상가 -->
                                    <del>{{ item.ori_price }}</del>
                                    <!-- //정상가 -->
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
                        <div class="gift" v-if="item.gift">
                            <span>사은품 선택</span>
                            <strong>선택안함</strong>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pay_wrap complete">
                <h3>결제금액</h3>
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
                                <p>(30,000원 이상 결제 시 무료배송)</p>
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
                                최종 주문금액
                                <strong>1,000,000원</strong>
                            </dt>
                        </dl>
                    <div class="btnSection">
                        <a href="#none" class="btn_big btn_default"><em>구매내역 보기</em></a>
                        <!-- 장바구니에서만 노출(주문서 비노출) -->
                        <a href="/" class="btn_big btn_cancel"><em>쇼핑홈 가기</em></a>
                        <!-- //장바구니에서만 노출(주문서 비노출) -->
                    </div>
                </div>
            </div>
        </div>
        </div>
        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <InstallmentInfo v-if="modalContent === 'installment'" />

            <!-- 주소찾기 모달 -->
            <AddressSearch v-if="modalContent === 'address_search'" />
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'address_search'">
                <a href="#none" class="btn_mid btn_default"><em>확인</em></a>
            </div>
            <!-- //주소찾기 모달 -->

            <!-- 배송지 목록 모달 -->
            <ShippingAddress v-if="modalContent === 'shippingList'" />
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'shippingList'">
                <a href="#none" class="btn_mid btn_default"><em>선택 배송지 적용</em></a>
            </div>
            <!-- //배송지 목록 모달 -->

            <!-- 쿠폰조회/적용 -->
            <CouponList v-if="modalContent === 'CouponList'" />
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'CouponList'">
                <a href="#none" class="btn_mid btn_default"><em>적용</em></a>
            </div>
            <!-- //쿠폰조회/적용 -->
        </ModalSkin>
    </div>
</template>

<script>
    import Inputs from '@/components/Inputs.vue';
    import SelectBox from '@/components/SelectBox.vue';
    import GoodsList from '@/components/GoodsList.vue';

    import ModalSkin from "@/components/ModalSkin"
    import InstallmentInfo from "@/views/pc/OD/CW_PC_FO_OD_01_02_03";
    import AddressSearch from "@/views/pc/OD/CW_PC_FO_OD_02_04_01";
    import ShippingAddress from "@/views/pc/OD/CW_PC_FO_OD_02_03_01";
    import CouponList from "@/views/pc/OD/CW_PC_FO_OD_02_03_03";

    export default {
        name: 'App',
        components: {
            Inputs,
            SelectBox,
            GoodsList,

            ModalSkin,
            InstallmentInfo,
            AddressSearch,
            ShippingAddress,
            CouponList,
        },
        data() {
            return {
                cart:[
                    {
                        img:require("@/assets/images/pc/sample/sam_goods02.png"),
                        brand: "Nike", tit:"비비드 기모 티셔츠 [제품명, 제품명 길이 제한없음]비비드 기모 티셔츠 [제품명, 제품명 길이 제한없음]비비드 기모 티셔츠 [제품명, 제품명 길이 제한없음]",
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
                    { val: "value", txt: "배송기사에게 전달되는 메세지입니다." },
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
h3 {margin-top:30px; margin-bottom:14px; font-size:14px;}

h3.complete {margin-bottom:60px; text-align:center; display:block;}
h3.complete:before {margin:0 auto 20px; background-position:50%; background-repeat:no-repeat; background-size:contain; content:''; display:block;}
h3.complete.order:before {width:98px; height:88px; background-image:url('@/assets/images/mo/sub/icon_complete_order.png');}
h3.complete.gift:before {width:180px; height:140px; background-image:url('@/assets/images/mo/sub/icon_complete_gift.png'); background-position:3px 0; background-size:cover;}
h3.complete.error {margin-top:0;}
h3.complete.error:before {width:180px; height:140px; background-image:url('@/assets/images/mo/sub/icon_complete_error.png');}

.content * + h3 {margin-top:30px;}
.list_wrap {flex:1;}
.list_wrap dt {margin-bottom:10px; font-size:16px; font-weight:700; position:relative; display:flex; align-items:center; justify-content:space-between;}
.list_wrap dd + dt {margin-top:30px; padding-top:30px;}
.list_wrap dd + dt:before {border-top:4px solid #eee; content:''; position:absolute; top:0; right:-20px; left:-20px; display:block;}
.list_wrap dd + dt.refund {padding-top:0;}
.list_wrap dd + dt.refund:before {display:none;}
.list_wrap dt div {display:flex;}
.list_wrap dt .check {min-height:0; line-height:0;}
.list_wrap dt::v-deep .check input[type='checkbox'] {opacity:0;}
.list_wrap dt::v-deep .check input[type='checkbox'] + .label:before {width:20px; height:20px; border-radius:50%;}
.list_wrap dt::v-deep .check input[type='checkbox']:checked + .label:after {width: 10px; height: 10px; background-color: #222; border:0; border-radius: 50%; top: 6px; left: 6px; transform:rotate(0);}
.list_wrap dt button {height:38px; padding:0 20px; font-size:14px; border:1px solid #dddd;}
.list_wrap dt button + button {margin-left:12px;}
.list_wrap dt button.refresh {height:auto; padding:0; font-size:12px; border:0; position:relative; display:flex; align-items:center;}
.list_wrap dt button.refresh:before {width:22px; height:22px; border:1px solid #222; content:''; position:absolute; top:50%; right:0; transform:translateY(-50%);}
.list_wrap dt button.refresh:after {width:24px; height:24px; margin-left:6px; background:url('@/assets/images/mo/sub/icon_reset.png') 50% no-repeat; background-size:24px auto; content:''; display:inline-block;}
/* .list_wrap dt + p {margin-top:-10px; margin-bottom:20px;} */

.cart_list li {padding:30px 0;}
.cart_list > li:first-child {padding-top:0;}
.cart_list > li:last-child {padding-bottom:0;}
.cart_list li + li {border-top:1px solid #eee;}
.cart_list .goods_item {align-items:start;}
.cart_list .thumb {width:90px; height:120px; margin-right:18px; padding:0;}
.cart_list .cont {margin-top:0; padding-right:0; position:relative; flex:1;}
.cart_list .cont .title strong {font-size:14px;}
.cart_list .cont .title span {height:auto; margin-top:4px; font-size:14px; line-height:20px; display:block;}
.cart_list .cont .title p {margin-top:6px; color:#888; font-size:12px;}
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

.cart_list .gift {margin-top:20px; line-height:20px; display:flex;}
.cart_list .gift span {width:108px; font-size:14px; display:block;}
.count .soldout {color:#aaa; background-color:#eee; border-color:#ddd;}
.count .shortage {color:#fff; background-color:#222; border-color:#222;}
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700;}
.cart_list .price span {font-size:16px;}
.cart_list .price em {font-weight:600;}
.cart_list .price del {font-size:12px; font-weight:600;}

.cart_list .quantity {margin-right:60px; font-size:18px; font-weight:700;}

.pay_wrap:before {margin:0 -20px; border-top:4px solid #eee; content:''; display:block;}
.pay_wrap {margin-top:30px;}
.pay_wrap h3 {margin-bottom:10px;}
.pay_wrap dl {padding:30px 20px; background-color:#F8F8F8;}
.pay_wrap dt, .pay_wrap dd, .pay_wrap dd ul li {display:flex; flex-wrap:wrap; flex-direction:row; justify-content:space-between;}
.pay_wrap dt {font-size:14px; font-weight:700; line-height:30px;}
.pay_wrap dt strong {color:#00C294; font-size:18px;}
.pay_wrap dd {color:#666; font-size:14px; line-height:20px;}
.pay_wrap dd p {width:100%; margin-top:4px; color:#888; font-size:12px;}
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

.pay_wrap .btnSection {margin-top:60px; display:block;}
.pay_wrap .btnSection [class*='btn_'] + [class*='btn_'] {margin-top:20px;}

/* .payment_info {padding-top:30px; padding-bottom:30px; border-top:1px solid #ddd; border-bottom:1px solid #ddd;} */

.order_info li {padding:20px 0; border-bottom:1px solid #d9d9d9; display:flex; align-items:center;}
.order_info li:first-child {padding-top:0;}
.order_info .txt_wrap + .txt_wrap {padding-top:10px;}
.order_info .number {font-size:18px;}
.order_info .form_tit {margin-bottom:0; font-weight:700;}
.order_info .required .form_tit em:after {margin-left:5px; color:#00C294; font-size:18px; vertical-align:top; content:'*'; display:inline-block;}
.order_info .form_tit + * {color:#666; text-align:right; display:block; flex:1;}
.order_info .form_tit em {font-weight:700;}
.order_info .btn_mid {width:80px; padding:0 5px;}
.order_info .notice_box {margin-top:20px; background-color:#F8F8F8;}
.order_info .explain.ar {color:#888;}

.payment_info .check_group {margin-left:-40px; margin-bottom:30px;}
.payment_info .check_group li {padding-left:40px;}
.payment_info .label {color:#222;}

.payment_info .btn_info {height:auto; margin-top:12px; padding:0; line-height:20px;}
.payment_info .btn_info + .btn_info {margin-top:4px;}
.payment_info .btn_info:before {width:14px; height:14px; margin-right:6px; background:url('@/assets/images/mo/common/icon_help.png') 50% no-repeat; background-size:cover; vertical-align:middle; content:''; display:inline-block;}
.payment_info .btn_info em {font-weight:400;}

.payment_info .pay_group {margin-top:-7px; margin-left:-7px;}
.payment_info .pay_group:after {clear:both; content:''; display:block;}
.payment_info .pay_group li {width:50%; padding-top:7px; padding-left:7px; float:left;}
.payment_info .pay_group li.full {width:100%;}

.payment_info .pay_group::v-deep .check {padding:0; position:relative; display:block;}
.payment_info .pay_group::v-deep .check .label {height:48px; font-size:14px; font-weight:400; line-height:48px; background-color:#fff; border:1px solid #ddd; text-align:center; display:block;}
.payment_info .pay_group::v-deep .check input[type='radio']:checked + .label {font-weight:700; background-color:#eee; border-color:#eee;}
.payment_info .pay_group::v-deep .check input[type='radio'], .payment_info .pay_group::v-deep .check input[type='radio'] + .label:before,  .payment_info .pay_group::v-deep .check input[type='radio']:checked + .label:after {width:0; height:0; position:absolute; top:50%; left:50%; z-index:-1;}

.tip_box {margin-top:30px;}
.tip_box dt {font-size:14px;}

.btnSection {margin-top:60px;}

</style>
