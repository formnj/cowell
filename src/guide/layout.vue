<template>
    <div class="guide_content">
        <guide_header />

        <hgroup>
            <h2>Layout</h2>
        </hgroup>

        <section>
            <h4>Layout - Default</h4>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div id="sample_wrap">
                    <!-- header -->
                    <div>
                        <em>&lt;;Header /&gt;</em>
                    </div>
                    <!-- //header -->

                    <!-- container -->
                    <div>
                        <em>&lt;div id="container"&gt;</em>
                        <div>
                            <em>&lt;router-view /&gt;</em>
                        </div>
                    </div>
                    <!-- //container -->

                    <!-- footer -->
                    <div>
                        <em>&lt;Footer /&gt;</em>
                    </div>
                    <!-- //footer -->

                    <!-- mobile Actionbar-->
                    <div>
                        <em>&lt;ActionBar /&gt;</em>
                    </div>
                    <!-- //mobile Actionbar-->

                    <!-- brand layer-->
                    <div>
                        <em>&lt;BrandsLayer /&gt;</em>
                    </div>
                    <!-- brand layer-->
                </div>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;Header /&gt;
&lt;div id="container"&gt;
    &lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;
&lt;Footer /&gt;

&lt;!-- 모바일 액션바 --&gt;
&lt;ActionBar /&gt;
&lt;!-- //모바일 액션바 --&gt;
&lt;BrandsLayer /&gt;</code></pre>
        </section>

        <section>
            <h4>Layout - Sub</h4>
            <ul class="explain">
                <li>h2 button.back : 모바일 뒤로가기 버튼(PC에는 없음)</li>
                <li>특수한 구조의 페이지인 경우 &lt;div class="content 해당페이지_클래스"&gt;를 추가하여 진행 함.<br/>
                예) 회원가입 안내 : div class="content join_wrap"</li>
            </ul>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <div id="sample_wrap">
                    <template>
                        <div>
                            <h2>
                                <button class="back"></button>
                                Sub title
                            </h2>
                            <div class="content">
                                <h3>h3 title</h3>
                                <div><strong>contents</strong></div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;
            &lt;button class="back"&gt;&lt;/button&gt;
            Sub title
        &lt;/h2&gt;
        &lt;div class="content"&gt;
            &lt;h3&gt;h3 title&lt;/h3&gt;
            &lt;div&gt;contents&lt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </section>

    </div>
</template>

<script>
import guide_header from "@/guide/guide_header.vue";
import Inputs from "@/components/Inputs.vue";

export default {
    name: 'App',
    components: {
        guide_header,
        Inputs,
    },
    data() {
            return {
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

#sample_wrap div {margin:20px; padding:20px; border:1px solid #ccc; position:relative;}
#sample_wrap em {padding:3px 6px; color:#fff; font-size:12px; background-color:#222; border-radius:4px; position:absolute; top:-12px; left:12px; display:inline-block;}
</style>
