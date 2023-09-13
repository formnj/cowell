<template>
  <div>
    <p>상품과 관련 없는 내용, 비방, 광고, 불건전한 내용의 글은 사전 동의 없이 삭제될 수 있습니다.</p>
    <ul class="form_group">
      <li>
        <p class="form_tit">제목</p>
        <Inputs input_type="text" :placeholder="'제목을 입력 하세요.'" />
      </li>
      <li>
        <p class="form_tit">문의 유형 선택</p>
        <SelectBox :options="inquireType" model="최신순" :isChange="true"/>
      </li>
      <li>
        <label class="textarea_label" for="writeInquire">
          <div class="notice">
            문의 내용을 작성 해 주세요. <br>
            오후 4시까지 문의는 당일 답변이 진행 됩니다. <br>
            (영업일 기준) <br>
            상품명과 내용을 상세히 기재 해 주시면 신속하게 답변해 드리겠습니다.
          </div>
          <textarea class="textarea" id="writeInquire" v-html="writeInquireContext"></textarea>
        </label>
      </li>
      <li>
        <p class="form_tit">이미지 등록 <span class="sub">(최대 3개까지)</span></p>
        <div class="image_upload_box">
          <span class="image_upload">
            <label for="imageUpload01" class="label">
              <input type="file" id="imageUpload01">
              <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image">
            </label>
            <button type="button" class="button_delete">삭제</button>
          </span>
          <span class="image_upload">
            <label for="imageUpload02" class="label">
              <input type="file" id="imageUpload02">
              <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image">
            </label>
            <button type="button" class="button_delete">삭제</button>
          </span>
          <span class="image_upload">
            <label for="imageUpload03" class="label">
              <input type="file" id="imageUpload03">
              <!-- <img src="@/assets/images/mo/sample/banner01.png" alt="" class="image"> -->
            </label>
            <!-- <button type="button" class="button_delete">삭제</button> -->
          </span>
          
        </div>
        <ul class="check_group radio">
          <li class="big_label"><Inputs input_type="radio" id="공개" text="공개" /></li>
          <li class="big_label"><Inputs input_type="radio" id="비공개" text="비공개" /></li>
        </ul>
      </li>
      <li class="mt20">
        <div class="flex_box big_label">
          <Inputs input_type="checkbox" id="관심카테고리_01" text="개인정보 처리방침 동의" checked="checked" />
          <button type="button">내용보기</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'
import SelectBox from '@/components/SelectBox.vue'

export default {
  components: {
    Inputs,
    SelectBox,
  },
  data () {
    return {
      inquireType: [
        { val: "원단/컬러/디자인 문의", txt: "원단/컬러/디자인 문의" },
        { val: "코디 상품 문의", txt: "코디 상품 문의" },
        { val: "기타 상품 문의", txt: "기타 상품 문의" },
      ],
      writeInquireContext: `상품명 (옵션) : \r\n문의 내용 : `
    }
  },
}
</script>

<style>
</style>