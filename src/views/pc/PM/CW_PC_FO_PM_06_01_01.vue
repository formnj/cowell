<template>
    <div class="event_promotion">
        <h2>이벤트</h2>

        <Tabs tabClass="tab_type_03 center" :tab_item="tab_item_category" class="center" :tabidx="tabidx" @change="change" />
        
        <div class="sorting_box">
            <span class="total">총 <em>50</em>건</span>
            <div class="buttons">
                <button type="button" class="active">진행중 이벤트 (15)</button>
                <button type="button">종료 이벤트 (15)</button>
            </div>
        </div>

        <div class="list_event">
            <ul>
                <li v-for="(item, index) in eventItem" :key="index">
                    <div class="card_event">
                        <a href="/cowell/pc/PM_07_01_01" class="link">
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
</template>

<script>
import Tabs from '@/components/Tabs.vue'

export default {
    components: {
        Tabs,
    },
    data () {
        return {
            tabidx: 0,
            tab_item_category: [
                // { item: "전체" },
                { item: "이벤트" },
                { item: "기획전" },
                { item: "결제혜택" },
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
                {
                    title: 'ADIDAS KIDS 포토리뷰 이벤트',
                    paragraph: '최대 22% + 추가 5% 혜택',
                    image: require('@/assets/images/mo/sample/imgreview03.png'),
                    period: '2023. 02. 28 ~ 2023. 03. 10',
                },
                {
                    title: 'ADIDAS KIDS 포토리뷰 이벤트',
                    paragraph: '최대 22% + 추가 5% 혜택',
                    image: require('@/assets/images/mo/sample/imgreview03.png'),
                    period: '2023. 02. 28 ~ 2023. 03. 10',
                },
                {
                    title: 'ADIDAS KIDS 포토리뷰 이벤트',
                    paragraph: '최대 22% + 추가 5% 혜택',
                    image: require('@/assets/images/mo/sample/imgreview03.png'),
                    period: '2023. 02. 28 ~ 2023. 03. 10',
                },
                {
                    title: 'ADIDAS KIDS 포토리뷰 이벤트',
                    paragraph: '최대 22% + 추가 5% 혜택',
                    image: require('@/assets/images/mo/sample/imgreview03.png'),
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
}
</script>

<style scoped>
::v-deep .tab_type_03{display:flex;justify-content:center;}
::v-deep .tab_type_03 > li {float:none;}
::v-deep .tab_type_03 > li + li {padding-left:177px;}
::v-deep .tab_type_03 > li a{font-size:24px;height:50px;line-height:50px;}
</style>