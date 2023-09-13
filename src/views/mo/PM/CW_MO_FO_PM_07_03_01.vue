<template>
  <div>
    <ul class="sso_wrap mt0">
        <!-- 23.04.06 수정 -->
        <li class="kakao">
            <a href="#none">카카오</a>
        </li>
        <li class="facebook">
            <a href="#none">facebook</a>
        </li>
        <li class="url">
            <a href="#none">url</a>
        </li>
        <!-- <li class="naver">
            <a href="#none">네이버</a>
        </li>
        <li class="apple">
            <a href="#none">애플</a>
        </li>
        <li class="google">
            <a href="#none">구글</a>
        </li> -->
        <!-- //23.04.06 수정 -->
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sso_wrap li + li {margin-left:30px;}
</style>