<template>
    <div>
        <h2>
            <button class="back"></button>
            주문서 작성
        </h2>
        <div class="content">

            <div class="order_error">
                <h3 class="complete error">주문처리 실패</h3>
                    
                <!-- 실패사유 -->
                <dl class="tip_box">
                    <dt>실패사유  :  재고부족</dt>
                    <dd>
                        <p>문처리를 완료하지 못 했습니다. 실패사유를 확인하신 후 재시도를 하시거나, 계속 실패되시는 경우 고객센터로 문의주시기 바랍니다.</p>
                        <p>구매불가 상품이 있는 경우, 해당 상품만 삭제하신 후 계속 주문을 진행하실 수 있습니다.</p>
                    </dd>
                </dl>
                <!-- //실패사유 -->
            </div>

            <div class="btnSection">
                <a href="#none" class="btn_big btn_cancel"><em>이전 페이지로</em></a>
                <a href="/" class="btn_big btn_default"><em>쇼핑홈 가기</em></a>
            </div>
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
h3 {margin-top:30px; margin-bottom:14px; font-size:14px;}

h3.complete {margin-bottom:60px; text-align:center; display:block;}
h3.complete:before {margin:0 auto 20px; background-position:50%; background-repeat:no-repeat; background-size:contain; content:''; display:block;}
h3.complete.order:before {width:98px; height:88px; background-image:url('@/assets/images/mo/sub/icon_complete_order.png');}
h3.complete.gift:before {width:180px; height:140px; background-image:url('@/assets/images/mo/sub/icon_complete_gift.png'); background-position:3px 0; background-size:cover;}
h3.complete.error {margin-top:0;}
h3.complete.error:before {width:180px; height:140px; background-image:url('@/assets/images/mo/sub/icon_complete_error.png');}


.tip_box {margin-top:30px;}
.tip_box dt {font-size:14px;}

.btnSection {margin-top:60px;}
</style>
