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
                <h2>반품 신청</h2>

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
                            <strong class="title large">반품 사유</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>반품 수량</th>
                                        <td>
                                            <div style="width:150px;">
                                                <SelectBox :isChange="true" :options="optionsAmount"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>반품 사유</th>
                                        <td>
                                            <div style="width:150px;">
                                                <SelectBox :isChange="true" :options="optionsReason"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="vertical_top">상세 사유</th>
                                        <td>
                                            <label class="textarea_label" for="writeReply" style="width:640px;">
                                                <textarea
                                                    id="writeReply"
                                                    class="textarea"
                                                    placeholder="100자 이내 입력"
                                                    v-model="message"
                                                    @keyup="onCountMessage"
                                                    :maxlength="maxCount"
                                                ></textarea>
                                                <div class="text_count">
                                                    <span class="count"><em>{{ count }}</em>/{{ maxCount }}</span>
                                                </div>
                                            </label>
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

                <div class="card_product">
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
                            <strong class="title large">반품 사유</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>반품 수량</th>
                                        <td>
                                            <div style="width:150px;">
                                                <SelectBox :isChange="true" :options="optionsAmount"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>반품 사유</th>
                                        <td>
                                            <div style="width:150px;">
                                                <SelectBox :isChange="true" :options="optionsReason"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="vertical_top">상세 사유</th>
                                        <td>
                                            <label class="textarea_label" for="writeReply" style="width:640px;">
                                                <textarea
                                                    id="writeReply"
                                                    class="textarea"
                                                    placeholder="100자 이내 입력"
                                                    v-model="message"
                                                    @keyup="onCountMessage"
                                                    :maxlength="maxCount"
                                                ></textarea>
                                                <div class="text_count">
                                                    <span class="count"><em>{{ count }}</em>/{{ maxCount }}</span>
                                                </div>
                                            </label>
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
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>무료반품쿠폰</th>
                                        <td>
                                            <div style="width:280px;">
                                                <SelectBox :isChange="true" :options="optionsCoupon"/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 class="pt50 pb20">
                            <strong class="title large">수거지 안내</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>수거 주소</th>
                                        <td>[06168] 서울특별시 강남구 삼성로 152(삼성동) 삼성동빌딩, 1000호</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        
                        <h4 class="pt50 pb20">
                            <strong class="title large">환불계좌 정보</strong>
                            <button type="button" class="btn_white btn_mid">환불계좌 변경</button>
                        </h4>
                        <p class="pb20">등록된 환불계좌 정보가 없습니다. 아래의 은행을 터치하여 환불계좌를 등록해 주세요.</p>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th class="required">은행</th>
                                        <td>
                                            <Inputs input_type="text" id="아이디" text="" checked="" placeholder="한국은행" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="required">계좌번호</th>
                                        <td>
                                            <Inputs input_type="text" id="아이디" text="" checked="" placeholder="1234-56-7890" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="required">예금주</th>
                                        <td>
                                            <Inputs input_type="text" id="아이디" text="" checked="" placeholder="김나나" />
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
                                        <td>20,000원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        
                        <h4 class="pt50 pb20">
                            <strong class="title large">추가 결제 예정 금액</strong>
                        </h4>
                        <div class="info_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>배송비</th>
                                        <td>3,000원</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div class="list_bullet">
                                                <ul>
                                                    <li>반품 시 배송비의 추가 결제가 필요한 경우 반드시 결제를 해야만 반품이 가능합니다.</li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="flex_box justify_center pt50 pb50">
                    <a href="" class="btn_default btn_big ml10" style="width:500px;" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent=''">
                        <em>반품 신청</em>
                    </a>
                </div>

                <!-- 반품/교환 안내 -->
                <div class="section_group">
                    <div class="section">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">반품/교환 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환신청</strong>
                            <ul>
                                <li>반품/교환 신청이 접수되었습니다. 수거를 위해 택배기사님이 방문합니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환접수</strong>
                            <ul>
                                <li>반품/교환 접수된 상품을 수거하여 물류센터로 이동 중입니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품확인중</strong>
                            <ul>
                                <li>반품 상품이 물류센터로 도착 후 상품 검수 진행 중입니다.</li>
                                <li>반품 사유가 상이하거나 부분 환불 시 재결제 비용이 발생할 수 있습니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">교환회수완료</strong>
                            <ul>
                                <li>교환 상품이 물류센터로 도착 후 상품 검수 진행 중입니다.</li>
                                <li>교환 상품 준비가 완료되어 곧 배송될 예정입니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">교환배송중</strong>
                            <ul>
                                <li>교환 상품의 배송이 시작되었습니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환완료</strong>
                            <ul>
                                <li>반품/교환 처리가 완료되었습니다. 결제수단별 절차에 따라 반품 처리가 진행됩니다.</li>
                                <li>반품완료 후 결제수단에 따라 3~7일 정도 환불처리가 소요될 수 있습니다.</li>
                                <li>교환 상품의 배송이 완료되었습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="section pt0 bd">
                        <h4 class="pt20 pb20 mb20 bd">
                            <strong class="title bold">반품/교환 유의사항 안내</strong>
                        </h4>
                        <div class="list_bullet pb30">
                            <strong class="title">유의사항</strong>
                            <ul>
                                <li>반송지 주소는 [54334] 전라북도 김제시 용지면 부교리 57-4 코웰패션 물류센터입니다.</li>
                                <li>반품/교환은 상품 수령일로부터 7일 이내에서만 가능합니다. 단, 구매확정을 하셨을 경우에는 불가합니다.</li>
                                <li>교환 및 반품 시 코웰패션닷컴 홈페이지를 통해 접수하지 않은 상태에서 임의 발송을 하실 경우, 분실 발생 시 코웰패션닷컴에서는 책임을 지지 않습니다.</li>
                                <li>고객 변심/주문 실수에 의한 반품/교환은 고객님께서 반품비/교환비를 부담하셔야 합니다.</li>
                                <li>제품 하자 및 배송 문제의 경우 코웰패션닷컴에서 동일 제품으로 교환 또는 반품을 원하실 경우 확인 후 교환 및 환불을 해드립니다.</li>
                                <li>교환 배송비 6,000원, 반품 배송비 3,000원입니다. (단, 무료배송인 경우 반품 배송비 6,000원 발생) 제품 하자가 아닐 시에 배송비는 고객님께서 모두 부담합니다.</li>
                                <li>교환 상품 재고 소진 시 교환 배송비의 경우 반품 배송비로 전환되오니 참고 부탁드립니다.</li>
                                <li>부분 반품 시 반품 후 결제금액 중 사용하신 쿠폰 적용 기준에 해당되지 않을 경우에는 추가 금액이 발생할 수 있습니다. 결제수단에 따라 추가 금액을 차감한 후 환불 처리가 되거나 재결제가 필요할 수 있습니다.</li>
                                <li>주문 시 사용하신 쿠폰은 반품 후 적용 기준에 따라 복원되지 않을 수 있습니다. 쿠폰을 사용하실 때 기간 및 유의사항을 확인하시기 바랍니다.</li>
                            </ul>
                        </div>
                        <div class="list_bullet pb30">
                            <strong class="title">반품/교환 불가</strong>
                            <ul>
                                <li>구매확정 시 반품/교환은 불가합니다.</li>
                                <li>세트상품은 부분적으로 교환/반품이 불가합니다.</li>
                                <li>제품이 훼손되거나 상품의 가치가 상실된 경우에는 반품/교환이 불가능합니다.</li>
                                <li>제품의 택(Tag)이 훼손되거나 제거된 경우에는 반품/교환이 불가능합니다.</li>
                                <li>하자가 없는 새제품일 경우에도 세탁 및 수선을 하신 경우 반품/교환이 불가능합니다.</li>
                                <li>제품의 사이즈는 측정방법에 따라 약간의 오차가 발생될 수 있으며, 제품의 색상은 사용자 모니터의 설정과 사양에 따라 차이가 있을 수 있습니다. 이는 불량이 아니므로 반품/교환이 불가능합니다.</li>
                                <li>세탁 부주의로 인한 제품 손상은 반품/교환이 불가능하며 코웰패션닷컴에서는 어떠한 보상과 책임도 지지않으니, 구매 전 세탁방법을 반드시 확인하신 후 구매하여 주시기 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle" :modalContent="modalContent">
            <div>
                <p class="align_center">
                    해당 상품의 반품을 신청하시겠습니까?
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    반품 신청이 접수되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    해당 상품의 반품 신청하시겠습니까? <br> <br>
                    해당 상품의 반품 접수를 위해서는 <br>반품 배송비의 추가 결제가 필요합니다. <br> <br>
                    “확인”을 누르시면 <br>배송비 결제창으로 이동합니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    반품 신청이 철회되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    반품 신청이 철회되었습니다. <br> <br>
                    반품 신청 시 결제한 추가 결제건은 <br>결제 수단에 따라 결제 취소일이 다르니 <br>양해 부탁드립니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>


                <p class="align_center">
                    해당 상품의 교환을 신청하시겠습니까?
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    교환 신청이 접수되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    해당 상품의 교환 신청하시겠습니까? <br> <br>
                    해당 상품의 교환 접수를 위해서는 <br>교환 배송비의 추가 결제가 필요합니다. <br> <br>
                    “확인”을 누르시면 <br>배송비 결제창으로 이동합니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_cancel"><em>취소</em></a>
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    교환 신청이 철회되었습니다.
                </p>
                <div class="btnSection">
                    <a href="" class="btn_mid btn_default"><em>확인</em></a>
                </div>

                <p class="align_center">
                    교환 신청이 철회되었습니다. <br> <br>
                    교환 신청 시 결제한 추가 결제건은 <br>결제 수단에 따라 결제 취소일이 다르니 <br>양해 부탁드립니다.
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

            modalTitle: '',
            modalContent: '',
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