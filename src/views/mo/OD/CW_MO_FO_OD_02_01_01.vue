<template>
    <div>
        <h2>
            <button class="back"></button>
            주문서 작성
        </h2>
        <div class="content">
            <div class="order_wrap">
                <div class="list_wrap">
                    <dl>
                        <dt>주문상품</dt>
                        <dd>
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
                                        <SelectBox :options="item.gift" model="모델" />
                                    </div>
                                </li>
                            </ul>
                        </dd>

                        <dt>주문자 정보</dt>
                        <dd class="order_info">
                            <ul class="form_group">
                                <li class="txt_wrap">
                                    <span>김나나</span>
                                    <span class="ml10">000-0000-0000</span>
                                </li>
                                <li class="txt_wrap">
                                    <span>email@email.com</span>
                                </li>
                            </ul>
                        </dd>

                        <dt>배송지 정보
                            <div>
                                <button @click.prevent="openModal('modalSkin'), modalTitle='배송지 목록', modalContent='shippingList'">배송지 목록</button>
                                <button class="refresh">초기화</button>
                            </div>
                        </dt>
                        <dd class="order_info">
                            <ul class="form_group">
                                <li>
                                    <p class="form_tit">
                                        <em>배송지 주소</em>
                                    </p>
                                    <div>
                                        <span class="label_wrap">[06168] 서울특별시 강남구 삼성로 152(삼성동) 삼성동빌딩, 1000호</span>
                                        <p class="explain">결제 후 배송지 수정이 불가능하니 한번 더 확인해주세요.</p>
                                    </div>
                                </li>
                                <!-- 초기화 선택 시 -->
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
                                <li class="required">
                                    <p class="form_tit">
                                        <em>배송지 주소</em>
                                    </p>
                                    <div>
                                        <div class="multi_form">
                                            <div>
                                                <Inputs  input_type="text" placeholder="우편번호" err_text="에러문구" />
                                                <button class="btn_mid btn_default" @click.prevent="openModal('modalSkin'), modalTitle='주소검색', modalContent='address_search'"><em>주소검색</em></button>
                                            </div>
                                            <em>에러문구</em>
                                        </div>
                                        <Inputs input_type="text" placeholder="주소" />
                                        <Inputs input_type="text" placeholder="상세 주소를 입력해주세요." />
                                        <p class="notice_box">결제 후 배송지 수정이 불가능하니 한번 더 확인해주세요.</p>
                                    </div>
                                </li>
                                <!-- //초기화 선택 시 -->
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
                        </dd>

                        <dt>할인정보
                            <div>
                                <Inputs input_type="checkbox" text="선택안함" />
                            </div>
                        </dt>
                        <dd class="order_info">
                            <ul class="form_group">
                                <li>
                                    <p class="form_tit">
                                        <em>쿠폰적용 <span>(4장)</span></em>
                                    </p>
                                    <div>
                                        <div class="multi_form">
                                            <div>
                                                <Inputs  input_type="text" placeholder="0원" />
                                                <button class="btn_mid btn_default" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰조회/적용', modalContent='CouponList'"><em>조회/적용</em></button>
                                            </div>
                                            <em>에러문구</em>
                                        </div>
                                        <p class="mt10 explain ar">보유 또는 발급가능 쿠폰을 조회/적용하면 반영됩니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <p class="form_tit">
                                        <em>포인트사용 <span>(보유1,000포인트)</span></em>
                                    </p>
                                    <div>
                                        <div class="multi_form">
                                            <div>
                                                <Inputs  input_type="text" placeholder="0포인트" />
                                                <button class="btn_mid btn_default"><em>모두사용</em></button>
                                            </div>
                                            <em>에러문구</em>
                                        </div>
                                        <p class="mt10 explain ar">최소 10포인트 단위 사용 가능</p>
                                    </div>
                                </li>
                                <li>
                                    <p class="form_tit">
                                        <em>할인코드</em>
                                    </p>
                                    <div>
                                        <div class="multi_form">
                                            <div>
                                                <Inputs  input_type="text" placeholder="할인코드를 입력해주세요." />
                                                <button class="btn_mid btn_default"><em>적용</em></button>
                                            </div>
                                            <em>에러문구</em>
                                        </div>
                                        <p class="mt10 explain ar">보유하신 할인코드 입력 후 적용 버튼을 클릭해 주세요.</p>
                                    </div>
                                </li>
                                <li>
                                    <p class="form_tit">
                                        <em>배송쿠폰 <span>(1장)</span></em>
                                    </p>
                                    <div>
                                        <div class="multi_form">
                                            <SelectBox :options="coupon" model="모델" />
                                        </div>
                                        <p class="mt10 explain ar">보유하신 할인코드 입력 후 적용 버튼을 클릭해 주세요.</p>
                                    </div>
                                </li>
                            </ul>
                        </dd>

                        <dt>결제 수단
                            <div>
                                <Inputs input_type="checkbox" text="다음에도 이 결제 사용" />
                            </div>
                        </dt>
                        <dd class="payment_info">
                            <ul class="pay_group">
                                <li class="full">
                                    <Inputs input_type="radio" text="신용카드" checked="checked" />
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
                            <button class="btn_min btn_info" @click.prevent="openModal('modalSkin'), modalContent='installment'"><em>12월 무이자 할부 안내</em></button>
                            <button class="btn_min btn_info" @click.prevent="openModal('modalSkin'), modalContent='installment'"><em>카드사별  혜택안내</em></button>

                            <!-- 계좌이체 선택 -->
                            <dl class="tip_box">
                                <dt>계좌이체 안내</dt>
                                <dd>
                                    <p>결제와 동시에 즉시 이체되며 전체주문취소시 당일 입금되며 부분취소시 익일 입금됩니다.</p>
                                    <p>승인진행에 다소 시간이 소요될수 있습니다.</p>
                                </dd>
                            </dl>
                            <!-- //계좌이체 선택 -->

                            <!-- 네이버페이 선택시 -->
                            <dl class="tip_box">
                                <dt>네이버 페이 안내</dt>
                                <dd>별도의 앱 설치없이 네이버 ID로 신용카드 또는 계좌 정보를 등록하여, 네이버페이 비밀번호로 결제할 수 있습니다.</dd>
                            </dl>
                            <!-- //네이버페이 선택시 -->
                            <!-- 카카오페이 선택시 -->
                            <dl class="tip_box">
                                <dt>카카오 페이</dt>
                                <dd>카카오톡에 신용/체크 카드, 카카오머니를 등록한 후 비밀번호 및 지문인증만으로 결제할 수 있습니다.</dd>
                            </dl>
                            <!-- //카카오페이 선택시 -->
                            <!-- 페이코 선택시 -->
                            <dl class="tip_box">
                                <dt>PAYCO 안내</dt>
                                <dd>
                                    <p>PAYCO는 온/오프라인 쇼핑은 물론 송금, 멤버십 적립까지 가능한 통합 서비스입니다.</p>
                                    <p>휴대폰과 카드 명의자가 동일해야 결제 가능하며, 결제금액의 제한은 없습니다.</p>
                                </dd>
                            </dl>
                            <!-- //페이코 선택시 -->
                            <!-- 토스페이 선택시 -->
                            <dl class="tip_box">
                                <dt>TOSS PAY 안내</dt>
                                <dd>결제 및 사용관련 문의는 Toss Pay 고객센터 (1599-4905 / 24시간 연중무휴)로 부탁드립니다.</dd>
                            </dl>
                            <!-- //토스페이 선택시 -->
                        </dd>

                        <!-- 가상계좌 선택 시 -->
                        <dt class="refund">환불계좌 정보</dt>
                        <dd class="order_info">
                            <p class="explain">등록된 환불계좌 정보가 없습니다.<br/> 아래의 은행을 터치하여 환불계좌를 등록해 주세요.</p>
                            <ul class="form_group mt10">
                                <li class="required">
                                    <SelectBox :options="bank" model="모델" />
                                </li>
                                <li class="required">
                                    <Inputs  input_type="text" placeholder="계좌번호를 입력하세요." />
                                </li>
                                <li class="required">
                                    <Inputs  input_type="text" placeholder="예금주를 입력해주세요." />
                                </li>
                            </ul>
                            <dl class="tip_box">
                                <dt>환불계좌 안내</dt>
                                <dd>
                                    <p>주문 취소나 품절 시, 환불 받으실 계좌입니다.</p>
                                    <p>환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.</p>
                                    <p>환불계좌 정보를 변경하고 싶으신 경우, 주문완료 후 [마이페이지 > 환불계좌 관리]에서 수정이 가능합니다.</p>
                                </dd>
                            </dl>
                        </dd>
                        <!-- //가상계좌 선택 시 -->
                    </dl>
                </div>
                <div class="pay_wrap">
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
                        <ul>
                            <li><Inputs input_type="checkbox" id="아이디" text="전체동의" /></li>
                            <li>
                                <Inputs input_type="checkbox" id="아이디" text="비회원 개인정보 수집 및 이용 동의" required_type="requierd" required_txt="(필수)" />
                                <a href="#none" class="see_more" @click.prevent="openModal('modalSkin'), modalTitle='비회원구매 개인정보 수집 및 이용동의', modalContent='policy', modalClass='bottom'">더보기</a>
                            </li> 
                            <li>
                                <Inputs input_type="checkbox" id="아이디" text="주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며, 구매에 동의 하시겠습니까? (전자상거래법 제 8조 제 2항)" required_type="requierd" required_txt="(필수)" />
                            </li>
                        </ul>
                        <div class="btnSection">
                            <a href="/cowell/mo/OD_03_01_01" class="btn_big btn_confirm"><em>결제하기</em></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalSkin :modalTitle="modalTitle" :modalClass="[modalClass === ''? 'full': modalClass]">
            <InstallmentInfo v-if="modalContent === 'installment'" />

            <!-- 주소찾기 모달 -->
            <AddressSearch v-if="modalContent === 'address_search'" />
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'address_search'">
                <a href="#none" class="btn_big btn_default"><em>확인</em></a>
            </div>
            <!-- //주소찾기 모달 -->

            <!-- 배송지 목록 모달 -->
            <ShippingAddress v-if="modalContent === 'shippingList'" />
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'shippingList'">
                <a href="#none" class="btn_big btn_default"><em>선택 배송지 적용</em></a>
            </div>
            <!-- //배송지 목록 모달 -->

            <!-- 쿠폰조회/적용 -->
            <CouponList v-if="modalContent === 'CouponList'" />
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent == 'CouponList'">
                <a href="#none" class="btn_big btn_default"><em>적용</em></a><!-- 발급가능한 쿠폰 탭 선택 시 "적용 → 쿠폰 전체 받기" 문구 수정 -->
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
    import AddressSearch from "@/views/mo/OD/CW_MO_FO_OD_02_04_01";
    import ShippingAddress from "@/views/mo/OD/CW_MO_FO_OD_02_03_01";
    import CouponList from "@/views/mo/OD/CW_MO_FO_OD_02_03_03";
    import Policy from "@/views/mo/OD/CW_MO_FO_OD_02_05_01";

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
                modalClass: '',
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
.list_wrap {flex:1;}
.list_wrap dt {margin-bottom:10px; font-size:16px; font-weight:700; position:relative; display:flex; align-items:center; justify-content:space-between;}
.list_wrap dd + dt {margin-top:30px; padding-top:30px;}
.list_wrap dd + dt:before {border-top:4px solid #eee; content:''; position:absolute; top:0; right:-20px; left:-20px; display:block;}
.list_wrap dd + dt.refund {padding-top:0;}
.list_wrap dd + dt.refund:before {display:none;}
.list_wrap dt div {display:flex;}
.list_wrap dt .check {min-height:0; line-height:0;}
.list_wrap dt::v-deep .check .label {font-size:14px;}
/* .list_wrap dt::v-deep .check input[type='checkbox'] {opacity:0;} */
/* .list_wrap dt::v-deep .check input[type='checkbox'] + .label:before {width:20px; height:20px; border-radius:50%;} */
/* .list_wrap dt::v-deep .check input[type='checkbox']:checked + .label:after {width: 10px; height: 10px; background-color: #222; border:0; border-radius: 50%; top: 6px; left: 6px; transform:rotate(0);} */
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
.cart_list .cont {margin-top:0; position:relative; flex:1;}
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

.cart_list .gift {margin-top:20px;}
.cart_list .gift span {margin-bottom:10px; font-size:14px; line-height:20px; display:block;}
.count .soldout {color:#aaa; background-color:#eee; border-color:#ddd;}
.count .shortage {color:#fff; background-color:#222; border-color:#222;}
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700;}
.cart_list .price span {font-size:16px;}
.cart_list .price em {font-weight:600;}
.cart_list .price del {font-size:12px; font-weight:600;}

.cart_list .quantity {margin-right:60px; font-size:18px; font-weight:700;}

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

.order_info .txt_wrap + .txt_wrap {padding-top:10px;}
.order_info .number {font-size:18px;}
.order_info .required .form_tit em:after {margin-left:5px; color:#00C294; font-size:18px; vertical-align:top; content:'*'; display:inline-block;}
.order_info .form_tit + span {font-size:18px; display:block;}
.order_info .form_tit em span {color:#00C294;}

.order_info .form_tit + * {flex:1;}
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

</style>
