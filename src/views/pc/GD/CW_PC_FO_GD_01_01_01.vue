<template>
    <div class="detail_goods">
        <div class="main_area pb50">
            <div class="left">
                <swiper class="main_slide" :options="swiperOptionMainSlideItem">
                    <swiper-slide v-for="(item, index) in mainSlideItem" :key="index">
                        <img :src="item.img" alt="" class="image" @mouseover="cloneImage($event)" @mouseleave="deleteImage()" @mousemove="magnifyImage($event)">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="magnify_image" id="magnifyImage"></div>
                <div class="section_group bd">
                    <!-- 23.03.22 혜택 수정 -->
                    <div class="benefit">
                        <strong>혜택</strong>
                        <ul>
                            <li><button @click.prevent="openModal('modalSkin'), modalTitle='1월 카드사 무이자 할부 안내', modalContent='installment', modalClass=''">1월 카드사 무이자 할부 안내</button></li>
                            <li><button @click.prevent="openModal('modalSkin'), modalTitle='카드사별 혜택안내', modalContent='installment', modalClass=''">카드사별 혜택안내</button></li>
                        </ul>
                    </div>
                    <!-- <div class="section">
                        <div class="section flex_box pt0 pl0 pr0 pb0 bd">
                            <h4 class="pr50 mb_auto">
                                <strong class="title" style="font-size:16px;font-weight:500;color:#222;">혜택</strong>
                            </h4>
                            <table class="table">
                                <tr>
                                    <th>결제</th>
                                    <td>13% 할인</td>
                                </tr>
                                <tr>
                                    <th>추가 혜택</th>
                                    <td>카카오페이 결제 시 4,000원 할인 <br>PAYCO 결제 시 4,000원 할인</td>
                                </tr>
                                <tr>
                                    <th>무이자할부 안내</th>
                                    <td>무이자할부 안내 신한, 롯데, 하나 <br>(무 3개월)</td>
                                </tr>
                            </table>
                        </div>
                    </div> -->
                    <!-- //23.03.22 혜택 수정 -->
                </div>
            </div>
            <div class="right">
                <div class="main_info">
                    <div class="text">
                        <div class="category">
                            <span class="brand">Fifa OLP</span>
                            <span class="model">FF2NSN01U_160</span>
                        </div>
                        <div class="title">
                            <strong>킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 </strong>
                            <Inputs input_type="checkbox" class="check wish" />
                        </div>
                    </div>
                    <div class="badges">
                        <span>쿠폰</span>
                        <span>BEST</span>
                        <span class="new">NEW</span>
                        <span class="soldout">SOLD OUT</span>
                        <span>단독</span>
                    </div>
                    <div class="price_coupon">
                        <div class="price">
                            <span class="discount">
                                <span class="original">999,999,999</span>
                                <em>50%</em>
                                <strong>499,999,999</strong>
                                <button type="button" @click.prevent="openModal('modalSkin'), modalTitle='상품 할인 적용 안내', modalContent='ModalDiscount', modalClass=''">할인율보기</button>
                            </span>
                            <!-- <span class="member">
                                <em>임직원</em>
                                <strong>399,999,999</strong>
                            </span> -->
                            <span class="point">포인트 최대 4,999,999P 적립</span>
                        </div>
                        <div class="coupon">
                            <button type="button" @click.prevent="openModal('modalSkin'), modalTitle='쿠폰받기', modalContent='ModalCoupon', modalClass=''">쿠폰받기</button>
                        </div>
                    </div>
                    <div class="section_group">
                        <div class="section pb10">
                            <h4>
                                <strong class="title pr30">배송비</strong>
                                <p class="paragraph mr_auto">무료 배송 (30,000원 이상 무료) 제주, 도서 지역 추가 30,000원</p>
                            </h4>
                        </div>
                    </div>
                    <button type="button" class="button_share" @click.prevent="openModal('modalSkin'), modalTitle='공유하기', modalContent='ModalShare', modalClass=''">공유하기</button>
                </div>
                <div class="section_group">
                    <div class="section pt30">
                        <h4>
                            <strong class="title">색상옵션 : 블랙</strong>
                            <span class="count">5</span>
                        </h4>
                        <div class="image_slide slide_off">
                            <ul>
                                <li v-for="(item, index) in colorOptionItem" :key="index" :class="{'disabled': item.quantity == 0}"><!-- 23.03.23 재고 없을 경우 처리 위한 클래스 'disabled' 추가 -->
                                    <button type="button" :class="item.active ? 'active' : ''">
                                        <img :src="item.img" alt="">
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="section pt10">
                        <h4>
                            <strong class="title">사이즈</strong>
                            <button type="button" class="modal" @click.prevent="openModal('modalSkin'), modalTitle='사이즈 가이드', modalContent='ModalSizeGuide', modalClass=''">사이즈 가이드</button>
                        </h4>
                        <div class="select_size">
                            <button type="button">250</button>
                            <button type="button" class="active">255</button>
                            <button type="button">260</button>
                            <button type="button" class="disabled">270</button><!-- 23.03.23 재고 없을 경우 처리 위한 클래스 'disabled' 추가 -->
                            <button type="button">275</button>
                            <button type="button">280</button>
                            <button type="button">285</button>
                            <button type="button">290</button>
                            <button type="button">300</button>
                            <button type="button">305</button>
                            <button type="button">310</button>
                            <button type="button">305</button>
                            <button type="button">310</button>
                        </div>
                    </div>
                </div>
                <div class="count_price_box">
                    <div class="order_count">
                        <button type="button" class="button_decrese" @click.prevent="orderCount > orderMin ? orderCount-- : orderCount"></button>
                        <input type="text" readonly="readonly" v-model="orderCount">
                        <button type="button" class="button_increse" @click.prevent="orderCount < orderMax ? orderCount++ : orderCount"></button>
                    </div>
                    <div class="price">
                        <span>총금액</span>
                        <strong>999,999,999</strong>
                    </div>
                </div>
                <div class="btnSection mt40">
                    <a href="" class="btn_big btn_gray02 gift"><em>선물하기</em></a>
                    <a href="" class="btn_big btn_default2" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='ModalBasket', modalClass='tight'"><em>장바구니</em></a>
                    <a href="" class="btn_big btn_confirm"><em>로그인</em></a>
                </div>
            </div>
        </div>
        <div class="section_group pt50 pb50">
            <div class="section">
                <div class="banners">
                    <a href="" class="link">
                        <img src="@/assets/images/pc/sample/banner01.png" alt="">
                    </a>
                    <a href="" class="link">
                        <img src="@/assets/images/pc/sample/banner02.png" alt="">
                    </a>
                </div>
            </div>
            <div class="section">
                <div class="event_banner">
                    <div>
                        <strong>Renewal Open Event</strong>
                        <p>FIFA 1904,BBC Earth와 함께 구매 인증 시 사은품 증정!! 댓글 축하 남기고 할인 쿠폰 증정</p>
                    </div>
                    <img src="@/assets/images/pc/sub/img_event_banner.png" alt="" />
                </div>
            </div>
        </div>

        <div class="tab_box mt50 mb50" ref="tabBox">
            <a href="" class="link_tab active" @click.prevent="scrollMove($event)" attr-target="detail">상세정보</a>
            <a href="" class="link_tab" @click.prevent="scrollMove($event)" attr-target="review">구매후기 (15)</a>
            <a href="" class="link_tab" @click.prevent="scrollMove($event)" attr-target="refund">배송 및 환불</a>
            <a href="" class="link_tab" @click.prevent="scrollMove($event)" attr-target="recommend">추천상품</a>
        </div>
        
        <!-- 상세정보 -->
        <div id="detail">
            <!-- 23.04.07 추가 : 주문 전 유의사항, 사은품 안내 -->
            <div class="detail_caution">
                <dl class="gray_box">
                    <dt>주문 전 유의사항</dt>
                    <dd>해당 상품은 신규 가입 쿠폰 적용 불가 합니다. 예약배송 외 상품의 개별 출고를 원하실 경우 개별 주문 부탁드립니다.<br/> 예약 배송 상품이 포함된 주문 건의 경우, 예약 배송 상품 출고일에 모든 상품이 함께 출고됩니다.</dd>
                </dl>
                <p><img src="@/assets/images/pc/sub/mg_detail_caution.png" alt="" /></p>
                <dl>
                    <dt>사은품 안내</dt>
                    <dd>본 제품 구매 시 브랜드 쇼핑백을 동봉 해 드리며, 선물하기로 구매 시 포장 박스에 담아 배송 해 드립니다.<br/> 이벤트 사은품은 당사 사정에 따라 예고없이 변경 또는 조기 종료 될 수 있습니다.<br/> 사은품의 교환 및 추가 증정은 불가하며, 본품 및 환불시 사은품도 동봉해주셔야 합니다.</dd>
                </dl>
            </div>
            <!-- //23.04.07 추가 : 주문 전 유의사항, 사은품 안내 -->
            <!-- 23.03.22 관리자 등록 공지이미지 영역 추가 -->
            <div class="cms_notice mb80">
                <div style="text-align:center">
                    <img :src="require('@/assets/images/pc/sample/img_cms_notice.png')" alt="" />
                </div>
            </div>
            <!-- //23.03.22 관리자 등록 공지이미지 영역 추가 -->
            <div class="goods_contents" ref="goodContents">
                <div class="">
                    <img src="http://gi.esmplus.com/cowe11/05_PUMA_Q/21SS-CSKATE/VUFWSL01-04_top.jpg"><br>
                    <img src="http://gi.esmplus.com/cowe11/05_PUMA_Q/21SS-CSKATE/VUFWSL01.jpg"><br>
                    <img src="http://gi.esmplus.com/cowe11/05_PUMA_Q/21SS-CSKATE/VUFWSL01-04_detail.jpg"><br>
                    <img src="http://gi.esmplus.com/cowe11/05_PUMA_Q/21SS-CSKATE/VUFWSL01-04_size.jpg"><br>
                </div>
            </div>
            <button type="button" class="button_goods_more" @click="goodsContentsToggle($event)"></button>            
        </div>

        <!-- 상품리뷰 -->
        <div id="review">
            <div class="section_group">
                <div class="section">
                    <div class="review_summary">
                        <div class="area_notice">
                            <div class="notice_box">
                                <strong>적립 포인트 안내</strong>
                                <p>상품리뷰+만족도 등록시 : 실결제금액의 1% 적립<br/> 상품리뷰+만족도+직접 찍은 상품이미지 등록시 : 결제금액의 3% 적립<br/> 상품 리뷰 적립은 구매 확정일로부터 90일 이내 작성시 적립</p>
                            </div>
                        </div>
            
                        <div class="area_point">
                            <div class="section_group">
                                <div class="section">
                                    <h4>
                                        <strong class="title">구매 평점</strong>
                                    </h4>
                                    <div class="average_point">
                                        <div class="total">
                                            <strong>4.5</strong>
                                            <ReviewScore :item="4.5" />
                                        </div>
                                        <table>
                                            <tr>
                                                <td>색상</td>
                                                <td>화면과 같아요.</td>
                                                <td class="rate">100%</td>
                                            </tr>
                                            <tr>
                                                <td>사이즈</td>
                                                <td>잘 맞아요.</td>
                                                <td class="rate">90%</td>
                                            </tr>
                                            <tr>
                                                <td>착용감</td>
                                                <td>편해요.</td>
                                                <td class="rate">100%</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <h4>
                        <strong class="title">포토 (18)</strong>
                        <button type="button" class="button_detail_common" style="width:335px;" @click.prevent="openModal('modalSkin'), modalTitle='상품리뷰 작성', modalContent='modalWriteReview'">상품 리뷰 작성하기</button>
                    </h4>
                    <div class="photo_box">
                        <template v-for="(item, index) in photoItem">
                            <a href="" class="link" :key="index" v-if="index < 7" @click.prevent="openModal('modalSkin'), modalTitle='포토리뷰', modalContent='ModalPhotoReview', modalClass='wide'">
                                <img :src="item.img" alt="" class="image">
                                <!-- 23.04.03 추가 리뷰 별 이미지 갯수 -->
                                <span class="count" v-if="item.imageCount > 1">{{ item.imageCount }}</span>
                                <!-- //23.04.03 추가 리뷰 별 이미지 갯수 -->
                            </a>                            
                            <a href="" class="link" :key="index" v-else @click.prevent="openModal('modalSkin'), modalTitle='포토리뷰전체', modalContent='ModalPhotoReviewAll', modalClass=''">
                                <img :src="item.img" alt="" class="image">
                                <span class="more">더보기</span>
                                <!-- 23.04.03 추가 리뷰 별 이미지 갯수 -->
                                <span class="count" v-if="item.imageCount > 1">{{ item.imageCount }}</span>
                                <!-- //23.04.03 추가 리뷰 별 이미지 갯수 -->
                            </a>
                        </template>
                    </div>
                </div>
                <div class="section">
                    <h4 class="mb20">
                        <SelectBox :options="sortPhoto" model="최신순" class="select_sort_review" :isChange="true"/>
                        <strong class="title"><Inputs input_type="checkbox" id="id_checkbox" class="check_photo_view" />포토리뷰만 보기</strong>
                    </h4>
                    <div class="bodySpec">
                        <SelectBox :options="selectSizePurchase" model="구매사이즈" :isChange="true"/>
                        <SelectBox :options="selectSizeUsual" model="평소사이즈" :isChange="true"/>
                        <SelectBox :options="selectTall" model="키" :isChange="true"/>
                        <div class="search_input" ref="searchInput">
                            <Inputs input_type="text" :isError="true" :placeholder="'검색어를 입력 하세요.'" />
                            <!-- 23.03.22 검색 버튼 추가 -->
                            <button class="btn_search">검색</button>
                            <!-- //23.03.22 검색 버튼 추가 -->
                        </div>
                    </div>
                </div>
                <div class="section">
                    <div class="list_review_empty">
                        <p>해당 검색어에 관련된 상품평을 찾을 수 없습니다. <br>다른 검색어로 검색을 시도 해보세요.</p>
                    </div>
                    <div class="list_review" ref="listReview">
                        <ul>
                            <li v-for="(item, index) in listReviewItems" :key="index">
                                <a href="" class="link">
                                    <div class="user">
                                        <ReviewScore :item="item.point" />
                                        <div class="size">
                                            <span>키 : {{ item.height }}</span>
                                            <span>평소 사이즈 : {{ item.sizeUsual }}</span>
                                            <span>구매 사이즈 : {{ item.sizePurchase }}</span>
                                        </div>
                                        <button type="button" class="button_report" @click.prevent="openModal('modalSkin'), modalTitle='신고하기', modalContent='ModalReport', modalClass=''">신고</button>
                                    </div>
                                    <div class="cont">
                                        <div class="text">
                                            <strong class="title">{{ item.title }}</strong>
                                            <p class="paragraph">{{ item.paragraph }}</p>
                                        </div>
                                        <span class="image" v-if="item.image">
                                            <img :src="item.image[0].src" alt="">
                                            <span class="count">{{ item.imageCount }}</span>
                                        </span>
                                    </div>
                                    <div class="info">
                                        <span>{{ item.date }}</span>
                                        <span>{{ item.id }}</span>
                                        <button type="button" class="button_thumb" @click.prevent="e => e.target.classList.toggle('active')">({{ item.thumb }})</button>
                                        <button type="button" class="button_more" @click.prevent="paragraphToggle($event, index)">더보기</button>
                                    </div>
                                </a>
                                <div class="link all">
                                    <div class="user">
                                        <ReviewScore :item="item.point" />
                                        <div class="size">
                                            <span>키 : {{ item.height }}</span>
                                            <span>평소 사이즈 : {{ item.sizeUsual }}</span>
                                            <span>구매 사이즈 : {{ item.sizePurchase }}</span>
                                        </div>
                                        <button type="button" class="button_report" @click.prevent="openModal('modalSkin'), modalTitle='신고하기', modalContent='ModalReport', modalClass=''">신고</button>
                                    </div>
                                    <div class="cont">
                                        <div class="text">
                                            <strong class="title">{{ item.title }}</strong>
                                            <p class="paragraph active">{{ item.paragraph }}</p>
                                        </div>
                                        <span class="image" v-if="item.image">
                                            <img :src="item.image[0].src" alt="">
                                            <span class="count">{{ item.imageCount }}</span>
                                        </span>
                                    </div>
                                    <div class="info">
                                        <span>{{ item.date }}</span>
                                        <span>{{ item.id }}</span>
                                        <span class="thumb">({{ item.thumb }})</span>
                                        <button type="button" class="button_more active" @click.prevent="paragraphClose($event, index)">더보기</button>
                                    </div>
                                    <div class="image_all">
                                        <ul>
                                            <li v-for="(item, index) in item.image" :key="index">
                                                <button type="button">
                                                    <img :src="item.src" alt="">
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- 23.04.05 추가 -->
                    <div class="pagination mt30">
                        <a href="#none" class="btn_first">처음으로</a>
                        <a href="#none" class="btn_prev">이전</a>
                        <a href="#none">1</a>
                        <a href="#none">2</a>
                        <a href="#none">3</a>
                        <a href="#none">4</a>
                        <a href="#none" class="btn_next">다음</a>
                        <a href="#none" class="btn_end">마지막으로</a>
                    </div>
                    <!-- //23.04.05 추가 -->
                </div>

                <div class="section">
                    <h4>
                        <strong class="title light">상품 문의 (24)</strong>
                        <button type="button" class="button_detail_common" @click.prevent="openModal('modalSkin'), modalTitle='상품 문의하기', modalContent='ModalInquire', modalClass=''" style="width:335px;">상품 문의하기</button>
                    </h4>
                    <!-- 23.04.05 pagination 추가 및 위치 이동 -->
                    <div class="list_goods_inquire mt20">
                        <dl>
                            <dt>
                                <button type="button" class="button_toggle locked" @click.prevent="accordionToggle($event)"> <!-- 잠금상태일때 locked 클래스를 추가해주세요. -->
                                    <div class="cont">
                                        <span class="status_replay">답변대기</span>
                                        <span class="status_lock"></span>
                                        <span>[상품문의]</span>
                                        <strong class="title">기타 상품 문의합니다.</strong>
                                        <div class="info">
                                            <span>23.12.14</span>
                                            <span class="nickname">jwy***</span>
                                        </div>
                                    </div>
                                </button>
                            </dt>
                            <dd>
                                <div class="cont">
                                    <div class="question">
                                        <p>남녀 공용으로 입어도 되는건가요? <br>세탁 방법은 어떻게 되나요?</p>
                                        <div class="buttons">
                                            <button type="button">수정</button>
                                            <button type="button">삭제</button>
                                        </div>
                                    </div>
                                    <!-- <div class="answer">
                                        <p>안녕하세요 고객님, 코웰패션에 관심 가져 주셔서 감사합니다. <br>문의 주신 상품은 남녀 공용 상품이며 첫 회는 드라이 클리닝 권장, 이후에는 울제품 전용 세제와 울코스로 세탁하셔도 됩니다.</p>
                                    </div> -->
                                </div>
                            </dd>
                            <dt>
                                <button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">
                                    <div class="cont">
                                        <span class="status_replay fin">답변완료</span>
                                        <!-- <span class="status_lock"></span> -->
                                        <span>[상품문의]</span>
                                        <strong class="title">기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.기타 상품 문의합니다.</strong>
                                        <div class="info">
                                            <span>23.12.14</span>
                                            <span class="nickname">jwy***</span>
                                        </div>
                                    </div>
                                </button>
                            </dt>
                            <dd>
                                <div class="cont">
                                    <div class="question">
                                        <p>남녀 공용으로 입어도 되는건가요? <br>세탁 방법은 어떻게 되나요?</p>
                                        <div class="buttons">
                                            <button type="button">수정</button>
                                            <button type="button">삭제</button>
                                        </div>
                                    </div>
                                    <div class="answer">
                                        <p>안녕하세요 고객님, 코웰패션에 관심 가져 주셔서 감사합니다. <br>문의 주신 상품은 남녀 공용 상품이며 첫 회는 드라이 클리닝 권장, 이후에는 울제품 전용 세제와 울코스로 세탁하셔도 됩니다.</p>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div class="pagination mt30">
                        <a href="#none" class="btn_first">처음으로</a>
                        <a href="#none" class="btn_prev">이전</a>
                        <a href="#none">1</a>
                        <a href="#none">2</a>
                        <a href="#none">3</a>
                        <a href="#none">4</a>
                        <a href="#none" class="btn_next">다음</a>
                        <a href="#none" class="btn_end">마지막으로</a>
                    </div>
                    <!-- //23.04.05 위치 이동 -->
                </div>
                <!-- 23.04.05 추가 [상품 정보 고시] -->
                <div class="section">
                    <div class="accordion_box">
                        <dl>
                            <dt><button type="button" class="button_toggle" @click.prevent="accordionToggle($event)">상품 정보 고시</button></dt>
                            <dd>
                                <div class="inner">
                                    <div class="list_bullet">
                                        <ul>
                                            <li>정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. 정보 고시 내용. </li>
                                        </ul>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <!-- //23.04.05 추가 [상품 정보 고시] -->
            </div>
        </div>

        <!-- 배송 및 환불 -->
        <div id="refund">
            <div class="section_group">
                <div class="section">
                    <div class="accordion_box">
                        <dl>
                            <dt class="active"><button type="button" class="button_toggle disabled">배송 및 배송비</button></dt>
                            <dd>
                                <div class="inner">
                                    <div class="list_bullet">
                                        <ul>
                                            <li>코웰패션닷컴 배송업체는 CJ택배 (1588-1255)입니다.</li>
                                            <li>구매금액 30,000원 미만은 3,000원의 배송비가 부과되며, 도서산간 지역은 상품 특성에 따라 추가 배송료가 부가될 수 있습니다.</li>
                                            <li>배송은 상품에 따라 입금확인일로 부터 최소 1일~5일 정도 소요되며, 협력업체의 사정으로 인해 배송이 지연 될 경우도 있습니다.</li>
                                            <li>지연될 경우에는 별도로 연락을 드리거나 상품 설명에 기재를 하고 있으니 구매 전 참고해 주세요.</li>
                                            <li>배송완료후 7일 이후에는 구매확정으로 자동 변경됩니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </dd>
                            <dt class="active"><button type="button" class="button_toggle disabled">교환 및 반품</button></dt>
                            <dd>
                                <div class="inner">
                                    <div class="list_bullet">
                                        <strong class="title">교환 및 반품</strong>
                                        <ul>
                                            <li>상품 수령일로부터 7일이내 교환 및 반품이 가능합니다.</li>
                                            <li>세트상품은 부분적으로 교환/반품 불가합니다.</li>
                                            <li>교환 및 반품 시 코웰패션닷컴 홈페이지 통해 접수하지 않은 상태에서 임의 발송할 경우, 분실 발생 시 코웰패션닷컴에서는 책임을 지지 않습니다.</li>
                                            <li>제품하자 및 오배송의 경우 코웰패션닷컴에서 동일 제품으로 교환 또는 환불을 원하실 경우 반품해 드립니다.</li>
                                            <li>교환배송비 6,000원, 반품배송비 3,000원 입니다. (단, 무료배송인 경우 반품배송비 6,000원 발생) 제품 하자가 아닐시에 배송비는 고객님께 부담됩니다.</li>
                                            <li>주소/연락처가 정확하지 않거나 연락이 되지 않아 반송될 경우 배송비는 고객님께 부담됩니다.</li>
                                            <li>교환 상품 재고 소진 시 교환 배송비의 경우 반품 배송비로 전환되는 점 참고 부탁드립니다.</li>
                                        </ul>
        
                                        <strong class="title">교환 및 반품 불가</strong>
                                        <ul>
                                            <li>구매확정시 교환/환불은 불가합니다.</li>
                                            <li>제품이 훼손되거나 상품의 가치가 상실 된 경우에는 교환 및 반품이 불가능 합니다.</li>
                                            <li>제품의 택이 훼손되거나 제거 된 경우에는 교환 및 반품이 불가능 합니다.</li>
                                            <li>하자가 없는 새제품일 경우에도 세탁 및 수선의 경우 교환 및 반품이 불가능 합니다.</li>
                                            <li>제품의 사이즈는 측정방법에 따라 약간의 오차가 발생될 수 있으며, 제품의 색상은 사용자의 모니터의 설정과 사양에 따라 차이가 있을 수 있습니다.</li>
                                            <li>이는 불량이 아니므로 교환 및 반품이 불가능 합니다.</li>
                                            <li>세탁 부주의로 인한 제품손상은 교환 및 반품이 불가능 하며 코웰패션닷컴에서는 어떠한 보상과 책임도 지지 않으니, 구매 전 세탁방법을 반드시 확인하신 후 구매하여 주시길 바랍니다.</li>
                                        </ul>
        
                                        <strong class="title">반송지 주소</strong>
                                        <ul>
                                            <li>54334 전라북도 김제시 용지면 부교리 57-4 코웰패션 물류센터</li>
                                        </ul>
                                    </div>
                                </div>
                            </dd>
                            <dt class="active"><button type="button" class="button_toggle disabled">주문 취소</button></dt>
                            <dd>
                                <div class="inner">
                                    <div class="list_bullet">
                                        <ul>
                                            <li>주문 상태 : 주문 접수 or 결제 확인 (MY PAGE > 주문/배송조회 > 상세보기 > 주문 취소 버튼 클릭)</li>
                                            <li>주문 상태 : 상품 준비 중 (취소 불가)</li>
                                            <li>취소는 주문 하신 상품이 '주문 접수' 또는 '결제 확인' 단계일 때에만 신청이 가능합니다. (해외 배송, 국내 배송 동일)</li>
                                            <li>그 이후의 단계에서는 이미 포장/제작되어 배송 준비 중 상태이거나 택배사로 상품이 전달된 경우 취소 처리가 불가능하며, 상품을 수령 후 반품으로 접수해 주시기 바랍니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <!-- 추천상품 -->
        <div id="recommend">
            <div class="section_group">
                <div class="section">
                    <section class="md">
                        <h3 class="pl0 pb40">연관상품</h3>
                        <swiper :options="defaultOptions">
                            <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                                <GoodsItem :item="item" />
                            </swiper-slide>
                            <div class="swiper-button-next" slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-next"></div>
                        </swiper>
                    </section>
                </div>
                <div class="section">
                    <section class="md">
                        <h3 class="pl0 pb40">Brand BEST</h3>
                        <swiper :options="defaultOptions">
                            <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                                <GoodsItem :item="item" />
                            </swiper-slide>
                            <div class="swiper-button-next" slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-next"></div>
                        </swiper>
                    </section>
                </div>
                <div class="section">
                    <section class="md">
                        <h3 class="pl0 pb40">Category BEST</h3>
                        <swiper :options="defaultOptions">
                            <swiper-slide v-for="(item, index) in goods_item_MD[0].item" :key="index">
                                <GoodsItem :item="item" />
                            </swiper-slide>
                            <div class="swiper-button-next" slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-next"></div>
                        </swiper>
                    </section>
                </div>
            </div>
        </div>

        <!-- 옵션선택 -->
        <div class="option_select_tab">
            <button type="button" class="button_toggle" @click.prevent="e => e.target.classList.toggle('active')">옵션선택</button>
            <div class="option_box">
                <div class="option_area">
                    <div class="left">
                        <div class="main_info pt0">
                            <div class="text pb0">
                                <div class="category">
                                    <span class="brand pb0">Fifa OLP</span>
                                </div>
                                <div class="title">
                                    <strong class="ellipsis">킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 블랙_킥오프 스니커즈킥오프 스니커즈 </strong>
                                </div>
                            </div>
                        </div>

                        <div class="section_group">
                            <div class="section pt20">
                                <h4>
                                    <strong class="title">색상옵션 : 블랙</strong>
                                </h4>
                                <div class="image_slide">
                                    <ul>
                                        <li v-for="(item, index) in colorOptionItem" :key="index" :class="{'disabled': item.quantity == 0}"><!-- 23.03.23 재고 없을 경우 처리 위한 클래스 'disabled' 추가 -->
                                            <button type="button" :class="item.active ? 'active' : ''">
                                                <img :src="item.img" alt="">
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="section pt20 pb0">
                                <h4>
                                    <strong class="title">사이즈</strong>
                                    <button type="button" class="modal" @click.prevent="openModal('modalSkin'), modalTitle='사이즈 가이드', modalContent='ModalSizeGuide', modalClass=''">사이즈 가이드</button>
                                </h4>
                                <div class="select_size slide_on">
                                    <button type="button">250</button>
                                    <button type="button" class="active">255</button>
                                    <button type="button">260</button>
                                    <button type="button" class="disabled">270</button><!-- 23.03.23 재고 없을 경우 처리 위한 클래스 'disabled' 추가 -->
                                    <button type="button">275</button>
                                    <button type="button">280</button>
                                    <button type="button">285</button>
                                    <button type="button">290</button>
                                    <button type="button">300</button>
                                    <button type="button">305</button>
                                    <button type="button">310</button>
                                    <button type="button">305</button>
                                    <button type="button">310</button>
                                    <button type="button">310</button>
                                    <button type="button">310</button>
                                    <button type="button">310</button>
                                    <button type="button">310</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="btnSection">
                            <a href="" class="btn_big btn_confirm"><em>구매하기</em></a>
                        </div>
                        <div class="btnSection">
                            <a href="" class="btn_big btn_default2" @click.prevent="openModal('modalSkin'), modalTitle='', modalContent='ModalBasket', modalClass='tight'"><em>장바구니</em></a>
                        </div>
                        <div class="btnSection">
                            <a href="" class="btn_big btn_gray02"><em>선물하기</em></a>
                        </div>

                        <div class="count_price_box justify_end mt40">
                            <div class="order_count">
                                <button type="button" class="button_decrese" @click.prevent="orderCount > orderMin ? orderCount-- : orderCount"></button>
                                <input type="text" readonly="readonly" v-model="orderCount">
                                <button type="button" class="button_increse" @click.prevent="orderCount < orderMax ? orderCount++ : orderCount"></button>
                            </div>
                        </div>
                        <div class="count_price_box justify_end mt10">
                            <div class="price">
                                <span>총금액</span>
                                <strong>999,999,999</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ModalSkin
            :modalTitle="modalTitle"
            :modalClass="modalClass"
        >
            <!-- 공유하기 -->
            <ModalShare v-if="modalContent === 'ModalShare'"></ModalShare>

            <!-- 장바구니 -->
            <p class="align_center" v-if="modalContent === 'ModalBasket'">상품이 장바구니에 담겼습니다.</p>
            <div class="btnSection" v-if="modalContent === 'ModalBasket'">
                <a href="#none" class="btn_mid btn_cancel"><em>장바구니보기</em></a>
                <a href="#none" class="btn_mid btn_default"><em>비밀번호 변경</em></a>
            </div>
            <!-- <p class="align_center" v-if="modalContent === 'ModalBasket'">상품 옵션을 선택 해 주세요.</p> -->

            <!-- 사이즈가이드 -->
            <ModalSizeGuide v-if="modalContent === 'ModalSizeGuide'"></ModalSizeGuide>

            <!-- 상품할인 적용안내 -->
            <ModalDiscount v-if="modalContent === 'ModalDiscount'"></ModalDiscount>

            <!-- 쿠폰다운로드 -->
            <ModalCoupon v-if="modalContent === 'ModalCoupon'"></ModalCoupon>
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent === 'ModalCoupon'">
                <a href="#none" class="btn_mid btn_default"><em>쿠폰 모두 받기</em></a>
                <!-- <a href="#none" class="btn_mid btn_cancel"><em>쿠폰 받기 완료</em></a> -->
            </div>

            <!-- 포토리뷰 -->
            <ModalPhotoReview v-if="modalContent === 'ModalPhotoReview'"></ModalPhotoReview>

            <!-- 포토리뷰전체 -->
            <ModalPhotoReviewAll v-if="modalContent === 'ModalPhotoReviewAll'"></ModalPhotoReviewAll>

            <!-- 신고하기 -->
            <ModalReport v-if="modalContent === 'ModalReport'"></ModalReport>
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent === 'ModalReport'">
                <a href="#none" class="btn_mid btn_cancel"><em>취소</em></a>
                <a href="#none" class="btn_mid btn_default"><em>신고</em></a>
            </div>

            <!-- 상품 문의하기 -->
            <ModalInquire v-if="modalContent === 'ModalInquire'"></ModalInquire>
            <div class="modal_bottom btnSection" slot="bottom" v-if="modalContent === 'ModalInquire'">
                <a href="#none" class="btn_mid btn_default"><em>등록</em></a>
            </div>

            <InstallmentInfo v-if="modalContent === 'installment'" />

            <!-- 상품 후기 작성 -->
            <WriteReview v-if="modalContent === 'modalWriteReview'" />
        </ModalSkin>
    </div>
</template>

<script>
import ReviewScore from '@/components/ReviewScore.vue'
import Inputs from '@/components/Inputs.vue'
import SelectBox from '@/components/SelectBox.vue'
import GoodsItem from '@/components/GoodsItem.vue'
import ModalSkin from '@/components/ModalSkin'

import ModalSizeGuide      from '@/views/pc/GD/CW_PC_FO_GD_01_01_03' // 사이즈가이드
import ModalShare          from '@/views/pc/GD/CW_PC_FO_GD_01_01_04' // 공유하기
import ModalDiscount       from '@/views/pc/GD/CW_PC_FO_GD_01_01_05' // 상품할인안내
import ModalCoupon         from '@/views/pc/GD/CW_PC_FO_GD_01_01_06' // 쿠폰받기
import ModalPhotoReview    from '@/views/pc/GD/CW_PC_FO_GD_03_02_02' // 포토리뷰
import ModalPhotoReviewAll from '@/views/pc/GD/CW_PC_FO_GD_03_02_03' // 포토리뷰전체
import ModalReport         from '@/views/pc/GD/CW_PC_FO_GD_03_02_04' // 신고하기
import ModalInquire        from '@/views/pc/GD/CW_PC_FO_GD_03_03_02' // 상품문의작성
import WriteReview         from '@/views/pc/GD/CW_PC_FO_GD_03_02_01' // 상품 리뷰 작성

import InstallmentInfo from "@/views/pc/OD/CW_PC_FO_OD_01_02_03"; //카드사별 혜택안내

export default {
    components: {
        ReviewScore,
        Inputs,
        SelectBox,
        GoodsItem,
        ModalSkin,
        ModalSizeGuide,
        ModalShare,
        ModalDiscount,
        ModalCoupon,
        ModalPhotoReview,
        ModalPhotoReviewAll,
        ModalReport,
        ModalInquire,
        InstallmentInfo,
        WriteReview,
    },
    data () {
        return {
            swiperOptionMainSlideItem: { 
                spaceBetween: 0,
                loop: true,
                pagination: { 
                    el: '.main_slide .swiper-pagination',
                    type: 'fraction'
                },
            },
            mainSlideItem: [
                {img: require("@/assets/images/mo/sample/sam_special01.png")},
                {img: require("@/assets/images/mo/sample/sam_special02.png")},
                {img: require("@/assets/images/mo/sample/sam_special03.png")},
            ],
            colorOptionItem: [
                {img: require("@/assets/images/mo/sample/sam_special03_01.png"), active: true},
                {img: require("@/assets/images/mo/sample/sam_special03_02.png"), active: false, quantity: 0},
                {img: require("@/assets/images/mo/sample/sam_special03_03.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_04.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
                {img: require("@/assets/images/mo/sample/sam_special03_05.png"), active: false},
            ],
            orderCount: 1,
            orderMin: 1,
            orderMax: 10,
            photoItem: [
                {img: require("@/assets/images/mo/sample/imgreview01.png"), imageCount:'3'},
                {img: require("@/assets/images/mo/sample/imgreview02.png"), imageCount:'1'},
                {img: require("@/assets/images/mo/sample/imgreview03.png"), imageCount:'9'},
                {img: require("@/assets/images/mo/sample/imgreview04.png"), imageCount:'10'},
                {img: require("@/assets/images/mo/sample/imgreview05.png"), imageCount:'99'},
                {img: require("@/assets/images/mo/sample/imgreview06.png"), imageCount:'1'},
                {img: require("@/assets/images/mo/sample/imgreview06.png"), imageCount:'2'},
                {img: require("@/assets/images/mo/sample/imgreview06.png"), imageCount:'4'},
            ],
            sortPhoto: [
                { val: "최신순", txt: "최신순" },
                { val: "상품평 높은 순", txt: "상품평 높은 순" },
                { val: "상품평 낮은 순", txt: "상품평 낮은 순" },
            ],
            selectSizePurchase: [
                { val: "", txt: "구매사이즈" },
                { val: "", txt: "XS" },
                { val: "", txt: "S" },
                { val: "", txt: "M" },
                { val: "", txt: "L" },
                { val: "", txt: "XL" },
                { val: "", txt: "XXL" },
            ],
            selectSizeUsual: [
                { val: "", txt: "평소사이즈" },
                { val: "", txt: "XS" },
                { val: "", txt: "S" },
                { val: "", txt: "M" },
                { val: "", txt: "L" },
                { val: "", txt: "XL" },
                { val: "", txt: "XXL" },
            ],
            selectTall: [
                { val: "", txt: "키" },
                { val: "", txt: "160 이하" },
                { val: "", txt: "161~163" },
                { val: "", txt: "164~166" },
                { val: "", txt: "167~169" },
                { val: "", txt: "170~172" },
                { val: "", txt: "173~175" },
                { val: "", txt: "176~178" },
                { val: "", txt: "179~190" },
                { val: "", txt: "181 이상" },
            ],
            listReviewItems: [
                {
                    title: '가볍고 착용감좋습니다',
                    paragraph: '가격도 좋고, 가볍고 착용감 좋습니다. 아이들한테 선물하면 좋을것 같습니다. 많이 파세요~',
                    image: '',
                    imageCount: '',
                    date: '2022.12.30',
                    id: 'cuzo***',
                    thumb: '3',
                    point: '2.5',
                    height: '195cm',
                    sizeUsual: 'XL',
                    sizePurchase: 'L',
                },
                {
                    title: '푸마 화이트-블랙 / 깔끔하고 좋네요.',
                    paragraph: '착용감은 안전함을 주고, 신발을 꽉 메었을 때 발목과 발볼을 핏하게 잡아주며, 발 앞꿈치는 넉넉하게 남습니다. 쿠션감은 있으나, 발바닥 부분이 하드한 제품이라, 딱딱함을 잡아주는 좀 하드한 쿠션감이라고 설명할 수 있겠습니다. 신발끈을 느슨하게 조이면 발목이 편안하고, 신발끈을 꽉 조이면 안정감이 살아있네요. 그런데, 꽉조이면 신고 벗을 때 좀 불편합니다. 여튼 잘 신고 다니겠습니다. 고맙습니다.착용감은 안전함을 주고, 신발을 꽉 메었을 때 발목과 발볼을 핏하게 잡아주며, 발 앞꿈치는 넉넉하게 남습니다. 쿠션감은 있으나, 발바닥 부분이 하드한 제품이라, 딱딱함을 잡아주는 좀 하드한 쿠션감이라고 설명할 수 있겠습니다. 신발끈을 느슨하게 조이면 발목이 편안하고, 신발끈을 꽉 조이면 안정감이 살아있네요. 그런데, 꽉조이면 신고 벗을 때 좀 불편합니다. 여튼 잘 신고 다니겠습니다. 고맙습니다.착용감은 안전함을 주고, 신발을 꽉 메었을 때 발목과 발볼을 핏하게 잡아주며, 발 앞꿈치는 넉넉하게 남습니다. 쿠션감은 있으나, 발바닥 부분이 하드한 제품이라, 딱딱함을 잡아주는 좀 하드한 쿠션감이라고 설명할 수 있겠습니다. 신발끈을 느슨하게 조이면 발목이 편안하고, 신발끈을 꽉 조이면 안정감이 살아있네요. 그런데, 꽉조이면 신고 벗을 때 좀 불편합니다. 여튼 잘 신고 다니겠습니다. 고맙습니다.착용감은 안전함을 주고, 신발을 꽉 메었을 때 발목과 발볼을 핏하게 잡아주며, 발 앞꿈치는 넉넉하게 남습니다. 쿠션감은 있으나, 발바닥 부분이 하드한 제품이라, 딱딱함을 잡아주는 좀 하드한 쿠션감이라고 설명할 수 있겠습니다. 신발끈을 느슨하게 조이면 발목이 편안하고, 신발끈을 꽉 조이면 안정감이 살아있네요. 그런데, 꽉조이면 신고 벗을 때 좀 불편합니다. 여튼 잘 신고 다니겠습니다. 고맙습니다.착용감은 안전함을 주고, 신발을 꽉 메었을 때 발목과 발볼을 핏하게 잡아주며, 발 앞꿈치는 넉넉하게 남습니다. 쿠션감은 있으나, 발바닥 부분이 하드한 제품이라, 딱딱함을 잡아주는 좀 하드한 쿠션감이라고 설명할 수 있겠습니다. 신발끈을 느슨하게 조이면 발목이 편안하고, 신발끈을 꽉 조이면 안정감이 살아있네요. 그런데, 꽉조이면 신고 벗을 때 좀 불편합니다. 여튼 잘 신고 다니겠습니다. 고맙습니다.착용감은 안전함을 주고, 신발을 꽉 메었을 때 발목과 발볼을 핏하게 잡아주며, 발 앞꿈치는 넉넉하게 남습니다. 쿠션감은 있으나, 발바닥 부분이 하드한 제품이라, 딱딱함을 잡아주는 좀 하드한 쿠션감이라고 설명할 수 있겠습니다. 신발끈을 느슨하게 조이면 발목이 편안하고, 신발끈을 꽉 조이면 안정감이 살아있네요. 그런데, 꽉조이면 신고 벗을 때 좀 불편합니다. 여튼 잘 신고 다니겠습니다. 고맙습니다.착용감은 안전함을 주고, 신발을 꽉 메었을 때 발목과 발볼을 핏하게 잡아주며, 발 앞꿈치는 넉넉하게 남습니다. 쿠션감은 있으나, 발바닥 부분이 하드한 제품이라, 딱딱함을 잡아주는 좀 하드한 쿠션감이라고 설명할 수 있겠습니다. 신발끈을 느슨하게 조이면 발목이 편안하고, 신발끈을 꽉 조이면 안정감이 살아있네요. 그런데, 꽉조이면 신고 벗을 때 좀 불편합니다. 여튼 잘 신고 다니겠습니다. 고맙습니다.',
                    image: [
                        { src:  'https://www.cowellfashion.com/data/board/goods_review/317c807d7da4e4b970b6224b5a241f611847501.jpg' },
                        { src:  'https://www.cowellfashion.com/data/board/goods_review/f50523c5338761426f8759e6b88f503b1356374.jpg' },
                        { src:  'https://www.cowellfashion.com/data/board/goods_review/468612.jpg' },
                        { src:  'https://phinf.pstatic.net/checkout.phinf/20210924_297/1632476308040u71h3_JPEG/review-attachment-f95f3045-5c04-4449-963b-54f88b748769.jpeg?type=w640' },
                        { src:  'https://phinf.pstatic.net/checkout.phinf/20210924_153/1632476308486WVicT_JPEG/review-attachment-d6ebe811-c3c5-431a-8269-8800d2aac823.jpeg?type=w640' },
                        { src:  'https://phinf.pstatic.net/checkout.phinf/20210924_221/1632476308177atKMA_JPEG/review-attachment-49f4dab7-a92b-4fd2-a148-6a9e259358df.jpeg?type=w640' },
                        { src:  'https://phinf.pstatic.net/checkout.phinf/20210802_280/1627877279278eCpd8_JPEG/review-attachment-f243a2dc-4831-4794-a647-4fd0556768f3.jpeg?type=w640' },
                        { src:  'https://phinf.pstatic.net/checkout.phinf/20210802_280/1627877279278eCpd8_JPEG/review-attachment-f243a2dc-4831-4794-a647-4fd0556768f3.jpeg?type=w640' },
                        { src:  'https://phinf.pstatic.net/checkout.phinf/20210802_280/1627877279278eCpd8_JPEG/review-attachment-f243a2dc-4831-4794-a647-4fd0556768f3.jpeg?type=w640' },
                    ],
                    // image: 'https://m.cowellfashion.com/data/board/goods_review/317c807d7da4e4b970b6224b5a241f611847501.jpg',
                    imageCount: '9',
                    date: '2022.05.02',
                    id: 'jaeh***',
                    thumb: '12',
                    point: '4.5',
                    height: '145cm',
                    sizeUsual: 'S',
                    sizePurchase: 'S',
                },
            ],
            defaultOptions:{
                loop:false,
                slidesPerView: 5,
                spaceBetween: 5,
                maxBackfaceHiddenSlides:6,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },

            /* md goods */
            goods_item_MD: [
                {
                    item :[
                        {
                            img:require("@/assets/images/mo/sample/sam_goods_list_02.jpg"),
                            brand: "Nike", tit:"나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어나이키 에어",
                            price:"250,000",
                            discount:"45%",
                            input:[{
                                type:"checkbox"
                            }],
                            badge:[
                                {txt:"쿠폰", class:"coupon"},
                                {txt:"NEW", class:"new"},
                                {txt:"BEST", class:"best"},
                                {txt:"단독", class:'only'},
                                {txt:"SOLD OUT", class:'soldout'}
                            ],
                        },
                        {
                            img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                            brand: "Nike", tit:"나이키 에어",
                            price:"250,000",
                            discount:"45%",
                            badge:[
                                {txt:"쿠폰", class:"coupon"},
                                {txt:"NEW", class:"new"},
                            ],
                        },
                        {
                            img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                            brand: "Nike", tit:"나이키 에어",
                            price:"250,000",
                            discount:"45%",
                            badge:[
                                {txt:"쿠폰", class:"coupon"},
                                {txt:"SOLD OUT", class:'soldout'}
                            ],
                        },
                        {
                            img:require("@/assets/images/mo/sample/sam_goods_list_01.jpg"),
                            brand: "Nike", tit:"나이키 에어",
                            price:"250,000",
                            discount:"45%",
                            badge:[
                                {txt:"쿠폰", class:"coupon"},
                                {txt:"NEW", class:"new"},
                                {txt:"BEST", class:"best"},
                                {txt:"단독", class:'only'},
                                {txt:"SOLD OUT", class:'soldout'}
                            ],
                        },
                    ]
                }
            ],
            /* //md goods */

            modalTitle: '',
            modalContent: '',
            modalClass: '',
        }
    },
    created() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeMount () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    mounted () {
        this.tabBoxOffset = document.querySelector('.tab_box').offsetTop;
        window.addEventListener('scroll', this.onScroll)
    },
    methods: {
        goodsContentsToggle (event) {
            event.currentTarget.classList.toggle('active')
            this.$refs.goodContents.classList.toggle('active')
        },
        scrollMove (event) {
            let target = event.currentTarget.getAttribute('attr-target')
            let positionY = document.getElementById(target).offsetTop
            // let headerHeight = this.$refs.header.offsetHeight
            let headerHeight = -100
            let tabBox = this.$refs.tabBox
            let tabBoxHeight = tabBox.offsetHeight

            window.scrollTo( { top: positionY - headerHeight - tabBoxHeight, behavior: 'smooth' } )

            for (let item of tabBox.childNodes) {
                item.classList.remove('active')
            }
            event.currentTarget.classList.add('active')
        },
        onScroll () {
            // let headerHeight = this.$refs.header.offsetHeight
            let headerHeight = -100
            let tabBox = this.$refs.tabBox
            let tabBoxHeight = tabBox.offsetHeight
            let currentScrollPosition = window.pageYOffset + headerHeight + tabBoxHeight + 1
            let targetPositionArray = []

            /* 23.04.03 [tab] sticky-top 위치 수정 */
            let Header = document.querySelector('header');
            if(window.pageYOffset > (this.tabBoxOffset - (Header.offsetHeight - 50))){
                tabBox.style.top = Header.offsetHeight+'px'
            } else {
                tabBox.style.removeProperty('top');
            }
            /* //23.04.03 [tab] sticky-top 위치 수정 */
            
            for (let item of tabBox.childNodes) {
                let target = item.getAttribute('attr-target')
                targetPositionArray.push(document.getElementById(target).offsetTop)
                item.classList.remove('active')
            }

            if (targetPositionArray[1] >= currentScrollPosition) {
                tabBox.childNodes[0].classList.add('active')
            } else if (targetPositionArray[1] <= currentScrollPosition && currentScrollPosition < targetPositionArray[2]) {
                tabBox.childNodes[1].classList.add('active')
            } else if (targetPositionArray[2] <= currentScrollPosition && currentScrollPosition < targetPositionArray[3]) {
                tabBox.childNodes[2].classList.add('active')
            } else {
                tabBox.childNodes[3].classList.add('active')
            }
        },
        paragraphToggle (event, index) {
            event.currentTarget.classList.toggle('active')
            this.$refs.listReview.childNodes[0].childNodes[index].getElementsByClassName('link all')[0].classList.toggle('active')
        },
        paragraphClose (event, index) {
            this.$refs.listReview.childNodes[0].childNodes[index].getElementsByClassName('button_more')[0].classList.remove('active')
            this.$refs.listReview.childNodes[0].childNodes[index].getElementsByClassName('link all')[0].classList.remove('active')
        },
        accordionToggle (event) {
            event.currentTarget.parentNode.classList.toggle('active')
        },

        openModal (name) {
            this.$modal.show(name)
            /* 23.03.27 팝업 활성화 시 body 고정 */
            document.querySelector('body').classList.add('fixed')
        },
        cloneImage (event) {
            document.getElementById('magnifyImage').appendChild(event.target.cloneNode())
            document.getElementById('magnifyImage').classList.add('active')
        },
        deleteImage () {
            document.getElementById('magnifyImage').innerHTML = ''
            document.getElementById('magnifyImage').classList.remove('active')
        },
        magnifyImage (event) {
            let img = document.getElementById('magnifyImage').childNodes[0]

            let posX = event.offsetX - img.clientWidth / 2
            let posY = event.offsetY - img.clientHeight / 2

            let minX = -1 * img.clientWidth / 4
            let maxX = img.clientWidth / 4
            let minY = -1 * img.clientHeight / 4
            let maxY = img.clientHeight / 4

            let resX, resY

            if (posX < minX) {
                resX =  minX
            } else if (posX < maxX) {
                resX =  posX
            } else if (posX > maxX) {
                resX =  maxX
            }

            if (posY < minY) {
                resY =  minY
            } else if (posY < maxY) {
                resY =  posY
            } else if (posY > maxY) {
                resY =  maxY
            }

            console.log(minX, posX, maxX)

            img.style.transform = 'scale(2) translateX(' + (-1 * resX) + 'px) translateY(' + (-1 * resY) + 'px)'
        },
    },
}
</script>

<style scoped>

.detail_caution {width:900px; margin:100px auto 60px; padding-bottom:20px; border-bottom:1px solid #eee;}
.detail_caution dl {padding:0 40px;}
.detail_caution dl + p {margin-top:40px;}
.detail_caution p + dl {margin-top:20px;}
.detail_caution dt {font-size:18px; font-weight:700; line-height:1.4444em;}
.detail_caution dd {margin-top:10px; font-size:16px; line-height:1.5em;}

.detail_caution .gray_box {padding-top:45px; padding-bottom:45px;}
.detail_caution .gray_box dd {font-size:14px;}
</style>