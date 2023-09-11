<template>
    <div class="body_wrap">
        <Header />
        <div id="container">
            <router-view />
        </div>
        <!-- <Footer />
        <BrandsLayer /> -->
    </div>
</template>

<script>
import Header from '@/layout/pc/Header.vue';
// import Footer from '@/layout/pc/Footer.vue';
// import BrandsLayer from '@/layout/pc/BrandsLayer.vue';

export default {
    name: 'App',
    components: {
        Header,
        // Footer,
        // BrandsLayer
    },
    data() {
        return {}
    },
    mounted(){
    }
}
</script>

<style scoped>
</style>
