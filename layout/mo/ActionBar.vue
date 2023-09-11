<template>
    <div id="action_bar">
        <ul><!-- 해당 메뉴 활성화에 active 클래스 추가 -->
            <li class="menu"><a href="#none" @click.prevent="openGlobalMenu">MENU</a></li>
            <li class="his"><a href="#none" @click.prevent="openHistory">HIS</a></li>
            <li class="home"><router-link to="/mo/">HOME</router-link></li>
            <li class="my"><router-link to="/mo/MB_01_01_01">MY</router-link></li>
        </ul>
        <a href="javascript:void(0);" class="brand" @click.prevent="openBrandLayer"><em>Brand</em></a>
    </div>
</template>
  
<script>
export default {
    mounted(){
        window.addEventListener('scroll', this.onScroll)
    },
    methods: {
        openGlobalMenu () {
            document.getElementById('gnb').classList.add('active')
            /* 23.03.27 전체 메뉴 오픈 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
        openHistory () {
            document.getElementById('history').classList.add('active')
            /* 23.03.27 히스토리 오픈 시 body 고정 */
            document.querySelector('body').classList.add('fixed')

            /* 23.04.06 토스트 팝 추가 */    
            const toast = document.createElement( "div" )
            toast.id = 'toast';
            document.getElementById('history').appendChild(toast);
            /* //23.04.06 토스트 팝 추가 */    
        },

        /* 23.04.06 액션바 노출 기능 추가 */
        onScroll () {
            if (window.scrollY < this.lastScrollY) {
                document.getElementById('action_bar').classList.remove('down');
            } else {
                document.getElementById('action_bar').classList.add('down');
            }

            this.lastScrollY = window.scrollY

            var scrollTop = window.scrollY
            var innerHeight = window.outerHeight;
            var scrollHeight = document.body.offsetHeight;
            if (scrollTop + innerHeight >= (scrollHeight-1)) {
                document.getElementById('action_bar').classList.remove('down');
            }
        },

        openBrandLayer(e){
            var brandLayer = document.querySelector('.brand_layer');
            if(brandLayer.classList.contains('active')){
                document.querySelector('body').classList.remove('fixed');
                brandLayer.classList.remove('active');
                e.currentTarget.classList.remove('active');
            } else {
                document.querySelector('body').classList.add('fixed')
                brandLayer.classList.add('active');
                e.currentTarget.classList.add('active');
            }
        }
        /* //23.04.06 액션바 노출 기능 추가 */
    },
}
</script>

<style scoped>
#action_bar {position:fixed; right:0; bottom:0; left:0; z-index:10; display:flex; transition:bottom 0.25s;}
#action_bar.down {bottom:-74px;}
#action_bar > * {flex:1 auto;}
#action_bar a {display:block;}
#action_bar ul {width:calc(100% - 106px); display:flex;}
#action_bar li {flex:1 auto;}
#action_bar li a {margin-top:12px; padding:10px 20px 14px; color:#fff; font-size:8px; line-height:10px; background-color:#222; text-align:center;}
#action_bar li a:before {width:24px; height:24px; margin:0 auto 4px; background-position:50% 0; background-repeat:no-repeat; background-size:cover; content:''; display:block;}
#action_bar li.active a {font-weight:700;}
#action_bar li.active a:before {background-position:50% 100%;}
#action_bar > a {width:106px; background-image:url('@/assets/images/mo/common/bg_action_bar.png'); background-position:50% 100%; background-repeat:no-repeat; background-size:106px auto;}
#action_bar > a em {width:60px; height:60px; margin:0 auto; color:#fff; font-weight:700; line-height:60px; background-color:#00C294; border-radius:50%; text-align:center; position:relative; display:block;}
#action_bar > a.active em {font-size:0; background-color:#888;}
#action_bar > a.active em:before, #action_bar > a.active em:after {width:55.6%; margin-top:-1px; border-top:2px solid #fff; content:''; position:absolute; top:50%; left:13px; display:block; transform-origin:50%;}
#action_bar > a.active em:before {transform:rotate(45deg);}
#action_bar > a.active em:after {transform:rotate(135deg);}

#action_bar li.menu a:before {background-image:url('@/assets/images/mo/common/icon_action_menu.png');}
#action_bar li.his a:before {background-image:url('@/assets/images/mo/common/icon_action_his.png');}
#action_bar li.home a:before {background-image:url('@/assets/images/mo/common/icon_action_home.png');}
#action_bar li.my a:before {background-image:url('@/assets/images/mo/common/icon_action_my.png');}

@media screen and (max-width:370px) {
    #action_bar li a {padding:10px 10px 14px;}
}
</style>