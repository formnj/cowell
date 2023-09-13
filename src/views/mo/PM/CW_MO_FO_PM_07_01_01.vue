<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title al">이벤트</strong>
        </h2>
        
        <div class="detail_event">
            <div class="title_box">
                <div class="text">
                    <strong class="title">이벤트 제목이 나옵니다. 이벤트 제목이 나옵니다. 이벤트 제목이 나옵니다. </strong>
                    <span class="period">2023. 02. 28 ~ 2023. 03. 10</span>
                </div>
                <div class="buttons">
                    <button type="button" class="button_share" @click.prevent="openModal('modalSkin'), modalTitle='공유하기', modalContent='ModalShare'">공유하기</button>
                </div>
            </div>

            <div class="content_box">
                <img src="https://m.cowellfashion.com/data/editor/7c0e7c6e2ad56bc2fe47ab230d3265671737595.jpg" alt="">
            </div>

            <div class="reply_box">
                <button type="button" class="button_write" @click.prevent="openModal('modalSkin'), modalTitle='댓글쓰기', modalContent='ModalReply'">댓글쓰기</button>
                <div class="reply_top">
                    <span class="tit"><em>999</em>개의 댓글</span>
                </div>
                <div class="reply_list">
                    <ul>
                        <li>
                            <div class="reply_card">
                                <div class="info">
                                    <span class="nickname">jwy***</span>
                                    <span class="date">2023-12-14</span>
                                </div>
                                <div class="text">
                                    <p>15%당첨. 아우터 장인 나이스클랍 올 겨울 신상도 기대되네요.</p>
                                </div>
                                <div class="buttons">
                                    <button type="button">수정</button>
                                    <button type="button">삭제</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="reply_card">
                                <div class="info">
                                    <span class="nickname">jwy***</span>
                                    <span class="date">2023-12-14</span>
                                </div>
                                <div class="text">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias corrupti quis minima modi. Earum, facilis vitae tenetur nulla esse officia laborum! Voluptatum, commodi natus. Sunt, fugiat. Et delectus consequatur alias.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        <ModalSkin
            :modalTitle="modalTitle"
            :modalClass="
                modalContent === 'ModalReply' ? 'bottom' : ''
            "
        >
            <!-- 공유하기 -->
            <ModalShare v-if="modalContent === 'ModalShare'"></ModalShare>

            <!-- 댓글쓰기 -->
            <ModalReply v-if="modalContent === 'ModalReply'"></ModalReply>
            <div class="btnSection" v-if="modalContent === 'ModalReply'">
                <a href="" class="btn_big btn_cancel">
                    <em>취소</em>
                </a>
                <a href="" class="btn_big btn_default">
                    <em>확인</em>
                </a>
            </div>
        </ModalSkin>

    </div>
</template>

<script>
import ModalSkin from '@/components/ModalSkin'

import ModalShare from '@/views/mo/PM/CW_MO_FO_PM_07_03_01' // 공유하기
import ModalReply from '@/views/mo/PM/CW_MO_FO_PM_07_02_01' // 댓글쓰기

export default {
    data () {
        return {
            modalTitle: '',
            modalContent: '',
        }
    },
    components: {
        ModalSkin,
        ModalShare,
        ModalReply,
    },
    methods: {
        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
    },
}
</script>

<style>
</style>