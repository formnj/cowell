<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><div class="box b1">box1</div></swiper-slide>
      <swiper-slide><div class="box b2">box2</div></swiper-slide>
      <swiper-slide><div class="box b3">box3</div></swiper-slide>
      <swiper-slide><div class="box b4">box4</div></swiper-slide>
      <swiper-slide><div class="box b5">box5</div></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOption: { 
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style>
.swiper{width:1618px;border:1px solid black;background:#eee;}
.swiper-wrapper{margin-left:-136px;}
.swiper-slide{width:253px;margin: 0 10px;}
.swiper-slide-active{width:526px;}
.box{display:flex;width:100%;height:333px;font-size:30px;justify-content:center;align-items:center;}
.b1{background:red;}
.b2{background:orange;}
.b3{background:yellow;}
.b4{background:green;}
.b5{background:blue;}
</style>