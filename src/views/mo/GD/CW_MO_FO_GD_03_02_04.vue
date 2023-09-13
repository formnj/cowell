<template>
  <div>
    <div class="section_group">
      <div class="section">
        <h4 class="pb20">신고 사유 (필수)</h4>
        <ul class="check_group radio">
          <li class="big_label float_none"><Inputs input_type="radio" id="" text="도용" /></li>
          <li class="big_label float_none"><Inputs input_type="radio" id="" text="비방 및 욕설, 선정적 게시물" /></li>
          <li class="big_label float_none"><Inputs input_type="radio" id="" text="상업성 게시물" /></li>
          <li class="big_label float_none"><Inputs input_type="radio" id="" text="잘못된 정보" /></li>
          <li class="big_label float_none"><Inputs input_type="radio" id="" text="기타 (구체적인 사유를 입력 해 주세요)" /></li>
        </ul>
      </div>
      <div class="section pt10">
        <label class="textarea_label" for="writeReport">
          <textarea class="textarea" id="writeReport" placeholder="1,000자 이내로 신고 내용을 입력 해 주세요."></textarea>
        </label>
      </div>
      <div class="section pt0">
        <div class="list_bullet">
          <ul>
            <li>신고 항목에 포함되지 않는 내용은 기타를 선택 후 구제적인 내용을 작성 해 주시기 바랍니다.</li>
            <li>신교 해 주신 내용은 관리자 검토 후 내부 정책에 의거 조치가 진행 됩니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue'

export default {
  components: {
    Inputs,
  },
  data () {
    return {
    }
  },
}
</script>

<style>

</style>