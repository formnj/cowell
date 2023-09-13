<template>
    <div class="guide_content">
        <guide_header />

        <hgroup>
            <h2>Modal</h2>
        </hgroup>

        <section>
            <h4>Modal</h4>
            <ul class="explain">
                <li>Type : 전체팝업 = modalType='full'</li>
                <li>modal_title : Modal 헤더 h2에 노출될 문구</li>
            </ul>
            <p class="tit_wrap">
                <strong class="tit">Design</strong>
            </p>
            <div class="design_box">
                <button  @click.prevent="openModal('modalSkin'), modalTitle='모달 제목', modalContent='콘텐츠 구분 값'">레이어팝업</button>
                <!-- modal -->
                <ModalSkin :modalTitle="modalTitle" :modalClass="'bottom'">
                    <div>Modal sample content</div>
                </ModalSkin>
                <!-- //modal -->
            </div>
            <p class="tit_wrap">
                <strong class="tit">Code</strong>
                <a href="#none">OPEN</a>
            </p>
            <pre class="code_box"><code>&lt;button @click="isModalViewed = true, modalType='타입지정'"&gt;버튼&lt;/button&gt;
&lt;!-- modal --&gt;
&lt;ModalSkin :modalTitle="모달 제목" :modalClass="'모달 클래스'&gt;
    &lt;Content msg="Hello Vue in CodeSandbox!" /&gt;
&lt;/ModalSkin&gt;
&lt;!-- //modal --&gt;

&lt;script&gt;
import ModalSkin from "@/components/ModalSkin"

export default {
    components: {
        ModalSkin,
    },
    data() {
        return {
            modalTitle: '',
            modalContent: '',
        };
    },
    methods:{
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
    },
}
&lt;/script&gt;</code></pre>
        </section>
    </div>
</template>

<script>
import guide_header from "@/guide/guide_header.vue";
import ModalSkin from "@/components/ModalSkin"

export default {
    name: 'App',
    components: {
        guide_header,
        ModalSkin,
    },
    data() {
        return {
            modalTitle: '',
            modalContent: '',
        };
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
    methods:{
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
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

/* tip box */
.tip_box.mo {padding:30px; background-color:#EEE;}
.tip_box.mo dt {padding-left:21px; font-size:16px; font-weight:700; line-height:24px; position:relative;}
.tip_box.mo dd {padding-left:22px;}
.tip_box.mo dt:before, .tip_box.mo dd:before {width:14px; height:14px; background:url('@/assets/images/mo/common/icon_tip.png') 50% no-repeat; background-size:cover; content:''; position:absolute; top:6px; left:0; display:block;}
.tip_box.mo dd:before {top:2px;}
.tip_box.mo dd {color:#666; font-size:12px; line-height:16px; position:relative;}
.tip_box.mo dt + dd {margin-top:12px; padding:0;}
.tip_box.mo dt + dd:before {display:none;}
</style>
