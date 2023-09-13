<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon search" @click.prevent="openSearchModal"></button>
            </div>
            <strong class="title">검색결과</strong>
            <div class="area right">
                <button class="icon cart"></button>
            </div>
        </h2>

        <div class="content">
            <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" class="mb0" :tabidx="tabidx" @change="change" />

            <div class="official_brand_horizontal">
                <ul>
                    <li v-for="(item, index) in brandThumb" :key="index">
                        <a href="" class="link">
                            <span class="image">
                                <img :src="item.image" alt="">
                            </span>
                            <strong class="title">{{ item.title }}</strong>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="half_column_box pt30">
                <template v-for="(item, index) in wishBrands">
                    <div class="column" v-if="item.checked" :key="index">
                        <span class="wish_label">
                            <input type="checkbox" class="input" :id="'wishBrand' + index " v-model="item.checked" >
                            <label :for="'wishBrand' + index " class="label">{{ item.title }}</label>
                        </span>
                    </div>
                </template>
            </div>
            <div class="half_column_box pb30">
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
</template>

<script>
    import Tabs from "@/components/Tabs.vue";

    export default {
        name: 'App',
        components: {
            Tabs,
        },
        data() {
            return {
                tabidx: 0,
                tab_item_category: [
                    { item: "상품(999)" },
                    { item: "브랜드(999)" },
                    { item: "기획전(999)" },
                ],

                // Brand Thumb
                brandThumb: [
                    { image: require("@/assets/images/mo/sample/sam_hot_01.png"), title: "FIFA OLP" },
                    { image: require("@/assets/images/mo/sample/sam_hot_02.png"), title: "Long Brand Name" },
                    { image: require("@/assets/images/mo/sample/sam_hot_03.png"), title: "NASA" },
                    { image: require("@/assets/images/mo/sample/sam_hot_04.png"), title: "BBC" },
                    { image: require("@/assets/images/mo/sample/sam_hot_05.png"), title: "FIFA OLP" },
                    { image: require("@/assets/images/mo/sample/sam_hot_06.png"), title: "Ourplace" },
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
        methods: {
        }
    }
</script>

<style scoped>
.official_brand_horizontal{position:relative;padding-top:30px;padding-bottom:30px;}
.official_brand_horizontal:after{position:absolute;left:20px;right:20px;bottom:0;content:"";display:block;height:1px;background:#eee;}
</style>
