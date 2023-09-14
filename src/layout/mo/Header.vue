<template>
    <header
        ref="header"
        v-show="$route.path.split('/')[3] == null || $route.path.split('/')[3] == '' || $route.path.split('/')[3] == 'DP_01_01_01'"
        :class="[ pathClass, scrollClass ]"
    >
        <div class="header_wrap" ref="headerTop">
            <h1><router-link to="/cowell/mo/">COWELL FASHION - MO</router-link></h1>
            <!-- search -->
            <div class="search_wrap">
                <button class="btn_search" @click.prevent="openSearchModal">검색</button>
            </div>
            <!-- //search -->
            <ul class="quick">
                <li class="cart">
                    <router-link to="/cowell/mo/OD_01_02_01">장바구니</router-link>
                    <span class="count">99</span>
                </li>
            </ul>
        </div>
        <!-- menu -->
        <a href="#none" class="gnb_brand">Brand</a>
        <nav>
            <ul style="transform:translate(0,0);">
                <li class="current"><!-- 활성화 메뉴에 current 클래스 추가 -->
                    <router-link to="#none">BEST</router-link>
                </li>
                <li>
                    <router-link to="#none">UNDERWEAR</router-link>
                    <div class="depth_2">

                        <!-- brand swiper -->
                        <div class="gnb_swiper_wrap">
                            <ul class="swiper-wrapper"><li class="swiper-slide" v-for="(item, index) in gnb_brand_1" :key="index">
                                <span class="thumb">
                                    <em><img :src="item.img" /></em>
                                </span>
                            </li></ul>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                        <!-- //brand swiper -->

                        <div class="menu_wrap">
                            <dl>
                                <dt><a href="#none">남성</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">드로즈</a></li>
                                        <li><a href="#none">트렁크</a></li>
                                        <li><a href="#none">세트</a></li>
                                        <li><a href="#none">런닝/티</a></li>
                                        <li><a href="#none">베이스레이어</a></li>
                                        <li><a href="#none">히트웨어</a></li>
                                        <li><a href="#none">홈웨어</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">여성</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">브라</a></li>
                                        <li><a href="#none">팬티</a></li>
                                        <li><a href="#none">세트</a></li>
                                        <li><a href="#none">브라탑</a></li>
                                        <li><a href="#none">레깅스</a></li>
                                        <li><a href="#none">베이스레이어</a></li>
                                        <li><a href="#none">히트웨어</a></li>
                                        <li><a href="#none">홈웨어</a></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link to="#none">MEN</router-link>
                    <div class="depth_2">

                        <!-- brand swiper -->
                        <div class="gnb_swiper_wrap">
                            <ul class="swiper-wrapper"><li class="swiper-slide" v-for="(item, index) in gnb_brand_2" :key="index">
                                <span class="thumb">
                                    <em><img :src="item.img" /></em>
                                </span>
                            </li></ul>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                        <!-- //brand swiper -->

                        <div class="menu_wrap">
                            <dl>
                                <dt><a href="#none">아우터</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">자켓</a></li>
                                        <li><a href="#none">점퍼</a></li>
                                        <li><a href="#none">코트</a></li>
                                        <li><a href="#none">패딩</a></li>
                                        <li><a href="#none">베스트</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">상의</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">긴팔 티셔츠</a></li>
                                        <li><a href="#none">반팔 티셔츠</a></li>
                                        <li><a href="#none">맨투맨</a></li>
                                        <li><a href="#none">후드</a></li>
                                        <li><a href="#none">셔츠</a></li>
                                        <li><a href="#none">니트</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">하의</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">긴바지</a></li>
                                        <li><a href="#none">스웻팬츠</a></li>
                                        <li><a href="#none">데님</a></li>
                                        <li><a href="#none">반바지</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">세트웨어</a></dt>
                            </dl>
                            <dl>
                                <dt><a href="#none">패션잡화</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">스니커즈</a></li>
                                        <li><a href="#none">방한화</a></li>
                                        <li><a href="#none">골프화</a></li>
                                        <li><a href="#none">ETC</a></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link to="#none">WOMEN</router-link>
                    <div class="depth_2">
                        <div class="menu_wrap">
                            <dl>
                                <dt><a href="#none">아우터</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">자켓</a></li>
                                        <li><a href="#none">점퍼</a></li>
                                        <li><a href="#none">코트</a></li>
                                        <li><a href="#none">패딩</a></li>
                                        <li><a href="#none">베스트</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">상의</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">긴팔 티셔츠</a></li>
                                        <li><a href="#none">반팔 티셔츠</a></li>
                                        <li><a href="#none">맨투맨</a></li>
                                        <li><a href="#none">후드</a></li>
                                        <li><a href="#none">셔츠</a></li>
                                        <li><a href="#none">니트</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">하의</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">긴바지</a></li>
                                        <li><a href="#none">스웻팬츠</a></li>
                                        <li><a href="#none">데님</a></li>
                                        <li><a href="#none">반바지</a></li>
                                        <li><a href="#none">스커트</a></li>
                                        <li><a href="#none">레깅스</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">세트웨어</a></dt>
                            </dl>
                            <dl>
                                <dt><a href="#none">패션잡화</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">스니커즈</a></li>
                                        <li><a href="#none">방한화</a></li>
                                        <li><a href="#none">골프화</a></li>
                                        <li><a href="#none">ETC</a></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link to="#none">KIDS</router-link>
                    <div class="depth_2">
                        <div class="menu_wrap">
                            <dl>
                                <dt><a href="#none">아우터</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">자켓</a></li>
                                        <li><a href="#none">점퍼</a></li>
                                        <li><a href="#none">코트</a></li>
                                        <li><a href="#none">패딩</a></li>
                                        <li><a href="#none">베스트</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">상의</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">긴팔 티셔츠</a></li>
                                        <li><a href="#none">반팔 티셔츠</a></li>
                                        <li><a href="#none">맨투맨</a></li>
                                        <li><a href="#none">후드</a></li>
                                        <li><a href="#none">셔츠</a></li>
                                        <li><a href="#none">니트</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">하의</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">긴바지</a></li>
                                        <li><a href="#none">스웻팬츠</a></li>
                                        <li><a href="#none">데님</a></li>
                                        <li><a href="#none">반바지</a></li>
                                        <li><a href="#none">스커트</a></li>
                                        <li><a href="#none">레깅스</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">세트웨어</a></dt>
                            </dl>
                            <dl>
                                <dt><a href="#none">언더웨어</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">팬티</a></li>
                                        <li><a href="#none">히트웨어</a></li>
                                        <li><a href="#none">홈웨어</a></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link to="#none">OUTLET</router-link>
                    <div class="depth_2">
                        <div class="menu_wrap">
                            <dl>
                                <dt><a href="#none">MEN</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">아우터</a></li>
                                        <li><a href="#none">상의</a></li>
                                        <li><a href="#none">하의</a></li>
                                        <li><a href="#none">세트웨어</a></li>
                                        <li><a href="#none">패션잡화</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">WOMEN</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">아우터</a></li>
                                        <li><a href="#none">상의</a></li>
                                        <li><a href="#none">하의</a></li>
                                        <li><a href="#none">세트웨어</a></li>
                                        <li><a href="#none">패션잡화</a></li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#none">KIDS</a></dt>
                                <dd>
                                    <ul>
                                        <li><a href="#none">아우터</a></li>
                                        <li><a href="#none">상의</a></li>
                                        <li><a href="#none">하의</a></li>
                                        <li><a href="#none">세트웨어</a></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link to="#none">브랜드</router-link>
                </li>
                <li>
                    <router-link to="#none">기획전</router-link>
                </li>
                <li>
                    <router-link to="#none">이벤트</router-link>
                </li>
            </ul>
        </nav>
        <!-- //menu -->

        <!-- banner -->
        <div class="ribbon_wrap active"><!-- 활성화 시 active 클래스 추가 -->
            <div class="ribbon">
                <!-- 23.03.21 스와이퍼로 수정 -->
                <div class="notice">
                    <swiper :options="ribbonOptions">
                        <swiper-slide v-for="(item, index) in notice" v-bind:key="index">
                            <a href="#none">{{ item }}</a>
                        </swiper-slide>

                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <!-- //23.03.21 스와이퍼로 수정 -->
                <button type="button" class="close_ribbon">공지사항 닫기</button>
            </div>
        </div>
        <!-- //banner -->
    </header>
</template>
  
<script>
import "@/assets/css/mo/common.css";
import "@/assets/css/mo/swiper.css";
import "@/assets/css/mo/modal.css";

export default {
    data() {
        return {
            /* menu brand image */
            gnb_brand_1: [
                {img: require("@/assets/images/mo/sample/visual01.png")},
                {img: require("@/assets/images/mo/sample/visual02.png")},
            ],
            gnb_brand_2: [
                {img: require("@/assets/images/mo/sample/sam_goods_list_01.jpg")},
                {img: require("@/assets/images/mo/sample/sam_goods_list_02.jpg")},
                {img: require("@/assets/images/mo/sample/sam_goods_list_03.jpg")},
                {img: require("@/assets/images/mo/sample/sam_goods_list_04.jpg")},
            ],
            /* //menu brand image */

            /* notice */
            notice: [
                '남들과는 다르게 스타일과 실용성을  갖춘 집업 맨투맨!!',
                '2022년 3월 카드사 무이자 할부',
                '코웰패션닷컴에서 고객님들께 알립니다.',
                '오늘은 저희가 쏩니다 왓데이 이벤트 당첨자 발표',
            ],
            
            pathClass: '',
            scrollClass: '',
            headerHeight: Number,
            headerTopHeight: Number,
            lastScrollY: 0,

            ribbonOptions:{
                loop:true,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                autoplay: {
                    delay: 5000,
                },
                // direction: 'vertical',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        }
    },
    watch: {
        $route() {
            this.pathFinder(this.$route.path);
            this.headerInit();
        },
    },
    created() {
        this.pathFinder(this.$route.path)
        window.addEventListener('scroll', this.onScroll)
    },
    beforeMount () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    mounted(){
        this.headerHeight = this.$refs.header.clientHeight
        this.headerTopHeight = this.$refs.headerTop.clientHeight
        window.addEventListener('scroll', this.onScroll)

        window.addEventListener('load', this.headerInit)
    },
    methods: {
        pathFinder(pathName) {
            console.log(pathName);
            if (pathName === '/cowell/mo/') {
                this.pathClass = 'main'
                this.scrollClass = ''
            } else if (pathName === '/cowell/mo/DP_01_01_01') {
                this.pathClass = 'brand'
                this.scrollClass = 'fixed theme_transparent'
            } else {
                this.pathClass = 'others'
            }
        },
        headerInit () {
            var Ribbon = document.getElementsByClassName('ribbon_wrap');
            if(this.pathClass == 'brand' && Ribbon.length > 0){
                this.$refs.header.style.paddingTop = Ribbon[0].offsetHeight+'px';
            } else {
                this.$refs.header.style.removeProperty('padding-top');
            }
        },
        onScroll () {
            let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            
            let classStatusFix,
                classStatusFixDn,
                classStatusFixDn2,
                classStatusFixUp,
                classStatusFixUp2,
                fixStartPosition,
                containerPaddingTop,
                changeThemePosition
                
            if (this.pathClass.includes('main')) { // 메인
                classStatusFix = 'fixed'
                classStatusFixDn = 'fixed down'
                classStatusFixDn2 = 'fixed down'
                classStatusFixUp = ''
                classStatusFixUp2 = 'fixed'
                fixStartPosition = this.headerTopHeight
                containerPaddingTop = this.headerHeight
                changeThemePosition = this.headerTopHeight
            } else if (this.pathClass.includes('brand')) { // 브랜드메인
                classStatusFix = 'fixed theme_transparent'
                classStatusFixDn = 'fixed down theme_transparent'
                classStatusFixDn2 = 'fixed down'
                classStatusFixUp = 'fixed theme_transparent'
                classStatusFixUp2 = 'fixed'
                fixStartPosition = this.headerTopHeight
                containerPaddingTop = 0
                changeThemePosition = document.getElementsByClassName('main_visual')[0].clientHeight
            }

            if (window.scrollY < this.lastScrollY && currentScrollPosition > this.headerTopHeight) {
                if(currentScrollPosition > changeThemePosition) {
                    this.scrollClass = classStatusFixUp2
                } else {
                    this.scrollClass = classStatusFixUp
                }
            } else {
                if (currentScrollPosition > fixStartPosition) {
                    if(currentScrollPosition > changeThemePosition) {
                        this.scrollClass = classStatusFixDn2
                    } else {
                        this.scrollClass = classStatusFixDn
                    }
                    document.getElementById('container').style.paddingTop = containerPaddingTop + 'px'
                } else {
                    this.scrollClass = classStatusFixUp
                    document.getElementById('container').style.paddingTop = '0px'
                }
            }

            this.lastScrollY = window.scrollY
        },

        /* search */
        openSearchModal () {
            document.getElementsByClassName('searchModal')[0].classList.add('active')
        },
    }
}
</script>

<style scoped>
header {height:auto; background-color:#fff;}
header.fixed,
header.brand {position:fixed; top:0; right:0; left:0; z-index:10; transition:background-color 0.15s;}
header.down .header_wrap {display:none;}

header .header_wrap {padding:13px 0; text-align:center; display:block;}
header h1 {margin:0 auto; font-size:16px; line-height:24px;}

header .quick {position:absolute; top:13px; right:20px;}
header .quick li {padding:0; display:none;}
header .quick li.cart {display:block;}
header .quick li.cart a {width:24px; height:24px; font-size:0; background:url('@/assets/images/mo/common/icon_cart.png') 50% 0 no-repeat; background-size:cover; display:block;}

header .gnb_brand {display:none;}

header .search_wrap {border-bottom:0; position:absolute; top:13px; left:20px;}
header .label_wrap {display:none;}
header .btn_search {width:24px; height:24px; font-size:0; background:url('@/assets/images/mo/common/icon_search.png') 50% 0 no-repeat; background-size:cover;}

header nav {padding:0 10px; overflow:auto;}
header nav > ul {width:auto; margin-right:-10px; padding-right:10px; display:table;}
header nav > ul > li {float:none; display:table-cell;}
header nav > ul > li > a {padding:15px 10px !important; color:#999; font-weight:600; line-height:20px;}
header nav > ul > li.current > a {color:#222;}

/* 투명헤더 */
header.theme_transparent {background-color:transparent;}
header.theme_transparent a {color:#fff;}
header.theme_transparent li.current > a {color:#fff;}
header.theme_transparent .btn_search {background-position:50% 100%;}
header.theme_transparent .quick li.cart a {background-position:50% 100%;}
</style>
