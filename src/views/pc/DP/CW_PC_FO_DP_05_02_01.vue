<template>
    <div>
        <div class="cate_wrap content">
            <!-- left -->
            <div class="left_frame">
                <!-- 카테고리 영역 -->
                <strong class="tit">대카테고리<Inputs input_type="checkbox" class="check wish" checked="checked" /></strong>
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
                <!-- //카테고리 영역 -->
    
                <!-- 필터 영역 -->
                <div class="filter_wrap">
                    <strong class="tit">필터</strong>
                    <dl>
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
    import SelectBox from "@/components/SelectBox.vue";
    import GoodsList from "@/components/GoodsList.vue";
    import Inputs from '@/components/Inputs.vue';

    export default {
        name: 'App',
        components: {
            SelectBox,
            GoodsList,
            Inputs,
        },
        data() {
            return {
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
                        Sidx:1,
                        main:[
                            {item:'전체'},
                            {item:'아우터'},
                            {
                                item:'상의',
                                sub: [
                                    {item:'상의-드로즈'},
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                    ],
                                },
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                    ],
                                },
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
                                options: {
                                    title:'SIZE',
                                    item:[
                                        {txt: "80" },
                                        {txt: "85" },
                                        {txt: "90" },
                                        {txt: "95" },
                                        {txt: "100" },
                                    ],
                                },
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

                mainOptions:{
                    loop:true,
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
                    loopAdditionalSlides:0,
                    watchSlidesProgress: true,
                    on: {
                        init: function(){
                            var slide_len;
                            this.autoplay.stop();
                        },
                        slideChange: function () {
                        },
                        slideChangeTransitionEnd: function(){
                            let swiper = this,
                            titles = swiper.el.querySelectorAll('strong'),
                            captions = swiper.el.querySelectorAll('p');
                        },
                        progress: function(){
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                let slideProgress = swiper.slides[i].progress,
                                innerOffset = swiper.width * 0.5,
                                innerTranslate = slideProgress * innerOffset;
                                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                                "translateX(" + innerTranslate + "px)";
                            }
                        },
                        touchStart: function() {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = "";
                            }
                        },
                        setTransition: function(speed) {
                            let swiper = this;
                            for (let i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = speed + "ms";
                                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                                speed + "ms";
                            }
                        }
                    }
                },
                Main_slide_item: [
                    {img: require("@/assets/images/pc/sample/sam_video.mp4"), type:'video', brand: "pc-Ourplace", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                    {img: require("@/assets/images/pc/sample/sam_visual02.png"), type:'img', brand: "Canada Goose", tit: "Keep Me Warm", txt: "칼바람 부는 겨울,\n 추위로부터 지켜줄 따뜻한 윈터아이템" },
                    {img: require("@/assets/images/pc/sample/sam_visual03.jpg"), type:'img', brand: "Kappa", tit: "Best Sweatshirt", txt: "남들과는 다르게\n 스타일과 실용성을  갖춘 집업 맨투맨!!" },
                ],
            }
        },
        methods: {
            onToggleCheckCategory (event) {
                event.currentTarget.nextSibling.classList.toggle('active')
            },
        }
    }
</script>

<style scoped>
.cate_wrap {position:relative; display:flex;}
.cate_wrap .tit_wrap .option_wrap {display:flex; align-items:center;}
.cate_wrap .tit_wrap::v-deep select {min-width:172px; height:52px;}
.cate_wrap.fixed {padding-top:100px; padding-left:235px;}
.cate_wrap.fixed .left_frame {margin-left:-800px; position:fixed; top:100px; left:50%;}
.left_frame {width:235px;}
.left_frame .tit {margin-bottom:20px; font-size:30px; line-height:36px; display:block;}
.left_frame .tit .check.wish{margin:-2px 0 0 15px;}
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
.left_frame .filter_wrap {margin-top:20px; padding-top:40px; border-top:1px solid #eee;}
/* 23.05.10 수정 */
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

.main_visual {transition:background-image 0.2s;}
.main_visual .swiper-slide a {display:block;}
.main_visual .swiper-slide .thumb {padding-top:35%; position:relative;}
.main_visual .swiper-slide .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.main_visual .swiper-slide .thumb em * {width:100%; height:100%; object-fit:cover;}
.main_visual .swiper-slide .cont {width:750px; padding:0 100px 0 150px; color:#fff; background-color:rgba(34,34,34,0.5); overflow:hidden; position:absolute; top:50%; bottom:50%; display:flex; align-items:center; transition:0.35s all 0.5s ease-in-out;}
.main_visual .swiper-slide-active .cont {top:0; bottom:0;}
.main_visual .swiper-slide .cont_inner {opacity:0; transition:0.35s opacity 1.5s;}
.main_visual .swiper-slide-active .cont_inner {opacity:1;}
.main_visual .swiper-slide .cont span, .main_visual .swiper-slide .cont strong{display: block;}
.main_visual .swiper-slide .cont span{margin-bottom:16px; font-size:30px; font-weight:500;}
.main_visual .swiper-slide .cont strong{font-size:60px;}
.main_visual .swiper-slide .cont p{margin-top:30px; font-size:24px; line-height:36px;}

.main_visual::v-deep .swiper-pagination {width:auto; padding:8px 20px; color:rgba(255,255,255,0.7); font-size:20px; font-weight:500; background-color:#000; border-radius:60px; position:absolute; bottom:267px; left:150px; z-index:1;}
.main_visual::v-deep .swiper-pagination span:last-child {color:#fff;}
</style>
