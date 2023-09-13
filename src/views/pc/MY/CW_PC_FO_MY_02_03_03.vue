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
                <h2>취소/환불 신청</h2>

                <div class="card_product">
                    <div class="top">
                        <span class="date">2023.12.14</span>
                        <span class="order_number">
                            <span>주문번호</span>
                            <em>2023012609093717645</em>
                        </span>
                    </div>
                    <div class="top_check">
                        <Inputs input_type="checkbox" id="아이디" text="전체선택" checked="" />
                    </div>
                    <div class="main">
                        <Inputs input_type="checkbox" id="아이디" text="" checked="" />
                        <a href="" class="product">
                            <span class="image">
                                <img src="@/assets/images/pc/sample/imgreview01.png" alt="">
                            </span>
                            <div class="text">
                                <strong class="brand">NOTICA</strong>
                                <p class="name">이월 21 푸마 바디웨어 남성 액티브모션 바디웨어 드로즈(센라이트레드)</p>
                                <span class="option">옵션 : BEIGE 66, FREE</span>
                            </div>
                        </a>
                        <div class="info">
                            <span class="quantity">999</span>
                            <span class="price">999,999,999원</span>
                            <span class="status">반품접수</span>
                            <!-- <div class="buttons">
                                <button type="button">주문취소</button>
                                <button type="button">주소변경</button>
                            </div> -->
                        </div>

                        <!-- <button type="button" class="button_delete">삭제</button> -->
                    </div>
                    <div class="bottom">
                        <span class="name">사은품</span>
                        <p class="context">양말, FREE, 1</p>
                    </div>
                </div>

                <div class="section_group">
                    <div class="section">
                        <h4 class="pt50 pb20">
                            <strong class="title large">취소 사유</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>취소 사유</th>
                                        <td>
                                            <div style="width:150px;">
                                                <SelectBox :isChange="true" :options="optionsReason"/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card_product mt50">
                    <div class="main">
                        <Inputs input_type="checkbox" id="아이디" text="" checked="" />
                        <a href="" class="product">
                            <span class="image">
                                <img src="@/assets/images/pc/sample/imgreview01.png" alt="">
                            </span>
                            <div class="text">
                                <strong class="brand">NOTICA</strong>
                                <p class="name">이월 21 푸마 바디웨어 남성 액티브모션 바디웨어 드로즈(센라이트레드)</p>
                                <span class="option">옵션 : BEIGE 66, FREE</span>
                            </div>
                        </a>
                        <div class="info">
                            <span class="quantity">999</span>
                            <span class="price">999,999,999원</span>
                            <span class="status">반품접수</span>
                            <!-- <div class="buttons">
                                <button type="button">주문취소</button>
                                <button type="button">주소변경</button>
                            </div> -->
                        </div>

                        <!-- <button type="button" class="button_delete">삭제</button> -->
                    </div>
                    <div class="bottom">
                        <span class="name">사은품</span>
                        <p class="context">양말, FREE, 1</p>
                    </div>
                </div>

                <div class="section_group">
                    <div class="section">
                        <h4 class="pt50 pb20">
                            <strong class="title large">취소 사유</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>취소 사유</th>
                                        <td>
                                            <div style="width:150px;">
                                                <SelectBox :isChange="true" :options="optionsReason"/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 class="pt50 pb20">
                            <strong class="title large">사진 첨부</strong>
                        </h4>
                        <div class="image_upload_box">
                            <span class="image_upload">
                                <label for="imageUpload01" class="label">
                                <input type="file" id="imageUpload01">
                                <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image">
                                </label>
                                <button type="button" class="button_delete">삭제</button>
                            </span>
                            <span class="image_upload">
                                <label for="imageUpload02" class="label">
                                <input type="file" id="imageUpload02">
                                <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image">
                                </label>
                                <button type="button" class="button_delete">삭제</button>
                            </span>
                            <span class="image_upload">
                                <label for="imageUpload03" class="label">
                                <input type="file" id="imageUpload03">
                                <!-- <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image"> -->
                                </label>
                                <!-- <button type="button" class="button_delete">삭제</button> -->
                            </span>
                        </div>
                        <div class="list_bullet pb20">
                            <ul>
                                <li>10MB 이하의 jpg, png, gif 파일로 최대 3장까지 첨부 가능합니다.</li>
                                <li>삼품과 관련없는 내용, 비방, 광고, 불건전한 내용의 글은 사전동의 없이 삭제될 수 있습니다.</li>
                                <li>불량배송/오배송/누락배송/변심 등 제품의 반품/교환 및 취소/환불이 필요하신 경우 제품 증빙사진을 첨부하셔야 보다 신속하게 처리가 진행됩니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                

                <div class="section_group">
                    <div class="section">
                        <h4 class="pt50 pb20">
                            <strong class="title large">환불계좌 정보</strong>
                            <button type="button" class="btn_white btn_mid">환불계좌 변경</button>
                        </h4>
                        <p class="pb20">등록된 환불계좌 정보가 없습니다. 아래의 은행을 터치하여 환불계좌를 등록해 주세요.</p>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>은행</th>
                                        <td>
                                            한국은행
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>계좌번호</th>
                                        <td>
                                            1234-567-890
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>예금주</th>
                                        <td>
                                            김나나
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="list_bullet">
                                                <ul>
                                                    <li>주문 취소나 품절 시, 환불 받으실 계좌입니다.</li>
                                                    <li>환불계좌가 등록되지 않은 경우, 환불 처리가 지연될 수 있습니다.</li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        
                        <h4 class="pt50 pb20">
                            <strong class="title large">환불 예정 금액</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>결제금액</th>
                                        <td>40,000원</td>
                                    </tr>
                                    <tr>
                                        <th class="impact">최종 환불 금액</th>
                                        <td class="point">40,000원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="flex_box justify_center pt50 pb50">
                    <a href="" class="btn_default btn_big ml10" style="width:500px;" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent=''">
                        <em>취소 신청</em>
                    </a>
                </div>

                <!-- 취소/환불 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">취소/환불 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <strong class="title">취소/환불 신청</strong>
                            <ul>
                                <li>주문 취소는 상품 준비중 단계까지만 가능합니다. (가능 단계 : 입금 대기, 결제 완료, 상품 준비중 단계)</li>
                                <li>배송 준비중 단계부터는 주문취소가 불가능하니 상품을 수령 후 반품으로 접수해 주시기 바랍니다.</li>
                                <li>주문 상품 중 일부만 취소하실 경우, 결제 수단에 따라 재결제가 필요할 수 있으며, 재결제 완료 후 나머지 상품에 대한 주문이 완료됩니다.</li>
                                <li>주문 취소 시 사용하신 쿠폰 적용 기준에 따라 복원이 되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalContent="modalContent">
            <div>
                <p class="align_center">
                    선택하신 상품의 주문을 취소하시겠습니까?
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    선택하신 상품의 주문이 취소되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    신청하신 취소를 처리하지 못 하였습니다. <br> <br>
                    자세한 사항은 고객센터 <br>(02-6390-8000, 내선번호 3번)로 <br>문의하시기 바랍니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>
            </div>
        </ModalSkin>
    </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";
import SelectBox from '@/components/SelectBox.vue';
import ModalSkin from "@/components/ModalSkin";

export default {
    components: {
        Inputs,
        SelectBox,
        ModalSkin,
    },
    data () {
        return {
            optionsAmount: [
                { val: "value", txt: "1" },
                { val: "value", txt: "2" },
                { val: "value", txt: "3" },
            ],
            optionsReason: [
                { val: "value", txt: "단순 변심" },
                { val: "value", txt: "주문 실수" },
                { val: "value", txt: "제품 불량" },
                { val: "value", txt: "배송 문제" },
            ],
            optionsCoupon: [
                { val: "value", txt: "없음" },
                { val: "value", txt: "무료배송쿠폰 (D-7)" },
                { val: "value", txt: "무료배송쿠폰 (D-14)" },
            ],
            message: '',
            count: 0,
            maxCount: 100,
        }
    },
    methods: {
        onCountMessage () {
            this.count = this.message.length
        },
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
    },
}
</script>

<style scoped></style>