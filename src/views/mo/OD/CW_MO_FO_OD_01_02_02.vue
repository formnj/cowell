<template>
    <div>
        <dl class="option_wrap">
            <dt>색상 옵션 <em>BEIGE</em></dt>
            <dd>
                <ul class="list color">
                    <li v-for="(item, index) in goods_item[0].options[0].color" :key="index">
                        <label>
                            <input type="checkbox" />
                            <span class="thumb">
                                <em><img :src="item.img" alt="" /></em>
                            </span>
                        </label>
                    </li>
                </ul>
            </dd>
            <dt>사이즈 <em>사이즈 가이드</em></dt>
            <dd>
                <ul class="list size">
                    <li v-for="(item, index) in goods_item[0].options[0].size" :key="index">
                        <Inputs input_type="checkbox" :text="item" />
                        <!-- <span>{{ item }}</span> -->
                    </li>
                </ul>
            </dd>
            <dt>수량</dt>
            <dd class="count">
                <button class="btn_minus" @click.prevent="decrease($event)">감소</button>
                <Inputs input_type="number" :value="count" />
                <button class="btn_plus" @click.prevent="increase($event)">추가</button>
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
                count:2,
            };
        },
        methods: {
            increase (event){
                this.count += 1
            },
            decrease (event){
                if(this.count > 1){
                    this.count -= 1
                }
            },
        }
    }
</script>

<style scoped>

.thumb {position:relative;}
.type_ver {align-items:center;}
.type_ver::v-deep .thumb {width:140px;}
.type_ver::v-deep .cont {margin-left:40px;}
.type_ver::v-deep .title strong {font-size:16px;}
.type_ver::v-deep .title span {color:#222; font-size:20px;}

.option_wrap dt {margin-top:40px; margin-bottom:22px; font-size:14px; font-weight:500; position:relative;}
.option_wrap dt em {color:#888; font-size:12px; position:absolute; top:3px; right:0; display:block;}
.option_wrap dd {padding-right:10px; padding-bottom:10px; overflow:auto;}

.option_wrap dd::-webkit-scrollbar {width:6px; height:6px;}

.option_wrap dd::-webkit-scrollbar-thumb {background:rgba(0,0,0,0); border-radius: 10px; background-clip: padding-box;}
.option_wrap dd:hover::-webkit-scrollbar-thumb {background:rgba(0,0,0,0.2);}

.option_wrap dd::-webkit-scrollbar-track {background-color:rgba(0,0,0,0); border-radius:2px;}
.option_wrap dd:hover::-webkit-scrollbar-track {background-color:#eee; border-radius:2px;}


.option_wrap .list {white-space:nowrap; text-align:center;}

.option_wrap .list.color {margin-top:-5px; margin-left:-5px; display:flex; flex-wrap:wrap;}
.option_wrap .list.color li {width:25%; padding-top:5px; padding-left:5px;}
.option_wrap .list.color label {position:relative;}
.option_wrap .list.color input {position:absolute; top:10px; right:10px; z-index:-1;}
.option_wrap .list.color input:checked + .thumb:before {border:2px solid #00C294; content:''; position:absolute; top:0; right:0; bottom:0; left:0; z-index:1;}
.option_wrap .list.color .thumb {padding-top:130%; display:block;}
.option_wrap .list.color .thumb em {position:absolute; top:0; right:0; bottom:0; left:0;}

.option_wrap .list.size {margin-left:-14px;}
.option_wrap .list.size li {padding-left:14px; white-space:nowrap; display:inline-block;}
.option_wrap .list.size .check {padding:0;}
.option_wrap .list.size .check input {z-index:-1;}
.option_wrap .list.size::v-deep .label {padding:3px 16px 1px; font-size:16px; line-height:24px; background-color:#fff; border:1px solid #ddd; text-align:center;}
.option_wrap .list.size::v-deep .check input {z-index:-1;}
.option_wrap .list.size::v-deep .check input:checked + .label {color:#fff; background-color:#00C294; border-color:#00C294;}

.option_wrap .list.size::v-deep .label:before, .option_wrap .list.size::v-deep .label:after {display:none !important;}

.count {display:flex; align-items:center;}
.count .label_wrap {flex:0;}
.count button, .count::v-deep input, .count .soldout, .count .shortage {border:1px solid #ddd; padding:0; text-align:center; display:block;}
.count [class*='btn'], .count::v-deep input {width:38px !important; height:38px;}
.count [class*='btn'] {font-size:0; position:relative;}
.count .btn_minus {border-right:0;}
.count .btn_plus {border-left:0;}
.count [class*='btn']:before, .count [class*='btn']:after {content:''; position:absolute; top:50%; left:50%; display:block; transform:translate(-50%, -50%)}
.count [class*='btn']:before {width:10px; border-top:2px solid #222;}
.count .btn_plus:after {height:10px; border-left:2px solid #222;}
.count .optionChanger, .count .soldout, .count .shortage {width:auto !important; margin-left:12px; padding:0 20px; line-height:36px;}
.count .soldout {color:#aaa; background-color:#eee; border-color:#ddd;}
.count .shortage {color:#F24F39; background-color:#fff; border-color:#F24F39;}
.count em {margin-left:12px;}
.count em strong {color:#00C294;}
</style>