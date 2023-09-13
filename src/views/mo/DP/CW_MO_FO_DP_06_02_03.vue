<template>
    <div class="filter_wrap">
        <dl>
            <!-- 23.05.10 추가 카테고리 영역 -->
            <dt @click.prevent="onToggleCheckCategory($event)">카테고리</dt>
            <dd class="cate_list">
                <div>
                    <dl v-for="(item, index) in cate[0].main" :key="index">
                        <dt>
                            <Inputs input_type="checkbox" id="아이디" :text="item.item" />
                        </dt>
                        <dd :class="{'active' : cate[0].idx == index}" v-if="item.sub">
                            <ul>
                                <li :class="{'active' : cate[0].Sidx == index }" v-for="(item, index) in item.sub" :key="index">
                                    <Inputs input_type="checkbox" id="아이디" :text="item.item" />
                                    <ul v-if="item.sub02">
                                        <li :class="{'active' : cate[0].Ssidx == index }" v-for="(item, index) in item.sub02" :key="index">
                                            <Inputs input_type="checkbox" id="아이디" :text="item.item" />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </dd>
            <!-- <dd>
                <ul class="check_type">
                    <li v-for="(item, index) in filter[0].brand" :key="index">
                        <Inputs input_type="checkbox" id="아이디" :text="item.text" :checked="item.isChecked" />
                    </li>
                </ul>
                <button class="reset">초기화</button>
            </dd> -->
            <!-- //23.05.10 추가 카테고리 영역 -->

            <dt @click.prevent="onToggleCheckCategory($event)">브랜드</dt>
            <dd>
                <ul class="check_type">
                    <li v-for="(item, index) in filter[0].brand" :key="index">
                        <Inputs input_type="checkbox" id="아이디" :text="item.text" :checked="item.isChecked" />
                    </li>
                </ul>
                <button class="reset">초기화</button>
            </dd>
            <dt @click.prevent="onToggleCheckCategory($event)">색상 (18)</dt>
            <dd>
                <ul class="color_book">
                    <li v-for="(item, index) in filter[0].color" :key="index">
                        <Inputs input_type="checkbox" id="아이디" :checked="item.isChecked" :style="{backgroundColor:item.bg}" :class="{'border': item.bg == '#fff'}" />
                    </li>
                </ul>
            </dd>
            <dt @click.prevent="onToggleCheckCategory($event)">사이즈 (5)</dt>
            <dd>
                <ul class="size_book">
                    <li v-for="(item, index) in filter[0].size" :key="index">
                        <Inputs input_type="checkbox" id="아이디" :text="item.item" :checked="item.isChecked" />
                    </li>
                </ul>
            </dd>
            <dt @click.prevent="onToggleCheckCategory($event)">가격</dt>
            <dd>
                <div class="multi_form">
                    <div>
                        <Inputs input_type="text" id="id_text" value="" />
                        <span>~</span>
                        <Inputs input_type="text" id="id_text" value="" />
                    </div>
                    <em>에러문구</em>
                </div>
                <ul class="check_type">
                    <li v-for="(item, index) in filter[0].price" :key="index">
                        <Inputs input_type="radio" id="아이디" :text="item.item" :checked="item.isChecked" />
                    </li>
                </ul>
                <button class="reset">초기화</button>
            </dd>
            <dt @click.prevent="onToggleCheckCategory($event)">할인율</dt>
            <dd>
                <div class="multi_form">
                    <div>
                        <Inputs input_type="text" id="id_text" value="" />
                        <span>~</span>
                        <Inputs input_type="text" id="id_text" value="" />
                    </div>
                    <em>에러문구</em>
                </div>
                <ul class="check_type">
                    <li v-for="(item, index) in filter[0].discount" :key="index">
                        <Inputs input_type="radio" id="아이디" :text="item.item" :checked="item.isChecked" />
                    </li>
                </ul>
                <button class="reset">초기화</button>
            </dd>
        </dl>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue';

export default {
    components: {
        Inputs,
    },
    props: {},
    data(){
        return {
            cate:[
                {
                    idx:2,
                    Sidx:0,
                    Ssidx:0,
                    main:[
                        {item:'전체'},
                        {item:'아우터'},
                        {
                            item:'상의',
                            sub: [
                                {item:'상의-드로즈',
                                sub02: [
                                    {item:'드로즈-하위1'},
                                    {item:'드로즈-하위2'},
                                    {item:'드로즈-하위3'},
                                    {item:'드로즈-하위4'},
                                    {item:'드로즈-하위5'},
                                    ],
                                },
                                {item:'상의-트렁크'},
                                {item:'상의-세트'},
                                {item:'상의-런닝/티'},
                                {item:'상의-베이스 레이어'},
                                {item:'상의-히트웨어'},
                                {item:'상의-홈웨어'}
                            ],
                        },
                        {item:'하의',
                            sub: [
                                {item:'하의-드로즈'},
                                {item:'하의-트렁크'},
                                {item:'하의-세트'},
                                {item:'하의-런닝/티'},
                                {item:'하의-베이스 레이어'},
                                {item:'하의-히트웨어'},
                                {item:'하의-홈웨어'}
                            ],
                        },
                        {item:'세트웨어'},
                        {item:'패션 잡화'},
                    ],
                },
            ],
            filter:[
                {
                    brand:[
                        {text:'아디다스 스포츠', isChecked:true},
                        {text:'켈빈 클라인', isChecked:false},
                        {text:'노티카', isChecked:false},
                        {text:'바나나 리퍼블릭', isChecked:true},
                        {text:'푸마', isChecked:false},
                    ],
                    color:[
                        {bg:'#fff'},
                        {bg:'#FEDCDC'},
                        {bg:'#FCB89A'},
                        {bg:'#D9EA71'},
                        {bg:'#8CDA8A'},
                        {bg:'#A1E2DE'},
                        {bg:'#68C7E5'},
                        {bg:'#A2C5FB'},
                        {bg:'#D7B6F8'},
                    ],
                    size:[
                        {item:'XS'},
                        {item:'S'},
                        {item:'M'},
                        {item:'L'},
                        {item:'XL'},
                        {item:'XXL'},
                    ],
                    price:[
                        {item:'0~30,000원'},
                        {item:'30,000~100,000원'},
                        {item:'100,000~150,000원'},
                        {item:'150,000~200,000원'},
                        {item:'200,000원 이상'},
                    ],
                    discount :[
                        {item:'1~15%'},
                        {item:'15~30%'},
                        {item:'30~50%'},
                        {item:'50% 이상'},
                    ]
                }
            ],
        }
    },
    /* 23.05.10 추가 */
    mounted(){
        var cate_el = document.querySelectorAll('.cate_list .check');
        cate_el.forEach(function (t, index) {
            var cate_child =  t.querySelector('input');
            cate_child.addEventListener('change', function() {
                if(cate_child.checked){
                    if(t.parentNode.tagName == 'DT' && t.parentElement.nextElementSibling != null){
                        t.parentElement.nextElementSibling.classList.add('active')
                    }

                    if(t.parentNode.tagName == 'LI' && t.parentElement.nextElementSibling != null){
                        t.nextElementSibling.classList.add('active')
                    }
                } else {
                    if(t.parentNode.tagName == 'DT' && t.parentElement.nextElementSibling != null){
                        t.parentElement.nextElementSibling.classList.remove('active')
                    }

                    if(t.parentNode.tagName == 'LI' && t.parentElement.nextElementSibling != null){
                        t.nextElementSibling.classList.remove('active')
                    }
                }
            });
        });
    },
    /* //23.05.10 추가 */
    methods: {
        onToggleCheckCategory (event) {
            event.currentTarget.classList.toggle('active')
        },
    },
};
</script>

<style scoped>
.filter_wrap dl {margin-top:-20px; border-bottom:1px solid #eee;}
.filter_wrap dt {padding:20px 0; font-size:16px; cursor:pointer; position:relative;}
.filter_wrap dt:after {width:10px; height:10px; border:1px solid #000; border-top:0; border-left:0; content:''; position:absolute; top:24px; right:6px; transform:rotate(45deg);}
.filter_wrap dt.active:after {margin-top:9px; transform:rotate(-135deg);}
.filter_wrap dd {padding-bottom:20px; position:relative; display:none;}
.filter_wrap dt.active + dd {display:block;}
.filter_wrap dd + dt {border-top:1px solid #eee;}
.filter_wrap .multi_form {margin-bottom:18px;}
.filter_wrap .check_type li + li {margin-top:14px;}
.filter_wrap::v-deep .label {font-size:14px;}

/* 23.05.10 추가 */
.filter_wrap .cate_list {padding-bottom:0;}
.filter_wrap .cate_list dl {margin-top:-20px; border-bottom:none;}
.filter_wrap .cate_list dt:after {display:none;}
.filter_wrap .cate_list ul {display:none;}
.filter_wrap .cate_list dd {padding:0 20px 20px;}
.filter_wrap .cate_list dd.active, .filter_wrap .cate_list dd.active > ul, .filter_wrap .cate_list ul.active {display:block;}
.filter_wrap .cate_list dd > ul {margin:-13px 0;}
.filter_wrap .cate_list dd li {padding:13px 0;}
.filter_wrap .cate_list dd ul ul {margin:13px -20px 0; padding:0 25px 0 40px; background:#F8F8F8;}
.filter_wrap .cate_list dd li li {display:inline-block;}
.filter_wrap .cate_list dd li li label.check {margin-right:15px;}
/* //23.05.10 추가 */

.reset {font-size:0; position:absolute; bottom:20px; right:0;}
.reset:before {width:24px; height:24px; margin-top:-3px; margin-right:8px; background:url('@/assets/images/mo/sub/icon_reset.png') 50% no-repeat; background-size:24px auto; vertical-align:top; content:''; display:inline-block;}
</style>