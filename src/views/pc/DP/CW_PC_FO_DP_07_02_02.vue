<template>
    <div>
        <div class="search_wrap">
            <div class="search_form">
                <Inputs input_type="text" id="아이디" value="" placeholder="검색어를 입력하세요." />
                <button class="btn_search">검색</button>
            </div>
        </div>
        <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" :tabidx="tabidx" @change="change" />

        <div class="cate_wrap content">
            <!-- left -->
            <div class="left_frame">
                <!-- 23.05.10 제거 카테고리 영역
                <strong class="tit">대카테고리</strong>
                <div class="cate_list">
                    <dl v-for="(item, index) in cate[0].main" :key="index">
                        <dt @click.prevent="onToggleCheckCategory($event)">{{ item.item }}</dt>
                        <dd :class="{'active' : cate[0].idx == index}" v-if="item.sub">
                            <ul>
                                <li :class="{'active' : cate[0].Sidx == index }" v-for="(item, index) in item.sub" :key="index">
                                    <router-link to="">{{ item.item }}</router-link>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                //23.05.10 제거 카테고리 영역 -->

                <!-- 필터 영역 -->
                <div class="filter_wrap">
                    <strong class="tit">필터</strong>
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
                        <!-- //23.05.10 추가 카테고리 영역 -->
                        <dt @click.prevent="onToggleCheckCategory($event)">브랜드</dt>
                        <dd>
                            <ul class="check_type">
                                <li v-for="(item, index) in filter[0].brand" :key="index">
                                    <Inputs input_type="checkbox" id="아이디" :text="item.text" :checked="item.isChecked" />
                                </li>
                            </ul>
                        </dd>
                        <dt @click.prevent="onToggleCheckCategory($event)">색상 (18)</dt>
                        <dd>
                            <ul class="color_book">
                                <li v-for="(item, index) in filter[0].color" :key="index">
                                    <Inputs input_type="checkbox" id="아이디" :text="item.text" :checked="item.isChecked" :style="{backgroundColor:item.bg}" :class="{'border': item.bg == '#fff'}" />
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
                        </dd>
                    </dl>
                </div>
                <!-- //필터 영역 -->
            </div>
            <!-- //left -->
            <!-- content -->
            <div class="right_frame">
                <div class="tit_wrap">
                    <h3>
                        <span class="sub_tit">여성 / 아우터</span>
                        상의 <em>(34)</em>
                    </h3>
                    <div class="option_wrap">
                        <SelectBox :isChange="true" :options="options"/>
                    </div>
                </div>

                <!-- 선택된 필터값 리스트 -->
                <p class="select_filter">
                    <button class="reset">초기화</button>
                    <!-- 색상 필터 -->
                    <button class="type_color" v-for="(item, index) in filter[0].color" :key="index">
                        <em :style="{backgroundColor:item.bg}" :class="{'border': item.bg == '#fff'}"></em>
                    </button>
                    <!-- 브랜드 필터 -->
                    <button v-for="(item, index) in filter[0].brand" :key="index">{{ item.text }}</button>
                    <!-- 사이즈 필터 -->
                    <button v-for="(item, index) in filter[0].size" :key="index">{{ item.item }}</button>
                    <!-- 가격 필터 -->
                    <button v-for="(item, index) in filter[0].price" :key="index">{{ item.item }}</button>
                    <!-- 할인 필터 -->
                    <button v-for="(item, index) in filter[0].prdiscountice" :key="index">{{ item.item }}</button>
                </p>
                <!-- //선택된 필터값 리스트 -->

                <!-- goods list -->
                <GoodsList class="type_02" :isWish="true" :isCart="true" :item="goods_item[0].item" />
                <!-- //goods list -->

                <div class="pagination">
                    <a href="#none" class="btn_first">처음으로</a>
                    <a href="#none" class="btn_prev">이전</a>
                    <a href="#none">1</a>
                    <a href="#none">2</a>
                    <a href="#none">3</a>
                    <a href="#none">4</a>
                    <a href="#none" class="btn_next">다음</a>
                    <a href="#none" class="btn_end">마지막으로</a>
                </div>
            </div>
            <!-- //content -->
        </div>

    </div>
</template>

<script>
    import Inputs from "@/components/Inputs.vue";
    import Tabs from "@/components/Tabs.vue";
    import SelectBox from "@/components/SelectBox.vue";
    import GoodsList from "@/components/GoodsList.vue";
    
    export default {
        name: 'App',
        components: {
            Inputs,
            Tabs,
            SelectBox,
            GoodsList,
        },
        data() {
            return {
                tabidx: 0,
                tab_item_category: [
                    { item: "상품(999)" },
                    { item: "브랜드(999)" },
                    { item: "기획전(999)" },
                ],

                options: [
                    { val: "value", txt: "판매 인기순" },
                    { val: "value", txt: "신상품순" },
                    { val: "value", txt: "높은가격순" },
                    { val: "value", txt: "낮은가격순" },
                    { val: "value", txt: "평점높은순" },
                    { val: "value", txt: "찜인기순" },
                ],
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
                /* goods */
                goods_item: [
                    {
                        item :[
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
                        ]
                    }
                ],
                /* //goods */
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
                event.currentTarget.nextSibling.classList.toggle('active')
            },
        }
    }
</script>

<style scoped>
.content{padding-top:60px}
.search_wrap{margin-top:120px;}
.searchModal {background-color:rgba(34,34,34,0.75); position:fixed; top:0; right:0; bottom:0; left:0; z-index:10;}
.searchModal .btn_close {width:40px; height:40px; font-size:0; position:absolute; top:40px; right:40px;}
.searchModal .btn_close:before, .searchModal .btn_close:after {width:46px; margin-top:-1px; margin-left:-4px; border-top:2px solid #222; content:''; position:absolute; top:50%; left:0; display:block; transform:rotate(45deg);}
.searchModal .btn_close:after {transform:rotate(135deg);}
.search_bg {width:100%; height:100%;}
.search_inner {width:100%; padding:105px 20px; background-color:rgba(255,255,255,0.98); position:absolute; top:0; left:0; z-index:11;}

.keyword_list {margin-top:40px; display:flex; justify-content:space-between;}
.keyword_list dl {width:390px;}
.keyword_list dl + dl {width:186px;}
.keyword_list dt {margin-bottom:20px; font-size:20px; font-weight:700; line-height:30px; display:flex; align-items:center; justify-content:space-between;}
.keyword_list dt * {color:#999; font-size:12px; font-weight:400; line-height:16px;}
.keyword_list dt em + em {margin-left:6px;}
.keyword_list dd {margin:14px 0; padding-right:38px; position:relative; display:flex; align-items:center; justify-content:space-between;}
.keyword_list dd em {color:#999;}
.keyword_list dd span {width:24px; margin-right:10px; display:inline-block;}
.keyword_list dd button {width:18px; height:18px; font-size:0; position:absolute; top:0; right:0;}
.keyword_list dd button:before, .keyword_list dd button:after {width:20px; margin-top:9px; margin-left:-1px; border-top:1px solid #999; content:''; position:absolute; top:0; left:0; display:block; transform:rotate(45deg);}
.keyword_list dd button:after {transform:rotate(135deg);}

.tab_wrap{width:800px;margin:60px auto;}
::v-deep .tab_wrap .tab_type_03{display:flex;justify-content:space-between;}
::v-deep .tab_wrap .tab_type_03:after{content:none;}
::v-deep .tab_wrap .tab_type_03 > li{float:none;}


.result_none{padding:120px 20px;text-align:center;}
.result_none > p{font-size:30px;}
.result_none > p > em{color:#00C294;}

.cate_wrap {position:relative; display:flex;}
.cate_wrap .tit_wrap .option_wrap {display:flex; align-items:center;}
.cate_wrap .tit_wrap::v-deep select {min-width:172px; height:52px;}
.cate_wrap.fixed {padding-top:100px; padding-left:235px;}
.cate_wrap.fixed .left_frame {margin-left:-800px; position:fixed; top:100px; left:50%;}
.left_frame {width:235px;}
.left_frame .tit {margin-bottom:20px; font-size:30px; line-height:36px; display:block;}
.left_frame .check_type li + li {margin-top:15px;}
.left_frame .cate_list dl + dl {margin-top:15px;}
.left_frame .cate_list dt {color:#666; font-size:16px; font-weight:500; line-height:24px; cursor:pointer;}
.left_frame .cate_list dd {color:#000; line-height:20px; display:none;}
.left_frame .cate_list dd.active {display:block;}
.left_frame .cate_list dd ul {margin-top:10px; padding:20px 15px; background-color:#F8F8F8;}
/* 23.05.10 추가 */
.left_frame .cate_list dd ul ul {margin-top:0; display:none;}
.left_frame .cate_list dd ul ul.active {display:block;}
/* 23.05.10 추가 */
.left_frame .cate_list dd li + li {margin-top:10px;}
.left_frame .cate_list dd a {display:block;}
/* 23.05.10 수정 */
.left_frame .filter_wrap {}
.left_frame .filter_wrap > dl {margin-top:-20px; border-bottom:1px solid #eee;}
.left_frame .filter_wrap > dl > dt {padding:20px 0; font-size:20px; cursor:pointer; position:relative;}
.left_frame .filter_wrap > dl > dt:after {width:12px; height:12px; border:1px solid #000; border-top:0; border-left:0; content:''; position:absolute; top:24px; right:6px; transform:rotate(45deg);}
.left_frame .filter_wrap > dl > dd {margin-top:-10px; padding-bottom:20px; display:none;}
.left_frame .filter_wrap > dl > dd.active {display:block;}
.left_frame .filter_wrap > dl > dd + dt {border-top:1px solid #eee;}
/* //23.05.10 수정 */

.left_frame .multi_form {margin-bottom:20px;}
.left_frame .multi_form span {margin:0 2px 0 10px; font-size:18px; content:'~'; display:inline-block;}


.right_frame {margin-left:40px; flex:1;}

.right_frame .select_filter {margin-top:-10px; margin-bottom:20px; margin-left:-14px; position:relative; z-index:1; display:flex; flex-wrap:wrap;}
.right_frame .select_filter button {margin-top:10px; margin-left:14px; padding:13px 56px 13px 22px; font-size:18px; background-color:#F8F8F8; border-radius:40px; position:relative;}
.right_frame .select_filter button:before, .right_frame .select_filter button:after {width:15px; border-top:1px solid #888; content:''; position:absolute; top:50%; right:23px; display:block;}
.right_frame .select_filter button:before {transform:rotate(45deg);}
.right_frame .select_filter button:after {transform:rotate(135deg);}
.right_frame .select_filter button.type_color {padding-top:8px; padding-bottom:8px;}
.right_frame .select_filter button.type_color em {width:24px; height:24px; border-radius:50%; display:block;}
.right_frame .select_filter button.type_color em.border {border:1px solid #ddd;}

.right_frame .select_filter button.reset {padding:16px 22px 16px 66px; font-size:14px; background-color:#fff; border:1px solid #ddd;}
.right_frame .select_filter button.reset:before {width:24px; height:24px; background:url('@/assets/images/pc/sub/icon_reset.png') 50% no-repeat; background-size:cover; border:0; right:auto; left:22px; transform:rotate(0) translateY(-50%);}
.right_frame .select_filter button.reset:after {display:none;}

::v-deep .goods_list > li {width:20%; flex:0 auto;}
</style>