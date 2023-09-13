<template>
    <div>
        <Header />
        <div id="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '@/layout/mo/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
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
