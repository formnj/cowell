<template>
    <div class="gnb_wrap">
        <div class="gnb">
            <ul>
                <li v-for="(item, index) in globalMenu" :key="index" @mouseover.prevent="onHover" @mouseleave.prevent="offHover">
                    <a href="">{{ item.title }}</a>
                    <ul>
                        <li><a href="">전체</a></li>
                        <li v-for="(item, index) in item.child" :key="index">
                            <a href="">{{ item.title }}</a>
                            <ul>
                                <li v-for="(item, index) in item.child" :key="index">
                                    <a href="">{{ item.title }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="gnb_swiper">
                        <swiper class="swiper" :options="swiperOptionGnb">
                            <swiper-slide v-for="(item, index) in globalMenuSwiper[index].products" :key="index">
                                <a :href="item.href" class="link">
                                    <img :src="item.src" alt="" class="image">
                                </a>
                            </swiper-slide>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </li>
            </ul>
        </div>
        <div class="gnb more">
            <ul>
                <!-- <li><a href="">기획전</a></li> 23.04.21 제거 -->
                <li><a href="">이벤트</a></li>
            </ul>
        </div>
        <ul class="gnb_brand">
            <li>
                <a href="" class="brand_collection_opener">브랜드</a>
                <div class="brand_collection" ref="brandCollection">
                    <div class="list_official">
                        <div class="wish_item">
                            <span class="image">
                                <img src="@/assets/images/pc/common/brand_logo_01.png" alt="" />
                            </span>
                            <span class="wish_label">
                                <input type="checkbox" class="input" id="special01">
                                <label for="special01" class="label"></label>
                                <a href="" class="link pl0">COWELL FASHION</a>
                            </span>
                        </div>
                        <div class="wish_item">
                            <span class="image">
                                <img src="@/assets/images/pc/common/brand_logo_02.png" alt="" />
                            </span>
                            <span class="wish_label">
                                <input type="checkbox" class="input" id="special01">
                                <label for="special01" class="label"></label>
                                <a href="" class="link pl0">FIFA 1904</a>
                            </span>
                        </div>
                        <div class="wish_item">
                            <span class="image">
                                <img src="@/assets/images/pc/common/brand_logo_03.png" alt="" />
                            </span>
                            <span class="wish_label">
                                <input type="checkbox" class="input" id="special02">
                                <label for="special02" class="label"></label>
                                <a href="" class="link pl0">BBC earth</a>
                            </span>
                        </div>
                    </div>
                    <div class="list_total">
                        <template v-for="(item, index) in wishBrands">
                            <div class="wish_item" :class="item.new ? 'new' : ''" v-if="item.checked" :key="index">
                                <span class="wish_label">
                                    <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                    <label :for="'wishBrand' + index " class="label"></label>
                                    <a href="" class="link pl0">{{ item.title }}</a>
                                </span>
                            </div>
                        </template>
                        <template v-for="(item, index) in wishBrands">
                            <div class="wish_item" :class="item.new ? 'new' : ''" v-if="!item.checked" :key="index">
                                <span class="wish_label">
                                    <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                    <label :for="'wishBrand' + index " class="label"></label>
                                    <a href="" class="link pl0">{{ item.title }}</a>
                                </span>
                            </div>
                        </template>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Inputs from "@/components/Inputs.vue"

export default {
    data () {
        return {
            // Global Menu
            globalMenu: [
                // BEST
                {
                    title: '베스트',
                    child: [
                        {
                            title: 'UNDERWEAR',
                            child: [
                                { title: '남성' },
                                { title: '여성' },
                            ]
                        },
                        {
                            title: 'MEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '잡화' },
                                { title: '세트' },
                            ]
                        },
                        {
                            title: 'WOMEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '잡화' },
                                { title: '세트' },
                            ]
                        },
                        {
                            title: 'KIDS',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트' },
                                { title: '언더웨어' },
                            ]
                        },
                        {
                            title: 'OUTLET',
                            child: [
                                { title: '남성' },
                                { title: '여성' },
                                { title: '키즈' },
                            ]
                        },
                    ]
                },
                // UNDERWEAR
                {
                    title: '언더웨어',
                    child: [
                        {
                            title: '남성',
                            child: [
                                { title: '드로즈' },
                                { title: '트렁크' },
                                { title: '세트' },
                                { title: '런닝/티' },
                                { title: '베이스레이어' },
                                { title: '히트웨어' },
                                { title: '홈웨어' },
                            ]
                        },
                        {
                            title: '여성',
                            child: [
                                { title: '브라' },
                                { title: '팬티' },
                                { title: '세트' },
                                { title: '브라탑' },
                                { title: '레깅스' },
                                { title: '베이스레이어' },
                                { title: '히트웨어' },
                                { title: '홈웨어' },
                            ]
                        },
                    ]
                },
                // MEN
                {
                    title: '남성',
                    child: [
                        {
                            title: '아우터',
                            child: [
                                { title: '자켓' },
                                { title: '점퍼' },
                                { title: '코트' },
                                { title: '패딩' },
                                { title: '베스트' },
                            ]
                        },
                        {
                            title: '상의',
                            child: [
                                { title: '긴팔 티셔츠' },
                                { title: '반팔 티셔츠' },
                                { title: '맨투맨' },
                                { title: '후드' },
                                { title: '셔츠' },
                                { title: '니트' },
                            ]
                        },
                        {
                            title: '하의',
                            child: [
                                { title: '긴바지' },
                                { title: '스웻팬츠' },
                                { title: '데님' },
                                { title: '반바지' },
                            ]
                        },
                        {
                            title: '세트웨어',
                            child: [
                                { title: '전상품' },
                            ]
                        },
                        {
                            title: '패션잡화',
                            child: [
                                { title: '스니커즈' },
                                { title: '방한화' },
                                { title: '골프화' },
                                { title: 'ETC' },
                            ]
                        },
                    ]
                },
                // WOMEN
                {
                    title: '여성',
                    child: [
                        {
                            title: '아우터',
                            child: [
                                { title: '자켓' },
                                { title: '점퍼' },
                                { title: '코트' },
                                { title: '패딩' },
                                { title: '베스트' },
                            ]
                        },
                        {
                            title: '상의',
                            child: [
                                { title: '긴팔 티셔츠' },
                                { title: '반팔 티셔츠' },
                                { title: '맨투맨' },
                                { title: '후드' },
                                { title: '셔츠' },
                                { title: '니트' },
                            ]
                        },
                        {
                            title: '하의',
                            child: [
                                { title: '긴바지' },
                                { title: '스웻팬츠' },
                                { title: '데님' },
                                { title: '반바지' },
                                { title: '스커트' },
                                { title: '레깅스' },
                            ]
                        },
                        {
                            title: '세트웨어',
                            child: [
                                { title: '전상품' },
                            ]
                        },
                        {
                            title: '패션잡화',
                            child: [
                                { title: '스니커즈' },
                                { title: '방한화' },
                                { title: '골프화' },
                                { title: 'ETC' },
                            ]
                        },
                    ]
                },
                // KIDS
                {
                    title: '키즈',
                    child: [
                        {
                            title: '아우터',
                            child: [
                                { title: '자켓' },
                                { title: '점퍼' },
                                { title: '코트' },
                                { title: '패딩' },
                                { title: '베스트' },
                            ]
                        },
                        {
                            title: '상의',
                            child: [
                                { title: '긴팔 티셔츠' },
                                { title: '반팔 티셔츠' },
                                { title: '맨투맨' },
                                { title: '후드' },
                                { title: '셔츠' },
                                { title: '니트' },
                            ]
                        },
                        {
                            title: '하의',
                            child: [
                                { title: '긴바지' },
                                { title: '스웻팬츠' },
                                { title: '반바지' },
                                { title: '스커트' },
                                { title: '레깅스' },
                            ]
                        },
                        {
                            title: '세트웨어',
                            child: [
                                { title: '전상품' },
                            ]
                        },
                        {
                            title: '언더웨어',
                            child: [
                                { title: '팬티' },
                                { title: '히트웨어' },
                                { title: '아우터' },
                            ]
                        },
                    ]
                },
                // OUTLET
                {
                    title: '아울렛',
                    child: [
                        {
                            title: 'MEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트웨어' },
                                { title: '패션잡화' },
                            ]
                        },
                        {
                            title: 'WOMEN',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트웨어' },
                                { title: '패션잡화' },
                            ]
                        },
                        {
                            title: 'KIDS',
                            child: [
                                { title: '아우터' },
                                { title: '상의' },
                                { title: '하의' },
                                { title: '세트웨어' },
                            ]
                        },
                    ]
                },
            ],

            // Swiper Option Gnb
            swiperOptionGnb: { 
                slidesPerView: '1',
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                navigation: { 
                    nextEl: '.swiper-button-next', 
                    prevEl: '.swiper-button-prev' 
                },
            },

            // Global Menu Swiper
            globalMenuSwiper: [
                {
                    products: [
                        { href: '베스트1', src: require('@/assets/images/pc/sample/insta01.png') },
                        { href: '베스트2', src: require('@/assets/images/pc/sample/insta02.png') },
                        { href: '베스트3', src: require('@/assets/images/pc/sample/insta03.png') },
                    ]
                },
                {
                    products: [
                        { href: '언더웨어1', src: require('@/assets/images/pc/sample/insta04.png') },
                        { href: '언더웨어2', src: require('@/assets/images/pc/sample/insta05.png') },
                        { href: '언더웨어3', src: require('@/assets/images/pc/sample/insta06.png') },
                    ]
                },
                {
                    products: [
                        { href: '남성1', src: require('@/assets/images/pc/sample/imgreview01.png') },
                        { href: '남성2', src: require('@/assets/images/pc/sample/imgreview02.png') },
                        { href: '남성3', src: require('@/assets/images/pc/sample/imgreview03.png') },
                    ]
                },
                {
                    products: [
                        { href: '여성1', src: require('@/assets/images/pc/sample/sam_banner_01.png') },
                        { href: '여성2', src: require('@/assets/images/pc/sample/sam_banner_02.png') },
                        { href: '여성3', src: require('@/assets/images/pc/sample/sam_banner_03.png') },
                    ]
                },
                {
                    products: [
                        { href: '키즈1', src: require('@/assets/images/pc/sample/sam_goods_list_01.jpg') },
                        { href: '키즈2', src: require('@/assets/images/pc/sample/sam_goods_list_02.jpg') },
                        { href: '키즈3', src: require('@/assets/images/pc/sample/sam_goods_list_03.jpg') },
                    ]
                },
                {
                    products: [
                        { href: 'https://naver.com', src: require('@/assets/images/pc/sample/sam_special01.png') },
                        { href: 'https://naver.com', src: require('@/assets/images/pc/sample/sam_special02.png') },
                        { href: 'https://naver.com', src: require('@/assets/images/pc/sample/sam_special03.png') },
                    ]
                },
            ],

            // Wish Brands
            wishBrands: [
                { title: '바나나 리퍼블릭', checked: true, new: false },
                { title: '아디다스 오리지널', checked: true, new: false },
                { title: '아디다스 퍼포먼스', checked: true, new: false },
                { title: '컬럼비아 언더', checked: false, new: false },
                { title: '푸마 바디웨어', checked: false, new: true },
                { title: '노티카', checked: false, new: false },
                { title: '띵크', checked: false, new: false },
                { title: '라코스테', checked: false, new: false },
                { title: '리복', checked: false, new: false },
                { title: '리복 스포츠', checked: false, new: true },
                { title: '리복 키즈', checked: false, new: false },
                { title: '몽벨 언더웨어', checked: false, new: false },
                { title: '밀레', checked: false, new: false },
            ],
        }
    },
    components: {
        Inputs,
    },
    methods: {
        // openBrandCollection () {
        //     this.$refs.brandCollection.classList.toggle('active')
        // },
        onHover (){
            if(document.querySelector('header').classList.contains('brand_main')){
                document.querySelector('header').classList.add('hover');
            }
        },
        offHover (){
            document.querySelector('header').classList.remove('hover');
        }
    },
}
</script>

<style>

</style>