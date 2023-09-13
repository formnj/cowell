<template>
    <div>
        <GoodsItem class="type_ver" :item="goods_item[0].main_item[0]" />
        <dl class="option_wrap">
            <dt>색상 옵션 : BEIGE</dt>
            <dd>
                <ul class="list color">
                    <li v-for="(item, index) in goods_item[0].options[0].color" :key="index">
                        <label>
                            <input type="radio" /><!-- 23.04.28 check → radio 수정 -->
                            <span class="thumb">
                                <em><img :src="item.img" alt="" /></em>
                            </span>
                            <span>{{ item.color }}</span>
                        </label>
                    </li>
                </ul>
            </dd>
            <dt>사이즈 <em>사이즈 가이드</em></dt>
            <dd>
                <ul class="list size">
                    <li v-for="(item, index) in goods_item[0].options[0].size" :key="index">
                        <Inputs input_type="radio" :text="item" /><!-- 23.04.28 check → radio 수정 -->
                        <!-- <span>{{ item }}</span> -->
                    </li>
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue';
import GoodsList from '@/components/GoodsList.vue';
import Inputs from '@/components/Inputs.vue';

    export default {
        name: 'App',
        components: {
            GoodsItem,
            GoodsList,
            Inputs,
        },
        data() {
            return {
                goods_item: [
                    {
                        main_item :[
                            {
                                img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"),
                                brand: "Nike", tit:"나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어",
                            },
                        ],
                        options:[
                            {
                                color:[
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), color:'GRAY'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), color:'BLACK'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_03.jpg"), color:'MIX'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_03.jpg"), color:'RED'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), color:'PINK'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), color:'PURPLE'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), color:'GRAY'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), color:'BLACK'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_03.jpg"), color:'MIX'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_03.jpg"), color:'RED'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"), color:'PINK'},
                                    {img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"), color:'PURPLE'},
                                ],
                                size:['55','60','65','70','75','80','85','90','95','100','105','110'],
                            }
                        ],
                    }
                ],
            };
        },
        methods: {
            increase (event, index){
                if(this.cart[index].status != 'soldout'){
                    this.cart[index].count += 1
                }
            },
        }
    }
</script>

<style scoped>
.type_ver {align-items:center;}
.type_ver::v-deep .thumb {width:140px;}
.type_ver::v-deep .cont {margin-left:40px;}
.type_ver::v-deep .title strong {font-size:16px;}
.type_ver::v-deep .title span {color:#222; font-size:20px;}

.option_wrap dt {margin-top:40px; margin-bottom:22px; font-size:16px; font-weight:500; position:relative;}
.option_wrap dt em {color:#888; font-size:12px; position:absolute; top:3px; right:0; display:block;}
.option_wrap dd {padding-right:10px; padding-bottom:10px; overflow:auto;}

.option_wrap dd::-webkit-scrollbar {width:6px; height:6px;}

.option_wrap dd::-webkit-scrollbar-thumb {background:rgba(0,0,0,0); border-radius: 10px; background-clip: padding-box;}
.option_wrap dd:hover::-webkit-scrollbar-thumb {background:rgba(0,0,0,0.2);}

.option_wrap dd::-webkit-scrollbar-track {background-color:rgba(0,0,0,0); border-radius:2px;}
.option_wrap dd:hover::-webkit-scrollbar-track {background-color:#eee; border-radius:2px;}


.option_wrap .list {white-space:nowrap; text-align:center;}

.option_wrap .list.color {max-height:327px; margin-top:-10px; margin-left:-10px; display:flex; flex-wrap:wrap;}
.option_wrap .list.color li {width:20%; padding-top:10px; padding-left:10px;}
.option_wrap .list.color label {position:relative;}
.option_wrap .list.color input {position:absolute; top:10px; right:10px; z-index:-1;}
.option_wrap .list.color input:checked + .thumb:before {border:2px solid #00C294; content:''; position:absolute; top:0; right:0; bottom:0; left:0; z-index:1;}

.option_wrap .list.color .thumb {margin-bottom:12px; padding-top:132.075471%; display:block;}
.option_wrap .list.color .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}

.option_wrap .list.size {margin-left:-14px;}
.option_wrap .list.size li {padding-left:14px; white-space:nowrap; display:inline-block;}
.option_wrap .list.size .check {padding:0;}
.option_wrap .list.size .check input {z-index:-1;}
.option_wrap .list.size::v-deep .label {padding:3px 16px; background-color:#fff; border:1px solid #ddd; text-align:center;}
.option_wrap .list.size::v-deep .check input {z-index:-1;}
.option_wrap .list.size::v-deep .check input:checked + .label {color:#fff; background-color:#00C294; border-color:#00C294;}

.option_wrap .list.size::v-deep .label:before, .option_wrap .list.size::v-deep .label:after {display:none !important;}
</style>