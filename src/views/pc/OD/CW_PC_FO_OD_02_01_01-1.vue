<template>
    <div class="content">
        <div class="tit_wrap">
            <h3>주문서 작성 <span>(2)</span></h3>

            <div class="step_wrap">
                <span>장바구니</span>
                <strong>주문서 작성</strong>
                <span>주문완료</span>
            </div>
        </div>

        <div class="order_wrap">
            <div class="list_wrap">
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
                                <SelectBox :options="item.gift" model="모델" />
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

                <h3>주문자 정보</h3>
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
                        <li class="required">
                            <p class="form_tit">
                                <em>주문자 이메일</em>
                            </p>
                            <Inputs input_type="text" placeholder="이메일을 입력해주세요." />
                        </li>
                    </ul>
                </div>

                <h3>배송지 정보
                    <div>
                        <Inputs input_type="checkbox" text="주문자와 동일" />
                    </div>
                </h3>
                <div class="order_info">
                    <ul class="form_group">
                        <li class="required">
                            <p class="form_tit">
                                <em>수령인명</em>
                            </p>
                            <Inputs input_type="text" placeholder="받는분 성함을 입력하세요." />
                        </li>
                        <li class="required">
                            <p class="form_tit">
                                <em>휴대폰 번호</em>
                            </p>
                            <Inputs input_type="text" placeholder="‘-’없이 숫자만 입력" />
                        </li>
                        <li class="top required">
                            <p class="form_tit">
                                <em>배송지 주소</em>
                            </p>
                            <div>
                                <div class="multi_form">
                                    <div>
                                        <Inputs  input_type="text" placeholder="우편번호와 주소를 입력해주세요." err_text="에러문구" />
                                        <button class="btn_mid btn_default" @click.prevent="openModal('modalSkin'), modalTitle='주소검색', modalContent='address_search'"><em>주소검색</em></button>
                                    </div>
                                    <em>에러문구</em>
                                </div>
                                <Inputs input_type="text" placeholder="상세 주소를 입력해주세요." />
                                <p class="mt10">결제 후 배송지 수정이 불가능하니 한번 더 확인해주세요.</p>
                            </div>
                        </li>
                        <li>
                            <p class="form_tit">
                                <em>배송 메시지 </em>
                            </p>
                            <div>
                                <SelectBox :options="message" model="모델" />
                                <!-- 직접입력 -->
                                <Inputs class="mt10" input_type="text" placeholder="내용을 입력해 주세요." />
                                <!-- //직접입력 -->
                            </div>
                        </li>
                    </ul>
                </div>

                <h3>결제 수단</h3>
                <div class="payment_info">
                    <ul class="check_group">
                        <li>
                            <Inputs input_type="radio" text="신용카드" />
                        </li>
                        <li>
                            <Inputs input_type="radio" text="계좌이체" />
                        </li>
                        <li>
                            <Inputs input_type="radio" text="가상계좌" />
                        </li>
                        <li>
                            <Inputs input_type="radio" text="네이버 페이" />
                        </li>
                        <li>
                            <Inputs input_type="radio" text="카카오 페이" />
                        </li>
                        <li>
                            <Inputs input_type="radio" text="PAYCO" />
                        </li>
                        <li>
                            <Inputs input_type="radio" text="toss pay" />
                        </li>
                    </ul>
                    
                    <!-- 신용카드 선택 -->
                    <button class="btn_min btn_info" @click.prevent="openModal('modalSkin'), modalContent='installment'"><em>12월 무이자 할부 안내</em></button>
                    <button class="btn_min btn_info" @click.prevent="openModal('modalSkin'), modalContent='installment'"><em>카드사별  혜택안내</em></button>
                    <!-- //신용카드 선택 -->
                    <!-- 계좌이체 선택 -->
                    <div class="list_bullet mt30">
                        <ul>
                            <li>결제와 동시에 즉시 이체되며, 전체 주문 취소 시 당일 입금되며, 부분취소 시 익일 입금됩니다.</li>
                            <li>승인 진행에 다소 시간이 소요될 수 있습니다.</li>
                        </ul>
                    </div>
                    <!-- //계좌이체 선택 -->
                    <!-- 가상계좌 선택시 -->
                    <div class="list_bullet mt30">
                        <ul>
                            <li>전용 계좌번호 발급으로 입금인 명의와 상관없이 입금 가능합니다.</li>
                            <li>입금액과 결제 금액이 일치해야 정상 입금완료되니 금액을 반드시 확인바랍니다.</li>
                            <li>배송은 입금완료를 기준으로 처리되며, 미입금 상태에서 주문한 상품이 품절될 경우 입금하셔도 배송이 불가합니다.</li>
                            <li>입금기한은 주문완료 후 익일 23시 30분 이내이며, 미입금 시 자동 취소됩니다.</li>
                        </ul>
                    </div>
                    <!-- //가상계좌 선택시 -->

                    <!-- 네이버페이 선택시 -->
                    <div class="list_bullet mt30">
                        <ul>
                            <li>별도의 앱 설치없이 네이버 ID로 신용카드 또는 계좌 정보를 등록하여, 네이버페이 비밀번호로 결제할 수 있습니다.</li>
                        </ul>
                    </div>
                    <!-- //네이버페이 선택시 -->
                    <!-- 카카오페이 선택시 -->
                    <div class="list_bullet mt30">
                        <ul>
                            <li>카카오톡에 신용/체크 카드, 카카오머니를 등록한 후 비밀번호만으로 결제할 수 있습니다.</li>
                        </ul>
                    </div>
                    <!-- //카카오페이 선택시 -->
                    <!-- 페이코 선택시 -->
                    <div class="list_bullet mt30">
                        <ul>
                            <li>PAYCO는 온/오프라인 쇼핑은 물론 송금, 멤버십 적립까지 가능한 통합 서비스입니다.</li>
                            <li>휴대폰과 카드 명의자가 동일해야 결제 가능하며, 결제 금액의 제한은 없습니다.</li>
                        </ul>
                    </div>
                    <!-- //페이코 선택시 -->
                    <!-- 토스페이 선택시 -->
                    <div class="list_bullet mt30">
                        <ul>
                            <li>결제 및 사용관련 문의는 Toss Pay 고객센터 (1599-4905 / 24시간 연중무휴)로 부탁드립니다.</li>
                        </ul>
                    </div>
                    <!-- //토스페이 선택시 -->
                </div>

                <!-- 가상계좌 선택 시 -->
                <h3>환불계좌 정보</h3>
                <p class="color_gray">등록된 환불계좌 정보가 없습니다. 아래의 은행을 터치하여 환불계좌를 등록해 주세요.</p>
                <div class="order_info">
                    <ul class="form_group">
                        <li class="required">
                            <p class="form_tit">
                                <em>은행</em>
                            </p>
                            <SelectBox :options="bank" model="모델" />
                        </li>
                        <li class="required">
                            <p class="form_tit">
                                <em>계좌번호</em>
                            </p>
                            <Inputs  input_type="text" placeholder="계좌번호를 입력하세요." />
                        </li>
                        <li class="required">
                            <p class="form_tit">
                                <em>예금주</em>
                            </p>
                            <Inputs  input_type="text" placeholder="예금주를 입력해주세요." />
                        </li>
                    </ul>
                    <div class="list_bullet mt30">
                        <ul>
                            <li>주문 취소나 품절 시, 환불 받으실 계좌입니다.</li>
                            <li>환불계좌 정보를 번경하고 싶으신 경우, 주문완료 후 [마이페이지 > 환불계좌 관리]에서 수정이 가능합니다.</li>
                            <li>환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
                <!-- //가상계좌 선택 시 -->
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
                            최종 결제금액
                            <strong>1,000,000원</strong>
                        </dt>
                        <dd>
                            <ul>
                                <li>
                                    <Inputs input_type="checkbox" id="아이디" text="비회원 개인정보 수집 및 이용 동의" required_type="requierd" required_txt="(필수)" />
                                    <a href="#none" class="see_more" @click.prevent="openModal('modalSkin'), modalTitle='비회원구매 개인정보 수집 및 이용동의', modalContent='policy'">더보기</a>
                                </li> 
                                <li>
                                    <Inputs input_type="checkbox" id="아이디" text="주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의 하시겠습니까? (전자상거래법 제 8조 제 2항)" required_type="requierd" required_txt="(필수)" />
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <div class="btnSection">
                        <a href="/cowell/pc/OD_03_01_01" class="btn_big btn_confirm"><em>주문하기</em></a>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle">
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

            <Policy v-if="modalContent === 'policy'" />
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
    import Policy from "@/views/pc/OD/CW_PC_FO_OD_02_05_01";

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
            Policy,
        },
        data() {
            return {
                bank:[
                    { val: "value", txt: "은행 선택" },
                    { val: "value", txt: "우리" },
                    { val: "value", txt: "신한" },
                    { val: "value", txt: "국민" },
                    { val: "value", txt: "기업" },
                    { val: "value", txt: "농협" },
                ],
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
        mounted(){
            this.pay_wrapOffset = document.getElementsByClassName('pay_wrap')[0].offsetTop;
        
            window.addEventListener('scroll', this.onScroll);
        },
        methods: {
            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },

            onScroll () {

                var PayWrap = document.getElementsByClassName('pay_wrap'),
                    OffsetT = this.pay_wrapOffset,
                    Header = document.getElementsByTagName('header');

                let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

                if(currentScrollPosition > (OffsetT - Header[0].offsetHeight)){
                    PayWrap[0].classList.add('fixed');
                    PayWrap[0].children[0].style.top = Header[0].offsetHeight+'px'
                } else {
                    PayWrap[0].children[0].style.removeProperty('top');
                    PayWrap[0].classList.remove('fixed');
                }
            },
        }
    }
</script>

<style scoped>
.tit_wrap h3 {margin-bottom:0; display:block;}

h3 {margin-bottom:20px; display:flex; align-items:center; justify-content:space-between;}
h3 div {display:flex;}
h3 .check {min-height:0; line-height:0;}
/* h3::v-deep .check input[type='checkbox'] {opacity:0;}
h3::v-deep .check input[type='checkbox'] + .label:before {width:20px; height:20px; border-radius:50%;}
h3::v-deep .check input[type='checkbox']:checked + .label:after {width: 10px; height: 10px; background-color: #222; border:0; border-radius: 50%; top: 6px; left: 6px; transform:rotate(0);} */
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

.pay_wrap.fixed .inner {width:490px; margin-right:-810px; position:fixed; right:50%;}

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
