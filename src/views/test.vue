<template>
<div>
  <swiper
    class="swiper"
    :options="swiperOption"
>
    <swiper-slide>Slide 1</swiper-slide>     
    <swiper-slide>Slide 2</swiper-slide>     
    <swiper-slide>Slide 3</swiper-slide>     
    <swiper-slide>Slide 4</swiper-slide>     
    <swiper-slide>Slide 5</swiper-slide>
    <div
        class="swiper-pagination"
        slot="pagination"
        >
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>

  <div>
    <h2>Modal Test</h2>  
    <button @click="showAlertModal">Alert Modal</button>
    <button @click="showConfirmModal">Confirm Modal</button>
  </div>

</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOption: { 
        slidesPerView: 1, 
        spaceBetween: 30, 
        loop: true, 
        pagination: { 
            el: '.swiper-pagination', 
            clickable: true 
        }, 
        navigation: { 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev' 
        } 
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    async showAlertModal() {
      await this.$modal.alert('Alert')
      console.log('OK')
    },
    async showConfirmModal() {
      try {
        await this.$modal.confirm('Confirm')  
        console.log('confirmed')
      } catch (error) {
        console.log('canceled')
      }
    }
  }
}
</script>

<style>

</style>