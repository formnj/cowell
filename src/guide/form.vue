<template>
    <div class="guide_content">
        <guide_header />

        <hgroup>
            <h2>Form</h2>
        </hgroup>

        <section>
            <h4>Radio / Check</h4>
            <ul class="explain">
                <li>[input_type]으로 구분</li>
                <li>스위치 타입의 경우 class="check_ani" 추가</li>
                <li>required_txt 값의 유무에 따라 check의 필수값 노출 선택 : 필수 = required_type="required" / 선택 required_type="no_required"</li>
            </ul>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <ul class="form_group">
                    <li><Inputs  input_type="radio" id="id_radio" text="라디오버튼입니다." /></li>
                    <li><Inputs  input_type="checkbox" id="id_checkbox" text="체크박스입니다." /></li>
                    required_type="required" required_txt="필수"
                    <li><Inputs class="check_ani" input_type="checkbox" id="id_check_ani" text="스위치버튼입니다." /></li>
                </ul>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;template&gt;
    &lt;!-- radio --&gt;
    &lt;Inputs  input_type="radio" id="아이디" text="문구입력" /&gt;
    &lt;!-- //radio --&gt;

    &lt;!-- check --&gt;
    &lt;Inputs  input_type="checkbox" id="아이디" text="문구입력." /&gt;
    &lt;!-- //check --&gt;

    &lt;!-- switch --&gt;
    &lt;Inputs class="check_ani" input_type="checkbox" id="아이디" text="문구입력" /&gt;
    &lt;!-- //switch --&gt;
&lt;/template&gt;

&lt;script&gt;
    import Inputs from "@/components/Inputs.vue";

    export default {
        components: {
            Inputs
        },
    }
&lt;/script&gt;</code></pre>
        </section>

        <section>
            <h4>Input Form</h4>
            <ul class="explain">
                <li>[Inputs]에 [err] 클래스 추가 시 오류문구 노출 </li>
            </ul>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <ul class="form_group">
                    <li>
                        <p class="form_tit">Default :</p>
                        <Inputs  input_type="text" id="id_text" placeholder="Placeholder" err_text="에러문구" value="" />
                    </li>
                    <li>
                        <p class="form_tit">Password :</p>
                        <Inputs  input_type="password" id="id_pass" placeholder="Placeholder" err_text="에러문구" value="" />
                    </li>
                </ul>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;!-- input : text --&gt;
&lt;Inputs  input_type="text" id="id_text" placeholder="Placeholder" err_text="에러문구" value="" /&gt;
&lt;!-- //input : text --&gt;

&lt;!-- input : password --&gt;
&lt;Inputs  input_type="password" id="id_pass" placeholder="Placeholder" err_text="에러문구" value="" /&gt;
&lt;!-- //input : password --&gt;</code></pre>
        </section>

        <section>
            <h4>SelectBox</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <SelectBox :options="options" model="selectbox"/>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;template&lt;
&lt;SelectBox :options="옵션 리스트" model="모델"/&lt;
&lt;/template&lt;

&lt;script&lt;
    import SelectBox from "@/components/SelectBox.vue";

    export default {
        components: {
            SelectBox
        },
    }
&lt;/script&gt;</code></pre>
        </section>

        <section>
            <h4>Multi Form</h4>
            <ul class="explain">
                <li>multi_form에 에러 메시지 노출 시 [multi_form]에 [err] 클래스 추가, [multi_form err > div]와 근접해 있는 em이 노출됨</li>
            </ul>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <ul class="form_group">
                    <li>
                        <p class="form_tit">Input + Button :</p>
                        <div class="multi_form">
                            <div>
                                <Inputs  input_type="text" id="id_pass" placeholder="Placeholder" err_text="에러문구" value="" />
                                <button class="btn_mid btn_default"><em>Check</em></button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <p class="form_tit">Input + Input :</p>
                        <div class="multi_form">
                            <div>
                                <Inputs  input_type="text" id="id_text" placeholder="Placeholder" value="" />
                                <Inputs  input_type="text" id="id_text" placeholder="Placeholder" value="" />
                            </div>
                            <em>에러문구</em>
                        </div>
                    </li>
                    <li class="txt_wrap">
                        <p class="form_tit">form Title</p>
                        <span>Text Text</span>
                    </li>
                </ul>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;!-- input + button --&gt;
&lt;div class="multi_form"&gt;
    &lt;div&gt;
        &lt;Inputs  input_type="text" id="id_pass" placeholder="Placeholder" err_text="에러문구" value="" /&gt;
        &lt;button class="btn_mid btn_default"&gt;&lt;em&gt;Check&lt;/em&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;em&gt;에러문구&lt;/em&gt;
&lt;/div&gt;
&lt;!-- //input + button --&gt;

&lt;!-- input + input --&gt;
&lt;div class="multi_form"&gt;
    &lt;div&gt;
        &lt;Inputs  input_type="text" id="id_text" placeholder="Placeholder" value="" /&gt;
        &lt;Inputs  input_type="text" id="id_text" placeholder="Placeholder" value="" /&gt;
    &lt;/div&gt;
    &lt;em&gt;에러문구&lt;/em&gt;
&lt;/div&gt;
&lt;!-- //input + input --&gt;</code></pre>
        </section>

        <section>
            <h4>Date Form</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div class="date_form">
                    <SelectBox :options="options" model="Day"/>
                    <SelectBox :options="options" model="Month"/>
                    <SelectBox :options="options" model="Year"/>
                </div>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;div class="date_form"&gt;
    &lt;SelectBox :options="옵션 리스트" model="모델"/&gt;
    &lt;SelectBox :options="옵션 리스트" model="모델"/&gt;
    &lt;SelectBox :options="옵션 리스트" model="모델"/&gt;
&lt;/div&gt;</code></pre>
        </section>
    </div>
</template>

<script>
import guide_header from "@/guide/guide_header.vue";

import GoodsItem from "@/components/GoodsItem.vue";
import Inputs from "@/components/Inputs.vue";
import SelectBox from "@/components/SelectBox.vue";

export default {
    name: 'App',
    components: {
        guide_header,
        Inputs,
        GoodsItem,
        SelectBox,
        
    },
    data() {
            return {
                /* 상품리스트 샘플 데이터 */
                goods_item: [
                    {
                        item :[
                            {
                                img:require("../assets/images/pc/sample/sam_goods_list_02.jpg"),
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
                                img:require("../assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"NEW", class:"new"},
                                ],
                            },
                            {
                                img:require("../assets/images/pc/sample/sam_goods_list_01.jpg"),
                                brand: "Nike", tit:"나이키 에어",
                                price:"250,000",
                                discount:"45%",
                                badge:[
                                    {txt:"쿠폰", class:"coupon"},
                                    {txt:"SOLD OUT", class:'soldout'}
                                ],
                            },
                            {
                                img:require("../assets/images/pc/sample/sam_goods_list_01.jpg"),
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
                        ]
                    }
                ],
                /* //상품리스트 샘플 데이터 */
                /* select */
                isChange: false,
                options: [
                    { val: "value", txt: "text 01" },
                    { val: "value", txt: "text 02" },
                    { val: "value", txt: "text 03" },
                    { val: "value", txt: "text 04" },
                    { val: "value", txt: "text 05" },
                    { val: "value", txt: "text 06" },
                ],
            }
    },
    mounted() {
        $(document).ready(function () {
            /* 소스보기 */
            $('.tit_wrap a').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').parent().siblings('.code_box').slideUp();
                } else {
                    $(this).addClass('active').parent().siblings('.code_box').slideDown();
                }
            });

            var default_Option = {
                slidesPerView:2,
                spaceBetween:5,
                loop: false,
                centeredSlides: false,
                loopAdditionalSlides:4,
                pagination: {
                    clickable: true,
                    el: ".swiper-pagination",
                },
                on: {
                    slideChange: function () {
                    }
                }
            }

            var defaultSwiper = new Swiper('[role-type="swiper_default"].swiper_wrap', default_Option);
        });
    },
}
</script>

<style scoped>
.guide_content {padding:20px;}

.guide_content hgroup h2 {margin-bottom:20px; padding-bottom:5px; color:#ff7200; font-size:24px; border-bottom:1px dotted #d4d4d4;}

.guide_content h4 {padding-left:15px; font-size:18px; position:relative;}
.guide_content section h4:before {border-left:5px solid #ff7200; content:''; position:absolute; top:5px; bottom:5px; left:0;}

.tit_wrap a {margin-left:5px; font-size:0; font-weight:500; vertical-align:middle; display:inline-block;}
.tit_wrap a:before {padding-right:5px; color:#333; font-size:12px; vertical-align:top; content:':'; display:inline-block;}
.tit_wrap a:after {color:#333; font-size:12px; content:'OPEN'; vertical-align:top; display:inline-block;}
.tit_wrap a.active:after {content:'CLOSE';}
strong.tit {margin-top:10px; padding:5px 10px; color:#fff; font-size:14px; font-weight:500; line-height:1; background-color:#ff7200; border-radius:2px; display:inline-block;}

.form_tit {margin-top:0; margin-bottom:6px; font-size:14px !important; font-family:'Noto Sans'; line-height:20px !important; text-align:left !important;}
.form_tit em {color:#888; font-weight:400; display:inline-block;}
.form_tit.required:after {margin-left:2px; color:#d60812; font-size:14px; content:'*'; display:inline-block;}

.guide_nav {background-color:#eee; border-top:6px solid #d4d4d4;}
.guide_nav.fixed {background-color:#ff7200; position:fixed; top:0; right:0; left:0; z-index:1;}
.guide_nav:after {clear:both; content:''; display:block;}
.guide_nav li {width:150px; border-right:1px solid #d9d9d9; border-left:1px solid #fff; float:left;}
.guide_nav a {padding:10px 0; text-align:center; display:block;}
.guide_nav.fixed a {color:#fff;}
.guide_nav li.current a {font-weight:700; background-color:#fff;}
.guide_nav.fixed li.current a {color:#000;}

.grid_col3 {margin-left:-20px;}
.grid_col3 > * {padding-left:20px;}
.grid_col3 > * > div {padding:10px; background-color:#eee;}

h3 + .list_bullet {margin-top:10px;}
.list_bullet li + li {margin-top:5px;}
.list_bullet li:before {margin-right:5px; content:'쨌'; display:inline-block;}

section + section {margin-top:20px; padding-top:20px; border-top:1px dashed #d4d4d4;}

.design_box {margin-top:10px; padding:10px; border:1px solid #ddd;}

.code_box {margin-top:10px; padding:20px; color:#666; font-size:14px; font-family:dotum!important; line-height:1.4; white-space:pre-wrap; background-color:#f2f2f2; border:1px solid #ddd; display:none;}
.code_box.type_monitor {color:#fff; background-color:#000;}

.explain {margin-top:10px; margin-bottom:10px;}
.explain li {padding-left:10px; position:relative;}
.explain li + li {margin-top:5px;}
.explain li:before {width:3px; height:3px; background-color:#666; content:''; position:absolute; top:10px; left:0; display:inline-block;}
.explain li em {font-size:12px;}

.form_group {margin-top:0;}
</style>
