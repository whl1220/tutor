<template>
    <div id="body">
        <div id="nav">
            <span id="arrow" @click="back"></span>
            教师详情
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
        <section id="message">
            <h2>留言</h2>
            <textarea>老师，请问你有时间吗？</textarea>
        </section>
        <button class="btn" @click="push">提交</button>
        <van-dialog v-model="show" title="留言成功" >
        </van-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            teacherimgs:[require('../../assets/image/teacherimg.jpg')],
            name:'胡某某',
            price:100,
            place:'哈尔滨高级中学',
            show:false
        }
    },
    methods:{
        push(){
            this.$dialog.alert({
                message:'留言成功'
            }).then(()=>{
                setTimeout(()=>{
                    this.$router.push('/teacherdetails')
                },1000)
            })
        },
        back(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    #body{
        width: 7.5rem;
        height: 13.34rem;
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
    #teacherlist{
        width: 7.5rem;
        height: 3rem;
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
        color: #27ac38
    }
    #message{
        width: 7.5rem;
        height: 3.6rem;
        margin-top: .2rem;
        background: #ffffff;
    }
    #message h2{
        margin: .2rem 3rem;
        margin-bottom: .1rem;
        font-weight: bold;
    }
    #message textarea{
        width: 7.1rem;
        height: 2.4rem;
        margin-left: .2rem;
        border: 1px solid #333333;
        text-indent: .6rem;
    }
    .btn{
        width: 2rem;
        height: 1.2rem;
        background: #27ac38;
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
        margin:1rem 2.6rem;
    }
</style>