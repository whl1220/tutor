<template>
    <div id="release-student">
        <van-form @submit="onSubmit">
            <van-field v-model="theme" label="发布主题" placeholder="请输入课程主题"/>
            <van-field v-model="grade" label="科目年级" placeholder="选择年级" 
                :value="grade" @click="gradePicker = true"/>
            <van-field v-model="pay" label="辅导薪资" placeholder="请输入课时费" type="number">
                <template #button>
                    <div>/小时</div>
                </template>
            </van-field>
            <van-field v-model="way" label="授课方式" placeholder="选择授课方式"
            :value="way" @click="wayPicker = true"/>
            <van-field v-model="time" label="授课时间" placeholder="请输入授课时间"
                rows="2" autosize maxlength="50" type="textarea"/>
            <van-field v-model="tel" label="联系方式" placeholder="请输入手机号" type="tel"/>
            <van-field v-model="introduction" label="讲师要求" placeholder="简单描述一下你对讲师的要求"
                rows="5" autosize type="textarea"/>
            <div style="margin: 16px;" class="btnSubmit">
                <van-button round block type="info" color="#29AC38" native-type="submit">发布</van-button>
            </div>
        </van-form>
        <van-popup v-model="gradePicker" position="bottom">
            <van-picker
            show-toolbar
            :columns="gradeColumns"
            @cancel="gradePicker = false"
            @confirm="gradeConfirm"
            />
        </van-popup>
        <van-popup v-model="wayPicker" position="bottom">
            <van-picker
            show-toolbar
            :columns="wayColumns"
            @cancel="wayPicker = false"
            @confirm="wayConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            theme: '',
            grade: '',
            gradePicker: false,
            gradeColumns: ['小学', '初一', '初二', '初三','高一','高二','高三'],
            pay: '',
            way: '',
            wayPicker: false,
            wayColumns: ['面授/网课','上门面授', '网上直播'],
            time: '',
            tel:'',
            profession: '',
            introduction: '',
        }
    },
    methods:{
        onSubmit(values) {
            console.log('submit', values);
        },
        gradeConfirm(value) {
            this.grade = value;
            this.gradePicker = false;
        },
        wayConfirm(value){
            this.way = value;
            this.wayPicker = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .btnSubmit{
        margin-bottom: 100px;
    }
</style>