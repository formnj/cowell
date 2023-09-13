<template>
  <div>
    <ul class="cart_list" style="border-top:none;">
        <li class="goods_item">
            <div class="inner mb20"><!-- 23.04.28 mb20 클래스추가 -->
                <span class="thumb">
                    <em><img src="@/assets/images/pc/sample/sam_goods02.png" /></em>
                </span>

                <div class="cont">
                    <a hef="#none" class="title">
                        <strong class="pl0">Nike</strong>
                        <span>제품명 길이 제한 없음. 제품명 길이 제한 없음.제품명 길이 제한 없음</span>
                        <p>
                            <span>BEIGE,</span>
                            <span>66,</span>
                            <span>FREE,</span>
                            <span>수량 1</span>
                        </p>
                    </a>

                    <!-- <strong class="price">250,000</strong> -->
                </div>
            </div>
            <!-- 23.04.28 상품 주문번호 추가 -->
            <SelectBox :isChange="true" :options="options" />
            <!-- //23.04.28 상품 주문번호 추가 -->
        </li>
    </ul>

    <div class="section_group bd">
        <div class="section">
            <div class="review_radio">
                <p>상품은 만족하셨나요?</p>
                <div class="inputs_wrap">
                    <div class="star_point_box" ref="starPointBox">
                        <span class="star">
                            <input type="checkbox" class="input" id="star1" name="star">
                            <label for="star1" class="label" @click="checkStarPoint(0)"></label>
                        </span>
                        <span class="star">
                            <input type="checkbox" class="input" id="star2" name="star">
                            <label for="star2" class="label" @click="checkStarPoint(1)"></label>
                        </span>
                        <span class="star">
                            <input type="checkbox" class="input" id="star3" name="star">
                            <label for="star3" class="label" @click="checkStarPoint(2)"></label>
                        </span>
                        <span class="star">
                            <input type="checkbox" class="input" id="star4" name="star">
                            <label for="star4" class="label" @click="checkStarPoint(3)"></label>
                        </span>
                        <span class="star">
                            <input type="checkbox" class="input" id="star5" name="star">
                            <label for="star5" class="label" @click="checkStarPoint(4)"></label>
                        </span>
                    </div>
                </div>
                <span>만족도를 선택해주세요</span>
            </div>
            <div class="review_radio">
                <p>사이즈는 어떤가요?</p>
                <div class="inputs_wrap">
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                </div>
                <span>선택해 주세요.</span>
            </div>
            <div class="review_radio">
                <p>색상은 어떤가요?</p>
                <div class="inputs_wrap">
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                </div>
                <span>선택해 주세요.</span>
            </div>
            <div class="review_radio">
                <p>착용감은 어떤가요?</p>
                <div class="inputs_wrap">
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                    <Inputs input_type="radio" id="아이디" :checked="''" />
                </div>
                <span>선택해 주세요.</span>
            </div>
            <label class="textarea_label" for="writeReply">
                <textarea
                    id="writeReply"
                    class="textarea"
                    placeholder="최소 10자 이상 입력해주세요."
                    v-model="message"
                    @keyup="onCountMessage"
                    :maxlength="maxCount"
                ></textarea>
            </label>
            <div class="text_count">
                <span class="count"><em>{{ count }}</em>/{{ maxCount }}</span>
            </div>

            <h4 class="pt20 pb10">
                <strong class="title bold">사진 첨부</strong>
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
                </ul>
            </div>

            <h4 class="pt20 pb10">
                <strong class="title bold">(선택) 추가등록 정보</strong>
            </h4>

            <div class="flex_box pb10">
                <h5>키</h5>
                <SelectBox :isChange="true" :options="optionsHeight"/>
            </div>
            <div class="flex_box pb10">
                <h5>평소사이즈</h5>
                <SelectBox :isChange="true" :options="optionsSizeUsual"/>
            </div>
            <div class="flex_box pb10">
                <h5>구매사이즈</h5>
                <SelectBox :isChange="true" :options="optionsSizePurchase"/>
            </div>

            <div class="linear_notice_box">
                <p class="paragraph light">추가등록 정보는 구매자들의 구매전 사이즈 참고용으로만 활용됩니다. <em class="em">*</em></p>
            </div>
        </div>

        <div class="btnSection mt20">
            <a href="" class="btn_cancel btn_big">
                <em>취소</em>
            </a>
            <a href="" class="btn_default btn_big">
                <em>등록</em>
            </a>
        </div>
    </div>

    <!-- 작성안내 및 주의사항 -->
    <div class="section_group no_bd">
        <div class="section pb0">
            <h4 class="pt20 pb20">
                <strong class="title bold">작성안내 및 주의사항</strong>
            </h4>

            <div class="list_bullet no_bd">
                <ul>
                    <li>상품리뷰 작성시 자동으로 구매확정 단계로 전환됩니다.</li>
                    <li>상품리뷰는 “배송중” 단계부터 작성이 가능합니다.</li>
                    <li>상품리뷰는 구매하신 상품 기준으로, 90일 이내에만 작성이 가능합니다.</li>
                    <li>작성된 리뷰 및 첨부한 이미지는 코웰몰 내에서 홍보 마케팅 으로 활용될 수 있습니다.</li>
                    <li>상품과 관련 없는 내용 및 이미지, 또는 홍보글, 비방글은 관리자에 의해 미노출 및 지급된 포인트가 차감될 수 있습니다.</li>
                    <li>상품리뷰를 작성하시면 포인트를 적립해 드립니다.</li>
                    <li>작성한 상품리뷰를 삭제시, 적립된 포인트는 차감됩니다.</li>
                    <li>상품리뷰 작성으로 지급된 포인트의 유효기간은 지급일 기준으로 6개월입니다.</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue";
import SelectBox from '@/components/SelectBox.vue';

export default {
    components: {
        Inputs,
        SelectBox,
    },
  data () {
    return {
        starPoint: 0,

        message: '',
        count: 0,
        maxCount: 100,

        options: [
                    { val: "value", txt: "주문번호 C123456789" },
                    { val: "value", txt: "주문번호 C123456789" },
                ],

        optionsHeight: [
            { val: "value", txt: "160 이하" },
            { val: "value", txt: "161~163" },
            { val: "value", txt: "164~166" },
            { val: "value", txt: "167~169" },
            { val: "value", txt: "170~172" },
            { val: "value", txt: "173~175" },
            { val: "value", txt: "176~178" },
            { val: "value", txt: "179~180" },
            { val: "value", txt: "181 이상" },
        ],
        optionsSizeUsual: [
            { val: "value", txt: "XS" },
            { val: "value", txt: "S" },
            { val: "value", txt: "M" },
            { val: "value", txt: "L" },
            { val: "value", txt: "XL" },
            { val: "value", txt: "XXL" },
        ],
        optionsSizePurchase: [
            { val: "value", txt: "XS" },
            { val: "value", txt: "S" },
            { val: "value", txt: "M" },
            { val: "value", txt: "L" },
            { val: "value", txt: "XL" },
            { val: "value", txt: "XXL" },
        ],
    }
  },
  methods:{
    checkStarPoint (index) {
        for (let i=0; i<5; i++) {
            if (i < index) {
                this.$refs.starPointBox.children[i].children[0].checked = true
            } else {
                this.$refs.starPointBox.children[i].children[0].checked = false
            }
        }
    },
    onCountMessage () {
        this.count = this.message.length
    },
  },
}
</script>

<style scoped>
.detail_goods .inner {padding:0;}
.cart_list{border-top:1px solid #222;}
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
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700; display:flex; align-items:flex-start;}
.cart_list .price del {margin-right:8px; color:#aaa; font-weight:400;}
.cart_list .badge {position:absolute;top:0;right:0;display:block;height:20px;line-height:20px;padding:0 4px;font-size:10px;color:#aaa;border:1px solid #ddd;background:#eee;}
.cart_list .badge.b1 {color:#aaa;border-color:#ddd;background-color:#eee;}/* 입금대기 */
.cart_list .badge.b2 {color:#666;border-color:#ddd;background-color:#fff;}/* 결제완료 */
.cart_list .badge.b3 {color:#fff;border-color:#aaa;background-color:#aaa;}/* 상품준비중 */
.cart_list .badge.b4 {color:#fff;border-color:#aaa;background-color:#aaa;}/* 배송준비중 */
.cart_list .badge.b5 {color:#fff;border-color:#aaa;background-color:#aaa;}/* 배송중 */
.cart_list .badge.b6 {color:#fff;border-color:#222;background-color:#222;}/* 배송완료 */
.cart_list .badge.b7 {color:#00C294;border-color:#00C294;background-color:#fff;}/* 구매확정 */

.cart_list .stock {margin-top:4px; font-size:12px; display:block;}
.cart_list .stock + .price {margin-top:0;}

.cart_list .images{padding-top:20px;font-size:0;}
.cart_list .images button{display:inline-block;width:calc((100% - 6px) / 3);margin:0 3px 3px 0;}
.cart_list .images button:nth-child(3n){margin-right:0;}
.cart_list .images button img{display:block;width:100%;height:108px;object-fit:cover;}

.flex_box .buttons{}
.flex_box .buttons button{margin-left:20px;font-size:14px;color:#222;text-decoration:underline;}

.review_radio{text-align:center;padding:30px 0;border-top:1px solid #eee;}
.review_radio > p{display:block;padding-bottom:10px;font-size:14px;color:#222;}
.review_radio > span{display:block;padding-top:10px;font-size:14px;color:#888;}

::v-deep.check input[type='radio']:checked + .label:after{background-color:#00C294;}
::v-deep.check input[type='radio']:checked + .label:before{border-color:#00C294;}

.inputs_wrap{padding:10px 0;}

.flex_box{align-items:center;}
.flex_box h5{font-size:12px;font-weight:400;color:#666;}
.flex_box .select{width:56%;}
</style>