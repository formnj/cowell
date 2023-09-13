<template>
    <div>
        <div class="content mypage">
            <div class="layout left">
                <div class="lnb">
                    <ul>
                        <li>
                            <a href="">나의 쇼핑</a>
                            <ul>
                                <li><a href="">주문/배송</a></li>
                                <li><a href="">반품/교환</a></li>
                                <li><a href="">취소/환불</a></li>
                                <li><a href="">선물함</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 혜택</a>
                            <ul>
                                <li><a href="">쿠폰 내역</a></li>
                                <li><a href="">포인트 내역</a></li>
                                <li><a href="">임직원 혜택</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 활동</a>
                            <ul>
                                <li><a href="">1:1 문의 </a></li>
                                <li><a href="">상품 문의</a></li>
                                <li><a href="">상품리뷰</a></li>
                                <li><a href="">관심 상품</a></li>
                                <li><a href="">관심 브랜드</a></li>
                                <li><a href="">최근 본 상품</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">나의 정보</a>
                            <ul>
                                <li><a href="">회원정보 수정</a></li>
                                <li><a href="">간편로그인 연결</a></li>
                                <li><a href="">회원등급 안내</a></li>
                                <li><a href="">배송지 관리</a></li>
                                <li><a href="">회원탈퇴</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="layout right">
                <h2>회원등급안내</h2>

                <div class="section_group">
                    <div class="section pt0 pb0">
                        <div class="member_grade_top">
                            <div class="icon">
                                <span class="icon_grade large welcome"></span>
                                <span class="tag">welcome</span>

                                <!-- <span class="icon_grade large silver"></span>
                                <span class="tag">silver</span> -->

                                <!-- <span class="icon_grade large gold"></span>
                                <span class="tag">gold</span> -->

                                <!-- <span class="icon_grade large vip"></span>
                                <span class="tag">vip</span> -->

                                <!-- <span class="icon_grade large vvip"></span>
                                <span class="tag">vvip</span> -->
                            </div>
                            <div class="text">
                                <strong class="name">양재원</strong>
                                <p class="paragraph">고객님의 현재 등급은 <em>welcome</em>입니다.</p>
                                <p class="subscript">이번달 <em>270,000원</em> 추가 구매 시 다음달 <em>silver등급</em>이 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section_group">
                    <div class="section">
                        <h3 class="align_center">회원등급별 혜택안내</h3>

                        <div class="benefit_wrap">
                            <masonry :cols="2" :gutter="{default: '100px'}">
                                <div class="accordion_box">
                                    <dl>
                                        <dt>
                                            <button type="button" class="button_toggle pl0" @click.prevent="accordionToggle($event)">
                                                <span class="icon_grade welcome"></span>
                                                <span class="pl10">welcome회원</span>
                                            </button>
                                        </dt>
                                        <dd>
                                            <div class="inner">
                                                <div class="list_bullet">
                                                    <strong class="title">등급 산정 조건</strong>
                                                    <ul>
                                                        <li class="no_bt">구매실적 5만원 미만</li>
                                                    </ul>
                                                    <strong class="title">구매적립 포인트</strong>
                                                    <ul>
                                                        <li class="no_bt">실 결제금액 3%적립(정상) / 1%적립(이월)</li>
                                                    </ul>
                                                    <strong class="title">할인 쿠폰</strong>
                                                    <ul>
                                                        <li>[전 상품] 신규가입 쿠폰 20% 1매 <br>(3만원이상, 최대 1만원)</li>
                                                        <li>[무료배송] 쿠폰 1매</li>
                                                    </ul>
                                                    <strong class="title">신규 가입 혜택</strong>
                                                    <ul>
                                                        <li>(기본) 3천원 즉시 적립</li>
                                                        <li>마케팅 수신동의시 2천원 추가 적립</li>
                                                    </ul>
                                                </div>
                                                <p class="info_explain">WELCOME 등급 혜택은 <br>발급 30일내 사용이 가능합니다.</p>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="accordion_box">
                                    <dl>
                                        <dt>
                                            <button type="button" class="button_toggle pl0" @click.prevent="accordionToggle($event)">
                                                <span class="icon_grade silver"></span>
                                                <span class="pl10">silver회원</span>
                                            </button>
                                        </dt>
                                        <dd>
                                            <div class="inner">
                                                <div class="list_bullet">
                                                    <strong class="title">등급 산정 조건</strong>
                                                    <ul>
                                                        <li class="no_bt">구매실적 5만원 이상 30만원 미만</li>
                                                    </ul>
                                                    <strong class="title">구매적립 포인트</strong>
                                                    <ul>
                                                        <li class="no_bt">실 결제금액 3%적립(정상) / 1%적립(이월)</li>
                                                    </ul>
                                                    <strong class="title">할인 쿠폰</strong>
                                                    <ul>
                                                        <li>[정상] 10% 상품쿠폰 1매 <br>(3만원이상, 최대 1만원)</li>
                                                        <li>[아울렛] 5% 상품쿠폰 1매 <br>(2만원이상, 최대 5천원)</li>
                                                        <li>[무료배송] 쿠폰 1매</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="accordion_box">
                                    <dl>
                                        <dt>
                                            <button type="button" class="button_toggle pl0" @click.prevent="accordionToggle($event)">
                                                <span class="icon_grade gold"></span>
                                                <span class="pl10">gold회원</span>
                                            </button>
                                        </dt>
                                        <dd>
                                            <div class="inner">
                                                <div class="list_bullet">
                                                    <strong class="title">등급 산정 조건</strong>
                                                    <ul>
                                                        <li class="no_bt">구매실적 30만원 이상 50만원 미만</li>
                                                    </ul>
                                                    <strong class="title">구매적립 포인트</strong>
                                                    <ul>
                                                        <li class="no_bt">실 결제금액 5%적립(정상) / 2%적립(이월)</li>
                                                    </ul>
                                                    <strong class="title">할인 쿠폰</strong>
                                                    <ul>
                                                        <li>[정상] 15% 상품쿠폰 1매 <br>(3만원이상, 최대 1만5천원)</li>
                                                        <li>[아울렛] 5% 상품쿠폰 1매 <br>(2만원이상, 최대 5천원)</li>
                                                        <li>[무료배송] 쿠폰 2매</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="accordion_box">
                                    <dl>
                                        <dt>
                                            <button type="button" class="button_toggle pl0" @click.prevent="accordionToggle($event)">
                                                <span class="icon_grade vip"></span>
                                                <span class="pl10">vip회원</span>
                                            </button>
                                        </dt>
                                        <dd>
                                            <div class="inner">
                                                <div class="list_bullet">
                                                    <strong class="title">등급 산정 조건</strong>
                                                    <ul>
                                                        <li class="no_bt">구매실적 50만원 이상</li>
                                                    </ul>
                                                    <strong class="title">구매적립 포인트</strong>
                                                    <ul>
                                                        <li class="no_bt">실 결제금액 7%적립(정상) / 3%적립(이월)</li>
                                                    </ul>
                                                    <strong class="title">할인 쿠폰</strong>
                                                    <ul>
                                                        <li>[정상] 20% 상품쿠폰 1매 <br>(5만원이상, 최대 2만원)</li>
                                                        <li>[아울렛] 10% 상품쿠폰 1매 <br>(3만원이상, 최대 1만원)</li>
                                                        <li>[무료배송] 쿠폰 3매</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="accordion_box">
                                    <dl>
                                        <dt>
                                            <button type="button" class="button_toggle pl0" @click.prevent="accordionToggle($event)">
                                                <span class="icon_grade vvip"></span>
                                                <span class="pl10">vvip회원</span>
                                            </button>
                                        </dt>
                                        <dd>
                                            <div class="inner">
                                                <div class="list_bullet">
                                                    <strong class="title">등급 산정 조건</strong>
                                                    <ul>
                                                        <li class="no_bt">구매실적 100만원 이상</li>
                                                    </ul>
                                                    <strong class="title">구매적립 포인트</strong>
                                                    <ul>
                                                        <li class="no_bt">실 결제금액 7%적립(정상) / 3%적립(이월)</li>
                                                    </ul>
                                                    <strong class="title">할인 쿠폰</strong>
                                                    <ul>
                                                        <li>[정상] 20% 상품쿠폰 2매 <br>(5만원이상, 최대 2만원)</li>
                                                        <li>[아울렛] 10% 상품쿠폰 2매 <br>(3만원이상, 최대 1만원)</li>
                                                        <li>[무료배송] 쿠폰 3매</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </masonry>
                        </div>

                        <div class="half_column_box_float">

                            
                        </div>
                    </div>

                    <div class="section">
                        <h3 class="pl0">회원등급 정책</h3>
                        <div class="gray_box pl40">
                            <table>
                                <tbody>
                                    <tr>
                                        <th class="align_left" width="150px">등급 반영 일자</th>
                                        <td>매월 1일</td>
                                    </tr>
                                    <tr>
                                        <th class="align_left">등급 산정 기간</th>
                                        <td>전월 말일까지 최근 6개월 실제결제금액</td>
                                    </tr>
                                    <tr>
                                        <th class="align_left">등급 유지 기간</th>
                                        <td>승급 후 6개월 유지, 매월 실적 산정 후 상위 등급으로 승급 가능</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4 class="pt30 pb10">
                                <strong class="title light">전회원 공통 혜택</strong>
                            </h4>
                            <table>
                                <tbody>
                                    <tr>
                                        <th class="align_left" width="150px">생일쿠폰</th>
                                        <td>[정상] 10,000원 상품쿠폰 X 1매</td>
                                    </tr>
                                    <tr>
                                        <th class="align_left">승급 쿠폰</th>
                                        <td>[전상품] 장바구니쿠폰 10% X 1매</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 유의사항 -->
                <div class="section_group no_bd">
                    <div class="section pb0">
                        <h4 class="pt20 pb20">
                            <strong class="title bold">유의사항</strong>
                        </h4>

                        <div class="list_bullet">
                            <ul>
                                <li>매월 1일 등급 산정에 따른 쿠폰이 자동발급 되며, 등급 쿠폰의 소멸기간은 매월 마지막날입니다.</li>
                                <li>승급 쿠폰은 매월 1일 발급되며, 유효기간은 매월 말일 미사용시 소멸됩니다.</li>
                                <li>승급 쿠폰은 등급별 최초 승급시와 재승급시에 지급됩니다.(등급별 6개월에 한번씩 지급됩니다.)</li>
                                <li>승급 쿠폰은 전월대비 등급이 달라질 경우 지급하고, 등급 강등 시에는 미지급합니다.</li>
                                <li>승급후에는 산정기준에 미달하여도 해당등급으로 6개월간 지속되며, WELCOME등급으로 우선 강등후, 실적 산정후 승급 쿠폰이 지급됩니다.</li>
                                <li>2단계이상 승급할경우 승급 쿠폰을 추가로 지급합니다.</li>
                                <li>생일쿠폰의 경우, 생일 15일전 자동 발급되며, 생일후 30일까지 사용가능합니다.</li>
                                <li>가입시 지급되는 신규가입 축하 쿠폰은 가입 즉시 최초 1회 지급되며, 지급후 30일이내 사용 가능합니다.</li>
                                <li>주문건의 취소/환불 발생시 예상 등급과 실제 등급의 차이가 있을 수 있습니다.</li>
                                <li>일부 상품 및 카테고리는 쿠폰 적용이 불가할 수 있으며 사용기간 및 적용 대상이 변경 될 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        accordionToggle (event) {
            console.log(event.currentTarget.parentNode)
            event.currentTarget.parentNode.classList.toggle('active')
        },
    },
}
</script>

<style scoped>
.accordion_box{border:none;}
.accordion_box .icon_grade + span{line-height:40px;text-transform:uppercase;}
.accordion_box > dl > dt > .button_toggle{border:none;}
.accordion_box > dl > dd > .inner{padding:0 20px 20px 50px;border:none;}
.benefit_wrap{width:800px;padding-top:50px;margin:0 auto;}
</style>