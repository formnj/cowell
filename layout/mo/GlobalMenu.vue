<template>
    <div id="gnb">
        <h2 class="sticky">
            <div class="area left">
                <button class="icon search" @click.prevent="openSearchModal"></button>
            </div>
            <strong class="title">MENU</strong>
            <div class="area right">
                <button class="icon close" @click.prevent="closeGlobalMenu"></button>
            </div>
        </h2>
        <div class="pad_container">
            <div class="mb30">
                <a href="">로그인</a>
                <a href="">양재원 (jwyang) 님</a>
            </div>
            <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" class="mb0" :tabidx="tabidx" @change="change" />
            <div class="tab_content mt0">
                <!-- category -->
                <div :class="{'current': tabidx == 0}">
                    <div class="section">
                        <div class="gnb">
                            <!-- 23.03.27 대카테고리 아코디언, 링크 버튼 분리 -->
                            <ul>
                                <li v-for="(item, index) in globalMenu" :key="index">
                                    <a href="">{{ item.title }}</a>
                                    <button @click.prevent="onToggleCheckCategory($event)">열림</button>
                                    <ul>
                                        <li v-for="(item, index) in item.child" :key="index">
                                            <a href="">{{ item.title }}</a>
                                            <button @click.prevent="onToggleCheckCategory($event)">열림</button>
                                            <ul>
                                                <li v-for="(item, index) in item.child" :key="index">
                                                    <a href="">{{ item.title }}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <!-- //23.03.27 대카테고리 아코디언, 링크 버튼 분리 -->
                        </div>
                    </div>
                    <div class="section pt30 pb30">
                        <h3 class="title">공식 브랜드</h3>
                        <div class="official_brand_horizontal">
                            <ul>
                                <li v-for="(item, index) in brandThumb" :key="index">
                                    <a href="" class="link">
                                        <span class="image">
                                            <img :src="item.image" alt="">
                                        </span>
                                        <!-- 23.04.06 찜버튼 추가 -->
                                        <strong class="title wish_label">
                                            <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                            <label :for="'wishBrand' + index " class="label">{{ item.title }}</label>
                                        </strong>
                                        <!-- //23.04.06 찜버튼 추가 -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="section pt20 pb20">
                        <div class="recommend_links">
                            <ul>
                                <li><a href="">베스트</a></li>
                                <!-- <li><a href="/mo/PM_04_01_01">기획전</a></li> 23.04.21 제거 -->
                                <li><a href="/mo/PM_06_01_01">이벤트</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- 23.04.06 제거
                         <div class="section pt30 pb30">
                        <div class="half_column_box pt10">
                            <template v-for="(item, index) in wishBrands">
                                <div class="column" v-if="item.checked" :key="index">
                                    <span class="wish_label">
                                        <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                        <label :for="'wishBrand' + index " class="label">{{ item.title }}</label>
                                    </span>
                                </div>
                            </template>
                        </div>
                        <div class="half_column_box pb10">
                            <template v-for="(item, index) in wishBrands">
                                <div class="column" v-if="!item.checked" :key="index">
                                    <span class="wish_label">
                                        <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                        <label :for="'wishBrand' + index " class="label">{{ item.title }}</label>
                                    </span>
                                </div>
                            </template>
                        </div>
                    </div> -->
                </div>
                <!-- //category -->
                <!-- brand -->
                <div :class="{'current': tabidx == 1}">
                    <div class="section pt20 pb30">
                        <h3 class="title">공식 브랜드</h3>
                        <div class="official_brand_horizontal">
                            <ul>
                                <li v-for="(item, index) in brandThumb" :key="index">
                                    <a href="" class="link">
                                        <span class="image">
                                            <img :src="item.image" alt="">
                                        </span>
                                        <!-- 23.04.06 찜버튼 추가 -->
                                        <strong class="title wish_label">
                                            <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                            <label :for="'wishBrand' + index " class="label">{{ item.title }}</label>
                                        </strong>
                                        <!-- //23.04.06 찜버튼 추가 -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="section pt30">
                        <div class="half_column_box pt10">
                            <template v-for="(item, index) in wishBrands">
                                <div class="column" v-if="item.checked" :key="index">
                                    <span class="wish_label">
                                        <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                        <label :for="'wishBrand' + index " class="label">{{ item.title }}</label>
                                    </span>
                                </div>
                            </template>
                        </div>
                        <div class="half_column_box pb10">
                            <template v-for="(item, index) in wishBrands">
                                <div class="column" v-if="!item.checked" :key="index">
                                    <span class="wish_label">
                                        <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                                        <label :for="'wishBrand' + index " class="label">{{ item.title }}</label>
                                    </span>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <!-- //brand -->
            </div>
            <!-- 23.04.06 tab_content에서 바깥으로 위치 이동 -->
            <div class="section">
                <div class="shortcut_links">
                    <a href="/mo/CC_01_01_01" class="link">고객센터</a>
                    <a href="/mo/CC_02_01_01" class="link">공지사항</a>
                    <a href="/mo/MY_04_01_04" class="link">1:1문의</a>
                </div>
            </div>
            <div class="section">
                <div class="shortcut_links">
                    <a href="" class="link">로그아웃</a>
                </div>
            </div>
            <!-- //23.04.06 tab_content에서 바깥으로 위치 이동 -->
        </div>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Inputs from "@/components/Inputs.vue";

export default {
    data() {
        return {
            /* 카테고리 텝 */
            tabidx:0,
            tab_item_category: [
                { item: "CATEGORY" }, { item: "BRAND" },
            ],
            // Global Menu
            globalMenu: [
                // BEST
                {
                    title: 'BEST',
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
                    title: 'UNDERWEAR',
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
                    title: 'MEN',
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
                    title: 'WOMEN',
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
                    title: 'KIDS',
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
                    title: 'OUTLET',
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
            // Brand Thumb
            brandThumb: [
                { image: require("@/assets/images/mo/common/brand_logo_01.png"), title: "COWELL FASHION" },
                { image: require("@/assets/images/mo/common/brand_logo_02.png"), title: "FIFA 1904" },
                { image: require("@/assets/images/mo/common/brand_logo_03.png"), title: "BBC earth" },
            ],
            // Wish Brands
            wishBrands: [
                { title: '바나나 리퍼블릭', checked: true },
                { title: '아디다스 오리지널', checked: true },
                { title: '아디다스 퍼포먼스', checked: true },
                { title: '컬럼비아 언더', checked: false },
                { title: '푸마 바디웨어', checked: false },
                { title: '노티카', checked: false },
                { title: '띵크', checked: false },
                { title: '라코스테', checked: false },
                { title: '리복', checked: false },
                { title: '리복 스포츠', checked: false },
                { title: '리복 키즈', checked: false },
                { title: '몽벨 언더웨어', checked: false },
                { title: '밀레', checked: false },
            ],
        }
    },
    components: {
        Tabs,
        Inputs,
    },
    watch: {
    },
    methods: {
        /* 23.03.27 대카테고리 아코디언 기능 수정 */
        onToggleCheckCategory (event) {
            event.currentTarget.classList.toggle('active')
            if(event.currentTarget.classList.contains('active')){
                event.currentTarget.innerHTML = '닫힘'
            } else {
                event.currentTarget.innerHTML = '열림'
            }
        },
        /* //23.03.27 대카테고리 아코디언 기능 수정 */
        closeGlobalMenu () {
            const gnb = document.getElementById('gnb')
            gnb.classList.remove('active')
            gnb.scrollTo(0, 0)
            /* 23.03.27 팝업 닫을 때 body 고정 제거 */
            if(document.querySelectorAll('body')[0].classList.contains('fixed')){
                document.querySelectorAll('body')[0].classList.remove('fixed');
            }
            /* //23.03.27 팝업 닫을 때 body 고정 제거 */
        },

        change(value){
            this.tabidx = value;
        },

        /* search */
        openSearchModal () {
            document.getElementsByClassName('searchModal')[0].classList.add('active')
            // document.getElementById('gnb').classList.remove('active')
        },
    },
}
</script>

<style>
</style>