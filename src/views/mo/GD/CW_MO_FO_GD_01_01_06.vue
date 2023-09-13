<template>
  <div class="section_group">
    <div class="section">
      <div class="list_card">
        <ul>
          <li>
            <button type="button" class="coupon_card ticket">
              <div class="text">
                <em class="percent">50,000원</em>
                <strong class="title">코트 한정 할인 쿠폰 (2)</strong>
                <span class="d_day">D-30</span>
              </div>
              <div class="condition">
                <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                <p>유의사항 : 적용가능품목 <button type="button" class="button_specific" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰 상세보기', modalContent='modalDetailTicket'">품목보기</button></p>
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="coupon_card delivery">
              <div class="text">
                <em class="percent">무료배송</em>
                <strong class="title">시크릿! 무료배송 쿠폰</strong>
                <span class="d_day">D-30</span>
              </div>
              <div class="condition">
                <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                <p>유의사항 : 적용가능품목 <button type="button" class="button_specific" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰 상세보기', modalContent='modalDetailDelivery'">품목보기</button></p>
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="coupon_card cart">
              <div class="text">
                <em class="percent">10%</em>
                <strong class="title">아우터 할인 (1)</strong>
                <span class="d_day">D-30</span>
              </div>
              <div class="condition">
                <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                <p>유의사항 : 적용가능품목 <button type="button" class="button_specific" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰 상세보기', modalContent='modalDetailCart'">품목보기</button></p>
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="coupon_card download" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='modalDownload'">
              <div class="text">
                <em class="percent">10%</em>
                <strong class="title">생일축하 쿠폰</strong>
                <span class="d_day">D-7</span>
              </div>
              <div class="condition">
                <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                <p>유의사항 : 적용가능품목 <button type="button" class="button_specific">품목보기</button></p>
              </div>
            </button>
          </li>
          <li>
            <button type="button" class="coupon_card expired">
              <div class="text">
                <em class="percent">12%</em>
                <strong class="title">WELCOME등급 쿠폰</strong>
                <span class="d_day">D-20</span>
              </div>
              <div class="condition">
                <p>최대할인 50,000원, 100,000원 이상 구매 시</p>
                <p>유의사항 : 적용가능품목 <button type="button" class="button_specific">품목보기</button></p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <ModalSkin
      :modalTitle="modalTitle"
    >
      <template v-if="modalContent === 'modalDownload'">
        <p class="align_center">쿠폰 다운로드가 완료 되었습니다. <br>받으신 쿠폰은 <span class="underline">마이페이지 > 쿠폰내역</span>에서 확인 하실 수 있습니다.</p>
        <div class="btnSection">
            <button class="btn_mid btn_default"><em>확인</em></button>
        </div>
        
        <p class="align_center">쿠폰은 회원만 받을 수 있습니다.</p>
        <div class="btnSection">
            <button class="btn_mid btn_default"><em>로그인</em></button>
        </div>
        <p class="align_center pt20">
          아직 회원이 아니세요? <br>
          <a href="" class="underline">회원가입</a>
        </p>
      </template>

      <template
        v-if="
          modalContent === 'modalDetailTicket' ||
          modalContent === 'modalDetailDelivery' ||
          modalContent === 'modalDetailCart'
        "
      >
        <div class="section_group">
          <div class="section pt0">
              <!-- ticket -->
              <template v-if="modalContent === 'modalDetailTicket'">
                  <div class="coupon_detail_top pb20">
                      <strong class="title icon ticket">코트 한정 할인 쿠폰</strong>
                  </div>
                  <div class="linear_notice_box">
                      <div class="row cells bd">
                          <p class="al">사용가능기간 : 2022.02.02 ~ 03.31</p>
                          <span>D-30</span>
                      </div>
                  </div>
                  <div class="list_bullet half">
                      <strong class="title bold pt30 pb10">쿠폰 적용 가능 대상</strong>
                      <ul>
                          <li v-for="(item, index) in couponBrands" :key="index">
                              {{ item.title }}
                          </li>
                      </ul>
                  </div>
                  <div class="list_bullet half">
                      <strong class="title bold pt30 pb10">유의사항</strong>
                      <ul>
                          <li>제한없이 사용 가능</li>
                      </ul>
                  </div>
              </template>

              <!-- delevery -->
              <template v-if="modalContent === 'modalDetailDelivery'">
                  <div class="coupon_detail_top pb20">
                      <strong class="title icon delivery">무료배송</strong>
                  </div>
                  <div class="linear_notice_box">
                      <div class="row cells bd">
                          <p class="al">사용가능기간 : 2022.02.02 ~ 03.31</p>
                          <span>D-30</span>
                      </div>
                  </div>
                  <div class="list_bullet half">
                      <strong class="title bold pt30 pb10">유의사항</strong>
                      <ul>
                          <li>제한없이 사용 가능</li>
                      </ul>
                  </div>
              </template>

              <!-- cart -->
              <template v-if="modalContent === 'modalDetailCart'">
                  <div class="coupon_detail_top pb20">
                      <strong class="title icon cart">장바구니쿠폰</strong>
                  </div>
                  <div class="linear_notice_box">
                      <div class="row cells bd">
                          <p class="al">사용가능기간 : 2022.02.02 ~ 03.31</p>
                          <span>D-30</span>
                      </div>
                  </div>
                  <div class="list_bullet half">
                      <strong class="title bold pt30 pb10">제외 대상</strong>
                      <ul>
                          <li v-for="(item, index) in couponBrands" :key="index">
                              {{ item.title }}
                          </li>
                      </ul>
                  </div>
                  <div class="list_bullet half">
                      <strong class="title bold pt30 pb10">유의사항</strong>
                      <ul>
                          <li>제한없이 사용 가능</li>
                      </ul>
                  </div>
              </template>
          </div>
      </div>
      </template>
    </ModalSkin>
  </div>
</template>

<script>
import ModalSkin from '@/components/ModalSkin'

export default {
  data () {
    return {
      modalTitle: '',
      modalContent: '',
      modalClass: '',

      // Coupon Brands
      couponBrands: [
        { title: '바나나 리퍼블릭', checked: true },
        { title: '아디다스 오리지널', checked: true },
        { title: '아디다스 퍼포먼스', checked: true },
        { title: '컬럼비아 언더', checked: false },
        { title: '푸마 바디웨어', checked: false },
        { title: '노티카', checked: false },
        { title: '띵크', checked: false },
        { title: '라코스테', checked: false },
        { title: '리복', checked: false },
        { title: '리복 스포츠', checked: false },
        { title: '리복 키즈', checked: false },
        { title: '몽벨 언더웨어', checked: false },
        { title: '밀레', checked: false },
      ],
    }
  },
  components: {
    ModalSkin,
  },
  methods: {
    openModal (name) {
      this.$modal.show(name)
      /* 23.03.27 팝업 활성화 시 body 고정 */
      document.querySelector('body').classList.add('fixed')
    },
  },
}
</script>

<style>

</style>