<template>
  <div>
    <div class="section_group">
      <div class="section pt10">
        <label class="textarea_label" for="writeReply">
          <textarea
            id="writeReply"
            class="textarea"
            placeholder="이벤트 댓글에 적합하지 않은 내용, 욕설 또는 비방 등의 내용은 통보 없이 삭제 될 수 있습니다. (최소 10자 이상 등록)"
            v-model="message"
            @keyup="onCountMessage"
            :maxlength="maxCount"
          ></textarea>
        </label>
        <div class="text_count">
            <span class="count"><em>{{ count }}</em>/{{ maxCount }}</span>
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
      message: '',
      count: 0,
      maxCount: 100,
    }
  },
  methods: {
    onCountMessage () {
      this.count = this.message.length
    },
  },
}
</script>

<style>

</style>