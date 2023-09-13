<template>
    <ul class="review_list">
        <li class="review_list_item" v-for="(item, index) in item" v-bind:key="index">
            <ReviewItem :item="item" />
        </li>
    </ul>
</template>
  
<script>
import ReviewScore from "@/components/ReviewScore";
import ReviewItem from "./ReviewItem.vue";

export default {
    components: {
    ReviewScore,
    ReviewItem
},
    props: {
        item:Array,
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
.review_list {display:flex; flex-wrap:wrap;}
</style>