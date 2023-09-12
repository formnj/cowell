<template>
    <div class="searchModal">
        <div class="search_inner">
            <button class="btn_close" @click="$emit('modalClose')">닫기</button>
            <div class="search_wrap">
                <div class="search_form">
                    <Inputs input_type="text" id="아이디" value="" placeholder="검색어를 입력하세요." />
                    <button class="btn_search">검색</button>
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
        <div class="search_bg" @click="$emit('modalClose')"></div>
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
                            "BBC", "골프 슈즈", "리복", "팬츠", "유니폼", "패딩", "BBC", "골프 슈즈", "리복", "팬츠"
                        ]
                    }
                ],
            };
        },
        mounted(){
            /* 23.03.28 검색팝업 노출 시 body 고정 해제 */
            document.querySelector('.searchModal .btn_close').addEventListener('click', function(){
                document.getElementsByTagName('body')[0].classList.remove('fixed');
            });
            /* //23.03.28 검색팝업 노출 시 body 고정 해제 */
        }
    }
</script>

<style scoped>
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
</style>