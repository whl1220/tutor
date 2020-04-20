<template>
    <div id="search">
        <div class="header">
            <div> <img class="arrow" @click="goback" src="../../assets/image/arrow.png" alt=""></div>
            <input type="search" placeholder="请搜索关键词">
            <span >搜索</span>
        </div>

        <div class="calssfy">
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
              </van-dropdown-menu>
        </div>
        <div class="content" v-for="(item,index) in content" :key="index">
            <img class="people" :src="item.img" alt="">
                <div class="font">
                <div class="font1">{{item.font1}}</div>
                <div class="font2">{{item.font2}}</div>
                <div class="font3">{{item.font3}}</div>
                </div>
                <!-- <div class="font4">￥180/h</div> -->
        </div>
           
    </div>
</template>

<script>
    export default {
        data(){
            return{
                content:[
        {
            img:require("../../assets/image/huge.jpg"),
            font1:"牛顿三大定律在高考物理中的应用",
            font2:"XX大学/博士",
            font3:"高三/语文",
        },
        {
            img:require("../../assets/image/huge.jpg"),
            font1:"牛顿三大定律在高考物理中的应用",
            font2:"XX大学/博士",
            font3:"高三/语文",
        },
        {
            img:require("../../assets/image/huge.jpg"),
            font1:"牛顿三大定律在高考物理中的应用",
            font2:"XX大学/博士",
            font3:"高三/语文",
        }
    ],
            value1: 0,
            value2: 'a',
            value3:'A',
            option1: [
            { text: '全部', value: 0 },
            { text: '讲师', value: 1 },
            { text: '学生', value: 2 }
            ],
            option2: [
            { text: '年级', value: 'a' },
            { text: '小学1~5年级', value: 'b' },
            { text: '小学毕业班', value: 'c' },
            {text:'初一',value:'d'},
            {text:'初二',value:'f'},
            {text:'初三',value:'g'},
            {text:'高一',value:'h'},
            {text:'高二',value:'i'},
            {text:'高三',value:'j'},
            ],
            option3:[
            { text: '科目', value: 'A' },
            { text: '数学', value: 'B' },
            { text: '英语', value: 'C' },
            {text:'政治',value:'D'},
            {text:'历史',value:'E'},
            {text:'地理',value:'F'},
            {text:'物理',value:'G'},
            {text:'化学',value:'H'},
            {text:'生物',value:'I'},
            ]
            }
        },
        methods: {
        goback(){
            this.$router.push("/home")
        }
}
    }
    </script>
    
    <style lang="scss" scoped>
    #search{
        width:7.5rem;
        height:13.34rem;
        background:#ccc;
    }
    .header{
        display:flex;
        width:100%;
        height:1.29rem;
        background: #ffffff;
    }
    .arrow{
        width:0.32rem;
        height:0.32rem;
        margin-top: 0.68rem;
        margin-left:0.2rem;
    }
    input{
        width:6rem;
        height:0.6rem;
        font-size:0.24rem;
        border: 1px solid #ccc; 
        border-radius: 0.3rem;  
        padding-left:0.1rem;
        margin-top: 0.5rem;
    }
    span{
        font-size:0.24rem;
        color:#666666;
        margin-top: 0.64rem;
        margin-left:0.1rem;
    }
    .content{
        width:7.1rem;
        height:2rem;
        margin-top:0.15rem;
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        border-radius: 10px;
        background: #ffff;
        display: flex;
        overflow:hidden;
    }
    .people{
        width: 1.5rem;
        height:2rem;
    }
    .font{
        margin-left:0.15rem;
    }
    .font1{
        font-size:0.32rem;
    }
    .font2{
        font-size:0.28rem;
        margin-top: 0.2rem;
    }
    .font3{
        font-size:0.28rem;
        margin-top: 0.2rem;
    }
    .font3::after{
        content:"￥180/h";
        font-size:0.28rem;
        color:#f00000;
        margin-top:1.4rem;
        margin-left:1.5rem;
    }
    </style>
