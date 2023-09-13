<template>
    <div>
        <Header />
        <ul class="guide_header">
            <li v-for="(i, index) in menu" :key="i.item">
                <router-link v-on:click="tabidx = index" :to="i.link">{{ i.item }}</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
import Header from '@/layout/pc/Header.vue'; 

export default {
    components: {
        Header,
    },
    data() {
        return {
            tabidx: 0,
            menu: [
                {item:"Layout",link:'/cowell/Guide/'},
                {item: "Form",link:'/cowell/Guide/form'},
                {item: "List",link:'/cowell/Guide/list'},
                {item: "Element",link:'/cowell/Guide/element'},
                {item: "Modal",link:'/cowell/Guide/modal'},
            ],
        };
    },
    mounted() {
        $('.guide_header li').each(function(){
            if($(this).find('a').text().indexOf($('hgroup h2').text()) > -1){
                $(this).addClass('current');
            } else {
                $(this).removeClass('current');
            }
        });

        // $('label.input').each(function(){
        //     placeholder(this);
        // });

        // $('.input').each(function(){
        //     input_makeBtn(this);
        // });
    },
};
</script>

<style scoped>
header {margin:-20px -20px 20px; padding-bottom:30px; border-bottom:1px solid #222;}
header::v-deep .header_banner {display:none !important;}
.guide_header {margin:-20px 0 30px; display:flex;}
.guide_header li {flex:1;}
.guide_header li a {padding:16px 10px; color:#fff; font-size:16px; background-color:#222; text-align:center; position:relative; display:block;}
.guide_header li + li a:before {height:16px; border-left:2px solid #fff; content:''; position:absolute; top:50%; left:0; display:inline-block; transform:translateY(-50%);}
.guide_header li:last-child a:before {display:none !important;}
.guide_header li.current a {color:#ff7200; font-weight:500; background-color:#fff;}
.guide_header li.current a:before {height:16px; border-left:2px solid #222; content:''; position:absolute; top:50%; right:-2px; left:inherit; z-index:1; transform:translateY(-50%);}
</style>