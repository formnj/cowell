<template>
    <div class="list_wrap">
        <ul class="tab">
            <li class="active">PC</li>
            <li>MO</li>
        </ul>
        <dl>
            <dt class="active">================== PC ==================</dt>
            <dd data="pc">
                <table>
                    <colgroup>
                        <col style="width:10%" />
                        <col style="width:10%" />
                        <col style="width:10%" />
                        <col style="width:10%" />
                        <col style="" />
                        <col style="" />
                        <col style="" />
                        <col style="" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colspan="4">페이지</th>
                            <th rowspan="2">화면ID</th>
                            <th rowspan="2">바로가기</th>
                            <th rowspan="2">구분</th>
                            <th rowspan="2">비고</th>
                        </tr>
                        <tr>
                            <th>1 Depth</th>
                            <th>2 Depth</th>
                            <th>3 Depth</th>
                            <th>4 Depth</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </dd>
            <dt>================== MO ==================</dt>
            <dd data="mo">
                <table>
                    <colgroup>
                        <col style="width:10%" />
                        <col style="width:10%" />
                        <col style="width:10%" />
                        <col style="width:10%" />
                        <col style="" />
                        <col style="" />
                        <col style="" />
                        <col style="" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colspan="4">페이지</th>
                            <th rowspan="2">화면ID</th>
                            <th rowspan="2">바로가기</th>
                            <th rowspan="2">구분</th>
                            <th rowspan="2">비고</th>
                        </tr>
                        <tr>
                            <th>1 Depth</th>
                            <th>2 Depth</th>
                            <th>3 Depth</th>
                            <th>4 Depth</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </dd>
            <dt class="components">================== Component ==================</dt>
            <dd data="comm">
                <table>
                    <thead>
                        <tr>
                            <th>페이지</th>
                            <th>화면ID</th>
                            <th>바로가기</th>
                            <th>구분</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </dd>
        </dl>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {
    },
    data() {
            return {
            }
    },
    mounted() {
        $(document).ready(function(){
            var list_Arry_com = [
                //공통 component
                ['상품리스트','/component/GoodsItem.vue','','component','',''],
                ['input','/component/Inputs.vue','','component','',''],
                ['selectbox','/component/SelectBox.vue','','component','',''],
                ['팝업','/components/ModalSkin.vue','','component','',''],
                ['탭','/component/Tabs.vue','','component','',''],

                ['SSO','/views/pc/MB/CW_PC_FO_MB_01_03_01','','공통','',''],
                ['회원가입완료','/views/mo/MB/CW_MO_FO_MB_12_01_01','','공통','',''],
                ['아이디,메일 중복체크','/views/mo/MB/CW_MO_FO_MB_12_01_02','','공통','',''],
                ['비밀번호변경안내','/views/pc/MB/CW_PC_FO_MB_01_08_01','','공통','',''],
            ];
            var list_Arry_mo = [
                // MO : 1Dep, 2Dep, 3Dep, 4Dep, 화면ID, 바로가기, 구분, 비고
                ['공통','헤더','','','/layout/mo/Header.vue','','',''],
                ['공통','푸터','','','/layout/mo/Footer.vue','','',''],
                ['공통','액션바','','','/layout/mo/ActionBar.vue','','',''],
                ['공통','','브랜드','','/layout/mo/BrandsLayer.vue','','팝업','액션바 [Brand] 클릭 시 노출'],
                ['공통','','최근 본 상품','','/layout/mo/BrandsLayer.vue','','팝업','액션바 [Brand] 클릭 시 노출'],
                ['공통','App 인트로','','','/views/mo/AP/CW_AP_FO_CM_05_01_01','/cowell/ap/CM_05_01_01','페이지',''],
                ['공통','이용약관','','','/views/mo/CM/CW_MO_FO_CM_06_01_01','/cowell/mo/CM_06_01_01','페이지',''],
                ['공통','개인정보취급방침','','','/views/mo/CM/CW_MO_FO_CM_07_01_01','/cowell/mo/CM_07_01_01','페이지',''],
                ['공통','제휴안내','','','/views/mo/CM/CW_MO_FO_CM_08_01_01','/cowell/mo/CM_08_01_01','페이지',''],
                ['공통','404에러','','','/views/mo/CM/CW_MO_FO_CM_10_01_01','/cowell/mo/CM_10_01_01','페이지',''],

                ['통합몰 메인','','','','/views/mo/CM/CW_MO_FO_CM_09_01_01','/cowell/mo','페이지',''],

                ['브랜드 전용관','메인','','','/views/mo/DP/CW_MO_FO_DP_01_01_01','/cowell/mo/DP_01_01_01','페이지',''],
                ['브랜드 전용관','브랜드 카테고리','','','/views/mo/DP/CW_MO_FO_DP_02_01_01','/cowell/mo/DP_02_01_01','페이지',''],
                ['브랜드 전용관','브랜드 베스트','','','/views/mo/DP/CW_MO_FO_DP_03_01_01','/cowell/mo/DP_03_01_01','페이지',''],
                ['브랜드 전용관','브랜드 신상품','','','/views/mo/DP/CW_MO_FO_DP_04_01_01','/cowell/mo/DP_04_01_01','페이지',''],

                ['브랜드관','메인','','','/views/mo/DP/CW_MO_FO_DP_05_01_01','/cowell/mo/DP_05_01_01','페이지',''],
                ['브랜드관','','브랜드 카테고리','','/views/mo/DP/CW_MO_FO_DP_05_02_01','/cowell/mo/DP_05_02_01','페이지',''],
                ['브랜드관','','카테고리 팝업','','/views/mo/DP/CW_MO_FO_DP_06_02_02','','팝업','CW_MO_FO_DP_05_01_01 상단 [여성/아우터] 클릭 시 팝업 노출'],
                ['브랜드관','','필터 팝업','','/views/mo/DP/CW_MO_FO_DP_06_02_03','','팝업','CW_MO_FO_DP_05_01_01 상단 [필터] 클릭 시 팝업 노출'],

                ['상품 카테고리','카테고리','','','/views/mo/DP/CW_MO_FO_DP_06_01_01','/cowell/mo/DP_06_01_01','페이지',''],
                ['상품 카테고리','','서브카테고리','','/views/mo/DP/CW_MO_FO_DP_06_02_01','/cowell/mo/DP_06_02_01','페이지',''],
                ['상품 카테고리','','리뷰팝업','','/views/mo/DP/CW_MO_FO_DP_06_01_02','/cowell/mo/DP_06_01_02','팝업','CW_MO_FO_DP_06_01_01 리뷰 콘텐츠 클릭 시 팝업 노출'],

                ['검색','검색 팝업','','','/views/mo/DP/CW_MO_FO_DP_07_01_01','','팝업','액션바 [menu] > 돋보기 클릭 시 노출'],
                ['검색','검색결과 없음','','','/views/mo/DP/CW_MO_FO_DP_07_02_01','/cowell/mo/DP_07_02_01','페이지',''],
                ['검색','검색결과 상품','','','/views/mo/DP/CW_MO_FO_DP_07_02_02','/cowell/mo/DP_07_02_02','페이지','검수리스트와 IA상의 아이디가 상이하여 검수리스트상의 ID로 수정'],
                ['검색','검색결과 브랜드','','','/views/mo/DP/CW_MO_FO_DP_07_02_03','/cowell/mo/DP_07_02_03','페이지','검수리스트와 IA상의 아이디가 상이하여 검수리스트상의 ID로 수정'],
                ['검색','검색결과 기획전','','','/views/mo/DP/CW_MO_FO_DP_07_02_04','/cowell/mo/DP_07_02_04','페이지','검수리스트와 IA상의 아이디가 상이하여 검수리스트상의 ID로 수정'],





                ['로그인','회원 로그인','','','/views/mo/MB/CW_MO_FO_MB_01_01_01','/cowell/mo/MB_01_01_01','페이지',''],
                ['로그인','','SNS 로그인','','/views/pc/MB/CW_PC_FO_MB_01_03_01','/cowell/pc/MB_01_03_01','팝업','해당로고 클래스로 처리, 로그인 페이지에서 하단 SNS 클릭 시 노출'],
                ['로그인','','휴면계정안내','','/views/mo/MB/CW_MO_FO_MB_01_07_01','/cowell/mo/MB_01_07_01','페이지',''],
                ['로그인','','휴면계정복구완료','','/views/mo/MB/CW_MO_FO_MB_01_07_02','/cowell/mo/MB_01_07_02','페이지',''],
                // ['로그인','휴면계정복구 후 비밀번호설정','','','/views/mo/MB/CW_MO_FO_MB_01_08_03',"/cowell/mo/MB_01_08_03",'페이지',''],

                ['아이디','아이디 찾기','','','/views/mo/MB/CW_MO_FO_MB_02_01_01',"/cowell/mo/MB_02_01_01",'페이지',''],
                ['아이디','찾기 완료','','','/views/mo/MB/CW_MO_FO_MB_03_01_01',"/cowell/mo/MB_03_01_01",'페이지',''],

                ['비밀번호','비밀번호 찾기','','','/views/mo/MB/CW_MO_FO_MB_04_01_01',"/cowell/mo/MB_04_01_01",'페이지',''],
                ['비밀번호','비밀번호 변경','','','/views/mo/MB/CW_MO_FO_MB_05_01_01',"/cowell/mo/MB_05_01_01",'페이지',''],


                ['회원가입','가입 안내','','','/views/mo/MB/CW_MO_FO_MB_08_01_01','/cowell/mo/MB_08_01_01','페이지',''],
                ['회원가입','휴대폰인증','','','/views/mo/MB/CW_MO_FO_MB_09_01_01','/cowell/mo/MB_09_01_01','페이지',''],
                ['회원가입','약관동의','','','/views/mo/MB/CW_MO_FO_MB_10_01_01','/cowell/mo/MB_10_01_01','페이지',''],
                ['회원가입','이용약관','','','/views/mo/MB/CW_MO_FO_MB_10_02_01','','팝업','약관 ">" 버튼 클릭 시 노출'],

                ['회원가입','정보입력','','','/views/mo/MB/CW_MO_FO_MB_11_01_01','/cowell/mo/MB_11_01_01','페이지',''],
                ['회원가입','가입완료','','','/views/mo/MB/CW_MO_FO_MB_12_01_01','','팝업','[회원가입] 버튼 클릭 시 노출'],



                ['마이페이지','메인','','','/views/mo/MY/CW_MO_FO_MY_01_01_01','/cowell/mo/MY_01_01_01','페이지',''],
                ['마이페이지','나의쇼핑','주문/배송 목록','','/views/mo/MY/CW_MO_FO_MY_02_01_01','/cowell/mo/MY_02_01_01','페이지','캘린더 관련 스크립트 적용'],
                ['마이페이지','','주문/배송 상세','','/views/mo/MY/CW_MO_FO_MY_02_01_02','/cowell/mo/MY_02_01_02','페이지',''],
                ['마이페이지','','반품/교환 목록','','/views/mo/MY/CW_MO_FO_MY_02_02_01','/cowell/mo/MY_02_02_01','페이지',''],
                ['마이페이지','','반품/교환 상세','','/views/mo/MY/CW_MO_FO_MY_02_02_02','/cowell/mo/MY_02_02_02','페이지',''],
                ['마이페이지','','반품/교환 신청','','/views/mo/MY/CW_MO_FO_MY_02_02_03','/cowell/mo/MY_02_02_03','페이지',''],
                ['마이페이지','','취소/환불 목록','','/views/mo/MY/CW_MO_FO_MY_02_03_01','/cowell/mo/MY_02_03_01','페이지',''],
                ['마이페이지','','취소/환불 상세','','/views/mo/MY/CW_MO_FO_MY_02_03_02','/cowell/mo/MY_02_03_02','페이지',''],
                ['마이페이지','','취소/환불 신청','','/views/mo/MY/CW_MO_FO_MY_02_03_03','/cowell/mo/MY_02_03_03','페이지',''],
                ['마이페이지','','선물 목록','','/views/mo/MY/CW_MO_FO_MY_02_04_01','/cowell/mo/MY_02_04_01','페이지',''],
                ['마이페이지','','보낸선물 상세','','/views/mo/MY/CW_MO_FO_MY_02_04_02','/cowell/mo/MY_02_04_02','페이지',''],
                ['마이페이지','','받은선물 상세','','/views/mo/MY/CW_MO_FO_MY_02_04_03','/cowell/mo/MY_02_04_03','페이지',''],
                ['마이페이지','나의혜택','보유 쿠폰 목록','','/views/mo/MY/CW_MO_FO_MY_03_01_01','/cowell/mo/MY_03_01_01','페이지','쿠폰 상세 팝업 포함'],
                ['마이페이지','','발급가능 쿠폰 목록','','/views/mo/MY/CW_MO_FO_MY_03_01_02','/cowell/mo/MY_03_01_02','페이지',''],
                ['마이페이지','','포인트내역','','/views/mo/MY/CW_MO_FO_MY_03_02_01','/cowell/mo/MY_03_02_01','페이지',''],
                ['마이페이지','','임직원혜택','','/views/mo/MY/CW_MO_FO_MY_03_03_01','/cowell/mo/MY_03_03_01','페이지',''],
                ['마이페이지','나의활동','1:1문의 목록','','/views/mo/MY/CW_MO_FO_MY_04_01_01','/cowell/mo/MY_04_01_01','페이지',''],
                ['마이페이지','','1:1문의 쓰기','','/views/mo/MY/CW_MO_FO_MY_04_01_04','/cowell/mo/MY_04_01_04','페이지',''],
                
                
                ['마이페이지','','상품문의 목록','','/views/mo/MY/CW_MO_FO_MY_04_02_01','/cowell/mo/MY_04_02_01','페이지','목록 클릭 시 상세 노출'],
                ['마이페이지','','상품문의 작성','','/views/mo/GD/CW_MO_FO_GD_03_03_02','','팝업','[상품문의하기] 클릭 시 [상품문의 작성] 팝업 노출'],
                ['마이페이지','','작성가능 리뷰 목록','','/views/mo/MY/CW_MO_FO_MY_04_03_01','/cowell/mo/MY_04_03_01','페이지','[상품리뷰] 클릭 시 [리뷰 작성] 팝업 노출'],
                ['마이페이지','','작성한 리뷰 목록','','/views/mo/MY/CW_MO_FO_MY_04_03_02','/cowell/mo/MY_04_03_02','페이지',''],
                ['마이페이지','','관심상품 목록','','/views/mo/MY/CW_MO_FO_MY_04_04_01','/cowell/mo/MY_04_04_01','페이지',''],
                ['마이페이지','','관심브랜드 목록','','/views/mo/MY/CW_MO_FO_MY_04_05_01','/cowell/mo/MY_04_05_01','페이지',''],

                ['마이페이지','나의정보','회원정보수정','비밀번호확인','/views/mo/MY/CW_MO_FO_MY_05_01_01','/cowell/mo/MY_05_01_01','페이지',''],
                ['마이페이지','','','회원정보수정','/views/mo/MY/CW_MO_FO_MY_05_01_02','/cowell/mo/MY_05_01_02','페이지','[중복확인] 클릭 시 [중복확인] 팝업 노출'],

                ['마이페이지','','간편로그인연결','','/views/mo/MY/CW_MO_FO_MY_05_02_01','/cowell/mo/MY_05_02_01','페이지',''],
                ['마이페이지','','회원등급안내','','/views/mo/MY/CW_MO_FO_MY_05_03_01','/cowell/mo/MY_05_03_01','페이지',''],
                ['마이페이지','','배송지 관리','자주쓰는 배송지','/views/mo/MY/CW_MO_FO_MY_05_04_01','/cowell/mo/MY_05_04_01','페이지','[배송지 추가] 클릭 시 등록 팝업 노출'],
                ['마이페이지','','회원탈퇴','','/views/mo/MY/CW_MO_FO_MY_05_06_01','/cowell/mo/MY_05_06_01','페이지',''],

                ['상품상세','','','','/views/mo/GD/CW_MO_FO_GD_01_01_01','/cowell/mo/GD_01_01_01','페이지','[장바구니] 클릭 시 팝업 노출, [상품 정보 고시] / [추천상품], [배송/교환/환불정책 콘텐츠 내 배치'],
                ['상품상세','','공유하기','','/views/mo/GD/CW_MO_FO_GD_01_01_04','','팝업','[공유하기] 클릭 시 노출'],
                ['상품상세','','상품할인','','/views/mo/GD/CW_MO_FO_GD_01_01_05','','팝업','가격 옆 (?) 클릭 시 노출'],
                ['상품상세','','쿠폰받기','','/views/mo/GD/CW_MO_FO_GD_01_01_06','','팝업','[쿠폰받기] 클릭 시 노출'],
                ['상품상세','','포토리뷰','','/views/mo/GD/CW_MO_FO_GD_03_02_02','','팝업','[포토] 리스트 클릭 시 노출'],
                ['상품상세','','포토리뷰 전체 보기','','/views/mo/GD/CW_MO_FO_GD_03_02_03','','팝업','포토리뷰 [더보기] 클릭 시 노출'],
                ['상품상세','','신고하기','','/views/mo/GD/CW_MO_FO_GD_03_02_04','','팝업','[신고] 클릭 시 노출'],
                ['상품상세','','문의하기','','/views/mo/GD/CW_MO_FO_GD_03_03_02','','팝업','[상품 문의하기] 클릭 시 노출'],
                ['상품상세','','리뷰작성','','/views/mo/GD/CW_MO_FO_GD_03_02_01','','팝업','[상품 리뷰 작성하기] 클릭 시 노출'],
                ['상품상세','','카드사별 할인혜택','','/views/mo/OD/CW_MO_FO_OD_01_02_03','','팝업','[카드사별 혜택안내] 클릭 시 노출'],
                /***************************** */
                // ['상품상세','','사이즈 가이드','','/views/pc/GD/CW_PC_FO_GD_01_01_03','','팝업','[사이즈 가이드] 클릭 시 노출'],
                /********************************** */

                ['이벤트','기획전','목록','','/views/mo/PM/CW_MO_FO_PM_04_01_01','/cowell/mo/PM_04_01_01','페이지',''],
                ['이벤트','','상세','','/views/mo/PM/CW_MO_FO_PM_05_01_01','/cowell/mo/PM_05_01_01','페이지','[공유하기] 클릭 시 팝업 노출'],                
                ['이벤트','이벤트','목록','','/views/mo/PM/CW_MO_FO_PM_06_01_01','/cowell/mo/PM_06_01_01','페이지',''],
                ['이벤트','','상세','','/views/mo/PM/CW_MO_FO_PM_07_01_01','/cowell/mo/PM_07_01_01','페이지','[댓글쓰기] 포함'],

                ['장바구니','빈장바구니','','','/views/mo/OD/CW_MO_FO_OD_01_01_01','/cowell/mo/OD_01_01_01','페이지','빈 장바구니 콘텐츠 포함'],
                ['장바구니','','','','/views/mo/OD/CW_MO_FO_OD_01_02_01','/cowell/mo/OD_01_02_01','페이지',''],
                ['장바구니','옵션변경','','','/views/mo/OD/CW_MO_FO_OD_01_02_02','','팝업','[옵션변경] 클릭 시 팝업 노출'],
                ['장바구니','무이자 할부안내','','','/views/mo/OD/CW_MO_FO_OD_01_02_03','','팝업','[무이자 할부 안내] 클릭 시 팝업 노출'],
                /****************************** */

                ['주문서','주문정보','회원','','/views/mo/OD/CW_MO_FO_OD_02_01_01','/cowell/mo/OD_02_01_01','페이지',''],
                ['주문서','','비회원','','/views/mo/OD/CW_MO_FO_OD_02_01_01-1','/cowell/mo/OD_02_01_01-1','페이지',''],
                ['주문서','','선물하기','','/views/mo/OD/CW_MO_FO_OD_02_01_01-2','/cowell/mo/OD_02_01_01-2','페이지',''],
                ['주문서','','배송지목록','','/views/mo/OD/CW_MO_FO_OD_02_03_01','','팝업','/views/mo/OD/CW_MO_FO_OD_02_01_01 [배송지 목록] 클릭 시 팝업 노출'],
                ['주문서','','배송지추가','','/views/mo/OD/CW_MO_FO_OD_02_03_02','','팝업','배송지목록 팝업 [신규배송지 등록] 클릭 시 팝업 노출'],
                ['주문서','','쿠폰조회/적용','','/views/mo/OD/CW_MO_FO_OD_02_03_03','','팝업','','/views/pc/OD/CW_MO_FO_OD_02_01_01 할인적용 > [조회/적용] 클릭 시 팝업 노출'],
                ['주문서','','주소검색','','/views/mo/OD/CW_MO_FO_OD_02_04_01','','팝업','[주소검색] 클릭 시 팝업 노출'],
                ['주문서','','개인정보수집','','/views/mo/OD/CW_MO_FO_OD_02_05_01','','팝업','개인정보 수집 및 이용 동의 [더보기] 클릭 시 팝업 노출'],

                ['주문서','주문완료','','','/views/mo/OD/CW_MO_FO_OD_03_01_01','/cowell/mo/OD_03_01_01','페이지','주문/선물하기 완료 혼합 배치'],
                ['주문서','주문실패','','','/views/mo/OD/CW_MO_FO_OD_04_01_01','/cowell/mo/OD_04_01_01','페이지',''],
                ['고객센터','메인','','','/views/mo/CC/CW_MO_FO_CC_01_01_01','/cowell/mo/CC_01_01_01','페이지',''],
                ['고객센터','공지사항','','','/views/mo/CC/CW_MO_FO_CC_02_01_01','/cowell/mo/CC_02_01_01','페이지',''],
                ['고객센터','자주하는질문','','','/views/mo/CC/CW_MO_FO_CC_03_01_01','/cowell/mo/CC_03_01_01','페이지',''],
            ];
            var list_Arry_pc = [
                //PC
                ['공통','헤더','','','/layout/pc/Header.vue','','공통',''],
                ['공통','전체메뉴','','','/layout/pc/GlobalMenu.vue','','공통',''],
                ['공통','브랜드레이어','','','/layout/pc/BrandsLayer.vue','','공통',''],
                ['공통','푸터','','','/layout/pc/Footer.vue','','공통',''],
                ['공통','이용약관','','','/views/pc/CM/CW_PC_FO_CM_05_01_01','/cowell/pc/CM_05_01_01','페이지',''],
                ['공통','비회원 약관 동의','','','/views/pc/CM/CW_PC_FO_CM_05_01_02','/cowell/pc/CM_05_01_02','페이지',''],
                ['공통','개인정보처리방침','','','/views/pc/CM/CW_PC_FO_CM_06_01_01','/cowell/pc/CM_06_01_01','페이지',''],
                ['공통','제휴안내','','','/views/pc/CM/CW_PC_FO_CM_07_01_01','/cowell/pc/CM_07_01_01','페이지',''],
                ['공통','404에러','','','/views/pc/CM/CW_PC_FO_CM_10_01_01','/cowell/pc/CM_10_01_01','페이지',''],

                ['통합몰 메인','','','','/views/pc/CM/CW_PC_FO_CM_08_01_01','/cowell','페이지',''],

                ['브랜드 전용관','메인','','','/views/pc/DP/CW_PC_FO_DP_01_01_01','/cowell/pc/DP_01_01_01','페이지',''],
                ['브랜드 전용관','브랜드 카테고리','','','/views/pc/DP/CW_PC_FO_DP_02_01_01','/cowell/pc/DP_02_01_01','페이지',''],
                ['브랜드 전용관','브랜드 베스트','','','/views/pc/DP/CW_PC_FO_DP_03_01_01','/cowell/pc/DP_03_01_01','페이지',''],
                ['브랜드 전용관','브랜드 신상품','','','/views/pc/DP/CW_PC_FO_DP_04_01_01','/cowell/pc/DP_04_01_01','페이지',''],
                
                ['브랜드관','메인','','','/views/pc/DP/CW_PC_FO_DP_05_01_01','/cowell/pc/DP_05_01_01','페이지',''],
                ['브랜드관','','브랜드 카테고리','','/views/pc/DP/CW_PC_FO_DP_05_02_01','/cowell/pc/DP_05_02_01','페이지',''],

                ['상품 카테고리','카테고리','','','/views/pc/DP/CW_PC_FO_DP_06_01_01','/cowell/pc/DP_06_01_01','페이지','선택 카테고리 <li class="current"> 적용 필요'],
                ['상품 카테고리','','서브카테고리','','/views/pc/DP/CW_PC_FO_DP_06_02_01','/cowell/pc/DP_06_02_01','페이지',''],

                ['검색','검색 팝업','','','/views/pc/DP/CW_PC_FO_DP_07_01_01','','팝업','헤더 검색 버튼 클릭 시 노출'],
                ['검색','검색결과 없음','','','/views/pc/DP/CW_PC_FO_DP_07_02_01','/cowell/pc/DP_07_02_01','페이지',''],
                ['검색','검색결과 있음','','','/views/pc/DP/CW_PC_FO_DP_07_02_02','/cowell/pc/DP_07_02_02','페이지',''],
                ['검색','검색결과 브랜드','','','/views/pc/DP/CW_PC_FO_DP_07_02_03','/cowell/pc/DP_07_02_03','페이지',''],
                ['검색','검색결과 기획전','','','/views/pc/DP/CW_PC_FO_DP_07_02_04','/cowell/pc/DP_07_02_04','페이지',''],

                ['로그인','회원 로그인','','','/views/pc/MB/CW_PC_FO_MB_01_01_01','/cowell/pc/MB_01_01_01','페이지',''],
                ['로그인','SNS 로그인','','','/views/pc/MB/CW_PC_FO_MB_01_03_01','/cowell/pc/MB_01_03_01','팝업','해당로고 클래스로 처리, 로그인 페이지에서 하단 SNS 클릭 시 노출'],
                ['로그인','휴면계정안내','','','/views/pc/MB/CW_PC_FO_MB_01_07_01','/cowell/pc/MB_01_07_01','페이지',''],
                ['로그인','휴면계정복구완료','','','/views/pc/MB/CW_PC_FO_MB_01_07_02','/cowell/pc/MB_01_07_02','페이지',''],                
                // ['로그인','휴면계정복구 후 비밀번호설정','','','/views/pc/MB/CW_PC_FO_MB_01_08_03',"/cowell/pc/MB_01_08_03",'페이지',''],

                ['아이디','아이디 찾기','','','/views/pc/MB/CW_PC_FO_MB_02_01_01',"/cowell/pc/MB_02_01_01",'페이지',''],
                ['아이디','찾기 완료','','','/views/pc/MB/CW_PC_FO_MB_03_01_01',"/cowell/pc/MB_03_01_01",'페이지',''],

                ['비밀번호','비밀번호 찾기','','','/views/pc/MB/CW_PC_FO_MB_04_01_01',"/cowell/pc/MB_04_01_01",'페이지',''],
                ['비밀번호','비밀번호 변경','','','/views/pc/MB/CW_PC_FO_MB_05_01_01',"/cowell/pc/MB_05_01_01",'페이지',''],

                ['회원가입','가입 안내','','','/views/pc/MB/CW_PC_FO_MB_08_01_01','/cowell/pc/MB_08_01_01','페이지',''],
                ['회원가입','휴대폰인증','','','/views/pc/MB/CW_PC_FO_MB_09_01_01','/cowell/pc/MB_09_01_01','페이지',''],
                ['회원가입','약관동의','','','/views/pc/MB/CW_PC_FO_MB_10_01_01','/cowell/pc/MB_10_01_01','페이지',''],
                ['회원가입','이용약관','','','/views/pc/MB/CW_MO_FO_MB_10_02_01','','팝업','약관 ">" 버튼 클릭 시 노출'],
                ['회원가입','정보입력','','','/views/pc/MB/CW_PC_FO_MB_11_01_01','/cowell/pc/MB_11_01_01','페이지',''],
                ['회원가입','가입완료','','','/views/mo/MB/CW_MO_FO_MB_12_01_01','','팝업','[회원가입] 버튼 클릭 시 노출'],

                ['마이페이지','메인','','','/views/pc/MY/CW_PC_FO_MY_01_01_01','/cowell/pc/MY_01_01_01','페이지',''],
                ['마이페이지','나의쇼핑','주문/배송 목록','','/views/pc/MY/CW_PC_FO_MY_02_01_01','/cowell/pc/MY_02_01_01','페이지','캘린더 관련 스크립트 적용'],
                ['마이페이지','','주문/배송 상세','','/views/pc/MY/CW_PC_FO_MY_02_01_02','/cowell/pc/MY_02_01_02','페이지',''],
                ['마이페이지','','반품/교환 목록','','/views/pc/MY/CW_PC_FO_MY_02_02_01','/cowell/pc/MY_02_02_01','페이지',''],
                ['마이페이지','','반품/교환 상세','','/views/pc/MY/CW_PC_FO_MY_02_02_02','/cowell/pc/MY_02_02_02','페이지',''],
                ['마이페이지','','반품/교환 신청','','/views/pc/MY/CW_PC_FO_MY_02_02_03','/cowell/pc/MY_02_02_03','페이지',''],

                ['마이페이지','','취소/환불 목록','','/views/pc/MY/CW_PC_FO_MY_02_03_01','/cowell/pc/MY_02_03_01','페이지',''],
                ['마이페이지','','취소/환불 상세','','/views/pc/MY/CW_PC_FO_MY_02_03_02','/cowell/pc/MY_02_03_02','페이지',''],
                ['마이페이지','','취소/환불 신청','','/views/pc/MY/CW_PC_FO_MY_02_03_03','/cowell/pc/MY_02_03_03','페이지',''],

                ['마이페이지','','선물 목록','','/views/pc/MY/CW_PC_FO_MY_02_04_01','/cowell/pc/MY_02_04_01','페이지',''],
                ['마이페이지','','보낸선물 상세','','/views/pc/MY/CW_PC_FO_MY_02_04_02','/cowell/pc/MY_02_04_02','페이지',''],
                ['마이페이지','','받은선물 상세','','/views/pc/MY/CW_PC_FO_MY_02_04_03','/cowell/pc/MY_02_04_03','페이지',''],

                ['마이페이지','나의혜택','보유 쿠폰 목록','','/views/pc/MY/CW_PC_FO_MY_03_01_01','/cowell/pc/MY_03_01_01','페이지','쿠폰 상세 팝업 포함'],
                ['마이페이지','','발급가능 쿠폰 목록','','/views/pc/MY/CW_PC_FO_MY_03_01_02','/cowell/pc/MY_03_01_02','페이지',''],
                ['마이페이지','','포인트내역','','/views/pc/MY/CW_PC_FO_MY_03_02_01','/cowell/pc/MY_03_02_01','페이지',''],
                ['마이페이지','','임직원혜택','','/views/pc/MY/CW_PC_FO_MY_03_03_01','/cowell/pc/MY_03_03_01','페이지',''],

                ['마이페이지','나의활동','1:1문의 목록','','/views/pc/MY/CW_PC_FO_MY_04_01_01','/cowell/pc/MY_04_01_01','페이지',''],
                ['마이페이지','','1:1문의 쓰기','','/views/pc/MY/CW_PC_FO_MY_04_01_04','/cowell/pc/MY_04_01_04','페이지',''],
                ['마이페이지','','상품문의 목록','','/views/pc/MY/CW_PC_FO_MY_04_02_01','/cowell/pc/MY_04_02_01','페이지','목록 클릭 시 상세 노출'],
                ['마이페이지','','상품문의 작성','','/views/pc/GD/CW_PC_FO_GD_03_03_02','','팝업','[상품문의하기] 클릭 시 [상품문의 작성] 팝업 노출'],
                ['마이페이지','','작성가능 리뷰 목록','','/views/pc/MY/CW_PC_FO_MY_04_03_01','/cowell/pc/MY_04_03_01','페이지','[상품리뷰] 클릭 시 [리뷰 작성] 팝업 노출'],
                ['마이페이지','','작성한 리뷰 목록','','/views/pc/MY/CW_PC_FO_MY_04_03_02','/cowell/pc/MY_04_03_02','페이지',''],
                
                ['마이페이지','','관심상품 목록','','/views/pc/MY/CW_PC_FO_MY_04_04_01','/cowell/pc/MY_04_04_01','페이지',''],
                ['마이페이지','','관심브랜드 목록','','/views/pc/MY/CW_PC_FO_MY_04_04_02','/cowell/pc/MY_04_04_02','페이지',''],
                ['마이페이지','','최근 본 상품','','/views/pc/MY/CW_PC_FO_MY_04_06_01','/cowell/pc/MY_04_06_01','페이지',''],

                ['마이페이지','나의정보','회원정보수정','비밀번호확인','/views/pc/MY/CW_PC_FO_MY_05_01_01','/cowell/pc/MY_05_01_01','페이지',''],
                ['마이페이지','','','회원정보수정','/views/pc/MY/CW_PC_FO_MY_05_01_02','/cowell/pc/MY_05_01_02','페이지','[중복확인] 클릭 시 [중복확인] 팝업 노출'],

                ['마이페이지','','간편로그인연결','','/views/pc/MY/CW_PC_FO_MY_05_02_01','/cowell/pc/MY_05_02_01','페이지',''],
                ['마이페이지','','회원등급안내','','/views/pc/MY/CW_PC_FO_MY_05_03_01','/cowell/pc/MY_05_03_01','페이지',''],
                ['마이페이지','','배송지 관리','자주쓰는 배송지','/views/pc/MY/CW_PC_FO_MY_05_04_01','/cowell/pc/MY_05_04_01','페이지','[배송지 추가] 클릭 시 등록 팝업 노출'],
                ['마이페이지','','회원탈퇴','','/views/pc/MY/CW_PC_FO_MY_05_06_01','/cowell/pc/MY_05_06_01','페이지',''],

                ['상품상세','','','','/views/pc/GD/CW_PC_FO_GD_01_01_01','/cowell/pc/GD_01_01_01','페이지','[장바구니] 클릭 시 팝업 노출, [상품 정보 고시] / [추천상품], [배송/교환/환불정책 콘텐츠 내 배치'],
                ['상품상세','','사이즈 가이드','','/views/pc/GD/CW_PC_FO_GD_01_01_03','','팝업','[사이즈 가이드] 클릭 시 노출'],
                ['상품상세','','공유하기','','/views/pc/GD/CW_PC_FO_GD_01_01_04','','팝업','[공유하기] 클릭 시 노출'],
                ['상품상세','','상품할인','','/views/pc/GD/CW_PC_FO_GD_01_01_05','','팝업','가격 옆 (?) 클릭 시 노출'],
                ['상품상세','','쿠폰받기','','/views/pc/GD/CW_PC_FO_GD_01_01_06','','팝업','[쿠폰받기] 클릭 시 노출'],
                ['상품상세','','포토리뷰','','/views/pc/GD/CW_PC_FO_GD_03_02_02','','팝업','[포토] 리스트 클릭 시 노출'],
                ['상품상세','','포토리뷰 전체 보기','','/views/pc/GD/CW_PC_FO_GD_03_02_03','','팝업','포토리뷰 [더보기] 클릭 시 노출'],
                ['상품상세','','신고하기','','/views/pc/GD/CW_PC_FO_GD_03_02_04','','팝업','[신고] 클릭 시 노출'],
                ['상품상세','','문의하기','','/views/pc/GD/CW_PC_FO_GD_03_03_02','','팝업','[상품 문의하기] 클릭 시 노출'],
                ['상품상세','','리뷰작성','','/views/pc/GD/CW_PC_FO_GD_03_02_01','','팝업','[상품 리뷰 작성하기] 클릭 시 노출'],
                ['상품상세','','카드사별 할인혜택','','/views/pc/OD/CW_PC_FO_OD_01_02_03','','팝업','[카드사별 혜택안내] 클릭 시 노출'],

                ['이벤트','기획전','목록','','/views/pc/PM/CW_PC_FO_PM_04_01_01','/cowell/pc/PM_04_01_01','페이지',''],
                ['이벤트','','상세','','/views/pc/PM/CW_PC_FO_PM_05_01_01','/cowell/pc/PM_05_01_01','페이지','[공유하기] 클릭 시 팝업 노출'],
                ['이벤트','이벤트','목록','','/views/pc/PM/CW_PC_FO_PM_06_01_01','/cowell/pc/PM_06_01_01','페이지',''],
                ['이벤트','','상세','','/views/pc/PM/CW_PC_FO_PM_07_01_01','/cowell/pc/PM_07_01_01','페이지','[댓글쓰기] 포함'],

                ['장바구니','','','','/views/pc/OD/CW_PC_FO_OD_01_02_01','/cowell/pc/OD_01_02_01','페이지','빈 장바구니 콘텐츠 포함'],
                ['장바구니','옵션변경','','','/views/pc/OD/CW_PC_FO_OD_01_02_02','','팝업','[옵션변경] 클릭 시 팝업 노출'],
                ['장바구니','무이자 할부안내','','','/views/pc/OD/CW_PC_FO_OD_01_02_03','','팝업','[무이자 할부 안내] 클릭 시 팝업 노출'],

                ['주문서','주문정보','회원','','/views/pc/OD/CW_PC_FO_OD_02_01_01','/cowell/pc/OD_02_01_01','페이지',''],
                ['주문서','','비회원','','/views/pc/OD/CW_PC_FO_OD_02_01_01-1','/cowell/pc/OD_02_01_01-1','페이지',''],
                ['주문서','','선물하기','','/views/pc/OD/CW_PC_FO_OD_02_01_01-2','/cowell/pc/OD_02_01_01-2','페이지',''],
                ['주문서','','배송지목록','','/views/pc/OD/CW_PC_FO_OD_02_03_01','','팝업','/views/pc/OD/CW_PC_FO_OD_02_01_01 [배송지 목록] 클릭 시 팝업 노출'],
                ['주문서','','배송지추가','','/views/pc/OD/CW_PC_FO_OD_02_03_02','','팝업','배송지목록 팝업 [신규배송지 등록] 클릭 시 팝업 노출'],
                ['주문서','','쿠폰조회/적용','','/views/pc/OD/CW_PC_FO_OD_02_03_03','','팝업','','/views/pc/OD/CW_PC_FO_OD_02_01_01 할인적용 > [조회/적용] 클릭 시 팝업 노출'],
                ['주문서','','주소검색','','/views/pc/OD/CW_PC_FO_OD_02_04_01','','팝업','[주소검색] 클릭 시 팝업 노출'],
                ['주문서','','개인정보수집','','/views/pc/OD/CW_PC_FO_OD_02_05_01','','팝업','개인정보 수집 및 이용 동의 [더보기] 클릭 시 팝업 노출'],
                ['주문서','주문완료','','','/views/pc/OD/CW_PC_FO_OD_03_01_01','/cowell/pc/OD_03_01_01','페이지','주문/선물하기 완료 혼합 배치'],
                ['주문서','주문실패','','','/views/pc/OD/CW_PC_FO_OD_04_01_01','/cowell/pc/OD_04_01_01','페이지',''],

                ['고객센터','메인','','','/views/pc/CC/CW_PC_FO_CC_01_01_01','/cowell/pc/CC_01_01_01','페이지',''],
                ['고객센터','공지사항','','','/views/pc/CC/CW_PC_FO_CC_02_01_01','/cowell/pc/CC_02_01_01','페이지',''],
                ['고객센터','자주하는질문','','','/views/pc/CC/CW_PC_FO_CC_03_01_01','/cowell/pc/CC_03_01_01','페이지',''],
            ];

            for (var i=0; i<list_Arry_com.length;i++) {
                $('[data="comm"] tbody').append('<tr>'
                +   '<td>'+list_Arry_com[i][0]+'</td>' // 1depth
                +   '<td>'+list_Arry_com[i][1]+'</td>' // 2depth
                // <router-link to="/cowell/mo/MB_08_01_01">
                +   '<td class="ac"><a href="'+list_Arry_com[i][2]+'" target="_blank">'+list_Arry_com[i][2]+'</a></td>'
                +   '<td class="ac">'+list_Arry_com[i][3]+'</td>'
                +   '<td class="ac">'+list_Arry_com[i][4]+'</td>'
                +'</tr>');
            }
            for (var i=0; i<list_Arry_pc.length;i++) {
                $('[data="pc"] tbody').append('<tr>'
                +   '<td>'+list_Arry_pc[i][0]+'</td>' //1depth
                +   '<td>'+list_Arry_pc[i][1]+'</td>' //2depth
                +   '<td>'+list_Arry_pc[i][2]+'</td>' //3depth
                +   '<td>'+list_Arry_pc[i][3]+'</td>' //4depth
                +   '<td>'+list_Arry_pc[i][4]+'</td>'
                +   '<td class="ac"><a href="'+list_Arry_pc[i][5]+'" target="_blank">'+list_Arry_pc[i][5]+'</a></td>'
                +   '<td class="ac">'+list_Arry_pc[i][6]+'</td>'
                +   '<td>'+list_Arry_pc[i][7]+'</td>'
                +'</tr>');
            }
            for (var i=0; i<list_Arry_mo.length;i++) {
                $('[data="mo"] tbody').append('<tr>'
                +   '<td>'+list_Arry_mo[i][0]+'</td>' //1depth
                +   '<td>'+list_Arry_mo[i][1]+'</td>' //2depth
                +   '<td>'+list_Arry_mo[i][2]+'</td>' //3depth
                +   '<td>'+list_Arry_mo[i][3]+'</td>' //4depth
                +   '<td>'+list_Arry_mo[i][4]+'</td>'
                +   '<td class="ac"><a href="'+list_Arry_mo[i][5]+'" target="_blank">'+list_Arry_mo[i][5]+'</a></td>'
                +   '<td class="ac">'+list_Arry_mo[i][6]+'</td>'
                +   '<td>'+list_Arry_mo[i][7]+'</td>'
                +'</tr>');
            }

            var row_array = [],
                obj;

            for(var i=0; i<$('.active + dd table tbody tr').length; i++){
                obj = $('.active + dd table tbody tr');
                if(obj.eq(i+1).find('td').eq(0).text().indexOf(obj.eq(i).find('td').eq(0).text()) > -1){
                    row_array.push(i);
                } else {
                    obj.eq(row_array[0]).find('td').eq(0).attr('rowspan',(row_array.length + 1));
                    for(var j = 0; j<row_array.length; j++){
                        obj.eq((row_array[j]+1)).find('td').eq(0).remove();
                    }

                    row_array = [];
                }
            }

            $('.tab li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
                $('dl').find('dt').removeClass('active');
                $('dl').find('dt').eq($(this).index()).addClass('active');

                var row_array = [],
                    obj;
                
                if($('.active + dd table tbody tr').eq(0).find('td').eq(0).prop('rowspan') == 1){
                    for(var i=0; i<$('.active + dd table tbody tr').length; i++){
                        obj = $('.active + dd table tbody tr');
                        if(obj.eq(i+1).find('td').eq(0).text().indexOf(obj.eq(i).find('td').eq(0).text()) > -1){
                            row_array.push(i);
                        } else {
                            obj.eq(row_array[0]).find('td').eq(0).attr('rowspan',(row_array.length + 1));
                            for(var j = 0; j<row_array.length; j++){
                                obj.eq((row_array[j]+1)).find('td').eq(0).remove();
                            }

                            row_array = [];
                        }
                    }
                }
            });
        });
    },
}
</script>

<style scoped>
.tab {padding:0; color:#222; border-bottom:1px solid #d9d9d9; list-style:none; display:flex;}
.tab li {padding:8px 50px; border:1px solid transparent; border-bottom:0; text-align:center;}
.tab li.active {color:#fff; background-color:#222; border-color:#222;}

dt {margin-bottom:20px; font-weight:700; display:none;}
dd {margin:0; display:none;}
dt.components {margin-top:50px;}

dt.active, dt.components, dt.active + dd, dt.components + dd {display:block;}

.list_wrap {padding:20px;}
table {width:100%; border:2px solid #333; table-layout: fixed; border-spacing: 0; border-collapse: collapse;}
table::v-deep th, table::v-deep td {padding:8px 10px; font-size:12px; word-break:break-all; border:1px solid #5c5c5c;}
thead {background-color:#b6b6b6;}
table::v-deep tbody tr:nth-child(even) {background-color:#e8f1f6;}
a {color:#222; line-height:1.8; border-bottom:1px solid #222;}
table::v-deep .ac {text-align:center;}

</style>
