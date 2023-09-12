<template>
    <div class="tab_wrap" :class="{type_slide : tabType == 'slide'}">
        <ul :class="tabClass" style="transform:translate(0,0)">
            <li v-bind:class="{ current: tabidx == index }" v-for="(i, index) in tab_item" :key="index">
                <a v-on:click="tabidx = index, indChk()" href="javascript:void(0);">{{ i.item }}</a>
            </li>
        </ul>
        <a v-if="moreTxt" :href="moreLink" class="more">{{ moreTxt }}</a><!-- 더보기 추가 -->
    </div>
</template>
  
<script>

export default {
    components: {
    },
    data() {
        return {
        };
    },
    props: {
        tab_item: Array,
        tabClass: String,
        tabType: String,
        tabidx: Number,
        moreLink: String,
        moreTxt: String,
    },
    mounted() {
        const tab = document.querySelectorAll('.tab_wrap li a');

        tab.forEach(function (t, index) {

            var slide_tab_target = t.closest('ul');
            if(slide_tab_target.offsetWidth < t.closest('.tab_wrap').offsetWidth){
                slide_tab_target.classList.add('full');
            }

            t.addEventListener('click', function() {
                if(slide_tab_target.offsetWidth > t.closest('.tab_wrap').offsetWidth){
                    var ul_pos = slide_tab_target.style.transform.replace(/[^0-9\-.,]/g, '').split(',')[1];
                    var move_pos = Math.abs((t.closest('.tab_wrap').offsetWidth * 0.5) - t.offsetLeft);

                    var i=0, j=0;

                    j = i - ul_pos;
                    if(t.offsetLeft > (t.closest('.tab_wrap').offsetWidth*0.5)){
                        i -= ((move_pos + j) - (t.closest('.tab_wrap').offsetWidth * 0.1));
                    } else {
                        i += ((move_pos - j) + (t.closest('.tab_wrap').offsetWidth * 0.1));
                    }

                    slide_tab_target.style.transform='translate('+i+'px, 0)';

                    var wrapWidth;
                    if(t.closest('.tab_wrap').parentElement.tagName != 'SECTION'){
                        wrapWidth = t.closest('.tab_wrap').offsetWidth
                    } else {
                        wrapWidth = t.closest('.tab_wrap').offsetWidth - 40
                    }

                    var slide_tab_limit = (wrapWidth - slide_tab_target.offsetWidth)

                    if(i >= 0){
                        slide_tab_target.style.transform='translate(0, 0)';
                    }
                    if(i <= slide_tab_limit){
                        slide_tab_target.style.transform='translate('+slide_tab_limit+'px, 0)';
                    }
                }
                t.stopPropagation;
            });
        });

        const slider = document.querySelectorAll('.tab_wrap.type_slide ul');

        slider.forEach(function (t, index) {
            var x = 0;
            var tabx = 0;
            var xx = 0;
            var gap;
            
            if(t.closest('.tab_wrap').parentElement.tagName != 'SECTION'){
                gap = 0;
            } else {
                gap = 40;
            }

            var limit = ((t.offsetWidth - t.parentElement.offsetWidth) + gap);
            
            if(t.offsetWidth > window.innerWidth){
                t.addEventListener('touchstart', function(e) {
                    t.preventDefault;
                    var event = e.originalEvent;
                    x = e.touches[0].screenX;
                    tabx = t.closest('ul').style.transform.replace(/[^0-9\-.,]/g, '').split(',')[0];
                });
                t.addEventListener('touchmove', function(e) {
                    var event = e.originalEvent;
                    xx = parseInt(tabx) + parseInt(e.touches[0].screenX - x);
                    t.style.transform = 'translate(' + xx + 'px, 0px)';
                });
                t.addEventListener('touchend', function(e) {
                    if (xx > 0) {
                        t.style.transform = 'translate(0px, 0px)';
                    }
                    if (Math.abs(xx) > limit && xx < 0) {
                        t.style.transform = 'translate(-'+((t.offsetWidth - t.parentElement.offsetWidth)+gap) + 'px, 0px)';
                    }
                });
            }
        });
    },
    methods: {
        indChk(){
            this.$emit('change', this.tabidx)
        }
    },
};
</script>

<style scoped>
.tab_wrap {margin-bottom:20px; position:relative;}

.tab_wrap .more {color:#888; font-size:16px; line-height:24px; position:absolute; top:5px; right:0; display:flex; align-items:center;}
.tab_wrap .more:after {width:8px; height:8px; margin-top:-2px; margin-right:7px; margin-left:10px; border:1px solid #888; border-bottom:0; border-left:0; content:''; display:block; transform:rotate(45deg);}

[class*='tab_type'] {width:100%; border-bottom:1px solid #ddd;}
[class*='tab_type']:after {clear:both; content:''; display:block;}
[class*='tab_type'] > li {float:left;}
[class*='tab_type'] > li a {position:relative; display:block;}

.tab_wrap.type_slide {margin-right:-20px; margin-left:-20px; overflow:hidden;}

.tab_wrap.type_slide [class*='tab_type'] {width:auto; overflow:hidden; display:table; table-layout:fixed; transition-timing-function:cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration:400ms;}
.tab_wrap.type_slide [class*='tab_type'].full {width:100%; display:flex;}
.tab_wrap.type_slide [class*='tab_type'] > li {float:inherit !important; display:table-cell;}
.tab_wrap.type_slide [class*='tab_type'] > li a {white-space:nowrap;}

.tab_wrap.type_slide > .tab_type_default{padding:0 20px;}
.tab_wrap.type_slide > .tab_type_default > li a{padding:15px 0;}

/* tab style */
.tab_type_default > li + li {padding-left:40px;}
.tab_type_default > li a {padding-bottom:17px; font-size:20px; font-weight:500; line-height:1.5em; color:#999;}
.tab_type_default > li.current a {color:#00C294;}
.tab_type_default > li a:before, .tab_type_default > li a:after {border-bottom:4px solid #00C294; content:''; position:absolute; right:50%; bottom:-1px; left:50%; z-index:1; display:block; transition:all 0.25s;}
.tab_type_default > li.current a:before {left:0;}
.tab_type_default > li.current a:after {right:0;}
.tab_type_02 {border-bottom:1px solid #888;}
.tab_type_02 > li + li {margin-left:-1px;}
.tab_type_02 > li a {min-width:134px; padding:14px 5px; color:#aaa; font-size:18px; font-weight:400; line-height:26px; background-color:#fff; border:1px solid #eee; border-bottom:0; text-align:center; z-index:1;}
/* .tab_type_02 > li a:after {border-bottom:1px solid transparent; content:''; position:absolute; right:0; bottom:-1px; left:0;} */
.tab_type_02 > li.current a {margin-bottom:-1px; padding-bottom:15px; color:#222; font-weight:700; border-color:#888; z-index:2;}
.tab_type_03{border-bottom:none;}
.tab_type_03 > li {}
.tab_type_03 > li + li {padding-left:20px;}
.tab_type_03 > li a {padding-bottom:6px; line-height:1.416em;font-size:24px;font-weight:700;color:#999;}
.tab_type_03 > li a:before,
.tab_type_03 > li a:after {border-bottom:2px solid #222; content:''; position:absolute; right:50%; bottom:-1px; left:50%; z-index:1; display:block; transition:all 0.25s;}
.tab_type_03 > li.current a:before {left:0;}
.tab_type_03 > li.current a:after {right:0;}
.tab_type_03 > li.current a {color:#222;}

.tab_type_04{display:flex;border-bottom:none;}
.tab_type_04:after{content:none;}
.tab_type_04 > li{float:none;border:1px solid #ddd;border-left:none;}
/* .tab_type_04{display:table;table-layout:fixed;border-bottom:none;}
.tab_type_04:after{content:none;}
.tab_type_04 > li{float:none;display:table-cell;border:1px solid #ddd;border-left:none;} */
.tab_type_04 > li:first-child{border-left:1px solid #ddd;}
.tab_type_04 > li a{height:50px; padding:0 20px;font-size:16px;color:#666; line-height:50px; text-align:center;}
.tab_type_04 > li.current{border-color:#222;}
.tab_type_04 > li.current a{font-weight:700;color:#fff;background:#222;}
.tab_type_05{border-bottom:none;}
.tab_type_05:after{}
.tab_type_05 > li{float:none;display:inline-block;width:calc((100% + 3px) / 4);margin:-1px 0 0 -1px;vertical-align:top;border:1px solid #ddd;}
.tab_type_05 > li a{display:block;height:50px;line-height:50px !important;color:#666;text-align:center;}
.tab_type_05 > li.current{border:1px solid #ddd;}
.tab_type_05 > li.current a{font-weight:700;color:#fff;background:#222;}

@media screen and (max-width:1023px) {
    [class*='tab_type'] > li a {padding-bottom:6px; font-size:14px; line-height:1.428em;}

    .tab_type_default > li + li {padding-left:20px;}
    .tab_type_default > li a:before, .tab_type_default > li a:after {border-width:2px;}

    .tab_type_03 > li a {line-height:1.444em;font-size:18px;font-weight:700;color:#999;}
}
</style>