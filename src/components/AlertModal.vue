<template>
  <div>
    {{ text }}

    <button @click="onOkClicked">OK</button>
    <button v-if="showCancelButton" @click="onCancelClicked">cancel</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    showCancelButton: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onOkClicked() {
      this.$attrs.resolve();
      this.$emit("close");
    },
    onCancelClicked() {
      this.$attrs.reject();
      this.$emit("close");
    }
  }
}
</script>
