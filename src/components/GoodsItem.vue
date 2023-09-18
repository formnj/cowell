<template>
    <div class="goods_item">
        device : {{ device }}
        <a :href="'/'+device+'/GD_01_01_01'"><!-- 퍼블 확인용 링크 -->
            <span class="thumb">
                <em><img v-bind:src="item.img" /></em>
                <i v-if="item.option_icon">{{item.option_icon}}</i><!-- 23.04.18 관리자 등록 옵션 값 추가 -->
            </span>
        </a>
        <div class="cont">
            
            <Inputs v-if="isWish == true" input_type="checkbox" class="check wish" />
            <!-- 장바구니담기 -->
            <a href="#none" class="btn_cart" v-if="isCart">장바구니 담기</a>
            <!-- //장바구니담기 -->
            
            <a href="#none" class="title">
                <em class="logo" v-if="item.logo"><img :src="item.logo" /></em>
                <strong v-if="item.brand">{{ item.brand }}</strong>
                <span>{{ item.tit }}</span>
                <p v-if="item.explain">{{ item.explain }}</p><!-- 추가 23.02.28 -->
            </a>
            <strong v-if="item.price" class="price">
                <!-- 정상가 -->
                <del v-if="item.ori_price">{{ item.ori_price }}</del>
                <!-- //정상가 -->
                <!-- 할인율 -->
                <em class="discount">{{ item.discount }}</em>
                <!-- //할인율 -->
                <!-- 할인가 -->
                {{ item.price }}
                <!-- //할인가 -->
            </strong>
            <!-- badge -->
            <ul class="flag" v-if="item.badge">
                <li v-for="(badge, idx) in item.badge" :key="idx"><em :class="badge.class">{{ badge.txt }}</em></li>
            </ul>
            <!-- //badge -->
        </div>
        <!-- size select -->
        <div v-if="item.options" class="option_wrap" :class="{'active' : optionActive == true}">
            <button class="size_pop" @click="(optionActive == true) ? optionActive = false : optionActive = true">{{item.options.title}}</button>
            <div>
                <ul>
                    <li v-for="(options, idx) in item.options.item" :key="idx">
                        <span>{{options.txt}}</span>
                    </li>
                </ul>
                <button class="btn_close" @click="optionActive = false">닫기</button>
            </div>
        </div>
        <!-- //size select -->
    </div>
</template>
  
<script>
import Inputs from '@/components/Inputs.vue';

export default {
    components: {
        Inputs,
    },
    data () {
        return {
            optionActive: this.optionActive
        }
    },
    props: {
        item: '',
        dataType: String,
        isWish: false,
        isCart: false,
        optionActive: false,
        device: String
    },
    mounted() {
        /* 23.04.04 PC 사이즈 옵션 레이어 노출 관련 */
        const itemCont = document.querySelectorAll('.goods_item');//23.04.24 마우스 오버 범위 수정
        itemCont.forEach(function(t){
            var optionWrap = t.parentElement.querySelector('.option_wrap');

            if(t.parentElement.getElementsByClassName('option_wrap').length != 0){
                t.addEventListener('mouseover', function(){
                    optionWrap.classList.add('show')
                    optionWrap.style.top = (t.parentElement.querySelector('.thumb').offsetHeight + 4)+'px'
                });
                t.parentElement.addEventListener('mouseleave', function(){
                    optionWrap.classList.remove('show')
                });
            }
        });
        /* //23.04.04 PC 사이즈 옵션 레이어 노출 관련 */

        /* 퍼블 확인용 링크 */
        this.device = device;
        /* //퍼블 확인용 링크 */
    },
    methods:{
    }
};
</script>

<style scoped>
</style>