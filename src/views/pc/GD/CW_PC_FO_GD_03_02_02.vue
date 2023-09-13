<template>
  <div>
    <div class="flex_box pb20">
      <button type="button" class="ml_auto">전체보기</button>
    </div>
    <div class="flex_box flex_start">
      <div class="mr30" style="width:360px;">
        <swiper class="main_slide" :options="swiperOptionMainSlideItem">
            <swiper-slide v-for="(item, index) in mainSlideItem" :key="index">
                <img :src="item.img" alt="" class="image small">
            </swiper-slide>
            <div class="swiper-pagination small" slot="pagination"></div>
        </swiper>
      </div>
      <div>
        <div class="list_review pt0 pl0 pr0 pb0">
            <div class="user">
              <ReviewScore class="small" :item="'2.5'" />
              <div class="info pt0">
                <span>cuzo***</span>
                <span>22.12.30</span>
                <button type="button" class="button_thumb" @click.prevent="e => e.target.classList.toggle('active')">(3)</button>
              </div>
            </div>
            <div class="body_info mb20">
              <strong class="title">신체 정보</strong>
              <div class="cont">
                <span>키 : 176cm</span>
                <span>평소 사이즈 : 230</span>
                <span>구매 사이즈 : 350</span>
              </div>
            </div>
            <div class="cont pb20">
              <div class="text">
                <strong class="title pb10">가볍고 착용감좋습니다</strong>
                <p class="paragraph">가격도 좋고, 가볍고 착용감 좋습니다. 아이들한테 선물하면 좋을것 같습니다. 많이 파세요~</p>
              </div>
            </div>
            <div class="user">
              <div class="average_point">
                <table style="width:390px;">
                  <colgroup>
                    <col style="width:60px;" />
                    <col />
                    <col style="width:40px;" />
                  </colgroup>
                  <tr>
                    <td>색상</td>
                    <td>화면과 같아요.</td>
                    <td class="rate">100%</td>
                  </tr>
                  <tr>
                    <td>사이즈</td>
                    <td>잘 맞아요.</td>
                    <td class="rate">90%</td>
                  </tr>
                  <tr>
                    <td>착용감</td>
                    <td>편해요.</td>
                    <td class="rate">100%</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="user">
              <button type="button" class="button_report ml_auto" @click.prevent="openModal('modalSkin'), modalTitle='신고하기', modalContent='ModalReport'">신고</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewScore from '@/components/ReviewScore.vue'

export default {
  components: {
    ReviewScore,
  },
  data () {
    return {
      swiperOptionMainSlideItem: { 
        spaceBetween: 0,
        loop: true,
        pagination: { 
          el: '.main_slide .swiper-pagination',
          type: 'fraction'
        },
      },
      mainSlideItem: [
        {img: require("@/assets/images/mo/sample/sam_special01.png")},
        {img: require("@/assets/images/mo/sample/sam_special02.png")},
        {img: require("@/assets/images/mo/sample/sam_special03.png")},
      ],
    }
  }
}
</script>

<style>

</style>