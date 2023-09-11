<template>
    <div>
        <div class="brand_layer">
            <div class="brand_thumb">
                <ul>
                    <li v-for="(item, index) in brand_thumb" :key="index">
                        <span class="thumb">
                            <em><img :src="item.img" /></em>
                        </span>
                        <Inputs  input_type="checkbox" id="아이디" :text="item.brand" :checked="item.checked" />
                    </li>
                </ul>
            </div>
            <div class="brand_cate">
                <ul>
                    <li v-bind:class="{ current: cateidx === index }" v-for="(i, index) in brand_cate" :key="i.item">
                        <a hre="#none" v-on:click="cateidx = index">{{ i.cate }}</a>
                    </li>
                </ul>
            </div>
            <div class="brand_list">
                <ul>
                    <li v-for="(item, index) in brand_list" :key="index">
                        <Inputs  input_type="checkbox" id="아이디" :text="item.brand" :checked="item.checked" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
import Inputs from "@/components/Inputs.vue";

export default {
    components: {
        Inputs
    },
    data() {
        return {
            brand_thumb: [
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "FIFA OLP" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "Ourplace" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "NASA" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "BBC" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "FIFA OLP" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "Ourplace" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "NASA" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "BBC" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "FIFA OLP" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "Ourplace" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "NASA" },
                {img: require("@/assets/images/pc/sample/visual01.png"), brand: "BBC" },
            ],
            cateidx: 0,
            brand_cate: [
                {cate:"전체"},
                {cate:"언더웨어"},
                {cate:"스포츠웨어"},
                {cate:"골프웨어"},
                {cate:"키즈"}
            ],
            brand_list: [
                {brand: "아디다스 퍼포먼스", checked: 'checked' },
                {brand: "아디다스 오리지널", checked: '' },
                {brand: "푸마 바디웨어", checked: '' },
                {brand: "컬럼비아 언더", checked: '' },
                {brand: "노티카", checked: '' },
                {brand: "띵크", checked: '' },
                {brand: "라코스테", checked: '' },
                {brand: "리복 키즈", checked: '' },
                {brand: "리복 스포츠", checked: '' },
                {brand: "밀레골프", checked: '' },
                {brand: "아디다스 퍼포먼스", checked: '' },
                {brand: "아디다스 오리지널", checked: '' },
                {brand: "푸마 바디웨어", checked: '' },
                {brand: "컬럼비아 언더", checked: '' },
                {brand: "노티카", checked: '' },
                {brand: "띵크", checked: '' },
                {brand: "라코스테", checked: '' },
                {brand: "리복 키즈", checked: '' },
                {brand: "리복 스포츠", checked: '' },
                {brand: "밀레골프", checked: '' },
            ],
        };
    },
    mounted(){
        wheel('.brand_thumb');
        $.fn.hasScrollBar = function() {
            return (this.prop("scrollWidth") == 0 && this.prop("clientWidth") == 0) || (this.prop("scrollWidth") > this.prop("clientWidth"));
        }; // 좌우 스크롤이 있는지 없는지 여부 검사
        function wheel(name){
            $(name).on('mousewheel',function(e){
                var hasScroll = $(this).hasScrollBar();
                if(!hasScroll){ //스크롤이 없으면 그냥 일반 스크롤
                }else{ //있으면 아래 스크롤 받는값을 없애고 좌우스크롤
                    e.preventDefault(); 
                    var wheelDelta = e.originalEvent.wheelDelta;
                    if(wheelDelta > 0){
                        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
                    }else{
                        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
                    }
                }
            });
        }
    }
}
</script>

<style scoped>
.brand_layer {background-color:#fff; display:none;}
.brand_layer.active {position:absolute; top:122px; right:0; left:0; z-index:9; display:block;}

.brand_layer::v-deep .check input[type='checkbox'] {width:10px; height:10px; border:0; -webkit-appearance:none; -moz-appearance:none; appearance:none;}
.brand_layer::v-deep .check input[type='checkbox'] + .label:before {width:14px; height:14px; background-color:transparent; background-image:url('@/assets/images/pc/common/icon_wish.png'); background-position:50% 0; background-repeat:no-repeat; background-size:14px auto; border:0; top:2px;}
.brand_layer::v-deep .check input[type='checkbox']:checked + .label:before {background-position:50% 100%;}
.brand_layer::v-deep .check input[type='checkbox'] + .label:after {display:none;}

.brand_thumb {overflow:auto;}
/* .brand_thumb::-webkit-scrollbar {height:4px; display:block;}
.brand_thumb::-webkit-scrollbar-thumb {background-color:#ccc; border-radius:2px; display:block;}
.brand_thumb::-webkit-scrollbar-track {height:4px; background-color:#eee; border-radius:2px;} */

.brand_thumb ul {padding:20px 0; display:flex;}
.brand_thumb ul::-webkit-scrollbar, .brand_thumb ul::-webkit-scrollbar {display:none !important;}
.brand_thumb li {flex:0 0 auto; text-align:center;}
.brand_thumb .thumb {width:64px; height:64px; margin:0 auto; border-radius:50%; overflow:hidden; position:relative; display:block;}
.brand_thumb .thumb em {position:absolute; top:0; right:0; bottom:0; left:0; display:flex; align-items:center;}
.brand_thumb::v-deep .check {margin-top:10px; font-size:12px; font-weight:600; line-height:16px;}

.brand_thumb::v-deep .label {text-align:left;}

.brand_cate ul {overflow-x:auto; display:flex;}
.brand_cate li {flex:0 0 auto;}
.brand_cate li.current a {font-weight:700;}

.brand_list {padding-top:10px; border-top:1px solid #ddd;}
.brand_list::v-deep ul {padding:0 0 70px; display:flex; flex-wrap:wrap;}
.brand_list::v-deep li { margin:10px 0; font-size:16px;}


@media screen and (max-width:1023px){
    .brand_layer {padding:0 20px; background-color:#fff; position:fixed; right:0; bottom:0; left:0; z-index:9;}

    .brand_layer::v-deep .check input[type='checkbox'] {width:10px; height:10px;}
    .brand_layer::v-deep .check input[type='checkbox'] + .label:before {width:14px; height:14px; background-image:url('@/assets/images/pc/common/icon_wish.png'); background-position:50% 0; background-repeat:no-repeat; background-size:14px auto; border:0; top:2px;}
    .brand_layer::v-deep .check input[type='checkbox']:checked + .label:before {background-position:50% 100%;}
    .brand_layer::v-deep .check input[type='checkbox'] + .label:after {display:none;}

    .brand_thumb {margin:0 -12px;}
    .brand_thumb li {width:25%;}

    .brand_cate {display:none;}

    .brand_list::v-deep ul {max-height:260px; margin-right:-20px; padding:0 20px 70px 0; overflow-y:auto; display:flex; flex-wrap:wrap;}
    .brand_list::v-deep li {width:50%; margin:10px 0; font-size:16px;}
}
</style>