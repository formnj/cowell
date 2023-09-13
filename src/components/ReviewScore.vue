<template>
    <div class="review_score">
        <p>
            <span :class="{'half':i > item}" v-for="(i, index) in Math.ceil(item)" :key="index"></span>
        </p>
        <span>({{ item }})</span>
    </div>
</template>
  
<script>

export default {
    components: {
    },
    props: {
        item:'',
    },
    mounted() {
    },
};
</script>

<style scoped>
</style>