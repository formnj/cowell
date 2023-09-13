<template>
    <div>
        <div class="search_wrap">
            <Inputs input_type="text" placeholder="예) 삼성로 512, 삼성동 517-1, 여의도 주공" />
            <button class="btn_search">검색</button>
        </div>
        <!-- tip -->
        <dl>
            <dt>Tip
                <p>아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가 검색됩니다.</p>
            </dt>
            <dd>
                <dl>
                    <dt>도로명 + 건물번호</dt>
                    <dd>예) 삼성로 512, 제주 첨단로 242</dd>
                    <dt>지역명(동/리) + 번지</dt>
                    <dd>예) 삼성동 517-1, 제주 염평동 218</dd>
                    <dt>지역명(동/리) + 건물명</dt>
                    <dd>예) 분당 주공, 여의도 주공</dd>
                    <dt>사서함명 + 번호</dt>
                    <dd>예) 여의도우체국사서함 1~100</dd>
                </dl>
            </dd>
        </dl>
        <!-- //tip -->

        <!-- 검색결과 -->
        <ul>
            <li v-for="(item, index) in address" :key="index" @click.prevent="activeChk($event, index), idx = index">
                <em>{{item.post_no}}</em>
                <p>
                    <em>도로명</em>
                    <span>{{item.address1}}</span>
                </p>
                <p>
                    <em>지번</em>
                    <span>{{item.address2}}</span>
                </p>
                <Inputs input_type="text" placeholder="상세주소를 입력하세요." v-if="index === idx" />
            </li>
        </ul>
        <!-- //검색결과 -->
    </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue';

    export default {
        name: 'App',
        components: {
            Inputs,
        },
        data() {
            return {
                idx:-1,
                address:[
                    {
                        post_no:'06168',
                        address1:'서울특별시 강남구 삼성로 512(삼성동) 삼성동빌딩',
                        address2:'서울특별시 강남구 삼성동 157-1 삼성동빌딩'
                    },
                    {
                        post_no:'06168',
                        address1:'경기도 용인시 오리로697 창우현대아파트 102동 1003호',
                        address2:'경기도 용인시 죽전동 287-2'
                    },
                    {
                        post_no:'06168',
                        address1:'서울특별시 강남구 삼성로 512(삼성동) 삼성동빌딩',
                        address2:'서울특별시 강남구 삼성동 157-1 삼성동빌딩'
                    },
                    {
                        post_no:'06168',
                        address1:'경기도 용인시 오리로697 창우현대아파트 102동 1003호',
                        address2:'경기도 용인시 죽전동 287-2'
                    },
                    {
                        post_no:'06168',
                        address1:'서울특별시 강남구 삼성로 512(삼성동) 삼성동빌딩',
                        address2:'서울특별시 강남구 삼성동 157-1 삼성동빌딩'
                    },
                    {
                        post_no:'06168',
                        address1:'경기도 용인시 오리로697 창우현대아파트 102동 1003호',
                        address2:'경기도 용인시 죽전동 287-2'
                    }
                ],
            };
        },
        methods: {
            activeChk(event, index){
                for(var i=0; i<event.currentTarget.parentElement.children.length;i++){
                    event.currentTarget.parentElement.children[i].classList.remove('active')
                }
                event.currentTarget.classList.add('active');
                console.log(index);
            }
        }
    }
</script>

<style scoped>
.search_wrap {width:100%; position:relative;}
.search_wrap .btn_search {width:24px; height:24px; font-size:0; background:url('@/assets/images/pc/common/icon_search.png') 0 0 no-repeat; background-size:24px auto; position:absolute; top:50%; right:14px; transform:translateY(-50%);}

dt {margin-top:30px; font-size:20px; font-weight:700; display:block;}
dt p {margin-top:10px; font-size:16px; font-weight:400;}

dd dt {margin-top:20px; font-size:14px; font-weight:700;}
dd dd {margin-top:6px; color:#888; font-size:14px;}

ul {color:#888; font-size:16px;}
ul li {padding:20px 0;}
ul li.active {padding-bottom:10px; color:#222;}
ul li + li {border-top:1px solid #ddd;}
ul p {margin-top:8px; display:flex;}
ul p em {width:65px;}
ul p span {flex:1;}
ul p + p {margin-top:6px;}
ul .label_wrap {margin-top:20px;}
ul li.active > em {font-weight:700;}
</style>