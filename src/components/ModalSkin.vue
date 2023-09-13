<template>
    <modal name="modalSkin" height="auto" :class="modalClass">
        <div class="modal_header">
            <h2 v-if="modalTitle">{{ modalTitle }}</h2>
            <button type="button" class="btn_close" @click="$modal.hide('modalSkin'), modalClose($event)">닫기</button>
        </div>
        <!-- modal fixe bottom -->
        <slot name="bottom" />
        <!-- //modal fixe bottom -->
        <div class="modal_content">
            <slot></slot>
        </div>
    </modal>
</template>

<script>
export default {
    props: ['modalTitle', 'modalClass'],
    mounted(){},
    methods:{
        modalClose(){
            /* 23.03.27 팝업 닫을 때 body 고정 제거 */
            if(document.querySelectorAll('body')[0].classList.contains('fixed')){
                document.querySelectorAll('body')[0].classList.remove('fixed');
            }
            /* //23.03.27 팝업 닫을 때 body 고정 제거 */
        }
    }
}
</script>

<style>
</style>