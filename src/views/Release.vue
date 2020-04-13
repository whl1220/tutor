<template>
    <div id="release">
        <div class="top">
            <router-link to="/release/teacher" v-on:click="selectTeacher()">我要当老师</router-link>
            <router-link to="/release/student" v-on:click="selectStudent()">我要找老师</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"zcy",
        }
    },
    methods:{
        selectTeacher:function(){
            
        },
        selectStudent:function(){
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .top{
        display: flex;
        // width: 100%;
        height: 50px;
        margin-bottom: 1px;
        border: none;
        background-color: #ffffff;
        a{
            width: 50%;
            height: 100%;
            text-align: center;
            line-height: 50px;
            color: black;
        }
        .router-link-active{
            color: #ffffff;
            background-color: #29AC38;
        }
    }
</style>