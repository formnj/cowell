<template>
    <div class="event_promotion">
        <h2>이벤트</h2>

        <div class="detail_event">
            <div class="title_box">
                <div class="text">
                    <strong class="title">이벤트 제목이 나옵니다. 이벤트 제목이 나옵니다. 이벤트 제목이 나옵니다. </strong>
                    <span class="period">2023. 02. 28 ~ 2023. 03. 10</span>
                </div>
                <div class="buttons">
                    <button type="button" class="button_share" @click.prevent="openModal('modalSkin'), modalTitle='공유하기', modalContent='ModalShare', modalClass=''">공유하기</button>
                </div>
            </div>

            <div class="content_box">
                <img src="https://m.cowellfashion.com/data/editor/7c0e7c6e2ad56bc2fe47ab230d3265671737595.jpg" alt="">
            </div>

            <div class="reply_box">
                <div class="reply_top">
                    <span class="tit">댓글쓰기</span>
                </div>
                <div class="flex_box">
                    <label class="textarea_label" for="writeReply">
                        <textarea
                            id="writeReply"
                            class="textarea"
                            placeholder="이벤트 댓글에 적합하지 않은 내용, 욕설 또는 비방 등의 내용은 통보 없이 삭제 될 수 있습니다. (최소 10자 이상 등록)"
                            v-model="message"
                            @keyup="onCountMessage"
                            :maxlength="maxCount"
                        ></textarea>
                        <div class="text_count">
                            <span class="count"><em>{{ count }}</em>/{{ maxCount }}</span>
                        </div>
                    </label>
                    <button type="button" class="textarea_write">등록</button>
                </div>

                <!-- <button type="button" class="button_write" @click.prevent="openModal('modalSkin'), modalTitle='댓글쓰기', modalContent='ModalReply'">댓글쓰기</button> -->
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
                                    <button type="button" @click.prevent="openModal('modalSkin'), modalTitle='댓글쓰기', modalContent='ModalReply', modalClass=''">수정</button>
                                    <button type="button" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='ModalReplyDelete', modalClass='tight'">삭제</button>
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
            :modalClass="modalClass"
        >
            <!-- 공유하기 -->
            <ModalShare v-if="modalContent === 'ModalShare'"></ModalShare>

            <!-- 댓글쓰기 -->
            <ModalReply v-if="modalContent === 'ModalReply'"></ModalReply>
            <div class="btnSection" v-if="modalContent === 'ModalReply'">
                <a href="#none" class="btn_mid btn_cancel"><em>취소</em></a>
                <a href="#none" class="btn_mid btn_default"><em>확인</em></a>
            </div>

            <!-- 댓글삭제 -->
            <p class="align_center" v-if="modalContent === 'ModalReplyDelete'">댓글을 삭제하시겠습니까?</p>
            <div class="btnSection" v-if="modalContent === 'ModalReplyDelete'">
                <a href="#none" class="btn_mid btn_cancel"><em>취소</em></a>
                <a href="#none" class="btn_mid btn_default"><em>확인</em></a>
            </div>
        </ModalSkin>

    </div>
</template>

<script>
import ModalSkin from '@/components/ModalSkin'

import ModalShare from '@/views/pc/PM/CW_PC_FO_PM_07_03_01' // 공유하기
import ModalReply from '@/views/pc/PM/CW_PC_FO_PM_07_02_01' // 댓글쓰기

export default {
    data () {
        return {
            modalTitle: '',
            modalContent: '',
            modalClass: '',
            message: '',
            count: 0,
            maxCount: 100,
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
        onCountMessage () {
            this.count = this.message.length
        },
    },
}
</script>

<style scoped>
.text_count{padding-top:0;margin:-15px 0 0 0;}
.textarea_label{padding:12px;flex:1;}
.textarea_label .textarea{min-height:80px;font-size:16px;}
.textarea_write{flex:0;width:160px;height:112px;margin-left:15px;font-size:18px;font-weight:700;color:#fff;flex-basis:160px;background:#222;} 
.reply_card > .buttons button{margin-left:20px;color:#222;text-decoration:underline;}
.reply_card > .buttons button:before{content:none;}
</style>