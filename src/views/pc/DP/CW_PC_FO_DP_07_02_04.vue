<template>
    <div>
        <div class="search_wrap">
            <div class="search_form">
                <Inputs input_type="text" id="아이디" value="" placeholder="검색어를 입력하세요." />
                <button class="btn_search">검색</button>
            </div>
        </div>
        <Tabs tabClass="tab_type_03" :tab_item="tab_item_category" :tabidx="tabidx" @change="change" />

        <div class="content">
            <div class="list_event">
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
    import Inputs from "@/components/Inputs.vue";
    import Tabs from "@/components/Tabs.vue";
    
    export default {
        name: 'App',
        components: {
            Inputs,
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
        methods: {
        }
    }
</script>

<style scoped>
.content{padding-top:0;}
.search_wrap{margin-top:120px;}
.searchModal {background-color:rgba(34,34,34,0.75); position:fixed; top:0; right:0; bottom:0; left:0; z-index:10;}
.searchModal .btn_close {width:40px; height:40px; font-size:0; position:absolute; top:40px; right:40px;}
.searchModal .btn_close:before, .searchModal .btn_close:after {width:46px; margin-top:-1px; margin-left:-4px; border-top:2px solid #222; content:''; position:absolute; top:50%; left:0; display:block; transform:rotate(45deg);}
.searchModal .btn_close:after {transform:rotate(135deg);}
.search_bg {width:100%; height:100%;}
.search_inner {width:100%; padding:105px 20px; background-color:rgba(255,255,255,0.98); position:absolute; top:0; left:0; z-index:11;}

.keyword_list {margin-top:40px; display:flex; justify-content:space-between;}
.keyword_list dl {width:390px;}
.keyword_list dl + dl {width:186px;}
.keyword_list dt {margin-bottom:20px; font-size:20px; font-weight:700; line-height:30px; display:flex; align-items:center; justify-content:space-between;}
.keyword_list dt * {color:#999; font-size:12px; font-weight:400; line-height:16px;}
.keyword_list dt em + em {margin-left:6px;}
.keyword_list dd {margin:14px 0; padding-right:38px; position:relative; display:flex; align-items:center; justify-content:space-between;}
.keyword_list dd em {color:#999;}
.keyword_list dd span {width:24px; margin-right:10px; display:inline-block;}
.keyword_list dd button {width:18px; height:18px; font-size:0; position:absolute; top:0; right:0;}
.keyword_list dd button:before, .keyword_list dd button:after {width:20px; margin-top:9px; margin-left:-1px; border-top:1px solid #999; content:''; position:absolute; top:0; left:0; display:block; transform:rotate(45deg);}
.keyword_list dd button:after {transform:rotate(135deg);}

.tab_wrap{width:800px;margin:60px auto;}
::v-deep .tab_wrap .tab_type_03{display:flex;justify-content:space-between;}
::v-deep .tab_wrap .tab_type_03:after{content:none;}
::v-deep .tab_wrap .tab_type_03 > li{float:none;}


.result_none{padding:120px 20px;text-align:center;}
.result_none > p{font-size:30px;}
.result_none > p > em{color:#00C294;}


.brand_collection{}
.brand_collection.active{display:block;}
.brand_collection .list_official{position:relative;width:1620px;padding:20px 0;margin:0 auto;text-align:center;}
.brand_collection .list_official:after{position:absolute;top:0;left:-80px;right:-80px;bottom:0;z-index:-1;content:"";display:block;background:#eee;}
.brand_collection .list_official .wish_item{margin-right:60px;}
.brand_collection .list_official .wish_item .wish_label .label,
.brand_collection .list_official .wish_item .wish_label .link{font-weight:600;}
.brand_collection .list_total{position:relative;padding:25px 0 25px 70px;font-size:0;}
.brand_collection .list_total:after{position:absolute;top:0;left:-80px;right:-80px;bottom:0;z-index:-1;content:"";display:block;background:#fff;}
.brand_collection .list_total .wish_item{width:calc((100% - 70px) / 4);}
.brand_collection .list_total .wish_item .wish_label .label,
.brand_collection .list_total .wish_item .wish_label .link{font-weight:500;}
</style>