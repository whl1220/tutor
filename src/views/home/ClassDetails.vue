<template>
    <div id="body">
        <div id="nav">
            <span id="arrow" @click="back()"></span>
            课程详情
            <img id="heart1" src="../../assets/image/收藏.png" alt="" v-if="tag" @click="turnRed()">
            <img id="heart2" src="../../assets/image/收藏1.png" alt="" v-if="!tag" @click="turnBlack()"  >
        </div>
        <li id="classlist">
            <section v-for="(item,index) in classimgs" :key="index">
                <img :src="item" alt="" id="climg">
            </section>
            <section id="clintro">
                <div>{{this.title}}</div>
                <div>￥{{this.price}}/时</div>
                <div>发布者：{{this.name}}</div>
            </section>
        </li>
        <li id="details">
            <div id="title">课程详情</div>
            <p class="info">授课主题： {{this.title}}</p>
            <p class="info">年级科目：{{this.grade}}/{{this.course}}</p>
            <p class="info">授课方式：{{this.way}}</p>
            <p class="info">授课地址：{{this.place}}</p>
            <p class="info">授课时间：{{this.time}}</p>
            <p class="info">联系方式：{{this.tel}}</p>
            <p class="info">学习简介：{{this.details}}</p>
            <p class="info">个人要求：{{this.demand}}</p>
        </li>
        <div id="foot">
            <li>
                <img src="../../assets/image/电话.png" @click="gocall">
                <van-dialog v-model="show2"  show-confirm-button close-on-click-overlay >
                </van-dialog>
                <p>电话</p>
            </li>
            <li>
                <img src="../../assets/image/留言.png" @click="gocomment">
                <p>留言</p>
            </li>
            <li>
                <button @click="goappointment">
                    立即预约
                </button>
                <van-dialog v-model="show1"  show-confirm-button close-on-click-overlay >
                </van-dialog>
            </li>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tag:1,
            title:'关于摩擦力的计算',
            name:'蔡某某',
            classimgs:[require('../../assets/image/stuimg.jpg')],
            price:100,
            grade:'高一',
            course:'物理',
            way:'面授',
            place:'harbin',
            time:'周六早8:00-9:00',
            tel:33333333,
            details:'本人是一名高一学生，物理基础良好，摩擦力部分有些疑点，望指教',
            demand:'希望找一个经验丰厚，基础讲解透彻的老师',        
            show1:false,
            show2:false,
        }
    },
    methods: {
        turnRed(){
            if(this.tag){
               this.tag=!this.tag;
            }
        },
        turnBlack(){
            if(!this.tag){
                this.tag=!this.tag;
            }
        },
        goappointment(){
            this.$dialog.alert({
            message: '预约成功'
            });
        },
        gocomment(){
            this.$router.push('/classcomment')
        },
        gocall(){
            this.$dialog.confirm({
                title: this.tel,
                message: '确认拨打此号码？'
                }).then(() => {
                // on confirm
                }).catch(() => {
                // on cancel
        })
        },
        back(){
            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>
    #body{
        width: 100%;
        height: 100%;
        background:#eeeeee;
    }
    #nav{
        width: 7.5rem;
        height: .7rem;
        background: #ffffff;
        line-height: 1.0;
        font-size: 20px;
        padding-top: .2rem;
        position: relative;
    }
    #arrow{
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border-bottom: 2px solid #333333;
        border-left: 2px solid #333333;
        transform: rotate(45deg);
        margin-left: .2rem;
    }
    #heart1{
        width: .5rem;
        height: .5rem;
        position: absolute;
        top: .2rem;
        right: .5rem;
    }
    #heart2{
        width: .5rem;
        height: .5rem;
        position: absolute;
        top: .2rem;
        right: .5rem;
    }
    #classlist{
        width: 7.5rem;
        height: 2rem;
        background: #ffffff;
        margin-top: .2rem;
        margin-bottom: .2rem;
        margin-left: 0;
        margin-right: 0;
        display: flex;
    }
    #climg{
        height: 1.8rem;
        margin-top: .1rem;
        margin-bottom: .1rem;
        margin-left: .2rem;
        margin-right:.2rem;
    }
    #clintro{
        margin-top: .2rem;
        flex-grow: 1;
    }
    #clintro>div:nth-child(1){
        font-size: 20px;
        font-weight: bold;
    }
    #clintro>div:nth-child(2){
        font-size: 20px;
        color: #27ac38
    }
    #details{
        width: 7.5rem;
        height: 10rem;
        background: #ffffff;
        margin-bottom: 2rem;
    }
    #title{
        margin-top: .1rem;
        margin-left: .1rem;
        margin-bottom: .2rem;
        font-size: 22px;
        font-weight: bold;
    }
    #details .info{
        margin-left: .3rem;
        margin-top: .3rem;
    }
    #foot{
        width: 7.5rem;
        height: 1.2rem;
        background: #ffffff;
    }
    #foot li{
        width: 2.5rem;
        float: left;
    }
    #foot li p{
        font-weight: bold;
        text-indent: .9rem;
    }
    #foot img{
        display: block;
        margin: 0 auto;
        width: .8rem;
        height: .8rem;
    }
    #foot button{
        width: 2.5rem;
        height: 1.2rem;
        background: #27ac38;
        color: #ffffff;
        margin: 0 auto;
        line-height: 1.2rem;
    }
</style>