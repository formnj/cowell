<template>
    <Header />

    <div id="container">
        <router-view></router-view>
    </div>

    <Footer />
</template>

<script>
import Header from '@/layout/Header.vue';
import Footer from '@/layout/Footer.vue';

export default {
    name: 'Sub',
    components: {
        Header,
        Footer,
    },
    mounted(){}
}
</script>

<style>
#app {overflow-x:hidden;}
</style>
