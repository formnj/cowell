<template>
  <div class="list_photo_all">
    <ul>
      <li v-for="(item, index) in listReviewItemsAll" :key="index">
        <span class="image" v-if="item.image">
          <img :src="item.image" alt="">
          <span class="count">{{ item.imageCount }}</span>
        </span>        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listReviewItemsAll: [
        { image: require("@/assets/images/mo/sample/imgreview01.png"), imageCount: 9, },
        { image: require("@/assets/images/mo/sample/imgreview02.png"), imageCount: 3, },
        { image: require("@/assets/images/mo/sample/imgreview03.png"), imageCount: 0, },
        { image: require("@/assets/images/mo/sample/imgreview04.png"), imageCount: 1, },
        { image: require("@/assets/images/mo/sample/imgreview05.png"), imageCount: 9999, },
      ]
    }
  },
}
</script>

<style>

</style>