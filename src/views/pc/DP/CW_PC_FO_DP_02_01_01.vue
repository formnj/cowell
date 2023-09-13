<template>
    <div class="cate_wrap content">
        <!-- left -->
        <div class="left_frame">
            <!-- 카테고리 영역 -->
            <strong class="tit">베스트</strong>
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
                    <button type="button" class="button_sort_count" @click.prevent="openModal('modalSkin'), modalTitle='베스트 집계 기준', modalContent='bestInfo'">베스트 상품 집계 기준</button>
                    <SelectBox :isChange="true" :options="options"/>
                </div>
            </div>

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

        <ModalSkin :modalTitle="modalTitle" :class="{'wide':modalContent == 'Cart'}">
            <div class="list_bullet" v-if="modalContent == 'bestInfo'">
                <ul>
                    <li>1일 : 전일 판매 수량 기준</li>
                    <li>일주일 : 최근 7일간의 판매수량 기준</li>
                    <li>한달 : 최근 30일간의 판매수량 기준</li>
                    <li>당일 오전 1시기준 집계 및 업데이트가 됩니다.</li>
                </ul>
            </div>
            <!-- 장바구니 모달 -->
            <div class="modalCart" v-if="modalContent == 'Cart'">
                <div class="left">
                    <swiper class="main_slide" :options="swiperOptionMainSlideItem">
                        <swiper-slide v-for="(item, index) in goods_item[0].item" :key="index">
                            <span class="thumb">
                                <em><img :src="item.img" alt="" class="image"></em>
                            </span>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                    <div class="section_group bd">
                        <!-- 23.03.22 혜택 수정 -->
                        <div class="benefit">
                            <strong>혜택</strong>
                            <ul>
                                <li><button @click.prevent="openModal('modalSkin'), modalTitle='1월 카드사 무이자 할부 안내', modalContent='installment', modalClass=''">1월 카드사 무이자 할부 안내</button></li>
                                <li><button @click.prevent="openModal('modalSkin'), modalTitle='카드사별 혜택안내', modalContent='installment', modalClass=''">카드사별 혜택안내</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="main_info">
                        <div class="text">
                            <div class="category">
                                <span class="brand">Fifa OLP</span>
                                <span class="model">FF2NSN01U_160</span>
                            </div>
                            <div class="title">
                                <strong>킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 </strong>
                                <Inputs input_type="checkbox" class="check wish" />
                            </div>
                        </div>
                        <div class="badges">
                            <span>쿠폰</span>
                            <span>BEST</span>
                            <span class="new">NEW</span>
                            <span class="soldout">SOLD OUT</span>
                            <span>단독</span>
                        </div>
                        <div class="section_group">
                            <div class="section">
                                <h4>
                                    <strong class="title">배송비</strong>
                                    <p class="paragraph mr_auto">무료 배송 (30,000원 이상 무료) 제주, 도서 지역 추가 30,000원</p>
                                </h4>
                            </div>
                        </div>
                        <button type="button" class="button_share" @click.prevent="openModal('modalSkin'), modalTitle='공유하기', modalContent='ModalShare', modalClass=''">공유하기</button>
                    </div>
                    <div class="section_group">
                        <div class="section pt20">
                            <h4>
                                <strong class="title">색상옵션 : 블랙</strong>
                            </h4>
                            <div class="image_slide slide_off">
                                <ul>
                                    <li v-for="(item, index) in colorOptionItem" :key="index" :class="{'disabled': item.quantity == 0}"><!-- 23.03.23 재고 없을 경우 처리 위한 클래스 'disabled' 추가 -->
                                        <button type="button" :class="item.active ? 'active' : ''">
                                            <img :src="item.img" alt="">
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="section">
                            <h4>
                                <strong class="title">사이즈</strong>
                                <button type="button" class="modal" @click.prevent="openModal('modalSkin'), modalTitle='사이즈 가이드', modalContent='ModalSizeGuide', modalClass=''">사이즈 가이드</button>
                            </h4>
                            <div class="select_size">
                                <button type="button">250</button>
                                <button type="button" class="active">255</button>
                                <button type="button">260</button>
                                <button type="button" class="disabled">270</button><!-- 23.03.23 재고 없을 경우 처리 위한 클래스 'disabled' 추가 -->
                                <button type="button">275</button>
                                <button type="button">280</button>
                                <button type="button">285</button>
                                <button type="button">290</button>
                                <button type="button">300</button>
                                <button type="button">305</button>
                                <button type="button">310</button>
                                <button type="button">305</button>
                                <button type="button">310</button>
                            </div>
                        </div>
                    </div>
                    <div class="count_price_box">
                        <div class="order_count">
                            <button type="button" class="button_decrese" @click.prevent="orderCount > orderMin ? orderCount-- : orderCount"></button>
                            <input type="text" readonly="readonly" v-model="orderCount">
                            <button type="button" class="button_increse" @click.prevent="orderCount < orderMax ? orderCount++ : orderCount"></button>
                        </div>
                        <div class="price">
                            <span>총금액</span>
                            <strong>999,999,999</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btnSection" v-if="modalContent == 'Cart'">
                <a href="#none" class="btn_big btn_default2"><em>장바구니</em></a>
            </div>
            <!-- //장바구니 모달 -->

            <InstallmentInfo v-if="modalContent === 'installment'" />
        </ModalSkin>
    </div>
</template>

<script>
    import SelectBox from "@/components/SelectBox.vue";
    import GoodsList from "@/components/GoodsList.vue";
    import Inputs from '@/components/Inputs.vue';
    import ModalSkin from '@/components/ModalSkin';

    import InstallmentInfo from "@/views/pc/OD/CW_PC_FO_OD_01_02_03"; //카드사별 혜택안내

    export default {
        name: 'App',
        components: {
            SelectBox,
            GoodsList,
            Inputs,
            ModalSkin,
            InstallmentInfo,
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
                swiperOptionMainSlideItem: { 
                    spaceBetween: 0,
                    loop: true,
                    pagination: { 
                        el: '.main_slide .swiper-pagination',
                        type: 'fraction'
                    },
                },
                colorOptionItem: [
                    {img: require("@/assets/images/mo/sample/sam_special03_01.png"), active: true},
                    {img: require("@/assets/images/mo/sample/sam_special03_02.png"), active: false, quantity: 0},
                    {img: require("@/assets/images/mo/sample/sam_special03_03.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_04.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                    {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                ],
                orderCount: 1,
                orderMin: 1,
                orderMax: 10,
                /* //goods */

                modalTitle: "",
                modalContent: "",
            }
        },
        mounted(){
            /* 장바구니 모달 노출 */
            const cartBtn = document.querySelectorAll('.btn_cart');

            cartBtn.forEach((t) => {
                t.addEventListener('click', () => {
                    this.openModal('modalSkin');
                    this.modalTitle = '장바구니 담기'
                    this.modalContent = 'Cart'
                });
            });
            /* //장바구니 모달 노출 */
        },
        methods: {
            onToggleCheckCategory (event) {
                event.currentTarget.nextSibling.classList.toggle('active')
            },

            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },
        }
    }
</script>

<style scoped>
.cate_wrap {position:relative; display:flex;}
.cate_wrap .tit_wrap .option_wrap {display:flex; align-items:center;}
.cate_wrap .tit_wrap::v-deep select {min-width:172px; height:52px;}
.cate_wrap .tit_wrap .button_sort_count{margin-right:20px;font-size:12px;color:#999;}
.cate_wrap .tit_wrap .button_sort_count:before{content:"";display:inline-block;width:18px;height:18px;margin:-2px 4px 0 0;vertical-align:middle;background:url("@/assets/images/pc/common/icon_exclamation_lightgray.png") 50% 50% / cover no-repeat;}
.cate_wrap.fixed {padding-top:100px; padding-left:235px;}
.cate_wrap.fixed .left_frame {margin-left:-800px; position:fixed; top:100px; left:50%;}
.left_frame {width:235px;}
.left_frame .tit {padding-bottom:14px; margin-bottom:20px; font-size:30px; line-height:36px; display:block; border-bottom: 2px solid #222;}
.left_frame .check_type li + li {margin-top:15px;}
.left_frame .cate_list {padding-bottom:20px;border-bottom:1px solid #eee;}
.left_frame .cate_list dl + dl {margin-top:20px;}
.left_frame .cate_list dt {color:#000; font-size:30px; font-weight:700; line-height:36px; cursor:pointer;}
.left_frame .cate_list dd {color:#000; line-height:20px; display:none;}
.left_frame .cate_list dd.active {display:block;}
.left_frame .cate_list dd ul {padding:20px 0;}
/* 23.05.10 추가 */
.left_frame .cate_list dd ul ul {margin-top:0; display:none;}
.left_frame .cate_list dd ul ul.active {display:block;}
/* 23.05.10 추가 */
.left_frame .cate_list dd li + li {margin-top:15px;}
.left_frame .cate_list dd a {display:block; font-size:16px; color: #666;}
.left_frame .cate_list dd li.active a{color:#222;}
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

.modalCart {display:flex;}
.modalCart .left {width:380px;}
.modalCart .left .thumb {padding-top:131.3%;}
.modalCart .left .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}
.modalCart .left .benefit {padding:14px 0;}

.modalCart .right {margin-left:26px;}
.modalCart .right .main_info .text .category {padding-bottom:10px;}
.modalCart .right .main_info .text .category .brand, .modalCart .right .main_info .text .category .model {font-size:12px;}
.modalCart .right .main_info .text .category .brand {padding-bottom:4px;}
.modalCart .right .main_info .text .title strong {font-size:16px; line-height:1.25em;}
.modalCart .right .main_info .badges {padding-bottom:15px;}

.modalCart .right .section_group .section {padding:0;}
.modalCart .right .section_group .section h4 .title {font-size:12px;}
.modalCart .right .section_group .section h4 .title + p {margin-left:6px;}
.modalCart .right .section_group .section h4 .paragraph {font-size:12px;}
.modalCart .right .section_group .section .image_slide {padding-top:10px;}
.modalCart .right .section_group .section .image_slide.slide_off ul {margin-top:-11px; margin-left:-11px;}
.modalCart .right .image_slide ul li {width:16.66666%; margin-top:11px !important; padding-left:11px;}
.modalCart .right .image_slide ul li button img {width:52px; height:70px;}
.modalCart .right .select_size {padding-top:0;}
.modalCart .right .select_size button {width:54px; height:28px;}
.modalCart .right .section_group .section h4 .modal {font-size:10px;}
.modalCart .right .count_price_box {margin-top:30px;}
.modalCart .right .count_price_box .price > strong {font-size:24px;}
</style>
