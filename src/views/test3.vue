<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="@/assets/images/pc/sample/sam_visual01.png" alt="">
        <div class="text">
          <div class="brand" data-swiper-parallax="-2000">REEBOK</div>
          <div class="title" data-swiper-parallax="-4000">Best Sweatshirt</div>
          <div class="context" data-swiper-parallax="-6000">남들과는 다르게 <br>스타일과 실용성을  갖춘 집업 맨투맨!!</div>
        </div>
      </swiper-slide>
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
        parallax: true,
        speed: 1000
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
.swiper{}
.text{position:absolute;top:37%;color:#fff;}
.text .brand{font-size:30px;font-weight:500;}
.text .title{font-size:60px;font-weight:700;}
.text .context{font-size:24px;font-weight:400;}
</style>