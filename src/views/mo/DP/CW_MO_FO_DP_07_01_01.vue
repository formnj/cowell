<template>
    <div class="searchModal">
        <div class="search_inner">
            <div class="search_wrap">
                <div class="search_form">
                    <Inputs input_type="text" id="아이디" value="" placeholder="검색어를 입력하세요." />
                    <button class="icon search"></button>
                    <button class="btn_close" @click="closeSearchModal">닫기</button>
                </div>
                <div class="keyword_list">
                    <dl>
                        <dt>
                            최근 검색어
                            <button>전체 삭제</button>
                        </dt>
                        <dd v-for="(item,index) in keywords[0].update" :key="index">
                            <a href="#none">{{ item.keyword }}</a>
                            <em>{{ item.date }}</em>
                            <button>삭제</button>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            인기 검색어
                            <span>
                                <em>11:00</em><em>업데이트 </em>
                            </span>
                        </dt>
                        <dd v-for="(item, index) in keywords[0].hot" :key="index">
                            <a href="#none">
                                <span><i v-if="index < 9">0</i>{{ index + 1 }}.</span>
                                {{ item }}
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Inputs from "@/components/Inputs.vue";

    export default {
        name: 'App',
        components: {
            Inputs,
        },
        data() {
            return {
                /* sample keywords */
                keywords: [
                    {
                        update:[
                            {keyword:"트레이닝복", date:"02.14"},
                            {keyword:"골프 슈즈", date:"02.14"},
                            {keyword:"아디다스", date:"02.14"},
                            {keyword:"패딩", date:"02.14"},
                            {keyword:"골프", date:"02.14"},
                            {keyword:"팬티", date:"02.14"},
                            {keyword:"셔츠", date:"02.14"},
                        ],
                        hot:[
                            "BBC", "골프 슈즈", "리복", "팬츠", "유니폼", "패딩", "BBC", "골프 슈즈", "리복", "팬츠",
                        ]
                    }
                ],
            };
        },
        mounted(){
        },
        methods: {
            closeSearchModal () {
                const Search = document.getElementsByClassName('searchModal')
                Search[0].classList.remove('active')
                Search[0].scrollTo(0, 0)
            },
        },
    }
</script>

<style scoped>
.searchModal{position:fixed;z-index:100;top:0;left:-100%;right:100%;bottom:0;overflow-y:scroll;background:#fff;transition:left .3s,right .3s;}
.searchModal.active{left:0;right:0;}
.searchModal .search_inner {width:100%; padding:0 20px; background-color:#fff; overflow:hidden; position:absolute; top:0; right:0; bottom:0; left:0; z-index:11;}
.searchModal .search_wrap {height:100%; padding:82px 0 20px; overflow:auto;}

.searchModal .search_form {padding:18px 54px; background-color:#fff; border-bottom:1px solid #ddd; position:absolute; top:0; right:0; left:0; z-index:1;}
.searchModal::v-deep label.input input[type="text"] {padding:0; font-size:18px; line-height:26px; border:0;}
.searchModal::v-deep label.input i {color:#999; font-size:18px; top:4px; left:0;}

.searchModal .search_form .search {width:24px; height:24px; font-size:0; background:url('@/assets/images/mo/common/icon_search.png') 50% 0 no-repeat; background-size:cover; position:absolute; top:20px; right:20px;}
.searchModal .btn_close {width:24px; height:24px; font-size:0; position:absolute; top:20px; left:20px;}
.searchModal .btn_close:before {width:10px; height:10px; margin-top:-6px; margin-left:9px; border:1px solid #222; border-top:0; border-right:0; content:''; position:absolute; top:50%; left:0; display:block; transform:rotate(45deg);}

.searchModal .keyword_list dt, .searchModal .keyword_list dd {display:flex; position:relative; justify-content:space-between;}
.searchModal .keyword_list dt {margin-bottom:20px; font-size:16px; font-weight:700; line-height:24px;}
.searchModal .keyword_list dl + dl {margin-top:60px;}
.searchModal .keyword_list dt * {color:#666; font-size:14px; font-weight:400;}
.searchModal .keyword_list dt em + em {margin-left:6px;}
.searchModal .keyword_list dd {margin:14px 0; padding-right:38px; font-size:16px; position:relative; display:flex; align-items:center; justify-content:space-between;}
.searchModal .keyword_list dd em {color:#999;}
.searchModal .keyword_list dd span {width:24px; margin-right:10px; display:inline-block;}
.searchModal .keyword_list dd button {width:18px; height:18px; font-size:0; position:absolute; top:3px; right:0;}
.searchModal .keyword_list dd button:before, .searchModal .keyword_list dd button:after {width:20px; margin-top:9px; margin-left:-1px; border-top:1px solid #999; content:''; position:absolute; top:0; left:0; display:block; transform:rotate(45deg);}
.searchModal .keyword_list dd button:after {transform:rotate(135deg);}
</style>