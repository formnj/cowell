<template>
    <div class="error_wrap type_404">
        <h1>요청하신 페이지가 존재하지 않습니다.</h1>
        <p>존재하지 않는 주소를 입력하셨거나,<br/> 요청하신 페이지의 주소가 변경 혹은 삭제되어 찾을 수 없습니다.</p>
        <div class="btnSection">
            <a href="/cowell/mo/" class="btn_big btn_default"><em>메인으로 가기</em></a>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {
        },
        data() {
            return {
            }
        },
        mounted(){
        },
        methods:{
        },
    }
</script>

<style scoped>
.error_wrap {padding:100px 20px; text-align:center;}
.error_wrap h1 {font-size:22px;}
.error_wrap p {margin-top:20px; font-size:18px;}
.error_wrap .btnSection {width:250px; margin:50px auto 0;}
.error_wrap.type_404 h1:before {margin-bottom:30px; font-size:80px; font-weight:700; text-align:center; content:'404'; display:block;}
</style>
