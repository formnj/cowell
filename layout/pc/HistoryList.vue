<template>
    <div id="history">
        <div class="title_wrap">
            <strong class="title">Shopping History</strong>
            <button type="button" class="close_history" @click.prevent="closeHistory">닫기</button>
        </div>
        <template v-if="historyLength">
            <div class="history_list">
                <div class="pb10 pl20 pr20 align_right">
                  <button type="button" class="button_delete_all" @click="productDeleteAll">전체 삭제</button>
                </div>
                <ul>
                  <template v-for="(item, index) in historyList">
                    <li :key="index" v-if="item.active">
                      <a href="" class="link">
                        <span class="image">
                          <img :src="item.image" :alt="item.title">
                        </span>
                        <div class="text">
                          <strong class="title">{{ item.title }}</strong>
                          <p class="paragraph">{{ item.paragraph }}</p>
                        </div>
                      </a>
                      <button type="button" class="button_delete" @click="productDelete(index)">상품삭제</button>
                    </li>
                  </template>
                </ul>
            </div>
        </template>
        <template v-else>
        <div class="product_empty">
            <p>
            최근 본 상품이 없습니다
            </p>
        </div>
        </template>
    </div>
</template>

<script>
export default {
    data () {
        return {
            historyLength: 0,
            // History List
            historyList: [
                { image: require("@/assets/images/mo/sample/sam_hot_01.png"), title: "FIFA OLP", paragraph: "22FW 푸마 스포츠 남성 네오 보머 재킷 1종(블랙) PSMEJEM01 푸마 스포츠", active: true },
                { image: require("@/assets/images/mo/sample/sam_hot_02.png"), title: "Long Brand NameLong Brand NameLong Brand NameLong Brand Name", paragraph: "23 바나나리퍼블릭 혼성 라운지웨어 3종 세트(멜란지오트밀) BNUY3BN0323 바나나리퍼블릭 혼성 라운지웨어 3종 세트(멜란지오트밀) BNUY3BN0323 바나나리퍼블릭 혼성 라운지웨어 3종 세트(멜란지오트밀) BNUY3BN0323 바나나리퍼블릭 혼성 라운지웨어 3종 세트(멜란지오트밀) BNUY3BN0323 바나나리퍼블릭 혼성 라운지웨어 3종 세트(멜란지오트밀) BNUY3BN03", active: true },
                { image: require("@/assets/images/mo/sample/sam_hot_03.png"), title: "NASA", paragraph: "22FW 아디다스 스포츠 남성 에센셜 트랙수트 상의 1종(네이비) ADMEJBM02", active: true },
                { image: require("@/assets/images/mo/sample/sam_hot_04.png"), title: "BBC", paragraph: "22FW 리복 스포츠 남성 푸퍼패딩 1종(멜란지 브라운) RAMEJEM06", active: true },
                { image: require("@/assets/images/mo/sample/sam_hot_05.png"), title: "FIFA OLP", paragraph: "22FW 아워플레이스 헤리티지 볼캡 (다크그레이) OP2ACA04U", active: true },
                { image: require("@/assets/images/mo/sample/sam_hot_06.png"), title: "Ourplace", paragraph: "캘빈클라인 퍼포먼스 남성 아이코닉 반팔 티셔츠 (블랙) RMKTSL54", active: true },
            ],
        }
    },
    beforeMount () {
        this.countHistoryListLength()
    },
    methods: {
        closeHistory () {
            const history = document.getElementById('history')
            history.classList.remove('active')
        },
        productDelete (index) {
            this.historyList[index].active = false
            this.countHistoryListLength()
        },
        productDeleteAll () {
            for (let item of this.historyList) {
                item.active = false
            }
            this.countHistoryListLength()
        },
        countHistoryListLength () {
            this.historyLength = 0
            for (let item of this.historyList) {
                if (item.active) {
                    this.historyLength++
                }
            }
        }
    },
}
</script>

<style>

</style>