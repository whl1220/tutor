<template>
    <div id="body">
        <img id="cancel" src="../../assets/image/叉.png" alt="" @click="back()">
        <h2 id="title">注册</h2>
        <ul id="contain">
            <li class="list" >
                +86  |  <input type="tel" placeholder="请输入手机号" v-model="input2" @blur="blur3()">
            </li>
            <li class="list" >
                <input type="text" placeholder="请输入密码" v-model="input" @blur="blur()" minlength="1">
            </li>
            <li class="list" >
                <input type="text" placeholder="请确认密码" v-model="input1" @blur="blur2()"  minlength="1">
            </li>
            <li class="list" >
                <input type="text"  placeholder="请输入验证码" >
                <p class="getnum" v-if="show"  @click="getnum()">获取验证码</p>
                <p class="getnum" v-if="!show"  @click="getnum()">重新获取验证码
                    <span id="gettime">{{this.msg}}</span>
                </p>
            </li>
        </ul>
        <button id="submit" @click="submit">注册</button>
        <van-dialog v-model="tag" title="标题" show-cancel-button>
        </van-dialog>
        <section id="other">
            <span @click="signup">登录</span>
            <span>收不到验证码?</span>
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:true,
            msg:'',
            tag:false,
            input:'',
            input1:'',
            input2:'',
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
        signup(){
            this.$router.push('/signup')
        },
        submit(){
            this.$dialog.alert({
            message: '注册成功，请登录'
            }).then(()=>{
                setTimeout(()=>{
                    this.$router.push('/signup')
                },1000)
            })
        },
        back(){
            this.$router.push('/home')
        },
        blur(){
            var reg=/^[A-Za-z0-9]+$/;
            if(!reg.test(this.input)&&this.input.length){
            this.input='';
            alert('只支持数字或字母')
            }
        },
        blur2(){
            if(this.input1!=this.input&&this.input1.length){
                this.input1='';
                alert('两次密码输入不一致')
            }
        },
        blur3(){
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(this.input2)&&this.input2.length){
                this.input2='';
                alert('电话号码格式有误')
            }
        }
    },
    mounted(){
        
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
    height: 4.8rem;
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
.list:nth-child(4){
    border: none;
}
.list>input{
    width: 100%;
    height: 1rem;
    margin: .1rem;
    line-height: 1.0;
}
.list>input:nth-child(1),.list>input:nth-child(4){
    width: 5rem;
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
    margin: 1rem .2rem .2rem .2rem;
    border-radius: 5px;
}
#other{
    width: 100%;
    height: 1rem;
    position: relative;
}
#other span:nth-child(1){
    position: absolute;
    top: .2rem;
    left: .5rem;
    color: #27ac38;
}
#other span:nth-child(2){
    position: absolute;
    top: .2rem;
    right: .5rem;
}
</style>