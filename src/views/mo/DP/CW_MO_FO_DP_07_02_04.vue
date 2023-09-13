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

            <div class="list_event pt30">
                <ul>
                    <li v-for="(item, index) in eventItem" :key="index">
                        <div class="card_event">
                            <a href="" class="link">
                                <span class="image">
                                    <img :src="item.image" alt="">
                                </span>
                                <div class="text">
                                    <strong class="title">{{ item.title }}</strong>
                                    <p class="paragraph">{{ item.paragraph }}</p>
                                    <span class="period">{{ item.period }}</span>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
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

                eventItem: [
                    {
                        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vel facilis. Quo fugit consequuntur illo, quas et modi officia accusantium odio praesentium quam itaque reprehenderit, illum veniam animi magnam tempore?',
                        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vel facilis. Quo fugit consequuntur illo, quas et modi officia accusantium odio praesentium quam itaque reprehenderit, illum veniam animi magnam tempore?',
                        image: require('@/assets/images/mo/sample/imgreview01.png'),
                        period: '2023. 02. 28 ~ 2023. 03. 10',
                    },
                    {
                        title: '3월 BEST KEY WORD',
                        paragraph: 'BEST KEY WORD로 보는 3월의 코웰',
                        image: require('@/assets/images/mo/sample/imgreview02.png'),
                        period: '2023. 02. 28 ~ 2023. 03. 10',
                    },
                    {
                        title: 'ADIDAS KIDS 포토리뷰 이벤트',
                        paragraph: '최대 22% + 추가 5% 혜택',
                        image: require('@/assets/images/mo/sample/imgreview03.png'),
                        period: '2023. 02. 28 ~ 2023. 03. 10',
                    },
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
