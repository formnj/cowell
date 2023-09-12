<template>
    <ul class="goods_list" :class="{'swiper-wrapper':isSwiper}" :data-type="dataType">
        <li :class="{'swiper-slide':isSwiper}" v-for="(item, index) in item" v-bind:key="index">
            <GoodsItem :isWish="isWish" :isCart="isCart" :item="item" />
        </li>
    </ul>
</template>
  
<script>
import Inputs from '@/components/Inputs.vue';
import GoodsItem from '@/components/GoodsItem.vue';
import SelectBox from '@/components/SelectBox.vue';

export default {
    components: {
        Inputs,
        GoodsItem,
        SelectBox,
    },
    props: {
        item:Array,
        dataType: String,
        isWish: false,
        isCart: false,
        isSwiper: false,
    },
    mounted() {
    },
};
</script>

<style scoped>
</style>