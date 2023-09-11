<template>
    <footer>
        <div class="footer_wrap">
            <div>
                <dl class="about">
                    <dt>ABOUT US</dt>
                    <dd>
                        <ul>
                            <li v-for="(item, index) in About" :key="index"><strong>{{ item.tit }} : </strong>{{ item.cont }} <span v-html="item.cont_link"></span></li>
                        </ul>
                    </dd>
                </dl>

                <dl>
                    <dt @click="onClickRedirect('/pc/CC_02_01_01')">NOTICE</dt>
                    <dd>
                        <ul>
                            <li v-for="(item, index) in Notice" :key="index"><router-link to="">{{ item }}</router-link></li>
                        </ul>
                    </dd>
                </dl>

                <dl>
                    <dt>Service</dt>
                    <dd>
                        <ul>
                            <li v-for="(item, index) in Service" :key="index" v-html="item"></li>
                        </ul>
                    </dd>
                </dl>

                <dl>
                    <dt>Help</dt>
                    <dd>
                        <ul>
                            <li v-for="(item, index) in Help" :key="index" v-html="item"></li>
                        </ul>
                    </dd>
                </dl>
            </div>
            <div class="bottom">
                <ul class="quick">
                    <li v-for="(item, index) in Quick" :key="index" v-html="item"></li>
                </ul>

                <ul class="sns">
                    <li class="facebook"><a href="https://www.facebook.com/cowellfashion/" target="_sns">facebook</a></li>
                    <li class="instagram"><a href="https://instagram.com/cowellfashion" target="_sns">instagram</a></li>
                    <li class="kakao"><a href="#none" target="_sns">kakao</a></li>
                </ul>
            </div>
        </div>
        <button id="go_top" class="top" @click.prevent="go_top">Top</button>
        
        <ModalSkinImage>
            <img src="" alt="" class="imageEnlarge" id="imageEnlarge">
        </ModalSkinImage>
    </footer>
</template>
  
<script>
import ModalSkinImage from "@/components/ModalSkinImage";

export default {
    components: {
        ModalSkinImage,
    },
    data(){
        return{
            About: [
                {tit:'회사명', cont:'코웰패션 주식회사'},
                {tit:'대표', cont:'임종민'},
                {tit:'주소', cont:'서울 영등포구 여의대로 108 파크원 파크원타워1 42층'},
                {tit:'고객센터', cont:'02-6390-8000 > 내선 3번'},
                {tit:'영업시간', cont:'10:00 AM - 17:00 PM (점심시간 : 12:00PM  - 13:00PM)'},
                {tit:'휴무', cont:'토요일 / 일요일 / 공휴일'},
                {tit:'사업자 등록번호', cont:'553-85-00059', cont_link:'<a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=5538500059&amp;apv_perm_no=" target="_blank" class="btn square-text">[사업자정보확인]</a>'},
                {tit:'통신판매신고번호', cont:'제2022-서울영등포-0363호'},
                {tit:'상표등록번호', cont:'2006-0064011호'},
                {tit:'개인정보관리 책임자', cont:'신현창 shc@cowellfashion.co.kr'},
            ],

            Notice: [
                '2023년 2월 카드사 무이자 할부',
                '2023년 1월 카드사 무이자 할부',
                '2022년 12월 카드사 무이자 할부',
                '코웰패션닷컴에서 고객님들께 알립니다.',
            ],

            Service: [
                '<a href="/pc/CC_03_01_01">FAQ</a>',
                '<a href="/pc/MY_02_01_01">배송조회</a>',
                '<a href="/pc/MY_02_02_01">교환 & 반품</a>',
                '<a href="/pc/CC_01_01_01">고객센터</a>'
            ],

            Help: [
                '<a href="/pc/CM_05_01_01">이용약관</a>',
                '<a href="/pc/CM_06_01_01"><strong>개인정보취급방침</strong></a>',
                '<a href="/pc/CM_07_01_01">제휴안내</a>',
                '<a href="/pc/MY_04_01_04">1:1문의하기</a>'
            ],

            Quick: [
                '<a href="#none">사업자정보확인</a>',
                '<a href="#none">에스크로가입사실확인</a>',
                '<a href="#none">SSL 인증서 정보</a>',
            ],
        
        }
    },
    mounted(){
        window.addEventListener('scroll', this.onScroll)
    },
    methods:{
        onScroll () {
            if(window.scrollY < 10){
                document.getElementById('go_top').classList.add('top');
            } else {
                document.getElementById('go_top').classList.remove('top');
            }
        },

        go_top () {
            window.scrollTo({top:0, behavior:'smooth'})
        },
        onClickRedirect(target) {
            window.location.href = target;
        }
    }
}
</script>

<style scoped>
footer {padding-top:20px; border-top:1px solid #eee;}
.footer_wrap {max-width: 1619px; margin:auto; padding-bottom:50px;}
.footer_wrap div {display:flex; justify-content:space-between;}
.footer_wrap .bottom {margin-top:40px; align-items:center;}

.footer_wrap dl {margin-left:80px; justify-content:flex-end;}
.footer_wrap dt {margin-bottom:10px; font-weight:700; line-height:20px;}
.footer_wrap dd {font-size:12px; line-height:24px;}
.footer_wrap .about {width:42.001235%; margin-left:0; color:#666; flex:1;}
.footer_wrap .about ul {margin-left:-10px;}
.footer_wrap .about ul:after {clear:both; content:''; display:block;}
.footer_wrap .about li {padding-left:10px; float:left;}
.footer_wrap .about strong {font-weight:400;}
footer .quick, footer .sns {display:flex;}
footer .quick li {margin-right:30px;}
footer::v-deep .quick a {font-weight:700;}
footer .sns li {margin-left:20px;}
footer .sns a {width:40px; height:40px; font-size:0; background-image:url('@/assets/images/pc/common/icon_footer_sns.png'); background-color:#bbb; background-repeat:no-repeat; background-size:40px auto; border-radius:50%; display:block;}
footer .sns .facebook a {background-position:0 0;}
footer .sns .instagram a {background-position:0 -50px;}
footer .sns .kakao a {background-position:0 -100px;}

#go_top {width:46px; height:46px; font-size:0; background-color:#fff; background-image:url('@/assets/images/mo/common/icon_top.png'); background-position:50%; background-repeat:no-repeat; background-size:24px; border:1px solid #aaa; border-radius:50%; position:fixed; right:40px; bottom:20px; z-index:1; display:flex; align-items:center; transition:all 0.35s;}
#go_top.top {opacity:0; z-index:-1;}
</style>