<template>
    <div class="review_item">
        <span class="thumb">
            <em><img :src="item.photo" @click.prevent="$openModalImage($event, 'modalSkinImage')" /></em>
        </span>
        <a href="#none" class="cont">
            <span class="thumb" v-if="item.goods">
                <em><img :src="item.goods" /></em>
            </span>
            <div v-if="item.tit || item.price">
                <p class="title" v-if="item.tit">
                    <span>{{ item.tit }}</span>
                </p>
                <strong class="price" v-if="item.price">
                    <em class="discount">{{ item.discount }}</em>
                    {{ item.price }}
                </strong>
            </div>
            <!-- 별점 -->
            <ReviewScore :item="item.reivewScore" />
            <!-- //별점 -->
        </a>
    </div>
</template>
  
<script>
import ReviewScore from "@/components/ReviewScore";

export default {
    components: {
        ReviewScore,

    },
    props: {
        item:'',
        isSwiper: false,
    },
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    },
};
</script>

<style scoped>
</style>