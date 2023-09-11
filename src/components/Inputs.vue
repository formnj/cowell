<template>
    <label v-if="input_type == 'radio' || input_type == 'checkbox'" class="check">
        <input :type="input_type" :id="id" :value="value" :checked="checked" />
        <em class="label">
            <i v-if="required_txt" :class="required_type">{{ required_txt }}</i>
            {{text}}
        </em>
    </label>
    <div v-else class="label_wrap">
        <label class="input" :class="{'err':isError}"><i v-if="placeholder && !isDisabled">{{placeholder}}</i><input :type="input_type" :id="id" :value="value" @focus="hidePlaceholder" @blur="valueChk" :readonly="readonly" :disabled="isDisabled" /><em>{{err_text}}</em></label>
    </div>
</template>
  
<script>

export default {
    components: {
    },
    props: {
        input_type: String,
        checked: String,
        id: String,
        value: '',
        text: String,
        placeholder: '',
        err_text: String,
        required_type: String,
        required_txt: String,
        readonly: false,
        isError:false,
        isDisabled:false,
    },
    mounted() {
    },
    methods:{
        hidePlaceholder(e){
            e.currentTarget.previousSibling.style.display='none'
        },

        valueChk(e){
            if(e.currentTarget.value.length > 0){
                e.currentTarget.previousSibling.style.display='none';               
            } else {
                e.currentTarget.previousSibling.style.removeProperty('display');
            }
        }
    },
};
</script>

<style scoped>
input {vertical-align:middle;}

input[type="text"], input[type="email"], input[type="number"], input[type="tel"], input[type="password"], input[type="url"], input[type="search"], input[type="file"], textarea {padding:16px 12px; background-color:#fff; border:1px solid #aaa; border-radius:0; -webkit-appearance:none; -moz-appearance:none; -ms-appearance:none; -o-appearance:none;}

label.input {position:relative; display:block;}
label.input i {color:#aaa; font-size:16px; line-height:18px; position:absolute; top:19px; left:15px;}/* placeholder */
label.input input[type='text'], label.input input[type='password'], label.input input[type='number'] {width:100%; font-size:16px; line-height:18px;}
label.input input:disabled {color:#aaa; background-color:#eee; border-color:#ddd;}
label.input > em {margin-top:10px; color:#00C294; font-size:12px; line-height:18px; display:none;}
label.input.err > em {display:block;}
label.input * {flex:1 auto;}

@media screen and (max-width:1023px) {
    input[type="text"], input[type="email"], input[type="number"], input[type="tel"], input[type="password"], input[type="url"], input[type="search"], input[type="file"], textarea {padding:13px 12px;}

    .check .label {font-size:12px; line-height:16px;}
    .check .label.text_big {font-size:12px; line-height:16px;}

    label.input i {color:#aaa; font-size:14px; line-height:18px; position:absolute; top:15px; left:12px;}/* placeholder */
    label.input input[type='text'], label.input input[type='password'], label.input input[type='number'] {width:100%; font-size:14px; line-height:18px;}
    label.input.err > em {display:block;}
    label.input.explain > em {color:#00C293;}
    label.input * {flex:1 auto;}
}
</style>