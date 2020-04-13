<template >
    <div id="body">
        <div id="nav">
            <span id="arrow" @click="back()"></span>
            教师详情
            <img id="heart1" src="../../assets/image/收藏.png" alt="" v-if="tag" @click="turnRed()">
            <img id="heart2" src="../../assets/image/收藏1.png" alt="" v-if="!tag" @click="turnBlack()"  >
        </div>
        <li id="teacherlist">
            <section v-for="(item,index) in teacherimgs" :key="index">
                <img :src="item" alt="" id="tlimg">
            </section>
            <section id="tlintro">
                <div>{{this.name}}</div>
                <div>￥{{this.price}}/时</div>
                <div>{{this.place}}</div>
            </section>
        </li>
        <li id="teacherinfo">
            <h2 class="title">教师简介</h2>
            <div class="detail">一级教师，哈尔滨市小语学会会员，哈尔滨市学科带头人、教学科研先进个人、小语中心组成员。</div>
        </li>
        <li id="teacherhonor">
            <h2 class="title">荣誉证书</h2>
            <div v-for="(item,index) in imgs" :key="index">
                <img class="honorimg" :src='item' alt="">
            </div>
        </li>
        <li id="classinfo">
            <h2 class="title">授课信息</h2>
            <div class="classinfo" v-for="(item,index) in classinfo" :key="index">
                <p>科目年级：{{item.grade}}/{{item.course}}</p>
                <p>授课方式：{{item.way}}</p>
                <p>授课时间：{{item.time}}</p>
            </div>
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
            teacherimgs:[require('../../assets/image/teacherimg.jpg')],
            tag:1,
            name:'胡某某',
            price:100,
            place:'哈尔滨高级中学',
            tel:8866886,
            imgs:[require('../../assets/image/honor.jpg')],
            classinfo:[{
                grade:'高一',
                course:'语文',
                way:'面授',
                time:'周六早8:00-10:00'
            }],
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
            this.$router.push('/teachercomment')
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
    },
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
    #teacherlist{
        width: 7.5rem;
        height: 2rem;
        background: #ffffff;
        margin-top: .2rem;
        margin-bottom: .2rem;
        margin-left: 0;
        margin-right: 0;
        display: flex;
    }
    #tlimg{
        height: 1.8rem;
        margin-top: .1rem;
        margin-bottom: .1rem;
        margin-left: .2rem;
        margin-right:.2rem;
    }
    #tlintro{
        margin-top: .2rem;
        flex-grow: 1;
    }
    #tlintro>div:nth-child(1){
        font-size: 20px;
        font-weight: bold;
    }
    #tlintro>div:nth-child(2){
        font-size: 20px;
        font-weight: bold;
        color: #27ac38
    }
    #teacherinfo{
        width: 7.5rem;
        height: 2rem;
        background: #ffffff;
        margin-bottom: .2rem;
    }
    .title{
        font-size: 20px;
        font-weight: bold;
        margin-left: .2rem;
    }
    .detail{
        margin-left: .2rem;
        margin-right: .2rem;
        text-indent: .6rem;
    }
    #teacherhonor{
        width: 7.5rem;
        height: 3rem;
        background: #ffffff;
        margin-bottom: .2rem;
    }
    .honorimg{
        width: 3rem;
        margin-top: .2rem;
        margin-left: .2rem;
    }
    #classinfo{
        width: 7.5rem;
        height: 3rem;
        background: #ffffff;
        margin-bottom: 1rem;
    }
    .classinfo{
        margin: .2rem .2rem .2rem .8rem;
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
    .van_dialog{
        background: #27ac38;
        color: #ffffff;
        font-size: 20px;
    }

</style>

