<template>
    <div class="guide_content">
        <guide_header />

        <hgroup>
            <h2>List</h2>
        </hgroup>

        <section>
            <h4>Goods List</h4>
            <ul class="explain">
                <li>Wish [♡] 노출 : [data-type="wish"] 추가</li>
                <li>:isSwiper="true" : swiper 작용 시 li에 클래스 "sliper-slide" 자동 적용</li>
            </ul>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <GoodsList  v-bind:item="goods_item[0].item" />
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="javascript:void(0)">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;template&gt;
    &lt;div class="swiper_wrap" role-type="swiper_default"&gt;
        &lt;GoodsList v-bind:item="goods_item[0].item" /&gt;
    &lt;/div&gt;
&lt;template&gt;

&lt;script&gt;
    import GoodsItems from "@/components/GoodsItem.vue";
&lt;/script&gt;

export default {
    components: {
        GoodsItem
    },
}</code></pre>
        </section>

        <section>
            <h4>accordion Toggle</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div class="list_goods_inquire">
                    <dl>
                        <template v-for="(item) in 5">
                            <dt>
                                <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">
                                    <div class="cont">
                                        <strong class="title question">[포인트 및 이벤트] 구매확정 됐는데 포인트 적립은 언제 되나요?</strong>
                                    </div>
                                </button>
                            </dt>
                            <dd>
                                <div class="cont">
                                    <div class="answer">
                                        <p>구매확정은 상품 수령일 기준으로 7일 경과 시, 자동으로 택배사 구매확정이 진행되어 이후 적립 진행 가능합니다. (구매확정 건은 교환,반품이 불가합니다.)</p>
                                    </div>
                                </div>
                            </dd>
                        </template>
                    </dl>
                </div>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="javascript:void(0)">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;div class="list_goods_inquire"&gt;
    &lt;dl&gt;
        &lt;template v-for="(item) in 5"&gt;
            &lt;dt&gt;
                &lt;button type="button" class="button_toggle" @click.prevent="accordionToggle($event)"&gt;
                    &lt;div class="cont"&gt;
                        &lt;strong class="title question"&gt;[포인트 및 이벤트] 구매확정 됐는데 포인트 적립은 언제 되나요?&lt;/strong&gt;
                    &lt;/div&gt;
                &lt;/button&gt;
            &lt;/dt&gt;
            &lt;dd&gt;
                &lt;div class="cont"&gt;
                    &lt;div class="answer"&gt;
                        &lt;p&gt;구매확정은 상품 수령일 기준으로 7일 경과 시, 자동으로 택배사 구매확정이 진행되어 이후 적립 진행 가능합니다. (구매확정 건은 교환,반품이 불가합니다.)&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/dd&gt;
        &lt;/template&gt;
    &lt;/dl&gt;
&lt;/div&gt;

&lt;script&gt;
import Reviews from "@/components/Reviews.vue";

    export default {
        components: {
            Reviews
        },
        methods: {
            accordionToggle (event) {
                console.log(event.currentTarget.parentNode)
                event.currentTarget.parentNode.classList.toggle('active')
            },
        },
    }
&lt;/script&gt;</code></pre>
        </section>

        <section>
            <h4>Review</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <Reviews :item="review" />
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="javascript:void(0)">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;template&gt;
    &lt;Reviews :item="리뷰데이터" /&gt;
&lt;/template&gt;

&lt;script&gt;
import Reviews from "@/components/Reviews.vue";

    export default {
        components: {
            Reviews
        },
    }
&lt;/script&gt;</code></pre>
        </section>
    </div>
</template>

<script>
import guide_header from "@/guide/guide_header.vue";

import GoodsList from "@/components/GoodsList.vue";
import Inputs from "@/components/Inputs.vue";
import Reviews from "@/components/Reviews.vue";
import ReviewScore from "@/components/ReviewScore.vue";

export default {
    name: 'App',
    components: {
        guide_header,
        Inputs,
        GoodsList,
        Reviews,
        ReviewScore,    },
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

                /* reivew */
                review: [
                    { photo: require("@/assets/images/pc/sample/imgreview01.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비스위퍼 더비 라이트 롱다운 네이비", discount: "30%", price:"300,300", reivewScore:3.5},
                    { photo: require("@/assets/images/pc/sample/imgreview02.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:5},
                    { photo: require("@/assets/images/pc/sample/imgreview02.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:5},
                    { photo: require("@/assets/images/pc/sample/imgreview03.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:.5},
                    { photo: require("@/assets/images/pc/sample/imgreview04.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:4.5},
                    { photo: require("@/assets/images/pc/sample/imgreview05.png"), goods: require("@/assets/images/pc/sample/sam_hot_01.png"), tit: "스위퍼 더비 헤비 다운 라이트베이지", discount: "30%", price:"300,300", reivewScore:5},
                ],
                /* //reivews */
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
        });
    },
    methods: {
        accordionToggle (event) {
            console.log(event.currentTarget.parentNode)
            event.currentTarget.parentNode.classList.toggle('active')
        },
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

::v-deep .goods_list > li {width:16.66666%;}

::v-deep .review_list {margin-left:-10px;}
::v-deep .review_list > li {width:16.6666%; padding-left:10px;}
</style>
