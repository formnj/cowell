const routes = [
    { //PC
        path: '/cowell/',
        component: () => import("@/views/pc/pc_wrap"),
        name: 'pc',
        children: [
            {
                path: '/cowell/',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_08_01_01"),
            },
            {
                path: '/cowell/none',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_08_01_01"),
            },
            { //모듈집합
                path: '/cowell/pc/module',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_08_01_01-1"),
            },
            { //이용약관
                path: '/cowell/pc/CM_05_01_01',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_05_01_01"),
            },
            { //비회원 약관 동의
                path: '/cowell/pc/CM_05_01_02',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_05_01_02"),
            },
            { //개인정보처리방침
                path: '/cowell/pc/CM_06_01_01',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_06_01_01"),
            },
            { //제휴안내
                path: '/cowell/pc/CM_07_01_01',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_07_01_01"),
            },
            { //404 Error
                path: '/cowell/pc/CM_10_01_01',
                component: () => import("@/views/pc/CM/CW_PC_FO_CM_10_01_01"),
            },
            { //브랜드메인
                path: "/cowell/pc/DP_01_01_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_01_01_01"),
            },
            { //브랜드카테고리
                path: "/cowell/pc/DP_02_01_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_02_01_01"),
            },
            { //브랜드BEST
                path: "/cowell/pc/DP_03_01_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_03_01_01"),
            },
            { //브랜드신상품
                path: "/cowell/pc/DP_04_01_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_04_01_01"),
            },
            { //브랜드관메인
                path: "/cowell/pc/DP_05_01_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_05_01_01"),
            },
            { //브랜드카테고리
                path: "/cowell/pc/DP_05_02_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_05_02_01"),
            },
            { //카테고리
                path: "/cowell/pc/DP_06_01_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_06_01_01"),
            },
            { //서브카테고리
                path: "/cowell/pc/DP_06_02_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_06_02_01"),
            },
            { //검색결과 없음
                path: "/cowell/pc/DP_07_02_01",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_07_02_01"),
            },
            { //검색결과 있음
                path: "/cowell/pc/DP_07_02_02",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_07_02_02"),
            },
            { //검색결과 브랜드
                path: "/cowell/pc/DP_07_02_03",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_07_02_03"),
            },
            { //검색결과 기획전
                path: "/cowell/pc/DP_07_02_04",
                component: () => import("@/views/pc/DP/CW_PC_FO_DP_07_02_04"),
            },
            { //회원가입
                path: "/cowell/pc/MB_08_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_08_01_01")
            },
            {
                path: "/cowell/pc/MB_09_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_09_01_01")
            },
            {
                path: "/cowell/pc/MB_10_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_10_01_01")
            },
            {
                path: "/cowell/pc/MB_11_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_11_01_01")
            },
            { //로그인
                path: "/cowell/pc/MB_01_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_01_01_01")
            },
            { //휴면계정안내
                path: "/cowell/pc/MB_01_07_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_01_07_01")
            },
            { //휴면계정복구완료
                path: "/cowell/pc/MB_01_07_02",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_01_07_02")
            },
            { //휴면계정복구완료 후 비밀번호설정
                path: "/cowell/pc/MB_01_08_03",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_01_08_03")
            },
            { //아이디찾기
                path: "/cowell/pc/MB_02_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_02_01_01")
            },
            { //아이디찾기완료
                path: "/cowell/pc/MB_03_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_03_01_01")
            },
            { //비밀번호찾기
                path: "/cowell/pc/MB_04_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_04_01_01")
            },
            { //비밀번호변경
                path: "/cowell/pc/MB_05_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_05_01_01")
            },
            { //비회원 주문조회
                path: "/cowell/pc/MB_06_01_01",
                component: () => import("@/views/pc/MB/CW_PC_FO_MB_06_01_01")
            },

            { //장바구니
                path: "/cowell/pc/OD_01_02_01",
                component: () => import("@/views/pc/OD/CW_PC_FO_OD_01_02_01")
            },
            
            { //주문서
                path: "/cowell/pc/OD_02_01_01",
                component: () => import("@/views/pc/OD/CW_PC_FO_OD_02_01_01")
            },
            { //주문서-비회원
                path: "/cowell/pc/OD_02_01_01-1",
                component: () => import("@/views/pc/OD/CW_PC_FO_OD_02_01_01-1")
            },
            { //주문서-선물하기
                path: "/cowell/pc/OD_02_01_01-2",
                component: () => import("@/views/pc/OD/CW_PC_FO_OD_02_01_01-2")
            },
            { //주문완료
                path: "/cowell/pc/OD_03_01_01",
                component: () => import("@/views/pc/OD/CW_PC_FO_OD_03_01_01")
            },
            { //주문처리실패
                path: "/cowell/pc/OD_04_01_01",
                component: () => import("@/views/pc/OD/CW_PC_FO_OD_04_01_01")
            },

            { //상품상세
                path: "/cowell/pc/GD_01_01_01",
                component: () => import("@/views/pc/GD/CW_PC_FO_GD_01_01_01")
            },

            { //기획전목록
                path: "/cowell/pc/PM_04_01_01",
                component: () => import("@/views/pc/PM/CW_PC_FO_PM_04_01_01")
            },
            { //기획전상세
                path: "/cowell/pc/PM_05_01_01",
                component: () => import("@/views/pc/PM/CW_PC_FO_PM_05_01_01")
            },
            { //이벤트목록
                path: "/cowell/pc/PM_06_01_01",
                component: () => import("@/views/pc/PM/CW_PC_FO_PM_06_01_01")
            },
            { //이벤트상세
                path: "/cowell/pc/PM_07_01_01",
                component: () => import("@/views/pc/PM/CW_PC_FO_PM_07_01_01")
            },
            { //고객센터 메인
                path: "/cowell/pc/CC_01_01_01",
                component: () => import("@/views/pc/CC/CW_PC_FO_CC_01_01_01")
            },
            { //공지사항
                path: "/cowell/pc/CC_02_01_01",
                component: () => import("@/views/pc/CC/CW_PC_FO_CC_02_01_01")
            },
            { //자주하는질문
                path: "/cowell/pc/CC_03_01_01",
                component: () => import("@/views/pc/CC/CW_PC_FO_CC_03_01_01")
            },

            { // 마이페이지 메인
                path: "/cowell/pc/MY_01_01_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_01_01_01")
            },
            { // 주문/배송 목록
                path: "/cowell/pc/MY_02_01_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_01_01")
            },
            { // 주문/배송 상세
                path: "/cowell/pc/MY_02_01_02",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_01_02")
            },
            { // 반품/교환 목록
                path: "/cowell/pc/MY_02_02_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_02_01")
            },
            { // 반품/교환 상세
                path: "/cowell/pc/MY_02_02_02",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_02_02")
            },
            { // 반품/교환 신청 (화면ID 추가)
                path: "/cowell/pc/MY_02_02_03",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_02_03")
            },
            // { // 반품/교환 불가 (화면ID 추가)
            //     path: "/cowell/pc/MY_02_02_04",
            //     component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_02_04")
            // },
            { // 취소/환불 목록
                path: "/cowell/pc/MY_02_03_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_03_01")
            },
            { // 취소/환불 상세
                path: "/cowell/pc/MY_02_03_02",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_03_02")
            },
            { // 취소/환불 신청 (화면ID 추가)
                path: "/cowell/pc/MY_02_03_03",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_03_03")
            },
            { // 선물 목록
                path: "/cowell/pc/MY_02_04_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_04_01")
            },
            { // 보낸선물 상세 (화면ID 변경)
                path: "/cowell/pc/MY_02_04_02",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_04_02")
            },
            { // 받은선물 상세 (화면ID 변경)
                path: "/cowell/pc/MY_02_04_03",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_02_04_03")
            },
            { // 쿠폰 목록(보유)
                path: "/cowell/pc/MY_03_01_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_03_01_01")
            },
            { // 쿠폰 목록(발급가능)
                path: "/cowell/pc/MY_03_01_02",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_03_01_02")
            },
            { // 포인트내역
                path: "/cowell/pc/MY_03_02_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_03_02_01")
            },
            { // 임직원혜택
                path: "/cowell/pc/MY_03_03_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_03_03_01")
            },
            { // 1:1문의 목록
                path: "/cowell/pc/MY_04_01_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_01_01")
            },
            { // 1:1문의 쓰기
                path: "/cowell/pc/MY_04_01_04",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_01_04")
            },
            { // 상품문의 목록
                path: "/cowell/pc/MY_04_02_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_02_01")
            },
            { // 상품리뷰 목록(작성가능)
                path: "/cowell/pc/MY_04_03_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_03_01")
            },
            { // 상품리뷰 목록(작성완료)
                path: "/cowell/pc/MY_04_03_02",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_03_02")
            },
            { // 찜한상품 목록
                path: "/cowell/pc/MY_04_04_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_04_01")
            },
            { // 찜한브랜드 목록
                path: "/cowell/pc/MY_04_05_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_05_01")
            },
            { // 최근 본 상품
                path: "/cowell/pc/MY_04_06_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_04_06_01")
            },
            { // 비밀번호확인
                path: "/cowell/pc/MY_05_01_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_05_01_01")
            },
            { // 회원정보수정
                path: "/cowell/pc/MY_05_01_02",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_05_01_02")
            },
            { // 간편로그인연결
                path: "/cowell/pc/MY_05_02_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_05_02_01")
            },
            { // 회원등급안내
                path: "/cowell/pc/MY_05_03_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_05_03_01")
            },
            { // 배송지 목록
                path: "/cowell/pc/MY_05_04_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_05_04_01")
            },
            { // 회원탈퇴
                path: "/cowell/pc/MY_05_06_01",
                component: () => import("@/views/pc/MY/CW_PC_FO_MY_05_06_01")
            }
        ]
    },
    { //MO
        path: '/mo',
        component: () => import("@/views/mo/mo_wrap"),
        name: 'mo',
        children: [
            { //메인
                path: '/cowell/mo',
                component: () => import("@/views/mo/CM/CW_MO_FO_CM_09_01_01"),
            },
            { //모듈집합
                path: '/cowell/mo/module',
                component: () => import("@/views/mo/CM/CW_MO_FO_CM_09_01_01-1"),
            },
            { //이용약관
                path: '/cowell/mo/CM_06_01_01',
                component: () => import("@/views/mo/CM/CW_MO_FO_CM_06_01_01"),
            },
            { //개인정보취급방침
                path: '/cowell/mo/CM_07_01_01',
                component: () => import("@/views/mo/CM/CW_MO_FO_CM_07_01_01"),
            },
            { //제휴 안내
                path: '/cowell/mo/CM_08_01_01',
                component: () => import("@/views/mo/CM/CW_MO_FO_CM_08_01_01"),
            },
            { //404 Error
                path: '/cowell/mo/CM_10_01_01',
                component: () => import("@/views/mo/CM/CW_MO_FO_CM_10_01_01"),
            },
            { //브랜드메인
                path: "/cowell/mo/DP_01_01_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_01_01_01")
            },
            { //브랜드카테고리
                path: "/cowell/mo/DP_02_01_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_02_01_01"),
            },
            { //브랜드BEST
                path: "/cowell/mo/DP_03_01_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_03_01_01"),
            },
            { //브랜드신상품
                path: "/cowell/mo/DP_04_01_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_04_01_01"),
            },
            { //브랜드관메인
                path: "/cowell/mo/DP_05_01_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_05_01_01"),
            },
            { //브랜드카테고리
                path: "/cowell/mo/DP_05_02_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_05_02_01"),
            },
            { //카테고리
                path: "/cowell/mo/DP_06_01_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_06_01_01"),
            },
            { //서브카테고리
                path: "/cowell/mo/DP_06_02_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_06_02_01"),
            },
            { //검색결과 없음
                path: "/cowell/mo/DP_07_02_01",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_07_02_01"),
            },
            { //검색결과 있음
                path: "/cowell/mo/DP_07_02_02",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_07_02_02"),
            },
            { //검색결과 브랜드
                path: "/cowell/mo/DP_07_02_03",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_07_02_03"),
            },
            { //검색결과 기획전
                path: "/cowell/mo/DP_07_02_04",
                component: () => import("@/views/mo/DP/CW_MO_FO_DP_07_02_04"),
            },
            { //회원가입
                path: "/cowell/mo/MB_08_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_08_01_01")
            },
            {
                path: "/cowell/mo/MB_09_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_09_01_01")
            },
            {
                path: "/cowell/mo/MB_10_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_10_01_01")
            },
            {
                path: "/cowell/mo/MB_11_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_11_01_01")
            },
            { //로그인
                path: "/cowell/mo/MB_01_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_01_01_01")
            },
            { //휴면계정안내
                path: "/cowell/mo/MB_01_07_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_01_07_01")
            },
            { //휴면계정복구완료
                path: "/cowell/mo/MB_01_07_02",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_01_07_02")
            },
            { //휴면계정복구완료 후 비밀번호설정
                path: "/cowell/mo/MB_01_08_03",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_01_08_03")
            },
            { //아이디찾기
                path: "/cowell/mo/MB_02_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_02_01_01")
            },
            { //아이디찾기완료
                path: "/cowell/mo/MB_03_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_03_01_01")
            },
            { //비밀번호찾기
                path: "/cowell/mo/MB_04_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_04_01_01")
            },
            { //비밀번호변경
                path: "/cowell/mo/MB_05_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_05_01_01")
            },
            { //비회원 주문조회
                path: "/cowell/mo/MB_06_01_01",
                component: () => import("@/views/mo/MB/CW_MO_FO_MB_06_01_01")
            },
            { //상품상세
                path: "/cowell/mo/GD_01_01_01",
                component: () => import("@/views/mo/GD/CW_MO_FO_GD_01_01_01")
            },

            { //빈장바구니
                path: "/cowell/mo/OD_01_01_01",
                component: () => import("@/views/mo/OD/CW_MO_FO_OD_01_01_01")
            },
            { //장바구니
                path: "/cowell/mo/OD_01_02_01",
                component: () => import("@/views/mo/OD/CW_MO_FO_OD_01_02_01")
            },

            { //주문서
                path: "/cowell/mo/OD_02_01_01",
                component: () => import("@/views/mo/OD/CW_MO_FO_OD_02_01_01")
            },
            { //주문서-비회원
                path: "/cowell/mo/OD_02_01_01-1",
                component: () => import("@/views/mo/OD/CW_MO_FO_OD_02_01_01-1")
            },
            { //주문서-선물하기
                path: "/cowell/mo/OD_02_01_01-2",
                component: () => import("@/views/mo/OD/CW_MO_FO_OD_02_01_01-2")
            },
            { //주문완료
                path: "/cowell/mo/OD_03_01_01",
                component: () => import("@/views/mo/OD/CW_MO_FO_OD_03_01_01")
            },
            { //주문처리실패
                path: "/cowell/mo/OD_04_01_01",
                component: () => import("@/views/mo/OD/CW_MO_FO_OD_04_01_01")
            },

            { //기획전목록
                path: "/cowell/mo/PM_04_01_01",
                component: () => import("@/views/mo/PM/CW_MO_FO_PM_04_01_01")
            },
            { //기획전상세
                path: "/cowell/mo/PM_05_01_01",
                component: () => import("@/views/mo/PM/CW_MO_FO_PM_05_01_01")
            },
            { //이벤트목록
                path: "/cowell/mo/PM_06_01_01",
                component: () => import("@/views/mo/PM/CW_MO_FO_PM_06_01_01")
            },
            { //이벤트상세
                path: "/cowell/mo/PM_07_01_01",
                component: () => import("@/views/mo/PM/CW_MO_FO_PM_07_01_01")
            },
            { //고객센터 메인
                path: "/cowell/mo/CC_01_01_01",
                component: () => import("@/views/mo/CC/CW_MO_FO_CC_01_01_01")
            },
            { //공지사항
                path: "/cowell/mo/CC_02_01_01",
                component: () => import("@/views/mo/CC/CW_MO_FO_CC_02_01_01")
            },
            { //자주하는질문
                path: "/cowell/mo/CC_03_01_01",
                component: () => import("@/views/mo/CC/CW_MO_FO_CC_03_01_01")
            },

            { // 마이페이지 메인
                path: "/cowell/mo/MY_01_01_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_01_01_01")
            },
            { // 주문/배송 목록
                path: "/cowell/mo/MY_02_01_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_01_01")
            },
            { // 주문/배송 상세
                path: "/cowell/mo/MY_02_01_02",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_01_02")
            },
            { // 반품/교환 목록
                path: "/cowell/mo/MY_02_02_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_02_01")
            },
            { // 반품/교환 상세
                path: "/cowell/mo/MY_02_02_02",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_02_02")
            },
            { // 반품/교환 신청 (화면ID 추가)
                path: "/cowell/mo/MY_02_02_03",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_02_03")
            },
    //         { // 반품/교환 불가 (화면ID 추가)
    //             path: "/cowell/mo/MY_02_02_04",
    //             component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_02_04")
    //         },
            { // 취소/환불 목록
                path: "/cowell/mo/MY_02_03_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_03_01")
            },
            { // 취소/환불 상세
                path: "/cowell/mo/MY_02_03_02",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_03_02")
            },
            { // 취소/환불 신청 (화면ID 추가)
                path: "/cowell/mo/MY_02_03_03",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_03_03")
            },
            { // 선물 목록
                path: "/cowell/mo/MY_02_04_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_04_01")
            },
            { // 보낸선물 상세 (화면ID 변경)
                path: "/cowell/mo/MY_02_04_02",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_04_02")
            },
            { // 받은선물 상세 (화면ID 변경)
                path: "/cowell/mo/MY_02_04_03",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_02_04_03")
            },
            { // 쿠폰 목록(보유)
                path: "/cowell/mo/MY_03_01_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_03_01_01")
            },
            { // 쿠폰 목록(발급가능)
                path: "/cowell/mo/MY_03_01_02",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_03_01_02")
            },
            { // 포인트내역
                path: "/cowell/mo/MY_03_02_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_03_02_01")
            },
            { // 임직원혜택
                path: "/cowell/mo/MY_03_03_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_03_03_01")
            },
            { // 1:1문의 목록
                path: "/cowell/mo/MY_04_01_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_04_01_01")
            },
            { // 1:1문의 쓰기
                path: "/cowell/mo/MY_04_01_04",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_04_01_04")
            },
            { // 상품문의 목록
                path: "/cowell/mo/MY_04_02_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_04_02_01")
            },
            { // 상품리뷰 목록(작성가능)
                path: "/cowell/mo/MY_04_03_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_04_03_01")
            },
            { // 상품리뷰 목록(작성완료)
                path: "/cowell/mo/MY_04_03_02",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_04_03_02")
            },
            { // 찜한상품 목록
                path: "/cowell/mo/MY_04_04_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_04_04_01")
            },
            { // 찜한브랜드 목록
                path: "/cowell/mo/MY_04_05_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_04_05_01")
            },
            { // 비밀번호확인
                path: "/cowell/mo/MY_05_01_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_05_01_01")
            },
            { // 회원정보수정
                path: "/cowell/mo/MY_05_01_02",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_05_01_02")
            },
            { // 간편로그인연결
                path: "/cowell/mo/MY_05_02_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_05_02_01")
            },
            { // 회원등급안내
                path: "/cowell/mo/MY_05_03_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_05_03_01")
            },
            { // 배송지 목록
                path: "/cowell/mo/MY_05_04_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_05_04_01")
            },
            { // 회원탈퇴
                path: "/cowell/mo/MY_05_06_01",
                component: () => import("@/views/mo/MY/CW_MO_FO_MY_05_06_01")
            },
        ]
    },
    { //AP
        path: '/cowell/ap',
        component: () => import("@/views/ap/ap_wrap"),
        name: 'ap',
        children: [
            { // 메인인트로
                path: "/cowell/ap/CM_05_01_01",
                component: () => import("@/views/ap/AP/CW_MO_AP_CM_05_01_01")
            },
        ]
    },
    /* guice */
    {
        path: "/cowell/Guide/",
        component: () => import("@/guide/layout")
    },
    {
        path: "/cowell/Guide/form",
        component: () => import("@/guide/form")
    },
    {
        path: "/cowell/Guide/list",
        component: () => import("@/guide/list")
    },
    {
        path: "/cowell/Guide/element",
        component: () => import("@/guide/element")
    },
    {
        path: "/cowell/Guide/modal",
        component: () => import("@/guide/modal")
    },
    /* //guide */
    /* list */
    {
        path: "/cowell/List/",
        component: () => import("@/work/list")
    },
    /* //list */


    // test
    // {
    //     path: "/test/",
    //     component: () => import("@/views/test")
    // },
    // {
    //     path: "/test2/",
    //     component: () => import("@/views/test2")
    // },
    // {
    //     path: "/test3/",
    //     component: () => import("@/views/test3")
    // },
]
 
export default routes;