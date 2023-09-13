<template>
  <div>
    <div class="section_group">
      <div class="section pt0">
        <h4>
          <strong class="title">색상옵션 : 블랙</strong>
          <span class="count">5</span>
        </h4>
        <div class="image_slide slide_off">
          <ul>
            <li v-for="(item, index) in colorOptionItem" :key="index">
              <button type="button" :class="item.active ? 'active' : ''">
                <img :src="item.img" alt="">
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="section">
        <h4>
          <strong class="title">사이즈</strong>
          <button type="button" class="modal" @click.prevent="openModal('modalSkin'), modalTitle='사이즈 가이드', modalContent='ModalSizeGuide'">사이즈 가이드</button>
        </h4>
        <div class="select_size">
          <button type="button">250</button>
          <button type="button" class="active">255</button>
          <button type="button">260</button>
          <button type="button">270</button>
          <button type="button">275</button>
          <button type="button">280</button>
          <button type="button">285</button>
          <button type="button">290</button>
          <button type="button">300</button>
          <button type="button">305</button>
          <button type="button">310</button>
          <button type="button">305</button>
          <button type="button">310</button>
        </div>
      </div>
      <div class="section pb0">
        <div class="count_price_box">
          <div class="order_count">
            <button type="button" class="button_decrese" @click.prevent="orderCount > orderMin ? orderCount-- : orderCount"></button>
            <input type="text" readonly="readonly" v-model="orderCount">
            <button type="button" class="button_increse" @click.prevent="orderCount < orderMax ? orderCount++ : orderCount"></button>
          </div>
          <div class="price">
            <span>총금액</span>
            <strong>999,999,999</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colorOptionItem: [
        {img: require("@/assets/images/mo/sample/sam_special03_01.png"), active: true},
        {img: require("@/assets/images/mo/sample/sam_special03_02.png"), active: false},
        {img: require("@/assets/images/mo/sample/sam_special03_03.png"), active: false},
        {img: require("@/assets/images/mo/sample/sam_special03_04.png"), active: false},
        {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
      ],
      orderCount: 1,
      orderMin: 1,
      orderMax: 10,
    }
  }
}
</script>

<style>
</style>