<template>
    <div>
        <Header />
        <div id="container">
            <router-view></router-view>
        </div>
        <Footer />
        <ActionBar />
        <BrandsLayer />
        <GlobalMenu />
        <HistoryList />
        <!-- search -->
        <Search />
        <!-- //search -->
    </div>
</template>

<script>
import Header from '@/layout/mo/Header.vue';
import Footer from '@/layout/mo/Footer.vue';
import ActionBar from '@/layout/mo/ActionBar.vue';
import BrandsLayer from '@/layout/mo/BrandsLayer.vue';
import GlobalMenu from '@/layout/mo/GlobalMenu.vue';
import HistoryList from '@/views/mo/CM/CW_MO_FO_CM_04_02_01.vue';

import Search from '@/views/mo/DP/CW_MO_FO_DP_07_01_01.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        ActionBar,
        BrandsLayer,
        GlobalMenu,
        HistoryList,
        Search,
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
