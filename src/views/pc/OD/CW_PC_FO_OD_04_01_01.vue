<template>
    <div class="content">
        <div class="tit_wrap">
            <h3></h3>

            <div class="step_wrap">
                <span>장바구니</span>
                <span>주문서 작성</span>
                <strong>주문완료</strong>
            </div>
        </div>

        <div class="order_error">
            <h3 class="complete error">주문처리 실패</h3>
                
            <!-- 실패사유 -->
            <h3>실패사유</h3>
            <div class="order_info">
                <div class="list_bullet">
                    <ul>
                        <li>주문처리를 완료하지 못 했습니다. 실패사유를 확인하신 후 재시도를 하시거나, 계속 실패되시는 경우 고객센터로 문의주시기 바랍니다.</li>
                        <li>구매불가 상품이 있는 경우, 해당 상품만 삭제하신 후 계속 주문을 진행하실 수 있습니다.</li>
                    </ul>
                </div>
            </div>
            <!-- //실패사유 -->
        </div>

        <div class="btnSection">
            <a href="#none" class="btn_big btn_cancel"><em>이전 페이지로</em></a>
            <a href="/cowell/" class="btn_big btn_default"><em>쇼핑홈 가기</em></a>
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
        methods: {
        }
    }
</script>

<style scoped>
.tit_wrap h3 {margin-bottom:0; display:block;}

h3 {margin-bottom:20px; display:flex; align-items:center; justify-content:space-between;}
h3 div {display:flex;}

h3.complete {margin-bottom:80px; text-align:center; display:block;}
h3.complete:before {margin:-30px auto 30px; background-position:50%; background-repeat:no-repeat; background-size:contain; content:''; display:block;}
h3.complete.order:before {width:130px; height:118px; background-image:url('@/assets/images/pc/sub/icon_complete_order.png');}
h3.complete.gift:before {width:220px; height:160px; padding-left:23px; background-image:url('@/assets/images/pc/sub/icon_complete_gift.png'); background-position:23px 0;}
h3.complete.error:before {width:220px; height:160px; background-image:url('@/assets/images/pc/sub/icon_complete_error.png');}


.order_info {padding-top:30px; padding-bottom:30px; border-top:1px solid #ddd; border-bottom:1px solid #ddd;}

.btnSection {width:830px; margin:80px auto };
</style>
