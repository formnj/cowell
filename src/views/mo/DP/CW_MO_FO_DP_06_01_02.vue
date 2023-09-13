<template>
    <div class="review_wrap">
        <GoodsItem :item="goods_item[0]" class="type_ver" />
        <div class="review_cont">
            <span class="thumb">
                <em><img :src="reviewCont[0].img" /></em>
            </span>
            <div class="info">
                <ReviewScore class="type_color" :item="reviewCont[0].reivewScore" />
                <span>{{ reviewCont[0].id }}</span>
                <span>{{ reviewCont[0].date }}</span>
                <p>{{ reviewCont[0].info}}</p>
            </div>
            <div v-if="reviewCont[0].review" class="review" v-html="reviewCont[0].review"></div>
        </div>
    </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem.vue";
import ReviewScore from "@/components/ReviewScore.vue";
export default {
    components: {
        GoodsItem,
        ReviewScore,
    },
    props: {},
    data(){
        return {
            reviewCont:[
                {
                    img:require("@/assets/images/pc/sample/sam_goods01.png"),
                    review:'사이즈 잘 맞아요 색상 사진과 비슷해요.<br/>'
                            +'실물이 훨씬 이쁘고 핏도 좋아요.<br/>'
                            +'커플로 입으려고 샀는데 엄마한테도 잘어울려서 사드릴까'
                            +'고민중이에요.<br/>'
                            +'친구들이 너무 잘어울린다고 해서 기분이 좋네요.',
                    reivewScore:2.5,
                    id: 'asdsa***',
                    date: '2023.01',
                    info: '신체 정보 : 키 172cm 몸무게 53kg 상의 M 하의 28inch'
                }
            ],
            goods_item: [
                {
                    img:require("@/assets/images/pc/sample/sam_goods_list_02.jpg"),
                    brand: "Nike", tit:"나이키 에어",
                    price:"250,000",
                    discount:"45%",
                },
            ],
        }
    },
};
</script>

<style scoped>
.review_wrap::v-deep .goods_item {margin-bottom:16px;}
.review_wrap::v-deep .goods_item .thumb {width:70px; margin-right:18px; padding-top:104.56%;}
.info {margin-top:20px; padding-top:9px; color:#888; font-size:12px; line-height:16px; position:relative;}
.info > span {display:inline-block;}
.info > span + span {margin-left:20px;}
.info > p {margin-top:10px;}
.info .review_score {position:absolute; top:0; right:0;}
.info::v-deep .review_score p + span {display:none;}
.review {margin-top:20px; padding-top:20px; color:#666; font-size:12px; line-height:16px; border-top:1px solid #ddd;}
</style>