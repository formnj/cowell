<template>
    <div>
        <h2 class="sticky" ref="header">
            <div class="area left">
                <button class="icon backward"></button>
            </div>
            <strong class="title">마이페이지</strong>
            <div class="area right">
                <button class="icon home"></button>
            </div>
        </h2>

        <div class="content pt0">
            <Tabs tabClass="tab_type_default" tabType="slide" :tab_item="tab_item_menu" :tabidx="tabidx" />
    
            <div class="section_group">
                <div class="section pb0">
                    <h4>
                        <a href="" class="arrow">
                            <strong class="title large">양재원님</strong>
                            <span class="light">(GOLD 등급)</span>
                        </a>
                    </h4>
    
                    <div class="my_summary">
                        <!-- 23.04.12 삭제 <p class="paragraph">구매금액 999,999원 달성 시 다음달에 VIP 등급으로 승급됩니다.</p> -->
                        <button type="button" class="button_benefit">회원 등급 혜택 보기</button>
        
                        <div class="count_box pt30">
                            <div class="cell">
                                <span class="title">쿠폰</span>
                                <em class="count">999</em>
                            </div>
                            <div class="cell">
                                <span class="title">포인트</span>
                                <em class="count">99,999,999</em>
                            </div>
                            <div class="cell">
                                <span class="title">관심상품</span>
                                <em class="count">99,999,999</em>
                            </div>
                        </div>
                    </div>
    
                    <div>
                        <h4 class="pt20">
                            <strong class="title bold">한도 내역</strong>
                        </h4>
                        <div class="gray_box pale mt10">
                            <table>
                                <tbody>
                                    <tr>
                                        <th class="al">구매한도</th>
                                        <td class="align_right">999,999,999원</td>
                                    </tr>
                                    <tr>
                                        <th class="al">잔여한도</th>
                                        <td class="align_right">999,999,999원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="section_group pb10 thin_bd">
                <div class="section">
                    <h4>
                        <strong class="title bold">주문/배송 조회</strong>
                    </h4>
                    
                    <div class="order_step_box">
                        <ol>
                            <li>
                                <em class="count">0</em>
                                <span class="title">입금<br>대기</span>
                            </li>
                            <li class="active">
                                <em class="count">1</em>
                                <span class="title">결제<br>완료</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">상품<br>준비중</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">배송<br>준비중</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">배송중</span>
                            </li>
                            <li>
                                <em class="count">0</em>
                                <span class="title">배송<br>완료</span>
                            </li>
                            <li class="active">
                                <em class="count">3</em>
                                <span class="title">구매<br>확정</span>
                            </li>
                        </ol>
                    </div>
                </div>
    
                <div class="section pb0 bd">
                    <h4>
                        <strong class="title bold">최근 주문/배송내역</strong>
                        <span class="sub">(최근 1개월 기준)</span>
                    </h4>
                
                    <div class="order_empty">
                        <p>최근 주문 내역이 없습니다.</p>
                    </div>
    
                    <div class="cart_name">
                        <strong class="name">2023.12.14</strong>
                        <button type="button" class="button_detail">상세보기</button>
                    </div>
    
                    <ul class="cart_list">
                        <li v-for="(item, index) in cart" :key="index" class="goods_item" :class="{'disabled' : item.status == 'soldout'}">
                            <div class="inner">
                                <span class="thumb">
                                    <em><img :src="item.img" /></em>
                                </span>
    
                                <div class="cont">
                                    <a hef="#none" class="title">
                                        <strong class="pl0">{{ item.brand }}</strong>
                                        <span>{{ item.tit }}</span>
                                        <p>
                                            <span v-for="(item, index) in cart[0].option" :key="index">{{ item }},</span> <span>수량 {{ item.quantity }}</span>
                                        </p>
                                    </a>
    
                                    <strong class="price">{{ item.price }}</strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                    <div class="cart_name">
                        <strong class="name">2023.08.31</strong>
                        <button type="button" class="button_detail">상세보기</button>
                    </div>
    
                    <ul class="cart_list">
                        <li v-for="(item, index) in cart" :key="index" class="goods_item" :class="{'disabled' : item.status == 'soldout'}">
                            <div class="inner">
                                <span class="thumb">
                                    <em><img :src="item.img" /></em>
                                </span>
    
                                <div class="cont">
                                    <a hef="#none" class="title">
                                        <strong class="pl0">{{ item.brand }}</strong>
                                        <span>{{ item.tit }}</span>
                                        <p>
                                            <span v-for="(item, index) in cart[0].option" :key="index">{{ item }},</span> <span>수량 {{ item.quantity }}</span>
                                        </p>
                                    </a>
    
                                    <strong class="price">{{ item.price }}</strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div class="accordion_box">
                <dl>
                    <dt><button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">나의 쇼핑</button></dt>
                    <dd>
                        <div class="inner">
                            <div class="list_menu">
                                <ul>
                                    <li><a href="">주문/배송</a></li>
                                    <li><a href="">반품/교환</a></li>
                                    <li><a href="">취소</a></li>
                                    <li><a href="">선물함</a></li>
                                </ul>
                            </div>
                        </div>
                    </dd>
                    <dt><button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">나의 혜택</button></dt>
                    <dd>
                        <div class="inner">
                            <div class="list_menu">
                                <ul>
                                    <li><a href="">쿠폰 내역</a></li>
                                    <li><a href="">포인트 내역</a></li>
                                </ul>
                            </div>
                        </div>
                    </dd>
                    <dt><button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">나의 활동</button></dt>
                    <dd>
                        <div class="inner">
                            <div class="list_menu">
                                <ul>
                                    <li><a href="">1:1 문의 목록</a></li>
                                    <li><a href="">나의 상품 문의</a></li>
                                    <li><a href="">나의 상품 리뷰</a></li>
                                    <li><a href="">나의 관심 상품</a></li>
                                    <li><a href="">나의 관심 브랜드</a></li>
                                    <li><a href="">최근 본 상품</a></li>
                                </ul>
                            </div>
                        </div>
                    </dd>
                    <dt><button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">나의 정보</button></dt>
                    <dd>
                        <div class="inner">
                            <div class="list_menu">
                                <ul>
                                    <li><a href="">회원정보 수정</a></li>
                                    <li><a href="">간편로그인 연결</a></li>
                                    <li><a href="">회원등급 안내</a></li>
                                    <li><a href="">배송지 관리</a></li>
                                    <li><a href="">회원탈퇴</a></li>
                                </ul>
                            </div>
                        </div>
                    </dd>
                    <dt><button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">환경설정</button></dt>
                    <dd>
                        <div class="inner">
                            <div class="gray_box opacity mt0">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th class="al">자동 로그인</th>
                                            <td class="align_right">
                                                <Inputs class="check_ani" input_type="checkbox" id=""/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="al">앱 푸시 동의</th>
                                            <td class="align_right">
                                                <Inputs class="check_ani" input_type="checkbox" id=""/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="al">앱 버전</th>
                                            <td class="align_right">12.14</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Inputs from "@/components/Inputs.vue";

export default {
    components: {
        Tabs,
        Inputs,
    },
    data () {
        return {
            /* 카테고리 텝 */
            tabidx: 0,
            tab_item_menu: [
                { item: "마이페이지" },
                { item: "주문/배송" },
                { item: "반품/교환" },
                { item: "취소/환불" },
                { item: "선물함" },
                { item: "1:1문의" },
                { item: "상품문의" },
                { item: "구매후기" },
            ],

            cart:[
                {
                    img:require("@/assets/images/pc/sample/sam_goods02.png"),
                    brand: "Nike", tit:"제품명 길이 제한 없음. 제품명 길이 제한 없음.제품명 길이 제한 없음",
                    option: ['BEIGE', '66', 'FREE'],
                    quantity: '1',
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:2,
                    status:'soldout',
                },
                {
                    img:require("@/assets/images/pc/sample/sam_goods01.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:1,
                },
                {
                    img:require("@/assets/images/pc/sample/sam_goods03.png"),
                    brand: "Nike", tit:"나이키 에어",
                    option: ['BEIGE', '66', 'FREE'],
                    price:"250,000",
                    ori_price:'2,500,000',
                    discount:"45%",
                    input:[{
                        type:"checkbox"
                    }],
                    count:2,
                    status:'soldout',
                },
            ],
        }
    },
    methods: {
        accordionToggle (event) {
            console.log(event.currentTarget.parentNode)
            event.currentTarget.parentNode.classList.toggle('active')
        },
    }
}
</script>

<style scoped>
.cart_name{display:flex;padding:20px 0 14px;border-bottom:1px solid #222;justify-content:space-between;}
.cart_name .name{font-size:14px;font-weight:400;color:#222;}
.cart_name .button_detail{font-size:14px;font-weight:400;color:#222;}
.cart_name .button_detail:after{content:"";display:inline-block;width:14px;height:14px;margin:-3px 0 0 7px;vertical-align:middle;background:url("@/assets/images/mo/common/icon_link_arrow_black.png") 50% 50% / cover no-repeat;}

.cart_list {border-top:1px solid #ddd;}
.cart_list li {padding:20px 0;}
.cart_list li + li {border-top:1px solid #eee;}
.cart_list li .inner {position:relative; display:flex;}
.cart_list li .inner .btn_del {width:14px; height:14px; font-size:0; position:absolute; top:0; right:0;}
.cart_list li .inner .btn_del:before, .cart_list li .inner .btn_del:after {width:15px; margin-left:-7px; border-top:1px solid #222; content:''; position:absolute; top:50%; left:50%; display:block; transform:rotate(45deg);}
.cart_list li .inner .btn_del:after {transform:rotate(135deg);}
.cart_list .thumb {width:90px; height:120px; margin-right:18px; margin-left:2px; padding:0;}
.cart_list .cont {margin-top:0; position:relative; flex:1;}
.cart_list .cont .check.wish {top:2px; right:auto; left:0;}
.cart_list .cont .title strong {padding-left:18px; font-size:14px;}
.cart_list .cont .title span {height:auto; display:block;}
.cart_list .cont .title p {margin-top:9px; display:flex;}
.cart_list .cont .title p * {margin-top:0; margin-left:2px; color:#999; font-size:12px;}
.cart_list .price {margin-top:10px; font-size:16px; font-weight:700; display:flex; align-items:flex-start;}
.cart_list .price del {margin-right:8px; color:#aaa; font-weight:400;}

.cart_list .stock {margin-top:4px; font-size:12px; display:block;}
.cart_list .stock + .price {margin-top:0;}

.accordion_box > dl > dt.active > .button_toggle{border-bottom:none;}
.accordion_box > dl > dd > .inner{padding-top:0;}

.check_ani::v-deep input[type='checkbox']:checked + em:before{background-color:#00C293 !important;}
</style>