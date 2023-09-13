<template>
    <div class="content join_wrap">
        <h2>회원가입</h2>
        <div>
            <h3>회원정보입력</h3>
            <!-- 통합회원 -->
            <p class="explain">통합회원으로 전환하시면 기존 포인트 전환이 가능하고, 쿠폰, 포인트 적립 등 다양하고 푸짐한 혜택이 적용됩니다.<br/> 통합회원전환 문의 : 02-6390-8000 (내선3번)</p>
            <dl class="tip_box mt20">
                <dd>기존회원정보 (사이트명/아이디/이름/보유포인트)<br/> 코웰패션 : aaaa1*** / 손*민 / 35,000<br/> 아워플레이스 : qqqq4*** / 김*재 / 13,000<br/> 피파OLP : gggg1*** / 황*찬 / 4,300</dd>
            </dl>
            <!-- //통합회원 -->
            <ul class="form_group">
                <li>
                    <p class="form_tit required">아이디</p>
                    <div class="multi_form">
                        <div>
                            <Inputs  input_type="text" id="아이디" placeholder="6~20자리, 영문과 숫자" err_text="에러문구" value="" />
                            <a href="#none" class="btn_mid btn_default" @click.prevent="openModal('modalSkin'), modalType=''">중복확인</a>
                        </div>
                        <em>에러문구</em>
                    </div>
                    <!-- 23.04.03 추가 유효성 체크 -->
                    <p class="validation_chk">
                        <span class="pass">6~20자의 영문 or 숫자</span><!-- 통과 시 pass 클래스 추가 -->
                        <span>아이디 중복확인</span>
                    </p>
                    <!-- //23.04.03 추가 유효성 체크 -->
                </li>
                <li>
                    <p class="form_tit required">비밀번호</p>
                    <Inputs class="err explain"  input_type="password" id="비밀번호" placeholder="영문+숫자+특수문자 조합 8자이상" err_text="영문, 숫자, 특수문자 3가지 조합 8자리 이상" value="" />
                    <!-- 23.04.03 추가 유효성 체크 -->
                    <p class="validation_chk">
                        <span class="pass">영문포함</span><!-- 통과 시 pass 클래스 추가 -->
                        <span class="pass">숫자포함</span>
                        <span>특수문자</span>
                        <span>8~20자이내</span>
                    </p>
                    <!-- //23.04.03 추가 유효성 체크 -->
                </li>
                <li>
                    <p class="form_tit required">비밀번호 확인</p>
                    <Inputs :isError="true" input_type="password" id="비밀번호확인" placeholder="한번 더 입력해주십시오." err_text="동일한 비민번호를 입력하세요." value="" />
                </li>
                <li class="txt_wrap">
                    <p class="form_tit">이름</p>
                    <span>김나나</span>
                </li>
                <li class="txt_wrap">
                    <p class="form_tit">전화번호</p>
                    <span>010-0000-0000</span>
                </li>
                <li>
                    <p class="form_tit required">이메일</p>
                    <div class="multi_form">
                        <div>
                            <Inputs input_type="text" id="이메일입력" placeholder="이메일 입력" err_text="에러문구" value="cowell12345@daum.net" />
                            <a href="#none" class="btn_mid btn_default" @click.prevent="openModal('modalSkin'), modalType=''">중복확인</a>
                        </div>
                        <em>에러문구</em>
                    </div>
                </li>
                <li>
                    <p class="form_tit required">생년월일</p>
                    <div class="date_form err"><!-- error 시 클래스 err 추가 -->
                        <SelectBox :options="opt_day" model="Day"/>
                        <SelectBox :options="opt_month" model="Month"/>
                        <SelectBox :options="opt_year" model="Year"/>
                    </div>
                    <p class="info_explain">입력하신 생일 15일전 10,000원 생일쿠폰이 발급됩니다.<br/> 입력하신 생일이 15일 이내일 경우 쿠폰이 발급되지 않습니다.<br/> 생년월일은 수정이 불가능하니 정확히 입력바랍니다.</p>
                </li>
                <li>
                    <p class="form_tit required">성별</p>
                    <ul class="check_group radio">
                        <li><Inputs  input_type="radio" id="여성" text="여성" /></li>
                        <li><Inputs  input_type="radio" id="남성" text="남성" /></li>
                    </ul>
                </li>
            </ul>
            <h3>선택항목</h3>

            <ul class="form_group">
                <li>
                    <p class="form_tit">추천인ID</p>
                    <Inputs  input_type="text" id="추천인id" placeholder="" err_text="에러문구" value="" />
                    <p class="explain">추천인(가입시 1회), 추천받은자 모두에게 2,500 포인트가 지급됩니다. (추천받은분은 최대 10회까지 가능)<br/> 추천인ID를 잘못 입력시 포인트가 지급되지 않습니다.</p>
                </li>
                <li>
                    <p class="form_tit">관심카테고리</p>
                    <ul class="check_group">
                        <li><Inputs  input_type="checkbox" id="관심카테고리_01" text="UNDERWEAR" checked="checked" /></li>
                        <li><Inputs  input_type="checkbox" id="관심카테고리_02" text="WOMEN" /></li>
                        <li><Inputs  input_type="checkbox" id="관심카테고리_03" text="MEN" /></li>
                        <li><Inputs  input_type="checkbox" id="관심카테고리_04" text="KIDS" /></li>
                    </ul>
                </li>
                <li>
                    <p class="form_tit">관심브랜드</p>
                    <ul class="check_group">
                        <li><Inputs  input_type="checkbox" id="관심브랜드_01" text="FIFA OLP" /></li>
                        <li><Inputs  input_type="checkbox" id="관심브랜드_02" text="Ourplace" /></li>
                    </ul>
                </li>
                <li>
                    <!-- 23.04.03 삭제 <p class="form_tit">언더웨어</p> -->
                    <ul class="check_group">
                        <li><Inputs  input_type="checkbox" id="언더웨어_01" text="띵크" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_02" text="아디다스 오리지널" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_03" text="아디다스 퍼포먼스" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_04" text="푸마 바디웨어" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_05" text="리복" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_06" text="컬럼비아" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_07" text="캘빈클라인" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_08" text="엔포리오 아르마니" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_09" text="DKNY 언더웨어" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_10" text="폴스미스" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_11" text="라코스테" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_12" text="바나나 리퍼블릭" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_13" text="밀레" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_14" text="헤드" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_15" text="노티카" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_16" text="아테스토니" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_17" text="셀마크" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_18" text="본스텔라" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_19" text="이젠벅 언더웨어" /></li>
                        <li><Inputs  input_type="checkbox" id="언더웨어_20" text="몽벨 언더웨어" /></li>
                    </ul>
                </li>
                <li>
                    <!-- 23.04.03 삭제 <p class="form_tit">스포츠</p> -->
                    <ul class="check_group">
                        <li><Inputs  input_type="checkbox" id="스포츠_01" text="푸마스포츠" /></li>
                        <li><Inputs  input_type="checkbox" id="스포츠_02" text="리복스포츠" /></li>
                        <li><Inputs  input_type="checkbox" id="스포츠_03" text="아디다스 스포츠" /></li>
                        <li><Inputs  input_type="checkbox" id="스포츠_04" text="캘빈클라인 퍼포먼스" /></li>
                        <li><Inputs  input_type="checkbox" id="스포츠_05" text="이젠벅" /></li>
                    </ul>
                </li>
                <li>
                    <!-- 23.04.03 삭제 <p class="form_tit">골프</p> -->
                    <ul class="check_group">
                        <li><Inputs  input_type="checkbox" id="골프_01" text="푸마골프" /></li>
                        <li><Inputs  input_type="checkbox" id="골프_02" text="밀레골프" /></li>
                        <li><Inputs  input_type="checkbox" id="골프_03" text="JDX" /></li>
                        <li><Inputs  input_type="checkbox" id="골프_04" text="아다바트" /></li>
                        <li><Inputs  input_type="checkbox" id="골프_05" text="DKNY" /></li>
                        <li><Inputs  input_type="checkbox" id="골프_06" text="쥬시꾸띄르 골프" /></li>
                    </ul>
                </li>
                <li>
                    <!-- 23.04.03 삭제 <p class="form_tit">패션잡화</p> -->
                    <ul class="check_group">
                        <li><Inputs  input_type="checkbox" id="패션잡화_01" text="어그" /></li>
                        <li><Inputs  input_type="checkbox" id="패션잡화_02" text="센존" /></li>
                        <li><Inputs  input_type="checkbox" id="패션잡화_03" text="노티카 패션" /></li>
                        <li><Inputs  input_type="checkbox" id="패션잡화_04" text="아테스토니 패션" /></li>
                        <li><Inputs  input_type="checkbox" id="패션잡화_05" text="EA7" /></li>
                        <li><Inputs  input_type="checkbox" id="패션잡화_06" text="버커루" /></li>
                        <li><Inputs  input_type="checkbox" id="패션잡화_07" text="나이키 선글라스" /></li>
                    </ul>
                </li>
                <li>
                    <!-- 23.04.03 삭제 <p class="form_tit">키즈</p> -->
                    <ul class="check_group">
                        <li><Inputs  input_type="checkbox" id="키즈_01" text="리복키즈" /></li>
                        <li><Inputs  input_type="checkbox" id="키즈_02" text="푸마키즈" /></li>
                    </ul>
                </li>
                <!-- 임직원 -->
                <li>
                    <p class="form_tit">회사명</p>
                    <SelectBox :options="company" model="company"/>
                </li>
                <!-- //임직원 -->
            </ul>

            <div class="btnSection">
                <a href="#none" class="btn_big btn_confirm" @click.prevent="openModal('modalSkin'), modalType='join_complete'"><em>회원가입</em></a>
            </div>
        </div>

        <ModalSkin :modalTitle="modalTitle">
            <join_complete v-if="modalType == 'join_complete'"></join_complete>
            <duplicateChk v-if="modalType != 'join_complete'"></duplicateChk>
        </ModalSkin>
    </div>
</template>

<script>
    import Inputs from "@/components/Inputs.vue";
    import SelectBox from "@/components/SelectBox.vue";
    import ModalSkin from "@/components/ModalSkin"

    import join_complete from "@/views/mo/MB/CW_MO_FO_MB_12_01_01";
    import duplicateChk from "@/views/mo/MB/CW_MO_FO_MB_12_01_02";

    export default {
        name: 'App',
        components: {
            Inputs,
            SelectBox,
            join_complete,
            duplicateChk,
            ModalSkin,
        },
        data() {
            return {
                isChange: false,
                opt_day: [
                    { val: "", txt: "Day" },
                    { val: "01", txt: "01" },
                    { val: "02", txt: "02" },
                ],
                opt_month: [
                    { val: "", txt: "Month" },
                    { val: "01", txt: "01" },
                    { val: "02", txt: "02" },
                    { val: "03", txt: "03" },
                    { val: "04", txt: "04" },
                    { val: "05", txt: "05" },
                    { val: "06", txt: "06" },
                    { val: "07", txt: "07" },
                    { val: "08", txt: "08" },
                    { val: "09", txt: "09" },
                    { val: "10", txt: "10" },
                    { val: "11", txt: "11" },
                    { val: "12", txt: "12" },
                ],
                opt_year: [
                    { val: "", txt: "Year" },
                    { val: "2019", txt: "2019" },
                    { val: "2020", txt: "2020" },
                    { val: "2021", txt: "2021" },
                    { val: "2022", txt: "2022" },
                    { val: "2023", txt: "2023" },
                ],
                Day:'',
                company: [
                    { val: "cowell", txt: "코웰패션" },
                    { val: "cowell", txt: "코웰" },
                ],
                modalType: String,
                modalTitle: '',
                modalContent: '',
            };
        },
        methods: {
            changeColor() {
                alert(this.color);
            },
            openModal (name) {
                this.$modal.show(name)
                /* 23.03.27 팝업 활성화 시 body 고정 */
                document.querySelector('body').classList.add('fixed')
            },
        },
        mounted(){
        }
    }
</script>

<style scoped>
.content * + h3 {margin-top:50px; padding-top:50px; border-top:1px solid #eee;}
</style>
