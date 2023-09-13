import Vue from 'vue'
import VModal from "vue-js-modal/dist/ssr.index"; // https://euvl.github.io/vue-js-modal/
import "vue-js-modal/dist/styles.css";
import AlertModal from '@/components/AlertModal.vue'

Vue.use(VModal, {
  dialog: true,
  dynamic: true,
  injectModalsContainer: true,
})

const $modal = Vue.prototype.$modal

// 속성 순서 (https://euvl.github.io/vue-js-modal/Intro.html#dynamic-modals)
// this.$modal.show(
//   component,
//   component_properties,
//   modal_properties,
//   modal_events
// )

$modal.alert = function(text) {
  return new Promise((resolve, reject) => {
    this.show(AlertModal, {
      text,
      resolve,
      reject
    })
  })
}

$modal.confirm = function(text) {
  return new Promise((resolve, reject) => {
    this.show(AlertModal, {
      text,
      showCancelButton: true,
      resolve,
      reject
    })
  })
}