<template>
    <div>
        <button class="new_shiiping" @click.prevent="openModal('modalSkin'), modalTitle='배송지 추가', modalContent='Addshipping'">신규배송지 등록</button>
        <ul>
            <li v-for="(item, index) in address" :key="index" :class="{'active': item.checked == 'checked'}">
                <Inputs input_type="radio" :text="item.value" :checked="item.checked" />
                <div>
                    <strong>[{{ item.post_no }}]</strong>
                    <span>{{ item.address1 }}</span>
                    <p>
                        <em>{{ item.name }}</em>
                        {{ item.phone }}
                    </p>
                </div>
                <button class="btn_min btn_info"><em>수정</em></button>
            </li>
        </ul>
        <Inputs input_type="checkbox" text="기본배송지 등록" />

        <ModalSkin :modalTitle="modalTitle" :modalClass="'full'">
            <Addshipping />
        </ModalSkin>
    </div>
</template>

<script>
import Inputs from '@/components/Inputs.vue';

import ModalSkin from "@/components/ModalSkin";
import Addshipping from "@/views/mo/OD/CW_MO_FO_OD_02_03_02";

    export default {
        name: 'App',
        components: {
            Inputs,

            ModalSkin,
            Addshipping,
        },
        data() {
            return {
                address:[
                    {
                        value:'집',
                        post_no:'06168',
                        address1:'서울특별시 강남구 삼성로 512(삼성동) 삼성동빌딩',
                        name:'김나나',
                        phone:'010-1234-5678',
                    },
                    {
                        value:'회사',
                        post_no:'06168',
                        address1:'경기도 용인시 오리로697 창우현대아파트 102동 1003호',
                        name:'김나나',
                        phone:'010-1234-5678',
                        checked:'checked'
                    },
                    {
                        value:'회사2',
                        post_no:'06168',
                        address1:'서울특별시 강남구 삼성로 512(삼성동) 삼성동빌딩',
                        name:'김나나',
                        phone:'010-1234-5678'
                    },
                ],
                modalTitle: '',
                modalContent: '',
            };
        },
        methods: {
            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },
        }
    }
</script>

<style scoped>
ul {margin-top:20px; border-bottom:1px solid #ddd;}
ul + .check {margin-top:20px; font-size:16px !important;}
li {padding:20px 0; border-top:1px solid #ddd; position:relative;}
li div {margin-top:10px; color:#888; font-size:14px;}
li div strong {margin-right:5px; font-weight:400;}
li div p {margin-top:20px; color:#222;}
li::v-deep .label {color:#222; font-weight:700;}
li.active::v-deep .label {font-weight:700;}
li .btn_info {height:38px; padding:0 25px; font-size:14px; line-height:36px; border-color:#ddd; position:absolute; bottom:20px; right:0;}
li .btn_info em {font-weight:400;}

.new_shiiping {padding-right:11px; font-size:14px; position:relative;}
.new_shiiping:after {width:7px; height:7px; margin-top:-3px; margin-left:10px; border:1px solid #888; border-bottom:0; border-left:0; content:''; position:absolute; top:50%; right:0; display:inline-block; transform:rotate(45deg);}

::v-deep .label {font-size:14px !important;}
</style>