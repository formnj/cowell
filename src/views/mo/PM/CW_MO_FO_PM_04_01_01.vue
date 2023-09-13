<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title al">기획전</strong>
        </h2>
        
        <div class="event_promotion">
            <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" class="mb0" :tabidx="tabidx" @change="change" />
            
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
                            <a href="/mo/PM_05_01_01" class="link">
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
import Tabs from '@/components/Tabs.vue'

export default {
    components: {
        Tabs,
    },
    data () {
        return {
            tabidx: 0,
            tab_item_category: [
                { item: "전체" },
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
            ],
        }
    },
    mounted(){
        /* 23.04.19 추가 탭 고정 */
        window.addEventListener('scroll', this.onScroll)
    },
    methods:{
        /* 23.04.19 추가 탭 고정 */
        onScroll () {
            if (window.scrollY < this.lastScrollY) {
                let el_01 = document.querySelector('.tab_wrap').offsetHeight,
                    total_p = el_01;
                    
                document.querySelector('.tab_wrap').classList.add('fixed')
                document.querySelector('.sorting_box').style = 'margin-top:'+(total_p)+'px !important'
            } else {
                document.querySelector('.tab_wrap').classList.remove('fixed')
                document.querySelector('.sorting_box').style.removeProperty('margin')
            }

            if (window.scrollY == 0){
                document.querySelector('.tab_wrap').classList.remove('fixed')
                document.querySelector('.sorting_box').style.removeProperty('margin')                    
            }

            this.lastScrollY = window.scrollY
        },
    },
}
</script>

<style scoped>
/* 23.04.19 추가 탭 고정 */
.tab_wrap.fixed {padding:20px;}
/* //23.04.19 추가 탭 고정 */
</style>