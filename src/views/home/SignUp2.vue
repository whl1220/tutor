<template>
    <div id="body">
        <img id="cancel" src="../../assets/image/叉.png" alt="" @click="back()">
        <h2 id="title">登录</h2>
        <ul id="contain">
            <li class="list" >
                <input type="tel" placeholder="手机号">
            </li>
            <li class="list" >
                <input type="text"  placeholder="请输入验证码" @blur="blur()" v-model="input">
                <p class="getnum" v-if="show"  @click="getnum()">获取验证码</p>
                <p class="getnum" v-if="!show"  @click="getnum()">重新获取验证码
                    <span id="gettime">{{this.msg}}</span>
                </p>
            </li>
        </ul>
        <button id="submit" @click="submit()">登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:true,
            msg:'',
            input:''
        }
    },
    methods:{
        getnum(){
            this.show=false;
            var time=60;
            var set=setInterval(()=>{
                time--;
                this.msg=time;
                if(time === 0) {
                    this.msg='';
                    clearInterval(set);
                }
            },1000)
        },
        submit(){
            this.$dialog.alert({
            message: '登录成功'
            }).then(()=>{
                setTimeout(()=>{
                    this.$router.push('/home')
                },1000)
            })
        },
        back(){
            this.$router.push('/signup')
        },
        blur(){
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(this.input)&&this.input.length){
                this.input='';
                alert('电话号码格式有误')
            }
        }
    }
}
</script>

<style scoped>
#cancel{
    display: block;
    width: .5rem;
    height: .5rem;
    margin-top: .2rem;
    margin-left: .2rem;
}
#title{
    font-weight: bold;
    margin-top: .5rem 0;
    margin-left: 3rem;
}
#contain{
    width: 6.7rem;
    height: 2.4rem;
    margin-top: .5rem;
    margin-left: .4rem;
    margin-bottom: .4rem;
    border: 1px solid #000000;
    border-radius: .1rem;
}
.list{
    width: 6.5rem;
    height: 1.2rem;
    border-bottom: 1px solid #000000;
    padding-left: .2rem;
    overflow: hidden;
    position: relative;
}
.list:nth-child(2){
    border: none;
}
.list>input{
    width: 100%;
    height: 1rem;
    margin: .1rem;
    line-height: 1.0;
}
.getnum{
    position: absolute;
    top: .4rem;
    right: .2rem;
    color: #27ac38;
}
#submit{
    width: 7.1rem;
    height: 1.2rem;
    background: #27ac38;
    line-height: 1.0;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin: .5rem .2rem .2rem .2rem;
    border-radius: 5px;
}
</style>