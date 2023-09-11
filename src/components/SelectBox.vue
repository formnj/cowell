<template>
    <label class="select">
        <div>
            <select :class="{'changed':isChange}" :v-model="model" @change="isChange = true" :disabled="isDisabled">
                <option :value="select.val" v-for="(select, i) in options" :key="i">{{ select.txt }}</option>
            </select>
        </div>
    </label>
</template>
  
<script>

export default {
    name: "SelectBox",
    components: {
    },
    props: {
        options:Array,
        model:String,
        isChange: false,
        isDisabled: false,
    },
    mounted() {
        $(document).ready(function () {});
    },
};
</script>

<style scoped>
/* select_form */
select {width:100%; height:46px; padding:12px 40px 12px 12px; font-size:14px; line-height:18px; border:1px solid #aaa; -webkit-appearance:none; -moz-appearance:none; appearance:none; outline:none;}

label.select > div {position:relative; display:block;}
label.select > div:after {width:12px; height:12px; margin-top:-4px; border:1px solid #222; border-top:0; border-left:0; content:''; position:absolute; top:50%; right:16px; transform:translateY(-50%) rotate(45deg);}
label.select select {color:#aaa;}
label.select select:disabled {background-color:#eee; border-color:#ddd;}
label.select select.changed {color:#222;}
label.select > em {margin-top:5px; color:#F24F39; font-size:12px; font-family:'Noto Sans'; line-height:18px; display:none;}
label.select.err > em {display:block;}
</style>