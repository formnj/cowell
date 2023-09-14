<template>
    <header :class="{'brand_main' : $route.path.split('/')[2] == 'DP_01_01_01'}">
        {{ path }}
        <div class="ribbon_wrap">
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
        <div class="header_wrap">
            <div class="header_top">
                <h1>
                    <img :src="brandLogo" v-if="$route.path.split('/')[2] == 'DP_01_01_01'" />
                    <router-link :to="path" v-else>COWELL FASHION - PC</router-link>
                </h1>
                <ul class="quick_member">
                    <li><router-link :to="path+'pc/MB_01_01_01'">LOGIN</router-link></li>
                    <li><router-link :to="path+'pc/MB_08_01_01'">JOIN</router-link></li>
                    <li><router-link to="">INFO</router-link></li>
                    <li><router-link :to="path+'pc/MY_01_01_01'">MY</router-link></li>
                </ul>
            </div>
            <div class="header_btm">
                <GlobalMenu />
                <!-- 브랜드 메인 아닐 때 -->
                <ul class="quick_sites" v-if="$route.path.split('/')[2] != 'DP_01_01_01'">
                    <li><router-link :to="path+'pc/DP_06_01_01'"><img src="@/assets/images/pc/common/brand_fifa.png" alt="FIFA Official Licensed Product" /></router-link></li>
                    <li><router-link to=""><img src="@/assets/images/pc/common/brand_bbc.png" alt="BBC earth" /></router-link></li>
                </ul>
                <!-- //브랜드 메인 아닐 때 -->
                <!-- 브랜드 메인일 때 -->
                <ul class="quick_sites" v-if="$route.path.split('/')[2] == 'DP_01_01_01'">
                    <li><router-link to="/">COWELL FASHION</router-link></li>
                </ul>
                <!-- //브랜드 메인일 때 -->
                <ul class="quick_pages">
                    <!-- 23.03.28 검색팝업 노출 시 body 고정 -->
                    <li><a href="javascript:void(0);" @click="isSearchActive = true" class="search"></a></li>
                    <!-- //23.03.28 검색팝업 노출 시 body 고정 -->
                    <li>
                        <router-link to="/cowell/pc/OD_01_02_01" class="cart"></router-link>
                        <span class="count">99</span>
                    </li>
                    <li><a href="" class="recent" @click.prevent="openHistory"></a></li>
                </ul>
                <HistoryList />
            </div>
        </div>

        <!-- search pop -->
        <Search v-if="isSearchActive" @modalClose="isSearchActive = false" />
        <!-- //search pop -->
    </header>
</template>
  
<script>
import Inputs from '@/components/Inputs.vue';
import GlobalMenu from '@/layout/pc/GlobalMenu.vue';
import HistoryList from '@/layout/pc/HistoryList.vue';

import Search from "@/views/pc/DP/CW_PC_FO_DP_07_01_01";

import "@/assets/css/pc/common.css";
import "@/assets/css/pc/modal.css";

export default {
    components: {
        Inputs,
        GlobalMenu,
        HistoryList,

        Search,
    },
    data() {
        return {
            path: String,
            TopHeight: '',
            /* menu */
            post: [],
            /* menu brand image */
            gnb_brand_1: [
                {img: require("@/assets/images/pc/sample/visual01.png")},
                {img: require("@/assets/images/pc/sample/visual02.png")},
            ],
            gnb_brand_2: [
                {img: require("@/assets/images/pc/sample/sam_goods_list_01.jpg")},
                {img: require("@/assets/images/pc/sample/sam_goods_list_02.jpg")},
                {img: require("@/assets/images/pc/sample/sam_goods_list_03.jpg")},
                {img: require("@/assets/images/pc/sample/sam_goods_list_04.jpg")},
            ],
            /* //menu brand image */

            /* notice */
            notice: [
                '남들과는 다르게 스타일과 실용성을  갖춘 집업 맨투맨!!',
                '2022년 3월 카드사 무이자 할부',
                '코웰패션닷컴에서 고객님들께 알립니다.',
                '오늘은 저희가 쏩니다 왓데이 이벤트 당첨자 발표',
            ],

            headerHeight: Number,

            brandLogo: require('@/assets/images/pc/sample/brand_logo.png'),

            /* search */
            isSearchActive:false,

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
    mounted(){
        this.TopHeight = document.getElementsByClassName('header_top')[0].offsetHeight;
        
        window.addEventListener('scroll', this.onScroll);

        /* 23.03.28 검색팝업 노출 시 body 고정 */
        document.querySelector('.quick_pages .search').addEventListener('click', function(){
            document.getElementsByTagName('body')[0].classList.add('fixed');
        });
        /* //23.03.28 검색팝업 노출 시 body 고정 */

        if(window.location.hostname == 'formnj.github.io'){
            this.path = '/cowell/';
        } else {
            this.path = '/';
        }

        console.log('testes'+this.path);
    },
    methods: {
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
        openHistory () {
            document.getElementById('history').classList.add('active')
        },

        onScroll () {

            var Ribbon = document.getElementsByClassName('ribbon'),
                TopMenu = this.TopHeight,
                BottomMenu = document.getElementsByClassName('header_btm'),
                Container = document.getElementById('container');

                console.log(Container);

            if(Container != null){

                let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
                
                if(Ribbon.length > 0){
                    if(currentScrollPosition > (Ribbon[0].offsetHeight + BottomMenu[0].offsetTop)){
                        Container.style.marginTop = (Ribbon[0].offsetHeight + TopMenu + BottomMenu[0].offsetHeight)+'px';
                        document.querySelector('header').classList.add('fixed');
                    } else {
                        document.querySelector('header').classList.remove('fixed');
                        Container.style.removeProperty('margin-top');
                    }
                } else {
                    if(currentScrollPosition > BottomMenu[0].offsetTop){
                        Container.style.marginTop = (TopMenu + BottomMenu[0].offsetHeight)+'px';
                        document.querySelector('header').classList.add('fixed');
                    } else {
                        document.querySelector('header').classList.remove('fixed');
                        Container.style.removeProperty('margin-top');
                    }
                }
            }
        },
    },
}
</script>

<style scoped>
</style>